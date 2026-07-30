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
      <div className="fixed top-0 w-full h-screen bg-center -z-10 bg-cover" style={{backgroundImage: `url("/assets/38c8bb15-0807-4e7c-9c91-ddfb3ba673dd_3840w.jpg")`}}></div>

<header className="bg-transparent fade-in">
<nav className="flex max-w-7xl lg:px-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-white/10 border-white/20 border rounded-full mt-8 mr-auto mb-8 ml-auto pt-3 pr-2 pb-3 pl-2 backdrop-blur-md items-center justify-between">
<div className="flex items-center space-x-3">
<span className="uppercase text-xl font-normal text-slate-50 tracking-tighter font-pt-serif" style={{}}>Maya Rodriguez</span>
</div>
<button className="lg:hidden rounded-lg p-2 transition-colors hover:bg-black/10" id="mobile-toggle">
<svg className="w-6 h-6 text-gray-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path>
</svg>
</button>
<ul className="fixed inset-0 z-40 hidden flex-col gap-8 lg:static lg:flex lg:flex-row lg:bg-transparent lg:gap-8 backdrop-blur-none items-center justify-center">
<li className=""><a className="transition-colors duration-200 hover:text-purple-600 text-base font-medium text-gray-50 font-quicksand" href="#" style={{}}>Home</a></li>
<li className=""><a className="transition-colors duration-200 hover:text-purple-600 text-base font-medium text-gray-50 font-quicksand" href="#" style={{}}>Work</a></li>
<li className=""><a className="transition-colors duration-200 hover:text-purple-600 text-base font-medium text-gray-50 font-quicksand" href="#" style={{}}>Services</a></li>
<li className=""><a className="transition-colors duration-200 hover:text-purple-600 text-base font-medium text-gray-50 font-quicksand" href="#" style={{}}>About</a></li>
<li className=""><a className="transition-colors duration-200 hover:text-purple-600 text-base font-medium text-gray-50 font-quicksand" href="#" style={{}}>Contact</a></li>
</ul>
<button className="btn relative cursor-pointer border-none overflow-hidden transition-all duration-500 hover:scale-110 flex w-52 h-12 text-lg font-medium text-white rounded-full items-center justify-center" style={{backgroundSize: `300% 300%`, backdropFilter: `blur(1rem)`, animation: `gradient_301 5s ease infinite`, border: `double 4px transparent`, backgroundImage: `linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%)`, backgroundOrigin: `border-box`, backgroundClip: `content-box, border-box`}}>Get Started <div className="" id="container-stars" style={{position: `absolute`, zIndex: `-1`, width: `100%`, height: `100%`, overflow: `hidden`, backdropFilter: `blur(1rem)`, borderRadius: `5rem`}}>
<div className="" id="stars" style={{position: `relative`, background: `transparent`, width: `200rem`, height: `200rem`}}></div>
</div><div className="" id="glow" style={{position: `absolute`, display: `flex`, width: `12rem`}}><div className="circle" style={{width: `100%`, height: `30px`, filter: `blur(2rem)`, animation: `pulse_3011 4s infinite`, zIndex: `-1`, background: `rgba(254, 83, 186, 0.636)`}}></div><div className="circle" style={{width: `100%`, height: `30px`, filter: `blur(2rem)`, animation: `pulse_3011 4s infinite`, zIndex: `-1`, background: `rgba(142, 81, 234, 0.704)`}}></div></div></button>
</nav>
</header>

<main className="max-w-7xl lg:px-8 mr-auto ml-auto pr-4 pb-20 pl-4">
<section className="md:p-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gradient-to-r from-slate-900 to-slate-700/40 border-stone-800 border rounded-[40px] pt-4 pr-4 pb-4 pl-2" style={{}}>
<div className="grid auto-rows-[240px] gap-4 md:auto-rows-[300px] lg:auto-rows-[360px] md:grid-cols-3">

