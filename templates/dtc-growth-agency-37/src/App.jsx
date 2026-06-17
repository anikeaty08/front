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
sans: ['Inter', 'sans-serif'],
},
colors: {
royal: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
}
}
}
}
}



{
"imports": {
"react": "https://aistudiocdn.com/react@^19.2.1",
"react/": "https://aistudiocdn.com/react@^19.2.1/",
"lucide-react": "https://aistudiocdn.com/lucide-react@^0.556.0"
}
}



        // Initialize Lucide Icons
      lucide.createIcons();

      // Navbar Scroll Effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-4');
          navbar.classList.remove('bg-transparent', 'py-6');
        } else {
          navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-4');
          navbar.classList.add('bg-transparent', 'py-6');
        }
      });

      // Mobile Menu Toggle
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('flex');
        } else {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
        }
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
        });
      });

      // Stats Counter Animation
      const counters = document.querySelectorAll('.counter');
      const observerOptions = {
        threshold: 0.5
      };

      const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // ms
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          counter.innerText = Math.floor(progress * target);

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        requestAnimationFrame(updateCount);
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      counters.forEach(counter => observer.observe(counter));

      // Fade In Animation
      const fadeElems = document.querySelectorAll('.fade-in-section');
      const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            fadeObserver.unobserve(entry.target); // Only animate once
          }
        });
      }, { threshold: 0.1 });

      fadeElems.forEach(elem => fadeObserver.observe(elem));

    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-6" id="navbar">
<div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

<a className="flex items-center gap-2 cursor-pointer group" href="#">
<div className="w-8 h-8 bg-royal-600 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
<span className="text-white font-bold text-xl">C</span>
</div>
<span className="text-xl font-bold tracking-tight text-gray-900">CONVERT<span className="text-royal-600">LABS</span></span>
</a>

<div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
<a className="hover:text-royal-600 transition-colors" href="#process">Process</a>
<a className="hover:text-royal-600 transition-colors" href="#case-studies">Case Studies</a>
<a className="hover:text-royal-600 transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden md:block">
<a className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300" href="#contact">
                    Work With Us
                </a>
</div>

<button className="md:hidden text-gray-900" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg p-4 flex-col gap-4" id="mobile-menu">
<a className="mobile-link text-left font-medium text-gray-700 py-2" href="#process">Process</a>
<a className="mobile-link text-left font-medium text-gray-700 py-2" href="#case-studies">Case Studies</a>
<a className="mobile-link text-left font-medium text-gray-700 py-2" href="#reviews">Reviews</a>
<a className="mobile-link bg-royal-600 text-white py-3 rounded-lg font-bold text-center" href="#contact">Work
                With Us</a>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white bg-dot-pattern relative">
<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
<div className="container mx-auto px-4 relative z-10">
<div className="max-w-5xl mx-auto text-center fade-in-section">

<div className="inline-block bg-royal-50 text-royal-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-royal-100">
                    Performance Marketing for Indian DTC
                </div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                    We Turn <span className="text-royal-600 bg-royal-50 px-2 rounded-lg">6 Figure</span> Indian DTC Brands
                    Into
                    <span className="text-white bg-royal-600 px-2 rounded-lg inline-block transform -rotate-1">7 Figure</span>
                    Powerhouses
                </h1>

<p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Using our proven <strong>Convert Protocol™</strong>, our average E-Commerce client experiences a
                    <span classname="font-bold text-gray-900"> 41% increase in ROAS</span> and a
                    <span classname="font-bold text-gray-900"> 55% increase in advertising profit</span> in the first 90
                    days.
                </p>

<div className="max-w-4xl mx-auto mb-10 transform hover:scale-[1.01] transition-transform duration-500">
<div className="bg-black p-2 rounded-2xl shadow-2xl">
<div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 relative aspect-video cursor-pointer group">
<div className="bg-gray-900 text-white text-xs font-bold py-2 text-center tracking-widest uppercase border-b border-gray-700 relative z-20">
                                Learn how our protocol works
                            </div>
<img alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" src="https://picsum.photos/seed/hero/1200/675"/>

<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-4 animate-pulse">
<i className="w-8 h-8 md:w-12 md:h-12 text-white" data-lucide="volume-2"></i>
</div>
<div className="text-center">
<h3 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">Your Video Is Playing
                                    </h3>
