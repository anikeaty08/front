import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen bg-gradient-to-b from-[#60a5fa] via-[#3b82f6] to-[#0f172a] w-full pb-0 relative">

<nav className="relative z-50 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto text-slate-800">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight text-slate-900">ChatGPT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-800/80">
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
<a className="hover:text-slate-900 transition-colors" href="#">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#">Learn</a>
<a className="hover:text-slate-900 transition-colors" href="#">Business</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Images</a>
<a className="hover:text-slate-900 transition-colors" href="#">Download</a>
</div>
<button className="bg-black hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors">
                Download for macOS*
            </button>
</nav>

<main className="z-40 flex flex-col md:mt-16 mt-16 pr-4 pl-4 relative items-center justify-center">

<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-900 flex items-center justify-center shadow-xl shadow-blue-900/20 mb-6">
<svg aria-hidden="true" className="lucide lucide-navigation w-8 h-8 text-white fill-white transform -rotate-45 ml-1 mt-1" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight text-center mb-6 drop-shadow-sm">
    ChatGPT Atlas
  </h1>

<button className="mb-12 hover:bg-[#f8fafc] transition-all duration-300 shadow-blue-900/5 hover:scale-[1.02] hover:shadow-2xl text-lg font-bold text-[#0f172a] bg-white rounded-full pt-3 pr-6 pb-3 pl-6 shadow-xl">
            Download for macOS*
        </button>


<div className="md:left-[5%] glass-panel transform md:scale-90 z-10 pointer-events-none hidden md:block opacity-60 w-[400px] h-[300px] rounded-xl absolute top-[40%] left-[-10%] -rotate-6 scale-75">
<div className="h-8 border-b border-white/20 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
</div>
<div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-500/30"></div>
</div>

<div className="absolute top-[35%] right-[-10%] md:right-[2%] w-[450px] h-[320px] glass-panel rounded-xl opacity-70 transform rotate-3 scale-75 md:scale-90 z-10 pointer-events-none hidden md:block">
<div className="h-8 border-b border-white/20 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
</div>
<div className="w-full h-full bg-gradient-to-bl from-cyan-400/30 to-blue-600/30"></div>
</div>

<div className="z-30 w-full max-w-[1067px] mr-auto ml-auto">
<div className="relative w-full aspect-video md:h-[600px] md:w-[1067px]">
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" className="absolute inset-0 h-full w-full rounded-xl" referrerpolicy="strict-origin-when-cross-origin" src="https://player.vimeo.com/video/1129227761?h=94755e8733&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="OAI_Atlas_Sizzle_16x9_251021">
</iframe>
</div>
</div>

<div className="z-30 text-center max-w-2xl mt-24 relative">
<h2 className="md:text-2xl leading-snug text-xl font-semibold text-white tracking-tight drop-shadow-lg">
    Bring ChatGPT with you across the web for instant answers, smarter suggestions, and help with tasks—all with
    privacy settings you can control.
  </h2>
</div>

<div className="pointer-events-none z-10 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent w-full h-64 absolute bottom-0 left-0">
</div>
</main><section className="z-40 md:py-32 bg-[#0f172a] w-full border-white/5 border-t pt-24 pb-24 relative">

<div className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-sm">
                Unlock the web with ChatGPT by your side
            </h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="relative w-full group perspective-1000">
<div className="relative rounded-xl bg-white overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-700/50 ring-1 ring-white/10 transform transition-transform duration-500 hover:scale-[1.01]">

<div className="h-9 bg-[#f3f4f6] border-b border-slate-200 flex items-center px-4 gap-1.5 justify-between">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]/50"></div>
<div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]/50"></div>
<div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]/50"></div>
</div>
<div className="flex-1 max-w-md mx-4 bg-white rounded shadow-sm h-6 border border-slate-200 text-[10px] flex items-center justify-center text-slate-400 font-medium">
<svg aria-hidden="true" className="lucide lucide-lock w-2.5 h-2.5 mr-1 text-slate-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> aerionshoes.com
                        </div>
<div className="w-10"></div>
</div>

<div className="flex flex-col md:flex-row h-[480px] bg-white">

<div className="flex-1 p-6 md:p-8 relative flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<div className="text-[10px] font-bold text-slate-400 tracking-wider mb-1">AERION FOOTWEAR</div>
<h3 className="text-xl font-bold text-slate-900">WMNS Aerion Runner 8.1</h3>
</div>
<div className="text-sm font-semibold text-slate-900">$125.00</div>
</div>

