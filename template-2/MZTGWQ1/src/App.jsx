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



document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const chips = document.querySelectorAll('.flex.flex-wrap button');
  const input = document.getElementById('planInput');
  
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      input.value = chip.textContent.trim();
      input.focus();
    });
  });

  document.getElementById('sendBtn').addEventListener('click', () => {
    if (input.value.trim()) {
      alert('Creating your personalized journey: ' + input.value.trim());
      input.value = '';
    }
  });
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-oNju9tQxB1nyaHSc0bBhpEAE" width="100%"></iframe></div>
<div className="flex min-h-screen w-full">

<aside className="hidden lg:flex flex-col w-64 bg-white/20 border-stone-200 border-r pt-6 pr-4 pb-6 pl-4 backdrop-blur" style={{opacity: `0`, animation: `fadeInSlide 0.8s ease-out 0.1s forwards`}}>

<div className="flex items-center space-x-3 mb-8">
<div className="h-7 w-7 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-compass h-4 w-4 text-white" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-lg tracking-tight font-geist" style={{}}>JourneyCraft</span>
</div>

<div className="relative mb-6" style={{opacity: `0`, animation: `fadeInSlide 0.8s ease-out 0.2s forwards`}}>
<input className="w-full rounded-lg border border-stone-300 pl-10 pr-4 py-2.5 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50 transition-all" placeholder="Search destinations..." type="text" />
<svg className="lucide lucide-search absolute left-3 top-3 h-4 w-4 text-stone-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>

<nav className="flex-1" style={{opacity: `0`, animation: `fadeInSlide 0.8s ease-out 0.3s forwards`}}>
<ul className="space-y-2">
<li className="">
<a className="flex items-center space-x-3 transition-colors font-medium text-orange-700 bg-red-100/50 rounded-lg pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<svg className="lucide lucide-map-pin w-[20px] h-[20px]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(194, 65, 12)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="tracking-tight font-geist" style={{}}>Trip Planner</span>
</a>
</li>
<li className="">
<a className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 text-stone-700 transition-colors" href="#">
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="tracking-tight font-geist" style={{}}>Explore</span>
</a>
</li>
<li className="">
<a className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 text-stone-700 transition-colors" href="#">
<svg className="lucide lucide-bookmark h-4 w-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<span className="tracking-tight font-geist" style={{}}>Saved Trips</span>
</a>
</li>
<li className="">
<a className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 text-stone-700 transition-colors" href="#">
<svg className="lucide lucide-camera h-4 w-4" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="tracking-tight font-geist" style={{}}>Travel Stories</span>
</a>
</li>
<li className="">
<a className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 text-stone-700 transition-colors" href="#">
<svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span className="tracking-tight font-geist" style={{}}>Travel Forum</span>
</a>
</li>
<li className="">
<a className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 text-stone-700 transition-colors" href="#">
<svg className="lucide lucide-calculator h-4 w-4" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
<span className="tracking-tight font-geist" style={{}}>Cost Calculator</span>
</a>
</li>
</ul>

<div className="mt-10" style={{opacity: `0`, animation: `fadeInSlide 0.8s ease-out 0.4s forwards`}}>
<div className="flex items-center justify-between text-xs font-medium text-stone-500 px-3 mb-3">
<span className="tracking-tight font-geist" style={{}}>Recent Plans</span>
<svg className="lucide lucide-chevron-down h-3 w-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<ul className="text-sm space-y-2.5 pl-3">
<li className=""><a className="block text-stone-600 hover:text-orange-600 transition-colors tracking-tight font-light font-geist" href="#" style={{}}>Barcelona Cultural Weekend</a></li>
<li className=""><a className="block text-stone-600 hover:text-orange-600 transition-colors tracking-tight font-light font-geist" href="#" style={{}}>Iceland Northern Lights Adventure</a></li>
<li className=""><a className="block text-stone-600 hover:text-orange-600 transition-colors tracking-tight font-light font-geist" href="#" style={{}}>Morocco Desert Experience</a></li>
</ul>
</div>
</nav>

<div className="mt-8" style={{opacity: `0`, animation: `fadeInSlide 0.8s ease-out 0.5s forwards`}}>
<button className="flex items-center w-full space-x-3 rounded-lg bg-stone-50 px-3 py-3 hover:bg-stone-100 transition-colors">
<div className="h-8 w-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-sm tracking-tight font-light font-geist" style={{}}>MK</div>
<div className="flex-1 text-left">
<p className="text-sm tracking-tight font-light font-geist" style={{}}>Maya Kim</p>
<p className="text-xs text-stone-500 tracking-tight font-geist" style={{}}>Explorer Plan</p>
</div>
<svg className="lucide lucide-more-horizontal h-4 w-4 text-stone-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</aside>

<main className="flex-1 lg:p-8 overflow-y-auto pt-4 pr-4 pb-4 pl-4">
<div className="max-w-5xl lg:p-12 bg-white/80 border-stone-200/60 border rounded-2xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 shadow-sm" style={{opacity: `0`, animation: `fadeInUp 1s ease-out 0.6s forwards`}}>

