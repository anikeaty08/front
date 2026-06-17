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
        const menuBtn = document.getElementById('menuBtn');
        const closeMenu = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
        });
        
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
        
        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b bg-slate-950/90 border-slate-800/50" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="text-lg font-semibold tracking-tight font-geist-mono" href="#" style={{}}>SANGITA</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors font-geist-mono text-slate-400 hover:text-slate-100" href="#about" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>About</a>
<a className="text-sm transition-colors font-geist-mono text-slate-400 hover:text-slate-100" href="#portfolio" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Portfolio</a>
<a className="text-sm transition-colors font-geist-mono text-slate-400 hover:text-slate-100" href="#stats" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Stats</a>
<a className="text-sm transition-colors font-geist-mono text-slate-400 hover:text-slate-100" href="#contact" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm hover:text-rose-500 transition-colors font-geist-mono text-slate-400" href="https://instagram.com/selfo_bsessed14" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}} target="_blank">
<svg aria-hidden="true" data-height="18" data-icon="lucide:instagram" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
                    @selfo_bsessed14
                </a>
<button className="md:hidden p-2 -mr-2" id="menuBtn">
<svg aria-hidden="true" data-height="20" data-icon="lucide:menu" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 hidden flex-col items-center justify-center gap-8 bg-slate-950" id="mobileMenu" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<a className="text-2xl font-geist-mono font-semibold text-slate-100" href="#about" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>About</a>
<a className="text-2xl font-geist-mono font-semibold text-slate-100" href="#portfolio" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Portfolio</a>
<a className="text-2xl font-geist-mono font-semibold text-slate-100" href="#stats" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Stats</a>
<a className="text-2xl font-geist-mono font-semibold text-slate-100" href="#contact" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Contact</a>
<a className="text-lg text-rose-500 font-geist-mono" href="https://instagram.com/selfo_bsessed14" style={{}} target="_blank">@selfo_bsessed14</a>
<button className="absolute top-5 right-6 p-2" id="closeMenu">
<svg aria-hidden="true" data-height="24" data-icon="lucide:x" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<section className="min-h-screen flex items-center pt-16">
<div className="lg:px-8 lg:py-24 w-full max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 gap-x-12 gap-y-12 items-center">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-2 mb-6">
<span className="w-8 h-px bg-rose-600" style={{}}></span>
<p className="text-sm font-medium text-rose-500 uppercase tracking-wider font-geist-mono" style={{}}>Model &amp; Influencer</p>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none mb-6 font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>
                        Sangita<br/>
<span className="font-semibold text-slate-600 font-geist-mono border-slate-50" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Prajapati</span>
</h1>
<p className="text-lg font-light leading-relaxed mb-8 max-w-md font-geist-mono text-slate-400" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
                        Confident and expressive model with a strong presence in fashion and lifestyle shoots. Based in Chandrapur, Maharashtra.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium transition-colors font-geist-mono text-black bg-slate-100 hover:bg-slate-200" href="#contact" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
                            Book Now
                            <svg aria-hidden="true" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex items-center gap-2 border px-6 py-3.5 text-sm font-medium hover:text-rose-500 transition-colors font-geist-mono hover:border-rose-600 border-slate-700" href="https://instagram.com/selfo_bsessed14" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}} target="_blank">
<svg aria-hidden="true" data-height="16" data-icon="lucide:instagram" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
                            Follow on Instagram
                        </a>
</div>

<div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div>
<p className="text-2xl tracking-tight font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>5'2"</p>
<p className="text-xs mt-1 uppercase tracking-wider text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Height</p>
</div>
<div>
<p className="text-2xl tracking-tight font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>India</p>
<p className="text-xs mt-1 uppercase tracking-wider text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Nationality</p>
</div>
<div>
<p className="text-2xl tracking-tight font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>Fashion</p>
<p className="text-xs mt-1 uppercase tracking-wider text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Specialty</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative">
<div className="aspect-[3/4] bg-gradient-to-br overflow-hidden from-rose-900 to-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<img alt="Sangita Prajapati" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f63a04c-4525-4c0d-ae34-377a96d8e987_1600w.jpg"/>
</div>
<div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 p-4 lg:p-5 shadow-xl border bg-black border-slate-900" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center from-rose-600 to-amber-600" style={{}}>
<svg aria-hidden="true" data-height="18" data-icon="lucide:instagram" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</div>
<div>
<p className="text-xs text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Instagram</p>
<p className="text-sm font-medium font-geist-mono" style={{}}>@selfo_bsessed14</p>
</div>
</div>
</div>
<div className="absolute top-4 left-4 lg:top-6 lg:left-6">
<div className="backdrop-blur-sm px-3 py-1.5 text-xs font-medium font-geist-mono bg-black/90 text-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
                                📍 Chandrapur, MH
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-28 pt-20 pb-20 bg-black" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 gap-x-12 gap-y-12 items-center">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="w-8 h-px bg-rose-600" style={{}}></span>
<p className="text-sm font-medium text-rose-500 uppercase tracking-wider font-geist-mono" style={{}}>About Me</p>
</div>
<h2 className="text-3xl lg:text-4xl tracking-tight mb-6 font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>
                        Expressing confidence through every frame
                    </h2>
