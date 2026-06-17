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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
        heroTl
            .from(".hero-badge", { opacity: 0, y: 20, duration: 0.6, delay: 0.3 })
            .from(".hero-title", { opacity: 0, y: 30, duration: 0.7, stagger: 0.15 }, "-=0.3")
            .from(".hero-title-gradient", { opacity: 0, y: 30, duration: 0.7 }, "-=0.5")
            .from(".hero-badge-inline", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
            .from(".hero-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
            .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
            .from(".hero-card", { opacity: 0, x: 60, duration: 0.8 }, "-=0.6")
            .from(".hero-stats", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3");

        // Progress bar animation
        gsap.to(".progress-bar", {
            width: "98.3%",
            duration: 2,
            delay: 1.5,
            ease: "power2.out"
        });

        // Section labels & titles
        gsap.utils.toArray(".section-label").forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
                opacity: 0, y: 20, duration: 0.5
            });
        });

        gsap.utils.toArray(".section-title").forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
                opacity: 0, y: 30, duration: 0.6, delay: 0.1
            });
        });

        // Feature cards
        gsap.utils.toArray(".feature-card").forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
                opacity: 0, y: 40, duration: 0.6, delay: i * 0.1
            });
        });

        // Evolution section
        gsap.from(".evo-badge", { scrollTrigger: { trigger: ".evo-badge", start: "top 85%" }, opacity: 0, y: 20, duration: 0.5 });
        gsap.from(".evo-title", { scrollTrigger: { trigger: ".evo-title", start: "top 85%" }, opacity: 0, y: 30, duration: 0.6, delay: 0.1 });
        gsap.utils.toArray(".evo-desc").forEach((el, i) => {
            gsap.from(el, { scrollTrigger: { trigger: el, start: "top 88%" }, opacity: 0, y: 20, duration: 0.5, delay: i * 0.1 });
        });
        gsap.from(".evo-stats", { scrollTrigger: { trigger: ".evo-stats", start: "top 88%" }, opacity: 0, y: 30, duration: 0.6 });
        gsap.from(".evo-image", { scrollTrigger: { trigger: ".evo-image", start: "top 85%" }, opacity: 0, scale: 0.95, duration: 0.8 });

        // Pillar cards
        gsap.utils.toArray(".pillar-card").forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
                opacity: 0, y: 50, duration: 0.7, delay: i * 0.12
            });
        });

        // Testimonial
        gsap.from(".testimonial-card", {
            scrollTrigger: { trigger: ".testimonial-card", start: "top 85%" },
            opacity: 0, y: 40, scale: 0.97, duration: 0.8
        });

        // Pricing cards
        gsap.utils.toArray(".pricing-card").forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
                opacity: 0, y: 50, duration: 0.7, delay: i * 0.12
            });
        });

        // CTA section
        gsap.from(".cta-badge", { scrollTrigger: { trigger: ".cta-badge", start: "top 85%" }, opacity: 0, y: 20, duration: 0.5 });
        gsap.from(".cta-title", { scrollTrigger: { trigger: ".cta-title", start: "top 85%" }, opacity: 0, y: 30, duration: 0.6, delay: 0.1 });
        gsap.from(".cta-desc", { scrollTrigger: { trigger: ".cta-desc", start: "top 85%" }, opacity: 0, y: 20, duration: 0.5, delay: 0.2 });
        gsap.from(".cta-buttons", { scrollTrigger: { trigger: ".cta-buttons", start: "top 88%" }, opacity: 0, y: 30, duration: 0.6, delay: 0.3 });
    
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
      

<section className="relative min-h-screen flex flex-col" style={{background: 'linear-gradient(to bottom right, rgba(64,64,65,0.78), rgba(64,64,65,0.78)), url(\'https: //images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1440&amp'}}>

