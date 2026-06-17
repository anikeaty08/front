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
        
        // Simple script to generate snowflakes
        function createSnowflakes() {
            const count = 30;
            const container = document.body;
            for (let i = 0; i < count; i++) {
                const flake = document.createElement('div');
                flake.className = 'snowflake';
                flake.innerHTML = '❄';
                flake.style.left = Math.random() * 100 + 'vw';
                flake.style.animationDuration = Math.random() * 3 + 5 + 's';
                flake.style.opacity = Math.random() * 0.7 + 0.3; // Higher opacity to see against bg
                flake.style.fontSize = Math.random() * 10 + 10 + 'px';
                flake.style.animationDelay = Math.random() * 5 + 's';
                container.appendChild(flake);
            }
        }
        createSnowflakes();
    
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
      

<div className="fixed inset-0 z-[-1] w-full h-full overflow-hidden pointer-events-none">


<img alt="Cozy Christmas Background" className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-105 brightness-110 saturate-125" src="https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-orange-100/30 via-transparent to-blue-50/20 mix-blend-soft-light"></div>

<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-red-200/10 rounded-full blur-3xl mix-blend-screen"></div>

<div className="absolute inset-0 bg-white/60 backdrop-brightness-110"></div>
</div>

<div className="h-2 w-full candy-stripe sticky top-0 z-50 shadow-sm opacity-90"></div>
<div className="flex min-h-screen max-w-[1600px] mx-auto relative z-10">

<aside className="w-[280px] hidden lg:flex flex-col border-r border-white/40 h-[calc(100vh-8px)] sticky top-2 px-4 py-5 overflow-y-auto no-scrollbar bg-white/60 backdrop-blur-md shadow-[4px_0_24px_-4px_rgba(0,0,0,0.02)]">

<div className="flex items-center justify-between mb-8 px-2">
<div className="flex items-center gap-1 relative group">
<i className="w-5 h-5 text-red-600 animate-spin-slow absolute -left-6 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="snowflake"></i>
<span className="text-3xl font-serif font-bold tracking-tight text-slate-900 drop-shadow-sm">contra</span>
<div className="absolute -top-3 -right-3 transform rotate-12">
<i className="w-5 h-5 text-red-500" data-lucide="party-popper"></i>
</div>
</div>
<button className="text-slate-500 hover:text-red-600 transition-colors">
<i className="w-5 h-5" data-lucide="panel-left"></i>
</button>
</div>

<div className="mb-6 px-2">
<div className="flex items-center justify-between group cursor-pointer p-2 rounded-xl bg-white/50 hover:bg-white/80 border border-white/40 hover:border-white shadow-sm transition-all backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-red-100" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
<div className="bg-green-600 w-3 h-3 rounded-full border-2 border-white"></div>
</div>

<div className="absolute -top-4 -left-3 text-2xl filter drop-shadow-sm">🎅</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 leading-tight">Santa's Workshop</span>
<span className="text-xs text-slate-500 mt-0.5">Daniel Danc</span>
</div>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
</div>

<div className="px-2 mb-6">
<div className="flex items-center gap-3 bg-red-50/80 backdrop-blur-sm p-2 rounded-lg border border-red-100 shadow-sm">
<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle cx="16" cy="16" fill="none" r="14" stroke="#FECACA" strokeWidth="2"></circle>
<circle cx="16" cy="16" fill="none" r="14" stroke="#DC2626" stroke-dasharray="88" stroke-dashoffset="20" strokeWidth="2"></circle>
</svg>
<span className="absolute text-[10px] font-bold text-red-700">83</span>
</div>
<span className="text-sm text-red-900 font-semibold">Holiday Spirit</span>
</div>
</div>

