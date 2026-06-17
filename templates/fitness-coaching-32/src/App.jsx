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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        let menuOpen = false;

        btn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if(menuOpen) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        });

        // Intersection Observer for Fade-Up Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach((elem) => {
            observer.observe(elem);
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<i className="text-[#005ce2] w-6 h-6 transform group-hover:-rotate-12 transition-transform" data-lucide="dumbbell"></i>
<span className="font-bebas text-2xl tracking-tight mt-1">CHRIS RYAN</span>
</a>

<div className="hidden lg:flex items-center gap-10">
<a className="text-sm font-medium text-[#111110]/70 hover:text-[#111110] transition-colors" href="#">Programs</a>
<a className="text-sm font-medium text-[#111110]/70 hover:text-[#111110] transition-colors" href="#">Community</a>
<a className="text-sm font-medium text-[#111110]/70 hover:text-[#111110] transition-colors" href="#">Coaches</a>
<a className="text-sm font-medium text-[#111110]/70 hover:text-[#111110] transition-colors" href="#">Events</a>
</div>

<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium text-[#111110]/70 hover:text-[#111110] transition-colors" href="#">Contact Us</a>
<a className="bg-[#005ce2] text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-[#004bb8] hover:-translate-y-0.5 transition-all duration-300 shadow-sm shadow-[#005ce2]/20" href="#">Get Started</a>
</div>

<button className="lg:hidden text-[#111110] p-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white pt-24 px-6 hidden flex-col gap-6 h-screen" id="mobile-menu">
<a className="text-2xl font-bebas tracking-tight" href="#">Programs</a>
<a className="text-2xl font-bebas tracking-tight" href="#">Community</a>
<a className="text-2xl font-bebas tracking-tight" href="#">Coaches</a>
<a className="text-2xl font-bebas tracking-tight" href="#">Events</a>
<div className="h-px w-full bg-gray-100 my-4"></div>
<a className="text-lg font-medium text-[#111110]/70" href="#">Contact Us</a>
<a className="bg-[#005ce2] text-center text-white text-lg font-medium px-6 py-4 rounded-md mt-4" href="#">Get Started</a>
</div>

<header className="relative min-h-screen pt-20 flex items-center bg-[#111110] overflow-hidden">

<div className="absolute inset-0 z-0 bg-placeholder-dark opacity-80"></div>
<div className="absolute inset-0 z-0 bg-gradient-to-r from-[#111110] via-[#111110]/90 to-transparent w-full md:w-2/3"></div>
<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="fade-up pt-12 lg:pt-0">
<div className="inline-block border border-white/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
<span className="text-white/80 text-sm font-medium">Get fit with Chris Ryan Fitness</span>
</div>
<h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl text-white leading-[0.85] tracking-tight mb-8">
                    BUILD STRENGTH,<br/>LIVE LONGER
                </h1>
<div className="flex flex-wrap gap-4 mt-8">
<a className="bg-[#005ce2] text-white text-base md:text-lg font-medium px-8 py-4 rounded-md hover:bg-[#004bb8] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#005ce2]/20 flex items-center gap-2 group" href="#">
                        Get Started
                    </a>
<a className="bg-white/5 text-white backdrop-blur-sm text-base md:text-lg font-medium px-8 py-4 rounded-md hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group border border-white/10 hover:-translate-y-0.5" href="#">
                        Learn More <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="fade-up hidden md:flex justify-end lg:justify-center items-start lg:-mt-32">
<div className="bg-white rounded-2xl p-6 w-80 shadow-2xl shadow-black/50 relative overflow-hidden group">
<div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-4">
<div>
<span className="text-4xl font-bebas tracking-tight text-[#111110] block leading-none mb-1">245</span>
<span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Cal Burned</span>
</div>
<div className="text-right">
<span className="text-xl font-bebas tracking-tight text-[#111110] block leading-none mb-1">102</span>
<span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Avg BPM</span>
</div>
</div>
<div className="flex items-center justify-between text-xs font-medium text-gray-400 mb-6">
<div>
<span className="block mb-1">Start</span>
<span className="text-[#111110] text-sm">8:00 AM</span>
</div>
<div className="bg-[#005ce2]/10 text-[#005ce2] px-3 py-1 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i> 2h
                        </div>
<div className="text-right">
<span className="block mb-1">End</span>
<span className="text-[#111110] text-sm">10:00 AM</span>
</div>
</div>

<div className="flex items-end justify-between h-16 gap-1 mt-4">
<div className="w-full bg-gray-100 rounded-t-sm h-1/4 group-hover:bg-[#005ce2]/20 transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-2/4 group-hover:bg-[#005ce2]/30 transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-3/4 group-hover:bg-[#005ce2]/40 transition-colors"></div>
<div className="w-full bg-[#005ce2] rounded-t-sm h-full"></div>
<div className="w-full bg-[#005ce2] rounded-t-sm h-5/6"></div>
<div className="w-full bg-[#005ce2] rounded-t-sm h-full"></div>
<div className="w-full bg-[#005ce2] rounded-t-sm h-4/6"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-2/4 group-hover:bg-[#005ce2]/30 transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-1/4 group-hover:bg-[#005ce2]/20 transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-1/4 group-hover:bg-[#005ce2]/20 transition-colors"></div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 lg:py-32 bg-white relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-start">

<div className="fade-up flex flex-col pt-8 lg:pr-8">
<span className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4 block">Overview</span>
<h2 className="font-bebas text-5xl md:text-6xl tracking-tight text-[#111110] leading-none mb-6">Train smarter<br/>with Chris</h2>
<p className="text-[#111110]/60 leading-relaxed mb-8">
                        Learn how efficient, science-based routines shape quality and improve personal well-being. Focus on strength training and longevity protocols with no wasted reps.
                    </p>
<div className="mt-auto hidden lg:block">
<p className="text-sm text-[#111110]/50 font-medium">REMINDER</p>
<p className="text-sm text-[#111110] mt-2 border-l-2 border-[#005ce2] pl-4 py-1">
                            Hey Chris! You boosted your power output by 15% this week. Keep hitting those heavy lifts!
                        </p>
</div>
</div>

<div className="fade-up relative flex justify-center">
<div className="bg-[#005ce2] text-white rounded-[2rem] p-6 w-[320px] shadow-2xl shadow-[#005ce2]/20 flex flex-col relative overflow-hidden h-[540px]">

<div className="flex items-center justify-between mb-8 relative z-10">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
<span className="font-medium text-sm tracking-widest">MY FITNESS</span>
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</div>

<div className="relative z-10 flex flex-col flex-1">
<span className="text-white/70 text-sm font-medium uppercase tracking-wider mb-2">Health &amp; Fitness</span>
<div className="flex items-end gap-3 mb-8">
<span className="text-6xl font-bebas tracking-tight leading-none">88<span className="text-3xl">%</span></span>
<div className="flex gap-2 pb-2">
<i className="w-4 h-4 text-white/80" data-lucide="flame"></i>
<i className="w-4 h-4 text-white/80" data-lucide="zap"></i>
</div>
</div>

<div className="flex justify-between border-b border-white/20 pb-3 mb-6 text-xs font-medium">
<span className="text-white relative after:content-[''] after:absolute after:-bottom-[13px] after:left-0 after:w-full after:h-0.5 after:bg-white">DAILY</span>
<span className="text-white/50">WEEKLY</span>
<span className="text-white/50">MONTHLY</span>
</div>

<div className="bg-white/10 rounded-xl flex-1 mt-2 relative overflow-hidden backdrop-blur-sm border border-white/5 flex items-center justify-center">
<i className="w-12 h-12 text-white/50 absolute z-10" data-lucide="play-circle"></i>
<div className="absolute inset-0 bg-placeholder-dark opacity-50 mix-blend-overlay"></div>
</div>
</div>

<div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
</div>
</div>

<div className="fade-up flex flex-col pt-8 lg:pl-8">
<div className="mb-12">
<span className="font-bebas text-7xl lg:text-8xl tracking-tight text-[#111110] leading-none block mb-4">28.7K+</span>
<p className="text-[#111110] font-medium mb-6">Active community members pushing limits every single day.</p>
<p className="text-[#111110]/60 leading-relaxed">
                            Discover options to monitor your progress and improve your output with personalized insights, actionable tips, and programming designed to help you reach longevity faster.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50">
<div className="max-w-[1400px] mx-auto px-6">
<div className="fade-up text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4 block">Trainers</span>
<h2 className="font-bebas text-5xl md:text-6xl tracking-tight text-[#111110] leading-none mb-6">Move to keep your<br/>body healthy</h2>
<p className="text-[#111110]/60 mb-8">
                    Choose the right professional programming to help you achieve your long-term strength and longevity goals.
                </p>
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-[#005ce2] text-[#005ce2] text-sm font-medium rounded-md hover:bg-[#005ce2] hover:text-white transition-all duration-300" href="#">
                    See All Programs
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="fade-up group relative rounded-2xl overflow-hidden aspect-[4/5] bg-placeholder-dark shadow-sm">
<div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/40 to-transparent opacity-80 z-10"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20">
<div className="bg-white text-[#111110] inline-block px-4 py-2 rounded-lg mb-4 transform group-hover:-translate-y-1 transition-transform">
<h3 className="font-bebas text-2xl tracking-tight leading-none">Strength Program</h3>
</div>
<p className="text-white/80 text-sm">Training athletes to maximize power, efficiency, and overall performance.</p>
</div>
</div>

<div className="fade-up group relative rounded-2xl overflow-hidden aspect-[3/4] bg-placeholder-light shadow-sm md:-mt-8 md:mb-8 border border-gray-100">
<div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 via-transparent to-transparent opacity-80 z-10"></div>

<div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
<i className="w-16 h-16 text-white fill-white" data-lucide="play"></i>
</div>
</div>

<div className="fade-up group relative rounded-2xl overflow-hidden aspect-[4/5] bg-placeholder-dark shadow-sm">
<div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/40 to-transparent opacity-80 z-10"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20">
<div className="bg-[#111110] text-white border border-white/20 inline-block px-4 py-2 rounded-lg mb-4 transform group-hover:-translate-y-1 transition-transform">
<h3 className="font-bebas text-2xl tracking-tight leading-none">Longevity Protocol</h3>
</div>
<p className="text-white/80 text-sm">Focus on mobility, joint health, and building a foundation for life.</p>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2">

<div className="bg-[#111110] text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">

<div className="absolute top-1/2 -translate-y-1/2 -left-10 text-[300px] font-bebas text-white/[0.03] leading-none select-none z-0">
                05
            </div>
<div className="relative z-10 fade-up max-w-md mx-auto lg:mx-0 lg:ml-auto">
<h2 className="font-bebas text-5xl md:text-7xl tracking-tight leading-[0.9] mb-6">Monitor your<br/>health progress</h2>
<p className="text-white/50 text-lg mb-10 leading-relaxed">
                    Track your performance every day and achieve your strength goals with measured steps and no wasted reps.
                </p>
<a className="bg-white text-[#111110] text-sm font-medium px-10 py-4 rounded-md hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 inline-block text-center w-full sm:w-auto" href="#">
                    Discover More
                </a>
</div>
</div>

<div className="relative min-h-[500px] lg:min-h-[700px] bg-placeholder-dark">
<div className="absolute inset-0 bg-gradient-to-br from-[#111110]/40 to-transparent mix-blend-multiply"></div>

<div className="absolute right-6 bottom-12 md:right-12 md:bottom-24 z-20 fade-up">
<div className="bg-[#111110] text-white p-6 rounded-2xl w-72 shadow-2xl border border-white/10">
<span className="text-xs font-medium text-white/50 tracking-widest uppercase mb-4 block">Performance</span>
<div className="flex items-end gap-3 border-b border-white/10 pb-4 mb-4">
<span className="text-5xl font-bebas tracking-tight text-[#005ce2] leading-none">88<span className="text-2xl">%</span></span>
<div className="flex gap-2 pb-1">
<i className="w-4 h-4 text-white/60" data-lucide="activity"></i>
</div>
</div>
<div>
<span className="text-xs font-medium text-white/50 tracking-widest uppercase mb-1 block">Workouts Logged</span>
<div className="flex items-end gap-2 mb-4">
<span className="text-4xl font-bebas tracking-tight text-white leading-none">208</span>
<span className="text-sm text-white/50 pb-1">days in a row</span>
</div>

<div className="flex flex-wrap gap-1.5 w-full">

<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-[#005ce2]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#005ce2]"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-[#005ce2]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#005ce2]"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-[#005ce2]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#005ce2]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#005ce2]"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-[#005ce2]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#005ce2]"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div><div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1400px] mx-auto px-6">
<div className="fade-up text-center max-w-3xl mx-auto mb-16">
<h2 className="font-bebas text-5xl md:text-7xl tracking-tight text-[#111110] leading-[0.9] mb-6">Take on the Ultimate<br/>Fitness Challenge</h2>
<p className="text-[#111110]/60 text-lg">
                    Achieve higher performance by taking on the best workout challenges. Grab the free 5-Day Bundle, test your limits, and achieve your goals.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="fade-up lg:col-span-7 relative rounded-2xl overflow-hidden min-h-[500px] lg:min-h-[700px] bg-placeholder-light group">
<div className="absolute inset-0 bg-gradient-to-t from-[#111110]/90 via-[#111110]/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
<h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
                            Living well today leads the way to a brighter, healthier tomorrow.
                        </h3>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="fade-up bg-[#005ce2] text-white rounded-2xl p-8 md:p-12 flex items-center min-h-[250px] shadow-lg shadow-[#005ce2]/10 hover:shadow-[#005ce2]/20 transition-shadow">
<h3 className="text-3xl font-medium tracking-tight leading-tight">
                            Designed empowering strength athletes and longevity seekers
                        </h3>
</div>

<div className="fade-up flex-1 relative rounded-2xl overflow-hidden min-h-[350px] bg-placeholder-dark group">
<div className="absolute inset-0 bg-[#111110]/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-100 transition-transform">
<i className="w-8 h-8 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white w-full">
<div className="px-10 max-w-none mx-auto w-full fade-up">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
<h2 className="font-bebas text-5xl text-[#111110] leading-none tracking-tight">
                    REAL BODIES,<br/>REAL PROGRESS
                </h2>
<a className="inline-flex items-center justify-center gap-2 bg-[#005ce2] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#004bb8] hover:-translate-y-0.5 transition-all duration-300" href="#">
                    View all stories 
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
<i className="w-3 h-3 text-[#005ce2]" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>

<div className="flex flex-col gap-3">

<div className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[400px]">

<div className="h-[300px] lg:h-auto flex-1 rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] cursor-pointer transition-transform duration-200 flex relative">
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] border-r border-black/20"></div>
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26]"></div>
</div>

<div className="h-[300px] lg:h-auto flex-1 rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] cursor-pointer transition-transform duration-200 flex relative">
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative border-r border-black/20">
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-[44px] h-[44px] bg-[#005ce2]/85 rounded-full"></div>
</div>
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative">
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-[44px] h-[44px] bg-[#005ce2]/85 rounded-full"></div>
</div>
</div>

<div className="h-[300px] lg:h-auto flex-1 rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] cursor-pointer transition-transform duration-200 flex relative">
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative border-r border-black/20">
<span className="absolute bottom-3 left-3 bg-black/60 text-white text-[11px] px-2 py-1 rounded">Aug 04, 2023</span>
</div>
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative">
<span className="absolute bottom-3 left-3 bg-black/60 text-white text-[11px] px-2 py-1 rounded">Jan 13</span>
</div>
</div>

<div className="h-[300px] lg:h-auto flex-1 rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] cursor-pointer transition-transform duration-200 flex relative">
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] border-r border-black/20"></div>
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26]"></div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[400px]">

<div className="h-[300px] lg:h-auto flex-1 rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] cursor-pointer transition-transform duration-200 flex relative">
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative border-r border-black/20">
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-[44px] h-[44px] bg-[#005ce2]/85 rounded-full"></div>
</div>
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative">
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-[44px] h-[44px] bg-[#005ce2]/85 rounded-full"></div>
</div>
</div>

<div className="h-[300px] lg:h-auto flex-1 rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] cursor-pointer transition-transform duration-200 flex relative">
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative border-r border-black/20">
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-[44px] h-[44px] bg-[#111110]/85 rounded-full"></div>
</div>
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative">
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-[44px] h-[44px] bg-[#111110]/85 rounded-full"></div>
</div>
</div>

<div className="h-[300px] lg:h-auto flex-[1.5] rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] cursor-pointer transition-transform duration-200 flex relative">
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative border-r border-black/20">
<span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 text-white text-[11px] px-2 py-1 rounded">202.5 lb / 11/9/21</span>
</div>
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative">
<span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 text-white text-[11px] px-2 py-1 rounded">189.7 lb / 8/31/25</span>
</div>
</div>

<div className="h-[300px] lg:h-auto flex-1 rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] cursor-pointer transition-transform duration-200 flex relative">
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative border-r border-black/20">
<span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 text-white text-[11px] px-2 py-1 rounded">202.5 lb / 1/6/25</span>
</div>
<div className="flex-1 bg-gradient-to-br from-[#1a1a18] to-[#2a2a26] relative">
<span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 text-white text-[11px] px-2 py-1 rounded">189.7 lb / 6/31/25</span>
</div>
</div>
</div>
</div>

<p className="text-center text-[#111110]/50 text-sm mt-8">
                Results vary. Consistency and commitment required.
            </p>
</div>
</section>

<section className="py-32 bg-[#111110] border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center fade-up">
<h2 className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight md:leading-tight lg:leading-tight mb-12 tracking-tight">
<span className="font-light">Join the Movement Today –</span>
<span className="font-medium">Stay Active, Improve Your Performance,</span>
<span className="font-light text-white/40">and Achieve Your Goals with Our Sports Community!</span>
</h2>
<a className="inline-flex items-center gap-2 bg-white text-[#111110] text-sm font-medium px-8 py-4 rounded-full hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300" href="#">
                Get Started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<footer className="bg-[#111110] text-white pt-20 pb-10 border-t border-white/10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 border-b border-white/10 pb-16">

<div className="lg:col-span-2 pr-8">
<a className="flex items-center gap-2 mb-6 group inline-flex" href="#">
<i className="text-white w-5 h-5 group-hover:text-[#005ce2] transition-colors" data-lucide="dumbbell"></i>
<span className="font-bebas text-2xl tracking-tight mt-1">CHRIS RYAN</span>
</a>
<div className="text-white/50 text-sm space-y-2 mb-8">
<p>contact@chrisryanfitness.com</p>
<p>@chrisryanfitness</p>
<p>New York, NY</p>
</div>

<div className="flex gap-4">
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-medium text-sm mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Blog Articles</a></li>
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Training Guides</a></li>
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Nutrition Tips</a></li>
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Video Tutorials</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium text-sm mb-6">Programs</h4>
<ul className="space-y-4">
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">5-Day Bundle</a></li>
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Strength Protocol</a></li>
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Longevity Focus</a></li>
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Challenges</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium text-sm mb-6">About Us</h4>
<ul className="space-y-4">
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Our Mission</a></li>
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Coaches</a></li>
<li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Community</a></li>
</ul>
</div>
</div>

<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
<p>© 2025 Chris Ryan Fitness. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
