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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter','ui-sans-serif','system-ui'],
serif: ['Fraunces','ui-serif','Georgia']
},
animation: {
'float': 'float 6s ease-in-out infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'scale-in': 'scaleIn 0.6s ease-out forwards'
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-10px)' }
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
scaleIn: {
'0%': { opacity: '0', transform: 'scale(0.9)' },
'100%': { opacity: '1', transform: 'scale(1)' }
}
}
}
}
}



// Initialize Lucide icons
lucide.createIcons();

// Cursor follower
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// Dropdown functionality
document.querySelectorAll('[data-dropdown-toggle]').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdownId = button.getAttribute('data-dropdown-toggle');
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('[id$="-dd"]').forEach(dropdown => {
    dropdown.classList.add('hidden');
  });
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
      

<div className="fixed w-6 h-6 bg-black/20 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out" id="cursor" style={{transform: `translate(-50%, -50%)`, left: `1446px`, top: `204px`}}></div>

<header className="fixed top-0 w-full bg-neutral-50/80 backdrop-blur-xl border-b border-neutral-200/50 z-40" data-reveal="" style={{opacity: `1`, transform: `translateY(0px)`}}>
<nav className="max-w-8xl mx-auto flex items-center justify-between px-8 py-6">
<div className="flex items-center gap-12">
<a className="text-2xl font-serif font-medium tracking-tight" href="#">Aurova</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="relative group" href="#">
<span className="transition-colors duration-300 hover:text-neutral-600">Collections</span>
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="relative group" href="#">
<span className="transition-colors duration-300 hover:text-neutral-600">Essentials</span>
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="relative group" href="#">
<span className="transition-colors duration-300 hover:text-neutral-600">Archive</span>
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="hidden md:block text-sm font-medium hover:text-neutral-600 transition-colors">Search</button>
<button className="relative group">
<svg className="lucide lucide-heart w-5 h-5 transition-transform duration-300 group-hover:scale-110" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<button className="relative group">
<svg className="lucide lucide-shopping-bag w-5 h-5 transition-transform duration-300 group-hover:scale-110" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-semibold w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</nav>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20" data-reveal="" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-neutral-50 to-rose-50"></div>
<div className="relative max-w-8xl mx-auto px-8 text-center">
<div className="mb-8">
<span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium border border-neutral-200/50">New Collection</span>
</div>
<h1 className="text-[12vw] lg:text-[10rem] xl:text-[12rem] leading-[0.8] font-serif font-medium tracking-tighter mb-8">
<span className="block">Simplify</span>
</h1>
<div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-light leading-relaxed mb-12">
<p className="opacity-80">Precision-crafted essentials engineered for all-day ease and effortless sophistication.</p>
<p className="opacity-80">Minimal style that empowers your routine—nothing more, nothing less than perfection.</p>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="group px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105">
<span className="flex items-center gap-2">
          Explore Collection
          <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="px-8 py-4 border border-neutral-300 rounded-full font-medium hover:bg-white hover:shadow-lg transition-all duration-300">
        Watch Story
      </button>
</div>
</div>
</section>

<section className="max-w-8xl mx-auto px-8 -mt-32" data-reveal="" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="relative overflow-hidden rounded-3xl shadow-2xl">
<div className="aspect-[16/9] lg:aspect-[21/9]">
<img alt="Hero" className="w-full h-full object-cover" src="/assets/2d0e68cb-426a-4760-a974-0e85c1ab0e2f_3840w.jpg" style={{}} />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<div className="flex items-end justify-between">
<div className="">
<h3 className="text-2xl font-serif font-medium mb-2">Emerald Wave Collection</h3>
<p className="text-sm opacity-90">Launching Spring 2024</p>
</div>
<div className="hidden md:block text-right">
<p className="text-sm opacity-90">Starting from</p>
<p className="text-lg font-medium">$250</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-8xl mx-auto px-8 py-24" data-reveal="" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="group">
<div className="text-4xl font-serif font-medium mb-2 transition-transform duration-300 group-hover:scale-105">15K+</div>
<div className="text-sm opacity-60 uppercase tracking-wider">Happy Customers</div>
</div>
<div className="group">
<div className="text-4xl font-serif font-medium mb-2 transition-transform duration-300 group-hover:scale-105">98%</div>
<div className="text-sm opacity-60 uppercase tracking-wider">Satisfaction Rate</div>
</div>
<div className="group">
<div className="text-4xl font-serif font-medium mb-2 transition-transform duration-300 group-hover:scale-105">5★</div>
<div className="text-sm opacity-60 uppercase tracking-wider">Average Rating</div>
</div>
</div>
</section>

