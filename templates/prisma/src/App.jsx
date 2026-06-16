import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



function updateComparison(val) {
document.getElementById('before-layer').style.width = val + "%";
document.getElementById('slider-handle').style.left = val + "%";
}



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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
<div className="flex items-center justify-between w-full max-w-6xl bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full py-3 px-6 shadow-sm">
<div className="flex items-center gap-2 cursor-pointer" onclick="window.location.href='/'">

<div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white p-1.5">
<svg className="w-full h-full" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21L10 4L18 21H2Z" fill="currentColor"></path>
<path d="M14 9L19 4" stroke="currentColor" strokeLinecap="square" strokeWidth="2"></path>
<path d="M17 15L22 10" stroke="currentColor" strokeLinecap="square" strokeWidth="2"></path>
<path d="M20 21L24 17" stroke="currentColor" strokeLinecap="square" strokeWidth="2"></path>
</svg>
</div>
<span className="text-base font-semibold text-black tracking-tight">Prisma</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#product">Product</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#showcase">Showcase</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#features">Brand DNA</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#">Login</a>
<a className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-black rounded-full hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" href="#">
                    Start Free
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="overflow-hidden pt-40 pr-4 pb-20 pl-4 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] liquid-crystal -z-10"></div>
<div className="max-w-4xl mx-auto text-center mb-16 relative z-10">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8 hover:border-gray-300 transition-colors cursor-default">
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full bg-gray-200 border border-white"></div>
<div className="w-5 h-5 rounded-full bg-gray-300 border border-white"></div>
<div className="w-5 h-5 rounded-full bg-gray-400 border border-white"></div>
</div>
<span className="text-xs font-medium text-gray-600">Trusted by 4,200+ marketing teams</span>
</div>
<h1 className="md:text-7xl leading-[1.05] text-5xl font-extrabold text-black tracking-tight mb-6">
                Launch 10x more content.<br/>
<span className="text-gray-400">75% faster.</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-10">
                Prisma turns your website into ads, emails, and social posts. 
                Hundreds of content pieces generated while you sleep.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<div className="relative group w-full max-w-md">
<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
<div className="relative flex items-center bg-white rounded-full p-1.5 shadow-xl shadow-gray-200/50 border border-gray-100">
<div className="pl-4 text-gray-400">
<iconify-icon icon="solar:link-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-sm p-3 outline-none text-gray-900 placeholder-gray-400 font-medium" placeholder="paste-your-website.com" type="text"/>
<button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap shadow-lg">
                            Start Generating
                        </button>
</div>
</div>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-xs font-medium text-gray-400">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> 
                    No credit card required
                </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> 
                    Backed by VC Funds
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-4">

<div className="mb-12">
<h2 className="text-4xl md:text-6xl font-semibold text-black tracking-tight leading-tight">
                    You’ve probably seen our work.<br/>
<span className="text-gray-400">You just didn’t know it was AI.</span>
</h2>
</div>

<div className="relative w-full">

<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

<div className="flex overflow-hidden">

<div className="flex gap-6 animate-scroll shrink-0 pl-4">

<div className="w-[280px] md:w-[320px] aspect-[9/14] relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm border border-gray-200">
<img alt="Bag" className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="w-[280px] md:w-[320px] aspect-[9/14] relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm border border-gray-200">
<img alt="UGC Woman" className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616847231687-17eb48c962b3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-[280px] md:w-[320px] aspect-[9/14] relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm border border-gray-200 bg-sky-100">
<img alt="Product" className="w-full h-full object-cover opacity-90 transform transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-8 left-0 right-0 text-center">
<h3 className="text-2xl font-bold text-black tracking-tight uppercase">BLUME</h3>
<p className="text-[10px] font-semibold tracking-[0.2em] text-white mt-1 uppercase drop-shadow-md">Soothe &amp; Hydrate</p>
</div>
</div>

<div className="w-[280px] md:w-[320px] aspect-[9/14] relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm border border-gray-200">
<img alt="UGC Man" className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-10 left-0 right-0 text-center px-4">
<p className="text-xl font-bold text-white drop-shadow-lg leading-tight">
                                    Interwork's<br/>
<span className="text-yellow-400">Collagen Max</span>
</p>
</div>
</div>


