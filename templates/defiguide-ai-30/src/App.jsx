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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    (function () {
      const el = document.querySelector('[data-element-id="aura-emi0tqwvo3hvdwmk"]');
      if (!el || el.__parallaxBound) return;
      el.__parallaxBound = true;

      const speed = 0.25;

      const updateParallax = () => {
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const offsetFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
        const translateY = -offsetFromCenter * speed;
        el.style.transform = `translateY(${translateY}px)`;
      };

      updateParallax();
      window.addEventListener('scroll', updateParallax, { passive: true });
      window.addEventListener('resize', updateParallax);
    })();
  


    window.addEventListener("DOMContentLoaded", () => {
      if (window.lucide) {
        window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<div className="flex-1 flex flex-col">

<header className="w-full border-b backdrop-blur border-neutral-800/80 bg-black/40" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<div className="flex items-center space-x-2">
<div className="h-8 w-8 rounded-lg border flex items-center justify-center bg-emerald-500/20 border-emerald-500/40" style={{}}>
<span className="text-xs font-semibold tracking-tight font-nunito text-emerald-300" style={{}}>DG</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight font-nunito text-neutral-100" style={{}}>DeFiGuide</span>
<span className="text-[11px] tracking-tight font-nunito text-neutral-400" style={{}}>AI crypto transition copilot</span>
</div>
</div>

<nav className="hidden md:flex items-center space-x-8 text-xs font-medium text-neutral-300" style={{}}>
<a className="transition-colors font-nunito hover:text-neutral-50" href="#features" style={{}}>Features</a>
<a className="transition-colors font-nunito hover:text-neutral-50" href="#how-it-works" style={{}}>How it works</a>
<a className="transition-colors font-nunito hover:text-neutral-50" href="#faq" style={{}}>FAQ</a>
</nav>

<div className="flex items-center space-x-3">
<button className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg border hover:border-neutral-500 transition-colors font-nunito border-neutral-700 text-neutral-200 hover:text-neutral-50" style={{}}>
            Log in
          </button>
<a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-tight rounded-lg border transition-colors shadow-sm bg-emerald-500 shadow-emerald-500/30 text-white hover:bg-emerald-400 border-emerald-400/60" href="#chat" style={{}}>
<span className="font-nunito" style={{}}>Start chatting</span>
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</header>

<main className="flex-1">
<section className="relative overflow-hidden border-b bg-gradient-to-b border-neutral-900/80 from-neutral-950 via-neutral-950 to-black" style={{}}>

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-32 right-10 h-64 w-64 rounded-full blur-3xl bg-emerald-500/20" style={{}}></div>
<div className="absolute bottom-0 left-[-5%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" style={{}}></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),transparent_60%)]"></div>
</div>
<div className="sm:px-6 lg:px-8 lg:py-20 max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative">
<div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">

<div className="space-y-7">
<div className="inline-flex items-center px-2.5 py-1 rounded-full border text-[10px] font-medium gap-1 border-neutral-800 bg-neutral-900/70 text-neutral-300" style={{}}>
<div className="w-3 h-3 rounded-full shadow-[0_0_0_6px_rgba(16,185,129,0.28)] bg-blue-400/80" style={{}}></div>
<span className="font-nunito" style={{}}>Live • AI native crypto mentor</span>
</div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter font-geist text-neutral-50" style={{}}>
          Your AI copilot for moving from
          <span className="font-bold tracking-tighter font-geist text-emerald-400" style={{}}>centralized</span>
          to <span className="font-bold tracking-tighter font-geist text-blue-400" style={{}}>decentralized</span> crypto.
        </h1>
<p className="text-sm sm:text-[15px] max-w-xl font-nunito text-neutral-300" style={{}}>
          Ask anything about self-custody, bridging assets, on-chain security, and DeFi strategies—
          in plain language. No jargon, no shilling. Just clear guidance tailored to your risk level.
        </p>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
<a className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold tracking-tight rounded-lg border transition-colors shadow-sm bg-emerald-500 shadow-emerald-500/30 text-white hover:bg-emerald-400 border-emerald-400/70" href="#chat" style={{}}>
<span className="font-nunito" style={{}}>Start chatting with the bot</span>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</a>
<button className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg border hover:border-neutral-500 transition-colors border-neutral-700 text-neutral-200 hover:text-neutral-50" style={{}}>
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-nunito" style={{}}>Watch explainer</span>
</button>
</div>

