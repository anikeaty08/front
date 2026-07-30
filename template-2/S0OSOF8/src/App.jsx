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
        document.addEventListener('DOMContentLoaded', function () {
            try { 
                lucide.createIcons(); 
            } catch (e) { 
                console.log('Lucide icons failed to initialize');
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
      

<div className="relative w-full overflow-hidden">
<div className="flex w-full mr-auto ml-auto justify-center"></div>
</div>

<section className="relative w-full sm:px-6 md:px-10 max-w-7xl mt-12 mr-auto mb-12 ml-auto pr-4 pl-4">
<div className="relative -mt-2 w-full shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] bg-white/90 border-neutral-200/70 rounded-[40px] border-t backdrop-blur-xl">
<div className="sm:px-6 md:px-10 pt-8 pr-4 pb-10 pl-4">

<header className="w-full">
<header className="flex gap-4 w-full mb-8 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-black tracking-tight font-playfair">NONNA'S TABLE</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
<a className="hover:text-black transition-colors font-medium" href="#menu">Menu</a>
<a className="hover:text-black transition-colors font-medium" href="#story">Our Story</a>
<a className="hover:text-black transition-colors font-medium" href="#events">Events</a>
<a className="hover:text-black transition-colors font-medium" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<button className="group inline-flex gap-3 shadow-stone-800/20 ring-1 ring-red-800/10 transition duration-150 ease-out hover:-translate-y-0.5 text-base font-medium text-white bg-gradient-to-l from-gray-900 to-black rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg items-center justify-center">Sign In</button>
</div>
</header>
</header>

<h1 className="max-w-3xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.05] text-4xl font-normal text-neutral-900 tracking-tighter font-playfair">
                    Benvenuti a<img alt="Fresh pasta" className="inline-block align-middle h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-24 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2" src="https://cdn.midjourney.com/1c83599c-faac-4943-9b6a-47e13b6df277/0_0.png?w=800&q=80" style={{}} /> Nonna's Table,<img alt="Italian chef" className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-16 md:w-24 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b59bad79-703a-4c05-8ed2-fafcc49a7b51_320w.jpg" style={{}} /> where tradition meets taste
                </h1>

<p className="sm:text-lg max-w-[85ch] text-base text-neutral-600 mt-4">
                    Four generations of authentic Italian recipes, served with passion in an atmosphere that feels like home. From handmade pasta to wood-fired pizzas, every dish tells a story.
                </p>

<div className="mt-6 flex flex-wrap gap-2.5">
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
<svg className="lucide lucide-leaf w-[14px] h-[14px] text-slate-950" data-icon-replaced="true" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`, width: `14px`, height: `14px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                        Fresh Daily
                    </span>
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
<svg className="lucide lucide-flame w-[14px] h-[14px] text-slate-950" data-icon-replaced="true" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`, width: `14px`, height: `14px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                        Wood-fired Oven
                    </span>
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
<svg className="lucide lucide-award w-[14px] h-[14px] text-slate-950" data-icon-replaced="true" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`, width: `14px`, height: `14px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                        Award-winning
                    </span>
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
<svg className="lucide lucide-heart w-[14px] h-[14px] text-slate-950" data-icon-replaced="true" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`, width: `14px`, height: `14px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                        Family recipes
                    </span>
</div>

<div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
<a className="group inline-flex items-center justify-center gap-3 shadow-stone-800/20 ring-1 ring-red-800/10 transition duration-150 ease-out hover:-translate-y-0.5 text-base font-medium text-white bg-gradient-to-l from-gray-900 to-black rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#contact">
                        Book a table
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</a>
<a className="inline-flex items-center justify-center text-base font-medium text-neutral-800 bg-neutral-100/60 border border-neutral-200 rounded-full px-6 py-3 hover:bg-neutral-100" href="#menu">
                        View menu
                    </a>
</div>

<section className="sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6" style={{position: `relative`, overflow: `hidden`}}>

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col justify-between min-h-full">
<div className="">
<span className="text-sm font-normal text-zinc-500">Traditional Italian Experience</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 font-medium tracking-tighter font-playfair">Meet our culinary family.</h2>

<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-zinc-600 bg-zinc-900 px-4 relative">
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal">Authentic Recipes</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal">Fresh Ingredients</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal">Warm Hospitality</span>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm text-zinc-100 font-medium tracking-tight">A legacy of flavor</p>
<p className="mt-1 text-sm text-zinc-400">From our famiglia to yours, experience the passion and tradition that has been passed down through generations.</p>
<button className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition">
                                        Our Story
                                        <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
</div>

<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent sm:block hidden"></div>
<p className="text-base text-zinc-300 leading-relaxed sm:text-right sm:pl-8">
                                        Our master chefs bring <span className="font-medium text-zinc-100">decades of culinary expertise</span>
                                        from the heart of Italy to create unforgettable dining experiences.
                                    </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76c3bb17-90f7-4f44-ba0f-faa4e1101e83_800w.jpg)] bg-center" style={{}}></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-chef-hat h-3.5 w-3.5" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800">Head Chef</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Marco Romano</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41c1c6ee-fb69-4705-8aeb-9c1dbc61edcb_800w.jpg)]" style={{}}></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-utensils h-3.5 w-3.5" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800">Sous Chef</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Sofia Benedetti</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/926d10d3-af41-47fe-a429-15ad531c8cad_800w.jpg)]" style={{}}></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-wheat h-3.5 w-3.5" data-lucide="wheat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22 16 8"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800">Pasta Master</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Giuseppe Ricci</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e90be3ec-52f2-4920-af4b-31f337ab931b_800w.jpg)] bg-center" style={{}}></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-pizza h-3.5 w-3.5" data-lucide="pizza" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14-1 1"></path><path d="m13.75 18.25-1.25 1.42"></path><path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"></path><path d="M18.8 9.3a1 1 0 0 0 2.1 7.7"></path><path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800">Pizza Chef</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Antonio Rossi</p>
