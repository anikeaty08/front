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
      

<nav className="fixed sm:px-6 z-50 pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0">
<div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3 flex items-center justify-between shadow-lg transition-all hover:bg-white/20">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 bg-[#ACBC37] rounded-full flex items-center justify-center text-white shadow-sm border border-[#ACBC37]/50">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>

<span className="text-base font-semibold tracking-tight text-white drop-shadow-md">PADEL COMMUNITY</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all" href="#">Events</a>
<a className="text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all" href="#">Tournaments</a>
<a className="text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all" href="#">About Us</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 bg-white text-stone-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    Join Community
                </button>
<button className="md:hidden p-2 text-white bg-white/20 rounded-full backdrop-blur-md">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<header className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Padel Community" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99c66135-c24c-4abe-a0de-c87e01eec29f_3840w.png"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ACBC37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ACBC37]"></span>
</span>
<span className="uppercase text-xs font-semibold tracking-wide">Join 500+ Players</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.05] mb-8">
                More than just <br/>
<span className="text-white/60">a game.</span>
</h1>
<p className="text-lg sm:text-xl text-stone-200 font-light max-w-xl mx-auto leading-relaxed mb-10">
                A community built on good vibes and great padel. Join social mixers, weekend tournaments, and meet your new playing partners.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
<button className="w-full sm:w-auto bg-[#ACBC37] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#9aa931] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group border border-[#ACBC37]">
                    Join the Community
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2">
<svg className="lucide lucide-calendar w-4 h-4 text-white/80" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    See Upcoming Events
                </button>
</div>
</div>
</header>

<section className="sm:px-6 lg:px-8 -mt-20 bg-white z-20 pt-24 pr-4 pb-24 pl-4 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer">
<img alt="Social Padel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9a4c89b-94bb-4f6a-a845-2421d4781e1f_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white mb-4 border border-white/30">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Meet New People</h3>
<p className="text-stone-300 font-medium leading-snug">
                            Connect with players of your level. Post-match drinks are part of the game.
                        </p>
</div>
</div>

<div className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer">
<img alt="Tournaments" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/401f2931-8910-46bf-b8f0-07b7fc87f401_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white mb-4 border border-white/30">
<svg className="lucide lucide-trophy w-5 h-5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Events &amp; Tournaments</h3>
<p className="text-stone-300 font-medium leading-snug">
                            From casual mixers to competitive weekends. There's an event for everyone.
                        </p>
</div>
</div>

<div className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer">
<img alt="Coaching" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93b96102-30b6-4c45-8128-89a440d9b522_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white mb-4 border border-white/30">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Love the Game</h3>
<p className="text-stone-300 font-medium leading-snug">
                            Whether you are a beginner or a pro, we share the same passion on the court.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8 bg-stone-50">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div className="">
