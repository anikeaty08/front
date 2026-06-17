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



// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", () => {
const observerOptions = {
threshold: 0.15,
rootMargin: "0px 0px -50px 0px"
};
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.animationPlayState = 'running';
entry.target.style.opacity = '1';
observer.unobserve(entry.target);
}
});
}, observerOptions);
document.querySelectorAll('.animate-on-scroll').forEach((el) => {
el.style.animationPlayState = 'paused';
observer.observe(el);
});
lucide.createIcons();
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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10">
<div className="flex h-20 items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<span className="text-2xl font-medium tracking-tighter text-white group-hover:text-[#626041] transition-colors duration-300">CRE8XP</span>
</a>

<nav className="hidden lg:flex items-center gap-10">
<a className="text-xs font-medium uppercase tracking-widest text-white hover:text-[#626041] transition-colors" href="/">Home</a>
<a className="text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#authority">About</a>

<div className="relative group h-20 flex items-center">
<button className="text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors inline-flex items-center gap-1">
                            Services
                            <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
<div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-1 shadow-2xl">
<a className="block px-4 py-3 text-xs text-white/70 hover:bg-[#626041]/20 hover:text-[#626041] transition-colors uppercase tracking-wider" href="#">High Performance Travel</a>
<a className="block px-4 py-3 text-xs text-white/70 hover:bg-[#626041]/20 hover:text-[#626041] transition-colors uppercase tracking-wider" href="#">Elite Healthspan</a>
<a className="block px-4 py-3 text-xs text-white/70 hover:bg-[#626041]/20 hover:text-[#626041] transition-colors uppercase tracking-wider" href="#">Genetics Test</a>
<a className="block px-4 py-3 text-xs text-white/70 hover:bg-[#626041]/20 hover:text-[#626041] transition-colors uppercase tracking-wider" href="#">Private Black Label</a>
</div>
</div>
</div>
</nav>

<div className="flex items-center gap-6">
<a className="hidden sm:inline-flex items-center gap-2 bg-[#626041] hover:bg-[#525035] text-white text-xs font-medium uppercase tracking-widest px-6 py-3 transition-all duration-300 border border-transparent hover:border-white/20 rounded-sm" href="#contact">
                        Book Consultation
                    </a>

<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40 z-10"></div>
<img alt="Elite Alpine Environment" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1519817914152-22d216bb9170?q=80&amp;w=3466&amp;auto=format&amp;fit=crop" style={{animation: 'scrollBlur linear both', animationTimeline: 'view()', animationRange: 'entry 100% entry 150%'}}/>
</div>

<div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 pt-32">
<div className="flex flex-col lg:flex-row items-end justify-between gap-16">

<div className="w-full lg:max-w-3xl animate-on-scroll" style={{animation: 'slideInLeft 1s ease-out forwards 0.2s'}}>
<div className="inline-flex items-center gap-2 border border-[#626041]/50 bg-[#626041]/10 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
<span className="w-2 h-2 rounded-full bg-[#626041] animate-pulse"></span>
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8b698]">Operational Status: Active</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-white">
                        ELITE PERFORMANCE.
                        <br/>
<span className="text-[#626041]">GLOBAL FRONTIERS.</span>
</h1>
</div>

