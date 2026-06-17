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
      

<div className="z-0 overflow-hidden pointer-events-none absolute top-0 right-0 bottom-0 left-0">

<div className="tech-grid opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="blur-[120px] bg-indigo-900/10 mix-blend-screen w-[50vw] h-[50vw] rounded-full absolute right-[-10%] bottom-[-20%]"></div>

<div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[40vw] h-[80vh] bg-gradient-to-b from-blue-500/5 via-cyan-500/5 to-transparent blur-[80px] rounded-full"></div>

<div className="absolute inset-0 scanline opacity-10"></div>
</div>

<div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-40"></div>
<div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-40"></div>
<div className="fixed top-0 left-8 w-px h-24 bg-gradient-to-b from-white/20 to-transparent z-40"></div>
<div className="fixed bottom-0 right-8 w-px h-24 bg-gradient-to-t from-white/20 to-transparent z-40"></div>

<header className="relative z-50 w-full px-12 py-6 flex justify-between items-center bg-gradient-to-b from-[#05050A] to-transparent">
<div className="flex items-center gap-5">

<div className="relative w-8 h-8 flex items-center justify-center border border-cyan-500/30 bg-cyan-950/20 rounded-sm">
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
<div className="border-cyan-500/20 border rounded-sm absolute top-0 right-0 bottom-0 left-0 scale-125"></div>
</div>
<div className="">
<h1 className="text-xl tracking-tight font-semibold text-white flex items-center gap-2">
                    NEXUS <span className="text-cyan-500 font-light">TERMINAL</span>
</h1>
<div className="flex items-center gap-2 text-[10px] text-cyan-400/60 font-mono tracking-widest uppercase">
<span className="">Sys.Ready</span>
<span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
<span className="">Ver 4.1.0</span>
</div>
</div>
</div>

</header>

<main className="relative z-10 flex-1 flex items-stretch w-full max-w-[1920px] mx-auto overflow-hidden">

<section className="w-[42%] flex flex-col justify-center pl-16 pr-8 relative z-20">

<div className="overflow-y-auto scroll-smooth w-full max-h-[80vh] pr-4 pb-20 space-y-8">

<div className="flex gap-5 items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(8,145,178,0.2)]">
<svg className="lucide lucide-bot w-5 h-5 text-cyan-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
</div>
<div className="flex flex-col gap-1.5 max-w-[90%]">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-cyan-400 tracking-wide">NEXUS AI</span>
<span className="text-[10px] text-zinc-600 font-mono">14:29:05</span>
</div>
<div className="p-5 bg-[#111118]/80 backdrop-blur-xl border border-white/5 rounded-2xl rounded-tl-sm shadow-xl relative group">

<div className="absolute top-0 right-0 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-1.5 h-1.5 border-t border-r border-white/20"></div>
</div>
<p className="text-base font-light leading-relaxed text-zinc-200">
                                您好，欢迎来到未来科技展厅。我是您的专属数字讲解员。我可以为您介绍本展厅的最新人工智能技术成果，或者回答您关于数字孪生的任何问题。请问您想先了解哪部分内容？
                            </p>
</div>
</div>
</div>

<div className="flex flex-row-reverse gap-5 items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-user w-5 h-5 text-zinc-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="flex flex-col gap-1.5 items-end max-w-[90%]">
<div className="flex items-center gap-2 flex-row-reverse">
<span className="text-xs font-medium text-zinc-400 tracking-wide">VISITOR</span>
<span className="text-[10px] text-zinc-600 font-mono">14:29:45</span>
</div>
<div className="p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl rounded-tr-sm shadow-lg text-right">
<p className="text-base font-light leading-relaxed text-white">
                                这里的数字人技术主要应用在哪些场景？可以详细介绍一下背后的实时渲染技术吗？
                            </p>
</div>
</div>
</div>

<div className="flex gap-5 items-start opacity-90">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(8,145,178,0.2)]">
<svg className="lucide lucide-bot w-5 h-5 text-cyan-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
</div>
<div className="flex flex-col gap-2 w-full">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-cyan-400 tracking-wide">NEXUS AI</span>
<span className="text-[10px] text-zinc-600 font-mono animate-pulse">Computing...</span>
</div>
<div className="p-5 bg-[#111118]/80 backdrop-blur-xl border border-white/5 rounded-2xl rounded-tl-sm w-fit border-l-2 border-l-cyan-500/50">
<div className="flex items-center gap-1">
<span className="w-1 h-3 bg-cyan-400/80 rounded-full animate-[sound-wave_0.8s_ease-in-out_infinite]"></span>
<span className="w-1 h-5 bg-cyan-400/80 rounded-full animate-[sound-wave_1.1s_ease-in-out_infinite_0.1s]"></span>
<span className="w-1 h-2 bg-cyan-400/80 rounded-full animate-[sound-wave_0.9s_ease-in-out_infinite_0.2s]"></span>
</div>
</div>
<div className="flex gap-2 mt-1">
<span className="px-2 py-1 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5">
<svg className="lucide lucide-cpu w-3 h-3" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> Neural Engine Active
                            </span>
