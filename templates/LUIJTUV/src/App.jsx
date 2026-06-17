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



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
          colors: {
            slateBg: '#686873',
            cardLight: '#f5f3fa',
            cardDark: '#0b0b15',
          }
        }
      }
    }
  


    document.querySelectorAll('.add-btn').forEach(btn=>{
      btn.addEventListener('click',()=> {
        btn.classList.toggle('bg-black');
        btn.classList.toggle('text-white');
        const isAdded = btn.classList.contains('bg-black');
        btn.innerHTML = isAdded ? 
          '<span class="hidden sm:inline">Added</span><i data-lucide="check" class="w-4 h-4"></i>' : 
          '<span class="hidden sm:inline">Add</span><i data-lucide="plus" class="w-4 h-4"></i>';
        lucide.createIcons();
      });
    });

    document.querySelectorAll('.like-btn').forEach(btn=>{
      btn.addEventListener('click',()=> {
        btn.classList.toggle('scale-110');
        setTimeout(() => btn.classList.remove('scale-110'), 150);
      });
    });

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
      
<div className="container mx-auto p-4 lg:p-6 max-w-7xl">

<div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

<div className="lg:col-span-2 lg:space-y-8 space-y-6">

<div className="relative overflow-hidden rounded-3xl p-6 lg:p-10" style={{background: 'linear-gradient(135deg,#efeaf9 0%,#e9e4f7 40%,#f8f2f8 100%)'}}>

<div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
<svg className="lucide lucide-trending-up w-4 h-4 text-purple-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-sm font-semibold text-purple-800">Weekly Trending</span>
</div>

<h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-xl mb-2">
            Featured podcasts<br/>this week
          </h1>
<p className="text-slate-600 mb-8 max-w-md">Handpicked by our editorial team and loved by millions of listeners worldwide</p>

<div className="mt-10 space-y-4 max-w-2xl">
<div className="flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-xl px-4 lg:px-5 py-4 hover:bg-white/80 transition">
<div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
<img alt="Podcast cover" className="w-12 h-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&amp;fit=crop&amp;w=60&amp;q=80"/>
<button className="like-btn w-9 h-9 flex items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 transition">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="min-w-0 flex-1">
<p className="font-semibold truncate">The Creative Mind</p>
<p className="text-slate-500 text-sm truncate">Sarah Mitchell • 2.1M followers</p>
</div>
<div className="hidden sm:flex items-center gap-1 text-amber-500">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium">4.8</span>
</div>
</div>
<button className="add-btn flex items-center gap-1 text-sm font-medium bg-white rounded-lg px-3 lg:px-4 py-2 shadow-sm hover:bg-slate-100 transition ml-3">
<span className="hidden sm:inline">Add</span>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-xl px-4 lg:px-5 py-4 hover:bg-white/80 transition">
<div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
<img alt="Podcast cover" className="w-12 h-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=1080&amp;q=80"/>
<button className="like-btn w-9 h-9 flex items-center justify-center rounded-lg bg-purple-500 hover:bg-purple-600 transition">
<svg className="lucide lucide-bookmark w-4 h-4 text-white" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<div className="min-w-0 flex-1">
<p className="font-semibold truncate">Tech Frontiers Daily</p>
<p className="text-slate-500 text-sm truncate">Marcus Chen • 890K followers</p>
</div>
<div className="hidden sm:flex items-center gap-1 text-amber-500">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium">4.9</span>
</div>
</div>
<button className="add-btn flex items-center gap-1 text-sm font-medium bg-white rounded-lg px-3 lg:px-4 py-2 shadow-sm hover:bg-slate-100 transition ml-3">
<span className="hidden sm:inline">Add</span>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-xl px-4 lg:px-5 py-4 hover:bg-white/80 transition">
<div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
<img alt="Podcast cover" className="w-12 h-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=1080&amp;q=80"/>
<button className="like-btn w-9 h-9 flex items-center justify-center rounded-lg bg-green-500 hover:bg-green-600 transition">
<svg className="lucide lucide-headphones w-4 h-4 text-white" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</button>
<div className="min-w-0 flex-1">
<p className="font-semibold truncate">Mindful Mornings</p>
<p className="text-slate-500 text-sm truncate">Elena Rodriguez • 1.5M followers</p>
</div>
<div className="hidden sm:flex items-center gap-1 text-amber-500">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium">4.7</span>
</div>
</div>
<button className="add-btn flex items-center gap-1 text-sm font-medium bg-white rounded-lg px-3 lg:px-4 py-2 shadow-sm hover:bg-slate-100 transition ml-3">
<span className="hidden sm:inline">Add</span>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

<div className="relative rounded-3xl bg-cardDark text-white p-6 lg:p-8 flex flex-col justify-between min-h-[200px]">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
<svg className="lucide lucide-activity w-3 h-3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Analytics
              </div>
