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
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Outfit', 'sans-serif'],
},
colors: {
ocean: {
950: '#020617', // Deepest background
900: '#0f172a', // Card background
800: '#1e293b', // Hover state
},
cyan: {
400: '#22d3ee',
500: '#06b6d4',
900: '#164e63', // Glow base
},
coral: {
500: '#f43f5e',
600: '#e11d48',
}
},
boxShadow: {
'neon': '0 0 20px -5px rgba(34, 211, 238, 0.3)',
'neon-strong': '0 0 30px -5px rgba(34, 211, 238, 0.5)',
'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'slide-up': 'slideUp 0.3s ease-out forwards',
},
keyframes: {
slideUp: {
'0%': { transform: 'translateY(10px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



                            for(let i=7; i<=30; i++) {
                                document.write(`<button class="w-10 h-10 rounded-lg bg-slate-800 text-slate-500 border border-white/5 text-sm font-medium hover:bg-slate-700 transition">${i}</button>`);
                            }
                        


        // Icon Initialization
        lucide.createIcons();

        // Router Function
        function navigate(viewId) {
            // Hide all views
            document.querySelectorAll('.app-view, .page-view').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('flex'); // Remove flex from auth
            });
            
            // Handle Overlay Quiz differently
            const quizOverlay = document.getElementById('view-quiz-active');
            if (viewId === 'view-quiz-active') {
                quizOverlay.classList.remove('hidden');
                quizOverlay.classList.add('flex');
                return; 
            } else {
                quizOverlay.classList.add('hidden');
                quizOverlay.classList.remove('flex');
            }

            // Show Shell for inside apps
            const shell = document.getElementById('app-shell');
            if(viewId === 'view-auth') {
                shell.classList.add('hidden');
                document.getElementById('view-auth').classList.remove('hidden');
                document.getElementById('view-auth').classList.add('flex');
            } else {
                shell.classList.remove('hidden');
                const target = document.getElementById(viewId);
                if(target) target.classList.remove('hidden');
            }

            // Scroll to top
            window.scrollTo(0,0);
        }

        // Initialize (Start at Auth)
        navigate('view-auth');

        // Simple Timer Logic
        let time = 10785; // Seconds
        setInterval(() => {
            time--;
            const h = Math.floor(time / 3600).toString().padStart(2,'0');
            const m = Math.floor((time % 3600) / 60).toString().padStart(2,'0');
            const s = (time % 60).toString().padStart(2,'0');
            const timerEl = document.getElementById('timer');
            if(timerEl) timerEl.innerText = `${h}:${m}:${s}`;
        }, 1000);

    
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
</div>

<div className="page-view relative z-10 flex min-h-screen items-center justify-center p-4" id="view-auth">
<div className="w-full max-w-md glass rounded-2xl p-8 animate-slide-up">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 mb-4 border border-cyan-500/20">
<i className="w-6 h-6" data-lucide="waves"></i>
</div>
<h1 className="text-3xl font-display font-bold text-white tracking-tight mb-2">Study Ocean</h1>
<p className="text-slate-400 text-sm">Dive deep into knowledge.</p>
</div>

<div className="grid grid-cols-2 gap-2 p-1 bg-slate-900/50 rounded-lg mb-6 border border-white/5">
<button className="py-2 text-sm font-medium rounded-md bg-slate-800 text-white shadow-sm border border-white/5">Login</button>
<button className="py-2 text-sm font-medium rounded-md text-slate-400 hover:text-white transition-colors">Sign Up</button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); navigate('view-home');">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300 ml-1">Email Address</label>
<div className="relative">
<i className="absolute left-3 top-3 w-4 h-4 text-slate-500" data-lucide="mail"></i>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg input-ocean text-sm" placeholder="alex@studyocean.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300 ml-1">Password</label>
<div className="relative">
<i className="absolute left-3 top-3 w-4 h-4 text-slate-500" data-lucide="lock"></i>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg input-ocean text-sm" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-offset-slate-900" type="checkbox"/>
<span className="text-slate-400">Remember me</span>
</label>
<a className="text-cyan-400 hover:text-cyan-300" href="#">Forgot password?</a>
</div>
<button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-neon hover:shadow-neon-strong transition-all transform hover:-translate-y-0.5" type="submit">
                    Start Learning
                </button>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
