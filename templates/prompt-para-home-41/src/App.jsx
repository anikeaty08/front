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
      

<nav className="fixed top-0 w-full z-50 bg-[#161616]/90 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-full h-full fill-[#F46743] group-hover:rotate-180 transition-transform duration-500 ease-in-out" viewbox="0 0 100 100">
<path d="M50 0 L97.55 34.55 L79.39 90.45 H20.61 L2.45 34.55 Z"></path>
</svg>
<div className="absolute w-2 h-2 bg-[#161616] rounded-full"></div>
</div>
<span className="font-headline font-semibold text-sm tracking-tighter uppercase hidden md:block text-white">We Make <span className="text-[#F46743]">Footballers</span></span>
</a>

<div className="hidden md:flex items-center gap-8 font-mono-tech text-xs tracking-widest uppercase text-gray-400">
<a className="hover:text-[#F46743] transition-colors" href="#">Training</a>
<a className="hover:text-[#F46743] transition-colors" href="#">Franchise</a>
<a className="hover:text-[#F46743] transition-colors" href="#">About</a>
</div>

<a className="relative group overflow-hidden bg-[#F46743] text-white font-headline text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-300" href="#">
<span className="relative z-10 group-hover:text-[#161616] transition-colors">Book Free Taster</span>
<div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-[#A2FF68] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-20"></div>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-6 relative z-10">
<div className="inline-flex items-center gap-3 w-fit border border-[#333] bg-[#222] rounded-full px-3 py-1">
<span className="w-2 h-2 rounded-full bg-[#A2FF68] animate-pulse"></span>
<span className="font-mono-tech text-[10px] text-gray-300 uppercase tracking-widest">Enrollment Open 2025</span>
</div>
<h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-semibold uppercase leading-[0.85] tracking-tighter text-[#F46743]">
                Kickstart <br/>
<span className="text-white">Greatness</span>
</h1>
<p className="font-body text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                The UK's leading football coaching academy for 4-12 year olds. We don't just teach skills; we build character, confidence, and future leaders.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8">

<div className="relative group w-full sm:w-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-[#F46743] via-[#E8A9FF] to-[#F46743] rounded-xl blur opacity-40 group-hover:opacity-100 animate-gradient transition duration-1000 group-hover:duration-200"></div>
<button className="relative w-full sm:w-auto bg-[#F46743] text-white font-headline uppercase font-semibold text-sm tracking-wide px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#161616] transition-colors duration-300 border border-transparent hover:border-[#F46743]">
                        Find a Class
                        <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<button className="group w-full sm:w-auto border border-white/20 text-white bg-transparent hover:border-[#A2FF68]/50 hover:bg-[#A2FF68]/5 font-headline uppercase font-semibold text-sm tracking-wide px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300">
<span className="w-2 h-2 rounded-full bg-white group-hover:bg-[#A2FF68] transition-colors"></span>
                    Watch Film
                </button>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-4">
<img alt="Coach" className="w-10 h-10 rounded-full border-2 border-[#161616] object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Coach" className="w-10 h-10 rounded-full border-2 border-[#161616] object-cover grayscale" src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Coach" className="w-10 h-10 rounded-full border-2 border-[#161616] object-cover grayscale" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="flex flex-col">
<div className="flex text-[#F46743] text-xs">
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
</div>
<span className="font-mono-tech text-[10px] uppercase text-gray-500 tracking-wider">Rated 4.9/5 by Parents</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] lg:h-[700px]">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#F46743] rounded-full filter blur-[80px] opacity-20"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-[#A2FF68] rounded-full filter blur-[60px] opacity-10"></div>

<div className="absolute inset-0 rounded-[32px] overflow-hidden border border-white/10 bg-[#222]">
<img alt="Kid playing football" className="w-full h-full object-cover opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent"></div>

<div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
<iconify-icon className="text-[#F46743]" icon="lucide:trophy" strokeWidth="1.5" width="24"></iconify-icon>
</div>

<div className="absolute bottom-6 left-6 right-6">
<p className="font-headline uppercase text-3xl text-white leading-none tracking-tight">Make It<span className="text-transparent text-stroke-orange">Happen</span></p>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-[#161616] relative border-t border-white/10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F46743] opacity-[0.03] filter blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
<h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold uppercase text-white tracking-tighter leading-[0.9]">
                    12 Years of <br/>
                    Football Coaching <br/>
<span className="text-[#F46743]">Excellence</span>
</h2>
<div className="flex flex-col items-start md:items-end gap-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#A2FF68]"></span>
<span className="font-mono-tech text-xs uppercase tracking-widest text-gray-500">Live Metrics</span>
</div>
<p className="font-body text-gray-400 max-w-xs text-sm leading-relaxed text-left md:text-right">
                        Data driven development across the nation. We track success not just in goals, but in growth.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#1C1C1C] border border-white/5 p-10 rounded-[30px] hover:border-[#F46743]/40 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-white/[0.02] rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
<div className="flex flex-col h-full justify-between gap-10 relative z-10">
<div>
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline text-lg text-white uppercase tracking-tight">Number of <br/>Franchisees</h3>
<iconify-icon className="text-gray-600 group-hover:text-[#F46743] transition-colors" icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div className="h-px w-full bg-white/10"></div>
</div>
<div className="relative">
<span className="font-headline text-7xl md:text-8xl font-semibold text-[#F46743] tracking-tighter block group-hover:translate-x-2 transition-transform duration-500">120</span>
</div>
<div>
<p className="font-body text-sm text-gray-400 leading-snug">Number of franchises operating successfully across the network.</p>
</div>
</div>
</div>

<div className="group relative bg-[#1C1C1C] border border-white/5 p-10 rounded-[30px] hover:border-[#F46743]/40 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-white/[0.02] rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
<div className="flex flex-col h-full justify-between gap-10 relative z-10">
<div>
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline text-lg text-white uppercase tracking-tight">Active <br/>Customers</h3>
<iconify-icon className="text-gray-600 group-hover:text-[#F46743] transition-colors" icon="lucide:users" width="20"></iconify-icon>
</div>
<div className="h-px w-full bg-white/10"></div>
</div>
<div className="relative">
<span className="font-headline text-7xl md:text-8xl font-semibold text-[#F46743] tracking-tighter block group-hover:translate-x-2 transition-transform duration-500">12k</span>
</div>
<div>
<p className="font-body text-sm text-gray-400 leading-snug">Current footballers we train nationwide in our weekly academies.</p>
</div>
</div>
</div>

<div className="group relative bg-[#1C1C1C] border border-white/5 p-10 rounded-[30px] hover:border-[#F46743]/40 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-white/[0.02] rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
<div className="flex flex-col h-full justify-between gap-10 relative z-10">
<div>
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline text-lg text-white uppercase tracking-tight">Trustpilot <br/>Customer Rating</h3>
<iconify-icon className="text-[#00b67a]" fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
</div>
<div className="h-px w-full bg-white/10"></div>
</div>
<div className="relative flex items-baseline gap-2">
<span className="font-headline text-7xl md:text-8xl font-semibold text-[#F46743] tracking-tighter block group-hover:translate-x-2 transition-transform duration-500">4.9</span>
<span className="font-headline text-3xl text-gray-700 font-semibold">/5</span>
</div>
<div>
<p className="font-body text-sm text-gray-400 leading-snug">Trustpilot rating of coaching excellence from verified parents.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F46743] py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="font-headline text-6xl md:text-8xl font-semibold text-[#161616] uppercase leading-[0.8] tracking-tighter">
                    Making <br/><span className="text-white">Leaders</span>
</h2>
<p className="font-body text-[#161616] text-xl max-w-md font-medium leading-tight">
                    We use football as a vehicle to develop skills that last a lifetime. Discipline, teamwork, and resilience.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto">

<div className="col-span-1 md:col-span-2 row-span-2 bg-[#161616] rounded-[30px] p-2 relative group overflow-hidden h-[400px] md:h-[500px]">
<div className="w-full h-full rounded-[24px] overflow-hidden relative">
<img alt="Training" className="group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 w-full h-full object-cover grayscale scale-100" src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1600&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-[#161616] to-transparent w-full">
<span className="font-mono-tech text-[#A2FF68] text-xs uppercase tracking-widest bg-[#161616]/50 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">Methodology</span>
<h3 className="font-headline text-2xl text-white uppercase">Individual Focus</h3>
</div>
</div>
</div>

<div className="col-span-1 bg-white text-[#161616] rounded-[30px] p-8 flex flex-col justify-between hover:bg-[#F0F0F0] transition-colors h-[240px]">
<div className="w-12 h-12 bg-[#F46743] rounded-full flex items-center justify-center text-white">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-headline text-xl uppercase font-semibold tracking-tight mb-2">High Intensity</h3>
<p className="font-body text-sm text-gray-600 leading-snug">Sessions designed to maximize ball contact and engagement.</p>
</div>
</div>

<div className="col-span-1 bg-[#161616] text-white rounded-[30px] p-8 flex flex-col justify-between border border-white/10 h-[240px]">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#E8A9FF]" icon="lucide:bar-chart-2" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-mono-tech text-xs text-gray-500">V.1.0</span>
</div>
<div>
<h3 className="font-headline text-xl uppercase font-semibold tracking-tight mb-1">Data Driven</h3>
<p className="font-body text-sm text-gray-400">Tracking progress.</p>
</div>
<div className="w-full bg-gray-800 h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-[#E8A9FF] w-[70%] h-full"></div>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-[#161616] rounded-[30px] p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden h-auto md:h-[240px]">
<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon className="text-white" icon="lucide:quote" width="100"></iconify-icon>
</div>
<div className="flex-shrink-0">
<img alt="Parent" className="w-20 h-20 rounded-full border-2 border-[#F46743] object-cover grayscale" src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&amp;fit=crop&amp;w=150&amp;h=150"/>
</div>
<div className="z-10">
<p className="font-headline text-lg md:text-xl text-white uppercase leading-snug mb-3">"The confidence my son has gained is unbelievable. It's more than just football."</p>
<p className="font-mono-tech text-[#F46743] text-xs uppercase tracking-widest">— Sarah J., Parent</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-20">
<span className="font-mono-tech text-[#F46743] text-xs uppercase tracking-[0.2em] mb-4">Pathways to Pro</span>
<h2 className="font-headline text-5xl md:text-7xl font-semibold uppercase text-white tracking-tighter mb-8">Choose Your <span className="text-transparent" style={{WebkitTextStroke: '1px #fff'}}>Level</span></h2>
<div className="inline-flex bg-[#222] p-1 rounded-full border border-white/10">
<button className="px-8 py-3 rounded-full bg-[#F46743] text-white font-headline text-xs font-semibold uppercase tracking-wider shadow-lg">Ages 4-7</button>
<button className="px-8 py-3 rounded-full text-gray-400 hover:text-white font-headline text-xs font-semibold uppercase tracking-wider transition-colors">Ages 8-12</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#222] border border-white/5 rounded-[24px] p-8 hover:border-[#F46743] transition-all duration-300 flex flex-col">
<div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-[#A2FF68]"></div>
<div className="mb-12">
<iconify-icon className="text-white group-hover:text-[#F46743] transition-colors" icon="lucide:rocket" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="font-headline text-2xl text-white uppercase mb-2">Fundamentals</h3>
<p className="font-body text-gray-400 text-sm mb-8 line-clamp-3">Mastering the basics. Ball control, passing, and movement mechanics for beginners.</p>
<div className="mt-auto">

<a className="relative overflow-hidden block w-full text-center py-4 border border-white/20 rounded-lg font-headline text-xs uppercase text-white group-hover:border-[#F46743] transition-colors" href="#">
<span className="relative z-10">Select Class</span>
<div className="absolute inset-0 bg-[#F46743] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
</a>
</div>
</div>

<div className="group relative bg-[#161616] border border-[#F46743] rounded-[24px] p-8 shadow-[0_0_40px_-20px_rgba(244,103,67,0.3)] flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F46743] px-4 py-1 rounded-full">
<span className="font-mono-tech text-[10px] text-white uppercase tracking-widest font-bold">Most Popular</span>
</div>
<div className="mb-12">
<iconify-icon className="text-[#F46743]" icon="lucide:activity" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="font-headline text-2xl text-white uppercase mb-2">Development</h3>
<p className="font-body text-gray-400 text-sm mb-8 line-clamp-3">Advanced techniques and tactical awareness. Preparing players for competitive play.</p>
<div className="mt-auto">

<a className="block w-full text-center py-4 bg-[#F46743] rounded-lg font-headline text-xs uppercase text-white hover:bg-white hover:text-[#161616] transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]" href="#">
                        Select Class
                    </a>
</div>
</div>

<div className="group relative bg-[#222] border border-white/5 rounded-[24px] p-8 hover:border-[#E8A9FF] transition-all duration-300 flex flex-col">
<div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-[#E8A9FF]"></div>
<div className="mb-12">
<iconify-icon className="text-white group-hover:text-[#E8A9FF] transition-colors" icon="lucide:crown" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="font-headline text-2xl text-white uppercase mb-2">Academy Pro</h3>
<p className="font-body text-gray-400 text-sm mb-8 line-clamp-3">Elite pathway. Direct scouting links to professional clubs and intensive coaching.</p>
<div className="mt-auto">

<a className="relative overflow-hidden block w-full text-center py-4 border border-white/20 rounded-lg font-headline text-xs uppercase text-white group-hover:border-[#E8A9FF] transition-colors" href="#">
<span className="relative z-10">Enquire Now</span>
<div className="absolute inset-0 bg-[#E8A9FF] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
<span className="relative z-10 group-hover:text-[#161616] transition-colors"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">

<div className="relative w-full rounded-[32px] overflow-hidden bg-[#161616] min-h-[550px] flex items-center shadow-2xl group">

<div className="absolute inset-0 w-full h-full">
<img alt="Kids playing football" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/90 to-transparent"></div>
</div>
<div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 md:p-16 items-center">

<div className="flex flex-col gap-8">
<div>
<div className="inline-flex items-center gap-2 mb-6 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A2FF68] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#A2FF68]"></span>
</span>
<span className="font-mono-tech text-white text-[10px] uppercase tracking-widest">Recruiting Now</span>
</div>
<h2 className="font-headline text-5xl md:text-7xl font-semibold uppercase text-white tracking-tighter leading-none mb-4">
                                Future <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F46743] to-[#E8A9FF]">Legends</span>
</h2>
<p className="font-body text-gray-300 text-lg max-w-md">
                                Join the movement. From grassroots beginners to academy elites, we have a spot on the team for you.
                            </p>
</div>

<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#F46743] text-white px-8 py-4 rounded-xl font-headline font-semibold uppercase tracking-wide hover:bg-white hover:text-[#161616] transition-all duration-300 text-center shadow-[0_0_20px_rgba(244,103,67,0.4)] hover:shadow-white/20" href="#">
                                Find a Class
                            </a>
<a className="group/btn flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-headline font-semibold uppercase tracking-wide hover:bg-white/10 transition-all backdrop-blur-sm" href="#">
                                Franchise Info
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="hidden lg:flex justify-end pr-8">
<div className="w-72 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 shadow-2xl relative">

<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-6">
<span className="font-mono-tech text-[10px] text-gray-400 uppercase">Player Stats</span>
<div className="w-10 h-10 rounded-full bg-[#222] border border-white/10 flex items-center justify-center">
<iconify-icon className="text-[#A2FF68]" icon="lucide:user"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-headline uppercase text-white mb-1">
<span>Speed</span>
<span className="text-[#F46743]">94</span>
</div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#F46743] w-[94%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-headline uppercase text-white mb-1">
<span>Technique</span>
<span className="text-[#A2FF68]">88</span>
</div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#A2FF68] w-[88%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-headline uppercase text-white mb-1">
<span>Tactics</span>
<span className="text-[#E8A9FF]">91</span>
</div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#E8A9FF] w-[91%]"></div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-gray-500 border border-[#222]"></div>
<div className="w-6 h-6 rounded-full bg-gray-400 border border-[#222]"></div>
</div>
<span className="text-[10px] text-gray-400 font-mono-tech">Verified by Scouts</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#161616] relative border-t border-white/10">
<div className="max-w-7xl mx-auto relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-12 bg-[#F46743]"></div>
<span className="font-mono-tech text-[#F46743] text-xs uppercase tracking-widest">Feedback Loop</span>
</div>
<h2 className="font-headline text-5xl md:text-7xl font-semibold uppercase text-white tracking-tighter leading-[0.9]">
                        Scouting  <span className="text-gray-500">Reports</span>
</h2>
</div>

<div className="flex items-center gap-4 bg-[#222] border border-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-[#333] border border-[#161616]"></div>
<div className="w-8 h-8 rounded-full bg-[#444] border border-[#161616]"></div>
<div className="w-8 h-8 rounded-full bg-[#F46743] flex items-center justify-center text-[10px] text-white border border-[#161616] font-bold">+2k</div>
</div>
<span className="font-mono-tech text-xs text-gray-400 uppercase tracking-wide">Verified Reviews</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-[#F46743]/30 transition-all duration-500">
<div className="absolute top-6 right-8 text-[#222] group-hover:text-[#333] transition-colors">
<iconify-icon icon="lucide:quote" width="40"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-[#F46743] mb-6">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="font-body text-gray-300 text-lg leading-relaxed mb-8">
                        "The standard of coaching is miles ahead of anything else we've tried. My son's technical ability has exploded in just 6 months."
                    </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<img alt="User" className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<h4 className="font-headline text-sm text-white uppercase tracking-wide">James M.</h4>
<p className="font-mono-tech text-[10px] text-gray-500 uppercase">Parent, London</p>
</div>
</div>
</div>

<div className="md:col-span-2 group relative rounded-3xl overflow-hidden border border-white/5 bg-[#1C1C1C]">
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
<img alt="Training" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="relative z-20 h-full flex flex-col justify-between p-10">
<div className="flex justify-between items-start">
<div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
<span className="w-2 h-2 bg-[#F46743] rounded-full animate-pulse"></span>
<span className="font-mono-tech text-[10px] uppercase text-white tracking-widest">Video Story</span>
</div>
</div>
<div className="max-w-lg">
<h3 className="font-headline text-2xl md:text-4xl text-white uppercase leading-tight mb-6">
                                "It's not just about football skills, it's about building the <span className="text-[#F46743]">mindset of a pro</span>."
                            </h3>
<button className="flex items-center gap-3 text-white group hover:text-[#F46743] transition-colors">
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#F46743] group-hover:border-[#F46743] group-hover:text-white transition-all">
<iconify-icon fill="currentColor" icon="lucide:play" width="18"></iconify-icon>
</div>
<span className="font-headline text-sm uppercase tracking-wider">Watch Full Review</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#161616] relative border-t border-white/10">
<div className="max-w-7xl mx-auto">
<h2 className="font-headline text-5xl md:text-6xl font-semibold uppercase text-white tracking-tighter mb-16">
                How To <span className="text-[#F46743]">Apply</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-[#1C1C1C] border border-white/5 hover:border-[#F46743]/50 p-8 md:p-10 rounded-[24px] transition-all duration-300 flex flex-col justify-between h-64 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-[#F46743]/10 rounded-full blur-2xl group-hover:bg-[#F46743]/20 transition-all duration-500"></div>
<span className="font-mono-tech text-[#F46743] text-xs uppercase tracking-widest relative z-10">Step 1</span>
<div className="relative z-10">
<h3 className="font-headline text-2xl md:text-3xl text-white uppercase font-semibold leading-tight mb-4">Download <br/>info pack</h3>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#F46743] group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:download" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-[#1C1C1C] border border-white/5 hover:border-[#F46743]/50 p-8 md:p-10 rounded-[24px] transition-all duration-300 flex flex-col justify-between h-64 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-[#A2FF68]/10 rounded-full blur-2xl group-hover:bg-[#A2FF68]/20 transition-all duration-500"></div>
<span className="font-mono-tech text-[#F46743] text-xs uppercase tracking-widest relative z-10">Step 2</span>
<div className="relative z-10">
<h3 className="font-headline text-2xl md:text-3xl text-white uppercase font-semibold leading-tight mb-4">Schedule <br/>discovery call</h3>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#A2FF68] group-hover:text-[#161616] transition-all duration-300">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-[#1C1C1C] border border-white/5 hover:border-[#F46743]/50 p-8 md:p-10 rounded-[24px] transition-all duration-300 flex flex-col justify-between h-64 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-[#E8A9FF]/10 rounded-full blur-2xl group-hover:bg-[#E8A9FF]/20 transition-all duration-500"></div>
<span className="font-mono-tech text-[#F46743] text-xs uppercase tracking-widest relative z-10">Step 3</span>
<div className="relative z-10">
<h3 className="font-headline text-2xl md:text-3xl text-white uppercase font-semibold leading-tight mb-4">Make an <br/>application</h3>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#E8A9FF] group-hover:text-[#161616] transition-all duration-300">
<iconify-icon icon="lucide:file-edit" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#161616] pt-20 pb-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">

<div className="flex justify-center mb-24 relative group cursor-pointer">
<h2 className="font-headline text-[15vw] leading-[0.8] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#333] to-[#161616] text-center tracking-tighter select-none group-hover:from-[#F46743] group-hover:to-[#161616] transition-all duration-700">
                    Make It
                 </h2>
<div className="absolute bottom-4 z-20">
<a className="bg-white text-[#161616] px-10 py-5 rounded-full font-headline font-semibold uppercase tracking-wider hover:scale-110 hover:bg-[#F46743] hover:text-white hover:shadow-[0_0_40px_-10px_#F46743] transition-all duration-300 flex items-center gap-2" href="#">
                        Join Today
                        <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#F46743]/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-[#F46743] clip-path-slant"></div>
<span className="font-headline font-semibold text-lg uppercase">WMF</span>
</div>
<p className="font-body text-sm text-gray-500 max-w-xs">
                        The #1 Coaching Brand. Creating the next generation of football talent through discipline and fun.
                    </p>
</div>
<div className="col-span-1">
<h4 className="font-mono-tech text-[#F46743] text-xs uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-4 font-body text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Coaching Philosophy</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-mono-tech text-[#F46743] text-xs uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4 font-body text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-mono-tech text-[#F46743] text-xs uppercase tracking-widest mb-6">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#F46743] hover:border-[#F46743] hover:text-white transition-all text-gray-400" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#F46743] hover:border-[#F46743] hover:text-white transition-all text-gray-400" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#F46743] hover:border-[#F46743] hover:text-white transition-all text-gray-400" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-mono-tech text-[10px] text-gray-600 uppercase tracking-wider">© 2025 We Make Footballers. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-[#A2FF68] rounded-full animate-pulse"></span>
<span className="font-mono-tech text-[10px] text-gray-400 uppercase tracking-widest">System Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
