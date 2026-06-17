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
      

<nav className="fixed w-full z-50 top-0 bg-black/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="text-2xl font-['Oswald'] tracking-tighter uppercase font-semibold text-white" href="#">
                TRAIN<span className="text-[#A6E93A]">ER.</span>
</a>
<div className="hidden md:flex space-x-8 items-center text-sm font-medium tracking-wide text-neutral-300">
<a className="hover:text-[#A6E93A] transition-colors" href="#home">HOME</a>
<a className="hover:text-[#A6E93A] transition-colors" href="#about">ABOUT</a>
<a className="hover:text-[#A6E93A] transition-colors" href="#services">SERVICES</a>
<a className="hover:text-[#A6E93A] transition-colors" href="#work">RESULTS</a>
<a className="bg-[#A6E93A] text-black px-6 py-2.5 rounded-[30px] font-semibold hover:bg-white transition-colors" href="#contact">
                    JOIN NOW
                </a>
</div>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative" id="home">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="z-10 order-2 lg:order-1">
<div className="inline-flex items-center space-x-2 border border-[#A6E93A]/30 bg-[#A6E93A]/10 px-4 py-1.5 rounded-[30px] mb-6">
<span className="w-2 h-2 rounded-full bg-[#A6E93A] animate-pulse"></span>
<span className="uppercase text-xs font-semibold text-[#A6E93A] tracking-wide">Slots Available Now</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium uppercase tracking-tight leading-[1] mb-6">
                    Sculpt Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6E93A] to-white">Dream Physique</span>
