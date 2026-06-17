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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#15D6A8] rounded-full blur-[120px] opacity-[0.08] pointer-events-none z-[-1]"></div>

<nav className="fixed bg-[#151414]/80 w-full z-50 border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">

<div className="flex text-white w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc8875a2-dab2-456b-a781-66ab69f0353c_320w.png)] bg-cover bg-center rounded-lg items-center justify-center">
</div>
<span className="text-lg font-semibold tracking-tight text-white">Perspective AI</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#rewards">Rewards</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#agents">Agents</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#community">Community</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all">
                    Launch App
                </button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="text-center max-w-4xl mr-auto ml-auto space-y-8">
<div className="inline-flex gap-2 text-xs text-[#15D6A8] bg-white/5 border-white/10 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>Perspective Token ($POV) is live<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15D6A8] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#15D6A8]"></span>
</span></div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-gradient font-geist" style={{}}>
                The New Perspective <br/> 
                on <span className="accent-gradient-text font-geist">Decentralized AI</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Unlock the power of multi-model intelligence. Train custom agents, refer friends, and earn crypto rewards for every interaction.
            </p>
<div className="pt-6">
<button className="shiny-cta focus:outline-none">
<span>Start Earning Today</span>
</button>
</div>

<div className="mt-16 relative">
<div className="z-10 bg-gradient-to-t from-[#151414] via-transparent to-transparent w-full h-full absolute top-0 right-0 bottom-0 left-0"></div>
<div className="glass-card shadow-[#15D6A8]/10 transform max-w-4xl border-white/10 border rounded-xl mr-auto ml-auto pt-2 pr-2 pb-2 pl-2 shadow-2xl rotate-x-12 perspective-1000">
<div className="bg-black/40 rounded-lg overflow-hidden aspect-[16/9] flex items-center justify-center border border-white/5">
<div className="text-center space-y-4">
<svg className="lucide lucide-cpu w-12 h-12 text-[#15D6A8] mx-auto opacity-80" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<p className="text-neutral-500 font-mono text-sm">Initializing Neural Interface...</p>
<div className="flex gap-1 justify-center">
<div className="w-16 h-1 bg-[#15D6A8]/20 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-[#15D6A8] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative" id="rewards">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 font-geist" style={{}}>Get rewarded for using AI</h2>
<p className="text-lg text-neutral-400">Transform your daily workflow into a revenue stream. We've gamified intelligence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card group hover:border-[#15D6A8]/30 transition-all duration-300 bg-cyan-50/10 rounded-2xl pt-8 pr-8 pb-8 pl-8 blur-none backdrop-blur-md">
<div className="w-12 h-12 rounded-lg bg-[#15D6A8]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-message-square-dashed text-[#15D6A8]" data-lucide="message-square-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h.01"></path><path d="M12 3h.01"></path><path d="M16 19h.01"></path><path d="M16 3h.01"></path><path d="M2 13h.01"></path><path d="M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8"></path><path d="M2 5a2 2 0 0 1 2-2"></path><path d="M2 9h.01"></path><path d="M20 3a2 2 0 0 1 2 2"></path><path d="M22 13h.01"></path><path d="M22 17a2 2 0 0 1-2 2"></path><path d="M22 9h.01"></path><path d="M8 3h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Chat to Earn</h3>
<p className="text-neutral-400 text-lg">Interact with advanced LLMs and receive $PRSP tokens for providing feedback and refining outputs.</p>
</div>

<div className="glass-card group hover:border-[#15D6A8]/30 transition-all duration-300 bg-cyan-50/10 rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-md">
<div className="flex group-hover:scale-110 transition-transform bg-cyan-500/10 w-12 h-12 rounded-lg mb-6 items-center justify-center">
<svg className="lucide lucide-users w-[24px] h-[24px] text-cyan-400" data-icon-replaced="true" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Referral Network</h3>
<p className="text-neutral-400 text-lg">Build your circle. Earn 15% of the transaction fees generated by every user you onboard.</p>
</div>

<div className="glass-card group hover:border-[#15D6A8]/30 transition-all duration-300 bg-gradient-to-br from-white/10 via-white/10 to-white/10 rounded-2xl px-8 py-8">
<div className="flex group-hover:scale-110 transition-transform bg-violet-400/10 w-12 h-12 rounded-lg mb-6 items-center justify-center">
<svg className="lucide lucide-arrow-left-right text-violet-400 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path className="" d="M20 17H4"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Trade &amp; Stake</h3>
<p className="text-neutral-400 text-lg">Swap tokens instantly within the app or stake your $PRSP to unlock premium models.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]" id="agents">
<div className="flex max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 items-end justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 font-geist" style={{}}>Create custom Agents</h2>
<p className="text-lg text-neutral-400">Deploy specialized autonomous agents for any task.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 rounded-full border border-white/10 hover:bg-white/5"><svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
<button className="p-2 rounded-full border border-white/10 hover:bg-white/5"><svg className="lucide lucide-arrow-right w-[24px] h-[20px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 no-scrollbar snap-x pr-6 pb-8 pl-6 gap-x-6 gap-y-6">