<div className="pt-5 border-t max-w-md border-neutral-800/70" style={{}}>
<div className="flex flex-wrap items-center gap-4">
<div className="flex -space-x-2">
<img alt="User avatar" className="h-7 w-7 rounded-full border object-cover border-neutral-900" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=80&amp;q=80" style={{}}/>
<img alt="User avatar" className="h-7 w-7 rounded-full border object-cover border-neutral-900" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=80&amp;q=80" style={{}}/>
<img alt="User avatar" className="h-7 w-7 rounded-full border object-cover border-neutral-900" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?auto=format&amp;fit=crop&amp;w=80&amp;q=80" style={{}}/>
<div className="h-7 w-7 rounded-full border text-[10px] flex items-center justify-center font-nunito border-neutral-800 bg-neutral-900 text-neutral-300" style={{}}>
              +2k
            </div>
</div>
<div className="flex flex-col">
<span className="text-[11px] font-nunito text-neutral-300" style={{}}>
                      Helping <span className="font-medium font-nunito text-neutral-50" style={{}}>2,300+</span> users move into
            DeFi with confidence.
            </span>
<span className="text-[10px] mt-0.5 font-nunito text-blue-400/80" style={{}}>No seed phrases stored • No trading execution • Education only</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 -right-4 hidden md:block">
<div className="px-2 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] flex items-center gap-1.5 text-blue-200" style={{}}>
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-nunito" style={{}}>Self-custody best practices</span>
</div>
</div>
<div className="rounded-2xl border backdrop-blur-sm shadow-[0_18px_45px_rgba(15,23,42,0.85)] border-neutral-800/90 bg-neutral-950/70" style={{}}>

<div className="sm:px-5 flex border-neutral-800/90 border-b pt-3 pr-4 pb-3.5 pl-4 items-center justify-between" style={{transform: 'translateY(0px)', transition: 'transform 400ms ease-out'}}>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-gradient-to-br via-cyan-500 to-blue-500 flex items-center justify-center text-[11px] font-semibold tracking-tight border from-emerald-500 font-nunito text-neutral-50 border-neutral-900" style={{}}>
      AI
    </div>
<div className="flex flex-col">
<span className="text-xs font-medium tracking-tight font-nunito text-neutral-50" style={{}}>DeFiGuide Bot</span>
<span className="text-[10px] flex items-center gap-1 text-blue-300" style={{}}>
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-blue-400" style={{}}></span>
<span className="font-nunito" style={{}}>Online • responding in ~2s</span>
</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="p-1.5 rounded-md border transition-colors border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-900" style={{}}>
<svg className="lucide lucide-settings w-3.5 h-3.5 text-neutral-300" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="p-1.5 rounded-md border transition-colors border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-900" style={{}}>
<svg className="lucide lucide-download w-3.5 h-3.5 text-neutral-300" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>

</div>

<div className="px-4 sm:px-5 py-4 space-y-3.5 text-[11px]">

<div className="flex justify-end">
<div className="max-w-[80%] rounded-2xl rounded-br-sm px-3 py-2 shadow-sm bg-emerald-500/90 shadow-emerald-500/40 font-nunito text-neutral-50" style={{}}>
              I keep all my crypto on a centralized exchange. How do I safely move into DeFi without getting wrecked?
            </div>
</div>

<div className="flex items-start gap-2">
<div className="h-5 w-5 rounded-full border flex items-center justify-center bg-neutral-900 border-neutral-700" style={{}}>
<svg className="lucide lucide-bot w-3 h-3 text-emerald-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="max-w-[85%] border rounded-2xl rounded-bl-sm px-3 py-2 font-nunito bg-neutral-900/80 border-neutral-800 text-neutral-200" style={{}}>
              Great question. Let’s break it into three steps:
              <ol className="list-decimal ml-4 mt-1 space-y-0.5 text-neutral-300" style={{}}>
<li className="font-nunito" style={{}}>Pick a non-custodial wallet (I’ll help you choose).</li>
<li className="font-nunito" style={{}}>Withdraw a small test amount from your CEX.</li>
<li className="font-nunito" style={{}}>Connect to a battle-tested DeFi protocol with
                  <span className="font-nunito text-blue-300" style={{}}>clear risk controls</span>.</li>