</h1>
<p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-lg mb-10">
                    Personalized training programs designed to push your limits. 
                    Minimalist approach, maximum results. Start your transformation today.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-[#A6E93A] text-black px-8 py-4 rounded-[30px] font-semibold hover:bg-white transition-colors group" href="#contact">
<span>START TRAINING</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center justify-center gap-2 border border-neutral-700 text-white px-8 py-4 rounded-[30px] font-medium hover:border-[#A6E93A] hover:text-[#A6E93A] transition-colors" href="#work">
<span>VIEW RESULTS</span>
</a>
</div>
</div>

<div className="relative order-1 lg:order-2">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

<div className="absolute -right-10 top-10 w-64 h-64 bg-[#A6E93A] blur-[100px] opacity-20 rounded-full"></div>
<div className="relative z-0 rounded-[30px] overflow-hidden border border-neutral-800">
<img alt="Gym Trainer" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-neutral-900/30" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-[30px] overflow-hidden h-[600px] group">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
<p className="text-[#A6E93A] font-['Oswald'] text-2xl uppercase tracking-tight">James Carter</p>
<p className="text-neutral-400 text-sm">Head Coach &amp; Founder</p>
</div>
</div>
<div>
<h2 className="text-4xl md:text-5xl font-medium uppercase tracking-tight mb-6">
                        More Than Just  <span className="text-[#A6E93A]">Repetitions.</span>
</h2>
<div className="space-y-6 text-neutral-300 font-light">
<p>
                            We believe that fitness is the cornerstone of a disciplined life. 
                            My philosophy combines functional strength training with nutritional science 
                            to create sustainable lifestyle changes, not just quick fixes.
                        </p>
<p>
                            With over 10 years of experience coaching elite athletes and beginners alike, 
                            I've refined a methodology that prioritizes form, consistency, and mental resilience.
                        </p>
</div>
<div className="grid grid-cols-2 gap-6 mt-10">
<div className="bg-neutral-900 border border-neutral-800 p-6 rounded-[24px]">
<h3 className="text-3xl font-['Oswald'] text-[#A6E93A] mb-1">500+</h3>
<p className="text-xs text-neutral-400 uppercase tracking-wider">Clients Transformed</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 p-6 rounded-[24px]">
<h3 className="text-3xl font-['Oswald'] text-[#A6E93A] mb-1">10+</h3>
<p className="text-xs text-neutral-400 uppercase tracking-wider">Years Experience</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-medium uppercase tracking-tight mb-4">Training <span className="text-[#A6E93A]">Programs</span></h2>
<p className="text-neutral-400 font-light max-w-2xl mx-auto">Tailored solutions for every fitness level. Choose the path that fits your goals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-neutral-900 border border-neutral-800 rounded-[30px] p-8 hover:border-[#A6E93A] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#A6E93A] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
<div className="mb-6 bg-black w-14 h-14 rounded-[20px] flex items-center justify-center text-[#A6E93A] border border-neutral-800">
<svg className="lucide lucide-dumbbell w-7 h-7" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<h3 className="text-2xl font-medium uppercase tracking-tight mb-3">1:1 Coaching</h3>
<p className="text-neutral-400 font-light text-sm mb-8 leading-relaxed">
                        Complete personalized attention. Custom workout plans, real-time form correction, and direct mentorship.
                    </p>
<a className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white group-hover:text-[#A6E93A] transition-colors" href="#">
                        Learn More <svg className="lucide lucide-arrow-up-right w-4 h-4 ml-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="group bg-neutral-900 border border-neutral-800 rounded-[30px] p-8 hover:border-[#A6E93A] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#A6E93A] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
<div className="mb-6 bg-black w-14 h-14 rounded-[20px] flex items-center justify-center text-[#A6E93A] border border-neutral-800">
<svg className="lucide lucide-users w-7 h-7" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-2xl font-medium uppercase tracking-tight mb-3">Group Sessions</h3>
<p className="text-neutral-400 font-light text-sm mb-8 leading-relaxed">
                        High energy small group training. Compete with others and push beyond your limits in a community environment.
                    </p>
<a className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white group-hover:text-[#A6E93A] transition-colors" href="#">
                        Learn More <svg className="lucide lucide-arrow-up-right w-4 h-4 ml-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="group bg-neutral-900 border border-neutral-800 rounded-[30px] p-8 hover:border-[#A6E93A] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#A6E93A] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
<div className="mb-6 bg-black w-14 h-14 rounded-[20px] flex items-center justify-center text-[#A6E93A] border border-neutral-800">
<svg className="lucide lucide-zap w-7 h-7" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-medium uppercase tracking-tight mb-3">Online Plans</h3>
<p className="text-neutral-400 font-light text-sm mb-8 leading-relaxed">
                        Training and nutrition plans delivered via app. Weekly check-ins and adjustments for the self-motivated.
                    </p>
<a className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white group-hover:text-[#A6E93A] transition-colors" href="#">
                        Learn More <svg className="lucide lucide-arrow-up-right w-4 h-4 ml-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-neutral-900/20" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-4xl md:text-5xl font-medium uppercase tracking-tight mb-2">Real <span className="text-[#A6E93A]">Results</span></h2>
<p className="text-neutral-400 font-light">Transformations that speak for themselves.</p>
</div>
<button className="hidden md:block border border-neutral-700 rounded-[30px] px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                    View All Gallery
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[500px]">
<div className="relative rounded-[24px] overflow-hidden group col-span-1 lg:col-span-2 row-span-2 h-[300px] md:h-full">
<img alt="Work 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="bg-[#A6E93A] text-black text-xs font-bold px-3 py-1 rounded-[20px]">STRENGTH</span>
</div>
</div>
<div className="relative rounded-[24px] overflow-hidden group h-[240px]">
<img alt="Work 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative rounded-[24px] overflow-hidden group h-[240px]">
<img alt="Work 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative rounded-[24px] overflow-hidden group col-span-1 lg:col-span-2 h-[240px]">
<img alt="Work 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium uppercase tracking-tight text-center mb-16">
                Client <span className="text-[#A6E93A]">Stories</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-neutral-900 border border-neutral-800 p-8 rounded-[30px] flex flex-col justify-between">
<div>
<div className="flex gap-1 text-[#A6E93A] mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 font-light text-sm italic leading-relaxed mb-6">
                            "I've trained with many coaches, but none have the attention to detail that this team has. I lost 20lbs in 3 months and never felt stronger."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-white font-medium text-sm">Marcus Chen</p>
<p className="text-neutral-500 text-xs">Software Engineer</p>
</div>
</div>
</div>

<div className="bg-[#111] border border-[#A6E93A]/30 p-8 rounded-[30px] flex flex-col justify-between shadow-[0_0_30px_rgba(166,233,58,0.05)] transform md:-translate-y-4">
<div>
<div className="flex gap-1 text-[#A6E93A] mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 font-light text-sm italic leading-relaxed mb-6">
                            "The 1:1 coaching changed my perspective on fitness. It's not just about lifting; it's about mindset. The facility is top-notch too."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-white font-medium text-sm">Sarah Jenkins</p>
<p className="text-neutral-500 text-xs">Architect</p>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 p-8 rounded-[30px] flex flex-col justify-between">
<div>
<div className="flex gap-1 text-[#A6E93A] mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 font-light text-sm italic leading-relaxed mb-6">
                            "Highly recommended for anyone looking to get serious. The group sessions are incredibly motivating."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-white font-medium text-sm">David Miller</p>
<p className="text-neutral-500 text-xs">Entrepreneur</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A6E93A] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<div className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-[40px] p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-4xl md:text-5xl font-medium uppercase tracking-tight mb-4">Start Your <span className="text-[#A6E93A]">Journey</span></h2>
<p className="text-neutral-400 font-light">Fill out the form below and we'll get back to you within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-semibold ml-2">First Name</label>
<input className="w-full bg-black border border-neutral-800 rounded-[24px] px-6 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#A6E93A] transition-colors" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-semibold ml-2">Last Name</label>
<input className="w-full bg-black border border-neutral-800 rounded-[24px] px-6 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#A6E93A] transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-semibold ml-2">Email Address</label>
<input className="w-full bg-black border border-neutral-800 rounded-[24px] px-6 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#A6E93A] transition-colors" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-semibold ml-2">Goal</label>
<div className="relative">
<select className="w-full bg-black border border-neutral-800 rounded-[24px] px-6 py-4 text-white appearance-none focus:outline-none focus:border-[#A6E93A] transition-colors cursor-pointer">
<option>Weight Loss</option>
<option>Muscle Gain</option>
<option>Endurance</option>
<option>Competition Prep</option>
</select>
<div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#A6E93A]">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-[#A6E93A] text-black font-semibold text-lg py-4 rounded-[30px] hover:bg-white transition-colors uppercase tracking-tight" type="button">
                            Book Free Consultation
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-black border-t border-neutral-900 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<a className="text-3xl font-['Oswald'] tracking-tighter uppercase font-semibold text-white" href="#">
                        TRAIN<span className="text-[#A6E93A]">ER.</span>
</a>
<p className="text-neutral-500 text-sm mt-2 max-w-xs">Elevating human performance through science and discipline.</p>
</div>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:border-[#A6E93A] hover:text-[#A6E93A] transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:border-[#A6E93A] hover:text-[#A6E93A] transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:border-[#A6E93A] hover:text-[#A6E93A] transition-colors" href="#">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-neutral-900 pb-12">
<div>
<h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Sitemap</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li><a className="hover:text-[#A6E93A] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#A6E93A] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#A6E93A] transition-colors" href="#">Services</a></li>
<li><a className="hover:text-[#A6E93A] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li><a className="hover:text-[#A6E93A] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#A6E93A] transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Contact</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li>hello@trainer.com</li>
<li>+1 (555) 123-4567</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Location</h4>
<p className="text-sm text-neutral-500 font-light">
                        1024 Fitness Blvd,
                        Los Angeles, CA
                    </p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-light">
<p>© 2023 Trainer Inc. All rights reserved.</p>
<p>Designed with precision.</p>
</div>
</div>
</footer>


    </>
  );
}