<div className="w-full lg:max-w-md flex flex-col gap-8 animate-on-scroll" style={{animation: 'slideInRight 1s ease-out forwards 0.4s'}}>
<p className="text-lg text-white/80 font-light leading-relaxed">
                        The ultimate protocol for the 1%. Combining luxury travel, leadership development, and bio-hacking for those who demand excellence in every dimension.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-[#e5e5e5] transition-all duration-300 rounded-sm" href="#services">
                            Start The Mission
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="group inline-flex items-center gap-3 bg-transparent border border-white/20 backdrop-blur-sm text-white px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-white/10 transition-all duration-300 rounded-sm" href="#authority">
                            Discover Intel
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#0a0a0a]" id="authority">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10">

<div className="flex justify-center mb-20 animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out forwards'}}>
<span className="text-[10px] text-[#626041] uppercase tracking-[0.3em] font-medium border-b border-[#626041]/30 pb-2">Intelligence Briefing</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

<div className="lg:col-span-5 space-y-8 animate-on-scroll" style={{animation: 'slideInLeft 0.8s ease-out forwards 0.2s'}}>
<h2 className="text-4xl font-medium tracking-tight text-white mb-10">30+ YEARS GLOBAL <span className="text-[#626041]">EXPERTISE</span></h2>
<div className="space-y-4">
<div className="flex items-center gap-4 group border-b border-white/10 pb-4 hover:border-[#626041] transition-colors">
<i className="w-5 h-5 text-[#626041]" data-lucide="crosshair"></i>
<span className="text-sm font-medium uppercase tracking-widest text-white/90">High-Impact Experiences</span>
</div>
<div className="flex items-center gap-4 group border-b border-white/10 pb-4 hover:border-[#626041] transition-colors">
<i className="w-5 h-5 text-[#626041]" data-lucide="shield-check"></i>
<span className="text-sm font-medium uppercase tracking-widest text-white/90">Elite Wellness Protocols</span>
</div>
<div className="flex items-center gap-4 group border-b border-white/10 pb-4 hover:border-[#626041] transition-colors">
<i className="w-5 h-5 text-[#626041]" data-lucide="globe"></i>
<span className="text-sm font-medium uppercase tracking-widest text-white/90">Bespoke Global Adventures</span>
</div>
<div className="flex items-center gap-4 group border-b border-white/10 pb-4 hover:border-[#626041] transition-colors">
<i className="w-5 h-5 text-[#626041]" data-lucide="zap"></i>
<span className="text-sm font-medium uppercase tracking-widest text-white/90">Performance Reimagined</span>
</div>
</div>
</div>

<div className="lg:col-span-7 animate-on-scroll" style={{animation: 'slideInRight 0.8s ease-out forwards 0.4s'}}>
<blockquote className="text-2xl font-light leading-relaxed text-white/90 border-l-2 border-[#626041] pl-8 mb-12">
                        "Cre8XP delivers unforgettable, high-performance experiences that challenge, inspire, and elevate every aspect of life."
                        <footer className="mt-6 text-sm font-medium uppercase tracking-widest text-[#626041] not-italic">— James Carter</footer>
</blockquote>
<div className="space-y-6 text-white/60 font-light text-lg leading-relaxed">
<p>
                            At Cre8 XP, we create high-impact, turn-key experiences that push boundaries and elevate performance. From elite wellness protocols to bespoke global adventures, every journey we design is built to challenge, inspire, and deliver lasting results.
                        </p>
<p>
                            Whether it's high-performance travel, executive retreats, or curated lifestyle immersions, our team draws on over 30 years of global experience across professional sport and world-class events.
                        </p>
<p className="text-white font-normal">
                            Join the Adventure Tribe, explore our Elite Healthspan programs, or unlock the exclusivity of PRIVE Black Label. This is performance—reimagined.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative min-h-screen bg-neutral-900" id="services">
<div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-screen">

<div className="group relative w-full min-h-[50vh] overflow-hidden border-r border-b border-white/10 animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out forwards 0.1s'}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-10 lg:p-16 w-full">
<div className="flex items-center gap-3 mb-4 opacity-70">
<i className="w-5 h-5 text-[#626041]" data-lucide="mountain"></i>
<span className="text-[10px] uppercase tracking-[0.2em]">01 / Service</span>
</div>
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4 group-hover:text-[#626041] transition-colors">High Performance Travel</h3>
<p className="text-white/60 max-w-sm mb-8 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden transform translate-y-4 group-hover:translate-y-0">
                        Curated expeditions to the world's most remote corners. Testing resilience in high-altitude and tactical environments.
                    </p>
<button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-[#626041] pb-1 group-hover:border-white transition-colors">
                        Learn More <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>

<div className="group relative w-full min-h-[50vh] overflow-hidden border-b border-white/10 animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out forwards 0.2s'}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-10 lg:p-16 w-full">
<div className="flex items-center gap-3 mb-4 opacity-70">
<i className="w-5 h-5 text-[#626041]" data-lucide="activity"></i>
<span className="text-[10px] uppercase tracking-[0.2em]">02 / Service</span>
</div>
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4 group-hover:text-[#626041] transition-colors">Elite Healthspan</h3>
<p className="text-white/60 max-w-sm mb-8 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden transform translate-y-4 group-hover:translate-y-0">
                        Advanced bio-hacking protocols designed to extend peak performance windows and optimize recovery.
                    </p>
<button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-[#626041] pb-1 group-hover:border-white transition-colors">
                        Learn More <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>

<div className="group relative w-full min-h-[50vh] overflow-hidden border-r border-white/10 animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out forwards 0.3s'}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-10 lg:p-16 w-full">
<div className="flex items-center gap-3 mb-4 opacity-70">
<i className="w-5 h-5 text-[#626041]" data-lucide="dna"></i>
<span className="text-[10px] uppercase tracking-[0.2em]">03 / Service</span>
</div>
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4 group-hover:text-[#626041] transition-colors">Performance Genetics</h3>
<p className="text-white/60 max-w-sm mb-8 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden transform translate-y-4 group-hover:translate-y-0">
                        Decode your DNA. Precision nutrition and training based on your unique genetic markers.
                    </p>
<button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-[#626041] pb-1 group-hover:border-white transition-colors">
                        Learn More <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>

<div className="group relative w-full min-h-[50vh] overflow-hidden animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out forwards 0.4s'}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-30 bg-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-95"></div>
<div className="absolute bottom-0 left-0 p-10 lg:p-16 w-full">
<div className="flex items-center gap-3 mb-4 opacity-70">
<i className="w-5 h-5 text-[#626041]" data-lucide="lock"></i>
<span className="text-[10px] uppercase tracking-[0.2em]">04 / Service</span>
</div>
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4 group-hover:text-[#626041] transition-colors">Private Black Label</h3>
<p className="text-white/60 max-w-sm mb-8 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden transform translate-y-4 group-hover:translate-y-0">
                        Invitation-only access to our most exclusive events and off-grid locations.
                    </p>
<button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-[#626041] pb-1 group-hover:border-white transition-colors">
                        Request Access <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10" id="contact">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 animate-on-scroll" style={{animation: 'fadeSlideIn 1s ease-out forwards'}}>

<div className="col-span-1">
<h4 className="text-2xl font-medium tracking-tighter text-white mb-6">CRE8XP</h4>
<p className="text-xs text-white/50 uppercase tracking-widest leading-relaxed">
                        Elite Health &amp; Performance Adventure.<br/>
                        Military-grade precision.<br/>
                        Ultra-Luxury execution.
                    </p>
</div>

<div className="col-span-1">
<h5 className="text-[10px] text-[#626041] uppercase tracking-[0.2em] font-semibold mb-6">Navigation</h5>
<ul className="space-y-3">
<li><a className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors" href="/">Home</a></li>
<li><a className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors" href="#authority">About</a></li>
<li><a className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors" href="#services">Services</a></li>
<li><a className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors" href="#">Consultation</a></li>
</ul>
</div>

<div className="col-span-1">
<h5 className="text-[10px] text-[#626041] uppercase tracking-[0.2em] font-semibold mb-6">Programs</h5>
<ul className="space-y-3">
<li><a className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors" href="#">High Performance Travel</a></li>
<li><a className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors" href="#">Elite Healthspan</a></li>
<li><a className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors" href="#">Genetics Test</a></li>
<li><a className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors" href="#">Private Black Label</a></li>
</ul>
</div>

<div className="col-span-1">
<h5 className="text-[10px] text-[#626041] uppercase tracking-[0.2em] font-semibold mb-6">Secure Comms</h5>
<ul className="space-y-3">
<li><a className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2" href="mailto:a.blake@southernhq.co"><i className="w-3 h-3" data-lucide="mail"></i> a.blake@southernhq.co</a></li>
<li><a className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2" href="tel:0434770307"><i className="w-3 h-3" data-lucide="phone"></i> 0434 770 307</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-white/30 uppercase tracking-widest">© 2025 CRE8XP. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-white/30 hover:text-white uppercase tracking-widest transition-colors" href="#">Privacy</a>
<a className="text-[10px] text-white/30 hover:text-white uppercase tracking-widest transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
