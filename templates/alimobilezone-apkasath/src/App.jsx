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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        import createGlobe from 'https://cdn.skypack.dev/cobe'

        let phi = 0
        let canvas = document.getElementById("cobe")
        
        // Ensure canvas container size is handled
        const width = canvas.offsetWidth * 2;
        const height = canvas.offsetHeight * 2;

        const globe = createGlobe(canvas, {
            devicePixelRatio: 2,
            width: width,
            height: height,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3], // Dark grey base
            markerColor: [0.4, 0.6, 1], // Light Blue markers
            glowColor: [0.1, 0.1, 0.2], // Subtle glow
            opacity: 0.8,
            markers: [
                // North America
                { location: [37.7595, -122.4367], size: 0.06 }, // SF
                { location: [40.7128, -74.006], size: 0.04 },   // NY
                // Europe
                { location: [51.5074, -0.1278], size: 0.05 },   // London
                { location: [48.8566, 2.3522], size: 0.04 },    // Paris
                // Asia
                { location: [35.6762, 139.6503], size: 0.06 },  // Tokyo
                { location: [1.3521, 103.8198], size: 0.04 },   // Singapore
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // state contains current phi
                state.phi = phi
                phi += 0.003
                state.width = canvas.offsetWidth * 2
                state.height = canvas.offsetHeight * 2
            },
        })
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-90 brightness-125" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex text-black bg-white w-6 h-6 rounded-full items-center justify-center">
<iconify-icon icon="solar:smartphone-2-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">ALI MOBILE ZONE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#">Marketplace</a>
<a className="hover:text-white transition-colors" href="#">Trade-In</a>
<a className="hover:text-white transition-colors" href="#">Business</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<div className="flex items-center gap-4">
<button className="text-white/60 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors" href="#">
                    Start Selling
                </a>
</div>
</div>
</nav>

<section className="overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] tracking-wide text-blue-400 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    GLOBAL SHIPPING LIVE
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6 gradient-text">
                    The borderless <br/> device market.
                </h1>
<p className="text-white/60 text-lg md:text-xl font-light mb-8 max-w-md leading-relaxed">
                    Buy and sell premium mobile devices instantly. Verified quality, insured logistics, and instant payouts worldwide.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                        Browse Devices
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white/80 border border-white/10 hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        How it works
                    </button>
</div>
<div className="mt-12 flex items-center gap-6">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-gray-800 border border-black flex items-center justify-center text-[10px] text-white">JP</div>
<div className="w-8 h-8 rounded-full bg-gray-700 border border-black flex items-center justify-center text-[10px] text-white">US</div>
<div className="w-8 h-8 rounded-full bg-gray-600 border border-black flex items-center justify-center text-[10px] text-white">EU</div>
</div>
<div className="text-xs text-white/40">
                        Trusted by 10k+ sellers <br/> across 40 countries.
                    </div>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">

<div className="relative w-full aspect-square max-w-md glass-panel rounded-3xl overflow-hidden shadow-2xl">
<canvas className="transition-opacity duration-1000 opacity-90 w-full h-full absolute top-0 right-0 bottom-0 left-0" height="892" id="cobe" width="892">E</canvas>

<div className="absolute top-6 left-6 z-10 pointer-events-none">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-blue-400" icon="solar:globe-linear"></iconify-icon>
<span className="text-xs font-medium text-white tracking-wide">LIVE NETWORK</span>
</div>
<div className="text-[10px] text-white/50">Real-time transactions</div>
</div>
<div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
<div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-white">iPhone 15 Pro Max</div>
<div className="text-[10px] text-white/50">Sold in San Francisco</div>
</div>
</div>
<span className="text-xs text-green-400 font-medium">+$980</span>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-1">98%</div>
<div className="text-xs text-white/40">Condition Accuracy</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-1">&lt;24h</div>
<div className="text-xs text-white/40">Payout Speed</div>
</div>
<div className="">
<div className="text-3xl font-medium tracking-tight text-white mb-1">12mo</div>
<div className="text-xs text-white/40">Warranty Included</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-1">0%</div>
<div className="text-xs text-white/40">Seller Fees*</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Infrastructure for devices</h2>
<p className="text-white/60 text-sm max-w-xl">We handle the complexities of grading, logistics, and payments so you can focus on trading.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">AI Grading</h3>
<p className="text-sm text-white/50 leading-relaxed">Computer vision analysis ensures every scratch is documented. What you see is exactly what you get.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Instant Liquidity</h3>
<p className="text-sm text-white/50 leading-relaxed">Sell your device directly to our network. Get paid instantly upon verification at our hubs.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Logistics</h3>
<p className="text-sm text-white/50 leading-relaxed">Pre-paid shipping labels and custom packaging sent to your door. Fully insured transit.</p>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium tracking-tight text-white">Trending Devices</h2>