<section className="bg-neutral-50/90 backdrop-blur-xl border-y border-neutral-200/50" data-reveal="" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="max-w-8xl mr-auto ml-auto pt-6 pr-8 pb-6 pl-8">
<div className="flex items-center justify-between flex-wrap gap-4">
<div className="flex items-center gap-6">
<h2 className="text-lg font-serif font-medium">Filter & Discover</h2>
<span className="text-sm opacity-60">124 products</span>
</div>
<div className="flex items-center gap-3 flex-wrap">
<div className="relative">
<button className="group flex items-center gap-2 px-5 py-3 bg-white border border-neutral-200 rounded-full text-sm font-medium hover:border-neutral-300 hover:shadow-md transition-all duration-300" data-dropdown-toggle="cat-dd">
<span>Category</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform duration-300 group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-20 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-200 p-2" id="cat-dd">
<a className="block px-4 py-3 rounded-xl hover:bg-neutral-100 text-sm transition-colors" href="#">Essential Tees</a>
<a className="block px-4 py-3 rounded-xl hover:bg-neutral-100 text-sm transition-colors" href="#">Luxury Knitwear</a>
<a className="block px-4 py-3 rounded-xl hover:bg-neutral-100 text-sm transition-colors" href="#">Outerwear</a>
<a className="block px-4 py-3 rounded-xl hover:bg-neutral-100 text-sm transition-colors" href="#">Tailoring</a>
</div>
</div>
<div className="relative">
<button className="group flex items-center gap-2 px-5 py-3 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-medium hover:bg-emerald-100 transition-all duration-300" data-dropdown-toggle="col-dd">
<span className="flex items-center gap-2">
<span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
              Emerald
            </span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform duration-300 group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-20 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-neutral-200 p-2" id="col-dd">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-100 text-sm transition-colors" href="#">
<span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
              Emerald Wave
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-100 text-sm transition-colors" href="#">
<span className="w-3 h-3 bg-rose-500 rounded-full"></span>
              Rose Dawn
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-100 text-sm transition-colors" href="#">
<span className="w-3 h-3 bg-neutral-800 rounded-full"></span>
              Midnight
            </a>
</div>
</div>
<div className="relative">
<input className="w-64 border border-neutral-200 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-300 transition-all duration-300" placeholder="Search essentials..." type="text" />
<svg className="lucide lucide-search w-4 h-4 absolute right-4 top-3.5 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-8xl mx-auto px-8 py-16" data-reveal="" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

<div className="lg:col-span-1">
<div className="sticky top-40">
<div className="mb-6">
<span className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-medium">/02 Collection</span>
<h2 className="text-4xl font-serif font-medium leading-tight mt-2 mb-4">EmeraldWave</h2>
<p className="text-neutral-600 leading-relaxed">Lush tones meet feather-light textures in our most anticipated seasonal collection. Each piece is meticulously crafted to elevate your everyday wardrobe.</p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-500">Available pieces</span>
<span className="font-medium">24</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-500">Price range</span>
<span className="font-medium">$250 - $750</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-500">Sizes</span>
<span className="font-medium">XS - XXL</span>
</div>
</div>
<button className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-black text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105">
<span className="">Browse Full Collection</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

