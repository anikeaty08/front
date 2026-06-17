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



        // --- Custom Cursor Logic ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');
        const interactables = document.querySelectorAll('.interactable, a, button, input, label');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hovered');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hovered');
            });
        });

        // --- Testimonial Horizontal Scroll Logic ---
        const track = document.getElementById('testimonial-track');
        const btnLeft = document.getElementById('scrollLeft');
        const btnRight = document.getElementById('scrollRight');

        btnLeft.addEventListener('click', () => {
            track.scrollBy({ left: -400, behavior: 'smooth' });
        });

        btnRight.addEventListener('click', () => {
            track.scrollBy({ left: 400, behavior: 'smooth' });
        });

        // --- Smooth Reveal on Scroll (Simple Observer) ---
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'ease-out');
            observer.observe(section);
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
      
<div className="noise-overlay"></div>
<div className="grid-background"></div>
<div className="cursor-dot hidden md:block" id="cursor-dot"></div>
<div className="cursor-outline hidden md:block" id="cursor-outline"></div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-6">
<div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-full px-2 py-2 flex items-center gap-2 transition-all duration-500 hover:shadow-xl w-full max-w-3xl justify-between">
<a className="pl-6 pr-4 font-tech font-bold tracking-tight text-lg flex items-center gap-2 group interactable" href="#">
<span className="tracking-[0.2em]">RESTORA</span>
<div className="w-1.5 h-1.5 bg-[#2E5C55] rounded-full group-hover:animate-ping"></div>
</a>
<div className="hidden md:flex items-center bg-slate-100/50 rounded-full p-1 border border-slate-200/50">
<a className="interactable px-5 py-2 rounded-full text-[10px] font-semibold uppercase tracking-widest text-slate-500 hover:bg-white hover:text-[#2E5C55] hover:shadow-sm transition-all duration-300" href="#protocols">Protocols</a>
<a className="interactable px-5 py-2 rounded-full text-[10px] font-semibold uppercase tracking-widest text-slate-500 hover:bg-white hover:text-[#2E5C55] hover:shadow-sm transition-all duration-300" href="#outcomes">Outcomes</a>
<a className="interactable px-5 py-2 rounded-full text-[10px] font-semibold uppercase tracking-widest text-slate-500 hover:bg-white hover:text-[#2E5C55] hover:shadow-sm transition-all duration-300" href="#access">Access</a>
</div>
<button className="bg-[#0F172A] text-white pl-5 pr-2 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#2E5C55] transition-colors flex items-center gap-3 group interactable">
<span>Subject Login</span>
<div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#2E5C55] transition-colors">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-12 overflow-hidden">