</ol>
<p className="mt-1.5 text-[10px] font-nunito text-neutral-400" style={{}}>
                I’ll tailor this plan to your risk tolerance and region.
              </p>
</div>
</div>

<div className="flex items-center gap-1.5 text-[10px] pt-1 border-t border-dashed mt-1 text-neutral-400 border-neutral-800/80" style={{}}>
<svg className="lucide lucide-info w-3 h-3 text-neutral-500" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="font-nunito" style={{}}>No seed phrases, private keys, or personal data are stored. Educational guidance only.</span>
</div>
</div>

<div className="px-4 sm:px-5 pb-3.5 border-t border-neutral-800/90" style={{}}>
<div className="flex flex-wrap gap-2 mt-2">
<button className="px-2.5 py-1.5 rounded-full text-[10px] border transition-colors font-nunito bg-neutral-900/90 border-neutral-800 text-neutral-200 hover:border-neutral-600 hover:bg-neutral-900" style={{}}>
                      “Help me move off exchanges”
                    </button>
<button className="px-2.5 py-1.5 rounded-full text-[10px] border transition-colors font-nunito bg-neutral-900/90 border-neutral-800 text-neutral-200 hover:border-neutral-600 hover:bg-neutral-900" style={{}}>
                      “Design a low-risk DeFi plan”
                    </button>
<button className="px-2.5 py-1.5 rounded-full text-[10px] border transition-colors font-nunito bg-neutral-900/90 border-neutral-800 text-neutral-200 hover:border-neutral-600 hover:bg-neutral-900" style={{}}>
                      “Explain bridges like I’m 12”
                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 lg:mt-16 grid gap-4 sm:grid-cols-3" id="features">
<div className="rounded-xl border p-3.5 flex flex-col gap-2 border-neutral-800 bg-neutral-950/60" style={{}}>
<div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-neutral-400" style={{}}>
<svg className="lucide lucide-radar w-3.5 h-3.5 text-emerald-300" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
<span className="font-nunito" style={{}}>On-chain literacy</span>
</div>
<p className="text-xs font-medium tracking-tight font-nunito text-neutral-100" style={{}}>From seed phrases to gas fees
      </p>
<p className="text-[11px] font-nunito text-neutral-400" style={{}}>Understand wallets, networks, and DEXs with concise,
        context-aware explanations.</p>
</div>
<div className="rounded-xl border p-3.5 flex flex-col gap-2 border-neutral-800 bg-neutral-950/60" style={{}}>
<div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-neutral-400" style={{}}>
<svg className="lucide lucide-shield w-3.5 h-3.5 text-blue-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="font-nunito" style={{}}>Risk-first guidance</span>
</div>
<p className="text-xs font-medium tracking-tight font-nunito text-neutral-100" style={{}}>Safety before yield</p>
<p className="text-[11px] font-nunito text-neutral-400" style={{}}>Learn to avoid common scams, manage approvals, and
        size positions based on risk.</p>
</div>
<div className="rounded-xl border p-3.5 flex flex-col gap-2 border-neutral-800 bg-neutral-950/60" style={{}}>
<div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-neutral-400" style={{}}>
<svg className="lucide lucide-sliders-horizontal w-3.5 h-3.5 text-blue-300" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
<span className="font-nunito" style={{}}>Personalized paths</span>
</div>
<p className="text-xs font-medium tracking-tight font-nunito text-neutral-100" style={{}}>Adaptive to your profile</p>
<p className="text-[11px] font-nunito text-neutral-400" style={{}}>Beginner or advanced, the bot adapts to your
        knowledge level and portfolio complexity.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-900/80 bg-neutral-950/80" id="how-it-works" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
<div className="">
<h2 className="text-xl sm:text-2xl font-bold tracking-tighter font-geist text-neutral-50" style={{}}>From CEX-heavy to DeFi-ready in three steps</h2>
<p className="mt-1 text-sm max-w-xl font-nunito text-neutral-400" style={{}}>
                The bot maps your current setup, surfaces the risks you’re actually taking, and designs a migration plan
                you can execute at your own pace.
              </p>
</div>
<div className="flex items-center gap-2 text-[11px] text-neutral-400" style={{}}>
<svg className="lucide lucide-lock w-3.5 h-3.5 text-blue-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="font-nunito" style={{}}>No execution, no custody. You stay in control of every transaction.</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4 lg:gap-5">

