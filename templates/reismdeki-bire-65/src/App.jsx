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



            (function() {
              const cards = document.querySelectorAll('.hero-card');
              let activeCard = null;
              
              cards.forEach(card => {
                card.addEventListener('click', (e) => {
                  e.stopPropagation();
                  if(activeCard === card) {
                    resetCards();
                  } else {
                    cards.forEach(c => {
                      c.style.transform = c.getAttribute('data-original-transform') + ' scale(0.9)';
                      c.style.opacity = '0.5';
                      c.style.filter = 'grayscale(100%)';
                      c.style.zIndex = '0';
                    });
                    card.style.transform = 'rotate(0deg) translateY(-10px) scale(1.2)';
                    card.style.opacity = '1';
                    card.style.filter = 'none';
                    card.style.zIndex = '50';
                    activeCard = card;
                  }
                });
              });

              document.addEventListener('click', (e) => {
                if(activeCard && !e.target.closest('#hero-cards')) {
                  resetCards();
                }
              });

              function resetCards() {
                cards.forEach(c => {
                   c.style.transform = c.getAttribute('data-original-transform');
                   c.style.opacity = '';
                   c.style.filter = '';
                   c.style.zIndex = '';
                });
                activeCard = null;
              }
            })();
          
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
      

<div className="min-h-screen font-jakarta bg-neutral-50 w-full">

<header className="sticky z-50 bg-white/80 border-neutral-200 border-b top-0 backdrop-blur-md w-full">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-jakarta">

<div className="flex h-16 items-center justify-between gap-4">

<div className="flex shrink-0 items-center gap-2 cursor-pointer">
<div className="flex text-orange-600 font-jakarta bg-orange-50 w-8 h-8 border-orange-500 border rounded-lg items-center justify-center">
<svg className="lucide lucide-map-pin w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(234, 88, 12)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-xl font-bold text-orange-600 tracking-tight font-geist">umzugrasch</span>
</div>

<div className="hidden max-w-lg flex-1 md:block">
<div className="relative group">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="block w-full rounded-full border border-neutral-200 bg-neutral-50 py-2 pl-10 pr-12 text-sm font-medium placeholder-neutral-400 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Search destinations or activities" type="text"/>
<button className="absolute right-1 top-1 bottom-1 aspect-square rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors flex items-center justify-center">
<svg className="lucide lucide-search h-3 w-3" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
</div>

<div className="flex items-center gap-3 md:gap-6">
<div className="hidden items-center gap-4 lg:flex">
<button className="flex hover:text-neutral-900 text-sm font-semibold text-neutral-600 font-geist gap-x-1.5 gap-y-1.5 items-center" style={{}}>
<img alt="MY" className="h-3.5 w-5 object-cover rounded-sm shadow-sm" src="https://flagcdn.com/w20/my.png"/>
                Malaysia
                <svg className="lucide lucide-chevron-down h-3 w-3 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-1.5 text-sm font-semibold text-neutral-600 hover:text-neutral-900 font-geist" style={{}}>
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path className="" d="M2 12h20"></path></svg>
                English
                <svg className="lucide lucide-chevron-down h-3 w-3 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex gap-1.5 hover:text-neutral-900 text-sm font-semibold text-neutral-600 font-geist gap-x-1.5 gap-y-1.5 items-center" style={{}}>
                $ MR
                <svg className="lucide lucide-chevron-down h-3 w-3 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<a className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 flex items-center gap-1 font-geist" href="#" style={{}}>
<svg className="lucide lucide-help-circle h-4 w-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg> Help
              </a>
</div>
<button className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-geist" style={{}}>
              Log in
            </button>
<button className="lg:hidden text-neutral-600">
<svg className="lucide lucide-menu h-6 w-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden border-t border-neutral-100 py-3 lg:flex lg:items-center lg:justify-between relative">
<nav className="flex items-center gap-6">

<div className="group relative flex items-center">

<button className="flex items-center gap-2 text-sm font-semibold text-neutral-900 font-geist hover:text-orange-600 transition-colors py-2 cursor-pointer outline-none">
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg> 
                  Explore Destination
                </button>


<div className="absolute left-0 top-full pt-4 w-[850px] z-50 invisible opacity-0 transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
<div className="w-full rounded-2xl bg-white shadow-2xl ring-1 ring-neutral-200/80 overflow-hidden grid grid-cols-12">

<div className="col-span-3 bg-neutral-50 p-6 border-r border-neutral-100">
<h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4 font-geist">Regions</h4>
<ul className="space-y-1">
<li>
<a className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-semibold text-orange-600 bg-orange-50 font-jakarta" href="#">
                                        Asia <svg className="lucide lucide-chevron-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</li>
<li>
<a className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors font-jakarta" href="#">
                                        Europe
                                    </a>
</li>
<li>
<a className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors font-jakarta" href="#">
                                        North America
                                    </a>
</li>
<li>
<a className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors font-jakarta" href="#">
                                        Oceania
                                    </a>
</li>
<li>
<a className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors font-jakarta" href="#">
                                        Africa
                                    </a>
