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



(function () {

  function initUnicorn() {
    if (window.UnicornStudio && window.UnicornStudio.init) {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    }
  }

  if (window.UnicornStudio && window.UnicornStudio.init) {
    initUnicorn();
    return;
  }

  if (!window.UnicornStudio) {
    window.UnicornStudio = { isInitialized:false };
  }

  if (!document.querySelector("script[data-unicorn-loader]")) {

    var s = document.createElement("script");
    s.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";

    s.setAttribute("data-unicorn-loader","true");

    s.onload = function () {
      initUnicorn();
    };

    (document.head || document.body).appendChild(s);
  }

})();



        // Initialize Lucide Icons
        lucide.createIcons();

        // Dynamic Typewriter Looping Effect Script
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('typewriter');
            const text1 = "AI Super Agents power";
            const phrases = [
                " automated testing.",
                " flawless releases.",
                " faster debugging.",
                " continuous delivery."
            ];
            
            let phraseIndex = 0;
            let i = 0; // index for text1
            let j = 0; // index for phrases
            let isDeleting = false;
            let text1Done = false;

            function typeWriter() {
                const currentPhrase = phrases[phraseIndex];
                let content = "";
                
                // Phase 1: Type the static first line
                if (!text1Done) {
                    if (i < text1.length) {
                        content = text1.substring(0, i + 1);
                        container.innerHTML = content + '<span class="typing-cursor"></span>';
                        i++;
                        setTimeout(typeWriter, 50);
                    } else {
                        text1Done = true;
                        setTimeout(typeWriter, 300); // Pause before starting line 2
                    }
                    return;
                }

                // Phase 2: Type & delete the changing phrases on the second line
                if (!isDeleting) {
                    // Typing phase
                    if (j < currentPhrase.length) {
                        content = text1 + "<br>" + currentPhrase.substring(0, j + 1);
                        container.innerHTML = content + '<span class="typing-cursor"></span>';
                        j++;
                        setTimeout(typeWriter, 50);
                    } else {
                        // Pause at the end of the phrase before deleting
                        isDeleting = true;
                        setTimeout(typeWriter, 2500);
                    }
                } else {
                    // Deleting phase
                    if (j > 0) {
                        j--;
                        content = text1 + "<br>" + currentPhrase.substring(0, j);
                        container.innerHTML = content + '<span class="typing-cursor"></span>';
                        setTimeout(typeWriter, 30);
                    } else {
                        // Switch to the next phrase and pause briefly before re-typing
                        isDeleting = false;
                        phraseIndex = (phraseIndex + 1) % phrases.length;
                        setTimeout(typeWriter, 500);
                    }
                }
            }
            
            // Start typing slightly after load
            setTimeout(typeWriter, 300);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="unicorn-bg absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen">
<div className="absolute inset-0 w-full h-full" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="WdVna2EGJHojbGLRHA52">
</div>
</div>
</div>
</div>

<div className="w-full max-w-[1240px] rounded-[2rem] shadow-2xl overflow-hidden relative min-h-[820px] flex flex-col border bg-white border-white/50">

<header className="flex items-center justify-between px-8 py-6 relative z-40">

<div className="flex items-center gap-2.5">

<div className="overflow-hidden flex bg-violet-700 w-7 h-7 rounded-lg relative items-center justify-center">
<div className="absolute bottom-[-4px] right-[-4px] w-[18px] h-[18px] rotate-45 transform bg-white"></div>
</div>
<span className="text-xl text-[#0B0F19] tracking-tight font-geist font-semibold">Antiquity</span>
</div>

<nav className="hidden md:flex items-center gap-8 ml-8">
<a className="text-sm font-medium text-slate-500 flex items-center gap-1 transition-colors font-geist hover:text-slate-900" href="#">
                    Product <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</a>
<a className="text-sm font-medium text-slate-500 flex items-center gap-1 transition-colors font-geist hover:text-slate-900" href="#">
                    Solutions <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</a>
<a className="text-sm font-medium text-slate-500 transition-colors font-geist hover:text-slate-900" href="#">Pricing</a>
<a className="text-sm font-medium text-slate-500 transition-colors font-geist hover:text-slate-900" href="#">Docs</a>
</nav>

