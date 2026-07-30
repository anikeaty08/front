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



        // Initialize Lucide icons
        lucide.createIcons();

        // Navigation functionality
        const navButtons = document.querySelectorAll('.nav-btn');
        const homeView = document.getElementById('homeView');
        const statsView = document.getElementById('statsView');

        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const view = btn.dataset.view;
                
                // Update navigation state
                navButtons.forEach(b => b.classList.remove('nav-active'));
                btn.classList.add('nav-active');

                // Switch views
                if (view === 'home') {
                    homeView.classList.remove('hidden');
                    statsView.classList.add('hidden');
                } else if (view === 'stats') {
                    homeView.classList.add('hidden');
                    statsView.classList.remove('hidden');
                }
            });
        });

        // Tab functionality
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                tabButtons.forEach(b => b.classList.remove('tab-active'));
                btn.classList.add('tab-active');
            });
        });

        // Add smooth scrolling
        document.querySelectorAll('[class*="overflow-x-auto"]').forEach(element => {
            element.style.scrollBehavior = 'smooth';
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
      

<div className="relative w-full max-w-sm mx-auto">

<div className="relative bg-black rounded-[45px] p-2 phone-shadow fade-in">
<div className="overflow-hidden relative bg-[url(https://images.unsplash.com/photo-1689005046800-38a1f4f47a51?w=800&q=80)] bg-cover rounded-[37px]">

<div className="flex text-sm text-white pt-3 pr-6 pl-6 items-center justify-between">
<span className="font-medium">9:41</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="min-h-[600px] relative" id="homeView">

<div className="px-6 pt-6 fade-in-delay-1">
<h1 className="text-2xl font-semibold text-white tracking-tight">Digital Vault</h1>
</div>

<div className="px-6 mt-8 fade-in-delay-2">
<div className="relative rounded-3xl overflow-hidden group cursor-pointer">
<img className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" src="https://cdn.midjourney.com/f603edcd-c27e-4c28-a0b9-38bf78e13fe4/0_2.png?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-xl font-semibold text-white">Genesis</h3>
</div>
</div>
</div>

<div className="px-6 mt-8 fade-in-delay-3">
<h2 className="text-lg font-medium text-white/90 mb-4">Featured drops</h2>
<div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide" style={{scrollBehavior: `smooth`}}>
<div className="flex-shrink-0 w-32 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
<img className="w-full h-20 object-cover" src="https://cdn.midjourney.com/269cab61-0990-40f8-ac5d-f76f9b98523d/0_0.png?w=800&q=80" style={{}} />
<div className="bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-slate-200/0 to-[#ffffff]/20 pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white">Nexus</p>
<div className="flex items-center mt-1 text-xs text-red-400">
<svg className="lucide lucide-heart w-3 h-3 mr-1" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="">842</span>
</div>
</div>
</div>
<div className="flex-shrink-0 w-32 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
<img className="w-full h-20 object-cover" src="https://cdn.midjourney.com/e7f73911-7831-48ae-a9d2-b55c782dd157/0_1.png?w=800&q=80" style={{}} />
<div className="bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-slate-200/0 to-[#ffffff]/20 pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white">Quantum</p>
<div className="flex items-center mt-1 text-xs text-red-400">
<svg className="lucide lucide-heart w-3 h-3 mr-1" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="">567</span>
</div>
</div>
</div>
<div className="flex-shrink-0 w-32 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
<img className="w-full h-20 object-cover" src="https://cdn.midjourney.com/e7f73911-7831-48ae-a9d2-b55c782dd157/0_3.png?w=800&q=80" style={{}} />
<div className="bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-slate-200/0 to-[#ffffff]/20 pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white">Cosmos</p>
<div className="flex text-xs text-red-400 mt-1 items-center">
<svg className="lucide lucide-heart w-3 h-3 mr-1" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="">923</span>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 mt-8 pb-24 fade-in-delay-4">
<h2 className="text-lg font-medium text-white/90 mb-4">Rising creators</h2>
<div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide" style={{scrollBehavior: `smooth`}}>
<div className="flex-shrink-0 w-32 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
<img className="w-full h-20 object-cover" src="https://cdn.midjourney.com/75f56835-6654-41e6-8982-4f699e4a413a/0_3.png?w=800&q=80" style={{}} />
<div className="p-3">
<p className="text-sm font-medium text-white">Morpheus</p>
</div>
</div>
<div className="flex-shrink-0 w-32 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
<img className="w-full h-20 object-cover" src="https://cdn.midjourney.com/e5b4d02f-8d2d-461a-bda1-9da06745c53d/0_0.png?w=800&q=80" style={{}} />
<div className="p-3">
<p className="text-sm font-medium text-white">Phantom</p>
</div>
</div>
<div className="flex-shrink-0 w-32 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
<img className="w-full h-20 object-cover" src="https://cdn.midjourney.com/d49ff5aa-ef39-44fa-a15c-8150be7d0f7b/0_3.png?w=800&q=80" style={{}} />
<div className="p-3">
<p className="text-sm font-medium text-white">Zenith</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden min-h-[600px] relative" id="statsView">
<div className="px-6 pt-6">
<h1 className="text-2xl font-semibold text-white tracking-tight mb-6">Analytics</h1>

<div className="flex border-b border-white/20 mb-6">
<button className="tab-btn relative px-1 py-3 text-sm font-medium text-white mr-8 tab-active" data-tab="ranking">
                                Leaderboard
                            </button>
<button className="tab-btn relative px-1 py-3 text-sm font-medium text-white/70" data-tab="activity">
                                Trades
                            </button>
</div>

<div className="flex gap-3 mb-6">
<button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-white/20 transition-all">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                                All genres
                            </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-white/20 transition-all">
<svg className="lucide lucide-link w-4 h-4" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                All networks
                            </button>
</div>

<div className="space-y-4 pb-24">
<div className="flex items-center justify-between hover:bg-white/5 p-3 rounded-xl transition-all cursor-pointer">
<div className="flex items-center gap-4">
<span className="text-sm text-white/60 w-4">1</span>
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1644620990884-0e6e8743f71a?w=800&q=80" style={{}} />
<div>
<p className="text-sm font-medium text-white">Zenith Labs</p>
<p className="text-xs text-white/50">explore works</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">Ξ 452,186.23</p>
<p className="text-xs text-emerald-400">+12.45%</p>
</div>
</div>
<div className="flex items-center justify-between hover:bg-white/5 p-3 rounded-xl transition-all cursor-pointer">
<div className="flex items-center gap-4">
<span className="text-sm text-white/60 w-4">2</span>
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=800&q=80" style={{}} />
<div>
<p className="text-sm font-medium text-white">Vortex Studios</p>
<p className="text-xs text-white/50">explore works</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">Ξ 387,922.11</p>
<p className="text-xs text-emerald-400">+8.76%</p>
</div>
</div>
<div className="flex items-center justify-between hover:bg-white/5 p-3 rounded-xl transition-all cursor-pointer">
<div className="flex items-center gap-4">
<span className="text-sm text-white/60 w-4">3</span>
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80" style={{}} />
<div>
<p className="text-sm font-medium text-white">Pixel Forge</p>
<p className="text-xs text-white/50">explore works</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">Ξ 298,744.85</p>
<p className="text-xs text-red-400">-2.18%</p>
</div>
</div>
<div className="flex items-center justify-between hover:bg-white/5 p-3 rounded-xl transition-all cursor-pointer">
<div className="flex items-center gap-4">
<span className="text-sm text-white/60 w-4">4</span>
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1643228995868-bf698f67d053?w=800&q=80" style={{}} />
<div>
<p className="text-sm font-medium text-white">Nexus Collective</p>
<p className="text-xs text-white/50">explore works</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">Ξ 256,331.67</p>
<p className="text-xs text-emerald-400">+5.23%</p>
</div>
</div>
<div className="flex items-center justify-between hover:bg-white/5 p-3 rounded-xl transition-all cursor-pointer">
<div className="flex items-center gap-4">
<span className="text-sm text-white/60 w-4">5</span>
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&q=80" style={{}} />
<div>
<p className="text-sm font-medium text-white">Echo Digital</p>
<p className="text-xs text-white/50">explore works</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">Ξ 198,456.29</p>
<p className="text-xs text-emerald-400">+7.84%</p>
</div>
</div>
<div className="flex items-center justify-between hover:bg-white/5 p-3 rounded-xl transition-all cursor-pointer">
<div className="flex items-center gap-4">
<span className="text-sm text-white/60 w-4">6</span>
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1637611331620-51149c7ceb94?w=800&q=80" />
<div>
<p className="text-sm font-medium text-white">Quantum Arts</p>
<p className="text-xs text-white/50">explore works</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">Ξ 167,892.44</p>
<p className="text-xs text-emerald-400">+4.12%</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-lg border-t border-white/10 fade-in-delay-5">
<div className="flex items-center justify-around px-6 py-3">
<button className="nav-btn p-2 nav-active" data-view="home">
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</button>
<button className="nav-btn p-2" data-view="stats">
<svg className="lucide lucide-bar-chart-2 w-6 h-6" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
</button>
<button className="relative">
<div className="w-14 h-14 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105">
<svg className="lucide lucide-plus w-6 h-6 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
<button className="nav-btn p-2">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="nav-btn p-2">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
