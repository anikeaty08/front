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
      
        let gameState = {
            altitude: 0,
            stamina: 100,
            score: 0,
            gameTime: 0,
            isGameActive: true,
            weather: 'sunny',
            temperature: 15,
            checkpoints: [false, false, false, false, false],
            combo: 1,
            consecutiveClimbs: 0,
            bestTime: localStorage.getItem('bestTime') || null
        };

        const maxAltitude = 8848;
        const checkpointAltitudes = [1000, 2500, 4500, 6500, 8848];
        const checkpointNames = ['Base Camp', 'Forest Line', 'Rock Face', 'Death Zone', 'Summit'];
        const weatherTypes = {
            sunny: { icon: 'sun', color: 'text-yellow-400', desc: 'Perfect' },
            cloudy: { icon: 'cloud', color: 'text-gray-400', desc: 'Cloudy' },
            snow: { icon: 'snowflake', color: 'text-blue-400', desc: 'Freezing' },
            storm: { icon: 'cloud-lightning', color: 'text-purple-400', desc: 'Dangerous' }
        };
        
        let gameTimer = setInterval(() => {
            if (gameState.isGameActive) {
                gameState.gameTime++;
                updateGameTime();
            }
        }, 1000);

        function createParticles(x, y, count = 5) {
            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.setProperty('--random-x', (Math.random() - 0.5) * 100 + 'px');
                particle.style.setProperty('--random-y', (Math.random() - 0.5) * 100 + 'px');
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 1000);
            }
        }

        function showCombo(multiplier) {
            if (multiplier > 1) {
                const comboDisplay = document.getElementById('comboDisplay');
                const comboText = document.createElement('div');
                comboText.className = 'combo-text text-2xl font-bold text-yellow-400';
                comboText.textContent = `${multiplier}x COMBO!`;
                comboDisplay.appendChild(comboText);
                
                setTimeout(() => comboText.remove(), 1000);
                
                document.getElementById('combo').style.opacity = '1';
                document.getElementById('combo').textContent = `x${multiplier} Combo`;
            }
        }

        function updateDisplay() {
            document.getElementById('altitude').textContent = `${Math.floor(gameState.altitude)}m`;
            document.getElementById('score').textContent = gameState.score.toLocaleString();
            document.getElementById('staminaBar').style.width = `${gameState.stamina}%`;
            document.getElementById('staminaText').textContent = `${Math.floor(gameState.stamina)}%`;
            document.getElementById('temperature').textContent = `${gameState.temperature}°C`;
            
            // Update climber position with enhanced animation
            const climber = document.getElementById('climber');
            const progress = gameState.altitude / maxAltitude;
            const pathLength = 800;
            const newX = 60 + (progress * pathLength);
            const newY = 650 - (progress * 550);
            
            climber.style.left = `${newX}px`;
            climber.style.bottom = `${700 - newY}px`;
            
            // Check for checkpoint completion
            checkpointAltitudes.forEach((altitude, index) => {
                if (gameState.altitude >= altitude && !gameState.checkpoints[index]) {
                    gameState.checkpoints[index] = true;
                    const checkpointEl = document.getElementById(`checkpoint${index + 1}`);
                    checkpointEl.textContent = '✓';
                    checkpointEl.parentElement.classList.remove('bg-slate-800/50');
                    checkpointEl.parentElement.classList.add('bg-gradient-to-r', 'from-green-500/10', 'to-emerald-500/10', 'border', 'border-green-500/20');
                    checkpointEl.className = 'text-green-400 text-xl';
                    
                    const bonusScore = (index + 1) * 200 * gameState.combo;
                    gameState.score += bonusScore;
                    showStatus(`🏔️ ${checkpointNames[index]} Reached! +${bonusScore} points`);
                    
                    // Create celebration particles
                    createParticles(newX, window.innerHeight - newY, 10);
                }
            });
            
            updateWeather();
            
            if (gameState.altitude >= maxAltitude) {
                endGame(true);
            }
        }

        function updateWeather() {
            let weatherKey = 'sunny';
            
            if (gameState.altitude < 1000) {
                weatherKey = 'sunny';
                gameState.temperature = Math.max(15 - Math.floor(gameState.altitude / 200), 5);
            } else if (gameState.altitude < 2500) {
                weatherKey = 'cloudy';
                gameState.temperature = Math.max(5 - Math.floor(gameState.altitude / 300), -5);
            } else if (gameState.altitude < 6500) {
                weatherKey = 'snow';
                gameState.temperature = Math.max(-10 - Math.floor(gameState.altitude / 500), -25);
            } else {
                weatherKey = 'storm';
                gameState.temperature = Math.max(-30 - Math.floor(gameState.altitude / 800), -50);
            }
            
            const weather = weatherTypes[weatherKey];
            document.getElementById('weatherIcon').setAttribute('data-lucide', weather.icon);
            document.getElementById('weatherIcon').className = `w-5 h-5 ${weather.color}`;
            document.getElementById('weatherDesc').textContent = weather.desc;
            
            lucide.createIcons();
        }

        function climb() {
            if (!gameState.isGameActive || gameState.stamina <= 0) return;
            
            const baseClimbHeight = Math.random() * 80 + 40;
            const difficultyMultiplier = 1 + (gameState.altitude / maxAltitude) * 0.5;
            const weatherPenalty = gameState.weather === 'storm' ? 0.7 : gameState.weather === 'snow' ? 0.85 : 1;
            
            const climbHeight = baseClimbHeight * gameState.combo * 0.1 * weatherPenalty;
            const staminaCost = (Math.random() * 12 + 8) * difficultyMultiplier;
            
            gameState.altitude += climbHeight;
            gameState.stamina = Math.max(0, gameState.stamina - staminaCost);
            gameState.consecutiveClimbs++;
            
            // Combo system
            if (gameState.consecutiveClimbs >= 3) {
                gameState.combo = Math.min(5, Math.floor(gameState.consecutiveClimbs / 3) + 1);
                showCombo(gameState.combo);
            }
            
            const baseScore = Math.floor(climbHeight / 5) * gameState.combo;
            gameState.score += baseScore;
            
            // Create climbing particles
            const climber = document.getElementById('climber');
            const rect = climber.getBoundingClientRect();
            createParticles(rect.left + rect.width/2, rect.top + rect.height/2, 3);
            
            if (gameState.stamina <= 0) {
                showStatus('💀 Exhausted! You need to rest...');
                gameState.consecutiveClimbs = 0;
                gameState.combo = 1;
                document.getElementById('combo').style.opacity = '0';
            } else {
                const motivationalMessages = [
                    '🔥 Keep climbing!', '💪 You\'ve got this!', '⚡ Feeling strong!', 
                    '🌟 Amazing progress!', '🚀 Unstoppable!'
                ];
                showStatus(motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]);
            }
            
            updateDisplay();
        }

        function rest() {
            if (!gameState.isGameActive) return;
            
            const restAmount = Math.random() * 25 + 15;
            gameState.stamina = Math.min(100, gameState.stamina + restAmount);
            gameState.consecutiveClimbs = 0;
            gameState.combo = 1;
            document.getElementById('combo').style.opacity = '0';
            
            const restMessages = [
                '😌 Taking a well-deserved break...', '🧘‍♂️ Meditation time...', 
                '☕ Enjoying the view...', '💤 Power nap complete!'
            ];
            showStatus(restMessages[Math.floor(Math.random() * restMessages.length)]);
            updateDisplay();
        }

        function showStatus(message) {
            const status = document.getElementById('climberStatus');
            status.querySelector('.font-medium').textContent = message;
            status.style.opacity = '1';
            setTimeout(() => {
                status.style.opacity = '0';
            }, 3000);
        }

        function updateGameTime() {
            const minutes = Math.floor(gameState.gameTime / 60);
            const seconds = gameState.gameTime % 60;
            const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById('gameTime').textContent = timeString;
            
            if (gameState.bestTime) {
                document.getElementById('bestTime').textContent = gameState.bestTime;
            }
        }

        function endGame(won) {
            gameState.isGameActive = false;
            const message = document.getElementById('gameMessage');
            const title = message.querySelector('h2');
            const desc = message.querySelector('p');
            
            const currentTimeString = document.getElementById('gameTime').textContent;
            
            if (won) {
                title.textContent = '🏆 Summit Conquered!';
                desc.textContent = `Epic climb completed in ${currentTimeString}! You scored ${gameState.score.toLocaleString()} points!`;
                
                // Save best time
                if (!gameState.bestTime || gameState.gameTime < parseInt(gameState.bestTime.replace(':', '')) * 60) {
                    gameState.bestTime = currentTimeString;
                    localStorage.setItem('bestTime', currentTimeString);
                    document.getElementById('bestTime').textContent = currentTimeString;
                }
            } else {
                title.textContent = '💔 Mountain Defeated You';
                desc.textContent = `Don't give up! You reached ${Math.floor(gameState.altitude)}m. Train harder and try again!`;
            }
            
            message.style.opacity = '1';
            
            // Celebration particles
            if (won) {
                for (let i = 0; i < 50; i++) {
                    setTimeout(() => {
                        createParticles(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 1);
                    }, i * 100);
                }
            }
        }

        function resetGame() {
            gameState = {
                altitude: 0,
                stamina: 100,
                score: 0,
                gameTime: 0,
                isGameActive: true,
                weather: 'sunny',
                temperature: 15,
                checkpoints: [false, false, false, false, false],
                combo: 1,
                consecutiveClimbs: 0,
                bestTime: localStorage.getItem('bestTime') || null
            };
            
            // Reset checkpoint display
            for (let i = 1; i <= 5; i++) {
                const checkpointEl = document.getElementById(`checkpoint${i}`);
                checkpointEl.textContent = '○';
                checkpointEl.className = 'text-gray-500 text-xl';
                checkpointEl.parentElement.className = 'flex justify-between items-center p-3 rounded-lg bg-slate-800/50';
            }
            
            // Reset special checkpoints
            document.getElementById('checkpoint1').parentElement.classList.add('bg-gradient-to-r', 'from-green-500/10', 'to-emerald-500/10', 'border', 'border-green-500/20');
            document.getElementById('checkpoint1').textContent = '✓';
            document.getElementById('checkpoint1').className = 'text-green-400 text-xl';
            
            document.getElementById('checkpoint5').parentElement.classList.add('bg-gradient-to-r', 'from-yellow-500/10', 'to-orange-500/10', 'border', 'border-yellow-500/20');
            
            document.getElementById('gameMessage').style.opacity = '0';
            document.getElementById('combo').style.opacity = '0';
            updateDisplay();
        }

        // Event listeners
        document.getElementById('climbBtn').addEventListener('click', climb);
        document.getElementById('restBtn').addEventListener('click', rest);
        document.getElementById('resetBtn').addEventListener('click', resetGame);

        // Enhanced keyboard controls
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                case ' ':
                    e.preventDefault();
                    climb();
                    break;
                case 'r':
                case 'R':
                    e.preventDefault();
                    rest();
                    break;
                case 'Escape':
                    e.preventDefault();
                    resetGame();
                    break;
            }
        });

        // Initialize
        lucide.createIcons();
        if (gameState.bestTime) {
            document.getElementById('bestTime').textContent = gameState.bestTime;
        }
        updateDisplay();
    
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
      