</li>
</ul>
<h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-6 mb-4 font-geist">Interests</h4>
<ul className="space-y-2">
<li><a className="text-sm font-medium text-neutral-600 hover:text-orange-600 flex items-center gap-2 font-geist" href="#"><svg className="lucide lucide-sun" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> Summer Sale</a></li>
<li><a className="text-sm font-medium text-neutral-600 hover:text-orange-600 flex items-center gap-2 font-geist" href="#"><svg className="lucide lucide-heart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> Honeymoon</a></li>
<li><a className="text-sm font-medium text-neutral-600 hover:text-orange-600 flex items-center gap-2 font-geist" href="#"><svg className="lucide lucide-users" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Family Trips</a></li>
</ul>
</div>

<div className="col-span-9 p-6">
<div className="flex items-center justify-between mb-4">
<h4 className="text-sm font-bold text-neutral-900 font-jakarta">Popular in Asia</h4>
<a className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center font-geist" href="#">View all <svg className="lucide lucide-arrow-right ml-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div className="grid grid-cols-3 gap-4">

<a className="group block space-y-2" href="#">
<div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
<img alt="Japan" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div>
<h5 className="text-sm font-bold text-neutral-900 font-jakarta group-hover:text-orange-600">Japan</h5>
<p className="text-xs text-neutral-500 font-geist">Tokyo, Kyoto, Osaka</p>
</div>
</a>

<a className="group block space-y-2" href="#">
<div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
<img alt="Korea" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h5 className="text-sm font-bold text-neutral-900 font-jakarta group-hover:text-orange-600">South Korea</h5>
<p className="text-xs text-neutral-500 font-geist">Seoul, Busan, Jeju</p>
</div>
</a>

<a className="group block space-y-2" href="#">
<div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
<img alt="Taiwan" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0d0694f-7895-4144-9034-a8e9e3fadc6b_320w.webp"/>
</div>
<div>
<h5 className="text-sm font-bold text-neutral-900 font-jakarta group-hover:text-orange-600">Taiwan</h5>
<p className="text-xs text-neutral-500 font-geist">Taipei, Jiufen</p>
</div>
</a>
</div>
<div className="mt-6 pt-6 border-t border-neutral-100 grid grid-cols-2 gap-6">
<div>
<h4 className="text-sm font-bold text-neutral-900 font-jakarta mb-3">Trending Cities</h4>
<ul className="space-y-2">
<li><a className="text-sm text-neutral-500 hover:text-orange-600 font-geist flex items-center justify-between group" href="#">Bangkok, Thailand <span className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-500">→</span></a></li>
<li><a className="text-sm text-neutral-500 hover:text-orange-600 font-geist flex items-center justify-between group" href="#">Bali, Indonesia <span className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-500">→</span></a></li>
<li><a className="text-sm text-neutral-500 hover:text-orange-600 font-geist flex items-center justify-between group" href="#">Singapore <span className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-500">→</span></a></li>
</ul>
</div>
<div className="bg-orange-50 rounded-xl p-4 flex items-start gap-4">
<div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
<svg className="lucide lucide-sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<div>
<h5 className="text-sm font-bold text-neutral-900 font-jakarta">Personalized Plan</h5>
<p className="text-xs text-neutral-500 mt-1 mb-2 font-geist">Get a custom itinerary built just for you by AI.</p>
<a className="text-xs font-bold text-orange-600 hover:text-orange-700 font-geist" href="#">Try it now →</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-4 w-px bg-neutral-200"></div>
<a className="hover:text-orange-600 text-sm font-medium text-neutral-600 font-geist" href="/home">Home</a>
<a className="hover:text-orange-600 text-sm font-medium text-neutral-600 font-geist" href="/about-us">About us</a>
<a className="hover:text-orange-600 text-sm font-medium text-neutral-600 font-geist" href="/service">Service</a>
<a className="hover:text-orange-600 text-sm font-medium text-neutral-600 font-geist" href="/fernumzuge">Fernumzuge</a>
<a className="text-sm font-medium text-neutral-600 hover:text-orange-600 font-geist" href="#" style={{}}>Car rentals</a>
<span className="text-neutral-400 font-geist" style={{}}>•••</span>
</nav>
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 hover:text-neutral-900 text-sm font-medium text-neutral-600 font-geist" href="#" style={{}}>
<svg className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg> Social Media
            </a>
<a className="flex items-center gap-1 hover:text-yellow-600 text-sm font-bold text-yellow-500 font-geist" href="#" style={{}}>
<div className="rounded-full bg-yellow-100 p-1">
<svg className="lucide lucide-coins h-3 w-3" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
              Spin
            </a>
</div>
</div>
</div>
</header>

<section className="relative w-full">

<div className="absolute inset-0 h-[500px] w-full overflow-hidden">
<img alt="Landscape" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="bg-gradient-to-b from-black/40 to-transparent absolute top-200 right-0 bottom-20 left-0 shadow-inner backdrop-blur-sm gap-y-16"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-50 to-transparent lg:top-[400px]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 opacity-80 pt-16 pb-20 relative">

<h1 className="sm:text-4xl lg:text-5xl text-3xl font-extrabold text-zinc-950 tracking-tight font-jakarta text-center" style={{}}>Your Dream Destinations</h1>

