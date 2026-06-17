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
      

<div className="relative w-full max-w-[1600px] bg-white rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white flex flex-col">

<div className="relative w-full h-[95vh] bg-blue-900 overflow-hidden shrink-0">

<div className="absolute inset-0">
<img alt="Padel Court" className="w-full h-full object-cover object-center opacity-90" src="https://images.unsplash.com/photo-1646649851800-48dba35edc76?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-black/40 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 py-6 flex justify-between items-start">

<div className="hidden lg:flex items-center gap-3">
<a className="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition text-sm font-medium tracking-wide glass-panel font-geist" href="#">Courts</a>
<a className="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition text-sm font-medium tracking-wide glass-panel font-geist" href="#">Academy</a>
<a className="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition text-sm font-medium tracking-wide glass-panel font-geist" href="#">Leagues</a>
</div>

<button className="lg:hidden p-3 rounded-full glass-panel text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-12 py-5 rounded-b-[2.5rem] shadow-lg flex flex-col items-center justify-center z-50">
<div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center mb-1">
<span className="text-xs font-bold leading-none font-geist">V</span>
</div>
<span className="text-black font-semibold tracking-tight text-sm font-geist">Velocity Padel</span>
</div>

<div className="flex items-center gap-3">

<a className="flex items-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-gray-900 transition font-geist" href="#">
                        Book Court
                        <span className="bg-white text-black p-1.5 rounded-full">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</span>
</a>

<button className="hidden md:flex items-center justify-center w-11 h-11 rounded-full glass-panel text-white hover:bg-white/20 transition ml-2">
<svg className="lucide lucide-align-right w-5 h-5" data-lucide="align-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 5H3"></path><path d="M21 12H9"></path><path d="M21 19H7"></path></svg>
</button>
</div>
</nav>

<div className="relative w-full h-full pt-32 pb-12 px-8 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 pointer-events-none">

<div className="col-span-12 md:col-span-4 flex flex-col pointer-events-auto h-full justify-between">
<div className="mt-8 space-y-6">
<div className="flex -space-x-3">
<img alt="Player" className="w-12 h-12 rounded-full border-2 border-white/50 object-cover" src="https://images.unsplash.com/photo-1658491830143-72808ca237e3?w=320&amp;q=80"/>
<img alt="Player" className="w-12 h-12 rounded-full border-2 border-white/50 object-cover" src="https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?w=320&amp;q=80" style={{}}/>
<img alt="Player" className="w-12 h-12 rounded-full border-2 border-white/50 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
</div>
<p className="text-white text-lg font-normal leading-relaxed max-w-xs drop-shadow-md font-geist">
                            Join the fastest growing community. Find your partner, book a court, and play.
                        </p>
</div>
<div className="mt-auto pb-4 md:pb-10">
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight font-jakarta mb-4 drop-shadow-lg">
                            Serve, Smash, and Socialize.
                        </h1>
<p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed font-geist">
                            Experience the game on our WPT-standard panoramic courts. Where elite performance meets social connection.
                        </p>
</div>
</div>

<div className="hidden md:block md:col-span-5"></div>

<div className="col-span-12 md:col-span-3 flex flex-col items-end pointer-events-auto h-full relative">
<div className="flex flex-col gap-3 mt-8 items-end">
<a className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition shadow-lg font-geist" href="#">Instagram</a>
<a className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition shadow-lg font-geist" href="#">Live Stream</a>
</div>
<div className="mt-auto flex flex-col items-end gap-6 w-full pb-4 md:pb-10">
<div className="glass-panel p-6 rounded-3xl w-full max-w-xs shadow-xl">
<h3 className="text-white text-2xl tracking-tight mb-1 font-jakarta font-medium">Find a partner</h3>
<p className="text-white/70 text-sm mb-6 font-geist">Connect with players at your level.</p>
<div className="flex items-center justify-between">
<button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition font-geist">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                    Matchmake
                                </button>
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white border border-white/20">
<span className="text-xs font-bold">4.5</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="bg-white w-full px-8 md:px-16 py-20 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

<div className="flex flex-col justify-between h-full min-h-[400px]">
<div>
<span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 text-xs font-medium text-blue-600 font-geist tracking-wide">
                            Padel Center
                        </span>
<h2 className="mt-8 text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-black font-jakarta">
                            Welcome to Velocity, the home of Padel.
                        </h2>
</div>
<button className="mt-12 w-fit bg-black text-white pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-blue-800 transition-colors font-geist flex items-center gap-3 group">
                        View our story
                        <span className="bg-white text-black p-1.5 rounded-full transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</button>
</div>

