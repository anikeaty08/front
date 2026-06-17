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
      

<header className="h-16 border-b border-neutral-800 bg-neutral-950 flex items-center justify-between px-6 shrink-0 z-50">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-white">
<span className="text-2xl font-semibold tracking-tight uppercase">Orienspace</span>

<svg className="text-white" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"></path>
</svg>
</div>
<div className="h-6 w-px bg-neutral-800 mx-2"></div>
<span className="text-lg font-medium text-white tracking-wide">零件检测平台</span>
</div>

<div className="flex items-center gap-6 text-neutral-400">
<button className="hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="minus" strokeWidth="1.5"></i>
</button>
<button className="hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="square" strokeWidth="1.5"></i>
</button>
<button className="hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
</header>

<main className="flex-1 flex flex-col p-6 gap-4 max-w-[1920px] mx-auto w-full h-full">

<div className="flex items-center justify-between shrink-0 px-2">

<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-2.5 h-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">当前模型</span>
<span className="text-sm text-white font-mono tracking-tight">best_v4.engine</span>
</div>
</div>
</div>

<div className="flex items-center gap-8">

<div className="flex items-baseline gap-2">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">FPS</span>
<span className="text-xl text-amber-500 font-mono font-bold tracking-tight">--</span>
</div>

<div className="h-8 w-px bg-neutral-800"></div>

<div className="flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">总计</span>
<span className="text-base text-white font-mono font-medium">0</span>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-emerald-500/80 font-medium uppercase tracking-wider">合格</span>
<span className="text-base text-emerald-400 font-mono font-medium">0</span>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-rose-500/80 font-medium uppercase tracking-wider">NG</span>
<span className="text-base text-rose-400 font-mono font-medium">0</span>
</div>
</div>
</div>
</div>

<div className="flex-1 relative bg-neutral-900 w-full rounded-sm overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center bg-black">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20"></div>

<div className="flex flex-col items-center gap-3 z-20">
<i className="w-8 h-8 text-neutral-700" data-lucide="video-off"></i>
<span className="text-neutral-600 text-sm font-medium tracking-widest uppercase">无视频信号</span>
</div>
</div>

<div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-white/20"></div>
<div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-white/20"></div>
<div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-white/20"></div>
<div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-white/20"></div>
</div>

<div className="shrink-0 pt-2 pb-2">
<div className="grid grid-cols-4 gap-4 h-14">

<button className="group relative bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-sm transition-all duration-200 border border-neutral-800 flex items-center justify-center overflow-hidden">
<span className="text-sm font-medium tracking-wide z-10">选择视频</span>
</button>

<button className="group bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-sm transition-all duration-200 border border-neutral-800 flex items-center justify-center">
<span className="text-sm font-medium tracking-wide">打开摄像头</span>
</button>

<button className="group bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-sm transition-all duration-200 border border-neutral-800 flex items-center justify-center">
<span className="text-sm font-medium tracking-wide">切换模型</span>
</button>

<button className="group bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-sm transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.1)]">
<div className="flex items-center gap-2">
<i className="w-4 h-4 fill-current" data-lucide="play"></i>
<span className="text-sm font-medium tracking-wide">开始识别</span>
</div>
</button>
</div>
</div>
</main>


    </>
  );
}
