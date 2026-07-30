import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
        // Game state
        let board = ['', '', '', '', '', '', '', '', ''];
        let currentPlayer = 'X';
        let gameActive = true;
        let gameMode = 'pvp';
        let difficulty = 'medium';
        let scores = { X: 0, O: 0, ties: 0 };
        let playerIcons = { X: 'x', O: 'circle' };
        let isThinking = false;

        // Initialize Lucide icons
        lucide.createIcons();

        // Game logic
        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        // DOM elements
        const gameBoard = document.getElementById('gameBoard');
        const gameStatus = document.getElementById('gameStatus');
        const resetBtn = document.getElementById('resetBtn');
        const resetScoreBtn = document.getElementById('resetScoreBtn');
        const pvpMode = document.getElementById('pvpMode');
        const pvbMode = document.getElementById('pvbMode');
        const difficultySelector = document.getElementById('difficultySelector');
        const customizeBtn = document.getElementById('customizeBtn');
        const customizationPanel = document.getElementById('customizationPanel');
        const customizeChevron = document.getElementById('customizeChevron');
        const customizeBtnText = document.getElementById('customizeBtnText');

        // Event listeners
        gameBoard.addEventListener('click', handleCellClick);
        resetBtn.addEventListener('click', resetGame);
        resetScoreBtn.addEventListener('click', resetScore);
        pvpMode.addEventListener('click', () => setGameMode('pvp'));
        pvbMode.addEventListener('click', () => setGameMode('pvb'));
        customizeBtn.addEventListener('click', toggleCustomization);

        // Difficulty buttons
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                difficulty = e.target.dataset.difficulty;
                document.querySelectorAll('.difficulty-btn').forEach(b => {
                    b.classList.remove('bg-blue-600', 'text-white', 'shadow-lg');
                    b.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                });
                e.target.classList.add('bg-blue-600', 'text-white', 'shadow-lg');
                e.target.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                document.getElementById('difficultyLabel').textContent = 
                    difficulty === 'easy' ? 'Beginner' : difficulty === 'medium' ? 'Intermediate' : 'Expert';
            });
        });

        // Icon selection
        document.querySelectorAll('.icon-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const player = e.currentTarget.dataset.player.toUpperCase();
                const icon = e.currentTarget.dataset.icon;
                playerIcons[player] = icon;
                
                // Update visual feedback
                document.querySelectorAll(`.icon-btn[data-player="${player.toLowerCase()}"]`).forEach(b => {
                    b.classList.remove('bg-blue-100', 'bg-red-100', 'ring-2', 'ring-blue-500', 'ring-red-500');
                    b.classList.add('bg-gray-100');
                });
                
                const colorClass = player === 'X' ? 'bg-blue-100' : 'bg-red-100';
                const ringClass = player === 'X' ? 'ring-blue-500' : 'ring-red-500';
                e.currentTarget.classList.add(colorClass, 'ring-2', ringClass);
                
                // Update score board icons
                const scoreIcon = document.getElementById(`scoreIcon${player}`);
                scoreIcon.setAttribute('data-lucide', icon);
                lucide.createIcons();
                
                updateGameDisplay();
            });
        });

        // Theme selection
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const theme = e.currentTarget.dataset.theme;
                const body = document.getElementById('gameBody');
                
                // Remove all theme classes
                body.classList.remove('theme-purple', 'theme-blue', 'theme-green', 'theme-orange', 'theme-dark', 'theme-sunset', 'theme-fire', 'theme-cosmic', 'theme-forest');
                body.classList.add(`theme-${theme}`);
                
                // Update visual feedback
                document.querySelectorAll('.theme-btn').forEach(b => {
                    b.classList.remove('bg-blue-200', 'ring-2', 'ring-blue-500');
                    b.classList.add('bg-gray-100');
                });
                e.currentTarget.classList.add('bg-blue-200', 'ring-2', 'ring-blue-500');
                e.currentTarget.classList.remove('bg-gray-100');
            });
        });

        // UI style selection
        document.querySelectorAll('.ui-style-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const ui = e.currentTarget.dataset.ui;
                const body = document.getElementById('gameBody');
                
                // Remove all UI classes
                body.classList.remove('ui-modern', 'ui-classic', 'ui-neon', 'ui-minimal', 'ui-retro', 'ui-soft');
                body.classList.add(`ui-${ui}`);
                
                // Update visual feedback
                document.querySelectorAll('.ui-style-btn').forEach(b => {
                    b.classList.remove('bg-blue-200', 'ring-2', 'ring-blue-500');
                    b.classList.add('bg-gray-100');
                });
                e.currentTarget.classList.add('bg-blue-200', 'ring-2', 'ring-blue-500');
                e.currentTarget.classList.remove('bg-gray-100');
            });
        });

        // Functions
        function toggleCustomization() {
            const panel = document.getElementById('customizationPanel');
            const chevron = document.getElementById('customizeChevron');
            const btnText = document.getElementById('customizeBtnText');
            const btn = document.getElementById('customizeBtn');
            
            if (panel.classList.contains('open')) {
                panel.classList.remove('open');
                chevron.style.transform = 'rotate(0deg)';
                btnText.textContent = 'Customize Game';
                btn.classList.remove('customize-btn-open');
            } else {
                panel.classList.add('open');
                chevron.style.transform = 'rotate(180deg)';
                btnText.textContent = 'Hide Customization';
                btn.classList.add('customize-btn-open');
            }
        }

        function setGameMode(mode) {
            gameMode = mode;
            
            if (mode === 'pvp') {
                pvpMode.classList.add('bg-gray-900', 'text-white', 'shadow-lg');
                pvpMode.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                pvbMode.classList.remove('bg-gray-900', 'text-white', 'shadow-lg');
                pvbMode.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                difficultySelector.classList.add('hidden');
                document.getElementById('modeIndicator').innerHTML = '<i data-lucide="users" class="w-4 h-4"></i><span>Two Players</span>';
            } else {
                pvbMode.classList.add('bg-gray-900', 'text-white', 'shadow-lg');
                pvbMode.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                pvpMode.classList.remove('bg-gray-900', 'text-white', 'shadow-lg');
                pvpMode.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                difficultySelector.classList.remove('hidden');
                document.getElementById('modeIndicator').innerHTML = '<i data-lucide="cpu" class="w-4 h-4"></i><span>vs AI</span>';
            }
            
            lucide.createIcons();
            resetGame();
        }

        function handleCellClick(e) {
            const cell = e.target;
            const cellIndex = parseInt(cell.dataset.cell);
            
            if (!cell.classList.contains('cell-btn') || board[cellIndex] !== '' || !gameActive || isThinking) {
                return;
            }
            
            makeMove(cellIndex, currentPlayer);
            
            if (gameMode === 'pvb' && gameActive && currentPlayer === 'O') {
                isThinking = true;
                gameStatus.innerHTML = `<div class="flex items-center justify-center gap-2">
                    <i data-lucide="cpu" class="w-5 h-5"></i>
                    <span class="thinking-dots">AI is thinking</span>
                </div>`;
                lucide.createIcons();
                
                setTimeout(() => {
                    const botMove = getBotMove();
                    makeMove(botMove, 'O');
                    isThinking = false;
                }, 1000);
            }
        }

        function makeMove(cellIndex, player) {
            board[cellIndex] = player;
            const cell = document.querySelector(`[data-cell="${cellIndex}"]`);
            
            // Create icon element
            const icon = document.createElement('i');
            icon.setAttribute('data-lucide', playerIcons[player]);
            icon.className = `w-8 h-8 ${player === 'X' ? 'text-blue-600' : 'text-red-600'} mark-appear`;
            
            cell.appendChild(icon);
            cell.disabled = true;
            cell.classList.add('pointer-events-none');
            
            lucide.createIcons();
            
            if (checkWinner()) {
                gameActive = false;
                scores[player]++;
                updateScoreboard();
                gameStatus.innerHTML = `<div class="flex items-center justify-center gap-2">
                    <i data-lucide="trophy" class="w-5 h-5 text-yellow-500"></i>
                    <span>Player ${player} Wins!</span>
                </div>`;
                highlightWinningCells();
            } else if (board.every(cell => cell !== '')) {
                gameActive = false;
                scores.ties++;
                updateScoreboard();
                gameStatus.innerHTML = `<div class="flex items-center justify-center gap-2">
                    <i data-lucide="equal" class="w-5 h-5 text-gray-500"></i>
                    <span>It's a Draw!</span>
                </div>`;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                updateGameDisplay();
            }
            
            lucide.createIcons();
        }

        function checkWinner() {
            return winningConditions.some(condition => {
                const [a, b, c] = condition;
                return board[a] && board[a] === board[b] && board[a] === board[c];
            });
        }

        function highlightWinningCells() {
            winningConditions.forEach(condition => {
                const [a, b, c] = condition;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    document.querySelector(`[data-cell="${a}"]`).classList.add('winning-pulse');
                    document.querySelector(`[data-cell="${b}"]`).classList.add('winning-pulse');
                    document.querySelector(`[data-cell="${c}"]`).classList.add('winning-pulse');
                }
            });
        }

        function getBotMove() {
            if (difficulty === 'easy') {
                return getRandomMove();
            } else if (difficulty === 'medium') {
                return Math.random() < 0.7 ? getBestMove() : getRandomMove();
            } else {
                return getBestMove();
            }
        }

        function getRandomMove() {
            const availableMoves = board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
            return availableMoves[Math.floor(Math.random() * availableMoves.length)];
        }

        function getBestMove() {
            // Simple minimax implementation
            let bestScore = -Infinity;
            let bestMove;
            
            for (let i = 0; i < board.length; i++) {
                if (board[i] === '') {
                    board[i] = 'O';
                    let score = minimax(board, 0, false);
                    board[i] = '';
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = i;
                    }
                }
            }
            
            return bestMove;
        }

        function minimax(board, depth, isMaximizing) {
            const winner = checkWinnerForMinimax();
            if (winner === 'O') return 10 - depth;
            if (winner === 'X') return depth - 10;
            if (board.every(cell => cell !== '')) return 0;
            
            if (isMaximizing) {
                let bestScore = -Infinity;
                for (let i = 0; i < board.length; i++) {
                    if (board[i] === '') {
                        board[i] = 'O';
                        let score = minimax(board, depth + 1, false);
                        board[i] = '';
                        bestScore = Math.max(score, bestScore);
                    }
                }
                return bestScore;
            } else {
                let bestScore = Infinity;
                for (let i = 0; i < board.length; i++) {
                    if (board[i] === '') {
                        board[i] = 'X';
                        let score = minimax(board, depth + 1, true);
                        board[i] = '';
                        bestScore = Math.min(score, bestScore);
                    }
                }
                return bestScore;
            }
        }

        function checkWinnerForMinimax() {
            for (let condition of winningConditions) {
                const [a, b, c] = condition;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    return board[a];
                }
            }
            return null;
        }

        function updateGameDisplay() {
            if (gameActive) {
                if (gameMode === 'pvb' && currentPlayer === 'O') {
                    gameStatus.innerHTML = `<div class="flex items-center justify-center gap-2">
                        <i data-lucide="cpu" class="w-5 h-5"></i>
                        <span>AI's Turn</span>
                    </div>`;
                } else {
                    gameStatus.innerHTML = `<div class="flex items-center justify-center gap-2">
                        <i data-lucide="${playerIcons[currentPlayer]}" class="w-5 h-5 ${currentPlayer === 'X' ? 'text-blue-600' : 'text-red-600'}"></i>
                        <span>Player ${currentPlayer}'s Turn</span>
                    </div>`;
                }
                lucide.createIcons();
            }
        }

        function updateScoreboard() {
            document.getElementById('scoreX').textContent = scores.X;
            document.getElementById('scoreO').textContent = scores.O;
            document.getElementById('scoreTies').textContent = scores.ties;
        }

        function resetGame() {
            board = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            gameActive = true;
            isThinking = false;
            
            document.querySelectorAll('.cell-btn').forEach(cell => {
                cell.innerHTML = '';
                cell.disabled = false;
                cell.classList.remove('pointer-events-none', 'winning-pulse');
            });
            
            updateGameDisplay();
        }

        function resetScore() {
            scores = { X: 0, O: 0, ties: 0 };
            updateScoreboard();
            resetGame();
        }

        // Initialize default selections
        document.querySelector('.icon-btn[data-player="x"][data-icon="x"]').classList.add('bg-blue-100', 'ring-2', 'ring-blue-500');
        document.querySelector('.icon-btn[data-player="o"][data-icon="circle"]').classList.add('bg-red-100', 'ring-2', 'ring-red-500');
        document.querySelector('.theme-btn[data-theme="purple"]').classList.add('bg-blue-200', 'ring-2', 'ring-blue-500');
        document.querySelector('.ui-style-btn[data-ui="modern"]').classList.add('bg-blue-200', 'ring-2', 'ring-blue-500');
        
        // Initialize game
        updateGameDisplay();
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-blue-50/20" id="overlay"></div>
<div className="relative max-w-lg w-full">

