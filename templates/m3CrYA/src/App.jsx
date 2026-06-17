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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Pet stats
        let stats = {
            happiness: 75,
            energy: 60,
            magicPoints: 150,
            lovePoints: 80
        };
        
        // DOM elements
        const happinessMeter = document.getElementById('happiness-meter');
        const energyMeter = document.getElementById('energy-meter');
        const magicPointsDisplay = document.getElementById('magic-points');
        const lovePointsDisplay = document.getElementById('love-points');
        const statusMessage = document.getElementById('status-message');
        const activityLog = document.getElementById('activity-log');
        const sprunki = document.getElementById('sprunki-pet');
        const sprunkiMouth = document.getElementById('sprunki-mouth');
        
        // Buttons
        const feedBtn = document.getElementById('feed-btn');
        const playBtn = document.getElementById('play-btn');
        const petBtn = document.getElementById('pet-btn');
        const danceBtn = document.getElementById('dance-btn');
        const glowBtn = document.getElementById('glow-btn');
        const singBtn = document.getElementById('sing-btn');
        const transformBtn = document.getElementById('transform-btn');
        
        // Update UI
        function updateUI() {
            happinessMeter.style.width = `${stats.happiness}%`;
            energyMeter.style.width = `${stats.energy}%`;
            magicPointsDisplay.textContent = stats.magicPoints;
            lovePointsDisplay.textContent = stats.lovePoints;
            
            // Update status message based on stats
            if (stats.happiness < 30) {
                statusMessage.textContent = "Sprunki is feeling sad...";
            } else if (stats.energy < 30) {
                statusMessage.textContent = "Sprunki is tired...";
            } else if (stats.happiness > 80 && stats.energy > 80) {
                statusMessage.textContent = "Sprunki is super excited!";
            } else {
                statusMessage.textContent = "Sprunki is feeling good!";
            }
        }
        
        // Add activity to log
        function addActivity(message) {
            const entry = document.createElement('p');
            entry.className = 'mb-1 text-purple-200';
            entry.textContent = `• ${message}`;
            activityLog.prepend(entry);
        }
        
        // React animation
        function reactAnimation(type) {
            sprunki.classList.remove('float-animation');
            
            switch(type) {
                case 'happy':
                    sprunki.style.transform = 'translateY(-20px)';
                    sprunkiMouth.style.height = '12px';
                    setTimeout(() => {
                        sprunki.style.transform = 'translateY(0)';
                        setTimeout(() => {
                            sprunki.style.transform = 'translateY(-10px)';
                            setTimeout(() => {
                                sprunki.style.transform = '';
                                sprunki.classList.add('float-animation');
                                sprunkiMouth.style.height = '8px';
                            }, 200);
                        }, 200);
                    }, 200);
                    break;
                    
                case 'eat':
                    sprunkiMouth.style.height = '16px';
                    sprunkiMouth.style.width = '20px';
                    setTimeout(() => {
                        sprunkiMouth.style.height = '8px';
                        sprunkiMouth.style.width = '16px';
                        sprunki.classList.add('float-animation');
                    }, 1000);
                    break;
                    
                case 'dance':
                    let count = 0;
                    const danceInterval = setInterval(() => {
                        if (count % 2 === 0) {
                            sprunki.style.transform = 'rotate(-10deg) translateX(-10px)';
                        } else {
                            sprunki.style.transform = 'rotate(10deg) translateX(10px)';
                        }
                        count++;
                        if (count > 5) {
                            clearInterval(danceInterval);
                            sprunki.style.transform = '';
                            sprunki.classList.add('float-animation');
                        }
                    }, 200);
                    break;
                    
                case 'glow':
                    const originalColor = 'bg-purple-500';
                    sprunki.querySelector('div:first-child').classList.remove(originalColor);
                    sprunki.querySelector('div:first-child').classList.add('bg-yellow-400');
                    
                    setTimeout(() => {
                        sprunki.querySelector('div:first-child').classList.remove('bg-yellow-400');
                        sprunki.querySelector('div:first-child').classList.add(originalColor);
                        sprunki.classList.add('float-animation');
                    }, 2000);
                    break;
                    
                case 'transform':
                    sprunki.style.transform = 'scale(0.5) rotate(180deg)';
                    setTimeout(() => {
                        sprunki.style.transform = 'scale(1.2)';
                        sprunki.querySelector('div:first-child').classList.remove('bg-purple-500');
                        sprunki.querySelector('div:first-child').classList.add('bg-blue-500');
                        setTimeout(() => {
                            sprunki.style.transform = '';
                            setTimeout(() => {
                                sprunki.querySelector('div:first-child').classList.remove('bg-blue-500');
                                sprunki.querySelector('div:first-child').classList.add('bg-purple-500');
                                sprunki.classList.add('float-animation');
                            }, 1500);
                        }, 200);
                    }, 500);
                    break;
            }
        }
        
        // Button event listeners
        feedBtn.addEventListener('click', () => {
            stats.energy = Math.min(100, stats.energy + 15);
            stats.happiness = Math.min(100, stats.happiness + 5);
            updateUI();
            addActivity("You fed Sprunki some magical berries!");
            reactAnimation('eat');
        });
        
        playBtn.addEventListener('click', () => {
            if (stats.energy >= 10) {
                stats.energy = Math.max(0, stats.energy - 10);
                stats.happiness = Math.min(100, stats.happiness + 20);
                stats.magicPoints = Math.min(200, stats.magicPoints + 5);
                updateUI();
                addActivity("Sprunki had fun playing with you!");
                reactAnimation('happy');
            } else {
                addActivity("Sprunki is too tired to play right now.");
            }
        });
        
        petBtn.addEventListener('click', () => {
            stats.happiness = Math.min(100, stats.happiness + 10);
            stats.lovePoints = Math.min(200, stats.lovePoints + 5);
            updateUI();
            addActivity("Sprunki purrs as you pet it!");
            reactAnimation('happy');
        });
        
        danceBtn.addEventListener('click', () => {
            if (stats.magicPoints >= 25 && stats.energy >= 15) {
                stats.magicPoints -= 25;
                stats.energy = Math.max(0, stats.energy - 15);
                stats.happiness = Math.min(100, stats.happiness + 15);
                updateUI();
                addActivity("Sprunki performs a magical dance!");
                reactAnimation('dance');
            } else {
                addActivity("Sprunki doesn't have enough magic or energy to dance.");
            }
        });
        
        glowBtn.addEventListener('click', () => {
            if (stats.magicPoints >= 15) {
                stats.magicPoints -= 15;
                updateUI();
                addActivity("Sprunki glows with magical energy!");
                reactAnimation('glow');
            } else {
                addActivity("Sprunki doesn't have enough magic to glow.");
            }
        });
        
        singBtn.addEventListener('click', () => {
            if (stats.magicPoints >= 20 && stats.energy >= 10) {
                stats.magicPoints -= 20;
                stats.energy = Math.max(0, stats.energy - 10);
                stats.happiness = Math.min(100, stats.happiness + 10);
                stats.lovePoints = Math.min(200, stats.lovePoints + 3);
                updateUI();
                addActivity("Sprunki sings a beautiful melody!");
                reactAnimation('happy');
            } else {
                addActivity("Sprunki doesn't have enough magic or energy to sing.");
            }
        });
        
        transformBtn.addEventListener('click', () => {
            if (stats.magicPoints >= 50 && stats.energy >= 25) {
                stats.magicPoints -= 50;
                stats.energy = Math.max(0, stats.energy - 25);
                stats.happiness = Math.min(100, stats.happiness + 20);
                updateUI();
                addActivity("Sprunki transforms into a different form temporarily!");
                reactAnimation('transform');
            } else {
                addActivity("Sprunki doesn't have enough magic or energy to transform.");
            }
        });
        
        // Make Sprunki clickable for quick interaction
        sprunki.addEventListener('click', () => {
            stats.happiness = Math.min(100, stats.happiness + 3);
            stats.lovePoints = Math.min(200, stats.lovePoints + 1);
            updateUI();
            addActivity("You gave Sprunki a quick pat!");
            
            // Quick happy reaction
            sprunki.style.transform = 'scale(1.1)';
            setTimeout(() => {
                sprunki.style.transform = '';
            }, 200);
        });
        
        // Automatic stats decrease over time
        setInterval(() => {
            stats.happiness = Math.max(0, stats.happiness - 2);
            stats.energy = Math.max(0, stats.energy - 1);
            
            // Regenerate some magic points over time
            if (stats.magicPoints < 200) {
                stats.magicPoints += 1;
            }
            
            updateUI();
            
            // Occasionally have Sprunki do something on its own
            if (Math.random() < 0.2) {
                const actions = [
                    "Sprunki spins around in circles.",
                    "Sprunki makes tiny magical sparkles appear.",
                    "Sprunki looks at you with big curious eyes.",
                    "Sprunki practices a small magic trick.",
                    "Sprunki floats a little higher than usual."
                ];
                addActivity(actions[Math.floor(Math.random() * actions.length)]);
            }
        }, 20000); // Every 20 seconds
        
        // Initialize
        updateUI();
    
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
      
