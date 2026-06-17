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



document.addEventListener("DOMContentLoaded", () => {
// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;
if(menuBtn && mobileMenu) {
menuBtn.addEventListener('click', () => {
isMenuOpen = !isMenuOpen;
if (isMenuOpen) {
mobileMenu.classList.remove('hidden');
mobileMenu.classList.add('flex');
document.body.style.overflow = 'hidden';
} else {
mobileMenu.classList.add('hidden');
mobileMenu.classList.remove('flex');
document.body.style.overflow = '';
}
});
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
      

<nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 text-white transition-all duration-500">
<div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<iconify-icon className="text-cyan-400 group-hover:text-white transition-colors" icon="lucide:waves" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-lg font-light tracking-[0.15em] uppercase text-white font-sans">
            Somatic.
          </span>
</a>

<div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest text-slate-400 uppercase">
<a className="hover:text-cyan-400 transition-colors duration-300 font-sans" href="#services">
            Services
          </a>
<a className="hover:text-cyan-400 transition-colors duration-300 font-sans" href="#about">
            About
          </a>
<a className="hover:text-cyan-400 transition-colors duration-300 font-sans" href="#pricing">
            Membership
          </a>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="bg-cyan-50 text-slate-950 px-6 py-2.5 rounded-sm text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-colors font-sans rounded-full" href="#book">
            Book Session
          </a>
</div>

<button className="md:hidden text-slate-400 hover:text-white transition-colors" id="menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-slate-950 z-40 hidden flex-col pt-32 px-6 h-screen" id="mobile-menu">
<div className="flex flex-col gap-8 text-2xl font-light tracking-tight text-white/90">
<a className="border-b border-white/10 pb-4 flex justify-between items-center group" href="#services">
<span className="font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              Services
            </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" icon="lucide:arrow-right" width="24"></iconify-icon>
</a>
<a className="border-b border-white/10 pb-4 flex justify-between items-center group" href="#about">
<span className="font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              About
            </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" icon="lucide:arrow-right" width="24"></iconify-icon>
</a>
<a className="border-b border-white/10 pb-4 flex justify-between items-center group" href="#pricing">
<span className="font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              Membership
            </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" icon="lucide:arrow-right" width="24"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative w-full min-h-[850px] bg-slate-900 overflow-hidden flex items-center">

<div className="absolute inset-0 w-full h-full z-0">
<img alt="Calm texture" className="w-full h-full object-cover opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec98cf5f-b17c-4041-8da0-e229cbdc6689_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-6 w-full pt-20">
<div className="max-w-4xl">
<div className="flex items-center gap-3 text-cyan-400 mb-6 animate-on-scroll">
<span className="w-8 h-[1px] bg-cyan-400"></span>
<span className="text-xs font-medium tracking-[0.2em] uppercase font-sans">
              Holistic Wellness Studio
            </span>
</div>
<h1 className="text-5xl md:text-9xl text-white tracking-tighter leading-[0.95] mb-8 animate-on-scroll font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
            Return to your

            <span className="text-white/50 font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              natural rhythm.
            </span>
</h1>
<p className="text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed mb-4 animate-on-scroll font-sans">
            A somatic massage studio offering restorative bodywork in
            <span className="text-white font-normal font-sans">your city</span>
            .
          </p>
<p className="text-base text-slate-400 leading-relaxed max-w-lg mb-12 font-light animate-on-scroll font-sans">
            Curated bodywork therapies designed to calm the nervous system and
            restore physical balance.
          </p>
<div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
<a className="bg-cyan-50 text-slate-950 px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] font-sans" href="#book">
              View Treatments
              <iconify-icon icon="lucide:arrow-down-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="border border-white/20 text-white px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase flex items-center justify-center hover:bg-white/5 transition-colors font-sans rounded-xl" href="#about">
              Our Philosophy
            </a>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-200 bg-white">
<div className="max-w-screen-2xl mx-auto px-6 py-12">
<p className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest mb-10 font-sans">
          Trusted for thoughtful, clinical-informed care
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex items-start gap-4 p-6 rounded-sm bg-slate-50 border border-slate-100 group hover:border-cyan-200 transition-colors duration-500 animate-on-scroll">
<div className="text-cyan-600">
<iconify-icon icon="lucide:badge-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 uppercase tracking-wide font-sans">
                Licensed Therapist
              </div>
<div className="text-xs text-slate-500 mt-1 font-light font-sans">
                Professional, ethical practice
              </div>
</div>
</div>

<div className="flex items-start gap-4 p-6 rounded-sm bg-slate-50 border border-slate-100 group hover:border-cyan-200 transition-colors duration-500 animate-on-scroll">
<div className="text-cyan-600">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-slate-900 uppercase tracking-wide font-sans">
                10+ years
              </div>
<div className="text-xs text-slate-500 mt-1 font-light font-sans">
                Clinical + somatic training
              </div>
</div>
</div>

<div className="flex items-start gap-4 p-6 rounded-sm bg-slate-50 border border-slate-100 group hover:border-cyan-200 transition-colors duration-500 animate-on-scroll">
<div className="text-cyan-600">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 uppercase tracking-wide font-sans">
                1,500+ sessions
              </div>
<div className="text-xs text-slate-500 mt-1 font-light font-sans">
                In-studio, one-on-one
              </div>
</div>
</div>

<div className="flex items-start gap-4 p-6 rounded-sm bg-slate-50 border border-slate-100 group hover:border-cyan-200 transition-colors duration-500 animate-on-scroll">
<div className="text-cyan-600">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 uppercase tracking-wide font-sans">
                Serving your city
              </div>
<div className="text-xs text-slate-500 mt-1 font-light font-sans">
                Quiet, private studio
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="services">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-sans">
                Therapies
              </span>
</div>
<h2 className="text-4xl text-slate-900 tracking-tighter font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              Restorative Menu
            </h2>
<p className="text-sm text-slate-500 font-light mt-4 max-w-xl font-sans">
              Not sure which treatment is right? We’ll guide you during your
              consultation.
            </p>
</div>
<a className="hidden md:flex items-center text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 hover:border-cyan-500 transition-colors mt-6 md:mt-0 gap-2 font-sans" href="#">
            View full menu
            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col bg-slate-50 rounded-sm border border-slate-100 hover:border-cyan-200 transition-all duration-500 cursor-pointer animate-on-scroll rounded-2xl overflow-hidden">
<div className="h-56 w-full overflow-hidden relative border-slate-100 h-[260px]">
<img alt="Deep Tissue" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3dc2c9bb-0915-48bd-a3dd-8286870191c8_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50"></div>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow">
<h3 className="text-xl font-medium text-slate-900 mb-4 tracking-tight font-sans">
                Deep Tissue
              </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-10 flex-grow font-light font-sans">
                Slow, firm pressure targeting deeper layers of muscle and
                connective tissue to release chronic tension.
              </p>
<div className="flex justify-between items-center pt-8 border-t border-slate-200">
<span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-sans">
                  60 / 90 min
                </span>
<span className="text-base text-slate-900 font-medium font-sans">
                  $140
                </span>
</div>
</div>
</div>

<div className="group flex flex-col bg-slate-50 rounded-sm border border-slate-100 hover:border-cyan-200 transition-all duration-500 cursor-pointer animate-on-scroll overflow-hidden">
<div className="h-56 w-full overflow-hidden relative border-slate-100 h-[260px]">
<img alt="Swedish Flow" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90867864-0f86-4e9c-a1b6-e56ddc33a564_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50"></div>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow">
<h3 className="text-xl font-medium text-slate-900 mb-4 tracking-tight font-sans">
                Swedish Flow
              </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-10 flex-grow font-light font-sans">
                Rhythmic, flowing strokes designed to stimulate circulation and
                induce a deep state of relaxation.
              </p>
<div className="flex justify-between items-center pt-8 border-t border-slate-200">
<span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-sans">
                  60 / 90 min
                </span>
<span className="text-base text-slate-900 font-medium font-sans">
                  $120
                </span>
</div>
</div>
</div>

<div className="group flex flex-col bg-slate-50 rounded-sm border border-slate-100 hover:border-cyan-200 transition-all duration-500 cursor-pointer animate-on-scroll overflow-hidden">
<div className="h-56 w-full overflow-hidden relative border-slate-100 h-[260px]">
<img alt="Craniosacral" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54f5c438-58fe-402e-b3b7-e9632f8ee8f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50"></div>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow">
<h3 className="text-xl font-medium text-slate-900 mb-4 tracking-tight font-sans">
                Craniosacral
              </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-10 flex-grow font-light font-sans">
                Gentle manipulation of the skull and spine to harmonize the
                central nervous system.
              </p>
<div className="flex justify-between items-center pt-8 border-t border-slate-200">
<span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-sans">
                  45 / 60 min
                </span>
<span className="text-base text-slate-900 font-medium font-sans">
                  $110
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="p-10 md:p-16 rounded-sm bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-8 animate-on-scroll rounded-2xl">
<div className="max-w-xl">
<h3 className="text-2xl text-slate-900 tracking-tight mb-3 font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              Not sure where to start?
            </h3>
<p className="text-sm text-slate-500 font-light leading-relaxed font-sans">
              Book a brief consultation and we’ll recommend the right pace,
              pressure, and treatment for your needs.
            </p>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-600 transition-colors shadow-lg shadow-slate-900/5 font-sans rounded-full" href="#book">
            Book a consultation
          </a>
</div>
</div>
</section>

<section className="py-24 bg-[#EBE9E4] overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group cursor-pointer animate-on-scroll">
<div className="absolute top-4 left-4 z-10">
<span className="text-[9px] font-bold text-cyan-800 bg-cyan-100/50 backdrop-blur px-3 py-1.5 rounded-sm uppercase tracking-widest border border-cyan-200/50 font-sans">
                Studio Standards
              </span>
</div>
<img alt="Tactile stone texture" className="w-full h-[600px] object-cover rounded-sm shadow-xl contrast-125 mix-blend-multiply rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd4fb2ab-9fda-4359-8e0c-03da1b71a134_3840w.jpg?w=800&amp;q=80"/>
</div>
<div className="pl-0 md:pl-12 animate-on-scroll">
<span className="text-xs text-cyan-700 font-bold uppercase tracking-widest mb-4 block font-sans">
              The Environment
            </span>
<h2 className="text-4xl md:text-5xl text-slate-900 tracking-tighter mb-8 font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              Clean, calm,
              <span className="text-slate-500 font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
                effective.
              </span>
</h2>
<p className="text-slate-600 leading-relaxed mb-10 font-light text-lg font-sans">
              We believe that physical ease is the foundation of mental clarity.
              Our studio uses organic, unscented oils and ethically sourced
              linens to ensure nothing distracts from your recovery.
            </p>
<ul className="space-y-6">
<li className="flex items-center text-sm text-slate-900 font-medium tracking-wide uppercase font-sans">
<iconify-icon className="text-cyan-600 mr-4" icon="lucide:check" strokeWidth="2" width="18"></iconify-icon>
                Organic Jojoba &amp; Almond Oils
              </li>
<li className="flex items-center text-sm text-slate-900 font-medium tracking-wide uppercase font-sans">
<iconify-icon className="text-cyan-600 mr-4" icon="lucide:check" strokeWidth="2" width="18"></iconify-icon>
                Sound-isolated treatment rooms
              </li>
<li className="flex items-center text-sm text-slate-900 font-medium tracking-wide uppercase font-sans">
<iconify-icon className="text-cyan-600 mr-4" icon="lucide:check" strokeWidth="2" width="18"></iconify-icon>
                Post-session herbal tea service
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="mb-12 animate-on-scroll">
<div className="w-12 h-[1px] bg-cyan-500 mb-4"></div>
<p className="text-sm text-slate-500 font-light max-w-lg font-sans">
            Integrated elements within each session, tailored to your nervous
            system and needs.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-12">
<div className="group flex flex-col items-start p-2 hover:bg-slate-50 transition-colors duration-300 rounded-sm animate-on-scroll">
<span className="block text-xs font-mono text-cyan-600 mb-4 font-sans">
              01
            </span>
<h4 className="text-lg font-medium text-slate-900 mb-2 tracking-tight font-sans">
              Breathwork
            </h4>
<p className="text-xs text-slate-500 uppercase tracking-wide font-sans">
              Guided breathing as needed.
            </p>
</div>
<div className="group flex flex-col items-start p-2 hover:bg-slate-50 transition-colors duration-300 rounded-sm animate-on-scroll">
<span className="block text-xs font-mono text-cyan-600 mb-4 font-sans">
              02
            </span>
<h4 className="text-lg font-medium text-slate-900 mb-2 tracking-tight font-sans">
              Mobility
            </h4>
<p className="text-xs text-slate-500 uppercase tracking-wide font-sans">
              Restore natural range of motion.
            </p>
</div>
<div className="group flex flex-col items-start p-2 hover:bg-slate-50 transition-colors duration-300 rounded-sm animate-on-scroll">
<span className="block text-xs font-mono text-cyan-600 mb-4 font-sans">
              03
            </span>
<h4 className="text-lg font-medium text-slate-900 mb-2 tracking-tight font-sans">
              Circulation
            </h4>
<p className="text-xs text-slate-500 uppercase tracking-wide font-sans">
              Enhance blood flow and recovery.
            </p>
</div>
<div className="group flex flex-col items-start p-2 hover:bg-slate-50 transition-colors duration-300 rounded-sm animate-on-scroll">
<span className="block text-xs font-mono text-cyan-600 mb-4 font-sans">
              04
            </span>
<h4 className="text-lg font-medium text-slate-900 mb-2 tracking-tight font-sans">
              Decompression
            </h4>
<p className="text-xs text-slate-500 uppercase tracking-wide font-sans">
              Mental reset through stillness.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 text-slate-200" id="about">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 animate-on-scroll">
<img alt="Practitioner" className="w-full h-[600px] object-cover rounded-sm opacity-80 contrast-125 rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3dc2c9bb-0915-48bd-a3dd-8286870191c8_3840w.jpg?w=800&amp;q=80"/>
</div>
<div className="lg:col-span-7 flex flex-col justify-center animate-on-scroll">
<div className="flex items-center gap-2 mb-8">
<iconify-icon className="text-cyan-600" icon="lucide:diamond" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs text-slate-400 font-medium uppercase tracking-widest font-sans">
                The Philosophy
              </span>
</div>
<h2 className="text-4xl md:text-6xl tracking-tighter text-white leading-[1.1] mb-8 font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              Founded on
              <span className="text-white/50 font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
                patience.
              </span>
</h2>
<p className="text-xl text-slate-400 font-light leading-relaxed mb-8 max-w-xl font-sans">
              "We approach the body not as a problem to be fixed, but as a
              system to be heard. True restoration happens when we stop forcing
              and start listening."
            </p>
<p className="text-sm text-slate-500 font-mono uppercase tracking-widest mb-12 font-sans">
              Licensed Massage Therapist with 10+ years of clinical and somatic
              training.
            </p>
<div className="flex items-center gap-4 border-t border-white/10 pt-8">
<span className="text-xs text-white font-bold uppercase tracking-widest font-sans">
                Elena Ross
              </span>
<span className="text-xs text-slate-500 uppercase tracking-widest font-sans">
                Lead Therapist
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="pricing">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 animate-on-scroll">
<div className="max-w-xl">
<span className="text-xs text-cyan-700 font-bold uppercase tracking-widest mb-4 block font-sans">
              Membership
            </span>
<h2 className="text-4xl text-slate-900 tracking-tighter font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              Wellness Plans
            </h2>
</div>
<p className="text-sm text-slate-500 font-light mt-4 md:mt-0 text-right font-sans">
            Regular bodywork creates
            <br/>
            deeper, longer-lasting change.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="hover:border-slate-900 transition-colors animate-on-scroll bg-cover bg-center border-slate-200 border rounded-sm pt-10 pr-10 pb-10 pl-10" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.20)), url(\'https: //hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46916c7a-828c-4b95-826f-b7af016e08fb_1600w.jpg\')'}}>
