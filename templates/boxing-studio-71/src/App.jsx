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
colors: {
crimson: {
50: '#fef2f2',
100: '#fee2e2',
200: '#fecaca',
300: '#fca5a5',
400: '#f87171',
500: '#dc143c',
600: '#b91c3c',
700: '#9f1239',
800: '#881337',
900: '#4c0519',
}
}
}
}
}



        lucide.createIcons();

        function switchPage(pageId) {
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            const target = document.getElementById(pageId);
            target.classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            setTimeout(() => lucide.createIcons(), 100);
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
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#" onclick="switchPage('home')">
<div className="w-10 h-10 bg-crimson-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<span className="font-display text-xl text-white">IG</span>
</div>
<span className="font-display text-2xl tracking-wide text-zinc-900 hidden sm:block">IRON &amp; GRIT</span>
</a>

<div className="hidden md:flex items-center gap-10">
<button className="text-sm font-medium text-zinc-500 hover:text-crimson-500 transition-colors" onclick="switchPage('classes')">Classes</button>
<button className="text-sm font-medium text-zinc-500 hover:text-crimson-500 transition-colors" onclick="switchPage('booking')">Book</button>
<button className="text-sm font-medium text-zinc-500 hover:text-crimson-500 transition-colors" onclick="switchPage('home')">Locations</button>
<button className="text-sm font-medium text-zinc-500 hover:text-crimson-500 transition-colors" onclick="switchPage('home')">Trainers</button>
</div>

<div className="flex items-center gap-4">
<button className="bg-crimson-500 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-crimson-600 transition-all rounded-full glow-crimson" onclick="switchPage('booking')">
                    Book a Class
                </button>
</div>
</div>
</nav>

<div className="pt-20" id="main-content">

<div className="page-section active" id="home">

<header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-zinc-50">

<div className="absolute inset-0 z-0">
<img alt="Boxing" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-white/80"></div>
</div>

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-crimson-500/10 to-transparent z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-6 animate-enter">
<div className="w-2 h-2 bg-crimson-500 rounded-full"></div>
<span className="text-crimson-500 text-sm font-semibold uppercase tracking-widest">Now Open in Manhattan</span>
</div>
<h1 className="text-7xl md:text-9xl font-display text-zinc-900 leading-none mb-8 animate-enter-delay-1">
                            BOXING<br/>
<span className="text-crimson-500">REIMAGINED</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-600 mb-10 leading-relaxed font-light max-w-xl animate-enter-delay-2">
                            10 rounds. Killer playlist. Zero experience needed. This is the workout that changes everything.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 animate-enter-delay-3">
<button className="bg-crimson-500 text-white px-10 py-5 text-base font-bold uppercase tracking-wide hover:bg-crimson-600 transition-colors rounded-full flex items-center justify-center gap-3 group" onclick="switchPage('booking')">
                                Book Your First Class
                                <i className="w-5 h-5 stroke-[2] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="border-2 border-zinc-900 text-zinc-900 px-10 py-5 text-base font-bold uppercase tracking-wide hover:bg-zinc-900 hover:text-white transition-all rounded-full" onclick="switchPage('classes')">
                                See Classes
                            </button>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
<span className="text-xs uppercase tracking-widest text-zinc-400">Scroll</span>
<i className="w-5 h-5 text-zinc-400 stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</header>

<div className="bg-crimson-500 py-4 overflow-hidden">
<div className="flex whitespace-nowrap marquee">
<span className="font-display text-2xl md:text-3xl text-white mx-8">SWEAT IT OUT</span>
<span className="text-white/60 mx-4">★</span>
<span className="font-display text-2xl md:text-3xl text-white mx-8">PUNCH IT OUT</span>
<span className="text-white/60 mx-4">★</span>
<span className="font-display text-2xl md:text-3xl text-white mx-8">10 ROUNDS</span>
<span className="text-white/60 mx-4">★</span>
<span className="font-display text-2xl md:text-3xl text-white mx-8">45 MINUTES</span>
<span className="text-white/60 mx-4">★</span>
<span className="font-display text-2xl md:text-3xl text-white mx-8">SWEAT IT OUT</span>
<span className="text-white/60 mx-4">★</span>
<span className="font-display text-2xl md:text-3xl text-white mx-8">PUNCH IT OUT</span>
<span className="text-white/60 mx-4">★</span>
<span className="font-display text-2xl md:text-3xl text-white mx-8">10 ROUNDS</span>
<span className="text-white/60 mx-4">★</span>
<span className="font-display text-2xl md:text-3xl text-white mx-8">45 MINUTES</span>
<span className="text-white/60 mx-4">★</span>
</div>
</div>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="p-8">
<span className="font-display text-6xl md:text-7xl text-crimson-500">800+</span>
<p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">Calories Burned</p>
</div>
<div className="p-8">
<span className="font-display text-6xl md:text-7xl text-zinc-900">10</span>
<p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">Rounds</p>
</div>
<div className="p-8">
<span className="font-display text-6xl md:text-7xl text-crimson-500">45</span>
<p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">Minutes</p>
</div>
<div className="p-8">
<span className="font-display text-6xl md:text-7xl text-zinc-900">0</span>
<p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">Experience Needed</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-crimson-500 text-sm font-semibold uppercase tracking-widest mb-4 block">The Experience</span>
<h2 className="font-display text-5xl md:text-7xl text-zinc-900 mb-8 leading-tight">WHAT IS<br/>IRON &amp; GRIT?</h2>
<p className="text-xl text-zinc-600 mb-6 leading-relaxed">
                                A boxing-inspired group fitness class that combines heavy bag work with strength training. Set to heart-pumping music in a club-like atmosphere.
                            </p>
<p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                                No partner work. No getting hit. Just you, the bag, and the best workout of your life.
                            </p>
<div className="flex flex-wrap gap-4">
<div className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-sm border border-zinc-100">
<i className="w-5 h-5 text-crimson-500 stroke-[1.5]" data-lucide="music"></i>
<span className="text-sm font-medium text-zinc-700">Beat-Driven</span>
</div>
<div className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-sm border border-zinc-100">
<i className="w-5 h-5 text-crimson-500 stroke-[1.5]" data-lucide="dumbbell"></i>
<span className="text-sm font-medium text-zinc-700">Full Body</span>
</div>
<div className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-sm border border-zinc-100">
<i className="w-5 h-5 text-crimson-500 stroke-[1.5]" data-lucide="flame"></i>
<span className="text-sm font-medium text-zinc-700">High Energy</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1591117207239-78898dd1ca65?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -left-8 bg-crimson-500 rounded-2xl p-6 max-w-xs shadow-xl">
<div className="flex items-center gap-3 mb-3">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="zap"></i>
</div>
<span className="font-display text-2xl text-white">FIRST CLASS FREE</span>
</div>
<p className="text-white/80 text-sm">Try us out, no strings attached.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-crimson-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Find Us</span>
<h2 className="font-display text-5xl md:text-7xl text-zinc-900">OUR STUDIOS</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative rounded-3xl overflow-hidden hover-lift cursor-pointer shadow-lg">
<div className="aspect-[4/3]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Open Now</span>
</div>
<h3 className="font-display text-4xl text-white mb-2">LOWER EAST SIDE</h3>
<p className="text-zinc-300 mb-4">145 Ludlow Street, NYC</p>
<button className="bg-white text-zinc-900 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-crimson-500 hover:text-white transition-colors">
                                    View Schedule
                                </button>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden hover-lift cursor-pointer shadow-lg">
<div className="aspect-[4/3]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Open Now</span>
</div>
<h3 className="font-display text-4xl text-white mb-2">HELL'S KITCHEN</h3>
<p className="text-zinc-300 mb-4">630 9th Avenue, NYC</p>
<button className="bg-white text-zinc-900 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-crimson-500 hover:text-white transition-colors">
                                    View Schedule
                                </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<span className="text-crimson-500 text-sm font-semibold uppercase tracking-widest mb-4 block">The Team</span>
<h2 className="font-display text-5xl md:text-7xl text-zinc-900">MEET YOUR<br/>TRAINERS</h2>
</div>
<button className="mt-6 md:mt-0 text-crimson-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                            View All <i className="w-5 h-5 stroke-[2]" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-crimson-500/0 group-hover:bg-crimson-500/30 transition-colors"></div>
</div>
<h4 className="font-display text-2xl text-zinc-900">MARCUS V.</h4>
<p className="text-zinc-500 text-sm">Head Trainer</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-crimson-500/0 group-hover:bg-crimson-500/30 transition-colors"></div>
</div>
<h4 className="font-display text-2xl text-zinc-900">SARAH J.</h4>
<p className="text-zinc-500 text-sm">Senior Coach</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-crimson-500/0 group-hover:bg-crimson-500/30 transition-colors"></div>
</div>
<h4 className="font-display text-2xl text-zinc-900">DAVID C.</h4>
<p className="text-zinc-500 text-sm">Coach</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-crimson-500/0 group-hover:bg-crimson-500/30 transition-colors"></div>
</div>
<h4 className="font-display text-2xl text-zinc-900">ELENA R.</h4>
<p className="text-zinc-500 text-sm">Coach</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 opacity-5">
<div className="absolute top-10 left-10 font-display text-[20rem] text-white leading-none">★</div>
<div className="absolute bottom-10 right-10 font-display text-[20rem] text-white leading-none">★</div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-display text-5xl md:text-8xl text-white mb-8">READY TO<br/>RUMBLE?</h2>
<p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Your first class is on us. No commitment, no pressure. Just show up and throw down.
                    </p>
<button className="bg-crimson-500 text-white px-12 py-5 text-lg font-bold uppercase tracking-wide hover:bg-crimson-600 transition-colors rounded-full inline-flex items-center gap-3" onclick="switchPage('booking')">
                        Claim Free Class
                        <i className="w-6 h-6 stroke-[2]" data-lucide="arrow-right"></i>
</button>
</div>
</section>
</div>

<div className="page-section" id="classes">

<div className="py-32 px-6 bg-zinc-50 relative overflow-hidden">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-zinc-50"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<span className="text-crimson-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Classes</span>
<h2 className="font-display text-6xl md:text-9xl text-zinc-900 mb-6">THE WORKOUT</h2>
<p className="text-zinc-600 max-w-2xl text-xl font-light">Every class is designed to push your limits, torch calories, and leave you feeling unstoppable.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20 bg-white">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl overflow-hidden hover-lift group shadow-lg border border-zinc-100">
<div className="aspect-video relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1591117207239-78898dd1ca65?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-crimson-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Signature</div>
</div>
<div className="p-8">
<h3 className="font-display text-3xl text-zinc-900 mb-3">FULL BODY BURN</h3>
<div className="flex gap-3 mb-4">
<span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-medium">45 min</span>
<span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-medium">All Levels</span>
</div>
<p className="text-zinc-500 mb-6 leading-relaxed">
                                Our signature class. 10 rounds alternating between boxing and strength training. High energy, high results.
                            </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-crimson-500">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="flame"></i>
<span className="text-sm font-semibold">800+ cal</span>
</div>
<button className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-crimson-500 transition-colors" onclick="switchPage('booking')">
                                    Book Now
                                </button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden hover-lift group shadow-lg border border-zinc-100">
<div className="aspect-video relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-zinc-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Technique</div>
</div>
<div className="p-8">
<h3 className="font-display text-3xl text-zinc-900 mb-3">BOXING BASICS</h3>
<div className="flex gap-3 mb-4">
<span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-medium">60 min</span>
<span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-medium">Beginner</span>
</div>
<p className="text-zinc-500 mb-6 leading-relaxed">
                                Master the fundamentals. Focused on proper form, footwork, and combinations at a manageable pace.
                            </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-crimson-500">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="flame"></i>
<span className="text-sm font-semibold">500+ cal</span>
</div>
<button className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-crimson-500 transition-colors" onclick="switchPage('booking')">
                                    Book Now
                                </button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden hover-lift group shadow-lg border border-zinc-100">
<div className="aspect-video relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-crimson-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Intense</div>
</div>
<div className="p-8">
<h3 className="font-display text-3xl text-zinc-900 mb-3">POWER HOUR</h3>
<div className="flex gap-3 mb-4">
<span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-medium">60 min</span>
<span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-medium">Advanced</span>
</div>
<p className="text-zinc-500 mb-6 leading-relaxed">
                                Our most challenging class. Extended rounds, heavier weights, and zero rest. Not for the faint of heart.
                            </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-crimson-500">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="flame"></i>
<span className="text-sm font-semibold">1000+ cal</span>
</div>
<button className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-crimson-500 transition-colors" onclick="switchPage('booking')">
                                    Book Now
                                </button>
</div>
</div>
</div>
</div>

<div className="mt-24 bg-zinc-50 rounded-3xl p-12 border border-zinc-100">
<h3 className="font-display text-4xl text-zinc-900 mb-8 text-center">WHAT TO EXPECT</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-crimson-500 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-white stroke-[1.5]" data-lucide="hand-metal"></i>
</div>
<h4 className="font-display text-xl text-zinc-900 mb-2">WRAPS PROVIDED</h4>
<p className="text-zinc-500 text-sm">We've got everything you need. Just show up.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-crimson-500 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-white stroke-[1.5]" data-lucide="sparkles"></i>
</div>
<h4 className="font-display text-xl text-zinc-900 mb-2">LIGHTS &amp; SOUND</h4>
<p className="text-zinc-500 text-sm">Club-like atmosphere with curated playlists.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-crimson-500 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-white stroke-[1.5]" data-lucide="heart"></i>
</div>
<h4 className="font-display text-xl text-zinc-900 mb-2">ALL LEVELS</h4>
<p className="text-zinc-500 text-sm">Modifications for every fitness level.</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="booking">
<div className="max-w-7xl mx-auto px-6 py-12 bg-white">

<div className="text-center mb-12 animate-enter">
<span className="text-crimson-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Book a Class</span>
<h2 className="font-display text-5xl md:text-7xl text-zinc-900 mb-4">PICK YOUR SPOT</h2>
<p className="text-zinc-500 text-lg">Select a date, time, and location below.</p>
</div>

<div className="flex justify-center gap-3 mb-12 overflow-x-auto no-scrollbar pb-4 animate-enter-delay-1">
<button className="flex flex-col items-center justify-center w-20 h-24 bg-crimson-500 text-white rounded-2xl flex-shrink-0 transition-all shadow-lg">
<span className="text-xs uppercase tracking-wider font-medium">Mon</span>
<span className="text-3xl font-display">14</span>
</button>
<button className="flex flex-col items-center justify-center w-20 h-24 bg-zinc-100 text-zinc-500 rounded-2xl hover:bg-zinc-200 hover:text-zinc-900 flex-shrink-0 transition-all">
<span className="text-xs uppercase tracking-wider font-medium">Tue</span>
<span className="text-3xl font-display">15</span>
</button>
<button className="flex flex-col items-center justify-center w-20 h-24 bg-zinc-100 text-zinc-500 rounded-2xl hover:bg-zinc-200 hover:text-zinc-900 flex-shrink-0 transition-all">
<span className="text-xs uppercase tracking-wider font-medium">Wed</span>
<span className="text-3xl font-display">16</span>
</button>
<button className="flex flex-col items-center justify-center w-20 h-24 bg-zinc-100 text-zinc-500 rounded-2xl hover:bg-zinc-200 hover:text-zinc-900 flex-shrink-0 transition-all">
<span className="text-xs uppercase tracking-wider font-medium">Thu</span>
<span className="text-3xl font-display">17</span>
</button>
<button className="flex flex-col items-center justify-center w-20 h-24 bg-zinc-100 text-zinc-500 rounded-2xl hover:bg-zinc-200 hover:text-zinc-900 flex-shrink-0 transition-all">
<span className="text-xs uppercase tracking-wider font-medium">Fri</span>
<span className="text-3xl font-display">18</span>
</button>
<button className="flex flex-col items-center justify-center w-20 h-24 bg-zinc-100 text-zinc-500 rounded-2xl hover:bg-zinc-200 hover:text-zinc-900 flex-shrink-0 transition-all">
<span className="text-xs uppercase tracking-wider font-medium">Sat</span>
<span className="text-3xl font-display">19</span>
</button>
<button className="flex flex-col items-center justify-center w-20 h-24 bg-zinc-100 text-zinc-500 rounded-2xl hover:bg-zinc-200 hover:text-zinc-900 flex-shrink-0 transition-all">
<span className="text-xs uppercase tracking-wider font-medium">Sun</span>
<span className="text-3xl font-display">20</span>
</button>
</div>

<div className="flex justify-center mb-12 animate-enter-delay-2">
<div className="bg-zinc-100 rounded-full p-1 inline-flex">
<button className="px-6 py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold transition-all">Lower East Side</button>
<button className="px-6 py-3 rounded-full text-zinc-500 text-sm font-semibold hover:text-zinc-900 transition-all">Hell's Kitchen</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-enter-delay-3">

<div className="group bg-white rounded-2xl p-6 hover:bg-zinc-50 transition-all cursor-pointer border-2 border-zinc-100 hover:border-crimson-500 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<span className="font-display text-3xl text-zinc-900">6:00 AM</span>
<p className="text-zinc-400 text-sm">45 minutes</p>
</div>
<div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                                12 spots
                            </div>
</div>
<h4 className="font-display text-xl text-zinc-900 mb-2">FULL BODY BURN</h4>
<div className="flex items-center gap-3 text-zinc-500 text-sm mb-4">
<div className="flex items-center gap-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="user"></i>
                                Marcus V.
                            </div>
</div>
<button className="w-full bg-crimson-500 text-white py-3 rounded-full text-sm font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                            Book This Class
                        </button>
</div>

<div className="group bg-white rounded-2xl p-6 hover:bg-zinc-50 transition-all cursor-pointer border-2 border-zinc-100 hover:border-crimson-500 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<span className="font-display text-3xl text-zinc-900">7:30 AM</span>
<p className="text-zinc-400 text-sm">60 minutes</p>
</div>
<div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                                8 spots
                            </div>
</div>
<h4 className="font-display text-xl text-zinc-900 mb-2">BOXING BASICS</h4>
<div className="flex items-center gap-3 text-zinc-500 text-sm mb-4">
<div className="flex items-center gap-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="user"></i>
                                Sarah J.
                            </div>
</div>
<button className="w-full bg-crimson-500 text-white py-3 rounded-full text-sm font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                            Book This Class
                        </button>
</div>

<div className="bg-zinc-50 rounded-2xl p-6 border-2 border-zinc-200">
<div className="flex justify-between items-start mb-4">
<div>
<span className="font-display text-3xl text-zinc-400">12:00 PM</span>
<p className="text-zinc-300 text-sm">45 minutes</p>
</div>
<div className="bg-crimson-100 text-crimson-500 px-3 py-1 rounded-full text-xs font-semibold">
                                Waitlist
                            </div>
</div>
<h4 className="font-display text-xl text-zinc-400 mb-2">FULL BODY BURN</h4>
<div className="flex items-center gap-3 text-zinc-400 text-sm mb-4">
<div className="flex items-center gap-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="user"></i>
                                Marcus V.
                            </div>
</div>
<button className="w-full border border-zinc-300 text-zinc-400 py-3 rounded-full text-sm font-bold uppercase">
                            Join Waitlist
                        </button>
</div>

<div className="group bg-white rounded-2xl p-6 hover:bg-zinc-50 transition-all cursor-pointer border-2 border-zinc-100 hover:border-crimson-500 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<span className="font-display text-3xl text-zinc-900">5:30 PM</span>
<p className="text-zinc-400 text-sm">45 minutes</p>
</div>
<div className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-xs font-semibold">
                                3 spots
                            </div>
</div>
<h4 className="font-display text-xl text-zinc-900 mb-2">FULL BODY BURN</h4>
<div className="flex items-center gap-3 text-zinc-500 text-sm mb-4">
<div className="flex items-center gap-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="user"></i>
                                David C.
                            </div>
</div>
<button className="w-full bg-crimson-500 text-white py-3 rounded-full text-sm font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                            Book This Class
                        </button>
</div>

<div className="group bg-white rounded-2xl p-6 hover:bg-zinc-50 transition-all cursor-pointer border-2 border-zinc-100 hover:border-crimson-500 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<span className="font-display text-3xl text-zinc-900">6:45 PM</span>
<p className="text-zinc-400 text-sm">60 minutes</p>
</div>
<div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                                15 spots
                            </div>
</div>
<h4 className="font-display text-xl text-zinc-900 mb-2">POWER HOUR</h4>
<div className="flex items-center gap-3 text-zinc-500 text-sm mb-4">
<div className="flex items-center gap-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="user"></i>
                                Elena R.
                            </div>
</div>
<button className="w-full bg-crimson-500 text-white py-3 rounded-full text-sm font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                            Book This Class
                        </button>
</div>

<div className="group bg-white rounded-2xl p-6 hover:bg-zinc-50 transition-all cursor-pointer border-2 border-zinc-100 hover:border-crimson-500 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<span className="font-display text-3xl text-zinc-900">8:00 PM</span>
<p className="text-zinc-400 text-sm">45 minutes</p>
</div>
<div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                                20 spots
                            </div>
</div>
<h4 className="font-display text-xl text-zinc-900 mb-2">FULL BODY BURN</h4>
<div className="flex items-center gap-3 text-zinc-500 text-sm mb-4">
<div className="flex items-center gap-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="user"></i>
                                Sarah J.
                            </div>
</div>
<button className="w-full bg-crimson-500 text-white py-3 rounded-full text-sm font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                            Book This Class
                        </button>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-zinc-900 pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-crimson-500 rounded-full flex items-center justify-center">
<span className="font-display text-2xl text-white">IG</span>
</div>
<span className="font-display text-3xl text-white">IRON &amp; GRIT</span>
</div>
<p className="text-zinc-400 mb-8 max-w-sm">
                        Boxing-inspired fitness in the heart of Manhattan. Where the music is loud and the results are real.
                    </p>
<div className="flex gap-4">
<a className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-crimson-500 transition-colors" href="#">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="instagram"></i>
</a>
<a className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-crimson-500 transition-colors" href="#">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="twitter"></i>
</a>
<a className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-crimson-500 transition-colors" href="#">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="youtube"></i>
</a>
</div>
</div>
<div>
<h5 className="font-display text-xl text-white mb-6">QUICK LINKS</h5>
<ul className="space-y-3">
<li><button className="text-zinc-400 hover:text-white transition-colors" onclick="switchPage('classes')">Classes</button></li>
<li><button className="text-zinc-400 hover:text-white transition-colors" onclick="switchPage('booking')">Book Now</button></li>
<li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Locations</a></li>
</ul>
</div>
<div>
<h5 className="font-display text-xl text-white mb-6">NEWSLETTER</h5>
<p className="text-zinc-400 text-sm mb-4">Get exclusive offers and updates.</p>
<div className="flex">
<input className="bg-zinc-800 border-none rounded-l-full px-5 py-3 text-white placeholder-zinc-500 flex-grow outline-none focus:ring-2 focus:ring-crimson-500" placeholder="Your email" type="email"/>
<button className="bg-crimson-500 text-white px-6 py-3 rounded-r-full font-semibold hover:bg-crimson-600 transition-colors">
<i className="w-5 h-5 stroke-[2]" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
<p>© 2024 Iron &amp; Grit Boxing Studio. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