<p className="font-light leading-relaxed mb-6 font-geist-mono text-slate-400" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
                        Sangita Prajapati is a confident and expressive model with a strong presence in fashion and lifestyle shoots. Her natural expressions, camera confidence, and versatile looks make her suitable for brand shoots, portfolios, and social media campaigns.
                    </p>
<p className="font-light leading-relaxed mb-8 font-geist-mono text-slate-400" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
                        Based in Chandrapur, Maharashtra, she brings authentic Indian beauty and contemporary style to every project. Her expertise spans across fashion, portrait, lifestyle, and Instagram modeling.
                    </p>

<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 text-sm font-medium font-geist-mono bg-slate-900 text-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Fashion</span>
<span className="px-4 py-2 text-sm font-medium font-geist-mono bg-slate-900 text-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Portrait</span>
<span className="px-4 py-2 text-sm font-medium font-geist-mono bg-slate-900 text-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Lifestyle</span>
<span className="px-4 py-2 text-sm font-medium font-geist-mono bg-rose-950 text-rose-400" style={{}}>Instagram Modeling</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 gap-x-4 gap-y-4">
<div className="aspect-[3/4] overflow-hidden bg-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<img alt="Fashion Shot" className="hover:scale-105 transition-transform duration-700 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8327426f-9af5-49d8-bf35-52c2eb4dfb50_800w.jpg"/>
</div>
<div className="aspect-[3/4] overflow-hidden mt-8 bg-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<img alt="Portrait Shot" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad128127-70fd-4bef-a162-0f3bf65bcb8d_800w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 text-black bg-slate-100" id="stats" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="w-8 h-px bg-rose-600" style={{}}></span>
<p className="text-sm font-medium uppercase tracking-wider font-geist-mono text-rose-600" style={{}}>Physical Stats</p>
<span className="w-8 h-px bg-rose-600" style={{}}></span>
</div>
<h2 className="text-3xl lg:text-4xl tracking-tight font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>Model Statistics</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
<div className="text-center p-6 border transition-colors hover:border-rose-600 border-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-height="28" data-icon="lucide:ruler" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-3xl lg:text-4xl tracking-tight mb-2 font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>5'2"</p>
<p className="text-sm uppercase tracking-wider font-geist-mono text-slate-600" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Height</p>
</div>
<div className="text-center p-6 border transition-colors hover:border-rose-600 border-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-height="28" data-icon="lucide:eye" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
<p className="text-3xl lg:text-4xl tracking-tight mb-2 font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>Hazel</p>
<p className="text-sm uppercase tracking-wider font-geist-mono text-slate-600" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Eye Colour</p>
</div>
<div className="text-center p-6 border transition-colors hover:border-rose-600 border-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-height="28" data-icon="lucide:sparkles" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<p className="text-3xl lg:text-4xl tracking-tight mb-2 font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>Brown</p>
<p className="text-sm uppercase tracking-wider font-geist-mono text-slate-600" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Hair Colour</p>
</div>
<div className="text-center p-6 border transition-colors hover:border-rose-600 border-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-height="28" data-icon="lucide:footprints" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62c-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-3xl lg:text-4xl tracking-tight mb-2 font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>6</p>
<p className="text-sm uppercase tracking-wider font-geist-mono text-slate-600" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Shoe Size</p>
</div>
</div>

<div className="mt-16 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
<div className="flex items-center gap-4 p-4 rounded-sm bg-slate-200/50" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-height="20" data-icon="lucide:map-pin" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<div>
<p className="text-xs uppercase tracking-wider font-geist-mono text-slate-600" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Location</p>
<p className="text-sm font-medium font-geist-mono" style={{}}>Chandrapur, Maharashtra</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-sm bg-slate-200/50" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-height="20" data-icon="lucide:flag" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<p className="text-xs uppercase tracking-wider font-geist-mono text-slate-600" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Nationality</p>
<p className="text-sm font-medium font-geist-mono" style={{}}>Indian</p>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-28 pt-20 pb-20 bg-slate-950" id="portfolio" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-x-4 gap-y-4">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-8 h-px bg-rose-600" style={{}}></span>
<p className="text-sm font-medium text-rose-500 uppercase tracking-wider font-geist-mono" style={{}}>Portfolio</p>
</div>
<h2 className="text-3xl lg:text-4xl tracking-tight font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>Recent Work</h2>
</div>
<a className="text-sm font-medium hover:text-rose-500 inline-flex items-center gap-1 transition-colors font-geist-mono text-slate-400" href="https://instagram.com/selfo_bsessed14" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}} target="_blank">
                    View More on Instagram
                    <svg aria-hidden="true" data-height="14" data-icon="lucide:external-link" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="group cursor-pointer aspect-[3/4] overflow-hidden bg-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<img alt="Fashion" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfe15f97-940a-445b-a043-0a275fddece2_800w.jpg"/>