<article className="relative col-span-1 row-span-2 overflow-hidden md:col-span-2 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 slide-up animate-delay-100 bg-cover rounded-2xl">
<div className="absolute inset-0 flex flex-col md:p-10 bg-cover pt-6 pr-6 pb-6 pl-6 justify-between bg-center bg-[url(https://cdn.midjourney.com/b882c729-b775-4507-bb5b-bb54936eddbb/0_0.png?w=800&q=80)]" style={{}}>
<div className="flex items-start justify-between">
<h1 className="max-w-sm leading-tight md:text-4xl lg:text-5xl text-3xl font-medium text-white tracking-tight font-quicksand">Maya Rodriguez —<span className="transition-colors duration-300 font-medium text-slate-50 font-quicksand" style={{}}>Creative Director</span></h1>
<div className="flex items-center gap-2 rounded-full backdrop-blur-md px-3 py-1 text-xs font-medium font-quicksand bg-white/10 text-white">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                                Open to projects
                            </div>
</div>
<div className="flex items-end justify-between">
<div className="">
<p className="max-w-xs text-lg font-light font-quicksand text-stone-300" style={{}}>Transforming brands through innovative design and strategic creative solutions</p>
<div className="mt-4 flex items-center gap-4">
<div className="flex items-center gap-1 text-stone-300" style={{}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-sm font-medium font-quicksand">New York, NY</span>
</div>
<div className="flex items-center gap-1 text-stone-300" style={{}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path><path d="M16 2v4"></path>
<rect className="" height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
<span className="text-sm font-medium font-quicksand">10+ Years</span>
</div>
</div>
</div>
<button className="flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110 bg-white/10 hover:bg-white/20">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</article>

<article className="flex flex-col overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slide-up animate-delay-200 text-white bg-cover border-purple-800/30 rounded-2xl backdrop-blur-sm justify-between" style={{backgroundImage: `url("/assets/1ba266bd-81e8-4c6b-b290-bdcb56dc9f72_800w.jpg;);`}}>
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium font-quicksand text-purple-300" style={{}}>Expertise</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full backdrop-blur transition-all duration-200 bg-white/10 hover:bg-white/20">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</button>
</div>
<h3 className="text-xl font-semibold mb-2 font-quicksand">Brand & Creative</h3>
<p className="text-sm mb-4 font-quicksand text-purple-200" style={{}}>End-to-end creative solutions for modern brands</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm">
<div className="h-1.5 w-1.5 rounded-full bg-purple-400" style={{}}></div>
<span className="font-quicksand">Brand Identity</span>
</div>
<div className="flex items-center gap-2 text-sm">
<div className="h-1.5 w-1.5 rounded-full bg-purple-400" style={{}}></div>
<span className="font-quicksand">Creative Direction</span>
</div>
<div className="flex items-center gap-2 text-sm">
<div className="h-1.5 w-1.5 rounded-full bg-purple-400" style={{}}></div>
<span className="font-quicksand">Art Direction</span>
</div>
</div>
</div>
</article>

<article className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-cover border rounded-2xl slide-up animate-delay-300 hover:border-purple-600 bg-stone-800 border-stone-700" style={{backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop")`}}>
<div className="relative h-full flex flex-col bg-[url(/assets/8efcb0c2-2c9d-4858-bb8d-d45bf95953ef_800w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-between" style={{}}>
<div className="flex items-center justify-between">
<span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium border border-purple-500/30 font-quicksand text-purple-400" style={{}}>Current Role</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 bg-stone-700 hover:bg-stone-600" style={{}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6"></path><path d="M10 14 21 3"></path>
<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>
</button>
</div>
<div className="">
<h3 className="text-2xl mb-2 tracking-tight font-quicksand font-medium text-white">Creative Director</h3>
<p className="text-sm mb-1 font-quicksand text-stone-400" style={{}}>Spotify • 2021 - Present</p>
<p className="text-sm font-quicksand text-stone-400" style={{}}>Leading global brand creative and visual identity</p>
</div>
</div>
</article>

<article className="flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 slide-up animate-delay-400 text-white bg-cover border-pink-800/30 rounded-2xl pt-6 pr-6 pb-6 pl-6 justify-between bg-[url(default)] bg-center" style={{backgroundImage: `url(https://cdn.midjourney.com/8118f1bb-12a2-4696-a341-1838edabda97/0_0.png)`}}>
<div className="flex items-center justify-between">
<span className="text-sm font-medium font-quicksand text-pink-300" style={{}}>Campaign Work</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full backdrop-blur transition-all duration-200 bg-white/20 hover:bg-white/30">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</button>
</div>
<div className="mt-4">
<p className="text-sm mb-2 font-quicksand text-pink-200" style={{}}>Brands collaborated this year</p>
<span className="text-3xl font-quicksand font-medium">25+</span>
<div className="flex gap-2 mt-3 items-center">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-pink-400/30" style={{}}></div>
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-pink-400/30" style={{}}></div>
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-green-500 to-blue-500 border-2 border-pink-400/30" style={{}}></div>
</div>
<span className="text-xs font-quicksand text-pink-200" style={{}}>Global & Startup Brands</span>
</div>
</div>
</article>

<article className="flex flex-col group hover:border-purple-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 slide-up animate-delay-500 bg-cover border-stone-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6 justify-between bg-center bg-[url(default)]" style={{backgroundImage: `url(https://cdn.midjourney.com/a5f1b168-e748-4b31-b4e8-07b042b0069a/0_0.png)`}}>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-50 font-quicksand" style={{}}>Education</span>
<div className="flex items-center gap-1 text-purple-400" style={{}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
<path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</svg>
<span className="text-xs font-medium font-quicksand">2014</span>
</div>
</div>
<div className="mt-4">
<p className="text-sm mb-2 font-quicksand text-stone-400" style={{}}>MFA in Visual Communication</p>
<span className="text-xl font-medium font-quicksand text-white">Parsons School of Design</span>
<p className="text-xs text-stone-500 mt-1 font-quicksand" style={{}}>Brand & Identity Systems</p>
</div>
</article>

<article className="flex flex-wrap content-start gap-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in animate-delay-500 hover:border-stone-600 bg-center bg-stone-800 bg-[url(default)] bg-cover border-stone-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{backgroundImage: `url(https://cdn.midjourney.com/952d1182-0998-4144-8bab-6e1a1f6c675a/0_0.png)`}}>
<div className="w-full flex items-center justify-between mb-4">
<span className="text-sm font-medium font-quicksand text-stone-400" style={{}}>Creative Tools</span>
</div>
<span className="hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-200 hover:scale-105 cursor-pointer hover:text-purple-300 text-sm font-medium text-stone-300 font-quicksand bg-stone-700/30 border-stone-600 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm" style={{}}>Adobe CC</span>
<span className="hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-200 hover:scale-105 cursor-pointer hover:text-purple-300 text-sm font-medium text-stone-300 font-quicksand bg-stone-700/30 border-stone-600 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm" style={{}}>Cinema 4D</span>
<span className="hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-200 hover:scale-105 cursor-pointer hover:text-purple-300 text-sm font-medium text-stone-300 font-quicksand bg-stone-700/30 border-stone-600 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm" style={{}}>Blender</span>
<span className="hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-200 hover:scale-105 cursor-pointer hover:text-purple-300 text-sm font-medium text-stone-300 font-quicksand bg-stone-700/30 border-stone-600 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm" style={{}}>Octane</span>
<span className="hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-200 hover:scale-105 cursor-pointer hover:text-purple-300 text-sm font-medium text-stone-300 font-quicksand bg-stone-700/30 border-stone-600 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm" style={{}}>TouchDesigner</span>
<span className="hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-200 hover:scale-105 cursor-pointer hover:text-purple-300 text-sm font-medium text-stone-300 font-quicksand bg-stone-700/30 border-stone-600 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm" style={{}}>Figma</span>
<span className="hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-200 hover:scale-105 cursor-pointer hover:text-purple-300 text-sm font-medium text-stone-300 font-quicksand bg-stone-700/30 border-stone-600 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm" style={{}}>Unity</span>
<div className="flex items-center gap-2 mt-2">
<div className="h-2 w-2 rounded-full bg-purple-500" style={{}}></div>
<span className="text-xs text-stone-50 font-quicksand" style={{}}>Constantly experimenting with emerging tech</span>
</div>
</article>
</div>
</section><section className="md:p-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] fade-in animate-delay-100 bg-gradient-to-r from-slate-900 to-slate-700/40 border-stone-800 border rounded-[40px] mt-12 pt-8 pr-4 pb-8 pl-4 backdrop-blur">
<div className="mb-8 text-center">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight font-quicksand mb-4">What Clients Say</h2>
<p className="text-stone-300 font-light max-w-2xl mx-auto font-quicksand">Trusted by brands worldwide to deliver exceptional creative solutions</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 slide-up animate-delay-200 bg-gradient-to-r from-slate-900 to-slate-700 bg-cover border-stone-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{backgroundImage: `linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)`}}>
<div className="flex items-start gap-4 mb-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover border-2 border-purple-400/30" src="/assets/04b430ce-45fe-4c6d-b375-4a4d349051a7_320w.jpg" style={{}} />
<div>
<h4 className="font-medium text-white font-quicksand">Alex Chen</h4>
<p className="text-sm text-stone-400 font-quicksand">CEO, TechFlow</p>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</article>

<article className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 slide-up animate-delay-300 bg-gradient-to-r from-slate-900 to-slate-700 bg-cover border-stone-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{backgroundImage: `linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)`}}>
<div className="flex items-start gap-4 mb-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover border-2 border-pink-400/30" src="/assets/2a59325f-6c7c-497d-be59-b73f7bbb9e60_320w.jpg" />
<div>
<h4 className="font-medium text-white font-quicksand">Sarah Williams</h4>
<p className="text-sm text-stone-400 font-quicksand">Founder, Bloom Studio</p>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</article>

<article className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 slide-up animate-delay-400 bg-gradient-to-r from-blue-500 to-purple-500 bg-cover border-stone-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)`}}>
<div className="flex items-start gap-4 mb-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover border-2 border-green-400/30" src="/assets/0d5d1d2c-b8df-49fe-b836-b3462b5e330d_320w.jpg" />
<div className="">
<h4 className="font-medium text-white font-quicksand">Marcus Johnson</h4>
<p className="text-sm text-stone-400 font-quicksand">CMO, Vertex Labs</p>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-yellow-400" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</article>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-stone-700">
<div className="text-center slide-up animate-delay-500">
<div className="text-3xl font-medium text-white font-quicksand mb-2">50+</div>
<div className="text-sm text-stone-400 font-quicksand">Happy Clients</div>
</div>
<div className="text-center slide-up animate-delay-600">
<div className="text-3xl font-medium text-white font-quicksand mb-2">200+</div>
<div className="text-sm text-stone-400 font-quicksand">Projects Completed</div>
</div>
<div className="text-center slide-up animate-delay-700">
<div className="text-3xl font-medium text-white font-quicksand mb-2">15+</div>
<div className="text-sm text-stone-400 font-quicksand">Awards Won</div>
</div>
<div className="text-center slide-up animate-delay-800">
<div className="text-3xl font-medium text-white font-quicksand mb-2">99%</div>
<div className="text-sm text-stone-400 font-quicksand">Client Satisfaction</div>
</div>
</div>
</section>

<footer className="md:px-12 fade-in bg-gradient-to-r from-slate-900 to-slate-700 border rounded-[40px] mt-12 pt-12 pr-6 pb-12 pl-6" style={{background: `rgba(255, 255, 255, 0.05)`, backdropFilter: `blur(20px)`, border: `1px solid rgba(255, 255, 255, 0.1)`, boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)`}}>
<div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 text-stone-300" style={{}}>
<div className="">
<h4 className="text-lg font-semibold mb-4 tracking-tight font-quicksand text-white">Let's Create Together</h4>
<p className="text-sm font-light max-w-xs font-quicksand text-stone-200" style={{}}>Ready to collaborate on your next big creative project or brand transformation.</p>
<p className="mt-4 text-xs text-stone-300 font-quicksand" style={{}}>© 2024 Maya Rodriguez. All rights reserved.</p>
</div>
<div className="">
<h5 className="text-sm font-semibold mb-3 tracking-tight font-quicksand text-white">Get in Touch</h5>
<ul className="space-y-2 text-sm font-light text-stone-200" style={{}}>
<li className=""><a className="transition-colors duration-200 font-quicksand hover:text-purple-300" href="mailto:maya@creativelab.co" style={{}}>maya@creativelab.co</a></li>
<li className=""><a className="transition-colors duration-200 font-quicksand hover:text-purple-300" href="tel:+1987654321" style={{}}>+1 (987) 654-321</a></li>
<li className="transition-colors duration-200 font-quicksand hover:text-purple-300" style={{}}>New York, NY</li>
</ul>
</div>
<div className="">
<h5 className="text-sm font-semibold mb-3 tracking-tight font-quicksand text-white">Work</h5>
<ul className="space-y-2 text-sm font-light text-stone-200" style={{}}>
<li className=""><a className="transition-colors duration-200 font-quicksand hover:text-purple-300" href="#" style={{}}>Portfolio</a></li>
<li className=""><a className="transition-colors duration-200 font-quicksand hover:text-purple-300" href="#" style={{}}>Case Studies</a></li>
<li className=""><a className="transition-colors duration-200 font-quicksand hover:text-purple-300" href="#" style={{}}>Creative Process</a></li>
<li><a className="transition-colors duration-200 font-quicksand hover:text-purple-300" href="#" style={{}}>Client Reviews</a></li>
</ul>
</div>
<div className="">
<h5 className="text-sm font-semibold mb-3 tracking-tight font-quicksand text-white">Connect</h5>
<div className="flex space-x-4">
<a className="text-stone-200 transition-all duration-200 hover:scale-110 hover:text-purple-300" href="#" style={{}}>
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="text-stone-200 transition-all duration-200 hover:scale-110 hover:text-purple-300" href="#" style={{}}>
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="m16 11.37-.32-.87c-.02-.08-.04-.15-.07-.23-.02-.08-.05-.15-.08-.22-.02-.07-.04-.14-.07-.2-.02-.06-.04-.13-.07-.19-.02-.06-.05-.12-.08-.18-.02-.05-.04-.11-.07-.16-.02-.05-.05-.1-.08-.15-.02-.04-.04-.09-.07-.13-.02-.04-.05-.08-.08-.12-.02-.04-.04-.07-.07-.11-.02-.03-.05-.07-.08-.1-.02-.03-.04-.06-.07-.09-.02-.02-.05-.05-.08-.07-.02-.02-.04-.05-.07-.07l-.08-.06c-.02-.02-.04-.03-.07-.05-.02-.01-.04-.03-.06-.04-.02-.01-.04-.02-.06-.03-.02-.01-.04-.02-.06-.03-.02 0-.04-.01-.06-.02-.02 0-.04-.01-.06-.01-.02 0-.04 0-.06 0h-.06-.06c-.02 0-.04 0-.06.01-.02 0-.04.01-.06.02-.02.01-.04.02-.06.03-.02.01-.04.02-.06.03-.02.01-.04.02-.06.04-.02.01-.04.03-.07.05l-.08.06c-.02.02-.04.04-.07.07-.02.02-.05.05-.08.07-.02.03-.04.06-.07.09-.02.03-.05.06-.08.1-.02.04-.04.07-.07.11-.02.04-.05.08-.08.12-.02.04-.04.08-.07.13-.02.05-.05.1-.08.15-.02.05-.04.11-.07.16-.02.06-.05.12-.08.18-.02.06-.04.13-.07.19-.02.06-.04.13-.07.2-.02.07-.05.14-.08.22-.02.08-.04.15-.07.23l-.32.87a9 9 0 1 0 17.32 4.63z"></path>
</svg>
</a>
</div>
</div>
</div>
</footer></main>
    </>
  );
}
