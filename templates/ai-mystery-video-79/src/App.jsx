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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 3s linear infinite',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function addLog(text, color = "text-neutral-400") {
            const container = document.getElementById('terminal-logs');
            const line = document.createElement('div');
            line.className = `terminal-text ${color}`;
            // Add timestamp
            const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
            line.innerHTML = `<span class="text-neutral-600">[${time}]</span> ${text}`;
            container.appendChild(line);
            container.scrollTop = container.scrollHeight;
            await sleep(800 + Math.random() * 1000); // Random delay for realism
        }

        async function updateProgress(stepId, percent) {
            const el = document.querySelector(`#${stepId} div`);
            el.style.width = `${percent}%`;
        }

        async function startGeneration() {
            const input = document.getElementById('promptInput').value;
            if(!input) {
                alert("Please describe your mystery first.");
                return;
            }

            // Switch UI
            document.getElementById('input-section').classList.add('hidden');
            document.getElementById('processing-section').classList.remove('hidden');

            // Phase 1: Scripting
            await addLog("Initializing Claude Sonnet 4.5 Agent...", "text-blue-400");
            updateProgress('step-1', 50);
            await addLog(`Analyzing prompt: "${input.substring(0, 30)}..."`);
            await addLog("Connecting to internet search gateway...");
            await addLog("Searching: 'Unsolved mysteries similar to input parameters'");
            await addLog("Found 12 relevant articles. Extracting facts...", "text-green-400");
            updateProgress('step-1', 100);

            // Phase 2: Sourcing
            updateProgress('step-2', 20);
            await addLog("Generating storyboard sequence [Scene 1-12]");
            await addLog("Querying API: No-watermark video database...");
            await addLog("Found match: 'stormy_coast_drone.mp4' (4K)");
            await addLog("Generating AI Image: 'Evidence photo, 1900s style, grainy' using Gemini Flash 3");
            updateProgress('step-2', 100);

            // Phase 3: Voice
            updateProgress('step-3', 40);
            await addLog("Synthesizing audio: Model 'Deep Goosebumps'");
            await addLog("Adding breath pauses and tension markers...");
            await addLog("Audio rendering complete. Duration: 08:02");
            updateProgress('step-3', 100);

            // Phase 4: Rendering
            updateProgress('step-4', 10);
            await addLog("Compositing video tracks...");
            await addLog("Applying 'Linear' color grade preset");
            await addLog("Syncing subtitles...");
            await addLog("FINALIZING EXPORT...", "text-purple-400 font-bold");
            updateProgress('step-4', 100);

            await sleep(1000);

            // Show Result
            document.getElementById('processing-section').classList.add('hidden');
            document.getElementById('result-section').classList.remove('hidden');
        }

        function resetApp() {
            document.getElementById('result-section').classList.add('hidden');
            document.getElementById('processing-section').classList.add('hidden');
            document.getElementById('input-section').classList.remove('hidden');
            document.getElementById('terminal-logs').innerHTML = '';
            document.querySelectorAll('[id^="step-"] div').forEach(el => el.style.width = '0');
        }
    
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
      

<aside className="w-64 border-r border-white/5 flex-col justify-between hidden md:flex bg-neutral-950/50 backdrop-blur-xl z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-sm">MYSTERY.AI</span>
</div>
</div>
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-white/5 rounded-md border border-white/5 transition-all" href="#">
<i className="w-4 h-4 text-neutral-400" data-lucide="video"></i>
                    Create Video
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-all" href="#">
<i className="w-4 h-4" data-lucide="history"></i>
                    History
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-all" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i>
                    Monetization
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-all" href="#">
<i className="w-4 h-4" data-lucide="library"></i>
                    Asset Library
                </a>
</nav>
</div>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-xs text-white font-bold">DT</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium">Detective User</span>
<span className="text-[10px] text-neutral-500">Pro Plan</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-neutral-950/80 backdrop-blur-md z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-neutral-400"><i className="w-5 h-5" data-lucide="menu"></i></button>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span>Projects</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-white">New Mystery</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-green-500 font-medium tracking-tight">SYSTEM ONLINE</span>
</div>
<button className="text-neutral-400 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="bell"></i></button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-6 lg:p-10 relative">

