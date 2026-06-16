import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
colors: {
blue: {
400: '#38bdf8',
500: '#0091F1', // Electric Blue
600: '#0077c8',
700: '#001161', // Navy
800: '#000c45',
900: '#000415', // Deepest background
950: '#00020a',
}
}
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = { transform: `perspective(1000px) rotateX(${value}deg)` };
if (value !== 0) rotateXUtilities[`.-rotate-x-${value}`] = { transform: `perspective(1000px) rotateX(-${value}deg)` };
});
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = { transform: `perspective(1000px) rotateY(${value}deg)` };
if (value !== 0) rotateYUtilities[`.-rotate-y-${value}`] = { transform: `perspective(1000px) rotateY(-${value}deg)` };
});
addUtilities({ ...rotateXUtilities, ...rotateYUtilities, ".transform-style-preserve-3d": { "transform-style": "preserve-3d" } });
}
]
};



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-75 blur-sm saturate-50" data-alpha-mask="36" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 36%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 36%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>

<div className="fixed inset-0 -z-10 w-full h-full">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0091F1] via-[#001161] to-[#000415] opacity-40"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
</div>

<nav className="fixed z-50 -translate-x-1/2 w-full max-w-6xl px-4 top-3 left-1/2">
<div className="flex transition-all duration-500 shadow-blue-900/20 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] sm:pl-4 sm:pt-3 sm:pb-3 sm:pr-2 bg-[#001161]/60 w-full h-14 border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur-xl items-center justify-between">
<div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none"></div>
<a className="flex items-center gap-2.5 cursor-pointer transition-transform pl-1 relative" href="#">

<img alt="PolyTrack" className="w-11 h-11 object-contain drop-shadow-[0_0_10px_rgba(0,145,241,0.5)]" src="https://i.ibb.co/JwybFsJD/logo.png?w=800&amp;q=80"/>
<span className="text-lg font-semibold text-white tracking-tight font-jakarta">
            PolyTrack
          </span>
</a>
<div className="relative hidden md:flex items-center space-x-1 text-sm font-medium">
<a className="nav-link relative px-4 py-2 transition-colors duration-300 font-geist text-blue-100/80 hover:text-white" href="#">
            Markets
          </a>
<a className="nav-link relative px-4 py-2 transition-colors duration-300 font-geist text-blue-100/80 hover:text-white" href="#">
            Signals
          </a>
<a className="nav-link relative px-4 py-2 transition-colors duration-300 font-geist text-blue-100/80 hover:text-white" href="#">
            Features
          </a>
</div>
<div className="relative flex items-center gap-4">
<button className="group inline-flex gap-2 overflow-hidden hover:shadow-[0_0_30px_rgba(0,145,241,0.6)] hover:scale-[1.02] transition-all duration-300 cursor-pointer text-xs font-semibold text-white font-geist bg-gradient-to-r from-[#0091F1] to-[#0055ff] rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative shadow-[0_0_20px_rgba(0,145,241,0.3)] gap-x-2 gap-y-2 items-center" onclick="window.location.href='https://t.me/usePolyTrack_bot'" role="button">
<span className="relative z-10 font-geist tracking-wide">Launch Bot</span>
<img alt="PolyTrack" className="object-contain] w-6 h-6" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png?w=800&amp;q=80"/>
</button>
</div>
</div>
</nav>

<main className="flex-grow sm:pt-40 sm:pb-0 pt-32 pb-16 relative">
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] text-center max-w-4xl mr-auto mb-16 ml-auto">
<div className="inline-flex gap-2 bg-[#001161]/50 border-[#0091F1]/30 border rounded-full mb-6 py-1.5 px-4 items-center shadow-[0_0_15px_rgba(0,145,241,0.2)]">
<span className="flex h-2 w-2 rounded-full bg-[#0091F1] animate-pulse shadow-[0_0_8px_#0091F1]"></span>
<span className="uppercase text-xs font-medium text-blue-200 tracking-wide font-geist">Live Polymarket Tracker</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight font-jakarta mb-6">
            Track prediction markets
            <br className="hidden sm:block"/>
            in <span className="bg-clip-text inline-flex font-semibold text-transparent bg-gradient-to-r from-[#0091F1] to-white">Real-Time.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-blue-100/70 font-geist max-w-2xl mr-auto mb-10 ml-auto">Track newly created Polymarket deals in real time. Get needed data like end date, liquidity, volume, and links, AI analysis - all inside Telegram.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="inline-flex sm:w-auto transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,145,241,0.5)] hover:scale-[1.02] text-sm font-semibold text-white font-geist bg-gradient-to-r from-[#0091F1] to-[#0055ff] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_4px_15px_rgba(0,145,241,0.3)] gap-x-2 gap-y-2 items-center justify-center">
<img alt="PolyTrack" className="object-contain] w-6 h-6" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png?w=800&amp;q=80"/>
              Start Tracking Free
            </button>
<button className="inline-flex sm:w-auto transition-all duration-300 hover:bg-[#001161] hover:border-[#0091F1] hover:shadow-[0_0_20px_rgba(0,145,241,0.2)] text-sm font-semibold text-white font-geist bg-[#001161]/50 w-full border-[#0091F1]/30 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 items-center justify-center">
              View Live Channel
            </button>
</div>
</div>

<div className="group [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] w-full h-[680px] max-w-[1400px] mt-8 mr-auto ml-auto relative perspective-[2000px]">

<div className="transform-style-preserve-3d hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-700 ease-out w-full h-full relative rotate-x-2 rotate-y-0">

<div className="overflow-hidden flex select-none bg-[#020617] w-full h-full border-white/10 border rounded-3xl relative shadow-[0_0_50px_rgba(0,17,97,0.5)]">

<div className="z-20 flex flex-col bg-[#000829]/90 w-[240px] border-white/5 border-r absolute top-0 bottom-0 left-0 backdrop-blur-xl">
<div className="border-white/5 border-b pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-white font-jakarta font-semibold">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#0091F1] to-[#001161] flex items-center justify-center text-[10px]">PT</div>
                      PolyTrack
                   </div>
</div>
<div className="p-3 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#0091F1]/10 border border-[#0091F1]/20 text-white cursor-pointer">
<svg className="lucide lucide-zap w-4 h-4 text-[#0091F1]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs font-medium font-geist">Live Feed</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white cursor-pointer transition-colors">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-medium font-geist">Trending</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white cursor-pointer transition-colors">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<span className="text-xs font-medium font-geist">Watchlist</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white cursor-pointer transition-colors">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs font-medium font-geist">Settings</span>
</div>
</div>
<div className="mt-auto p-4 border-t border-white/5">
<div className="bg-[#001161] rounded-xl p-3 border border-[#0091F1]/20">
<div className="text-[10px] text-blue-200 mb-1 font-geist">Status</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_lime]"></div>
<div className="text-xs font-semibold font-geist">System Online</div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-hidden flex flex-col bg-[#000415] h-full ml-[240px] relative">

<div className="flex bg-[#000829]/50 h-14 border-white/5 border-b pr-6 pl-6 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
<svg className="lucide lucide-search w-3.5 h-3.5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs text-gray-400 font-geist">Search markets...</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="px-3 py-1 rounded bg-[#0091F1]/20 border border-[#0091F1]/30 text-[#0091F1] text-[10px] font-bold font-mono">LIVE</div>
<svg className="lucide lucide-bell w-4 h-4 text-gray-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0091F1] to-white"></div>
</div>
</div>

<div className="p-6 overflow-y-auto space-y-4">
<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-geist">New Markets Detected</div>

<div className="bg-[#001161]/30 border border-white/10 rounded-xl p-4 hover:border-[#0091F1]/50 transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-[#0091F1]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 shrink-0">
<span className="text-xl">🇺🇸</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/20 font-mono">Politics</span>
<span className="text-[10px] text-gray-500 font-mono">2m ago</span>
</div>
<h3 className="text-sm font-semibold text-white font-jakarta mb-1">Presidential Election Winner 2024</h3>
<div className="flex items-center gap-4 text-xs text-gray-400 font-geist">
<div className="flex items-center gap-1">
<svg className="lucide lucide-bar-chart-2 w-3 h-3" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="">Vol: $12.4M</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-droplets w-3 h-3" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<span>Liq: High</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-lg font-bold text-white font-mono">48%</div>
<div className="text-[10px] text-green-400">+2.4%</div>
</div>
</div>
</div>

<div className="bg-[#001161]/30 border border-white/10 rounded-xl p-4 hover:border-[#0091F1]/50 transition-colors group cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 shrink-0">
<span className="text-xl">₿</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/20 font-mono">Crypto</span>
<span className="text-[10px] text-gray-500 font-mono">5m ago</span>
</div>
<h3 className="text-sm font-semibold text-white font-jakarta mb-1">Bitcoin to hit $100k in 2024?</h3>
<div className="flex items-center gap-4 text-xs text-gray-400 font-geist">
<div className="flex items-center gap-1">
<svg className="lucide lucide-bar-chart-2 w-3 h-3" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="">Vol: $4.2M</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-droplets w-3 h-3" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<span>Liq: Medium</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-lg font-bold text-white font-mono">32%</div>
<div className="text-[10px] text-red-400">-1.2%</div>
</div>
</div>
</div>

<div className="bg-[#001161]/30 border border-white/10 rounded-xl p-4 hover:border-[#0091F1]/50 transition-colors group cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 shrink-0">
<span className="text-xl">🚀</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/20 font-mono">Science</span>
<span className="text-[10px] text-gray-500 font-mono">12m ago</span>
</div>
<h3 className="text-sm font-semibold text-white font-jakarta mb-1">Starship Launch Successful by Nov?</h3>
<div className="flex items-center gap-4 text-xs text-gray-400 font-geist">
<div className="flex items-center gap-1">
<svg className="lucide lucide-bar-chart-2 w-3 h-3" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="">Vol: $850k</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-droplets w-3 h-3" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<span className="">Liq: Low</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-lg font-bold text-white font-mono">75%</div>
<div className="text-[10px] text-green-400">+5.0%</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#000415] to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="pt-24 pb-24 relative">
<div className="absolute inset-0 bg-[#000415] -z-20"></div>
<div className="sm:px-6 lg:px-8 bg-[#001161]/20 max-w-7xl border-white/5 border rounded-3xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end border-white/5 border-b pb-8 gap-x-6 gap-y-6 items-start justify-between">
<div className="max-w-2xl">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight font-jakarta mb-4 text-left" style={{}}>
              Advanced data for
              <span className="text-[#0091F1] font-jakarta font-medium" style={{}}>
                prediction markets
              </span>
</h2>
<p className="leading-relaxed text-base mt-2 font-geist text-gray-400">
              Stop refreshing browsers. PolyTrack pushes new markets and high-value opportunities to you the second they appear on-chain.
            </p>
</div>
<div className="flex items-center gap-3">
<button className="px-6 py-3 rounded-full bg-[#001161] border border-[#0091F1]/30 text-white font-geist text-sm font-semibold hover:bg-[#0091F1] hover:border-transparent transition-all">
                Read Documentation
             </button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6 mt-12 gap-x-6 gap-y-6">

<div className="group bg-[#000829] border border-white/5 rounded-2xl p-8 hover:border-[#0091F1]/30 transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20">
<svg className="lucide lucide-radar w-32 h-32 text-[#0091F1]" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#0091F1]/10 flex items-center justify-center border border-[#0091F1]/20 mb-6">
<svg className="lucide lucide-search w-6 h-6 text-[#0091F1]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 font-jakarta">Real-time Market Discovery</h3>
<p className="text-gray-400 text-sm leading-relaxed font-geist">
                        Detects new Polymarket deals the moment they are created. Be the first to trade on fresh odds before the liquidity settles.
                    </p>
</div>
</div>

<div className="group bg-[#000829] border border-white/5 rounded-2xl p-8 hover:border-[#0091F1]/30 transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20">
<svg className="lucide lucide-bar-chart-4 w-32 h-32 text-[#0091F1]" data-lucide="bar-chart-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#0091F1]/10 flex items-center justify-center border border-[#0091F1]/20 mb-6">
<svg className="lucide lucide-activity w-6 h-6 text-[#0091F1]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 font-jakarta">Deep Market Data</h3>
<p className="text-gray-400 text-sm leading-relaxed font-geist">
                        Get instant snapshots of liquidity depth, volume, and spread. Analyze the potential of a market without leaving Telegram.
                    </p>
</div>
</div>

<div className="group hover:border-[#0091F1]/30 transition-all overflow-hidden bg-[#000829] border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 p-6 opacity-20">
<svg className="lucide lucide-smartphone w-32 h-32 text-[#0091F1]" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="z-10 relative">
<div className="w-12 h-12 rounded-lg bg-[#0091F1]/10 flex items-center justify-center border border-[#0091F1]/20 mb-6">
<svg className="lucide lucide-message-square w-6 h-6 text-[#0091F1]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 font-jakarta">Telegram Native</h3>
<p className="text-gray-400 text-sm leading-relaxed font-geist">
                        Configure alerts, manage your watchlist, and get notifications all within a simple chat interface. No complex dashboards.
                    </p>
</div>
</div>

<div className="group bg-[#000829] border border-white/5 rounded-2xl p-8 hover:border-[#0091F1]/30 transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20">
<svg className="lucide lucide-arrow-up-right w-32 h-32 text-[#0091F1]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#0091F1]/10 flex items-center justify-center border border-[#0091F1]/20 mb-6">
<svg className="lucide lucide-zap w-6 h-6 text-[#0091F1]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 font-jakarta">Direct Trading Access</h3>
<p className="text-gray-400 text-sm leading-relaxed font-geist">
                        One-click deep links take you straight to the order book. Reduce the friction between spotting a signal and executing the trade.
                    </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white mb-4 font-jakarta" style={{}}>Powerful data. <span className="text-[#0091F1]" style={{}}>Completely Free.</span></h2>
<p className="text-gray-400 font-geist text-lg">We are in open beta. Get unrestricted access to all premium features.</p>
</div>
<div className="max-w-3xl mx-auto">

<div className="bg-[#001161]/30 border border-[#0091F1]/40 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center relative shadow-[0_0_50px_rgba(0,145,241,0.15)] overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#0091F1]/10 via-transparent to-transparent pointer-events-none"></div>
<div className="flex-1 text-center md:text-left mb-8 md:mb-0 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091F1]/20 border border-[#0091F1]/30 text-[#0091F1] text-xs font-bold font-mono mb-4">
                        BETA ACCESS
                    </div>
<h3 className="text-3xl font-semibold text-white font-jakarta mb-2" style={{}}>PolyTrack Pro</h3>
<div className="flex items-baseline gap-2 justify-center md:justify-start">
<span className="text-5xl font-bold text-white tracking-tight" style={{}}>$0</span>
<span className="text-lg text-gray-400 font-medium">/ forever</span>
</div>
<p className="text-gray-400 mt-4 max-w-md font-geist">
                        Enjoy instant alerts, unlimited market tracking, and deep API access without paying a dime.
                    </p>
</div>
<div className="w-full md:w-auto md:pl-12 md:border-l border-white/10 relative z-10">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white font-geist">
<div className="w-6 h-6 rounded-full bg-[#0091F1]/20 flex items-center justify-center shrink-0">
<svg className="text-[#0091F1]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Instant Real-time Alerts</span>
</li>
<li className="flex items-center gap-3 text-white font-geist">
<div className="w-6 h-6 rounded-full bg-[#0091F1]/20 flex items-center justify-center shrink-0">
<svg className="text-[#0091F1]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Unlimited Market Watchlist</span>
</li>
<li className="flex items-center gap-3 text-white font-geist">
<div className="w-6 h-6 rounded-full bg-[#0091F1]/20 flex items-center justify-center shrink-0">
<svg className="text-[#0091F1]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Full API Access</span>
</li>
<li className="flex items-center gap-3 text-white font-geist">
<div className="w-6 h-6 rounded-full bg-[#0091F1]/20 flex items-center justify-center shrink-0">
<svg className="text-[#0091F1]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Liquidity &amp; Volume Analysis</span>
</li>
</ul>
<button className="w-full mt-8 py-3.5 rounded-xl bg-[#0091F1] text-white font-semibold hover:bg-[#0077c8] transition-all font-geist shadow-lg shadow-blue-900/50 hover:shadow-blue-500/30 transform hover:-translate-y-0.5" onclick="window.location.href='https://t.me/usePolyTrack_bot'">
                        Start Tracking Now
                    </button>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] border-white/5 border-t pt-24 pb-24 relative">
<div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6 font-jakarta font-medium" style={{}}>
          Ready to find your edge?
        </h2>
<p className="text-lg mb-10 max-w-2xl mx-auto font-geist text-blue-200/60">
          Join thousands of prediction market traders spotting alpha with PolyTrack.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="inline-flex sm:w-auto gap-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,145,241,0.6)] hover:scale-[1.02] cursor-pointer text-sm font-semibold text-white font-geist bg-gradient-to-r from-[#0091F1] to-[#0055ff] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(0,145,241,0.4)] gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://t.me/usePolyTrack_bot'" role="button">
            Launch PolyTrack Bot
          </button>
</div>
</div>
</section>

<footer className="text-sm bg-[#00020a] border-white/5 border-t pt-12 pb-12">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2.5 cursor-pointer transition-transform relative" href="#">

<img alt="PolyTrack" className="w-11 h-11 object-contain drop-shadow-[0_0_10px_rgba(0,145,241,0.5)]" src="https://i.ibb.co/JwybFsJD/logo.png"/>
<span className="text-lg font-bold text-white tracking-tight font-jakarta">
                PolyTrack
              </span>
</a>
<p className="max-w-xs font-geist text-gray-500 mt-4">
              The premier tracking tool for Polymarket prediction markets. Real-time data, instant alerts.
            </p>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4 font-geist">Product</h4>
<ul className="space-y-2 text-gray-500">
<li className=""><a className="hover:text-[#0091F1] transition-colors font-geist" href="#">Features</a></li>
<li className=""><a className="hover:text-[#0091F1] transition-colors font-geist" href="#">Pricing</a></li>
<li className=""><a className="hover:text-[#0091F1] transition-colors font-geist" href="#">Changelog</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4 font-geist">Resources</h4>
<ul className="space-y-2 text-gray-500">
<li className=""><a className="hover:text-[#0091F1] transition-colors font-geist" href="#">Guide</a></li>
<li className=""><a className="hover:text-[#0091F1] transition-colors font-geist" href="#">API Docs</a></li>
<li className=""><a className="hover:text-[#0091F1] transition-colors font-geist" href="#">Community</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4 font-geist">Legal</h4>
<ul className="space-y-2 text-gray-500">
<li className=""><a className="hover:text-[#0091F1] transition-colors font-geist" href="#">Privacy</a></li>
<li className=""><a className="hover:text-[#0091F1] transition-colors font-geist" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row border-white/5 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-gray-600 font-geist">
  © 2025 PolyTrack. All rights reserved. Not affiliated with Polymarket.
</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors text-gray-500" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/500px-X_logo_2023_%28white%29.png"><img alt="PolyTrack" className="object-contain] w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/500px-X_logo_2023_%28white%29.png?w=800&amp;q=80"/></a>
<a className="hover:text-white transition-colors text-gray-500" href="#"><svg className="lucide lucide-github text-slate-50 w-[22px] h-[22px]" data-icon-replaced="true" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" style={{width: '22px', height: '22px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<img alt="PolyTrack" className="object-contain] w-6 h-6" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png?w=800&amp;q=80"/>
</div>
</div>
</div>
</footer>


    </>
  );
}
