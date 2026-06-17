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



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    


      document.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.parallax-element').forEach(function(el) {
          const speed = el.getAttribute('data-speed') || 0.5;
          el.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
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
      

<div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-white relative">

<div className="lg:col-span-4 flex flex-col lg:p-12 z-20 bg-white border-gray-100 border-r pt-8 pr-8 pb-8 pl-8 justify-between relative">
<div className="flex items-center justify-between animate-fade-in">
<div className="flex items-center gap-3">
<div className="relative">
<button className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100" onclick="document.getElementById('nav-dropdown').classList.toggle('hidden')">
<svg className="lucide lucide-menu w-6 h-6 text-slate-800" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path className="" d="M4 12h16"></path>
<path className="" d="M4 19h16"></path>
</svg>
</button>

<div className="hidden absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-2 z-50 origin-top-left animate-in fade-in slide-in-from-top-2 duration-200" id="nav-dropdown">
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all group" href="#">
<svg className="lucide lucide-home w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
                    Home
                  </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all group" href="#">
<svg className="lucide lucide-zap w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
                    New Releases
                  </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all group" href="#">
<svg className="lucide lucide-gamepad-2 w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="10" y1="11" y2="11"></line>
<line x1="8" x2="8" y1="9" y2="13"></line>
<line x1="15" x2="15.01" y1="12" y2="12"></line>
<line x1="18" x2="18.01" y1="10" y2="10"></line>
<path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
</svg>
                    Categories
                  </a>
<div className="h-px bg-gray-100 my-1 mx-2"></div>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all group" href="#">
<svg className="lucide lucide-settings w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                    Settings
                  </a>
</div>
</div>
</div>
<div className="w-10 h-10 border-2 border-orange-500 flex items-center justify-center font-bold text-slate-800 brand-font text-xl rounded-lg">
              P
            </div>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-slate-800" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10a4 4 0 0 1-8 0"></path>
<path d="M3.103 6.034h17.794"></path>
<path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
</svg>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
</div>
</div>
<div className="my-12 lg:my-0">
<h1 className="text-7xl lg:text-8xl font-medium uppercase tracking-tighter leading-[0.85] text-slate-800 animate-slide-in delay-100">
            Play
            <br/>
<span className="text-blue-600">Wonder</span>
</h1>
</div>
<div className="space-y-8">
<div className="flex items-center gap-3 text-sm font-medium tracking-wide text-blue-500 uppercase animate-slide-in delay-200">
<svg className="lucide lucide-shapes w-5 h-5" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
<circle cx="17.5" cy="17.5" r="3.5"></circle>
</svg>
<span className="">Top iPhone Games</span>
</div>
<div className="flex items-center justify-between border-t border-gray-100 pt-6 animate-slide-in delay-300">
<button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
<svg className="lucide lucide-arrow-left w-5 h-5 text-slate-400" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<span className="text-xs font-semibold tracking-widest uppercase text-slate-400">
              Brain Teasers
            </span>
<button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5 text-orange-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="lg:col-span-8 overflow-hidden min-h-[50vh] lg:min-h-auto bg-slate-50 relative">

<div className="grid grid-cols-2 grid-rows-2 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/625b0919-b519-4de0-933c-ea927bf922fd_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0 bg-fixed" style={{}}>
<div className="overflow-hidden relative" style={{visibility: 'hidden'}}>
<div className="w-full h-1/2 rounded-tl-full absolute right-0 bottom-0" style={{}}></div>
</div>
<div className="relative" style={{visibility: 'hidden'}}>
<div className="transform bg-center w-3/4 h-full absolute top-0 right-0 skew-y-12" style={{visibility: 'hidden'}}></div>
</div>
<div className="flex relative items-center justify-center" style={{visibility: 'hidden'}}></div>
</div>

<div className="absolute inset-0 flex items-center justify-center mix-blend-multiply opacity-10 pointer-events-none parallax-element" data-speed="0.15" style={{}}>
<span className="text-[40rem] font-bold leading-none tracking-tighter text-slate-900">
            GAME
          </span>
</div>
</div>
</div>

<section className="bg-blue-600 pt-20 pb-0">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 justify-between animate-slide-in">
<div className="">
<span className="block h-0.5 w-12 bg-blue-400 mb-4"></span>
<span className="text-blue-200 text-xs font-bold tracking-widest uppercase">
              App Store Hits
            </span>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Trending Games
          </h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<button className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden bg-blue-700 border-blue-500/20 border rounded-t-3xl shadow-2xl" style={{}}>