<div className="group">
<div className="relative overflow-hidden bg-neutral-100 rounded-3xl mb-4">
<div className="aspect-[3/4]">
<img alt="Emerald Crest Tee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/109ebb51-5138-42bc-ab86-57531027dfd5_1600w.jpg" style={{}} />
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
<button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-white/90 border-white/20 border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur-sm">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
<button className="w-full bg-white/95 backdrop-blur-sm text-black py-3 px-4 rounded-full font-medium hover:bg-white transition-colors">
              Quick Add
            </button>
</div>
</div>
<div className="px-2">
<h3 className="font-medium mb-2">Emerald Crest Tee</h3>
<div className="flex items-center gap-1 mb-3">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-neutral-500 ml-1">(127)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">XS - XXL</span>
<span className="text-lg font-serif font-medium">$250</span>
</div>
</div>
</div>

<div className="group">
<div className="relative rounded-3xl overflow-hidden bg-neutral-100 mb-4">
<div className="aspect-[3/4]">
<img alt="Emerald Loop Crew" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/f2779f66-d9c0-4832-9230-4f244e7806f8_1600w.jpg" style={{}} />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-white/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="w-full bg-white/95 backdrop-blur-sm text-black py-3 px-4 rounded-full font-medium hover:bg-white transition-colors">
              Quick Add
            </button>
</div>
</div>
<div className="px-2">
<h3 className="font-medium mb-2">Emerald Loop Crew</h3>
<div className="flex items-center gap-1 mb-3">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-neutral-500 ml-1">(203)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">XS - XXL</span>
<span className="text-lg font-serif font-medium">$350</span>
</div>
</div>
</div>

<div className="group">
<div className="relative rounded-3xl overflow-hidden bg-neutral-100 mb-4">
<div className="aspect-[3/4]">
<img alt="Emerald Drift Coat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/abb0dec1-8b3e-49bc-bd34-4c3fd38ddcdb_1600w.jpg" />
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
<button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-white/90 border-white/20 border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur-sm">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="w-full bg-white/95 backdrop-blur-sm text-black py-3 px-4 rounded-full font-medium hover:bg-white transition-colors">
              Quick Add
            </button>
</div>
</div>
<div className="px-2">
<h3 className="font-medium mb-2">Emerald Drift Coat</h3>
<div className="flex items-center gap-1 mb-3">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-neutral-500 ml-1">(89)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">S - XL</span>
<span className="text-lg font-serif font-medium">$750</span>
</div>
</div>
</div>

<div className="group">
<div className="relative rounded-3xl overflow-hidden bg-neutral-100 mb-4">
<div className="aspect-[3/4]">
<img alt="Emerald Minimal Shirt" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/7cfd1de0-3ea3-4dff-a58f-53c4fe29fc62_1600w.jpg" />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-white/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="w-full bg-white/95 backdrop-blur-sm text-black py-3 px-4 rounded-full font-medium hover:bg-white transition-colors">
              Quick Add
            </button>
</div>
</div>
<div className="px-2">
<h3 className="font-medium mb-2">Emerald Minimal Shirt</h3>
<div className="flex items-center gap-1 mb-3">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-neutral-500 ml-1">(156)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">XS - XXL</span>
<span className="text-lg font-serif font-medium">$280</span>
</div>
</div>
</div>

<div className="group">
<div className="relative rounded-3xl overflow-hidden bg-neutral-100 mb-4">
<div className="aspect-[3/4]">
<img alt="Emerald Cashmere Blend" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/c38ffb59-1834-4f93-8551-7f6570d3cdbf_1600w.jpg" />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-white/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="w-full bg-white/95 backdrop-blur-sm text-black py-3 px-4 rounded-full font-medium hover:bg-white transition-colors">
              Quick Add
            </button>
