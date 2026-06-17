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



    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // Intersection Observer for scroll animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('section > div').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Navbar background on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
      } else {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.02)';
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
      

<nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-neutral-950/70 border-b border-white/[0.04]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center">
<span className="text-neutral-950 font-bold text-sm tracking-tighter">LG</span>
</div>
<span className="font-semibold text-sm tracking-tight text-white">Lime Green</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-200" href="#clients">Clients</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-neutral-950 bg-lime-400 hover:bg-lime-300 px-4 py-2 rounded-full cta-btn" href="#contact">
            Start a project
            <iconify-icon height="14" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
<button className="md:hidden text-white" id="mobileMenuBtn">
<iconify-icon height="22" icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t border-white/[0.04] bg-neutral-950/95 nav-blur" id="mobileMenu">
<div className="px-6 py-4 space-y-3">
<a className="block text-sm text-neutral-400 hover:text-white" href="#work">Work</a>
<a className="block text-sm text-neutral-400 hover:text-white" href="#services">Services</a>
<a className="block text-sm text-neutral-400 hover:text-white" href="#about">About</a>
<a className="block text-sm text-neutral-400 hover:text-white" href="#clients">Clients</a>
<a className="block text-sm font-medium text-neutral-950 bg-lime-400 px-4 py-2 rounded-full text-center mt-3" href="#contact">Start a project</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center hero-gradient pt-16">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

<div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-lime-400/[0.04] blur-3xl floating"></div>
<div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-lime-400/[0.03] blur-3xl floating-delay"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">

<div className="animate-fade-up delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-400/20 bg-lime-400/[0.06] mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
<span className="text-xs font-medium text-lime-300">Currently accepting new clients</span>
</div>

<h1 className="animate-fade-up delay-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.92] mb-6">
<span className="text-white">We design &amp;</span><br/>
<span className="text-gradient">ship products</span><br/>
<span className="text-white">that matter</span>
</h1>

<p className="animate-fade-up delay-3 max-w-xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed mb-10 font-light">
        A design-first product studio building world-class mobile, AI, and SaaS experiences. From zero to one, we put founders first.
      </p>

<div className="animate-fade-up delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-lime-400 hover:bg-lime-300 text-neutral-950 font-semibold text-sm rounded-full cta-btn" href="#contact" style={{animation: 'pulse-glow 3s ease-in-out infinite'}}>
          Book a discovery call
          <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/10 hover:border-white/20 text-white font-medium text-sm rounded-full transition-all duration-300 hover:bg-white/[0.04]" href="#work">
          View our work
          <iconify-icon height="16" icon="solar:play-linear" width="16"></iconify-icon>
</a>
</div>

<div className="animate-fade-up delay-5 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
<div className="stat-card rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
<div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">40+</div>
<div className="text-xs text-neutral-500 mt-1 font-medium">Products shipped</div>
</div>
<div className="stat-card rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
<div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">15+</div>
<div className="text-xs text-neutral-500 mt-1 font-medium">Clients worldwide</div>
</div>
<div className="stat-card rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
<div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">4wk</div>
<div className="text-xs text-neutral-500 mt-1 font-medium">Avg. delivery time</div>
</div>
<div className="stat-card rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
<div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">98%</div>
<div className="text-xs text-neutral-500 mt-1 font-medium">Client satisfaction</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-8">
<div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5">
<div className="w-1 h-2 bg-white/30 rounded-full animate-bounce"></div>
</div>
</div>
</section>

<div className="border-y border-white/[0.04] bg-neutral-950/50 py-4 overflow-hidden">
<div className="marquee-track flex items-center gap-10 whitespace-nowrap" style={{width: 'max-content'}}>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> Mobile Development
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> AI Integration
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> Product Design
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> SaaS Platforms
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> Dashboard Design
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> Brand Identity
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> MVP Development
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> Mobile Development
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> AI Integration
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> Product Design
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> SaaS Platforms
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> Dashboard Design
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> Brand Identity
      </span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400/40"></span> MVP Development
      </span>
</div>
</div>

<section className="py-24 sm:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Our Philosophy</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] mb-6">
            Design is not how<br/>it looks. It's how<br/>it <span className="text-gradient">works</span>.
          </h2>
<p className="text-base text-neutral-400 leading-relaxed mb-6 max-w-lg font-light">
            We're a global product studio obsessed with craft. Every pixel, every interaction, every line of code is intentional. We don't just build products — we build experiences that users love and founders are proud of.
          </p>
