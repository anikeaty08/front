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



    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // More menu dropdown
    const moreMenuBtn = document.getElementById('moreMenuBtn');
    const moreMenu = document.getElementById('moreMenu');
    
    moreMenuBtn?.addEventListener('click', () => {
      moreMenu.classList.toggle('hidden');
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!moreMenuBtn?.contains(e.target) && !moreMenu?.contains(e.target)) {
        moreMenu?.classList.add('hidden');
      }
    });
    
    // Premium track scroller
    const premiumScroller = document.getElementById('premiumScroller');
    const prevBtn = document.getElementById('prevPremium');
    const nextBtn = document.getElementById('nextPremium');
    
    prevBtn?.addEventListener('click', () => {
      premiumScroller.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    nextBtn?.addEventListener('click', () => {
      premiumScroller.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
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
      <iframe className="fixed top-0 w-full h-screen" frameborder="0" height="100%" src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq" width="100%"></iframe>

<header className="fixed inset-x-0 top-0 z-30 backdrop-blur-md bg-[#05060d]/80 border-b border-[#1e2130]/50 fade-in">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="p-2.5 bg-gradient-to-br from-indigo-500 rounded-xl shadow-lg group-hover:shadow-indigo-500/25 transition to-blue-600" style={{}}>
<i className="w-6 h-6" data-lucide="waveform"></i>
</div>
<div className="flex flex-col">
<span className="font-semibold text-lg tracking-tight group-hover:text-indigo-400 transition font-manrope">SoundCraft</span>
<span className="text-xs text-neutral-500 -mt-1 font-manrope" style={{}}>AI Music Studio</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="flex items-center gap-2 text-sm hover:bg-[#11131c] px-3 py-2 rounded-lg transition group text-neutral-300 hover:text-white" href="#" style={{}}>
<i className="w-4 h-4 group-hover:text-indigo-400 transition" data-lucide="music"></i>
<span className="font-manrope">Compositions</span>
<span className="bg-indigo-500 text-xs px-1.5 py-0.5 rounded-full font-manrope">127</span>
</a>
<a className="flex items-center gap-2 text-sm hover:bg-[#11131c] px-3 py-2 rounded-lg transition group text-neutral-300 hover:text-white" href="#" style={{}}>
<i className="w-4 h-4 group-hover:text-blue-400 transition" data-lucide="radio" style={{}}></i>
<span className="font-manrope">Audio Library</span>
<span className="bg-blue-500 text-xs px-1.5 py-0.5 rounded-full font-manrope" style={{}}>2.4k</span>
</a>
<a className="flex items-center gap-2 text-sm hover:bg-[#11131c] px-3 py-2 rounded-lg transition group text-neutral-300 hover:text-white" href="#" style={{}}>
<i className="w-4 h-4 group-hover:text-cyan-400 transition" data-lucide="trending-up" style={{}}></i>
<span className="font-manrope">Trending</span>
<i className="w-3 h-3 text-indigo-400" data-lucide="flame"></i>
</a>
<button className="relative flex items-center gap-2 text-sm hover:bg-[#11131c] px-3 py-2 rounded-lg transition text-neutral-300 hover:text-white" id="moreMenuBtn" style={{}}>
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
<span className="font-manrope">More</span>
</button>

<div className="hidden absolute top-12 right-0 bg-[#11131c] border border-[#1e2130] rounded-xl shadow-2xl min-w-[12rem] overflow-hidden z-40" id="moreMenu">
<a className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#1a1d29] transition group" href="#">
<i className="w-4 h-4 text-cyan-400" data-lucide="crown" style={{}}></i>
<span className="font-manrope">Premium</span>
<span className="ml-auto text-xs bg-cyan-500 px-1.5 py-0.5 rounded-full font-medium font-manrope text-black" style={{}}>Pro</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#1a1d29] transition font-manrope" href="#">
<i className="w-4 h-4 text-indigo-400" data-lucide="book-open"></i>Resources
          </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#1a1d29] transition font-manrope" href="#">
<i className="w-4 h-4 text-neutral-400" data-lucide="building" style={{}}></i>Company
          </a>
<div className="border-t border-[#1e2130] my-1"></div>
<a className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#1a1d29] transition font-manrope" href="#">
<i className="w-4 h-4 text-blue-400" data-lucide="help-circle" style={{}}></i>Support
          </a>
</div>
</nav>
<div className="flex items-center gap-4">
<button className="md:hidden hover:bg-[#11131c] p-2 rounded-lg transition text-neutral-300 hover:text-white" id="mobileMenuBtn" style={{}}>
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 text-sm font-medium shadow-lg transition hover:scale-105 hover:to-blue-500 to-blue-600 hover:shadow-indigo-600/50 hover:from-indigo-400" style={{}}>
<i className="w-4 h-4" data-lucide="play"></i>
<span className="font-manrope">Start Creating</span>
</button>
</div>
</div>

<div className="hidden md:hidden bg-[#0a0c14] border-t border-[#1e2130] px-6 py-4 space-y-3" id="mobileMenu">
<a className="flex items-center gap-3 hover:bg-[#11131c] px-3 py-2 rounded-lg transition font-manrope text-neutral-300 hover:text-white" href="#" style={{}}>
<i className="w-4 h-4" data-lucide="music"></i>Compositions
      </a>
<a className="flex items-center gap-3 hover:bg-[#11131c] px-3 py-2 rounded-lg transition font-manrope text-neutral-300 hover:text-white" href="#" style={{}}>
<i className="w-4 h-4" data-lucide="radio"></i>Audio Library
      </a>
<a className="flex items-center gap-3 hover:bg-[#11131c] px-3 py-2 rounded-lg transition font-manrope text-neutral-300 hover:text-white" href="#" style={{}}>
<i className="w-4 h-4" data-lucide="trending-up"></i>Trending
      </a>
<div className="border-t border-[#1e2130] pt-3">
<a className="block mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 text-center text-sm font-medium shadow-lg hover:scale-105 transition font-manrope to-blue-600" href="#" style={{}}>Start Creating</a>
</div>
</div>
</header>

<section className="relative lg:pb-48 overflow-hidden pt-32 pb-24">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10 pointer-events-none" style={{}}></div>
<div className="absolute top-40 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-60 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" style={{}}></div>
<div className="max-w-4xl relative z-10 text-center mr-auto ml-auto pr-6 pb-20 pl-6">
<div className="flex gap-3 slide-up mb-8 items-center justify-center">
<div className="px-4 py-2 bg-[#11131c] border border-[#1e2130] rounded-full flex items-center gap-2">
<div className="w-2 h-2 rounded-full animate-pulse bg-blue-400" style={{}}></div>
<span className="text-sm font-manrope text-neutral-300" style={{}}>AI Music Generation</span>
<span className="text-xs bg-indigo-500 px-2 py-0.5 rounded-full font-manrope">Live</span>
</div>
</div>
<h1 className="sm:text-5xl lg:text-7xl leading-tight slide-up delay-100 text-4xl font-medium tracking-tight font-montserrat">
        Create <span className="bg-clip-text font-medium text-transparent font-montserrat bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400" style={{}}>Extraordinary</span><br/>Soundscapes
      </h1>
<p className="max-w-2xl leading-relaxed slide-up delay-200 text-xl text-neutral-300 font-manrope mt-8 mr-auto ml-auto" style={{}}>
        Transform your creative vision into captivating audio experiences with our intelligent music generation platform. 
        Describe your sound, choose your style, and watch as our AI creates professional-quality soundtracks tailored to your needs.
      </p>

<div className="flex gap-8 slide-up delay-300 mt-24 items-center justify-center">
<div className="text-center">
<div className="stats-counter text-2xl font-medium text-indigo-400 font-montserrat">50K+</div>
<div className="text-sm font-manrope text-neutral-400" style={{}}>Tracks Generated</div>
</div>
<div className="w-px h-8 bg-[#1e2130]"></div>
<div className="text-center">
<div className="text-2xl stats-counter font-montserrat font-medium text-blue-400" style={{}}>12K+</div>
<div className="text-sm font-manrope text-neutral-400" style={{}}>Active Creators</div>
</div>
<div className="w-px h-8 bg-[#1e2130]"></div>
<div className="text-center">
<div className="stats-counter text-2xl font-medium text-cyan-400 font-montserrat" style={{}}>98%</div>
<div className="text-sm font-manrope text-neutral-400" style={{}}>Satisfaction</div>
</div>
</div>
</div>

<div className="relative flex slide-up delay-400 mt-32 justify-center">
<svg className="max-w-5xl w-[24px] h-[24px]" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 800 400">
<defs>
</defs>
<path d="M50,400 A375,375 0 0,1 750,400" fill="url(#dialGrad)" stroke="url(#dialGrad)" strokeWidth="2"></path>
</svg>
<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-12 md:gap-20 pt-0">
<div className="flex flex-col items-center fade-in delay-500 genre-card">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-1 bg-gradient-to-br from-indigo-500 shadow-lg hover:shadow-indigo-500/50 transition cursor-pointer to-blue-600" style={{}}>
<img alt="Orchestral" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1719090024495-055990fc4228?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 rounded-full bg-indigo-500/20 flex items-center justify-center opacity-0 hover:opacity-100 transition">
<i className="w-6 h-6 text-white" data-lucide="play"></i>
</div>
</div>
<span className="mt-3 text-sm font-medium font-manrope text-neutral-300" style={{}}>Orchestral</span>
<span className="text-xs text-neutral-500 font-manrope" style={{}}>Classical • Epic</span>
</div>
<div className="flex flex-col items-center fade-in delay-600 genre-card">
<div className="w-20 h-20 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-br shadow-2xl ring-4 transition cursor-pointer relative from-indigo-400 to-indigo-600 ring-indigo-400/40 hover:shadow-indigo-400/50">
<img alt="Electronic" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<div className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition bg-indigo-400/20">
<i className="w-8 h-8 text-white" data-lucide="play"></i>
</div>
</div>
<span className="mt-3 text-base font-semibold font-manrope">Electronic</span>
<span className="text-xs font-manrope text-neutral-400" style={{}}>Synth • Future Bass</span>
</div>
<div className="flex flex-col items-center fade-in delay-700 genre-card">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-1 bg-gradient-to-br from-blue-500 shadow-lg hover:shadow-blue-500/50 transition cursor-pointer to-cyan-600" style={{}}>
<img alt="Ambient" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1650611250959-1e823abf6841?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 rounded-full bg-blue-500/20 flex items-center justify-center opacity-0 hover:opacity-100 transition" style={{}}>
<i className="w-6 h-6 text-white" data-lucide="play"></i>
</div>
</div>
<span className="mt-3 text-sm font-medium font-manrope text-neutral-300" style={{}}>Ambient</span>
<span className="text-xs text-neutral-500 font-manrope" style={{}}>Chill • Meditation</span>
</div>
<div className="flex flex-col fade-in delay-800 genre-card hidden md:flex items-center">
<div className="w-20 h-20 hover:shadow-indigo-500/50 transition cursor-pointer bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full pt-1 pr-1 pb-1 pl-1 shadow-lg" style={{}}>
<img alt="Rock" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 flex opacity-0 hover:opacity-100 transition bg-indigo-500/20 rounded-full items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="play"></i>
</div>
</div>
<span className="mt-3 text-sm font-medium font-manrope text-neutral-300" style={{}}>Rock</span>
<span className="text-xs text-neutral-500 font-manrope" style={{}}>Alternative • Indie</span>
</div>
</div>
</div>
</section>

<section className="relative py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center gap-3 mb-8 slide-up">
<i className="w-5 h-5 text-cyan-400" data-lucide="users" style={{}}></i>
<h2 className="text-2xl tracking-tight font-montserrat font-medium">Featured Artists</h2>
<span className="text-sm font-manrope text-neutral-400" style={{}}>Collaborative creators</span>
</div>
<div className="flex gap-6 overflow-x-auto slide-up delay-100 pt-4 pb-4">
<div className="flex flex-col items-center min-w-[8rem] group cursor-pointer">
<div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#1e2130] transition group-hover:scale-110 hover:ring-cyan-400/50" style={{}}>
<img alt="Artist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;q=80" style={{}}/>
</div>
<span className="mt-2 text-sm font-medium font-manrope">Alex Chen</span>
<span className="text-xs text-neutral-500 font-manrope" style={{}}>Electronic Producer</span>
</div>
<div className="flex flex-col items-center min-w-[8rem] group cursor-pointer">
<div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#1e2130] transition group-hover:scale-110 hover:ring-cyan-400/50" style={{}}>
<img alt="Artist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&amp;q=80" style={{}}/>
</div>
<span className="mt-2 text-sm font-medium font-manrope">Sarah Miller</span>
<span className="text-xs text-neutral-500 font-manrope" style={{}}>Orchestral Composer</span>
</div>
<div className="flex flex-col items-center min-w-[8rem] group cursor-pointer">
<div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#1e2130] transition group-hover:scale-110 hover:ring-cyan-400/50" style={{}}>
<img alt="Artist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601576084861-5de423553c0f?w=800&amp;q=80" style={{}}/>
</div>
<span className="mt-2 text-sm font-medium font-manrope">Marcus Johnson</span>
<span className="text-xs text-neutral-500 font-manrope" style={{}}>Ambient Specialist</span>
</div>
<div className="flex flex-col items-center min-w-[8rem] group cursor-pointer">
<div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#1e2130] transition group-hover:scale-110 hover:ring-cyan-400/50" style={{}}>
<img alt="Artist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=800&amp;q=80" style={{}}/>
</div>
<span className="mt-2 text-sm font-medium font-manrope">Luna Rodriguez</span>
<span className="text-xs text-neutral-500 font-manrope" style={{}}>Cinematic Sound</span>
</div>
</div>
</div>
</section>

<section className="relative bg-[url(https://cdn.midjourney.com/6e8c2723-8ba3-4d7d-9afd-4ddd8160a12d/0_3.png?w=800&amp;q=80)] bg-cover pt-8 pb-16">
<div className="absolute inset-0 -top-32 h-64 bg-gradient-to-b from-[#05060d00] to-[#05060d] pointer-events-none"></div>
<div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">

<div className="flex slide-up mb-8 items-center justify-between">
<div className="flex gap-3 items-center">
<i className="w-6 h-6 text-cyan-400" data-lucide="crown" style={{}}></i>
<h2 className="text-2xl font-medium tracking-tight font-montserrat">Premium Collection</h2>
<span className="px-3 py-1 bg-cyan-500/20 text-xs font-medium rounded-full font-manrope text-cyan-400" style={{}}>Pro Only</span>
</div>
<button className="flex items-center gap-2 text-sm transition text-neutral-400 hover:text-white" style={{}}>
<span className="font-manrope">View All</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="relative slide-up delay-100">
<button className="absolute z-10 left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#11131c]/90 hover:bg-[#1a1d29] backdrop-blur border border-[#1e2130] hidden md:inline-flex transition hover:scale-110 hover:border-indigo-500/50" id="prevPremium" onclick="document.getElementById('premiumScroller').scrollBy({ left: -300, behavior: 'smooth' })">
<svg className="w-[20px] h-[20px]" data-lucide="chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="flex gap-6 overflow-x-auto snap-x scroll-smooth pt-4 pr-12 pb-4 pl-12" id="premiumScroller">

<div className="min-w-[18rem] snap-start shrink-0 overflow-hidden hover:border-indigo-500/50 music-card bg-[#11131c] border-[#1e2130] border rounded-2xl shadow-xl">
<div className="relative h-48 bg-center bg-cover" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/76954789-736e-4d8c-8286-8b8a939a5bb5/0_2.png\')'}}>
<div className="music-overlay absolute inset-0 flex" style={{}}>
<div className="flex items-center gap-3">
<button className="transition hover:bg-white/30 bg-white/20 bg-[url(https://images.unsplash.com/photo-1502452213786-a5bc0a67e963?w=320&amp;q=80)] bg-cover rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur">
<i className="w-5 h-5" data-lucide="play"></i>
</button>
<div className="flex items-center gap-2 text-xs">
<i className="w-3 h-3" data-lucide="clock"></i>
<span className="font-manrope">3:42</span>
</div>
</div>
</div>
<div className="absolute top-4 right-4 px-2 py-1 bg-cyan-500 text-xs font-bold rounded-full font-manrope text-black" style={{}}>PRO</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div className="">
<h3 className="font-semibold text-lg font-manrope">Cosmic Odyssey</h3>
<p className="text-sm font-manrope text-neutral-400" style={{}}>Cinematic • Epic</p>
</div>
<button className="p-2 hover:bg-[#1a1d29] rounded-lg transition">
<i className="w-4 h-4 text-neutral-400 hover:text-blue-400" data-lucide="heart" style={{}}></i>
</button>
</div>
<div className="flex items-center gap-4 text-xs mb-4 text-neutral-400" style={{}}>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="headphones"></i>
<span className="font-manrope">12.4K</span>
</div>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="download"></i>
<span className="font-manrope">2.1K</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-blue-400" style={{}}></span>
<span className="font-manrope">Available</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-indigo-500 rounded-lg text-sm font-medium hover:to-blue-500 transition font-manrope to-blue-600 hover:from-indigo-400" style={{}}>
<i className="w-4 h-4" data-lucide="download"></i>
                  Download
                </button>
<button className="p-2 border border-[#1e2130] rounded-lg hover:border-neutral-500 transition" style={{}}>
<i className="w-4 h-4" data-lucide="share"></i>
</button>
</div>
</div>
</div>

<div className="min-w-[18rem] snap-start shrink-0 bg-[#11131c] rounded-2xl overflow-hidden border border-[#1e2130] hover:border-indigo-500/50 music-card shadow-xl">
<div className="relative h-48 bg-center bg-cover" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/d49ff5aa-ef39-44fa-a15c-8150be7d0f7b/0_0.png\')'}}>
<div className="music-overlay absolute inset-0 flex pt-4 pr-4 pb-4 pl-4 items-end">
<div className="flex items-center gap-3">
<button className="transition hover:bg-white/30 bg-white/20 bg-[url(https://images.unsplash.com/photo-1560918801-53fe5c710a80?w=320&amp;q=80)] bg-cover rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur">
<i className="w-5 h-5" data-lucide="play"></i>
</button>
<div className="flex items-center gap-2 text-xs">
<i className="w-3 h-3" data-lucide="clock"></i>
<span className="font-manrope">2:18</span>
</div>
</div>
</div>
<div className="absolute top-4 right-4 px-2 py-1 bg-cyan-500 text-xs font-bold rounded-full font-manrope text-black" style={{}}>PRO</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div className="">
<h3 className="font-semibold text-lg font-manrope">Neon Velocity</h3>
<p className="text-sm font-manrope text-neutral-400" style={{}}>Electronic • Energetic</p>
</div>
<button className="p-2 hover:bg-[#1a1d29] rounded-lg transition">
<i className="w-4 h-4 text-blue-400" data-lucide="heart" style={{}}></i>
</button>
</div>
<div className="flex items-center gap-4 text-xs mb-4 text-neutral-400" style={{}}>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="headphones"></i>
<span className="font-manrope">8.7K</span>
</div>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="download"></i>
<span className="font-manrope">1.5K</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-blue-400" style={{}}></span>
<span className="font-manrope">Available</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-indigo-500 rounded-lg text-sm font-medium hover:to-blue-500 transition font-manrope to-blue-600 hover:from-indigo-400" style={{}}>
<i className="w-4 h-4" data-lucide="download"></i>
                  Download
                </button>