<h3 className="text-lg font-medium text-slate-900 mb-1 uppercase tracking-wide font-sans">
              Essential
            </h3>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mb-8 font-sans">
              Maintenance &amp; upkeep
            </p>
<div className="text-4xl text-slate-900 mb-8 tracking-tighter font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              $95
              <span className="text-xs text-slate-400 font-normal tracking-normal align-top mt-1 inline-block font-sans">
                /mo
              </span>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center text-xs text-slate-600 uppercase tracking-wider font-sans">
<iconify-icon className="text-slate-400 mr-3" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                1 x 60min Session
              </li>
<li className="flex items-center text-xs text-slate-600 uppercase tracking-wider font-sans">
<iconify-icon className="text-slate-400 mr-3" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                5% off Retail
              </li>
</ul>
<button className="w-full py-4 border border-slate-200 text-slate-900 text-[10px] uppercase font-bold tracking-widest hover:bg-slate-900 hover:text-white transition-all rounded-sm font-sans rounded-xl">
              Select
            </button>
</div>

<div className="shadow-slate-900/10 animate-on-scroll text-white bg-slate-900 bg-cover bg-center rounded-sm pt-10 pr-10 pb-10 pl-10 relative shadow-2xl" style={{backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.10)), url(\'https: //hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c97513ff-e6a8-4f4d-b276-8d1de935740f_1600w.jpg\')'}}>
<div className="absolute top-0 right-0 -mt-3 mr-6 bg-cyan-500 text-black text-[9px] uppercase font-bold px-3 py-1.5 rounded-sm tracking-widest font-sans">
              Recommended
            </div>