</div>
</article>
</div>
</div>
</section>
</div>
</div>
</section>

<section className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-6 pl-4" id="menu">
<div className="flex items-end justify-between mb-6 sm:mb-8">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">(01) La Carta</p>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight font-playfair">Signature dishes we're passionate about.</h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 bg-white rounded-full px-4 py-2" href="#menu">
                Full menu
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="group relative overflow-hidden ring-1 ring-neutral-200 cursor-pointer bg-white rounded-3xl shadow-sm h-80">
<img alt="Risotto alla Milanese" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/2eebbbc6-df55-4d9e-8b34-ad25cbc1ed0a/0_0.png?w=800&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">Primo • Risotto</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="sm:text-lg text-base font-semibold text-white tracking-tight">Risotto alla Milanese</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden ring-1 ring-neutral-200 cursor-pointer bg-white rounded-3xl shadow-sm h-80">
<img alt="Pizza Margherita" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/3b8ab5be-cc27-4162-bc9f-d6937e463e58/0_0.png?w=800&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">Pizza • Classica</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">Pizza Margherita</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden ring-1 ring-neutral-200 cursor-pointer bg-white rounded-3xl shadow-sm h-80">
<img alt="Pasta Carbonara" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/87c2476e-c102-40c7-aec2-a866e606cf9f/0_0.png?w=800&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">Pasta • Romano</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="sm:text-lg text-base font-semibold text-white tracking-tight">Carbonara Classica</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow" href="#menu">
                View complete menu
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section><section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]" style={{animationDelay: `0.1s`}}>
<div className="">
<p className="text-sm font-medium text-[#000000]/50 font-playfair">What makes us special</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl font-medium text-[#000000] tracking-tight font-playfair">Authentic Italian dining experience</h2>
<p className="sm:text-lg max-w-[85ch] text-base text-neutral-600 mt-4">From traditional family recipes to warm hospitality, every detail is crafted to transport you to the heart of Italy.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden md:col-span-2 md:row-span-2 bg-zinc-900 border-white/10 border rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]" style={{animationDelay: `0.2s`}}>
<div className="relative overflow-hidden">
<img alt="Fresh pasta being made by hand" className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.midjourney.com/e50840f8-f672-432e-aa8c-06ecdd161aeb/0_0.png?w=800&q=80" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/50"></div>
<div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
<div className="flex items-center gap-2">
<span className="inline-flex items-center text-[11px] font-medium text-slate-50 font-inter bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 transition-all duration-300 group-hover:bg-amber-500/20 group-hover:border-amber-400/30 group-hover:text-amber-200">ROOFTOP</span>
<span className="text-xs text-white/60 font-inter transition-colors duration-300 group-hover:text-white/80">Panoramic city views</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight font-playfair text-white transition-colors duration-300 group-hover:text-amber-100">Dine among the clouds with breathtaking rooftop views</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-inter transition-colors duration-300 group-hover:text-white/80">Experience the city's most luxurious rooftop dining with stunning 360-degree views of Milano's skyline. Watch the sunset paint the Duomo golden while savoring authentic Italian cuisine in our elegant sky-high terrace.</p>
<div className="mt-5 flex flex-wrap items-center gap-3 transform transition-all duration-300 group-hover:translate-x-1">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-inter transition-all duration-300 hover:scale-105 hover:border-amber-400/30" href="#rooftop">
<svg className="h-4 w-4 transition-transform duration-300 hover:rotate-12" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 6H3"></path><path d="M21 10H3"></path><path d="M21 14H3"></path><path d="M21 18H3"></path></svg>
            View rooftop menu
          </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-black font-inter bg-amber-500 rounded-lg px-4 py-2 hover:bg-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg" href="#contact">
