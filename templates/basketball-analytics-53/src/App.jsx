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



        const cmdTrigger = document.getElementById('cmd-trigger');
        const overlay = document.getElementById('cmd-overlay');
        const palette = document.getElementById('cmd-palette');

        function openPalette() {
            overlay.classList.remove('hidden');
            // Trigger reflow
            void overlay.offsetWidth; 
            overlay.style.opacity = '1';
            
            palette.classList.remove('hidden-palette');
            palette.classList.add('visible-palette');
        }

        function closePalette() {
            overlay.style.opacity = '0';
            palette.classList.remove('visible-palette');
            palette.classList.add('hidden-palette');
            
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 200);
        }

        // Toggle on Click
        cmdTrigger.addEventListener('click', openPalette);
        overlay.addEventListener('click', closePalette);

        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (palette.classList.contains('visible-palette')) {
                    closePalette();
                } else {
                    openPalette();
                }
            }
            if (e.key === 'Escape') {
                closePalette();
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
      

<aside className="w-16 lg:w-20 border-r border-zinc-800 flex flex-col items-center py-6 bg-zinc-900/50 backdrop-blur-md z-20">
<div className="mb-8 w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-100 font-bold tracking-tighter text-sm">
            HL
        </div>
<nav className="flex-1 flex flex-col gap-6 w-full items-center">
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-100 bg-zinc-800/80 shadow-inner">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-all">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-all">
<iconify-icon icon="solar:videocamera-record-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-all">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>
<div className="mt-auto">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 ring-2 ring-zinc-900"></div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden">

<header className="h-16 border-b border-zinc-800/50 flex items-center justify-between px-6 lg:px-8 bg-zinc-950/80">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Players</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-200">LeBron James</span>
<span className="bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded text-[10px] border border-zinc-800 ml-2">LAL</span>
</div>
<button className="group flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-full px-4 py-1.5 transition-all" id="cmd-trigger">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Search player...</span>
<div className="flex items-center gap-0.5 ml-4">
<kbd className="hidden sm:inline-block bg-zinc-800 text-zinc-400 rounded px-1.5 py-0.5 text-[10px] font-mono border border-zinc-700">⌘</kbd>
<kbd className="hidden sm:inline-block bg-zinc-800 text-zinc-400 rounded px-1.5 py-0.5 text-[10px] font-mono border border-zinc-700">K</kbd>
</div>
</button>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">

<div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 transition-all hover:border-purple-500/30">

<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-zinc-900 to-yellow-600/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 p-6 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none mb-1">
                                    KING<br/><span className="text-zinc-500 group-hover:text-purple-400 transition-colors">JAMES</span>
</h1>
<div className="flex items-center gap-2 mt-4">
<span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded text-xs font-mono">#23</span>
<span className="px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 rounded text-xs">Small Forward</span>
</div>
</div>

<iconify-icon className="text-yellow-500/80" icon="solar:crown-star-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<div className="mt-auto">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Season Efficiency</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-yellow-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
<span>PER: 24.3</span>
<span>TOP 5%</span>
</div>
</div>
</div>

<img alt="LeBron" className="absolute -bottom-4 -right-12 h-[110%] object-cover object-top opacity-90 drop-shadow-2xl grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out z-0 mask-image-gradient" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="glass-panel p-5 rounded-3xl flex flex-col justify-between hover:bg-zinc-800/50 transition-colors group">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">PTS / Game</span>
<iconify-icon className="text-zinc-600 group-hover:text-purple-400 transition-colors" icon="solar:basketball-linear" width="18"></iconify-icon>
</div>
<div className="flex items-end gap-3 mt-2">
<span className="text-4xl font-mono font-medium text-white tracking-tighter">25.7</span>
<div className="flex items-center text-emerald-400 text-xs font-mono mb-1.5 bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
<span>2.1%</span>
</div>
</div>
<div className="h-8 mt-4 flex items-end gap-1 opacity-50">
<div className="w-1/6 bg-zinc-600 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-[60%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-[30%] rounded-t-sm"></div>
<div className="w-1/6 bg-purple-500 h-[80%] rounded-t-sm shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
<div className="w-1/6 bg-zinc-600 h-[50%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-[70%] rounded-t-sm"></div>
</div>
</div>

<div className="glass-panel p-5 rounded-3xl flex flex-col justify-between hover:bg-zinc-800/50 transition-colors group">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">AST / Game</span>
<iconify-icon className="text-zinc-600 group-hover:text-blue-400 transition-colors" icon="solar:hand-stars-linear" width="18"></iconify-icon>
</div>
<div className="flex items-end gap-3 mt-2">
<span className="text-4xl font-mono font-medium text-white tracking-tighter">8.3</span>
<div className="flex items-center text-rose-400 text-xs font-mono mb-1.5 bg-rose-400/10 px-1.5 py-0.5 rounded border border-rose-400/20">
<iconify-icon icon="solar:arrow-right-down-linear" width="12"></iconify-icon>
<span>0.4%</span>
</div>
</div>
<div className="h-8 mt-4 flex items-end gap-1 opacity-50">
<div className="w-1/6 bg-zinc-600 h-[70%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-[50%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-[60%] rounded-t-sm"></div>
<div className="w-1/6 bg-blue-500 h-[55%] rounded-t-sm shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
<div className="w-1/6 bg-zinc-600 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-[45%] rounded-t-sm"></div>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 glass-chart rounded-3xl relative overflow-hidden group">
<div className="absolute top-5 left-5 z-20">
<h3 className="text-zinc-200 font-medium tracking-tight">Shot Distribution</h3>
<p className="text-xs text-zinc-500 font-mono mt-1">Last 5 Games • <span className="text-emerald-400">58% FG</span></p>
</div>
<div className="absolute top-5 right-5 z-20 flex gap-2">
<button className="bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300 p-1.5 rounded-lg border border-zinc-700/50 backdrop-blur-sm transition-colors">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
</button>
<button className="bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300 p-1.5 rounded-lg border border-zinc-700/50 backdrop-blur-sm transition-colors">
<iconify-icon icon="solar:maximize-square-linear" width="16"></iconify-icon>
</button>
</div>

<div className="absolute inset-0 top-16 mx-4 mb-4 border border-zinc-800/50 bg-zinc-900/40 rounded-2xl overflow-hidden relative">

<div className="three-point-line"></div>
<div className="court-key"></div>
<div className="court-hoop"></div>


<div className="shot bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" style={{bottom: '40px', left: '48%'}}></div>
<div className="shot bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" style={{bottom: '120px', left: '52%'}}></div>
<div className="shot bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" style={{bottom: '60px', left: '55%'}}></div>
<div className="shot bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" style={{bottom: '200px', left: '30%'}}></div>
<div className="shot bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" style={{bottom: '30px', left: '45%'}}></div>
<div className="shot bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" style={{bottom: '180px', left: '75%'}}></div>

<div className="shot bg-rose-500/60" style={{bottom: '150px', left: '20%'}}></div>
<div className="shot bg-rose-500/60" style={{bottom: '250px', left: '50%'}}></div>
<div className="shot bg-rose-500/60" style={{bottom: '80px', left: '60%'}}></div>
<div className="shot bg-rose-500/60" style={{bottom: '210px', left: '80%'}}></div>

<div className="absolute bottom-10 left-[45%] w-24 h-24 bg-emerald-500/10 blur-xl rounded-full pointer-events-none"></div>
</div>
</div>

<div className="glass-panel p-5 rounded-3xl flex flex-col justify-between hover:bg-zinc-800/50 transition-colors group">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">REB / Game</span>
<iconify-icon className="text-zinc-600 group-hover:text-yellow-400 transition-colors" icon="solar:graph-up-linear" width="18"></iconify-icon>
</div>
<div className="flex items-end gap-3 mt-2">
<span className="text-4xl font-mono font-medium text-white tracking-tighter">7.3</span>
<div className="flex items-center text-zinc-500 text-xs font-mono mb-1.5 bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">
<iconify-icon icon="solar:minus-circle-linear" width="12"></iconify-icon>
<span>0.0%</span>
</div>
</div>
<div className="h-8 mt-4 flex items-end gap-1 opacity-50">
<div className="w-1/6 bg-zinc-600 h-[65%] rounded-t-sm"></div>
<div className="w-1/6 bg-yellow-500 h-[60%] rounded-t-sm shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
<div className="w-1/6 bg-zinc-600 h-[55%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-[50%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-[45%] rounded-t-sm"></div>
</div>
</div>

<div className="glass-panel p-5 rounded-3xl flex flex-col justify-center items-center hover:bg-zinc-800/50 transition-colors gap-2 text-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 text-purple-400">
<iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-200 font-medium">All-Star Voting</div>
<div className="text-xs text-zinc-500 mt-1">#1 in Western Conf</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden transition-opacity duration-200" id="cmd-overlay" style={{opacity: '0'}}></div>
<div className="fixed top-1/2 left-1/2 w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl z-50 hidden-palette flex flex-col overflow-hidden ring-1 ring-white/10" id="cmd-palette">
<div className="flex items-center px-4 py-4 border-b border-zinc-800">
<iconify-icon className="text-zinc-500" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-zinc-200 placeholder-zinc-600 ml-3 text-sm h-6" placeholder="Search for stats, players, or teams..." type="text"/>
<div className="text-[10px] text-zinc-600 bg-zinc-900 border border-zinc-800 px-2 py-1 rounded font-mono">ESC</div>
</div>
<div className="p-2">
<div className="text-[10px] font-medium text-zinc-600 px-2 py-2 uppercase tracking-wider">Suggested</div>
<a className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-white text-zinc-400 transition-colors group cursor-pointer" href="#">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-purple-900/50 flex items-center justify-center text-purple-400 text-xs font-bold border border-purple-500/20">L</div>
<span className="text-sm">LeBron James</span>
</div>
<span className="text-xs text-zinc-600 group-hover:text-zinc-500">Player</span>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-white text-zinc-400 transition-colors group cursor-pointer" href="#">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-blue-900/50 flex items-center justify-center text-blue-400 text-xs font-bold border border-blue-500/20">S</div>
<span className="text-sm">Stephen Curry</span>
</div>
<span className="text-xs text-zinc-600 group-hover:text-zinc-500">Player</span>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-white text-zinc-400 transition-colors group cursor-pointer" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:graph-new-linear"></iconify-icon>
<span className="text-sm">Advanced Shooting Metrics</span>
</div>
<span className="text-xs text-zinc-600 group-hover:text-zinc-500">Dashboard</span>
</a>
</div>
<div className="bg-zinc-950 px-4 py-2 border-t border-zinc-800 flex justify-between items-center text-[10px] text-zinc-600">
<div className="flex gap-3">
<span><strong className="text-zinc-500">↑↓</strong> Navigate</span>
<span><strong className="text-zinc-500">↵</strong> Select</span>
</div>
<span>HoopsLab v1.0</span>
</div>
</div>


    </>
  );
}