<div className="w-[280px] md:w-[320px] aspect-[9/14] relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm border border-gray-200">
<img alt="Bag" className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="w-[280px] md:w-[320px] aspect-[9/14] relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm border border-gray-200">
<img alt="UGC Woman" className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616847231687-17eb48c962b3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-[280px] md:w-[320px] aspect-[9/14] relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm border border-gray-200 bg-sky-100">
<img alt="Product" className="w-full h-full object-cover opacity-90 transform transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-8 left-0 right-0 text-center">
<h3 className="text-2xl font-bold text-black tracking-tight uppercase">BLUME</h3>
<p className="text-[10px] font-semibold tracking-[0.2em] text-white mt-1 uppercase drop-shadow-md">Soothe &amp; Hydrate</p>
</div>
</div>

<div className="w-[280px] md:w-[320px] aspect-[9/14] relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm border border-gray-200">
<img alt="UGC Man" className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-10 left-0 right-0 text-center px-4">
<p className="text-xl font-bold text-white drop-shadow-lg leading-tight">
                                    Interwork's<br/>
<span className="text-yellow-400">Collagen Max</span>
</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-end items-center gap-3 mt-8">
<button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 active:scale-95 transition text-gray-900">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 active:scale-95 transition text-gray-900">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100" id="product">
<div className="max-w-6xl mx-auto px-4">
<div className="grid md:grid-cols-2 gap-20 items-center">

<div className="order-2 md:order-1 space-y-10">
<div>
<h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-4">
                            Swipe ideas like <br/>
<span className="text-gray-400">it's a dating app.</span>
</h2>
<p className="text-gray-600 text-lg">We don't burden you with complex editors. We give you a stream of finished content. You decide what lives or dies.</p>
</div>
<div className="space-y-8">
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-black font-semibold group-hover:bg-black group-hover:text-white transition-colors duration-300">1</div>
<div>
<h3 className="text-xl font-semibold text-gray-900">Input URL</h3>
<p className="text-gray-500 mt-2 leading-relaxed">Drop your website link. Our fluid AI learns your brand DNA in minutes.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-black font-semibold group-hover:bg-black group-hover:text-white transition-colors duration-300">2</div>
<div>
<h3 className="text-xl font-semibold text-gray-900">Swipe to Curate</h3>
<p className="text-gray-500 mt-2 leading-relaxed">Swipe Right to publish, Left to discard. The model gets smarter with every interaction.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-black font-semibold group-hover:bg-black group-hover:text-white transition-colors duration-300">3</div>
<div>
<h3 className="text-xl font-semibold text-gray-900">Launch</h3>
<p className="text-gray-500 mt-2 leading-relaxed">Download high-res clips or auto-publish to TikTok, Reels, and Shorts.</p>
</div>
</div>
</div>
</div>

<div className="order-1 md:order-2 relative h-[600px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-pink-50 to-purple-50 rounded-full blur-3xl opacity-50"></div>
<div className="relative w-72 h-[480px]">

<div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-gray-200 shadow-sm transform -rotate-6 scale-95 opacity-50 z-0"></div>
<div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-gray-200 shadow-md transform rotate-3 scale-95 opacity-80 z-10"></div>

<div className="absolute top-0 left-0 w-full h-full bg-black rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1 z-20 border border-gray-800">

<div className="absolute top-4 left-0 w-full px-4 flex justify-between items-center z-30">
<span className="bg-black/40 backdrop-blur text-white text-[10px] px-2 py-1 rounded-full border border-white/10">Score: 98/100</span>
<iconify-icon className="text-white" icon="solar:menu-dots-bold"></iconify-icon>
</div>

<div className="h-full w-full bg-gray-900 relative">
<div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
<iconify-icon icon="solar:play-circle-linear" width="64"></iconify-icon>
</div>

<div className="absolute bottom-24 left-4 right-4 text-center">
<p className="text-white text-xl font-bold font-sans drop-shadow-lg leading-tight">"Stop wasting money on<br/><span className="text-yellow-400">boring ads.</span>"</p>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-center gap-8 pb-4">
<button className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-red-500 hover:bg-gray-700 transition">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition">
<iconify-icon icon="solar:heart-bold" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-20 right-[-30px] z-30 bg-white/90 backdrop-blur shadow-lg px-3 py-1.5 rounded-lg border border-gray-100 flex items-center gap-2 animate-bounce">
<iconify-icon className="text-black" icon="solar:hand-swipe-linear"></iconify-icon>
<span className="text-xs font-semibold">Swipe to approve</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="showcase">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-12">
<span className="text-sm font-semibold text-purple-600 tracking-wide uppercase mb-3 block">The Difference</span>
<h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-4">
                    Stop posting plain text. <br/>
<span className="text-gray-400">Start posting brands.</span>
</h2>
<p className="text-gray-500">Drag the slider to see how Prisma transforms generic AI outputs into high-performing creative.</p>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group select-none bg-white">

<div className="absolute inset-0 bg-white flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 mix-blend-overlay"></div>