<div className="text-center mb-6 game-enter" style={{animationDelay: `0.1s`}}>
<div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 float-animation">
<i className="w-8 h-8 text-white" data-lucide="grid-3x3"></i>
</div>
<h1 className="text-4xl font-semibold text-white tracking-tight mb-2">Tic Tac Toe Pro</h1>
<p className="text-white/80">Customize your game and challenge yourself!</p>
</div>

<div className="flex justify-center mb-6 game-enter" style={{animationDelay: `0.15s`}}>
<button className="bg-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-200 flex items-center gap-2 border border-white/30 font-medium" id="customizeBtn">
<i className="w-5 h-5" data-lucide="palette"></i>
<span id="customizeBtnText">Customize Game</span>
<i className="w-4 h-4 transition-transform duration-200" data-lucide="chevron-down" id="customizeChevron"></i>
</button>
</div>

<div className="customization-panel glass-effect border border-white/20 rounded-2xl p-6 mb-6 game-enter" id="customizationPanel" style={{animationDelay: `0.2s`}}>

<div className="mb-6">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-gray-700" data-lucide="shapes"></i>
<h3 className="text-lg font-semibold text-gray-900">Game Icons</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Player X Icon</label>
<div className="grid grid-cols-4 gap-2">
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors" data-icon="x" data-player="x">
<div className="icon-preview"><i className="w-5 h-5 text-blue-600" data-lucide="x"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors" data-icon="star" data-player="x">
<div className="icon-preview"><i className="w-5 h-5 text-blue-600" data-lucide="star"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors" data-icon="heart" data-player="x">
<div className="icon-preview"><i className="w-5 h-5 text-blue-600" data-lucide="heart"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors" data-icon="diamond" data-player="x">
<div className="icon-preview"><i className="w-5 h-5 text-blue-600" data-lucide="diamond"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors" data-icon="zap" data-player="x">
<div className="icon-preview"><i className="w-5 h-5 text-blue-600" data-lucide="zap"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors" data-icon="crown" data-player="x">
<div className="icon-preview"><i className="w-5 h-5 text-blue-600" data-lucide="crown"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors" data-icon="flame" data-player="x">
<div className="icon-preview"><i className="w-5 h-5 text-blue-600" data-lucide="flame"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors" data-icon="sword" data-player="x">
<div className="icon-preview"><i className="w-5 h-5 text-blue-600" data-lucide="sword"></i></div>
</button>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Player O Icon</label>
<div className="grid grid-cols-4 gap-2">
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-red-100 transition-colors" data-icon="circle" data-player="o">
<div className="icon-preview"><i className="w-5 h-5 text-red-600" data-lucide="circle"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-red-100 transition-colors" data-icon="square" data-player="o">
<div className="icon-preview"><i className="w-5 h-5 text-red-600" data-lucide="square"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-red-100 transition-colors" data-icon="triangle" data-player="o">
<div className="icon-preview"><i className="w-5 h-5 text-red-600" data-lucide="triangle"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-red-100 transition-colors" data-icon="hexagon" data-player="o">
<div className="icon-preview"><i className="w-5 h-5 text-red-600" data-lucide="hexagon"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-red-100 transition-colors" data-icon="moon" data-player="o">
<div className="icon-preview"><i className="w-5 h-5 text-red-600" data-lucide="moon"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-red-100 transition-colors" data-icon="sun" data-player="o">
<div className="icon-preview"><i className="w-5 h-5 text-red-600" data-lucide="sun"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-red-100 transition-colors" data-icon="shield" data-player="o">
<div className="icon-preview"><i className="w-5 h-5 text-red-600" data-lucide="shield"></i></div>
</button>
<button className="icon-btn p-3 rounded-lg bg-gray-100 hover:bg-red-100 transition-colors" data-icon="gem" data-player="o">
<div className="icon-preview"><i className="w-5 h-5 text-red-600" data-lucide="gem"></i></div>
</button>
</div>
</div>
</div>
</div>
<div className="section-divider"></div>