<nav className="space-y-1 flex-1">
<a className="flex items-center gap-3 px-2 py-2.5 text-red-700 bg-red-50/90 shadow-sm border border-red-100 rounded-lg font-semibold backdrop-blur-sm" href="#">
<i className="w-5 h-5 text-red-600" data-lucide="home"></i>
<span className="text-base">Home</span>
</a>
<a className="flex items-center gap-3 px-2 py-2.5 text-slate-600 hover:bg-green-50/80 rounded-lg hover:text-green-800 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-green-600" data-lucide="bell"></i>
<span className="text-base">Notifications</span>
</a>
<a className="flex items-center gap-3 px-2 py-2.5 text-slate-600 hover:bg-green-50/80 rounded-lg hover:text-green-800 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-green-600" data-lucide="message-square"></i>
<span className="text-base">Messages</span>
</a>
<div className="group">
<a className="flex items-center justify-between px-2 py-2.5 text-slate-600 hover:bg-green-50/80 rounded-lg hover:text-green-800 transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 group-hover:text-green-600" data-lucide="wallet"></i>
<span className="text-base">Payments</span>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</a>
</div>
<a className="flex items-center gap-3 px-2 py-2.5 text-slate-600 hover:bg-green-50/80 rounded-lg hover:text-green-800 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-green-600" data-lucide="briefcase"></i>
<span className="text-base">Jobs</span>
</a>
<a className="flex items-center gap-3 px-2 py-2.5 text-slate-600 hover:bg-green-50/80 rounded-lg hover:text-green-800 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-green-600" data-lucide="compass"></i>
<span className="text-base">Discover</span>
</a>
<a className="flex items-center gap-3 px-2 py-2.5 text-slate-600 hover:bg-green-50/80 rounded-lg hover:text-green-800 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-green-600" data-lucide="user"></i>
<span className="text-base">Profile</span>
</a>
</nav>
<div className="px-2 py-6">
<button className="w-full bg-[#165B33]/90 hover:bg-[#114628] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-900/20 transition-all border border-green-800 backdrop-blur-sm">
<i className="w-5 h-5" data-lucide="plus"></i>
<span className="text-base">Create Post</span>
</button>
</div>

<div className="mt-auto px-2">
<div className="bg-gradient-to-br from-red-50/90 to-white/90 backdrop-blur-sm p-4 rounded-xl border border-red-100 flex items-center gap-4 shadow-sm relative overflow-hidden">
<div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center relative z-10">
<i className="w-5 h-5 text-red-600" data-lucide="gift"></i>
</div>
<div className="relative z-10">
<div className="text-[10px] font-semibold text-red-600 tracking-wide uppercase">Holiday Gift</div>
<div className="text-sm font-semibold text-slate-900">Invite friends, get gifts.</div>
</div>

<i className="absolute -right-2 -bottom-2 w-12 h-12 text-red-100 rotate-12" data-lucide="snowflake"></i>
</div>
</div>
</aside>

<main className="flex-1 px-4 sm:px-8 py-8 min-h-screen overflow-y-auto relative">

<div className="max-w-2xl mx-auto mb-8 text-center hidden md:block">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/80 backdrop-blur-sm border border-red-100 text-red-800 text-xs font-semibold mb-2 shadow-sm">
<i className="w-3 h-3" data-lucide="bell"></i> 12 Days of Creators
                </span>
<h2 className="text-2xl font-bold text-slate-900 tracking-tight drop-shadow-sm">Merry Christmas, Daniel! 🎄</h2>
</div>
<div className="max-w-2xl mx-auto space-y-8">

<div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-[0_4px_20px_-4px_rgba(220,38,38,0.1)] border border-red-100/50">
<div className="flex gap-4">
<div className="relative">
<img alt="User" className="w-10 h-10 rounded-full object-cover ring-2 ring-red-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</div>
<div className="flex-1">
<textarea className="w-full text-lg text-slate-700 placeholder-slate-400 border-none focus:ring-0 resize-none h-12 py-2 bg-transparent outline-none" placeholder="Share your holiday projects, Daniel..."></textarea>
</div>
</div>
<div className="flex items-center justify-between mt-4 pl-14">
<div className="flex gap-4 text-slate-400">
<button className="hover:text-green-600 transition-colors"><i className="w-5 h-5" data-lucide="image"></i></button>
<button className="hover:text-green-600 transition-colors"><i className="w-5 h-5" data-lucide="snowflake"></i></button>
<button className="hover:text-green-600 transition-colors"><i className="w-5 h-5" data-lucide="smile"></i></button>
<button className="flex items-center gap-1 hover:text-green-600 transition-colors">
<i className="w-5 h-5" data-lucide="tag"></i>
<span className="text-sm font-semibold">Add wish</span>
</button>
</div>
<button className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-red-700 transition-colors shadow-md shadow-red-200">Post</button>
</div>
</div>

<div className="relative">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold text-slate-900 flex items-center gap-2 drop-shadow-sm">
<i className="w-4 h-4 text-green-700" data-lucide="users"></i>
                            Elves to follow
                        </h3>
<button className="text-slate-500 hover:text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">

<div className="min-w-[280px] bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/60 shadow-sm relative group hover:border-green-200 transition-colors">
<div className="absolute -top-1 -right-1">
<i className="w-6 h-6 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
</div>
<div className="text-xs text-green-700 mb-3 font-semibold bg-green-50 inline-block px-2 py-0.5 rounded-full border border-green-100">Top Helper</div>
<div className="flex items-center gap-3 mb-3">
<img className="w-12 h-12 rounded-full ring-2 ring-green-100" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<div className="flex items-center gap-1.5">
<span className="font-bold text-slate-900 text-base">Ashley Best</span>
<span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none">ELF</span>
</div>
<div className="text-xs text-slate-500 truncate max-w-[140px] mt-0.5">Toy Design / Animation</div>
</div>
</div>
<button className="w-full bg-[#165B33] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#114628]">Follow</button>
</div>