<h3 className="text-lg font-medium text-white mb-1 uppercase tracking-wide font-sans">
              Restore
            </h3>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mb-8 font-sans">
              Deep recovery
            </p>
<div className="text-4xl text-white mb-8 tracking-tighter font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              $180
              <span className="text-xs text-slate-500 font-normal tracking-normal align-top mt-1 inline-block font-sans">
                /mo
              </span>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center text-xs text-slate-300 uppercase tracking-wider font-sans">
<iconify-icon className="text-cyan-500 mr-3" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                2 x 60min Sessions
              </li>
<li className="flex items-center text-xs text-slate-300 uppercase tracking-wider font-sans">
<iconify-icon className="text-cyan-500 mr-3" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                Priority Booking
              </li>
<li className="flex items-center text-xs text-slate-300 uppercase tracking-wider font-sans">
<iconify-icon className="text-cyan-500 mr-3" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                10% off Retail
              </li>
</ul>
<button className="w-full py-4 bg-cyan-50 text-slate-950 text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-colors rounded-sm font-sans">
              Select
            </button>
</div>

<div className="hover:border-slate-900 transition-colors animate-on-scroll bg-cover bg-center border-slate-200 border rounded-sm pt-10 pr-10 pb-10 pl-10" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.20)), url(\'https: //hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c396622e-2acf-40fd-a5de-4e0448603187_1600w.jpg\')'}}>
<h3 className="text-lg font-medium text-slate-900 mb-1 uppercase tracking-wide font-sans">
              Transform
            </h3>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mb-8 font-sans">
              Complete reset
            </p>