<div className="flex items-center justify-end space-x-6 mb-12" style={{opacity: `0`, animation: `fadeIn 0.8s ease-out 0.8s forwards`}}>
<button className="flex items-center space-x-2 text-sm font-medium text-stone-700 hover:text-orange-600 transition-colors">
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="hidden sm:inline tracking-tight font-geist" style={{}}>English (UK)</span>
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center space-x-2 text-sm font-medium text-stone-700 hover:text-orange-600 transition-colors">
<svg className="lucide lucide-banknote h-4 w-4" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<span className="hidden sm:inline tracking-tight font-geist" style={{}}>Euro (EUR)</span>
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="relative hover:text-orange-600 transition-colors">
<svg className="lucide lucide-bell h-5 w-5 text-stone-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-pink-500"></span>
</button>
</div>

<div className="" style={{opacity: `0`, animation: `fadeInUp 0.8s ease-out 0.9s forwards`}}>
<p className="text-base font-light text-stone-500 tracking-tight font-geist text-center mb-3" style={{}}>Hello Maya!</p>
<h1 className="text-center text-3xl sm:text-5xl leading-tight tracking-tight font-playfair font-medium" style={{}}>
          Describe your <span className="text-orange-600 font-playfair font-medium" style={{fontFamily: `"Crimson Pro", serif`}}>Dream Journey</span> in a few words
        </h1>
</div>

<div className="mt-10 flex justify-center" style={{opacity: `0`, animation: `fadeInUp 0.8s ease-out 1s forwards`}}>
<div className="relative flex w-full max-w-2xl">
<span className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400">
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</span>
<input className="flex-1 sm:text-base focus:ring-2 focus:ring-orange-200 focus:border-orange-500 transition-all text-sm border-stone-300 border rounded-l-2xl pt-4 pr-4 pb-4 pl-14" id="planInput" placeholder="Adventure across New Zealand for 10 days with hiking focus..." type="text" />
<button className="rounded-r-2xl bg-orange-600 hover:bg-orange-700 text-white px-6 flex items-center justify-center transition-colors" id="sendBtn">
<svg className="lucide lucide-send h-5 w-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>

<div className="flex flex-wrap justify-center gap-3 mt-6" style={{opacity: `0`, animation: `fadeIn 0.8s ease-out 1.1s forwards`}}>
<button className="px-5 py-2 rounded-full bg-stone-100 text-stone-700 text-sm hover:bg-stone-200 transition-colors tracking-tight font-light font-geist" style={{}}>Cozy cabin retreat in the Alps</button>
<button className="px-5 py-2 rounded-full bg-stone-100 text-stone-700 text-sm hover:bg-stone-200 transition-colors tracking-tight font-light font-geist" style={{}}>Two weeks exploring Southeast Asia</button>
<button className="px-5 py-2 rounded-full bg-stone-100 text-stone-700 text-sm hover:bg-stone-200 transition-colors tracking-tight font-light font-geist" style={{}}>Art and culture tour of Italy</button>
</div>

<div className="mt-16 flex items-baseline justify-between" style={{opacity: `0`, animation: `fadeInUp 0.8s ease-out 1.2s forwards`}}>
<h2 className="text-xl sm:text-2xl tracking-tight font-playfair font-medium" style={{}}>Trending destinations</h2>
<a className="text-sm text-orange-600 hover:text-orange-700 transition-colors tracking-tight font-light font-geist" href="#" style={{}}>View all</a>
</div>

<div className="mt-8 flex space-x-6 overflow-x-auto pb-4" style={{opacity: `0`, animation: `fadeInUp 0.8s ease-out 1.3s forwards`}}>

<div className="relative min-w-[280px] h-72 rounded-2xl overflow-hidden shadow-sm border border-stone-200/60 hover:shadow-lg transition-shadow">
<img alt="Santorini" className="w-full h-full object-cover" src="/assets/ebb77f71-46e3-4f1e-b8b5-d1bbe5a39202_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
<div className="flex items-center space-x-2 mb-2">
<span className="h-4 w-4 rounded-full overflow-hidden">
<img alt="Greece" className="" src="https://flagcdn.com/gr.svg" />
</span>
<span className="text-xs tracking-tight font-geist" style={{}}>Greece</span>
</div>
<h3 className="text-xl mb-1 tracking-tight font-geist" style={{}}>Santorini</h3>
<p className="text-sm opacity-90 mb-3 tracking-tight font-light font-geist" style={{}}>Perfect weather for island hopping season!</p>
<div className="flex items-center text-xs space-x-4">
<span className="flex items-center space-x-1">
<svg className="lucide lucide-euro h-3 w-3" data-lucide="euro" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h12"></path><path d="M4 14h9"></path><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"></path></svg>
<span className="tracking-tight font-geist" style={{}}>€1,200 – €1,600</span>
</span>
<span className="flex items-center space-x-1">
<svg className="lucide lucide-calendar h-3 w-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="tracking-tight font-geist" style={{}}>May – Oct</span>
</span>
</div>
</div>
</div>

