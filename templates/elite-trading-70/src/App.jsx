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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons();

        // Modal Logic
        const modal = document.getElementById('assessment-modal');
        const openBtn = document.getElementById('start-assessment-btn');
        const closeBtn = document.getElementById('close-modal-btn');
        const backdrop = document.getElementById('modal-backdrop');
        const panel = document.getElementById('modal-panel');

        function openModal() {
            modal.classList.remove('hidden');
            // Trigger reflow
            void modal.offsetWidth;
            
            // Add enter classes
            backdrop.classList.remove('opacity-0');
            panel.classList.remove('opacity-0', 'scale-95');
        }

        function closeModal() {
            // Add exit classes
            backdrop.classList.add('opacity-0');
            panel.classList.add('opacity-0', 'scale-95');

            // Wait for transition to finish before hiding
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        openBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        
        // Close on backdrop click (optional)
        modal.addEventListener('click', (e) => {
            if (e.target.closest('#modal-panel')) return;
            closeModal();
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
      

<div className="w-full bg-blue-950/20 border-b border-white/5 py-2">
<div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-4 text-sm">
<span className="text-blue-400 font-medium">New Cohort</span>
<span className="text-slate-400">Applications for Q4 Mentorship closing soon</span>
<a className="text-white hover:text-blue-400 flex items-center gap-1 transition-colors group" href="#">
                Apply now <i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-blue-900 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
<span className="text-white font-semibold text-lg">H</span>
</div>
<span className="text-xl font-semibold tracking-tight text-white">HIEN</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Program</a>
<a className="hover:text-white transition-colors" href="#">Performance</a>
<a className="hover:text-white transition-colors" href="#">Mentors</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-slate-300 hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#">
                    Join Waitlist
                </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-600/20 blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                94% Success Rate in 2023
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Precision trading <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-slate-400">redefined.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                HIEN isn't just a signal group. It's an institutional-grade mentorship ecosystem designed to transition you from retail gambler to consistent operator.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">

<button className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-[0_0_30px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.7)] flex items-center gap-2" id="start-assessment-btn">
                    Start Assessment
                </button>
<button className="h-12 px-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-medium text-sm transition-all flex items-center gap-2">
                    View Track Record <i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
</div>

<div className="relative max-w-4xl mx-auto perspective-1000">

<div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 transform translate-y-12 scale-90"></div>

<div className="glass-panel rounded-2xl p-1 shadow-2xl overflow-hidden border border-white/10 relative group">

<div className="bg-[#0A0A0A] rounded-t-xl p-4 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-xs text-slate-500 ml-2 font-mono">hien_terminal_v2.0</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                Live Market
                            </div>
</div>
</div>

<div className="bg-black/80 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px]">

<div className="col-span-1 space-y-6">
<div>
<p className="text-xs text-slate-500 mb-1">Total PnL (YTD)</p>
<p className="text-3xl font-medium text-white tracking-tight">+$124,592.00</p>
<div className="flex items-center gap-1 text-emerald-400 text-xs mt-1">
<i className="w-3 h-3" data-lucide="trending-up"></i>
<span>+12.4% this month</span>
</div>
</div>
<div className="space-y-3">
<div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<div>
<p className="text-sm text-white">XAUUSD Long</p>
<p className="text-xs text-slate-500">Scalp Entry</p>
</div>
</div>
<span className="text-emerald-400 text-sm font-medium">+$840</span>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
</div>
<div>
<p className="text-sm text-white">BTC Short</p>
<p className="text-xs text-slate-500">Swing Position</p>
</div>
</div>
<span className="text-emerald-400 text-sm font-medium">+$2,150</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 relative">

<svg className="w-full h-full text-blue-500 overflow-visible" viewbox="0 0 400 200">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="currentColor" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="currentColor" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,150 C50,140 80,160 120,100 C160,40 200,80 250,50 C300,20 350,60 400,10" fill="url(#gradient)" stroke="none"></path>
<path d="M0,150 C50,140 80,160 120,100 C160,40 200,80 250,50 C300,20 350,60 400,10" fill="none" stroke="currentColor" strokeWidth="2"></path>

<circle className="fill-black stroke-blue-400" cx="120" cy="100" r="3" strokeWidth="2"></circle>
<circle className="fill-black stroke-blue-400" cx="250" cy="50" r="3" strokeWidth="2"></circle>
<circle className="fill-blue-400 stroke-white animate-pulse" cx="400" cy="10" r="4" strokeWidth="2"></circle>
</svg>

<div className="absolute top-0 right-10 bg-zinc-900 border border-zinc-700 px-3 py-2 rounded-lg shadow-xl">
<p className="text-xs text-slate-400">Current Position</p>
<p className="text-sm text-white font-medium">Running +4.2R</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-sm text-slate-500 mb-8">Mentoring traders previously from</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-6 w-auto text-white font-bold text-xl tracking-tighter">FTMO</div>
<div className="h-6 w-auto text-white font-bold text-xl tracking-tighter italic">topstep</div>
<div className="h-6 w-auto text-white font-semibold text-xl tracking-tight">COINBASE</div>
<div className="h-6 w-auto text-white font-bold text-xl tracking-tight">BINANCE</div>
<div className="h-6 w-auto text-white font-bold text-xl tracking-tighter">VANTAGE</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 relative overflow-hidden bg-[#050505]">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">

<div className="relative z-10 glass-panel p-2 rounded-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 w-full max-w-sm mx-auto">
<div className="bg-zinc-900 aspect-[4/5] rounded-xl relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<i className="w-32 h-32 text-slate-700" data-lucide="user"></i>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<p className="text-white font-medium text-lg">HIEN Founder</p>
<p className="text-blue-400 text-sm font-medium">Head Mentor</p>
</div>
</div>
</div>

<div className="absolute -right-2 md:right-4 top-10 z-20 bg-zinc-900 border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-3 rotate-[3deg]">
<div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center border border-green-500/20">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-xs text-slate-400">Total Payouts</p>
<p className="text-lg font-bold text-white">30+</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-6">
<i className="w-3 h-3" data-lucide="award"></i> The Architect
               </div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
                   I built the system I wish I had <span className="text-slate-500">when I started.</span>
</h2>
<div className="space-y-6 text-slate-400 text-lg leading-relaxed">
<p>
                       Trading isn't about complexity; it's about clarity. Over the last <span className="text-white">2 years</span>, I've relentlessly refined my edge, moving from initial struggles to securing <span className="text-white">over 30 payouts</span> from top prop firms.
                   </p>
<p>
                       I realized most systems fail because they ignore the human element. I developed a strategy specifically engineered for <span className="text-white">beginner psychology</span>—removing decision fatigue and emotional triggers so you can execute like a machine.
                   </p>
<p>
                       I'm not here to sell you a dream, but to install the exact operating system that turned my trading from a hobby into a consistent business. We focus on risk first, profit second.
                   </p>
</div>
<div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-8">
<div>
<p className="text-2xl font-semibold text-white">2 Years</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Market Experience</p>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<p className="text-2xl font-semibold text-white">100%</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Transparency</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                    The infrastructure for <br/> <span className="text-blue-500">profitable consistency.</span>
</h2>
<p className="text-lg text-slate-400">
                    Traditional courses dump videos on you and leave. HIEN builds a data-driven environment around your trading behavior.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Live Trading Floor</h3>
<p className="text-slate-400 mb-8 max-w-md">Watch us execute trades in real-time. No delayed signals, no hindsight. Hear the thought process before the button is clicked.</p>

<div className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl p-4 flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-zinc-800 shrink-0 flex items-center justify-center">
<span className="font-bold text-xs text-white">H</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-white">HIEN Mentor <span className="text-xs text-blue-400 ml-1 px-1.5 py-0.5 bg-blue-500/10 rounded">Live</span></p>
<span className="text-xs text-slate-500">10:42 AM</span>
</div>
<p className="text-sm text-slate-300 mt-1">Order block validated on the 15m. Entering Short on ES at 4450. Stop at 4455.</p>
<div className="mt-3 flex gap-2">
<span className="text-xs border border-white/10 px-2 py-1 rounded text-slate-400">Entry: 4450.00</span>
<span className="text-xs border border-red-500/20 text-red-400 px-2 py-1 rounded bg-red-500/5">SL: -5 pts</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Psychology Audits</h3>
<p className="text-slate-400 text-sm mb-6">Weekly review of your journals to identify emotional leaks.</p>
<div className="space-y-3">
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-[75%] bg-gradient-to-r from-purple-600 to-blue-600"></div>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Discipline Score</span>
<span className="text-white">78/100</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-[45%] bg-zinc-600"></div>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Risk Management</span>
<span className="text-white">Waitlist</span>
</div>
</div>
</div>

<div className="col-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Capital Allocation</h3>
<p className="text-slate-400 text-sm">We fund consistent students with up to $100k capital.</p>
</div>

<div className="col-span-1 md:col-span-2 glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
<div className="flex-1">
<h3 className="text-2xl font-medium text-white mb-3">Algo-Enhanced Signals</h3>
<p className="text-slate-400 mb-6">Our proprietary algorithm scans 24 pairs continuously, alerting you only when high-probability confluence occurs.</p>
<a className="text-blue-400 text-sm font-medium hover:text-blue-300 flex items-center gap-2" href="#">Explore the Algorithm <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="w-full md:w-64 h-32 bg-zinc-900 rounded-lg border border-zinc-800 relative flex items-center justify-center">
<div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
<div className="text-center z-10">
<p className="text-3xl font-mono text-white">24/7</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Market Coverage</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">
                Ready to professionalize your edge?
            </h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                Join 1,200+ traders who have moved from break-even to profitable withdrawals. 
            </p>
<div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 inline-flex items-center gap-2">
<input className="bg-transparent border-none text-white placeholder-slate-500 px-4 py-3 w-64 md:w-80 focus:ring-0 focus:outline-none" placeholder="enter your email" type="email"/>
<button className="bg-white text-black font-medium px-6 py-3 rounded-xl hover:bg-slate-200 transition-colors">
                    Join HIEN
                </button>
</div>
<p className="text-xs text-slate-600 mt-4">Limited spots for Q4 mentorship. No credit card required for waitlist.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-xs text-white">H</div>
<span className="text-lg font-medium text-white">HIEN</span>
</div>
<p className="text-sm text-slate-500">
                        The last trading community you will ever need to join.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Coursework</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Live Room</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Journaling App</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Downloads</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Market Outlook</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Risk Calculator</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Risk Disclaimer</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-slate-600">© 2024 HIEN Trading. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="assessment-modal" role="dialog">

<div className="fixed inset-0 bg-[#050505]/80 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">

<div className="relative transform overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/10 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md opacity-0 scale-95" id="modal-panel">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors" id="close-modal-btn" type="button">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="px-6 pb-6 pt-8 sm:p-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
<i className="w-5 h-5" data-lucide="user-plus"></i>
</div>
<div>
<h3 className="text-lg font-medium leading-6 text-white" id="modal-title">Initialize Profile</h3>
<p className="text-sm text-slate-500 mt-0.5">Begin your trader assessment.</p>
</div>
</div>
<form className="space-y-5">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide" htmlFor="name">Full Name</label>
<div className="relative">
<input className="block w-full rounded-lg border border-white/10 bg-zinc-900/50 py-2.5 px-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:bg-zinc-900 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all" id="name" name="name" placeholder="John Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide" htmlFor="email">Email Address</label>
<div className="relative">
<input className="block w-full rounded-lg border border-white/10 bg-zinc-900/50 py-2.5 px-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:bg-zinc-900 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all" id="email" name="email" placeholder="you@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide" htmlFor="phone">Phone Number</label>
<div className="relative">
<input className="block w-full rounded-lg border border-white/10 bg-zinc-900/50 py-2.5 px-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:bg-zinc-900 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all" id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="pt-2">
<button className="flex w-full justify-center items-center gap-2 rounded-lg bg-white px-3 py-3 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all group" type="button">
                                    Start Assessment <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<p className="text-center text-[10px] text-slate-600 mt-4">
                                    By continuing, you agree to our Terms of Service and Privacy Policy.
                                </p>
</div>
</form>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