<div className="flex-1 flex items-center justify-center p-4 relative">
<div className="absolute inset-0 bg-slate-50 rounded-full scale-90 mix-blend-multiply filter blur-2xl opacity-60"></div>
<img alt="Running Shoe" className="relative z-10 w-full max-w-[280px] object-contain mix-blend-multiply transform -rotate-12 hover:rotate-0 transition-transform duration-700" src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="mt-auto space-y-4">
<div className="space-y-2">
<span className="text-[10px] font-medium text-slate-500 uppercase">Select Size</span>
<div className="grid grid-cols-5 gap-2">
<button className="border border-slate-200 rounded py-1.5 text-[10px] font-medium text-slate-600 hover:border-slate-900">6</button>
<button className="border border-slate-200 rounded py-1.5 text-[10px] font-medium text-slate-600 hover:border-slate-900">7</button>
<button className="bg-slate-900 text-white rounded py-1.5 text-[10px] font-medium">8</button>
<button className="border border-slate-200 rounded py-1.5 text-[10px] font-medium text-slate-600 hover:border-slate-900">9</button>
<button className="border border-slate-200 rounded py-1.5 text-[10px] font-medium text-slate-600 hover:border-slate-900">10</button>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-black text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors">Add to Cart</button>
</div>
</div>

<div className="w-full md:w-[320px] bg-[#171717] border-l border-slate-200/20 flex flex-col shrink-0 relative overflow-hidden">

<div className="p-3 border-b border-white/5 flex justify-between items-center bg-[#171717]/95 backdrop-blur z-10">
<span className="text-xs font-medium text-slate-400">ChatGPT</span>
<button className="text-slate-400 hover:text-white"><svg aria-hidden="true" className="lucide lucide-x w-3.5 h-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>

<div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
<div className="self-end bg-[#007aff] text-white px-3 py-2.5 rounded-2xl rounded-tr-sm text-xs leading-relaxed max-w-[90%] shadow-lg shadow-blue-500/20">
                                    Would these be good shoes for a marathon?
                                </div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-[#10a37f] flex items-center justify-center shrink-0 mt-0.5">
<svg aria-hidden="true" className="lucide lucide-bot w-3.5 h-3.5 text-white" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="text-slate-300 text-xs leading-relaxed space-y-2">
<p>They'll work, but they're not top-tier for marathons.</p>
<p>WMNS Aerion are stability shoes—great for support and daily training. They're heavier (about 9.5 oz), so not ideal if you want speed or racing efficiency.</p>
<p className="text-slate-400 italic">Better marathon picks: Auri Veloce, Tempo One.</p>
</div>
</div>
</div>

<div className="p-3 border-t border-white/10 bg-[#171717]">
<div className="bg-[#2f2f2f] rounded-lg h-9 flex items-center px-3 gap-2 border border-white/5">
<div className="w-4 h-4 rounded bg-slate-500/30 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-plus w-2.5 h-2.5 text-slate-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<span className="text-[11px] text-slate-500">Ask a follow up...</span>
<svg aria-hidden="true" className="lucide lucide-mic w-3 h-3 text-slate-500 ml-auto" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-start max-w-lg mx-auto lg:mx-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1f2937] border border-white/10 text-slate-200 text-xs font-medium mb-6 shadow-lg shadow-blue-900/10">
<div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-sparkles w-2.5 h-2.5 text-blue-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
                    Ask ChatGPT
                </div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                    Instant answers, right where you are.
                </h3>
<p className="text-lg text-slate-400 leading-relaxed">
                    Open a ChatGPT sidebar in any window to summarize content, compare products, or analyze data from any site you're viewing.
                </p>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight drop-shadow-sm">
                Picks up where you left off
            </h2>
</div>
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-4 order-2 lg:order-1 flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center mb-6 text-slate-400 shadow-xl">
<svg aria-hidden="true" className="lucide lucide-compass w-6 h-6" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<p className="text-xl md:text-2xl font-medium text-white leading-snug tracking-tight">
                    You can choose what ChatGPT remembers, so it can bring you relevant details when you need them.
                </p>
</div>

<div className="lg:col-span-8 order-1 lg:order-2 w-full">
<div className="rounded-xl bg-[#121212] overflow-hidden shadow-2xl shadow-black/80 border border-white/10 relative group">