<div className="flex items-center gap-6 ml-auto">
<a className="hidden sm:block text-sm font-medium text-slate-500 transition-colors font-geist hover:text-slate-900" href="#">Sign In</a>
<button className="transition-colors hover:bg-[#6d28d9] text-sm font-medium text-white font-geist bg-[#0B0F19] rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm">
                    Get Started
                </button>
</div>
</header>

<main className="flex-1 flex flex-col overflow-hidden z-10 w-full pt-8 pb-20 relative items-center">

<div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-transparent blur-[80px] rounded-full -z-10 pointer-events-none from-purple-100/60 via-blue-50/40">
</div>

<div className="flex gap-4 sm:gap-6 lg:gap-8 z-30 w-full mb-10 pr-4 pl-4 relative justify-center">

<div className="flex flex-col w-[72px] z-10 items-center">
<div className="w-[52px] h-[52px] rounded-2xl border shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:bg-[#6d28d9] hover:border-[#6d28d9] hover:text-white cursor-pointer bg-white border-slate-100 text-slate-400">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-slate-500 text-center whitespace-nowrap font-geist mt-3">AI Generator</span>
</div>

<div className="flex flex-col items-center gap-3 w-[72px]">
<div className="w-[52px] h-[52px] rounded-2xl border shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:bg-[#6d28d9] hover:border-[#6d28d9] hover:text-white cursor-pointer bg-white border-slate-100 text-slate-400">
<i className="w-6 h-6" data-lucide="terminal" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-slate-500 text-center whitespace-nowrap font-geist">CLI Tool</span>
</div>

<div className="flex flex-col gap-3 w-[72px] gap-x-3 gap-y-3 items-center">
<div className="flex cursor-pointer text-white bg-violet-700 w-[52px] h-[52px] rounded-2xl relative top-[-2px] shadow-[0_8px_20px_-6px_rgba(15,23,42,0.6)] items-center justify-center">
<i className="w-6 h-6" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<span className="whitespace-nowrap text-xs font-semibold text-slate-900 font-geist text-center">QA Assistant</span>
</div>

<div className="flex flex-col items-center gap-3 w-[72px]">
<div className="w-[52px] h-[52px] rounded-2xl border shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:bg-[#6d28d9] hover:border-[#6d28d9] hover:text-white cursor-pointer bg-white border-slate-100 text-slate-400">
<i className="w-6 h-6" data-lucide="bug" strokeWidth="1.5"></i>
</div>
<span className="whitespace-nowrap text-xs font-medium text-slate-500 font-geist text-center">Debug Tool</span>
</div>

<div className="flex flex-col items-center gap-3 w-[72px]">
<div className="w-[52px] h-[52px] rounded-2xl border shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:bg-[#6d28d9] hover:border-[#6d28d9] hover:text-white cursor-pointer bg-white border-slate-100 text-slate-400">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<span className="whitespace-nowrap text-xs font-medium text-slate-500 font-geist text-center">Safety</span>
</div>

<div className="flex flex-col items-center gap-3 w-[72px]">
<div className="w-[52px] h-[52px] rounded-2xl border shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:bg-[#6d28d9] hover:border-[#6d28d9] hover:text-white cursor-pointer bg-white border-slate-100 text-slate-400">
<i className="w-6 h-6" data-lucide="link" strokeWidth="1.5"></i>
</div>
<span className="whitespace-nowrap text-xs font-medium text-slate-500 font-geist text-center">Workflows</span>
</div>
</div>


<div className="flex z-10 pointer-events-none w-full h-[360px] max-w-[640px] mb-[-80px] relative items-end justify-center">

<div className="border-[3px] backdrop-blur-[2px] z-0 bg-white/5 w-[480px] h-[100px] border-white/50 rounded-[100%] absolute bottom-12 shadow-[0_30px_60px_rgba(0,0,0,0.03)]">
</div>

<div className="border-t-[1.5px] overflow-hidden z-10 flex flex-col bg-gradient-to-b to-transparent from-purple-400/20 via-pink-300/10 w-[400px] h-[240px] border-white/70 rounded-t-[220px] border-r border-l pb-10 absolute bottom-16 shadow-[inset_0_20px_40px_rgba(255,255,255,0.5)] backdrop-blur-md items-center justify-end">

