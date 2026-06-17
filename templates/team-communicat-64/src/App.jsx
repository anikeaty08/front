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
      

<div className="w-full max-w-[430px] bg-[#fbfbfd] min-h-screen sm:min-h-[900px] sm:h-[900px] sm:rounded-[3rem] sm:shadow-2xl relative overflow-hidden flex flex-col sm:border-[8px] sm:border-gray-900">

<header className="flex items-center justify-between px-5 pt-12 pb-4">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 bg-[#1d5bf0] rounded-full flex items-center justify-center text-white shrink-0">
<i className="w-5 h-5" data-lucide="square-kanban" strokeWidth="1.5"></i>
</div>
<span className="font-semibold text-lg tracking-tight">Team|Reach</span>
</div>
<div className="flex items-center gap-4">
<div className="relative cursor-pointer">
<i className="w-6 h-6 text-gray-600" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-0 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-[#fbfbfd]"></span>
</div>
<img alt="User" className="w-9 h-9 rounded-full object-cover shadow-sm bg-gray-200" src="https://i.pravatar.cc/150?img=11"/>
</div>
</header>

<main className="flex-1 overflow-y-auto pb-32 hide-scrollbar">

<section className="px-5 pt-2 pb-6">
<p className="text-sm font-medium text-gray-500 mb-1">Hey, Hassan 👋</p>
<h1 className="text-3xl font-semibold tracking-tight leading-tight text-gray-900">
                    Simple, Fast Team <br/> Communication
                </h1>
</section>

<section className="px-5 mb-8 flex gap-3">
<div className="flex-1 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] rounded-full px-5 py-3.5 flex items-center border border-gray-100">
<input className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-gray-400" placeholder="Enter your group code" type="text"/>
</div>
<button className="w-[52px] h-[52px] bg-[#1d5bf0] hover:bg-blue-700 transition-colors text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
<i className="w-6 h-6 ml-0.5" data-lucide="send-horizontal" strokeWidth="1.5"></i>
</button>
</section>

<section className="mb-8">
<div className="flex items-end justify-between px-5 mb-4">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Your Groups</h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors" href="#">See All</a>
</div>

<div className="flex gap-4 overflow-x-auto px-5 pb-4 hide-scrollbar snap-x snap-mandatory">

<div className="snap-start shrink-0 w-[280px] h-[300px] bg-gradient-to-br from-[#1d5bf0] to-[#0c3eb8] rounded-[2rem] p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xl shadow-blue-500/20">

<div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>

<div className="flex justify-between items-start relative z-10">
<div className="w-12 h-12 bg-white text-[#1d5bf0] rounded-full flex items-center justify-center shadow-sm">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div className="flex gap-2">
<button className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm">
<i className="w-4 h-4 text-white" data-lucide="calendar" strokeWidth="1.5"></i>
</button>
<button className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm">
<i className="w-4 h-4 text-white" data-lucide="settings" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="relative z-10 mt-2">
<h3 className="text-2xl font-semibold tracking-tight leading-tight mb-3">MacArthur <br/> Soccer</h3>
<div className="flex justify-between items-center">
<div className="flex items-center gap-1.5 text-white/90">
<i className="w-4 h-4" data-lucide="crown" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Leader</span>
</div>
<div className="flex -space-x-2.5">
<img className="w-8 h-8 rounded-full border-2 border-[#1d5bf0] relative z-30" src="https://i.pravatar.cc/150?img=32"/>
<img className="w-8 h-8 rounded-full border-2 border-[#1d5bf0] relative z-20" src="https://i.pravatar.cc/150?img=12"/>
<img className="w-8 h-8 rounded-full border-2 border-[#1d5bf0] relative z-10" src="https://i.pravatar.cc/150?img=47"/>
<div className="w-8 h-8 rounded-full border-2 border-[#1d5bf0] bg-blue-400/80 backdrop-blur-md flex items-center justify-center text-xs font-medium z-0">+8</div>
</div>
</div>
</div>

<div className="flex gap-2 relative z-10">
<div className="flex-1 bg-white/10 border border-white/10 backdrop-blur-md rounded-full py-2 px-3 flex items-center gap-2.5">
<div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-gray-800" data-lucide="image" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium leading-[1.15]">110+ image<br/>in this group</span>
</div>
<button className="bg-white rounded-full px-5 flex items-center gap-2 hover:bg-gray-50 transition-colors text-gray-800 shadow-sm shrink-0">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-gray-400" data-lucide="chevrons-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="snap-start shrink-0 w-[280px] h-[300px] bg-gradient-to-br from-[#9333ea] to-[#7e22ce] rounded-[2rem] p-6 text-white relative overflow-hidden flex flex-col justify-between opacity-90">
<div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start relative z-10">
<div className="w-12 h-12 bg-white text-[#9333ea] rounded-full flex items-center justify-center shadow-sm">
<i className="w-6 h-6" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative z-10 mt-2">
<h3 className="text-2xl font-semibold tracking-tight leading-tight mb-3">Green <br/> Tennis</h3>
<div className="flex justify-between items-center">
<div className="flex items-center gap-1.5 text-white/90">
<i className="w-4 h-4" data-lucide="crown" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Leader</span>
</div>
</div>
</div>
<div className="flex gap-2 relative z-10">
<div className="flex-1 bg-white/10 border border-white/10 backdrop-blur-md rounded-full py-2 px-3 flex items-center gap-2.5">
<div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-gray-800" data-lucide="image" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium leading-[1.15]">130+ image<br/>in this group</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-5">
<div className="flex items-end justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Other Groups</h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors" href="#">See All</a>
</div>
<div className="space-y-3">

<div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-[#f0f4ff] text-[#1d5bf0] rounded-full flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="layout-grid" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-base mb-1">Lions Football</h4>
<div className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
<span>Member</span>
</div>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
<i className="w-6 h-6" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>
</main>

<div className="absolute bottom-6 left-0 right-0 px-5 flex gap-4 items-end z-50">

<nav className="flex-1 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full h-[72px] flex items-center justify-between px-2 border border-gray-100">
<button className="w-14 h-14 bg-[#f0f4ff] rounded-full flex items-center justify-center text-[#1d5bf0] transition-colors relative">
<i className="w-6 h-6 fill-[#1d5bf0]/10" data-lucide="home" strokeWidth="1.5"></i>
</button>
<button className="w-14 h-14 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-6 h-6" data-lucide="search" strokeWidth="1.5"></i>
</button>
<button className="w-14 h-14 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-6 h-6" data-lucide="message-square" strokeWidth="1.5"></i>
</button>
<button className="w-14 h-14 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</button>
</nav>

<button className="w-[72px] h-[72px] bg-[#1d5bf0] hover:bg-blue-700 transition-colors text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(29,91,240,0.3)] shrink-0">
<i className="w-8 h-8" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>


    </>
  );
}