<div className="relative flex justify-center text-xs uppercase"><span className="bg-[#020617] px-2 text-slate-500">Or continue with</span></div>
</div>
<button className="w-full py-2.5 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300 text-sm font-medium transition-colors flex items-center justify-center gap-2" type="button">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
                    Google
                </button>
</form>
</div>
</div>

<div className="hidden h-screen flex overflow-hidden" id="app-shell">

<aside className="hidden md:flex flex-col w-64 glass border-r border-white/5 z-20">
<div className="p-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-cyan-500 text-black flex items-center justify-center font-bold">
<i className="w-5 h-5" data-lucide="waves"></i>
</div>
<span className="font-display font-bold text-xl tracking-tight text-white">Study Ocean</span>
</div>
</div>
<nav className="flex-1 px-3 space-y-1 mt-6">
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group active" onclick="navigate('view-home')">
<i className="w-5 h-5 group-[.active]:text-cyan-400" data-lucide="layout-grid"></i>
<span className="text-sm font-medium">Dashboard</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
<i className="w-5 h-5 group-[.active]:text-cyan-400" data-lucide="book-open"></i>
<span className="text-sm font-medium">My Tests</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group" onclick="navigate('view-result')">
<i className="w-5 h-5 group-[.active]:text-cyan-400" data-lucide="bar-chart-2"></i>
<span className="text-sm font-medium">Analytics</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
<i className="w-5 h-5 group-[.active]:text-cyan-400" data-lucide="trophy"></i>
<span className="text-sm font-medium">Leaderboard</span>
</button>
</nav>
<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 p-2 w-full rounded-lg hover:bg-white/5 text-left transition" onclick="navigate('view-auth')">
<img alt="User" className="w-9 h-9 rounded-full ring-2 ring-slate-800" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=22d3ee&amp;color=000"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Alex Morgan</p>
<p className="text-xs text-slate-500 truncate">Premium Plan</p>
</div>
<i className="w-4 h-4 text-slate-500 hover:text-coral-500" data-lucide="log-out"></i>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative z-10 custom-scrollbar">

<div className="md:hidden sticky top-0 z-30 glass px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-cyan-400" data-lucide="waves"></i>
<span className="font-display font-bold text-lg text-white">Study Ocean</span>
</div>
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-slate-400" data-lucide="bell"></i>
</div>
</div>

<div className="app-view p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-slide-up" id="view-home">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-1">Good Morning, Alex</h2>
<p className="text-slate-400 font-light">Your daily progress: <span className="text-cyan-400 font-medium">+12%</span> better than yesterday.</p>
</div>
<div className="relative w-full md:w-72">
<i className="absolute left-3 top-3 w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-2.5 rounded-full input-ocean text-sm" placeholder="Search topics..." type="text"/>
</div>
</div>

<div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group">
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-cyan-900/20 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-wider mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> In Progress
                            </span>
<h3 className="font-display text-2xl font-bold text-white mb-2">Advanced Physics: Quantum Mechanics</h3>
<p className="text-slate-400 text-sm mb-6 max-w-lg">Unit 4: Wave-particle duality and uncertainty principle basics.</p>
<div className="w-full md:w-80 space-y-2">
<div className="flex justify-between text-xs font-medium">
<span className="text-slate-300">65% Complete</span>
<span className="text-slate-500">26/40 Questions</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
</div>
<button className="group-hover:scale-105 transition-transform px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-white/5" onclick="navigate('view-quiz-intro')">
                            Resume Session <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-6">
<h3 className="font-display text-xl font-bold text-white">Recommended Series</h3>
<a className="text-sm text-cyan-400 hover:text-cyan-300" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-5 flex flex-col h-full cursor-pointer group transition-all hover:-translate-y-1">
<div className="h-32 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5 mb-4 flex items-center justify-center relative overflow-hidden">
<i className="w-12 h-12 text-indigo-400 opacity-80 group-hover:scale-110 transition-transform duration-500" data-lucide="atom"></i>
<span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/20">PREMIUM</span>
</div>
<h4 className="font-display text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Chemistry: Organic Compounds</h4>
<p className="text-slate-400 text-xs mb-4 flex-1">Master reaction mechanisms and stereochemistry.</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 90m</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="help-circle"></i> 50Q</span>
</div>
<button className="w-8 h-8 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-colors">
<i className="w-3.5 h-3.5 fill-current" data-lucide="play"></i>
</button>
</div>
</div>