<p className="text-base text-neutral-400 leading-relaxed max-w-lg font-light">
            With 15+ clients across the globe, we specialize in turning ambitious ideas into polished, production-ready software. Our design-first approach means we study the best interfaces, distill their principles, and apply them to build something uniquely yours.
          </p>
</div>
<div className="relative">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="glow-card rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
<div className="w-10 h-10 rounded-xl bg-lime-400/10 flex items-center justify-center mb-4">
<iconify-icon className="text-lime-400" height="20" icon="solar:palette-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-1.5 text-white">Design First</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Every product starts with world-class design. No compromises.</p>
</div>
<div className="glow-card rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
<div className="w-10 h-10 rounded-xl bg-lime-400/10 flex items-center justify-center mb-4">
<iconify-icon className="text-lime-400" height="20" icon="solar:user-heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-1.5 text-white">Founder Centric</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Your vision is our compass. We build as if it's our own.</p>
</div>
</div>
<div className="space-y-4 mt-8">
<div className="glow-card rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
<div className="w-10 h-10 rounded-xl bg-lime-400/10 flex items-center justify-center mb-4">
<iconify-icon className="text-lime-400" height="20" icon="solar:rocket-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-1.5 text-white">Ship Fast</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Zero to production in 4 weeks. Speed without sacrificing quality.</p>
</div>
<div className="glow-card rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
<div className="w-10 h-10 rounded-xl bg-lime-400/10 flex items-center justify-center mb-4">
<iconify-icon className="text-lime-400" height="20" icon="solar:globe-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-1.5 text-white">Global Team</h3>
<p className="text-xs text-neutral-500 leading-relaxed">15+ team members across the globe. Always on, always shipping.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative border-t border-white/[0.04]" id="services">
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(132,204,22,0.04) 0%, transparent 60%)'}}></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">What we do</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          End-to-end product<br/><span className="text-gradient">development</span>
</h2>
<p className="text-base text-neutral-400 max-w-lg mx-auto font-light">
          From concept to launch, we handle every layer of your product with meticulous attention to detail.
        </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="glow-card group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/[0.03] rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-lime-400/[0.06] transition-all duration-700"></div>
<div className="relative">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-400/15 to-lime-400/5 border border-lime-400/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lime-400" height="22" icon="solar:smartphone-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-white">Mobile Apps</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
              Native and cross-platform mobile experiences built with cutting-edge frameworks. Polished down to the last micro-interaction.
            </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">iOS</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Android</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">React Native</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Flutter</span>
</div>
</div>
</div>

<div className="glow-card group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/[0.03] rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-lime-400/[0.06] transition-all duration-700"></div>
<div className="relative">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-400/15 to-lime-400/5 border border-lime-400/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lime-400" height="22" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-white">AI Products</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
              We seamlessly integrate AI into your product experience — from intelligent features to full AI-native applications.
            </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">LLMs</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Computer Vision</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">RAG</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Agents</span>
</div>
</div>
</div>

<div className="glow-card group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/[0.03] rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-lime-400/[0.06] transition-all duration-700"></div>
<div className="relative">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-400/15 to-lime-400/5 border border-lime-400/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lime-400" height="22" icon="solar:monitor-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-white">SaaS &amp; Dashboards</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
              Complex data made beautiful. We build SaaS products and analytics dashboards that users genuinely enjoy using.
            </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Next.js</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">React</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Node.js</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">PostgreSQL</span>
</div>
</div>
</div>

<div className="glow-card group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/[0.03] rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-lime-400/[0.06] transition-all duration-700"></div>
<div className="relative">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-400/15 to-lime-400/5 border border-lime-400/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lime-400" height="22" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-white">Product Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
              End-to-end UI/UX design that sets new standards. We study the best products in the world and build beyond them.
            </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">UI/UX</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Prototyping</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Design Systems</span>
</div>
</div>
</div>

<div className="glow-card group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/[0.03] rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-lime-400/[0.06] transition-all duration-700"></div>
<div className="relative">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-400/15 to-lime-400/5 border border-lime-400/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lime-400" height="22" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-white">MVP Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
              Validate your idea with a production-grade MVP. We get you from concept to a shippable product in just 4 weeks.
            </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Rapid Prototyping</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Full Stack</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Launch Ready</span>
</div>
</div>
</div>

<div className="glow-card group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/[0.03] rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-lime-400/[0.06] transition-all duration-700"></div>
<div className="relative">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-400/15 to-lime-400/5 border border-lime-400/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lime-400" height="22" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-white">Backend &amp; Infra</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
              Scalable, secure, and performant backends. Cloud-native architectures that grow with your product.
            </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">AWS</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Supabase</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Firebase</span>