<div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-[2.5rem] overflow-hidden group">
<img alt="Outdoor Padel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1672223304549-9e52be1232b6?w=1600&amp;q=80" style={{}}/>
<div className="absolute top-8 left-8">
<span className="inline-block px-4 py-1.5 rounded-full border border-white/40 text-xs font-medium text-white backdrop-blur-sm bg-white/10 font-geist">
                            Outdoor Courts
                        </span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
<p className="text-white text-xl lg:text-2xl font-normal leading-tight max-w-[70%] font-jakarta tracking-tight">
                            Panoramic glass courts under the open sky
                        </p>
<button className="bg-black text-white p-4 rounded-full hover:bg-blue-900 transition-colors shadow-lg">
<svg className="lucide lucide-arrow-up-right w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>

<div className="flex flex-col h-full justify-between gap-8">
<div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden group">
<img alt="Indoor Action" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1657704358775-ed705c7388d2?w=1600&amp;q=80" style={{}}/>
<div className="absolute top-8 left-8">
<span className="inline-block px-4 py-1.5 rounded-full border border-white/40 text-xs font-medium text-white backdrop-blur-sm bg-white/10 font-geist">
                                Indoor Arena
                            </span>
</div>
<div className="absolute bottom-8 left-8">
<p className="text-white text-lg font-normal font-jakarta tracking-tight">
                                Climate controlled
                            </p>
</div>
</div>
<div className="mt-auto">
<p className="text-blue-600 text-lg lg:text-xl font-normal leading-relaxed font-geist mb-8 max-w-sm">
                            Master the 'Bandeja' on our premium Mondo Supercourt turf. The same surface used by the pros.
                        </p>
<div className="flex items-center gap-4">
<button className="w-14 h-14 rounded-full border border-blue-300 flex items-center justify-center hover:bg-blue-50 transition-colors group">
<svg className="lucide lucide-arrow-left w-6 h-6 text-black group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-14 h-14 rounded-full bg-black flex items-center justify-center hover:bg-blue-800 transition-colors group shadow-lg">
<svg className="lucide lucide-arrow-right w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 w-full px-8 md:px-16 py-20 lg:py-28 text-white">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-3xl">
<h2 className="text-4xl lg:text-6xl font-medium tracking-tight font-jakarta leading-[1.1] mb-6">
                        More than just a court. <span className="text-zinc-500">A lifestyle destination.</span>
</h2>
<p className="text-zinc-400 text-lg font-light max-w-xl font-geist">
                        From our pro shop to the recovery zone, we provide everything you need to elevate your game.
                    </p>
</div>
<a className="group flex items-center gap-2 text-sm font-medium border-b border-white/20 pb-1 hover:border-white transition font-geist shrink-0" href="#">
                    View facilities
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative bg-zinc-900 rounded-[2.5rem] overflow-hidden p-8 lg:p-12 group border border-white/5 transition-all hover:border-white/10 h-[500px] md:h-auto">
<img alt="Clubhouse Lounge" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1709587825152-d4ce1b2224a3?w=2560&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-12 glass-panel-dark rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-coffee w-6 h-6" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-1"></path><path d="M6 2v2"></path></svg>
</div>
<span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-medium backdrop-blur-md border border-white/10">The Social Hub</span>
</div>
<div>
<h3 className="text-3xl font-medium font-jakarta tracking-tight mb-2">The Clubhouse</h3>
<p className="text-white/60 font-geist text-sm max-w-sm">Relax after your match with organic juices, specialty coffee, and a view of Center Court.</p>
</div>
</div>
</div>

<div className="md:col-span-1 relative bg-zinc-900 rounded-[2.5rem] overflow-hidden p-8 group border border-white/5 transition-all hover:border-white/10 h-[350px] md:h-auto">
<img alt="Padel Rackets" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1709587823534-11c11a163c07?w=1600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-10 h-10 glass-panel-dark rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium font-jakarta tracking-tight mb-1">Pro Shop</h3>
<p className="text-white/60 font-geist text-xs">Premium rackets from Bullpadel &amp; Babolat.</p>
</div>
</div>
</div>

<div className="md:col-span-1 relative bg-zinc-900 rounded-[2.5rem] overflow-hidden p-8 group border border-white/5 transition-all hover:border-white/10 h-[350px] md:h-auto">
<img alt="Sauna" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1661881545067-b15c94c6b7cd?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-10 h-10 glass-panel-dark rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-droplet w-5 h-5" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-2-3-2-3-1-3-3-8-5-12-2 4-4 9-5 12 0 0 0-2 3 7 7 0 0 0 7 7z"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium font-jakarta tracking-tight mb-1">Recovery Suite</h3>
<p className="text-white/60 font-geist text-xs">Sauna, ice bath &amp; steam room.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 w-full px-8 md:px-16 py-24 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
<span className="text-blue-600 font-semibold tracking-wide text-xs uppercase font-geist mb-3 block">Membership</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 font-jakarta mb-4">
                    Play your way.
                </h2>