<div className="absolute top-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-950/0 to-transparent pointer-events-none"></div>
<div className="max-w-5xl mx-auto space-y-8 relative z-0">

<div className="space-y-6 transition-all duration-500" id="input-section">
<div className="space-y-2">
<h1 className="text-3xl text-white font-medium tracking-tight">Create Unsolved Mystery</h1>
<p className="text-neutral-500 text-sm">AI will search the web, write the script, source footage, and narrate.</p>
</div>
<div className="glass-panel p-1 rounded-xl">
<textarea className="w-full bg-neutral-900/50 text-white placeholder-neutral-600 text-sm p-4 rounded-lg outline-none resize-none h-32 border border-transparent focus:border-white/10 transition-all" id="promptInput" placeholder="Describe the mystery (e.g., 'The disappearance of the lighthouse keepers in 1900')..."></textarea>
<div className="p-3 flex flex-wrap gap-4 border-t border-white/5 items-center justify-between bg-neutral-900/30 rounded-b-lg">
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 transition-all" type="button">
<i className="w-3.5 h-3.5 text-purple-400" data-lucide="sparkles"></i> Auto-Enhance Prompt
                                </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 transition-all" type="button">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="globe"></i> Web Search On
                                </button>
</div>
<span className="text-[10px] text-neutral-600 uppercase tracking-widest font-medium">0/2000 CHARS</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="p-4 rounded-lg border border-white/5 bg-neutral-900/20 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-3">
<label className="text-xs text-neutral-400 font-medium">SCRIPT MODEL</label>
<i className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="cpu"></i>
</div>
<div className="relative">
<select className="w-full bg-neutral-950 border border-white/10 text-white text-sm rounded-md px-3 py-2 appearance-none focus:outline-none focus:border-white/20">
<option>Claude Sonnet 4.5 (Creative)</option>
<option>GPT-5.2 (Analytical)</option>
<option>Gemini Flash 3 (Fast)</option>
</select>
<i className="absolute right-3 top-2.5 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="p-4 rounded-lg border border-white/5 bg-neutral-900/20 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-3">
<label className="text-xs text-neutral-400 font-medium">NARRATION VOICE</label>
<i className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="mic"></i>
</div>
<div className="relative">
<select className="w-full bg-neutral-950 border border-white/10 text-white text-sm rounded-md px-3 py-2 appearance-none focus:outline-none focus:border-white/20">
<option selected="">Deep Goosebumps (Mystery)</option>
<option>True Crime Host (Female)</option>
<option>Noir Detective (Gritty)</option>
<option>Google TTS WaveNet</option>
</select>
<i className="absolute right-3 top-2.5 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="p-4 rounded-lg border border-white/5 bg-neutral-900/20 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-3">
<label className="text-xs text-neutral-400 font-medium">VISUAL SOURCE</label>
<i className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="image"></i>
</div>
<div className="relative">
<select className="w-full bg-neutral-950 border border-white/10 text-white text-sm rounded-md px-3 py-2 appearance-none focus:outline-none focus:border-white/20">
<option selected="">No-Watermark Stock &amp; AI Gen</option>
<option>AI Generated Only (Dark)</option>
<option>Historical Archives</option>
</select>
<i className="absolute right-3 top-2.5 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="p-5 rounded-lg border border-white/5 bg-neutral-900/20">
<div className="flex items-center justify-between mb-4">
<label className="text-xs text-neutral-400 font-medium uppercase">Target Duration</label>
<span className="text-xs text-white" id="durationValue">8 min</span>
</div>
<input className="w-full" max="20" min="1" oninput="document.getElementById('durationValue').innerText = this.value + ' min'" type="range" value="8"/>
<div className="flex justify-between text-[10px] text-neutral-600 mt-2 font-mono">
<span>SHORTS</span>
<span>LONG FORM</span>
</div>
</div>
<button className="w-full h-12 rounded-lg bg-white text-black font-medium text-sm tracking-tight hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="startGeneration()">
<i className="w-4 h-4" data-lucide="clapperboard"></i>
                        Generate Full Video
                    </button>