<div className="h-10 bg-[#1e1e1e] flex items-center px-4 justify-between border-b border-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-[#3a3a3a] group-hover:bg-[#ff5f57] transition-colors duration-300"></div>
<div className="w-3 h-3 rounded-full bg-[#3a3a3a] group-hover:bg-[#febc2e] transition-colors duration-303a] group-hover:bg-[#28c840] duration-300"></div>
</div>
<div className="text-[11px] font-medium text-slate-500 bg-black/20 px-3 py-1 rounded-md">chatgpt.com</div>
<div className="w-10"></div>
</div>

<div className="p-6 md:p-10 min-h-[420px] flex flex-col bg-gradient-to-b from-[#121212] to-[#0f0f0f]">

<div className="flex items-center gap-2 mb-10">
<span className="text-sm font-semibold text-slate-200">ChatGPT 5</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-3.5 h-3.5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="w-full max-w-2xl mx-auto flex flex-col gap-8">

<div className="self-end bg-[#2f2f2f] text-slate-200 px-5 py-3.5 rounded-3xl rounded-tr-sm max-w-[85%] text-sm leading-relaxed shadow-md">
                                Open the halloween decorations I was looking at last week in some new tabs
                            </div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg shadow-white/10">
<svg className="w-5 h-5 text-black" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path><circle cx="12" cy="12" fill="currentColor" r="5"></circle></svg>
</div>
<div className="text-slate-300 text-sm leading-relaxed space-y-5 w-full">
<div className="">
<p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-history w-3 h-3" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg> Memory Active
                                        </p>
<p>Opened five Etsy pages you viewed for Halloween decor in new tabs:</p>
</div>
<div className="grid gap-2">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="w-8 h-8 rounded bg-orange-900/30 border border-orange-500/20 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-skull w-4 h-4 text-orange-400" data-lucide="skull" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 17-.5-1-.5 1h1z"></path><path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"></path><circle cx="15" cy="12" r="1"></circle><circle cx="9" cy="12" r="1"></circle></svg>
</div>
<span className="text-slate-300 group-hover/item:text-orange-200 transition-colors">Garden Skull - concrete outdoor decor</span>
<svg aria-hidden="true" className="lucide lucide-external-link w-3.5 h-3.5 text-slate-600 ml-auto opacity-0 group-hover/item:opacity-100" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="w-8 h-8 rounded bg-purple-900/30 border border-purple-500/20 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-ghost w-4 h-4 text-purple-400" data-lucide="ghost" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>
</div>
<span className="text-slate-300 group-hover/item:text-purple-200 transition-colors">Flying Witch Metal Wall Art</span>
<svg aria-hidden="true" className="lucide lucide-external-link w-3.5 h-3.5 text-slate-600 ml-auto opacity-0 group-hover/item:opacity-100" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</div>
<p className="text-slate-500 text-xs mt-2">Want me to pull more from the last month?</p>
</div>
</div>
</div>

<div className="mt-auto pt-8">
<div className="bg-[#2f2f2f] rounded-full h-12 flex items-center px-2 pl-4 justify-between border border-white/5 shadow-lg">
<span className="text-slate-500 text-sm font-medium">Ask anything...</span>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-400 transition-colors">
<svg aria-hidden="true" className="lucide lucide-mic w-4 h-4" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-slate-200 transition-colors">
<svg aria-hidden="true" className="lucide lucide-arrow-up w-4 h-4" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="relative z-40 w-full bg-[#0f172a] py-24 md:py-32 border-t border-white/5">

<div className="max-w-4xl mx-auto px-6 mb-40 text-center">

<div className="relative h-64 mb-12 flex flex-col items-center justify-center select-none perspective-1000">

<div className="absolute top-0 transform translate-y-4 bg-[#1e293b] border border-[#22c55e]/20 text-[#4ade80] px-4 py-2 rounded-full flex items-center gap-2 text-[11px] font-medium shadow-lg shadow-green-900/20 z-10 animate-fade-in">
<svg aria-hidden="true" className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Connection is secure
                <svg aria-hidden="true" className="lucide lucide-check w-3 h-3 ml-2" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>

<div className="relative z-20 mt-16 flex items-start gap-3">