<div className="absolute inset-0 z-0">
<div className="floating absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
<div className="floating absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full opacity-40"></div>
<div className="floating absolute top-60 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50"></div>
<div className="floating absolute top-80 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-30"></div>
</div>

<div className="absolute top-0 left-0 right-0 z-30 p-6 animate-[fadeInDown_0.8s_ease-out]">
<div className="flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center space-x-6">
<div className="flex items-center space-x-3">
<div className="relative">
<div className="energy-ring absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
<div className="relative bg-slate-900 rounded-full p-2">
<i className="w-6 h-6 text-blue-400" data-lucide="mountain" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Peak Climber</h1>
<div className="text-xs text-gray-400">Extreme Edition</div>
</div>
</div>
<div className="glass-card rounded-xl px-4 py-2 pulse-glow">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="mountain" strokeWidth="1.5"></i>
<span className="text-lg font-semibold" id="altitude">0m</span>
<div className="shimmer w-8 h-1 rounded-full"></div>
</div>
</div>
</div>
<div className="flex items-center space-x-6">

<div className="glass-card rounded-xl p-3">
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-yellow-400" data-lucide="zap" strokeWidth="1.5"></i>
<div className="space-y-1">
<div className="flex justify-between text-xs">
<span className="text-gray-300">Stamina</span>
<span className="font-medium" id="staminaText">100%</span>
</div>
<div className="w-32 h-3 bg-slate-800 rounded-full overflow-hidden border border-gray-600">
<div className="stamina-bar h-full rounded-full transition-all duration-300" id="staminaBar" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl px-4 py-3">
<div className="flex items-center space-x-3">
<div className="relative">
<i className="w-5 h-5 text-yellow-400" data-lucide="sun" id="weatherIcon" strokeWidth="1.5"></i>
<div className="absolute -inset-1 bg-yellow-400/20 rounded-full animate-ping"></div>
</div>
<div>
<div className="text-sm font-semibold" id="temperature">15°C</div>
<div className="text-xs text-gray-400" id="weatherDesc">Perfect</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl px-4 py-3">
<div className="text-center">
<div className="text-xs text-gray-400">Score</div>
<div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" id="score">0</div>
<div className="text-xs text-purple-400 opacity-0" id="combo">x1 Combo</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-screen mountain-gradient overflow-hidden">