</div>

<div className="hidden space-y-6" id="processing-section">
<div className="flex items-center justify-between">
<h2 className="text-lg text-white font-medium flex items-center gap-3">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
</span>
                            Generating Mystery...
                        </h2>
<button className="text-xs text-red-400 hover:text-red-300" onclick="resetApp()">Cancel</button>
</div>

<div className="w-full h-64 bg-black rounded-lg border border-white/10 p-4 font-mono text-xs overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-8 bg-neutral-900 border-b border-white/10 flex items-center px-3 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
<span className="ml-2 text-neutral-500">agent_log.txt</span>
</div>
<div className="mt-8 space-y-2 text-neutral-400 h-full overflow-y-auto pb-4" id="terminal-logs">

</div>
</div>

<div className="grid grid-cols-4 gap-4">
<div className="h-1 bg-white/10 rounded-full overflow-hidden" id="step-1"><div className="h-full bg-purple-500 w-0 transition-all duration-1000"></div></div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden" id="step-2"><div className="h-full bg-purple-500 w-0 transition-all duration-1000"></div></div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden" id="step-3"><div className="h-full bg-purple-500 w-0 transition-all duration-1000"></div></div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden" id="step-4"><div className="h-full bg-purple-500 w-0 transition-all duration-1000"></div></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-wider">
<span>Scripting</span>
<span>Sourcing</span>
<span>Voiceover</span>
<span>Rendering</span>
</div>
</div>

<div className="hidden space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700" id="result-section">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl text-white font-medium">Generation Complete</h2>
<p className="text-neutral-500 text-sm">Ready for YouTube upload.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors" onclick="resetApp()">Create New</button>
<button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="download"></i> Download MP4
                            </button>
</div>
</div>

<div className="aspect-video w-full bg-black rounded-xl border border-white/10 relative group overflow-hidden shadow-2xl">

<img alt="Mystery thumbnail" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all group-hover:scale-110">
<i className="w-6 h-6 text-white ml-1" data-lucide="play"></i>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="h-1 w-full bg-white/20 rounded-full mb-3 cursor-pointer">
<div className="h-full w-1/3 bg-purple-500 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
</div>
</div>
<div className="flex justify-between items-center text-white">
<div className="flex gap-4">
<i className="w-4 h-4 cursor-pointer" data-lucide="play"></i>
<i className="w-4 h-4 cursor-pointer" data-lucide="volume-2"></i>
<span className="text-xs font-mono">02:14 / 08:00</span>
</div>
<div className="flex gap-3">
<span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-[10px]">4K</span>
<i className="w-4 h-4 cursor-pointer" data-lucide="maximize"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-6">
<div className="col-span-2 space-y-4">
<h3 className="text-sm font-medium text-white border-b border-white/10 pb-2">Generated Script (Preview)</h3>
<div className="space-y-3 text-sm text-neutral-400 leading-relaxed font-serif">
<p><span className="text-purple-400 font-sans text-xs uppercase tracking-wider block mb-1">Scene 1 • 00:00 - 00:15</span>The wind howls through the broken windows of the old lighthouse. It was a cold November night in 1900 when three keepers vanished into thin air. No struggle. No notes. Just... gone.</p>
<p><span className="text-purple-400 font-sans text-xs uppercase tracking-wider block mb-1">Scene 2 • 00:15 - 00:30</span>Investigators found a single overturned chair and a meal left half-eaten on the table. The logbook contained entries that defied explanation—descriptions of a storm that never happened.</p>
</div>
</div>
<div className="col-span-1 space-y-4">
<h3 className="text-sm font-medium text-white border-b border-white/10 pb-2">Asset Usage</h3>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Clips Used</span>
<span className="text-white">14 Stock / 8 AI</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Voice Model</span>
<span className="text-white">Deep Goosebumps</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Music</span>
<span className="text-white">Tension_Build_04.wav</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Cost</span>
<span className="text-green-400">$0.04 (Est.)</span>
</div>
</div>
<button className="w-full py-2 bg-neutral-900 border border-white/10 text-xs text-neutral-300 rounded hover:bg-neutral-800 transition-colors">
                                Edit Assets
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
