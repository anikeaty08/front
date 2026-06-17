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
      
        // ABSOLUTELY RIDICULOUS face configurations
        const faceOptions = {
            eyes: {
                normal: '<div class="w-20 h-20 bg-white rounded-full border-4 border-red-500 flex items-center justify-center animate-bounce-crazy"><div class="w-12 h-12 bg-red-500 rounded-full text-white text-2xl flex items-center justify-center animate-spin-slow">😵‍💫</div></div><div class="w-20 h-20 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center animate-bounce-crazy" style="animation-delay: 0.3s;"><div class="w-12 h-12 bg-blue-500 rounded-full text-white text-2xl flex items-center justify-center animate-spin-slow" style="animation-delay: 0.5s;">🤪</div></div>',
                googly: '<div class="w-24 h-24 bg-white rounded-full border-4 border-purple-500 flex items-center justify-center animate-jello"><div class="w-16 h-16 bg-black rounded-full animate-bounce-crazy text-white text-3xl flex items-center justify-center">👁️</div></div><div class="w-16 h-16 bg-white rounded-full border-4 border-green-500 flex items-center justify-center animate-wiggle-wild"><div class="w-8 h-8 bg-black rounded-full animate-spin-slow"></div></div>',
                laser: '<div class="w-20 h-20 bg-red-500 rounded-full border-4 border-yellow-400 flex items-center justify-center animate-pulse"><div class="text-4xl animate-spin-slow">🔥</div></div><div class="w-20 h-20 bg-blue-500 rounded-full border-4 border-cyan-400 flex items-center justify-center animate-pulse" style="animation-delay: 0.5s;"><div class="text-4xl animate-spin-slow" style="animation-delay: 0.3s;">⚡</div></div>',
                alien: '<div class="w-24 h-16 bg-green-400 rounded-full border-4 border-lime-500 flex items-center justify-center animate-wiggle-wild"><div class="text-5xl">👽</div></div>',
                heart: '<div class="w-20 h-20 bg-pink-400 rounded-full border-4 border-red-500 flex items-center justify-center animate-jello"><div class="text-4xl animate-pulse">😍</div></div><div class="w-20 h-20 bg-pink-400 rounded-full border-4 border-red-500 flex items-center justify-center animate-jello" style="animation-delay: 0.5s;"><div class="text-4xl animate-pulse" style="animation-delay: 0.3s;">💖</div></div>',
                zombie: '<div class="w-22 h-22 bg-green-600 rounded-full border-4 border-gray-500 flex items-center justify-center animate-shake"><div class="text-4xl">🧟</div></div><div class="w-18 h-18 bg-red-600 rounded-full border-4 border-black flex items-center justify-center animate-shake" style="animation-delay: 0.2s;"><div class="text-3xl">💀</div></div>'
            },
            nose: {
                normal: '<div class="w-16 h-16 bg-pink-400 transform rotate-45 border-4 border-purple-500 flex items-center justify-center animate-wiggle-wild"><div class="text-2xl transform -rotate-45">🐽</div></div>',
                elephant: '<div class="w-12 h-24 bg-gray-400 rounded-full border-4 border-gray-600 animate-shake flex items-center justify-center"><div class="text-4xl">🐘</div></div>',
                clown: '<div class="w-20 h-20 bg-red-500 rounded-full border-4 border-yellow-400 animate-jello flex items-center justify-center"><div class="text-4xl">🤡</div></div>',
                carrot: '<div class="w-8 h-20 bg-orange-500 transform rotate-180 rounded-t-full border-4 border-green-400 animate-wiggle-wild flex items-center justify-center"><div class="text-2xl transform rotate-180">🥕</div></div>',
                pickle: '<div class="w-12 h-16 bg-green-500 rounded-full border-4 border-green-700 animate-bounce-crazy flex items-center justify-center"><div class="text-2xl">🥒</div></div>',
                volcano: '<div class="w-16 h-20 bg-red-600 rounded-t-full border-4 border-orange-500 animate-pulse flex items-center justify-center relative"><div class="text-3xl">🌋</div><div class="absolute -top-4 text-2xl animate-bounce">💥</div></div>'
            },
            mouth: {
                scream: '<div class="w-28 h-20 bg-black rounded-full border-4 border-red-600 flex items-center justify-center animate-shake"><div class="text-5xl">😱</div></div>',
                laugh: '<div class="w-32 h-16 bg-yellow-400 border-4 border-orange-500 transform rotate-12 animate-jello flex items-center justify-center"><div class="text-4xl transform -rotate-12">🤣</div></div>',
                vomit: '<div class="w-24 h-20 bg-green-500 rounded-full border-4 border-yellow-400 animate-shake flex items-center justify-center relative"><div class="text-4xl">🤮</div><div class="absolute -bottom-4 -left-2 text-2xl animate-bounce">💚</div></div>',
                drool: '<div class="w-20 h-16 bg-blue-400 rounded-full border-4 border-cyan-500 animate-wiggle-wild flex items-center justify-center relative"><div class="text-3xl">🤤</div><div class="absolute -bottom-6 w-2 h-8 bg-blue-300 rounded-full animate-pulse"></div></div>',
                vampire: '<div class="w-24 h-18 bg-red-600 rounded-full border-4 border-black animate-pulse flex items-center justify-center"><div class="text-4xl">🧛</div></div>',
                fish: '<div class="w-20 h-12 bg-blue-400 rounded-full border-4 border-cyan-500 animate-jello flex items-center justify-center"><div class="text-3xl">🐠</div></div>'
            },
            hair: {
                rainbow: '<div class="flex space-x-1 animate-wiggle-wild"><div class="w-6 h-16 transform rotate-12 rounded-full text-2xl flex items-end" style="background: linear-gradient(45deg, #ff0000, #ff7f00);">🌈</div><div class="w-6 h-20 transform -rotate-6 rounded-full" style="background: linear-gradient(45deg, #ffff00, #00ff00);"></div><div class="w-6 h-18 transform rotate-6 rounded-full" style="background: linear-gradient(45deg, #0000ff, #8b00ff);"></div><div class="w-6 h-22 transform -rotate-12 rounded-full" style="background: linear-gradient(45deg, #ff00ff, #ff0000);"></div></div>',
                afro: '<div class="w-32 h-24 bg-brown-600 rounded-full border-4 border-yellow-400 animate-jello flex items-center justify-center"><div class="text-6xl">🕺</div></div>',
                mohawk: '<div class="flex justify-center animate-shake"><div class="w-4 h-24 bg-red-500 border-2 border-black transform rotate-6"></div><div class="w-4 h-28 bg-orange-500 border-2 border-black"></div><div class="w-4 h-32 bg-yellow-500 border-2 border-black"></div><div class="w-4 h-28 bg-green-500 border-2 border-black"></div><div class="w-4 h-24 bg-blue-500 border-2 border-black transform -rotate-6"></div></div>',
                octopus: '<div class="relative animate-wiggle-wild"><div class="w-20 h-16 bg-purple-500 rounded-full border-4 border-pink-400 flex items-center justify-center"><div class="text-4xl">🐙</div></div><div class="absolute -top-2 -left-4 w-2 h-12 bg-purple-400 rounded-full transform rotate-45 animate-bounce"></div><div class="absolute -top-2 -right-4 w-2 h-12 bg-purple-400 rounded-full transform -rotate-45 animate-bounce" style="animation-delay: 0.2s;"></div></div>',
                fire: '<div class="flex space-x-1 animate-wiggle-wild"><div class="w-8 h-20 bg-gradient-to-t from-red-500 to-yellow-400 rounded-t-full animate-pulse border-2 border-orange-500"></div><div class="w-8 h-24 bg-gradient-to-t from-orange-500 to-red-400 rounded-t-full animate-pulse border-2 border-red-500" style="animation-delay: 0.2s;"></div><div class="w-8 h-22 bg-gradient-to-t from-yellow-500 to-orange-400 rounded-t-full animate-pulse border-2 border-yellow-500" style="animation-delay: 0.4s;"></div></div>',
                bald: '<div class="w-24 h-12 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-t-full border-4 border-yellow-400 animate-jello flex items-center justify-center"><div class="text-4xl">🥚</div></div>'
            }
        };

        // Crazy sound effects (visual representation)
        const crazyEmojis = ['💥', '⚡', '🔥', '💫', '🌟', '💖', '🎉', '🎊', '🚀', '💎'];
        
        function createCrazyExplosion() {
            for(let i = 0; i < 10; i++) {
                const emoji = document.createElement('div');
                emoji.innerHTML = crazyEmojis[Math.floor(Math.random() * crazyEmojis.length)];
                emoji.className = 'fixed text-4xl pointer-events-none z-50';
                emoji.style.left = Math.random() * window.innerWidth + 'px';
                emoji.style.top = Math.random() * window.innerHeight + 'px';
                emoji.style.animation = `fadeOut 2s ease-out forwards`;
                document.body.appendChild(emoji);
                setTimeout(() => emoji.remove(), 2000);
            }
        }

        // Initialize face parts
        let currentFace = {
            eyes: 'normal',
            nose: 'normal',
            mouth: 'scream',
            hair: 'rainbow'
        };

        // Update face part with CRAZY effects
        function updateFacePart(part, type) {
            const element = document.getElementById(part);
            element.innerHTML = faceOptions[part][type];
            element.classList.add('animate-pulse');
            createCrazyExplosion();
            setTimeout(() => element.classList.remove('animate-pulse'), 500);
            currentFace[part] = type;
        }

        // Event listeners for INSANE controls
        document.querySelectorAll('.eye-option').forEach(btn => {
            btn.addEventListener('click', () => {
                updateFacePart('eyes', btn.dataset.type);
                btn.classList.add('animate-bounce');
                setTimeout(() => btn.classList.remove('animate-bounce'), 500);
            });
        });

        document.querySelectorAll('.nose-option').forEach(btn => {
            btn.addEventListener('click', () => {
                updateFacePart('nose', btn.dataset.type);
                btn.classList.add('animate-spin');
                setTimeout(() => btn.classList.remove('animate-spin'), 500);
            });
        });

        document.querySelectorAll('.mouth-option').forEach(btn => {
            btn.addEventListener('click', () => {
                updateFacePart('mouth', btn.dataset.type);
                btn.classList.add('animate-wiggle-wild');
                setTimeout(() => btn.classList.remove('animate-wiggle-wild'), 500);
            });
        });

        document.querySelectorAll('.hair-option').forEach(btn => {
            btn.addEventListener('click', () => {
                updateFacePart('hair', btn.dataset.type);
                btn.classList.add('animate-jello');
                setTimeout(() => btn.classList.remove('animate-jello'), 500);
            });
        });

        // BONKERS Random Face Generator
        document.getElementById('randomize').addEventListener('click', () => {
            const eyeTypes = Object.keys(faceOptions.eyes);
            const noseTypes = Object.keys(faceOptions.nose);
            const mouthTypes = Object.keys(faceOptions.mouth);
            const hairTypes = Object.keys(faceOptions.hair);

            // Create MEGA explosion effect
            for(let i = 0; i < 20; i++) {
                setTimeout(() => createCrazyExplosion(), i * 100);
            }

            // Make the face container go absolutely wild
            const faceContainer = document.querySelector('.face-container');
            faceContainer.classList.add('animate-shake');
            
            setTimeout(() => {
                updateFacePart('eyes', eyeTypes[Math.floor(Math.random() * eyeTypes.length)]);
            }, 200);
            
            setTimeout(() => {
                updateFacePart('nose', noseTypes[Math.floor(Math.random() * noseTypes.length)]);
            }, 400);
            
            setTimeout(() => {
                updateFacePart('mouth', mouthTypes[Math.floor(Math.random() * mouthTypes.length)]);
            }, 600);
            
            setTimeout(() => {
                updateFacePart('hair', hairTypes[Math.floor(Math.random() * hairTypes.length)]);
                faceContainer.classList.remove('animate-shake');
            }, 800);

            // Make the button dance
            const btn = document.getElementById('randomize');
            btn.classList.add('animate-bounce-crazy');
            setTimeout(() => btn.classList.remove('animate-bounce-crazy'), 1000);
        });

        // Reset to original crazy state
        document.getElementById('reset').addEventListener('click', () => {
            updateFacePart('eyes', 'normal');
            updateFacePart('nose', 'normal');
            updateFacePart('mouth', 'scream');
            updateFacePart('hair', 'rainbow');
            
            const btn = document.getElementById('reset');
            btn.classList.add('animate-spin');
            setTimeout(() => btn.classList.remove('animate-spin'), 500);
        });

        // Add some INSANE interactive effects
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('face-part')) {
                createCrazyExplosion();
            }
        });

        // Random floating emojis for extra chaos
        function spawnRandomEmoji() {
            const emojis = ['🤪', '😵‍💫', '🤯', '🥴', '😵', '🤮', '🤢', '😮‍💨', '🥸', '🤓'];
            const emoji = document.createElement('div');
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.className = 'fixed text-2xl pointer-events-none z-40 animate-bounce';
            emoji.style.left = Math.random() * (window.innerWidth - 50) + 'px';
            emoji.style.top = window.innerHeight + 'px';
            emoji.style.animation = `floatUp 3s ease-out forwards`;
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 3000);
        }

        // Spawn random emojis every few seconds
        setInterval(spawnRandomEmoji, 3000);

        // Add custom CSS for floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut { 
                0% { opacity: 1; transform: scale(1); } 
                100% { opacity: 0; transform: scale(2) rotate(180deg); } 
            }
            @keyframes floatUp { 
                0% { transform: translateY(0) rotate(0deg); opacity: 1; } 
                100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; } 
            }
            @keyframes fadeIn { 
                0% { opacity: 0; transform: translateY(30px); } 
                100% { opacity: 1; transform: translateY(0); } 
            }
        `;
        document.head.appendChild(style);

        // Initialize with default crazy face
        setTimeout(() => {
            updateFacePart('eyes', 'normal');
            updateFacePart('nose', 'normal');
            updateFacePart('mouth', 'scream');
            updateFacePart('hair', 'rainbow');
        }, 1000);

        // Add konami code for ULTIMATE CHAOS MODE
        let konamiCode = [];
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.code);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
                // ACTIVATE CHAOS MODE!
                document.body.style.animation = 'rainbow 0.5s infinite';
                for(let i = 0; i < 50; i++) {
                    setTimeout(() => createCrazyExplosion(), i * 50);
                    setTimeout(() => spawnRandomEmoji(), i * 100);
                }
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 5000);
            }
        });
    
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
      
<div className="container mx-auto px-4 py-8 max-w-6xl">

<div className="text-center mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]" style={{animationFillMode: 'forwards'}}>
<h1 className="text-6xl md:text-7xl font-bold tracking-tight rainbow-text mb-4 animate-jello">
                🤪 RIDICULOUS FACE MAKER 🤪
            </h1>
<p className="text-purple-600 text-xl max-w-2xl mx-auto font-bold animate-bounce">
                WARNING: May cause uncontrollable laughter! 😂💀
            </p>
<div className="flex justify-center space-x-4 mt-4 text-4xl animate-wiggle-wild">
                🎭 🤡 😵‍💫 🤯 🥴
            </div>
</div>
<div className="grid lg:grid-cols-2 gap-8 items-start">

<div className="flex flex-col items-center opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]" style={{animationFillMode: 'forwards'}}>
<div className="relative w-96 h-[500px] face-container rounded-3xl shadow-2xl border-8 border-rainbow crazy-shadow mb-6 overflow-visible animate-jello" style={{borderImage: 'linear-gradient(45deg, red, orange, yellow, green, blue, purple) 1'}}>

<div className="absolute inset-4 rounded-2xl bg-gradient-to-b from-yellow-200 to-orange-200"></div>

<div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex space-x-12 face-part z-10" id="eyes">
<div className="w-16 h-16 bg-white rounded-full border-4 border-red-500 flex items-center justify-center animate-bounce-crazy">
<div className="w-8 h-8 bg-red-500 rounded-full animate-spin-slow">💀</div>
</div>
<div className="w-16 h-16 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center animate-bounce-crazy" style={{animationDelay: '0.2s'}}>
<div className="w-8 h-8 bg-blue-500 rounded-full animate-spin-slow" style={{animationDelay: '0.5s'}}>👁️</div>
</div>
</div>

<div className="absolute top-44 left-1/2 transform -translate-x-1/2 face-part z-10 animate-wiggle-wild" id="nose">
<div className="w-12 h-12 bg-pink-400 transform rotate-45 border-4 border-purple-500">🐽</div>
</div>

<div className="absolute top-64 left-1/2 transform -translate-x-1/2 face-part z-10 animate-shake" id="mouth">
<div className="w-24 h-16 bg-red-600 rounded-full border-4 border-yellow-400 flex items-center justify-center text-2xl">
                            😱
                        </div>
</div>

<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 face-part animate-wiggle-wild z-0" id="hair">
<div className="flex space-x-2">
<div className="w-8 h-20 bg-rainbow transform rotate-12 rounded-full" style={{background: 'linear-gradient(45deg, #ff0000, #00ff00)'}}></div>
<div className="w-8 h-24 bg-rainbow transform -rotate-6 rounded-full" style={{background: 'linear-gradient(45deg, #0000ff, #ffff00)'}}></div>
<div className="w-8 h-22 bg-rainbow transform rotate-6 rounded-full" style={{background: 'linear-gradient(45deg, #ff00ff, #00ffff)'}}></div>
</div>
</div>

<div className="absolute top-12 left-1/2 transform -translate-x-1/2 face-part z-20" id="accessories">
<div className="text-6xl animate-spin-slow">🤓</div>
</div>

<div className="absolute -top-4 -left-4 text-3xl animate-bounce">💥</div>
<div className="absolute -top-4 -right-4 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>⚡</div>
<div className="absolute -bottom-4 -left-4 text-3xl animate-bounce" style={{animationDelay: '1s'}}>🔥</div>
<div className="absolute -bottom-4 -right-4 text-3xl animate-bounce" style={{animationDelay: '1.5s'}}>💫</div>
</div>

<div className="flex space-x-4">
<button className="control-button bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl text-xl animate-pulse" id="randomize">
                        🎲 MAKE IT BONKERS! 🎲
                    </button>
<button className="control-button bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl text-xl" id="reset">
                        🔄 UN-CRAZY IT! 🔄
                    </button>
</div>
</div>

<div className="space-y-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]" style={{animationFillMode: 'forwards'}}>

<div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 shadow-lg border-4 border-blue-300">
<h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center animate-wiggle-wild">
                        👁️‍🗨️ CRAZY EYES 👁️‍🗨️
                    </h3>
<div className="grid grid-cols-3 gap-4">
<button className="eye-option control-button p-4 rounded-xl bg-red-200 hover:bg-red-300 border-4 border-red-400 text-2xl animate-pulse" data-type="normal">😵‍💫</button>
<button className="eye-option control-button p-4 rounded-xl bg-blue-200 hover:bg-blue-300 border-4 border-blue-400 text-2xl" data-type="googly">🤪</button>
<button className="eye-option control-button p-4 rounded-xl bg-green-200 hover:bg-green-300 border-4 border-green-400 text-2xl" data-type="laser">🔥</button>
<button className="eye-option control-button p-4 rounded-xl bg-yellow-200 hover:bg-yellow-300 border-4 border-yellow-400 text-2xl" data-type="alien">👽</button>
<button className="eye-option control-button p-4 rounded-xl bg-pink-200 hover:bg-pink-300 border-4 border-pink-400 text-2xl" data-type="heart">😍</button>
<button className="eye-option control-button p-4 rounded-xl bg-purple-200 hover:bg-purple-300 border-4 border-purple-400 text-2xl" data-type="zombie">🧟</button>
</div>
</div>

<div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 shadow-lg border-4 border-orange-300">
<h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center animate-shake">
                        👃 BONKERS NOSES 👃
                    </h3>
<div className="grid grid-cols-3 gap-4">
<button className="nose-option control-button p-4 rounded-xl bg-orange-200 hover:bg-orange-300 border-4 border-orange-400 text-2xl" data-type="normal">🐽</button>
<button className="nose-option control-button p-4 rounded-xl bg-pink-200 hover:bg-pink-300 border-4 border-pink-400 text-2xl" data-type="elephant">🐘</button>
<button className="nose-option control-button p-4 rounded-xl bg-red-200 hover:bg-red-300 border-4 border-red-400 text-2xl" data-type="clown">🤡</button>
<button className="nose-option control-button p-4 rounded-xl bg-yellow-200 hover:bg-yellow-300 border-4 border-yellow-400 text-2xl" data-type="carrot">🥕</button>
<button className="nose-option control-button p-4 rounded-xl bg-green-200 hover:bg-green-300 border-4 border-green-400 text-2xl" data-type="pickle">🥒</button>
<button className="nose-option control-button p-4 rounded-xl bg-purple-200 hover:bg-purple-300 border-4 border-purple-400 text-2xl" data-type="volcano">🌋</button>
</div>
</div>

<div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-6 shadow-lg border-4 border-red-300">
<h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center animate-jello">
                        👄 INSANE MOUTHS 👄
                    </h3>
<div className="grid grid-cols-3 gap-4">
<button className="mouth-option control-button p-4 rounded-xl bg-red-200 hover:bg-red-300 border-4 border-red-400 text-2xl" data-type="scream">😱</button>
<button className="mouth-option control-button p-4 rounded-xl bg-yellow-200 hover:bg-yellow-300 border-4 border-yellow-400 text-2xl" data-type="laugh">🤣</button>
<button className="mouth-option control-button p-4 rounded-xl bg-blue-200 hover:bg-blue-300 border-4 border-blue-400 text-2xl" data-type="vomit">🤮</button>
<button className="mouth-option control-button p-4 rounded-xl bg-green-200 hover:bg-green-300 border-4 border-green-400 text-2xl" data-type="drool">🤤</button>
<button className="mouth-option control-button p-4 rounded-xl bg-purple-200 hover:bg-purple-300 border-4 border-purple-400 text-2xl" data-type="vampire">🧛</button>
<button className="mouth-option control-button p-4 rounded-xl bg-orange-200 hover:bg-orange-300 border-4 border-orange-400 text-2xl" data-type="fish">🐠</button>
</div>
</div>

<div className="bg-gradient-to-r from-yellow-100 to-green-100 rounded-2xl p-6 shadow-lg border-4 border-yellow-300">
<h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center animate-wiggle-wild">
                        💇‍♂️ RIDICULOUS HAIR 💇‍♂️
                    </h3>
<div className="grid grid-cols-3 gap-4">
<button className="hair-option control-button p-4 rounded-xl bg-yellow-200 hover:bg-yellow-300 border-4 border-yellow-400 text-2xl" data-type="rainbow">🌈</button>
<button className="hair-option control-button p-4 rounded-xl bg-brown-200 hover:bg-brown-300 border-4 border-brown-400 text-2xl" data-type="afro">🕺</button>
<button className="hair-option control-button p-4 rounded-xl bg-green-200 hover:bg-green-300 border-4 border-green-400 text-2xl" data-type="mohawk">🦜</button>
<button className="hair-option control-button p-4 rounded-xl bg-blue-200 hover:bg-blue-300 border-4 border-blue-400 text-2xl" data-type="octopus">🐙</button>
<button className="hair-option control-button p-4 rounded-xl bg-red-200 hover:bg-red-300 border-4 border-red-400 text-2xl" data-type="fire">🔥</button>
<button className="hair-option control-button p-4 rounded-xl bg-gray-200 hover:bg-gray-300 border-4 border-gray-400 text-2xl" data-type="bald">🥚</button>
</div>
</div>
</div>
</div>
</div>


<div className="fixed bottom-4 right-4 text-xs text-gray-400 opacity-50">
        🎮 Try the Konami Code for chaos mode! 🎮
    </div>

<footer className="text-center py-8 mt-12">
<div className="text-2xl mb-4 animate-wiggle-wild">
            🎭 Created with MAXIMUM CHAOS! 🎭
        </div>
<p className="text-purple-600 font-bold">
            Warning: Side effects may include uncontrollable giggling, face cramping from smiling, and spontaneous emoji usage! 😂🤪🎉
        </p>
</footer>

    </>
  );
}
