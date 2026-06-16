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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

<div className="absolute top-0 -left-40 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob bg-orange-200"></div>
<div className="absolute top-0 -right-40 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob delay-2000 bg-yellow-100"></div>
<div className="absolute -bottom-80 left-1/3 w-[800px] h-[800px] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob delay-4000 bg-pink-100"></div>

<div className="absolute inset-0 tech-grid opacity-60"></div>

<div className="absolute top-24 left-24 w-4 h-4 border-l border-t border-neutral-300"></div>
<div className="absolute top-24 right-24 w-4 h-4 border-r border-t border-neutral-300"></div>
<div className="absolute bottom-24 left-24 w-4 h-4 border-l border-b border-neutral-300"></div>
<div className="absolute bottom-24 right-24 w-4 h-4 border-r border-b border-neutral-300"></div>
</div>

<nav className="flex w-full max-w-7xl z-50 border-neutral-200/50 border-b mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded flex items-center justify-center bg-neutral-900 text-white">
<iconify-icon className="text-lg" icon="lucide:arrow-right-left"></iconify-icon>
</div>
<span className="font-bold tracking-tight text-lg font-sans" style={{}}>Orbi<span className="text-accent">Swap</span></span>
</div>
<div className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full border shadow-sm bg-white/50 border-neutral-200/50">
<a className="text-xs font-mono text-neutral-500 hover:text-accent transition-colors uppercase tracking-widest font-sans" href="#" style={{}}>Product</a>
<a className="text-xs font-mono text-neutral-500 hover:text-accent transition-colors uppercase tracking-widest font-sans" href="#" style={{}}>Security</a>
<a className="text-xs font-mono text-neutral-500 hover:text-accent transition-colors uppercase tracking-widest font-sans" href="#" style={{}}>FAQ</a>
<a className="text-xs font-mono text-neutral-500 hover:text-accent transition-colors uppercase tracking-widest font-sans" href="#" style={{}}>Docs</a>
</div>
<button className="hidden md:flex items-center gap-2 text-xs font-mono uppercase px-4 py-2 rounded transition-colors bg-neutral-900 text-white hover:bg-neutral-800">
<span className="font-sans" style={{}}>Launch App</span>
<iconify-icon className="" icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</nav>

<main className="flex-grow flex flex-col md:pt-20 z-10 pt-12 relative items-center justify-center">

<div className="mb-8 inline-flex items-center gap-2 border shadow-sm rounded-full px-3 py-1 animate-pulse bg-white border-orange-100">
<span className="w-2 h-2 rounded-full bg-accent"></span>
<span className="text-xs font-mono uppercase tracking-widest font-sans text-neutral-600" style={{}}>Arbitrum Live</span>
</div>

<div className="text-center max-w-6xl mx-auto mb-20 z-20 relative px-4">
<h1 className="text-5xl md:text-8xl tracking-tight leading-[0.95] mb-6 reveal-text font-instrument-serif font-normal text-neutral-900" style={{}}>
                Swap tokens on <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r font-instrument-serif font-normal from-orange-600 to-orange-400" style={{}}>Arbitrum</span>
</h1>
<p className="md:text-xl text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed font-sans" style={{}}>
                Real-time token swaps with clear approvals and a simple user experience. Fast, simple, and <span className="font-mono text-xs px-1 py-0.5 rounded font-sans bg-neutral-100 text-neutral-900" style={{}}>NON-CUSTODIAL</span>.
            </p>
<div className="flex items-center justify-center gap-4 mt-8">
<button className="flex items-center gap-2 text-sm font-semibold uppercase px-6 py-3 rounded bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
<span className="font-sans">Launch OrbiSwap</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
<button className="flex items-center gap-2 text-sm font-semibold uppercase px-6 py-3 rounded border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors text-neutral-700">
<span className="font-sans">See how it works</span>
</button>
</div>

<div className="absolute -right-12 top-0 hidden lg:block opacity-20 font-mono text-[10px] text-left leading-tight font-sans">
                swapExactTokens...<br/>
                amountIn<br/>
                path[]<br/>
                to: msg.sender
            </div>
</div>

<div className="relative w-full max-w-5xl mx-auto h-[600px] flex items-center justify-center perspective-container">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewbox="0 0 1000 600">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(0,0,0,0)"></stop>
<stop offset="50%" stop-color="rgba(0,0,0,0.1)"></stop>
<stop offset="100%" stop-color="rgba(0,0,0,0)"></stop>
</lineargradient>
</defs>