<div className="bg-[#171717] border border-white/10 text-slate-200 w-56 rounded-lg p-1.5 shadow-2xl flex items-center justify-between group cursor-pointer hover:border-white/20 transition-all duration-300">
<div className="flex items-center gap-3 px-2 py-1.5">
<div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><circle cx="12" cy="12" r="5"></circle></svg>
</div>
<span className="text-xs font-medium tracking-wide">ChatGPT</span>
</div>
<svg aria-hidden="true" className="lucide lucide-chevron-right w-3.5 h-3.5 text-slate-500 mr-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>

<div className="w-60 bg-[#0a0a0a] border border-white/10 rounded-xl p-2 shadow-2xl transform translate-x-0 opacity-100 transition-all duration-500 origin-top-left">
<div className="text-[10px] font-medium text-slate-500 px-3 py-2 uppercase tracking-wider">Allowed</div>
<div className="bg-[#1e1e1e] rounded-lg px-3 py-2.5 flex items-center justify-between border border-white/5 cursor-pointer hover:bg-[#252525] transition-colors group/item">
<span className="text-xs text-slate-200 font-medium">Not allowed</span>
<div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
<svg aria-hidden="true" className="lucide lucide-check w-2.5 h-2.5 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="px-3 py-2.5 text-[10px] text-slate-500 leading-relaxed font-medium">
                        When disabled, ChatGPT can't see the contents of this website
                    </div>
</div>
</div>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 drop-shadow-sm">
            You're in control
        </h2>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            You can decide which sites ChatGPT can see, clear your browsing history, use incognito, and manage browser memories anytime.
        </p>
<button className="hover:bg-[#f8fafc] transition-all duration-300 shadow-blue-900/5 hover:scale-[1.02] hover:shadow-2xl text-lg font-bold text-[#0f172a] bg-white rounded-full mb-6 pt-3 pr-6 pb-3 pl-6 shadow-xl">
            Download for macOS*
        </button>
</div>

<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-16 tracking-tight">More features</h2>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="flex flex-col group cursor-default">
<div className="bg-black border border-white/10 rounded-2xl aspect-[16/10] mb-6 flex items-center justify-center relative overflow-hidden shadow-2xl group-hover:border-white/20 transition-colors duration-500">

<div className="w-full px-8 flex items-end justify-between border-b border-white/10 pb-4 max-w-[280px]">
<div className="flex flex-col items-center gap-3 relative px-1">
<svg aria-hidden="true" className="lucide lucide-home w-4 h-4 text-white" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<div className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
</div>
<svg aria-hidden="true" className="lucide lucide-globe w-4 h-4 text-slate-600 group-hover:text-slate-500 transition-colors duration-300" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<svg aria-hidden="true" className="lucide lucide-image w-4 h-4 text-slate-600 group-hover:text-slate-500 transition-colors duration-300" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<svg aria-hidden="true" className="lucide lucide-film w-4 h-4 text-slate-600 group-hover:text-slate-500 transition-colors duration-300" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
<svg aria-hidden="true" className="lucide lucide-newspaper w-4 h-4 text-slate-600 group-hover:text-slate-500 transition-colors duration-300" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>
</div>
</div>
<div className="px-2">
<h3 className="text-base font-semibold text-white mb-2 text-center md:text-left tracking-tight">Smarter searches</h3>
<p className="text-sm text-slate-400 text-center md:text-left leading-relaxed font-normal">
                        Get information the way you want to. Search text, images, videos, or news articles.
                    </p>
</div>
</div>

<div className="flex flex-col group cursor-default">
<div className="bg-black border border-white/10 rounded-2xl aspect-[16/10] mb-6 flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-2xl group-hover:border-white/20 transition-colors duration-500">

<div className="w-full max-w-[240px] space-y-3">
<div className="flex items-center gap-3 text-white border-b border-white/10 pb-3 mb-3 pl-1">
<svg aria-hidden="true" className="lucide lucide-plus w-3.5 h-3.5 text-slate-500" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs font-medium tracking-wide">Smoky mountains</span>
</div>
<div className="space-y-4 pl-7 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
<div className="flex items-center gap-3 text-slate-400">
<svg aria-hidden="true" className="lucide lucide-search w-3 h-3" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-[10px] font-medium">Smoky mountains</span>
</div>
<div className="flex items-center gap-3 text-slate-400">
<svg aria-hidden="true" className="lucide lucide-image w-3 h-3" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span className="text-[10px] font-medium">Smoky mountains photos</span>
</div>
<div className="flex items-center gap-3 text-slate-400">
<svg aria-hidden="true" className="lucide lucide-bed w-3 h-3" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
<span className="text-[10px] font-medium">Smoky mountains hotels</span>
</div>
</div>
</div>
</div>
<div className="px-2">
<h3 className="text-base font-semibold text-white mb-2 text-center md:text-left tracking-tight">Easy to use</h3>
<p className="text-sm text-slate-400 text-center md:text-left leading-relaxed font-normal">
                        Use tabs, autocomplete, a search bar, and bookmarks to easily navigate the web.
                    </p>
