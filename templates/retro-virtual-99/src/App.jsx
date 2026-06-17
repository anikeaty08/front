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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Game Engine
        const MAX_STAT = 10;
        const TICK_RATE = 1000; // 1 second

        const frames = {
            egg: [
                "  .---.  \n /     \\ \n \\     / \n  '---'  ",
                "  .---.  \n /  .  \\ \n \\     / \n  '---'  "
            ],
            baby: [
                "   _   \n (o.o) \n  > <  ",
                "   _   \n (-.-) \n  > <  "
            ],
            adult: [
                "  /\\_/\\  \n ( o.o ) \n (  _  ) \n  \"   \"  ",
                "  /\\_/\\  \n ( -.- ) \n (  _  ) \n  \"   \"  "
            ],
            eat: [
                "  /\\_/\\  \n ( ^o^ ) \n (  _  ) \n  \"   \"  "
            ],
            happy: [
                " \\ /\\_/\\ / \n  ( ^.^ )  \n  (  _  )  \n   \"   \"   "
            ],
            dead: [
                "  /\\_/\\  \n ( x.x ) \n (  _  ) \n  \"   \"  ",
                "   RIP   \n  _____  \n |     | "
            ]
        };

        let state = {};
        let loopId;
        let animId;
        let frameIndex = 0;
        let tickCount = 0;

        function initGame() {
            clearInterval(loopId);
            clearInterval(animId);
            
            state = {
                phase: 'egg',
                hunger: MAX_STAT,
                happiness: MAX_STAT,
                energy: MAX_STAT,
                age: 0,
                poop: false,
                isSleeping: false,
                isDead: false,
                currentAction: null,
                actionTimer: 0
            };

            document.getElementById('btn-reset').classList.add('hidden');
            document.getElementById('screen-container').style.opacity = '1';
            
            showMessage("EGG HATCHING...");
            setTimeout(() => {
                state.phase = 'baby';
                showMessage("A NEW FRIEND!");
            }, 5000);

            startLoops();
            updateUI();
        }

        function startLoops() {
            // Main game logic loop
            loopId = setInterval(() => {
                if (state.isDead) return;
                
                tickCount++;

                // Evolution
                if (tickCount === 30 && state.phase === 'baby') {
                    state.phase = 'adult';
                    showMessage("EVOLVED!");
                }

                // Age
                if (tickCount % 60 === 0) state.age++;

                // Action timer clearing
                if (state.currentAction && state.actionTimer > 0) {
                    state.actionTimer--;
                    if (state.actionTimer <= 0) state.currentAction = null;
                }

                // Stat decay
                if (!state.isSleeping && tickCount % 5 === 0) {
                    if (Math.random() > 0.5) state.hunger = Math.max(0, state.hunger - 1);
                    if (Math.random() > 0.5) state.happiness = Math.max(0, state.happiness - 1);
                    state.energy = Math.max(0, state.energy - 1);
                }

                // Sleep logic
                if (state.isSleeping) {
                    state.energy = Math.min(MAX_STAT, state.energy + 2);
                    if (state.energy === MAX_STAT && tickCount % 3 === 0) {
                        state.isSleeping = false; // Wake up naturally
                        showMessage("WOKE UP");
                    }
                }

                // Poop logic
                if (state.phase !== 'egg' && !state.poop && tickCount % 15 === 0 && Math.random() > 0.7) {
                    state.poop = true;
                    showMessage("NEEDS CLEANING");
                }
                
                // Poop penalty
                if (state.poop && tickCount % 3 === 0) {
                    state.happiness = Math.max(0, state.happiness - 1);
                }

                // Death check
                if (state.hunger === 0 || state.happiness === 0 || state.energy === 0) {
                    // Give a small grace period before actual death if stats hit 0, simulated by random chance here
                    if(Math.random() > 0.8) {
                        die();
                    } else if (state.hunger === 0) {
                        showMessage("STARVING...");
                    } else if (state.happiness === 0) {
                        showMessage("SAD...");
                    } else if (state.energy === 0) {
                        showMessage("EXHAUSTED...");
                    }
                }

                updateUI();
            }, TICK_RATE);

            // Animation loop
            animId = setInterval(() => {
                if (state.isDead && state.actionTimer <= 0) {
                     frameIndex = tickCount % 2 === 0 ? 0 : 1; // slow toggle for tombstone
                } else {
                    frameIndex = (frameIndex + 1) % 2;
                }
                renderPet();
            }, 600);
        }

        function die() {
            state.isDead = true;
            state.phase = 'dead';
            state.isSleeping = false;
            state.actionTimer = 2; // Show dead body briefly before tombstone
            showMessage("GAME OVER");
            document.getElementById('btn-reset').classList.remove('hidden');
            clearInterval(loopId);
            updateUI();
        }

        function petAction(action) {
            if (state.isDead || state.phase === 'egg') return;
            
            // Wake up on any action except sleep
            if (state.isSleeping && action !== 'sleep') {
                state.isSleeping = false;
                showMessage("WOKE UP");
            }

            switch(action) {
                case 'feed':
                    if (state.hunger >= MAX_STAT) {
                        showMessage("FULL!");
                    } else {
                        state.hunger = Math.min(MAX_STAT, state.hunger + 3);
                        state.currentAction = 'eat';
                        state.actionTimer = 3;
                        showMessage("YUM!");
                    }
                    break;
                case 'play':
                    if (state.energy < 3) {
                        showMessage("TOO TIRED");
                    } else {
                        state.happiness = Math.min(MAX_STAT, state.happiness + 2);
                        state.energy = Math.max(0, state.energy - 2);
                        state.hunger = Math.max(0, state.hunger - 1);
                        state.currentAction = 'happy';
                        state.actionTimer = 3;
                        showMessage("FUN!");
                    }
                    break;
                case 'sleep':
                    if (state.energy >= MAX_STAT) {
                        showMessage("NOT TIRED");
                    } else {
                        state.isSleeping = !state.isSleeping;
                        showMessage(state.isSleeping ? "SLEEPING..." : "WOKE UP");
                    }
                    break;
                case 'clean':
                    if (state.poop) {
                        state.poop = false;
                        showMessage("SQUEAKY CLEAN");
                    } else {
                        showMessage("ALREADY CLEAN");
                    }
                    break;
            }
            updateUI();
        }

        function getMeterString(val) {
            const filled = Math.ceil(val / 2);
            return '■'.repeat(filled) + '□'.repeat(5 - filled);
        }

        function showMessage(msg) {
            const bar = document.getElementById('message-bar');
            bar.textContent = msg;
            
            // Glitch effect on message change
            bar.classList.add('opacity-50', 'translate-x-1');
            setTimeout(() => {
                bar.classList.remove('opacity-50', 'translate-x-1');
            }, 100);

            // Clear generic messages after a bit
            setTimeout(() => {
                if (document.getElementById('message-bar').textContent === msg && !state.isDead) {
                    document.getElementById('message-bar').textContent = '';
                }
            }, 3000);
        }

        function renderPet() {
            const petEl = document.getElementById('pet-art');
            let currentFrames;

            if (state.isDead) {
                currentFrames = state.actionTimer > 0 ? [frames.dead[0]] : [frames.dead[1]];
            } else if (state.currentAction && frames[state.currentAction]) {
                currentFrames = frames[state.currentAction];
            } else {
                currentFrames = frames[state.phase];
            }

            // Ensure we don't go out of bounds if array size changes
            const art = currentFrames[frameIndex % currentFrames.length];
            petEl.textContent = art;

            // Simple bounce animation during play
            if (state.currentAction === 'happy') {
                petEl.classList.toggle('-translate-y-2');
            } else {
                petEl.classList.remove('-translate-y-2');
            }
        }

        function updateUI() {
            document.getElementById('bar-hunger').textContent = getMeterString(state.hunger);
            document.getElementById('bar-happiness').textContent = getMeterString(state.happiness);
            document.getElementById('bar-energy').textContent = getMeterString(state.energy);
            document.getElementById('val-age').textContent = state.age;

            const sleepOverlay = document.getElementById('sleep-overlay');
            if (state.isSleeping) {
                sleepOverlay.classList.remove('hidden');
                sleepOverlay.classList.add('flex');
            } else {
                sleepOverlay.classList.add('hidden');
                sleepOverlay.classList.remove('flex');
            }

            const poopArea = document.getElementById('poop-area');
            if (state.poop && !state.isDead) {
                poopArea.classList.remove('hidden');
            } else {
                poopArea.classList.add('hidden');
            }

            renderPet();
        }

        // Start
        initGame();

    
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
      

