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
sans: ['Manrope', 'sans-serif'],
},
colors: {
background: '#08090A', // Deep dark distinct from pure black
surface: '#121417',
border: '#2A2E35',
primary: '#FFFFFF',
muted: '#888F9B',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
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
      
<div className="bg-noise"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex transform group-hover:rotate-45 transition-transform duration-500 bg-white w-6 h-6 rounded-sm items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-lg font-bold tracking-tight">D’MYSTRO</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-muted hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="text-sm font-medium text-muted hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="text-sm font-medium text-muted hover:text-white transition-colors duration-200" href="#method">Method</a>
<a className="text-sm font-medium text-muted hover:text-white transition-colors duration-200" href="#agency">Agency</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium text-muted hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2" href="#contact">
                    Start Project
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden text-white p-1">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</nav>
<main className="relative z-10 flex flex-col w-full">

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-5xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-muted mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Available for new partnerships
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.05] text-white mb-8 animate-slide-up opacity-0" style={{animationDelay: '0.1s'}}>
                    Digital Precision.<br/>
<span className="text-white/40">Human Ingenuity.</span>
</h1>
<p className="text-lg md:text-xl text-muted max-w-2xl font-normal leading-relaxed mb-10 animate-slide-up opacity-0" style={{animationDelay: '0.2s'}}>
                    We engineer digital legacies. Blending minimalist aesthetics with robust technical architecture to define the future of interaction.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up opacity-0" style={{animationDelay: '0.3s'}}>
<button className="h-12 px-8 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                        Start a Project
                    </button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-transparent text-white font-medium text-sm hover:bg-white/5 transition-all duration-300">
                        View Showreel
                    </button>
</div>
</div>

<div className="mt-20 md:mt-32 max-w-6xl mx-auto px-2 md:px-6 animate-slide-up opacity-0" style={{animationDelay: '0.5s'}}>
<div className="relative rounded-2xl border border-white/10 bg-surface/50 overflow-hidden shadow-2xl shadow-black/50 group">
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>

<img alt="Abstract digital wave" className="w-full h-[300px] md:h-[600px] object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-1000 ease-out grayscale" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex justify-between items-end">
<div>
<p className="text-xs font-bold tracking-widest text-white/60 uppercase mb-2">Showcase</p>
<h3 className="text-2xl font-semibold text-white">Lumina Interface Kit</h3>
</div>
<div className="hidden md:flex h-12 w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-white/5 bg-surface/30 py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold tracking-widest text-white/30 uppercase mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">

<div className="h-6 text-white flex items-center gap-2 font-bold tracking-tighter text-xl"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><rect height="20" rx="5" width="20" x="2" y="2"></rect></svg> ACME</div>
<div className="h-6 text-white flex items-center gap-2 font-bold tracking-tighter text-xl"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><circle cx="12" cy="12" r="10"></circle></svg> ORBIT</div>
<div className="h-6 text-white flex items-center gap-2 font-bold tracking-tighter text-xl"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M12 2L2 22h20L12 2z"></path></svg> APEX</div>
<div className="h-6 text-white flex items-center gap-2 font-bold tracking-tighter text-xl"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><rect height="18" transform="rotate(45 12 12)" width="18" x="3" y="3"></rect></svg> NEXUS</div>
<div className="h-6 text-white flex items-center gap-2 font-bold tracking-tighter text-xl"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M12 2a10 10 0 1 0 10 10"></path></svg> SPHERE</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Capabilities</h2>
<p className="text-lg text-muted font-light">
                            We don't just build websites; we craft digital ecosystems. Our expertise spans the entire product lifecycle.
                        </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-white hover:text-white/70 transition-colors" href="#">
                        View all services
                        <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
<div className="h-12 w-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Product Strategy</h3>
<p className="text-muted text-sm leading-relaxed mb-6">Market positioning, user research, and roadmap definition. We ensure your product solves the right problems.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-muted"><span className="w-1 h-1 bg-white rounded-full"></span>Discovery &amp; Audit</li>
<li className="flex items-center gap-2 text-xs text-muted"><span className="w-1 h-1 bg-white rounded-full"></span>User Journeys</li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
<div className="h-12 w-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Interface Design</h3>
<p className="text-muted text-sm leading-relaxed mb-6">Pixel-perfect UI designed for clarity and impact. We focus on micro-interactions that delight users.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-muted"><span className="w-1 h-1 bg-white rounded-full"></span>Design Systems</li>
<li className="flex items-center gap-2 text-xs text-muted"><span className="w-1 h-1 bg-white rounded-full"></span>Prototyping</li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
<div className="h-12 w-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Development</h3>
<p className="text-muted text-sm leading-relaxed mb-6">Robust front-end architecture using modern frameworks. Fast, accessible, and scalable code.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-muted"><span className="w-1 h-1 bg-white rounded-full"></span>React / Next.js</li>
<li className="flex items-center gap-2 text-xs text-muted"><span className="w-1 h-1 bg-white rounded-full"></span>Creative Coding</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5" id="work">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-12">
<h2 className="text-sm font-bold tracking-widest text-muted uppercase">Selected Work</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<a className="group block" href="#">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-surface">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold text-white mb-1 group-hover:text-white/80 transition-colors">Apex Finance</h3>
<p className="text-muted text-sm">Fintech • Identity • Web</p>
</div>
<span className="p-2 rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</span>
</div>
</a>

<a className="group block md:mt-20" href="#">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-surface">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold text-white mb-1 group-hover:text-white/80 transition-colors">Mono Architecture</h3>
<p className="text-muted text-sm">Real Estate • 3D • Design</p>
</div>
<span className="p-2 rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="rounded-[2.5rem] bg-gradient-to-br from-surface to-background border border-white/10 p-12 md:p-24 text-center relative overflow-hidden isolate">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.02] blur-[80px] rounded-full translate-y-1/3 -translate-x-1/3 -z-10"></div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                        Ready to elevate your digital presence?
                    </h2>
<p className="text-lg text-muted max-w-xl mx-auto mb-10 font-light">
                        Join the forward-thinking brands that trust D’MYSTRO to deliver exceptional digital experiences.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="h-14 px-10 rounded-full bg-white text-black font-semibold text-base hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105">
                            Let's Talk
                        </button>
<button className="h-14 px-10 rounded-full border border-white/10 text-white font-medium text-base hover:bg-white/5 transition-colors">
                            View Pricing
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-background pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="font-bold tracking-tight text-white">D’MYSTRO</span>
</a>
<p className="text-muted text-sm leading-relaxed max-w-xs">
                        Refining the digital landscape through precision, strategy, and human-centric design.
                    </p>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Sitemap</h4>
<ul className="space-y-3">
<li><a className="text-muted text-sm hover:text-white transition-colors" href="#">Work</a></li>
<li><a className="text-muted text-sm hover:text-white transition-colors" href="#">Services</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Legal</h4>
<ul className="space-y-3">
<li><a className="text-muted text-sm hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-muted text-sm hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/5 transition-all" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/5 transition-all" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/5 transition-all" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
<p>© 2024 D’MYSTRO Agency. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span>All Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