<button className="p-2 border border-[#1e2130] rounded-lg hover:border-neutral-500 transition" style={{}}>
<i className="w-4 h-4" data-lucide="share"></i>
</button>
</div>
</div>
</div>

<div className="min-w-[18rem] snap-start shrink-0 bg-[#11131c] rounded-2xl overflow-hidden border border-[#1e2130] hover:border-indigo-500/50 music-card shadow-xl">
<div className="relative h-48 bg-center bg-cover" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/3b78d621-e353-44d0-8275-e07dc8e723e3/0_0.png\')'}}>
<div className="music-overlay absolute inset-0 flex bg-gradient-to-t via-transparent to-transparent from-black/80 pt-4 pr-4 pb-4 pl-4 items-end">
<div className="flex items-center gap-3">
<button className="transition hover:bg-white/30 bg-white/20 bg-[url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?w=320&amp;q=80)] bg-cover rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur">
<i className="w-5 h-5" data-lucide="play"></i>
</button>
<div className="flex items-center gap-2 text-xs">
<i className="w-3 h-3" data-lucide="clock"></i>
<span className="font-manrope">4:15</span>
</div>
</div>
</div>
<div className="absolute top-4 right-4 px-2 py-1 bg-cyan-500 text-xs font-bold rounded-full font-manrope text-black" style={{}}>PRO</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div className="">
<h3 className="font-semibold text-lg font-manrope">Midnight Reverie</h3>
<p className="text-sm font-manrope text-neutral-400" style={{}}>Ambient • Atmospheric</p>
</div>
<button className="p-2 hover:bg-[#1a1d29] rounded-lg transition">
<i className="w-4 h-4 text-neutral-400 hover:text-blue-400" data-lucide="heart" style={{}}></i>
</button>
</div>
<div className="flex items-center gap-4 text-xs mb-4 text-neutral-400" style={{}}>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="headphones"></i>
<span className="font-manrope">15.2K</span>
</div>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="download"></i>
<span className="font-manrope">3.8K</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-blue-400" style={{}}></span>
<span className="font-manrope">Available</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-indigo-500 rounded-lg text-sm font-medium hover:to-blue-500 transition font-manrope to-blue-600 hover:from-indigo-400" style={{}}>
<i className="w-4 h-4" data-lucide="download"></i>
                  Download
                </button>
