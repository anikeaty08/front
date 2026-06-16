import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => {
initInViewAnimations();
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        (function() {
          const container = document.getElementById('karaoke-text');
          if (!container) return;
          const words = container.querySelectorAll('.k-word');
          let ticking = false;
          const updateWords = () => {
            const triggerLine = window.innerHeight * 0.75;
            words.forEach((word) => {
              const rect = word.getBoundingClientRect();
              if (rect.top < triggerLine) {
                word.classList.add('active');
              } else {
                word.classList.remove('active');
              }
            });
            ticking = false;
          };
          const onScroll = () => {
            if (!ticking) {
              window.requestAnimationFrame(updateWords);
              ticking = true;
            }
          };
          window.addEventListener('scroll', onScroll, { passive: true });
          window.addEventListener('resize', onScroll, { passive: true });
          updateWords();
        })();
      


    (function() {
      const wrapper = document.querySelector('.stack-cards-container');
      const cards = document.querySelectorAll('.stack-card');
      if (!wrapper || !cards.length) return;
      const updateStack = () => {
        cards.forEach((card, index) => {
          const nextCard = cards[index + 1];
          const cardRect = card.getBoundingClientRect();
          const stickyTop = 112 + (index * 16); 
          if (nextCard) {
            const nextRect = nextCard.getBoundingClientRect();
            const distance = nextRect.top - cardRect.top;
            const isStuck = cardRect.top <= (stickyTop + 1); 
            if (isStuck) {
               const gap = nextRect.top - stickyTop;
               const maxGap = window.innerHeight * 0.5; 
               const ratio = Math.max(0, Math.min(1, gap / maxGap));
               const scale = 0.92 + (0.1 * ratio); 
               const opacity = 0.5 + (0.5 * ratio); 
               const brightness = 50 + (50 * ratio); 
               card.style.transform = `scale(${scale})`;
               card.style.opacity = `${opacity}`;
               card.style.filter = `brightness(${brightness}%)`;
            } else {
               card.style.transform = 'scale(1.02)';
               card.style.opacity = '1';
               card.style.filter = 'brightness(100%)';
            }
          } else {
            card.style.transform = 'scale(1.02)';
            card.style.opacity = '1';
            card.style.filter = 'brightness(100%)';
          }
        });
      };
      window.addEventListener('scroll', updateStack, { passive: true });
      updateStack(); 
    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component top-0 w-full -z-10 absolute h-screen saturate-200 brightness-125" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="7BChNsgjdoJkLPEpWhX3"></div>

</div>
</div>
<section className="min-h-screen flex flex-col overflow-hidden w-full pt-6 pb-20 relative items-center justify-start">
<div className="aura-background-component top-0 w-full -z-10 absolute h-[1000px] pointer-events-none" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-zinc-950/0 to-zinc-950/0 opacity-70"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>
<nav className="w-full max-w-6xl px-6 flex items-center justify-between z-50 mb-16 md:mb-24 [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="flex items-center group cursor-pointer">
<img alt="AI Upscale Agency" className="h-8 md:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors font-geist" href="#agents">Agents</a>
<a className="hover:text-white transition-colors font-geist" href="#workforce">Workforces</a>
<a className="hover:text-white transition-colors font-geist" href="#pricing">Pricing</a>
</div>
<div>
<button className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-4 font-normal text-neutral-200 transition-all duration-300 hover:bg-zinc-800 hover:text-white ring-1 ring-white/10 hover:ring-white/20">
<span className="text-xs tracking-tight font-geist">Deploy Fleet</span>
</button>
</div>
</nav>
<div className="flex flex-col [animation:animationIn_0.8s_ease-out_0.3s_both] text-center w-full max-w-7xl z-10 pr-4 pl-4 items-center">
<h1 className="md:text-7xl text-5xl bg-clip-text text-transparent tracking-tight font-geist bg-gradient-to-b from-white via-white to-white/60 max-w-3xl mb-6 pb-2 font-semibold">
            Deploy your autonomous workforce
        </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light tracking-tight leading-relaxed mb-10 font-geist">
            Stop automating tasks and start hiring agents. Looper provisions AI SDRs, CEO Co-Pilots, and Internal Support agents that reason, collaborate, and scale your operations.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mb-20 gap-x-2 gap-y-2 items-center">
<button className="hover:brightness-110 transition-all flex text-sm font-medium text-white bg-white border-transparent border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_20px_rgba(59,130,246,0.5)] gap-x-2 gap-y-2 items-center" style={{background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)'}}>
<span className="tracking-tight font-geist">Hire an Agent</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[500ms] hover:-translate-y-[1px] hover:text-white shadow-lg overflow-hidden font-normal text-neutral-400 tracking-tight bg-zinc-900/50 border-zinc-700/50 border rounded-full py-3 px-6 items-center justify-center backdrop-blur-sm">
<span className="relative z-10 text-sm transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Meet the Fleet</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none text-sm font-normal opacity-0 font-geist">Meet the Fleet</span>
</button>
</div>
<div className="group [animation:animationIn_0.8s_ease-out_0.5s_both] w-full relative">
<div className="flex lg:pl-0 lg:pr-0 font-geist w-full h-[800px] pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">
<div className="w-full h-full max-w-[1400px] bg-[#07070A] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden relative">
<div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-500/15 via-indigo-500/10 to-transparent blur-3xl">
</div>
<div className="h-11 bg-[#07070A] border-b border-white/5 flex items-center justify-between px-4 select-none relative">
<div className="flex items-center gap-2">
<div className="flex gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
</div>
<div className="ml-4 flex items-center gap-2">
<button className="text-zinc-500 hover:text-zinc-200 transition">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-200 transition">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="-translate-x-1/2 flex text-xs text-zinc-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-2 pb-1 pl-1 absolute left-1/2 gap-x-2 gap-y-2 items-center">
<span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 text-xs text-sky-300">
<span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
        Active Fleet
        </span>
<span className="text-zinc-500">/</span>
<span className="text-zinc-300">looper.ai</span>
<span className="text-zinc-500">/</span>
<span className="text-zinc-400">orchestration</span>
</div>
<div className="flex items-center gap-2 text-zinc-500">
<button className="w-9 h-9 inline-flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white transition border border-transparent hover:border-white/10">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="w-9 h-9 inline-flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white transition border border-transparent hover:border-white/10">
<iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon>
</button>
<button className="w-9 h-9 inline-flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white transition border border-transparent hover:border-white/10">
<iconify-icon className="text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-1 overflow-hidden">
<div className="flex flex-col hidden md:flex bg-[#07070A] w-64 border-white/5 border-r">
<div className="p-4 flex items-center h-[60px]">
<img alt="AI Upscale Agency" className="h-6 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="px-3 pb-3">
<div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
<iconify-icon className="text-zinc-500 text-sm" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent outline-none text-xs text-zinc-300 placeholder:text-zinc-600 w-full" placeholder="Search agents, logs..."/>
<span className="text-xs text-zinc-600 border border-white/10 rounded px-1.5 py-0.5">⌘K</span>
</div>
</div>
<div className="px-3 py-2">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest px-3 mb-2">HQ</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:home-2-linear"></iconify-icon>
              Overview
            </a>
<a className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:inbox-linear"></iconify-icon>
              Agent Inbox
              <span className="ml-auto text-xs bg-sky-500/15 text-sky-300 px-1.5 py-0.5 rounded-full border border-sky-500/20">12</span>
</a>
</nav>
</div>
<div className="px-3 py-2">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest px-3 mb-2">Workforces</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-2.5 px-3 py-2 text-sm text-white bg-white/5 rounded-md transition-colors font-medium border-l-2 border-sky-400" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
              Sales SDR Swarm
            </a>
<a className="flex items-center gap-2.5 hover:text-white hover:bg-white/5 transition-colors text-sm text-zinc-300 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-lg" icon="solar:user-speak-linear"></iconify-icon>
              CEO Co-Pilot
            </a>
<a className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:server-square-linear"></iconify-icon>
              IT Support Agent
            </a>
</nav>
</div>
<div className="mt-auto p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-medium text-zinc-300">
              SJ</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Sarah Jenkins</span>
<span className="text-xs text-zinc-500">sarah@upscale.ai</span>
</div>
<button className="ml-auto text-zinc-500 hover:text-white transition">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex-1 bg-[#050507] relative flex flex-col min-w-0">
<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#07070A]/70 backdrop-blur z-20">
<div className="flex items-center gap-3 min-w-0">
<button className="text-zinc-500 hover:text-white transition">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="h-4 w-px bg-white/10"></div>
<span className="shrink-0 text-sm text-zinc-500">Workforces</span>
<span className="text-zinc-600">/</span>
<span className="text-white font-medium text-sm truncate tracking-tight">Sales SDR Swarm</span>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition border border-white/10">
<iconify-icon className="text-sm" icon="solar:play-linear"></iconify-icon>
                          Simulate Run
                        </button>
<button className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium bg-sky-500 hover:bg-sky-400 text-black rounded-md shadow-[0_0_18px_rgba(56,189,248,0.25)] transition tracking-tight">
                          Activate Swarm
                        </button>
</div>
</div>
<div className="flex-1 overflow-hidden bg-[#050507] relative">
<div className="absolute inset-0 opacity-25 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)', backgroundSize: '26px 26px'}}>
</div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30">
</div>
<svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
<defs>
<marker id="arrowhead" markerheight="7" markerwidth="10" orient="auto" refx="9" refy="3.5">
<polygon fill="rgba(255,255,255,0.28)" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
<filter height="200%" id="softGlow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M 274 310 C 332 310, 332 215, 390 215" fill="none" filter="url(#softGlow)" marker-end="url(#arrowhead)" stroke="rgba(255,255,255,0.22)" strokeWidth="2"></path>
<path d="M 274 310 C 332 310, 332 430, 390 430" fill="none" filter="url(#softGlow)" marker-end="url(#arrowhead)" stroke="rgba(255,255,255,0.22)" strokeWidth="2"></path>
<path d="M 646 215 C 700 215, 700 230, 760 230" fill="none" filter="url(#softGlow)" marker-end="url(#arrowhead)" stroke="rgba(255,255,255,0.22)" strokeWidth="2"></path>
<path d="M 646 430 C 700 430, 700 390, 760 390" fill="none" filter="url(#softGlow)" marker-end="url(#arrowhead)" stroke="rgba(255,255,255,0.22)" strokeWidth="2"></path>
</svg>
<div className="absolute left-[50px] top-[250px] w-56 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer">
<div className="absolute -top-3 left-4 px-2 py-0.5 bg-sky-500/10 border border-sky-500/20 rounded text-xs font-medium text-sky-300 uppercase tracking-wide">
              Data Source</div>
<div className="p-4">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-300">
<iconify-icon className="text-lg" icon="solar:database-linear"></iconify-icon>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-medium text-white tracking-tight">High-Intent Lead</span>
<span className="text-xs text-zinc-500">Signal from Apollo</span>
</div>
</div>
<div className="text-xs text-zinc-400 bg-black/20 p-2 rounded-lg border border-white/10">
                Enrich: <span className="text-zinc-200">Clearbit API</span>
<span className="text-zinc-600">•</span>
                Filter: <span className="text-zinc-200">ICP Match</span>
</div>
</div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-sky-400/80 rounded-full border-4 border-[#050507] shadow-[0_0_0_6px_rgba(56,189,248,0.08)] group-hover:scale-110 transition">
</div>
</div>
<div className="absolute left-[390px] top-[140px] w-64 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer z-10">
<div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs font-medium text-zinc-300 uppercase tracking-wide">
              Agent: SDR</div>
<div className="p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-tight">Draft Outreach</span>
</div>
</div>
<div className="bg-black/20 p-3 rounded-xl border border-white/10 mb-2">
<div className="text-xs text-zinc-500 mb-1">Context</div>
<div className="text-xs text-zinc-200 truncate">Analyze recent company news</div>
</div>
<div className="flex items-center gap-2 text-xs text-sky-300">
<span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 border border-sky-500/20 px-2 py-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                GPT-4o Reasoning
                </span>
</div>
</div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]">
</div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507] group-hover:bg-sky-400/80 group-hover:scale-110 transition">
</div>
</div>
<div className="absolute left-[390px] top-[370px] w-64 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer">
<div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs font-medium text-zinc-300 uppercase tracking-wide">
              Agent: Co-Pilot</div>
<div className="p-4">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-tight">Review &amp; Approve</span>
</div>
<div className="flex items-center justify-between text-xs text-zinc-300 bg-black/20 p-2 rounded-lg border border-white/10">
<span className="text-zinc-400">Rule Engine</span>
<span className="font-mono text-sky-300">Brand Safety</span>
</div>
</div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]">
</div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507] group-hover:bg-sky-400/80 group-hover:scale-110 transition">
</div>
</div>
<div className="absolute left-[760px] top-[180px] w-56 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer opacity-95">
<div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs font-medium text-zinc-300 uppercase tracking-wide">
              Execution</div>
<div className="p-4">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-tight">Dispatch Email</span>
</div>
<div className="text-xs text-zinc-400">
                Via:
                <span className="text-sky-200 bg-sky-500/10 border border-sky-500/20 px-1.5 py-0.5 rounded-md">SendGrid API</span>
</div>
</div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]">
</div>
</div>
<div className="absolute left-[760px] top-[340px] w-56 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer opacity-95">
<div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs font-medium text-zinc-300 uppercase tracking-wide">
              Monitor</div>
<div className="p-4">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-tight">Watch for Reply</span>
</div>
<div className="text-xs text-zinc-400">Action: <span className="text-zinc-200">Auto-book Meeting</span></div>
</div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]">
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-10 bg-[#07070A]/90 border-t border-white/5 flex items-center justify-between px-4 cursor-pointer hover:bg-white/5 transition backdrop-blur">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
<span className="text-zinc-400">Agent Status</span>
<span className="text-zinc-600">•</span>
<span className="text-zinc-300">Success rate</span>
<span className="text-sky-300 font-mono">99.2%</span>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<span>Last action: 2m ago</span>
<span className="text-emerald-400">● Swarm Active</span>
</div>
</div>
</div>
</div>
<div className="w-80 bg-[#07070A] border-l border-white/5 flex flex-col hidden lg:flex">
<div className="p-4 border-b border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex flex-col leading-tight">
<span className="text-sm font-medium text-white tracking-tight">AI SDR Agent</span>
<span className="text-xs text-zinc-500">Role • Outbound Sales</span>
</div>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs uppercase tracking-wider text-zinc-500 mb-2 font-medium">Agent Mandate</div>
<div className="text-xs text-zinc-300 leading-relaxed mb-3">
              Instruct the agent in plain text. It will adapt its approach based on your guidelines.
            </div>
<div className="relative">
<textarea className="focus:outline-none focus:border-sky-400/40 resize-none placeholder:text-zinc-600 text-xs text-zinc-200 bg-black/20 w-full h-24 border-white/10 border rounded-lg pt-3 pr-3 pb-3 pl-3" placeholder="e.g. Focus on VP level targets. Use a casual tone. Reference their recent funding round if applicable."></textarea>
<button className="absolute bottom-2 right-2 px-2 py-1 bg-sky-500 text-black text-xs font-medium rounded-md hover:bg-sky-400 transition tracking-tight">Update</button>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 space-y-3">
<div className="flex items-center justify-between">
<div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Knowledge Base</div>
<span className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Synced</span>
</div>
<div className="bg-black/20 border border-white/10 rounded-lg p-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:document-text-linear"></iconify-icon>
<div className="text-xs text-zinc-200">Company_Pitch_Deck.pdf</div>
</div>
<div className="bg-black/20 border border-white/10 rounded-lg p-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:link-linear"></iconify-icon>
<div className="text-xs text-zinc-200">upscale.ai/case-studies</div>
</div>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">Swarm Health</span>
<span className="text-xs text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Optimal</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-black/20 rounded-lg p-2 border border-white/10">
<div className="text-xs text-zinc-500">Active Agents</div>
<div className="text-xs text-white font-medium">3</div>
</div>
<div className="bg-black/20 rounded-lg p-2 border border-white/10">
<div className="text-xs text-zinc-500">Tasks Executed</div>
<div className="text-xs text-white font-medium">1,402</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="philosophy">
<section className="md:px-12 bg-zinc-950 pt-32 pr-6 pb-32 pl-6 relative overflow-hidden rounded-3xl border border-white/5">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="text-center max-w-5xl mr-auto ml-auto relative z-10">
<style>
        .k-word {
          transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.4s ease;
          will-change: opacity, filter, color;
        }
        .k-word.active {
          opacity: 1 !important;
          filter: blur(0px) !important;
          color: white !important;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
      </style>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-10 font-geist shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        [ The Cognitive Layer ]
      </span>
<h2 className="text-3xl md:text-5xl leading-tight font-normal text-white mb-12 tracking-tight font-geist flex flex-wrap justify-center gap-x-[0.25em] gap-y-1" id="karaoke-text">
<span className="k-word opacity-20 blur-[1px] text-zinc-500">We</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">build</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">the</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">cognitive</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">layer</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">for</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">the</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">autonomous</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">enterprise.</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">Rejecting</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">manual</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">labor,</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">we</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">engineer</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">intelligent</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">agents</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">that</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">blend</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">deep</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">reasoning</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">with</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">infinite</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">scale</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-500">to</span>
<span className="italic font-serif inline-flex gap-x-[0.25em]">
<span className="k-word opacity-20 blur-[1px] text-zinc-400">form</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-400">your</span>
<span className="k-word opacity-20 blur-[1px] text-zinc-400">workforce.</span>
</span>
</h2>
<p className="text-xs text-zinc-500 uppercase tracking-[0.15em] mt-12 font-geist font-medium">
        Welcome to the new standard
      </p>

</div>
</section>
</section>
<section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="workforce">
<div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)]">
<style>
      @keyframes beam-flow {
        0% { stroke-dashoffset: 600; opacity: 0; }
        15% { opacity: 1; }
        85% { opacity: 1; }
        100% { stroke-dashoffset: 0; opacity: 0; }
      }
      .animate-beam-path {
        stroke-dasharray: 80 600;
        stroke-dashoffset: 600;
        animation: beam-flow 4s linear infinite;
      }
      .delay-100 { animation-delay: 0.5s; }
      .delay-200 { animation-delay: 1s; }
      .delay-300 { animation-delay: 1.5s; }
      .delay-500 { animation-delay: 2.5s; }
    </style>
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12 gap-x-6 gap-y-6 items-start">
<div>
<p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3 font-geist">
          The Orchestration Engine
        </p>
