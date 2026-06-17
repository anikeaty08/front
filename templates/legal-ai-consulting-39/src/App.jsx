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
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Sora', 'sans-serif'],
},
colors: {
brand: {
primary: '#FF4F00',   // Logo Orange
accent: '#FF8800',    // Lighter Orange Accent
dark: '#050402',      // Dark Background (Warmer)
panel: '#0F0A08',     // Panel Background (Warm Tint)
text: '#F5F5F5',      // Light Text
gray: '#888888',      // Muted Text
}
},
backgroundImage: {
'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 79, 0, 0.15) 0%, rgba(5, 4, 2, 0) 60%)',
},
animation: {
'beam': 'beam 3s linear infinite',
'spin-slow': 'spin 12s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2s linear infinite',
'blob': 'blob 10s infinite',
'grid-flow': 'grid-flow 20s linear infinite',
},
keyframes: {
beam: {
'0%': { strokeDashoffset: '1000' },
'100%': { strokeDashoffset: '0' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' }
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
'grid-flow': {
'0%': { transform: 'translateY(0)' },
'100%': { transform: 'translateY(4rem)' },
}
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-[grid-flow_20s_linear_infinite] opacity-50"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/15 blur-[100px] rounded-full mix-blend-screen animate-[blob_10s_infinite]"></div>

<div className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] bg-brand-accent/10 blur-[80px] rounded-full mix-blend-screen animate-[blob_10s_infinite_2s]"></div>
<div className="absolute top-[-100px] right-[20%] w-[400px] h-[400px] bg-brand-primary/10 blur-[80px] rounded-full mix-blend-screen animate-[blob_10s_infinite_4s]"></div>
</div>

<nav className="fixed left-1/2 -translate-x-1/2 top-6 w-[90%] max-w-6xl z-50 rounded-full border border-white/10 bg-brand-dark/70 backdrop-blur-xl px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300 hover:border-brand-primary/30">

<div className="flex items-center gap-3">
<div className="relative w-8 h-8 flex items-center justify-center text-brand-primary">

<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7h15c3.5 0 6 3 6 6.5s-2.5 6.5-6 6.5h-8l3.5-4h4.5c1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5h-11l-4-4z"></path>
<path d="M2 13.5h9l-2 2.5h-9l2-2.5z"></path>
</svg>
</div>
<div className="flex flex-col leading-none justify-center">
<span className="font-display font-bold text-lg tracking-tight text-white uppercase">Tailwind</span>
<span className="font-sans text-[9px] font-semibold tracking-widest text-white/50 uppercase mt-0.5">AI Agency Inc</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#industries">Industries</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<button className="hidden md:flex items-center gap-2 bg-white text-brand-dark px-4 py-2 rounded-full text-xs font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300 group">
        Book Audit
        <svg aria-hidden="true" className="iconify iconify--lucide group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</nav>

<main className="lg:pt-48 lg:pb-32 z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="flex flex-col text-center max-w-7xl mr-auto ml-auto items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 mb-8 animate-[fade-in-up_1s_ease-out]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
</span>
<span className="text-[11px] font-mono uppercase tracking-widest text-brand-primary">Fractional AI for Regulated Industries</span>
</div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold tracking-tighter font-display max-w-5xl mb-8">
          Stop drowning in <br className="hidden md:block"/>
<span className="text-white relative">
            manual work.
            
<svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-accent opacity-80" fill="none" viewbox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.00025 6.99997C25.7501 9.99995 84.0853 0.692348 107.411 1.76103C130.736 2.82971 180.371 8.91031 197.989 3.01899" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path></svg>
</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-white/60 font-roboto max-w-2xl mb-10">
          We design AI-powered workflows for healthcare and legal businesses—without disrupting what already works.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="shiny-cta group">
<span className="flex items-center gap-2">
              Book a Discovery Audit
              <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</button>
<button className="px-8 py-4 rounded-full border border-white/10 text-white/80 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
            See How We Work
          </button>
</div>

<div className="w-full max-w-4xl border-white/5 border-t mt-20 pt-8">
<p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-6">Trusted by Leaders in</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
<img alt="Supportive ABA" className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</main>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="font-display font-semibold text-3xl md:text-4xl mb-6">You're stuck between chaos and keeping up.</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 border border-brand-primary/20 text-brand-primary">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hourglass" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Manual processes eating time</h3>
<p className="text-sm text-white/50 leading-relaxed">Your skilled team is spending hours on data entry and scheduling instead of high-value work.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 border border-brand-primary/20 text-brand-primary">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Tool fragmentation</h3>
<p className="text-sm text-white/50 leading-relaxed">Jumping between IntakeQ, Calendly, and Excel is creating data silos and errors.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 border border-brand-primary/20 text-brand-primary">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Scaling bottlenecks</h3>
<p className="text-sm text-white/50 leading-relaxed">You can't take on more clients without hiring more admin staff, destroying margins.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] w-full border border-white/5 rounded-2xl bg-brand-panel overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,79,0,0.1),transparent_50%)]"></div>

<svg className="w-[914px] h-[398px] absolute top-0 right-0 bottom-0 left-0" data-icon-replaced="true" strokeWidth="2" style={{width: '914px', height: '398px', color: 'rgb(245, 245, 245)'}} viewbox="0 0 400 400">

<path className="opacity-30" d="M50 350 C 100 200, 50 100, 150 50" fill="none" stroke="#333" strokeWidth="1"></path>
<path className="opacity-30" d="M80 380 C 120 250, 40 150, 120 80" fill="none" stroke="#333" strokeWidth="1"></path>

<path className="" d="M50 350 C 200 350, 200 50, 350 50" fill="none" stroke="#333" strokeWidth="2"></path>

<path className="beam-line animate-beam" d="M50 350 C 200 350, 200 50, 350 50" fill="none" stroke="#FF4F00" strokeWidth="2"></path>


<circle className="animate-pulse" cx="50" cy="350" fill="#FF8800" r="4"></circle>

<circle className="animate-pulse" cx="350" cy="50" fill="#FF4F00" r="4"></circle>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark/90 backdrop-blur-md border border-white/10 rounded-lg p-4 w-64 shadow-2xl">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-brand-primary"></div>
<span className="text-[10px] font-mono text-white/60">SYSTEM STATUS: OPTIMIZED</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-brand-primary w-3/4 animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="font-display font-semibold text-3xl md:text-5xl mb-4">We're your fractional AI team.</h2>
<p className="text-white/60 max-w-xl font-light">No experimental nonsense. We optimize your existing workflows or build new ones using proven tools.</p>
</div>
<a className="text-sm font-medium text-brand-primary hover:text-white transition-colors flex items-center gap-2" href="#">
                    View all services <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-brand-panel border border-white/5 hover:border-brand-primary/30 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="iconify w-24 h-24 text-brand-primary iconify--lucide" data-icon="lucide:search" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 border border-brand-primary/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-search" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><circle cx="11.5" cy="14.5" r="2.5"></circle><path d="M13.3 16.3L15 18"></path></g></svg>
</div>
<h3 className="text-xl font-semibold mb-3">AI &amp; Automation Audit</h3>
<p className="text-sm text-white/50 leading-relaxed mb-6">Unsure where to start? We map your workflows and identify the biggest opportunities for ROI.</p>
<span className="text-xs font-mono text-brand-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                            FIND OPPORTUNITIES <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-brand-panel border border-white/5 hover:border-brand-primary/30 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="iconify w-24 h-24 text-brand-primary iconify--lucide" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 border border-brand-primary/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bot" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Implementation</h3>
<p className="text-sm text-white/50 leading-relaxed mb-6">We vet existing tools and integrate them into your business. No custom dev, no breaking the bank.</p>
<span className="text-xs font-mono text-brand-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                            START BUILDING <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-brand-panel border border-white/5 hover:border-brand-primary/30 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="iconify w-24 h-24 text-brand-primary iconify--lucide" data-icon="lucide:database" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<div className="relative z-10">

<div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 border border-brand-accent/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-grid" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Healthcare CRM</h3>
<p className="text-sm text-white/50 leading-relaxed mb-6">One platform to replace DocuSign, CallRail, and Calendly. Specialized for ABA and Homecare.</p>
<span className="text-xs font-mono text-brand-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                            CONSOLIDATE TOOLS <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-brand-dark to-brand-panel border-y border-white/5" id="industries">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-display font-semibold text-3xl md:text-5xl mb-4">Built for Regulated Industries</h2>
<p className="text-white/60">We understand compliance, HIPAA, and FDCPA requirements.</p>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-transparent rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
<div className="relative bg-brand-dark border border-white/10 rounded-2xl p-8 h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-display font-semibold text-white">Healthcare</h3>
<svg aria-hidden="true" className="iconify text-brand-primary iconify--lucide" data-icon="lucide:heart-pulse" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-white/70">
<svg aria-hidden="true" className="iconify text-brand-primary mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                ABA Therapy &amp; Mental Health Practices
                            </li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg aria-hidden="true" className="iconify text-brand-primary mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Automated Patient Intake &amp; Scheduling
                            </li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg aria-hidden="true" className="iconify text-brand-primary mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Replace 6+ tools with 1 CRM
                            </li>
</ul>
<div className="p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
<p className="text-xs text-brand-primary uppercase font-mono mb-1">Result</p>
<p className="text-white font-medium">Replaced 6 separate tools, reducing costs by 60%.</p>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-l from-brand-accent to-transparent rounded-2xl opacity-10 blur-lg group-hover:opacity-30 transition-opacity"></div>
<div className="relative bg-brand-dark border border-white/10 rounded-2xl p-8 h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-display font-semibold text-white">Legal</h3>
<svg aria-hidden="true" className="iconify text-brand-accent iconify--lucide" data-icon="lucide:gavel" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m14 13l-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381M16 16l6-6m-.5.5l-8-8M8 8l6-6M8.5 7.5l8 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-white/70">
<svg aria-hidden="true" className="iconify text-brand-accent mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Debt Collection Law Firms
                            </li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg aria-hidden="true" className="iconify text-brand-accent mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Compliance Research Automation
                            </li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg aria-hidden="true" className="iconify text-brand-accent mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                99%+ Accuracy in Documentation
                            </li>
</ul>
<div className="p-4 bg-brand-accent/10 rounded-lg border border-brand-accent/20">
<p className="text-xs text-brand-accent uppercase font-mono mb-1">Result</p>
<p className="text-white font-medium">Reduced full-day research cycles to 30 minutes.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="results">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="text-center p-4">
<div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">60%</div>
<div className="text-xs font-mono uppercase text-white/40 tracking-widest">Avg. Cost Reduction</div>
</div>
<div className="text-center p-4">
<div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">25h</div>
<div className="text-xs font-mono uppercase text-white/40 tracking-widest">Saved Per Week</div>
</div>
<div className="text-center p-4">
<div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">99%</div>
<div className="text-xs font-mono uppercase text-white/40 tracking-widest">Compliance Accuracy</div>
</div>
<div className="text-center p-4">
<div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">30m</div>
<div className="text-xs font-mono uppercase text-white/40 tracking-widest">Research Turnaround</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-brand-panel" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="font-display font-semibold text-3xl mb-12 text-center">Clear answers, upfront.</h2>
<div className="space-y-4">
<details className="group p-6 border border-white/5 rounded-2xl bg-brand-dark open:border-brand-primary/30 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg">
                        Is this for B2B or B2C?
                        <svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform text-white/50 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<p className="text-white/60 mt-4 font-light leading-relaxed">Both. The system is built around clarity, consistency, and distribution — which applies whether you’re selling software, services, or products.</p>
</details>
<details className="group p-6 border border-white/5 rounded-2xl bg-brand-dark open:border-brand-primary/30 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg">
                        Do you post for us, or with us?
                        <svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform text-white/50 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<p className="text-white/60 mt-4 font-light leading-relaxed">It depends on the engagement. Some teams want full execution. Others prefer direction, structure, and review. We align on this during the audit.</p>
</details>
<details className="group p-6 border border-white/5 rounded-2xl bg-brand-dark open:border-brand-primary/30 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg">
                        What happens in the growth audit?
                        <svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform text-white/50 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<p className="text-white/60 mt-4 font-light leading-relaxed">We review your product, message, and current signal, then outline a clear path forward. You’ll leave with clarity — whether or not we work together.</p>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-4xl">
<h2 className="font-display font-semibold text-5xl md:text-7xl mb-8 tracking-tight">
                Ready to optimize 
                <span className="text-brand-primary">your operations?</span>
</h2>
<p className="text-xl text-white/60 mb-12 font-light">Book a no-obligation discovery audit. We'll show you exactly where automation and AI can make the biggest impact.</p>
<button className="shiny-cta scale-125">
<span>Book Your Discovery Audit</span>
</button>
<p className="mt-8 text-xs font-mono text-white/30 uppercase tracking-widest">30-minute consultation | No sales pressure</p>
</div>
</section>

<footer className="border-t border-white/5 bg-brand-dark py-16 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 text-brand-primary">
<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7h15c3.5 0 6 3 6 6.5s-2.5 6.5-6 6.5h-8l3.5-4h4.5c1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5h-11l-4-4z"></path>
<path d="M2 13.5h9l-2 2.5h-9l2-2.5z"></path>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="font-display font-bold text-lg text-white uppercase tracking-tight">Tailwind</span>
<span className="font-sans text-[9px] font-semibold text-white/50 uppercase tracking-widest mt-0.5">AI Agency Inc</span>
</div>
</div>
<p className="text-white/40 text-sm leading-relaxed max-w-xs">
                    Your fractional AI team for regulated industries. We optimize workflows for healthcare and legal businesses.
                </p>
</div>
<div className="">
<h4 className="font-mono text-xs text-white/30 uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-4 text-sm text-white/60">
<li className=""><a className="hover:text-brand-primary transition-colors" href="#">AI Audit</a></li>
<li className=""><a className="hover:text-brand-primary transition-colors" href="#">Implementation</a></li>
<li><a className="hover:text-brand-primary transition-colors" href="#">Healthcare CRM</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs text-white/30 uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-sm text-white/60">
<li><a className="hover:text-brand-primary transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-primary transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-brand-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-mono">
<p>© 2024 Tailwind AI Agency Inc. All rights reserved.</p>
<p>Designed for Regulated Industries.</p>
</div>
</footer>

    </>
  );
}