<div className="flex items-center gap-3 bg-white/5 p-1 rounded-lg border border-white/10">
<button className="px-4 py-1.5 rounded-md bg-white/10 text-xs font-medium text-white shadow-sm">Buy</button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-white/50 hover:text-white transition-colors">Sell</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-xl bg-white/[0.02] border border-white/5 p-4 hover:border-white/20 transition-all hover:-translate-y-1">
<div className="aspect-[4/5] bg-black rounded-lg mb-4 relative overflow-hidden">
<img alt="iPhone 15 Pro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
<div className="absolute top-2 right-2 bg-green-500/20 backdrop-blur-md text-green-400 text-[10px] font-medium px-2 py-0.5 rounded border border-green-500/20 shadow-lg">MINT</div>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-medium text-white">iPhone 15 Pro</h3>
<p className="text-[10px] text-white/40">Titanium • 256GB</p>
</div>
<span className="text-sm font-medium text-white">$920</span>
</div>
<button className="w-full mt-2 py-2 rounded-lg bg-white text-black text-xs font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">View Details</button>
</div>

<div className="group relative rounded-xl bg-white/[0.02] border border-white/5 p-4 hover:border-white/20 transition-all hover:-translate-y-1">
<div className="aspect-[4/5] bg-black rounded-lg mb-4 relative overflow-hidden">
<img alt="Pixel 8 Pro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1598327105666-5b89351aff23?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
<div className="absolute top-2 right-2 bg-blue-500/20 backdrop-blur-md text-blue-400 text-[10px] font-medium px-2 py-0.5 rounded border border-blue-500/20 shadow-lg">GOOD</div>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-medium text-white">Pixel 8 Pro</h3>
<p className="text-[10px] text-white/40">Bay • 128GB</p>
</div>
<span className="text-sm font-medium text-white">58000PKR</span>
</div>
<button className="w-full mt-2 py-2 rounded-lg bg-white text-black text-xs font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">View Details</button>
</div>

<div className="group relative rounded-xl bg-white/[0.02] border border-white/5 p-4 hover:border-white/20 transition-all hover:-translate-y-1">
<div className="aspect-[4/5] bg-black rounded-lg mb-4 relative overflow-hidden">
<img alt="Galaxy S24" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1610945265064-f45a70262b6f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
<div className="absolute top-2 right-2 bg-yellow-500/20 backdrop-blur-md text-yellow-400 text-[10px] font-medium px-2 py-0.5 rounded border border-yellow-500/20 shadow-lg">FAIR</div>
</div>
<div className="flex justify-between items-start mb-2">
<div className="">
<h3 className="text-sm font-medium text-white">Galaxy S24</h3>
<p className="text-[10px] text-white/40">Onyx • 512GB</p>
</div>
<span className="text-sm font-medium text-white">$750</span>
</div>
<button className="w-full mt-2 py-2 rounded-lg bg-white text-black text-xs font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">View Details</button>
</div>

<div className="group relative rounded-xl bg-white/[0.02] border border-white/5 p-4 hover:border-white/20 transition-all hover:-translate-y-1">
<div className="aspect-[4/5] bg-black rounded-lg mb-4 relative overflow-hidden">
<img alt="iPhone 14" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1664478546384-d57ffe74a797?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
<div className="absolute top-2 right-2 bg-green-500/20 backdrop-blur-md text-green-400 text-[10px] font-medium px-2 py-0.5 rounded border border-green-500/20 shadow-lg">MINT</div>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-medium text-white">iPhone 14</h3>
<p className="text-[10px] text-white/40">Midnight • 128GB</p>
</div>
<span className="text-sm font-medium text-white">$540</span>
</div>
<button className="w-full mt-2 py-2 rounded-lg bg-white text-black text-xs font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">View Details</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-16 pb-8 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white" icon="solar:smartphone-2-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-white">NEXUS</span>
</div>
<p className="text-xs text-white/40 max-w-xs leading-relaxed">
                        Redefining the secondary mobile market through technology, transparency, and trust.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-white/50">
<li><a className="hover:text-white" href="#">Buy Phones</a></li>
<li><a className="hover:text-white" href="#">Sell Phones</a></li>
<li><a className="hover:text-white" href="#">Enterprise</a></li>
<li><a className="hover:text-white" href="#">Pricing Data</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-xs text-white/50">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Blog</a></li>
<li><a className="hover:text-white" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-white/50">
<li><a className="hover:text-white" href="#">Terms</a></li>
<li><a className="hover:text-white" href="#">Privacy</a></li>
<li><a className="hover:text-white" href="#">Warranty</a></li>
</ul>
</div>
</div>
<div className="flex items-center justify-between pt-8 border-t border-white/10">
<p className="text-[10px] text-white/30">© 2024 Nexus Inc. All rights reserved.</p>
<div className="flex gap-4 text-white/40">
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:brand-twitter-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:brand-instagram-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:brand-linkedin-linear"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