<div className="absolute inset-0 z-10">
<div className="floating absolute top-16 left-16 w-20 h-12 bg-gradient-to-r from-white/10 to-blue/20 rounded-full blur-sm"></div>
<div className="floating absolute top-32 right-24 w-24 h-14 bg-gradient-to-r from-purple/15 to-pink/10 rounded-full blur-sm"></div>
<div className="floating absolute top-48 left-1/3 w-16 h-8 bg-white/8 rounded-full blur-sm"></div>
<div className="floating absolute top-64 right-1/4 w-28 h-16 bg-gradient-to-r from-cyan/12 to-blue/8 rounded-full blur-sm"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 z-20">
<svg className="w-full h-full" viewbox="0 0 900 700">

<path d="M0 700 L250 450 L500 250 L750 100 L900 50 L900 700 Z" fill="url(#mountainGradient1)" opacity="0.2"></path>
<path d="M0 700 L200 500 L400 350 L600 250 L800 150 L900 100 L900 700 Z" fill="url(#mountainGradient2)" opacity="0.4"></path>
<path d="M0 700 L150 550 L350 400 L550 300 L750 200 L900 150 L900 700 Z" fill="url(#mountainGradient3)" opacity="0.6"></path>

<path d="M60 650 Q250 550 450 450 T750 200 T850 100" fill="none" filter="url(#glow)" id="climbingPath" stroke="url(#pathGradient)" strokeWidth="4"></path>

