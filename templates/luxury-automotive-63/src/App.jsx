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
      

<nav className="fixed top-0 w-full z-50 px-6 py-5 md:px-12 flex justify-between items-center bg-neutral-950/50 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
<div className="text-xl font-semibold tracking-tighter text-white" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>VLCY</div>
<div className="hidden md:flex gap-10 text-xs font-medium text-neutral-400 tracking-wide uppercase">
<a className="hover:text-white transition-colors duration-300" href="#performance">Performance</a>
<a className="hover:text-white transition-colors duration-300" href="#design">Design</a>
<a className="hover:text-white transition-colors duration-300" href="#technology">Technology</a>
</div>
<button className="md:hidden text-neutral-400 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>

<section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12 pt-32 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Sports car on highway" className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transform origin-bottom animate-pulse" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=3000&amp;auto=format&amp;fit=crop" style={{animationDuration: '10s'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-transparent"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
</div>
<div className="relative z-10 max-w-4xl space-y-10">
<div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wider uppercase">Project Apex Revealed</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] metallic-text drop-shadow-2xl" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>
                Unleash Velocity.<br/>Own the Horizon.
            </h1>
<p className="text-sm md:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
                Precision-engineered performance meets sculpted luxury. Forged in carbon, driven by intelligence. Built for those who refuse to drive ordinary.
            </p>
<div className="flex flex-col sm:flex-row gap-5 pt-6">
<a className="inline-flex justify-center items-center bg-white text-black px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 hover:scale-[1.02] transition-all duration-300 glow-effect" href="#explore">
                    Explore Model
                </a>
<a className="inline-flex justify-center items-center bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-white/20 transition-all duration-300" href="#test-drive">
                    Book a Test Drive
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5 carbon-bg relative overflow-hidden" id="performance">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500 group">
<div className="space-y-4">
<iconify-icon className="text-2xl text-neutral-500 group-hover:text-white transition-colors duration-500" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-5xl md:text-6xl font-medium tracking-tighter text-white" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>2.8<span className="text-3xl text-neutral-600">s</span></p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">0–100 km/h</p>
</div>
</div>
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500 group">
<div className="space-y-4">
<iconify-icon className="text-2xl text-neutral-500 group-hover:text-white transition-colors duration-500" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-5xl md:text-6xl font-medium tracking-tighter text-white" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>340</p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Top Speed (km/h)</p>
</div>
</div>
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500 group">
<div className="space-y-4">
<iconify-icon className="text-2xl text-neutral-500 group-hover:text-white transition-colors duration-500" icon="solar:settings-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-5xl md:text-6xl font-medium tracking-tighter text-white" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>V8</p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Twin-Turbo Engine</p>
</div>
</div>
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500 group">
<div className="space-y-4">
<iconify-icon className="text-2xl text-neutral-500 group-hover:text-white transition-colors duration-500" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-5xl md:text-6xl font-medium tracking-tighter text-white" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>710</p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Horsepower</p>
</div>
</div>
</div>
<div className="mt-20 flex justify-center">
<div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
<p className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Every millisecond engineered for adrenaline.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#020202]" id="design">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="space-y-12">
<div className="space-y-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter metallic-text" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Form sculpted by speed.</h2>
<p className="text-sm md:text-base text-neutral-400 font-normal max-w-md leading-relaxed">Aerodynamics and aesthetics in perfect harmony. Every curve serves a purpose, every material chosen for ultimate performance and lightweight rigidity.</p>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-6 p-4 rounded-2xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:wind-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="pt-1">
<p className="text-sm font-medium text-white tracking-wide">Aerodynamic carbon fiber body</p>
<p className="text-xs font-normal text-neutral-500 mt-2 leading-relaxed">Lightweight structure optimizing airflow and drastically reducing drag coefficiency.</p>
</div>
</li>
<li className="flex items-start gap-6 p-4 rounded-2xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:armchair-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="pt-1">
<p className="text-sm font-medium text-white tracking-wide">Hand-stitched Alcantara interior</p>
<p className="text-xs font-normal text-neutral-500 mt-2 leading-relaxed">Tactile luxury that connects the driver to the machine with unyielding grip.</p>
</div>
</li>
<li className="flex items-start gap-6 p-4 rounded-2xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="pt-1">
<p className="text-sm font-medium text-white tracking-wide">Active rear wing</p>
<p className="text-xs font-normal text-neutral-500 mt-2 leading-relaxed">Dynamic downforce adjustment for unparalleled high-speed stability and cornering.</p>
</div>
</li>
</ul>
</div>
<div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 group">
<img alt="Carbon fiber detail" className="object-cover w-full h-full opacity-50 mix-blend-luminosity group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000" src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<p className="text-xs font-medium text-white uppercase tracking-widest mb-1">Material Science</p>
<p className="text-xs text-neutral-400">Woven carbon composite architecture.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5 carbon-bg" id="technology">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center md:text-left">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter metallic-text mb-4" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Intelligent systems.<br/>Instinctive control.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[340px] relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white tracking-wide mb-3">AI-assisted traction</h3>
<p className="text-xs font-normal text-neutral-500 leading-relaxed">Predictive algorithms monitor road conditions millisecond by millisecond, ensuring optimal power delivery and unyielding stability under extreme lateral G-forces.</p>
</div>
</div>
<div className="group p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[340px] relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:dashboard-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white tracking-wide mb-3">Holographic Telemetry</h3>
<p className="text-xs font-normal text-neutral-500 leading-relaxed">A driver-centric augmented reality interface projecting real-time performance data directly into your line of sight, keeping focus absolute.</p>
</div>
</div>
<div className="group p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[340px] relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:tuning-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white tracking-wide mb-3">Adaptive suspension</h3>
<p className="text-xs font-normal text-neutral-500 leading-relaxed">Magnetorheological dampers instantly transition from the aggressive stiffness of the track to the refined comfort of the coastal highway.</p>
</div>
</div>
<div className="group p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[340px] relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:music-note-slider-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white tracking-wide mb-3">Acoustic Architecture</h3>
<p className="text-xs font-normal text-neutral-500 leading-relaxed">A bespoke, acoustically mapped premium sound system designed to cut through the visceral roar of the V8 with crystalline precision.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-48 px-6 flex items-center justify-center text-center overflow-hidden bg-black border-y border-white/5">
<div className="absolute inset-0 z-0">
<img alt="Mountain road" className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105" src="https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 max-w-4xl space-y-12">
<p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tighter metallic-text leading-tight drop-shadow-lg" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>
                "From mountain apexes to city lights, the drive transcends transportation. It becomes a performance."
            </p>