<div className="min-w-[280px] bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/60 shadow-sm relative transition-all">
<div className="text-xs text-slate-500 mb-3 flex items-center gap-1">
<div className="flex -space-x-1">
<img className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=30&amp;h=30&amp;fit=crop&amp;crop=faces"/>
<img className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=30&amp;h=30&amp;fit=crop&amp;crop=faces"/>
</div>
                                Recommended by Santa...
                            </div>
<div className="flex items-center gap-3 mb-3">
<img className="w-12 h-12 rounded-full ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<div className="flex items-center gap-1.5">
<span className="font-bold text-slate-900 text-base">Arron Watson</span>
<span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-1.5 py-0.5 rounded leading-none">PRO</span>
</div>
<div className="text-xs text-slate-500 truncate max-w-[140px] mt-0.5">Sleigh UX &amp; Design</div>
</div>
</div>
<button className="w-full bg-white border border-slate-300 text-slate-700 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50">Follow</button>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-slate-100 cursor-pointer hover:bg-slate-50 z-10 text-red-600">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>
</div>

<div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200/80 relative overflow-hidden">

<div className="absolute -top-6 -right-6 text-green-100 opacity-30 pointer-events-none">
<i className="w-32 h-32" data-lucide="tree-pine"></i>
</div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="flex gap-3">
<img className="w-12 h-12 rounded-full ring-2 ring-red-100" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<span className="font-bold text-slate-900 text-base">Nirmit Rana</span>
<span className="bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none">PRO</span>
<span className="text-slate-400 text-sm">• 4h</span>
</div>
<div className="flex gap-2 mt-2">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-50 text-red-700 text-xs font-medium border border-red-100">
<i className="w-3 h-3 text-red-400" data-lucide="gift"></i> Holiday
                                    </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-100">
<i className="w-3 h-3 text-green-400" data-lucide="hash"></i> winter2024
                                    </span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-semibold text-slate-500 hover:text-red-600 transition-colors">Follow</button>
<button className="text-slate-400 hover:text-slate-600"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>
</div>
<p className="text-slate-800 text-base leading-relaxed mb-6 relative z-10 font-medium">
                        I am finalizing the winter campaign for a travel company website. I want it to feel magical ✨. Which snow effect do you prefer? Let me know in the comments below! 👇
                    </p>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="aspect-[4/3] bg-black rounded-xl overflow-hidden relative group cursor-pointer border-2 border-transparent hover:border-red-400 transition-all shadow-md">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-black/80 to-transparent">
<h3 className="text-white font-bold text-xl mb-2 tracking-tight drop-shadow-md">Winter Wonderland<br/>Campaign A</h3>
</div>
</div>
<div className="aspect-[4/3] bg-black rounded-xl overflow-hidden relative group cursor-pointer border-2 border-transparent hover:border-green-400 transition-all shadow-md">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r from-black/60 to-transparent">
<h3 className="text-white font-bold text-xl mb-2 text-left w-full tracking-tight drop-shadow-md">Cozy Cabin Vibes<br/>Campaign B</h3>
</div>
</div>
</div>
<div className="flex items-center gap-6 mt-6 border-t border-slate-100 pt-4">
<button className="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors">
<i className="w-5 h-5" data-lucide="heart"></i>
<span className="text-sm font-medium">24 Likes</span>
</button>
<button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="message-circle"></i>
<span className="text-sm font-medium">8 Comments</span>
</button>
</div>
</div>
</div>
</main>

<aside className="w-[340px] hidden xl:flex flex-col border-l border-white/40 h-[calc(100vh-8px)] sticky top-2 px-6 py-8 overflow-y-auto no-scrollbar bg-white/60 backdrop-blur-md shadow-[-4px_0_24px_-4px_rgba(0,0,0,0.02)]">

<div className="bg-gradient-to-b from-[#165B33]/95 to-[#0f4024]/95 rounded-2xl border border-green-800 p-5 mb-6 shadow-md relative overflow-hidden group">

<div className="absolute top-0 left-0 w-full h-2 bg-yellow-400/30"></div>
<div className="absolute -right-4 -bottom-4 text-white/10 group-hover:text-white/20 transition-colors">
<i className="w-24 h-24" data-lucide="tree-pine"></i>
</div>
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-lg text-xl border border-white/20 shadow-sm">🎄</div>
<div>
<span className="text-sm font-bold text-white block">Advent Calendar</span>
<span className="text-xs text-green-200 font-medium">Open today's door</span>
</div>
</div>
<span className="text-sm font-bold text-white bg-white/20 px-2 py-1 rounded-md border border-white/10">12/25</span>
</div>
</div>

