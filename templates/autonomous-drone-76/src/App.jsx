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



  // Initialize Lucide icons
  lucide.createIcons();

  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="/">
<div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black">
<svg className="lucide lucide-aperture" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16L3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-white font-geist">FARNESS</span>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-xs font-medium text-white hover:text-white/70 transition-colors font-geist" href="/">Home</a>
<a className="px-4 py-2 text-xs font-medium text-white/60 hover:text-white transition-colors font-geist" href="/technologies">Technologies</a>
<a className="px-4 py-2 text-xs font-medium text-white/60 hover:text-white transition-colors font-geist" href="/use-cases">Use Cases</a>
<a className="px-4 py-2 text-xs font-medium text-white/60 hover:text-white transition-colors font-geist" href="/contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors font-geist tracking-tight" href="/technologies#video">
<svg className="lucide lucide-play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
        Watch Video
      </a>

<button className="md:hidden text-white/70 hover:text-white">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</header>
<main>

<section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-60" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/5223126/5223126-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/60 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>
</div>

<div className="relative z-20 text-center px-6 max-w-4xl mx-auto animate-on-scroll animate">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white font-geist mb-8">
        Autonomous<br/>Intelligence
      </h1>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-neutral-950 transition-all duration-300 hover:bg-neutral-200 hover:ring-2 hover:ring-neutral-200 hover:ring-offset-2 hover:ring-offset-black" href="/contact">
<span className="mr-2 text-sm font-geist tracking-tight">Request a Demo</span>
<svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-black border-b border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="animate-on-scroll">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/60 font-geist mb-6">
            Our Vision
          </span>
<h2 className="text-3xl md:text-4xl font-geist font-medium tracking-tight leading-tight text-white">
            We believe drones should be more than just remote-controlled tools.
          </h2>
</div>
<div className="space-y-6 text-white/60 text-lg md:text-xl font-light leading-relaxed animate-on-scroll" style={{animationDelay: '0.1s'}}>
<p>
            They should understand, decide, and act autonomously.
          </p>
<p>
            Farness builds the intelligence that enables a fleet of drones to operate as a real team, adapting, cooperating, and completing complex missions in real environments.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-neutral-950/50">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
<span className="text-sm font-medium text-emerald-500 font-geist tracking-wide uppercase">Our Solution</span>
<h2 className="mt-4 text-3xl md:text-5xl font-geist font-medium tracking-tight text-white">Distributed Intelligence</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm animate-on-scroll hover:bg-white/[0.04] transition-colors duration-500">
<div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
<svg className="lucide lucide-cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white font-geist mb-3">Platform for Autonomous Drones</h3>
<p className="text-white/60 font-light leading-relaxed">
            Farness is a distributed intelligence platform for autonomous drones. We enable onboard multi-agent AI that functions without constant human intervention.
          </p>
</div>

<div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm animate-on-scroll hover:bg-white/[0.04] transition-colors duration-500" style={{animationDelay: '0.1s'}}>
<div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
<svg className="lucide lucide-mic-activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98l9.06-9.06"></path><path d="m12 8 9.04 9.06a2.82 2.82 0 1 1-3.98 3.98l-9.06-9.06"></path><line x1="12" x2="12" y1="3" y2="14"></line></svg>
</div>
<h3 className="text-xl font-medium text-white font-geist mb-3">Voice to Mission</h3>
<p className="text-white/60 font-light leading-relaxed">
            Through our voice control system and onboard AI, we transform natural language commands into missions carried out autonomously by a swarm of specialized drones.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-black border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 animate-on-scroll">