</div>
</div>
</div>
</div><div className="absolute top-10 left-10 w-4 h-4 border-l border-t border-cyan-500/30"></div>

<div className="absolute bottom-10 left-16 right-8">
</div>
</section>

<section className="w-[58%] relative flex flex-col items-center justify-end z-10 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[600px] h-[600px] border border-dashed border-cyan-500/10 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]"></div>

<div className="flex avatar-breathe z-20 w-full h-[100%] relative items-end justify-center">
<img alt="AI Digital Human" className="h-[95%] object-contain object-bottom drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/811684cb-dc79-47a8-abcd-03882799eef8_1600w.png" style={{filter: 'drop-shadow(0 0 30px rgba(0, 0, 0, 0.8)) brightness(1.1) contrast(1.1)'}}/>

<div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#05050A] via-[#05050A]/90 to-transparent z-30">
</div>
</div>

<div className="absolute bottom-20 z-40 flex flex-col items-center gap-6 w-full pointer-events-none">

<div className="bg-[#05050A]/60 backdrop-blur-md px-10 py-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col items-center gap-4 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>

<div className="h-12 flex items-center justify-center gap-1.5">
<div className="w-1 bg-cyan-500/80 audio-bar" style={{animationDuration: '0.8s', height: '30%'}}></div>
<div className="w-1 bg-cyan-400 audio-bar" style={{animationDuration: '1.1s', height: '50%'}}></div>
<div className="w-1 bg-blue-500 audio-bar" style={{animationDuration: '0.9s', height: '70%'}}></div>
<div className="w-1 bg-indigo-500 audio-bar" style={{animationDuration: '1.2s', height: '40%'}}></div>
<div className="w-1 bg-cyan-300 audio-bar" style={{animationDuration: '1.0s', height: '90%', boxShadow: '0 0 10px cyan'}}></div>
<div className="w-1 bg-white audio-bar" style={{animationDuration: '0.6s', height: '100%', boxShadow: '0 0 15px white'}}></div>
<div className="w-1 bg-cyan-300 audio-bar" style={{animationDuration: '1.3s', height: '80%', boxShadow: '0 0 10px cyan'}}></div>
<div className="w-1 bg-indigo-500 audio-bar" style={{animationDuration: '0.9s', height: '60%'}}></div>
<div className="w-1 bg-blue-500 audio-bar" style={{animationDuration: '1.1s', height: '40%'}}></div>
<div className="w-1 bg-cyan-400 audio-bar" style={{animationDuration: '0.8s', height: '50%'}}></div>
<div className="w-1 bg-cyan-500/80 audio-bar" style={{animationDuration: '1.4s', height: '30%'}}></div>
</div>
<div className="flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-sm text-cyan-100/80 font-mono tracking-widest uppercase">Voice Synthesis Active</span>
</div>
</div>
</div>

<div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-end pointer-events-none opacity-60">
<div className="flex flex-col items-end gap-1">
<span className="text-[9px] text-zinc-500 uppercase tracking-widest">Render</span>
<span className="text-xs font-mono text-cyan-400">60 FPS</span>
<div className="w-16 h-0.5 bg-zinc-800 rounded-full mt-1 overflow-hidden">
<div className="w-full h-full bg-cyan-500/50"></div>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-[9px] text-zinc-500 uppercase tracking-widest">Poly</span>
<span className="text-xs font-mono text-cyan-400">1.2M</span>
<div className="w-12 h-0.5 bg-zinc-800 rounded-full mt-1 overflow-hidden">
<div className="w-3/4 h-full bg-cyan-500/50"></div>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-[9px] text-zinc-500 uppercase tracking-widest">Load</span>
<span className="text-xs font-mono text-cyan-400">14%</span>
<div className="w-10 h-0.5 bg-zinc-800 rounded-full mt-1 overflow-hidden">
<div className="w-1/4 h-full bg-cyan-500/50"></div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full px-8 py-4 flex justify-between items-center bg-[#05050A]/90 backdrop-blur-sm border-t border-white/5 z-50">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-zinc-500">
<svg className="lucide lucide-globe w-3 h-3" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-[10px] font-mono tracking-wider">NETWORK: GLOBAL_ASIA_01</span>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
<div className="flex items-center gap-6 text-[10px] text-zinc-500 font-mono">
<span className="uppercase">Memory: 16GB</span>
<span className="w-px h-3 bg-zinc-800"></span>
<span className="uppercase">Threads: 32</span>
</div>
</div>


    </>
  );
}