<svg className="h-4 w-4 transition-transform duration-300 hover:rotate-12" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Reserve terrace table
          </a>
</div>
</div>
</div>

<div className="group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-0 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]" style={{animationDelay: `0.3s`}}>
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-playfair text-white flex items-center gap-2 transition-colors duration-300 group-hover:text-orange-200">
            Wood-fired pizza
          </h3>
<span className="inline-flex items-center text-[11px] font-medium text-slate-50 font-inter bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 transition-all duration-300 group-hover:bg-orange-500/20 group-hover:border-orange-400/30 group-hover:text-orange-200">TRADITIONAL</span>
</div>
<p className="mt-2 text-sm text-white/70 font-inter transition-colors duration-300 group-hover:text-white/80">Authentic Neapolitan pizza baked in our imported wood-fired oven at 900°F for the perfect crispy crust.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Wood-fired pizza oven" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://cdn.midjourney.com/67a6057f-f9f9-401a-a088-d4e35935b996/0_0.png?w=800&q=80" />
</div>
</div>
</div>

<div className="group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]" style={{animationDelay: `0.4s`}}>
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-playfair text-white flex items-center gap-2 transition-colors duration-300 group-hover:text-purple-200">
            Curated wine selection
          </h3>
<span className="inline-flex items-center text-[11px] font-medium text-slate-50 font-inter bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:border-purple-400/30 group-hover:text-purple-200">SOMMELIER</span>
</div>
<p className="mt-2 text-sm text-white/70 font-inter transition-colors duration-300 group-hover:text-white/80">Over 200 Italian wines carefully selected from renowned vineyards across Tuscany, Piedmont, and Veneto.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Italian wine cellar" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://cdn.midjourney.com/f7dd88bb-8704-471e-935e-2bc2e8b70c1c/0_0.png?w=800&q=80" />
</div>
</div>
</div>

<div className="group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]" style={{animationDelay: `0.5s`}}>
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-lg font-medium tracking-tight font-playfair text-white flex items-center gap-2 transition-colors duration-300 group-hover:text-green-200">
          Family atmosphere
          <span className="ml-2 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/15 px-2 py-0.5 text-[11px] font-medium text-green-300 font-inter transition-all duration-300 group-hover:bg-green-500/25 group-hover:border-green-400/50 group-hover:animate-pulse">WARM</span>
