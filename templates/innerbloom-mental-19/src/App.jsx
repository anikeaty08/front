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



        // Initialize Lucide icons with specific stroke width
        lucide.createIcons({
            strokeWidth: 1.5
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
      

<div className="relative w-full min-h-[900px] flex flex-col">

<div className="absolute inset-0 z-0">
<img alt="Woman meditating" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=2720&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-blue-900/20 to-[#F8FAFC]"></div>
</div>

<nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
<div className="flex items-center gap-8">

<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center overflow-hidden">
<img alt="logo" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20 text-sm text-white">
<a className="px-5 py-2 rounded-full bg-white text-slate-900 font-medium" href="#">Home</a>
<a className="px-5 py-2 hover:bg-white/10 rounded-full transition-colors" href="#">Exercises</a>
<a className="px-5 py-2 hover:bg-white/10 rounded-full transition-colors" href="#">Therapists</a>
<a className="px-5 py-2 hover:bg-white/10 rounded-full transition-colors" href="#">Blog</a>
</div>
</div>
<a className="flex items-center gap-2 text-white hover:text-white/80 transition-colors border-b border-white pb-1 text-sm" href="#">
<i className="w-4 h-4" data-lucide="user"></i>
                Start for Free
            </a>
</nav>

<div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-8 pt-16 pb-24 flex flex-col md:flex-row justify-between">

<div className="flex flex-col max-w-2xl mt-12">
<h1 className="text-6xl md:text-[5.5rem] leading-[1.05] tracking-tight font-medium text-white mb-10 drop-shadow-sm">
                    Bloom Into <span className="font-serif italic font-normal">Your</span><br/>
<span className="font-serif italic font-normal">Best</span> Self.
                </h1>
<div>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full text-base font-medium hover:bg-slate-50 transition-colors shadow-lg" href="#">
                        Book a Free Session
                    </a>
</div>

<div className="mt-auto pt-40 flex flex-col gap-4 w-fit">
<div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-sm w-fit">
<i className="w-5 h-5 text-white" data-lucide="leaf"></i>
<span className="text-sm font-medium">Mental Wellness</span>
</div>
<div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 w-fit">
<i className="w-5 h-5" data-lucide="heart"></i>
<span className="text-sm">Emotional Balance</span>
</div>
<div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 w-fit">
<i className="w-5 h-5" data-lucide="sun"></i>
<span className="text-sm">Daily Growth</span>
</div>
</div>
</div>

<div className="flex flex-col items-end mt-4 md:mt-0">

<div className="flex flex-col items-end gap-3 mb-auto">
<div className="flex items-center gap-4 bg-white px-5 py-2.5 rounded-full shadow-md">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="text-slate-600 font-medium">+200K Members</span>
<span className="text-slate-300">|</span>
<div className="flex items-center gap-1 font-medium text-slate-800">
                                4.9 
                                <div className="flex text-yellow-400">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
<p className="text-white/80 text-right text-sm max-w-[300px] leading-relaxed pr-2">
                        Begin your journey to inner peace, emotional balance, and lasting mental wellness.
                    </p>
</div>

<div className="flex flex-col gap-4 mt-40">
<div className="flex items-center gap-4 bg-white/80 backdrop-blur-lg p-4 rounded-2xl w-[380px] shadow-sm border border-white/40">
<img alt="Woman smiling" className="w-16 h-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-slate-700 leading-snug">Overcome anxiety and stress with evidence-based therapy and genuine compassion.</p>
</div>
<div className="flex items-center gap-4 bg-white/80 backdrop-blur-lg p-4 rounded-2xl w-[380px] shadow-sm border border-white/40 ml-8">
<img alt="Woman resting" className="w-16 h-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-slate-700 leading-snug">Your path to a calmer, healthier mind starts here — with InnerBloom by your side.</p>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-5xl mx-auto px-8 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-slate-800 leading-[1.1]">
                Mental health 
                <span className="inline-flex align-middle mx-2 overflow-hidden rounded-full w-24 h-10 bg-slate-200">
<img alt="Zen stones" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</span>
<br/>
<span className="font-serif italic font-normal text-slate-600">awareness,</span> care and your priority.
            </h2>
<div className="flex items-center md:justify-end">
<p className="text-base text-slate-500 leading-relaxed max-w-sm">
                    Just as you nurture your body, your mind deserves the same love, care, and understanding — every single day.
                </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-8 py-16 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-slate-800 text-center mb-20 leading-[1.1]">
            How Are <span className="font-serif italic font-normal">You</span><br/>
<span className="font-serif italic font-normal text-slate-500">Feeling</span> Today?
        </h2>

<div className="w-full max-w-4xl relative mb-16">

<div className="absolute bottom-4 left-10 right-10 h-px bg-slate-200 z-0"></div>
<div className="flex justify-between items-end relative z-10 px-4">

<div className="flex flex-col items-center gap-2">
<div className="w-20 h-24 bg-[#E2F0FA] rounded-t-[2.5rem] rounded-b-xl relative overflow-hidden shadow-sm border border-white">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
<div className="w-2 h-2 rounded-full bg-slate-800"></div>
<div className="w-2 h-2 rounded-full bg-slate-800"></div>
</div>
<div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-4 h-1 border-b-2 border-slate-800 rounded-full"></div>

<div className="absolute top-1/2 -left-1 w-3 h-4 bg-[#E2F0FA] rounded-full border border-white transform -rotate-12"></div>
<div className="absolute top-1/2 -right-1 w-3 h-4 bg-[#E2F0FA] rounded-full border border-white transform rotate-12"></div>
</div>
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="w-24 h-28 bg-[#D3E8F8] rounded-t-[3rem] rounded-b-2xl relative overflow-hidden shadow-sm border border-white">
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 flex gap-3">
<div className="w-2.5 h-1 bg-slate-800 transform rotate-12"></div>
<div className="w-2.5 h-1 bg-slate-800 transform -rotate-12"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex gap-3">
<div className="w-2 h-2 rounded-full bg-slate-800"></div>
<div className="w-2 h-2 rounded-full bg-slate-800"></div>
</div>
<div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-3 h-3 border-t-2 border-slate-800 rounded-full"></div>
</div>
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>

<div className="flex flex-col items-center gap-2 relative -mt-8">

<div className="absolute -top-12 px-4 py-1.5 bg-[#E2F0FA] text-slate-700 text-sm rounded-full font-medium border border-white shadow-sm whitespace-nowrap">
                        Blooming 🌸
                    </div>

<div className="absolute -top-4 w-px h-6 bg-slate-300"></div>
<div className="w-28 h-32 bg-[#92C5EE] rounded-t-[3.5rem] rounded-b-2xl relative overflow-hidden shadow-md border-2 border-white">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex gap-4">
<div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
</div>
<div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-3 h-2 bg-slate-800 rounded-full"></div>
<div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-10 border-2 border-[#E2F0FA] rounded-full"></div>
</div>
<div className="w-2 h-2 rounded-full bg-blue-400 ring-4 ring-blue-50 mt-2"></div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="w-24 h-28 bg-[#D3E8F8] rounded-t-[3rem] rounded-b-2xl relative overflow-hidden shadow-sm border border-white">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex gap-3">
<div className="w-2 h-2 rounded-full bg-slate-800"></div>
<div className="w-2 h-2 rounded-full bg-slate-800"></div>
</div>
<div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-4 h-1 border-b-2 border-slate-800 rounded-full"></div>
</div>
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="w-20 h-24 bg-[#E2F0FA] rounded-t-[2.5rem] rounded-b-xl relative overflow-hidden shadow-sm border border-white">
<div className="absolute top-[45%] left-1/2 -translate-x-1/2 flex gap-2">
<div className="w-2 h-1 bg-slate-800 transform -rotate-12"></div>
<div className="w-2 h-1 bg-slate-800 transform rotate-12"></div>
</div>
<div className="absolute top-[55%] left-1/2 -translate-x-1/2 flex gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
</div>
<div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-3 h-1 border-t-2 border-slate-800 rounded-full"></div>
</div>
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-6 w-full max-w-3xl">

<div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 flex-1 min-w-[200px] opacity-60">
<div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center flex-shrink-0 text-slate-400">
<i className="w-5 h-5" data-lucide="flower-2"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-700 mb-1">Wellness</h4>
<p className="text-xs text-slate-400 leading-relaxed">Simple daily habits to keep your mental health strong.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-2xl bg-[#92C5EE] text-slate-800 flex-1 min-w-[200px] shadow-sm transform -translate-y-2">
<div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-slate-800" data-lucide="brain"></i>
</div>
<div>
<h4 className="text-base font-medium mb-1">Mindfulness</h4>
<p className="text-xs text-slate-700 leading-relaxed">Guided meditation practices for everyday calm.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 flex-1 min-w-[200px] opacity-60">
<div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center flex-shrink-0 text-slate-400">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-700 mb-1">Growth</h4>
<p className="text-xs text-slate-400 leading-relaxed">Build routines that support your long-term mental health.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-8 py-16">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-4xl md:text-[2.75rem] tracking-tight font-medium text-slate-800 leading-[1.1] max-w-xl">
                Everything You <span className="font-serif italic font-normal">Need For</span><br/>
                Your <span className="font-serif italic font-normal text-slate-600">Wellness</span> Journey
            </h2>
<a className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors border-b border-slate-300 pb-1 mt-6 md:mt-0 text-sm" href="#">
                Get Started Today
                <div className="w-6 h-6 rounded-full bg-[#A8D1F2] flex items-center justify-center ml-2 text-white">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</div>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[340px]">

<div className="bg-[#92C5EE] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-slate-800 mb-8 z-10">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div className="relative z-10 w-2/3">
<h3 className="text-2xl tracking-tight font-medium text-slate-800 mb-3">Find Your Therapist</h3>
<p className="text-sm text-slate-700 leading-relaxed">Browse 500+ licensed therapists by specialty, language, and availability worldwide.</p>
</div>

<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#7AB5E4] rounded-full blur-2xl opacity-50 z-0"></div>

<div className="absolute top-0 right-8 w-16 h-full bg-[#7AB5E4] rounded-b-3xl"></div>
</div>

<div className="bg-[#F1F5F9] rounded-3xl p-8 flex flex-col relative overflow-hidden col-span-1 md:col-span-1">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 mb-6 shadow-sm">
<i className="w-5 h-5" data-lucide="video"></i>
</div>
<div className="mb-6 w-3/4">
<h3 className="text-xl tracking-tight font-medium text-slate-800 mb-2">Flexible Sessions</h3>
<p className="text-sm text-slate-500 leading-relaxed">Video, voice, or chat — therapy that fits your schedule and your comfort zone.</p>
</div>

<div className="absolute right-[-20%] bottom-[-10%] w-[120%] flex flex-col gap-3 transform rotate-[-5deg]">
<img alt="Beach" className="w-full h-32 object-cover rounded-3xl shadow-sm" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Person sitting" className="w-full h-32 object-cover rounded-3xl shadow-sm ml-12" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="bg-gradient-to-b from-[#B4D8F5] to-[#D9ECFA] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 mb-8 z-10 shadow-sm">
<i className="w-5 h-5 fill-slate-600" data-lucide="heart"></i>
</div>
<div className="relative z-10">
<h3 className="text-2xl tracking-tight font-medium text-slate-800 mb-3">Track Your Growth</h3>
<p className="text-sm text-slate-600 leading-relaxed">Visualize your progress with mood tracking, journal insights, and weekly reports.</p>
</div>
<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/30 rounded-full blur-3xl z-0"></div>
</div>
</div>
</section>

<section className="w-full bg-white py-24 border-y border-slate-100">
<div className="max-w-4xl mx-auto px-8 flex flex-col items-center">
<h2 className="text-4xl md:text-[2.75rem] tracking-tight font-medium text-slate-800 text-center mb-4">
                Find Your <span className="font-serif italic font-normal text-slate-600">Therapist</span>
</h2>
<p className="text-base text-slate-500 text-center mb-10">Connect with certified mental health professionals across 40+ countries.</p>

<div className="flex flex-wrap justify-center gap-3 mb-16">
<button className="w-10 h-10 rounded-full bg-[#92C5EE] flex items-center justify-center text-white shadow-sm hover:opacity-90 transition-opacity">
<i className="w-5 h-5" data-lucide="align-left"></i>
</button>
<button className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="wind"></i> Breathing
                </button>
<button className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="moon"></i> Sleep
                </button>
<button className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="activity"></i> Anxiety
                </button>
<button className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="flower"></i> Meditation
                </button>
</div>

<div className="w-full flex flex-col">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-slate-200 gap-6">
<div className="flex items-center gap-8">
<span className="text-5xl font-serif italic text-slate-300">01</span>
<h3 className="text-3xl tracking-tight font-medium text-slate-800">Deep breathing</h3>
</div>
<div className="flex flex-col items-end gap-4 w-full md:w-auto">
<p className="text-sm text-slate-500 text-right">Restore calm instantly with guided mindful breathing.</p>
<div className="flex items-center gap-3">
<span className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs font-medium flex items-center gap-1.5 bg-white">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> 5 mins
                            </span>
<span className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs font-medium bg-white">Beginner</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-slate-200 gap-6 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
<div className="flex items-center gap-8">
<span className="text-5xl font-serif italic text-slate-300">02</span>
<h3 className="text-3xl tracking-tight font-medium text-slate-400">Meditation for sleep</h3>
</div>
<div className="w-full md:w-64 h-16 rounded-full overflow-hidden">
<img alt="Person resting" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-slate-200 gap-6 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
<div className="flex items-center gap-8">
<span className="text-5xl font-serif italic text-slate-300">03</span>
<h3 className="text-3xl tracking-tight font-medium text-slate-400">Freedom from anxiety</h3>
</div>
<div className="w-full md:w-64 h-16 rounded-full overflow-hidden">
<img alt="Person meditating on rocks" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="mt-12">
<a className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors border-b border-slate-300 pb-1 text-sm" href="#">
                    Explore All Programs
                    <div className="w-6 h-6 rounded-full bg-[#A8D1F2] flex items-center justify-center ml-2 text-white">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</div>
</section>

<section className="relative w-full h-[600px] flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Mountains and clouds" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80"></div>
<div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-center px-8">
<h2 className="text-[3.5rem] tracking-tight font-medium text-slate-800 mb-4 drop-shadow-sm">
                Benefits of <span className="font-serif italic font-normal text-slate-600">Meditation</span>
</h2>
<p className="text-base text-slate-700 font-medium mb-10 tracking-wide">Morning mindfulness for a calmer, more focused life.</p>
<button className="px-6 py-3.5 bg-white rounded-full text-slate-800 text-sm font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
<i className="w-4 h-4 text-slate-500" data-lucide="sun"></i>
                Start Your Day with Peace
            </button>
</div>
</section>

<section className="max-w-6xl mx-auto px-8 py-24">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-[2.75rem] tracking-tight font-medium text-slate-800 mb-4">
                Self Help <span className="font-serif italic font-normal text-slate-600">Toolkit</span>
</h2>
<p className="text-base text-slate-500">Instant relief tools — available 24/7, wherever you are.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col shadow-sm">
<div className="flex items-center justify-center gap-2 mb-8 pb-4 border-b border-slate-100">
<i className="w-5 h-5 text-slate-400" data-lucide="wind"></i>
<span className="font-medium text-slate-700">Breath</span>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-800 mb-2">Panic Button — Guided Breathing</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-10">Feeling overwhelmed? This 5-minute exercise will calm your nervous system instantly.</p>

<div className="flex justify-center mb-10">
<div className="w-48 h-48 rounded-full border-[18px] border-[#F1F5F9] relative flex flex-col items-center justify-center">

<div className="absolute inset-[-18px] rounded-full border-[18px] border-[#A8D1F2] border-t-transparent border-l-transparent transform rotate-45"></div>
<span className="text-4xl font-medium tracking-tight text-slate-800 mb-1">5</span>
<span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Second</span>
</div>
</div>
<div className="flex items-center justify-between mb-8">
<span className="text-sm font-medium text-slate-800">Breathe in through your nose.</span>
<span className="text-xs text-slate-400 font-medium">Cycle: 0 to 10</span>
</div>
<div className="flex items-center gap-3 mb-8">
<button className="w-12 h-12 rounded-full bg-[#E2F0FA] flex items-center justify-center text-[#5C9ECE] hover:bg-[#D3E8F8] transition-colors">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
</button>
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
<i className="w-5 h-5" data-lucide="rotate-ccw"></i>
</button>
</div>
<div className="bg-[#F8FAFC] rounded-2xl p-5 mt-auto">
<h4 className="text-xs font-medium text-slate-800 mb-3">Breathe in through your nose.</h4>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div> Find a comfortable seat or lie down</li>
<li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div> Press play to begin the session</li>
<li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div> Follow the on-screen breathing guide</li>
<li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div> Complete 10 cycles — takes about 5 minutes</li>
</ul>
</div>
</div>

<div className="bg-[#F8FAFC] border border-slate-100 rounded-3xl p-8 flex flex-col shadow-sm">
<div className="flex items-center justify-center gap-2 mb-8 pb-4 border-b border-slate-200">
<i className="w-5 h-5 text-slate-400" data-lucide="volume-2"></i>
<span className="font-medium text-slate-700">Voice</span>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-800 mb-2">White Noise &amp; Calming Sounds</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-10">Immerse yourself in nature's sounds to relax, focus, or drift into restful sleep.</p>

<div className="grid grid-cols-2 gap-4 mb-8">
<button className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-3 hover:border-[#92C5EE] transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#E2F0FA] flex items-center justify-center text-[#5C9ECE] group-hover:bg-[#92C5EE] group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="cloud-rain"></i>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-slate-800">Rain</span>
<span className="block text-[10px] text-slate-400 mt-0.5">Sounds of Quiet Rain</span>
</div>
</button>
<button className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-3 hover:border-[#92C5EE] transition-colors group">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#E2F0FA] group-hover:text-[#5C9ECE] transition-colors">
<i className="w-5 h-5" data-lucide="waves"></i>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-slate-800">Sea</span>
<span className="block text-[10px] text-slate-400 mt-0.5">Sounds of Waves</span>
</div>
</button>
<button className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-3 hover:border-[#92C5EE] transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#E2F0FA] flex items-center justify-center text-[#5C9ECE] group-hover:bg-[#92C5EE] group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="trees"></i>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-slate-800">Forest</span>
<span className="block text-[10px] text-slate-400 mt-0.5">Birds and Nature</span>
</div>
</button>
<button className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-3 hover:border-[#92C5EE] transition-colors group">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#E2F0FA] group-hover:text-[#5C9ECE] transition-colors">
<i className="w-5 h-5" data-lucide="wind"></i>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-slate-800">Wind</span>
<span className="block text-[10px] text-slate-400 mt-0.5">Sounds of Gentle Wind</span>
</div>
</button>
</div>
<div className="bg-white rounded-2xl p-5 mt-auto border border-slate-100">
<h4 className="text-xs font-medium text-slate-800 mb-2">Note:</h4>
<p className="text-xs text-slate-500 leading-relaxed">Use headphones for the best calming experience.</p>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col shadow-sm">
<div className="flex items-center justify-center gap-2 mb-8 pb-4 border-b border-slate-100">
<i className="w-5 h-5 text-slate-400" data-lucide="cloud"></i>
<span className="font-medium text-slate-700">Thought</span>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-800 mb-2">Daily Positive Thought</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">A fresh affirmation delivered to you every morning.</p>

<div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 group">
<img alt="Calm beach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center p-6 text-center">
<p className="text-xl font-serif italic text-white drop-shadow-md leading-relaxed">I am growing and blooming at my own pace.</p>
</div>
</div>
<div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
<button className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
<i className="w-4 h-4 fill-slate-300 text-slate-300" data-lucide="heart"></i> Liked
                    </button>
<button className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
<i className="w-4 h-4" data-lucide="refresh-cw"></i> See another idea
                    </button>
</div>
<div className="mb-6">
<h4 className="text-xs font-medium text-slate-800 mb-3">How to use:</h4>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div> Read this message every morning</li>
<li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div> Say it out loud and feel it</li>
<li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div> Press the heart icon if you like it</li>
<li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div> You can write it in your journal</li>
</ul>
</div>
<div className="mt-auto text-center pt-4">
<p className="text-xs text-slate-800 font-medium leading-relaxed">
                        Remember:<br/>
                        you are capable of more than you know.<br/>
                        Every small step forward matters.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-8 py-24">
<div className="bg-[#F8FAFC] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row border border-slate-100 shadow-sm">

<div className="p-12 md:p-16 flex-1 flex flex-col justify-center">
<h2 className="text-4xl md:text-[2.75rem] tracking-tight font-medium text-slate-800 mb-4 leading-[1.1]">
                    Community<br/>
<span className="text-[#5C9ECE]">Support</span><br/>
                    Circle
                </h2>
<p className="text-base text-slate-500 mb-10 max-w-sm leading-relaxed">
                    Share your journey anonymously and uplift others around the world.
                </p>
<button className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-medium w-fit mb-12 hover:bg-white transition-colors bg-white/50">
                    View All
                </button>
<div className="flex items-center gap-4 mb-12">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#F8FAFC] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#F8FAFC] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#F8FAFC] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-10 h-10 rounded-full border-2 border-[#F8FAFC] bg-slate-200 flex items-center justify-center text-xs text-slate-600 font-medium">+</div>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="text-slate-600 font-medium">+200K Reviews</span>
<div className="flex items-center gap-1 font-medium text-slate-800 ml-2 border-l border-slate-300 pl-4">
                            4.9 
                            <div className="flex text-yellow-400">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-800 mb-4">Community Rules</h4>
<ul className="text-sm text-slate-500 space-y-3">
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-[#5C9ECE] mt-0.5" data-lucide="check"></i>
                            Be kind and understanding
                        </li>
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-[#5C9ECE] mt-0.5" data-lucide="check"></i>
                            Respect the experiences of others
                        </li>
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-[#5C9ECE] mt-0.5" data-lucide="check"></i>
                            Do not post harmful or negative content
                        </li>
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-[#5C9ECE] mt-0.5" data-lucide="check"></i>
                            Keep your personal information private
                        </li>
</ul>
</div>
</div>

<div className="md:w-1/2 relative min-h-[500px]">
<img alt="Sarah M." className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
<i className="w-3.5 h-3.5 text-yellow-400 fill-current" data-lucide="star"></i>
<span className="text-white text-xs font-medium">4.9</span>
</div>
<div className="absolute bottom-6 left-6 right-6 border border-white/20 rounded-3xl p-6 bg-black/20 backdrop-blur-md flex flex-col justify-end">
<div className="mb-4">
<h3 className="text-xl font-medium text-white mb-1">Sarah M.</h3>
<p className="text-sm text-white/70">New York, NY</p>
</div>
<div className="flex gap-2 border-t border-white/20 pt-4">
<img alt="User" className="w-8 h-8 rounded-full border border-white/30 object-cover opacity-60 hover:opacity-100 cursor-pointer transition-opacity" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="User active" className="w-8 h-8 rounded-full border border-white/30 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/> 
<img alt="User" className="w-8 h-8 rounded-full border border-white/30 object-cover opacity-60 hover:opacity-100 cursor-pointer transition-opacity" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border border-white/30 object-cover opacity-60 hover:opacity-100 cursor-pointer transition-opacity" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-8 h-8 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white/80 text-xs cursor-pointer hover:bg-white/20 transition-colors">+</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full py-32 flex flex-col items-center justify-center text-center overflow-hidden">

<div className="absolute inset-0 z-0 opacity-40">
<img alt="Clouds" className="w-full h-full object-cover object-top blur-sm" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/80"></div>
</div>
<div className="relative z-10 px-8">
<h2 className="text-[3.5rem] md:text-[4.5rem] tracking-tight font-medium text-slate-800 mb-6 leading-[1.1]">
                Rethink your <span className="text-[#5C9ECE]">Benefits</span><br/>
<span className="font-serif italic font-normal text-slate-600">of</span> Meditation
            </h2>
<p className="text-base text-slate-500 mb-10">Discover what meditation can do for your mind. Let InnerBloom guide you there.</p>
<div className="relative w-full max-w-md mx-auto">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<i className="w-4 h-4 text-slate-400" data-lucide="mail"></i>
</div>
<input className="w-full pl-11 pr-32 py-4 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#92C5EE] transition-all shadow-sm" placeholder="yourname@email.com" type="email"/>
<button className="absolute right-2 top-2 bottom-2 px-6 bg-[#92C5EE] text-white text-sm font-medium rounded-full hover:bg-[#7AB5E4] transition-colors">
                    Join Now
                </button>
</div>
</div>
</section>

<footer className="relative w-full min-h-[500px] flex flex-col justify-end overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Landscape" className="w-full h-full object-cover object-bottom" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
</div>

<div className="absolute bottom-[20%] left-0 w-full text-center z-10 pointer-events-none select-none">
<h1 className="text-[14vw] md:text-[18vw] font-serif italic font-medium text-white/10 tracking-tighter leading-none mix-blend-overlay">InnerBloom</h1>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none w-32 h-32">
<svg className="w-full h-full fill-slate-900" viewbox="0 0 100 100">

<path d="M50 20 A 10 10 0 1 0 50 19.9 Z M 40 30 C 40 30, 30 50, 20 60 C 15 65, 30 70, 40 70 L 60 70 C 70 70, 85 65, 80 60 C 70 50, 60 30, 60 30 L 50 25 Z"></path>
<path d="M 20 60 C 20 60, 10 70, 10 80 C 10 85, 90 85, 90 80 C 90 70, 80 60, 80 60 Z"></path>
</svg>
</div>

<div className="relative z-20 w-full max-w-7xl mx-auto px-8 pb-8 pt-32">
<div className="flex justify-between items-end mb-16">

<div className="flex flex-col gap-3">
<a className="px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/10 transition-colors w-fit backdrop-blur-sm bg-black/10" href="#">Support</a>
<a className="px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/10 transition-colors w-fit backdrop-blur-sm bg-black/10" href="#">Help Center</a>
<a className="px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/10 transition-colors w-fit backdrop-blur-sm bg-black/10" href="#">Contact Us</a>
<a className="px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/10 transition-colors w-fit backdrop-blur-sm bg-black/10" href="#">FAQ</a>
</div>

<div className="flex flex-col items-end gap-3">
<a className="px-5 py-2 rounded-full bg-white text-slate-900 text-sm font-medium w-fit shadow-sm" href="#">Home</a>
<a className="px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/10 transition-colors w-fit backdrop-blur-sm bg-black/10" href="#">Exercises</a>
<a className="px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/10 transition-colors w-fit backdrop-blur-sm bg-black/10" href="#">Therapists</a>
<a className="px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/10 transition-colors w-fit backdrop-blur-sm bg-black/10" href="#">Blog</a>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/20 text-xs text-white/60">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="copyright"></i>
                    2026 InnerBloom. All rights reserved.
                </div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms Of Use</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