<g id="checkpoints">
<circle cx="180" cy="600" fill="#10b981" opacity="0.9" r="6">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="6;8;6"></animate>
</circle>
<circle cx="320" cy="530" fill="#3b82f6" opacity="0.9" r="6">
<animate attributename="r" begin="0.5s" dur="2s" repeatcount="indefinite" values="6;8;6"></animate>
</circle>
<circle cx="480" cy="430" fill="#8b5cf6" opacity="0.9" r="6">
<animate attributename="r" begin="1s" dur="2s" repeatcount="indefinite" values="6;8;6"></animate>
</circle>
<circle cx="650" cy="300" fill="#ec4899" opacity="0.9" r="6">
<animate attributename="r" begin="1.5s" dur="2s" repeatcount="indefinite" values="6;8;6"></animate>
</circle>
<circle cx="850" cy="100" fill="#fbbf24" opacity="1" r="8">
<animate attributename="r" dur="1s" repeatcount="indefinite" values="8;12;8"></animate>
</circle>
</g>
<defs>
<lineargradient id="mountainGradient1" x1="0%" x2="0%" y1="100%" y2="0%">
<stop offset="0%" style={{stopColor: '#1e1b4b'}}></stop>
<stop offset="100%" style={{stopColor: '#3730a3'}}></stop>
</lineargradient>
<lineargradient id="mountainGradient2" x1="0%" x2="0%" y1="100%" y2="0%">
<stop offset="0%" style={{stopColor: '#312e81'}}></stop>
<stop offset="100%" style={{stopColor: '#5b21b6'}}></stop>
</lineargradient>
<lineargradient id="mountainGradient3" x1="0%" x2="0%" y1="100%" y2="0%">
<stop offset="0%" style={{stopColor: '#1e293b'}}></stop>
<stop offset="100%" style={{stopColor: '#7c2d12'}}></stop>
</lineargradient>
<lineargradient id="pathGradient">
<stop offset="0%" style={{stopColor: '#3b82f6'}}></stop>
<stop offset="50%" style={{stopColor: '#8b5cf6'}}></stop>
<stop offset="100%" style={{stopColor: '#ec4899'}}></stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
</svg>
</div>