<button className="p-2 border border-[#1e2130] rounded-lg hover:border-neutral-500 transition" style={{}}>
<i className="w-4 h-4" data-lucide="share"></i>
</button>
</div>
</div>
</div>

<div className="min-w-[18rem] snap-start shrink-0 bg-[#11131c] rounded-2xl overflow-hidden border border-[#1e2130] hover:border-indigo-500/50 music-card shadow-xl">
<div className="relative h-48 bg-center bg-cover" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/f603edcd-c27e-4c28-a0b9-38bf78e13fe4/0_0.png\')'}}>
<div className="music-overlay absolute inset-0 flex bg-gradient-to-t via-transparent to-transparent from-black/70 pt-4 pr-4 pb-4 pl-4 items-end">
<div className="flex items-center gap-3">
<button className="transition hover:bg-white/30 bg-white/20 bg-[url(https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=320&amp;q=80)] bg-cover rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur">
<i className="w-5 h-5" data-lucide="play"></i>
</button>
<div className="flex items-center gap-2 text-xs">
<i className="w-3 h-3" data-lucide="clock"></i>
<span className="font-manrope">3:30</span>
</div>
</div>
</div>
<div className="absolute top-4 right-4 px-2 py-1 bg-cyan-500 text-xs font-bold rounded-full font-manrope text-black">PRO</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div className="">
<h3 className="font-semibold text-lg font-manrope">Solar Winds</h3>
<p className="text-sm font-manrope text-neutral-400">Synthwave • Retro</p>
</div>
<button className="p-2 hover:bg-[#1a1d29] rounded-lg transition">
<i className="w-4 h-4 text-neutral-400 hover:text-blue-400" data-lucide="heart"></i>
</button>
</div>
<div className="flex items-center gap-4 text-xs mb-4 text-neutral-400">
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="headphones"></i>
<span className="font-manrope">9.1K</span>
</div>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="download"></i>
<span className="font-manrope">1.8K</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
<span className="font-manrope">Available</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-indigo-500 rounded-lg text-sm font-medium hover:to-blue-500 transition font-manrope to-blue-600 hover:from-indigo-400">
<i className="w-4 h-4" data-lucide="download"></i>
                  Download
                </button>