<div className="w-full max-w-sm mx-auto p-4 sm:p-6 flex flex-col gap-6">

<div className="text-center tracking-tight text-lg text-green-600">
            V-PET_OS v1.0
        </div>

<div className="bg-zinc-950 border-4 border-zinc-800 rounded-3xl p-4 sm:p-6 flex flex-col gap-6 shadow-[0_0_30px_rgba(0,255,0,0.05)] relative overflow-hidden">

<div className="bg-[#051005] border-4 border-zinc-700 rounded-xl p-3 flex flex-col relative" style={{aspectRatio: '1/1'}}>

<div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none z-20"></div>

<div className="flex justify-between text-xs text-green-700 z-10 mb-2">
<div className="flex flex-col gap-1">
<div>HNG <span className="text-green-500" id="bar-hunger">■■■■■</span></div>
<div>HAP <span className="text-green-500" id="bar-happiness">■■■■■</span></div>
</div>
<div className="flex flex-col gap-1 items-end">
<div>ENG <span className="text-green-500" id="bar-energy">■■■■■</span></div>
<div>AGE <span className="text-green-500" id="val-age">0</span></div>
</div>
</div>

<div className="flex-grow flex items-center justify-center relative z-10 transition-opacity duration-1000" id="screen-container">

<div className="absolute bottom-2 right-2 text-xs hidden" id="poop-area">
                        (~)
                    </div>

