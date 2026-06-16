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
      

<div className="noise-bg"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF4F00] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-900 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-[#FF4F00] rounded-full mix-blend-screen filter blur-[150px] opacity-5 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center transition-all duration-300">
<div className="flex items-center gap-2 relative z-50">
<iconify-icon className="text-[#FF4F00]" icon="solar:infinity-linear" width="32"></iconify-icon>
<span className="text-2xl font-semibold tracking-tight text-white">Rivi</span>
</div>
<div className="hidden md:flex gap-8 items-center bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-white/5 shadow-2xl">
<a className="text-sm font-medium hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:block text-sm font-medium text-white hover:text-[#FF4F00] transition-colors" href="#">Download</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center" id="hero">
<div className="container mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF4F00]/30 bg-[#FF4F00]/10 text-[#FF4F00] mb-8">
<iconify-icon icon="solar:bolt-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-wide uppercase">Rivi 2.0 is live</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[0.95] text-glow">
                        CLARITY <br/> <span className="text-[#FF4F00]">ONCHAIN</span>
</h1>
<p className="text-xl md:text-2xl text-gray-400 max-w-lg mb-12 font-normal leading-relaxed">
                        A banking interface designed for pure signal. Unrivaled privacy, zero clutter, instant settlement.
                    </p>

<div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
<button className="flex-1 bg-[#FF4F00] hover:bg-[#e64700] text-black h-14 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
                            Get App
                            <iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</button>
<button className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 h-14 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
                            Documentation
                        </button>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-gray-500 font-medium">
<span>POWERED BY</span>
<div className="h-px w-8 bg-gray-700"></div>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:ethereum"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:solana"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:polygon"></iconify-icon>
</div>
</div>

<div className="relative flex justify-center perspective-1000 animate-float">
<div className="relative bg-black rounded-[3.5rem] p-3 shadow-2xl border-[6px] border-[#1a1a1a] ring-1 ring-white/10 transform transition-transform duration-700 hover:rotate-1 w-full max-w-[360px]">
<div className="bg-[#0A0A0A] rounded-[3rem] overflow-hidden aspect-[9/19] relative flex flex-col text-white">
<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black h-7 w-24 rounded-full z-20"></div>
<div className="pt-14 px-6 pb-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center border border-white/10">
<span className="font-bold text-xs">JD</span>
</div>
<div>
<div className="text-xs text-gray-400">Total Balance</div>
<div className="text-sm font-semibold tracking-tight">$84,230.50</div>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
<div className="px-0 relative h-48 w-full mb-4">
<div className="absolute inset-0 bg-gradient-to-b from-[#FF4F00]/10 to-transparent opacity-50"></div>
<svg className="w-full h-full text-[#FF4F00] stroke-current fill-none" preserveaspectratio="none" viewbox="0 0 360 150">
<path d="M0,120 C40,110 80,130 120,90 C160,50 200,80 240,40 C280,0 320,20 360,10" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path className="fill-[#FF4F00]/10 stroke-none" d="M0,120 C40,110 80,130 120,90 C160,50 200,80 240,40 C280,0 320,20 360,10 V150 H0 Z"></path>
</svg>
<div className="absolute top-[20%] right-[30%] w-3 h-3 bg-[#FF4F00] rounded-full shadow-[0_0_10px_#FF4F00] ring-4 ring-black"></div>
<div className="absolute top-[8%] right-[30%] bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
<span className="text-xs font-bold text-[#FF4F00]">+12.4%</span>
</div>
</div>
<div className="px-6 flex gap-4 mb-8">
<button className="flex-1 h-14 bg-[#FF4F00] rounded-2xl flex items-center justify-center text-black font-semibold gap-2 shadow-lg shadow-[#FF4F00]/20">
<iconify-icon icon="solar:arrow-up-linear" strokeWidth="2" width="20"></iconify-icon>
                                    Send
                                </button>
<button className="flex-1 h-14 bg-[#1F1F1F] rounded-2xl flex items-center justify-center text-white font-semibold gap-2 border border-white/5">
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="2" width="20"></iconify-icon>
                                    Receive
                                </button>
</div>
<div className="flex-1 bg-[#111] rounded-t-[2.5rem] p-6 border-t border-white/5 relative">
<div className="w-12 h-1 bg-gray-800 rounded-full mx-auto mb-6"></div>
<div className="flex justify-between items-end mb-6">
<h3 className="text-lg font-semibold text-white">Activity</h3>
<a className="text-xs text-[#FF4F00]" href="#">View all</a>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-[#FF4F00] group-hover:text-black transition-colors">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Gumroad Inc.</div>
<div className="text-xs text-gray-500">Software</div>
</div>
</div>
<span className="text-sm font-medium text-white">-$49.00</span>
</div>
<div className="flex justify-between items-center group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-[#FF4F00] group-hover:text-black transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-gray-500">Transfer</div>
</div>
</div>
<span className="text-sm font-medium text-[#FF4F00]">+ $1,250.00</span>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-30"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF4F00] blur-[100px] opacity-20 -z-10 animate-pulse"></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm relative z-20">
<div className="container mx-auto px-6 overflow-hidden">
<p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">Trusted by builders at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-white hover:text-[#FF4F00] transition-colors" icon="simple-icons:coinbase" width="96"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF4F00] transition-colors" icon="simple-icons:binance" width="96"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF4F00] transition-colors" icon="simple-icons:kraken" width="96"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF4F00] transition-colors" icon="simple-icons:ethereum" width="96"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF4F00] transition-colors" icon="simple-icons:solana" width="96"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10" id="features">
<div className="container mx-auto px-6">
<div className="mb-20 max-w-3xl">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Built for the <br/> <span className="text-[#FF4F00]">decentralized future.</span></h2>
<p className="text-xl text-gray-400">Experience a banking layer that respects your privacy and your time. No clutter, just controls.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 bg-[#FF4F00]/10 rounded-full flex items-center justify-center mb-6 text-[#FF4F00] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Private by Default</h3>
<p className="text-lg text-gray-400 leading-relaxed">Your transaction data never leaves your device. Local encryption ensures what's yours stays yours.</p>
</div>

<div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 bg-[#FF4F00]/10 rounded-full flex items-center justify-center mb-6 text-[#FF4F00] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Instant Settlement</h3>
<p className="text-lg text-gray-400 leading-relaxed">Say goodbye to T+2. Rivi settles transactions on-chain in seconds, available globally 24/7.</p>
</div>

<div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 bg-[#FF4F00]/10 rounded-full flex items-center justify-center mb-6 text-[#FF4F00] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Zero-Fee Transfers</h3>
<p className="text-lg text-gray-400 leading-relaxed">Send stablecoins to any Rivi user without gas fees. We subsidize the network costs for you.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-black/30 border-t border-white/5" id="how-it-works">
<div className="container mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Effortless <span className="text-[#FF4F00]">Flow.</span></h2>
<p className="text-xl text-gray-400">From setup to settlement in three simple steps.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative">
<div className="glass-panel h-72 rounded-3xl mb-8 relative overflow-hidden flex items-center justify-center bg-[#030303] hover:border-[#FF4F00]/30 transition-colors duration-500">

<div className="relative w-full h-full flex items-center justify-center">

<div className="absolute w-[200%] h-[200%] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>

<div className="relative z-10 flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center relative shadow-2xl">
<iconify-icon className="text-white" icon="solar:wallet-linear" width="32"></iconify-icon>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF4F00] rounded-full animate-ping"></div>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF4F00] rounded-full"></div>
</div>
<div className="px-3 py-1 rounded-full bg-[#FF4F00]/10 text-[#FF4F00] text-xs font-mono font-medium border border-[#FF4F00]/20">
                                    Connecting...
                                </div>
</div>

<div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full animate-[spin_4s_linear_infinite] opacity-50">
<div className="w-2 h-2 bg-[#FF4F00] rounded-full absolute -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#FF4F00]"></div>
</div>
</div>
</div>
<div className="px-4">
<div className="inline-block text-[#FF4F00] font-mono text-xs mb-3 px-2 py-1 bg-[#FF4F00]/10 rounded border border-[#FF4F00]/20">01</div>
<h3 className="text-xl font-semibold text-white mb-3">Connect Wallet</h3>
<p className="text-gray-500 leading-relaxed text-sm">Link your preferred wallet securely. We support MetaMask, Phantom, and Ledger hardware wallets with zero setup.</p>
</div>
</div>

<div className="group relative">
<div className="glass-panel h-72 rounded-3xl mb-8 relative overflow-hidden flex flex-col items-center justify-center bg-[#030303] hover:border-[#FF4F00]/30 transition-colors duration-500">

<div className="w-[220px] bg-[#0A0A0A] rounded-2xl border border-white/10 p-5 space-y-4 relative shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">

<div className="space-y-1">
<div className="flex justify-between text-[10px] text-gray-500 font-medium uppercase tracking-wider">
<span>Recipient</span>
</div>
<div className="h-8 w-full bg-[#151515] rounded border border-white/5 flex items-center px-3 gap-2">
<div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
<div className="text-xs text-white overflow-hidden whitespace-nowrap animate-typing w-0 border-r border-[#FF4F00] pr-1">alex.eth</div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-[10px] text-gray-500 font-medium uppercase tracking-wider">
<span>Amount</span>
</div>
<div className="h-10 w-full bg-[#151515] rounded border border-white/5 flex items-center px-3 relative overflow-hidden">

<div className="absolute top-0 left-0 h-full bg-[#FF4F00]/10 animate-progress"></div>
<span className="text-white font-mono text-sm z-10">$450.00</span>
</div>
</div>
</div>
</div>
<div className="px-4">
<div className="inline-block text-[#FF4F00] font-mono text-xs mb-3 px-2 py-1 bg-[#FF4F00]/10 rounded border border-[#FF4F00]/20">02</div>
<h3 className="text-xl font-semibold text-white mb-3">Input Details</h3>
<p className="text-gray-500 leading-relaxed text-sm">Enter an ENS, wallet address, or select a contact. Rivi automatically validates the chain and calculates gas fees.</p>
</div>
</div>

<div className="group relative">
<div className="glass-panel h-72 rounded-3xl mb-8 relative overflow-hidden flex items-center justify-center bg-[#030303] hover:border-[#FF4F00]/30 transition-colors duration-500">

<div className="relative flex flex-col items-center justify-center">
<svg className="w-32 h-32 transform -rotate-90" viewbox="0 0 100 100">

<circle className="stroke-[#222] fill-none stroke-[2]" cx="50" cy="50" r="40"></circle>

<circle className="stroke-[#FF4F00] fill-none stroke-[2] animate-circle-draw" cx="50" cy="50" r="40" stroke-dasharray="251" strokeLinecap="round"></circle>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF4F00]">
<svg className="w-12 h-12" viewbox="0 0 50 50">
<path className="stroke-current fill-none stroke-[3] animate-check-draw" d="M15 25 L22 32 L35 18" stroke-dasharray="50" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="absolute -bottom-8 text-xs font-mono text-[#FF4F00] tracking-widest uppercase animate-pulse">Confirmed</div>
</div>
</div>
<div className="px-4">
<div className="inline-block text-[#FF4F00] font-mono text-xs mb-3 px-2 py-1 bg-[#FF4F00]/10 rounded border border-[#FF4F00]/20">03</div>
<h3 className="text-xl font-semibold text-white mb-3">Instant Settlement</h3>
<p className="text-gray-500 leading-relaxed text-sm">Sign once with FaceID. Funds arrive in seconds on L2s. Receive a tax-ready receipt immediately.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-gradient-to-b from-black to-[#050200] relative z-10" id="testimonial">
<div className="container mx-auto px-6">
<h2 className="text-center text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-16">Community Signal</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between hover:border-[#FF4F00]/30 transition-colors">
<div className="mb-6 text-[#FF4F00]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-gray-300 mb-6">"Rivi is the first crypto app that doesn't feel like a casino. It's clean, fast, and actually usable for daily payments."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">

<img alt="User" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div>
<div className="text-white font-medium">Alex Chen</div>
<div className="text-sm text-gray-500">Product at <span className="text-gray-400">Stripe</span></div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between border-[#FF4F00]/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4F00] blur-[60px] opacity-10"></div>
<div className="mb-6 text-[#FF4F00]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-gray-300 mb-6">"The privacy features are unrivaled. Finally, I can pay for services on-chain without doxxing my entire wallet history."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<div>
<div className="text-white font-medium">Sarah Jenkins</div>
<div className="text-sm text-gray-500">Dev at <span className="text-gray-400">Vercel</span></div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between hover:border-[#FF4F00]/30 transition-colors">
<div className="mb-6 text-[#FF4F00]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-gray-300 mb-6">"The UI is simply stunning. It feels like what Apple would build if they made a crypto wallet. Super smooth."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/150?u=a04258114e29026302d"/>
</div>
<div>
<div className="text-white font-medium">Marcus Ray</div>
<div className="text-sm text-gray-500">Founder</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden z-10" id="pricing">
<div className="container mx-auto px-6 relative z-10">
<h2 className="text-center text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Simple Pricing</h2>
<p className="text-center text-xl text-gray-500 mb-16">Pay for value, not for transactions.</p>
<div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto">

<div className="w-full lg:w-1/2 glass-panel rounded-3xl p-10 flex flex-col border border-white/5 hover:border-[#FF4F00]/30 transition-colors">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white mb-2">Standard</h3>
<div className="text-5xl font-semibold text-white tracking-tight">$0<span className="text-xl text-gray-500 font-normal">/mo</span></div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-lg text-gray-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Up to $10k monthly volume
                        </li>
<li className="flex items-center gap-3 text-lg text-gray-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Basic analytics
                        </li>
<li className="flex items-center gap-3 text-lg text-gray-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Standard support
                        </li>
</ul>
<button className="w-full py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                        Get Started
                    </button>
</div>

<div className="w-full lg:w-1/2 bg-[#FF4F00] rounded-3xl p-10 flex flex-col relative shadow-[0_0_100px_rgba(255,79,0,0.15)] group">
<div className="absolute top-6 right-6 px-3 py-1 bg-black/10 rounded-full text-xs font-bold uppercase tracking-wider text-black">Popular</div>
<div className="mb-8">
<h3 className="text-2xl font-semibold text-black mb-2">Rivi Pro</h3>
<div className="text-5xl font-semibold text-black tracking-tight">$12<span className="text-xl text-black/60 font-normal">/mo</span></div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-lg text-black/80">
<iconify-icon className="text-black" icon="solar:check-circle-bold"></iconify-icon> Unlimited volume
                        </li>
<li className="flex items-center gap-3 text-lg text-black/80">
<iconify-icon className="text-black" icon="solar:check-circle-bold"></iconify-icon> Private transaction relay
                        </li>
<li className="flex items-center gap-3 text-lg text-black/80">
<iconify-icon className="text-black" icon="solar:check-circle-bold"></iconify-icon> Priority 24/7 support
                        </li>
</ul>
<button className="w-full py-4 rounded-xl bg-black text-[#FF4F00] font-semibold hover:bg-black/80 transition-colors shadow-xl group-hover:shadow-2xl">
                        Upgrade Now
                    </button>
</div>
</div>
</div>
</section>

<footer className="py-20 border-t border-white/10 bg-black relative z-10" id="footer">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#FF4F00]" icon="solar:infinity-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-white">Rivi</span>
</div>
<p className="text-gray-500 text-sm leading-relaxed">
                        Reimagining the financial stack for the onchain era. Built with precision and privacy at the core.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Product</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#FF4F00] transition-colors" href="#">Features</a></li>
<li><a className="hover:text-[#FF4F00] transition-colors" href="#">Security</a></li>
<li><a className="hover:text-[#FF4F00] transition-colors" href="#">Roadmap</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#FF4F00] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#FF4F00] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#FF4F00] transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#FF4F00] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#FF4F00] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#FF4F00] transition-colors" href="#">Licenses</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<div className="text-gray-600 text-sm mb-4 md:mb-0">
                    © 2024 Rivi Inc. All rights reserved.
                </div>
<div className="flex gap-6 text-gray-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:x" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:github" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:discord" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
