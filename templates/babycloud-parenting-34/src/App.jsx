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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass border-b border-rose-100/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-bold tracking-tight text-slate-800 flex items-center gap-2 font-heading" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-200">
<svg className="lucide lucide-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19c3.866 0 7-3.134 7-7 0-3.866-3.134-7-7-7-1.74 0-3.327.632-4.57 1.68C11.668 4.609 9.388 3 6.8 3 3.044 3 0 6.044 0 9.8c0 3.125 2.126 5.753 5 6.6"></path></svg>
</div>
                babycloud.
            </a>
<div className="hidden md:flex items-center gap-8 text-base font-semibold text-slate-500">
<a className="hover:text-rose-500 transition-colors" href="#features">Program</a>
<a className="hover:text-rose-500 transition-colors" href="#testimonials">Stories</a>
<a className="hover:text-rose-500 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-base font-bold text-slate-700 hover:text-rose-500 transition-colors" href="#">Log in</a>
<a className="text-sm font-bold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5" href="#">Get App</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-24 pt-32 pb-16 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
</div>
<div className="z-10 text-center max-w-5xl mx-auto px-6 relative">
<div className="fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-100 text-sm font-bold text-rose-500 mb-8 shadow-sm">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
</span>
                New: AI Development Tracker
            </div>
<h1 className="fade-in delay-100 text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1] font-heading">
                Smart parenting for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-orange-400">super kids.</span>
</h1>
<p className="fade-in delay-200 text-xl leading-relaxed text-slate-500 max-w-2xl mx-auto mb-10 font-medium">
                The all-in-one development companion. Track milestones, discover personalized activities, and connect with a community of modern parents.
            </p>
<div className="fade-in delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95 text-base font-bold">
<svg className="lucide lucide-apple" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 0 2 .5 2 2a2 2 0 0 1-2 2c-1 0-2-.5-2-2a2 2 0 0 1 2-2Z"></path></svg>
                    App Store
                </button>
<button className="flex items-center gap-3 bg-white text-slate-700 px-8 py-4 rounded-full hover:bg-rose-50 hover:text-rose-600 transition-all active:scale-95 text-base font-bold shadow-md shadow-slate-100 border border-slate-100">
<svg className="lucide lucide-play" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    Google Play
                </button>
</div>
</div>
</section>

<section className="py-12 max-w-7xl mx-auto px-6" id="features">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-heading">Everything for your little one</h2>
<p className="text-lg text-slate-500 font-medium">Tools designed to make every day easier and more joyful.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-10 gap-6 auto-rows-min">

<div className="md:col-span-3 flex flex-col gap-6">

<div className="bg-gradient-to-br from-rose-100 via-rose-200 to-orange-100 p-8 rounded-[2.5rem] relative overflow-hidden group min-h-[320px] flex flex-col justify-center shadow-sm">
<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl transition-all duration-500 group-hover:scale-125"></div>
<h3 className="text-3xl font-bold text-slate-800 leading-tight mb-4 font-heading relative z-10">
                        Nurturing <br/>
<span className="inline-block animate-bounce delay-100">🌱</span> smart <br/>
<span className="inline-block animate-bounce delay-300">🧠</span> habits <br/>
                        early on.
                    </h3>
<p className="text-slate-600 font-semibold relative z-10">Personalized growth plans.</p>
</div>

<div className="grid grid-cols-3 gap-3">
<div className="bg-white p-4 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 text-center hover:shadow-md transition-shadow">
<div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
<svg className="lucide lucide-users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-800">25k+</div>
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Parents</div>
</div>
</div>
<div className="bg-white p-4 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 text-center hover:shadow-md transition-shadow">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<svg className="lucide lucide-baby" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.8 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.8A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-800">10k+</div>
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Babies</div>
</div>
</div>
<div className="bg-white p-4 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 text-center hover:shadow-md transition-shadow">
<div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
<svg className="lucide lucide-heart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-800">4.9</div>
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Rating</div>
</div>
</div>
</div>

<div className="relative bg-[#FFEDD5] rounded-[2.5rem] overflow-hidden aspect-[4/3] group">
<img alt="Cute Child" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544126566-475267152014?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
<p className="text-sm font-bold text-slate-800">Daily Tip 💡</p>
<p className="text-xs font-semibold text-slate-500 mt-1">Reading aloud builds vocabulary.</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-6">