<span className="text-xs text-neutral-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">Docker</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-white/[0.04]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">How we work</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Idea to launch in<br/><span className="text-gradient">4 weeks</span>
</h2>
</div>
<div className="grid md:grid-cols-4 gap-6">
<div className="relative">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-sm font-semibold text-lime-400">01</div>
<div className="hidden md:block flex-1 h-px bg-gradient-to-r from-lime-400/20 to-transparent"></div>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-2 text-white">Discovery</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Deep dive into your vision, users, and market. We align on goals, scope, and success metrics.</p>
</div>
<div className="relative">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-sm font-semibold text-lime-400">02</div>
<div className="hidden md:block flex-1 h-px bg-gradient-to-r from-lime-400/20 to-transparent"></div>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-2 text-white">Design</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Wireframes, high-fidelity mockups, and interactive prototypes. Every detail considered.</p>
</div>
<div className="relative">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-sm font-semibold text-lime-400">03</div>
<div className="hidden md:block flex-1 h-px bg-gradient-to-r from-lime-400/20 to-transparent"></div>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-2 text-white">Develop</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Pixel-perfect implementation with clean, scalable code. Weekly demos and iterations.</p>
</div>
<div className="relative">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-sm font-semibold text-neutral-950">04</div>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-2 text-white">Launch</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Production deployment, monitoring, and post-launch support. Your product is live.</p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-white/[0.04] relative" id="work">
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(132,204,22,0.04) 0%, transparent 60%)'}}></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Selected work</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Products we've<br/><span className="text-gradient">shipped</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glow-card group rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
<div className="aspect-[16/10] bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-emerald-400/5"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-xl bg-neutral-800/80 border border-white/[0.06] shadow-2xl flex flex-col p-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/60"></div>
</div>
<div className="flex-1 grid grid-cols-4 gap-2">
<div className="col-span-1 bg-white/[0.04] rounded-lg"></div>
<div className="col-span-3 space-y-2">
<div className="h-4 bg-white/[0.06] rounded w-3/4"></div>
<div className="h-3 bg-white/[0.04] rounded w-1/2"></div>
<div className="flex-1 bg-lime-400/5 rounded-lg mt-2 min-h-[40px]"></div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-all duration-500"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-lime-400 font-medium uppercase tracking-wider">SaaS Platform</span>
<iconify-icon className="text-neutral-600 group-hover:text-lime-400 transition-colors" height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Analytics Dashboard</h3>
<p className="text-xs text-neutral-500 leading-relaxed">A comprehensive analytics platform with real-time data visualization, AI-powered insights, and team collaboration features.</p>
</div>
</div>

<div className="glow-card group rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
<div className="aspect-[16/10] bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-blue-400/5"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex gap-3 items-end">
<div className="w-16 h-72 rounded-2xl bg-neutral-800/80 border border-white/[0.06] shadow-xl p-2 -rotate-6 scale-90 opacity-60">
<div className="w-full h-3 bg-white/[0.06] rounded mb-2"></div>
<div className="w-full flex-1 bg-violet-400/5 rounded-lg" style={{height: 'calc(100% - 20px)'}}></div>
</div>
<div className="w-20 h-80 rounded-2xl bg-neutral-800/90 border border-white/[0.08] shadow-2xl p-3 z-10">
<div className="w-8 h-8 mx-auto rounded-xl bg-violet-400/10 mb-3"></div>
<div className="w-full h-3 bg-white/[0.08] rounded mb-2"></div>
<div className="w-3/4 h-2.5 bg-white/[0.05] rounded mb-3"></div>
<div className="w-full flex-1 bg-violet-400/5 rounded-lg" style={{height: 'calc(100% - 70px)'}}></div>
</div>
<div className="w-16 h-72 rounded-2xl bg-neutral-800/80 border border-white/[0.06] shadow-xl p-2 rotate-6 scale-90 opacity-60">
<div className="w-full h-3 bg-white/[0.06] rounded mb-2"></div>
<div className="w-full flex-1 bg-violet-400/5 rounded-lg" style={{height: 'calc(100% - 20px)'}}></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-all duration-500"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-violet-400 font-medium uppercase tracking-wider">Mobile App</span>
<iconify-icon className="text-neutral-600 group-hover:text-violet-400 transition-colors" height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">AI Health Companion</h3>
<p className="text-xs text-neutral-500 leading-relaxed">AI-powered health tracking mobile app with personalized insights, habit tracking, and smart notifications.</p>
</div>
</div>

