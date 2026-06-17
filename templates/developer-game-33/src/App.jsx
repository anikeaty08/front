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



        // --- CONFIG & STATE ---
        const btn = document.getElementById('ship-btn');
        const msgEl = document.getElementById('console-msg');
        const ui = document.getElementById('game-ui');
        const body = document.getElementById('main-body');
        const endScreen = document.getElementById('end-screen');
        const title = document.getElementById('main-title');
        
        let stats = {
            stress: 10,
            bugs: 0,
            ego: 1,
            money: 0
        };

        let clicks = 0;
        let lastClickTime = Date.now();
        let spamCount = 0;
        let isFrozen = false;
        let idleTimer = null;
        let era = 0; // 0: Learning, 1: Freelance, 2: Startup, 3: Burnout

        // --- CONTENT ---
        const eras = [
            { // Era 0: Learning (0-15 clicks)
                msgs: [
                    "Hello world?", "It runs on my machine.", "StackOverflow copy-paste.", 
                    "Missed a semicolon.", "Console.log('here').", "CSS is hard.", 
                    "What is a div?", "Git push --force.", "Deleting node_modules...",
                    "Watching tutorials.", "It works. Somehow."
                ],
                tone: "bg-zinc-950"
            },
            { // Era 1: Freelance (16-40 clicks)
                msgs: [
                    "Client hates the font.", "Payment pending.", "Scope creep detected.", 
                    "Fixed it in post.", "Emailing invoice...", "Can you make the logo bigger?",
                    "Deploying on Friday.", "Meeting that could be an email.", "Coffee overdose.",
                    "Sleep is for the weak.", "Another revision."
                ],
                tone: "bg-black"
            },
            { // Era 2: Degen / Startup (41-75 clicks)
                msgs: [
                    "VC funding secured.", "Server crashed.", "Hiring intern.", 
                    "Twitter drama.", "Product Hunt launch.", "Tech debt piling up.",
                    "We need AI.", "Pivot.", "Burn rate is high.", 
                    "User retention is 0.", "Refactoring everything."
                ],
                tone: "bg-zinc-950"
            },
            { // Era 3: Burnout / End (76+ clicks)
                msgs: [
                    "Why are we doing this?", "Just ship it.", "Nothing matters.", 
                    "404 Sanity Not Found.", "I miss sunlight.", "Golden handcuffs.",
                    "Another feature.", "Click click click.", "Is this success?",
                    "Let's break prod."
                ],
                tone: "bg-black"
            }
        ];

        const spamMsgs = ["Slow down.", "You're rushing.", "Touch grass.", "Breathe.", "Spaghetti code."];
        const idleMsgs = ["Nothing ships itself.", "Deadlines approaching.", "Are you there?", "Server costs are running."];

        // --- AUDIO (Simulated via visual feedback only per request) ---

        // --- LOGIC ---

        function updateUI() {
            // Update Stats Display
            document.getElementById('stat-stress').innerText = stats.stress + "%";
            document.getElementById('stat-bugs').innerText = stats.bugs;
            document.getElementById('stat-money').innerText = stats.money > 1000 ? (stats.money/1000).toFixed(1) + "k" : "$" + stats.money;
            
            // Ego logic
            let egoText = "smol";
            if (stats.ego > 10) egoText = "dev";
            if (stats.ego > 30) egoText = "senior";
            if (stats.ego > 50) egoText = "10x";
            if (stats.ego > 80) egoText = "god";
            document.getElementById('stat-ego').innerText = egoText;

            // Status Line Logic
            const statusEl = document.querySelector('#status-line span');
            if(stats.stress > 80) {
                statusEl.innerText = "panicked";
                statusEl.className = "text-red-500 animate-pulse";
            } else if (stats.money > 5000) {
                statusEl.innerText = "comfortable";
                statusEl.className = "text-green-500";
            } else if (stats.bugs > 20) {
                statusEl.innerText = "debugging";
                statusEl.className = "text-yellow-500";
            } else {
                statusEl.innerText = clicks < 20 ? "broke" : "shipping";
                statusEl.className = "text-zinc-400";
            }
        }

        function triggerGlitch() {
            title.classList.add('glitch-active');
            setTimeout(() => title.classList.remove('glitch-active'), 200);
            
            btn.classList.add('shake-hard');
            setTimeout(() => btn.classList.remove('shake-hard'), 200);
        }

        function checkEra() {
            if (clicks > 15 && era === 0) era = 1;
            if (clicks > 40 && era === 1) era = 2;
            if (clicks > 75 && era === 2) era = 3;
            
            // End Game Condition
            if (clicks > 100) { 
                initFreeze(); 
            }
        }

        function initFreeze() {
            if (isFrozen) return;
            isFrozen = true;
            
            // Freeze UI
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
            msgEl.innerText = "ok. enough playing.";
            msgEl.className = "text-sm text-red-500 font-bold tracking-widest";
            
            clearInterval(idleTimer);

            // Transition
            setTimeout(() => {
                ui.style.opacity = '0';
                setTimeout(() => {
                    ui.style.display = 'none';
                    showEndScreen();
                }, 1000);
            }, 2000);
        }

        function showEndScreen() {
            endScreen.classList.remove('hidden');
            
            // Calculate fake final stats based on run
            const finalYears = Math.floor(clicks / 12);
            const finalBroken = stats.bugs * 14 + 3;
            
            document.getElementById('end-years').innerText = finalYears + "y";
            document.getElementById('end-broken').innerText = finalBroken;
            
            // Fade in
            setTimeout(() => {
                endScreen.classList.remove('opacity-0');
            }, 100);
        }

        function ship() {
            if (isFrozen) return;

            const now = Date.now();
            const diff = now - lastClickTime;
            lastClickTime = now;
            clicks++;

            // Reset idle check
            clearInterval(idleTimer);
            idleTimer = setInterval(() => {
                if(!isFrozen) {
                    msgEl.innerText = idleMsgs[Math.floor(Math.random() * idleMsgs.length)];
                    msgEl.style.opacity = "0.5";
                }
            }, 8000);

            // Spam logic
            let isSpam = false;
            if (diff < 200) {
                spamCount++;
                if (spamCount > 3) isSpam = true;
            } else {
                spamCount = 0;
            }

            // Update Logic
            checkEra();
            if (isFrozen) return;

            // Visuals
            triggerGlitch();
            msgEl.style.opacity = "1";

            // Determine Message
            let txt = "";
            if (isSpam) {
                txt = spamMsgs[Math.floor(Math.random() * spamMsgs.length)];
                stats.stress += 5;
                stats.bugs += 1;
            } else {
                const pool = eras[era].msgs;
                txt = pool[Math.floor(Math.random() * pool.length)];
                
                // Random Stat Chaos
                if (Math.random() > 0.5) stats.money += Math.floor(Math.random() * 100) * (era + 1);
                if (Math.random() > 0.7) stats.bugs += 1;
                if (Math.random() > 0.3) stats.stress += (Math.random() > 0.5 ? 2 : -1);
                if (Math.random() > 0.6) stats.ego += 2;
                
                // Cap stats
                if (stats.stress < 0) stats.stress = 0;
                if (stats.stress > 100) stats.stress = 100;
            }
            
            msgEl.innerText = txt.toLowerCase();
            updateUI();
        }

        // --- INIT ---
        btn.addEventListener('click', ship);
        
        // Prevent simple refresh accidental loss (cosmetic only for single file)
        window.onbeforeunload = function() {
            return "Nice try.";
        };

        // Start Idle Timer
        idleTimer = setInterval(() => {
            msgEl.innerText = "ship something.";
            msgEl.style.opacity = "0.5";
        }, 5000);

    
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
      