</div>

<div className="group cursor-pointer aspect-[3/4] overflow-hidden bg-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<img alt="Portrait" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5adc653-3f30-4a3d-9b08-5959ea12dea9_800w.jpg"/>
</div>

<div className="group cursor-pointer aspect-[3/4] overflow-hidden bg-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<img alt="Lifestyle" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd8cbcc6-a6b5-4994-a36e-b2284ce34c72_800w.jpg"/>
</div>

<div className="group cursor-pointer aspect-[3/4] overflow-hidden bg-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<img alt="Fashion" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93cf3198-9e01-4926-9088-2edf981cabf3_800w.jpg"/>
</div>

<div className="group cursor-pointer aspect-[3/4] overflow-hidden bg-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<img alt="Beauty" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d722f2af-f22e-4a49-b53b-aa48f3ac01b5_800w.jpg"/>
</div>

<div className="group cursor-pointer aspect-[3/4] overflow-hidden bg-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<img alt="Editorial" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d064213-c44c-4668-9d3b-97def82cb94f_800w.jpg"/>
</div>

<div className="group cursor-pointer aspect-[3/4] overflow-hidden bg-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<img alt="Casual" className="group-hover:scale-110 transition-transform duration-700 w-full h-f max-w-none max-h-fit object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce060e74-5b9f-40a8-9f2a-cf0ade598fa8_800w.jpg"/>
</div>

<a className="aspect-[3/4] bg-gradient-to-br via-pink-500 flex flex-col items-center justify-center hover:opacity-90 transition-opacity from-rose-600 to-amber-600 text-black" href="https://instagram.com/selfo_bsessed14" style={{}} target="_blank">
<svg aria-hidden="true" className="" data-height="40" data-icon="lucide:instagram" data-width="40" height="40" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
<p className="text-sm font-medium font-geist-mono" style={{}}>Follow for More</p>
<p className="text-xs opacity-80 mt-1 font-geist-mono" style={{}}>@selfo_bsessed14</p>
</a>
</div>
</div>
</section>

<section className="lg:py-28 pt-20 pb-20 bg-black">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12">
<div className="flex mb-4 gap-x-2 gap-y-2 items-center justify-center">
<span className="w-8 h-px bg-rose-600" style={{}}></span>
<p className="text-sm font-medium text-rose-500 uppercase tracking-wider font-geist-mono" style={{}}>Services</p>
<span className="w-8 h-px bg-rose-600" style={{}}></span>
</div>
<h2 className="text-3xl lg:text-4xl tracking-tight font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>Available For</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 border hover:shadow-lg transition-all text-center group hover:border-rose-700 border-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center group-hover:bg-rose-100 transition-colors bg-rose-950" style={{}}>
<svg aria-hidden="true" data-height="24" data-icon="lucide:shirt" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2 font-geist-mono" style={{}}>Fashion Shoots</h3>
<p className="text-sm font-light text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Brand campaigns, lookbooks, and fashion editorials</p>
</div>
<div className="p-6 border hover:shadow-lg transition-all text-center group hover:border-rose-700 border-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center group-hover:bg-rose-100 transition-colors bg-rose-950" style={{}}>
<svg aria-hidden="true" data-height="24" data-icon="lucide:camera" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 font-geist-mono" style={{}}>Portrait Sessions</h3>
<p className="text-sm font-light text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Professional portraits and headshots</p>
</div>
<div className="p-6 border hover:shadow-lg transition-all text-center group hover:border-rose-700 border-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center group-hover:bg-rose-100 transition-colors bg-rose-950" style={{}}>
<svg aria-hidden="true" data-height="24" data-icon="lucide:megaphone" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 font-geist-mono" style={{}}>Brand Collaborations</h3>
<p className="text-sm font-light text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Social media promotions and influencer marketing</p>
</div>
<div className="p-6 border hover:shadow-lg transition-all text-center group hover:border-rose-700 border-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center group-hover:bg-rose-100 transition-colors bg-rose-950" style={{}}>
<svg aria-hidden="true" data-height="24" data-icon="lucide:instagram" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 font-geist-mono" style={{}}>Content Creation</h3>
<p className="text-sm font-light text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Instagram reels, stories, and lifestyle content</p>
</div>
</div>
</div>
</section>

