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



      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white uppercase flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center bg-white/5 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
<span className="iconify group-hover:-rotate-12 transition-transform duration-500" data-icon="lucide:scissors" data-width="14"></span>
</div>
          Inci Lounge
        </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors duration-200" href="#experience">
            The Lounge
          </a>
<a className="hover:text-white transition-colors duration-200" href="#masters">
            Masters
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-all duration-200 hover:scale-[1.02]" href="#book">
            Book Appointment
          </a>
<button className="md:hidden text-white p-2">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</div>
</nav>

<header className="relative min-h-[110vh] flex flex-col justify-center items-center pt-20 overflow-hidden bg-black">

<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none"></div>

<div className="absolute top-1/4 left-10 md:left-20 w-32 h-32 border border-white/5 rounded-full animate-float opacity-30 blur-[1px]"></div>
<div className="absolute bottom-1/4 right-10 md:right-20 w-48 h-48 border border-white/5 rounded-full animate-float opacity-30 blur-[2px]" style={{animationDelay: '-2s'}}></div>

<div className="hidden lg:block absolute left-[5%] top-[25%] z-0 reveal delay-500 pointer-events-auto">
<div className="w-52 h-72 rounded-xl border border-white/10 overflow-hidden animate-float rotate-[-6deg] hover:rotate-0 transition-transform duration-700 shadow-2xl group grayscale hover:grayscale-0">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Barber Cut" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110" src="https://images.unsplash.com/photo-1605497788044-5a90406432b5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="hidden lg:block absolute right-[5%] bottom-[20%] z-0 reveal delay-700 pointer-events-auto">
<div className="w-60 h-80 rounded-xl border border-white/10 overflow-hidden animate-float rotate-[6deg] hover:rotate-0 transition-transform duration-700 shadow-2xl group grayscale hover:grayscale-0" style={{animationDelay: '2s'}}>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Haircut" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110" src="https://images.unsplash.com/photo-1512690459411-b9245aed1dad?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 mt-10">
<div className="reveal active inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-semibold text-zinc-300 tracking-wide uppercase">
            Available Today
          </span>
</div>
<h1 className="reveal active delay-100 text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-gradient">
          Refine Your
          <br/>
          Aesthetic.
        </h1>
<p className="reveal active delay-200 text-lg md:text-xl text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
          Precision grooming for the modern gentleman.
          <br className="hidden md:block"/>
          Experience the art of the cut in a sanctuary of style.
        </p>
<div className="reveal active delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105">
            Book Now
          </button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md text-zinc-300 text-xs font-semibold hover:bg-zinc-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:border-zinc-600">
<span className="iconify" data-icon="lucide:play-circle" data-width="14"></span>
            The Film
          </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce">
<span className="iconify" data-icon="lucide:arrow-down" data-width="20"></span>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
</header>

<section className="border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="reveal space-y-1 text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
            4.9
            <span className="text-zinc-600 text-lg">/ 5</span>
</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
            Google Rating
          </p>
</div>
<div className="reveal delay-100 space-y-1 text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight text-white">12k+</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
            Cuts Delivered
          </p>
</div>
<div className="reveal delay-200 space-y-1 text-center md:text-left">
<div className="flex items-center justify-center md:justify-start -space-x-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black"></div>
<div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-black"></div>
<div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-black"></div>
</div>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium pl-1">
            Master Barbers
          </p>
</div>
<div className="reveal delay-300 space-y-1 text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight text-white">100%</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
            Satisfaction
          </p>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6 relative" id="services">
<div className="absolute left-0 top-1/4 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            The Menu
          </h2>
<p className="text-zinc-400 font-light max-w-md text-sm leading-relaxed">
            Curated services designed to enhance your natural look with
            precision and care.
          </p>
</div>
<a className="group text-xs text-zinc-400 flex items-center gap-2 hover:text-white transition-colors" href="#">
          View full price list
          <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal group glass-panel rounded-2xl p-8 cursor-pointer relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-4">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="relative w-12 h-12 bg-gradient-to-br from-zinc-800 to-black rounded-xl border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
<span className="iconify text-white" data-icon="lucide:scissors" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Signature Cut</h3>
<p className="text-zinc-500 text-xs leading-relaxed mb-8 font-light">
            Consultation, wash, precision cut, and styling with premium
            products.
          </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<span className="text-xs font-medium text-zinc-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span>
              45 mins
            </span>
<span className="text-sm font-semibold text-white">$45</span>
</div>
</div>

<div className="reveal delay-100 group glass-panel rounded-2xl p-8 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-4">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="relative w-12 h-12 bg-gradient-to-br from-zinc-800 to-black rounded-xl border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
<span className="iconify text-white" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Beard Sculpting</h3>
<p className="text-zinc-500 text-xs leading-relaxed mb-8 font-light">
            Hot towel treatment, razor lining, trimming and beard oil
            application.
          </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<span className="text-xs font-medium text-zinc-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span>
              30 mins
            </span>