<div className="mb-6">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-gray-700" data-lucide="image"></i>
<h3 className="text-lg font-semibold text-gray-900">Background Theme</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<button className="theme-btn flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" data-theme="purple">
<div className="theme-preview theme-purple border-2 border-white shadow-sm"></div>
<span className="text-sm font-medium">Purple Dream</span>
</button>
<button className="theme-btn flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" data-theme="blue">
<div className="theme-preview theme-blue border-2 border-white shadow-sm"></div>
<span className="text-sm font-medium">Ocean Blue</span>
</button>
<button className="theme-btn flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" data-theme="green">
<div className="theme-preview theme-green border-2 border-white shadow-sm"></div>
<span className="text-sm font-medium">Forest Green</span>
</button>
<button className="theme-btn flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" data-theme="orange">
<div className="theme-preview theme-orange border-2 border-white shadow-sm"></div>
<span className="text-sm font-medium">Sunset Orange</span>
</button>
<button className="theme-btn flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" data-theme="dark">
<div className="theme-preview theme-dark border-2 border-white shadow-sm"></div>
<span className="text-sm font-medium">Dark Night</span>
</button>
<button className="theme-btn flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" data-theme="sunset">
<div className="theme-preview theme-sunset border-2 border-white shadow-sm"></div>
<span className="text-sm font-medium">Pink Sunset</span>
</button>
<button className="theme-btn flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" data-theme="fire">
<div className="theme-preview theme-fire border-2 border-white shadow-sm"></div>
<span className="text-sm font-medium">Fire Red</span>
</button>
<button className="theme-btn flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" data-theme="cosmic">
<div className="theme-preview theme-cosmic border-2 border-white shadow-sm"></div>
<span className="text-sm font-medium">Cosmic Purple</span>
</button>
<button className="theme-btn flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" data-theme="forest">
<div className="theme-preview theme-forest border-2 border-white shadow-sm"></div>
<span className="text-sm font-medium">Emerald Forest</span>
</button>
</div>
</div>
<div className="section-divider"></div>