<path d="M 200 100 L 500 300 L 800 100" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>
<path d="M 200 500 L 500 300 L 800 500" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>

<path className="noodle-beam" d="M 100 150 C 300 150, 400 250, 450 300"></path>
<path className="noodle-beam" d="M 900 450 C 700 450, 600 350, 550 300" style={{animationDelay: '-1s'}}></path>
</svg>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{transform: 'rotateX(60deg) rotateZ(-20deg)'}}>

<div className="orbit-ring orbit-1">
<div className="orbit-planet"></div>
</div>

<div className="orbit-ring orbit-2"></div>

<div className="absolute w-64 h-64 bg-orange-500/20 rounded-full blur-[60px]"></div>
</div>

<div className="absolute top-10 left-4 md:left-20 flex flex-col gap-2 p-4 glass-panel rounded-xl z-20 w-48 border-l-2 border-accent transform transition-transform hover:scale-105 duration-300">
<div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400">
<iconify-icon icon="lucide:fuel"></iconify-icon>
<span className="font-sans">Est. Gas</span>
</div>
<div className="text-2xl tracking-tight font-instrument-serif font-normal text-neutral-900" style={{}}>&lt; $0.01<span className="text-sm font-medium text-neutral-500 ml-1 font-sans">L2</span></div>
<div className="w-full h-1 mt-1 rounded-full overflow-hidden bg-neutral-100">
<div className="bg-accent h-full w-[20%] animate-pulse"></div>
</div>
</div>

<div className="absolute bottom-20 right-4 md:right-20 flex flex-col gap-2 p-4 glass-panel rounded-xl z-20 w-56 border-l-2 transform transition-transform hover:scale-105 duration-300 border-neutral-800">
<div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400">
<iconify-icon icon="lucide:bar-chart-3"></iconify-icon>
<span className="font-sans">24h Volume</span>
</div>
<div className="text-2xl tracking-tight font-instrument-serif font-normal text-neutral-900" style={{}}>$842.4<span className="text-sm font-medium text-neutral-500 ml-1 font-sans">M</span></div>
<div className="flex gap-1 mt-1">
<div className="h-1 w-1 bg-green-500 rounded-full"></div>
<span className="text-[10px] font-mono font-sans text-green-600">+12.5% this epoch</span>
</div>
</div>

<div className="phone-mockup relative w-[300px] h-[600px] bg-[#1a1a1a] rounded-[48px] border-[6px] border-[#2a2a2a] outline outline-1 shadow-2xl z-30 flex flex-col overflow-hidden outline-white/20">

<div className="absolute -right-[7px] top-24 h-12 w-[6px] bg-[#333] rounded-r-md"></div> 
<div className="absolute -left-[7px] top-24 h-8 w-[6px] bg-[#333] rounded-l-md"></div> 
<div className="absolute -left-[7px] top-36 h-8 w-[6px] bg-[#333] rounded-l-md"></div> 

<div className="absolute top-0 w-full h-14 z-50 flex justify-center pt-3 backdrop-blur-md bg-black/40">
<div className="w-24 h-7 rounded-full flex items-center justify-between px-2 bg-black">
<div className="w-2 h-2 rounded-full animate-pulse bg-orange-600/80"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
</div>
</div>

<div className="w-full h-full flex flex-col relative pt-16 px-5 pb-6 bg-neutral-50">

<div className="flex justify-between items-end mb-6">
<div>
<p className="text-[10px] font-mono uppercase tracking-widest mb-1 font-sans text-neutral-400">Market</p>
<h2 className="text-3xl tracking-tighter font-instrument-serif font-normal text-neutral-900" style={{}}>Swap</h2>
</div>
<div className="w-10 h-10 rounded-full border flex items-center justify-center border-neutral-200 bg-white">
<iconify-icon className="text-neutral-600" icon="lucide:settings-2"></iconify-icon>
</div>
</div>

<div className="w-full mb-6 relative flex flex-col gap-2">

<div className="bg-white p-3 rounded-xl border border-neutral-100 shadow-sm">
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>You pay</span>
<span>Balance: 4.2 ETH</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xl font-bold">1.2</span>
<span className="flex items-center gap-1 bg-neutral-100 px-2 py-1 rounded-full text-xs font-bold"><iconify-icon icon="lucide:diamond"></iconify-icon> ETH</span>
</div>
</div>