<span className="text-sm font-semibold text-[#0379B9] uppercase tracking-wider mb-2 block">Calendar</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">Upcoming Events</h2>
<p className="text-stone-500 mt-2">Join one of our scheduled gatherings.</p>
</div>
<button className="text-stone-600 font-medium hover:text-[#0379B9] flex items-center gap-2 group transition-colors">
                    View Full Calendar 
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-stone-100 hover:shadow-md transition-all">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Tournament" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/febf50bc-ea7a-4ef8-9796-77f7b4e7f4c0_800w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-[#ACBC37] uppercase tracking-wide border border-stone-200">
                            Open
                        </div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-[#0379B9] bg-blue-50 px-2 py-1 rounded-md">Social Mixer</span>
<span className="text-xs font-medium text-stone-500">Nov 12</span>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">Weekend Mixer</h3>
<p className="text-stone-500 text-sm mb-4">Meet new partners. Drinks included.</p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium text-sm hover:bg-stone-50 transition-colors">Register Now</button>
</div>
</div>

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-stone-100 hover:shadow-md transition-all">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Tournament" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91ab3e56-a6b7-4fb7-9560-26d05ee15329_800w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-[#ACBC37] uppercase tracking-wide border border-stone-200">
                            Few Spots Left
                        </div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-[#0379B9] bg-blue-50 px-2 py-1 rounded-md">Tournament</span>
<span className="text-xs font-medium text-stone-500">Nov 18</span>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">Autumn Cup</h3>
<p className="text-stone-500 text-sm mb-4">Level: Intermediate. Prizes to win.</p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium text-sm hover:bg-stone-50 transition-colors">Details</button>
</div>
</div>

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-stone-100 hover:shadow-md transition-all opacity-90">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Tournament" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-stone-100/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-stone-500 uppercase tracking-wide border border-stone-200">
                            Upcoming
                        </div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-[#0379B9] bg-blue-50 px-2 py-1 rounded-md">Community</span>
<span className="text-xs font-medium text-stone-500">Dec 01</span>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">End of Year Party</h3>
<p className="text-stone-500 text-sm mb-4">Open to all members and friends.</p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-400 font-medium text-sm cursor-not-allowed">Coming Soon</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="relative bg-[#1a1a19] rounded-[3rem] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-stone-800 shadow-2xl">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#ACBC37]/10 text-[#ACBC37] text-xs font-bold uppercase tracking-widest mb-6 border border-[#ACBC37]/20">
                        Coming Soon
                    </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-4">
                        The Padel League is Coming
                    </h2>
<p className="text-xl text-stone-400 max-w-lg mb-8 leading-relaxed">
                        A fair, seasonal league where your games actually matter. Track your progress, climb the ranks.
                    </p>
<button className="bg-[#ACBC37] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#9aa931] transition-colors inline-flex items-center gap-2">
                        Get Early Access
                        <svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
<div className="relative flex-1 w-full max-w-md">

<div className="bg-stone-800/50 backdrop-blur-xl border border-stone-700 rounded-3xl p-8 relative overflow-hidden">
<div className="flex items-center justify-between mb-8">
<span className="text-stone-300 font-medium">Season 1</span>
<svg className="lucide lucide-lock w-5 h-5 text-stone-500" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="space-y-6 mb-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-[#ACBC37]">
<svg className="lucide lucide-trophy w-5 h-5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<span className="text-white font-medium">Live Rankings</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-[#ACBC37]">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-white font-medium">Divisions by Level</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-[#ACBC37]">
<svg className="lucide lucide-crown w-5 h-5" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<span className="text-white font-medium">Seasonal Finals</span>
</div>
</div>

<div className="w-full bg-stone-700 h-2 rounded-full overflow-hidden">
<div className="bg-[#ACBC37] h-full w-2/3 rounded-full animate-pulse"></div>
</div>
<p className="text-right text-xs text-stone-400 mt-2 font-mono">Loading...</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">How it works</h2>
<p className="text-lg text-stone-500">Simple steps to get on the court.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-stone-100 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-stone-50 rounded-full border border-stone-200 flex items-center justify-center text-stone-900 mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
<svg className="lucide lucide-user-plus w-8 h-8" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">1. Join Community</h3>
<p className="text-sm text-stone-500 max-w-[200px]">Create your profile. It's free and takes 30 seconds.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-stone-50 rounded-full border border-stone-200 flex items-center justify-center text-stone-900 mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
<svg className="lucide lucide-calendar w-8 h-8" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">2. Find Events</h3>
<p className="text-sm text-stone-500 max-w-[200px]">Browse social games, tournaments, and mixers.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-stone-50 rounded-full border border-stone-200 flex items-center justify-center text-stone-900 mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
<svg className="lucide lucide-play-circle w-8 h-8" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">3. Play Padel</h3>
<p className="text-sm text-stone-500 max-w-[200px]">Show up, play, and have fun. No hassle.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-[#ACBC37]/20 rounded-full border border-[#ACBC37] flex items-center justify-center text-[#0379B9] mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
<svg className="lucide lucide-smile w-8 h-8" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">4. Connect</h3>
<p className="text-sm text-stone-500 max-w-[200px]">Meet new friends and grow your padel network.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 border border-stone-100 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 relative order-2 lg:order-1">
<div className="absolute -inset-4 bg-[#ACBC37] rounded-full opacity-20 blur-3xl"></div>
<img alt="Community Group" className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3] rotate-2 border-4 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1c1c2c8-363a-4273-b45e-96876b5910c6_1600w.jpg"/>
</div>
<div className="flex-1 order-1 lg:order-2">
<div className="w-12 h-12 bg-[#ACBC37] rounded-full flex items-center justify-center text-white mb-8">
<svg className="lucide lucide-quote w-6 h-6 fill-current" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-8 leading-tight">
                        "I joined for the games, but stayed for the people. The best way to meet players in the city."
                    </h2>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-lg font-bold text-stone-900">Sarah &amp; Tom</span>
<span className="text-stone-500">Community Members</span>
</div>
</div>
<div className="mt-8 flex gap-3">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                            Community
                        </span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                            Events
                        </span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                            Fun
                        </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight mb-6">Ready to join us?</h2>
<p className="text-xl text-stone-500 mb-10 leading-relaxed">
                Be part of a growing community of padel lovers.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-[#0379B9] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#026296] hover:scale-105 transition-all shadow-lg">
                    Join Community
                </button>
<div className="flex gap-2 justify-center">
<button className="bg-stone-100 text-stone-900 p-4 rounded-full hover:bg-stone-200 transition-colors">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</button>
<button className="bg-stone-100 text-stone-900 p-4 rounded-full hover:bg-stone-200 transition-colors">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#ACBC37] rounded-full flex items-center justify-center text-white border border-[#ACBC37]">
<div className="w-2 h-2 bg-stone-900 rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900">PADEL COMMUNITY</span>
</div>
<div className="text-stone-400 text-sm">
                © 2024 Padel Community. See you on court.
            </div>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-[#0379B9] transition-colors text-sm font-medium" href="#">Terms</a>
<a className="text-stone-400 hover:text-[#0379B9] transition-colors text-sm font-medium" href="#">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