<button className="p-2 border border-[#1e2130] rounded-lg hover:border-neutral-500 transition">
<i className="w-4 h-4" data-lucide="share"></i>
</button>
</div>
</div>
</div>

<div className="min-w-[18rem] snap-start shrink-0 bg-[#11131c] rounded-2xl overflow-hidden border border-[#1e2130] hover:border-indigo-500/50 music-card shadow-xl">
<div className="relative h-48 bg-center bg-cover" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/269cab61-0990-40f8-ac5d-f76f9b98523d/0_0.png\')'}}>
<div className="music-overlay absolute inset-0 flex bg-gradient-to-t via-transparent to-transparent from-black/75 pt-4 pr-4 pb-4 pl-4 items-end">
<div className="flex items-center gap-3">
<button className="transition hover:bg-white/30 bg-white/20 bg-[url(https://images.unsplash.com/photo-1511929825537-516974a253df?w=320&amp;q=80)] bg-cover rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur">
<i className="w-5 h-5" data-lucide="play"></i>
</button>
<div className="flex items-center gap-2 text-xs">
<i className="w-3 h-3" data-lucide="clock"></i>
<span className="font-manrope">5:00</span>
</div>
</div>
</div>
<div className="absolute top-4 right-4 px-2 py-1 bg-cyan-500 text-xs font-bold rounded-full font-manrope text-black">PRO</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div className="">
<h3 className="font-semibold text-lg font-manrope">Ethereal Dreams</h3>
<p className="text-sm font-manrope text-neutral-400">Dream Pop • Chillout</p>
</div>
<button className="p-2 hover:bg-[#1a1d29] rounded-lg transition">
<i className="w-4 h-4 text-neutral-400 hover:text-blue-400" data-lucide="heart"></i>
</button>
</div>
<div className="flex items-center gap-4 text-xs mb-4 text-neutral-400">
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="headphones"></i>
<span className="font-manrope">11.6K</span>
</div>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="download"></i>
<span className="font-manrope">2.9K</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
<span className="font-manrope">Available</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-indigo-500 rounded-lg text-sm font-medium hover:to-blue-500 transition font-manrope to-blue-600 hover:from-indigo-400">
<i className="w-4 h-4" data-lucide="download"></i>
                  Download
                </button>