<div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 lg:p-16 overflow-hidden group bg-gradient-to-br from-blue-500 to-blue-600 pt-8 pr-8 pb-8 pl-8 relative animate-blur-in delay-100">
<div className="flex flex-col z-10 h-full relative justify-between">
<div className="mb-8" style={{}}>
<div className="w-12 h-12 bg-orange-500 rounded-xl mb-6 shadow-lg flex items-center justify-center text-white">
<svg className="lucide lucide-gamepad-2 w-6 h-6" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="10" y1="11" y2="11"></line>
<line x1="8" x2="8" y1="9" y2="13"></line>
<line x1="15" x2="15.01" y1="12" y2="12"></line>
<line x1="18" x2="18.01" y1="10" y2="10"></line>
<path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
</svg>
</div>
<h3 className="text-4xl text-white font-semibold mb-2">
                  Cyber Quest 3D
                </h3>
<p className="text-lg text-blue-100">Immersive AR RPG</p>
</div>
<a className="inline-flex items-center gap-2 text-white text-sm font-semibold tracking-wide uppercase bg-blue-700/50 hover:bg-blue-700 px-6 py-3 rounded-full w-fit transition-colors" href="#">
                Play Now
                <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="transform group-hover:rotate-0 transition-all duration-500 ease-out md:w-[26rem] bg-slate-900 w-[20rem] h-[40rem] border-slate-800 border-8 rounded-[3rem] absolute right-[1rem] bottom-[-4rem] shadow-2xl rotate-[-6deg]">
<div className="overflow-hidden w-full h-full bg-cover bg-center rounded-[2.5rem] relative bg-[url(https://cdn.midjourney.com/998803fa-f971-4a07-bf29-69d4fcb5fa78/0_0.png?w=800&amp;q=80)]" style={{}}>

<div className="flex bg-center z-10 w-full h-48 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a81897e6-7b41-4199-8274-2e8482ec7393_1600w.webp)] bg-cover absolute top-0 items-center justify-center" style={{visibility: 'hidden'}}>
<svg className="lucide lucide-bot w-20 h-20 text-white opacity-50" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="absolute top-12 right-6 left-6">
<div className="bg-white/50 w-24 h-8 rounded-full mb-8" style={{}}></div>
<div className="flex flex-col bg-white/40 h-32 rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm justify-between" style={{}}>
<div className="flex items-center justify-between" style={{}}>
<div className="flex text-xs text-white bg-orange-500 w-8 h-8 rounded-full items-center justify-center">
                        TURBO
                      </div>
<div className="bg-gray-200 w-12 h-2 rounded-full"></div>
</div>
<div className="flex gap-2" style={{}}>
<div className="bg-gray-200 w-8 h-8 rounded-md"></div>
<div className="bg-gray-200 w-24 h-8 rounded-md"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4" style={{}}>
<div className="flex bg-gray-200/30 h-24 rounded-xl backdrop-blur-sm items-center justify-center">
<svg className="lucide lucide-sword text-slate-50 w-6 h-6" data-lucide="sword" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m11 19-6-6"></path>
<path d="m5 21-2-2"></path>
<path d="m8 16-4 4"></path>
<path d="M9.5 17.5 21 6V3h-3L6.5 14.5"></path>
</svg>
</div>
<div className="flex bg-gray-200/30 h-24 rounded-xl backdrop-blur-sm items-center justify-center">
<svg className="lucide lucide-shield text-slate-50 w-[24px] h-[24px]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:p-12 overflow-hidden group bg-center h-96 bg-cover pt-8 pr-8 pb-8 pl-8 relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/271cc6a7-34b3-4021-a220-251dcc1232c8_800w.webp)] animate-blur-in delay-200 bg-fixed" style={{}}>
<div className="opacity-20 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0">
<svg className="lucide lucide-rocket text-white w-32 h-32" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<div className="z-10 flex flex-col h-full relative justify-end">
<span className="uppercase text-xs font-bold text-slate-50 tracking-widest mb-2">
                Editor's Choice
              </span>
<h3 className="text-3xl text-white font-semibold leading-tight mb-4">
                Galaxy Raider X
              </h3>
<a className="text-white hover:opacity-75 transition-opacity inline-flex items-center gap-2" href="#">
                Get App
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="lg:p-12 overflow-hidden group h-96 bg-cover bg-center px-8 py-8 relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/761941af-4608-43b4-83a6-c1a8c200e7d2_800w.webp)] animate-blur-in delay-300 bg-fixed" style={{}}>

<div className="z-10 flex flex-col h-full relative justify-end">
<span className="uppercase text-xs font-bold text-slate-50 tracking-widest mb-2">
                Fantasy RPG
              </span>
