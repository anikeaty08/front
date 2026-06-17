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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
<div className="flex bg-white/90 w-full max-w-5xl border-gray-100 border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-xl items-center justify-between">
<div className="flex gap-x-2 gap-y-2 items-center" onclick="window.location.href='/home'" role="button">

<div className="flex text-white bg-black w-8 h-8 rounded-xl -rotate-3 items-center justify-center" onclick="window.location.href='/home'" role="button">
<svg className="" data-icon-set="lucide" data-lucide="scissors" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="6" cy="6" r="3"></circle>
<path className="" d="M8.12 8.12L12 12m8-8L8.12 15.88"></path>
<circle className="" cx="6" cy="18" r="3"></circle>
<path className="" d="M14.8 14.8L20 20"></path>
</g>
</svg>
</div>
<span className="text-base font-extrabold text-black tracking-tight">
            Clip Engine IO
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-black transition-colors text-sm font-semibold text-gray-500" href="#how-it-works">
            How It Works
          </a>
<a className="hover:text-black transition-colors text-sm font-semibold text-gray-500" href="/whop">
            $$ How to Monetize
          </a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-sm font-bold text-black px-4 hover:opacity-70 transition-opacity" href="/contact">
            Contact
          </a>
<a className="hidden md:block text-sm font-bold text-black px-4 hover:opacity-70 transition-opacity" href="#">
            Login
          </a>
<a className="hover:brightness-110 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none text-sm font-bold text-black bg-[#00E5CC] rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_4px_0_#00c2ad]" href="/pricing">
            Get Started
          </a>
</div>
</div>
</nav>

<main className="overflow-hidden md:pt-32 md:pb-24 pt-32 pr-4 pb-20 pl-4 relative">

<div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#00E5CC] rounded-full blur-[120px] -z-10 opacity-20 animate-pulse"></div>
<div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-300 rounded-full blur-[100px] -z-10 opacity-30"></div>
<div className="text-center max-w-4xl mr-auto mb-16 ml-auto">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 mb-8 hover:bg-black/10 transition-colors cursor-default">
<span className="flex h-2.5 w-2.5 rounded-full bg-[#00E5CC]"></span>
<span className="text-xs font-bold text-black uppercase tracking-wide">
            Auto-posting enabled
          </span>
</div>
<h1 className="md:text-8xl leading-[1] text-5xl font-bold text-black tracking-tight mb-8">
          Shorts from
          <br className="hidden md:block"/>
<span className="relative inline-block">
            long videos.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#00E5CC] -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-medium text-gray-900 tracking-tight max-w-2xl mr-auto mb-12 ml-auto">
          Share a YouTube channel. We use AI to automatically find viral-worthy
          clips, edit the clips, crop them vertically, and post them for you.
          <span className="bg-[#00E5CC]/20 px-1.5 py-0.5 rounded-md">
            100% Passively.
          </span>
</p>

<div className="max-w-xl mx-auto relative group">

<div className="-inset-1 group-hover:opacity-60 transition duration-500 bg-gradient-to-r from-[#00E5CC] to-purple-400 opacity-30 rounded-3xl absolute blur"></div>
<div className="relative bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-2 pl-4 flex items-center gap-3">
<div className="text-black flex items-center bg-gray-100 p-2 rounded-lg">
<svg className="" data-icon-set="lucide" data-lucide="link" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</g>
</svg>
</div>
<input className="flex-1 bg-transparent border-none outline-none text-base text-black placeholder:text-gray-400 font-medium h-12 w-full" placeholder="Paste YouTube URL here..." type="text"/>
<a className="hover:scale-105 transition-transform flex items-center gap-2 whitespace-nowrap shadow-black/20 justify-center no-underline text-sm font-bold text-white bg-black h-12 rounded-xl pr-6 pl-6 shadow-lg" href="/pricing">
              Clip It
              <svg className="text-[#00E5CC]" data-icon-set="lucide" data-lucide="zap" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<p className="mt-4 text-sm font-medium text-gray-400">
            1-time setup • Integrate with our tools once • Scale with more
            channels
          </p>
</div>
</div>

<div className="mt-12 max-w-5xl mx-auto relative">
<div className="relative bg-white rounded-[2.5rem] border-4 border-gray-100 p-6 md:p-10 shadow-2xl shadow-purple-500/10 overflow-hidden">

<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">

<div className="w-full md:w-2/3 space-y-4">
<div className="flex items-center justify-between px-2">
<span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Original Video
                </span>
</div>

<div className="aspect-video flex overflow-hidden group bg-black border-white border-4 rounded-3xl relative shadow-xl items-center justify-center">

<div className="absolute bottom-6 left-6 right-6 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
<div className="w-1/3 h-full bg-[#00E5CC] rounded-full"></div>
</div>