<div className="text-4xl text-slate-900 mb-8 tracking-tighter font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              $260
              <span className="text-xs text-slate-400 font-normal tracking-normal align-top mt-1 inline-block font-sans">
                /mo
              </span>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center text-xs text-slate-600 uppercase tracking-wider font-sans">
<iconify-icon className="text-slate-400 mr-3" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                3 x 60min Sessions
              </li>
<li className="flex items-center text-xs text-slate-600 uppercase tracking-wider font-sans">
<iconify-icon className="text-slate-400 mr-3" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                Access to events
              </li>
</ul>
<button className="w-full py-4 border border-slate-200 text-slate-900 text-[10px] uppercase font-bold tracking-widest hover:bg-slate-900 hover:text-white transition-all rounded-sm font-sans">
              Select
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
<iconify-icon className="text-cyan-500 mb-8" icon="lucide:quote" strokeWidth="1" width="40"></iconify-icon>
<p className="text-2xl md:text-4xl text-slate-900 leading-tight mb-10 tracking-tight font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
            "The most thoughtful bodywork I have experienced in the city. The
            studio feels like a sanctuary—quiet, purposeful, and genuinely
            calming."
          </p>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-sm overflow-hidden border border-slate-200 rounded-2xl">
<img alt="Client Sarah J." className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d6c3d87-38bf-48b7-af46-5f588f27574f_320w.webp"/>
</div>
<div className="text-left">
<div className="text-xs font-bold text-slate-900 uppercase tracking-widest font-sans">
                Sarah J.
              </div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest font-sans">
                Client since 2021
              </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-sm bg-white border border-slate-100 hover:border-slate-300 transition-all animate-on-scroll rounded-2xl">
