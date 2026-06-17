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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-stone-900 hover:opacity-70 transition-opacity font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                ALEX G.
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors font-manrope" href="#philosophy" style={{transition: 'outline 0.1s ease-in-out'}}>Philosophy</a>
<a className="hover:text-stone-900 transition-colors font-manrope" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>Coaching</a>
<a className="hover:text-stone-900 transition-colors font-manrope" href="#journal" style={{transition: 'outline 0.1s ease-in-out'}}>Journal</a>
<a className="hover:text-stone-900 transition-colors font-manrope" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="md:hidden text-stone-900">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<a className="hidden md:flex items-center gap-2 bg-stone-900 text-stone-50 px-4 py-2 rounded-full text-xs font-medium hover:bg-stone-700 transition-colors font-manrope" href="#start" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Start Now
                    <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-medium mb-8 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Now Booking: Aesthetic Treatments
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-stone-900 tracking-tight font-montserrat mb-6" style={{transition: 'outline 0.1s ease-in-out'}}>
                Curating a life of <br className="hidden md:block"/>
<span className="font-medium text-stone-400 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>beauty</span> &amp; vitality.
            </h1>
<p className="text-lg md:text-xl text-stone-500 font-light mb-10 max-w-xl mx-auto leading-relaxed font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                A holistic approach combining nutritional science, mindful movement, and advanced aesthetic medicine.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full md:w-auto bg-stone-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2 font-manrope" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Explore Programs
                </a>
<a className="w-full md:w-auto bg-white border border-stone-200 text-stone-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-50 transition-all flex items-center justify-center font-manrope" href="#about" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Read My Story
                </a>
</div>

<div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border border-stone-200 bg-stone-900 group mx-auto ring-1 ring-stone-900/5">

<div className="relative aspect-video md:aspect-[2.4/1] w-full overflow-hidden bg-stone-200">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-1000 ease-out" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=2160&amp;q=80">
<source src="https://videos.pexels.com/video-files/3756003/3756003-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-90"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500">
<svg className="text-white w-6 h-6 ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 border-t border-white/10 bg-white/5 backdrop-blur-xl">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="text-left min-w-fit">
<h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-1 font-manrope flex items-center gap-2">
<svg className="lucide lucide-sparkles text-stone-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
                                Signature Treatments
                            </h3>
</div>

<div className="flex flex-wrap justify-start md:justify-end gap-2 w-full">
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-stone-200 text-xs font-medium hover:bg-white/20 hover:text-white transition-colors cursor-default backdrop-blur-sm">Microneedling</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-stone-200 text-xs font-medium hover:bg-white/20 hover:text-white transition-colors cursor-default backdrop-blur-sm">Peeling</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-stone-200 text-xs font-medium hover:bg-white/20 hover:text-white transition-colors cursor-default backdrop-blur-sm">Medical Skincare</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-stone-200 text-xs font-medium hover:bg-white/20 hover:text-white transition-colors cursor-default backdrop-blur-sm">Rellenos Dérmicos</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-stone-200 text-xs font-medium hover:bg-white/20 hover:text-white transition-colors cursor-default backdrop-blur-sm">Lipoenzimas</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-stone-200 text-xs font-medium hover:bg-white/20 hover:text-white transition-colors cursor-default backdrop-blur-sm">Botox</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-200/50 rounded-full blur-3xl -z-10 opacity-40 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none"></div>
</section><section className="md:py-32 pt-20 pr-6 pb-20 pl-6">

<div className="max-w-7xl mx-auto mb-8 pl-2">
<h3 className="text-xs font-bold tracking-widest uppercase text-stone-900 font-manrope">
            A Sanctuary for Healing
        </h3>
</div>

<div className="max-w-7xl mx-auto bg-stone-900 rounded-[2.5rem] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 min-h-[600px] relative group">

<div className="relative h-[400px] md:h-auto overflow-hidden bg-stone-200">

<img alt="Studio Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="bg-gradient-to-r from-stone-900/40 to-transparent mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-12 left-8 md:top-16 md:left-12 z-20">
<h2 className="text-5xl md:text-6xl text-white font-montserrat font-medium leading-[0.95] tracking-tighter drop-shadow-lg">
                    The 
                    <span className="italic font-light text-stone-200">Holistic</span> 
                    Studio
                </h2>

<div className="w-20 h-[1px] bg-stone-300/60 mt-8 ml-1"></div>
</div>

<div className="absolute -bottom-16 -left-16 w-80 h-80 md:w-[28rem] md:h-[28rem] z-30 text-[#C8B695] mix-blend-normal opacity-90 pointer-events-none">
<svg className="w-full h-full drop-shadow-2xl" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path className="drop-shadow-lg" d="M25 85C10 85 10 55 25 45C40 35 60 65 75 55C90 45 85 15 60 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
<path className="opacity-50" d="M25 85C40 85 45 65 35 60" stroke="currentColor" strokeLinecap="round" strokeWidth="12"></path>
</svg>
</div>
</div>