<div className="bg-[#FB7185] rounded-[2.5rem] p-8 flex items-center justify-center relative overflow-hidden h-40 shadow-rose-200 shadow-lg">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<h2 className="text-4xl font-bold text-white font-heading flex items-center gap-2 relative z-10">
                        babycloud.
                    </h2>
</div>

<div className="bg-slate-100 rounded-[3rem] p-8 flex-1 relative overflow-hidden flex items-center justify-center min-h-[500px]">
<div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-200"></div>

<div className="relative w-[280px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-slate-900 overflow-hidden z-10 transform transition-transform hover:-translate-y-2 duration-500">

<div className="absolute top-0 inset-x-0 h-6 bg-slate-900 z-20 rounded-b-xl w-32 mx-auto"></div>

<div className="h-[550px] bg-slate-50 flex flex-col">

<div className="pt-10 px-5 pb-4 bg-white flex justify-between items-center border-b border-slate-100">
<div>
<div className="text-xs font-bold text-rose-500 uppercase tracking-wider">Good Morning</div>
<div className="text-lg font-bold text-slate-800 font-heading">Baby Leo 👶</div>
</div>
<div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
<svg className="lucide lucide-bell text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</div>
</div>

<div className="p-5 flex flex-col gap-4 overflow-hidden">

<div className="bg-rose-500 rounded-2xl p-4 text-white shadow-lg shadow-rose-200">
<div className="flex justify-between items-start mb-2">
<div className="bg-white/20 px-2 py-1 rounded-lg text-[10px] font-bold backdrop-blur-sm">Milestone</div>
<svg className="lucide lucide-star text-yellow-300" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h4 className="font-bold text-lg leading-tight mb-1">First Steps!</h4>
<p className="text-xs text-rose-100 opacity-90">Expected window: Dec 12 - Jan 05</p>
</div>

<div className="space-y-3">
<div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<svg className="lucide lucide-utensils" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-800">Feeding</div>
<div className="text-xs text-slate-400 font-semibold">180ml Formula</div>
</div>
<span className="ml-auto text-xs font-bold text-slate-300">2h</span>
</div>
<div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
<svg className="lucide lucide-moon" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-800">Nap Time</div>
<div className="text-xs text-slate-400 font-semibold">45m duration</div>
</div>
<span className="ml-auto text-xs font-bold text-slate-300">4h</span>
</div>
<div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50 opacity-60">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
<svg className="lucide lucide-smile" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-800">Play Time</div>
<div className="text-xs text-slate-400 font-semibold">Sensory blocks</div>
</div>
<span className="ml-auto text-xs font-bold text-slate-300">6h</span>
</div>
</div>
</div>

<div className="mt-auto bg-white border-t border-slate-100 p-4 flex justify-around text-slate-300">
<svg className="lucide lucide-home text-rose-500" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
<svg className="lucide lucide-bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
<svg className="lucide lucide-user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 flex flex-col gap-6">

<div className="bg-white rounded-full p-2 border border-slate-100 shadow-sm flex items-center justify-between">
<span className="px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-xs font-bold">All kids</span>
<span className="px-4 py-2 text-slate-400 text-xs font-bold">One child</span>
<span className="px-4 py-2 text-slate-400 text-xs font-bold">Two kids</span>
</div>

<div className="relative bg-slate-200 rounded-[2.5rem] overflow-hidden flex-grow min-h-[300px] group">
<img alt="Happy Father and Daughter" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542038784456-1ea0e93ca370?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 text-white">
<div className="flex items-center gap-2 mb-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-white bg-slate-300"></div>
<div className="w-6 h-6 rounded-full border border-white bg-slate-400"></div>
<div className="w-6 h-6 rounded-full border border-white bg-slate-500"></div>
</div>
<span className="text-xs font-bold">+12 friends</span>
</div>
<p className="font-heading font-bold text-lg">Community Events</p>
</div>
</div>