</h3>
<p className="mt-2 text-sm text-white/70 font-inter transition-colors duration-300 group-hover:text-white/80">Experience the warmth of Italian hospitality where every guest is treated like family.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Cozy restaurant interior" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://cdn.midjourney.com/cd7dcc46-3425-4003-a9db-e07773d935e3/0_0.png?w=800&q=80" />
</div>
</div>
</div>

<div className="group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]" style={{animationDelay: `0.6s`}}>
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-lg font-medium tracking-tight font-playfair text-white flex items-center gap-2 transition-colors duration-300 group-hover:text-amber-200">
          Craft cocktails
        </h3>
<p className="mt-2 text-sm text-white/70 font-inter transition-colors duration-300 group-hover:text-white/80">Expertly crafted Italian cocktails featuring premium spirits, fresh herbs, and house-made bitters inspired by classic aperitivos.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Italian craft cocktails" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://cdn.midjourney.com/fc61e2fd-de4d-4947-b7d0-865bb7c926a0/0_0.png?w=800&q=80" />
</div>
</div>
</div>
<div className="group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]" style={{animationDelay: `0.7s`}}>
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-lg font-medium tracking-tight font-playfair text-white flex items-center gap-2 transition-colors duration-300 group-hover:text-blue-200">
          Private dining
        </h3>
<p className="mt-2 text-sm text-white/70 font-inter transition-colors duration-300 group-hover:text-white/80">Intimate private dining rooms perfect for celebrations, business dinners, and special occasions.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Private dining room" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://cdn.midjourney.com/56a65816-1f8f-4e27-8718-5cd023b569da/0_0.png?w=800&q=80" />
</div>
</div>
</div>
</div>

</section>

<footer className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-10 pl-4">
<div className="relative overflow-hidden bg-neutral-900 rounded-3xl">
<div className="relative z-10 sm:p-12 md:p-16 pt-12 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-white/10 border-b pb-12">
<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-utensils w-5 h-5 text-white/80" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<h3 className="text-2xl font-semibold text-white tracking-tight font-playfair">Nonna's Table</h3>
</div>
<p className="max-w-3xl text-white/70">Experience the warmth of Italian hospitality and the authentic flavors of traditional recipes passed down through generations. We can't wait to welcome you to our table.</p>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
<span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                        Now accepting reservations
                                    </div>
<h4 className="text-white font-semibold tracking-tight">Make a reservation</h4>
<ul className="space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Tables for 2-12 guests available daily</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Private dining rooms for special occasions</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Wine pairings and sommelier recommendations</span>
</li>
</ul>
<div className="flex items-center gap-3 pt-2 text-sm">
<a className="inline-flex items-center gap-2 text-white hover:text-amber-300 transition" href="tel:+1234567890">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                                            +1 (234) 567‑8900
                                        </a>
</div>
</div>
<form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1">Name</label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" placeholder="Your name" required type="text" />
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1">Phone</label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" placeholder="+1 (234) 567-8900" required type="tel" />
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1">Party size</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
<option className="bg-neutral-900" value="2">2 guests</option>
<option className="bg-neutral-900" value="4">4 guests</option>
<option className="bg-neutral-900" value="6">6 guests</option>
<option className="bg-neutral-900" value="8">8+ guests</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1">Date & Time</label>
<input className="w-full outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" type="datetime-local" />
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-white/80 mb-1">Special requests</label>
<textarea className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" placeholder="Allergies, dietary restrictions, celebrations..." rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex justify-end">
<button className="inline-flex gap-2 ring-1 ring-red-300 hover:bg-red-300 transition text-sm font-medium text-neutral-900 bg-red-400 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center" type="submit">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                                            Reserve table
                                        </button>
</div>
</form>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 border-white/10 border-t mt-10 pt-6 items-start justify-between">
<p className="text-white/60 text-sm">© 2024 Nonna's Table. All rights reserved.</p>
<div className="flex items-center gap-4 text-white/60 text-sm">
<span>Via Roma 123, Milano</span>
<span className="hidden sm:block text-white/20">•</span>
<span>Open daily 5:30 PM - 10:30 PM</span>
</div>
</div>
</div>

</div>
</footer>


    </>
  );
}