<header className="container mx-auto py-6 px-4">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<svg className="w-10 h-10 text-yellow-300 pulse-animation" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
</svg>
<h1 className="text-2xl font-bold">Sprunki Pet</h1>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-yellow-300">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
</svg>
</span>
<span id="magic-points">150</span>
</div>
<div className="flex items-center gap-2">
<span className="text-pink-400">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" fill-rule="evenodd"></path>
</svg>
</span>
<span id="love-points">80</span>
</div>
</div>
</div>
</header>
<main className="container mx-auto px-4 py-6">
<div className="max-w-2xl mx-auto bg-indigo-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
<div className="text-center mb-6">
<h2 className="text-3xl font-bold mb-2">Your Sprunki</h2>
<p className="text-purple-200 italic" id="status-message">Sprunki is feeling playful!</p>
</div>
<div className="pet-container relative flex justify-center mb-8">
<div className="relative w-64 h-64 float-animation" id="sprunki-pet">

<div className="absolute inset-0 bg-purple-500 rounded-full transform scale-90"></div>

<div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-50"></div>

<div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white rounded-full">
<div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-900 rounded-full"></div>
</div>
<div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white rounded-full">
<div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-900 rounded-full"></div>
</div>

<div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-pink-400 rounded-b-full" id="sprunki-mouth"></div>