<section className="lg:py-28 bg-slate-900 pt-20 pb-20" id="contact" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="w-8 h-px bg-rose-600" style={{}}></span>
<p className="text-sm font-medium text-rose-500 uppercase tracking-wider font-geist-mono" style={{}}>Contact</p>
</div>
<h2 className="text-3xl lg:text-4xl tracking-tight mb-6 font-geist-mono font-semibold" style={{fontFamily: '"Cormorant Garamond", serif'}}>
                        Let's work together
                    </h2>
<p className="font-light leading-relaxed mb-8 font-geist-mono text-slate-400" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
                        Available for fashion shoots, brand collaborations, and social media campaigns. Reach out to discuss your project.
                    </p>
<div className="space-y-4 mb-8">
<a className="flex items-center gap-4 p-4 border transition-colors group bg-black hover:border-rose-700 border-slate-800" href="https://instagram.com/selfo_bsessed14" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}} target="_blank">
<div className="w-12 h-12 bg-gradient-to-br via-pink-500 flex items-center justify-center from-rose-600 to-amber-600" style={{}}>
<svg aria-hidden="true" data-height="22" data-icon="lucide:instagram" data-width="22" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</div>
<div>
<p className="text-xs uppercase tracking-wider text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Instagram</p>
<p className="text-sm font-medium group-hover:text-rose-500 transition-colors font-geist-mono" style={{}}>@selfo_bsessed14</p>
</div>
<svg aria-hidden="true" data-height="18" data-icon="lucide:arrow-up-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<div className="flex items-center gap-4 p-4 border bg-black border-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="w-12 h-12 flex items-center justify-center bg-slate-100" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-height="22" data-icon="lucide:map-pin" data-width="22" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<p className="text-xs uppercase tracking-wider text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Location</p>
<p className="text-sm font-medium font-geist-mono" style={{}}>Chandrapur, Maharashtra, India</p>
</div>
</div>
</div>
</div>
<form className="p-8 border bg-black border-slate-800" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<h3 className="text-xl font-medium mb-6 font-geist-mono" style={{fontFamily: '"Cormorant Garamond", serif'}}>Send a Message</h3>
<div className="space-y-5">
<div>
<label className="block text-sm font-medium mb-2 font-geist-mono text-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Your Name</label>
<input className="w-full px-4 py-3 border bg-transparent focus:outline-none focus:border-rose-400 transition-colors border-slate-700" placeholder="Full name" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}} type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 font-geist-mono text-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Email Address</label>
<input className="w-full px-4 py-3 border bg-transparent focus:outline-none focus:border-rose-400 transition-colors border-slate-700" placeholder="your@email.com" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}} type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 font-geist-mono text-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Project Type</label>
<input className="w-full px-4 py-3 border bg-transparent focus:outline-none focus:border-rose-400 transition-colors border-slate-700" placeholder="Fashion, Brand Collab, etc." style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}} type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 font-geist-mono text-slate-300" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Message</label>
<textarea className="w-full px-4 py-3 border bg-transparent focus:outline-none focus:border-rose-400 transition-colors resize-none border-slate-700" placeholder="Tell me about your project..." rows="4" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}></textarea>
</div>
<button className="w-full px-6 py-3.5 text-sm font-medium transition-colors flex items-center justify-center gap-2 font-geist-mono text-black bg-slate-100 hover:bg-slate-200" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}} type="submit">
                            Send Inquiry
                            <svg aria-hidden="true" data-height="16" data-icon="lucide:send" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="py-8 text-black bg-slate-100" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-lg font-semibold tracking-tight font-geist-mono" style={{}}>SANGITA</span>
<span className="text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>|</span>
<span className="text-sm font-geist-mono text-slate-600" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Model &amp; Influencer</span>
</div>
<div className="flex items-center gap-6">
<a className="transition-colors hover:text-rose-600 text-slate-600" href="https://instagram.com/selfo_bsessed14" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}} target="_blank">
<svg aria-hidden="true" data-height="20" data-icon="lucide:instagram" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
<div className="mt-6 pt-6 border-t text-center border-slate-200" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>
<p className="text-xs text-slate-500 font-geist-mono" style={{outline: 'rgb(14, 165, 233) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>© 2024 Sangita Prajapati. All rights reserved. 📍 Chandrapur, Maharashtra, India</p>
</div>
</div>
</footer>


    </>
  );
}