<div className="sm:p-8 ring-0 rounded-2xl mt-10 pt-4 pr-4 pb-4 pl-4">

<div className="relative mx-auto w-full max-w-4xl">

<div className="absolute -left-4 top-0 z-10 hidden animate-bounce lg:block">
<div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md ring-1 ring-white/20 transition-transform hover:scale-105 font-geist" style={{}}>
<span className="flex h-2 w-2 rounded-full bg-green-400"></span>
                Trending Now
              </div>
</div>
<div className="absolute -right-4 bottom-20 z-10 hidden animate-pulse lg:block">
<div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md ring-1 ring-white/20 transition-transform hover:scale-105 font-geist" style={{}}>
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
                Top Rated
              </div>
</div>

<div className="flex pt-4 pb-8 justify-center">
<div className="grid grid-cols-6 gap-2 sm:gap-4" id="hero-cards">

<div className="hero-card group relative col-span-2 cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-110 sm:col-span-1" data-original-transform="rotate(-10deg) translateY(20px)" style={{transform: 'rotate(-10deg) translateY(20px)'}}>
<div className="aspect-[3/4] w-24 overflow-hidden rounded-xl bg-neutral-800 shadow-lg ring-1 ring-white/20 transition-shadow duration-300 group-hover:shadow-orange-500/20 sm:w-28 lg:w-32">
<img alt="Japan" className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=400&amp;q=80"/>
<div className="bg-gradient-to-t from-black/60 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2183edc4-9df8-4b57-8cdf-94b0d6e4da87_320w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute bottom-2 left-2 text-[10px] font-bold text-white font-geist" style={{}}>Japan</span>
</div>
</div>

<div className="hero-card group relative col-span-2 cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-110 sm:col-span-1" data-original-transform="rotate(-5deg) translateY(10px)" style={{transform: 'rotate(-5deg) translateY(10px)'}}>
<div className="aspect-[3/4] w-24 overflow-hidden rounded-xl bg-neutral-800 shadow-lg ring-1 ring-white/20 transition-shadow duration-300 group-hover:shadow-orange-500/20 sm:w-28 lg:w-32">
<img alt="Korea" className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t from-black/60 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b041ac3-f737-4a55-8044-7a84ae96f81b_320w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute bottom-2 left-2 text-[10px] font-bold text-white font-geist" style={{}}>Korea</span>
</div>
</div>

<div className="hero-card group relative col-span-2 cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-110 sm:col-span-1" data-original-transform="rotate(0deg) translateY(0px)" style={{transform: 'rotate(0deg) translateY(0px)'}}>
<div className="aspect-[3/4] w-24 overflow-hidden rounded-xl bg-neutral-800 shadow-lg ring-1 ring-white/20 transition-shadow duration-300 group-hover:shadow-orange-500/20 sm:w-28 lg:w-32">
<img alt="Taiwan" className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t from-black/60 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0d0694f-7895-4144-9034-a8e9e3fadc6b_320w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute bottom-2 left-2 text-[10px] font-bold text-white font-geist" style={{}}>Taiwan</span>
</div>
</div>

<div className="hero-card group relative col-span-2 cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-110 sm:col-span-1" data-original-transform="rotate(5deg) translateY(10px)" style={{transform: 'rotate(5deg) translateY(10px)'}}>
<div className="aspect-[3/4] w-24 overflow-hidden rounded-xl bg-neutral-800 shadow-lg ring-1 ring-white/20 transition-shadow duration-300 group-hover:shadow-orange-500/20 sm:w-28 lg:w-32">
<img alt="Swiss" className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&amp;q=80"/>
<div className="bg-gradient-to-t from-black/60 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6352abc-7eb1-4adc-858b-e7162b273559_320w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute bottom-2 left-2 text-[10px] font-bold text-white font-geist" style={{}}>Swiss</span>
</div>
</div>

<div className="hero-card group relative col-span-2 cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-110 sm:col-span-1" data-original-transform="rotate(10deg) translateY(20px)" style={{transform: 'rotate(10deg) translateY(20px)'}}>
<div className="aspect-[3/4] w-24 overflow-hidden rounded-xl bg-neutral-800 shadow-lg ring-1 ring-white/20 transition-shadow duration-300 group-hover:shadow-orange-500/20 sm:w-28 lg:w-32">
<img alt="Beach" className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&amp;q=80"/>
<div className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute bottom-2 left-2 text-[10px] font-bold text-white font-geist" style={{}}>Beach</span>
</div>
</div>

<div className="hero-card group relative hidden cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-110 sm:block sm:col-span-1" data-original-transform="rotate(15deg) translateY(30px)" style={{transform: 'rotate(15deg) translateY(30px)'}}>
<div className="aspect-[3/4] w-24 overflow-hidden rounded-xl bg-neutral-800 shadow-lg ring-1 ring-white/20 transition-shadow duration-300 group-hover:shadow-orange-500/20 sm:w-28 lg:w-32">
<img alt="Camping" className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-2 left-2 text-[10px] font-bold text-white font-geist" style={{}}>Camping</span>
</div>
</div>
</div>
</div>