</div>
</div>

<div className="flex flex-col group cursor-default">
<div className="bg-black border border-white/10 rounded-2xl aspect-[16/10] mb-6 flex items-center justify-center relative overflow-hidden shadow-2xl group-hover:border-white/20 transition-colors duration-500">

<div className="h-9 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 p-[3px] flex items-center gap-2.5 px-3 shadow-2xl shadow-purple-500/20 group-hover:scale-105 transition-transform duration-500 ease-out">
<div className="w-1.5 h-1.5 bg-black/40 rounded-full backdrop-blur-sm"></div>
<div className="w-1.5 h-1.5 bg-black/20 rounded-full backdrop-blur-sm"></div>
<div className="w-3.5 h-3.5 bg-white rounded-full shadow-lg ring-2 ring-black/10 transform scale-110"></div>
<div className="w-1.5 h-1.5 bg-black/20 rounded-full backdrop-blur-sm"></div>
<div className="w-1.5 h-1.5 bg-black/20 rounded-full backdrop-blur-sm"></div>
<div className="w-1.5 h-1.5 bg-black/20 rounded-full backdrop-blur-sm"></div>
<div className="w-1.5 h-1.5 bg-black/20 rounded-full backdrop-blur-sm"></div>
</div>
</div>
<div className="px-2">
<h3 className="text-base font-semibold text-white mb-2 text-center md:text-left tracking-tight">Make it custom</h3>
<p className="text-sm text-slate-400 text-center md:text-left leading-relaxed font-normal">
                        It's easy to set your browsing preferences and colors exactly how you like them.
                    </p>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-[#8bcfff] w-full relative">

<div className="absolute inset-0 bg-gradient-to-b from-[#9edaff] via-[#8bcfff] to-[#6bbbf7]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50"></div>
<div className="z-10 md:py-48 flex flex-col text-center w-full max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative items-center justify-center">

<div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#0f2d5c] to-[#081936] shadow-2xl shadow-blue-900/20 mb-8 flex items-center justify-center ring-1 ring-white/10 group">
<div className="relative">
<div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
<svg aria-hidden="true" className="lucide lucide-navigation w-9 h-9 text-white fill-white transform -rotate-45 relative z-10" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</div>
</div>

<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-8 drop-shadow-sm">
            Download ChatGPT Atlas
        </h2>

<button className="hover:bg-[#f8fafc] transition-all duration-300 shadow-blue-900/5 hover:scale-[1.02] hover:shadow-2xl text-lg font-bold text-[#0f172a] bg-white rounded-full mb-6 pt-3 pr-6 pb-3 pl-6 shadow-xl">
            Download for macOS*
        </button>

<p className="leading-relaxed text-base font-medium text-[#1e3a8a]/70 max-w-sm mr-auto ml-auto">
    * The Atlas macOS app is only available for
    macOS 14+ with Apple Silicon (M1 or better).
</p>
</div>

<div className="absolute -bottom-16 -right-12 md:right-0 md:-bottom-24 w-[300px] md:w-[500px] h-[300px] md:h-[400px] bg-gradient-to-br from-white/20 to-sky-400/20 backdrop-blur-md rounded-tl-2xl border-t border-l border-white/30 transform -rotate-12 shadow-2xl pointer-events-none">
<div className="h-8 md:h-10 border-b border-white/20 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-white/60"></div>
<div className="w-2 h-2 rounded-full bg-white/60"></div>
<div className="w-2 h-2 rounded-full bg-white/60"></div>
</div>
<div className="w-full h-full bg-gradient-to-b from-sky-300/10 to-[#0284c7]/20"></div>
</div>

<div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-white/10 to-sky-300/10 backdrop-blur-lg rounded-tr-3xl border-t border-r border-white/20 rotate-12 pointer-events-none"></div>
</section><footer className="md:pt-24 overflow-hidden text-base text-white bg-[#171717] w-full border-white/5 border-t pt-20">
<div className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
<div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12">

<div className="shrink-0">
<svg className="w-8 h-8 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.0462 6.0462 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9723V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1195 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3879-.6766zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2298V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.453l-.142.0805L8.704 5.4599a.7948.7948 0 0 0-.3927.6813zm2.0954.4263l3.1498-1.8101 3.1593 1.8148-3.1545 1.8101z"></path></svg>
</div>

<div className="flex flex-wrap gap-12 sm:gap-24 lg:gap-32 w-full md:w-auto">
<div className="flex flex-col gap-4 min-w-[120px]">
<h3 className="text-xs font-semibold text-neutral-400 mb-1">OpenAI</h3>
<a className="text-xs font-medium text-neutral-100 hover:underline underline-offset-4 decoration-neutral-500 transition-all" href="#">Research</a>
<a className="text-xs font-medium text-neutral-100 hover:underline underline-offset-4 decoration-neutral-500 transition-all" href="#">Safety</a>
<a className="text-xs font-medium text-neutral-100 hover:underline underline-offset-4 decoration-neutral-500 transition-all" href="#">API</a>
<a className="text-xs font-medium text-neutral-100 hover:underline underline-offset-4 decoration-neutral-500 transition-all" href="#">Sora</a>
<a className="text-xs font-medium text-neutral-100 hover:underline underline-offset-4 decoration-neutral-500 transition-all" href="#">News</a>
</div>
<div className="flex flex-col gap-4 min-w-[120px]">
<h3 className="text-xs font-semibold text-neutral-400 mb-1">Terms &amp; Policies</h3>
<a className="text-xs font-medium text-neutral-100 hover:underline underline-offset-4 decoration-neutral-500 transition-all" href="#">Terms of Use</a>
<a className="text-xs font-medium text-neutral-100 hover:underline underline-offset-4 decoration-neutral-500 transition-all" href="#">Privacy Policy</a>
<a className="text-xs font-medium text-neutral-100 hover:underline underline-offset-4 decoration-neutral-500 transition-all" href="#">Usage Policy</a>
<a className="text-xs font-medium text-neutral-100 hover:underline underline-offset-4 decoration-neutral-500 transition-all" href="#">Other policies</a>
</div>
</div>
</div>
</div>

<div className="w-full flex justify-center items-end leading-none select-none pointer-events-none overflow-hidden pb-8 md:pb-0">
<h1 className="text-[17vw] font-medium tracking-tighter text-white whitespace-nowrap opacity-100 translate-y-[8%] md:translate-y-[12%]">
            ChatGPT
        </h1>
</div>

<div className="w-full border-t border-white/10 bg-[#171717] relative z-10">
<div className="max-w-7xl mx-auto px-6 py-8 md:py-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

<div className="text-[11px] order-2 md:order-1 text-base font-medium text-neutral-500 tracking-tight">Vibe coded with Aura in 5 minutes the 30th January 2026</div>

<div className="flex items-center gap-6 order-1 md:order-2">
<div className="flex items-center gap-5 text-white">
<a className="opacity-80 hover:opacity-100 transition-opacity" href="#"><svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
<a className="opacity-80 hover:opacity-100 transition-opacity" href="#"><svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg></a>
<a className="opacity-80 hover:opacity-100 transition-opacity" href="#"><svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
<a className="opacity-80 hover:opacity-100 transition-opacity" href="#"><svg fill="currentColor" height="17" viewbox="0 0 24 24" width="17"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a>
<a className="opacity-80 hover:opacity-100 transition-opacity" href="#"><svg className="" fill="currentColor" height="17" viewbox="0 0 24 24" width="17"><path className="" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a>
<a className="opacity-80 hover:opacity-100 transition-opacity" href="#"><svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg></a>
</div>
<div className="flex items-center gap-2 text-white ml-2">
<svg aria-hidden="true" className="lucide lucide-globe w-3.5 h-3.5 opacity-80" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-[11px] font-medium">English</span>
</div>
</div>
</div>
</div>
</footer>

<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-32 bg-blue-500/10 blur-[100px] pointer-events-none"></div>
</div>


    </>
  );
}
