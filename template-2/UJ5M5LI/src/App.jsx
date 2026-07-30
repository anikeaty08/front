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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    (function(){const button = document.querySelector('.liquid-glass-button');if(button){button.addEventListener('click', function(e){const rect = this.getBoundingClientRect();const x = e.clientX - rect.left;const y = e.clientY - rect.top;const ripple = document.createElement('span');ripple.className = 'absolute rounded-full bg-gradient-radial from-white/30 to-transparent pointer-events-none animate-ping';ripple.style.left = x - 25 + 'px';ripple.style.top = y - 25 + 'px';ripple.style.width = '50px';ripple.style.height = '50px';ripple.style.animation = 'ripple 0.6s linear';this.appendChild(ripple);setTimeout(() => ripple.remove(), 600);});}})()
  
}

{

        // Parallax effect for background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const bg = document.getElementById('parallax-bg');
            if (bg) {
                const speed = scrolled * 0.5;
                bg.style.transform = `translate3d(0, ${speed}px, 0) scale(1.1)`;
            }
        });

        // Scroll reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });

        // Mobile menu toggle (if needed)
        const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    
}
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
      
<div className="fixed top-0 w-full h-screen bg-center -z-10 parallax-bg bg-cover" id="parallax-bg" style={{backgroundImage: `url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6cc48f7d-8d7c-4a78-b915-6d0d4c0b7b18_3840w.jpg")`, transform: `translate3d(0px, 0px, 0px) scale(1.1)`, opacity: `1`, filter: `blur(0px)`}}></div>

<div className="fixed inset-0 pointer-events-none z-5"></div>

<header className="fixed z-50 w-full left-0 right-0 bg-gray-950/80 border-gray-800 border-b backdrop-blur-xl dynamic-blur-in animate-delay-100">
<div className="w-full sm:px-6 lg:px-8 pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3 group font-geist dynamic-slide-in animate-delay-200" href="#" style={{}}>
<span className="inline-flex h-10 w-10 items-center justify-center group-hover:shadow-xl transition-all duration-300 rounded-2xl shadow-lg">
<svg className="lucide lucide-graduation-cap w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`, width: `32px`, height: `32px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>EduStory AI
                </a>
<nav className="hidden md:flex gap-1 border-0 rounded-full pt-2 pr-2 pb-2 pl-2 items-center dynamic-fade-in animate-delay-300">
<a className="text-sm font-medium text-white bg-[#ffffff]/5 rounded-full pt-2 pr-4 pb-2 pl-4 font-geist" href="#" style={{}}>Create Books</a>
<a className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Curriculum</a>
<a className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Library</a>
<a className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Educators</a>
</nav>
<div className="flex gap-3 items-center dynamic-slide-in-right animate-delay-400">
<button className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px]" type="button">
</button><button className="liquid-glass-button relative inline-flex items-center justify-center h-10 px-6 rounded-xl text-white/90 font-medium text-sm cursor-pointer outline-none overflow-hidden bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/15 shadow-lg hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 active:scale-98 active:translate-y-px transition-all duration-300 ease-out" style={{boxShadow: `0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(255,255,255,0.2), inset -3px -3px 0.5px -3px rgba(255,255,255,0.1), inset 1px 1px 1px -0.5px rgba(255,255,255,0.3), inset -1px -1px 1px -0.5px rgba(255,255,255,0.15), inset 0 0 6px 6px rgba(255,255,255,0.05), inset 0 0 2px 2px rgba(255,255,255,0.02), 0 0 12px rgba(0,0,0,0.1)`}}>
<div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/3"></div>
</div>
<span className="relative z-10 font-geist" style={{}}>Create Book</span>


</button>
</div>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center">

<div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 100%)`}}></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl float"></div>
<div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl float" style={{animationDelay: `-2s`}}></div>
<div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl float" style={{animationDelay: `-4s`}}></div>
</div>
<div className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mt-20 mr-auto ml-auto pr-4 pl-4">
<div className="text-center">
<div className="space-y-8">

<div className="inline-flex gap-2 hover:shadow-xl transition-all duration-300 group cursor-pointer text-sm font-medium bg-gray-900/80 border-gray-700 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg backdrop-blur-sm items-center dynamic-glow-in animate-delay-600">
<div className="w-3 h-3 animate-pulse bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
<span className="font-semibold text-[#ffffff] font-geist" style={{}}>AI-Powered Educational Content</span>
<svg className="lucide lucide-sparkles group-hover:rotate-12 transition-transform duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`, width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</div>

