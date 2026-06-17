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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="font-bebas text-4xl text-[#F5A623] leading-none mt-1">AM</span>
<span className="text-sm font-medium tracking-wide hidden sm:block">ALEXANDER MATTHEWS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[#AAAAAA] text-sm font-medium">
<a className="text-white" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Programs</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<button className="bg-[#F5A623] text-[#0A0A0A] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#e0961b] transition-colors">
                Get Started
            </button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 bg-noise pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.08)_0%,transparent_50%)] z-0 pointer-events-none"></div>

<h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(100px,20vw,250px)] font-bebas text-[#1C1C1C] leading-none z-0 select-none whitespace-nowrap w-full text-center">
            ALEXANDER
        </h1>
<div className="max-w-7xl mx-auto w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center mt-12 lg:mt-0">

<div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1 relative z-20">
<div>
<span className="inline-block border border-[#2A2A2A] rounded-full px-4 py-1.5 text-sm text-[#AAAAAA] mb-4 bg-[#161616]/50 backdrop-blur-sm">
                        Online Fitness Coach
                    </span>
<p className="text-lg text-[#AAAAAA] leading-relaxed max-w-md">
                        100+ Clients Coached Across Australia. Get The Body You've Always Wanted — With A Plan Built For You.
                    </p>
</div>
<div className="flex items-center gap-8 mt-4">
<div>
<div className="flex items-baseline gap-1">
<span className="font-bebas text-4xl text-[#F5A623]">100</span>
<span className="text-[#F5A623] text-2xl font-bebas">+</span>
</div>
<p className="text-xs text-[#AAAAAA] tracking-wider uppercase">Clients Coached</p>
</div>
<div className="w-px h-8 bg-[#1E1E1E]"></div>
<div>
<div className="flex items-baseline gap-1">
<span className="font-bebas text-4xl text-[#F5A623]">5</span>
<span className="text-[#F5A623] text-2xl font-bebas">+</span>
</div>
<p className="text-xs text-[#AAAAAA] tracking-wider uppercase">Years Experience</p>
</div>
</div>
<button className="bg-[#F5A623] text-[#0A0A0A] px-8 py-4 rounded-full text-base font-semibold w-fit mt-4 hover:bg-[#e0961b] transition-colors shadow-[0_0_20px_rgba(245,166,35,0.2)]">
                    FREE CONSULTATION
                </button>
</div>

<div className="lg:col-span-4 h-[60vh] lg:h-[80vh] flex items-end justify-center order-1 lg:order-2 relative">

<div className="w-full h-full max-w-[400px] relative">
<img alt="Alexander Matthews" className="w-full h-full object-cover object-top mask-image-b" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'}}/>

<div className="absolute inset-0 bg-[#0A0A0A]/40" style={{WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'}}></div>
</div>
</div>

<div className="lg:col-span-4 flex justify-end items-center order-3 relative z-20 hidden md:flex">
<div className="bg-[#161616]/80 backdrop-blur-md border border-[#2A2A2A] rounded-[12px] p-5 flex flex-col gap-4 max-w-xs w-full shadow-2xl translate-y-[-50px]">
<div className="flex items-center gap-4">
<img alt="Thumbnail" className="w-14 h-14 rounded-md object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-bebas text-xl tracking-wide">ALEXANDER MATTHEWS</h4>
<div className="flex items-center gap-2 mt-1">
<span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse"></span>
<span className="text-sm text-[#AAAAAA]">Next Check-in: Tomorrow 5:00 PM</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-[#e5e5e5] py-8 border-y border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-80 mix-blend-multiply">
<span className="text-xl md:text-2xl font-bebas text-[#1C1C1C] tracking-widest">ELITE SUPPS</span>
<span className="text-xl md:text-2xl font-bebas text-[#1C1C1C] tracking-widest">AUSTRALIA</span>
<span className="text-xl md:text-2xl font-bebas text-[#1C1C1C] tracking-widest">ONLINE COACHING</span>
<span className="text-xl md:text-2xl font-bebas text-[#1C1C1C] tracking-widest">NUTRITION</span>
<span className="text-xl md:text-2xl font-bebas text-[#1C1C1C] tracking-widest">STRENGTH</span>
</div>
</div>
</div>

<section className="bg-[#0A0A0A] py-24 border-b border-[#1E1E1E]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-bebas text-5xl md:text-[72px] tracking-tight text-center mb-12">
                OUR <span className="text-[#F5A623]">COACHING</span> PROGRAMS.
            </h2>

<div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium tracking-wide mb-12 uppercase text-[#AAAAAA]">
<button className="hover:text-white transition-colors">ALL</button>
<button className="text-white border-b-2 border-[#F5A623] pb-1">TRAINING</button>
<button className="hover:text-white transition-colors">NUTRITION</button>
<button className="hover:text-white transition-colors">MINDSET &amp; RECOVERY</button>
</div>

<div className="bg-[#161616] border border-[#2A2A2A] rounded-[12px] flex flex-col md:flex-row overflow-hidden mb-8 h-auto md:h-[400px]">

<div className="hidden md:flex items-center justify-center border-r border-[#2A2A2A] p-6 w-20 bg-[#111111]">
<span className="font-bebas text-2xl tracking-widest rotate-180" style={{writingMode: 'vertical-rl'}}>TRAINING</span>
</div>

<div className="w-full md:w-[45%] h-64 md:h-full relative">
<img alt="Training" className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#161616] via-transparent to-transparent"></div>
</div>

<div className="p-8 md:p-12 flex flex-col justify-center flex-1">
<h3 className="font-bebas text-4xl mb-4 tracking-tight">CUSTOM TRAINING PLAN</h3>
<p className="text-[#AAAAAA] text-lg mb-8 leading-relaxed">
                        A fully personalized workout program designed around your schedule, current fitness level, and physique goals. Progressive overload built in.
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-[#2A2A2A] overflow-hidden bg-[#111111]">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-10 h-10 rounded-full border border-[#2A2A2A] overflow-hidden bg-[#111111] -ml-5">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-10 h-10 rounded-full border border-[#2A2A2A] overflow-hidden bg-[#111111] -ml-5">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="bg-[#161616] border border-[#2A2A2A] rounded-[12px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#444] transition-colors group cursor-pointer">
<div className="flex-1">
<h4 className="font-bebas text-2xl tracking-wide mb-1 text-white group-hover:text-[#F5A623] transition-colors">NUTRITION COACHING</h4>
<p className="text-[#AAAAAA] text-base">Learn exactly what to eat to accelerate fat loss and build lean muscle.</p>
</div>
<div className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#F5A623] transition-colors">
<i className="text-[#F5A623]" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-[#161616] border border-[#2A2A2A] rounded-[12px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#444] transition-colors group cursor-pointer">
<div className="flex-1">
<h4 className="font-bebas text-2xl tracking-wide mb-1 text-white group-hover:text-[#F5A623] transition-colors">1-ON-1 ONLINE COACHING</h4>
<p className="text-[#AAAAAA] text-base">Weekly check-ins, direct access to Alex, and real-time plan adjustments.</p>
</div>
<div className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#F5A623] transition-colors">
<i className="text-[#F5A623]" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="bg-[#161616] border border-[#2A2A2A] rounded-[12px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#444] transition-colors group cursor-pointer">
<div className="flex-1">
<h4 className="font-bebas text-2xl tracking-wide mb-1 text-white group-hover:text-[#F5A623] transition-colors">TRANSFORMATION PACKAGE</h4>
<p className="text-[#AAAAAA] text-base">Training + nutrition + accountability. The complete system.</p>
</div>
<div className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#F5A623] transition-colors">
<i className="text-[#F5A623]" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] py-24 border-b border-[#1E1E1E]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="font-bebas text-5xl md:text-[64px] tracking-tight leading-none mb-12">
                    WHY <span className="text-[#F5A623]">SHOULD</span> YOU CHOOSE ALEX MATTHEWS
                </h2>
<div className="flex flex-col gap-8 mb-12">
<div className="flex gap-4">
<div className="mt-1">
<i className="text-[#F5A623] w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-bebas text-2xl tracking-wide mb-2 text-white">PERSONALIZED PROGRAMMING</h4>
<p className="text-[#AAAAAA] text-lg leading-relaxed">Every plan is built specifically for your body, goals, and lifestyle.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<i className="text-[#F5A623] w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-bebas text-2xl tracking-wide mb-2 text-white">PROVEN TRACK RECORD</h4>
<p className="text-[#AAAAAA] text-lg leading-relaxed">100+ clients transformed with real, measurable results.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<i className="text-[#F5A623] w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-bebas text-2xl tracking-wide mb-2 text-white">FLEXIBLE &amp; ONLINE</h4>
<p className="text-[#AAAAAA] text-lg leading-relaxed">Coach from anywhere. Check-ins, adjustments, and support — all online.</p>
</div>
</div>
</div>
<button className="bg-[#F5A623] text-[#0A0A0A] px-10 py-4 rounded-full text-base font-semibold hover:bg-[#e0961b] transition-colors">
                    APPLY NOW
                </button>
</div>

<div className="relative h-[600px] rounded-[12px] overflow-hidden border border-[#2A2A2A]">
<img alt="Alex Training" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-24 border-b border-[#1E1E1E]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-bebas text-5xl md:text-[72px] tracking-tight text-center mb-16">
                MEET YOUR <span className="text-[#F5A623]">COACH</span>.
            </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-start-2 md:row-start-1 bg-transparent flex flex-col items-center justify-center text-center p-8">
<span className="font-bebas text-6xl text-[#F5A623] mb-2 leading-none">100+</span>
<h3 className="text-xl text-white font-medium mb-2">Clients Transformed</h3>
<p className="text-[#AAAAAA] text-base mb-6">Expert Online Coach</p>
<button className="border border-[#2A2A2A] text-white px-8 py-3 rounded-full text-sm font-medium hover:border-[#F5A623] hover:text-[#F5A623] transition-colors">
                        SEE MORE
                    </button>
</div>

<div className="md:col-start-1 md:row-start-1 bg-[#161616] border border-[#2A2A2A] rounded-[12px] overflow-hidden relative group">
<img alt="Training" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<span className="font-bebas text-3xl text-white block mb-1">5+ Years</span>
<span className="text-sm text-[#AAAAAA]">Online Coaching</span>
</div>
</div>

<div className="md:col-start-3 md:row-start-1 bg-[#161616] border border-[#2A2A2A] rounded-[12px] overflow-hidden relative group">
<img alt="Training" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<span className="font-bebas text-3xl text-white block mb-1">100+ Clients</span>
<span className="text-sm text-[#AAAAAA]">Transformed</span>
</div>
</div>

<div className="md:col-start-1 md:row-start-2 bg-[#161616] border border-[#2A2A2A] rounded-[12px] overflow-hidden relative group">
<img alt="Training" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<span className="font-bebas text-3xl text-white block mb-1">500+ hrs</span>
<span className="text-sm text-[#AAAAAA]">Programming</span>
</div>
</div>

<div className="md:col-start-2 md:row-start-2 bg-[#161616] border border-[#2A2A2A] rounded-[12px] overflow-hidden relative group">
<img alt="Training" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<span className="font-bebas text-3xl text-white block mb-1">50+</span>
<span className="text-sm text-[#AAAAAA]">Nutrition Plans</span>
</div>
</div>

<div className="md:col-start-3 md:row-start-2 bg-[#161616] border border-[#2A2A2A] rounded-[12px] overflow-hidden relative group">
<img alt="Training" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<span className="font-bebas text-3xl text-white block mb-1">1000+ hrs</span>
<span className="text-sm text-[#AAAAAA]">Coaching Calls</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] py-24 border-b border-[#1E1E1E]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-bebas text-5xl md:text-[72px] tracking-tight text-center mb-16">
                JOIN THE <span className="text-[#F5A623]">PROGRAM</span>.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-[#161616] border border-[#2A2A2A] rounded-[12px] p-8 flex flex-col">
<p className="text-[#AAAAAA] text-sm font-medium tracking-wide mb-2 uppercase">Starter Plan</p>
<h3 className="font-bebas text-6xl text-white mb-8 tracking-tight">$97<span className="text-2xl text-[#AAAAAA] tracking-normal">/wk</span></h3>
<ul className="flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-base text-[#AAAAAA]">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Custom Training Program
                        </li>
<li className="flex items-start gap-3 text-base text-[#AAAAAA]">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Nutrition Guidelines
                        </li>
<li className="flex items-start gap-3 text-base text-[#AAAAAA]">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Email Support
                        </li>
<li className="flex items-start gap-3 text-base text-[#AAAAAA]">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Monthly Check-in
                        </li>
</ul>
<button className="w-full border border-[#2A2A2A] text-white py-4 rounded-full text-sm font-semibold hover:border-[#F5A623] hover:text-[#F5A623] transition-colors">
                        JOIN NOW
                    </button>
</div>

<div className="bg-[#161616] border-2 border-[#F5A623] rounded-[12px] p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(245,166,35,0.05)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5A623] text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<p className="text-[#AAAAAA] text-sm font-medium tracking-wide mb-2 uppercase">Elite Plan</p>
<h3 className="font-bebas text-6xl text-white mb-8 tracking-tight">$197<span className="text-2xl text-[#AAAAAA] tracking-normal">/mo</span></h3>
<ul className="flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-base text-white">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Custom Training Program
                        </li>
<li className="flex items-start gap-3 text-base text-white">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Full Nutrition Coaching
                        </li>
<li className="flex items-start gap-3 text-base text-white">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Weekly Check-ins
                        </li>
<li className="flex items-start gap-3 text-base text-white">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Direct WhatsApp Access
                        </li>
<li className="flex items-start gap-3 text-base text-white">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Physique Tracking
                        </li>
</ul>
<button className="w-full bg-[#F5A623] text-[#0A0A0A] py-4 rounded-full text-sm font-semibold hover:bg-[#e0961b] transition-colors">
                        JOIN NOW
                    </button>
</div>

<div className="bg-[#161616] border border-[#2A2A2A] rounded-[12px] p-8 flex flex-col">
<p className="text-[#AAAAAA] text-sm font-medium tracking-wide mb-2 uppercase">Transformation Package</p>
<h3 className="font-bebas text-6xl text-white mb-8 tracking-tight">$497<span className="text-2xl text-[#AAAAAA] tracking-normal"> one-time</span></h3>
<ul className="flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-base text-[#AAAAAA]">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Everything in Elite
                        </li>
<li className="flex items-start gap-3 text-base text-[#AAAAAA]">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            90-Day Program
                        </li>
<li className="flex items-start gap-3 text-base text-[#AAAAAA]">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Priority Response
                        </li>
<li className="flex items-start gap-3 text-base text-[#AAAAAA]">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Before/After Tracking
                        </li>
<li className="flex items-start gap-3 text-base text-[#AAAAAA]">
<i className="text-[#F5A623] w-5 h-5 mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Supplement Guidance
                        </li>
</ul>
<button className="w-full border border-[#2A2A2A] text-white py-4 rounded-full text-sm font-semibold hover:border-[#F5A623] hover:text-[#F5A623] transition-colors">
                        JOIN NOW
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.08)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-bebas text-6xl md:text-[80px] tracking-tight leading-none mb-6">
<span className="text-[#F5A623]">READY</span> TO BUILD YOUR BEST BODY.
            </h2>
<p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
                Limited coaching spots available. Apply now and get a free strategy call.
            </p>
</div>
</section>

<footer className="bg-[#080808] border-t border-[#1E1E1E] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-16">
<div className="flex flex-col md:items-start items-center">
<span className="text-sm text-[#555] uppercase tracking-wider mb-2 font-medium">Phone</span>
<a className="text-white text-lg font-medium hover:text-[#F5A623] transition-colors" href="tel:+61000000000">+61 000 000 000</a>
</div>
<div className="flex flex-col items-center">
<span className="text-sm text-[#555] uppercase tracking-wider mb-2 font-medium">Email</span>
<a className="text-white text-lg font-medium hover:text-[#F5A623] transition-colors" href="mailto:alex@alexandermatthews.com.au">alex@alexandermatthews.com.au</a>
</div>
<div className="flex flex-col md:items-end items-center">
<span className="text-sm text-[#555] uppercase tracking-wider mb-2 font-medium">Location</span>
<span className="text-white text-lg font-medium">Australia | Online Worldwide</span>
</div>
</div>
<div className="text-center border-t border-[#1E1E1E] pt-8">
<p className="text-[#555] text-sm">© 2024 Alexander Matthews Coaching. All Rights Reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