<div>
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-gray-700" data-lucide="layout"></i>
<h3 className="text-lg font-semibold text-gray-900">Interface Style</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<button className="ui-style-btn p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-left" data-ui="modern">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
<div>
<div className="text-sm font-semibold">Modern Glass</div>
<div className="text-xs text-gray-600">Sleek and contemporary design</div>
</div>
</div>
</button>
<button className="ui-style-btn p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-left" data-ui="classic">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="square"></i>
</div>
<div>
<div className="text-sm font-semibold">Classic Clean</div>
<div className="text-xs text-gray-600">Traditional and professional</div>
</div>
</div>
</button>
<button className="ui-style-btn p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-left" data-ui="neon">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-cyan-400">
<i className="w-4 h-4 text-cyan-400" data-lucide="zap"></i>
</div>
<div>
<div className="text-sm font-semibold">Neon Cyber</div>
<div className="text-xs text-gray-600">Futuristic glowing interface</div>
</div>
</div>
</button>
<button className="ui-style-btn p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-left" data-ui="minimal">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-300">
<i className="w-4 h-4 text-gray-600" data-lucide="minimize"></i>
</div>
<div>
<div className="text-sm font-semibold">Minimal</div>
<div className="text-xs text-gray-600">Simple and elegant</div>
</div>
</div>
</button>
<button className="ui-style-btn p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-left" data-ui="retro">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center border-2 border-black">
<i className="w-4 h-4 text-black" data-lucide="gamepad-2"></i>
</div>
<div>
<div className="text-sm font-semibold">Retro Gaming</div>
<div className="text-xs text-gray-600">Classic arcade style</div>
</div>
</div>
</button>
<button className="ui-style-btn p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-left" data-ui="soft">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-pink-300 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-pink-600" data-lucide="heart"></i>
</div>
<div>
<div className="text-sm font-semibold">Soft & Cozy</div>
<div className="text-xs text-gray-600">Warm and comfortable feel</div>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="glass-effect border border-white/20 rounded-2xl p-6 mb-6 game-enter" style={{animationDelay: `0.3s`}}>
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-gray-900">Game Mode</h3>
<div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full" id="modeIndicator">
<i className="w-4 h-4" data-lucide="users"></i>
<span>Two Players</span>
</div>
</div>
<div className="flex gap-3 mb-4">
<button className="mode-switch flex-1 px-4 py-3 text-sm font-medium rounded-xl bg-gray-900 text-white shadow-lg" id="pvpMode">
<i className="w-4 h-4 mr-2" data-lucide="users"></i>
                    Two Players
                </button>