<h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight dynamic-zoom-in animate-delay-700">
<span className="block text-white hero-title tracking-tight font-playfair font-medium" style={{}}>Create Magical</span>
<span className="block hero-gradient-text tracking-tight font-playfair font-medium" style={{}}>Educational Stories</span>
</h1>

<div className="max-w-4xl mx-auto dynamic-fade-in animate-delay-900">
<p className="text-xl sm:text-2xl text-gray-300 leading-relaxed hero-title tracking-tight font-playfair font-medium" style={{}}>
                            Transform learning into <span className="bg-clip-text font-medium tracking-tight font-playfair" style={{}}>epic adventures</span> with AI-powered educational stories that align with curriculum standards and captivate young minds.
                        </p>
</div>

<div className="flex flex-col sm:flex-row gap-6 pt-8 items-center justify-center dynamic-blur-in animate-delay-1100">
<button aria-label="Sign up" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: `linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)`}} type="button">
</button><button className="button" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner font-geist" style={{}}>Start Create Magic<svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
<path className=""></path>
</svg></span>

</button>
<button className="group flex gap-4 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-gray-600 text-lg font-semibold text-gray-300 bg-gray-900/50 border-[#ffffff]/20 border rounded-full pt-3 pr-8 pb-3 pl-8 backdrop-blur-md items-center justify-center">
<span className="font-geist" style={{}}>Watch Demo</span>
</button>
</div>

