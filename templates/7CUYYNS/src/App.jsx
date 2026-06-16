import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        class TicTacToe {
            constructor() {
                this.currentPlayer = 'X';
                this.board = Array(9).fill('');
                this.gameActive = true;
                this.scores = { X: 0, O: 0, ties: 0 };
                this.gameMode = 'pvp'; // 'pvp' or 'pvb'
                this.botDifficulty = 'medium';
                this.isPlayerTurn = true;
                this.botTimeout = null; // Track bot timeout
                this.initializeGame();
            }

            initializeGame() {
                this.bindEvents();
                this.loadScores();
                this.updateScoreDisplay();
                setTimeout(() => {
                    lucide.createIcons();
                }, 100);
            }

            bindEvents() {
                const cells = document.querySelectorAll('[data-index]');
                cells.forEach(cell => {
                    cell.addEventListener('click', () => {
                        this.makeMove(parseInt(cell.dataset.index));
                    });
                });

                document.getElementById('resetBtn').addEventListener('click', () => {
                    this.resetGame();
                });

                document.getElementById('clearScoreBtn').addEventListener('click', () => {
                    this.clearScores();
                });

                // Game mode buttons
                document.getElementById('pvpMode').addEventListener('click', () => {
                    this.setGameMode('pvp');
                });

                document.getElementById('pvbMode').addEventListener('click', () => {
                    this.setGameMode('pvb');
                });

                // Difficulty buttons
                document.querySelectorAll('.difficulty-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        this.setBotDifficulty(btn.dataset.difficulty);
                    });
                });
            }

            setGameMode(mode) {
                this.gameMode = mode;
                this.clearBotTimeout(); // Clear any pending bot moves
                this.resetGame();
                
                const pvpBtn = document.getElementById('pvpMode');
                const pvbBtn = document.getElementById('pvbMode');
                const difficultySelector = document.getElementById('difficultySelector');
                const modeIndicator = document.getElementById('modeIndicator');
                
                if (mode === 'pvp') {
                    pvpBtn.className = 'flex-1 px-3 py-2 text-xs font-medium rounded-md bg-gray-900 text-white transition-colors';
                    pvbBtn.className = 'flex-1 px-3 py-2 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors';
                    difficultySelector.classList.add('hidden');
                    modeIndicator.innerHTML = '<i data-lucide="users" class="w-3 h-3"></i><span>2 Players</span>';
                } else {
                    pvpBtn.className = 'flex-1 px-3 py-2 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors';
                    pvbBtn.className = 'flex-1 px-3 py-2 text-xs font-medium rounded-md bg-gray-900 text-white transition-colors';
                    difficultySelector.classList.remove('hidden');
                    modeIndicator.innerHTML = '<i data-lucide="cpu" class="w-3 h-3"></i><span>vs Bot</span>';
                }
                
                lucide.createIcons();
            }

            setBotDifficulty(difficulty) {
                this.botDifficulty = difficulty;
                document.querySelectorAll('.difficulty-btn').forEach(btn => {
                    if (btn.dataset.difficulty === difficulty) {
                        btn.className = 'difficulty-btn flex-1 px-2 py-1 text-xs rounded bg-blue-600 text-white';
                    } else {
                        btn.className = 'difficulty-btn flex-1 px-2 py-1 text-xs rounded border border-gray-200 text-gray-700 hover:bg-gray-50';
                    }
                });
            }

            clearBotTimeout() {
                if (this.botTimeout) {
                    clearTimeout(this.botTimeout);
                    this.botTimeout = null;
                }
            }

            makeMove(index) {
                if (!this.gameActive || this.board[index] !== '') return;
                if (this.gameMode === 'pvb' && !this.isPlayerTurn) return;

                this.placeMark(index, this.currentPlayer);
                
                if (this.checkWinner()) {
                    this.handleGameEnd(`${this.getPlayerName(this.currentPlayer)} Wins!`, 'text-green-600');
                    this.scores[this.currentPlayer]++;
                } else if (this.board.every(cell => cell !== '')) {
                    this.handleGameEnd("It's a Tie!", 'text-yellow-600');
                    this.scores.ties++;
                } else {
                    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
                    this.isPlayerTurn = this.gameMode === 'pvp' || this.currentPlayer === 'X';
                    this.updateGameStatus();
                    
                    if (this.gameMode === 'pvb' && !this.isPlayerTurn && this.gameActive) {
                        this.makeBotMove();
                    }
                }
            }

            placeMark(index, player) {
                const cell = document.querySelector(`[data-index="${index}"]`);
                this.board[index] = player;
                
                if (player === 'X') {
                    cell.innerHTML = '<i data-lucide="x" class="w-8 h-8 text-blue-600"></i>';
                } else {
                    cell.innerHTML = '<i data-lucide="circle" class="w-8 h-8 text-red-600"></i>';
                }
                
                cell.classList.remove('cell-hover', 'cursor-pointer');
                cell.classList.add('bounce-animation');
                lucide.createIcons();
            }

            makeBotMove() {
                if (!this.gameActive || this.isPlayerTurn) return;
                
                const statusElement = document.getElementById('gameStatus');
                statusElement.classList.add('bot-thinking');
                
                this.botTimeout = setTimeout(() => {
                    if (!this.gameActive) return; // Double check game is still active
                    
                    statusElement.classList.remove('bot-thinking');
                    
                    let move = this.getBotMove();
                    
                    if (move !== -1 && this.gameActive && this.board[move] === '') {
                        this.placeMark(move, 'O');
                        
                        if (this.checkWinner()) {
                            this.handleGameEnd('Bot Wins!', 'text-red-600');
                            this.scores.O++;
                        } else if (this.board.every(cell => cell !== '')) {
                            this.handleGameEnd("It's a Tie!", 'text-yellow-600');
                            this.scores.ties++;
                        } else {
                            this.currentPlayer = 'X';
                            this.isPlayerTurn = true;
                            this.updateGameStatus();
                        }
                    }
                }, 800);
            }

            getBotMove() {
                const availableMoves = [];
                for (let i = 0; i < 9; i++) {
                    if (this.board[i] === '') {
                        availableMoves.push(i);
                    }
                }
                
                if (availableMoves.length === 0) return -1;
                
                switch (this.botDifficulty) {
                    case 'easy':
                        return availableMoves[Math.floor(Math.random() * availableMoves.length)];
                    case 'medium':
                        return Math.random() < 0.7 ? this.getBestMove(availableMoves) : availableMoves[Math.floor(Math.random() * availableMoves.length)];
                    case 'hard':
                        return this.getBestMove(availableMoves);
                    default:
                        return availableMoves[0];
                }
            }

            getBestMove(availableMoves) {
                // Check if bot can win
                for (let move of availableMoves) {
                    this.board[move] = 'O';
                    if (this.checkWinnerForBoard(this.board) === 'O') {
                        this.board[move] = '';
                        return move;
                    }
                    this.board[move] = '';
                }
                
                // Check if need to block player
                for (let move of availableMoves) {
                    this.board[move] = 'X';
                    if (this.checkWinnerForBoard(this.board) === 'X') {
                        this.board[move] = '';
                        return move;
                    }
                    this.board[move] = '';
                }
                
                // Take center if available
                if (availableMoves.includes(4)) return 4;
                
                // Take corners
                const corners = [0, 2, 6, 8].filter(i => availableMoves.includes(i));
                if (corners.length > 0) {
                    return corners[Math.floor(Math.random() * corners.length)];
                }
                
                // Take any available move
                return availableMoves[Math.floor(Math.random() * availableMoves.length)];
            }

            checkWinnerForBoard(board) {
                const winPatterns = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]
                ];

                for (let pattern of winPatterns) {
                    const [a, b, c] = pattern;
                    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                        return board[a];
                    }
                }
                return null;
            }

            getPlayerName(player) {
                if (this.gameMode === 'pvp') {
                    return `Player ${player}`;
                } else {
                    return player === 'X' ? 'You' : 'Bot';
                }
            }

            updateGameStatus() {
                const statusElement = document.getElementById('gameStatus');
                if (this.gameMode === 'pvp') {
                    statusElement.textContent = `Player ${this.currentPlayer}'s Turn`;
                } else {
                    statusElement.textContent = this.currentPlayer === 'X' ? "Your Turn" : "Bot is thinking...";
                }
            }

            handleGameEnd(message, colorClass) {
                this.gameActive = false;
                this.clearBotTimeout(); // Clear any pending bot moves
                this.updateScoreDisplay();
                this.saveScores();
                const statusElement = document.getElementById('gameStatus');
                statusElement.textContent = message;
                statusElement.className = `text-lg font-medium ${colorClass} mb-3`;
                statusElement.classList.remove('bot-thinking');
                setTimeout(() => this.resetGame(), 2500);
            }

            checkWinner() {
                const winPatterns = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]
                ];

                return winPatterns.some(pattern => {
                    const [a, b, c] = pattern;
                    if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                        this.highlightWinningCells([a, b, c]);
                        return true;
                    }
                    return false;
                });
            }

            highlightWinningCells(cells) {
                cells.forEach(index => {
                    const cell = document.querySelector(`[data-index="${index}"]`);
                    cell.classList.add('bg-green-100', 'border-green-400');
                });
            }

            resetGame() {
                this.clearBotTimeout(); // Clear any pending bot moves
                this.board = Array(9).fill('');
                this.currentPlayer = 'X';
                this.gameActive = true;
                this.isPlayerTurn = true;
                
                const statusElement = document.getElementById('gameStatus');
                statusElement.className = 'text-lg font-medium text-gray-900 mb-3';
                statusElement.classList.remove('bot-thinking');
                this.updateGameStatus();
                
                const cells = document.querySelectorAll('[data-index]');
                cells.forEach(cell => {
                    cell.innerHTML = '';
                    cell.className = 'w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer cell-hover';
                });
            }

            updateScoreDisplay() {
                document.getElementById('scoreX').textContent = this.scores.X;
                document.getElementById('scoreO').textContent = this.scores.O;
                document.getElementById('scoreTies').textContent = this.scores.ties;
            }

            saveScores() {
                localStorage.setItem('ticTacToeScores', JSON.stringify(this.scores));
            }

            loadScores() {
                const saved = localStorage.getItem('ticTacToeScores');
                if (saved) {
                    this.scores = JSON.parse(saved);
                }
            }

            clearScores() {
                this.scores = { X: 0, O: 0, ties: 0 };
                this.updateScoreDisplay();
                localStorage.removeItem('ticTacToeScores');
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            new TicTacToe();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-md w-full">

<div className="text-center mb-8 fade-in" style={{animationDelay: '0.1s'}}>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2">Tic Tac Toe</h1>
<p className="text-gray-600 text-sm">Choose your game mode and start playing</p>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 slide-up" style={{animationDelay: '0.2s'}}>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-900">Game Mode</h3>
<div className="flex items-center gap-2 text-xs text-gray-500" id="modeIndicator">
<i className="w-3 h-3" data-lucide="users"></i>
<span>2 Players</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 px-3 py-2 text-xs font-medium rounded-md bg-gray-900 text-white transition-colors" id="pvpMode">
<i className="w-3 h-3 mr-1" data-lucide="users"></i>
                    2 Players
                </button>
<button className="flex-1 px-3 py-2 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors" id="pvbMode">
<i className="w-3 h-3 mr-1" data-lucide="cpu"></i>
                    vs Bot
                </button>
</div>

<div className="mt-4 hidden" id="difficultySelector">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-gray-700">Bot Difficulty</span>
</div>
<div className="flex gap-2">
<button className="difficulty-btn flex-1 px-2 py-1 text-xs rounded border border-gray-200 text-gray-700 hover:bg-gray-50" data-difficulty="easy">Easy</button>
<button className="difficulty-btn flex-1 px-2 py-1 text-xs rounded bg-blue-600 text-white" data-difficulty="medium">Medium</button>
<button className="difficulty-btn flex-1 px-2 py-1 text-xs rounded border border-gray-200 text-gray-700 hover:bg-gray-50" data-difficulty="hard">Hard</button>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 text-center slide-up" style={{animationDelay: '0.3s'}}>
<div className="text-lg font-medium text-gray-900 mb-3" id="gameStatus">Player X's Turn</div>
<div className="flex justify-center gap-6 text-sm text-gray-600" id="scoreBoard">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="x"></i>
<span className="font-medium text-blue-600" id="scoreX">0</span>
</div>
<div className="w-px bg-gray-200"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-red-600" data-lucide="circle"></i>
<span className="font-medium text-red-600" id="scoreO">0</span>
</div>
<div className="w-px bg-gray-200"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-500" data-lucide="minus"></i>
<span className="font-medium text-gray-600" id="scoreTies">0</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 slide-up" style={{animationDelay: '0.4s'}}>
<div className="relative">
<div className="grid grid-cols-3 gap-3" id="gameBoard">

<div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer cell-hover fade-in" data-index="0" style={{animationDelay: '0.5s'}}></div>
<div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer cell-hover fade-in" data-index="1" style={{animationDelay: '0.55s'}}></div>
<div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer cell-hover fade-in" data-index="2" style={{animationDelay: '0.6s'}}></div>
<div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer cell-hover fade-in" data-index="3" style={{animationDelay: '0.65s'}}></div>
<div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer cell-hover fade-in" data-index="4" style={{animationDelay: '0.7s'}}></div>
<div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer cell-hover fade-in" data-index="5" style={{animationDelay: '0.75s'}}></div>
<div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer cell-hover fade-in" data-index="6" style={{animationDelay: '0.8s'}}></div>
<div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer cell-hover fade-in" data-index="7" style={{animationDelay: '0.85s'}}></div>
<div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer cell-hover fade-in" data-index="8" style={{animationDelay: '0.9s'}}></div>
</div>
</div>
</div>

<div className="flex gap-3 slide-up" style={{animationDelay: '0.95s'}}>
<button className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2" id="resetBtn">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
                New Game
            </button>
<button className="px-4 py-3 rounded-lg font-medium text-sm border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center gap-2" id="clearScoreBtn">
<i className="w-4 h-4" data-lucide="trash-2"></i>
                Clear
            </button>
</div>
</div>


    </>
  );
}