<div className="scanline"></div>

<div className="w-full max-w-md p-6 flex flex-col items-center justify-between h-[80vh] transition-opacity duration-1000" id="game-ui">

<div className="text-center space-y-2 w-full">
<h1 className="text-4xl tracking-tighter text-zinc-100 font-semibold glitch" data-text="gm dev" id="main-title">gm dev</h1>
<p className="text-xs tracking-wide text-zinc-600 uppercase" id="status-line">status: <span className="text-zinc-400">broke</span></p>
</div>

<div className="grid grid-cols-4 gap-4 w-full text-center py-8">
<div className="flex flex-col items-center gap-1 group">
<iconify-icon className="text-zinc-600 group-hover:text-yellow-400 transition-colors" icon="lucide:zap" width="16"></iconify-icon>
<span className="text-xs text-zinc-600">stress</span>
<span className="text-sm font-semibold text-zinc-300" id="stat-stress">10%</span>
</div>
<div className="flex flex-col items-center gap-1 group">
<iconify-icon className="text-zinc-600 group-hover:text-red-400 transition-colors" icon="lucide:bug" width="16"></iconify-icon>
<span className="text-xs text-zinc-600">bugs</span>
<span className="text-sm font-semibold text-zinc-300" id="stat-bugs">0</span>
</div>
<div className="flex flex-col items-center gap-1 group">
<iconify-icon className="text-zinc-600 group-hover:text-purple-400 transition-colors" icon="lucide:crown" width="16"></iconify-icon>
<span className="text-xs text-zinc-600">ego</span>
<span className="text-sm font-semibold text-zinc-300" id="stat-ego">smol</span>
</div>
<div className="flex flex-col items-center gap-1 group">
<iconify-icon className="text-zinc-600 group-hover:text-green-400 transition-colors" icon="lucide:coins" width="16"></iconify-icon>
<span className="text-xs text-zinc-600">money</span>
<span className="text-sm font-semibold text-zinc-300" id="stat-money">$0</span>
</div>
</div>