<button className="text-slate-400 hover:text-white">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="">
<h2 className="lg:text-3xl text-2xl font-semibold mt-4">Weekly Stats</h2>
<p className="text-slate-400 text-sm mt-2">12.5M total plays</p>
</div>
<a className="mt-6 text-sm font-medium inline-flex items-center gap-1 group text-blue-300 hover:text-blue-200" href="#">
              View Details
              <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<div className="absolute bottom-6 right-6 flex items-end gap-2">
<div className="w-4 h-12 rounded-full bg-gradient-to-t from-blue-500 to-blue-300"></div>
<div className="w-4 h-16 rounded-full bg-gradient-to-t from-purple-500 to-purple-300"></div>
<div className="w-4 h-8 rounded-full bg-gradient-to-t from-pink-500 to-pink-300"></div>
</div>
</div>

<div className="sm:col-span-1 lg:col-span-2 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 bg-white bg-[url(https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=1080&amp;q=80)] bg-cover rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm items-start">
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-3xl font-semibold tracking-tighter">Dr. Amanda Foster</h3>
<svg className="lucide lucide-verified w-[20px] h-[20px] text-slate-50" data-lucide="verified" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-sm text-slate-50 mb-3">Psychology &amp; Mental Health Expert</p>
<div className="flex items-center gap-4 text-sm">
<div className="flex items-center gap-1">
<svg className="lucide lucide-users w-[16px] h-[16px] text-slate-50" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium text-slate-50">2.8M followers</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-mic w-[16px] h-[16px] text-slate-50" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
<span className="font-medium text-slate-50">127 episodes</span>
</div>
</div>
</div>
<button className="px-6 py-2 bg-black text-white rounded-xl font-medium hover:bg-slate-800 transition flex items-center gap-2">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
              Follow
            </button>
</div>
</div>
</div>

<div className="space-y-6 lg:space-y-8">

<div className="rounded-3xl bg-cardDark text-white p-6 lg:p-8 space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              Now Playing
            </div>
<button className="text-slate-400 hover:text-white">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<img alt="Podcast cover" className="w-28 h-28 object-cover rounded-2xl mr-auto ml-auto shadow-lg" src="https://images.unsplash.com/photo-1643228995868-bf698f67d053?w=1080&amp;q=80"/>
<div className="text-center space-y-2">
<h3 className="text-xl font-semibold">Business Breakthrough</h3>
<p className="text-slate-400 text-sm">Entrepreneurship &amp; Innovation</p>
<p className="text-slate-500 text-xs">Hosted by James Wilson</p>
</div>

<div className="space-y-2">
<div className="w-full bg-slate-700 rounded-full h-1">
<div className="bg-emerald-500 h-1 rounded-full" style={{width: '35%'}}></div>
</div>
<div className="flex justify-between text-xs text-slate-400">
<span>12:35</span>
<span>36:42</span>
</div>
</div>
<div className="flex items-center justify-center gap-6">
<button className="text-slate-400 hover:text-white transition">
<svg className="lucide lucide-skip-back w-5 h-5" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg>
</button>
<button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition">
<svg className="lucide lucide-pause w-5 h-5 text-white" data-lucide="pause" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="1" width="4" x="14" y="4"></rect><rect height="16" rx="1" width="4" x="6" y="4"></rect></svg>
</button>
<button className="text-slate-400 hover:text-white transition">
<svg className="lucide lucide-skip-forward w-5 h-5" data-lucide="skip-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg>
</button>
</div>

<div className="space-y-3">
<h4 className="text-sm font-medium text-slate-300">Recent Episodes</h4>
<div className="space-y-2">
<div className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3 hover:bg-white/15 transition">
<div className="flex items-center gap-3">
<svg className="lucide lucide-play w-4 h-4 text-emerald-400" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span className="text-sm">Scaling Your Startup</span>
</div>
<span className="text-xs text-slate-400">24 min</span>
</div>
<div className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3 hover:bg-white/15 transition">
<div className="flex items-center gap-3">
<svg className="lucide lucide-clock w-4 h-4 text-slate-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="text-sm">Investment Strategies</span>
</div>
<span className="text-xs text-slate-400">31 min</span>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden" style={{background: 'radial-gradient(ellipse at center,#f4f1fb 0%,#e9e5f6 100%)'}}>
<div className="p-8 text-center">
<div className="w-full max-w-xs mx-auto mb-6">
<img alt="Trending" className="w-full h-48 object-cover border-white border-4 rounded-2xl shadow-xl" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<h3 className="lg:text-3xl text-2xl font-semibold tracking-tight mb-3">Discover New Categories</h3>
<p className="text-slate-600 mb-6 text-sm lg:text-base">Explore curated playlists across different genres and topics</p>

<div className="flex flex-wrap justify-center gap-2 mb-6">
<span className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium">Business</span>
<span className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium">Technology</span>
<span className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium">Health</span>
<span className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium">Education</span>
</div>
<button className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition flex items-center gap-2 mx-auto">
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Explore All
            </button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