<div className="glow-card group rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
<div className="aspect-[16/10] bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-400/5"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-3 gap-3 w-3/4">
<div className="aspect-square rounded-xl bg-neutral-800/80 border border-white/[0.06] p-3 flex flex-col items-center justify-center gap-2">
<div className="w-8 h-8 rounded-lg bg-amber-400/10"></div>
<div className="w-full h-2 bg-white/[0.06] rounded"></div>
</div>
<div className="aspect-square rounded-xl bg-neutral-800/80 border border-white/[0.06] p-3 flex flex-col items-center justify-center gap-2">
<div className="w-8 h-8 rounded-lg bg-amber-400/10"></div>
<div className="w-full h-2 bg-white/[0.06] rounded"></div>
</div>
<div className="aspect-square rounded-xl bg-neutral-800/80 border border-white/[0.06] p-3 flex flex-col items-center justify-center gap-2">
<div className="w-8 h-8 rounded-lg bg-amber-400/10"></div>
<div className="w-full h-2 bg-white/[0.06] rounded"></div>
</div>
<div className="col-span-2 aspect-[2/1] rounded-xl bg-neutral-800/80 border border-white/[0.06] p-3">
<div className="w-full h-2 bg-white/[0.06] rounded mb-2"></div>
<div className="w-2/3 h-2 bg-white/[0.04] rounded"></div>
</div>
<div className="aspect-square rounded-xl bg-neutral-800/80 border border-white/[0.06] p-3 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-amber-400/10"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-all duration-500"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-amber-400 font-medium uppercase tracking-wider">Design System</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-400 transition-colors" height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Enterprise Design System</h3>
<p className="text-xs text-neutral-500 leading-relaxed">A comprehensive component library and design system for a Fortune 500 fintech company.</p>
</div>
</div>

<div className="glow-card group rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
<div className="aspect-[16/10] bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-teal-400/5"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 space-y-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex-shrink-0"></div>
<div className="flex-1 bg-neutral-800/80 rounded-xl border border-white/[0.06] p-3">
<div className="w-3/4 h-2 bg-white/[0.06] rounded mb-1.5"></div>
<div className="w-1/2 h-2 bg-white/[0.04] rounded"></div>
</div>
</div>
<div className="flex items-center gap-3 justify-end">
<div className="flex-1 bg-cyan-400/5 rounded-xl border border-cyan-400/10 p-3">
<div className="w-3/4 h-2 bg-cyan-400/10 rounded mb-1.5"></div>
<div className="w-1/2 h-2 bg-cyan-400/5 rounded"></div>
</div>
<div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex-shrink-0"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex-shrink-0"></div>
<div className="flex-1 bg-neutral-800/80 rounded-xl border border-white/[0.06] p-3">
<div className="w-2/3 h-2 bg-white/[0.06] rounded mb-1.5"></div>
<div className="w-1/3 h-2 bg-white/[0.04] rounded"></div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-all duration-500"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">AI + Mobile</span>
<iconify-icon className="text-neutral-600 group-hover:text-cyan-400 transition-colors" height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">AI Chat Platform</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Conversational AI platform with multi-modal capabilities, context awareness, and seamless mobile experience.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-white/[0.04]" id="clients">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Trusted by builders</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Loved by founders<br/><span className="text-gradient">worldwide</span>
</h2>
</div>

<div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 mb-20">
<div className="client-logo cursor-pointer">
<span className="text-xl font-bold tracking-tighter text-neutral-400 hover:text-lime-400 transition-colors">Silverbox</span>
</div>
<div className="client-logo cursor-pointer">
<span className="text-xl font-bold tracking-tighter text-neutral-400 hover:text-lime-400 transition-colors">Align</span>
</div>
<div className="client-logo cursor-pointer">
<span className="text-xl font-bold tracking-tighter text-neutral-400 hover:text-lime-400 transition-colors">Nextra</span>
</div>
<div className="client-logo cursor-pointer">
<span className="text-xl font-bold tracking-tighter text-neutral-400 hover:text-lime-400 transition-colors">Flowbase</span>
</div>
<div className="client-logo cursor-pointer">
<span className="text-xl font-bold tracking-tighter text-neutral-400 hover:text-lime-400 transition-colors">Stackwise</span>
</div>
</div>

