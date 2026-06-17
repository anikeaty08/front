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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="relative z-50 w-full border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="text-[#FF4D00] group-hover:scale-105 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="flame" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-tight text-white">Hype On!</span>
<span className="text-xs font-medium text-gray-400">Media</span>
</div>
</a>

<button className="bg-gradient-to-r from-[#FF4D00] to-[#CC3D00] hover:from-[#FF6320] hover:to-[#E64500] text-white text-xs font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 uppercase tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(255,77,0,0.3)] hover:shadow-[0_0_25px_rgba(255,77,0,0.5)]">
                Start Now 
                <i className="w-4 h-4 fill-white/20" data-lucide="play-circle" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</nav>

<section className="relative pt-24 pb-32 lg:pt-40 lg:pb-48 px-6 lg:px-8 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[800px] pointer-events-none -z-10 flex flex-col items-center">

<div className="w-64 h-96 border-[40px] border-t-[80px] border-black absolute top-20 rounded-t-full opacity-50 drop-shadow-[0_0_50px_rgba(255,77,0,0.4)]"></div>

<div className="absolute bottom-1/4 w-[150%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF4D00]/40 via-[#FF4D00]/10 to-transparent blur-3xl rounded-[100%]"></div>
<div className="absolute bottom-1/4 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF4D00]/50 to-transparent blur-sm"></div>
</div>
<div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-12 mt-20">
<h1 className="sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-4xl font-semibold text-white tracking-tighter max-w-4xl drop-shadow-2xl">We've scaled<br/> channels to $2m+<br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Yours is next</span></h1>
<p className="text-base text-gray-300 font-medium max-w-[220px] lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-[#FF4D00] pl-4 lg:pl-0 lg:pr-4 py-1">
                For professionals ready to dominate their niche
            </p>
</div>
</section>


<section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
<h2 className="lg:text-5xl uppercase leading-tight text-3xl font-semibold text-white tracking-tighter">
            Data scales.<br/>
            Gut feeling doesn't.
        </h2>
<p className="leading-relaxed text-lg font-medium text-gray-400 max-w-2xl mt-6">
            We've generated millions in revenue by understanding what YouTube's algorithm actually wants. No guesswork, just proven strategies that deliver real growth.
        </p>

<div className="aspect-video group cursor-pointer overflow-hidden flex transition-all duration-500 hover:ring-[#FF4D00]/50 hover:shadow-[0_0_40px_rgba(255,77,0,0.15)] bg-[#141414] w-full max-w-5xl border-white/5 border ring-white/10 ring-1 rounded-2xl mt-16 relative shadow-2xl items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
<div className="w-20 h-20 bg-gradient-to-br from-[#FF4D00] to-[#CC3D00] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<button className="mt-12 bg-gradient-to-r from-[#FF4D00] to-[#CC3D00] hover:from-[#FF6320] hover:to-[#E64500] text-white text-xs font-semibold px-8 py-3 rounded-full flex items-center gap-2 uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(255,77,0,0.2)]">
            Start Now 
            <i className="w-4 h-4 fill-white/20" data-lucide="play-circle" style={{strokeWidth: '1.5'}}></i>
</button>
</section>

<section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter uppercase text-center mb-16 text-white leading-tight">
            Strategy, Production, Growth<br/>
<span className="text-gray-500">—We've got you covered.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:h-[400px]">

<div className="bg-[#FF4D00] rounded-3xl p-8 flex flex-col justify-between text-black lg:col-span-1 shadow-lg hover:-translate-y-1 transition-transform duration-300">
<h3 className="text-2xl font-semibold tracking-tighter uppercase leading-[1.1]">Channel<br/>Strategy<br/>&amp; Aud</h3>
<p className="text-base font-medium mt-12 leading-snug">Deep channel audit to identify what works and strategy until you win.</p>
</div>

<div className="bg-[#f0f0f0] rounded-3xl p-8 flex flex-col justify-between text-black lg:col-span-1 shadow-lg hover:-translate-y-1 transition-transform duration-300">
<h3 className="text-2xl font-semibold tracking-tighter uppercase leading-[1.1]">Content<br/>Production<br/>&amp; Opt</h3>
<p className="text-base font-medium mt-12 text-gray-700 leading-snug">From thumbnails to production optimization, we manage deadlines.</p>
</div>

<div className="flex flex-col lg:col-span-1 hover:-translate-y-1 transition-transform duration-300 text-white bg-[#141414] border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between">
<h3 className="uppercase leading-[1.1] text-2xl font-semibold tracking-tighter">Full Content<br/>Creation<br/>&amp; Prod</h3>
<p className="text-base font-medium mt-12 text-gray-400 leading-snug">We handle full content creation that elevates your brand.</p>
</div>

<div className="bg-[#141414] rounded-3xl p-8 flex flex-col justify-between text-white lg:col-span-2 border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="relative z-10 w-full lg:w-2/3 flex flex-col h-full justify-between">
<h3 className="text-2xl font-semibold tracking-tighter uppercase leading-[1.1]">Multi-<br/>Channel<br/>Network<br/>Strategy</h3>
<p className="text-base font-medium text-gray-400 mt-12 leading-snug">Ready to scale beyond one channel? We help you build and manage a network of channels that multiply your reach, revenue, and market dominance.</p>
</div>

<div className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl group-hover:bg-white/20 transition-colors duration-500"></div>
<div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-700">
<i className="w-48 h-48 text-white" data-lucide="aperture" style={{strokeWidth: '0.5'}}></i>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 border-t border-white/5">

<div className="lg:w-1/3 w-full pt-4">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter uppercase text-white leading-[1.1]">
                This is what<br/>
                growth looks<br/>
                like
            </h2>
</div>

<div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col gap-6">

<div className="flex flex-col h-[400px]">
<div className="bg-[#111] rounded-t-3xl p-8 relative overflow-hidden flex-1 flex flex-col justify-between border-x border-t border-white/5">

<div className="absolute inset-0 bg-gradient-to-t from-[#FF4D00]/10 to-transparent opacity-50"></div>
<svg className="absolute bottom-0 left-0 w-full h-2/3 text-[#FF4D00]" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="" d="M0,100 C30,90 40,50 100,20 L100,100 Z" fill="url(#grad1)" opacity="0.3"></path>
<path d="M0,100 C30,90 40,50 100,20" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'currentColor', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'currentColor', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
<h4 className="text-lg font-semibold tracking-tighter uppercase relative z-10 text-white">Real Estate<br/>Channel</h4>
<div className="relative z-10 flex flex-col items-end justify-end h-full gap-3 text-right">
<div className="leading-none"><span className="text-white text-base font-semibold block">$780K</span><span className="text-[10px] text-gray-500 uppercase tracking-wider">income</span></div>
<div className="leading-none"><span className="text-white text-base font-semibold block">45M</span><span className="text-[10px] text-[#FF4D00] uppercase tracking-wider">views</span></div>
<div className="leading-none"><span className="text-[#FF4D00] text-base font-semibold block">20K</span><span className="text-[10px] text-[#FF4D00] uppercase tracking-wider">leads</span></div>
<div className="leading-none"><span className="text-white text-base font-semibold block">12</span><span className="text-[10px] text-gray-500 uppercase tracking-wider">months</span></div>
</div>
</div>
<div className="bg-white rounded-b-3xl p-8 flex items-baseline gap-4 shadow-xl">
<span className="text-5xl lg:text-6xl font-semibold tracking-tighter text-black">150K</span>
<span className="text-xs font-semibold text-gray-500 uppercase max-w-[100px] leading-tight">subscribers in 8 months</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="flex flex-col h-[300px]">
<div className="bg-[#111] rounded-t-3xl p-8 relative overflow-hidden flex-1 flex flex-col justify-between border-x border-t border-white/5">

<div className="absolute inset-0 bg-gradient-to-t from-[#FF4D00]/10 to-transparent opacity-50"></div>
<svg className="absolute bottom-0 left-0 w-full h-1/2 text-[#FF4D00]" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,100 C40,90 60,60 100,10 L100,100 Z" fill="url(#grad1)" opacity="0.3"></path>
<path d="M0,100 C40,90 60,60 100,10" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<h4 className="text-lg font-semibold tracking-tighter uppercase relative z-10 text-white">Education<br/>Creator</h4>
<div className="relative z-10 flex flex-col items-end justify-end h-full gap-2 text-right absolute top-8 right-8">
<div className="leading-none"><span className="text-white text-base font-semibold block">$780K</span><span className="text-[10px] text-gray-500 uppercase tracking-wider">income</span></div>
<div className="leading-none"><span className="text-white text-base font-semibold block">20K</span><span className="text-[10px] text-gray-500 uppercase tracking-wider">leads</span></div>
<div className="leading-none"><span className="text-[#FF4D00] text-base font-semibold block">45M</span><span className="text-[10px] text-[#FF4D00] uppercase tracking-wider">views</span></div>
<div className="leading-none"><span className="text-[#FF4D00] text-base font-semibold block">12</span><span className="text-[10px] text-[#FF4D00] uppercase tracking-wider">months</span></div>
</div>
</div>
<div className="bg-white rounded-b-3xl p-8 flex items-baseline gap-4 shadow-xl">
<span className="text-5xl lg:text-6xl font-semibold tracking-tighter text-black">500K</span>
<span className="text-xs font-semibold text-gray-500 uppercase max-w-[100px] leading-tight">subscribers in 12 months</span>
</div>
</div>

<div className="bg-[#111] rounded-3xl p-8 flex justify-between relative overflow-hidden border border-white/5 h-[150px]">
<h4 className="text-lg font-semibold tracking-tighter uppercase relative z-10 text-white">Multi-<br/>Channel<br/>Network</h4>
<div className="relative z-10 flex flex-col items-end gap-2 text-right">
<div className="leading-none">
<span className="text-white text-base font-semibold flex items-center gap-1">
                                1 <i className="w-3 h-3 text-gray-500" data-lucide="arrow-right" style={{strokeWidth: '2'}}></i> 5
                            </span>
<span className="text-[10px] text-gray-500 uppercase tracking-wider">channels</span>
</div>
<div className="leading-none"><span className="text-white text-base font-semibold block">20M</span><span className="text-[10px] text-gray-500 uppercase tracking-wider">views</span></div>
<div className="leading-none"><span className="text-[#FF4D00] text-base font-semibold block">18</span><span className="text-[10px] text-[#FF4D00] uppercase tracking-wider">months</span></div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-32 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#FF4D00]/20 via-[#0f0f0f] to-[#0f0f0f] relative overflow-hidden flex items-end justify-center">
<div className="w-[800px] h-32 bg-gradient-to-t from-[#FF4D00] to-transparent rounded-t-[100%] blur-3xl opacity-20 pointer-events-none"></div>
</div>


    </>
  );
}