<button className="p-2 border border-[#1e2130] rounded-lg hover:border-neutral-500 transition">
<i className="w-4 h-4" data-lucide="share"></i>
</button>
</div>
</div>
</div>

<div className="min-w-[18rem] snap-start shrink-0 bg-[#11131c] rounded-2xl overflow-hidden border border-[#1e2130] hover:border-indigo-500/50 music-card shadow-xl">
<div className="relative h-48 bg-center bg-cover" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/e7f73911-7831-48ae-a9d2-b55c782dd157/0_0.png\')'}}>
<div className="music-overlay absolute inset-0 flex bg-gradient-to-t via-transparent to-transparent from-black/80 pt-4 pr-4 pb-4 pl-4 items-end">
<div className="flex items-center gap-3">
<button className="transition hover:bg-white/30 bg-white/20 bg-[url(https://images.unsplash.com/photo-1589525231707-f2de2428f59c?w=320&amp;q=80)] bg-cover rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur">
<i className="w-5 h-5" data-lucide="play"></i>
</button>
<div className="flex items-center gap-2 text-xs">
<i className="w-3 h-3" data-lucide="clock"></i>
<span className="font-manrope">3:55</span>
</div>
</div>
</div>
<div className="absolute top-4 right-4 px-2 py-1 bg-cyan-500 text-xs font-bold rounded-full font-manrope text-black">PRO</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="font-semibold text-lg font-manrope">Urban Pulse</h3>
<p className="text-sm font-manrope text-neutral-400">Hip-Hop • Modern</p>
</div>
<button className="p-2 hover:bg-[#1a1d29] rounded-lg transition">
<i className="w-4 h-4 text-neutral-400 hover:text-blue-400" data-lucide="heart"></i>
</button>
</div>
<div className="flex items-center gap-4 text-xs mb-4 text-neutral-400">
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="headphones"></i>
<span className="font-manrope">10.3K</span>
</div>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="download"></i>
<span className="font-manrope">2.0K</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
<span className="font-manrope">Available</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-indigo-500 rounded-lg text-sm font-medium hover:to-blue-500 transition font-manrope to-blue-600 hover:from-indigo-400">
<i className="w-4 h-4" data-lucide="download"></i>
                  Download
                </button>
