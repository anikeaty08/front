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
      

<header className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md z-20 shrink-0">
<div className="flex items-center gap-6">
<div className="font-semibold text-xl tracking-tighter text-white uppercase">VUE</div>

<div className="hidden sm:flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-full px-3 py-1.5">
<span className="text-xs font-medium text-zinc-500">Topics:</span>
<span className="text-xs font-medium text-zinc-300">Design</span>
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
<span className="text-xs font-medium text-zinc-300">Technology</span>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors ml-1 flex items-center">
<iconify-icon icon="solar:pen-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-4 text-xs font-medium">
<div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-2.5 py-1 rounded-full border border-emerald-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 relative">
<div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
</div>
<span>34,192 online</span>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:settings-linear" width="16"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">

<section className="flex-1 flex flex-col sm:flex-row lg:flex-col xl:flex-row p-4 gap-4 overflow-hidden relative z-0 bg-black/20">

<div className="flex-1 rounded-xl bg-[#111113] border border-white/5 relative overflow-hidden flex flex-col items-center justify-center shadow-2xl isolate">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zinc-500/10 rounded-full blur-[80px] -z-10"></div>

<div className="flex flex-col items-center gap-4 text-zinc-500">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
<iconify-icon className="animate-[spin_3s_linear_infinite] opacity-70" icon="solar:radar-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium tracking-tight">Looking for someone...</p>
</div>

<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium border border-white/5 flex items-center gap-2 shadow-sm">
<iconify-icon className="text-zinc-400" icon="solar:user-linear" width="14"></iconify-icon> Stranger
                </div>

<button className="absolute top-4 right-4 p-1.5 text-zinc-600 hover:text-red-400 transition-colors rounded-md hover:bg-red-500/10">
<iconify-icon icon="solar:flag-linear" width="16"></iconify-icon>
</button>
</div>

<div className="flex-1 sm:w-1/3 sm:flex-none lg:w-full lg:flex-1 xl:w-1/3 xl:flex-none rounded-xl bg-[#111113] border border-white/5 relative overflow-hidden flex items-center justify-center isolate">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px'}}></div>
<div className="w-10 h-10 rounded-full bg-black/40 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:camera-minimalistic-linear" width="20"></iconify-icon>
</div>

<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium border border-white/5 flex items-center gap-2 shadow-sm">
<iconify-icon className="text-zinc-400" icon="solar:user-circle-linear" width="14"></iconify-icon> You
                </div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 rounded-full bg-[#18181b]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-20">
<button className="w-11 h-11 rounded-full hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all">
<iconify-icon icon="solar:microphone-linear" width="22"></iconify-icon>
</button>
<button className="w-11 h-11 rounded-full hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all">
<iconify-icon icon="solar:videocamera-linear" width="22"></iconify-icon>
</button>
<div className="w-px h-6 bg-white/10 mx-2"></div>

<button className="h-11 px-6 rounded-full bg-white text-black font-semibold text-sm flex items-center gap-2 hover:bg-zinc-200 active:scale-95 transition-all shadow-sm">
                    Skip <iconify-icon icon="solar:skip-next-linear" width="18"></iconify-icon>
</button>
<div className="w-px h-6 bg-white/10 mx-2 lg:hidden"></div>

<button className="w-11 h-11 rounded-full hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all lg:hidden relative">
<iconify-icon icon="solar:chat-round-line-linear" width="22"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 border-2 border-[#18181b]"></span>
</button>
</div>
</section>

<aside className="w-full h-[45vh] lg:h-auto lg:w-[380px] border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col bg-[#09090b] z-10 shrink-0 relative">

<div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-black/20">
<h2 className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:chat-round-line-linear" width="16"></iconify-icon>
                    Messages
                </h2>
<div className="flex items-center gap-2">

<label className="flex items-center gap-2 cursor-pointer group">
<span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors">Auto-scroll</span>
<div className="relative w-7 h-4 rounded-full bg-blue-500/20 border border-blue-500/30 transition-colors flex items-center">
<div className="w-3 h-3 rounded-full bg-blue-400 absolute left-[14px] transition-all shadow-sm"></div>
</div>
</label>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 text-sm font-medium" style={{scrollbarWidth: 'none'}}>

<div className="flex items-center gap-3 w-full">
<div className="h-px bg-white/5 flex-1"></div>
<span className="text-xs text-zinc-600 uppercase tracking-tight font-semibold">Chat started</span>
<div className="h-px bg-white/5 flex-1"></div>
</div>

<div className="flex flex-col items-start gap-1.5 w-full pr-8">
<div className="flex items-center gap-2 ml-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<span className="text-xs text-zinc-500">Stranger</span>
</div>
<div className="bg-[#18181b] border border-white/5 text-zinc-300 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm leading-relaxed">
                        hey! what are you working on?
                    </div>
</div>

<div className="flex flex-col items-end gap-1.5 w-full pl-8">
<span className="text-xs text-zinc-500 mr-1">You</span>
<div className="bg-white text-black px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-sm leading-relaxed">
                        just building a new interface design, taking a break rn. you?
                    </div>
</div>

<div className="flex flex-col items-start gap-1.5 w-full pr-8">
<div className="flex items-center gap-2 ml-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<span className="text-xs text-zinc-500">Stranger</span>
</div>
<div className="bg-[#18181b] border border-white/5 text-zinc-300 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm leading-relaxed">
                        that's cool! I'm learning some new frontend stuff.
                    </div>
</div>

<div className="flex flex-col items-start gap-1.5 w-full mt-2">
<div className="bg-[#18181b] border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5 w-fit">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-[bounce_1s_infinite_0ms]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-[bounce_1s_infinite_200ms]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-[bounce_1s_infinite_400ms]"></div>
</div>
</div>

<div className="h-2 w-full shrink-0"></div>
</div>

<div className="p-4 border-t border-white/5 bg-[#09090b] relative z-20">
<form className="relative flex items-center" onsubmit="event.preventDefault();">
<input className="w-full bg-[#18181b] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all font-medium shadow-inner" placeholder="Type your message..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors" type="submit">
<iconify-icon className="rotate-45 ml-[-2px]" icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
<div className="text-center mt-3">
<span className="text-[10px] text-zinc-600 font-medium tracking-wide uppercase">Press enter to send</span>
</div>
</div>
</aside>
</main>

    </>
  );
}