<div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
<button className="group flex transition-all hover:scale-105 hover:bg-orange-600 sm:w-auto text-sm font-bold text-white font-geist bg-orange-500 w-full h-12 rounded-full pr-8 pl-8 shadow-lg gap-x-2 gap-y-2 items-center justify-center">
<svg className="lucide lucide-compass" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon className="" points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                Explore All Trips
              </button>
<button className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white/10 px-8 text-sm font-bold text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto font-geist" style={{}}>
<svg className="lucide lucide-search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                Quick Search
              </button>
</div>
</div>

</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="relative">

<button className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg ring-1 ring-neutral-200 transition-transform hover:scale-110 md:-left-6">
<svg className="lucide lucide-chevron-left h-5 w-5 text-neutral-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>

<button className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg ring-1 ring-neutral-200 transition-transform hover:scale-110 md:-right-6">
<svg className="lucide lucide-chevron-right h-5 w-5 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="overflow-hidden transition-transform hover:-translate-y-1 text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-lg">
<div className="relative z-10">
<span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm font-geist" style={{}}>Enjoy 15% Off</span>
<h3 className="leading-tight text-lg font-bold font-geist mt-3" style={{}}>Your long-awaited<br/>Japan trip!</h3>
<div className="flex gap-2 text-xs font-semibold font-geist mt-4 gap-x-2 gap-y-2 items-center" style={{}}>
<div className="h-1.5 w-1.5 rounded-full bg-white"></div> oppa travel
              </div>
</div>

<div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
<img alt="Japan" className="opacity-80 mix-blend-overlay w-28 object-cover rounded-full absolute right-0 bottom-0 translate-y-2" src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>

<div className="overflow-hidden transition-transform hover:-translate-y-1 text-white bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-lg">
<div className="relative z-10">
<span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm font-geist" style={{}}>Enjoy 15% Off</span>
<h3 className="mt-3 text-lg font-bold leading-tight font-geist" style={{}}>Your long-awaited<br/>Taiwan trip!</h3>
<div className="mt-4 flex items-center gap-2 text-xs font-semibold font-geist" style={{}}>
<div className="h-1.5 w-1.5 rounded-full bg-white"></div> oppa travel
              </div>
</div>
<div className="-bottom-8 -right-8 bg-white/10 w-32 h-32 rounded-full absolute blur-2xl"></div>
<img alt="Taiwan" className="opacity-80 mix-blend-overlay w-28 object-cover absolute right-0 bottom-0 translate-y-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e777e7d-0731-4d3f-90b4-63c9538e252e_320w.jpg"/>
</div>

<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-400 p-6 text-white shadow-lg transition-transform hover:-translate-y-1">
<div className="relative z-10">
<span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm font-geist" style={{}}>Code: KOREA50</span>
<h3 className="mt-3 text-lg font-bold leading-tight font-geist" style={{}}>Celebrate with a<br/>trip to Korea!</h3>
<div className="mt-4 flex items-center gap-2 text-xs font-semibold font-geist" style={{}}>
<div className="h-1.5 w-1.5 rounded-full bg-white"></div> oppa travel
              </div>
</div>
<div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
<img alt="Korea" className="absolute bottom-0 right-0 w-28 translate-y-2 object-cover opacity-80 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
<div className="mb-6">
<h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight font-jakarta" style={{}}>Malaysia City</h2>
</div>
<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

<a className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200" href="#">
<img alt="KL" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 text-white">
<p className="text-sm font-bold font-geist" style={{}}>Kuala Lumpur</p>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200" href="#">
<img alt="Mulu" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 text-white">
<p className="text-sm font-bold font-geist" style={{}}>Gunung Mulu</p>
<p className="text-[10px] opacity-80 font-geist" style={{}}>National Park</p>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200" href="#">
<img alt="KL" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="bg-center bg-gradient-to-t from-black/70 via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb8a409d-270b-40f1-ae60-e6362d18e283_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-3 left-3 text-white">
<p className="text-sm font-bold font-geist" style={{}}>Penang</p>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200" href="#">
<img alt="KL" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="bg-center bg-gradient-to-t from-black/70 via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf850ed5-1cc0-4fb1-b521-0a9f1208225a_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-3 left-3 text-white">
<p className="text-sm font-bold font-geist" style={{}}>Malacca</p>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200" href="#">
<img alt="KL" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/70 via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0cc2b0d-84e6-46ef-bcb0-ef054af6fa95_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-3 left-3 text-white">
<p className="text-sm font-bold font-geist" style={{}}>Langkawi</p>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200" href="#">
<img alt="KL" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/70 via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb8a409d-270b-40f1-ae60-e6362d18e283_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-3 left-3 text-white">
<p className="text-sm font-bold font-geist" style={{}}>Johor Bahru</p>
</div>
</a>
</div>
</section>

<section className="overflow-hidden bg-neutral-50 pt-1 pb-16">
<div className="mx-auto max-w-7xl bg-neutral-50 px-4 sm:px-6 lg:px-8">