<button className="mode-switch flex-1 px-4 py-3 text-sm font-medium rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200" id="pvbMode">
<i className="w-4 h-4 mr-2" data-lucide="cpu"></i>
                    vs AI
                </button>
</div>

<div className="hidden" id="difficultySelector">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-gray-700">AI Difficulty</span>
<div className="flex items-center gap-1 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="zap"></i>
<span id="difficultyLabel">Intermediate</span>
</div>
</div>
<div className="flex gap-2">
<button className="difficulty-btn flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200" data-difficulty="easy">Beginner</button>
<button className="difficulty-btn flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-blue-600 text-white shadow-lg" data-difficulty="medium">Intermediate</button>
<button className="difficulty-btn flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200" data-difficulty="hard">Expert</button>
</div>
</div>
</div>

<div className="glass-effect border border-white/20 rounded-2xl p-6 mb-6 text-center game-enter" style={{animationDelay: `0.4s`}}>
<div className="text-xl font-medium text-gray-900 mb-4" id="gameStatus">Player X's Turn</div>
<div className="flex justify-center gap-8 text-sm" id="scoreBoard">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="x" id="scoreIconX"></i>
</div>
<span className="text-lg font-semibold text-blue-600" id="scoreX">0</span>
<span className="text-xs text-gray-500">Player X</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-gray-600" data-lucide="equal"></i>
</div>
<span className="text-lg font-semibold text-gray-600" id="scoreTies">0</span>
<span className="text-xs text-gray-500">Draws</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-red-600" data-lucide="circle" id="scoreIconO"></i>
</div>
<span className="text-lg font-semibold text-red-600" id="scoreO">0</span>
<span className="text-xs text-gray-500">Player O</span>
</div>
</div>
</div>