<div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-5 mb-6 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-4">
<div className="relative w-12 h-12 flex items-center justify-center">

<div className="absolute -top-3 w-1 h-3 bg-gray-300"></div>
<svg className="w-full h-full transform -rotate-90">
<circle cx="24" cy="24" fill="none" r="21" stroke="#F1F5F9" strokeWidth="3"></circle>
<circle cx="24" cy="24" fill="none" r="21" stroke="#165B33" stroke-dasharray="132" stroke-dashoffset="30" strokeWidth="3"></circle>
</svg>
<span className="absolute text-base font-bold text-green-700">83</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-slate-900">Nice List Score</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="flex gap-3 mt-1.5">
<span className="text-xs text-slate-500 flex items-center gap-1 font-medium"><i className="w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="star"></i> 51</span>
<span className="text-xs text-slate-500 flex items-center gap-1 font-medium"><i className="w-3 h-3 text-red-500 fill-red-500" data-lucide="heart"></i> 670</span>
</div>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors">
<i className="w-4 h-4" data-lucide="user"></i> Your posts
                    </button>
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-green-600 transition-colors">
<i className="w-4 h-4" data-lucide="bookmark"></i> Wishlist
                    </button>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h4 className="text-xs font-semibold text-slate-500 tracking-wider uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Your Interests</h4>
<button className="w-6 h-6 flex items-center justify-center bg-white/50 backdrop-blur-sm border border-slate-200 rounded-full text-slate-500 hover:bg-green-100 hover:text-green-700 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white/70 hover:bg-red-50 hover:text-red-700 rounded-full text-sm text-slate-700 font-semibold cursor-pointer flex items-center gap-1.5 transition-colors border border-transparent hover:border-red-100 backdrop-blur-sm">
<img className="w-3 h-3" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"/> Figma
                    </span>
<span className="px-3 py-1.5 bg-white/70 hover:bg-green-50 hover:text-green-700 rounded-full text-sm text-slate-700 font-semibold cursor-pointer flex items-center gap-1.5 transition-colors border border-transparent hover:border-green-100 backdrop-blur-sm">
<i className="w-3 h-3 text-slate-400" data-lucide="pen-tool"></i> Web Design
                    </span>
<span className="px-3 py-1.5 bg-white/70 hover:bg-slate-200 rounded-full text-sm text-slate-700 font-semibold cursor-pointer flex items-center gap-1.5 transition-colors backdrop-blur-sm">
<i className="w-3 h-3 text-slate-400" data-lucide="snowflake"></i> Winter UI
                    </span>
<button className="text-sm font-semibold text-slate-500 hover:text-red-600 ml-1 drop-shadow-sm">View all</button>
</div>
</div>
<div className="border-t border-slate-300/50 my-6"></div>

<div className="mb-8">
<div className="flex items-center gap-2 mb-6">
<h4 className="text-xs font-semibold text-red-600 tracking-wider uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Trending Now</h4>
<i className="w-3 h-3 text-red-600" data-lucide="trending-up"></i>
</div>
<div className="space-y-6">
<div className="group cursor-pointer">
<div className="text-base font-bold text-slate-900 mb-1 group-hover:text-red-600 transition-colors drop-shadow-sm"># holidaychallenge2024</div>
<p className="text-sm text-slate-600 leading-snug font-medium">Design the ultimate gift guide app. $20k in prizes.</p>
</div>
<div className="group cursor-pointer">
<div className="text-base font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors drop-shadow-sm"># secretsanta</div>
<p className="text-sm text-slate-600 leading-snug font-medium">Join the community secret santa event. Sign up by Dec 20.</p>
</div>
<div className="group cursor-pointer">
<div className="text-base font-bold text-slate-900 mb-1 group-hover:text-red-600 transition-colors drop-shadow-sm"># 2025goals</div>
<p className="text-sm text-slate-600 leading-snug font-medium">Share your resolutions and get early feedback.</p>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50">
<div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-green-900/10 border border-green-100 p-4 w-[320px] cursor-pointer hover:-translate-y-1 transition-transform relative">

<div className="absolute -top-3 -left-2 text-2xl transform -rotate-12 filter drop-shadow-sm">🧝</div>
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full border border-slate-100" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 bg-red-500 w-3 h-3 rounded-full border-2 border-white animate-pulse"></div>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-bold text-slate-900 text-sm">Buddy</span>
<span className="border border-green-200 bg-green-50 text-green-700 rounded px-1 text-[9px] font-bold">ELF AI</span>
</div>
<div className="text-sm text-slate-500 font-medium">Need help wrapping up?</div>
</div>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-up"></i>
</div>
</div>
</div>
</aside>
</div>



    </>
  );
}