<button className="p-2 border border-[#1e2130] rounded-lg hover:border-neutral-500 transition">
<i className="w-4 h-4" data-lucide="share"></i>
</button>
</div>
</div>
</div>
</div>
<button className="absolute z-10 right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#11131c]/90 hover:bg-[#1a1d29] backdrop-blur border border-[#1e2130] hidden md:inline-flex transition hover:scale-110 hover:border-indigo-500/50" id="nextPremium" onclick="document.getElementById('premiumScroller').scrollBy({ left: 300, behavior: 'smooth' })">
<svg className="w-[20px] h-[20px]" data-lucide="chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="relative pt-24 pb-24">
<div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="slide-up text-center mb-16">
<h2 className="text-3xl font-medium font-montserrat mb-4">Powerful AI-Driven Features</h2>
<p className="text-lg max-w-2xl mx-auto font-manrope text-neutral-400" style={{}}>Advanced tools that understand your creative vision and bring it to life</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="hover:border-indigo-500/50 transition slide-up delay-100 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-slate-200/0 to-slate-800 border-slate-50/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 rounded-xl flex items-center justify-center mb-6 to-blue-600" style={{}}>
<svg className="w-[24px] h-[24px]" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-manrope">Smart Composition</h3>
<p className="leading-relaxed font-manrope text-neutral-400" style={{}}>AI analyzes your preferences and creates unique compositions that match your style and mood perfectly.</p>
</div>
<div className="hover:border-indigo-500/50 transition slide-up delay-200 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-slate-200/0 to-slate-800 border-slate-50/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 rounded-xl flex items-center justify-center mb-6 to-blue-600" style={{}}>
<svg className="w-[24px] h-[24px]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"></path><path d="M8 18v-7.7L16 9v7"></path><circle cx="14" cy="16" r="2"></circle><circle cx="6" cy="18" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-manrope">Multi-Track Mixing</h3>
<p className="leading-relaxed font-manrope text-neutral-400" style={{}}>Professional mixing with multiple instrument layers, effects, and spatial audio processing.</p>
</div>
<div className="hover:border-indigo-500/50 transition slide-up delay-300 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-slate-200/0 to-slate-800 border-slate-50/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 rounded-xl flex items-center justify-center mb-6 to-blue-600" style={{}}>
<svg className="w-[24px] h-[24px]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-manrope">Real-Time Generation</h3>
<p className="leading-relaxed font-manrope text-neutral-400" style={{}}>Generate high-quality audio tracks in seconds, not hours. Perfect for rapid prototyping and iteration.</p>
</div>
<div className="hover:border-indigo-500/50 transition slide-up delay-400 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-slate-200/0 to-slate-800 border-slate-50/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 rounded-xl flex items-center justify-center mb-6 to-blue-600" style={{}}>
<svg className="w-[24px] h-[24px]" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-manrope">Voice Integration</h3>
<p className="leading-relaxed font-manrope text-neutral-400" style={{}}>Seamlessly blend AI-generated vocals with instrumental tracks for complete musical productions.</p>
</div>
<div className="hover:border-indigo-500/50 transition slide-up delay-500 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-slate-200/0 to-slate-800 border-slate-50/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 rounded-xl flex items-center justify-center mb-6 to-blue-600" style={{}}>
<svg className="w-[24px] h-[24px]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M6 8h4"></path><path d="M14 8h.01"></path><path d="M18 8h.01"></path><path d="M2 12h20"></path><path d="M6 12v4"></path><path d="M10 12v4"></path><path d="M14 12v4"></path><path d="M18 12v4"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-manrope">Fine-Tuned Control</h3>
<p className="leading-relaxed font-manrope text-neutral-400" style={{}}>Adjust tempo, key, intensity, and mood with precise controls for complete creative freedom.</p>
</div>
<div className="hover:border-indigo-500/50 transition slide-up delay-600 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-slate-200/0 to-slate-800 border-slate-50/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 rounded-xl flex items-center justify-center mb-6 to-blue-600" style={{}}>
<svg className="w-[24px] h-[24px]" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-manrope">Collaborative Studio</h3>
<p className="leading-relaxed font-manrope text-neutral-400" style={{}}>Share projects, get feedback, and collaborate with other creators in real-time.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-cyan-500/20" style={{}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="slide-up">
<h2 className="text-4xl mb-6 font-montserrat font-medium">Ready to Create Something Amazing?</h2>
<p className="text-xl mb-8 max-w-2xl mx-auto font-manrope text-neutral-300" style={{}}>Join thousands of creators who are already using SoundCraft to bring their musical visions to life</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 bg-gradient-to-r from-indigo-500 rounded-full text-lg font-semibold hover:to-blue-500 transition hover:scale-105 shadow-lg hover:shadow-indigo-500/50 font-manrope to-blue-600 hover:from-indigo-400" style={{}}>
            Start Creating Now
          </button>