<div className="w-16 h-16 rounded-full bg-[#00E5CC] flex items-center justify-center text-black z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(0,229,204,0.4)]">
<svg className="ml-1" data-icon-set="lucide" data-lucide="play" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>

<div className="absolute top-0 bottom-0 w-[2px] bg-[#00E5CC] left-1/3 animate-[scan_3s_ease-in-out_infinite] shadow-[0_0_20px_#00E5CC]"></div>
</div>
</div>

<div className="w-full md:w-1/3 space-y-4">
<div className="flex items-center justify-between px-2">
<span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Shorts Ready
                </span>
<span className="text-xs font-bold text-black bg-[#00E5CC] px-3 py-1 rounded-full">
                  New
                </span>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="aspect-[9/16] bg-black rounded-2xl border-4 border-white shadow-lg p-3 flex flex-col justify-between hover:-translate-y-2 transition-transform cursor-pointer relative overflow-hidden group">
<div className="bg-gray-900 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex justify-end">
<div className="bg-white/10 backdrop-blur-md p-1.5 rounded-lg text-white group-hover:bg-[#00E5CC] group-hover:text-black transition-colors">
<svg className="" data-icon-set="lucide" data-lucide="download" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
</div>
</div>
<div className="relative z-10 space-y-1.5 opacity-50">
<div className="h-2 w-12 bg-white/30 rounded-full"></div>
<div className="h-2 w-20 bg-white/30 rounded-full"></div>
</div>
</div>

<div className="aspect-[9/16] bg-black rounded-2xl border-4 border-white shadow-lg p-3 flex flex-col justify-between hover:-translate-y-2 transition-transform cursor-pointer relative overflow-hidden group">
<div className="absolute inset-0 bg-gray-900 z-0"></div>
<div className="relative z-10 flex justify-end">
<div className="bg-white/10 backdrop-blur-md p-1.5 rounded-lg text-white group-hover:bg-[#00E5CC] group-hover:text-black transition-colors">
<svg className="" data-icon-set="lucide" data-lucide="check" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="relative z-10 space-y-1.5 opacity-50">
<div className="h-2 w-10 bg-white/30 rounded-full"></div>
<div className="h-2 w-16 bg-white/30 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="flex flex-col bg-black w-full pt-12 pr-4 pb-12 pl-4 items-center" id="how-it-works">
<div className="flex flex-col items-center text-center mb-16 space-y-3">
<h2 className="md:text-5xl text-4xl font-bold text-white tracking-tight drop-shadow-lg">
          How It Works
        </h2>
<p className="md:text-2xl text-xl font-medium text-gray-400 tracking-tight" style={{}}>
          Clipping on
          <span className="text-[#00E5CC]">Autopilot</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl">

<div className="flex flex-col hover:border-[#00E5CC]/50 transition-colors duration-300 group text-center bg-white border-gray-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 items-center">
<div className="relative mb-6">
<div className="flex group-hover:scale-110 transition-transform shadow-black/5 z-10 text-black bg-gray-100 w-20 h-20 border-black/5 border rounded-3xl relative shadow-lg items-center justify-center">
<svg className="text-[#00E5CC]" data-icon-set="lucide" data-lucide="link" height="40" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</g>
</svg>
</div>
<div className="-bottom-5 -translate-x-1/2 flex z-20 bg-white border-gray-100 border rounded-full p-1.5 absolute left-1/2 shadow-lg items-center justify-center">
<svg className="w-[28px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="youtube-icon" height="20" strokeWidth="2" style={{width: '28px', height: '20px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 256 180" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" fill="red"></path>
<path className="" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" fill="#FFF"></path>
</svg>
</div>
</div>
<h3 className="text-lg font-semibold text-black tracking-tight mt-2 mb-2">
            Link a Channel
          </h3>
<p className="leading-relaxed text-sm font-medium text-gray-500">
            Connect any channel URL. We verify &amp; sync the library.
          </p>
</div>

<div className="flex flex-col hover:border-purple-500/50 transition-colors duration-300 group text-center bg-white border-gray-200 border rounded-3xl p-6 items-center">
<div className="relative mb-6">
<div className="flex group-hover:scale-110 transition-transform shadow-black/5 z-10 text-black bg-gray-100 w-20 h-20 border-black/5 border rounded-3xl relative shadow-lg items-center justify-center">
<svg className="text-purple-500" data-icon-set="lucide" data-lucide="scan-eye" height="40" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path>
<circle className="" cx="12" cy="12" r="1"></circle>
<path className="" d="M18.944 12.33a1 1 0 0 0 0-.66a7.5 7.5 0 0 0-13.888 0a1 1 0 0 0 0 .66a7.5 7.5 0 0 0 13.888 0"></path>
</g>
</svg>
</div>
<div className="-bottom-5 -translate-x-1/2 flex z-20 bg-white border-gray-100 border rounded-full p-1.5 absolute left-1/2 shadow-lg items-center justify-center">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 204, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" fill="currentColor" stroke="none"></path>
<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" fill="currentColor" stroke="none"></path>
<circle cx="18" cy="5" fill="#FF0000" r="3" stroke="white" strokeWidth="2"></circle>
</svg>
</div>
</div>
<h3 className="text-lg font-semibold text-black tracking-tight mt-2 mb-2">
            We Monitor Uploads
          </h3>