<p className="text-sm text-slate-600 leading-relaxed mb-6 font-light font-sans">
              "I came in for shoulder pain and left feeling like my whole system
              had softened. The pressure was precise, never rushed."
            </p>
<div className="text-[10px] text-cyan-600 uppercase tracking-widest font-bold font-sans">
              Client — recovery
            </div>
</div>
<div className="p-8 rounded-sm bg-white border border-slate-100 hover:border-slate-300 transition-all animate-on-scroll">
<p className="text-sm text-slate-600 leading-relaxed mb-6 font-light font-sans">
              "The best part is how safe it feels. Clear communication, quiet
              rooms, and I sleep better every time I book."
            </p>
<div className="text-[10px] text-cyan-600 uppercase tracking-widest font-bold font-sans">
              Client — sleep
            </div>
</div>
<div className="p-8 rounded-sm bg-white border border-slate-100 hover:border-slate-300 transition-all animate-on-scroll">
<p className="text-sm text-slate-600 leading-relaxed mb-6 font-light font-sans">
              "Craniosacral sessions helped me reset during a hard season.
              Gentle, grounding, and deeply restorative."
            </p>
<div className="text-[10px] text-cyan-600 uppercase tracking-widest font-bold font-sans">
              Client — nervous system
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="p-10 rounded-sm bg-slate-50 border border-slate-100 animate-on-scroll rounded-2xl">
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-6 font-sans">
              This is for you if
            </h3>