<div className="relative min-w-[280px] h-72 rounded-2xl overflow-hidden shadow-sm border border-stone-200/60 hover:shadow-lg transition-shadow">
<img alt="Reykjavik" className="w-full h-full object-cover" src="/assets/e83b9dc6-2653-4648-bf4b-f9d30f115d8d_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
<div className="flex items-center space-x-2 mb-2">
<span className="h-4 w-4 rounded-full overflow-hidden">
<img alt="Iceland" src="https://flagcdn.com/is.svg" />
</span>
<span className="text-xs tracking-tight font-geist" style={{}}>Iceland</span>
</div>
<h3 className="text-xl mb-1 tracking-tight font-geist" style={{}}>Reykjavik</h3>
<p className="text-sm opacity-90 mb-3 tracking-tight font-light font-geist" style={{}}>Aurora season with crystal-clear night skies.</p>
<div className="flex items-center text-xs space-x-4">
<span className="flex items-center space-x-1">
<svg className="lucide lucide-euro h-3 w-3" data-lucide="euro" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h12"></path><path d="M4 14h9"></path><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"></path></svg>
<span className="tracking-tight font-geist" style={{}}>€900 – €1,300</span>
</span>
<span className="flex items-center space-x-1">
<svg className="lucide lucide-calendar h-3 w-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="tracking-tight font-geist" style={{}}>Oct – Mar</span>
</span>
</div>
</div>
</div>

<div className="relative min-w-[280px] h-72 rounded-2xl overflow-hidden shadow-sm border border-stone-200/60 hover:shadow-lg transition-shadow">
<img alt="Barcelona" className="w-full h-full object-cover" src="/assets/e86c3104-8199-47cc-b038-e03c9379dc06_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
<div className="flex items-center space-x-2 mb-2">
<span className="h-4 w-4 rounded-full overflow-hidden">
<img alt="Spain" src="https://flagcdn.com/es.svg" />
</span>
<span className="text-xs tracking-tight font-geist" style={{}}>Spain</span>
</div>
<h3 className="text-xl mb-1 tracking-tight font-geist" style={{}}>Barcelona</h3>
<p className="text-sm opacity-90 mb-3 tracking-tight font-light font-geist" style={{}}>Art, architecture, and perfect Mediterranean vibes.</p>
<div className="flex items-center text-xs space-x-4">
<span className="flex items-center space-x-1">
<svg className="lucide lucide-euro h-3 w-3" data-lucide="euro" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h12"></path><path d="M4 14h9"></path><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"></path></svg>
<span className="tracking-tight font-geist" style={{}}>€750 – €1,100</span>
</span>
<span className="flex items-center space-x-1">
<svg className="lucide lucide-calendar h-3 w-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="tracking-tight font-geist" style={{}}>Apr – Jun</span>
</span>
</div>
</div>
</div>

<div className="relative min-w-[280px] h-72 rounded-2xl overflow-hidden shadow-sm border border-stone-200/60 hover:shadow-lg transition-shadow">
<img alt="Oslo" className="w-full h-full object-cover" src="/assets/a8e9bf8b-f280-490f-8aad-54be215b6433_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
<div className="flex items-center space-x-2 mb-2">
<span className="h-4 w-4 rounded-full overflow-hidden">
<img alt="Norway" src="https://flagcdn.com/no.svg" />
</span>
<span className="text-xs tracking-tight font-geist" style={{}}>Norway</span>
</div>
<h3 className="text-xl mb-1 tracking-tight font-geist" style={{}}>Oslo</h3>
<p className="text-sm opacity-90 mb-3 tracking-tight font-light font-geist" style={{}}>Scandinavian charm meets modern Nordic design.</p>
<div className="flex items-center text-xs space-x-4">
<span className="flex items-center space-x-1">
<svg className="lucide lucide-euro h-3 w-3" data-lucide="euro" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h12"></path><path d="M4 14h9"></path><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"></path></svg>
<span className="tracking-tight font-geist" style={{}}>€1,100 – €1,500</span>
</span>
<span className="flex items-center space-x-1">
<svg className="lucide lucide-calendar h-3 w-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="tracking-tight font-geist" style={{}}>Jun – Aug</span>
</span>
</div>
</div>
</div>
</div>

<p className="text-center text-xs text-stone-400 mt-12 tracking-tight font-geist" style={{opacity: `0`, animation: `0.8s ease-out 1.4s 1 normal forwards running fadeIn`}}>
        By using JourneyCraft, you agree to our <a className="text-orange-600 hover:underline transition-colors tracking-tight font-geist" href="#" style={{}}>Privacy Policy</a> and <a className="text-orange-600 hover:underline transition-colors tracking-tight font-geist" href="#" style={{}}>Service Terms</a>.
      </p>
</div>
</main>
</div>



    </>
  );
}