<p className="leading-relaxed text-sm font-medium text-gray-500">
            We monitor channel feeds 24/7 to identify new videos uploaded -&gt;
            We've built our tools to be first to market.
          </p>
</div>

<div className="flex flex-col hover:border-pink-500/50 transition-colors duration-300 group text-center bg-white border-gray-200 border rounded-3xl p-6 items-center">
<div className="relative mb-6">
<div className="flex group-hover:scale-110 transition-transform shadow-black/5 z-10 text-black bg-gray-100 w-20 h-20 border-black/5 border rounded-3xl relative shadow-lg items-center justify-center">
<svg className="text-pink-500" data-icon-set="lucide" data-lucide="wand-2" height="40" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="-bottom-5 -translate-x-1/2 flex z-20 bg-white border-gray-100 border rounded-full p-1.5 absolute left-1/2 shadow-lg items-center justify-center">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="6" cy="6" r="3"></circle>
<path className="" d="M8.12 8.12 12 12"></path>
<path className="" d="M20 4 8.12 15.88"></path>
<circle className="" cx="6" cy="18" r="3"></circle>
<path d="M14.8 14.8 20 20"></path>
</svg>
</div>
</div>
<h3 className="text-lg font-semibold text-black tracking-tight mt-2 mb-2">
            Our AI-Tools Scan + Clip + Edit For You
          </h3>
<p className="leading-relaxed text-sm font-medium text-gray-500">
            AI finds viral moments -&gt; Edits + Cuts them -&gt; Crops them for
            each platform -&gt; &amp; Adds dynamic captions
          </p>
</div>

<div className="flex flex-col hover:border-yellow-500/50 transition-colors duration-300 group text-center bg-white border-gray-200 border rounded-3xl p-6 items-center">
<div className="relative mb-6">
<div className="flex group-hover:scale-110 transition-transform shadow-black/5 z-10 text-black bg-gray-100 w-20 h-20 border-black/5 border rounded-3xl relative shadow-lg items-center justify-center">
<svg className="text-yellow-500" data-icon-set="lucide" data-lucide="rocket" height="40" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
<path className="" d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</g>
</svg>
</div>
<div className="-bottom-5 -translate-x-1/2 flex z-20 bg-white border-gray-100 border rounded-full px-2 py-1.5 absolute left-1/2 shadow-lg items-center justify-center gap-1.5">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="logos" data-logos="youtube-icon" height="16" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '16px', height: '16px'}} viewbox="0 0 256 180" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" fill="red"></path>
<path d="m102.421 128.06l66.328-38.418l-66.328-38.418z" fill="#FFF"></path>
</svg>
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="skill-icons" data-skill-icons="instagram" height="16" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '16px', height: '16px'}} viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none">
<rect fill="url(#SVGWRUqebek)" height="256" rx="60" width="256"></rect>
<rect className="" fill="url(#SVGfkNpldMH)" height="256" rx="60" width="256"></rect>
<path d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" fill="#fff"></path>
<defs>
<radialgradient cx="0" cy="0" gradienttransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientunits="userSpaceOnUse" id="SVGWRUqebek" r="1">
<stop stop-color="#FD5"></stop>
<stop offset=".1" stop-color="#FD5"></stop>
<stop offset=".5" stop-color="#FF543E"></stop>
<stop offset="1" stop-color="#C837AB"></stop>
</radialgradient>
<radialgradient cx="0" cy="0" gradienttransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientunits="userSpaceOnUse" id="SVGfkNpldMH" r="1">
<stop stop-color="#3771C8"></stop>
<stop offset=".128" stop-color="#3771C8"></stop>
<stop offset="1" stop-color="#60F" stop-opacity="0"></stop>
</radialgradient>
</defs>
</g>
</svg>
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="tiktok" height="16" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07" fill="#000000"></path>
</svg>
</div>
</div>
<h3 className="text-lg font-semibold text-black tracking-tight mt-2 mb-2">
            Automated Publishing
          </h3>
<p className="leading-relaxed text-sm font-medium text-gray-500">
            Auto-schedule your clips to TikTok, Instagram Reels, and Shorts.
          </p>
</div>