<div className="relative z-10 grid grid-cols-2 gap-12 items-center max-w-4xl px-8">
<img alt="Perfume Product" className="rounded-2xl shadow-2xl rotate-[-3deg] border-4 border-white w-64 md:w-80 mx-auto" src="https://images.unsplash.com/photo-1605218427368-35b80a3bd22a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<h3 className="text-5xl font-bold text-gray-900 tracking-tighter mb-4 leading-none">SCENT <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">REDEFINED.</span></h3>
<p className="text-gray-600 text-lg font-medium leading-relaxed mb-6">"Not just a fragrance. A memory waiting to happen."</p>
<button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/20">Shop the Collection</button>
</div>
</div>

<div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-gray-200 shadow-sm z-20">
<span className="flex items-center gap-2 text-sm font-bold text-purple-600">
<iconify-icon icon="solar:stars-minimalistic-bold"></iconify-icon> Prisma Output
                        </span>
</div>
</div>

<div className="absolute inset-y-0 left-0 w-[50%] bg-[#1E1E1E] overflow-hidden border-r border-white/20 z-10" id="before-layer">
<div className="absolute inset-0 w-[100vw] max-w-6xl md:max-w-none flex items-center justify-center">
<div className="w-full h-full p-12 md:p-20 font-mono text-gray-300 relative">

<div className="flex items-center gap-2 mb-8 opacity-50">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="ml-2 text-xs">chatgpt-response.txt</span>
</div>
<p className="text-green-400 mb-2">$ generate_ad --topic="perfume"</p>
<p className="mb-6 opacity-50">Generating response...</p>
<div className="space-y-4 text-sm md:text-base leading-relaxed opacity-80">
<p>Headline: Buy our new perfume today.</p>
<p>Body: Do you like smelling good? Our perfume smells like flowers and wood. It is very nice and lasts a long time. It is the best perfume for men and women.</p>
<p>Call to Action: Click here to buy now.</p>
<p className="text-gray-500">Note: Please add an image of a bottle.</p>
</div>
</div>
</div>

<div className="absolute top-6 left-6 bg-gray-800/90 backdrop-blur px-4 py-2 rounded-full border border-gray-700 shadow-sm z-30">
<span className="flex items-center gap-2 text-sm font-bold text-gray-300">
<iconify-icon icon="solar:chat-square-code-linear"></iconify-icon> Generic AI
                        </span>
</div>
</div>

<input className="absolute inset-0 w-full h-full z-50 cursor-ew-resize opacity-0" max="100" min="0" oninput="updateComparison(this.value)" type="range" value="50"/>

<div className="absolute top-0 bottom-0 left-[50%] w-1 bg-white z-40 shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-none flex items-center justify-center transform -translate-x-1/2" id="slider-handle">
<div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 text-black">
<iconify-icon icon="solar:arrows-left-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white border-t border-gray-100" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight mb-6">Your Brand DNA.</h2>
<p className="text-gray-600 max-w-xl text-lg">Unlike generic tools, Prisma builds a psychological profile of your audience. It's not just templates; it's strategy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 bg-[#FAFAFA] rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:palette-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-2">Captures Your Aesthetic</h3>
<p className="text-gray-500 leading-relaxed">We scrape your site to extract fonts, hex codes, and tone. Your clips will look 100% on-brand from Day 1.</p>
</div>

<div className="mt-8 flex gap-2">
<div className="h-16 w-16 rounded-2xl bg-black shadow-lg transform group-hover:-translate-y-2 transition duration-300"></div>
<div className="h-16 w-16 rounded-2xl bg-gray-200 shadow-lg transform group-hover:-translate-y-2 transition duration-300 delay-75"></div>
<div className="h-16 w-16 rounded-2xl bg-orange-100 shadow-lg transform group-hover:-translate-y-2 transition duration-300 delay-100"></div>
<div className="h-16 w-16 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center transform group-hover:-translate-y-2 transition duration-300 delay-150">
<span className="text-xs font-mono text-gray-400">Aa</span>
</div>
</div>
</div>

<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-50/50 rounded-full blur-3xl"></div>
</div>

<div className="md:col-span-1 md:row-span-2 bg-black text-white rounded-3xl p-8 shadow-lg relative overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 w-40 h-40 bg-gray-800 rounded-full blur-[60px] opacity-40"></div>
<div className="relative z-10 flex-1">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:brain-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Buying Triggers</h3>
<p className="text-gray-400 text-sm leading-relaxed">Our model is trained on 10M+ winning ads. It knows exactly what hooks drive conversions for your niche.</p>
</div>
<div className="mt-4 pt-4 border-t border-white/10">
<div className="flex items-center justify-between text-xs text-gray-400 mb-1">
<span>Conversion</span>
<span className="text-green-400">+14%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-1.5">
<div className="bg-white h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>

<div className="md:col-span-1 bg-[#FAFAFA] rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold">Audience Sync</h3>
<iconify-icon className="text-blue-500" icon="solar:users-group-two-rounded-bold-duotone" width="24"></iconify-icon>
</div>
<p className="text-gray-500 text-sm mt-2">Analyzes comments to find new content angles.</p>
</div>

<div className="md:col-span-1 bg-[#FAFAFA] rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold">Enterprise Safe</h3>
<iconify-icon className="text-green-500" icon="solar:shield-check-bold-duotone" width="24"></iconify-icon>
</div>
<p className="text-gray-500 text-sm mt-2">Your data is never used to train other models.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA] border-t border-gray-100 relative overflow-hidden">
<div className="max-w-6xl mx-auto px-4 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-4">
                    One Click. <br/>