<h3 className="text-3xl text-white font-semibold leading-tight mb-4">
                Kingdom Defense
              </h3>
<a className="text-white hover:opacity-75 transition-opacity inline-flex items-center gap-2" href="#">
                Play Free
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 overflow-hidden bg-slate-900 h-96 relative animate-blur-in delay-500">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b41d26d-ba9b-458e-8df2-7a794ed63be7_1600w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center" style={{}}>
<div className="transform bg-white/10 w-48 h-full border-white/20 border-l backdrop-blur-sm rotate-12 scale-150"></div>
<div className="absolute bg-gradient-to-b from-yellow-500 to-yellow-700 w-32 h-64 rounded-t-full rounded-b-xl shadow-2xl border-t border-white/30 flex items-center justify-center flex-col gap-2">
<div className="w-16 h-16 border-2 border-white/50 rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-car-front w-8 h-8" data-lucide="car-front" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path>
<path d="M7 14h.01"></path>
<path d="M17 14h.01"></path>
<rect height="8" rx="2" width="18" x="3" y="10"></rect>
<path d="M5 18v2"></path>
<path d="M19 18v2"></path>
</svg>
</div>
<div className="text-white text-center text-xs font-bold tracking-widest mt-2">
                  FASTLANE
                </div>
</div>
</div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="text-2xl text-white font-semibold">
                Asphalt Drifters
              </h3>
</div>
</div>

<div className="group lg:p-12 bg-center h-96 bg-cover pt-8 pr-8 pb-8 pl-8 relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce091baa-d550-4abf-94fb-04084db8d527_800w.webp)] animate-blur-in delay-700 bg-fixed">
<div className="w-full px-8 py-8 absolute bottom-0 left-0">
<span className="uppercase block text-xs font-bold text-slate-50 tracking-widest mb-1">
                Building Blocks
              </span>
<h3 className="text-3xl font-semibold text-slate-50 mb-2">
                Block Master Pro
              </h3>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-gray-700 border-blue-500/30 border-t py-24 relative">

<div className="-mr-20 -mt-20 filter animate-blob bg-blue-500 opacity-20 mix-blend-multiply w-96 h-96 rounded-full absolute top-0 right-0 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

<div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 gap-x-6 gap-y-6 justify-between animate-slide-in">
<div className="max-w-xl">
<span className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-3 block">
              Discover More
            </span>
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1]">
              Featured Categories
            </h2>
<p className="text-blue-100 mt-4 text-lg font-light leading-relaxed">
              Discover the most addictive iPhone games designed to spark
              creativity, logic, and endless hours of fun.
            </p>
</div>
<a className="group flex items-center gap-2 text-white font-semibold uppercase tracking-wider text-sm border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300" href="#">
            View All Genres
            <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<a className="group overflow-hidden isolate h-[28rem] relative shadow-2xl animate-slide-in delay-200" href="#">
<img alt="Creative Arts" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/688cd65c-7f0c-42f3-a8a4-ec34ab859745_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-palette w-6 h-6" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</svg>
</div>
<span className="text-orange-300 text-xs font-bold tracking-widest uppercase mb-2">
                Indie Gems
              </span>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-2 group-hover:text-orange-200 transition-colors">
                Artistic Journeys
              </h3>
<div className="h-0 group-hover:h-6 overflow-hidden transition-all duration-300">
<p className="text-white/80 text-sm font-medium">
                  Beautiful narratives and unique styles.
                </p>
</div>
</div>
</a>

<a className="group overflow-hidden isolate h-[28rem] relative shadow-2xl animate-slide-in delay-300" href="#">
<img alt="STEM Learning" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41466c73-a9de-4e10-ae1b-0dffbc549a96_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-microscope w-6 h-6" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18h8"></path>
<path d="M3 22h18"></path>
<path d="M14 22a7 7 0 1 0 0-14h-1"></path>
<path d="M9 14h2"></path>
<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
</svg>
</div>
<span className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-2">
                Masterminds
              </span>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-2 group-hover:text-blue-200 transition-colors">
                Strategy &amp; Sim
              </h3>
<div className="h-0 group-hover:h-6 overflow-hidden transition-all duration-300">
<p className="text-white/80 text-sm font-medium">
                  Base building and tactical warfare.
                </p>
</div>
</div>
</a>

<a className="group overflow-hidden isolate h-[28rem] relative shadow-2xl animate-slide-in delay-500" href="#">
<img alt="Active Play" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6be8857-eb8d-4e60-9a94-1167f48655ef_800w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-trophy w-6 h-6" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
<path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
<path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
<path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
</svg>
</div>
<span className="text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-2">
                Battle Royale
              </span>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-2 group-hover:text-fuchsia-200 transition-colors">
                Multiplayer Action
              </h3>