<span className="text-sm font-semibold text-white">$30</span>
</div>
</div>

<div className="reveal delay-200 group glass-panel rounded-2xl p-8 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-4">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="relative w-12 h-12 bg-gradient-to-br from-zinc-800 to-black rounded-xl border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
<span className="iconify text-white" data-icon="lucide:crown" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">
            The Royal Treatment
          </h3>
<p className="text-zinc-500 text-xs leading-relaxed mb-8 font-light">
            The full experience. Haircut, beard sculpt, facial scrub, and
            massage.
          </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<span className="text-xs font-medium text-zinc-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span>
              90 mins
            </span>
<span className="text-sm font-semibold text-white">$90</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5 overflow-hidden" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-8 z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              Atmosphere of
              <br/>
<span className="text-zinc-500">calm and craft.</span>
</h2>
<p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
              Step into a space designed for relaxation. Inci Lounge combines
              industrial chic with warm, inviting textures. Enjoy a
              complimentary espresso or bourbon while our masters work their
              magic.
            </p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify text-zinc-300" data-icon="lucide:coffee" data-width="18"></span>
<span className="text-zinc-300 text-xs">Beverage Bar</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify text-zinc-300" data-icon="lucide:wifi" data-width="18"></span>
<span className="text-zinc-300 text-xs">High-Speed Wifi</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify text-zinc-300" data-icon="lucide:music" data-width="18"></span>
<span className="text-zinc-300 text-xs">Curated Playlist</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify text-zinc-300" data-icon="lucide:armchair" data-width="18"></span>
<span className="text-zinc-300 text-xs">VIP Lounge</span>
</div>
</div>
</div>

<div className="reveal delay-200 relative h-[600px] w-full">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 z-20 rounded-2xl overflow-hidden border-4 border-black shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
<img alt="Barber Main" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503951914875-befbb6470521?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-0 right-10 w-48 h-64 z-10 rounded-xl overflow-hidden opacity-60 border border-white/10 animate-float" style={{animationDuration: '8s'}}>
<img alt="Interior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1599351431202-6e0000a4d33a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-10 left-0 w-56 h-48 z-10 rounded-xl overflow-hidden opacity-60 border border-white/10 animate-float" style={{animationDuration: '7s', animationDelay: '1s'}}>
<img alt="Tools" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none animate-spin" style={{animationDuration: '30s', animationTimingFunction: 'linear'}}></div>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-4xl mx-auto px-6" id="book">
<div className="reveal glass-panel rounded-3xl p-1 relative overflow-hidden group">

<div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="bg-black/80 rounded-[22px] p-8 md:p-16 border border-white/5 relative z-10 flex flex-col items-center text-center space-y-8">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
<div className="relative">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-2 mx-auto shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<span className="iconify text-white" data-icon="lucide:calendar-check" data-width="28"></span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Ready for an upgrade?
            </h2>
<p className="text-zinc-400 font-light text-sm max-w-lg mx-auto">
              Secure your spot with one of our master barbers. Walk-ins welcome,
              appointments prioritized.
            </p>
</div>

<div className="w-full max-w-md mx-auto p-1.5 bg-zinc-900/80 border border-white/10 rounded-xl flex flex-col sm:flex-row items-center gap-1.5 backdrop-blur-md">
<div className="relative w-full group/input">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<span className="iconify text-zinc-500 group-hover/input:text-white transition-colors" data-icon="lucide:map-pin" data-width="16"></span>
</div>
<select className="w-full bg-transparent text-xs text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none appearance-none cursor-pointer hover:bg-white/5 transition-colors">
<option className="bg-zinc-900">Inci Lounge - Downtown</option>
<option className="bg-zinc-900">Inci Lounge - Westside</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
<span className="iconify text-zinc-500" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
<button className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-zinc-200 text-black text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-white/5">
              Check Availability
            </button>
</div>
<div className="flex items-center gap-6 pt-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500">
                Instant Confirm
              </span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500">
                Free Cancel
              </span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div className="space-y-6 max-w-sm">
<a className="text-xl font-medium tracking-tighter text-white uppercase flex items-center gap-2" href="#">
<span className="iconify" data-icon="lucide:scissors" data-width="24"></span>
              Inci Lounge
            </a>
<p className="text-zinc-500 text-sm font-light leading-relaxed">
              Redefining the grooming experience for the modern man. Precision,
              style, and relaxation in every visit.
            </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-medium mb-6 text-sm">Navigation</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Home
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Services
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Gallery
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Book Now
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Visit Us</h4>
<address className="not-italic text-sm text-zinc-500 space-y-3">
<p>128 High Street Avenue</p>
<p>New York, NY 10013</p>
<p className="text-white pt-2">mon-sat: 10am - 9pm</p>
<p className="text-white">sun: closed</p>
</address>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-[10px] text-zinc-600 uppercase tracking-widest">
            © 2024 Inci Lounge. All rights reserved.
          </p>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="text-zinc-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-zinc-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="18"></span>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