<div className="glass-effect border border-white/20 rounded-2xl p-6 mb-6 game-enter" style={{animationDelay: `0.5s`}}>
<div className="grid grid-cols-3 gap-3 aspect-square" id="gameBoard">
<button className="cell-btn aspect-square bg-white/50 rounded-xl border-2 border-transparent hover:border-white/40 transition-all duration-200 flex items-center justify-center text-4xl font-bold cell-hover cell-enter" data-cell="0" style={{animationDelay: `0.1s`}}></button>
<button className="cell-btn aspect-square bg-white/50 rounded-xl border-2 border-transparent hover:border-white/40 transition-all duration-200 flex items-center justify-center text-4xl font-bold cell-hover cell-enter" data-cell="1" style={{animationDelay: `0.15s`}}></button>
<button className="cell-btn aspect-square bg-white/50 rounded-xl border-2 border-transparent hover:border-white/40 transition-all duration-200 flex items-center justify-center text-4xl font-bold cell-hover cell-enter" data-cell="2" style={{animationDelay: `0.2s`}}></button>
<button className="cell-btn aspect-square bg-white/50 rounded-xl border-2 border-transparent hover:border-white/40 transition-all duration-200 flex items-center justify-center text-4xl font-bold cell-hover cell-enter" data-cell="3" style={{animationDelay: `0.25s`}}></button>
<button className="cell-btn aspect-square bg-white/50 rounded-xl border-2 border-transparent hover:border-white/40 transition-all duration-200 flex items-center justify-center text-4xl font-bold cell-hover cell-enter" data-cell="4" style={{animationDelay: `0.3s`}}></button>
<button className="cell-btn aspect-square bg-white/50 rounded-xl border-2 border-transparent hover:border-white/40 transition-all duration-200 flex items-center justify-center text-4xl font-bold cell-hover cell-enter" data-cell="5" style={{animationDelay: `0.35s`}}></button>
<button className="cell-btn aspect-square bg-white/50 rounded-xl border-2 border-transparent hover:border-white/40 transition-all duration-200 flex items-center justify-center text-4xl font-bold cell-hover cell-enter" data-cell="6" style={{animationDelay: `0.4s`}}></button>
<button className="cell-btn aspect-square bg-white/50 rounded-xl border-2 border-transparent hover:border-white/40 transition-all duration-200 flex items-center justify-center text-4xl font-bold cell-hover cell-enter" data-cell="7" style={{animationDelay: `0.45s`}}></button>
<button className="cell-btn aspect-square bg-white/50 rounded-xl border-2 border-transparent hover:border-white/40 transition-all duration-200 flex items-center justify-center text-4xl font-bold cell-hover cell-enter" data-cell="8" style={{animationDelay: `0.5s`}}></button>
</div>
</div>

<div className="flex gap-3 game-enter" style={{animationDelay: `0.6s`}}>
<button className="flex-1 bg-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-200 flex items-center justify-center gap-2 border border-white/30 font-medium" id="resetBtn">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
                New Game
            </button>
<button className="bg-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-200 flex items-center justify-center gap-2 border border-white/30 font-medium" id="resetScoreBtn">
<i className="w-4 h-4" data-lucide="trash-2"></i>
                Reset Score
            </button>
</div>
</div>


    </>
  );
}