<p className="text-sm md:text-base font-medium opacity-90 uppercase tracking-widest text-royal-200">
                                        Click To Unmute</p>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-700 z-20">
<div className="h-full bg-royal-500 w-1/3"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-4">
<a className="inline-block bg-royal-600 hover:bg-royal-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg shadow-royal-500/30 transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto uppercase tracking-wide" href="#contact">
                        Schedule Your Free Growth Partnership Call
                    </a>
<div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
<span className="flex -space-x-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/seed/face1/50/50"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/seed/face2/50/50"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/seed/face3/50/50"/>
</span>
<p>Trusted by <span className="font-bold text-gray-900">50+ Founders</span></p>
</div>
</div>
</div>
</div>
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
<i className="w-6 h-6" data-lucide="arrow-down"></i>
</div>
</section>

<section className="py-10 border-y border-gray-100 bg-gray-50/50 overflow-hidden">
<div className="container mx-auto px-4 mb-4 text-center">
<p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trusted By India's Fastest Growing
                Brands</p>
</div>
<div className="flex justify-center flex-wrap gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl md:text-2xl font-black text-gray-400 font-serif">Mamaearth</span>
<span className="text-xl md:text-2xl font-black text-gray-400 font-serif">Sugar</span>
<span className="text-xl md:text-2xl font-black text-gray-400 font-serif">Boat</span>
<span className="text-xl md:text-2xl font-black text-gray-400 font-serif">Minimalist</span>
<span className="text-xl md:text-2xl font-black text-gray-400 font-serif">Lenskart</span>
<span className="text-xl md:text-2xl font-black text-gray-400 font-serif">Wakefit</span>
<span className="text-xl md:text-2xl font-black text-gray-400 font-serif">BoldCare</span>
<span className="text-xl md:text-2xl font-black text-gray-400 font-serif">BlueTokai</span>
</div>
</section>

<section className="py-20 bg-gray-50 relative overflow-hidden">
<div className="container mx-auto px-4 text-center">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 fade-in-section">
                Still Not Convinced?
                <span className="text-royal-600 underline decoration-royal-300 decoration-4 underline-offset-4">Numbers Don't Lie!</span>
</h2>
<p className="text-gray-600 mb-12 max-w-2xl mx-auto fade-in-section">
                In the first 90 days, our average E-Commerce brand partner experiences:
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 fade-in-section">
<div className="text-4xl md:text-5xl font-extrabold text-royal-600 mb-2">
<span className="counter" data-target="45">0</span>%
                    </div>
<div className="text-gray-500 font-medium text-sm md:text-base text-center uppercase tracking-wide">
                        Increase in ROAS
                    </div>
</div>

<div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 fade-in-section">
<div className="text-4xl md:text-5xl font-extrabold text-royal-600 mb-2">
<span className="counter" data-target="38">0</span>%
                    </div>
<div className="text-gray-500 font-medium text-sm md:text-base text-center uppercase tracking-wide">
                        Increase in Revenue
                    </div>
</div>

<div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 fade-in-section">
<div className="text-4xl md:text-5xl font-extrabold text-royal-600 mb-2">
<span className="counter" data-target="62">0</span>%
                    </div>
<div className="text-gray-500 font-medium text-sm md:text-base text-center uppercase tracking-wide">
                        Increase in Ad Profit
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="case-studies">
<div className="container mx-auto px-4">
<div className="text-center mb-20 fade-in-section">
<h2 className="text-sm font-bold text-royal-600 uppercase tracking-widest mb-3">Case Studies</h2>
<h3 className="text-3xl md:text-5xl font-bold text-gray-900">
                    Check Out What Our
                    <span className="underline decoration-royal-400 decoration-4 underline-offset-4 text-royal-700">Existing Partners</span>
                    Have To Say
                </h3>
</div>
<div className="flex flex-col gap-24 max-w-6xl mx-auto">

<div className="flex flex-col lg:flex-row gap-10 items-start fade-in-section">
<div className="w-full lg:w-3/5 flex flex-col gap-6">
<div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100 relative aspect-video bg-gray-900 group cursor-pointer">
<img alt="Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" src="https://picsum.photos/seed/veda/600/400"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-4 animate-pulse">
<i className="w-8 h-8 text-white" data-lucide="volume-2"></i>
</div>
<h3 className="text-xl font-bold">How Veda Scaled</h3>
<p className="text-xs font-bold text-royal-200 uppercase tracking-widest">Click to Unmute
                                </p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex-1 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg text-sm uppercase tracking-wide transition-all hover:-translate-y-1">Read Full Case Study</button>