<div className="absolute top-0 left-1/3 w-2 h-12 bg-purple-300 rounded-full transform -rotate-12"></div>
<div className="absolute top-0 right-1/3 w-2 h-12 bg-purple-300 rounded-full transform rotate-12"></div>
<div className="absolute -top-3 left-1/3 w-4 h-4 bg-yellow-300 rounded-full pulse-animation"></div>
<div className="absolute -top-3 right-1/3 w-4 h-4 bg-yellow-300 rounded-full pulse-animation"></div>

<div className="sparkle" style={{top: '10%', left: '10%'}}></div>
<div className="sparkle" style={{top: '20%', right: '15%', animationDelay: '0.5s'}}></div>
<div className="sparkle" style={{bottom: '30%', left: '20%', animationDelay: '1s'}}></div>
<div className="sparkle" style={{bottom: '10%', right: '10%', animationDelay: '1.5s'}}></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<h3 className="text-center mb-2 font-semibold">Happiness</h3>
<div className="w-full bg-purple-900 rounded-full h-4">
<div className="mood-meter bg-pink-400 h-4 rounded-full" id="happiness-meter" style={{width: '75%'}}></div>
</div>
</div>
<div>
<h3 className="text-center mb-2 font-semibold">Energy</h3>
<div className="w-full bg-purple-900 rounded-full h-4">
<div className="mood-meter bg-yellow-400 h-4 rounded-full" id="energy-meter" style={{width: '60%'}}></div>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<button className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-medium py-3 px-4 rounded-xl transition flex flex-col items-center justify-center" id="feed-btn">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Feed
                </button>
<button className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-xl transition flex flex-col items-center justify-center" id="play-btn">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Play
                </button>
<button className="bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 text-white font-medium py-3 px-4 rounded-xl transition flex flex-col items-center justify-center" id="pet-btn">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Pet
                </button>
</div>
<div className="bg-indigo-900/50 rounded-xl p-4">
<h3 className="font-semibold mb-2">Sprunki's Magic Tricks</h3>
<div className="grid grid-cols-2 gap-3">
<button className="bg-purple-700 hover:bg-purple-600 py-2 px-3 rounded-lg transition text-sm" id="dance-btn">
                        Dance (25 magic)
                    </button>
<button className="bg-purple-700 hover:bg-purple-600 py-2 px-3 rounded-lg transition text-sm" id="glow-btn">
                        Glow (15 magic)
                    </button>
<button className="bg-purple-700 hover:bg-purple-600 py-2 px-3 rounded-lg transition text-sm" id="sing-btn">
                        Sing (20 magic)
                    </button>
<button className="bg-purple-700 hover:bg-purple-600 py-2 px-3 rounded-lg transition text-sm" id="transform-btn">
                        Transform (50 magic)
                    </button>
</div>
</div>
</div>
<div className="max-w-2xl mx-auto mt-8 bg-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
<h3 className="text-xl font-bold mb-4">Activity Log</h3>
<div className="h-32 overflow-y-auto bg-indigo-900/50 rounded-lg p-3 text-sm" id="activity-log">
<p className="mb-1 text-purple-200">• Sprunki joined your adventure!</p>
<p className="mb-1 text-purple-200">• Sprunki is looking around curiously.</p>
</div>
</div>
</main>


    </>
  );
}