</div>
</div>
<div className="px-2">
<h3 className="font-medium mb-2">Emerald Cashmere Blend</h3>
<div className="flex items-center gap-1 mb-3">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-neutral-500 ml-1">(211)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">S - XL</span>
<span className="text-lg font-serif font-medium">$420</span>
</div>
</div>
</div>

<div className="group">
<div className="relative rounded-3xl overflow-hidden bg-neutral-100 mb-4">
<div className="aspect-[3/4]">
<img alt="Emerald Essential Hoodie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/922c9eba-89be-4692-809f-45841c7c3fe1_1600w.jpg" />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-white/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="w-full bg-white/95 backdrop-blur-sm text-black py-3 px-4 rounded-full font-medium hover:bg-white transition-colors">
              Quick Add
            </button>
</div>
</div>
<div className="px-2">
<h3 className="font-medium mb-2">Emerald Essential Hoodie</h3>
<div className="flex items-center gap-1 mb-3">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-neutral-500 ml-1">(94)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">XS - XXL</span>
<span className="text-lg font-serif font-medium">$380</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-8xl mx-auto px-8 py-24" data-reveal="" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="relative overflow-hidden text-white bg-cover rounded-3xl bg-center bg-[url(/assets/24d17eda-2389-4b1a-9715-b15c7bfc0cfb_3840w.jpg)]">
<div className="absolute inset-0 bg-cover bg-center opacity-10 bg-[url(https://images.unsplash.com/photo-1635776062764-e025521e3df3?w=3840&q=80)]"></div>
<div className="relative text-center pt-20 pr-12 pb-20 pl-12">
<h2 className="text-5xl font-serif font-medium mb-6">Join the Aurova Experience</h2>
<p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Be the first to discover new collections, exclusive drops, and member-only benefits.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<input className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 w-80" placeholder="Enter your email" type="email" />
<button className="px-8 py-4 bg-white text-emerald-800 rounded-full font-medium hover:bg-neutral-100 transition-colors">
          Subscribe
        </button>
</div>
<p className="text-sm opacity-70">No spam, just curated content and exclusive access.</p>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white" data-reveal="" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="max-w-8xl mx-auto px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div>
<h3 className="text-2xl font-serif font-medium mb-6">Aurova</h3>
<p className="text-neutral-400 leading-relaxed mb-6">Precision-crafted essentials for the modern minimalist. Quality that speaks louder than words.</p>
<div className="flex items-center gap-4">
<button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</button>
<button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</button>
<button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</button>
</div>
</div>
<div>
<h4 className="font-medium mb-4">Collections</h4>
<div className="space-y-2 text-neutral-400">
<a className="block hover:text-white transition-colors" href="#">Emerald Wave</a>
<a className="block hover:text-white transition-colors" href="#">Rose Dawn</a>
<a className="block hover:text-white transition-colors" href="#">Midnight Series</a>
<a className="block hover:text-white transition-colors" href="#">Essential Basics</a>
</div>
</div>
<div>
<h4 className="font-medium mb-4">Support</h4>
<div className="space-y-2 text-neutral-400">
<a className="block hover:text-white transition-colors" href="#">Size Guide</a>
<a className="block hover:text-white transition-colors" href="#">Care Instructions</a>
<a className="block hover:text-white transition-colors" href="#">Returns & Exchanges</a>
<a className="block hover:text-white transition-colors" href="#">Contact Us</a>
</div>
</div>
<div className="">
<h4 className="font-medium mb-4">Company</h4>
<div className="space-y-2 text-neutral-400">
<a className="block hover:text-white transition-colors" href="#">About</a>
<a className="block hover:text-white transition-colors" href="#">Sustainability</a>
<a className="block hover:text-white transition-colors" href="#">Careers</a>
<a className="block hover:text-white transition-colors" href="#">Press</a>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between">
<p className="text-neutral-400 text-sm">© 2024 Aurova. All rights reserved.</p>
<div className="flex items-center gap-8 text-sm text-neutral-400 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