<a className="flex-1 text-center bg-royal-600 hover:bg-royal-700 text-white px-8 py-4 rounded-full font-bold shadow-lg text-sm uppercase tracking-wide transition-all hover:-translate-y-1" href="#contact">Schedule
                                Growth Call</a>
</div>
</div>
<div className="w-full lg:w-2/5">
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sticky top-32">
<div className="flex justify-between items-start mb-6 border-b border-gray-200 pb-6">
<div>
<h4 className="text-2xl font-bold text-gray-900 mb-1">Veda Essentials</h4>
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Ayurvedic
                                        Beauty</p>
</div>
<div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400 font-bold">
                                    LOGO</div>
</div>
<div className="mb-8">
<h5 className="text-lg font-bold text-royal-700 mb-2 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="trending-up"></i> Short Term Results</h5>
<p className="text-xl font-bold text-gray-900 leading-tight">156% Increase In ROAS In 45
                                    Days</p>
</div>
<div className="mb-8">
<h5 className="text-lg font-bold text-royal-700 mb-2 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i> Long Term Impact</h5>
<p className="text-gray-700 leading-relaxed">Scaled from ₹15L to ₹45L monthly revenue while
                                    maintaining a 4.2x ROAS.</p>
</div>
<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-2xl font-extrabold text-green-600">4.2x</p>
<p className="text-xs text-gray-500 font-medium uppercase">ROAS</p>
</div>
<div>
<p className="text-2xl font-extrabold text-green-600">₹45L</p>
<p className="text-xs text-gray-500 font-medium uppercase">Revenue</p>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<img alt="Founder" className="w-10 h-10 rounded-full bg-gray-300" src="https://picsum.photos/seed/Arjun/100/100"/>
<div>
<p className="text-sm font-bold text-gray-900">Arjun Gupta</p>
<p className="text-xs text-gray-500">Founder</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-10 items-start fade-in-section">
<div className="w-full lg:w-3/5 flex flex-col gap-6">
<div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100 relative aspect-video bg-gray-900 group cursor-pointer">
<img alt="Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" src="https://picsum.photos/seed/drape/600/400"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-4 animate-pulse">
<i className="w-8 h-8 text-white" data-lucide="volume-2"></i>
</div>
<h3 className="text-xl font-bold">How Urban Drape Scaled</h3>
<p className="text-xs font-bold text-royal-200 uppercase tracking-widest">Click to Unmute
                                </p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex-1 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg text-sm uppercase tracking-wide transition-all hover:-translate-y-1">Read Full Case Study</button>
<a className="flex-1 text-center bg-royal-600 hover:bg-royal-700 text-white px-8 py-4 rounded-full font-bold shadow-lg text-sm uppercase tracking-wide transition-all hover:-translate-y-1" href="#contact">Schedule
                                Growth Call</a>
</div>
</div>
<div className="w-full lg:w-2/5">
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sticky top-32">
<div className="flex justify-between items-start mb-6 border-b border-gray-200 pb-6">
<div>
<h4 className="text-2xl font-bold text-gray-900 mb-1">Urban Drape</h4>
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Modern Ethnic
                                        Wear</p>
</div>
<div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400 font-bold">
                                    LOGO</div>
</div>
<div className="mb-8">
<h5 className="text-lg font-bold text-royal-700 mb-2 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="trending-up"></i> Short Term Results</h5>
<p className="text-xl font-bold text-gray-900 leading-tight">From Stagnant to 7-Figures in 3
                                    Months</p>
</div>
<div className="mb-8">
<h5 className="text-lg font-bold text-royal-700 mb-2 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i> Long Term Impact</h5>
<p className="text-gray-700 leading-relaxed">Cracked the code on creative testing to unlock
                                    a 300% scale in ad spend profitably.</p>
