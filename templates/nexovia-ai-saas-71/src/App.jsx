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
serif: ['Newsreader', 'serif'],
},
colors: {
brand: {
light: '#00b7a8',
DEFAULT: '#078d8b',
dark: '#172c48',
}
},
animation: {
'beam': 'beam 8s linear infinite',
'marquee': 'marquee 40s linear infinite',
},
keyframes: {
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



// Intersection Observer for fade-up animations
document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll('.fade-up-element').forEach((el) => observer.observe(el));
});



        const body = document.getElementById('main-body');
        const spotlightGroups = document.querySelectorAll('.spotlight-group');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            body.style.setProperty('--mouse-x', `${x}px`);
            body.style.setProperty('--mouse-y', `${y}px`);

            spotlightGroups.forEach(group => {
                const rect = group.getBoundingClientRect();
                const relX = x - rect.left;
                const relY = y - rect.top;

                group.style.setProperty('--mouse-x-rel', `${relX}px`);
                group.style.setProperty('--mouse-y-rel', `${relY}px`);
            });
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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#172c48]/30 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>
<div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#00b7a8]/10 blur-[120px] rounded-full"></div>

<div className="fixed inset-0 transition-opacity duration-300 z-0" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 183, 168, 0.03), transparent 40%)'}}>
</div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 max-w-7xl mx-auto border-x border-white/[0.03]">
<div className="grid grid-cols-6 md:grid-cols-12 h-full w-full">
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-[#00b7a8] to-transparent animate-beam" style={{animationDelay: '1.5s', animationDuration: '7s'}}></div>
</div>
<div className="border-r border-white/[0.03] h-full hidden md:block"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-[#078d8b] to-transparent animate-beam" style={{animationDelay: '3s', animationDuration: '10s'}}></div>
</div>
<div className="border-r border-white/[0.03] h-full hidden md:block"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-32 -right-[1px] w-[1px] h-32 bg-gradient-to-b from-transparent via-[#00b7a8]/60 to-transparent animate-beam" style={{animationDelay: '0.5s', animationDuration: '5s'}}></div>
</div>
<div className="border-r border-white/[0.03] h-full hidden md:block"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-[#172c48] to-transparent animate-beam" style={{animationDelay: '5s', animationDuration: '12s'}}></div>
</div>
<div className="border-r border-white/[0.03] h-full hidden md:block"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-[#00b7a8] to-transparent animate-beam" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
</div>
<div className="border-r border-white/[0.03] h-full hidden md:block"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block"></div>
</div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[#00b7a8] flex items-center justify-center p-1 rounded-md bg-[#00b7a8]/10">
<span className="iconify" data-height="20" data-icon="lucide:cpu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="text-lg font-medium tracking-tight text-white">Nexovia</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-gray-400 hover:text-[#00b7a8] transition-colors" href="#features">Features</a>
<a className="text-xs font-normal text-gray-400 hover:text-[#00b7a8] transition-colors" href="#comparison">Comparison</a>
<a className="text-xs font-normal text-gray-400 hover:text-[#00b7a8] transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-normal text-gray-400 hover:text-white transition-colors" href="#">Sign in</a>
<button className="relative rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wide text-white bg-[#172c48] border border-[#00b7a8]/30 hover:border-[#00b7a8]/60 hover:bg-[#172c48]/80 transition-all overflow-hidden group">
<span className="relative z-10 flex items-center gap-1">
                        GET STARTED
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00b7a8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>
</div>
</div>
</nav>

<main className="relative z-10">

<section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">

<div className="fade-up-element w-full flex justify-center mb-10 spotlight-group relative">
<div className="-inset-px spotlight-border opacity-0 absolute transition-opacity duration-300 w-fit rounded-full" style={{background: 'radial-gradient(100px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(0, 183, 168, 0.4), transparent)'}}></div>
<a className="relative z-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] pr-4 pl-1.5 py-1.5 hover:border-white/20 transition-all" href="#pricing">
<span className="rounded-full bg-[#00b7a8]/10 border border-[#00b7a8]/20 px-2.5 py-0.5 text-[10px] font-semibold text-[#00b7a8] tracking-wide uppercase">AI 2.0</span>
<span className="text-xs font-light text-gray-300 flex items-center gap-1">
                        Experience the future today
                        <span className="iconify text-gray-500" data-icon="lucide:chevron-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
</a>
</div>

<div className="fade-up-element max-w-5xl mx-auto" style={{transitionDelay: '100ms'}}>
<h1 className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tighter text-white leading-[1.1] mb-6">
                    Adapt. Innovate.
                    <span className="block font-serif italic font-normal text-[#00b7a8] mt-1">Empower.</span>
</h1>
</div>

<div className="fade-up-element max-w-2xl mx-auto mt-6 mb-12" style={{transitionDelay: '200ms'}}>
<p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    From AI-driven business automation to lifestyle personalization, Nexovia unifies the power of artificial intelligence into one seamless platform — transforming how businesses operate and how people live.
                </p>
</div>

<div className="fade-up-element flex flex-col sm:flex-row gap-4 justify-center items-center w-full" style={{transitionDelay: '300ms'}}>
<button className="group relative w-full sm:w-auto h-14 px-8 rounded-full flex items-center justify-center gap-2 bg-[#00b7a8] hover:bg-[#00b7a8]/90 text-[#050505] transition-all shadow-[0_0_20px_-5px_rgba(0,183,168,0.4)]">
<span className="text-base font-semibold tracking-tight">Explore Our AI Tools</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '2'}}></span>
</button>

<button className="group relative w-full sm:w-auto h-14 pl-2 pr-6 rounded-full flex items-center justify-center sm:justify-start gap-3 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] text-gray-300 transition-all backdrop-blur-sm overflow-hidden">
<div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-b from-white to-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.2)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-white">
<span className="iconify text-black ml-0.5" data-icon="lucide:play" data-width="14" style={{strokeWidth: '3', fill: 'currentColor'}}></span>
</div>
<span className="relative z-10 text-sm font-medium tracking-tight text-white group-hover:text-white/90">Watch Demo</span>
</button>
</div>

<div className="mt-24 w-full fade-up-element relative" style={{transitionDelay: '400ms'}}>
<p className="text-center text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-8">Powering Next-Gen Companies</p>
<div className="relative flex overflow-hidden marquee-mask">
<div className="flex animate-marquee whitespace-nowrap gap-16 items-center min-w-full pr-16">
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:openai" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:anthropic" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:googlecloud" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:nvidia" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:meta" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:microsoft" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:databricks" data-width="24"></span>

<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:openai" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:anthropic" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:googlecloud" data-width="24"></span>
</div>
<div className="absolute top-0 flex animate-marquee whitespace-nowrap gap-16 items-center min-w-full pr-16" style={{left: '100%'}}>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:openai" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:anthropic" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:googlecloud" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:nvidia" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:meta" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:microsoft" data-width="24"></span>
<span className="iconify text-gray-600 opacity-60 hover:opacity-100 transition-opacity" data-icon="simple-icons:databricks" data-width="24"></span>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.05]" id="features">
<div className="text-center max-w-2xl mx-auto mb-16 fade-up-element">
<h2 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight mb-4">
                    Stop paying for <span className="text-[#00b7a8] not-italic font-sans font-light">basic utilities.</span>
</h2>
<p className="text-gray-400 text-lg font-light leading-relaxed">
                    Most platforms are slow, overpriced clones. Nexovia gives you the power of code with the speed of drag-and-drop.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl bg-[#172c48]/5 border border-white/[0.05] p-6 spotlight-group overflow-hidden hover:bg-[#172c48]/20 transition-colors duration-500 fade-up-element">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-border" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(0, 183, 168, 0.05), transparent 40%)'}}></div>
<div className="h-40 w-full mb-6 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex flex-col p-4 gap-2 select-none">

<div className="absolute top-1/2 left-4 p-2 bg-white/5 rounded border border-white/5 w-24 h-8"></div>
<svg className="absolute top-1/2 left-[4.5rem] w-12 h-12 text-gray-700" style={{transform: 'translate(0, -50%)'}}>
<path d="M0,24 L24,24 M24,24 L48,10 M24,24 L48,38" fill="none" stroke="currentColor" stroke-dasharray="2,2"></path>
</svg>
<div className="absolute top-4 right-4 p-1.5 bg-[#00b7a8]/10 rounded border border-[#00b7a8]/20 w-16 h-6"></div>
<div className="absolute bottom-4 right-4 p-1.5 bg-[#078d8b]/10 rounded border border-[#078d8b]/20 w-16 h-6"></div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-mono text-[#00b7a8] bg-[#00b7a8]/10 px-1.5 py-0.5 rounded border border-[#00b7a8]/20">INCLUDED</span>
<span className="iconify text-gray-500 group-hover:text-[#00b7a8] transition-colors" data-icon="lucide:git-merge" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Visual Logic</h3>
<p className="text-sm text-gray-500 leading-relaxed">Branch questions visually. "IF budget &gt; $10K → Ask Timeline." No complex menus.</p>
</div>

<div className="group relative rounded-2xl bg-[#172c48]/5 border border-white/[0.05] p-6 spotlight-group overflow-hidden hover:bg-[#172c48]/20 transition-colors duration-500 fade-up-element" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-border" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(7, 141, 139, 0.05), transparent 40%)'}}></div>
<div className="h-40 w-full mb-6 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center select-none">
<div className="text-center z-10">
<div className="text-4xl font-mono text-[#00b7a8] font-semibold tracking-tighter">0.8s</div>
<div className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">Load Time</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
<div className="h-full bg-[#00b7a8] w-1/2 animate-beam" style={{animationDuration: '2s'}}></div>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-mono text-[#078d8b] bg-[#078d8b]/10 px-1.5 py-0.5 rounded border border-[#078d8b]/20">FAST</span>
<span className="iconify text-gray-500 group-hover:text-[#078d8b] transition-colors" data-icon="lucide:zap" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Instant Load</h3>
<p className="text-sm text-gray-500 leading-relaxed">Competitors take 3.2s. We take 0.8s. Speed increases conversion by 7% per second.</p>
</div>

<div className="group relative rounded-2xl bg-[#172c48]/5 border border-white/[0.05] p-6 spotlight-group overflow-hidden hover:bg-[#172c48]/20 transition-colors duration-500 fade-up-element" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-border" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(23, 44, 72, 0.15), transparent 40%)'}}></div>
<div className="h-40 w-full mb-6 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center select-none">
<div className="w-20 h-20 rounded-full border border-dashed border-white/20 flex items-center justify-center relative">
<span className="text-[10px] text-gray-600">Logo</span>
<div className="absolute -bottom-2 -right-2 bg-[#172c48] text-[#00b7a8] rounded-full p-1 border border-[#00b7a8]/30">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">WHITE LABEL</span>
<span className="iconify text-gray-500 group-hover:text-indigo-400 transition-colors" data-icon="lucide:palette" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Total Style Control</h3>
<p className="text-sm text-gray-500 leading-relaxed">Match your fonts. Match your colors. Remove "Powered by" branding on ALL plans.</p>
</div>
</div>
</section>

<section className="relative py-24 px-6 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16 fade-up-element">
<h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">
                    Pick Your Plan.
                    <span className="italic text-[#00b7a8]">50% Off Month 1.</span>
</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                    Lock in the "Early Adopter" rate forever. Prices increase next month.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-24">

<div className="fade-up-element bg-[#0a0a0a] border border-white/10 rounded-xl p-8 flex flex-col gap-6 relative group hover:border-white/20 transition-colors h-full">
<div>
<span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Starter</span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-lg text-red-500/50 line-through font-mono decoration-1">$29</span>
<span className="text-4xl font-serif text-white tracking-tight">$14.50</span>
</div>
<p className="text-[10px] text-[#00b7a8] font-mono mt-2 uppercase tracking-wide">First Month 50% Off</p>
</div>
<ul className="space-y-3 text-sm text-gray-400 font-normal">
<li className="flex gap-3 items-center"><span className="iconify text-[#078d8b]" data-icon="lucide:check" data-width="16"></span> 1,000 submissions/mo</li>
<li className="flex gap-3 items-center"><span className="iconify text-[#078d8b]" data-icon="lucide:check" data-width="16"></span> Unlimited forms</li>
<li className="flex gap-3 items-center"><span className="iconify text-[#078d8b]" data-icon="lucide:check" data-width="16"></span> Visual logic</li>
</ul>
<a className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium text-center hover:bg-white/10 hover:text-white transition-all mt-auto" href="#">Start Starter</a>
</div>

<div className="fade-up-element relative group md:-my-4">
<div className="absolute inset-0 bg-[#00b7a8]/10 rounded-xl blur-xl opacity-50"></div>
<div className="relative bg-[#050505] border border-[#00b7a8]/40 rounded-xl p-8 flex flex-col gap-6 shadow-2xl h-full">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00b7a8] text-[#050505] text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-widest">Most Popular</div>
<div>
<span className="text-xs font-bold text-[#00b7a8] uppercase tracking-widest">Pro</span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-lg text-red-500/50 line-through font-mono decoration-1">$59</span>
<span className="text-4xl font-serif text-white tracking-tight">$29.50</span>
</div>
<p className="text-[10px] text-[#00b7a8] font-mono mt-2 uppercase tracking-wide">First Month 50% Off</p>
</div>
<ul className="space-y-3 text-sm text-gray-200 font-medium">
<li className="flex gap-3 items-center"><span className="iconify text-[#00b7a8]" data-icon="lucide:check" data-width="16"></span> Everything in Starter</li>
<li className="flex gap-3 items-center"><span className="iconify text-[#00b7a8]" data-icon="lucide:check" data-width="16"></span> 7,500 submissions/mo</li>
<li className="flex gap-3 items-center"><span className="iconify text-[#00b7a8]" data-icon="lucide:check" data-width="16"></span> Remove branding</li>
<li className="flex gap-3 items-center"><span className="iconify text-[#00b7a8]" data-icon="lucide:check" data-width="16"></span> Custom Domain</li>
</ul>
<a className="w-full py-3 rounded-lg bg-[#00b7a8] text-[#050505] font-semibold text-sm text-center hover:bg-[#00b7a8]/90 transition-all mt-auto shadow-[0_0_15px_rgba(0,183,168,0.3)]" href="#">Get Pro</a>
</div>
</div>

<div className="fade-up-element bg-[#0a0a0a] border border-white/10 rounded-xl p-8 flex flex-col gap-6 relative group hover:border-white/20 transition-colors h-full">
<div>
<span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Scale</span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-lg text-red-500/50 line-through font-mono decoration-1">$119</span>
<span className="text-4xl font-serif text-white tracking-tight">$59.50</span>
</div>
<p className="text-[10px] text-[#00b7a8] font-mono mt-2 uppercase tracking-wide">First Month 50% Off</p>
</div>
<ul className="space-y-3 text-sm text-gray-400 font-normal">
<li className="flex gap-3 items-center"><span className="iconify text-[#078d8b]" data-icon="lucide:check" data-width="16"></span> Everything in Pro</li>
<li className="flex gap-3 items-center"><span className="iconify text-[#078d8b]" data-icon="lucide:check" data-width="16"></span> 20,000 submissions/mo</li>
<li className="flex gap-3 items-center"><span className="iconify text-[#078d8b]" data-icon="lucide:check" data-width="16"></span> Priority Support</li>
</ul>
<a className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium text-center hover:bg-white/10 hover:text-white transition-all mt-auto" href="#">Start Scale</a>
</div>
</div>

<div className="w-full overflow-x-auto pb-8 fade-up-element" id="comparison">
<div className="min-w-[800px] border border-white/10 rounded-2xl bg-[#0a0a0a]/50 overflow-hidden">
<div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.02]">
<div className="p-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Feature</div>
<div className="p-6 text-sm font-semibold text-gray-400">Typeform</div>
<div className="p-6 text-sm font-semibold text-gray-400">Jotform</div>
<div className="p-6 text-sm font-bold text-[#00b7a8] bg-[#00b7a8]/5 border-l border-[#00b7a8]/10">Nexovia</div>
</div>

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02]">
<div className="p-5 text-sm text-gray-300">Visual Logic</div>
<div className="p-5 text-sm text-red-400/70 font-mono">$99/mo</div>
<div className="p-5 text-sm text-yellow-500/70 font-mono">Clunky</div>
<div className="p-5 text-sm text-[#00b7a8] bg-[#00b7a8]/5 border-l border-[#00b7a8]/10 flex items-center gap-2">
<span className="iconify" data-icon="lucide:check" data-width="16"></span> Included
                        </div>
</div>

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02]">
<div className="p-5 text-sm text-gray-300">Remove Branding</div>
<div className="p-5 text-sm text-red-400/70 font-mono">$99/mo</div>
<div className="p-5 text-sm text-yellow-500/70 font-mono">$39/mo</div>
<div className="p-5 text-sm text-[#00b7a8] bg-[#00b7a8]/5 border-l border-[#00b7a8]/10 flex items-center gap-2">
<span className="iconify" data-icon="lucide:check" data-width="16"></span> All Plans
                        </div>
</div>

<div className="grid grid-cols-4 hover:bg-white/[0.02]">
<div className="p-5 text-sm text-gray-300">Real Support</div>
<div className="p-5 text-sm text-gray-500">Bot</div>
<div className="p-5 text-sm text-gray-500">Slow</div>
<div className="p-5 text-sm text-[#00b7a8] bg-[#00b7a8]/5 border-l border-[#00b7a8]/10 flex items-center gap-2">
<span className="iconify" data-icon="lucide:check" data-width="16"></span> &lt; 2 Hours
                        </div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl mx-auto px-6 pb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="fade-up-element">
<h3 className="text-2xl font-serif text-white mb-8">Why designers switched</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-[#172c48]/20 p-5 rounded-xl border border-white/5 hover:border-[#00b7a8]/30 transition-colors">
<p className="text-xs text-gray-300 mb-3 leading-relaxed">"I've tried MANY platforms, but this is by FAR the cleanest. The animations are buttery smooth."</p>
<div className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">— Sarah, UX Lead</div>
</div>
<div className="bg-[#172c48]/20 p-5 rounded-xl border border-white/5 hover:border-[#00b7a8]/30 transition-colors">
<p className="text-xs text-gray-300 mb-3 leading-relaxed">"The conditional logic visualizer actually makes sense. I don't need a developer to set up complex flows."</p>
<div className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">— Mark, Founder</div>
</div>
</div>
</div>

<div className="fade-up-element" style={{transitionDelay: '100ms'}}>
<h3 className="text-2xl font-serif text-white mb-8">Common Questions</h3>
<div className="space-y-4">
<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-gray-300 hover:text-white transition-colors">
<span>What happens after Month 1?</span>
<span className="transition group-open:rotate-180"><span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span></span>
</summary>
<p className="group-open:block hidden mt-3 text-xs text-gray-500 leading-relaxed">You pay the regular monthly price. You can cancel anytime inside the dashboard.</p>
</details>
<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-gray-300 hover:text-white transition-colors">
<span>Can I export my data?</span>
<span className="transition group-open:rotate-180"><span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span></span>
</summary>
<p className="group-open:block hidden mt-3 text-xs text-gray-500 leading-relaxed">Yes, CSV and JSON exports are available on all plans instantly.</p>
</details>
<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-gray-300 hover:text-white transition-colors">
<span>Is there a free trial?</span>
<span className="transition group-open:rotate-180"><span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span></span>
</summary>
<p className="group-open:block hidden mt-3 text-xs text-gray-500 leading-relaxed">We offer a 30-day money-back guarantee instead. If you don't love it, we refund you.</p>
</details>
</div>
</div>
</div>
</section>

<section className="w-full relative py-32 overflow-hidden border-t border-white/10 bg-[#020617]">
<div className="absolute inset-0 bg-gradient-to-t from-[#172c48]/20 to-transparent pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00b7a8]/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center z-10 fade-up-element">
<h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-none mb-8">
                     Our "You Win or<br/>
<span className="italic text-transparent bg-clip-text bg-gradient-to-br from-[#00b7a8] to-[#172c48]">We Lose" Guarantee.</span>
</h2>
<p className="text-lg text-gray-400 font-light max-w-xl mb-10">
                     Use Nexovia for 30 days. If it doesn't convert better than your current solution, we refund every penny.
                 </p>
<button className="h-14 px-8 rounded-full bg-[#00b7a8] text-[#050505] font-semibold text-base hover:bg-[#00b7a8]/90 transition-all shadow-[0_0_30px_-5px_rgba(0,183,168,0.5)] flex items-center gap-2">
                     Start at 50% Off
                     <span className="iconify" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '2'}}></span>
</button>
<div className="mt-20 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
<div className="flex items-center gap-2">
<span className="iconify text-[#00b7a8]" data-icon="lucide:cpu" data-width="16"></span>
<span>Nexovia Inc.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-gray-400" href="#">Privacy</a>
<a className="hover:text-gray-400" href="#">Terms</a>
<a className="hover:text-gray-400" href="#">Twitter</a>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