<div className="climber absolute bottom-24 left-16 z-25 animate-[fadeIn_1s_ease-out_0.5s_both]" id="climber">
<div className="relative">
<div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30 animate-pulse"></div>
<div className="relative w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center border-2 border-white/30">
<i className="w-6 h-6 text-white" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div className="absolute -top-12 left-1/2 transform -translate-x-1/2 glass-card rounded-lg px-3 py-2 text-xs whitespace-nowrap opacity-0 transition-all duration-300" id="climberStatus">
<div className="text-center">
<div className="font-medium">Ready to climb!</div>
<div className="text-gray-400 text-xs">Press SPACE</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
<div className="glass-card rounded-2xl p-6 neon-border">
<div className="flex items-center justify-center space-x-6">
<button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 px-6 py-3 rounded-xl font-semibold transform hover:scale-105 active:scale-95" id="climbBtn">
<div className="shimmer absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity"></div>
<div className="relative flex items-center space-x-2">
<i className="w-5 h-5" data-lucide="mountain" strokeWidth="1.5"></i>
<span>Climb</span>
<div className="text-xs bg-white/20 px-2 py-1 rounded">SPACE</div>
</div>
</button>
<button className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 transition-all duration-300 px-6 py-3 rounded-xl font-semibold transform hover:scale-105 active:scale-95" id="restBtn">
<div className="shimmer absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity"></div>
<div className="relative flex items-center space-x-2">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
<span>Rest</span>
<div className="text-xs bg-white/20 px-2 py-1 rounded">R</div>
</div>
</button>
<button className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-pink-700 hover:from-red-700 hover:to-pink-800 transition-all duration-300 px-6 py-3 rounded-xl font-semibold transform hover:scale-105 active:scale-95" id="resetBtn">
<div className="shimmer absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity"></div>
<div className="relative flex items-center space-x-2">
<i className="w-5 h-5" data-lucide="refresh-cw" strokeWidth="1.5"></i>
<span>Reset</span>
<div className="text-xs bg-white/20 px-2 py-1 rounded">ESC</div>
</div>
</button>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 glass-card rounded-2xl p-8 text-center opacity-0 transition-all duration-500 max-w-md" id="gameMessage">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 animate-pulse"></div>
<div className="relative">
<h2 className="text-3xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Game Over</h2>
<p className="text-gray-300 mb-6 text-lg">You've reached the summit!</p>
<button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 px-8 py-3 rounded-xl font-semibold transform hover:scale-105" onclick="resetGame()">
<div className="flex items-center space-x-2">
<i className="w-5 h-5" data-lucide="play" strokeWidth="1.5"></i>
<span>Play Again</span>
</div>
</button>
</div>
</div>
</div>

<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none" id="comboDisplay"></div>
</div>

<div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 animate-[fadeInRight_0.8s_ease-out_1s_both]">
<div className="glass-card rounded-2xl p-6 w-64 neon-border">
<div className="text-center mb-6">
<h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mission Progress</h3>
<div className="text-sm text-gray-400">Conquer the Peak</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
<div>
<div className="text-sm font-medium">Base Camp</div>
<div className="text-xs text-gray-400">1,000m</div>
</div>
<div className="text-green-400 text-xl" id="checkpoint1">✓</div>
</div>
<div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
<div>
<div className="text-sm font-medium">Forest Line</div>
<div className="text-xs text-gray-400">2,500m</div>
</div>
<div className="text-gray-500 text-xl" id="checkpoint2">○</div>
</div>
<div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
<div>
<div className="text-sm font-medium">Rock Face</div>
<div className="text-xs text-gray-400">4,500m</div>
</div>
<div className="text-gray-500 text-xl" id="checkpoint3">○</div>
</div>
<div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
<div>
<div className="text-sm font-medium">Death Zone</div>
<div className="text-xs text-gray-400">6,500m</div>
</div>
<div className="text-gray-500 text-xl" id="checkpoint4">○</div>
</div>
<div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
<div>
<div className="text-sm font-medium">Summit</div>
<div className="text-xs text-gray-400">8,848m</div>
</div>
<div className="text-gray-500 text-xl" id="checkpoint5">○</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-gray-700">
<div className="flex justify-between text-sm">
<span className="text-gray-400">Time:</span>
<span className="font-mono font-semibold" id="gameTime">00:00</span>
</div>
<div className="flex justify-between text-sm mt-2">
<span className="text-gray-400">Best Time:</span>
<span className="font-mono font-semibold text-green-400" id="bestTime">--:--</span>
</div>
</div>
</div>
</div>


    </>
  );
}