<div className="absolute top-4 right-12 w-32 h-16 rounded-full blur-[20px] -rotate-[15deg] bg-white/60"></div>
<div className="absolute top-12 left-12 w-40 h-20 rounded-full blur-[24px] rotate-[15deg] bg-white/30"></div>
<div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full blur-xl bg-white/50">
</div>

<div className="relative w-[240px] h-[80px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/30 via-purple-500/20 to-transparent blur-xl rounded-full mb-4 z-0">
</div>

<div className="absolute bottom-16 flex flex-col gap-2.5 opacity-60 z-20">
<div className="w-32 h-1.5 rounded-full blur-[1px] bg-white/80"></div>
<div className="w-48 h-1.5 rounded-full blur-[1px] ml-6 bg-white/50"></div>
<div className="w-24 h-1.5 rounded-full blur-[1px] bg-white/70"></div>
</div>
</div>

<div className="z-20 pointer-events-none absolute top-0 right-0 bottom-0 left-0">

<div className="absolute top-24 left-[15%] animate-[float-slow_4s_ease-in-out_infinite]">
<div className="w-11 h-11 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,1),inset_0_0_12px_rgba(244,63,94,0.3)] relative bg-white">
<i className="w-5 h-5 text-rose-500" data-lucide="bug" strokeWidth="2"></i>
<div className="absolute inset-0 blur-xl -z-10 rounded-full scale-150 bg-rose-400/30"></div>
</div>
</div>

<div className="absolute top-[45%] left-[25%] animate-[float-medium_5s_ease-in-out_infinite_reverse]">
<div className="w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,1),inset_0_0_12px_rgba(249,115,22,0.3)] text-orange-500 text-2xl relative font-geist font-semibold bg-white">
                !
                <div className="absolute inset-0 blur-xl -z-10 rounded-full scale-150 bg-orange-400/30"></div>
</div>
</div>

<div className="absolute top-36 right-[15%] animate-[float-fast_6s_ease-in-out_infinite]">
<div className="w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,1),inset_0_0_12px_rgba(34,197,94,0.3)] relative bg-white">
<i className="w-7 h-7 text-emerald-500" data-lucide="check" strokeWidth="3"></i>
<div className="absolute inset-0 blur-xl -z-10 rounded-full scale-150 bg-emerald-400/30"></div>
</div>
</div>
</div>
</div>
<div className="z-30 flex flex-col text-center w-full mt-4 pr-4 pl-4 relative items-center">
<div className="w-full mb-10 relative flex justify-center">


<h1 aria-hidden="true" className="text-[44px] sm:text-6xl md:text-[72px] leading-[1.05] font-semibold opacity-0 tracking-tight font-geist pointer-events-none select-none">
                AI Super Agents power<br/> continuous delivery.
            </h1>

<h1 className="text-[44px] sm:text-6xl md:text-[72px] leading-[1.05] font-semibold text-[#0B0F19] tracking-tight font-geist w-full h-full absolute top-0 left-0" id="typewriter">A<span className="typing-cursor"></span></h1>
</div>
<div className="flex flex-col sm:flex-row gap-4 mb-10 items-center">
<button className="flex hover:-translate-y-0.5 transition-transform min-w-[180px] text-sm font-medium text-white font-geist bg-violet-700 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_12px_24px_-8px_rgba(15,23,42,0.6)] gap-x-2 gap-y-2 items-center justify-center">
<i className="w-5 h-5" data-lucide="terminal" strokeWidth="1.5"></i> Install CLI
                    </button>
<button className="flex transition-colors min-w-[180px] hover:bg-[#0B0F19] hover:text-white hover:border-[#0B0F19] text-sm font-medium text-slate-700 font-geist bg-white border-slate-200 border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm items-center justify-center">
                        View Demo
                    </button>
</div>

<p className="text-sm text-slate-500 font-medium font-geist">
            Trusted by 10,000+ QA Engineers at <span className="font-semibold font-geist text-slate-900">Netflix</span>,
            <span className="font-semibold font-geist text-slate-900">Uber</span>, and
            <span className="font-semibold font-geist text-slate-900">Stripe</span>
</p>
</div>
</main>
</div>


    </>
  );
}