<div className="grid md:grid-cols-3 gap-5">
<div className="glow-card rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
            "Lime Green delivered an MVP that looked and felt like a fully mature product. Our investors were blown away by the quality. They truly understand what founders need."
          </p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-lime-400/20 to-emerald-400/10 flex items-center justify-center">
<span className="text-xs font-semibold text-lime-400">AK</span>
</div>
<div>
<div className="text-xs font-medium text-white">Alex Kim</div>
<div className="text-xs text-neutral-500">Founder, Silverbox</div>
</div>
</div>
</div>
<div className="glow-card rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
            "The design quality is unmatched. They took our complex AI features and made them feel simple and beautiful. Best studio we've worked with, hands down."
          </p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400/20 to-blue-400/10 flex items-center justify-center">
<span className="text-xs font-semibold text-violet-400">SR</span>
</div>
<div>
<div className="text-xs font-medium text-white">Sarah Rodriguez</div>
<div className="text-xs text-neutral-500">CEO, Align</div>
</div>
</div>
</div>
<div className="glow-card rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
            "They shipped our mobile app in 3 weeks. Three. Weeks. And it was better than anything we could've imagined. They genuinely care about the product."
          </p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400/20 to-teal-400/10 flex items-center justify-center">
<span className="text-xs font-semibold text-cyan-400">JM</span>
</div>
<div>
<div className="text-xs font-medium text-white">James Mitchell</div>
<div className="text-xs text-neutral-500">CTO, Nextra</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-white/[0.04] relative" id="contact">
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(132,204,22,0.06) 0%, transparent 60%)'}}></div>
<div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
<div className="rounded-3xl border border-white/[0.06] bg-white/[0.015] p-10 sm:p-16 relative overflow-hidden" style={{backdropFilter: 'blur(12px)'}}>

<div className="absolute top-0 left-0 w-40 h-40 bg-lime-400/[0.04] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-40 h-40 bg-lime-400/[0.04] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center mx-auto mb-8">
<iconify-icon className="text-lime-400" height="26" icon="solar:chat-round-call-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Let's build something<br/><span className="text-gradient">extraordinary</span>
</h2>
<p className="text-base text-neutral-400 max-w-md mx-auto mb-10 font-light">
            Have a product idea? We'd love to hear about it. Book a free 30-minute discovery call and let's explore what's possible.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2.5 px-8 py-4 bg-lime-400 hover:bg-lime-300 text-neutral-950 font-semibold text-sm rounded-full cta-btn" href="mailto:contact@limegreen.studio">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              contact@limegreen.studio
            </a>
<a className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/10 hover:border-white/20 text-white font-medium text-sm rounded-full transition-all duration-300 hover:bg-white/[0.04]" href="https://cal.com" target="_blank">
<iconify-icon height="18" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Schedule a call
            </a>
</div>
<div className="mt-10 flex items-center justify-center gap-6 text-xs text-neutral-500">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-lime-400" height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              Free consultation
            </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-lime-400" height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              NDA available
            </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-lime-400" height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              24h response
            </span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.04] py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-10 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center">
<span className="text-neutral-950 font-bold text-sm tracking-tighter">LG</span>
</div>
<span className="font-semibold text-sm tracking-tight text-white">Lime Green Studios</span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-sm font-light mb-6">
            A design-first product studio building world-class mobile, AI, and SaaS experiences for ambitious founders.
          </p>
<div className="flex items-center gap-4">
<a className="w-9 h-9 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-neutral-500 hover:text-lime-400 hover:border-lime-400/20 transition-all duration-200" href="https://instagram.com/limegreen.studio" target="_blank">
<iconify-icon height="16" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-neutral-500 hover:text-lime-400 hover:border-lime-400/20 transition-all duration-200" href="https://www.linkedin.com/company/lime-green-studios/" target="_blank">
<iconify-icon height="16" icon="solar:share-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-neutral-500 hover:text-lime-400 hover:border-lime-400/20 transition-all duration-200" href="https://x.com" target="_blank">
<iconify-icon height="16" icon="solar:chat-dots-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
<ul className="space-y-2.5">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors font-light" href="#">Mobile Development</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors font-light" href="#">AI Products</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors font-light" href="#">SaaS Development</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors font-light" href="#">Product Design</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors font-light" href="#">MVP Development</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2.5">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors font-light" href="#about">About</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors font-light" href="#work">Work</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors font-light" href="#">Blog</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors font-light" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors font-light" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="service-line mb-8"></div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2024 Lime Green Studios. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
