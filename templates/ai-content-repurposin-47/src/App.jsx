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
      

<nav className="fixed z-50 flex pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0 items-center justify-center">
<div className="flex bg-white/80 w-full max-w-5xl border-gray-200 border rounded-full py-2 pl-6 pr-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl items-center justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-2.5">

<div className="flex shadow-orange-500/30 text-white bg-gradient-to-br from-pink-500 to-orange-500 w-9 h-9 rounded-xl shadow-lg -rotate-3 items-center justify-center cursor-pointer" onclick="window.location.href='/home'" role="button">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M7 3v18"></path>
<path d="M3 7.5h4"></path>
<path d="M3 12h18"></path>
<path d="M3 16.5h4"></path>
<path d="M17 3v18"></path>
<path d="M17 7.5h4"></path>
<path d="M17 16.5h4"></path>
</svg>
</div>
<span className="cursor-pointer text-lg font-extrabold text-black tracking-tight" onclick="window.location.href='/home'" role="button">Cinematic Clips</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-black transition-colors text-sm font-semibold text-gray-500 hover:bg-gray-50 px-3 py-1.5 rounded-lg" href="#how-it-works">
            How It Works
          </a>
<a className="hover:text-black transition-colors hover:bg-gray-50 text-sm font-semibold text-gray-500 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" href="/whop">
            Monetization
          </a>
<a className="hover:text-black transition-colors hover:bg-gray-50 text-sm font-semibold text-gray-500 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" href="/contact">
            Contact
          </a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-sm font-bold text-black px-4 hover:opacity-70 transition-opacity" href="#">
            Sign In
          </a>
<a className="hover:scale-105 transition-all shadow-orange-500/20 hover:shadow-orange-500/40 text-sm font-bold text-white bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg" href="/pricing">
            Start Creating
          </a>
</div>
</div>
</nav>

<main className="overflow-hidden md:pt-36 md:pb-24 pt-32 pr-4 pl-4 relative">
<div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-b from-pink-500/20 via-orange-400/15 to-transparent blur-[130px] animate-pulse"></div>
</div>

<div className="text-center max-w-4xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 mb-8 hover:bg-black/10 transition-colors cursor-default border border-black/5">
<span className="flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-500"></span>
<span className="uppercase text-xs font-bold text-gray-800 tracking-wide">
            AI &amp; AUTOMATION POWERED
          </span>
</div>
<h1 className="md:text-8xl leading-[0.95] text-5xl font-bold text-black tracking-tight mb-8">
          Viral clips from
          <br className="hidden md:block"/>
<span className="relative inline-block mt-2">
            long videos.
            
<svg className="absolute w-full h-4 -bottom-2 left-0 -z-10 opacity-80 text-orange-400" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 15 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-medium text-gray-600 tracking-tight max-w-2xl mr-auto mb-12 ml-auto">
          Paste a YouTube link. Our smart editor automatically identifies viral
          moments, crops them vertically, and adds captions.
          <span className="block font-semibold text-black bg-orange-100 w-fit mx-auto rounded-md mt-1 pt-0.5 pr-1.5 pb-0.5 pl-1.5">
            10x your output. 100% Ran Passively.
          </span>
</p>

<div className="max-w-xl mx-auto relative group">

<div className="-inset-1 group-hover:opacity-70 transition duration-500 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-40 rounded-full absolute blur-2xl"></div>
<div className="relative bg-white shadow-xl p-2 pl-4 flex items-center gap-3 rounded-full border border-gray-200 shadow-pink-500/5">
<div className="text-gray-600 flex items-center bg-gray-50 p-2.5 rounded-xl border border-gray-100">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
<input className="flex-1 bg-transparent border-none outline-none text-base text-black placeholder:text-gray-400 font-medium h-12 w-full" placeholder="Paste YouTube URL here..." type="text"/>
<a className="hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap justify-center shadow-orange-500/20 text-sm font-bold text-white bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 h-12 rounded-full pr-8 pl-8 shadow-lg" href="/pricing">
              Generate
              <svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</a>
</div>
<p className="mt-5 text-sm font-semibold text-gray-400">
            Simple, 1-time setup &amp; integration - We scale with you
          </p>
</div>
</div>

<div className="mt-16 max-w-5xl mx-auto relative">


<div className="md:p-10 shadow-purple-500/10 overflow-hidden bg-white/70 border-white/60 border rounded-[2.5rem] pt-6 pr-6 pb-6 pl-6 relative shadow-2xl backdrop-blur-2xl">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 gap-x-8 gap-y-8 items-center">

<div className="flex-1 w-full space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" style={{animation: 'scan 2s linear infinite'}}></div>
<svg className="relative z-20" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
</svg>
</div>
<span className="text-sm font-bold text-gray-700">Source</span>
</div>
<div className="text-xs font-medium text-gray-400">
                  16:9 • 1080p
                </div>
</div>
<div className="aspect-video bg-gray-900 rounded-2xl relative overflow-hidden shadow-lg group cursor-pointer border border-gray-100">