<section className="max-w-7xl sm:px-6 mt-10 mb-8 pr-4 pl-4 dynamic-slide-in animate-delay-1300">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-3xl backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-6 dynamic-fade-in animate-delay-1400">
<h2 className="text-xl sm:text-2xl text-neutral-100 tracking-tight font-playfair font-medium" style={{}}>Featured Educational Books</h2>
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-sm text-neutral-200 bg-white/5 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3" href="#">
<span className="font-geist" style={{}}>Browse Library</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="group overflow-hidden bg-neutral-900/90 border border-white/10 rounded-xl dynamic-blur-in animate-delay-1500">
<div className="relative aspect-[16/10]">
<img alt="Math Adventure Story" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4776ffe4-9045-48dd-b628-51945ce93830_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 text-[11px] font-medium text-white bg-cyan-600/90 border-white/20 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur-sm font-geist" style={{}}>New</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-base font-semibold tracking-tight text-neutral-100 font-geist" style={{}}>Math Adventure Island</h3>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-graduation-cap w-3.5 h-3.5 stroke-[1.5]" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                  Grade 3 Math
                </p>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-[#ffffff]/60 font-geist" style={{}}>4.9★</div>
<div className="text-[11px] text-neutral-400 font-geist" style={{}}>15 chapters • 30 min read</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 font-geist" style={{}}>
<svg className="lucide lucide-play w-3.5 h-3.5 stroke-[1.5]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                Read Story
              </button>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-200 hover:bg-white/10">
<svg className="lucide lucide-bookmark w-4 h-4 stroke-[1.5]" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
</div>
</article>

<article className="group overflow-hidden bg-neutral-900/90 border border-white/10 rounded-xl dynamic-blur-in animate-delay-1600">
<div className="relative aspect-[16/10]">
<img alt="Science Discovery Story" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e651bbc0-187e-4601-ae9a-5bccbe370cb3_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 text-[11px] font-medium text-[#ffffff] bg-white/20 border-white/20 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur-sm font-geist" style={{}}>Popular</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-base font-semibold tracking-tight text-neutral-100 font-geist" style={{}}>The Solar System Quest</h3>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-telescope w-3.5 h-3.5 stroke-[1.5]" data-lucide="telescope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><circle cx="12" cy="13"></circle></svg>
                  Grade 5 Science
                </p>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-[#ffffff]/60 font-geist" style={{}}>4.8★</div>
<div className="text-[11px] text-neutral-400 font-geist" style={{}}>12 chapters • 25 min read</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 font-geist" style={{}}>
<svg className="lucide lucide-play w-3.5 h-3.5 stroke-[1.5]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                Read Story
              </button>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-200 hover:bg-white/10">
<svg className="lucide lucide-bookmark w-4 h-4 stroke-[1.5]" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
</div>
</article>

<article className="group overflow-hidden bg-neutral-900/90 border border-white/10 rounded-xl dynamic-blur-in animate-delay-1700">
<div className="relative aspect-[16/10]">
<img alt="History Adventure Story" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/23fd9cef-a8ce-4535-8c97-30ae58d52e35_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 text-[11px] font-medium text-[#ffffff] bg-white/20 border-white/20 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur-sm font-geist" style={{}}>Interactive</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-base font-semibold tracking-tight text-neutral-100 font-geist" style={{}}>Ancient Civilizations</h3>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-scroll w-3.5 h-3.5 stroke-[1.5]" data-lucide="scroll" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                  Grade 4 History
                </p>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-[#ffffff]/60 font-geist" style={{}}>4.7★</div>
<div className="text-[11px] text-neutral-400 font-geist" style={{}}>18 chapters • 35 min read</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 font-geist" style={{}}>
<svg className="lucide lucide-play w-3.5 h-3.5 stroke-[1.5]" data-lucide="play" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                Read Story
              </button>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-200 hover:bg-white/10">
<svg className="lucide lucide-bookmark w-4 h-4 stroke-[1.5]" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
</div>
</article>
</div>
</div>
</div>
</section><div className="max-w-4xl bg-white/5 border-white/10 border rounded-3xl mt-16 mr-auto ml-auto pt-2 pr-8 pb-2 pl-8 shadow-xl backdrop-blur-md dynamic-slide-in animate-delay-1800">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="group flex gap-4 hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300 border-0 rounded-2xl pt-6 pr-6 pb-6 pl-6 items-center dynamic-fade-in animate-delay-1900">
<div className="w-px h-6 bg-white/30"></div>
<span className="font-medium text-white/80 font-geist" style={{}}>50+ Curriculum Standards</span>
</div>
<div className="group flex gap-4 hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300 border-0 rounded-2xl pt-6 pr-6 pb-6 pl-6 items-center dynamic-fade-in animate-delay-2000">
<div className="w-px h-6 bg-white/30"></div>
<span className="font-medium text-white/80 font-geist" style={{}}>AI-Generated Illustrations</span>
</div>
<div className="group flex gap-4 hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300 border-0 rounded-2xl pt-6 pr-6 pb-6 pl-6 items-center dynamic-fade-in animate-delay-2100">
<div className="w-px h-6 bg-white/30"></div>
<span className="font-medium text-white/80 font-geist" style={{}}>Interactive Assessments</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 bg-gray-950/90 border-b border-gray-800">
</section>

<section className="relative bg-gray-950 pt-32 pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20 scroll-reveal revealed">
<div className="inline-flex gap-2 text-sm font-medium text-[#ffffff] bg-[#ffffff]/10 border-[#ffffff]/20 border rounded-full mb-6 pt-2 pr-4 pb-2 pl-4 items-center font-geist dynamic-glow-in animate-delay-100" style={{}}>
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className=""></path></svg>
                    Features
                </div>
<h2 className="text-4xl sm:text-6xl mb-6 text-white tracking-tight font-playfair font-medium dynamic-zoom-in animate-delay-200" style={{}}>
                    Everything you need to create
                    <span className="bg-clip-text block font-medium text-transparent tracking-tight font-playfair bg-neutral-50" style={{}}>engaging educational content</span>
</h2>
<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-geist dynamic-fade-in animate-delay-300" style={{}}>Powerful AI tools designed specifically for educators to create curriculum-aligned stories that inspire and educate.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

<div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 rounded-3xl p-8 card-hover group relative overflow-hidden h-full dynamic-slide-in animate-delay-400">
<div className="relative z-10">
<h3 className="text-2xl text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight font-playfair font-medium" style={{}}>AI Content Generation</h3>
<p className="text-gray-400 mb-6 leading-relaxed font-geist" style={{}}>Create compelling educational stories in minutes with our advanced AI that understands curriculum standards and age-appropriate content.</p>
<div className="space-y-4 mb-6">
<div className="flex items-start gap-3 dynamic-fade-in animate-delay-500">
<div className="w-7 h-7 flex text-sm text-gray-300 font-geist bg-gray-900/60 border-white/10 border rounded-full pr-2 pl-2 items-center justify-center">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="">
<h4 className="font-medium text-white text-sm mb-1 font-geist" style={{}}>Curriculum-Aligned Content</h4>
<p className="text-xs text-gray-500 font-geist" style={{}}>Automatically matches Common Core, NGSS, and state standards</p>
</div>
</div>
<div className="flex items-start gap-3 dynamic-fade-in animate-delay-600">
<div className="w-7 h-7 flex text-sm text-gray-300 font-geist bg-gray-900/60 border-white/10 border rounded-full pr-2 pl-2 items-center justify-center">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path className=""></path></svg>
</div>
<div className="">
<h4 className="font-medium text-white text-sm mb-1 font-geist" style={{}}>Customizable Difficulty</h4>
<p className="text-xs text-gray-500 font-geist" style={{}}>Adjust reading level and complexity for any grade</p>
</div>
</div>
<div className="flex items-start gap-3 dynamic-fade-in animate-delay-700">
<div className="w-7 h-7 flex text-sm text-gray-300 font-geist bg-gray-900/60 border-white/10 border rounded-full pr-2 pl-2 items-center justify-center">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="">
<h4 className="font-medium text-white text-sm mb-1 font-geist" style={{}}>Multi-Language Support</h4>
<p className="text-xs text-gray-500 font-geist" style={{}}>Generate stories in over 15 languages instantly</p>
</div>
</div>
<div className="flex items-start gap-3 dynamic-fade-in animate-delay-800">
<div className="w-7 h-7 flex text-sm text-gray-300 font-geist bg-gray-900/60 border-white/10 border rounded-full pr-2 pl-2 items-center justify-center">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="">
<h4 className="font-medium text-white text-sm mb-1 font-geist" style={{}}>Smart Character Creation</h4>
<p className="text-xs text-gray-500 font-geist" style={{}}>AI creates diverse, relatable characters for every story</p>
</div>
</div>
</div>
<div className="bg-gray-800/50 border-gray-700/50 border rounded-2xl mt-8 pt-4 pr-4 pb-4 pl-4 dynamic-glow-in animate-delay-900">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400 font-geist" style={{}}>Generation Speed</span>
<span className="text-sm font-medium text-blue-400 font-geist" style={{}}>{"<"} 2 minutes</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 rounded-3xl p-8 card-hover group relative overflow-hidden dynamic-slide-in animate-delay-600">
<div className="relative z-10">
<h3 className="text-2xl text-white mb-4 group-hover:text-emerald-400 transition-colors tracking-tight font-playfair font-medium" style={{}}>Interactive Elements</h3>
<p className="text-gray-400 mb-6 leading-relaxed font-geist" style={{}}>Engage students with interactive quizzes, clickable elements, and multimedia content that makes learning memorable.</p>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="aspect-square flex group-hover:border-purple-400/40 transition-colors bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c7d7aa55-d7af-49d3-934a-704f98b47fc7_320w.jpg)] bg-cover border-purple-500/20 border rounded-xl items-center justify-center dynamic-zoom-in animate-delay-700" style={{}}>
</div>
<div className="aspect-square flex group-hover:border-blue-400/40 transition-colors bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7a271fd8-bd74-446f-b2f4-edad37b903ff_320w.jpg)] bg-cover border-blue-500/20 border rounded-xl items-center justify-center dynamic-zoom-in animate-delay-800" style={{}}>
</div>
<div className="aspect-square flex group-hover:border-emerald-400/40 transition-colors bg-[url(/assets/a0eec792-9d15-49a5-875b-5578c7bf6f90_320w.jpg)] bg-cover border-emerald-500/20 border rounded-xl items-center justify-center dynamic-zoom-in animate-delay-900" style={{}}>
</div>
<div className="aspect-square flex group-hover:border-orange-400/40 transition-colors bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9fda71de-70e0-43a1-9ab4-658010792f8a_320w.jpg)] bg-cover border-orange-500/20 border rounded-xl items-center justify-center dynamic-zoom-in animate-delay-1000" style={{}}>
</div>
</div>
<div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-4 dynamic-blur-in animate-delay-1100">
<div className="text-sm text-gray-400 mb-2 font-geist" style={{}}>Engagement Rate</div>
<div className="text-2xl text-emerald-400 tracking-tight font-playfair font-medium" style={{}}>94%</div>
<div className="text-xs text-gray-500 font-geist" style={{}}>Average student completion</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 rounded-3xl p-8 card-hover group relative overflow-hidden h-full dynamic-slide-in animate-delay-800">
<div className="relative z-10">
<h3 className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors tracking-tight font-playfair font-medium" style={{}}>Analytics & Assessment</h3>
<p className="text-gray-400 mb-6 leading-relaxed font-geist" style={{}}>Track student progress with detailed analytics and automatically generated assessments that align with your learning objectives.</p>
<div className="space-y-4 mb-6">
<div className="bg-[#ffffff]/10 border-[#ffffff]/20 border rounded-xl pt-4 pr-4 pb-4 pl-4 dynamic-blur-in animate-delay-900">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white font-geist" style={{}}>Reading Comprehension</span>
<span className="text-sm text-[#ffffff] font-geist" style={{}}>85%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="h-2 bg-purple-400 rounded-full" style={{width: `85%`}}></div>
</div>
</div>
<div className="bg-[#ffffff]/10 border-[#ffffff]/20 border rounded-xl pt-4 pr-4 pb-4 pl-4 dynamic-blur-in animate-delay-1000">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white font-geist" style={{}}>Vocabulary Retention</span>
<span className="text-sm text-[#ffffff] font-geist" style={{}}>92%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="h-2 bg-purple-400 rounded-full" style={{width: `92%`}}></div>
</div>
</div>
<div className="bg-[#ffffff]/10 border-[#ffffff]/20 border rounded-xl pt-4 pr-4 pb-4 pl-4 dynamic-blur-in animate-delay-1100">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white font-geist" style={{}}>Critical Thinking</span>
<span className="text-sm text-[#ffffff] font-geist" style={{}}>78%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="h-2 bg-purple-400 rounded-full" style={{width: `78%`}}></div>
</div>
</div>
<div className="bg-gray-800/50 border-gray-700/50 border rounded-xl p-3 mt-4 dynamic-glow-in animate-delay-1200">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-400 font-geist" style={{}}>Active Students Today</span>
<span className="font-semibold text-emerald-400 font-geist" style={{}}>1,247</span>
</div>
<div className="flex items-center justify-between text-xs mt-1">
<span className="text-gray-400 font-geist" style={{}}>Stories Completed</span>
<span className="text-blue-400 font-semibold font-geist" style={{}}>3,891</span>
</div>
</div>
</div>
<button className="bg-[#ffffff]/10 border-[#ffffff]/20 border rounded-xl pt-4 pr-14 pb-4 pl-14 font-geist w-full hover:bg-[#ffffff]/15 transition-colors dynamic-fade-in animate-delay-1300" style={{}}>
                            View Analytics Dashboard
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-gray-900 border-gray-800 border-t pt-32 pb-32">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-3xl pt-2 pr-2 pb-2 pl-2 dynamic-slide-in animate-delay-200">
<div className="relative overflow-hidden aspect-[4/5] rounded-2xl">
<img alt="Process preview" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1169f50-b9f2-45c9-b69e-d93668a3968c_3840w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>
</div>

<div className="">
<div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6 font-geist dynamic-glow-in animate-delay-100" style={{}}>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        How it works
      </div>
<h2 className="text-5xl sm:text-6xl text-white mb-4 tracking-tight font-playfair font-medium dynamic-zoom-in animate-delay-300" style={{}}>Process</h2>
<p className="text-lg text-gray-400 leading-relaxed mb-6 font-geist dynamic-fade-in animate-delay-400" style={{}}>Craft curriculum‑aligned learning experiences through a thoughtful, streamlined flow.</p>
<div className="flex flex-wrap gap-3 mb-8 dynamic-slide-in animate-delay-500">
<button className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900/60 border border-white/20 rounded-full px-4 py-2 hover:bg-gray-800 transition font-geist" style={{}}>
          Start Creating
          <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="inline-flex items-center gap-2 text-sm font-medium text-gray-200 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition font-geist" style={{}}>
          See Projects
          <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</button>
</div>
<div className="space-y-4">

<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 dynamic-blur-in animate-delay-600">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center flex-none">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div className="min-w-0">
<h3 className="text-lg font-medium tracking-tight text-white font-geist" style={{}}>Define Your Content</h3>
<p className="text-gray-400 mt-1 leading-relaxed font-geist" style={{}}>Choose subject, grade, and objectives so we can align perfectly with what you need to teach.</p>
</div>
<div className="ml-auto">
<div className="w-7 h-7 rounded-full bg-gray-900/60 border border-white/10 text-gray-300 text-sm flex items-center justify-center font-geist" style={{}}>1</div>
</div>
</div>
</div>

<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 dynamic-blur-in animate-delay-800">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center flex-none">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="edit" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `18px`, height: `18px`, color: `rgb(243, 244, 246)`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="min-w-0">
<h3 className="text-lg font-medium tracking-tight text-white font-geist" style={{}}>Generate Content</h3>
<p className="leading-relaxed text-gray-400 font-geist mt-1" style={{}}>We produce structured lessons, stories, and activities matched to your selections fast and consistent.</p>
</div>
<div className="ml-auto">
<div className="w-7 h-7 rounded-full bg-gray-900/60 border border-white/10 text-gray-300 text-sm flex items-center justify-center font-geist" style={{}}>2</div>
</div>
</div>
</div>

<div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 dynamic-blur-in animate-delay-1000">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center flex-none">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="share-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `18px`, height: `18px`, color: `rgb(243, 244, 246)`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5"></circle><circle cx="6" cy="12"></circle><circle cx="18" cy="19"></circle><line></line><line></line></svg>
</div>
<div className="min-w-0">
<h3 className="text-lg font-medium tracking-tight text-white font-geist" style={{}}>Customize & Share</h3>
<p className="text-gray-400 mt-1 leading-relaxed font-geist" style={{}}>Edit tone and difficulty, add interactive elements, then publish to any platform or export.</p>
</div>
<div className="ml-auto">
<div className="w-7 h-7 flex text-sm text-gray-300 font-geist bg-gray-900/60 border-white/10 border rounded-full items-center justify-center" style={{}}>3</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-gray-950 pt-32 pb-32">
<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 text-center">
<div className="mx-auto">
<p className="inline-flex gap-2 items-center text-sm font-medium text-[#ffffff] bg-[#ffffff]/10 border-[#ffffff]/20 border rounded-full mb-6 pt-2 pr-4 pb-2 pl-4 font-geist dynamic-glow-in animate-delay-100" style={{}}>What you can create</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight font-geist mb-2 dynamic-zoom-in animate-delay-200">
<span className="text-white tracking-tight font-playfair font-medium" style={{}}>Everything you need to create</span>
<span className="bg-clip-text block font-medium text-transparent tracking-tight font-playfair bg-neutral-50" style={{}}>magical books</span>
</h2>
<p className="mt-3 text-base text-white/70 max-w-3xl mx-auto font-geist dynamic-fade-in animate-delay-300" style={{}}>From AI-powered story generation to interactive illustrations, our platform helps educators create engaging educational books in minutes.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2 dynamic-slide-in animate-delay-400">
<div className="relative">
<img alt="AI Story Generation" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fd33f7c0-8bdf-4f7e-acd9-565ddbebfada_1600w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
</div>
<div className="p-5 sm:p-6">
<div className="flex gap-2 items-center dynamic-fade-in animate-delay-500">
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#ffffff] bg-emerald-500/15 border-[#ffffff]/30 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 font-geist" style={{}}>AI-POWERED</span>
<span className="text-xs text-white/60 font-geist" style={{}}>Instant story creation</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl tracking-tight font-playfair font-medium dynamic-blur-in animate-delay-600" style={{}}>Create stories with AI magic</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-geist dynamic-fade-in animate-delay-700" style={{}}>Generate curriculum-aligned educational stories in seconds. Just tell our AI what you want to teach, and watch as it creates engaging narratives with characters your students will love.</p>
<div className="flex flex-wrap gap-3 mt-5 items-center dynamic-slide-in animate-delay-800">
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-sm font-medium text-white/90 bg-white/5 border-white/10 border rounded-lg pt-2 pr-4 pb-2 pl-4 backdrop-blur font-geist" href="#" style={{}}>
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
            See example books
          </a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-sm font-medium text-white/90 bg-white/5 border-white/10 border rounded-lg pt-2 pr-4 pb-2 pl-4 backdrop-blur font-geist" href="#" style={{}}>
<svg className="lucide lucide-book-plus h-4 w-4" data-lucide="book-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
            Create your first book
          </a>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 dynamic-slide-in-right animate-delay-600">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist" style={{}}>
            
            AI Illustrations
          </h3>
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#ffffff] bg-[#ffffff]/15 border-[#ffffff]/30 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 font-geist" style={{}}>VISUAL</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist" style={{}}>Beautiful, custom illustrations generated for every page. Our AI creates visual content that perfectly matches your story and engages young readers.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 dynamic-zoom-in animate-delay-700">
<img alt="AI Generated Illustrations" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2490a40f-e879-47e0-8a69-d421f1bbc28c_800w.jpg" style={{}} />
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 dynamic-slide-in-right animate-delay-800">
<div className="p-5 sm:p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist" style={{}}>
            
            Curriculum‑aligned
          </h3>
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#ffffff] bg-[#ffffff]/15 border-[#ffffff]/30 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 font-geist" style={{}}>STANDARDS</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist" style={{}}>Every book automatically aligns with educational standards. Choose your grade level and subject to ensure perfect curriculum integration.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 dynamic-zoom-in animate-delay-900">
<img alt="Curriculum Standards" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/11889556-7d38-4c33-9104-e9df1d3e25aa_800w.jpg" />
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 dynamic-blur-in animate-delay-1000">
<div className="p-5 sm:p-6">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist" style={{}}>
          
          Interactive elements
          
        </h3>
<p className="mt-2 text-sm text-white/70 font-geist" style={{}}>Add quizzes, clickable hotspots, and interactive elements to keep students engaged throughout the reading experience.</p>
<div className="bg-gray-800/50 border-gray-700/50 border rounded-xl mt-8 pt-4 pr-4 pb-4 pl-4">
<div className="flex text-xs items-center justify-between">
<span className="text-white/80 font-geist" style={{}}>Student Engagement</span>
<span className="text-emerald-400 font-semibold font-geist" style={{}}>96% Active</span>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl dynamic-blur-in animate-delay-1200">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist" style={{}}>
          
          Instant publishing
        </h3>
<p className="text-sm text-white/70 mt-2 font-geist" style={{}}>Share your books instantly with students via link, embed in your LMS, or export as PDF for printing. sdsfsd</p>
<div className="bg-gray-800/50 border-gray-700/50 border rounded-xl mt-8 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-xs text-white/80 font-geist" style={{}}>
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Ready to share with 1,247 students
          </div>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl dynamic-blur-in animate-delay-1400">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist" style={{}}>
          
          Smart assessments
        </h3>
<p className="mt-2 text-sm text-white/70 font-geist" style={{}}>Automatically generate comprehension questions and track student progress with detailed analytics and insights.</p>
<div className="bg-gray-800/50 border-gray-700/50 border rounded-xl mt-8 pt-4 pr-4 pb-4 pl-4">
<div className="text-xs text-white/80">
<div className="flex justify-between mb-1">
<span className="font-geist" style={{}}>Comprehension Score</span>
<span className="text-purple-400 font-semibold font-geist" style={{}}>87%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="h-1 bg-purple-400 rounded-full" style={{width: `87%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</section>

<section className="relative overflow-hidden bg-gray-900 border-gray-800 border-t pt-32 pb-32">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">

<div className="text-center mb-20">
<div className="inline-flex gap-2 text-sm font-medium text-[#ffffff] bg-[#ffffff]/10 border-[#ffffff]/20 border rounded-full mb-6 pt-2 pr-4 pb-2 pl-4 items-center font-geist dynamic-glow-in animate-delay-100" style={{}}>
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                    Testimonials
                </div>
<h2 className="text-4xl sm:text-6xl mb-6 text-white tracking-tight font-playfair font-medium dynamic-zoom-in animate-delay-200" style={{}}>
                    What educators are saying
                    <span className="bg-clip-text block font-medium text-transparent tracking-tight font-playfair bg-neutral-50" style={{}}>about EduStory AI</span>
</h2>
<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-geist dynamic-fade-in animate-delay-300" style={{}}>Teachers and educators around the world are transforming their classrooms with our AI-powered educational stories.</p>
</div>

<div className="relative dynamic-slide-in animate-delay-400">

<div className="absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
<div className="absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent"></div>

<div className="flex overflow-hidden">
<div className="flex gap-6 testimonial-scroll">

<div className="flex-none w-96 bg-gradient-to-br from-gray-800/90 to-gray-700/50 border border-gray-600/50 rounded-3xl p-8 backdrop-blur-sm relative">
<div className="flex items-center gap-1 mb-6">
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="fill-current w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(250, 204, 21)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className=""></path></svg>
<svg className="fill-current w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(250, 204, 21)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className=""></path></svg><svg className="fill-current w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(250, 204, 21)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className=""></path></svg>
<span className="ml-2 text-sm text-gray-400 font-geist" style={{}}>5.0</span>
</div>
<p className="text-gray-300 mb-6 leading-relaxed font-geist" style={{}}>"EduStory AI has completely transformed how I teach reading comprehension. My students are more engaged than ever, and the AI-generated stories perfectly align with our curriculum standards."</p>
<div className="flex items-center gap-4">
<img alt="Sarah Martinez" className="w-14 h-14 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dde0b75b-b9ee-4ecf-afb2-28a0d38ac493_320w.jpg" />
<div>
<div className="font-semibold text-white text-lg font-geist" style={{}}>Sarah Martinez</div>
<div className="text-sm text-gray-400 font-geist" style={{}}>3rd Grade Teacher</div>
<div className="text-xs text-gray-500 font-geist" style={{}}>Lincoln Elementary, California</div>
</div>
</div>
</div>

<div className="flex-none w-96 bg-gradient-to-br from-gray-800/90 to-gray-700/50 border border-gray-600/50 rounded-3xl p-8 backdrop-blur-sm relative">
<div className="flex items-center gap-1 mb-6">
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="ml-2 text-sm text-gray-400 font-geist" style={{}}>5.0</span>
</div>
<p className="text-gray-300 mb-6 leading-relaxed font-geist" style={{}}>"The interactive science stories have made complex concepts so much easier for my 5th graders to understand. The built-in assessments save me hours of preparation time."</p>
<div className="flex items-center gap-4">
<img alt="Michael Johnson" className="w-14 h-14 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b68a95ca-4fdd-41bf-aefb-1660e692fa1b_320w.jpg" />
<div className="">
<div className="font-semibold text-white text-lg font-geist" style={{}}>Michael Johnson</div>
<div className="text-sm text-gray-400 font-geist" style={{}}>5th Grade Science Teacher</div>
<div className="text-xs text-gray-500 font-geist" style={{}}>Riverside School, Texas</div>
</div>
</div>
</div>

<div className="flex-none w-96 relative bg-gradient-to-br from-gray-800/90 to-gray-700/50 border-gray-600/50 border rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="flex items-center gap-1 mb-6">
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="ml-2 text-sm text-gray-400 font-geist" style={{}}>5.0</span>
</div>
<p className="text-gray-300 mb-6 leading-relaxed font-geist" style={{}}>"Creating personalized reading materials for my ESL students has never been easier. The ability to generate stories in multiple languages while maintaining educational value is incredible."</p>
<div className="flex items-center gap-4">
<img alt="Emily Chen" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div>
<div className="font-semibold text-white text-lg font-geist" style={{}}>Emily Chen</div>
<div className="text-sm text-gray-400 font-geist" style={{}}>ESL Coordinator</div>
<div className="text-xs text-gray-500 font-geist" style={{}}>Metropolitan Middle School, New York</div>
</div>
</div>
</div>

<div className="flex-none w-96 bg-gradient-to-br from-gray-800/90 to-gray-700/50 border border-gray-600/50 rounded-3xl p-8 backdrop-blur-sm relative">
<div className="flex items-center gap-1 mb-6">
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="text-yellow-400 fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="ml-2 text-sm text-gray-400 font-geist" style={{}}>5.0</span>
</div>
<p className="text-gray-300 mb-6 leading-relaxed font-geist" style={{}}>"EduStory AI has completely transformed how I teach reading comprehension. My students are more engaged than ever, and the AI-generated stories perfectly align with our curriculum standards."</p>
<div className="flex items-center gap-4">
<img alt="Sarah Martinez" className="w-14 h-14 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dde0b75b-b9ee-4ecf-afb2-28a0d38ac493_320w.jpg" />
<div>
<div className="font-semibold text-white text-lg font-geist" style={{}}>Sarah Martinez</div>
<div className="text-sm text-gray-400 font-geist" style={{}}>3rd Grade Teacher</div>
<div className="text-xs text-gray-500 font-geist" style={{}}>Lincoln Elementary, California</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-gray-950 pt-32 pb-32">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="dynamic-zoom-in animate-delay-200">
<h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 tracking-tight font-playfair font-medium" style={{}}>
                    Ready to transform your
                    <span className="hero-gradient-text block tracking-tight font-playfair font-medium" style={{}}>classroom?</span>
</h2>
<p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-geist dynamic-fade-in animate-delay-400" style={{}}>
                    Join thousands of educators who are already creating magical learning experiences with EduStory AI.
                </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center dynamic-slide-in animate-delay-600">
<button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-geist" style={{}}>
                        Start Creating for Free
                    </button>
<button className="px-8 py-4 border-2 border-gray-700 text-gray-300 font-semibold rounded-full text-lg hover:border-gray-500 hover:text-white transition-all duration-300 font-geist" style={{}}>
                        Schedule Demo
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 border-t border-gray-800 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl shadow-lg">
<svg className="text-white" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<span className="text-xl font-bold text-white font-geist" style={{}}>EduStory AI</span>
</div>
<p className="text-gray-400 mb-6 max-w-md leading-relaxed font-geist" style={{}}>
                        Empowering educators to create magical learning experiences through AI-powered educational storytelling.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" fillRule="evenodd"></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" fillRule="evenodd"></path></svg>
</a>
</div>
</div>
<div>
<h3 className="text-white font-semibold mb-4 font-geist" style={{}}>Product</h3>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Features</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Pricing</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Templates</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Integrations</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-4 font-geist" style={{}}>Support</h3>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Help Center</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Documentation</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Contact Us</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors font-geist" href="#" style={{}}>Community</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
<p className="text-gray-400 text-sm font-geist" style={{}}>© 2024 EduStory AI. All rights reserved.</p>
<div className="flex gap-6 mt-4 sm:mt-0">
<a className="text-gray-400 hover:text-white text-sm transition-colors font-geist" href="#" style={{}}>Privacy Policy</a>
<a className="text-gray-400 hover:text-white text-sm transition-colors font-geist" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