<div className="relative flex flex-col justify-center p-10 md:p-20 bg-stone-900 text-stone-200">

<div className="absolute inset-0 z-0 opacity-10 mix-blend-luminosity">
<img alt="Texture" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-10 max-w-md">
<p className="md:text-xl leading-relaxed text-lg font-light text-stone-400 font-manrope mb-10">
                    The Studio offers a refined, personalized environment for your transformation. Situated in a quiet loft space, our expert practitioners curate an atmosphere that allows you to disconnect from the noise and reconnect with your vitality.
                </p>
<a className="group inline-flex items-center gap-6 px-8 py-4 rounded-full border border-stone-600 text-xs font-semibold tracking-widest uppercase text-stone-300 hover:bg-stone-50 hover:text-stone-900 hover:border-stone-50 transition-all duration-300 font-manrope w-fit" href="#studio">
                    Explore The Space
                    <svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="philosophy">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h3 className="text-2xl tracking-tight mb-4 text-stone-900 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>The Philosophy</h3>
<p className="text-stone-500 leading-relaxed text-sm md:text-base font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Wellness isn't a destination; it's a continuous dialogue with your body. My method integrates functional fitness with intuitive eating, moving away from restrictive diets towards a sustainable, joyful relationship with health.
                        </p>
</div>
<div className="w-full md:w-48 h-48 bg-stone-100 rounded-xl overflow-hidden relative">
<img alt="Yoga pose" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="bg-stone-900 text-white p-8 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="relative z-10">
<svg className="lucide lucide-activity w-8 h-8 mb-4 text-stone-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="text-xl font-medium tracking-tight mb-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Evidence Based</h3>
<p className="text-stone-400 text-sm leading-relaxed font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Every plan is backed by current nutritional science and physiological principles.
                        </p>
</div>
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-stone-800 rounded-full blur-2xl group-hover:bg-stone-700 transition-colors duration-500"></div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-center">
<svg className="lucide lucide-utensils w-6 h-6 mb-4 text-stone-900" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<h3 className="text-lg font-medium tracking-tight mb-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Nutritional Balance</h3>
<p className="text-stone-500 text-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Fueling your body with whole, unprocessed foods without sacrificing flavor.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-center">
<svg className="lucide lucide-brain-circuit w-6 h-6 mb-4 text-stone-900" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
<h3 className="text-lg font-medium tracking-tight mb-2 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Mindset Shift</h3>
<p className="text-stone-500 text-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Cultivating mental resilience to support physical transformation.</p>
</div>

<div className="bg-[#EBEBE8] p-8 rounded-2xl border border-stone-200/50 shadow-sm flex flex-col justify-center relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-lg font-medium tracking-tight mb-2 text-stone-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Rest &amp; Recovery</h3>
<p className="text-stone-600 text-sm mb-4 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Sleep and stress management are the foundations of results.</p>
<a className="text-xs font-semibold underline decoration-stone-400 hover:decoration-stone-900 transition-all font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Read the guide</a>
</div>
<svg className="lucide lucide-moon absolute top-8 right-8 w-12 h-12 text-stone-300/50" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl tracking-tight text-stone-900 mb-4 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Tailored Programs</h2>
<p className="text-stone-500 font-light font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Choose a path that aligns with your goals. Each program is custom-built to fit your lifestyle, not the other way around.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors mt-4 md:mt-0 font-manrope" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Compare Plans <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden rounded-lg bg-stone-100 mb-6 relative">
<img alt="1:1 Coaching" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2 flex items-center justify-between font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                        1:1 Wellness Coaching
                        <svg className="lucide lucide-arrow-up-right w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</h3>
<p className="text-sm text-stone-500 leading-relaxed font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                        A comprehensive 12-week program including custom meal planning, workout routines, and weekly check-ins via video call.
                    </p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden rounded-lg bg-stone-100 mb-6 relative">
<img alt="Nutrition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2 flex items-center justify-between font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Functional Nutrition
                        <svg className="lucide lucide-arrow-up-right w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</h3>
<p className="text-sm text-stone-500 leading-relaxed font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Learn to eat for energy and longevity. Includes pantry audits, grocery guides, and macro-nutrient breakdown.
                    </p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden rounded-lg bg-stone-100 mb-6 relative">
<img alt="Mindfulness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2 flex items-center justify-between font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Digital Guides &amp; Plans
                        <svg className="lucide lucide-arrow-up-right w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</h3>