<div className="glass-card rounded-2xl p-5 flex flex-col h-full cursor-pointer group transition-all hover:-translate-y-1">
<div className="h-32 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/5 mb-4 flex items-center justify-center relative overflow-hidden">
<i className="w-12 h-12 text-emerald-400 opacity-80 group-hover:scale-110 transition-transform duration-500" data-lucide="calculator"></i>
<span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">FREE</span>
</div>
<h4 className="font-display text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Mathematics: Calculus II</h4>
<p className="text-slate-400 text-xs mb-4 flex-1">Integrals, sequences, and series convergence tests.</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 60m</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="help-circle"></i> 30Q</span>
</div>
<button className="w-8 h-8 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-colors">
<i className="w-3.5 h-3.5 fill-current" data-lucide="play"></i>
</button>
</div>
</div>

<div className="glass-card rounded-2xl p-5 flex flex-col h-full cursor-pointer group transition-all hover:-translate-y-1">
<div className="h-32 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-white/5 mb-4 flex items-center justify-center relative overflow-hidden">
<i className="w-12 h-12 text-rose-400 opacity-80 group-hover:scale-110 transition-transform duration-500" data-lucide="dna"></i>
</div>
<h4 className="font-display text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Biology: Genetics</h4>
<p className="text-slate-400 text-xs mb-4 flex-1">Mendelian inheritance and molecular basis of inheritance.</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 45m</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="help-circle"></i> 25Q</span>
</div>
<button className="w-8 h-8 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-colors">
<i className="w-3.5 h-3.5 fill-current" data-lucide="play"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden p-4 md:p-8 max-w-4xl mx-auto animate-slide-up" id="view-quiz-intro">
<button className="mb-6 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors" onclick="navigate('view-home')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Dashboard
                </button>
<div className="glass-card rounded-2xl p-1 overflow-hidden">
<div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 border-b border-white/5">
<h2 className="font-display text-2xl font-bold text-white mb-2">Advanced Physics: Full Mock Test 05</h2>
<div className="flex items-center gap-4 text-sm text-slate-300">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-cyan-400" data-lucide="clock"></i> 180 Minutes</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-cyan-400" data-lucide="file-text"></i> 90 Questions</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-cyan-400" data-lucide="award"></i> 300 Marks</span>
</div>
</div>
<div className="p-8 space-y-6">
<div>
<h3 className="font-display font-semibold text-white mb-3">General Instructions</h3>
<ul className="space-y-3 text-sm text-slate-400 list-disc pl-4 marker:text-cyan-500">
<li>The test contains three sections: Physics, Chemistry, and Mathematics.</li>
<li>Each question carries <strong>+4 marks</strong> for correct answer and <strong>-1 mark</strong> for incorrect answer.</li>
<li>Unattempted questions will result in 0 marks.</li>
<li>You can switch between sections at any point during the examination.</li>
<li>Use the "Mark for Review" feature to revisit questions before submitting.</li>
</ul>
</div>
<div className="p-4 rounded-lg bg-slate-900/50 border border-white/5 flex gap-3 items-start">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="alert-circle"></i>
<p className="text-xs text-slate-400 leading-relaxed">Ensure you have a stable internet connection. Closing the browser window will not pause the timer. The test will auto-submit when the timer reaches zero.</p>
</div>
<div className="pt-4 flex items-center justify-between border-t border-white/5">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-0 focus:ring-offset-0" id="agree-check" type="checkbox"/>
<span className="text-sm text-slate-300 group-hover:text-white">I have read and understood the instructions.</span>
</label>
<button className="px-8 py-3 rounded-lg bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 hover:shadow-neon transition-all" onclick="navigate('view-quiz-active')">
                                Start Test
                            </button>
</div>
</div>
</div>
</div>

<div className="app-view hidden p-4 md:p-8 max-w-6xl mx-auto space-y-6 animate-slide-up" id="view-result">
<div className="flex items-center justify-between">
<h2 className="font-display text-2xl font-bold text-white">Test Analysis</h2>
<button className="text-sm text-slate-400 hover:text-white" onclick="navigate('view-home')">Close</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-6 lg:col-span-2">
<div className="flex flex-col md:flex-row gap-8 items-center">