<div className="h-16 flex items-center justify-center w-full px-4 text-center">
<p className="text-sm text-zinc-300 italic tracking-tight min-h-[1.5rem] opacity-80" id="console-msg"></p>
</div>

<div className="flex-grow flex items-center justify-center w-full relative">
<button className="relative group outline-none focus:outline-none" id="ship-btn">

<div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200 group-hover:duration-200 animate-pulse"></div>
<div className="relative px-12 py-6 bg-black border border-zinc-800 hover:border-zinc-500 text-zinc-100 font-bold text-xl tracking-widest uppercase rounded-sm transition-all duration-75 active:scale-95 active:bg-zinc-100 active:text-black flex items-center gap-3">
<span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">[</span>
                    ship
                    <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">]</span>
</div>
</button>
</div>

<div className="text-center text-[10px] text-zinc-800 pointer-events-none">
            v0.0.1-alpha // do not refresh
        </div>
</div>

<div className="hidden absolute inset-0 bg-black flex flex-col items-center justify-center z-50 text-center space-y-8 p-8 opacity-0 transition-opacity duration-2000" id="end-screen">
<div className="space-y-2">
<h2 className="text-lg text-zinc-100 font-semibold tracking-tight">System Halted.</h2>
<p className="text-sm text-zinc-500 font-mono">Session terminated.</p>
</div>
<div className="w-full max-w-xs border-t border-b border-zinc-900 py-6 space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-600">Years shipped</span>
<span className="text-zinc-300 font-mono" id="end-years">0</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-600">Things broken</span>
<span className="text-zinc-300 font-mono" id="end-broken">0</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-600">Things learned</span>
<span className="text-zinc-300 font-mono" id="end-learned">Everything</span>
</div>
</div>
<div className="pt-8">
<a className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors underline underline-offset-4 decoration-zinc-800" href="#">
                If you want to build real things, reach out.
            </a>
</div>
</div>


    </>
  );
}