<p className="text-sm text-stone-500 leading-relaxed font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Self-paced 4-week programs for mobility, HIIT, or plant-based transitions. Access via our private app.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50 border-y border-stone-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<svg className="lucide lucide-quote w-8 h-8 text-stone-300 mx-auto mb-6" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h3 className="text-2xl md:text-3xl tracking-tight text-stone-900 mb-8 leading-relaxed font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                "Working with Alex completely shifted my perspective. It wasn't just about losing weight; it was about gaining a life where I felt energized, capable, and present."
            </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-xs font-semibold text-stone-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Sarah Jenkins</p>
<p className="text-xs text-stone-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Program Graduate, 2023</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="journal">
<div className="max-w-6xl mx-auto">
<div className="mb-12 border-b border-stone-200 pb-4 flex justify-between items-end">
<h2 className="text-2xl tracking-tight text-stone-900 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>The Journal</h2>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>View all articles</a>
</div>
<div className="space-y-8">

<article className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start">
<div className="w-full md:w-64 aspect-[3/2] bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Meditation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 py-1">
<div className="flex items-center gap-3 mb-2 text-xs text-stone-400 font-medium uppercase tracking-wide">
<span className="font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Mindfulness</span>
<span className="w-1 h-1 bg-stone-300 rounded-full"></span>
<span className="font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Oct 12, 2023</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-stone-600 transition-colors font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Why Morning Routines Set the Tone for Success
                        </h3>
<p className="text-stone-500 text-sm leading-relaxed max-w-2xl mb-4 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            It’s not about waking up at 4 AM. It’s about intentionality. Discover how to craft a morning ritual that actually sticks.
                        </p>
<a className="inline-flex items-center text-xs font-semibold text-stone-900 border-b border-transparent group-hover:border-stone-900 transition-all font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Read Article
                        </a>
</div>
</article>

<article className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start">
<div className="w-full md:w-64 aspect-[3/2] bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Healthy Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 py-1">
<div className="flex items-center gap-3 mb-2 text-xs text-stone-400 font-medium uppercase tracking-wide">
<span className="font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Nutrition</span>
<span className="w-1 h-1 bg-stone-300 rounded-full"></span>
<span className="font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Sep 28, 2023</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-stone-600 transition-colors font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Understanding Macro-nutrients: A Beginner’s Guide
                        </h3>
<p className="text-stone-500 text-sm leading-relaxed max-w-2xl mb-4 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Proteins, fats, and carbs aren't just numbers. They are the building blocks of your cellular health. Here is what you need to know.
                        </p>
<a className="inline-flex items-center text-xs font-semibold text-stone-900 border-b border-transparent group-hover:border-stone-900 transition-all font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Read Article
                        </a>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 bg-stone-900 text-stone-200 px-6 rounded-t-[2.5rem] mt-12">
<div className="max-w-2xl mx-auto text-center">
<svg className="lucide lucide-mail w-6 h-6 mx-auto mb-6 text-stone-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<h2 className="text-3xl md:text-4xl tracking-tight text-white mb-4 font-montserrat font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Weekly Wellness</h2>
<p className="text-stone-400 mb-8 font-light font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Join 5,000+ subscribers receiving weekly tips on movement, nutrition, and mindful living. No spam, ever.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-stone-800 border border-stone-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-sm placeholder:text-stone-500 transition-all" placeholder="email@example.com" required="" type="email"/>
<button className="bg-white text-stone-900 px-6 py-3 rounded-lg font-medium text-sm hover:bg-stone-200 transition-colors font-manrope" style={{transition: 'outline 0.1s ease-in-out'}} type="submit">
                    Subscribe
                </button>
</form>
</div>
<div className="max-w-6xl mx-auto mt-24 pt-12 border-t border-stone-800 grid grid-cols-1 md:grid-cols-4 gap-12" id="contact">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-semibold tracking-tighter text-white mb-4 inline-block font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>ALEX G.</a>
<p className="text-stone-500 text-sm max-w-xs font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Empowering individuals to reclaim their health through sustainable lifestyle changes and evidence-based coaching.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Sitemap</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-white transition-colors font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Home</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#philosophy" style={{transition: 'outline 0.1s ease-in-out'}}>Philosophy</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>Services</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#journal" style={{transition: 'outline 0.1s ease-in-out'}}>Journal</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Connect</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li className="flex items-center gap-2"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> <a className="hover:text-white transition-colors font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Instagram</a></li>
<li className="flex items-center gap-2"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> <a className="hover:text-white transition-colors font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Twitter</a></li>
<li className="flex items-center gap-2"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> <a className="hover:text-white transition-colors font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>LinkedIn</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
<p className="font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>© 2024 Alex G Wellness. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-stone-400 font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Privacy Policy</a>
<a className="hover:text-stone-400 font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Terms of Service</a>
</div>
</div>
</section>


    </>
  );
}