<div className="min-w-[300px] md:min-w-[380px] snap-center glass-card rounded-2xl p-6 border border-white/10 hover:border-[#15D6A8]/50 transition-colors cursor-pointer relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
</div>
<div className="h-32 rounded-lg bg-gradient-to-br from-green-500/20 to-purple-500/20 mb-6 flex items-center justify-center">
<svg className="lucide lucide-code-2 w-10 h-10 text-indigo-400" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2">DevNavigator</h3>
<p className="text-neutral-400 mb-4 text-base">Expert at code review, debugging, and system architecture planning.</p>
<div className="flex gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<span className="bg-white/5 px-2 py-1 rounded">Python</span>
<span className="bg-white/5 px-2 py-1 rounded">Rust</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] snap-center glass-card rounded-2xl p-6 border border-white/10 hover:border-[#15D6A8]/50 transition-colors cursor-pointer relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
</div>
<div className="h-32 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 mb-6 flex items-center justify-center">
<svg className="lucide lucide-candlestick-chart w-10 h-10 text-emerald-400" data-lucide="candlestick-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5v4"></path><rect height="6" rx="1" width="4" x="7" y="9"></rect><path d="M9 15v2"></path><path d="M17 3v2"></path><rect height="8" rx="1" width="4" x="15" y="5"></rect><path d="M17 13v3"></path><path d="M3 3v16a2 2 0 0 0 2 2h16"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2">MarketAnalyst</h3>
<p className="text-neutral-400 mb-4 text-base">Real-time crypto sentiment analysis and trend prediction engine.</p>
<div className="flex gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<span className="bg-white/5 px-2 py-1 rounded">DeFi</span>
<span className="bg-white/5 px-2 py-1 rounded">Trends</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] snap-center glass-card rounded-2xl p-6 border border-white/10 hover:border-[#15D6A8]/50 transition-colors cursor-pointer relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
</div>
<div className="h-32 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 mb-6 flex items-center justify-center">
<svg className="lucide lucide-pen-tool w-10 h-10 text-pink-400" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-2">CopySmith</h3>
<p className="text-neutral-400 mb-4 text-base">Generates high-conversion marketing copy and social media threads.</p>
<div className="flex gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<span className="bg-white/5 px-2 py-1 rounded">SEO</span>
<span className="bg-white/5 px-2 py-1 rounded">Social</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] snap-center glass-card rounded-2xl p-6 border border-white/10 hover:border-[#15D6A8]/50 transition-colors cursor-pointer relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-bot text-[#15D6A8] w-6 h-6" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="h-32 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-6 flex items-center justify-center">
<svg className="lucide lucide-shield-check w-10 h-10 text-blue-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2">Auditor AI</h3>
<p className="text-neutral-400 mb-4 text-base">Smart contract vulnerability scanning and gas optimization reports.</p>
<div className="flex gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<span className="bg-white/5 px-2 py-1 rounded">Security</span>
<span className="bg-white/5 px-2 py-1 rounded">Solidity</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="community">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 font-geist" style={{}}>Join the Collective Intelligence</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
                Be part of the fastest growing Web3 AI community. Governance, alpha, and exclusive models await.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5865F2] hover:bg-[#4752c4] text-white rounded-full font-medium transition-all" href="#">
<svg className="lucide lucide-gamepad-2 w-5 h-5" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
                    Join Discord
                </a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-neutral-200 rounded-full font-medium transition-all" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    Follow on X
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center font-geist" style={{}}>Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white/5 rounded-xl border border-white/5 overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-lg font-medium text-neutral-100">How do I earn $PRSP tokens?</span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-lg leading-relaxed">
                        You earn tokens by actively chatting with our AI models, providing quality feedback (RLHF), referring new users, and participating in community governance votes.
                    </div>
</details>
<details className="group bg-white/5 rounded-xl border border-white/5 overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-lg font-medium text-neutral-100">What AI models are available?</span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-lg leading-relaxed">
                        Perspective AI aggregates top open-source models (Llama 3, Mistral) and proprietary financial/coding models. Users can also fine-tune their own agents.
                    </div>
</details>
<details className="group bg-white/5 rounded-xl border border-white/5 overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-lg font-medium text-neutral-100">Is my data private?</span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-lg leading-relaxed">
                        Yes. We utilize decentralized storage and zero-knowledge proofs to ensure your interaction data remains yours. You choose what to share for training rewards.
                    </div>
</details>
</div>
</div>
</section>

<section className="text-center pt-32 pr-6 pb-32 pl-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 text-gradient font-geist" style={{}}>
                Ready to change your Perspective?
            </h2>
<div className="flex flex-col items-center gap-6">
<p className="text-sm text-neutral-500 mt-4">No credit card required. Connect wallet to start.</p><button className="shiny-cta focus:outline-none scale-110">
<span className="">Launch App</span>
</button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#0e0d0d] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="flex text-black w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d8b8f00-2dbd-4944-9d3a-781eeced8507_320w.png)] bg-cover bg-center rounded items-center justify-center">
</div>
<span className="font-semibold text-white">Perspective</span>
</div>
<p className="text-neutral-500 text-sm">Decentralizing intelligence for the future of humanity.</p>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-neutral-400 text-sm">
<li><a className="hover:text-[#15D6A8] transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-[#15D6A8] transition-colors" href="#">Tokenomics</a></li>
<li><a className="hover:text-[#15D6A8] transition-colors" href="#">Roadmap</a></li>
<li><a className="hover:text-[#15D6A8] transition-colors" href="#">API</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-neutral-400 text-sm">
<li><a className="hover:text-[#15D6A8] transition-colors" href="#">About</a></li>
<li className=""><a className="hover:text-[#15D6A8] transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-[#15D6A8] transition-colors" href="#">Careers</a></li>
<li className=""><a className="hover:text-[#15D6A8] transition-colors" href="#">Brand Assets</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-neutral-400 text-sm">
<li><a className="hover:text-[#15D6A8] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#15D6A8] transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-sm">© 2024 Perspective AI. All rights reserved.</p>
<div className="flex gap-4">
<svg className="lucide lucide-github w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg className="lucide lucide-twitter w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-disc w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="disc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
