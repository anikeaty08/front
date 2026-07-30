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



window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  const volumeRange = document.getElementById('volumeRange');
  const volumeDisplay = document.getElementById('volumeDisplay');
  if (volumeRange && volumeDisplay) {
    volumeRange.addEventListener('input', e => {
      volumeDisplay.textContent = e.target.value + '%';
    });
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("/assets/caafb46f-4cfe-4d82-8dfd-72321d98ac70_3840w.jpg")`}}></div>
<div className="max-w-screen-2xl md:p-8 mr-auto ml-auto pt-4 pr-4 pb-4 pl-4">
<div className="bg-neutral-900/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transform translate-y-8 opacity-0 animate-[slideUp_0.6s_ease-out_0.2s_forwards]">

<div className="flex border-white/10 border-b pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"><svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"><svg className="lucide lucide-undo w-5 h-5" data-lucide="undo" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path></svg></button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"><svg className="lucide lucide-redo w-5 h-5" data-lucide="redo" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 7v6h-6"></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path></svg></button>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"><svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg></button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"><svg className="lucide lucide-type w-5 h-5" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg></button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"><svg className="lucide lucide-square w-5 h-5" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg></button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"><svg className="lucide lucide-mouse-pointer w-5 h-5" data-lucide="mouse-pointer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 12.586 19 19"></path><path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path></svg></button>
</div>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="" className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover" src="/assets/71fe71cd-cd57-472e-82c9-53d663c51c9b_320w.jpg" />
<img alt="" className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover" src="/assets/1b33be0b-d1be-4f7e-99f3-df83494621cb_320w.jpg" style={{}} />
<img alt="" className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover" src="/assets/17ae146c-1c35-492c-8da7-7936a3732309_320w.jpg" style={{}} />
</div>
<button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors duration-200 px-3 py-2 rounded-lg text-sm font-medium">
<svg className="lucide lucide-upload w-4 h-4" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
          Render
        </button>
</div>
</div>

<div className="flex flex-col lg:flex-row">

<aside className="lg:w-1/5 opacity-0 animate-[slideRight_0.6s_ease-out_0.4s_forwards] border-white/10 border-r"><div className="p-4 space-y-6">
<h2 className="text-lg font-semibold tracking-tight">Media Library</h2>
<div className="relative">
<input className="w-full placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm bg-neutral-800 border-white/5 border rounded-lg pt-2 pr-3 pb-2 pl-9" placeholder="Search assets" type="text" />
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="max-h-[75vh] overflow-y-auto pr-2 space-y-4">
<div className="flex gap-3 hover:bg-white/5 cursor-pointer transition-colors duration-200 rounded-lg pt-2 pr-2 pb-2 pl-2 items-center">
<img alt="" className="w-24 h-14 rounded-lg object-cover" src="/assets/4f2e4c2d-f99f-4851-a994-84f0eda2453b_320w.jpg" style={{}} />
<div className="flex-1">
<span className="block text-xs text-neutral-400">07:23</span>
<p className="text-sm line-clamp-2">Product showcase demo...</p>
</div>
</div>
<div className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors duration-200">
<img alt="" className="w-24 h-14 rounded-lg object-cover" src="/assets/97a78864-b1aa-40f8-8970-19afe1729b3e_320w.jpg" style={{}} />
<div className="flex-1">
<span className="block text-xs text-neutral-400">2:15</span>
<p className="text-sm line-clamp-2">Brand storytelling intro...</p>
</div>
</div>
<div className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors duration-200">
<img alt="" className="w-24 h-14 rounded-lg object-cover" src="/assets/63734b64-3888-4b82-9dae-181a2f5b4fcd_320w.jpg" style={{}} />
<div className="flex-1">
<span className="block text-xs text-neutral-400">1:42</span>
<p className="text-sm line-clamp-2">Customer testimonial...</p>
</div>
</div>
<div className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors duration-200">
<img alt="" className="w-24 h-14 rounded-lg object-cover" src="/assets/3834ac14-b247-4d1c-b43a-28feb7f8002e_320w.jpg" style={{}} />
<div className="flex-1">
<span className="block text-xs text-neutral-400">3:30</span>
<p className="text-sm line-clamp-2">Nature landscape time-lapse...</p>
</div>
</div>
<div className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors duration-200">
<img alt="" className="w-24 h-14 rounded-lg object-cover" src="/assets/3757c353-e74a-45f8-9e1e-5794c6b10185_800w.jpg" style={{}} />
<div className="flex-1">
<span className="block text-xs text-neutral-400">4:12</span>
<p className="text-sm line-clamp-2">City skyline sunset view...</p>
</div>
</div>
<div className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors duration-200">
<img alt="" className="w-24 h-14 rounded-lg object-cover" src="/assets/2ca62f36-96a5-4f49-9bfe-1c4f0021de9e_320w.jpg" style={{}} />
<div className="flex-1">
<span className="block text-xs text-neutral-400">5:05</span>
<p className="text-sm line-clamp-2">Mountain hiking adventure...</p>
</div>
</div>
</div>
</div></aside>

<main className="flex-1 lg:border-r opacity-0 animate-[scaleIn_0.6s_ease-out_0.6s_forwards] border-white/10">
<div className="lg:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="aspect-video relative overflow-hidden bg-neutral-800 border-white/5 border rounded-xl">
<img alt="" className="w-full h-full object-cover" src="/assets/c4a261f6-cf8f-4ed8-8fa8-00fe2d3b1d61_800w.jpg" style={{}} />

<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
<div className="flex items-center gap-4 text-xs">
<button className="p-1 hover:bg-white/10 rounded transition-colors duration-200"><svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg></button>
<span id="currentTime">02:47</span>/<span className="" id="totalTime">05:30</span>
<input className="flex-1 h-1 bg-neutral-700 rounded appearance-none cursor-pointer [accent-color:#c084fc]" max="100" min="0" type="range" value="50" />
<button className="p-1 hover:bg-white/10 rounded transition-colors duration-200"><svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg></button>
</div>
</div>
</div>
</div>
</main>

<aside className="lg:w-1/4 opacity-0 animate-[slideLeft_0.6s_ease-out_0.8s_forwards]">
<div className="flex flex-col h-full">

<div className="flex space-x-1 px-6 pt-6">
<button className="transition-colors duration-200 text-sm font-medium bg-neutral-800 rounded-t-lg pt-2 pr-4 pb-2 pl-4">Video</button>
<button className="hover:bg-neutral-800/70 transition-colors duration-200 text-sm rounded-t-lg pt-2 pr-4 pb-2 pl-4">Animation</button>
<button className="hover:bg-neutral-800/70 transition-colors duration-200 text-sm rounded-t-lg pt-2 pr-4 pb-2 pl-4">Tracking</button>
</div>
<div className="flex-1 bg-neutral-800 rounded-tl-xl px-6 py-6 space-y-8 border border-white/5">

<div className="space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="relative">
</span>
<span className="text-sm font-medium">Volume</span>
</div>
<span className="text-2xl font-semibold" id="volumeDisplay">68%</span>
</div>
<input className="w-full h-2 appearance-none cursor-pointer [accent-color:#c084fc] bg-neutral-700 rounded" id="volumeRange" max="100" min="0" type="range" value="82" />
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-music w-4 h-4" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<span className="">Ambient Focus Flow Mix...</span>
<svg className="lucide lucide-chevron-down w-4 h-4 ml-auto" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="space-y-4">
<h3 className="font-medium">Color Grading</h3>
<div className="flex gap-4 text-xs">
<button className="px-3 py-1 rounded-full bg-white/10 transition-colors duration-200">Levels</button>
<button className="px-3 py-1 rounded-full hover:bg-white/10 transition-colors duration-200">Saturation</button>
<button className="px-3 py-1 rounded-full hover:bg-white/10 transition-colors duration-200">LUT</button>
<button className="px-3 py-1 rounded-full hover:bg-white/10 transition-colors duration-200">Temp</button>
</div>
<div className="w-full h-24 relative overflow-hidden bg-[url(/assets/ebb77f71-46e3-4f1e-b8b5-d1bbe5a39202_800w.jpg)] bg-cover border-white/10 border rounded-lg">
<svg className="absolute inset-0 opacity-50 w-[24px] h-[24px]" preserveaspectratio="none" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 600 100">
<path className="" d="M0 50 Q50 10 100 50 T200 50 T300 50 T400 50 T500 50 T600 50" fill="none" stroke="#fff" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="bg-neutral-900/60 rounded-xl p-4 space-y-4 border border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="/assets/81508906-af60-495c-ac86-8039b3832a33_320w.jpg" style={{}} />
<div className="">
<p className="text-sm">Hey Sarah!</p>
<p className="text-xs text-neutral-400">Ready to create magic?</p>
</div>
</div>
<button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"><svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg></button>
</div>
<div className="space-y-2">
<button className="w-full flex items-center gap-3 bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 px-3 py-2 rounded-lg text-sm border border-white/5">
<svg className="lucide lucide-pen-line w-4 h-4" data-lucide="pen-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg>
                  Auto Captions
                </button>
<button className="w-full flex items-center gap-3 bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 px-3 py-2 rounded-lg text-sm border border-white/5">
<svg className="lucide lucide-image w-4 h-4" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                  AI Thumbnails
                </button>
<button className="w-full flex items-center gap-3 bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 px-3 py-2 rounded-lg text-sm border border-white/5">
<svg className="lucide lucide-smile w-4 h-4" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
                  Smart Crops
                </button>
</div>
<div className="relative">
<input className="w-full bg-neutral-800 rounded-lg py-2 pl-4 pr-10 placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-600 border border-white/5" placeholder="Describe your vision..." type="text" />
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-violet-400 transition-colors duration-200">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>
</div>
</div>
</aside>
</div>

<div className="opacity-0 animate-[slideUp_0.6s_ease-out_1.0s_forwards] bg-neutral-900/80 border-white/10 border-t pt-4 pr-6 pb-4 pl-6 space-y-4">

<div className="w-full flex gap-3 select-none overflow-x-auto scrollbar-thin text-sm bg-[#1b1c20] border-[rgba(255,255,255,0.08)] border rounded-xl border-t border-b pt-2 pr-2 pb-1 pl-2 items-center">

<div className="flex items-center gap-1 flex-shrink-0">
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `0ms`}} type="button">
<svg className="lucide lucide-mouse-pointer w-4 h-4" data-lucide="mouse-pointer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 12.586 19 19"></path><path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path></svg>
</button>
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `50ms`}} type="button">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<span className="h-4 w-px bg-[rgba(255,255,255,0.08)] mx-1 flex-shrink-0"></span>

<div className="flex items-center gap-1 flex-shrink-0">
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `100ms`}} type="button">
<svg className="lucide lucide-corner-up-left w-4 h-4" data-lucide="corner-up-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path><path d="M9 14 4 9l5-5"></path></svg>
</button>
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `150ms`}} type="button">
<svg className="lucide lucide-corner-up-right w-4 h-4" data-lucide="corner-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 14 5-5-5-5"></path><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path></svg>
</button>
</div>

<span className="h-4 w-px bg-[rgba(255,255,255,0.08)] mx-1 flex-shrink-0"></span>

<div className="flex gap-1 overflow-x-auto scrollbar-thin flex-shrink-0 py-2 items-center">
<button className="opacity-0 transform -translate-y-1 hover:bg-white/5 transition-colors duration-150 rounded pt-1 pr-1 pb-1 pl-1" style={{animationDelay: `200ms`}} type="button">
<svg className="lucide lucide-crop w-4 h-4" data-lucide="crop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2v14a2 2 0 0 0 2 2h14"></path><path d="M18 22V8a2 2 0 0 0-2-2H2"></path></svg>
</button>
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `250ms`}} type="button">
<svg className="lucide lucide-square w-4 h-4" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</button>
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `300ms`}} type="button">
<svg className="lucide lucide-circle w-4 h-4" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</button>
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded relative transition-colors duration-150" style={{animationDelay: `350ms`}} type="button">
<svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="absolute -top-0.5 -right-0.5 text-[9px] leading-none font-medium text-black bg-[#05d9ff] rounded pt-1 pr-1 pb-0.5 pl-1">Free</span>
</button>
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `400ms`}} type="button">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `450ms`}} type="button">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</button>
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `500ms`}} type="button">
<svg className="lucide lucide-scissors w-4 h-4" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</button>
</div>

<span className="h-4 w-px bg-[rgba(255,255,255,0.08)] mx-1 flex-shrink-0"></span>

<div className="flex items-center gap-1 flex-shrink-0">
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `550ms`}} type="button">
<svg className="lucide lucide-mic w-4 h-4" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
</div>

<span className="h-4 w-px bg-[rgba(255,255,255,0.08)] mx-1 flex-shrink-0"></span>

<div className="flex items-center gap-1 flex-shrink-0">
<button className="opacity-0 transform -translate-y-1 p-1 bg-[#05d9ff]/20 hover:bg-[#05d9ff]/30 rounded transition-colors duration-150" style={{animationDelay: `600ms`}} type="button">
<svg className="lucide lucide-video w-4 h-4 text-[#05d9ff]" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</button>
<button className="opacity-0 transform -translate-y-1 p-1 bg-[#05d9ff]/20 hover:bg-[#05d9ff]/30 rounded transition-colors duration-150" style={{animationDelay: `650ms`}} type="button">
<svg className="lucide lucide-monitor w-4 h-4 text-[#05d9ff]" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</button>
<button className="opacity-0 transform -translate-y-1 p-1 bg-[#05d9ff]/20 hover:bg-[#05d9ff]/30 rounded relative transition-colors duration-150" style={{animationDelay: `700ms`}} type="button">
<svg className="lucide lucide-video-off w-4 h-4 text-[#05d9ff]" data-lucide="video-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"></path><path className="" d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"></path><path d="m2 2 20 20"></path></svg>
<svg className="lucide lucide-chevron-down w-3 h-3 absolute -right-0.5 -bottom-0.5 text-[#05d9ff]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<span className="h-4 w-px bg-[rgba(255,255,255,0.08)] mx-1 flex-shrink-0"></span>

<div className="flex items-center gap-2 flex-shrink-0">
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `750ms`}} type="button">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<div className="opacity-0 transform -translate-y-1" style={{animationDelay: `800ms`}}>
<input className="w-20 h-1" max="200" min="10" type="range" value="80" />
</div>
<button className="opacity-0 transform -translate-y-1 p-1 hover:bg-white/5 rounded transition-colors duration-150" style={{animationDelay: `850ms`}} type="button">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="flex gap-8 overflow-x-auto text-xs text-neutral-400 items-center">
<span>00:00:00</span>
<span>00:00:30</span>
<span className="">00:01:00</span>
<span className="">00:01:30</span>
<span>00:02:00</span>
<span className="">00:02:30</span>
<span className="">00:03:00</span>
<span className="">00:03:30</span>
<span className="">00:04:00</span>
<span className="">00:04:30</span>
<span className="">00:05:00</span>
<span>00:05:30</span>
<span className="">00:06:00</span>
<span className="">00:06:30</span>
<span>00:07:00</span>
<span>00:07:30</span>
<span>00:08:00</span>
<span>00:08:30</span>
<span>00:09:00</span>
<span>00:09:30</span>
<span>00:10:00</span>
</div>

<div className="space-y-3">

<div className="flex items-center gap-3">
<button className="p-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-200 border border-white/5"><svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></button>
<button className="p-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-200 border border-white/5"><svg className="lucide lucide-volume-x w-4 h-4" data-lucide="volume-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line></svg></button>
<div className="flex-1 bg-neutral-800 rounded-lg h-10 relative overflow-hidden border border-white/5">
<div className="absolute left-0 top-0 h-full w-1/3 bg-white/10 rounded-l"></div>
</div>
</div>

<div className="flex items-center gap-3">
<button className="p-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-200 border border-white/5"><svg className="lucide lucide-video w-4 h-4" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg></button>
<button className="p-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-200 border border-white/5"><svg className="lucide lucide-mic w-4 h-4" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg></button>
<div className="flex-1 h-10 relative overflow-hidden bg-neutral-800 border-white/5 border rounded-lg" style={{boxShadow: `0 0 0 2px #7c3aed`}}>
<div className="flex absolute inset-0 rounded-lg overflow-hidden pointer-events-none select-none">
<img alt="Video Frame 1" className="w-1/5 h-full object-cover" src="/assets/63fe2476-0344-437c-8a76-061567c16d68_800w.jpg" style={{}} />
<img alt="Video Frame 2" className="w-1/5 h-full object-cover" src="/assets/16e0f42e-fb68-4e17-9309-3280af01fb86_800w.jpg" style={{}} />
<img alt="Video Frame 3" className="w-1/5 h-full object-cover" src="/assets/b1c63d47-0d9d-4b44-9e0c-263cef27b106_800w.jpg" style={{}} />
<img alt="Video Frame 4" className="w-1/5 h-full object-cover" src="/assets/59b843dc-0c59-43a4-a938-a6002d6623cf_800w.jpg" style={{}} />
<img alt="Video Frame 5" className="w-1/5 h-full object-cover" src="/assets/f83949d8-67f4-44e7-bd91-b1f427402651_800w.jpg" />
</div>
<div className="absolute left-1/4 top-0 h-full w-1/2 bg-violet-600/30 border-violet-600 border rounded"></div>
<div className="absolute inset-0 rounded-lg border-2 border-violet-400 pointer-events-none"></div>
</div>
</div>

<div className="flex items-center gap-3">
<button className="p-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-200 border border-white/5"><svg className="lucide lucide-mic w-4 h-4" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg></button>
<button className="p-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-200 border border-white/5"><svg className="lucide lucide-volume-2 w-4 h-4" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
<div className="flex-1 bg-neutral-800 rounded-lg h-10 relative overflow-hidden border border-white/5">
<svg className="absolute inset-0 w-full h-full text-violet-400 opacity-50" preserveaspectratio="none" viewBox="0 0 500 40">
<polyline className="" fill="none" points="0,20 20,10 40,30 60,15 80,25 100,5 120,20 140,30 160,15 180,25 200,10 220,20 240,30 260,15 280,25 300,10 320,20 340,30 360,15 380,25 400,10 420,20 440,30 460,15 480,25 500,20" stroke="currentColor" strokeWidth="2"></polyline>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
