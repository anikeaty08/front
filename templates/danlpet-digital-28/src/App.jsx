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



        // Initialize Icons
        lucide.createIcons();

        // Simple scroll effect for nav
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav div');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg', 'bg-white/95');
                nav.classList.remove('bg-white/80');
            } else {
                nav.classList.remove('shadow-lg', 'bg-white/95');
                nav.classList.add('bg-white/80');
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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300">
<div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-slate-100 rounded-full px-6 py-4 flex justify-between items-center shadow-sm">
<a className="text-2xl font-semibold tracking-tighter flex items-center gap-2 display-font" href="#">
<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">D</div>
                Danlpet
            </a>
<div className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium hover:text-fuchsia-600 transition-colors" href="#work">Work</a>
<a className="text-sm font-medium hover:text-fuchsia-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-fuchsia-600 transition-colors" href="#culture">Culture</a>
</div>
<a className="hidden md:flex group relative px-6 py-2.5 bg-black text-white rounded-full text-sm font-medium overflow-hidden hover:scale-105 transition-transform" href="#contact">
<span className="relative z-10">Let's Talk</span>
<div className="absolute inset-0 bg-fuchsia-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</a>

<button className="md:hidden p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative pt-40 pb-20 px-6 overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[50vw] h-[50vw] bg-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[40vw] h-[40vw] bg-lime-200 rounded-full blur-3xl opacity-40"></div>
<div className="max-w-7xl mx-auto relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wide mb-8 hover:bg-orange-200 transition-colors cursor-default">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce"></span>
                Freshly Baked Code
            </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9] mb-8 text-slate-900">
                We craft <br/>
<span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text italic pr-4">digital joy.</span>
</h1>
<p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
                Danlpet is the creative agency for brands that refuse to be boring. We mix strategy with sparkles to build websites that pop.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<button className="px-8 py-4 bg-slate-900 text-white rounded-full text-lg font-medium hover:bg-fuchsia-500 hover:scale-105 transition-all duration-300 shadow-xl shadow-fuchsia-500/20 flex items-center gap-2">
                    Start a Project
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="play-circle"></i>
                    Showreel
                </button>
</div>
</div>
</header>

<div className="py-12 bg-lime-300 -rotate-1 overflow-hidden border-y-2 border-black">
<div className="whitespace-nowrap flex gap-8 animate-marquee">
<span className="text-4xl font-bold uppercase tracking-tight text-black flex items-center gap-8">
                Strategy <i className="w-8 h-8 fill-black" data-lucide="star"></i>
                Branding <i className="w-8 h-8 fill-black" data-lucide="star"></i>
                Web Design <i className="w-8 h-8 fill-black" data-lucide="star"></i>
                Development <i className="w-8 h-8 fill-black" data-lucide="star"></i>
                Motion <i className="w-8 h-8 fill-black" data-lucide="star"></i>
                Strategy <i className="w-8 h-8 fill-black" data-lucide="star"></i>
                Branding <i className="w-8 h-8 fill-black" data-lucide="star"></i>
                Web Design <i className="w-8 h-8 fill-black" data-lucide="star"></i>
                Development <i className="w-8 h-8 fill-black" data-lucide="star"></i>
                Motion <i className="w-8 h-8 fill-black" data-lucide="star"></i>
</span>
</div>
</div>

<section className="py-24 px-6 bg-white" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">Selected Work</h2>
<p className="text-slate-500 text-lg">Pixels with personality.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-wide border-b border-black pb-1 hover:text-fuchsia-600 hover:border-fuchsia-600 transition-colors" href="#">
                    View All Projects
                    <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 group cursor-pointer">
<div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[4/3] mb-6 hover-pop">