<p className="text-slate-500 text-lg font-light font-geist">
                    From casual match-play to competitive leagues. No hidden fees.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900 font-jakarta mb-2">Match Pass</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900 font-jakarta">$15</span>
<span className="text-slate-400 font-geist text-sm">/player</span>
</div>
<p className="text-slate-500 text-sm mt-4 font-geist">Pay as you play. Perfect for visitors.</p>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-slate-600 font-geist">Standard court booking</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-slate-600 font-geist">Locker room access</span>
</div>
<div className="flex items-center gap-3 opacity-50">
<div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0"><svg className="lucide lucide-minus w-3 h-3 text-gray-400" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></div>
<span className="text-sm text-slate-600 font-geist">League eligibility</span>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-gray-200 font-medium text-sm hover:border-black hover:bg-black hover:text-white transition-all font-geist">Book Court</button>
</div>

<div className="bg-black rounded-[2rem] p-8 border border-black shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-lg font-geist">Most Popular</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white font-jakarta mb-2">Club Member</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white font-jakarta">$99</span>
<span className="text-white/60 font-geist text-sm">/month</span>
</div>
<p className="text-white/60 text-sm mt-4 font-geist">Unlimited off-peak access &amp; reduced rates.</p>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-white/90 font-geist">7-day booking window</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-white/90 font-geist">Free racket rentals</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-white/90 font-geist">League &amp; Tournament access</span>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-gray-200 transition-all font-geist">Become Member</button>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900 font-jakarta mb-2">Pro Member</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900 font-jakarta">$180</span>
<span className="text-slate-400 font-geist text-sm">/month</span>
</div>
<p className="text-slate-500 text-sm mt-4 font-geist">The ultimate package for the dedicated player.</p>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-slate-600 font-geist">14-day booking priority</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-slate-600 font-geist">1 Private Lesson / month</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-slate-600 font-geist">Permanent locker &amp; laundry</span>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-gray-200 font-medium text-sm hover:border-black hover:bg-black hover:text-white transition-all font-geist">Go Pro</button>
</div>
</div>
</section>

<section className="bg-white w-full px-8 md:px-16 py-20 border-t border-gray-100">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h3 className="text-2xl font-medium font-jakarta tracking-tight mb-8">Frequently asked questions</h3>
<div className="space-y-6">
<div className="group cursor-pointer">
<div className="flex justify-between items-center py-4 border-b border-gray-100">
<h4 className="font-medium text-slate-900 font-geist">Do I need my own racket?</h4>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400 group-hover:text-black transition" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-center py-4 border-b border-gray-100">
<h4 className="font-medium text-slate-900 font-geist">Are the courts indoor or outdoor?</h4>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400 group-hover:text-black transition" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-center py-4 border-b border-gray-100">
<h4 className="font-medium text-slate-900 font-geist">How do I find a partner?</h4>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400 group-hover:text-black transition" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>

<div className="relative bg-zinc-900 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 mb-6 text-white">
<svg className="lucide lucide-trophy w-6 h-6" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17"></path><path d="M14 14.66V17"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path><path d="M8.5 22v-4.17"></path><path d="M15.5 22v-4.17"></path></svg>
</div>
<h3 className="text-3xl font-medium text-white font-jakarta tracking-tight mb-3">Ready to play?</h3>
<p className="text-white/60 font-geist text-sm leading-relaxed max-w-xs">Join Velocity Padel today. Book your first court and get a free assessment.</p>
</div>
<div className="mt-8 relative z-10">
<form className="flex items-center gap-2 bg-white/10 border border-white/10 p-1.5 rounded-full backdrop-blur-sm">
<input className="bg-transparent border-none outline-none text-white text-sm px-4 w-full placeholder-white/40 font-geist" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold font-geist hover:bg-gray-200 transition">
                                Join Now
                            </button>
</form>
</div>
</div>
</div>
</section>

<div className="bg-white px-8 py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-xs font-geist">© 2024 Velocity Padel Club.</p>
<div className="flex gap-6">
<a className="text-slate-400 text-xs font-geist hover:text-black transition" href="#">Club Rules</a>
<a className="text-slate-400 text-xs font-geist hover:text-black transition" href="#">Safety</a>
<a className="text-slate-400 text-xs font-geist hover:text-black transition" href="#">Contact</a>
</div>
</div>
</div>

    </>
  );
}
