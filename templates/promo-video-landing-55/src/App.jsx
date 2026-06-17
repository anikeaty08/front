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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function startVideo() {
            // Hide Overlay
            const overlay = document.getElementById('playOverlay');
            overlay.style.opacity = '0';
            setTimeout(() => overlay.style.display = 'none', 500);

            // Play Music
            const audio = document.getElementById('bgMusic');
            audio.volume = 0.2; // Soft background music
            audio.play().catch(e => console.log("Audio play blocked by browser."));

            // Start CSS Animations
            const animatedElements = document.querySelectorAll('.scene-anim');
            animatedElements.forEach(el => {
                el.style.animationPlayState = 'running';
            });
        }
    
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
      

<audio id="bgMusic" loop="" preload="auto">
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
</audio>

<div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2rem] shadow-2xl ring-8 ring-slate-900 overflow-hidden bg-slate-900 flex items-center justify-center group">

<div className="scene-anim absolute inset-0 w-full h-full" style={{animation: 'bgSequence 15s ease-in-out forwards paused'}}></div>

<div className="absolute inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center text-white cursor-pointer transition-opacity duration-500" id="playOverlay" onclick="startVideo()">
<div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide text-slate-200">Tap to Play Video</span>
</div>

<div className="scene-anim absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0" style={{animation: 'scene1 15s ease-in-out forwards paused'}}>
<div className="relative w-32 h-32 mb-6" style={{animation: 'float 4s ease-in-out infinite'}}>
<iconify-icon className="text-6xl text-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" icon="solar:user-speak-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-3xl text-slate-500 absolute top-0 right-0 -rotate-12" icon="solar:question-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-4xl text-slate-600 absolute bottom-0 left-0 rotate-12" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-2xl text-slate-500 absolute bottom-4 right-2 rotate-45" icon="solar:tag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-2xl tracking-tight font-semibold text-slate-200 mb-2">Too many choices?</h2>
<p className="text-sm text-slate-400">Hard to know what to trust online.</p>
</div>

<div className="scene-anim absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0" style={{animation: 'scene2 15s ease-in-out forwards paused'}}>
<div className="w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-5 mb-6 relative overflow-hidden">

<div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent" style={{animation: 'scanline 2s linear infinite'}}></div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
<iconify-icon className="text-blue-600 text-lg" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="w-24 h-2 bg-slate-100 rounded-full mb-2"></div>
<div className="w-16 h-2 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="flex gap-1 text-emerald-400 mb-3">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base text-slate-200" icon="solar:star-bold"></iconify-icon>
</div>
<div className="w-full h-8 bg-slate-50 rounded-lg flex items-center px-3 gap-2">
<iconify-icon className="text-emerald-500 text-sm" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-slate-500">Analyzing reviews...</span>
</div>
</div>
</div>

<div className="scene-anim absolute inset-0 flex flex-col items-center justify-center text-center opacity-0" style={{animation: 'scene3 15s ease-in-out forwards paused'}}>
<div className="relative flex items-center justify-center mb-6">

<div className="absolute w-24 h-24 bg-emerald-200/50 rounded-full" style={{animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'}}></div>
<div className="absolute w-32 h-32 border border-emerald-200 rounded-full" style={{animation: 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite delay-75'}}></div>

<div className="relative w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
<iconify-icon className="text-white text-4xl" icon="solar:check-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
</div>
<h2 className="text-2xl tracking-tight font-semibold text-emerald-950 mb-1">100% Verified</h2>
<p className="text-sm text-emerald-700/80 font-medium">Safe to purchase</p>
</div>

<div className="scene-anim absolute inset-0 flex flex-col items-center justify-center text-center opacity-0" style={{animation: 'scene4 15s ease-in-out forwards paused'}}>
<div className="relative w-28 h-28 mb-4 flex items-center justify-center" style={{animation: 'float 3s ease-in-out infinite'}}>

<div className="absolute inset-0 bg-blue-200/40 rounded-full blur-xl"></div>
<iconify-icon className="text-6xl text-blue-600 relative z-10" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>

<div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-50 z-20">
<iconify-icon className="text-2xl text-amber-400" icon="solar:emoji-funny-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<h2 className="text-2xl tracking-tight font-semibold text-blue-950 mb-1">Buy with Confidence</h2>
<p className="text-sm text-blue-700/80 font-medium">Exactly what you expect.</p>
</div>

<div className="scene-anim absolute inset-0 flex flex-col items-center justify-center text-center bg-white opacity-0 p-8" style={{animation: 'scene5 15s ease-in-out forwards paused'}}>

<div className="flex items-center justify-center gap-3 group cursor-default mb-6">

<div className="relative flex items-center justify-center w-10 h-10">
<div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-3 border-2 border-blue-600 rounded-t-full border-b-0"></div>
<div className="absolute bottom-1 w-8 h-6 border-2 border-blue-600 rounded-md bg-white"></div>
<div className="absolute -right-2 -bottom-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-[2px] border-white z-10">
<iconify-icon className="text-white text-sm" icon="solar:check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="flex items-baseline gap-1 text-2xl tracking-tighter font-semibold text-slate-900">
<span>Check</span>
<span className="text-blue-600">N</span>
<span>Take</span>
</div>
</div>

<h3 className="text-lg tracking-tight font-medium text-slate-800 mb-8">
                Check First,<br/><span className="text-blue-600">Take Smart.</span>
</h3>

<button className="w-full py-3 px-6 bg-slate-900 hover:bg-slate-800 transition-colors rounded-full text-white text-sm font-medium tracking-wide">
                Start Checking
            </button>
</div>
</div>



    </>
  );
}