<div className="relative w-40 h-40">
<div className="w-full h-full rounded-full conic-gradient" style={{'--color': '#22d3ee', '--percentage': '75%'}}></div>
<div className="absolute inset-2 bg-slate-900 rounded-full flex flex-col items-center justify-center">
<span className="text-3xl font-display font-bold text-white">225</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">/ 300</span>
</div>
</div>
<div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center">
<div className="text-xs text-slate-500 mb-1">Rank</div>
<div className="text-xl font-bold text-white">#42</div>
</div>
<div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center">
<div className="text-xs text-slate-500 mb-1">Accuracy</div>
<div className="text-xl font-bold text-emerald-400">82%</div>
</div>
<div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center">
<div className="text-xs text-slate-500 mb-1">Time</div>
<div className="text-xl font-bold text-white">2h 14m</div>
</div>
<div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center">
<div className="text-xs text-slate-500 mb-1">Percentile</div>
<div className="text-xl font-bold text-cyan-400">94.5</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-6">
<h3 className="text-sm font-semibold text-slate-300 mb-4">Vs Topper</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-400">Physics</span>
<span className="text-white font-medium">65 / 80</span>
</div>
<div className="h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
<div className="absolute h-full bg-slate-600 w-[80%] opacity-30"></div> 
<div className="absolute h-full bg-cyan-500 w-[65%]"></div> 
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-400">Chemistry</span>
<span className="text-white font-medium">70 / 80</span>
</div>
<div className="h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
<div className="absolute h-full bg-slate-600 w-[90%] opacity-30"></div>
<div className="absolute h-full bg-purple-500 w-[70%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-400">Mathematics</span>
<span className="text-white font-medium">90 / 95</span>
</div>
<div className="h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
<div className="absolute h-full bg-slate-600 w-[95%] opacity-30"></div>
<div className="absolute h-full bg-pink-500 w-[90%]"></div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-500">
<div className="w-3 h-3 rounded bg-cyan-500"></div> You
                            <div className="w-3 h-3 rounded bg-slate-600 ml-2"></div> Topper Average
                        </div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 bg-slate-900/50">
<h3 className="font-display font-semibold text-white">Question Review</h3>
</div>
<div className="divide-y divide-white/5">

<div className="p-4 md:px-6 hover:bg-white/[0.02] transition-colors flex gap-4">
<div className="w-8 h-8 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xs border border-emerald-500/20 shrink-0">Q1</div>
<div className="flex-1">
<p className="text-sm text-slate-300 mb-2">A particle of mass m moves in a circular orbit under the central potential field U(r) = -C/r. The total energy is...</p>
<div className="flex flex-wrap gap-2 text-xs">
<span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Correct (+4)</span>
<span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">Topic: Gravitation</span>
</div>
</div>
<div className="text-xs text-slate-500 whitespace-nowrap hidden md:block">45s taken</div>
</div>

<div className="p-4 md:px-6 hover:bg-white/[0.02] transition-colors flex gap-4">
<div className="w-8 h-8 rounded bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-xs border border-rose-500/20 shrink-0">Q2</div>
<div className="flex-1">
<p className="text-sm text-slate-300 mb-2">Which of the following reaction intermediates is most stable?</p>
<div className="flex flex-wrap gap-2 text-xs">
<span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">Incorrect (-1)</span>
<span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">Topic: GOC</span>
</div>
</div>
<div className="text-xs text-slate-500 whitespace-nowrap hidden md:block">1m 12s taken</div>
</div>
</div>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 w-full glass z-40 border-t border-white/10 pb-safe">
<div className="flex justify-around items-center h-16">
<button className="flex flex-col items-center gap-1 p-2 text-cyan-400" onclick="navigate('view-home')">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-white transition">
<i className="w-5 h-5" data-lucide="book-open"></i>
<span className="text-[10px] font-medium">Tests</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-white transition" onclick="navigate('view-result')">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
<span className="text-[10px] font-medium">Stats</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-white transition">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-[10px] font-medium">Profile</span>
</button>
</div>
</nav>
</div>

<div className="fixed inset-0 z-50 bg-ocean-950 flex flex-col hidden animate-slide-up" id="view-quiz-active">

<header className="h-16 glass border-b border-white/5 flex items-center justify-between px-4 md:px-6">
<div className="flex items-center gap-4">
<span className="font-display font-bold text-white hidden md:block">Full Mock Test 05</span>
<span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-xs text-slate-300">Physics - Sec A</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-cyan-500/30 text-cyan-400 font-mono text-sm shadow-neon">
<i className="w-4 h-4" data-lucide="timer"></i>
<span id="timer">02:59:45</span>
</div>
<button className="bg-coral-600 hover:bg-coral-500 text-white text-xs font-bold px-4 py-2 rounded transition-colors shadow-lg shadow-coral-600/20" onclick="navigate('view-result')">
                    Submit
                </button>