<h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight font-geist">
          Meet your new digital workforce
        </h2>
<p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
          Specialized AI agents designed to handle your most complex departments, communicating seamlessly with your existing data and tools.
        </p>
</div>
<button className="inline-flex text-sm font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist tracking-tight">
        Explore Architecture
      </button>
</div>
<div className="flex w-full relative gap-x-0 gap-y-0 items-center justify-center">
<div className="hidden lg:block w-[260px] h-[440px] relative translate-x-6">
<svg className="absolute top-0 right-0 bottom-0 left-0 w-[260px] h-[440px]" fill="none" strokeWidth="2" style={{width: '260px', height: '440px'}} viewbox="0 0 260 440">
<defs>
<lineargradient id="beam-gradient-left" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#60a5fa"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M 52 144 C 150 144, 150 220, 260 220" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path className="animate-beam-path delay-100" d="M 52 144 C 150 144, 150 220, 260 220" fill="none" stroke="url(#beam-gradient-left)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 52 220 C 120 220, 180 220, 260 220" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path className="animate-beam-path" d="M 52 220 C 120 220, 180 220, 260 220" fill="none" stroke="url(#beam-gradient-left)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 52 296 C 150 296, 150 220, 260 220" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path className="animate-beam-path delay-200" d="M 52 296 C 150 296, 150 220, 260 220" fill="none" stroke="url(#beam-gradient-left)" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
<div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group/node transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20">
<iconify-icon className="text-white/60 group-hover/node:text-blue-400 transition-colors text-2xl" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group/node transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20">
<iconify-icon className="text-white/60 group-hover/node:text-blue-400 transition-colors text-2xl" icon="solar:database-linear"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group/node transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20">
<iconify-icon className="text-white/60 group-hover/node:text-blue-400 transition-colors text-2xl" icon="solar:code-square-linear"></iconify-icon>
</div>
</div>
</div>
<div className="relative">
<div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 border-2 border-zinc-950"></div>
<div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 border-2 border-zinc-950"></div>
<div className="overflow-hidden flex flex-col group/card bg-[#09090b]/90 w-full h-[440px] max-w-[700px] z-10 rounded-[32px] ring-white/10 ring-1 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl backdrop-blur-xl">
<div className="flex justify-center w-full mb-8 relative z-20">
<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-blue-500/20 ring-1 ring-blue-500/10 shadow-lg backdrop-blur-xl transition-all hover:bg-zinc-800/80 hover:border-blue-500/30 cursor-default group">
<iconify-icon className="text-blue-400 animate-pulse text-lg" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="text-xs font-medium text-blue-100/90 font-geist tracking-wide">Swarm coordination established. Processing intent...</span>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse ml-1"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full relative z-10 overflow-y-auto md:overflow-hidden">
<div className="col-span-1 pt-6 flex flex-col gap-4">
<div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-blue-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-3 shadow-sm group/item cursor-pointer">
<div className="flex items-center gap-2 justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse"></div>
<span className="text-xs font-medium text-zinc-200 uppercase tracking-wider font-geist">SDR Agent</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium mb-1 font-geist tracking-tight">Outbound Campaign</div>
<div className="text-xs text-zinc-400 font-geist">Analyzing prospect data</div>
<div className="w-full h-1 bg-zinc-700/50 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-blue-500 w-[60%]"></div>
</div>
</div>
</div>
</div>
<div className="col-span-1 flex flex-col gap-4">
<div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-emerald-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm cursor-pointer group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
<span className="text-xs font-medium text-white font-geist uppercase tracking-wider">Internal Agent</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-400 mb-0.5 font-geist">Resolving HR Ticket</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded">Actioning</span>
</div>
</div>
<div className="mt-2 flex gap-1">
<div className="h-1 w-1 rounded-full bg-zinc-600 animate-[bounce_1s_infinite]"></div>
<div className="h-1 w-1 rounded-full bg-zinc-600 animate-[bounce_1s_infinite_0.2s]"></div>
<div className="h-1 w-1 rounded-full bg-zinc-600 animate-[bounce_1s_infinite_0.4s]"></div>
</div>
</div>
<div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:scale-[1.02] transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm h-full opacity-80 cursor-pointer relative overflow-hidden">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
<span className="text-xs font-medium text-white font-geist uppercase tracking-wider">CEO Co-Pilot</span>
</div>
<div>
<div className="text-xs text-zinc-400 mb-0.5 font-geist">Generating Report</div>
<div className="text-xs text-zinc-500 font-mono">Q3_Forecast_Draft</div>
</div>
</div>
</div>
<div className="col-span-1 flex flex-col gap-4 pt-10">
<div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-purple-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
<span className="text-xs font-medium text-white font-geist uppercase tracking-wider">Agent Outcome</span>
</div>
<div>
<div className="text-xs text-zinc-400 mb-0.5 font-geist">Meeting Booked</div>
<div className="text-xs text-zinc-500 font-geist">VP Sales @ Acme Corp</div>
</div>
<div className="flex -space-x-2 mt-1">
<div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<iconify-icon className="text-zinc-400 text-xs" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-cyan-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm opacity-70 cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<span className="text-xs font-medium text-white font-geist uppercase tracking-wider">Notification</span>
</div>
<div>
<div className="text-xs text-zinc-400 mb-0.5 font-geist">Slack: #exec-updates</div>
<div className="text-xs text-zinc-500 font-geist">Sent 2s ago</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none z-20"></div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
<div className="relative flex items-center justify-center w-16 h-16">
<div className="absolute inset-0 rounded-full border border-blue-500/10 animate-[ping_3s_ease-out_infinite] opacity-50"></div>
<div className="absolute inset-2 rounded-full border border-blue-500/20 animate-[ping_3s_ease-out_1s_infinite] opacity-50"></div>
<div className="relative w-14 h-14 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center group overflow-hidden ring-1 ring-white/5">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/20 to-transparent rotate-45 translate-y-full group-hover:translate-y-[-200%] transition-transform duration-1000 ease-in-out"></div>
<iconify-icon className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] text-2xl" icon="solar:infinity-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="relative hidden lg:block w-[260px] h-[440px]">
<svg className="absolute top-0 right-0 bottom-0 left-0 w-[260px] h-[440px]" fill="none" strokeWidth="2" style={{width: '260px', height: '440px'}} viewbox="0 0 260 440">
<defs>
<lineargradient id="beam-gradient-right" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#67e8f9"></stop>
<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M 0 220 C 100 220, 100 68, 208 68" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path className="animate-beam-path delay-300" d="M 0 220 C 100 220, 100 68, 208 68" fill="none" stroke="url(#beam-gradient-right)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 0 220 C 100 220, 100 144, 208 144" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path className="animate-beam-path delay-100" d="M 0 220 C 100 220, 100 144, 208 144" fill="none" stroke="url(#beam-gradient-right)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 0 220 C 100 220, 100 220, 208 220" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path className="animate-beam-path delay-500" d="M 0 220 C 100 220, 100 220, 208 220" fill="none" stroke="url(#beam-gradient-right)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 0 220 C 100 220, 100 296, 208 296" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path className="animate-beam-path delay-200" d="M 0 220 C 100 220, 100 296, 208 296" fill="none" stroke="url(#beam-gradient-right)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 0 220 C 100 220, 100 372, 208 372" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path className="animate-beam-path delay-300" d="M 0 220 C 100 220, 100 372, 208 372" fill="none" stroke="url(#beam-gradient-right)" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
<div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-purple-500/50 hover:shadow-purple-500/20 group/node">
<iconify-icon className="text-white/60 group-hover/node:text-purple-400 transition-colors text-2xl" icon="solar:chat-square-linear"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20 group/node">
<iconify-icon className="text-white/60 group-hover/node:text-blue-400 transition-colors text-2xl" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-zinc-500/50 hover:shadow-zinc-500/20 group/node">
<iconify-icon className="text-white/60 group-hover/node:text-white transition-colors text-2xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-red-500/50 hover:shadow-red-500/20 group/node">
<iconify-icon className="text-white/60 group-hover/node:text-red-400 transition-colors text-2xl" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-cyan-500/50 hover:shadow-cyan-500/20 group/node">
<iconify-icon className="text-white/60 group-hover/node:text-cyan-400 transition-colors text-2xl" icon="solar:server-path-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="agents">
<div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 rounded-[28px] pt-6 pr-6 pb-6 pl-6 shadow-[0_0px_0px_rgba(0,0,0,0)] ring-1 ring-white/10 relative">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between gap-x-6 gap-y-6 items-start mb-12">
<div>
<p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3 font-geist">
          Specialized Agents
        </p>
<h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight font-geist">
          Hire for any department
        </h2>
<p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
          Deploy pre-trained agents that understand their roles instantly. Give them access to your tools and watch them execute complex mandates autonomously.
        </p>
</div>
</div>
<div className="grid gap-4 md:grid-cols-3 gap-x-4 gap-y-4">

<div className="group flex flex-col overflow-hidden sm:p-4 bg-zinc-950/50 h-[380px] border border-white/10 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-inner">
<style>
          @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes orbit-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        </style>
<div className="flex flex-col h-full relative gap-4">
<div className="relative flex items-center justify-center rounded-xl h-52 overflow-hidden bg-[#020617] w-full shrink-0 border border-white/5">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 w-56 h-56 scale-90">
<div className="absolute inset-2 rounded-full border border-zinc-800"></div>
<div className="absolute inset-2 rounded-full border-t-2 border-t-blue-500/80 border-l-0 border-r-0 border-b-0" style={{transform: 'rotate(40deg)'}}></div>
<div className="absolute inset-10 rounded-full border border-zinc-800"></div>
<div className="absolute inset-10 rounded-full border-t-2 border-t-cyan-400/80 border-l-0 border-r-0 border-b-0" style={{transform: 'rotate(-20deg)'}}></div>
<div className="absolute inset-[86px] rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center justify-center z-20">
<iconify-icon className="text-white text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="absolute inset-0 z-10 pointer-events-none" style={{animation: 'orbit 40s linear infinite'}}>
<div className="absolute -left-1 top-16 h-8 w-8 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center" style={{animation: 'orbit-reverse 40s linear infinite'}}>
<iconify-icon className="text-zinc-400 text-sm" icon="solar:database-linear"></iconify-icon>
</div>
<div className="absolute right-2 top-6 h-8 w-8 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center" style={{animation: 'orbit-reverse 40s linear infinite'}}>
<iconify-icon className="text-zinc-400 text-sm" icon="solar:chart-2-linear"></iconify-icon>
</div>
<div className="absolute -right-1 bottom-10 h-8 w-8 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center" style={{animation: 'orbit-reverse 40s linear infinite'}}>
<iconify-icon className="text-zinc-400 text-sm" icon="solar:user-speak-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="relative mt-auto pb-2 px-2">
<h3 className="text-lg font-medium text-white mb-2 font-geist tracking-tight">AI CEO Co-Pilot</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-geist">
              Strategic analysis, real-time board reporting, and executive decision support connected directly to your core data sources.
            </p>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden sm:p-4 bg-zinc-950/50 h-[380px] border border-white/10 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-inner">
<div className="flex flex-col h-full relative gap-4">
<div className="flex overflow-hidden h-52 bg-[#020617] rounded-xl relative items-center justify-center w-full shrink-0 border border-white/5">
<div className="grid grid-cols-3 w-full h-full z-10 p-4 gap-3" style={{maskImage: 'linear-gradient(180deg, transparent, black 20%, black 80%, transparent)'}}>
<style>
                @keyframes aura-scroll-down { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
                .animate-col-down { animation: aura-scroll-down 15s linear infinite; }
                .animate-col-up { animation: aura-scroll-down 15s linear infinite reverse; }
              </style>
<div className="flex flex-col gap-3 animate-col-down">
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-blue-400 text-xl" icon="solar:letter-linear"></iconify-icon></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-purple-400 text-xl" icon="solar:user-rounded-linear"></iconify-icon></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-green-400 text-xl" icon="solar:calendar-linear"></iconify-icon></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-blue-400 text-xl" icon="solar:letter-linear"></iconify-icon></div>
</div>
<div className="flex flex-col gap-3 animate-col-up">
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-white text-xl" icon="solar:chat-round-dots-linear"></iconify-icon></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-white text-xl" icon="solar:magnifer-linear"></iconify-icon></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-white text-xl" icon="solar:target-linear"></iconify-icon></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-white text-xl" icon="solar:chat-round-dots-linear"></iconify-icon></div>
</div>
<div className="flex flex-col gap-3 animate-col-down">
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-yellow-400 text-xl" icon="solar:bolt-linear"></iconify-icon></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-red-400 text-xl" icon="solar:graph-up-linear"></iconify-icon></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-cyan-400 text-xl" icon="solar:checklist-minimalistic-linear"></iconify-icon></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><iconify-icon className="text-yellow-400 text-xl" icon="solar:bolt-linear"></iconify-icon></div>
</div>
</div>
</div>
<div className="relative mt-auto pb-2 px-2">
<h3 className="text-lg font-medium text-white mb-2 font-geist tracking-tight">AI SDR Agent</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-geist">
              Multi-channel personalized outreach, intelligent objection handling, and fully automated calendar booking.
            </p>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden sm:p-4 bg-zinc-950/50 h-[380px] border border-white/10 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-inner">
<style>
            @keyframes pulse-glow { 0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(59,130,246,0.3); } 50% { transform: scale(1.05); box-shadow: 0 0 60px rgba(59,130,246,0.5); } }
            .animate-pulse-logo { animation: pulse-glow 3s ease-in-out infinite; }
          </style>
<div className="flex flex-col h-full relative gap-4">
<div className="relative flex items-center justify-center rounded-xl h-52 overflow-hidden bg-[#020617] w-full shrink-0 border border-white/5">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-2xl animate-pulse-logo z-20 relative">
<iconify-icon className="text-white text-3xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-24 -translate-y-12 bg-zinc-900 border border-white/10 p-2 rounded-lg animate-bounce duration-[2000ms]">
<div className="w-8 h-2 rounded bg-zinc-700"></div>
</div>
<div className="absolute top-1/2 left-1/2 translate-x-16 translate-y-8 bg-zinc-900 border border-white/10 p-2 rounded-lg animate-bounce duration-[3000ms]">
<div className="w-8 h-2 rounded bg-zinc-700"></div>
</div>
</div>
</div>
<div className="relative mt-auto pb-2 px-2">
<h3 className="text-lg font-medium text-white mb-2 font-geist tracking-tight">Internal Agent</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-geist">
              Automated HR onboarding, instant IT ticket resolution, and seamless internal knowledge retrieval for your team.
            </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)] gap-x-12 gap-y-12">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-24 gap-x-6 gap-y-6 items-start">