<span className="text-gray-400">Every Format.</span>
</h2>
<p className="text-gray-500">Hover over the stack to reveal the platforms generated instantly.</p>
</div>
<div className="flex justify-center items-center h-[500px] perspective-[1200px] group/stack">

<div className="relative w-[320px] h-[480px] md:w-[380px] md:h-[540px] transition-transform duration-700 preserve-3d">

<div className="absolute inset-0 bg-white rounded-3xl border border-gray-200 shadow-xl transform transition-all duration-500 ease-out origin-bottom hover:!translate-z-[100px] hover:!rotate-0 hover:z-50 hover:scale-110 group-hover/stack:translate-x-32 group-hover/stack:rotate-6 group-hover/stack:translate-y-4" style={{transform: 'translateZ(-60px) translateY(20px) rotate(-6deg)'}}>
<div className="p-6 h-full flex flex-col">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:users-group-rounded-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-gray-900">LinkedIn Post</p>
<p className="text-xs text-gray-500">Just now</p>
</div>
</div>
<div className="flex-1 bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
<div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
<div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
<div className="h-2 w-5/6 bg-gray-200 rounded mb-4"></div>
<div className="w-full h-32 bg-gray-200 rounded-lg"></div>
</div>
<div className="flex justify-between items-center pt-2 border-t border-gray-100">
<span className="text-xs font-semibold text-gray-400">Read more</span>
<iconify-icon className="text-gray-400" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute inset-0 bg-black text-white rounded-3xl border border-gray-800 shadow-2xl transform transition-all duration-500 ease-out origin-bottom hover:!translate-z-[120px] hover:!rotate-0 hover:z-50 hover:scale-110 group-hover/stack:-translate-x-32 group-hover/stack:-rotate-6 group-hover/stack:translate-y-4" style={{transform: 'translateZ(-30px) translateY(10px) rotate(3deg)'}}>
<div className="p-6 h-full flex flex-col">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:mention-circle-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-white">X Thread</p>
<p className="text-xs text-gray-500">@prisma_ai</p>
</div>
</div>
<p className="text-lg font-medium leading-relaxed mb-6">Marketing is no longer about who spends the most. It's about who moves the fastest. 🧵👇</p>
<div className="flex-1 bg-gray-900 rounded-xl border border-gray-800 p-4 flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="solar:graph-up-linear" width="48"></iconify-icon>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white rounded-3xl border border-gray-200 shadow-2xl transform transition-all duration-500 ease-out origin-bottom hover:!translate-z-[150px] hover:!rotate-0 hover:z-50 hover:scale-110 group-hover/stack:translate-y-[-20px] z-20" style={{transform: 'translateZ(0px) rotate(-3deg)'}}>
<div className="h-full w-full relative overflow-hidden rounded-3xl">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>

<div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-bold border border-white/20">
                                Reels Ready
                            </div>