</div>
</header>
<div className="flex-1 flex overflow-hidden">

<div className="flex-1 overflow-y-auto p-6 md:p-10 relative">
<div className="max-w-4xl mx-auto pb-20">

<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Question 05</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-white/5">Single Choice</span>
</div>
<div className="flex gap-3 text-xs font-medium">
<span className="text-emerald-400">+4.0</span>
<span className="text-coral-500">-1.0</span>
</div>
</div>

<div className="text-lg md:text-xl text-slate-200 leading-relaxed font-display mb-8">
                        A particle moves along a straight line such that its displacement at any time <span className="font-serif italic text-cyan-200">t</span> is given by <span className="font-mono bg-slate-800 px-1 rounded text-base">s = t³ - 6t² + 3t + 4</span> meters. What is the velocity when the acceleration is zero?
                    </div>

<div className="space-y-3">
<label className="block cursor-pointer group">
<input className="option-radio hidden" name="q5" type="radio"/>
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/30 hover:bg-slate-800 transition-all group-hover:border-slate-600">
<div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center radio-dot transition-colors"></div>
<span className="text-slate-300 font-medium group-hover:text-white">3 m/s</span>
</div>
</label>
<label className="block cursor-pointer group">
<input className="option-radio hidden" name="q5" type="radio"/>
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/30 hover:bg-slate-800 transition-all group-hover:border-slate-600">
<div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center radio-dot transition-colors"></div>
<span className="text-slate-300 font-medium group-hover:text-white">-9 m/s</span>
</div>
</label>
<label className="block cursor-pointer group">
<input className="option-radio hidden" name="q5" type="radio"/>
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/30 hover:bg-slate-800 transition-all group-hover:border-slate-600">
<div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center radio-dot transition-colors"></div>
<span className="text-slate-300 font-medium group-hover:text-white">12 m/s</span>
</div>
</label>
<label className="block cursor-pointer group">
<input className="option-radio hidden" name="q5" type="radio"/>
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/30 hover:bg-slate-800 transition-all group-hover:border-slate-600">
<div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center radio-dot transition-colors"></div>
<span className="text-slate-300 font-medium group-hover:text-white">42 m/s</span>
</div>
</label>
</div>
</div>
</div>

<div className="hidden lg:flex w-72 bg-slate-900 border-l border-white/5 flex-col">
<div className="p-4 border-b border-white/5">
<h3 className="font-display text-sm font-bold text-white">Question Palette</h3>
</div>
<div className="p-4 flex-1 overflow-y-auto">
<div className="grid grid-cols-4 gap-2">

<button className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-bold hover:bg-emerald-500/30">1</button>
<button className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-bold">2</button>
<button className="w-10 h-10 rounded-lg bg-slate-800 text-slate-400 border border-white/5 text-sm font-bold hover:bg-slate-700">3</button>
<button className="w-10 h-10 rounded-lg bg-coral-500/20 text-coral-400 border border-coral-500/30 text-sm font-bold">4</button>
<button className="w-10 h-10 rounded-lg bg-white/10 text-white border border-cyan-400 text-sm font-bold shadow-neon relative">5 <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full"></div></button>
<button className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 text-sm font-bold">6</button>


</div>
</div>
<div className="p-4 bg-slate-900 border-t border-white/5 text-xs space-y-2 text-slate-400">
<div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/30"></div> Answered</div>
<div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-coral-500/20 border border-coral-500/30"></div> Not Answered</div>
<div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-purple-500/20 border border-purple-500/30"></div> Mark for Review</div>
<div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-slate-800 border border-white/5"></div> Not Visited</div>
</div>
</div>
</div>

<footer className="glass border-t border-white/5 p-4 flex justify-between items-center z-20">
<div className="flex gap-4">
<button className="px-4 py-2 rounded-lg border border-white/10 text-slate-400 text-sm hover:text-white hover:bg-white/5">Clear</button>
<button className="px-4 py-2 rounded-lg border border-purple-500/30 text-purple-400 text-sm hover:bg-purple-500/10">Mark Review</button>
</div>
<button className="px-6 py-2 rounded-lg bg-cyan-600 text-white text-sm font-bold hover:bg-cyan-500 shadow-neon transition-all flex items-center gap-2">
                Save &amp; Next <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</footer>
</div>



    </>
  );
}