<pre className="text-sm sm:text-base leading-tight whitespace-pre text-center transform transition-transform duration-200" id="pet-art"></pre>

<div className="absolute inset-0 bg-black/80 hidden items-center justify-center" id="sleep-overlay">
<span className="text-xs animate-pulse">ZzZzZ...</span>
</div>
</div>

<div className="h-8 mt-2 flex items-center justify-center border-t border-green-900/50 z-10">
<span className="text-xs text-green-600 truncate uppercase" id="message-bar">SYSTEM READY</span>
</div>
</div>

<div className="grid grid-cols-4 gap-3 sm:gap-4 relative z-10">
<button className="flex flex-col items-center justify-center gap-2 p-3 bg-zinc-900 border-2 border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-green-800 hover:text-green-400 active:scale-95 transition-all focus:outline-none" onclick="petAction('feed')">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear"></iconify-icon>
<span className="text-xs">FEED</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 p-3 bg-zinc-900 border-2 border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-green-800 hover:text-green-400 active:scale-95 transition-all focus:outline-none" onclick="petAction('play')">
<iconify-icon className="text-xl" icon="solar:gamepad-linear"></iconify-icon>
<span className="text-xs">PLAY</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 p-3 bg-zinc-900 border-2 border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-green-800 hover:text-green-400 active:scale-95 transition-all focus:outline-none" onclick="petAction('sleep')">
<iconify-icon className="text-xl" icon="solar:moon-linear"></iconify-icon>
<span className="text-xs">SLP</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 p-3 bg-zinc-900 border-2 border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-green-800 hover:text-green-400 active:scale-95 transition-all focus:outline-none" onclick="petAction('clean')">
<iconify-icon className="text-xl" icon="solar:trash-bin-trash-linear"></iconify-icon>
<span className="text-xs">CLN</span>
</button>
</div>

<button className="hidden w-full py-4 mt-2 bg-green-900/20 border-2 border-green-800 rounded-lg hover:bg-green-900/40 active:scale-95 transition-all text-xs focus:outline-none uppercase" id="btn-reset" onclick="initGame()">
                Reboot System
            </button>
</div>
</div>


    </>
  );
}