<div className="absolute bottom-6 left-6 right-6 text-white">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-[10px]">P</div>
<span className="text-sm font-semibold shadow-black drop-shadow-md">Prisma AI</span>
</div>
<p className="text-sm leading-tight opacity-90">How to automate your entire content strategy in 30 seconds... #marketing #ai</p>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/50">
<iconify-icon className="text-white" icon="solar:play-bold" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-100">
<div className="max-w-4xl mx-auto text-center px-4">
<h2 className="text-2xl font-semibold text-gray-900 mb-8">Infinite Content Formats</h2>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-600 hover:border-black hover:bg-black hover:text-white transition cursor-default">Mythbusters</span>
<span className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-600 hover:border-black hover:bg-black hover:text-white transition cursor-default">Problem-Solution</span>
<span className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-600 hover:border-black hover:bg-black hover:text-white transition cursor-default">Us vs Them</span>
<span className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-600 hover:border-black hover:bg-black hover:text-white transition cursor-default">Visual ASMR</span>
<span className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-600 hover:border-black hover:bg-black hover:text-white transition cursor-default">Podcast Highlights</span>
<span className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-600 hover:border-black hover:bg-black hover:text-white transition cursor-default">Testimonials</span>
<span className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-600 hover:border-black hover:bg-black hover:text-white transition cursor-default">Negative Hooks</span>
<span className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-600 hover:border-black hover:bg-black hover:text-white transition cursor-default">Listicles</span>
<span className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-600 hover:border-black hover:bg-black hover:text-white transition cursor-default">Behind the Scenes</span>
</div>
<p className="mt-10 text-gray-400 text-sm font-medium">Like Tinder, but for content strategies. Swipe to pick the winner.</p>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] px-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold text-center mb-16 tracking-tight">Don't trust the robot.<br/>Trust the results.</h2>
<div className="columns-1 md:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex gap-1 mb-3 text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-700 leading-relaxed mb-4 font-medium">"I fired my editing agency. This isn't just cheaper, it's actually better at picking the viral moments than a human."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200"></div>
<div>
<p className="text-xs font-bold text-gray-900">Sarah J.</p>
<p className="text-[10px] text-gray-500">VP Marketing</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
<p className="text-sm text-gray-700 leading-relaxed mb-4 font-medium">"The setup took literally 10 minutes. Now I wake up to 50 clips waiting for my approval. It feels like magic."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-100 to-green-200"></div>
<div>
<p className="text-xs font-bold text-gray-900">Mark T.</p>
<p className="text-[10px] text-gray-500">SaaS Founder</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-black text-white p-6 rounded-2xl shadow-lg">
<p className="text-sm text-gray-200 leading-relaxed mb-4 font-medium">"We scaled our output from 3 videos a week to 30. Our engagement is up 400% in just two months."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div>
<p className="text-xs font-bold text-white">David K.</p>
<p className="text-[10px] text-gray-400">Agency Owner</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
<p className="text-sm text-gray-700 leading-relaxed mb-4 font-medium">"Finally an AI that doesn't sound robotic. It captured our brand voice perfectly on the first try."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-orange-200"></div>
<div>
<p className="text-xs font-bold text-gray-900">Elena R.</p>
<p className="text-[10px] text-gray-500">Creator</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white border-t border-gray-100">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-8">

<div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 opacity-60 grayscale hover:grayscale-0 transition duration-500">
<h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-500">
<iconify-icon icon="solar:chat-square-code-linear"></iconify-icon> Generic AI (ChatGPT)
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="text-red-300 mt-0.5" icon="solar:close-circle-linear" width="16"></iconify-icon>
                            Endless prompt engineering required.
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="text-red-300 mt-0.5" icon="solar:close-circle-linear" width="16"></iconify-icon>
                            Robotic editing cuts (mid-sentence).
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="text-red-300 mt-0.5" icon="solar:close-circle-linear" width="16"></iconify-icon>
                            Generic styling, looks like everyone else.
                        </li>
</ul>
</div>

<div className="p-10 rounded-3xl bg-white border border-black shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-50 to-transparent pointer-events-none"></div>
<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
<div className="w-6 h-6 bg-black rounded text-white flex items-center justify-center">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div> 
                        Prisma
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-900 font-semibold">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            Zero prompts. 1-click generation.
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-900 font-semibold">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            Context-aware editing (understands drama).
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-900 font-semibold">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            Adapts to your brand colors automatically.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-[#FAFAFA] border-gray-200 border-t pt-12 pb-12">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">

<div className="w-6 h-6 rounded bg-black flex items-center justify-center text-white p-1">
<svg className="w-full h-full" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21L10 4L18 21H2Z" fill="currentColor"></path>
<path d="M14 9L19 4" stroke="currentColor" strokeLinecap="square" strokeWidth="2"></path>
<path d="M17 15L22 10" stroke="currentColor" strokeLinecap="square" strokeWidth="2"></path>
<path d="M20 21L24 17" stroke="currentColor" strokeLinecap="square" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm font-semibold tracking-tight">Prisma</span>
</div>
<div className="flex gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-black" href="#">Terms</a>
<a className="hover:text-black" href="#">Privacy</a>
<a className="hover:text-black" href="#">Twitter</a>
</div>
<p className="text-xs text-gray-400">© 2024 Prisma Inc.</p>
</div>
</footer>

    </>
  );
}