<div className="flex flex-col hover:border-green-500/50 transition-colors duration-300 group text-center bg-white border-gray-200 border rounded-3xl p-6 items-center relative overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-green-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative mb-6 z-10">
<div className="flex group-hover:scale-110 transition-transform shadow-black/5 z-10 text-black bg-gray-100 w-20 h-20 border-black/5 border rounded-3xl relative shadow-lg items-center justify-center">
<svg className="text-green-500" data-icon-set="lucide" data-lucide="banknote" height="40" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect className="" height="12" rx="2" width="20" x="2" y="6"></rect>
<circle className="" cx="12" cy="12" r="2"></circle>
<path d="M6 12h.01M18 12h.01"></path>
</g>
</svg>
</div>
<div className="-bottom-5 -translate-x-1/2 flex z-20 bg-white border-gray-100 border rounded-full p-1.5 absolute left-1/2 shadow-lg gap-x-1 items-center justify-center">
<svg className="text-yellow-500" data-icon-set="lucide" data-lucide="coins" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="8" cy="8" r="6"></circle>
<path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"></path>
<path d="m16.71 13.88l.7.71l-2.82 2.82"></path>
</g>
</svg>
<iconify-icon className="text-[#FF6243]" icon="simple-icons:whop" width="16"></iconify-icon>
<span className="text-[10px] uppercase font-bold text-black tracking-wider leading-none">
                Whop
              </span>
</div>
</div>
<h3 className="text-lg font-semibold text-black mb-2 tracking-tight relative z-10 mt-2">
            Monetize
          </h3>
<p className="leading-relaxed z-10 text-sm font-medium text-gray-500 relative">
            Earn revenue per view through integrated Whop campaigns. Payouts
            range from $0.5-$20 per 1,000 views.
          </p>
</div>
</div>
</section>

<section className="bg-white pt-24 pr-4 pb-24 pl-4">
<div className="max-w-4xl mx-auto">
<div className="overflow-hidden md:px-16 md:pt-16 md:pb-36 text-white text-center bg-black rounded-[3rem] pt-12 pr-8 pb-32 pl-8 relative shadow-2xl">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00E5CC] rounded-full blur-[80px] opacity-20"></div>
<div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-end items-center pb-8">
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-20"></div>
<a className="pointer-events-auto hover:brightness-110 transition-all hover:translate-y-5 active:translate-y-6 active:shadow-none whitespace-nowrap text-base font-semibold text-black bg-[#00E5CC] rounded-full mt-0 mb-8 pt-4 pr-10 pb-4 pl-10 shadow-[0_4px_0_#00c2ad] translate-y-6 inline-block" href="/pricing">
              Get Started
            </a>
</div>
<div className="z-10 relative">
<h2 className="md:text-5xl text-4xl font-bold tracking-tight mb-8">
              The New Way To
              <span className="text-[#00E5CC]">Scale</span>
</h2>
<ul className="text-lg font-medium text-gray-400 max-w-lg mx-auto mb-12 space-y-4 text-left">
<li className="flex items-start gap-3">
<svg className="text-[#00E5CC] flex-shrink-0 w-6 h-6 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<span>
                  No more scanning long videos for clip-worthy moments.
                </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-[#00E5CC] flex-shrink-0 w-6 h-6 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<span>No more manually editing videos and clips.</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-[#00E5CC] flex-shrink-0 w-6 h-6 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<span>
                  No more manually reformatting &amp; rendering videos.
                </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-[#00E5CC] flex-shrink-0 w-6 h-6 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<span>
                  No more manually uploading content to all platforms.
                </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-[#00E5CC] flex-shrink-0 w-6 h-6 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<span>
                  We provide the tools to generate high-quality content
                  automatically.
                </span>
</li>
</ul>
<div className="flex flex-wrap justify-center gap-4 md:gap-6">
<div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-default">
<svg className="text-red-500" data-icon-set="lucide" data-lucide="youtube" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
<path d="m10 15l5-3l-5-3z"></path>
</g>
</svg>
<span className="text-base font-bold">Shorts</span>
</div>
<div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-default">
<svg className="text-pink-400" data-icon-set="lucide" data-lucide="instagram" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
<span className="text-base font-bold">Reels</span>
</div>
<div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-default">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="tiktok-icon" height="20" strokeWidth="2" style={{color: 'rgb(0, 229, 204)', width: '20px', height: '20px'}} viewbox="0 0 256 290" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9" fill="#FF004F"></path>
<path className="" d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"></path>
<path d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833" fill="#00F2EA"></path>
</svg>
<span className="text-base font-bold">TikTok</span>
</div>
</div>
</div>
</div>
</div>
</section>

<style className="">
      @keyframes scan {
          0% { left: -10%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 110%; opacity: 0; }
      }
    </style>

    </>
  );
}