</div>
<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-2xl font-extrabold text-green-600">+300%</p>
<p className="text-xs text-gray-500 font-medium uppercase">Ad Spend</p>
</div>
<div>
<p className="text-2xl font-extrabold text-green-600">-22%</p>
<p className="text-xs text-gray-500 font-medium uppercase">CPA</p>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<img alt="Founder" className="w-10 h-10 rounded-full bg-gray-300" src="https://picsum.photos/seed/Priya/100/100"/>
<div>
<p className="text-sm font-bold text-gray-900">Priya Sharma</p>
<p className="text-xs text-gray-500">Founder</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-10 items-start fade-in-section">
<div className="w-full lg:w-3/5 flex flex-col gap-6">
<div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100 relative aspect-video bg-gray-900 group cursor-pointer">
<img alt="Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" src="https://picsum.photos/seed/nutri/600/400"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-4 animate-pulse">
<i className="w-8 h-8 text-white" data-lucide="volume-2"></i>
</div>
<h3 className="text-xl font-bold">How NutriFit Scaled</h3>
<p className="text-xs font-bold text-royal-200 uppercase tracking-widest">Click to Unmute
                                </p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex-1 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg text-sm uppercase tracking-wide transition-all hover:-translate-y-1">Read Full Case Study</button>
<a className="flex-1 text-center bg-royal-600 hover:bg-royal-700 text-white px-8 py-4 rounded-full font-bold shadow-lg text-sm uppercase tracking-wide transition-all hover:-translate-y-1" href="#contact">Schedule
                                Growth Call</a>
</div>
</div>
<div className="w-full lg:w-2/5">
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sticky top-32">
<div className="flex justify-between items-start mb-6 border-b border-gray-200 pb-6">
<div>
<h4 className="text-2xl font-bold text-gray-900 mb-1">NutriFit India</h4>
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Health
                                        Supplements</p>
</div>
<div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400 font-bold">
                                    LOGO</div>
</div>
<div className="mb-8">
<h5 className="text-lg font-bold text-royal-700 mb-2 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="trending-up"></i> Short Term Results</h5>
<p className="text-xl font-bold text-gray-900 leading-tight">Generated ₹1Cr+ in Net New
                                    Revenue</p>
</div>
<div className="mb-8">
<h5 className="text-lg font-bold text-royal-700 mb-2 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i> Long Term Impact</h5>
<p className="text-gray-700 leading-relaxed">Implemented our "Convert Protocol" to fix
                                    tracking and launch high-converting UGC ads.</p>
</div>
<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-2xl font-extrabold text-green-600">₹1.2Cr</p>
<p className="text-xs text-gray-500 font-medium uppercase">New Revenue</p>
</div>
<div>
<p className="text-2xl font-extrabold text-green-600">3.8%</p>
<p className="text-xs text-gray-500 font-medium uppercase">Conv. Rate</p>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<img alt="Founder" className="w-10 h-10 rounded-full bg-gray-300" src="https://picsum.photos/seed/Vikram/100/100"/>
<div>
<p className="text-sm font-bold text-gray-900">Vikram Singh</p>
<p className="text-xs text-gray-500">Founder</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="process">
<div className="container mx-auto px-4">
<div className="text-center mb-20 fade-in-section">
<h2 className="text-sm font-bold text-royal-600 uppercase tracking-widest mb-3">Our Process</h2>
<h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                    The Convert Protocol™
                </h3>
<p className="max-w-2xl mx-auto text-gray-600">
                    Most agencies rely on "hacks" that die in a week. We build systems that compound over years.
                    Here is how we take your brand to the next level.
                </p>
</div>
<div className="max-w-4xl mx-auto relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2">
</div>

<div className="relative flex flex-col md:flex-row gap-8 mb-16 fade-in-section">
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-royal-600 border-4 border-white rounded-full shadow-lg transform -translate-x-1/2 flex items-center justify-center z-10 text-white font-bold text-xs">
                        1</div>
<div className="hidden md:block w-1/2"></div>
<div className="w-full md:w-1/2 pl-12 md:pl-12 md:text-left">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<h4 className="text-2xl font-bold text-gray-900 mb-2">Deep Dive Audit</h4>
<p className="text-gray-600 mb-6 italic">We don't guess. We analyze.</p>
<ul className="space-y-2 flex flex-col md:items-start">
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span><span>Full account structure audit</span>
</li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span><span>Creative performance review</span>
</li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span><span>Tracking &amp; Attribution sanity check</span>
</li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span><span>Competitor landscape analysis</span>
</li>
</ul>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse gap-8 mb-16 fade-in-section">
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-royal-600 border-4 border-white rounded-full shadow-lg transform -translate-x-1/2 flex items-center justify-center z-10 text-white font-bold text-xs">
                        2</div>