<a className="inline-flex justify-center items-center bg-white text-black px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 hover:scale-[1.02] transition-all duration-300 glow-effect" href="#schedule">
                Schedule Your Drive
            </a>
</div>
</section>

<section className="py-32 px-6 md:px-12 carbon-bg">
<div className="max-w-4xl mx-auto text-center space-y-16">
<div className="space-y-6 flex flex-col items-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/[0.02] border border-white/10 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-2xl" icon="solar:crown-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter metallic-text" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Exclusive by Design</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-left">
<div className="space-y-5 p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.01] transition-colors duration-300">
<div className="w-10 h-px bg-gradient-to-r from-white to-transparent"></div>
<h4 className="text-sm font-medium text-white tracking-wide">Limited production</h4>
<p className="text-xs font-normal text-neutral-500 leading-relaxed">A strictly finite global allocation ensures your vehicle remains a remarkably rare presence on any continent.</p>
</div>
<div className="space-y-5 p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.01] transition-colors duration-300">
<div className="w-10 h-px bg-gradient-to-r from-white to-transparent"></div>
<h4 className="text-sm font-medium text-white tracking-wide">Bespoke Personalization</h4>
<p className="text-xs font-normal text-neutral-500 leading-relaxed">Curated color palettes, exposed carbon weaves, and interior materials tailored to your exact aesthetic vision.</p>
</div>
<div className="space-y-5 p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.01] transition-colors duration-300">
<div className="w-10 h-px bg-gradient-to-r from-white to-transparent"></div>
<h4 className="text-sm font-medium text-white tracking-wide">Concierge &amp; Circuit</h4>
<p className="text-xs font-normal text-neutral-500 leading-relaxed">White-glove global maintenance services and exclusive invitations to private international track events.</p>
</div>
</div>
<div className="pt-8">
<a className="inline-flex justify-center items-center bg-transparent text-white px-10 py-4 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 border border-white/20" href="#reserve">
                    Request Allocation
                </a>
</div>
</div>
</section>

<footer className="pt-24 pb-10 px-6 md:px-12 bg-[#020202] border-t border-white/10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
<div className="lg:col-span-5 space-y-8">
<div className="text-2xl font-medium tracking-tighter text-white" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>VLCY</div>
<div className="space-y-5">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Join the inner circle.</p>
<form className="flex w-full max-w-sm gap-3">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-neutral-600 backdrop-blur-sm" placeholder="Email address" required="" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0" type="submit">
                                Sign up
                            </button>
</form>
</div>
</div>
<div className="lg:col-span-2 lg:col-start-7 space-y-6 text-xs">
<h5 className="font-medium text-white uppercase tracking-widest mb-8">Vehicles</h5>
<ul className="space-y-4 font-normal text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Current Models</a></li>
<li><a className="hover:text-white transition-colors" href="#">Concept Cars</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pre-owned</a></li>
</ul>
</div>
<div className="lg:col-span-2 space-y-6 text-xs">
<h5 className="font-medium text-white uppercase tracking-widest mb-8">Company</h5>
<ul className="space-y-4 font-normal text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dealers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="lg:col-span-2 space-y-6 text-xs">
<h5 className="font-medium text-white uppercase tracking-widest mb-8">Social</h5>
<ul className="space-y-4 font-normal text-neutral-500">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Instagram <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Twitter <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">YouTube <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-normal text-neutral-600 uppercase tracking-widest">
<p>© 2024 Velocity Automotive. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