<nav className="flex items-center justify-between px-8 lg:px-28 py-5 relative z-10">
<div className="text-white font-bold text-xl tracking-tighter" style={{fontFamily: '\'Kirvy\', sans-serif'}}>myt</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-white/70 text-sm" href="#">Mission</a>
<a className="text-white/70 text-sm" href="#">Features</a>
<a className="text-white/70 text-sm" href="#">Testimonials</a>
<a className="text-white/70 text-sm" href="#">Team</a>
<a className="text-white/70 text-sm" href="#">Pricing</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-white/80 text-sm border border-white/20 rounded-lg px-4 py-2" href="#">Login</a>
<a className="text-white text-sm rounded-lg px-5 py-2" href="#" style={{backgroundColor: '#8BB4BE'}}>Book Your Demo</a>
</div>
</nav>

<div className="flex-1 flex flex-col lg:flex-row items-start px-8 lg:px-28 pb-20 pt-10 gap-12">
<div className="flex-1 max-w-2xl">
<div className="hero-badge inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8" style={{background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255,255,255,0.12)'}}>
<span className="w-2 h-2 rounded-full" style={{backgroundColor: '#8CB846'}}></span>
<span className="text-white/80 text-xs uppercase tracking-widest">Tour Operator Software</span>
</div>
<h1 className="hero-title text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none mb-1" style={{fontFamily: '\'Kirvy\', sans-serif'}}>Build Stunning</h1>
<h1 className="hero-title-gradient text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-1" style={{fontFamily: '\'Kirvy\', sans-serif', background: 'linear-gradient(to right, #cad6d9, #8BB4BE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Travel Itineraries</h1>
<h1 className="hero-title text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none mb-6" style={{fontFamily: '\'Kirvy\', sans-serif'}}>in Minutes, Not Hours.</h1>
<div className="hero-badge-inline inline-flex items-center gap-3 rounded-xl px-4 py-2.5 mb-6" style={{background: 'rgba(140, 184, 70, 0.1)', border: '1px solid rgba(140,184,70,0.2)'}}>
<span className="text-white/40 text-sm line-through">4 hours</span>
<iconify-icon icon="solar:arrow-right-linear" style={{color: 'rgba(255,255,255,0.3)'}} width="14"></iconify-icon>
<span className="text-sm font-semibold" style={{color: '#8CB846'}}>4 minutes</span>
<span className="w-px h-4 bg-white/15"></span>
<span className="text-xs font-medium" style={{color: '#8CB846'}}>60x faster</span>
</div>
<p className="hero-desc text-lg text-white/60 leading-7 max-w-lg mb-10">Stop fighting with spreadsheets. Our travel itinerary software manages bookings, suppliers, and client experiences on a single, scalable platform.</p>
<div className="hero-cta flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-wide rounded-xl px-8 py-4" href="#" style={{backgroundColor: '#8CB846', boxShadow: '0 10px 40px rgba(140,184,70,0.4)'}}>
                        Book Your Demo
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-3 text-white text-sm font-medium rounded-xl px-8 py-4" href="#" style={{background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255,255,255,0.12)'}}>
<span className="w-2 h-2 rounded-full" style={{backgroundColor: '#8CB846'}}></span>
                        Watch Dashboard Overview
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="hidden lg:flex flex-col items-center w-full max-w-md">

<div className="hero-card bg-white rounded-2xl p-6 w-full shadow-xl" style={{backdropFilter: 'blur(30px)'}}>
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'rgba(237,124,87,0.2)'}}>
<iconify-icon icon="solar:clock-circle-linear" style={{color: '#ED7C57'}} width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-800">Traditional Process</p>
<p className="text-sm font-bold text-gray-800/50">4 hours</p>
</div>
</div>
<iconify-icon icon="solar:arrow-right-linear" style={{color: '#404041'}} width="16"></iconify-icon>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'rgba(140,184,70,0.2)'}}>
<iconify-icon icon="solar:bolt-linear" style={{color: '#8CB846'}} width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-800">With MYT</p>
<p className="text-sm font-bold" style={{color: '#8CB846'}}>4 minutes</p>
</div>
</div>
</div>
<div className="mb-2">
<div className="w-full h-2 rounded-full" style={{backgroundColor: '#404041'}}>
<div className="progress-bar h-2 rounded-full" style={{backgroundColor: '#8CB846', width: '0%'}}></div>
</div>
</div>
<div className="flex justify-between text-xs mb-5">
<span className="text-gray-800">Time saved</span>
<span className="font-bold" style={{color: '#8CB846'}}>98.3%</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 rounded-lg p-2.5" style={{background: 'rgba(140,184,70,0.08)'}}>
<div className="w-6 h-6 rounded-full flex items-center justify-center" style={{background: 'rgba(140,184,70,0.2)'}}>
<iconify-icon icon="solar:check-read-linear" style={{color: '#8CB846'}} width="12"></iconify-icon>
</div>
<span className="text-xs text-gray-800 flex-1">Itinerary auto-generated</span>
<span className="text-xs" style={{color: '#8CB846'}}>12s</span>
</div>
<div className="flex items-center gap-3 rounded-lg p-2.5" style={{background: 'rgba(139,180,190,0.08)'}}>
<div className="w-6 h-6 rounded-full flex items-center justify-center" style={{background: 'rgba(139,180,190,0.2)'}}>
<iconify-icon icon="solar:check-read-linear" style={{color: '#8BB4BE'}} width="12"></iconify-icon>
</div>
<span className="text-xs text-gray-800 flex-1">Supplier rates synced</span>
<span className="text-xs" style={{color: '#8BB4BE'}}>8s</span>
</div>
<div className="flex items-center gap-3 rounded-lg p-2.5" style={{background: 'rgba(237,124,87,0.06)'}}>
<div className="w-6 h-6 rounded-full flex items-center justify-center" style={{background: 'rgba(237,124,87,0.15)'}}>
<iconify-icon icon="solar:check-read-linear" style={{color: '#ED7C57'}} width="12"></iconify-icon>
</div>
<span className="text-xs text-gray-800 flex-1">Client-ready proposal sent</span>
<span className="text-xs" style={{color: '#ED7C57'}}>3s</span>
</div>
</div>
</div>