<div className="absolute inset-0 bg-[#E9E4DE] flex items-center justify-center p-12">
<div className="w-full h-full bg-cover bg-center rounded-2xl shadow-lg border border-slate-200/50" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp'}}></div>
</div>
<div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-semibold">Fintech</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold mb-1">Nova Wallet</h3>
<p className="text-slate-500">App Design &amp; Branding</p>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="lg:col-span-4 group cursor-pointer mt-12 md:mt-0">
<div className="relative overflow-hidden rounded-[2.5rem] bg-indigo-100 aspect-[3/4] mb-6 hover-pop">
<div className="absolute inset-0 bg-indigo-500 flex items-center justify-center text-white">
<i className="w-32 h-32 opacity-20 animate-pulse" data-lucide="music"></i>
<span className="absolute text-8xl font-bold tracking-tighter opacity-10 rotate-90 top-10 -right-10">VIBE</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold mb-1">Soundbox</h3>
<p className="text-slate-500">Web Experience</p>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="lg:col-span-5 group cursor-pointer">
<div className="relative overflow-hidden rounded-[2.5rem] bg-rose-100 aspect-[1/1] mb-6 hover-pop">
<div className="absolute inset-0 bg-[#FF6B6B] flex flex-col items-center justify-center p-8 text-white">
<h4 className="text-5xl font-bold tracking-tighter text-center leading-none">YUMMY<br/>GUMMY</h4>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold mb-1">Sweet Tooth</h3>
<p className="text-slate-500">Packaging &amp; 3D</p>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="lg:col-span-7 group cursor-pointer">
<div className="relative overflow-hidden rounded-[2.5rem] bg-teal-50 aspect-[16/10] mb-6 hover-pop">
<div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
<div className="text-center">
<div className="text-6xl mb-2">⚡️</div>
<div className="text-white text-3xl font-semibold tracking-tight">Energy Reborn</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold mb-1">Bolt Energy</h3>
<p className="text-slate-500">Corporate Identity</p>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 rounded-[3rem] mx-4 mb-4" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-fuchsia-600 font-semibold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">We don't just make it look good. We make it work.</h2>
<p className="text-slate-600 text-lg md:text-xl">Combining data-driven strategy with "whoa, that's cool" design.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 group">
<div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="layers"></i>
</div>
<h3 className="text-2xl font-semibold mb-4">Product Design</h3>
<p className="text-slate-500 leading-relaxed mb-8">
                        UI/UX that feels intuitive. We design systems that scale and interfaces that delight users on every click.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i> Design Systems
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i> Prototyping
                        </li>
</ul>
</div>

<div className="bg-slate-900 text-white p-10 rounded-[2rem] shadow-xl transform md:-translate-y-4">
<div className="w-14 h-14 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mb-8 text-fuchsia-400">
<i className="w-7 h-7" data-lucide="code-2"></i>
</div>
<h3 className="text-2xl font-semibold mb-4">Development</h3>
<p className="text-slate-400 leading-relaxed mb-8">
                        Clean code, fast load times, and buttery smooth animations. We build with the latest tech stack.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-300">
<i className="w-4 h-4 text-fuchsia-500" data-lucide="check-circle-2"></i> React &amp; Next.js
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-300">
<i className="w-4 h-4 text-fuchsia-500" data-lucide="check-circle-2"></i> Creative Coding
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-300">
<i className="w-4 h-4 text-fuchsia-500" data-lucide="check-circle-2"></i> Headless CMS
                        </li>
</ul>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 group">
<div className="w-14 h-14 bg-lime-100 rounded-2xl flex items-center justify-center mb-8 text-lime-600 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="megaphone"></i>
</div>
<h3 className="text-2xl font-semibold mb-4">Brand Strategy</h3>
<p className="text-slate-500 leading-relaxed mb-8">
                        Finding your voice in a crowded room. We craft identities that people remember and relate to.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-lime-500" data-lucide="check-circle-2"></i> Visual Identity
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-lime-500" data-lucide="check-circle-2"></i> Tone of Voice
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="p-6">
<div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-teal-400 mb-2 font-display">50+</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Happy Clients</div>
</div>
<div className="p-6">
<div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400 mb-2 font-display">12</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Awards Won</div>
</div>
<div className="p-6">
<div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-yellow-400 mb-2 font-display">∞</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Coffees Drunk</div>
</div>
<div className="p-6">
<div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-400 mb-2 font-display">100%</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Good Vibes</div>
</div>
</div>
</section>

<footer className="bg-black text-white py-24 px-6 rounded-t-[3rem] mt-12 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-indigo-900/50 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none mb-8">
                        Ready to <br/> <span className="text-fuchsia-400">make magic?</span>
</h2>
<p className="text-xl text-slate-400 max-w-md mb-10">
                        Got a crazy idea? We love crazy. Drop us a line and let's build something extraordinary together.
                    </p>
<a className="inline-flex items-center gap-4 text-3xl font-medium border-b-2 border-white/20 pb-2 hover:border-fuchsia-400 hover:text-fuchsia-400 transition-all" href="mailto:hello@danlpet.agency">
                        hello@danlpet.agency
                        <i className="w-8 h-8" data-lucide="send"></i>
</a>
</div>
<div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300 ml-2">Name</label>
<input className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300 ml-2">Email</label>
<input className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-4">
<label className="text-sm font-medium text-slate-300 ml-2">I'm interested in...</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium text-slate-300 peer-checked:bg-fuchsia-500 peer-checked:text-white peer-checked:border-fuchsia-500 transition-all hover:bg-white/20">Web Design</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium text-slate-300 peer-checked:bg-fuchsia-500 peer-checked:text-white peer-checked:border-fuchsia-500 transition-all hover:bg-white/20">Branding</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium text-slate-300 peer-checked:bg-fuchsia-500 peer-checked:text-white peer-checked:border-fuchsia-500 transition-all hover:bg-white/20">Development</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300 ml-2">Message</label>
<textarea className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-fuchsia-400 transition-colors">
                            Send Message
                        </button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-slate-500">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">D</div>
<span className="font-semibold text-white">Danlpet Agency © 2024</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