<div className="relative rounded-xl border p-4 flex flex-col gap-3 border-neutral-800 bg-neutral-950/80" style={{}}>
<div className="flex items-center justify-between">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border text-[11px] font-nunito bg-neutral-900 border-neutral-700 text-neutral-200" style={{}}>
                  1
                </span>
<svg className="lucide lucide-user-circle-2 w-4 h-4 text-neutral-400" data-lucide="user-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-sm font-medium tracking-tight font-nunito text-neutral-100" style={{}}>Map your current situation</p>
<p className="mt-1 text-[11px] font-nunito text-neutral-400" style={{}}>
                  Describe where your assets live (CEXs, wallets, chains) in plain language. The bot builds a mental model
                  of your setup—no portfolio connection required.
                </p>
</div>
<div className="mt-auto pt-2 border-t border-dashed text-[11px] font-nunito border-neutral-800 text-neutral-400" style={{}}>
                Example: “I have BTC and ETH on Binance and a MetaMask with random tokens.”
              </div>
</div>

<div className="relative rounded-xl border p-4 flex flex-col gap-3 border-neutral-800 bg-neutral-950/80" style={{}}>
<div className="flex items-center justify-between">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border text-[11px] font-nunito bg-neutral-900 border-neutral-700 text-neutral-200" style={{}}>
                  2
                </span>
<svg className="lucide lucide-route w-4 h-4 text-neutral-400" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
</div>
<div className="">
<p className="text-sm font-medium tracking-tight font-nunito text-neutral-100" style={{}}>Get a staged transition plan</p>
<p className="mt-1 text-[11px] font-nunito text-neutral-400" style={{}}>
                  The bot suggests a sequence of moves—test withdrawals, wallet hardening, protocol selection—matched to
                  your time horizon and risk tolerance.
                </p>
</div>
<div className="mt-auto pt-2 border-t border-dashed text-[11px] font-nunito border-neutral-800 text-neutral-400" style={{}}>
                Example: “Week 1: set up hardware wallet &amp; move 5% off CEX.”
              </div>
</div>

<div className="relative rounded-xl border p-4 flex flex-col gap-3 border-neutral-800 bg-neutral-950/80" style={{}}>
<div className="flex items-center justify-between">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border text-[11px] font-nunito bg-neutral-900 border-neutral-700 text-neutral-200" style={{}}>
                  3
                </span>
<svg className="lucide lucide-messages-square w-4 h-4 text-neutral-400" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<div>
<p className="text-sm font-medium tracking-tight font-nunito text-neutral-100" style={{}}>Chat through every decision</p>
<p className="mt-1 text-[11px] font-nunito text-neutral-400" style={{}}>
                  Ask the bot to sanity-check yields, clarify contract risks, or simulate downside scenarios before you sign
                  any transaction.
                </p>
</div>
<div className="mt-auto pt-2 border-t border-dashed text-[11px] font-nunito border-neutral-800 text-neutral-400" style={{}}>
                Example: “Is 30% APY here realistic, or am I the liquidity exit?”
              </div>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-900/80 bg-black/60" id="faq" style={{}}>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
<div className="">
<h2 className="text-xl sm:text-2xl font-bold tracking-tighter font-geist text-neutral-50" style={{}}>Questions, answered</h2>
<p className="mt-1 text-sm font-nunito text-neutral-400" style={{}}>
                Built for curious skeptics, cautious beginners, and busy power users who want signal, not hype.
              </p>
</div>
<div className="inline-flex items-center gap-1.5 text-[11px] border rounded-full px-3 py-1 text-neutral-400 border-neutral-800 bg-neutral-950/70" style={{}}>
<svg className="lucide lucide-alert-triangle w-3.5 h-3.5 text-emerald-300" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="font-nunito" style={{}}>Not investment advice. For educational use only.</span>
</div>
</div>
<div className="space-y-3">