<div className="hero-stats flex items-center gap-10 mt-8">
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight" style={{fontFamily: '\'Kirvy\', sans-serif'}}>500+</p>
<p className="text-xs text-white/40 mt-1">Tour Operators</p>
</div>
<span className="w-px h-10 bg-white/15"></span>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight" style={{fontFamily: '\'Kirvy\', sans-serif'}}>50K+</p>
<p className="text-xs text-white/40 mt-1">Itineraries Built</p>
</div>
<span className="w-px h-10 bg-white/15"></span>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight" style={{fontFamily: '\'Kirvy\', sans-serif'}}>98%</p>
<p className="text-xs text-white/40 mt-1">Satisfaction</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 px-8 lg:px-28">
<div className="text-center mb-16">
<p className="section-label text-xs font-bold uppercase tracking-widest mb-4" style={{color: '#8BB4BE'}}>Our Mission</p>
<h2 className="section-title text-3xl lg:text-4xl font-semibold tracking-tight" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Simplify your operations</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="feature-card bg-white border border-gray-100 rounded-2xl p-8">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background: 'rgba(139,180,190,0.15)'}}>
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" style={{color: '#8BB4BE'}} width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-base mb-2" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Itinerary / Quotation</h3>
<p className="text-sm text-gray-500 leading-relaxed">The industry's most powerful multi-day tour builder.</p>
</div>
<div className="feature-card bg-white border border-gray-100 rounded-2xl p-8">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background: 'rgba(237,124,87,0.12)'}}>
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" style={{color: '#ED7C57'}} width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-base mb-2" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>White-Label</h3>
<p className="text-sm text-gray-500 leading-relaxed">Your brand, your colors, across every client touchpoint.</p>
</div>
<div className="feature-card bg-white border border-gray-100 rounded-2xl p-8">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background: 'rgba(140,184,70,0.12)'}}>
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" style={{color: '#8CB846'}} width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-base mb-2" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Supplier Financials</h3>
<p className="text-sm text-gray-500 leading-relaxed">Real-time settlement and financial tracking.</p>
</div>
<div className="feature-card bg-white border border-gray-100 rounded-2xl p-8">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background: 'rgba(64,64,65,0.08)'}}>
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" style={{color: '#404041'}} width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-base mb-2" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Participant Coord</h3>
<p className="text-sm text-gray-500 leading-relaxed">Seamless coordination for complex group tours.</p>
</div>
</div>
</section>