<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-neutral-900 tracking-tight font-jakarta" style={{}}>Related services</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="overflow-hidden transition-transform hover:-translate-y-1 text-white bg-gradient-to-tr from-[#000000] to-[#383838] rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-lg">
<div className="relative z-10 flex flex-col h-full">
<div className="">
<span className="inline-block text-[10px] uppercase font-bold tracking-wider font-geist bg-[conic-gradient(from_60deg,var(--tw-gradient-stops))] from-orange-400 via-orange-600 to-orange-400 rounded-full px-3 py-1 backdrop-blur-sm" style={{}}>Enjoy 15% Off</span>
<h3 className="leading-tight text-lg font-bold font-geist mt-3" style={{}}>Your long-awaited Japan trip!</h3>
<p className="mt-3 text-sm text-slate-100/90 font-medium font-geist leading-relaxed" style={{}}>Experience the cherry blossoms and vibrant culture of Tokyo.</p>
</div>
<div className="text-center mt-6" style={{maskImage: 'linear-gradient(140deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="flex gap-2 text-xs font-semibold font-geist mb-4 gap-x-2 gap-y-2 items-center opacity-90" style={{}}>
<div className="h-1.5 w-1.5 rounded-full bg-white"></div> oppa travel
                </div>
<button className="group uppercase transition-all hover:bg-slate-50 hover:text-slate-900 flex gap-2 text-xs font-bold text-stone-50 tracking-wider font-geist w-full rounded-lg pt-2.5 pb-2.5 shadow-sm blur-none hue-rotate-0 brightness-50 scale-100 gap-x-2 gap-y-2 items-center justify-center">
                    Book Now
                    <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
<img alt="Japan" className="opacity-60 mix-blend-overlay w-28 object-cover rounded-full absolute right-0 bottom-0 translate-y-2 pointer-events-none" src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>

<div className="overflow-hidden transition-transform hover:-translate-y-1 text-white bg-gradient-to-tr from-[#000000] to-[#383838] rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-lg">
<div className="relative z-10 flex flex-col h-full">
<div className="">
<span className="inline-block text-[10px] uppercase font-bold tracking-wider font-geist bg-[conic-gradient(from_60deg,var(--tw-gradient-stops))] from-yellow-400 via-yellow-600 to-yellow-400 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm" style={{}}>Enjoy 15% Off</span>
<h3 className="leading-tight text-lg font-bold font-geist mt-3" style={{}}>Your long-awaited Japan trip!</h3>
<p className="mt-3 text-sm text-slate-100/90 font-medium font-geist leading-relaxed" style={{}}>Experience the cherry blossoms and vibrant culture of Tokyo.</p>
</div>
<div className="text-center mt-6" style={{maskImage: 'linear-gradient(140deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="flex gap-2 text-xs font-semibold font-geist mb-4 gap-x-2 gap-y-2 items-center opacity-90" style={{}}>
<div className="h-1.5 w-1.5 rounded-full bg-white"></div> oppa travel
                </div>
<button className="group uppercase transition-all hover:bg-slate-50 hover:text-slate-900 flex gap-2 text-xs font-bold text-stone-50 tracking-wider font-geist w-full rounded-lg pt-2.5 pb-2.5 shadow-sm blur-none hue-rotate-0 brightness-50 scale-100 gap-x-2 gap-y-2 items-center justify-center">
                    Book Now
                    <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
<img alt="Japan" className="opacity-60 mix-blend-overlay w-28 object-cover rounded-full absolute right-0 bottom-0 translate-y-2 pointer-events-none" src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>

<div className="overflow-hidden transition-transform hover:-translate-y-1 text-white bg-gradient-to-tr from-[#000000] to-[#383838] rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-lg">
<div className="relative z-10 flex flex-col h-full">
<div className="">
<span className="inline-block text-[10px] uppercase font-bold tracking-wider font-geist bg-[conic-gradient(from_60deg,var(--tw-gradient-stops))] from-cyan-400 via-cyan-600 to-cyan-400 rounded-full px-3 py-1 backdrop-blur-sm" style={{}}>Enjoy 15% Off</span>
<h3 className="leading-tight text-lg font-bold font-geist mt-3" style={{}}>Your long-awaited Japan trip!</h3>
<p className="mt-3 text-sm text-slate-100/90 font-medium font-geist leading-relaxed" style={{}}>Experience the cherry blossoms and vibrant culture of Tokyo.</p>
</div>
<div className="text-center mt-6" style={{maskImage: 'linear-gradient(140deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="flex gap-2 text-xs font-semibold font-geist mb-4 gap-x-2 gap-y-2 items-center opacity-90" style={{}}>
<div className="h-1.5 w-1.5 rounded-full bg-white"></div> oppa travel
                </div>
<button className="group uppercase transition-all hover:bg-slate-50 hover:text-slate-900 flex gap-2 text-xs font-bold text-stone-50 tracking-wider font-geist w-full rounded-lg pt-2.5 pb-2.5 shadow-sm blur-none hue-rotate-0 brightness-50 scale-100 gap-x-2 gap-y-2 items-center justify-center">
                    Book Now
                    <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
<img alt="Japan" className="opacity-60 mix-blend-overlay w-28 object-cover rounded-full absolute right-0 bottom-0 translate-y-2 pointer-events-none" src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 pb-24">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 space-y-8">

<div className="bg-neutral-100 rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden border border-neutral-100/50">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 font-jakarta leading-tight">Bookings &amp; trips management.</h2>
<p className="leading-relaxed text-lg text-neutral-500 font-geist mt-8 mb-8">Take control of your journeys with a secure platform that lets you track, manage, optimize, and consolidate all your flights, hotels, and activities in one place, effortlessly.</p>
<button className="group flex transition-all hover:scale-105 hover:bg-orange-600 sm:w-auto text-sm font-bold text-white font-geist bg-orange-500 w-full h-12 rounded-full pr-8 pl-8 shadow-lg gap-x-2 gap-y-2 items-center justify-center">
<svg className="lucide lucide-compass" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon className="" points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                Explore All Trips
              </button>
</div>

<div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
<div className="relative w-[280px] h-[400px] bg-white rounded-[2.5rem] border-8 border-white shadow-2xl overflow-hidden flex flex-col p-5">

<div className="flex justify-between items-center mb-6">
<div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
<div className="w-3 h-0.5 bg-neutral-400 rounded-full box-content border-y-2 border-transparent h-px"></div>
</div>
<div className="w-8 h-8 rounded-full bg-orange-100 overflow-hidden border border-orange-200">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>

<div className="text-center">
<div className="text-[10px] uppercase tracking-wider font-bold text-neutral-400 font-geist">Total Points</div>
<div className="text-3xl font-bold text-neutral-900 font-jakarta mt-1">24,581<span className="text-sm text-neutral-400 font-normal">.00</span></div>
</div>

<div className="mt-6 w-full h-32 rounded-2xl bg-gradient-to-br from-orange-200 via-orange-100 to-white relative p-4 overflow-hidden border border-orange-100">
<div className="absolute top-0 right-0 w-20 h-20 bg-white/40 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="flex justify-between items-end h-full relative z-10">
<div className="text-neutral-900 font-bold text-lg font-jakarta">$5,658</div>
<div className="text-[10px] text-neutral-500 font-geist font-medium">*9432</div>
</div>
</div>

<div className="mt-6 flex flex-col gap-3">
<div className="flex justify-between items-center text-xs font-geist font-medium text-neutral-500">
<span className="">Recent Activity</span>
<div className="flex gap-1">
<div className="w-1 h-1 rounded-full bg-neutral-300"></div>
<div className="w-1 h-1 rounded-full bg-neutral-300"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-100 rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden border border-neutral-100/50">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 font-jakarta leading-tight">Real-time travel insights.</h2>
<p className="leading-relaxed text-lg text-neutral-500 font-geist mt-8 mb-8">Easily monitor your trip status with clear, interactive visuals that break down your travel habits, loyalty points, upcoming gates, and boarding times.</p>
<button className="group flex transition-all hover:scale-105 hover:bg-orange-600 sm:w-auto text-sm font-bold text-white font-geist bg-orange-500 w-full h-12 rounded-full pr-8 pl-8 shadow-lg gap-x-2 gap-y-2 items-center justify-center">
<svg className="lucide lucide-compass" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon className="" points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                Explore All Trips
              </button>
</div>

<div className="relative flex flex-col items-center lg:items-end gap-4 py-8">

<div className="w-full max-w-xs bg-white p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center justify-between transform transition-transform hover:-translate-y-1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
<svg className="lucide lucide-plane" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h5"></path><path d="M13 12h9"></path><path d="m7.85 7.15 4.3 4.3"></path><path d="m11.85 21.15 4.3-4.3"></path><path d="m16.15 2.85-4.3 4.3"></path><path d="m16.15 21.15-4.3-4.3"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<div className="text-sm font-bold text-neutral-900 font-jakarta">Tokyo Flight</div>
<div className="text-xs text-neutral-500 font-geist">Malaysia Airlines</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-neutral-900 font-geist">On Time</div>
<div className="text-[10px] text-green-500 font-bold uppercase">Gate A4</div>
</div>
</div>

<div className="w-full max-w-xs bg-white p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center justify-between ml-0 lg:ml-12 transform transition-transform hover:-translate-y-1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
<svg className="lucide lucide-hotel" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 22v-6.57"></path><path d="M12 11h.01"></path><path d="M12 7h.01"></path><path d="M14 15.43V22"></path><path d="M15 16a5 5 0 0 0-6 0"></path><path d="M16 11h.01"></path><path d="M16 7h.01"></path><path d="M8 11h.01"></path><path d="M8 7h.01"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</div>
<div className="">
<div className="text-sm font-bold text-neutral-900 font-jakarta">Hotel Check-in</div>
<div className="text-xs text-neutral-500 font-geist">Hilton Osaka</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-neutral-900 font-geist">Confirmed</div>
<div className="text-[10px] text-neutral-400 font-bold uppercase">2:00 PM</div>
</div>
</div>

<div className="w-full max-w-xs bg-white p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center justify-between transform transition-transform hover:-translate-y-1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600">
<svg className="lucide lucide-ticket" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-neutral-900 font-jakarta">Theme Park</div>
<div className="text-xs text-neutral-500 font-geist">DisneySea</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-neutral-900 font-geist">$128.91</div>
<div className="text-[10px] text-neutral-400 font-bold uppercase">Paid</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:p-12 lg:p-16 overflow-hidden bg-neutral-100 border-neutral-100/50 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="order-2 lg:order-1">
<h2 className="md:text-4xl leading-tight text-3xl font-bold text-neutral-900 tracking-tight font-jakarta" style={{}}>Personal travel goal planner.</h2>
<p className="leading-relaxed text-lg text-neutral-500 font-geist mt-8 mb-8">Set travel goals, whether it's saving for a vacation, building an emergency itinerary, or planning for a major tour. Track your progress with detailed reports.</p>
<button className="group flex transition-all hover:scale-105 hover:bg-orange-600 sm:w-auto text-sm font-bold text-white font-geist bg-orange-500 w-full h-12 rounded-full pr-8 pl-8 shadow-lg gap-x-1 gap-y-2 items-center justify-center">
<svg className="lucide lucide-compass" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon className="" points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                Explore All Trips
              </button>
</div>

<div className="order-1 lg:order-2 relative h-[300px] flex items-center justify-center lg:justify-end">

<div className="absolute bottom-0 right-0 lg:right-10 w-64 h-48 bg-gradient-to-br from-orange-200 to-neutral-200 rounded-3xl opacity-50 blur-sm"></div>
<div className="absolute bottom-4 right-4 lg:right-14 w-64 h-40 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
<div className="absolute bottom-4 left-6 text-2xl font-bold text-neutral-900 font-jakarta">$4 432<span className="text-lg text-neutral-400">.00</span></div>
<div className="absolute bottom-5 right-6 text-xs text-neutral-500 font-geist font-medium">*9432</div>
</div>

<div className="absolute top-10 right-4 lg:right-14 w-60 bg-white p-4 rounded-xl shadow-xl flex items-center justify-between z-10 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
<svg className="lucide lucide-trophy" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
</div>
<div className="text-sm font-bold text-neutral-900 font-jakarta">Study stash</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-neutral-900 font-geist">+$420</div>
<div className="text-[10px] text-neutral-400">43% left</div>
</div>
</div>

<div className="absolute top-32 right-12 lg:right-24 w-64 bg-white p-4 rounded-xl shadow-xl flex items-center justify-between z-20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
<svg className="lucide lucide-coins" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<div className="text-sm font-bold text-neutral-900 font-jakarta">Wander wallet</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-neutral-900 font-geist">+$1200</div>
<div className="text-[10px] text-neutral-400">24% left</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 border-neutral-100 border-t pt-20 pb-20">
<div className="sm:px-6 lg:pt-9 lg:pb-9 lg:pr-9 lg:pl-9 bg-orange-100 max-w-7xl border-0 rounded-2xl ring-0 mr-auto ml-auto pt-9 pr-4 pb-9 pl-4">

<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-orange-600 font-bold tracking-wider uppercase text-xs font-geist">Easy Process</span>
<h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 font-jakarta">Plan your trip in 3 simple steps</h2>
<p className="mt-4 text-neutral-500 font-geist">Our booking process is designed to be simple and intuitive. Get on your way in minutes.</p>
</div>

<div className="relative grid gap-8 md:grid-cols-3">

<div className="absolute top-12 left-1/3 w-1/3 border-t-2 border-dashed border-neutral-200 hidden md:block" style={{transform: 'translateX(-50%)'}}></div>
<div className="absolute top-12 left-2/3 w-1/3 border-t-2 border-dashed border-neutral-200 hidden md:block" style={{transform: 'translateX(-50%)'}}></div>

<div className="group flex flex-col text-center relative items-center">
<div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-white border border-neutral-100 shadow-xl shadow-neutral-200/50 mb-6 transition-transform duration-300 group-hover:-translate-y-2">
<div className="h-12 w-12 text-orange-600 bg-orange-50 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-map-search w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path><circle className="" cx="12" cy="11.5" r="3"></circle><path d="m14 13.5 2 2"></path></svg>
</div>
<div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm font-geist ring-4 ring-white">1</div>
</div>
<h3 className="text-xl font-bold text-neutral-900 font-jakarta">Search Destination</h3>
<p className="mt-2 text-sm text-neutral-500 font-geist leading-relaxed max-w-xs">Browse through thousands of destinations and find the perfect spot for your next adventure.</p>
</div>

<div className="group flex flex-col text-center relative items-center">
<div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-white border border-neutral-100 shadow-xl shadow-neutral-200/50 mb-6 transition-transform duration-300 group-hover:-translate-y-2">
<div className="h-12 w-12 text-orange-600 bg-orange-50 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-credit-card w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm font-geist ring-4 ring-white">2</div>
</div>
<h3 className="text-xl font-bold text-neutral-900 font-jakarta">Book &amp; Pay</h3>
<p className="mt-2 text-sm text-neutral-500 font-geist leading-relaxed max-w-xs">Secure your tickets instantly with our safe payment methods. No hidden fees.</p>
</div>

<div className="group flex flex-col text-center relative items-center">
<div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-white border border-neutral-100 shadow-xl shadow-neutral-200/50 mb-6 transition-transform duration-300 group-hover:-translate-y-2">
<div className="h-12 w-12 text-orange-600 bg-orange-50 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-briefcase w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm font-geist ring-4 ring-white">3</div>
</div>
<h3 className="text-xl font-bold text-neutral-900 font-jakarta">Pack &amp; Go</h3>
<p className="mt-2 text-sm text-neutral-500 font-geist leading-relaxed max-w-xs">Receive your confirmation immediately and get ready to create unforgettable memories.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl mt-8 pb-8 px-4 sm:px-6 lg:px-8">
<div className="overflow-hidden sm:px-12 lg:px-16 text-center bg-neutral-900 rounded-3xl pt-12 pr-6 pb-12 pl-6 relative shadow-2xl">

<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform">
<div className="h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"></div>
</div>
<div className="relative z-10 mx-auto max-w-2xl">
<h2 className="text-3xl tracking-tight text-white sm:text-4xl font-jakarta font-medium" style={{}}>Ready to start your adventure?</h2>
<p className="mx-auto mt-4 text-lg text-neutral-400 font-geist" style={{}}>Join thousands of travelers who have found their perfect trip with Oppa Travel.</p>
<div className="mt-8 flex items-center justify-center gap-4">
<button className="rounded-xl bg-orange-500 px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-orange-600 font-geist" style={{}}>
              Book Now
            </button>
<button className="rounded-xl bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 font-geist" style={{}}>
              Contact Sales
            </button>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 pt-8 pb-16 w-full">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight font-jakarta mb-8" style={{}}>Traveler's Gallery</h2>
</div>
<div className="relative w-full overflow-hidden py-4">
<style>
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: scroll 40s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
    </style>

<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>

<div className="flex w-max animate-marquee gap-4 items-center pl-4">

<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 1" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Bali, Indonesia</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 2" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95719f33-05ac-4a57-b882-0015d0b8af8b_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Kyoto, Japan</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 3" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Krabi, Thailand</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 4" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0d0694f-7895-4144-9034-a8e9e3fadc6b_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Taipei, Taiwan</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 5" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Santorini, Greece</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 6" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Maui, Hawaii</span>
</div>

<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 7" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Reykjavik, Iceland</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 8" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Dolomites, Italy</span>
</div>

<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 1" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Bali, Indonesia</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 2" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95719f33-05ac-4a57-b882-0015d0b8af8b_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Kyoto, Japan</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 3" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Krabi, Thailand</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 4" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0d0694f-7895-4144-9034-a8e9e3fadc6b_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Taipei, Taiwan</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 5" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Santorini, Greece</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 6" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Maui, Hawaii</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 7" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Reykjavik, Iceland</span>
</div>
<div className="relative w-64 h-80 shrink-0 overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Travel 8" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-jakarta" style={{}}>Dolomites, Italy</span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="flex text-orange-600 font-jakarta bg-orange-50 w-8 h-8 border-orange-500 border rounded-lg items-center justify-center">
<svg className="lucide lucide-map-pin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-xl font-bold text-orange-600 tracking-tight font-geist">umzugrasch</span>
</div>
<p className="text-sm text-neutral-500 font-geist leading-relaxed">
              Your trusted companion for discovering the world's most breathtaking destinations. We make travel simple, affordable, and unforgettable.
            </p>
<div className="flex gap-4">
<a className="text-neutral-400 transition-colors hover:text-orange-500" href="#">
<span className="sr-only">Facebook</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</a>
<a className="text-neutral-400 transition-colors hover:text-orange-500" href="#">
<span className="sr-only">Twitter</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a>
<a className="text-neutral-400 transition-colors hover:text-orange-500" href="#">
<span className="sr-only">Instagram</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.99c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3.882.344 1.857.048 1.022.058 1.351.058 3.807h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807V11.6c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.466-.399-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-.344-1.857-.048-1.022-.058-1.351-.058-3.807zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-bold text-neutral-900 font-jakarta uppercase tracking-wider">Company</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-orange-600 font-geist" href="#">About Us</a></li>
<li><a className="text-sm text-neutral-500 hover:text-orange-600 font-geist" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-500 hover:text-orange-600 font-geist" href="#">Press</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-bold text-neutral-900 font-jakarta uppercase tracking-wider">Support</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-orange-600 font-geist" href="#">Help Center</a></li>
<li><a className="text-sm text-neutral-500 hover:text-orange-600 font-geist" href="#">Terms of Service</a></li>
<li><a className="text-sm text-neutral-500 hover:text-orange-600 font-geist" href="#">Legal</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-bold text-neutral-900 font-jakarta uppercase tracking-wider">Stay Updated</h3>
<p className="mt-4 text-sm text-neutral-500 font-geist mb-4">Subscribe to our newsletter for the latest travel deals and inspiration.</p>
<form className="space-y-2">
<div className="flex gap-2">
<input className="min-w-0 flex-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 font-geist" placeholder="Enter your email" type="email"/>
<button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-geist" type="submit">Join</button>
</div>
</form>
</div>
</div>
<div className="mt-12 border-t border-neutral-100 pt-8">
<p className="text-center text-xs text-neutral-400 font-geist">© 2024 Oppa Travel. All rights reserved.</p>
</div>
</div>
</footer>
</div> 

    </>
  );
}
