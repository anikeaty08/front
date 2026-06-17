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
theme: {
extend: {
colors: {
cosmic: {
950: '#030610',
900: '#0B1021',
800: '#141B35',
},
amber: {
350: '#FCD34D',
450: '#F59E0B',
},
cyan: {
450: '#22d3ee',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
animation: {
'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
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
      
<div className="noise-overlay"></div>
<nav className="fixed top-0 left-0 w-full z-50 bg-[#030610]/80 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-[#030610]/60">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="group relative flex flex-col justify-center h-full py-2 w-auto" href="#">

<div className="flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-1.5 left-0">
<div className="flex gap-[2px]">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-height="6" data-icon="lucide:star" data-width="6" height="6" role="img" viewbox="0 0 24 24" width="6" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-height="6" data-icon="lucide:star" data-width="6" height="6" role="img" viewbox="0 0 24 24" width="6" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-height="6" data-icon="lucide:star" data-width="6" height="6" role="img" viewbox="0 0 24 24" width="6" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-height="6" data-icon="lucide:star" data-width="6" height="6" role="img" viewbox="0 0 24 24" width="6" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-height="6" data-icon="lucide:star" data-width="6" height="6" role="img" viewbox="0 0 24 24" width="6" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-[6px] font-bold text-amber-500 tracking-widest uppercase ml-2">We run differently™</span>
</div>

<div className="relative z-10 logo-glow leading-none flex items-baseline">
<span className="font-serif italic font-black text-3xl tracking-tighter text-white mr-[1px]">D</span>
<span className="font-serif italic font-bold text-2xl tracking-tighter text-white">ANTE CREATIVE</span>
</div>

<div className="w-full flex items-end justify-between mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-[6px] font-mono text-cyan-200 leading-none">est. 2022</span>
<div className="barcode-strip h-1 flex-1 mx-2 flex gap-[1px] justify-center items-end overflow-hidden">
<div className="w-px"></div><div className="w-[2px]"></div><div className="w-px bg-transparent"></div>
<div className="w-[3px]"></div><div className="w-px"></div><div className="w-[2px] bg-transparent"></div>
<div className="w-px"></div><div className="w-px"></div><div className="w-[2px]"></div>
<div className="w-px bg-transparent"></div><div className="w-[3px]"></div><div className="w-px"></div>
<div className="w-[2px]"></div><div className="w-px bg-transparent"></div><div className="w-px"></div>
<div className="w-[3px]"></div><div className="w-px"></div><div className="w-px bg-transparent"></div>
<div className="w-[2px]"></div><div className="w-px"></div><div className="w-[2px]"></div>
<div className="w-px bg-transparent"></div><div className="w-px"></div>
</div>
<span className="text-[6px] font-mono text-amber-500 leading-none">343/365</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400 uppercase tracking-wide">
<a className="hover:text-amber-300 transition-colors" href="#about">Philosophy</a>
<a className="hover:text-amber-300 transition-colors" href="#services">Solutions</a>
<a className="hover:text-amber-300 transition-colors" href="#work">Portfolio</a>
<a className="px-4 py-2 bg-white text-black rounded-md hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] normal-case tracking-normal font-semibold font-sans" href="#contact">
                    Start Project
                </a>
</div>
<button className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:menu" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>
<section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden min-h-screen flex items-center">
<div className="absolute inset-0 bg-cosmos -z-20"></div>
<div className="absolute inset-0 stars opacity-40 -z-10 mix-blend-screen"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse -z-10 mix-blend-screen"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px] -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="animate-fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-500/20 backdrop-blur-md text-xs font-medium text-amber-200 mb-10 hover:border-amber-400/50 transition-colors cursor-default shadow-[0_0_15px_rgba(245,158,11,0.1)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Best web design
                </div>
</div>
<h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-9xl font-normal tracking-tight text-white leading-[0.9] mb-8 text-chromatic font-serif">
                Chase your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-white to-amber-200 italic pr-2">Curiosity.</span>
</h1>
<p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed mb-12 font-light mix-blend-plus-lighter font-sans">
                We design high-performance digital experiences that pull your audience in. 
                Motion, depth, and precision for brands ready to lead.
            </p>
<div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="group w-full sm:w-auto px-8 py-4 bg-amber-400 text-black text-sm font-bold rounded-lg hover:bg-amber-300 transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 font-sans" href="#services">
                    Start Journey
                    <svg aria-hidden="true" className="iconify group-hover:translate-y-1 transition-transform duration-300 iconify--lucide" data-height="16" data-icon="lucide:arrow-down" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 hover:border-amber-500/30 transition-all flex items-center justify-center font-sans" href="#work">
                    Explore Work
                </a>
</div>
</div>
<div className="absolute bottom-32 left-10 animate-float delay-100 hidden lg:block opacity-60">
<svg aria-hidden="true" className="iconify text-amber-200 iconify--lucide" data-height="32" data-icon="lucide:sparkles" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="absolute top-40 right-20 animate-float delay-300 hidden lg:block opacity-50">
<svg aria-hidden="true" className="iconify text-indigo-300 iconify--lucide" data-height="48" data-icon="lucide:star" data-width="48" height="48" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="absolute top-1/3 left-20 animate-float delay-200 hidden lg:block opacity-30">
<div className="w-1 h-1 bg-white shadow-[0_0_10px_white]"></div>
</div>
</section>
<section className="py-32 relative bg-[#030610]" id="services">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent opacity-50"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-24 md:text-center max-w-2xl mx-auto animate-fade-up">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 font-serif">Tailored Solutions</h2>
<p className="text-slate-400 font-light text-lg">Choose the velocity that suits your trajectory.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">
<div className="glass-card animate-fade-up delay-100 p-8 rounded-2xl transition-all duration-300 group">
<div className="mb-6">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-amber-200 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:box" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white font-serif">Essential</h3>
<p className="mt-3 text-sm text-slate-400 leading-relaxed">For brands needing a spark. High impact landing pages.</p>
</div>
<div className="py-6 border-t border-white/10">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$850</span>
<span className="text-sm text-slate-500 font-normal">starting</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Single Page / Landing Page</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Mobile Responsive Design</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Contact Form Integration</span>
</li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 bg-white/5 text-center text-sm font-medium text-white hover:bg-white hover:text-black hover:shadow-lg transition-all font-sans" href="#contact">Select Essential</a>
</div>
<div className="glass-card animate-fade-up delay-200 p-8 rounded-2xl relative transform md:-translate-y-6 z-10 border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.05)]">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-black text-[10px] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                        Most Popular
                    </div>
<div className="mb-6">
<div className="w-12 h-12 rounded-lg bg-amber-950/40 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:layers" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white font-serif">Professional</h3>
<p className="mt-3 text-sm text-slate-400 leading-relaxed">Complete corporate presence with dynamic CMS capabilities.</p>
</div>
<div className="py-6 border-t border-white/10">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$2,400</span>
<span className="text-sm text-slate-500 font-normal">starting</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-white font-medium">
<svg aria-hidden="true" className="iconify text-amber-400 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Up to 7 Custom Pages</span>
</li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<svg aria-hidden="true" className="iconify text-amber-400 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>CMS &amp; Blog Integration</span>
</li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<svg aria-hidden="true" className="iconify text-amber-400 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Advanced SEO &amp; Analytics</span>
</li>
</ul>
<a className="block w-full py-3 rounded-lg bg-amber-400 text-center text-sm font-bold text-black hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all font-sans" href="#contact">Select Professional</a>
</div>
<div className="glass-card animate-fade-up delay-300 p-8 -all duration-300 group">
<div className="mb-6">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:zap" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white font-serif">Advanced</h3>
<p className="mt-3 text-sm text-slate-400 leading-relaxed">Custom functionality, 3D experiences, and web applications.</p>
</div>
<div className="py-6 border-t border-white/10">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$5,000+</span>
<span className="text-sm text-slate-500 font-normal">custom quote</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>E-commerce (Shopify/Stripe)</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Membership Portals</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Interactive WebGL / 3D</span>
</li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 bg-white/5 text-center text-sm font-medium text-white hover:bg-white hover:text-black hover:shadow-lg transition-all font-sans" href="#contact">Contact for Custom</a>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#050914] relative overflow-hidden" id="about">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-4">The Philosophy</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight font-serif">
                        Agency.<br/>
<span className="text-slate-500">Zero friction.</span>
</h3>
<p className="text-slate-400 leading-relaxed mb-8 font-light text-lg">
                        We strip away the unnecessary meetings and focus on what moves the needle. 
                        Direct communication, rapid iteration, and a relentless focus on ROI. 
                        <span className="text-amber-200">Be, ask questions.</span>
</p>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-[#050914] overflow-hidden flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-height="20" data-icon="lucide:user" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<div className="w-12 h-12 rounded-full bg-amber-950 border-2 border-[#050914] flex items-center justify-center text-xs font-bold text-amber-400">
                                DC
                             </div>
</div>
<div className="">
<p className="text-sm font-medium text-white">Dante Creative Team</p>
<p className="text-xs text-slate-500">Based in Brickell, Miami</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="glass-card p-6 rounded-xl hover:border-amber-500/30 transition-all duration-300">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex-shrink-0 flex items-center justify-center text-amber-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:clock" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Rapid Delivery</h4>
<p className="text-sm text-slate-400 leading-relaxed">Turnaround times measured in days, not months. We match your speed.</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-xl hover:border-amber-500/30 transition-all duration-300">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex-shrink-0 flex items-center justify-center text-amber-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:monitor-smartphone" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8m-2 4v-3.96v3.15M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></g></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Pixel Perfect</h4>
<p className="text-sm text-slate-400 leading-relaxed">Responsive designs that look flawless on 4k monitors and mobile screens.</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-xl hover:border-amber-500/30 transition-all duration-300">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex-shrink-0 flex items-center justify-center text-amber-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:settings-2" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 17H5M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></g></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Managed Growth</h4>
<p className="text-sm text-slate-400 leading-relaxed">Optional monthly maintenance plans so you never have to worry about updates.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 bg-[#030610] border-t border-white/5" id="work">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-3 font-serif">Selected Work</h2>
<p className="text-slate-500 font-light text-lg">Crafted for excellence in the digital realm.</p>
</div>
<div className="flex gap-2">
<a className="text-sm font-medium text-white flex items-center gap-2 hover:text-amber-400 transition-colors font-sans" href="#">
                        View all projects <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="grid md:grid-cols-2 gap-10 gap-x-10 gap-y-10">
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-slate-900 border border-white/10 aspect-[16/10] mb-6">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent"></div>
<div className="absolute inset-6 bg-[#0a1e] rounded-lg shadow-2xl border border-white/5 flex flex-col overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:-translate-y-2">
<div className="flex bg-white/5 h-6 border-white/5 border-b pr-3 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
</div>
<div className="flex-1 flex items-center justify-center relative">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://glow-haven-e-19.aura.build'" role="button"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72997a10-b782-4f03-9371-de086a861794_3840w.webp"/></div>
<span className="text-slate-600 font-semibold tracking-[0.3em] text-xs uppercase group-hover:text-amber-400 transition-colors">Legal Firm</span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:text-amber-400 transition-colors text-xl font-semibold text-white">Clothing Brand</h3>
<p className="text-sm text-slate-500 mt-1">Website Redesign &amp; Brand Identity</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-400 group-hover:border-amber-400 transition-all">
<svg aria-hidden="true" className="iconify text-slate-400 group-hover:text-black transition-colors iconify--lucide" data-height="18" data-icon="lucide:arrow-up-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-slate-900 border border-white/10 aspect-[16/10] mb-6">
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/20 to-transparent"></div>
<div className="absolute inset-6 bg-[#0a0f1e] rounded-lg shadow-2xl border border-white/5 flex flex-col overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:-translate-y-2">
<div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
</div>
<div className="flex-1 flex items-center justify-center relative">
<div className="group-hover:opacity-100 transition-opacity duration-500 cursor-pointer bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://aerocore.aura.build/'" role="button"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b33ab31e-c6bb-4140-8091-d2f9422b989c_3840w.webp"/></div>
<span className="text-slate-600 font-semibold tracking-[0.3em] text-xs uppercase group-hover:text-indigo-400 transition-colors">Aesthetic Medspa</span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:text-indigo-400 transition-colors text-xl font-semibold text-white">E- Commerce</h3>
<p className="text-sm text-slate-500 mt-1">Booking System &amp; Marketing Site</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-indigo-400 group-hover:border-indigo-400 transition-all">
<svg aria-hidden="true" className="iconify text-slate-400 group-hover:text-black transition-colors iconify--lucide" data-height="18" data-icon="lucide:arrow-up-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="mt-32 relative rounded-3xl bg-slate-900/40 border border-white/10 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 to-slate-950/80"></div>
<div className="absolute top-0 right-0 p-12 opacity-5">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="120" data-icon="lucide:quote" data-width="120" height="120" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="relative p-12 md:p-20 text-center max-w-4xl mx-auto">
<div className="mb-8 flex justify-center text-amber-400 gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: 'currentColor', stroke: 'none'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: 'currentColor', stroke: 'none'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: 'currentColor', stroke: 'none'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: 'currentColor', stroke: 'none'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: 'currentColor', stroke: 'none'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<blockquote className="text-3xl md:text-4xl font-medium text-white leading-snug tracking-tight mb-10 font-serif italic">
                            "Dante Creative transformed our digital presence. The new site isn't just beautiful—it's a portal that captures attention immediately."
                        </blockquote>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 bg-[#030610] border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-900/10 to-transparent pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-amber-400 mb-6">
                    Serious Inquiries Only
                </div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 font-serif">Ready to launch?</h2>
<p className="text-slate-400 font-light text-lg max-w-xl mx-auto">
                    We represent a limited number of clients to ensure absolute focus. Reach out directly to discuss your project.
                </p>
</div>
<a className="group relative block max-w-3xl mx-auto" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dantecreativecs@gmail.com" rel="noopener noreferrer" target="_blank">
<div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-white/20 to-amber-500/20 rounded-2xl opacity-30 group-hover:opacity-100 blur transition duration-500"></div>
<div className="relative rounded-2xl bg-[#080c1b] border border-white/10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 transition-all duration-300 group-hover:bg-[#0a1024]">
<div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-400 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="32" data-icon="lucide:mail" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div className="text-center md:text-left">
<span className="block text-sm text-slate-500 font-medium mb-1 uppercase tracking-wide">Direct Email</span>
<span className="text-2xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight break-all md:break-normal group-hover:text-amber-200 transition-colors">
                            dantecreativecs@gmail.com
                        </span>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all duration-300 ml-auto md:ml-0">
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform iconify--lucide" data-height="24" data-icon="lucide:arrow-up-right" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</a>
<p className="mt-10 text-xs text-slate-600">
                Opens Gmail in a new tab. Response time typically under 24 hours.
            </p>
</div>
</section>
<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">

<div className="inline-flex flex-col items-center md:items-start group cursor-default">
<div className="logo-glow leading-none flex items-baseline">
<span className="font-serif italic font-black text-2xl tracking-tighter text-white mr-[1px]">D</span>
<span className="font-serif italic font-bold text-xl tracking-tighter text-white">ANTE CREATIVE</span>
</div>
<div className="w-full flex items-center justify-between mt-1 opacity-50">
<div className="barcode-strip h-1.5 w-full flex gap-[1px]">
<div className="w-px"></div><div className="w-[3px]"></div><div className="w-px bg-transparent"></div>
<div className="w-[2px]"></div><div className="w-px"></div><div className="w-px bg-transparent"></div>
<div className="w-[3px]"></div><div className="w-px"></div>
</div>
</div>
</div>
<p className="text-xs text-slate-500 mt-4">© 2024 Dante Creative. Crafted in Miami.</p>
</div>
<div className="flex gap-6 text-slate-500">
<a className="hover:text-white hover:scale-110 transition-all duration-200" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:instagram" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="hover:text-white hover:scale-110 transition-all duration-200" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:twitter" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="hover:text-white hover:scale-110 transition-all duration-200" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:linkedin" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
<div className="flex gap-6 text-xs text-slate-500 font-medium">
<a className="hover:text-amber-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-amber-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