<button className="px-8 py-4 border border-[#1e2130] rounded-full text-lg font-semibold hover:border-neutral-500 transition hover:bg-[#11131c] font-manrope" style={{}}>
            Watch Demo
          </button>
</div>
</div>
</div>
</section>

<footer className="relative py-16 border-t border-[#1e2130]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8">
<div className="">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-gradient-to-br from-indigo-500 rounded-lg to-blue-600" style={{}}>
<i className="w-5 h-5" data-lucide="waveform"></i>
</div>
<span className="font-semibold text-lg font-manrope">SoundCraft</span>
</div>
<p className="text-sm leading-relaxed font-manrope text-neutral-400" style={{}}>The future of music creation. Powered by AI, crafted by artists.</p>
</div>
<div className="">
<h4 className="font-semibold mb-4 font-manrope">Product</h4>
<ul className="space-y-2 text-sm text-neutral-400" style={{}}>
<li className=""><a className="transition font-manrope hover:text-white" href="#">Features</a></li>
<li className=""><a className="transition font-manrope hover:text-white" href="#">Pricing</a></li>
<li className=""><a className="transition font-manrope hover:text-white" href="#">API</a></li>
<li className=""><a className="transition font-manrope hover:text-white" href="#">Integrations</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 font-manrope">Company</h4>
<ul className="space-y-2 text-sm text-neutral-400" style={{}}>
<li><a className="transition font-manrope hover:text-white" href="#">About</a></li>
<li className=""><a className="transition font-manrope hover:text-white" href="#">Blog</a></li>
<li className=""><a className="transition font-manrope hover:text-white" href="#">Careers</a></li>
<li><a className="transition font-manrope hover:text-white" href="#">Press</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 font-manrope">Support</h4>
<ul className="space-y-2 text-sm text-neutral-400" style={{}}>
<li className=""><a className="transition font-manrope hover:text-white" href="#">Help Center</a></li>
<li className=""><a className="transition font-manrope hover:text-white" href="#">Contact</a></li>
<li className=""><a className="transition font-manrope hover:text-white" href="#">Status</a></li>
<li className=""><a className="transition font-manrope hover:text-white" href="#">Community</a></li>
</ul>
</div>
</div>
<div className="border-t border-[#1e2130] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-sm font-manrope text-neutral-400" style={{}}>© 2024 SoundCraft. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="transition font-manrope text-neutral-400 hover:text-white" href="#" style={{}}>Privacy</a>
<a className="transition font-manrope text-neutral-400 hover:text-white" href="#" style={{}}>Terms</a>
<a className="transition font-manrope text-neutral-400 hover:text-white" href="#" style={{}}>Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
