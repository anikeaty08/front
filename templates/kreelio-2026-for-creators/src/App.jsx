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
mono: ['JetBrains Mono', 'monospace'],
serif: ['Newsreader', 'serif'],
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'blob': 'blob 10s infinite',
'scan': 'scan 8s linear infinite',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up-delayed': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
'bounce-slow': 'bounce 3s infinite',
'scroll-vertical': 'scrollVertical 20s linear infinite',
'pulse-glow': 'pulseGlow 3s infinite',
'scroll-left': 'scrollLeft 60s linear infinite',
'scroll-right': 'scrollRight 60s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scrollVertical: {
'0%': { transform: 'translateY(0)' },
'100%': { transform: 'translateY(-50%)' }
},
pulseGlow: {
'0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
'50%': { opacity: 1, transform: 'scale(1.1)' }
},
scrollLeft: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' }
},
scrollRight: {
'0%': { transform: 'translateX(-50%)' },
'100%': { transform: 'translateX(0)' }
}
},
},
},
};



      // Theme
      const themeBtn = document.getElementById('theme-toggle');
      const html = document.getElementById('html-root');
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { html.classList.add('dark'); } else { html.classList.remove('dark'); }
      themeBtn.addEventListener('click', () => {
          if (html.classList.contains('dark')) { html.classList.remove('dark'); localStorage.theme = 'light'; } else { html.classList.add('dark'); localStorage.theme = 'dark'; }
      });

      // Mouse Tracking
      document.addEventListener('mousemove', (e) => {
          document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
          document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
          // Chaos parallax
          document.querySelectorAll('.chaos-item').forEach(item => {
              const speed = 0.03;
              const rect = item.getBoundingClientRect();
              const moveX = (e.clientX - (rect.left + rect.width/2)) * speed * -1;
              const moveY = (e.clientY - (rect.top + rect.height/2)) * speed * -1;
              item.style.transform = `translate(${moveX}px, ${moveY}px)`;
          });
      });

      // Typewriter
      const words = ["Creators", "Brands", "Storytellers", "Educators"];
      let wordIndex = 0, charIndex = 0, isDeleting = false;
      const typeElement = document.getElementById('typewriter-text');
      const cursorElement = document.getElementById('cursor');
      function type() {
          const currentWord = words[wordIndex];
          typeElement.textContent = currentWord.substring(0, isDeleting ? charIndex - 1 : charIndex + 1);
          charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
          if (!isDeleting && charIndex === currentWord.length) { isDeleting = true; cursorElement.classList.add('cursor-blink'); setTimeout(type, 2000); }
          else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; cursorElement.classList.remove('cursor-blink'); setTimeout(type, 500); }
          else { cursorElement.classList.remove('cursor-blink'); setTimeout(type, isDeleting ? 50 : 100); }
      }
      setTimeout(type, 1000);

      // Modal
      const modal = document.getElementById('audit-modal');
      const modalContent = document.getElementById('audit-modal-content');
      function openAuditModal() {
          modal.classList.remove('hidden');
          setTimeout(() => { modalContent.classList.remove('scale-95', 'opacity-0'); modalContent.classList.add('scale-100', 'opacity-100'); }, 10);
          document.body.style.overflow = 'hidden';
      }
      function closeAuditModal() {
          modalContent.classList.remove('scale-100', 'opacity-100'); modalContent.classList.add('scale-95', 'opacity-0');
          setTimeout(() => {
              modal.classList.add('hidden'); document.body.style.overflow = '';
              document.querySelector('.form-step[data-step="1"]').classList.remove('hidden');
              document.querySelector('.form-step[data-step="success"]').classList.add('hidden');
          }, 300);
      }
      function nextStep() {
          document.querySelector('.form-step[data-step="1"]').classList.add('hidden');
          document.querySelector('.form-step[data-step="success"]').classList.remove('hidden');
      }

    


      document.addEventListener('DOMContentLoaded', () => { const obs = new IntersectionObserver(entries => { entries.forEach(e => { if(e.isIntersecting){ e.target.classList.remove('opacity-0'); e.target.classList.add('card-entrance'); obs.unobserve(e.target); } }) }, {threshold: 0.2}); document.querySelectorAll('.observe-entrance').forEach(el => obs.observe(el)); });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-indigo-50/60 dark:bg-[#030610] transition-colors duration-500">

<div className="fixed top-0 left-0 right-0 h-screen z-0 pointer-events-none overflow-hidden">
<div className="absolute rounded-full filter blur-[80px] opacity-60 dark:opacity-30 animate-blob bg-indigo-600/50 dark:bg-indigo-600/40 w-[600px] h-[600px] top-[-20%] left-[-10%] mix-blend-multiply dark:mix-blend-screen"></div>
<div className="absolute rounded-full filter blur-[80px] opacity-60 dark:opacity-30 animate-blob bg-indigo-600/50 dark:bg-indigo-700/40 w-[500px] h-[500px] top-[40%] right-[-10%] mix-blend-multiply dark:mix-blend-screen" style={{animationDelay: '2s'}}></div>
<div className="absolute rounded-full filter blur-[80px] opacity-50 dark:opacity-30 animate-blob bg-indigo-500/50 dark:bg-indigo-600/40 w-[400px] h-[400px] bottom-[-10%] left-[20%] mix-blend-multiply dark:mix-blend-screen" style={{animationDelay: '4s'}}></div>
</div>

<div className="spotlight-overlay"></div>
<div className="tech-grid bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"></div>

<div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="energy-streak layer-far" style={{left: '2%', animationDuration: '13s', animationDelay: '-2s', '--streak-opacity': '0.08'}}></div>
<div className="energy-streak layer-mid" style={{left: '22%', animationDuration: '8s', animationDelay: '-5s', '--streak-opacity': '0.18'}}></div>
<div className="energy-streak layer-near star hidden md:block" style={{left: '42%', animationDuration: '4s', animationDelay: '-3s', '--streak-opacity': '0.5'}}></div>
<div className="energy-streak layer-mid" style={{left: '90%', animationDuration: '7s', animationDelay: '-2s', '--streak-opacity': '0.25'}}></div>
</div>

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-indigo-500/50"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-white/70 dark:bg-[#020204]/70 backdrop-blur-xl border-slate-200 dark:border-white/5 transition-all duration-300">
<a className="flex items-center gap-2 cursor-pointer group" href="#" onclick="window.scrollTo(0,0); return false;">
<div className="relative flex items-center justify-center w-9 h-9 transition-transform group-active:scale-95 bg-gradient-to-br from-indigo-50 to-slate-50 dark:from-indigo-500/20 dark:to-slate-500/20 rounded-lg border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
<iconify-icon className="text-indigo-600 dark:text-indigo-400" icon="lucide:layers" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="dark:text-white leading-none text-sm font-bold text-slate-900 tracking-tight">KREELIO</span>
<span className="text-[9px] dark:text-indigo-400 uppercase text-indigo-600 tracking-widest font-mono mt-0.5">AI CREATIVE DIRECTOR</span>
</div>
</a>
<div className="flex items-center gap-3">
<button aria-label="Toggle Theme" className="group w-9 h-9 flex items-center justify-center rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0c] text-slate-600 dark:text-slate-400 hover:border-indigo-500/50 hover:text-indigo-500 transition-all shadow-sm dark:shadow-none" id="theme-toggle">
<iconify-icon className="absolute transition-transform duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 dark:opacity-0" icon="lucide:moon" id="theme-icon-moon" width="16"></iconify-icon>
<iconify-icon className="absolute transition-transform duration-500 rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" icon="lucide:sun" id="theme-icon-sun" width="16"></iconify-icon>
</button>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden z-10 w-full pt-48 pb-20 relative items-center" id="home">
<div className="z-20 text-center max-w-5xl px-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 dark:bg-indigo-500/5 text-[11px] font-medium mb-6 animate-fade-in shadow-[0_0_20px_rgba(99,102,241,0.15)] text-indigo-700 dark:text-indigo-300 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="">For serious Instagram creators</span>
</div>

<h1 className="flex flex-col items-center text-center z-20 mt-2 mb-10">
<span className="block sm:text-5xl md:text-7xl dark:text-white leading-[0.95] animate-slide-up bg-clip-text dark:from-white dark:via-white dark:to-white/80 md:pb-4 text-4xl font-extrabold text-slate-900 tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 pb-2 drop-shadow-sm" style={{}}>Stop guessing why <br className="hidden md:block"/> your Reels don't work.</span>
<span className="block h-[1.1em] md:text-4xl dark:text-slate-400/90 md:mt-2 min-h-[1.1em] text-2xl font-light italic text-slate-500 tracking-tight font-serif opacity-100 mt-4">Concrete Insights for <span className="" id="typewriter-text">Creator</span> <span className="inline-block w-[2px] md:w-[3px] h-[0.85em] bg-indigo-500/80 dark:bg-indigo-400/80 ml-1 align-baseline rounded-full relative top-[2px]" id="cursor"></span></span>
</h1>

<div className="flex flex-col md:flex-row items-center justify-center gap-5 relative z-20 animate-slide-up-delayed opacity-0" style={{animationDelay: '2.3s'}}>
<div className="btn-glow-border group cursor-pointer w-full md:w-auto shadow-lg shadow-indigo-500/10 dark:shadow-none">
<button className="relative z-10 w-full md:w-auto block px-8 py-3.5 bg-slate-900 dark:bg-[#0a0a0c] text-sm font-semibold rounded-full transition-all hover:bg-slate-800 dark:hover:bg-[#121215] active:bg-black dark:active:bg-[#16161a] text-white" onclick="openAuditModal()">
              Become Founding Creator
            </button>
</div>
</div>
</div>

<div className="dashboard-container z-20 animate-slide-up-delayed opacity-0 w-full max-w-[600px] mt-16 pr-4 pl-4 relative" style={{animationDelay: '0.7s', perspective: '1000px'}}>
<div className="dashboard-ui relative w-full rounded-xl bg-white dark:bg-[#0a0a0c] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl shadow-indigo-500/10 dark:shadow-none" style={{willChange: 'transform', transform: 'perspective(1000px) rotateX(-1.797247deg) rotateY(-10deg) scale(0.98)'}}>

<div className="h-9 border-b bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/5 flex items-center px-4 justify-between">
<div className="flex gap-1.5 opacity-60">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
</div>
<div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              Reel Diagnosis
            </div>
<div className="w-8"></div>
</div>

<div className="p-8 bg-white/50 dark:bg-[#050505] min-h-[340px]">
<div className="flex mb-8 pt-4 pb-2 items-center justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Hook Analysis
                </h3>
<p className="text-xs text-slate-500">
                  Timestamp: 0:00 to 0:06 seconds
                </p>
</div>
<div className="inline-flex dark:bg-red-500/10 dark:text-red-400 text-xs font-medium text-red-800 bg-red-100 max-w-none rounded-full my-2 pt-1.5 pr-2.5 pb-1.5 pl-2.5 absolute top-12 right-8 left-8 items-center">-28% Avg. Watch Time</div>
</div>

<div className="space-y-6">
<div className="relative pl-6 border-l-2 border-indigo-500">
<h4 className="dark:text-white text-sm font-medium text-slate-900 mb-1">
                  Script: Weak promise in the hook
                </h4>
<p className="dark:text-slate-400 leading-relaxed text-sm text-slate-600">Spent 10+ seconds on setup, people left before tip #1.</p>
<div className="mt-3 flex gap-2">
<span className="text-[10px] font-mono px-2 py-1 bg-slate-100 dark:bg-white/10 rounded text-slate-600 dark:text-slate-400">
                    Long setup
                  </span>
<span className="text-[10px] font-mono px-2 py-1 bg-slate-100 dark:bg-white/10 rounded text-slate-600 dark:text-slate-400">
                    Value comes late
                  </span>
</div>
</div>
<div className="relative pl-6 border-l-2 border-slate-200 dark:border-white/10">
<h4 className="dark:text-white text-sm font-medium text-slate-900 mb-1">Audio: Slow pace after 00:12s</h4>
<p className="dark:text-slate-400 leading-relaxed text-sm text-slate-600">Slow delivery is not keeping the viewer excited enough to continue.</p>
</div>
</div>
</div>
</div>

<div className="-inset-4 -z-10 bg-indigo-500/20 opacity-50 rounded-full absolute blur-3xl"></div>
</div>

<div className="absolute left-1/2 bottom-[-130vw] -translate-x-1/2 w-[150vw] h-[150vw] rounded-full border border-slate-200 dark:border-white/5 shadow-[0_-40px_100px_-20px_rgba(99,102,241,0.1),inset_0_20px_100px_-20px_rgba(99,102,241,0.05)] dark:shadow-[0_-40px_100px_-20px_rgba(99,102,241,0.2),inset_0_20px_100px_-20px_rgba(99,102,241,0.1)] z-10 pointer-events-none"></div>
</main>

<section className="relative py-24 md:py-32 bg-transparent overflow-hidden border-t border-slate-200 dark:border-white/5" id="problem">
<div className="absolute inset-0 bg-slate-50/10 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">

<div className="flex flex-col items-center mb-16 md:mb-20 text-center observe-entrance">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/5 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md mb-8">
<iconify-icon className="text-rose-500" icon="lucide:alert-triangle" width="16"></iconify-icon>
<span className="text-xs font-semibold text-slate-600 dark:text-slate-300">The Analytics Gap</span>
</div>
<h2 className="md:text-5xl dark:text-white text-3xl font-semibold text-slate-900 tracking-tight mb-6">IG Insights show you numbers — not what to change.</h2>
<p className="dark:text-slate-400/90 leading-relaxed text-lg font-light text-slate-600 font-mono max-w-2xl">
   IN SCRIPT. VOICE. OR VISUALS
</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 observe-entrance delay-100">

<div className="group relative overflow-hidden rounded-3xl bg-white/60 dark:bg-white/[0.04] ring-1 ring-slate-200 dark:ring-white/10 p-6 md:p-8 transition-all hover:ring-indigo-500/30 dark:hover:ring-white/20">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl opacity-50 dark:opacity-20"></div>

<div className="rounded-2xl bg-white/50 dark:bg-white/[0.03] p-5 ring-1 ring-slate-200/50 dark:ring-white/10 backdrop-blur-md mb-6 relative overflow-hidden">
<div className="flex items-center justify-between mb-6">
<div className="flex gap-2 dark:text-white/60 uppercase text-xs font-medium text-slate-500 tracking-wider gap-x-2 gap-y-2 items-center">Retention</div>
<span className="text-xs font-mono text-rose-500">-42% Drop</span>
</div>

<div className="flex gap-1 h-24 pr-1 pl-1 relative gap-x-1 gap-y-1 items-end">

<div className="absolute inset-0 border-b border-slate-200 dark:border-white/5 pointer-events-none" style={{bottom: '25%'}}></div>
<div className="absolute inset-0 border-b border-slate-200 dark:border-white/5 pointer-events-none" style={{bottom: '50%'}}></div>
<div className="absolute inset-0 border-b border-slate-200 dark:border-white/5 pointer-events-none" style={{bottom: '75%'}}></div>

<div className="absolute inset-0 px-1 w-full h-full pointer-events-none">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="gradient-aura-emk7h1q5v8nxuw31" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,100 L0,20 C15,20 25,22 35,25 C45,30 45,60 50,70 C55,80 65,76 80,78 L100,80 L100,100 Z" fill="url(#gradient-aura-emk7h1q5v8nxuw31)"></path>
<path d="M0,20 C15,20 25,22 35,25 C45,30 45,60 50,70 C55,80 65,76 80,78 L100,80" fill="none" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>

<div className="absolute left-1/2 top-[70%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-rose-500 rounded-full shadow-lg shadow-rose-500/50 animate-pulse z-10 group">
<div className="absolute inset-0 rounded-full ring-4 ring-rose-500/20"></div>

<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap opacity-100 shadow-xl border border-white/10 transition-opacity">
            Why here?
            <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-white/10"></div>
</div>
</div>
</div>
</div>
<h3 className="dark:text-white text-xl font-semibold text-slate-900 mb-2" style={{}}>Viewers dropped, but why?</h3>
<p className="dark:text-slate-400 leading-relaxed text-sm text-slate-600">Was it the word you said? The camera angle? The story? </p>
</div>

<div className="group overflow-hidden dark:bg-white/[0.04] dark:ring-white/10 md:p-8 transition-all hover:ring-emerald-500/30 dark:hover:ring-white/20 bg-white/60 ring-slate-200 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="dark:bg-white/[0.03] dark:ring-white/10 overflow-hidden bg-white/50 h-[160px] ring-slate-200/50 ring-1 rounded-2xl mt-6 mb-6 relative backdrop-blur-md">

<div className="pt-4 pr-4 pl-4 absolute top-0 right-0 left-0 space-y-3">

<div className="flex gap-3 dark:bg-white/5 dark:border-white/5 bg-white/90 border-slate-100 border rounded-lg pt-2.5 pr-2.5 pb-2.5 pl-2.5 shadow-sm backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<div className="w-8 h-8 rounded-md bg-indigo-50 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-500 shrink-0">
<iconify-icon icon="lucide:bookmark" width="14"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex mb-1.5 items-center justify-between">
<span className="text-[10px] dark:text-slate-400 uppercase font-semibold text-slate-500 tracking-wide">Saves</span>
<span className="text-xs font-bold text-slate-700 dark:text-slate-200 font-mono">2,026</span>
</div>
<div className="h-1.5 dark:bg-white/10 overflow-hidden bg-slate-100 w-full rounded-full">
<div className="h-full bg-indigo-500 rounded-full w-[75%]"></div>
</div>
</div>
</div><div className="flex gap-3 dark:bg-white/5 dark:border-white/5 bg-white/90 border-slate-100 border rounded-lg pt-2.5 pr-2.5 pb-2.5 pl-2.5 shadow-sm backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<div className="w-8 h-8 rounded-md bg-rose-50 dark:bg-rose-500/20 flex items-center justify-center text-rose-500 shrink-0">
<iconify-icon icon="lucide:heart" width="14"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex mb-1.5 items-center justify-between">
<span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Likes</span>
<span className="text-xs font-bold text-slate-700 dark:text-slate-200 font-mono">24</span>
</div>
<div className="h-1.5 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-rose-400 rounded-full w-[2%]"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 dark:to-[#0a0a0c]/90 pointer-events-none"></div>
</div>
<h3 className="dark:text-white text-xl font-semibold text-slate-900 mb-2">Something works, but how?</h3>
<p className="dark:text-slate-400 leading-relaxed text-sm text-slate-600">Something worked, but you don't know how to replicate it further.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white/60 dark:bg-white/[0.04] ring-1 ring-slate-200 dark:ring-white/10 p-6 md:p-8 transition-all hover:ring-violet-500/30 dark:hover:ring-white/20 lg:col-span-2 flex flex-col md:flex-row gap-8 items-center">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="flex-1 w-full relative">
<div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
<span className="">Post</span>
<span className="">Fail</span>
<span className="">Guess</span>
</div>
<div className="flex items-center gap-2">

<div className="h-10 flex-1 bg-white/50 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="lucide:upload-cloud" width="16"></iconify-icon>
</div>
<div className="w-4 h-[1px] bg-slate-300 dark:bg-white/10"></div>

<div className="h-10 flex-1 bg-rose-500/10 rounded-lg border border-rose-500/20 flex items-center justify-center relative">
<iconify-icon className="text-rose-500" icon="lucide:x" width="16"></iconify-icon>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full animate-ping"></div>
</div>
<div className="w-4 h-[1px] bg-slate-300 dark:bg-white/10"></div>

<div className="h-10 flex-1 bg-indigo-500/10 rounded-lg border border-indigo-500/20 flex items-center justify-center overflow-hidden">

<div className="flex flex-col animate-bounce-slow text-indigo-500 text-[10px] font-semibold">
<span>Music?</span>
<span>Hook?</span>
<span>Cut?</span>
</div>
</div>
</div>
</div>
<div className="flex-1 text-left">
<h3 className="dark:text-white text-xl font-semibold text-slate-900 mb-2">Every reel is a trial to go viral?</h3>
<p className="dark:text-slate-400 leading-relaxed text-sm text-slate-600 max-w-md">Shorter captions? Trending audio? This "tiral and error" method burns your time!</p>
<div className="mt-4 flex gap-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-medium border border-rose-100 dark:border-rose-500/20">
<iconify-icon icon="lucide:x-circle" width="12"></iconify-icon>
                            Wasted Views
                        </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium border border-amber-100 dark:border-amber-500/20">
<iconify-icon icon="lucide:clock" width="12"></iconify-icon>
                            Slow Growth
                        </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 dark:border-white/5 overflow-hidden bg-transparent border-slate-200 border-t pt-20 pb-20 relative" id="app">

<div className="text-center mb-12 max-w-3xl mx-auto px-6 relative z-10">
<span className="dark:text-indigo-400 uppercase block text-xs text-indigo-600 tracking-widest font-mono mb-4">The Engine</span>
<h2 className="md:text-5xl dark:text-white text-3xl font-semibold text-slate-900 tracking-tight mb-6">
            See your Reel like a
            <span className="text-indigo-500">creative director</span>
            would.
          </h2>
<p className="text-slate-600 dark:text-slate-400 text-lg font-light max-w-xl mx-auto">
            We digest your raw metrics, script data, and visual patterns to synthesize clear, actionable creative direction.
          </p>
</div>

<div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[450px]">

<div className="absolute inset-0 mask-radial-faded z-0">
<div className="[mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)] absolute top-0 right-0 bottom-0 left-0"></div>
</div>


<svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60 dark:opacity-80" fill="none" preserveaspectratio="none" viewbox="0 0 800 450">
<defs>
<lineargradient id="flowLine" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#6366f1" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#818cf8" stop-opacity="1"></stop>
</lineargradient>
<marker id="arrowhead" markerheight="7" markerwidth="10" orient="auto" refx="9" refy="3.5">
<polygon fill="#818cf8" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
</defs>

<path className="animate-pulse-glow" d="M120 70 C 120 200, 380 150, 400 250" fill="none" stroke="url(#flowLine)" strokeWidth="1.5" style={{animationDuration: '3s'}}></path>
<circle fill="#a5b4fc" r="3"><animatemotion dur="3s" path="M120 70 C 120 200, 380 150, 400 250" repeatcount="indefinite"></animatemotion></circle>

<path className="animate-pulse-glow" d="M300 70 C 300 180, 390 150, 400 250" fill="none" stroke="url(#flowLine)" strokeWidth="1.5" style={{animationDuration: '4s'}}></path>
<circle fill="#a5b4fc" r="3"><animatemotion dur="4s" path="M300 70 C 300 180, 390 150, 400 250" repeatcount="indefinite"></animatemotion></circle>

<path className="animate-pulse-glow" d="M500 70 C 500 180, 410 150, 400 250" fill="none" stroke="url(#flowLine)" strokeWidth="1.5" style={{animationDuration: '3.5s'}}></path>
<circle fill="#a5b4fc" r="3"><animatemotion dur="3.5s" path="M500 70 C 500 180, 410 150, 400 250" repeatcount="indefinite"></animatemotion></circle>

<path className="animate-pulse-glow" d="M680 70 C 680 200, 420 150, 400 250" fill="none" stroke="url(#flowLine)" strokeWidth="1.5" style={{animationDuration: '4.5s'}}></path>
<circle fill="#a5b4fc" r="3"><animatemotion dur="4.5s" path="M680 70 C 680 200, 420 150, 400 250" repeatcount="indefinite"></animatemotion></circle>
</svg>

<div className="absolute top-4 left-0 w-full px-4 md:px-16 flex justify-between items-start z-20 max-w-4xl mx-auto right-0">

<div className="flex flex-col items-center gap-3 group">
<div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-slate-200 dark:border-white/10 shadow-lg shadow-indigo-500/5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-500" icon="lucide:bar-chart-3" width="24"></iconify-icon>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white dark:border-[#0c0c0e]"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium opacity-60 group-hover:opacity-100 transition-opacity">Metrics</span>
</div>

<div className="flex flex-col items-center gap-3 group">
<div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-slate-200 dark:border-white/10 shadow-lg shadow-indigo-500/5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-500" icon="lucide:file-text" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium opacity-60 group-hover:opacity-100 transition-opacity">Script</span>
</div>

<div className="flex flex-col items-center gap-3 group">
<div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-slate-200 dark:border-white/10 shadow-lg shadow-indigo-500/5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-500" icon="lucide:video" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium opacity-60 group-hover:opacity-100 transition-opacity">Visuals</span>
</div>

<div className="flex flex-col items-center gap-3 group">
<div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-slate-200 dark:border-white/10 shadow-lg shadow-indigo-500/5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-500" icon="lucide:globe" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium opacity-60 group-hover:opacity-100 transition-opacity">Trends</span>
</div>
</div>

<div className="md:bottom-6 -translate-x-1/2 z-30 inline-flex gap-2 dark:border-white/10 dark:bg-white/5 animate-fade-in delay-[400ms] bg-white/40 border-slate-200 border rounded-full px-3 py-1.5 absolute bottom-4 left-1/2 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-indigo-500" icon="lucide:sparkles" width="16"></iconify-icon>
<span className="dark:text-slate-300 text-xs font-semibold text-slate-600">Actionable Insights</span>
</div><div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-full">

<div className="hidden md:flex absolute right-[50%] mr-16 items-center animate-fade-in delay-100">
<div className="px-4 py-2 rounded-full border border-indigo-500/30 bg-white/90 dark:bg-[#111115]/90 backdrop-blur-md shadow-lg shadow-indigo-500/10 flex items-center gap-2.5 transform transition-transform hover:scale-105 cursor-default">
<iconify-icon className="text-indigo-500" icon="lucide:check-circle" width="16"></iconify-icon>
<span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Script Direction</span>
</div>

<div className="w-12 h-px bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
</div>

<div className="hidden md:flex absolute left-[50%] ml-16 items-center animate-fade-in delay-200">

<div className="w-12 h-px bg-gradient-to-l from-indigo-500/50 to-transparent"></div>
<div className="px-4 py-2 rounded-full border border-indigo-500/30 bg-white/90 dark:bg-[#111115]/90 backdrop-blur-md shadow-lg shadow-indigo-500/10 flex items-center gap-2.5 transform transition-transform hover:scale-105 cursor-default">
<iconify-icon className="text-indigo-500" icon="lucide:music" width="16"></iconify-icon>
<span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Audio Cues</span>
</div>
</div>

<div className="relative z-20 group cursor-pointer">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-indigo-500/10 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-indigo-500/20 animate-[spin_7s_linear_infinite_reverse]"></div>

<div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-[0_0_50px_-10px_rgba(99,102,241,0.6)] flex items-center justify-center ring-4 ring-slate-50 dark:ring-[#020204] transform transition-transform hover:scale-105 active:scale-95">
<iconify-icon className="text-white drop-shadow-md animate-pulse" icon="lucide:cpu" width="40"></iconify-icon>
</div>
</div>

<div className="absolute top-full mt-8 md:mt-12 flex flex-col items-center animate-fade-in delay-300">
<div className="w-px h-8 md:h-12 bg-gradient-to-b from-indigo-500/50 to-transparent absolute -top-8 md:-top-12"></div>
<div className="px-4 py-2 rounded-full border border-indigo-500/30 bg-white/90 dark:bg-[#111115]/90 backdrop-blur-md shadow-lg shadow-indigo-500/10 flex items-center gap-2.5 transform transition-transform hover:scale-105 cursor-default">
<iconify-icon className="text-indigo-500" icon="lucide:video" width="16"></iconify-icon>
<span className="dark:text-slate-200 text-xs font-semibold text-slate-700">Visual Edits</span>
</div>

<div className="flex md:hidden gap-3 mt-4">
<div className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 backdrop-blur-sm flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="lucide:check-circle" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">Script</span>
</div>
<div className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 backdrop-blur-sm flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="lucide:music" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">Audio</span>
</div>
</div>
</div>
</div><div className="md:bottom-6 -translate-x-1/2 z-30 inline-flex gap-2 dark:border-white/10 dark:bg-white/5 animate-fade-in delay-[400ms] bg-white/40 border-slate-200 border rounded-full px-3 py-1.5 absolute bottom-4 left-1/2 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-indigo-500" icon="lucide:sparkles" width="16"></iconify-icon>
<span className="dark:text-slate-300 text-xs font-semibold text-slate-600">Actionable Insights</span>
</div>
</div>
</section><section className="overflow-hidden dark:border-white/5 bg-transparent border-slate-200 border-t pt-32 pb-32 relative" id="how-it-works">
<div className="absolute inset-0 bg-slate-50/20 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="z-10 max-w-7xl mx-auto px-6 relative flex flex-col items-center">

<div className="mb-16 max-w-3xl text-center">
<h2 className="dark:text-white md:text-5xl text-3xl font-bold text-slate-900 tracking-tight mb-6">
            Analyze your reel across <br/>
<span className="font-serif text-indigo-600 dark:text-indigo-400 italic">50+ storytelling variables</span>
</h2>
<p className="leading-relaxed dark:text-slate-400 text-lg font-light text-slate-600 max-w-2xl mr-auto ml-auto">We measure them, correlate them to your IG metrics, and give you actionable insights to improve them.</p>
</div>

<div className="w-full relative py-12 overflow-hidden border-y border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">

<div className="absolute inset-0 pointer-events-none z-10 marquee-mask"></div>

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-indigo-500/50 z-20 hidden md:block">
<div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
</div>

<div className="flex gap-4 mb-4 animate-scroll-left w-max hover:[animation-play-state:paused] opacity-80 hover:opacity-100 transition-opacity">

<div className="flex gap-4">
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Hook Strength</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Promise Clarity</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Time to Value</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Problem-Turn-Solution Arc</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Tempo</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Specificity</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Cognitive Load</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">CTA Timing</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Pattern Interrupt</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Tease-Reveal Cadence</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Before/After Contrast</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Demonstration vs Claims</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Stakes &amp; Consequence</span>
</div>

<div className="flex gap-4">
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Hook Strength</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Promise Clarity</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Time to Value</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Problem-Turn-Solution Arc</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Tempo</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Specificity</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Cognitive Load</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">CTA Timing</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Pattern Interrupt</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Tease-Reveal Cadence</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Before/After Contrast</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Demonstration vs Claims</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Stakes &amp; Consequence</span>
</div>
</div>

<div className="flex gap-4 mb-4 animate-scroll-right w-max hover:[animation-play-state:paused] opacity-80 hover:opacity-100 transition-opacity">
<div className="flex gap-4">
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Empathy/Relatability</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Authority Cue</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Objection Pre-emption</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Humor/Micro-delight</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Rhythm Alignment</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Silence as Device</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Repetition/Refrain</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Callbacks/Bookends</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Memory Anchor</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Tension Micro-conflicts</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Payoff Richness</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Nonverbal Cues</span>
</div>
<div className="flex gap-4">
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Empathy/Relatability</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Authority Cue</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Objection Pre-emption</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Humor/Micro-delight</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Rhythm Alignment</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Silence as Device</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Repetition/Refrain</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Callbacks/Bookends</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Memory Anchor</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Tension Micro-conflicts</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Payoff Richness</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Nonverbal Cues</span>
</div>
</div>

<div className="flex gap-4 mb-4 animate-scroll-left w-max hover:[animation-play-state:paused] opacity-80 hover:opacity-100 transition-opacity">
<div className="flex gap-4">
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Subtitle Presence</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Speech Onset Time</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Articulation Clarity</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">WPM Micro-chunking</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">De-jargonization</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Social Comparison</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Scarcity/Urgency</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Quantified Proof</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Commitment Micro-ask</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Liking/Warmth Cues</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Risk Reversal</span>
</div>
<div className="flex gap-4">
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Subtitle Presence</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Speech Onset Time</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Articulation Clarity</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">WPM Micro-chunking</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">De-jargonization</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Social Comparison</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Scarcity/Urgency</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Quantified Proof</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Commitment Micro-ask</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Liking/Warmth Cues</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 backdrop-blur-sm whitespace-nowrap">Risk Reversal</span>
</div>
</div>
</div>

<div className="relative -mt-6 z-20">
</div>
</div>
</section>



<section className="overflow-hidden bg-transparent w-full border-slate-200 dark:border-white/5 border-t py-12 relative" id="cta">
<div className="absolute inset-0 bg-slate-50/10 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-6">
          Ready to stop guessing?
        </h2>
<p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          Join the waitlist to be among the first creators we design this with.
        </p>
<button className="btn-glow-border group relative inline-flex w-full md:w-auto items-center justify-center rounded-full p-[1px] shadow-lg shadow-indigo-500/10 dark:shadow-none mb-12 cursor-pointer transition-transform" onclick="openAuditModal()">
<span className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 dark:bg-[#0a0a0c] dark:hover:bg-[#121215] active:bg-black dark:active:bg-[#16161a]">
      Become Founding Creator
  </span>
</button>
<div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400 items-center justify-between">
<div className="">
<span className="font-bold text-slate-900 dark:text-white mr-1">
              REASON.
            </span>
<span className="text-xs">© 2023</span>
</div>
<div className="flex gap-4">
<a className="hover:text-slate-900 dark:hover:text-white" href="#">
              Privacy
            </a>
<a className="hover:text-slate-900 dark:hover:text-white" href="#">
              Twitter
            </a>
</div>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="audit-modal">
<div className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeAuditModal()"></div>
<div className="dark:bg-[#0c0c0e] shadow-indigo-500/10 dark:border-white/10 overflow-hidden transform transition-all duration-300 flex flex-col bg-white opacity-0 w-full max-w-lg border-slate-200 border rounded-2xl relative shadow-2xl scale-95" id="audit-modal-content">
<div className="px-6 py-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/[0.02] shrink-0">
<div className="flex items-center gap-2">
<h3 className="font-semibold text-slate-900 dark:text-white">
              Become Founding Creator
            </h3>
</div>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors" onclick="closeAuditModal()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<div className="p-6">
<form id="waitlist-form" onsubmit="event.preventDefault(); nextStep();">
<div className="form-step transition-all duration-300" data-step="1">
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Instagram Handle
                  </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="lucide:instagram" width="16"></iconify-icon>
</div>
<input className="w-full pl-10 px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="@janedoe" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      WhatsApp Number
                    </label>
<span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">(Optional)</span>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="lucide:message-circle" width="16"></iconify-icon>
</div>
<input className="w-full pl-10 px-3 py-2.5 bg-slate-50 dark:bg-[#151518] border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="+91 98765 43210" type="tel"/>
</div>
<p className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
<iconify-icon className="text-emerald-500/80" icon="lucide:shield-check" width="12"></iconify-icon>
                    We don't spam. We reach out politely.
                  </p>
</div>
<button className="w-full mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg shadow-lg shadow-indigo-500/20 transition-all active:scale-95 flex items-center justify-center gap-2" type="submit">
                  I am in 🥳
                  <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="form-step hidden transition-all duration-300 text-center py-4" data-step="success">
<div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
<iconify-icon icon="lucide:check" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                You're on the list!
              </h4>
<p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                We'll notify you when spots open up for the next cohort.
              </p>
<button className="px-6 py-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white text-sm font-medium rounded-lg transition-all" onclick="closeAuditModal()" type="button">
                Close
              </button>
</div>
</form>
</div>
</div>
</div>




    </>
  );
}