<div>
<p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3 font-geist">
          How to deploy
        </p>
<h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight font-geist">
          Onboard your workforce in three steps
        </h2>
<p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
          Treat AI agents like new hires. Connect their tools, define their mandate, and let them get to work autonomously.
        </p>
</div>
</div>
<div className="flex flex-col gap-[35vh] pb-[20vh] relative stack-cards-container">

<div className="stack-card sticky top-28 overflow-hidden group bg-[#02050e] w-full border-white/10 border rounded-[32px] relative transition-all duration-75 ease-linear origin-top" data-card-index="0" style={{transform: 'scale(0.92)', opacity: '0.5', filter: 'brightness(50%)'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="absolute top-2 right-2 sm:top-4 sm:right-6 z-0 pointer-events-none select-none">
<div className="text-[170px] sm:text-[200px] font-semibold text-white/[0.055] font-geist leading-none tracking-tighter">01</div>
</div>
<div className="grid lg:grid-cols-2 gap-12 md:p-20 p-8 relative z-10 items-center">
<div className="relative flex flex-col items-center justify-center min-h-[420px]">
<div className="absolute -left-2 top-2 w-16 h-16 rounded-full bg-[#0f1219] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center z-30 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-zinc-300 group-hover:text-blue-400 transition-colors text-2xl" icon="solar:plug-circle-linear"></iconify-icon>
</div>
<div className="w-full max-w-[520px] rounded-2xl bg-[#0f1116] border border-white/5 shadow-2xl relative p-6">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-20 bg-blue-500/20 blur-[55px] rounded-full pointer-events-none opacity-60"></div>
<div className="flex items-center justify-between mb-5">
<div className="h-3 w-28 rounded-full bg-white/10"></div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="h-2.5 w-16 rounded-full bg-white/10 mb-3"></div><div className="h-2 w-full rounded-full bg-white/5"></div></div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="h-2.5 w-20 rounded-full bg-white/10 mb-3"></div><div className="h-2 w-5/6 rounded-full bg-white/5"></div></div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="h-2.5 w-14 rounded-full bg-white/10 mb-3"></div><div className="h-2 w-2/3 rounded-full bg-white/5"></div></div>
</div>
</div>
</div>
<div className="relative flex flex-col justify-center">
<h3 className="text-4xl font-semibold text-white mb-6 font-geist tracking-tight">Onboard your Agent</h3>
<p className="text-lg text-zinc-300/90 leading-relaxed font-geist max-w-xl">
              Connect your databases, documents, and APIs. Looper indexes everything so your agents have full context from day one.
            </p>
<div className="mt-8 flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-geist">CRM</span>
<span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-geist">Docs</span>
<span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-geist">Data Warehouses</span>
</div>
</div>
</div>
</div>

<div className="stack-card sticky top-32 overflow-hidden group bg-[#02050e] w-full border-white/10 border rounded-[32px] relative transition-all duration-75 ease-linear origin-top" data-card-index="1" style={{transform: 'scale(0.92)', opacity: '0.5', filter: 'brightness(50%)'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-400/10 blur-[90px] rounded-full pointer-events-none"></div>
<div className="absolute top-2 right-2 sm:top-4 sm:right-6 z-0 pointer-events-none select-none">
<div className="text-[170px] sm:text-[200px] font-semibold text-white/[0.055] font-geist leading-none tracking-tighter">02</div>
</div>
<div className="grid lg:grid-cols-2 gap-12 md:p-20 p-8 relative z-10 items-center">
<div className="relative flex flex-col items-center justify-center min-h-[420px]">
<div className="absolute -left-2 top-2 w-16 h-16 rounded-full bg-[#0f1219] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center z-30 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-zinc-300 group-hover:text-blue-400 transition-colors text-2xl" icon="solar:notes-minimalistic-linear"></iconify-icon>
</div>
<div className="w-full max-w-[520px] rounded-2xl bg-[#0f1116] border border-white/5 shadow-2xl relative p-6">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-20 bg-blue-500/20 blur-[55px] rounded-full pointer-events-none opacity-60"></div>
<div className="grid gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="solar:pen-linear"></iconify-icon></div>
<div className="flex-1"><div className="h-2.5 w-40 rounded-full bg-white/10 mb-2"></div><div className="h-2 w-2/3 rounded-full bg-white/5"></div></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 p-4 shadow-[0_0_35px_rgba(59,130,246,0.18)]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 border border-white/10 flex items-center justify-center shadow-[0_0_28px_rgba(59,130,246,0.25)]"><iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon></div>
<div className="flex-1"><div className="h-2.5 w-48 rounded-full bg-white/15 mb-2"></div><div className="h-2 w-2/3 rounded-full bg-white/10"></div></div>
</div>
</div>
</div>
</div>
</div>
<div className="relative flex flex-col justify-center">
<h3 className="text-4xl font-semibold text-white mb-6 font-geist tracking-tight">Define the Mandate</h3>
<p className="text-lg text-zinc-300/90 leading-relaxed font-geist max-w-xl">
              Don't just build rigid workflows. Give your agents goals, boundaries, and instructions in plain English. They figure out the steps.
            </p>
<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 max-w-xl">
<div className="text-xs uppercase tracking-widest text-blue-300/90 font-medium font-geist mb-2">SDR Mandate</div>
<div className="text-zinc-200 font-geist text-sm">
                “Engage VP-level leads from our CRM. Personalize pitches based on their recent company news. If they object on price, offer the startup tier.”
              </div>
</div>
</div>
</div>
</div>

<div className="stack-card sticky top-36 overflow-hidden group bg-[#02050e] w-full border-white/10 border rounded-[32px] relative transition-all duration-75 ease-linear origin-top" data-card-index="2" style={{transform: 'scale(1.02)', opacity: '1', filter: 'brightness(100%)'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-blue-500/10 blur-[90px] rounded-full pointer-events-none"></div>
<div className="absolute top-2 right-2 sm:top-4 sm:right-6 z-0 pointer-events-none select-none">
<div className="text-[170px] sm:text-[200px] font-semibold text-white/[0.055] font-geist leading-none tracking-tighter">03</div>
</div>
<div className="grid lg:grid-cols-2 gap-12 md:p-20 p-8 relative z-10 items-center">
<div className="relative flex flex-col items-center justify-center min-h-[420px]">
<div className="absolute -left-2 top-2 w-16 h-16 rounded-full bg-[#0f1219] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center z-30 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-zinc-300 group-hover:text-blue-400 transition-colors text-2xl" icon="solar:eye-linear"></iconify-icon>
</div>
<div className="w-full max-w-[520px] rounded-2xl bg-[#0f1116] border border-white/5 shadow-2xl relative p-6">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-20 bg-blue-500/20 blur-[55px] rounded-full pointer-events-none opacity-60"></div>
<div className="grid gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400/80"></div><div className="h-2.5 w-40 rounded-full bg-white/10"></div></div>
</div>
<div className="h-2 w-full rounded-full bg-white/5"></div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400/80"></div><div className="h-2.5 w-48 rounded-full bg-white/10"></div></div>
</div>
<div className="h-2 w-5/6 rounded-full bg-white/5"></div>
</div>
</div>
</div>
</div>
<div className="relative flex flex-col justify-center">
<h3 className="text-4xl font-semibold text-white mb-6 font-geist tracking-tight">Monitor the Workforce</h3>
<p className="text-lg text-zinc-300/90 leading-relaxed font-geist max-w-xl">
              Watch your agents collaborate in real-time. Intervene when necessary, review their decisions, and optimize their performance.
            </p>
<div className="mt-8 flex items-center gap-3">
<div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 font-geist text-sm">Real-time logs</div>
<div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 font-geist text-sm">Approval Gates</div>
<div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 font-geist text-sm">Analytics</div>
</div>
</div>
</div>
</div>
</div>

</div>
</section>
<section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-24 pl-6 relative" id="customers">
<div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)] gap-x-12 gap-y-12">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-24 gap-x-6 gap-y-6 items-start">
<div>
<p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3 font-geist">
          Testimonials
        </p>
<h2 className="sm:text-4xl text-3xl text-white font-geist tracking-tight font-semibold">
          Trusted by autonomous teams
        </h2>
<p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
          From startups to growing teams, Looper helps companies replace manual work with intelligent agents.
        </p>
</div>
<button className="inline-flex text-sm font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist tracking-tight">
        Read customer stories
      </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between h-full">
<div>
<iconify-icon className="text-3xl text-zinc-700 mb-6" icon="solar:chat-square-quote-linear"></iconify-icon>
<p className="text-lg text-zinc-300 leading-relaxed mb-6 font-geist">
                    "The AI SDR agent completely changed our pipeline generation. It books meetings autonomously and handles objections better than our junior reps."
                </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600"></div>
<div>
<div className="text-sm font-medium text-white font-geist">Alex Chen</div>
<div className="text-xs text-zinc-500 font-geist">VP Sales at Vertex</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900/20 to-zinc-900 border border-blue-500/20 flex flex-col justify-between h-full relative overflow-hidden group">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/30 transition"></div>
<div>
<iconify-icon className="text-3xl text-blue-500/50 mb-6" icon="solar:chat-square-quote-linear"></iconify-icon>
<p className="text-xl text-white font-medium leading-relaxed mb-6 font-geist tracking-tight">
                    "Having a CEO Co-Pilot agent analyze our daily metrics and flag anomalies has given me back 15 hours a week. It's truly a digital executive."
                </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500"></div>
<div>
<div className="text-sm font-medium text-white font-geist">Sarah Jenkins</div>
<div className="text-xs text-blue-200/70 font-geist">CEO, Nova</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between h-full">
<div>
<iconify-icon className="text-3xl text-zinc-700 mb-6" icon="solar:chat-square-quote-linear"></iconify-icon>
<p className="text-lg text-zinc-300 leading-relaxed mb-6 font-geist">
                    "Our Internal Agent resolves 60% of IT and HR tickets instantly. The knowledge retrieval is flawless and it scales effortlessly."
                </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600"></div>
<div>
<div className="text-sm font-medium text-white font-geist">David Kim</div>
<div className="text-xs text-zinc-500 font-geist">Head of Ops, Stripe</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-24 pl-6 relative" id="pricing">
<div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 rounded-[28px] ring-white/10 ring-1 pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)] gap-x-12 gap-y-12">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16 gap-x-6 gap-y-6 items-start">
<div className="">
<p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3 font-geist">
          Offers
        </p>
<h2 className="sm:text-4xl text-3xl text-white font-geist tracking-tight font-semibold">
          Hire your digital workforce
        </h2>
<p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
          Choose the right agent for your needs, or deploy a full swarm to handle entire departments.
        </p>
</div>
</div>
<div className="overflow-hidden bg-[#07070A] border-white/10 border rounded-[32px] relative shadow-2xl">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

<div className="md:p-12 p-8 flex flex-col">
<div className="flex flex-wrap items-center gap-4 mb-10">
<div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-white/5">
<button className="px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wide bg-zinc-800 text-white shadow-sm ring-1 ring-white/10 transition-all font-geist" data-billing="monthly">Monthly</button>
<button className="px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wide text-zinc-500 hover:text-white transition-all font-geist" data-billing="annual">Yearly</button>
</div>
<span className="text-xs text-blue-400 font-medium tracking-tight font-geist">Save 20% on yearly</span>
</div>
<div className="space-y-4">

<button className="w-full text-left p-5 rounded-xl border border-blue-500/50 bg-blue-500/10 transition-all flex items-center justify-between group">
<div>
<div className="text-white font-medium text-lg font-geist tracking-tight">Single Agent</div>
<div className="text-zinc-400 text-xs uppercase tracking-wide mt-1 font-geist">SDR or Internal Support</div>
</div>
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition">
<iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>

<button className="w-full text-left p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all flex items-center justify-between group">
<div>
<div className="text-white font-medium text-lg font-geist tracking-tight">Department Swarm</div>
<div className="text-zinc-400 text-xs uppercase tracking-wide mt-1 font-geist">Up to 5 specialized agents</div>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:scale-110 transition">
<iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>

<button className="w-full text-left p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all flex items-center justify-between group">
<div>
<div className="text-white font-medium text-lg font-geist tracking-tight">Enterprise Fleet</div>
<div className="text-zinc-400 text-xs uppercase tracking-wide mt-1 font-geist">Unlimited custom autonomous fleets</div>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:scale-110 transition">
<iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="md:p-12 p-8 flex flex-col relative bg-white/[0.01]">
<div className="mb-8">
<div className="text-5xl font-semibold text-white tracking-tight font-geist mb-2">$899<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
<p className="text-sm text-zinc-400 font-geist">Per active agent. Pause or re-assign anytime.</p>
</div>
<button className="w-full h-12 rounded-full bg-white text-black font-medium text-sm tracking-tight hover:bg-zinc-200 transition-colors mb-8 font-geist">
                  Deploy Single Agent
              </button>
<div className="flex flex-col gap-4 flex-1">
<div className="text-xs uppercase tracking-widest text-zinc-500 font-medium font-geist mb-2">What's included</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300 font-geist">Dedicated GPU compute</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300 font-geist">Pre-trained on standard operating procedures</span>
</div>
<div className="flex items-center gap-3">
</div></div></div></div></div></div></section>
    </>
  );
}
