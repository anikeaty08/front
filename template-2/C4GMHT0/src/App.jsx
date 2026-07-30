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



    // Initialize lucide icons
    lucide.createIcons();

    // Mobile sidebar controls
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const openSidebar = document.getElementById('openSidebar');
    const closeSidebar = document.getElementById('closeSidebar');

    function showSidebar() {
      sidebar.classList.remove('-translate-x-full');
      mobileOverlay.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function hideSidebar() {
      sidebar.classList.add('-translate-x-full');
      mobileOverlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    openSidebar?.addEventListener('click', showSidebar);
    closeSidebar?.addEventListener('click', hideSidebar);
    mobileOverlay?.addEventListener('click', hideSidebar);

    // Toggle submenus
    function toggleSub(id) {
      const list = document.getElementById(id);
      const icon = document.getElementById(id + 'Icon');
      list.classList.toggle('hidden');
      icon.classList.toggle('rotate-90');
    }

    // Close sidebar on window resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        hideSidebar();
      }
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
      

<div className="fixed inset-0 bg-black/50 z-10 lg:hidden hidden" id="mobileOverlay"></div>
<div className="flex min-h-screen">

<aside className="fixed lg:relative z-20 flex flex-col w-72 h-full lg:h-auto shrink-0 bg-[#1e293b]/90 backdrop-blur-md border-r border-white/10 transition-all duration-300 transform -translate-x-full lg:translate-x-0" id="sidebar">

<div className="flex items-center justify-between h-16 lg:h-20 px-4 lg:px-6">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-play w-4 h-4 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</div>
<span className="text-xl font-normal tracking-tighter font-jakarta" id="logoText">VIDFLOW</span>
</div>
<button className="p-2 rounded hover:bg-white/5 lg:hidden" id="closeSidebar">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex-1 overflow-y-auto px-3 lg:px-4 pb-4">

<ul className="space-y-1">
<li className="">
<a className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-gradient-to-r from-purple-600/20 to-transparent border border-purple-500/20" href="#">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="flex-1 truncate">Dashboard</span>
</a>
</li>
<li className="">
<button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors" onClick={(e) => { toggleSub('categories') }}>
<div className="flex items-center space-x-3">
<svg className="lucide lucide-grid-3x3 w-5 h-5" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="flex-1 truncate">Categories</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 transition-transform" data-lucide="chevron-right" fill="none" height="24" id="categoriesIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<ul className="mt-1 pl-8 space-y-1 hidden" id="categories">
<li><a className="block px-3 py-1.5 rounded hover:bg-white/5 text-sm" href="#">Gaming</a></li>
<li><a className="block px-3 py-1.5 rounded hover:bg-white/5 text-sm" href="#">Tech Reviews</a></li>
<li><a className="block px-3 py-1.5 rounded hover:bg-white/5 text-sm" href="#">Tutorials</a></li>
<li><a className="block px-3 py-1.5 rounded hover:bg-white/5 text-sm" href="#">Vlogs</a></li>
</ul>
</li>
<li>
<a className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors" href="#">
<svg className="lucide lucide-video w-5 h-5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="flex-1 truncate">My Content</span>
<svg className="lucide lucide-plus w-4 h-4 opacity-60" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</a>
</li>
<li className="">
<a className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors" href="#">
<svg className="lucide lucide-bookmark w-5 h-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<span className="flex-1 truncate">Saved Videos</span>
<span className="text-xs font-semibold bg-purple-500 text-white rounded-full px-2 py-0.5">28</span>
</a>
</li>
<li className="">
<a className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors" href="#">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="flex-1 truncate">Liked</span>
<span className="text-xs font-semibold bg-pink-500 text-white rounded-full px-2 py-0.5">85</span>
</a>
</li>
</ul>

<div className="mt-6">
<button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors" onClick={(e) => { toggleSub('following') }}>
<div className="flex items-center space-x-3">
<svg className="lucide lucide-user-check w-5 h-5" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="flex-1 truncate">Following</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 transition-transform" data-lucide="chevron-right" fill="none" height="24" id="followingIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<ul className="mt-1 pl-8 space-y-1 hidden" id="following">
<li><a className="flex items-center space-x-2 px-3 py-1.5 rounded hover:bg-white/5" href="#"><img alt="" className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/24?img=15" /><span className="text-sm">TechGuru</span></a></li>
<li><a className="flex items-center space-x-2 px-3 py-1.5 rounded hover:bg-white/5" href="#"><img alt="" className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/24?img=32" /><span className="text-sm">CodeMaster</span></a></li>
<li><a className="flex items-center space-x-2 px-3 py-1.5 rounded hover:bg-white/5" href="#"><img alt="" className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/24?img=42" /><span className="text-sm">GameZone</span></a></li>
<li><a className="block px-3 py-1.5 rounded hover:bg-white/5 text-sm text-slate-400" href="#">View All</a></li>
</ul>
</div>

<div className="mt-6">
<a className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors" href="#">
<svg className="lucide lucide-smartphone w-5 h-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="truncate">Mobile App</span>
</a>
</div>
</nav>

<div className="px-4 lg:px-6 py-4 border-t border-white/10">
<div className="flex items-center space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-purple-400" src="https://i.pravatar.cc/40?img=68" />
<div className="min-w-0 flex-1">
<p className="text-sm font-medium truncate">alex.creator</p>
<p className="text-xs text-slate-400 truncate">Content Creator</p>
</div>
<button className="p-2 rounded hover:bg-white/5 transition-colors">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
</aside>

<main className="flex-1 min-w-0">

<header className="lg:hidden flex items-center justify-between p-4 bg-[#1e293b]/90 backdrop-blur-md border-b border-white/10">
<button className="p-2 rounded hover:bg-white/5" id="openSidebar">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<h1 className="text-lg font-semibold">VidFlow</h1>
<button className="p-2 rounded hover:bg-white/5">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</header>
<div className="lg:p-6 xl:p-10 pt-4 pr-4 pb-4 pl-4">
<div className="grid gap-6 lg:gap-8 xl:grid-cols-2">

<article className="relative bg-[#1e293b]/70 backdrop-blur-md rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-white/5">
<div className="relative">
<img alt="" className="w-full h-48 lg:h-56 object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=1080&q=80" />
<span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
<svg className="lucide lucide-circle w-2 h-2 fill-current" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
<span>LIVE</span>
</span>
<button className="absolute top-3 right-3 p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="lg:p-6 pt-4 pr-4 pb-4 pl-4 space-y-5">
<h3 className="lg:text-xl text-lg font-medium tracking-tight mb-2">React Development Masterclass</h3>
<p className="text-sm text-slate-400 mb-3">Prompts are the instructions you give to AI—clear, detailed directions that shape the output. In UI, web, or animation design, your prompt acts as a blueprint for the AI to follow.

</p>
<div className="flex items-center justify-between text-xs text-slate-500">
<div className="flex items-center space-x-3">
<span className="flex items-center space-x-1">
<svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="">2.4K watching</span>
</span>
<span className="">Started 1h ago</span>
</div>
<button className="text-purple-400 hover:text-purple-300 font-medium">Join Stream</button>
</div>
</div>
</article>

<article className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-xl border border-purple-500/20 flex flex-col">
<div className="relative flex-1">
<img alt="" className="w-full h-48 lg:h-64 opacity-80 object-cover" src="https://images.unsplash.com/photo-1673951284213-2a3550681b7d?w=1080&q=80" />
<span className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Creator Spotlight</span>
</div>
<div className="p-6 lg:p-8">
<h2 className="lg:text-3xl text-2xl font-medium tracking-tight mb-3">Trending Now</h2>
<p className="text-slate-300 mb-6">Discover the most popular content creators and trending videos</p>
<div className="flex items-center space-x-1.5">
<span className="w-2 h-2 rounded-full bg-purple-400"></span>
<span className="w-2 h-2 rounded-full bg-slate-600"></span>
<span className="w-2 h-2 rounded-full bg-slate-600"></span>
</div>
</div>
<button className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</article>
</div><div className="grid gap-6 lg:gap-8 xl:grid-cols-2 mt-8">


<article className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-xl border border-purple-500/20 flex flex-col">
<div className="lg:p-8 pt-6 pr-6 pb-6 pl-6">
<h2 className="lg:text-3xl text-2xl font-medium tracking-tight mb-3">Unlocking AI-Powered Design</h2>
<p className="text-slate-300 mb-6">A step-by-step guide for designers and developers to harness AI tools like Aura—mastering prompts, templates, and creative workflows for stunning, modern designs.</p>
<div className="flex items-center space-x-1.5">
<span className="w-2 h-2 rounded-full bg-purple-400"></span>
<span className="w-2 h-2 rounded-full bg-slate-600"></span>
<span className="w-2 h-2 rounded-full bg-slate-600"></span>
</div>
</div><div className="relative flex-1">
<img alt="" className="w-full h-48 lg:h-64 opacity-80 object-cover" src="https://images.unsplash.com/photo-1631879742077-0b48672bf910?w=1080&q=80" />
<span className="absolute top-4 left-4 text-xs font-semibold text-white bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full pt-1 pr-3 pb-1 pl-3">Creator Spotlight</span>
</div>
<button className="absolute bottom-6 right-6 w-12 h-12 flex hover:from-purple-600 hover:to-pink-600 transition-all text-white bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full shadow-lg items-center justify-center">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</article><article className="relative lg:rounded-3xl overflow-hidden bg-[#1e293b]/70 border-white/5 border rounded-2xl shadow-xl backdrop-blur-md">
<div className="relative">
<span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
<svg className="lucide lucide-circle w-2 h-2 fill-current" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
<span className="">LIVE</span>
</span>
<button className="absolute top-3 right-3 p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button><img alt="" className="w-full h-48 lg:h-56 object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=1080&q=80" />
</div>
<div className="lg:p-6 pt-4 pr-4 pb-4 pl-4 space-y-5">
<h3 className="text-3xl font-normal tracking-tight mb-2">Introduction</h3>
<p className="text-sm text-slate-400 mb-3">AI-driven design is transforming creative workflows, making it easier than ever to produce beautiful, functional interfaces. This guide covers how to write effective AI prompts, leverage Aura’s extensive template library, and integrate resources like CodePen and open-source libraries into your projects.

</p>
<div className="flex items-center justify-between text-xs text-slate-500">
<div className="flex items-center space-x-3">
<span className="flex items-center space-x-1">
<svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="">2.4K watching</span>
</span>
<span className="">Started 1h ago</span>
</div>
<button className="text-purple-400 hover:text-purple-300 font-medium">Join Stream</button>
</div>
</div>
</article>
</div>

<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="bg-[#1e293b]/50 rounded-xl p-4 border border-white/5">
<div className="flex items-center space-x-3 mb-3">
<svg className="lucide lucide-trending-up w-5 h-5 text-purple-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h3 className="font-medium">Analytics</h3>
</div>
<p className="text-2xl font-bold">12.5K</p>
<p className="text-sm text-slate-400">Total Views</p>
</div>
<div className="bg-[#1e293b]/50 rounded-xl p-4 border border-white/5">
<div className="flex items-center space-x-3 mb-3">
<svg className="lucide lucide-users w-5 h-5 text-pink-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="font-medium">Followers</h3>
</div>
<p className="text-2xl font-bold">1.2K</p>
<p className="text-sm text-slate-400">New this week</p>
</div>
<div className="bg-[#1e293b]/50 rounded-xl p-4 border border-white/5 sm:col-span-2 lg:col-span-1">
<div className="flex items-center space-x-3 mb-3">
<svg className="lucide lucide-clock w-5 h-5 text-blue-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<h3 className="font-medium">Watch Time</h3>
</div>
<p className="text-2xl font-bold">48h</p>
<p className="text-sm text-slate-400">This month</p>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