<div className="bg-slate-900 rounded-[2.5rem] p-6 text-white relative overflow-hidden">
<div className="flex justify-between items-center mb-6">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<svg className="lucide lucide-heart" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<svg className="lucide lucide-share-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/50">
<svg className="lucide lucide-bar-chart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
</div>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 w-2/3 rounded-full"></div>
</div>
<p className="text-center mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Weekly Goal</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-rose-50">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-sm font-bold text-rose-400 mb-8 uppercase tracking-widest">Trusted by playful parents at</p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0">
<div className="text-2xl font-black text-slate-800 tracking-tighter flex items-center gap-1"><span className="w-4 h-4 bg-orange-400 rounded-full"></span>Hoppy.</div>
<div className="text-2xl font-black text-slate-800 tracking-tighter italic text-rose-500">Moma.</div>
<div className="text-2xl font-black text-slate-800 tracking-tight text-purple-600">Kiddo</div>
<div className="text-2xl font-black text-slate-800 tracking-widest uppercase text-base flex items-center gap-1"><svg className="lucide lucide-toy-brick" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="1" width="18" x="3" y="8"></rect><path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"></path><path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"></path></svg> Blocks</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFF0F5]" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-center text-3xl md:text-4xl font-bold text-slate-800 mb-16 font-heading">Parents love <span className="text-rose-500">BabyCloud</span></h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col justify-between h-full relative group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center text-white text-2xl font-serif">"</div>
<p className="text-slate-600 mb-6 leading-relaxed font-semibold">The personalization is amazing. It suggests activities exactly when my son needs them. It feels like magic!</p>
<div className="flex items-center gap-4">
<img alt="Sarah" className="w-12 h-12 rounded-full object-cover border-2 border-rose-100" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<div className="text-sm font-bold text-slate-900">Sarah J.</div>
<div className="text-xs text-rose-500 font-bold">Mom of 2</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col justify-between h-full relative group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white text-2xl font-serif">"</div>
<p className="text-slate-600 mb-6 leading-relaxed font-semibold">I used to track everything in a messy notebook. BabyCloud made it fun and shareable with my wife.</p>
<div className="flex items-center gap-4">
<img alt="Mark" className="w-12 h-12 rounded-full object-cover border-2 border-purple-100" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<div className="text-sm font-bold text-slate-900">Mark D.</div>
<div className="text-xs text-purple-500 font-bold">New Dad</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col justify-between h-full relative group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl font-serif">"</div>
<p className="text-slate-600 mb-6 leading-relaxed font-semibold">The community features are so supportive. No judgment, just helpful advice from other parents.</p>
<div className="flex items-center gap-4">
<img alt="Elena" className="w-12 h-12 rounded-full object-cover border-2 border-orange-100" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<div className="text-sm font-bold text-slate-900">Elena R.</div>
<div className="text-xs text-orange-500 font-bold">Mom of 1</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6 text-center" id="pricing">
<div className="bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden text-white shadow-2xl shadow-slate-400/50">

<div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full blur-[80px] opacity-40 -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-40 translate-y-1/2 -translate-x-1/2"></div>
<h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading relative z-10">Start your journey.</h2>
<p className="text-lg text-slate-300 mb-10 relative z-10">Join thousands of happy families today.</p>
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8 inline-block w-full max-w-md relative z-10">
<div className="text-4xl font-bold mb-2">$4.99<span className="text-base font-normal opacity-70">/mo</span></div>
<p className="text-sm text-slate-300">Unlock all premium features including AI tracking.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<button className="bg-rose-500 text-white py-4 px-8 rounded-full font-bold hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-500/50">Start Free Trial</button>
<button className="bg-transparent border-2 border-white/20 text-white py-4 px-8 rounded-full font-bold hover:bg-white/10 transition-colors">View Features</button>
</div>
</div>
</section>

<footer className="bg-white border-t border-rose-100 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-2 mb-4 font-heading" href="#">
<div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-cloud" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19c3.866 0 7-3.134 7-7 0-3.866-3.134-7-7-7-1.74 0-3.327.632-4.57 1.68C11.668 4.609 9.388 3 6.8 3 3.044 3 0 6.044 0 9.8c0 3.125 2.126 5.753 5 6.6"></path></svg>
</div>
                        babycloud.
                    </a>
<p className="text-sm text-slate-400 font-semibold">Made with 💖 for the little ones.</p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm font-heading">Product</h4>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li><a className="hover:text-rose-500" href="#">Features</a></li>
<li><a className="hover:text-rose-500" href="#">Pricing</a></li>
<li><a className="hover:text-rose-500" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm font-heading">Company</h4>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li><a className="hover:text-rose-500" href="#">About</a></li>
<li><a className="hover:text-rose-500" href="#">Blog</a></li>
<li><a className="hover:text-rose-500" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm font-heading">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li><a className="hover:text-rose-500" href="#">Privacy Policy</a></li>
<li><a className="hover:text-rose-500" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-rose-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-bold">
<p>© 2023 BabyCloud Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-rose-500" href="#"><svg className="lucide lucide-twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-rose-500" href="#"><svg className="lucide lucide-instagram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