<ul className="space-y-4">
<li className="flex items-start text-sm text-slate-600 font-light font-sans">
<iconify-icon className="text-cyan-500 mr-4 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                You hold stress in your neck, jaw, shoulders, or low back.
              </li>
<li className="flex items-start text-sm text-slate-600 font-light font-sans">
<iconify-icon className="text-cyan-500 mr-4 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                You want skilled touch with calm pacing and clear communication.
              </li>
<li className="flex items-start text-sm text-slate-600 font-light font-sans">
<iconify-icon className="text-cyan-500 mr-4 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                You’re recovering from high stress, training load, or long hours
                at a desk.
              </li>
</ul>
</div>
<div className="p-10 rounded-sm bg-white border border-slate-200 animate-on-scroll">
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-6 font-sans">
              This may not be a fit if
            </h3>
<ul className="space-y-4">
<li className="flex items-start text-sm text-slate-600 font-light font-sans">
<iconify-icon className="text-slate-300 mr-4 mt-0.5" icon="lucide:minus" strokeWidth="1.5" width="16"></iconify-icon>
                You’re looking for a quick, high-turnover spa experience.
              </li>
<li className="flex items-start text-sm text-slate-600 font-light font-sans">
<iconify-icon className="text-slate-300 mr-4 mt-0.5" icon="lucide:minus" strokeWidth="1.5" width="16"></iconify-icon>
                You want intense pressure without check-ins or tailoring.
              </li>
<li className="flex items-start text-sm text-slate-600 font-light font-sans">
<iconify-icon className="text-slate-300 mr-4 mt-0.5" icon="lucide:minus" strokeWidth="1.5" width="16"></iconify-icon>
                You need emergency or acute medical care (we can refer out).
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-on-scroll">
<div>
<span className="text-xs text-cyan-700 font-bold uppercase tracking-widest mb-4 block font-sans">
              Information
            </span>
