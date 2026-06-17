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
mint: {
DEFAULT: '#7BBCAD', // Brand Mint
soft: '#DFFBF3',    // Soft Background
},
deepRed: '#651414',   // Brand Text
coral: {
DEFAULT: '#E96C6C', // Brand Coral
hover: '#D65A5A',
},
white: '#FFFFFF',
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
900: '#111827',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
borderRadius: {
'card': '18px',
'btn': '12px',
},
boxShadow: {
'soft': '0 8px 30px -4px rgba(101, 20, 20, 0.08)',
'glow': '0 0 40px rgba(123, 188, 173, 0.4)',
'slap': '0 0 50px rgba(123, 188, 173, 0.6)',
},
animation: {
'swipe-demo': 'swipeDemo 4s infinite ease-in-out',
'float': 'float 6s ease-in-out infinite',
'fade-up': 'fadeUp 0.8s ease-out forwards',
},
keyframes: {
swipeDemo: {
'0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
'50%': { transform: 'translateX(60px) rotate(8deg)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(12px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 bg-mint-soft/90 backdrop-blur-md border-b border-teal-900/5">
<div className="lg:px-20 flex h-20 max-w-[1280px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-9 h-9 flex items-center justify-center">
<svg className="text-mint group-hover:scale-110 transition-transform w-[36px] h-[36px]" fill="none" height="100%" strokeWidth="2" viewbox="0 0 48 48" width="100%" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 24C12 18.4772 16.4772 14 22 14H24C29.5228 14 34 18.4772 34 24V30C34 32.2091 32.2091 34 30 34H26C24.8954 34 24 34.8954 24 36V38C24 40.2091 22.2091 42 20 42H16C13.7909 42 12 40.2091 12 38V24ZM16 26C15.4477 26 15 26.4477 15 27V38C15 38.5523 15.4477 39 16 39H20C20.5523 39 21 38.5523 21 38V36C21 33.2386 23.2386 31 26 31H30C30.5523 31 31 30.5523 31 30V24C31 20.134 27.866 17 24 17H22C18.134 17 15 20.134 15 24H16V26Z" fill="currentColor" fill-rule="evenodd"></path>
<path className="opacity-40" d="M34 14C32 10 26 6 20 10" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<path className="opacity-40" d="M40 20C38 16 34 14 34 14" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-deepRed text-2xl font-bold tracking-tighter font-display">1slap</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-deepRed/80 hover:text-coral transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm font-medium text-deepRed/80 hover:text-coral transition-colors" href="#feed">Feed</a>
<a className="text-sm font-medium px-5 py-2.5 bg-coral text-white rounded-full hover:bg-coral-hover transition-colors shadow-sm" href="#for-founders">For Founders</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden" id="hero">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col items-start z-10 animate-fade-up">
<h1 className="font-display text-deepRed mb-8 text-balance text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] font-bold">
              Make or Break Startup Ideas With <span className="text-mint">One Swipe.</span>
</h1>
<p className="text-deepRed/80 mb-10 max-w-[580px] text-lg lg:text-xl leading-relaxed">
              Slap the ideas you’d buy. Flop the ones you wouldn’t.
              Founders don’t need polite opinions — they need your verdict.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="btn-primary w-full sm:w-auto px-8 py-4 rounded-btn text-white font-medium text-lg text-center flex items-center justify-center gap-2 group" href="#feed">
                Slap or FLOP Ideas
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="btn-coral w-full sm:w-auto px-8 py-4 rounded-btn text-white font-medium text-lg text-center flex items-center justify-center gap-2" href="#for-founders">
                For Founders
              </a>
</div>
</div>

<div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-white rounded-full blur-[90px] -z-10"></div>

<div className="phone-frame relative w-[280px] h-[580px] bg-gray-900 rounded-[40px] border-4 border-gray-800 overflow-hidden animate-float">

<div className="w-full h-full bg-white relative overflow-hidden flex flex-col">

<div className="h-6 w-full flex justify-between items-center px-4 pt-2">
<div className="w-12 h-3 rounded-full bg-gray-100"></div>
<div className="w-4 h-4 rounded-full bg-gray-100"></div>
</div>

<div className="flex-1 flex items-center justify-center p-4 perspective-[1000px]">
<div className="relative w-full h-[400px] animate-swipe-demo shadow-slap rounded-card">

<div className="w-full h-full bg-gray-100 rounded-card overflow-hidden relative border border-gray-200">

<img alt="Pitch" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

<div className="absolute bottom-6 left-5 right-5 text-white">
<div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Pitch #2049</div>
<div className="text-2xl font-display font-bold leading-tight">AI Meal Planner</div>
</div>

<div className="absolute top-8 left-6 border-4 border-mint text-mint px-4 py-1 rounded font-display font-bold text-3xl tracking-widest uppercase opacity-90 -rotate-12 bg-white/10 backdrop-blur-sm">
                        SLAP
                      </div>
</div>
</div>
</div>

<div className="h-20 bg-white border-t border-gray-100 flex justify-around items-center px-6">
<div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral">
<svg data-lucide="x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center text-white shadow-lg transform -translate-y-2">
<svg data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5 4.5 2 4.5C13.5 11 11 13 11 17c0 2.29 1.54 3.79 3 5.5 2 2.21 4.5 4 4.5 4s2.5-1.79 4.5-4c1.46-1.71 3-3.21 3-5.5 0-2.29-1.54-3.79-3-5.5A5.5 5.5 0 0 0 19.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 4 8.5c0 2.29 1.54 4.04 3 5.5l9 10 9-10z" fill="currentColor"></path></svg>
</div>
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
<svg data-lucide="info" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 text-center bg-white" id="how-it-works">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<h2 className="font-display text-4xl md:text-5xl font-bold text-deepRed mb-16 tracking-tight">
          Swipe Truth Into the Startup World
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="flex flex-col items-center group">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300 border border-teal-50">
<svg className="w-10 h-10 text-mint" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</div>
<h3 className="font-display text-2xl font-bold text-deepRed mb-4 tracking-tight">1 — Watch the Pitch</h3>
<p className="text-deepRed/70 px-4 text-lg leading-relaxed">
              Short, honest 30–60 second videos from real founders. No fluff, just the core idea.
            </p>
</div>

<div className="flex flex-col items-center group">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300 border border-teal-50">
<svg className="w-10 h-10 text-coral" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="font-display text-2xl font-bold text-deepRed mb-4 tracking-tight">2 — Slap or Flop</h3>
<p className="text-deepRed/70 px-4 text-lg leading-relaxed">
              Swipe right to Slap (you’d buy it). Swipe left to Flop (you wouldn’t). Your vote is a signal.
            </p>
</div>

<div className="flex flex-col items-center group">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300 border border-teal-50">
<svg className="w-10 h-10 text-deepRed" data-lucide="unlock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
</div>
<h3 className="font-display text-2xl font-bold text-deepRed mb-4 tracking-tight">3 — See What Happens</h3>
<p className="text-deepRed/70 px-4 text-lg leading-relaxed">
              A slap unlocks more details — and gets you inside access to ideas you support.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-mint-soft" id="feed">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20 text-center">
<div className="mb-12">
<h2 className="font-display text-4xl md:text-5xl font-bold text-deepRed mb-4 tracking-tight">
            Ideas People Are Voting On Right Now
          </h2>
<p className="text-deepRed/70 text-xl">
            Explore what others are judging — or jump straight into the action.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-white rounded-card overflow-hidden shadow-sm border border-white/50 p-3 h-80 flex flex-col items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
<div className="w-full h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
<img alt="preview" className="w-full h-full object-cover blur-[2px]" src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-black/30 backdrop-blur-sm rounded-full p-2">
<svg className="text-white w-6 h-6 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</div>
</div>
</div>
<h3 className="font-display font-bold text-xl text-deepRed">CreatorAnalytics</h3>
<span className="text-xs font-semibold text-mint bg-mint-soft px-2 py-1 rounded mt-2">SaaS</span>
<div className="flex gap-2 mt-4 opacity-40 grayscale">
<span className="border border-deepRed rounded px-2 text-xs font-bold">FLOP</span>
<span className="border border-deepRed rounded px-2 text-xs font-bold">SLAP</span>
</div>
</div>

<div className="bg-white rounded-card overflow-hidden shadow-sm border border-white/50 p-3 h-80 flex flex-col items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
<div className="w-full h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
<img alt="preview" className="w-full h-full object-cover blur-[2px]" src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-black/30 backdrop-blur-sm rounded-full p-2">
<svg className="text-white w-6 h-6 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</div>
</div>
</div>
<h3 className="font-display font-bold text-xl text-deepRed">FitTrack AI</h3>
<span className="text-xs font-semibold text-mint bg-mint-soft px-2 py-1 rounded mt-2">Mobile App</span>
<div className="flex gap-2 mt-4 opacity-40 grayscale">
<span className="border border-deepRed rounded px-2 text-xs font-bold">FLOP</span>
<span className="border border-deepRed rounded px-2 text-xs font-bold">SLAP</span>
</div>
</div>

<div className="bg-white rounded-card overflow-hidden shadow-sm border border-white/50 p-3 h-80 flex flex-col items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
<div className="w-full h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
<img alt="preview" className="w-full h-full object-cover blur-[2px]" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-black/30 backdrop-blur-sm rounded-full p-2">
<svg className="text-white w-6 h-6 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</div>
</div>
</div>
<h3 className="font-display font-bold text-xl text-deepRed">SoloTraveler</h3>
<span className="text-xs font-semibold text-mint bg-mint-soft px-2 py-1 rounded mt-2">Community</span>
<div className="flex gap-2 mt-4 opacity-40 grayscale">
<span className="border border-deepRed rounded px-2 text-xs font-bold">FLOP</span>
<span className="border border-deepRed rounded px-2 text-xs font-bold">SLAP</span>
</div>
</div>
</div>
<div>
<a className="btn-outline inline-flex items-center font-medium px-8 py-4 rounded-full text-lg" href="#hero">
            Start Swiping
            <svg className="w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-teal-50">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<div className="flex flex-col lg:flex-row items-start justify-between gap-16">
<div className="lg:w-1/3">
<div className="w-16 h-16 bg-mint-soft rounded-2xl flex items-center justify-center mb-6 text-mint">
<svg data-lucide="megaphone" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
</div>
<h2 className="font-display text-4xl font-bold text-deepRed mb-6 tracking-tight">Why Your Vote Matters</h2>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
<div>
<h3 className="font-display text-2xl font-bold text-deepRed mb-3">You Shape What Gets Built</h3>
<p className="text-deepRed/70 text-lg leading-relaxed">
                Founders adjust their roadmap based on Slap/Flop ratios — your vote drives real decisions.
              </p>
</div>
<div>
<h3 className="font-display text-2xl font-bold text-deepRed mb-3">Discover Bold Ideas First</h3>
<p className="text-deepRed/70 text-lg leading-relaxed">
                Fresh startup pitches drop daily across AI, apps, creator tools, lifestyle, and more.
              </p>
</div>
<div className="md:col-span-2">
<h3 className="font-display text-2xl font-bold text-deepRed mb-3">Instant Participation</h3>
<p className="text-deepRed/70 text-lg leading-relaxed">
                No account. No friction. No barriers. Just swipe and influence the future.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display text-4xl md:text-5xl font-bold text-deepRed mb-8 tracking-tight">
              When an Idea Slaps, It Moves Forward
            </h2>
<p className="text-xl text-deepRed/80 mb-8 font-medium">A slapped idea gains momentum:</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-lg text-deepRed/70">
<svg className="text-mint w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                It rises in the rankings
              </li>
<li className="flex items-center gap-3 text-lg text-deepRed/70">
<svg className="text-mint w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                Founders get reliable buyer-intent signals
              </li>
<li className="flex items-center gap-3 text-lg text-deepRed/70">
<svg className="text-mint w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                Early adopters join the hype list
              </li>
<li className="flex items-center gap-3 text-lg text-deepRed/70">
<svg className="text-mint w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                The idea becomes more likely to be built
              </li>
</ul>
<div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
<p className="font-display text-xl font-bold text-deepRed mb-1">Every slap is a vote for what should exist.</p>
<p className="text-deepRed/60">Every flop prevents wasted time, energy, and money.</p>
</div>
</div>

<div className="relative bg-white rounded-2xl shadow-soft p-8 h-[400px] flex flex-col justify-end border border-gray-100">
<div className="absolute top-8 left-8">
<span className="bg-mint-soft text-mint px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">Trending</span>
</div>

<svg className="w-full h-full absolute inset-0 text-mint opacity-10" fill="currentColor" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L0 80 L20 70 L40 75 L60 50 L80 30 L100 10 L100 100 Z"></path>
</svg>
<svg className="w-full h-[70%] z-10 overflow-visible" viewbox="0 0 400 200">

<path d="M0 180 C100 180, 150 150, 200 100 S300 50, 400 20" fill="none" stroke="#7BBCAD" strokeLinecap="round" strokeWidth="4"></path>

<circle cx="0" cy="180" fill="white" r="6" stroke="#7BBCAD" strokeWidth="3"></circle>
<circle cx="200" cy="100" fill="white" r="6" stroke="#7BBCAD" strokeWidth="3"></circle>
<circle cx="400" cy="20" fill="white" r="6" stroke="#7BBCAD" strokeWidth="3"></circle>
</svg>
<div className="flex justify-between text-sm text-gray-400 font-medium mt-4 pt-4 border-t border-gray-100">
<span>Day 1</span>
<span>Day 7</span>
<span>Day 14</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="for-founders">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<div className="mb-16 text-center max-w-3xl mx-auto">
<h2 className="font-display text-4xl md:text-5xl font-bold text-deepRed mb-6 tracking-tight">Are You a Founder?</h2>
<p className="text-xl text-deepRed/80 leading-relaxed">
             You’re building something new — but is anyone truly ready for it?
             Upload your pitch and get real buyer-intent, not vague opinions.
           </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 relative">
<div className="relative w-full aspect-[16/10] rounded-t-[16px] p-2 shadow-2xl border-t-2 border-x-2 bg-gray-800 border-gray-700">
<div className="w-full h-full bg-white rounded-t-[8px] overflow-hidden flex flex-col">

<div className="h-8 border-b bg-gray-50 flex items-center px-3 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-coral/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-mint"></div>
</div>

<div className="p-6 bg-gray-50 flex-1 overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="font-display font-bold text-xl text-deepRed">Dashboard</h4>
<p className="text-xs text-gray-500">Live Analytics</p>
</div>
<span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Active</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
<div className="text-2xl font-display font-bold text-mint">84%</div>
<div className="text-xs text-gray-400 uppercase tracking-wide">Slap Rate</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
<div className="text-2xl font-display font-bold text-deepRed">1.2k</div>
<div className="text-xs text-gray-400 uppercase tracking-wide">Hype List</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm h-32 flex items-end gap-2 px-6 pb-2">
<div className="w-full bg-mint/30 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-mint/50 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-mint/40 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-mint/70 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-mint h-[90%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>

<div className="w-[110%] h-4 bg-gray-700 rounded-b-xl mx-auto -ml-[5%] shadow-lg relative"></div>
</div>

<div className="order-1 lg:order-2">
<div className="mb-10">
<h3 className="font-display text-2xl font-bold text-deepRed mb-4">Founders use 1slap because they want:</h3>
<ul className="space-y-2 text-deepRed/80">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-mint"></div>Validation they can trust</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-mint"></div>Signals from real people</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-mint"></div>Early adopters who believe in the idea</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-mint"></div>Clarity on what to build</li>
</ul>
</div>
<div className="mb-10">
<h3 className="font-display text-2xl font-bold text-deepRed mb-4">Swipers Make a Huge Impact</h3>
<p className="text-deepRed/70 mb-4">Because one swipe can:</p>
<ul className="space-y-2 text-deepRed/80">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-coral"></div>Save months of wasted energy</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-coral"></div>Prevent building the wrong thing</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-coral"></div>Reveal what resonates instantly</li>
</ul>
</div>
<a className="btn-coral inline-flex items-center px-8 py-4 rounded-btn text-white font-medium text-lg gap-2" href="#">
              For Founders
              <svg className="w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-mint-soft text-center border-t border-teal-100">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<h2 className="font-display text-4xl md:text-5xl font-bold text-deepRed mb-16 tracking-tight">
          The Community Is Already Making an Impact
        </h2>
<div className="flex flex-col md:flex-row justify-center gap-10 text-deepRed/80 mb-12">
<div className="bg-white/50 backdrop-blur rounded-2xl p-6 border border-white/60">
<div className="font-display text-3xl font-bold text-mint mb-2">Thousands</div>
<div className="text-sm font-medium">Swipes every day</div>
</div>
<div className="bg-white/50 backdrop-blur rounded-2xl p-6 border border-white/60">
<div className="font-display text-3xl font-bold text-coral mb-2">Hourly</div>
<div className="text-sm font-medium">New ideas added</div>
</div>
<div className="bg-white/50 backdrop-blur rounded-2xl p-6 border border-white/60">
<div className="font-display text-3xl font-bold text-deepRed mb-2">Real People</div>
<div className="text-sm font-medium">Shaping real products</div>
</div>
</div>

<div className="flex justify-center items-end gap-1 opacity-20">
<div className="w-8 h-12 bg-deepRed rounded-t-full"></div>
<div className="w-10 h-16 bg-deepRed rounded-t-full"></div>
<div className="w-8 h-10 bg-deepRed rounded-t-full"></div>
<div className="w-12 h-14 bg-deepRed rounded-t-full"></div>
<div className="w-9 h-11 bg-deepRed rounded-t-full"></div>
</div>
</div>
</section>

<footer className="py-20 bg-white border-t border-teal-100 text-deepRed/80">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="col-span-2 lg:col-span-2 pr-8">
<a className="flex items-center gap-2 mb-6" href="#">
<svg className="w-6 h-6 text-mint" data-lucide="hand-metal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"></path><path d="M14 11V9a2 2 0 1 0-4 0v2"></path><path d="M10 10.5V5a2 2 0 1 0-4 0v9"></path><path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"></path></svg>
<span className="font-display font-bold text-xl text-deepRed">1slap</span>
</a>
<p className="text-sm leading-relaxed mb-6">
                1slap is the world’s first swipe-based idea validation platform. We connect founders with real people who vote on real ideas — Slap (yes) or Flop (no). Because nothing builds confidence like honest buyer intent.
              </p>
<div className="flex gap-4">
<a className="text-deepRed/40 hover:text-coral transition-colors" href="#"><svg data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 4.1 2c2.1-1.8 5.1-.5 5.1-.5S10 7.3 10.5 8c2 2.7 1 6.3-1 9-2.3 3.1-6.7 1-6.7 1"></path></svg></a>
<a className="text-deepRed/40 hover:text-coral transition-colors" href="#"><svg data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-deepRed/40 hover:text-coral transition-colors" href="#"><svg data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>

<div>
<h4 className="font-bold text-deepRed mb-4">Explore</h4>
<ul className="space-y-3 text-sm font-medium text-deepRed/60">
<li><a className="hover:text-coral transition-colors" href="#">Slap or FLOP Ideas</a></li>
<li><a className="hover:text-coral transition-colors" href="#">For Founders</a></li>
<li><a className="hover:text-coral transition-colors" href="#">About 1slap</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-deepRed mb-4">Support</h4>
<ul className="space-y-3 text-sm font-medium text-deepRed/60">
<li><a className="hover:text-coral transition-colors" href="#">Community Guidelines</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Report an Issue</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-deepRed mb-4">Legal</h4>
<ul className="space-y-3 text-sm font-medium text-deepRed/60">
<li><a className="hover:text-coral transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Data Transparency</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-deepRed/40">
<p>© 2025 1slap, Inc. All rights reserved.</p>
<p>Built with honesty, momentum, and a little bit of chaos.</p>
<p>United States (English)</p>
</div>
</div>
</footer>


    </>
  );
}