<details className="group rounded-lg border px-3.5 py-3 border-neutral-800 bg-neutral-950/70" style={{}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="text-[13px] font-medium font-nunito text-neutral-100" style={{}}>
                  Do you connect to my wallet or execute trades?
                </div>
<div className="ml-4 flex items-center">
<svg className="lucide lucide-plus w-3.5 h-3.5 group-open:hidden text-neutral-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-3.5 h-3.5 hidden group-open:block text-neutral-400" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</summary>
<p className="mt-2 text-[11px] pr-4 font-nunito text-neutral-400" style={{}}>
                No. The chatbot never connects to your wallet, never sends transactions, and never takes custody of assets.
                It only provides explanations, frameworks, and step-by-step guidance you can choose to follow (or ignore).
              </p>
</details>
<details className="group rounded-lg border px-3.5 py-3 border-neutral-800 bg-neutral-950/70" style={{}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="text-[13px] font-medium font-nunito text-neutral-100" style={{}}>
                  What kind of users is this for?
                </div>
<div className="ml-4 flex items-center">
<svg className="lucide lucide-plus w-3.5 h-3.5 group-open:hidden text-neutral-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-3.5 h-3.5 hidden group-open:block text-neutral-400" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</summary>
<p className="mt-2 text-[11px] pr-4 font-nunito text-neutral-400" style={{}}>
                Primarily people who currently rely heavily on centralized exchanges but want to understand self-custody,
                DeFi, staking, and other on-chain primitives—without being overwhelmed by jargon.
              </p>
</details>
<details className="group rounded-lg border px-3.5 py-3 border-neutral-800 bg-neutral-950/70" style={{}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="text-[13px] font-medium font-nunito text-neutral-100" style={{}}>
                  Which chains and protocols can the bot talk about?
                </div>
<div className="ml-4 flex items-center">
<svg className="lucide lucide-plus w-3.5 h-3.5 group-open:hidden text-neutral-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-3.5 h-3.5 hidden group-open:block text-neutral-400" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</summary>
<p className="mt-2 text-[11px] pr-4 font-nunito text-neutral-400" style={{}}>
                It covers major L1s and L2s, blue-chip protocols, and common tooling. You can always ask it to explain the
                tradeoffs of using a specific chain or protocol from a safety and UX perspective.
              </p>
</details>
</div>
</div>
</section>

<section className="flex items-stretch border-t bg-neutral-950 border-neutral-900/80" id="chat" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
<div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

<aside className="w-full lg:w-64 xl:w-72 rounded-2xl border backdrop-blur-sm p-3.5 flex flex-col border-neutral-900 bg-black/60" style={{}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-lg border flex items-center justify-center bg-emerald-500/20 border-emerald-500/40" style={{}}>
<svg className="lucide lucide-bot w-3.5 h-3.5 text-emerald-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium tracking-tight font-nunito text-neutral-100" style={{}}>DeFiGuide Bot</span>
<span className="text-[10px] font-nunito text-neutral-400" style={{}}>Crypto transition assistant</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="p-1.5 rounded-md border transition-colors border-neutral-800 bg-neutral-950/80 hover:border-neutral-700 hover:bg-neutral-900" style={{}}>
<svg className="lucide lucide-plus w-3.5 h-3.5 text-neutral-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-1.5 mb-3">
<button className="inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg border text-[10px] transition-colors border-emerald-500/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-200" style={{}}>
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-nunito" style={{}}>Beginner</span>
</button>
<button className="inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg border text-[10px] transition-colors border-neutral-800 bg-neutral-950/80 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900" style={{}}>
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-nunito" style={{}}>Advanced</span>
</button>
</div>

<div className="flex-1 min-h-[220px] max-h-[320px] overflow-y-auto pr-1 space-y-1 custom-scrollbar">
<div className="rounded-lg border px-2.5 py-2 cursor-pointer transition-colors hover:border-emerald-500/60 border-neutral-800 bg-neutral-900/80 hover:bg-neutral-900" style={{}}>
<div className="flex items-center justify-between">
<span className="text-[11px] font-nunito text-neutral-100" style={{}}>Moving off exchanges</span>
<span className="text-[9px] text-neutral-500 font-nunito" style={{}}>Now</span>
</div>
<p className="mt-0.5 text-[10px] truncate font-nunito text-neutral-400" style={{}}>
                    Design a 4-week plan to move my assets from CEX to self-custody…
                  </p>
</div>
<div className="rounded-lg border bg-transparent px-2.5 py-2 cursor-pointer transition-colors border-neutral-900 hover:border-neutral-700 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center justify-between">
<span className="text-[11px] font-nunito text-neutral-100" style={{}}>DeFi yield sanity check</span>
<span className="text-[9px] text-neutral-500 font-nunito" style={{}}>2h ago</span>
</div>
<p className="mt-0.5 text-[10px] truncate font-nunito text-neutral-400" style={{}}>
                    This farm says 120% APY. Is that sustainable or am I exit liquidity?
                  </p>
</div>
<div className="rounded-lg border bg-transparent px-2.5 py-2 cursor-pointer transition-colors border-neutral-900 hover:border-neutral-700 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center justify-between">
<span className="text-[11px] font-nunito text-neutral-100" style={{}}>Multi-chain setup</span>
<span className="text-[9px] text-neutral-500 font-nunito" style={{}}>Yesterday</span>
</div>
<p className="mt-0.5 text-[10px] truncate font-nunito text-neutral-400" style={{}}>
                    Help me choose which L2s and bridges to use from Europe…
                  </p>
</div>
</div>

<div className="mt-3 pt-3 border-t flex items-center justify-between border-neutral-900" style={{}}>
<div className="flex items-center gap-2">
<img alt="User avatar" className="h-7 w-7 rounded-full border object-cover border-neutral-800" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;w=80&amp;q=80" style={{}}/>
<div className="flex flex-col">
<span className="text-[11px] font-nunito text-neutral-100" style={{}}>You</span>
<span className="text-[10px] font-nunito text-neutral-400" style={{}}>CEX-heavy, risk-aware</span>
</div>
</div>
<button className="p-1.5 rounded-md border transition-colors border-neutral-800 bg-neutral-950/80 hover:border-neutral-700 hover:bg-neutral-900" style={{}}>
<svg className="lucide lucide-settings-2 w-3.5 h-3.5 text-neutral-300" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
</div>
</aside>

<div className="flex-1 rounded-2xl border backdrop-blur-sm flex flex-col border-neutral-900 bg-black/60" style={{}}>

<div className="px-4 sm:px-5 py-3 border-b flex items-center justify-between border-neutral-900" style={{}}>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-gradient-to-br via-cyan-500 to-blue-500 flex items-center justify-center text-[11px] font-semibold tracking-tight border from-emerald-500 font-nunito text-neutral-50 border-neutral-900" style={{}}>
                    AI
                  </div>
<div className="flex flex-col">
<span className="text-xs font-medium tracking-tight font-nunito text-neutral-100" style={{}}>New session</span>
<span className="text-[10px] font-nunito text-neutral-400" style={{}}>Describe your current setup to get started.</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-[10px] transition-colors border-neutral-800 bg-neutral-950/80 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900" style={{}}>
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-nunito" style={{}}>Safety checklist</span>
</button>
<button className="inline-flex items-center justify-center p-1.5 rounded-md border transition-colors border-neutral-800 bg-neutral-950/80 hover:border-neutral-700 hover:bg-neutral-900" style={{}}>
<svg className="lucide lucide-moon-star w-3.5 h-3.5 text-neutral-300" data-lucide="moon-star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5h4"></path><path d="M20 3v4"></path><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-3 text-[12px]">

<div className="flex items-start gap-2">
<div className="h-5 w-5 rounded-full border flex items-center justify-center bg-neutral-900 border-neutral-700" style={{}}>
<svg className="lucide lucide-bot w-3 h-3 text-emerald-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="max-w-2xl">
<div className="inline-flex items-center gap-1.5 rounded-full border px-2 py-1 mb-2 bg-neutral-900/80 border-neutral-800" style={{}}>
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-blue-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-[10px] font-nunito text-neutral-200" style={{}}>You’re chatting in “Transition from CEX” mode</span>
</div>
<div className="rounded-2xl rounded-bl-sm border px-3 py-2.5 bg-neutral-900/80 border-neutral-800 text-neutral-100" style={{}}>
<p className="text-[12px] font-nunito" style={{}}>
                        I’ll help you move from centralized exchanges to a safer, decentralized setup at your own pace.
                      </p>
<p className="mt-1.5 text-[11px] font-nunito text-neutral-300" style={{}}>
                        Start by telling me:
                      </p>
<ul className="mt-1.5 ml-4 list-disc space-y-0.5 text-[11px] text-neutral-300" style={{}}>
<li className="font-nunito" style={{}}>Which exchanges and wallets you currently use</li>
<li className="font-nunito" style={{}}>Your approximate portfolio size (ranges are fine)</li>
<li className="font-nunito" style={{}}>How comfortable you are with on-chain transactions</li>
</ul>
</div>
</div>
</div>

<div className="flex justify-end">
<div className="max-w-xl rounded-2xl rounded-br-sm px-3 py-2 text-[12px] shadow-sm bg-emerald-500/90 shadow-emerald-500/40 font-nunito text-neutral-50" style={{}}>
                    I use Binance and Coinbase, with a small MetaMask wallet. I’m comfortable sending crypto between exchanges,
                    but nervous about bridges and DeFi protocols.
                  </div>
</div>

<div className="flex items-start gap-2">
<div className="h-5 w-5 rounded-full border flex items-center justify-center bg-neutral-900 border-neutral-700" style={{}}>
<svg className="lucide lucide-bot w-3 h-3 text-emerald-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="max-w-2xl rounded-2xl rounded-bl-sm border px-3 py-2.5 bg-neutral-900/80 border-neutral-800 text-neutral-100" style={{}}>
<p className="text-[12px] font-nunito" style={{}}>
                      Perfect, that’s enough to begin. We’ll start <span className="font-nunito text-blue-300" style={{}}>without touching the majority of your funds</span>.
                    </p>
<p className="mt-1.5 text-[11px] font-nunito text-neutral-300" style={{}}>
                      Step 1 (today): set up a dedicated self-custodial wallet and move over a small test amount.
                    </p>
<p className="mt-1.5 text-[11px] font-nunito text-neutral-400" style={{}}>
                      I’ll suggest wallets and walk you through a “sanity check” before you sign any transaction.
                    </p>
</div>
</div>
</div>

<div className="border-t px-4 sm:px-5 py-3 border-neutral-900" style={{}}>
<div className="mb-1.5 flex flex-wrap gap-2">
<button className="px-2.5 py-1.5 rounded-full border text-[10px] transition-colors font-nunito border-neutral-800 bg-neutral-950/80 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900" style={{}}>
                    “Audit my current setup”
                  </button>
<button className="px-2.5 py-1.5 rounded-full border text-[10px] transition-colors font-nunito border-neutral-800 bg-neutral-950/80 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900" style={{}}>
                    “Design a 30-day migration plan”
                  </button>
<button className="px-2.5 py-1.5 rounded-full border text-[10px] transition-colors font-nunito border-neutral-800 bg-neutral-950/80 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900" style={{}}>
                    “Explain risks for my region”
                  </button>
</div>
<div className="flex items-end gap-2">
<div className="flex-1 flex items-center gap-2 rounded-xl border px-2.5 py-1.5 focus-within:bg-neutral-950 transition-colors focus-within:border-emerald-500/70 border-neutral-800 bg-neutral-950/80" style={{}}>
<button className="p-1 rounded-md transition-colors hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
<textarea className="flex-1 bg-transparent border-none outline-none resize-none text-[12px] placeholder:text-neutral-500 leading-snug max-h-24 text-neutral-100" placeholder="Describe your current exchange/wallet setup, and what you want to achieve." rows="1" style={{}}></textarea>
<button className="p-1 rounded-md transition-colors hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200" style={{}}>
<svg className="lucide lucide-paperclip w-4 h-4" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
</div>
<button className="inline-flex items-center justify-center rounded-xl w-9 h-9 border transition-colors shadow-sm bg-emerald-500 shadow-emerald-500/30 text-white hover:bg-emerald-400 border-emerald-400/70" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<p className="mt-1 text-[10px] text-neutral-500 flex items-center gap-1" style={{}}>
<svg className="lucide lucide-shield w-3 h-3" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="font-nunito" style={{}}>Don’t paste seed phrases, private keys, or account numbers. The bot will never ask for them.</span>
</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900/80 bg-black/80" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500" style={{}}>
<div className="flex items-center gap-2">
<span className="font-nunito text-neutral-400" style={{}}>©</span>
<span className="font-nunito" style={{}}>DeFiGuide Labs. Educational use only.</span>
</div>
<div className="flex items-center gap-4">
<a className="transition-colors font-nunito hover:text-neutral-300" href="#" style={{}}>Terms</a>
<a className="transition-colors font-nunito hover:text-neutral-300" href="#" style={{}}>Privacy</a>
<a className="inline-flex items-center gap-1 transition-colors hover:text-neutral-300" href="#" style={{}}>
<svg className="lucide lucide-github w-3.5 h-3.5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span className="font-nunito" style={{}}>GitHub</span>
</a>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