<div className="h-0 group-hover:h-6 overflow-hidden transition-all duration-300">
<p className="text-white/80 text-sm font-medium">
                  Compete with players worldwide.
                </p>
</div>
</div>
</a>
</div>

<div className="mt-12 flex flex-wrap gap-3 justify-center">
<a className="px-5 py-2.5 bg-blue-700 hover:bg-white hover:text-blue-600 text-white rounded-full text-xs font-bold tracking-wide uppercase transition-colors border border-blue-500/30" href="#">
            Free to Play
          </a>
<a className="px-5 py-2.5 bg-blue-700 hover:bg-white hover:text-blue-600 text-white rounded-full text-xs font-bold tracking-wide uppercase transition-colors border border-blue-500/30" href="#">
            Arcade
          </a>
<a className="px-5 py-2.5 bg-blue-700 hover:bg-white hover:text-blue-600 text-white rounded-full text-xs font-bold tracking-wide uppercase transition-colors border border-blue-500/30" href="#">
            Puzzle
          </a>
<a className="px-5 py-2.5 bg-blue-700 hover:bg-white hover:text-blue-600 text-white rounded-full text-xs font-bold tracking-wide uppercase transition-colors border border-blue-500/30" href="#">
            Action
          </a>
<a className="px-5 py-2.5 bg-blue-700 hover:bg-white hover:text-blue-600 text-white rounded-full text-xs font-bold tracking-wide uppercase transition-colors border border-blue-500/30" href="#">
            Editors' Choice
          </a>
</div>
</div>
</section>

<section className="bg-blue-600 py-24 border-t border-blue-500">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
<div className="lg:col-span-1">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
            Top Studios
          </h2>
<p className="text-blue-100 text-base leading-relaxed mb-8">
            Featuring hits from the world's best mobile game developers.
          </p>
<a className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all" href="#">
            See All Studios
            <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-px bg-blue-500/30 border border-blue-500/30">

<div className="aspect-square flex hover:bg-blue-500 transition-colors group cursor-pointer bg-blue-600 border-blue-500/30 border pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<svg className="lucide lucide-puzzle w-10 h-10 text-white/70 group-hover:text-white transition-colors" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
</svg>
</div>
<div className="aspect-square bg-blue-600 flex items-center justify-center p-8 hover:bg-blue-500 transition-colors group cursor-pointer border border-blue-500/30">
<svg className="lucide lucide-gamepad w-10 h-10 text-white/70 group-hover:text-white transition-colors" data-lucide="gamepad" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="10" y1="12" y2="12"></line>
<line x1="8" x2="8" y1="10" y2="14"></line>
<line x1="15" x2="15.01" y1="13" y2="13"></line>
<line x1="18" x2="18.01" y1="11" y2="11"></line>
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
</svg>
</div>
<div className="aspect-square bg-blue-600 flex items-center justify-center p-8 hover:bg-blue-500 transition-colors group cursor-pointer border border-blue-500/30">
<svg className="lucide lucide-zap w-10 h-10 text-white/70 group-hover:text-white transition-colors" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<div className="aspect-square bg-blue-600 flex items-center justify-center p-8 hover:bg-blue-500 transition-colors group cursor-pointer border border-blue-500/30">
<svg className="lucide lucide-wind w-10 h-10 text-white/70 group-hover:text-white transition-colors" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path>
<path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path>
<path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path>
</svg>
</div>
<div className="aspect-square bg-blue-600 flex items-center justify-center p-8 hover:bg-blue-500 transition-colors group cursor-pointer border border-blue-500/30">
<svg className="lucide lucide-dices w-10 h-10 text-white/70 group-hover:text-white transition-colors" data-lucide="dices" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" ry="2" width="12" x="2" y="10"></rect>
<path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"></path>
<path d="M6 18h.01"></path>
<path d="M10 14h.01"></path>
<path d="M15 6h.01"></path>
<path d="M18 9h.01"></path>
</svg>
</div>
<div className="aspect-square bg-blue-600 flex items-center justify-center p-8 hover:bg-blue-500 transition-colors group cursor-pointer border border-blue-500/30">
<svg className="lucide lucide-box w-10 h-10 text-white/70 group-hover:text-white transition-colors" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
</div>
<div className="aspect-square bg-blue-600 flex items-center justify-center p-8 hover:bg-blue-500 transition-colors group cursor-pointer border border-blue-500/30">
<svg className="lucide lucide-crown w-10 h-10 text-white/70 group-hover:text-white transition-colors" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
<path d="M5 21h14"></path>
</svg>
</div>
<div className="aspect-square bg-blue-600 flex items-center justify-center p-8 hover:bg-blue-500 transition-colors group cursor-pointer border border-blue-500/30">
<svg className="lucide lucide-layers w-10 h-10 text-white/70 group-hover:text-white transition-colors" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="bg-blue-600 pb-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="bg-blue-500 rounded-3xl overflow-hidden relative">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="h-64 lg:h-96 bg-white relative overflow-hidden p-6">