<h2 className="text-4xl text-slate-900 tracking-tighter font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              Common Questions
            </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 rounded-sm bg-slate-50 border border-slate-100 animate-on-scroll">
<h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide font-sans">
              What should I wear?
            </h4>
<p className="text-sm text-slate-500 leading-relaxed font-light font-sans">
              Whatever you’re comfortable arriving in. You’ll have privacy to
              undress to your preferred level; draping is always secure.
            </p>
</div>
<div className="p-8 rounded-sm bg-slate-50 border border-slate-100 animate-on-scroll">
<h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide font-sans">
              Will it hurt?
            </h4>
<p className="text-sm text-slate-500 leading-relaxed font-light font-sans">
              No “push through it” work. We use pressure that is effective,
              communicative, and within your nervous system’s comfort.
            </p>
</div>
<div className="p-8 rounded-sm bg-slate-50 border border-slate-100 animate-on-scroll">
<h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide font-sans">
              Is this good for first-timers?
            </h4>
<p className="text-sm text-slate-500 leading-relaxed font-light font-sans">
              Yes. We begin with a brief intake and adjust pacing, pressure, and
              techniques to match what you need that day.
            </p>
</div>
<div className="p-8 rounded-sm bg-slate-50 border border-slate-100 animate-on-scroll">
<h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide font-sans">
              Cancellation policy?
            </h4>
<p className="text-sm text-slate-500 leading-relaxed font-light font-sans">
              We ask for 24 hours notice for changes or cancellations so we can
              offer the time to another client.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="book">
<div className="max-w-screen-2xl mx-auto">
<div className="relative rounded-sm p-16 md:p-24 border border-slate-800 text-center animate-on-scroll rounded-2xl overflow-hidden" style={{backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url(\'https: //hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec98cf5f-b17c-4041-8da0-e229cbdc6689_3840w.jpg?w=800&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl text-white tracking-tighter mb-8 font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
              Make space for
              <span className="text-cyan-400 font-google-sans-flex font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
                yourself.
              </span>
</h2>
<p className="text-slate-300 mb-12 text-lg font-light max-w-lg mx-auto font-sans">
              Appointments available Monday through Saturday.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-6">
<button className="flex items-center gap-3 bg-cyan-50 text-slate-900 px-10 py-5 rounded-sm hover:bg-white transition shadow-xl shadow-black/20 justify-center rounded-full">
<div className="text-left">
<div className="text-[10px] uppercase tracking-widest leading-none text-slate-500 mb-1 font-sans">
                    Book Online
                  </div>
<div className="text-sm font-bold leading-none font-sans">
                    Schedule Session
                  </div>
</div>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<p className="mt-8 text-[10px] text-slate-400 uppercase tracking-widest font-medium font-sans">
              Located in your city · Easy online booking · 24h cancellation
            </p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-xs text-slate-500 mb-16 border-t border-white/5 pt-12 uppercase tracking-widest font-medium">
<div className="flex flex-col gap-6">
<span className="text-white mb-2 font-sans">Studio</span>
<a className="hover:text-cyan-400 transition font-sans" href="#services">
              Services
            </a>
<a className="hover:text-cyan-400 transition font-sans" href="#pricing">
              Membership
            </a>
<a className="hover:text-cyan-400 transition font-sans" href="#">
              Gift Cards
            </a>
</div>
<div className="flex flex-col gap-6">
<span className="text-white mb-2 font-sans">Connect</span>
<a className="hover:text-cyan-400 transition font-sans" href="#">
              Instagram
            </a>
<a className="hover:text-cyan-400 transition font-sans" href="#">
              Email
            </a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-widest">
<div className="font-sans">
            © 2024 Somatic Studio. All Rights Reserved.
          </div>
<div className="flex gap-8 mt-4 md:mt-0">
<span className="hover:text-white cursor-pointer transition font-sans">
              Privacy Policy
            </span>
<span className="hover:text-white cursor-pointer transition font-sans">
              Terms of Service
            </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