<h2 className="text-3xl font-geist font-medium tracking-tight text-white">Our Value Proposition</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-6 animate-on-scroll hover:border-white/20 transition-colors">
<div className="mb-4 text-emerald-400">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<p className="text-3xl font-geist font-semibold tracking-tight text-white mb-1">60%</p>
<h3 className="text-sm font-medium text-white/90 font-geist mb-2">Time Savings</h3>
<p className="text-xs text-white/50 leading-relaxed">Up to 60% faster operations.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-6 animate-on-scroll hover:border-white/20 transition-colors" style={{animationDelay: '0.1s'}}>
<div className="mb-4 text-blue-400">
<svg className="lucide lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<p className="text-3xl font-geist font-semibold tracking-tight text-white mb-1">70%</p>
<h3 className="text-sm font-medium text-white/90 font-geist mb-2">Reduced Labor Needs</h3>
<p className="text-xs text-white/50 leading-relaxed">Up to 70% fewer operators.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-6 animate-on-scroll hover:border-white/20 transition-colors" style={{animationDelay: '0.2s'}}>
<div className="mb-4 text-purple-400">
<svg className="lucide lucide-trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<p className="text-3xl font-geist font-semibold tracking-tight text-white mb-1">3–6 mo</p>
<h3 className="text-sm font-medium text-white/90 font-geist mb-2">ROI</h3>
<p className="text-xs text-white/50 leading-relaxed">Sector-dependent Return on Investment.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-6 animate-on-scroll hover:border-white/20 transition-colors" style={{animationDelay: '0.3s'}}>
<div className="mb-4 text-orange-400">
<svg className="lucide lucide-network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<p className="text-3xl font-geist font-semibold tracking-tight text-white mb-1">1 : N</p>
<h3 className="text-sm font-medium text-white/90 font-geist mb-2">Scalability</h3>
<p className="text-xs text-white/50 leading-relaxed">One operator manages multiple drones.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center animate-on-scroll">
<h2 className="text-sm font-medium text-white/40 font-geist uppercase tracking-widest mb-6">Our Mission</h2>
<p className="text-2xl md:text-4xl font-geist font-medium tracking-tight text-white leading-tight mb-8">
        Make autonomous intelligence accessible to all field-based industries.
      </p>
<p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
        We help sectors automate their critical operations with intelligent drone swarms.
      </p>
</div>
</section>

<section className="w-full h-[60vh] min-h-[400px] relative animate-on-scroll">
<img alt="Our Values" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
</section>

<section className="py-24 bg-neutral-900 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-black border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start gap-8 animate-on-scroll">
<div className="shrink-0 p-4 bg-white rounded-lg">

<div className="text-black font-bold text-xl font-geist tracking-tighter">B2G</div>
</div>
<div>
<h3 className="text-xl font-medium text-white font-geist mb-4">B2G Consulting Group</h3>
<p className="text-white/70 font-light mb-4 leading-relaxed">
            Farness is part of B2G Consulting, an international consulting group specializing in critical operations and digital transformation.
          </p>
<p className="text-white/70 font-light leading-relaxed">
            This partnership strengthens our execution capability and industrial credibility.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-white/30 font-geist mb-10 uppercase tracking-widest">Our Partners</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 animate-on-scroll">

<svg className="h-8 w-auto text-white" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H60 Z M60,12 H75 V17 H60 Z M60,20 H80 V25 H60 Z"></path>
</svg>

<svg className="h-8 w-auto text-white" fill="currentColor" viewbox="0 0 100 30">
<circle cx="15" cy="15" r="10"></circle>
<rect height="20" width="10" x="35" y="5"></rect>
<rect height="20" width="20" x="55" y="5"></rect>
</svg>

<svg className="h-8 w-auto text-white" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,25 L20,5 L30,25 M45,5 L45,25 M60,5 L70,25 L80,5"></path>
</svg>

<svg className="h-8 w-auto text-white" fill="currentColor" viewbox="0 0 100 30">
<rect height="20" rx="5" width="20" x="5" y="5"></rect>
<circle cx="50" cy="15" r="8"></circle>
<path d="M75,15 L85,5 L95,15 L85,25 Z"></path>
</svg>

<svg className="h-8 w-auto text-white" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,15 Q20,5 30,15 T50,15 T70,15"></path>
<circle cx="85" cy="15" r="5"></circle>
</svg>

<svg className="h-8 w-auto text-white" fill="currentColor" viewbox="0 0 100 30">
<rect height="10" transform="rotate(45 15 15)" width="10" x="10" y="10"></rect>
<rect height="5" width="40" x="40" y="5"></rect>
<rect height="5" width="40" x="40" y="20"></rect>
</svg>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2 space-y-4">
<a className="flex items-center gap-2" href="/">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black">
<svg className="lucide lucide-aperture" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16L3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-white font-geist">FARNESS</span>
</a>
<p className="text-xs text-white/50 max-w-xs leading-relaxed font-geist">
          Autonomous drone intelligence for critical operations. Transforming industries through distributed AI.
        </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-geist">Platform</h4>
<ul className="space-y-3">
<li><a className="text-xs text-white/60 hover:text-white transition-colors font-geist" href="/technologies">Technologies</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors font-geist" href="/use-cases">Use Cases</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-geist">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-white/60 hover:text-white transition-colors font-geist" href="/contact">Contact</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors font-geist" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-white/40 font-geist">© 2024 Farness. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