<section className="py-28 px-8 lg:px-28" style={{background: 'rgba(240,245,247,0.5)'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
<div>
<div className="evo-badge inline-flex items-center rounded-full px-3 py-1.5 mb-6" style={{background: 'rgba(139, 180, 190, 0.12)', border: '1px solid rgba(139,180,190,0.25)'}}>
<span className="text-xs font-semibold uppercase tracking-widest" style={{color: '#6D9AA6'}}>The Evolution</span>
</div>
<h2 className="evo-title text-3xl lg:text-4xl font-bold tracking-tight mb-6" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>The Evolution of Travel Itinerary Software</h2>
<p className="evo-desc text-base text-gray-500 leading-relaxed mb-6">Modern travel planning demands a shift from static documents to interactive, mobile-first experiences. ManageYourTrip centralizes your workflow, integrates real-time GDS data, and eliminates manual errors.</p>
<p className="evo-desc text-base text-gray-500 leading-relaxed mb-8">Our platform acts as your digital back-office, allowing your team to focus on creative design while we handle document generation and supplier tracking.</p>
<div className="evo-stats flex items-center gap-6 pt-2">
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#8BB4BE'}}>36%</p>
<p className="text-xs text-gray-500 mt-1">efficiency<br/>increase</p>
</div>
<span className="w-px h-12 bg-gray-200"></span>
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#8CB846'}}>3x</p>
<p className="text-xs text-gray-500 mt-1">volume<br/>capacity</p>
</div>
<span className="w-px h-12 bg-gray-200"></span>
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#ED7C57'}}>300%</p>
<p className="text-xs text-gray-500 mt-1">operations<br/>scaled</p>
</div>
</div>
</div>
<div className="relative">
<div className="evo-image rounded-2xl overflow-hidden shadow-xl">
<img alt="Team working" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=576&amp;h=320&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white rounded-xl border border-gray-100 p-4 shadow-lg" style={{backdropFilter: 'blur(20px)'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'rgba(140,184,70,0.15)'}}>
<iconify-icon icon="solar:graph-up-linear" style={{color: '#8CB846'}} width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-800">Revenue Up</p>
<p className="text-xs" style={{color: '#8CB846'}}>+36% this quarter</p>
</div>
</div>
</div>
<div className="absolute -top-4 -right-4 bg-white/95 rounded-xl border border-gray-100 p-4 shadow-lg" style={{backdropFilter: 'blur(20px)'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'rgba(139,180,190,0.15)'}}>
<iconify-icon icon="solar:map-point-linear" style={{color: '#8BB4BE'}} width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-800">12 Trips Confirmed</p>
<p className="text-xs text-gray-400">Just now</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 px-8 lg:px-28" style={{backgroundColor: '#f7fafb'}}>
<div className="text-center mb-16">
<p className="section-label text-xs font-bold uppercase tracking-widest mb-4" style={{color: '#8BB4BE'}}>Why Choose Us</p>
<h2 className="section-title text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Why Choose ManageYourTrip?</h2>
<p className="text-base text-gray-500 max-w-2xl mx-auto">Focus on outcomes, not just features. We help you transition from administrative burnout to operational excellence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div className="pillar-card bg-white border border-gray-100 rounded-2xl p-8">
<p className="text-4xl font-light tracking-tight mb-6" style={{fontFamily: '\'Kirvy\', sans-serif', color: 'rgba(139,180,190,0.4)'}}>01</p>
<h3 className="text-lg font-semibold tracking-tight mb-3" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Eliminate Errors</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Say goodbye to double-bookings or outdated flight times. Our API-first approach ensures every detail is verified and synced in real-time.</p>
<div className="border-t border-gray-100 pt-6 flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#8CB846'}} width="16"></iconify-icon>
<span className="text-xs text-gray-400">Real-time verification</span>
</div>
</div>
<div className="pillar-card bg-white border border-gray-100 rounded-2xl p-8">
<p className="text-4xl font-light tracking-tight mb-6" style={{fontFamily: '\'Kirvy\', sans-serif', color: 'rgba(139,180,190,0.4)'}}>02</p>
<h3 className="text-lg font-semibold tracking-tight mb-3" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Increase Margins</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Automation allows your agents to handle 3x the volume. Spend less time on copy-paste admin and more time closing high-value leads.</p>
<div className="border-t border-gray-100 pt-6 flex items-center gap-2">
<iconify-icon icon="solar:graph-up-linear" style={{color: '#8CB846'}} width="16"></iconify-icon>
<span className="text-xs text-gray-400">3x volume capacity</span>
</div>
</div>
<div className="pillar-card bg-white border border-gray-100 rounded-2xl p-8">
<p className="text-4xl font-light tracking-tight mb-6" style={{fontFamily: '\'Kirvy\', sans-serif', color: 'rgba(139,180,190,0.4)'}}>03</p>
<h3 className="text-lg font-semibold tracking-tight mb-3" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Delight Travelers</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Give your clients a premium mobile app experience with offline maps, live chat, and interactive vouchers they can access anywhere.</p>
<div className="border-t border-gray-100 pt-6 flex items-center gap-2">
<iconify-icon icon="solar:smartphone-linear" style={{color: '#8CB846'}} width="16"></iconify-icon>
<span className="text-xs text-gray-400">Premium mobile experience</span>
</div>
</div>
</div>
</section>

<section className="py-28 px-8 lg:px-28 relative" style={{background: 'linear-gradient(135deg, rgba(26,35,50,0.92), rgba(42,58,74,0.8), rgba(58,74,90,0.7)), url(\'https: //images.unsplash.com/photo-1469474968028-56623f02e42e?w=1440&amp'}}>
<div className="text-center mb-12">
<p className="section-label text-xs font-bold uppercase tracking-widest mb-4" style={{color: '#8BB4BE'}}>What Clients Say</p>
<h2 className="section-title text-3xl lg:text-4xl font-bold text-white/95 tracking-tight mb-4" style={{fontFamily: '\'Kirvy\', sans-serif'}}>Cherished by Industry Leaders</h2>
<p className="text-sm text-white/95 max-w-lg mx-auto">Tour Operator software makes creating, marketing and managing your trips simpler than you ever dreamed possible.</p>
</div>
<div className="testimonial-card max-w-3xl mx-auto bg-gray-50 rounded-2xl border border-gray-100 p-12">
<div className="flex gap-1 mb-6">
<iconify-icon icon="solar:star-bold" style={{color: '#ED7C57'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#ED7C57'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#ED7C57'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#ED7C57'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#ED7C57'}} width="16"></iconify-icon>
</div>
<p className="text-xl font-medium tracking-tight leading-7 mb-8" style={{color: '#404041'}}>"ManageYourTrip transformed our workflow. We've scaled our DMC operations by 300% without adding a single hire."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center" style={{background: 'rgba(139,180,190,0.2)'}}>
<span className="font-semibold text-sm" style={{color: '#6D9AA6'}}>S</span>
</div>
<div>
<p className="font-semibold text-sm" style={{color: '#404041'}}>Sheri</p>
<p className="text-xs text-gray-500">A&amp;S Signature Journeys</p>
</div>
</div>
</div>
</section>

<section className="py-28 px-8 lg:px-28" style={{backgroundColor: '#f7fafb'}}>
<div className="text-center mb-16">
<p className="section-label text-xs font-bold uppercase tracking-widest mb-4" style={{color: '#8BB4BE'}}>Pricing Plans</p>
<h2 className="section-title text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Scale Your Success</h2>
<p className="text-base text-gray-500">Transparent pricing for agencies of all sizes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">

<div className="pricing-card bg-white border border-gray-200 rounded-2xl p-8">
<p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Small Agencies</p>
<h3 className="text-xl font-bold tracking-tight mb-6" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Starter</h3>
<p className="text-4xl font-semibold tracking-tight mb-6" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>$0</p>
<p className="text-sm text-gray-500 mb-8">Perfect for small agencies.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3"><iconify-icon icon="solar:check-read-linear" style={{color: '#8CB846'}} width="16"></iconify-icon><span className="text-sm text-gray-600">Intro/Demo focused access</span></div>
<div className="flex items-center gap-3"><iconify-icon icon="solar:check-read-linear" style={{color: '#8CB846'}} width="16"></iconify-icon><span className="text-sm text-gray-600">Basic Itinerary Builder</span></div>
<div className="flex items-center gap-3"><iconify-icon icon="solar:check-read-linear" style={{color: '#8CB846'}} width="16"></iconify-icon><span className="text-sm text-gray-600">Standard CRM</span></div>
</div>
<button className="w-full border border-gray-200 rounded-lg py-3 text-sm font-medium text-gray-700">Contact Sales</button>
</div>

<div className="pricing-card relative rounded-2xl p-8 overflow-hidden" style={{backgroundColor: '#404041', boxShadow: '0 20px 40px rgba(139,180,190,0.3)'}}>
<div className="absolute top-5 right-5 rounded-full px-2.5 py-1 text-xs font-medium text-white" style={{backgroundColor: '#8BB4BE'}}>Most Popular</div>
<p className="text-xs text-white/70 uppercase tracking-wide mb-2">Growth</p>
<h3 className="text-xl font-bold text-white tracking-tight mb-6" style={{fontFamily: '\'Kirvy\', sans-serif'}}>Professional</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight" style={{fontFamily: '\'Kirvy\', sans-serif'}}>$129</span>
<span className="text-sm text-white/70">/mo</span>
</div>
<p className="text-sm text-white/85 mb-8">The advanced cloud platform for growth.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3"><iconify-icon icon="solar:check-read-linear" style={{color: 'rgba(255,255,255,0.8)'}} width="16"></iconify-icon><span className="text-sm text-white/95">White-Label Outputs</span></div>
<div className="flex items-center gap-3"><iconify-icon icon="solar:check-read-linear" style={{color: 'rgba(255,255,255,0.8)'}} width="16"></iconify-icon><span className="text-sm text-white/95">Supplier Financial Management</span></div>
<div className="flex items-center gap-3"><iconify-icon icon="solar:check-read-linear" style={{color: 'rgba(255,255,255,0.8)'}} width="16"></iconify-icon><span className="text-sm text-white/95">Priority API Support</span></div>
<div className="flex items-center gap-3"><iconify-icon icon="solar:check-read-linear" style={{color: 'rgba(255,255,255,0.8)'}} width="16"></iconify-icon><span className="text-sm text-white/95">Participant coordination</span></div>
</div>
<button className="w-full bg-white rounded-lg py-3 text-sm font-semibold uppercase tracking-wide" style={{color: '#8CB846'}}>Start Pro</button>
</div>

<div className="pricing-card bg-white border border-gray-200 rounded-2xl p-8">
<p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Large DMCs</p>
<h3 className="text-xl font-bold tracking-tight mb-6" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight" style={{fontFamily: '\'Kirvy\', sans-serif', color: '#404041'}}>$169</span>
<span className="text-sm text-gray-400">/mo</span>
</div>
<p className="text-sm text-gray-500 mb-8">Exclusive features for large DMCs.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3"><iconify-icon icon="solar:check-read-linear" style={{color: '#8CB846'}} width="16"></iconify-icon><span className="text-sm text-gray-600">Webhooks &amp; Analytics</span></div>
<div className="flex items-center gap-3"><iconify-icon icon="solar:check-read-linear" style={{color: '#8CB846'}} width="16"></iconify-icon><span className="text-sm text-gray-600">Dedicated Success Manager</span></div>
<div className="flex items-center gap-3"><iconify-icon icon="solar:check-read-linear" style={{color: '#8CB846'}} width="16"></iconify-icon><span className="text-sm text-gray-600">Custom Output Architect</span></div>
</div>
<button className="w-full border border-gray-200 rounded-lg py-3 text-sm font-medium text-gray-700">Contact Enterprise</button>
</div>
</div>
<div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-6 text-center">
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">Implementation Fees</p>
<p className="text-sm text-gray-500">One-time setup fee of <span className="font-bold text-gray-800">$3,200</span> for teams &lt; 10 users. For teams 10+, a standard setup fee of <span className="font-bold text-gray-800">$6,200</span> applies.</p>
</div>
</section>

<section className="relative py-28 px-8 lg:px-28 text-center overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(139,180,190,0.92), rgba(109,154,166,0.85)), url(\'https: //images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1440&amp'}}>
<div className="relative z-10 max-w-3xl mx-auto">
<div className="cta-badge inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8" style={{background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255,255,255,0.2)'}}>
<iconify-icon icon="solar:rocket-2-linear" style={{color: 'rgba(255,255,255,0.8)'}} width="16"></iconify-icon>
<span className="text-xs text-white/90 uppercase tracking-widest font-medium">Start Your Journey</span>
</div>
<h2 className="cta-title text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6" style={{fontFamily: '\'Kirvy\', sans-serif'}}>Ready to Build Stunning Itineraries?</h2>
<p className="cta-desc text-base text-white/85 max-w-lg mx-auto mb-10">Join hundreds of travel professionals who have already transformed their workflow with ManageYourTrip.</p>
<div className="cta-buttons flex flex-wrap items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 bg-white text-sm font-bold uppercase tracking-wide rounded-xl px-10 py-4 shadow-lg" href="#" style={{color: '#8CB846'}}>
                    Book Your Demo Now
                </a>
<a className="inline-flex items-center gap-2 text-white text-sm font-medium rounded-xl px-8 py-4 border border-white/30" href="#">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    Contact Sales
                </a>
</div>
</div>
</section>

<footer className="py-16 px-8 lg:px-28" style={{backgroundColor: '#404041'}}>
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
<div className="md:col-span-2">
<div className="text-white font-bold text-xl tracking-tighter mb-4" style={{fontFamily: '\'Kirvy\', sans-serif'}}>myt</div>
<p className="text-sm text-gray-400 leading-relaxed max-w-sm">Build stunning travel itineraries in minutes. The modern platform for tour operators and DMCs worldwide.</p>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Product</h4>
<div className="space-y-3">
<a className="block text-sm text-gray-400" href="#">Features</a>
<a className="block text-sm text-gray-400" href="#">Pricing</a>
<a className="block text-sm text-gray-400" href="#">Integrations</a>
<a className="block text-sm text-gray-400" href="#">Changelog</a>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contact</h4>
<div className="space-y-3">
<div className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear" style={{color: '#9ca3af'}} width="14"></iconify-icon><span className="text-sm text-gray-400">+971 70 7541200</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear" style={{color: '#9ca3af'}} width="14"></iconify-icon><span className="text-sm text-gray-400">reservations@manageyourtrip.com</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear" style={{color: '#9ca3af'}} width="14"></iconify-icon><span className="text-sm text-gray-400">Dubai, UAE</span></div>
</div>
</div>
</div>
<div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">© 2026 ManageYourTrip. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-gray-500" href="#">Privacy</a>
<a className="text-xs text-gray-500" href="#">Terms</a>
<a className="text-xs text-gray-500" href="#">Cookies</a>
</div>
</div>
</footer>


    </>
  );
}