<div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-gradient-to-b from-[#E0F2FE] to-[#F0FDF4] rounded-full blur-[100px] opacity-60 animate-[float-slow_8s_ease-in-out_infinite]"></div>
<div className="relative w-full max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 flex flex-col items-start">
<div className="inline-flex items-center gap-3 mb-8 px-3 py-1 rounded border border-[#2E5C55]/20 bg-white/30 backdrop-blur-sm">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[9px] font-tech uppercase tracking-[0.25em] text-[#2E5C55] font-semibold">System Operational v4.2</span>
</div>
<h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-[0.9] text-slate-900 mb-8">
                    BIOLOGY <br/>
<span className="font-tech font-thin italic text-slate-400 pl-2">AS</span> <br/>
                    ARCHIT<span className="tracking-normal">E</span>CTURE
                </h1>
<p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-light border-l-2 border-[#2E5C55] pl-6 mb-10">
                    Precision recovery protocols for high-output individuals. 
                    Rebuild cellular integrity through proprietary torsion mechanics.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<a className="interactable group relative overflow-hidden bg-[#0F172A] text-white px-10 py-5 rounded-sm w-full sm:w-auto text-center" href="#access">
<div className="absolute inset-0 bg-[#2E5C55] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
<span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                            Initialize Sequence <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<button className="interactable group flex items-center gap-4 px-6 py-4 rounded-sm hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#2E5C55] group-hover:text-[#2E5C55]">
<iconify-icon className="text-lg ml-0.5" icon="solar:play-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-slate-900">Visual Manifesto</span>
</button>
</div>
</div>
<div className="lg:col-span-5 relative">

<div className="relative z-20 aspect-[3/4] rounded-sm overflow-hidden group interactable shadow-2xl">
<img alt="Subject" className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="scan-beam"></div>

<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/60 text-2xl" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
<div className="text-right">
<div className="text-[10px] font-tech text-white uppercase tracking-widest mb-1">Status</div>
<div className="text-xs text-[#4ade80] font-mono bg-green-900/30 px-2 py-0.5 rounded">OPTIMAL</div>
</div>
</div>
<div className="space-y-2">
<div className="bg-black/40 backdrop-blur-md p-3 rounded border-l-2 border-white/50 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="flex justify-between text-[10px] text-white/80 uppercase tracking-widest mb-1">
<span>Lactate</span>
<span>0.8 mmol/L</span>
</div>
<div className="w-full bg-white/20 h-0.5"><div className="bg-white w-[20%] h-full"></div></div>
</div>
<div className="bg-black/40 backdrop-blur-md p-3 rounded border-l-2 border-white/50 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="flex justify-between text-[10px] text-white/80 uppercase tracking-widest mb-1">
<span>HRV</span>
<span>102 ms</span>
</div>
<div className="w-full bg-white/20 h-0.5"><div className="bg-white w-[85%] h-full"></div></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-12 z-30 bg-white p-6 shadow-2xl rounded-sm border border-slate-100 hidden md:block animate-[float-slow_6s_ease-in-out_infinite_reverse]">
<div className="flex items-center gap-4 mb-2">
<iconify-icon className="text-[#2E5C55] text-2xl" icon="solar:graph-new-up-linear"></iconify-icon>
<span className="text-3xl font-tech font-light">94<span className="text-sm align-top">%</span></span>
</div>
<p className="text-[10px] uppercase tracking-widest text-slate-400">Recovery Efficiency</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F172A] text-white relative overflow-hidden" id="lab">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
<div>
<h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#2E5C55] mb-2">Quantified Self</h2>
<div className="text-4xl md:text-5xl font-light tracking-tighter">Aggregate Laboratory Data</div>
</div>
<div className="font-tech text-right mt-6 md:mt-0">
<div className="text-3xl">2,481</div>
<div className="text-[10px] uppercase tracking-widest text-slate-500">Sessions Processed</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col justify-between group interactable hover:bg-white/10 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<iconify-icon className="text-6xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-light mb-2">Community Baseline</h3>
<p className="text-xs text-slate-400 uppercase tracking-widest">Performance delta over 30 days</p>
</div>
<div className="flex items-end justify-between h-32 gap-1 mt-8">

<div className="w-full bg-[#2E5C55] opacity-20 h-[30%] rounded-t-sm group-hover:h-[45%] transition-all duration-700"></div>
<div className="w-full bg-[#2E5C55] opacity-40 h-[50%] rounded-t-sm group-hover:h-[70%] transition-all duration-700 delay-75"></div>
<div className="w-full bg-[#2E5C55] opacity-60 h-[40%] rounded-t-sm group-hover:h-[60%] transition-all duration-700 delay-100"></div>
<div className="w-full bg-[#2E5C55] opacity-80 h-[75%] rounded-t-sm group-hover:h-[85%] transition-all duration-700 delay-150"></div>
<div className="w-full bg-[#2E5C55] h-[60%] rounded-t-sm group-hover:h-[95%] transition-all duration-700 delay-200"></div>
<div className="w-full bg-[#2E5C55] opacity-80 h-[45%] rounded-t-sm group-hover:h-[65%] transition-all duration-700 delay-300"></div>
<div className="w-full bg-[#2E5C55] opacity-60 h-[70%] rounded-t-sm group-hover:h-[90%] transition-all duration-700 delay-300"></div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-xl p-6 interactable hover:bg-white/10 transition-colors group">
<div className="flex justify-between items-center mb-6">
<iconify-icon className="text-2xl text-[#2E5C55]" icon="solar:heart-pulse-linear"></iconify-icon>
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="text-4xl font-tech mb-1">-14<span className="text-lg text-slate-500">%</span></div>
<p className="text-[10px] uppercase tracking-widest text-slate-400">Cortisol Reduction</p>
</div>

<div className="md:col-span-1 md:row-span-1 bg-[#2E5C55] rounded-xl p-6 relative overflow-hidden interactable group">
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-3xl text-white/90" icon="solar:sleep-linear"></iconify-icon>
<div>
<div className="text-4xl font-tech mb-1">+42<span className="text-lg text-white/60">m</span></div>
<p className="text-[10px] uppercase tracking-widest text-white/80">REM Sleep / Night</p>
</div>
</div>

<div className="absolute -right-4 -bottom-4 w-24 h-24 border-2 border-white/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
</div>

<div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-between interactable hover:bg-white/10 transition-colors">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
<iconify-icon className="text-xl text-[#2E5C55]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium">HIPAA Compliant</h4>
<p className="text-xs text-slate-400 mt-1">Encrypted biometric storage.</p>
</div>
</div>
<div className="hidden md:block">
<iconify-icon className="text-3xl text-slate-600" icon="solar:lock-password-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="protocols">
<div className="mb-16 text-center">
<h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#2E5C55] mb-4">Intervention Menu</h2>
<div className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900">Select Modality</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white shadow-xl rounded-sm overflow-hidden">

<div className="group relative h-[600px] border-b md:border-b-0 md:border-r border-slate-200 cursor-none interactable bg-white transition-all duration-300">
<div className="absolute inset-0 bg-slate-50 transition-all duration-500 group-hover:bg-[#F0FDF4] opacity-0 group-hover:opacity-100"></div>

<div className="absolute top-6 left-6 text-xs font-tech text-slate-300 group-hover:text-[#2E5C55] transition-colors">01</div>
<div className="relative h-[60%] flex items-center justify-center p-8 overflow-hidden">
<img alt="Cryo" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-70 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="scan-beam hidden group-hover:block"></div>
</div>
<div className="relative h-[40%] p-8 flex flex-col justify-between border-t border-slate-100 bg-white/80 backdrop-blur-sm">
<div>
<h3 className="font-tech text-2xl uppercase mb-2">Cryogenic Cell</h3>
<p className="text-xs text-slate-500 leading-relaxed">Systemic inflammation reduction via exposure to -110°C nitrogen vapor.</p>
</div>
<div className="flex justify-between items-center mt-6">
<div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<span className="block text-[10px] uppercase tracking-widest text-slate-400">Duration</span>
<span className="font-tech text-sm">3:00 min</span>
</div>
<button className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#2E5C55] hover:text-white hover:border-[#2E5C55] transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative h-[600px] border-b md:border-b-0 md:border-r border-slate-200 cursor-none interactable bg-white">
<div className="absolute inset-0 bg-slate-50 transition-all duration-500 group-hover:bg-[#F0FDF4] opacity-0 group-hover:opacity-100"></div>
<div className="absolute top-6 left-6 text-xs font-tech text-slate-300 group-hover:text-[#2E5C55] transition-colors">02</div>
<div className="relative h-[60%] flex items-center justify-center p-8 overflow-hidden">
<img alt="Hyperbaric" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-70 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="scan-beam hidden group-hover:block"></div>
</div>
<div className="relative h-[40%] p-8 flex flex-col justify-between border-t border-slate-100 bg-white/80 backdrop-blur-sm">
<div>
<h3 className="font-tech text-2xl uppercase mb-2">Hyperbaric O2</h3>
<p className="text-xs text-slate-500 leading-relaxed">Pressurized oxygen therapy to accelerate cellular regeneration and angiogenesis.</p>
</div>
<div className="flex justify-between items-center mt-6">
<div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<span className="block text-[10px] uppercase tracking-widest text-slate-400">Duration</span>
<span className="font-tech text-sm">60:00 min</span>
</div>
<button className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#2E5C55] hover:text-white hover:border-[#2E5C55] transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative h-[600px] cursor-none interactable bg-white">
<div className="absolute inset-0 bg-slate-50 transition-all duration-500 group-hover:bg-[#F0FDF4] opacity-0 group-hover:opacity-100"></div>
<div className="absolute top-6 left-6 text-xs font-tech text-slate-300 group-hover:text-[#2E5C55] transition-colors">03</div>
<div className="relative h-[60%] flex items-center justify-center p-8 overflow-hidden">
<img alt="RedLight" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-70 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="scan-beam hidden group-hover:block"></div>
</div>
<div className="relative h-[40%] p-8 flex flex-col justify-between border-t border-slate-100 bg-white/80 backdrop-blur-sm">
<div>
<h3 className="font-tech text-2xl uppercase mb-2">Photobiomodulation</h3>
<p className="text-xs text-slate-500 leading-relaxed">Dual-frequency infrared light to stimulate mitochondrial ATP production.</p>
</div>
<div className="flex justify-between items-center mt-6">
<div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<span className="block text-[10px] uppercase tracking-widest text-slate-400">Duration</span>
<span className="font-tech text-sm">20:00 min</span>
</div>
<button className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#2E5C55] hover:text-white hover:border-[#2E5C55] transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden relative border-t border-slate-200 bg-white" id="outcomes">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#2E5C55] mb-2">Clinical Outcomes</h2>
<div className="flex justify-between items-end">
<div className="text-4xl font-light tracking-tighter text-slate-900">Subject Reports</div>
<div className="flex gap-2">
<button className="interactable w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all" id="scrollLeft"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="interactable w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all" id="scrollRight"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="flex gap-6 overflow-x-auto no-scrollbar px-6 pb-12 snap-x" id="testimonial-track">

<div className="min-w-[350px] md:min-w-[400px] bg-[#F8FAFC] border border-slate-200 p-8 rounded-xl snap-center group interactable hover:border-[#2E5C55]/30 transition-colors">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-semibold">Subject 892</div>
<div className="text-[10px] uppercase text-slate-400 tracking-wider">Triathlete</div>
</div>
</div>
<div className="flex gap-1">
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-600 italic leading-relaxed mb-8">
                    "The combination of hyperbaric therapy and cryo reduced my recovery window by 40% between sessions."
                </p>
<div className="border-t border-slate-200 pt-4 flex gap-6">
<div>
<div className="text-[10px] uppercase tracking-widest text-slate-400">VO2 Max</div>
<div className="text-lg font-tech text-[#2E5C55]">+12%</div>
</div>
<div>
<div className="text-[10px] uppercase tracking-widest text-slate-400">Resting HR</div>
<div className="text-lg font-tech text-[#2E5C55]">-8 bpm</div>
</div>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] bg-[#F8FAFC] border border-slate-200 p-8 rounded-xl snap-center group interactable hover:border-[#2E5C55]/30 transition-colors">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-semibold">Subject 104</div>
<div className="text-[10px] uppercase text-slate-400 tracking-wider">Founder</div>
</div>
</div>
<div className="flex gap-1">
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-600 italic leading-relaxed mb-8">
                    "Cognitive clarity post-infrared is undeniable. It's not just physical recovery; it's a mental reset."
                </p>
<div className="border-t border-slate-200 pt-4 flex gap-6">
<div>
<div className="text-[10px] uppercase tracking-widest text-slate-400">Deep Sleep</div>
<div className="text-lg font-tech text-[#2E5C55]">+45m</div>
</div>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] bg-[#F8FAFC] border border-slate-200 p-8 rounded-xl snap-center group interactable hover:border-[#2E5C55]/30 transition-colors">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-semibold">Subject 552</div>
<div className="text-[10px] uppercase text-slate-400 tracking-wider">Ballet</div>
</div>
</div>
<div className="flex gap-1">
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#2E5C55] text-xs" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-600 italic leading-relaxed mb-8">
                    "The kinetic reformer protocols completely resolved a chronic ankle instability issue within 6 weeks."
                </p>
<div className="border-t border-slate-200 pt-4 flex gap-6">
<div>
<div className="text-[10px] uppercase tracking-widest text-slate-400">Mobility</div>
<div className="text-lg font-tech text-[#2E5C55]">+18 deg</div>
</div>
<div>
<div className="text-[10px] uppercase tracking-widest text-slate-400">Pain Scale</div>
<div className="text-lg font-tech text-[#2E5C55]">4 → 0</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#0F172A] text-white relative" id="access">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/10 rounded-full border border-white/10">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest">Accepting New Subjects</span>
</div>
<h2 className="text-4xl font-light tracking-tight mb-6">Initiate <br/> Access Protocol</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Membership is limited to ensure equipment availability and protocol fidelity. Submit your data below to request an evaluation.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm text-slate-300">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
<span>1024 Mercer St, Seattle, WA</span>
</div>
<div className="flex items-center gap-4 text-sm text-slate-300">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
<span>+1 (206) 555-0192</span>
</div>
<div className="flex items-center gap-4 text-sm text-slate-300">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
<span>intake@restoralabs.com</span>
</div>
</div>
</div>

<form className="space-y-8">

<div className="relative input-group">
<input autocomplete="off" className="w-full bg-transparent border-0 border-b border-slate-700 py-3 text-white focus:ring-0 focus:outline-none transition-colors" id="name" placeholder=" " type="text"/>
<label className="absolute left-0 top-3 text-slate-500 text-sm transition-all pointer-events-none" htmlFor="name">Subject Name</label>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2E5C55] input-underline"></div>
</div>

<div className="relative input-group">
<input autocomplete="off" className="w-full bg-transparent border-0 border-b border-slate-700 py-3 text-white focus:ring-0 focus:outline-none transition-colors" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 top-3 text-slate-500 text-sm transition-all pointer-events-none" htmlFor="email">Contact Frequency (Email)</label>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2E5C55] input-underline"></div>
</div>

<div className="space-y-3">
<span className="text-xs text-slate-500 uppercase tracking-widest">Primary Objective</span>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer interactable">
<input className="peer sr-only" name="objective" type="radio"/>
<div className="px-4 py-3 border border-slate-700 rounded text-sm text-slate-400 peer-checked:bg-[#2E5C55] peer-checked:text-white peer-checked:border-[#2E5C55] transition-all text-center">Recovery</div>
</label>
<label className="cursor-pointer interactable">
<input className="peer sr-only" name="objective" type="radio"/>
<div className="px-4 py-3 border border-slate-700 rounded text-sm text-slate-400 peer-checked:bg-[#2E5C55] peer-checked:text-white peer-checked:border-[#2E5C55] transition-all text-center">Longevity</div>
</label>
<label className="cursor-pointer interactable">
<input className="peer sr-only" name="objective" type="radio"/>
<div className="px-4 py-3 border border-slate-700 rounded text-sm text-slate-400 peer-checked:bg-[#2E5C55] peer-checked:text-white peer-checked:border-[#2E5C55] transition-all text-center">Performance</div>
</label>
<label className="cursor-pointer interactable">
<input className="peer sr-only" name="objective" type="radio"/>
<div className="px-4 py-3 border border-slate-700 rounded text-sm text-slate-400 peer-checked:bg-[#2E5C55] peer-checked:text-white peer-checked:border-[#2E5C55] transition-all text-center">Injury</div>
</label>
</div>
</div>
<button className="w-full bg-white text-slate-900 font-bold uppercase tracking-widest text-xs py-4 rounded hover:bg-[#2E5C55] hover:text-white transition-all duration-300 interactable flex items-center justify-center gap-2 group" type="submit">
                        Transmit Request
                        <iconify-icon className="text-lg group-hover:-translate-y-1 transition-transform" icon="solar:upload-track-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-24">
<div className="mb-12 md:mb-0">
<a className="font-tech font-bold tracking-tighter text-6xl md:text-9xl leading-[0.8] uppercase text-slate-900 block mb-6" href="#">Restora<span className="text-[#2E5C55]">.</span></a>
<p className="text-sm text-slate-500 max-w-sm">
                        Optimizing human potential through science-backed recovery modalities and environmental conditioning.
                    </p>
</div>
<div className="flex flex-col gap-6 text-right">
<a className="text-sm uppercase tracking-widest hover:text-[#2E5C55] transition-colors interactable" href="#">Instagram /</a>
<a className="text-sm uppercase tracking-widest hover:text-[#2E5C55] transition-colors interactable" href="#">Twitter (X) /</a>
<a className="text-sm uppercase tracking-widest hover:text-[#2E5C55] transition-colors interactable" href="#">LinkedIn /</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-8">
<div>© 2024 Restora Labs LLC</div>
<div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Systems Normal</div>
<div className="hover:text-black cursor-pointer interactable transition-colors">Privacy Protocol</div>
<div className="text-right">Architecture by AI</div>
</div>
</div>
</footer>


    </>
  );
}