<div className="absolute top-0 bottom-0 w-0.5 bg-purple-400 shadow-[0_0_20px_2px_rgba(168,85,247,0.8)] z-20 pointer-events-none" style={{animation: 'scan 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}>
<div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-r from-transparent via-purple-500/10 to-purple-500/30"></div>
<div className="absolute top-1/2 -translate-y-1/2 -left-20 w-40 h-[200%] bg-purple-500/5 rotate-12 blur-xl"></div>
</div>
<div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform relative z-30">
<svg className="" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7z"></path>
</svg>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/20 rounded-full overflow-hidden z-30">
<div className="h-full w-2/5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>

<div className="relative flex-shrink-0 z-10">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-[0_10px_30px_rgba(128,90,245,0.2)] flex items-center justify-center text-purple-600 border border-purple-50">
<svg className="md:rotate-0 rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="flex-1 w-full space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line className="" x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</div>
<span className="text-sm font-bold text-gray-700">
                    Viral Clips
                  </span>
</div>
<span className="text-[10px] font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-2.5 py-1 rounded-full shadow-sm">
                  AI EDITED
                </span>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="aspect-[9/16] bg-black rounded-2xl border-4 border-white shadow-xl overflow-hidden relative group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute inset-0 bg-gray-800"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
<div className="absolute bottom-3 left-3 right-3 space-y-2">
<div className="flex items-center gap-1.5">
<div className="w-5 h-5 rounded-full bg-gray-700 border border-gray-600"></div>
<div className="h-2 w-12 bg-gray-600 rounded-full"></div>
</div>
<div className="h-2 w-full bg-white/20 rounded-full">
<div className="h-full w-2/3 bg-green-500 rounded-full"></div>
</div>
</div>

<div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg border border-white/20">
<svg fill="none" height="12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
</div>

<div className="aspect-[9/16] bg-black rounded-2xl border-4 border-white shadow-xl overflow-hidden relative group hover:-translate-y-2 transition-transform duration-300 delay-100">
<div className="absolute inset-0 bg-gray-800"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
<div className="absolute bottom-3 left-3 right-3 space-y-2">
<div className="flex items-center gap-1.5">
<div className="w-5 h-5 rounded-full bg-gray-700 border border-gray-600"></div>
<div className="h-2 w-10 bg-gray-600 rounded-full"></div>
</div>
<div className="h-2 w-full bg-white/20 rounded-full">
<div className="h-full w-3/4 bg-green-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="flex flex-col overflow-hidden w-full pt-20 pr-4 pb-24 pl-4 relative items-center bg-gradient-to-r from-gray-50 to-white" id="how-it-works">
<div className="flex flex-col items-center text-center mb-16 space-y-4 relative z-10">
<h2 className="md:text-6xl text-4xl font-bold tracking-tight text-gray-900">
          How It Works
        </h2>
<p className="md:text-2xl text-xl font-medium text-gray-600 tracking-tight">
          Connect a channel -&gt;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 font-bold">
            Automate Clipping
          </span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl relative z-10">

<div className="flex flex-col transition-all duration-300 group hover:-translate-y-2 text-center bg-white border-gray-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm items-center">
<div className="relative mb-8 mt-2">
<div className="flex group-hover:rotate-6 transition-transform shadow-lg z-10 text-black bg-white w-20 h-20 rounded-2xl relative items-center justify-center">
<svg className="text-black" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
<div className="-bottom-4 flex z-20 rounded-full p-2 absolute left-1/2 -translate-x-1/2 shadow-lg items-center justify-center ring-4 ring-white bg-black">
<span className="text-xs font-bold text-white">1</span>
</div>
</div>
<h3 className="text-lg font-bold text-gray-900 tracking-tight mt-2 mb-2">
            Link a Channel
          </h3>
<p className="leading-relaxed text-sm font-medium text-gray-700">
            Connect any channel URL. We verify &amp; sync the library.
          </p>
</div>

<div className="flex flex-col transition-all duration-300 group text-center border rounded-3xl p-6 items-center shadow-sm hover:-translate-y-2 bg-white border-gray-200">
<div className="relative mb-8 mt-2">
<div className="flex group-hover:rotate-6 transition-transform shadow-lg z-10 text-black bg-white w-20 h-20 rounded-2xl relative items-center justify-center">
<svg className="text-black" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
</svg>
</div>
<div className="-bottom-4 flex z-20 rounded-full p-2 absolute left-1/2 -translate-x-1/2 shadow-lg items-center justify-center ring-4 ring-white bg-black">
<span className="text-xs font-bold text-white">2</span>
</div>
</div>
<h3 className="text-lg font-bold text-gray-900 tracking-tight mt-2 mb-2">
            We Monitor Uploads
          </h3>
<p className="leading-relaxed text-sm font-medium text-gray-700">
            We monitor channel feeds 24/7 to identify new videos uploaded -&gt;
            We've built our tools to be first to market.
          </p>
</div>

<div className="flex flex-col transition-all duration-300 group text-center border rounded-3xl p-6 items-center shadow-sm hover:-translate-y-2 bg-white border-gray-200">
<div className="relative mb-8 mt-2">
<div className="flex group-hover:rotate-6 transition-transform shadow-lg z-10 text-black bg-white w-20 h-20 rounded-2xl relative items-center justify-center">
<svg className="text-black" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-9"></path>
<path d="M14 17H5"></path>
<circle className="" cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
</div>
<div className="-bottom-4 flex z-20 rounded-full p-2 absolute left-1/2 -translate-x-1/2 shadow-lg items-center justify-center ring-4 ring-white bg-black">
<span className="text-xs font-bold text-white">3</span>
</div>
</div>
<h3 className="text-lg font-bold text-gray-900 tracking-tight mt-2 mb-2">
            Our AI-Tools Scan + Clip + Edit For You
          </h3>
<p className="leading-relaxed text-sm font-medium text-gray-700">
            AI finds viral moments -&gt; Edits + Cuts them -&gt; Crops them for
            each platform -&gt; &amp; Adds dynamic captions
          </p>
</div>

<div className="flex flex-col transition-all duration-300 group hover:-translate-y-2 text-center bg-white border-gray-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm items-center">
<div className="relative mb-8 mt-2">
<div className="flex group-hover:rotate-6 transition-transform shadow-lg z-10 text-black bg-white w-20 h-20 rounded-2xl relative items-center justify-center">
<svg className="text-black" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<div className="-bottom-4 flex z-20 rounded-full p-2 absolute left-1/2 -translate-x-1/2 shadow-lg items-center justify-center ring-4 ring-white bg-black">
<span className="text-xs font-bold text-white">4</span>
</div>
</div>
<h3 className="text-lg font-bold text-gray-900 tracking-tight mt-2 mb-2">
            Automated Publishing
          </h3>
<p className="leading-relaxed text-sm font-medium text-gray-700">
            Auto-schedule your clips to TikTok, Instagram Reels, and Shorts.
          </p>
</div>

<div className="flex flex-col transition-all duration-300 group text-center border rounded-3xl p-6 items-center relative overflow-hidden shadow-sm hover:-translate-y-2 bg-white border-gray-200">
<div className="absolute -right-10 -top-10 w-32 h-32 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/5"></div>
<div className="relative mb-8 mt-2 z-10">
<div className="flex group-hover:rotate-6 transition-transform shadow-lg z-10 text-black bg-white w-20 h-20 rounded-2xl relative items-center justify-center">
<svg className="text-black" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="-bottom-4 flex z-20 rounded-full p-2 absolute left-1/2 -translate-x-1/2 shadow-lg items-center justify-center ring-4 ring-white bg-black">
<span className="text-xs font-bold text-white">5</span>
</div>
</div>
<h3 className="z-10 text-lg font-bold text-gray-900 tracking-tight mt-2 mb-2 relative">
            Monetize
          </h3>
<p className="leading-relaxed z-10 text-sm font-medium text-gray-700 relative">
            Earn revenue per view through integrated Whop campaigns. Payouts
            range from $0.5-$20 per 1,000 views.
          </p>
</div>
</div>
</section>

<section className="bg-[#0B0B0B] pt-24 pr-4 pb-24 pl-4">
<div className="max-w-4xl mx-auto">
<div className="overflow-hidden md:px-16 md:py-24 px-8 py-16 text-white text-center rounded-[3rem] relative shadow-2xl border bg-[#151515] border-gray-800">

<div className="z-10 relative flex flex-col items-center">
<h2 className="md:text-6xl text-4xl font-bold tracking-tight mb-8 text-white">
              The modern way to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                scale.
              </span>
</h2>
<ul className="text-lg font-medium max-w-lg mx-auto mb-12 space-y-4 text-left text-gray-400">
<li className="flex items-start gap-3">
<div className="mt-1 rounded-full p-0.5 text-white bg-[#29F2A3]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="">
                  No more scanning long videos for clip-worthy moments.
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 rounded-full p-0.5 text-white bg-[#29F2A3]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="">No more manually editing videos and clips.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 rounded-full p-0.5 text-white bg-[#29F2A3]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="">
                  No more manually reformatting &amp; rendering videos.
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 rounded-full p-0.5 text-white bg-[#29F2A3]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="">
                  No more manually uploading content to all platforms.
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 rounded-full p-0.5 text-white bg-gradient-to-r from-pink-500 to-orange-500">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="">
                  We provide the tools to generate high-quality content
                  automatically.
                </span>
</li>
</ul>

<div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
<div className="flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100 text-gray-800 font-bold text-lg">
<iconify-icon icon="logos:youtube-icon"></iconify-icon>
                Shorts
              </div>
<div className="flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100 text-gray-800 font-bold text-lg">
<iconify-icon icon="skill-icons:instagram"></iconify-icon>
                Reels
              </div>
<div className="flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100 text-gray-800 font-bold text-lg">
<iconify-icon className="" icon="logos:tiktok-icon"></iconify-icon>
                TikTok
              </div>
</div>
<a className="hover:scale-105 transition-all text-lg font-bold text-white rounded-full py-4 px-12 bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 shadow-xl shadow-orange-500/20" href="/pricing">
              Start Creating
            </a>
</div>
</div>
</div>
</section>

    </>
  );
}