<div className="bg-white p-3 rounded-xl border border-neutral-100 shadow-sm relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-50 border border-neutral-200 rounded-full p-1 z-10">
<iconify-icon className="text-xs text-neutral-500 block" icon="lucide:arrow-down"></iconify-icon>
</div>
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>You receive</span>
<span>~$2,400.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xl font-bold">2,400</span>
<span className="flex items-center gap-1 bg-neutral-100 px-2 py-1 rounded-full text-xs font-bold"><iconify-icon icon="lucide:dollar-sign"></iconify-icon> USDC</span>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-2 mb-6">
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-105 transition-transform bg-neutral-900 text-white">
<iconify-icon icon="lucide:arrow-right-left"></iconify-icon>
</div>
<span className="text-[10px] font-semibold font-sans text-neutral-600">Swap</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-transform bg-white border-neutral-200 text-neutral-900">
<iconify-icon icon="lucide:percent"></iconify-icon>
</div>
<span className="text-[10px] font-semibold font-sans text-neutral-600">Slippage</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-transform bg-white border-neutral-200 text-neutral-900">
<iconify-icon icon="lucide:zap"></iconify-icon>
</div>
<span className="text-[10px] font-semibold font-sans text-neutral-600">Speed</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-transform bg-white border-neutral-200 text-neutral-900">
<iconify-icon icon="lucide:help-circle"></iconify-icon>
</div>
<span className="text-[10px] font-semibold font-sans text-neutral-600">Help</span>
</button>
</div>

<div className="flex-1 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.02)] p-4 -mx-5 relative bg-white">
<div className="w-12 h-1 rounded-full mx-auto mb-4 bg-neutral-200"></div>
<div className="text-xs font-mono uppercase mb-3 font-sans text-neutral-400" style={{}}>Recent Swaps</div>

<div className="flex items-center justify-between py-3 border-b border-neutral-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full text-accent flex items-center justify-center bg-orange-50">
<iconify-icon icon="lucide:arrow-right-left"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold font-sans text-neutral-900">ETH → USDC</div>
<div className="text-[10px] font-mono font-sans text-neutral-400">0x82...91a • Pending</div>
</div>
</div>
<div className="text-sm font-bold font-sans text-neutral-900">1.2 ETH</div>
</div>

<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:check-circle"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold font-sans text-neutral-900">Approve USDC</div>
<div className="text-[10px] font-mono font-sans text-neutral-400">0x11...b42 • Confirmed</div>
</div>
</div>
<div className="text-sm font-bold font-sans text-green-600">Complete</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="w-full border-t backdrop-blur z-20 border-neutral-200 bg-white/80">
<div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 items-center gap-8">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-mono uppercase text-neutral-500 font-sans" style={{}}>System Operational</span>
</div>
<h3 className="text-2xl mb-4 font-instrument-serif font-normal" style={{}}>Ready to start swapping?</h3>
<div className="flex gap-4">
<a className="px-6 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 font-sans bg-neutral-900 text-white hover:bg-neutral-800" href="#" style={{}}>
<iconify-icon icon="lucide:rocket"></iconify-icon> Launch App
                    </a>
<a className="border px-6 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 font-sans bg-white border-neutral-200 text-neutral-900 hover:bg-neutral-50" href="#" style={{}}>
<iconify-icon icon="lucide:book-open"></iconify-icon> Read Docs
                    </a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 border rounded-xl border-neutral-100 bg-neutral-50/50">
<iconify-icon className="text-2xl text-accent mb-2" icon="lucide:shield-check"></iconify-icon>
<div className="text-sm font-bold font-sans">Non-Custodial</div>
<div className="text-xs text-neutral-500 mt-1 font-sans" style={{}}>Your keys, your crypto</div>
</div>
<div className="p-4 border rounded-xl border-neutral-100 bg-neutral-50/50">
<iconify-icon className="text-2xl text-accent mb-2" icon="lucide:eye"></iconify-icon>
<div className="text-sm font-bold font-sans">Transparent</div>
<div className="text-xs text-neutral-500 mt-1 font-sans" style={{}}>Clear approval flow</div>
</div>
</div>
</div>
</div>

    </>
  );
}