<div className="hidden md:block w-1/2"></div>
<div className="w-full md:w-1/2 pl-12 md:pr-12 md:pl-0 md:text-right">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<h4 className="text-2xl font-bold text-gray-900 mb-2">The Creative Lab</h4>
<p className="text-gray-600 mb-6 italic">Performance comes from creative, not just media buying.
                            </p>
<ul className="space-y-2 flex flex-col md:items-end">
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span>Scripting high-converting UGC</span><span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span>
</li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span>Static image design sprint</span><span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span>
</li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span>Hook testing framework</span><span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span>
</li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span>Iterative feedback loops</span><span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span>
</li>
</ul>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 mb-16 fade-in-section">
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-royal-600 border-4 border-white rounded-full shadow-lg transform -translate-x-1/2 flex items-center justify-center z-10 text-white font-bold text-xs">
                        3</div>
<div className="hidden md:block w-1/2"></div>
<div className="w-full md:w-1/2 pl-12 md:pl-12 md:text-left">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<h4 className="text-2xl font-bold text-gray-900 mb-2">Scientific Scaling</h4>
<p className="text-gray-600 mb-6 italic">Aggressive scaling without breaking your ROAS.</p>
<ul className="space-y-2 flex flex-col md:items-start">
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span><span>Horizontal &amp; Vertical scaling strategies</span>
</li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span><span>Bid cap &amp; Cost cap manual bidding</span>
</li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span><span>Audience expansion (Broad + Interest)</span>
</li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<span className="w-1.5 h-1.5 bg-royal-400 rounded-full flex-shrink-0"></span><span>Daily optimization rituals</span>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform" href="#contact">
                    Apply For Partnership
                </a>
</div>
</div>
</section>

<section className="py-24 bg-royal-600 relative overflow-hidden" id="contact">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
</div>
<div className="container mx-auto px-4 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Ready To Scale?
            </h2>
<p className="text-royal-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                We only take on 3 new partners per month to ensure quality. Schedule your free audit call to see if you
                qualify.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
<button className="w-full bg-white text-royal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-none transition-colors uppercase tracking-wide">
             Book Your Strategy Call
           </button>
</div>
<p className="mt-6 text-sm text-royal-200 opacity-80">
                No pressure. No obligation. Just pure value.
            </p>
</div>
</section>

<footer className="bg-gray-900 text-white py-16">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-royal-600 rounded-lg flex items-center justify-center">
<span className="text-white font-bold text-xl">C</span>
</div>
<span className="text-2xl font-bold tracking-tight">CONVERT<span className="text-royal-500">LABS</span></span>
</div>
<p className="text-gray-400 max-w-sm mb-6">
                        We help Indian DTC brands scale past 7-figures using data-driven creatives and scientific media
                        buying.
                    </p>
<div className="flex gap-4">
<a className="p-2 bg-gray-800 rounded-full hover:bg-royal-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="p-2 bg-gray-800 rounded-full hover:bg-royal-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="p-2 bg-gray-800 rounded-full hover:bg-royal-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="p-2 bg-gray-800 rounded-full hover:bg-royal-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="mail"></i></a>
</div>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Explore</h4>
<ul className="space-y-3 text-gray-400">
<li><a className="hover:text-white transition-colors" href="#process">Our Process</a></li>
<li><a className="hover:text-white transition-colors" href="#case-studies">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#reviews">Client Reviews</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Book An Audit</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Legal</h4>
<ul className="space-y-3 text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
<p>© 2024 Convert Labs Marketing Agency. All rights reserved.</p>
<p className="mt-2 md:mt-0">Not affiliated with Meta Platforms, Inc.</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 animate-bounce">
<a aria-label="Contact Us" className="w-14 h-14 bg-royal-600 rounded-full flex items-center justify-center shadow-lg shadow-royal-600/40 text-white hover:scale-110 transition-transform cursor-pointer" href="#contact">
<i className="w-6 h-6" data-lucide="phone"></i>
</a>
</div>



    </>
  );
}