<div className="absolute inset-0 bg-blue-200">
<div className="w-full h-full bg-[radial-gradient(circle,transparent_20%,#eff6ff_20%)] bg-[length:20px_20px] p-4">
<div className="w-full h-full bg-white shadow-xl relative overflow-hidden flex items-center justify-center">
<div className="w-[150%] h-[150%] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/625b0919-b519-4de0-933c-ea927bf922fd_1600w.webp)] bg-cover bg-center absolute rotate-12" style={{}}></div>
<div className="relative z-10 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-inner">
<svg className="lucide lucide-trophy w-16 h-16 text-slate-900" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
<path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
<path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
<path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="p-12 lg:p-16 bg-blue-700 flex flex-col justify-center relative">
<div className="absolute top-8 right-8 flex gap-2">
<button className="w-8 h-8 rounded-full border border-blue-400 flex items-center justify-center text-white hover:bg-blue-600">
<svg className="lucide lucide-arrow-left w-3 h-3" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<button className="w-8 h-8 rounded-full border border-blue-400 flex items-center justify-center text-white hover:bg-blue-600">
<svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="mb-2 flex items-center gap-2">
<span className="text-xs font-bold tracking-widest text-blue-300 uppercase">
                  Ages 3-5
                </span>
<span className="w-px h-3 bg-blue-400"></span>
<span className="text-xs font-bold tracking-widest text-blue-300 uppercase">
                  Best Sellers
                </span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
                Game of the Year: Unwrap the Magic
              </h2>
<div className="flex items-center gap-2 mb-8">
<span className="w-1.5 h-1.5 bg-white rounded-full"></span>
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
</div>
<a className="inline-flex items-center text-sm font-semibold text-white uppercase tracking-wider border-b border-blue-400 pb-1 w-fit hover:border-white transition-colors" href="#">
                Read Guide
                <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 border-blue-600 border-t pt-20 pb-12 animate-fade-in delay-200">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start mb-20">

<div className="lg:col-span-4">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-white flex items-center justify-center font-bold text-slate-900 brand-font text-2xl border-2 border-orange-500 rounded-lg">
                P
              </div>
<div className="leading-none">
<span className="block text-2xl font-bold text-white uppercase tracking-tighter brand-font">
                  Play
                </span>
<span className="block text-2xl font-bold text-blue-200 uppercase tracking-tighter brand-font">
                  Wonder
                </span>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-wrap gap-8 lg:gap-16 lg:justify-end">
<a className="text-sm font-semibold text-white uppercase tracking-wider hover:text-blue-200 transition-colors" href="#">
              Games
            </a>
<a className="text-sm font-semibold text-white uppercase tracking-wider hover:text-blue-200 transition-colors" href="#">
              Categories
            </a>
<a className="text-sm font-semibold text-white uppercase tracking-wider hover:text-blue-200 transition-colors" href="#">
              Top Charts
            </a>
<a className="text-sm font-semibold text-white uppercase tracking-wider hover:text-blue-200 transition-colors" href="#">
              Brands
            </a>
<a className="text-sm font-semibold text-white uppercase tracking-wider hover:text-blue-200 transition-colors" href="#">
              Sale
            </a>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-blue-600/50">
<div className="text-blue-300 text-xs mb-4 md:mb-0">
            © 2024 Play Wonder Games. All Rights Reserved.
          </div>
<div className="flex items-center gap-6">
<span className="text-white font-semibold text-lg tracking-tight">
              Join the Fun
            </span>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:scale-110 transition-transform" href="#">
<svg className="lucide lucide-mail w-5 h-5 fill-current" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</a>
<a className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white border border-blue-500 hover:scale-110 transition-transform" href="#">
<svg className="lucide lucide-twitter w-5 h-5 fill-current" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white border border-blue-500 hover:scale-110 transition-transform" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white border border-blue-500 hover:scale-110 transition-transform" href="#">
<svg className="lucide lucide-facebook w-5 h-5 fill-current" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
