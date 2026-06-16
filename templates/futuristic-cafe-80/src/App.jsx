import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



        // Shopping Cart Logic
        let cartItems = 0;
        let cartTotal = 0;
        let toastTimeout;

        function addToCart(itemName, price) {
            // Update Data
            cartItems++;
            cartTotal += price;

            // Update UI
            const countBadge = document.getElementById('cart-count');
            countBadge.innerText = cartItems;
            countBadge.classList.remove('scale-0');
            countBadge.classList.add('scale-100');

            document.getElementById('cart-total').innerText = `$${cartTotal.toFixed(2)}`;

            // Show Toast
            showToast(itemName);
            
            // Pop widget animation
            const widget = document.getElementById('cart-widget');
            widget.style.transform = 'scale(1.05)';
            setTimeout(() => { widget.style.transform = 'scale(1)'; }, 200);
        }

        function showToast(itemName) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-item').innerText = itemName;
            
            clearTimeout(toastTimeout);
            
            toast.classList.add('show');
            
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        function checkout() {
            if(cartItems === 0) {
                alert("Your pickup order is empty! Add some items first.");
            } else {
                alert(`Proceeding to checkout with ${cartItems} items. Total: $${cartTotal.toFixed(2)}`);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="chile-loader fixed inset-0 flex flex-col bg-[#0A0705]">
<div className="flag-top flex-1 flex w-full h-1/2">
<div className="w-1/3 bg-[#0039A6] flex items-center justify-center relative shadow-[inset_0_-10px_20px_rgba(0,0,0,0.2)]">
<iconify-icon className="text-white text-7xl md:text-9xl drop-shadow-2xl flag-star" icon="solar:star-bold"></iconify-icon>
</div>
<div className="w-2/3 bg-stone-100 relative shadow-[inset_0_-10px_20px_rgba(0,0,0,0.05)]">
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
</div>
</div>
<div className="flag-bottom flex-1 bg-[#D52B1E] w-full h-1/2 relative shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)]">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute bottom-10 w-full text-center">
<p className="font-space text-sm tracking-widest text-white/80 uppercase animate-pulse">Initializing Systems...</p>
</div>
</div>
</div>

<div className="fixed top-6 right-6 z-50 bg-[#140D0A]/90 backdrop-blur-xl border border-stone-700/50 rounded-full px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-4 cursor-pointer hover:bg-stone-800 transition-colors group" id="cart-widget">
<div className="relative">
<iconify-icon className="text-xl text-stone-200 group-hover:text-white transition-colors" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-2 -right-2 bg-[#D52B1E] text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center scale-0 transition-transform duration-300" id="cart-count">0</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-space text-stone-400 uppercase tracking-widest leading-none mb-1">Pickup Order</span>
<span className="text-sm font-space text-stone-200 leading-none" id="cart-total">$0.00</span>
</div>
</div>

<div className="fixed top-[-20%] left-[-10%] w-[60%] aspect-square rounded-full bg-stone-500/10 blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[60%] aspect-square rounded-full bg-amber-900/10 blur-[120px] pointer-events-none"></div>
<div className="fixed top-[40%] left-[40%] w-[30%] aspect-square rounded-full bg-orange-950/20 blur-[100px] pointer-events-none"></div>
<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none z-0"></div>

<aside className="w-full lg:w-5/12 xl:w-1/3 relative z-10 p-6 md:p-10 flex flex-col min-h-screen border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0F0A08]/50 backdrop-blur-3xl">

<header className="mb-12 group cursor-default pt-10 lg:pt-2">
<div className="flex items-center font-serif tracking-tight select-none">
<span className="text-[#B9885A] text-4xl leading-none">Ca</span>
<div className="relative mx-1 flex items-center h-10 w-5">
<div className="absolute left-1/2 -translate-x-1/2 w-[1.5px] h-[110%] bg-stone-200 rounded-full"></div>
<div className="absolute top-[35%] left-[-30%] w-[160%] h-[1.5px] bg-stone-200 rounded-full"></div>
<div className="absolute top-[20%] left-[-30%] w-2 h-[55%] border-l border-y border-stone-500/60 rounded-l-sm"></div>
<div className="absolute top-[-5%] left-1/2 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-stone-200 rounded-tr-full"></div>
</div>
<span className="text-stone-200 text-4xl leading-none">é</span>
</div>
</header>

<div className="flex-1 flex flex-col justify-center items-center w-full max-w-sm mx-auto group relative perspective-1000">
<div className="transform-3d-alt w-full flex flex-col items-center">
<iconify-icon className="absolute -top-4 -left-4 text-xl text-stone-500/30" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="relative w-56 h-56 md:w-64 md:h-64 mb-8 p-1 rounded-full bg-gradient-to-tr from-stone-800/40 via-stone-300/20 to-amber-900/30 group-hover:from-stone-300/40 group-hover:to-stone-100/40 transition-all duration-700 translate-z-30 cursor-pointer" onclick="addToCart('Empolvados', 5.00)">
<div className="absolute inset-0 rounded-full blur-2xl bg-amber-900/10 group-hover:bg-stone-500/20 transition-colors duration-700 pointer-events-none"></div>
<img alt="Empolvados" className="w-full h-full object-cover rounded-full relative z-10 shadow-inner" src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-0 z-20 font-space text-lg text-stone-900 bg-stone-100/90 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500 translate-z-50 flex items-center gap-2 hover:bg-white">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
                        $5.00
                    </div>
</div>
<div className="text-center translate-z-10">
<div className="inline-flex items-center gap-2 mb-3">
<iconify-icon className="text-base text-stone-400" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-space text-stone-400 uppercase tracking-widest">Featured Signature</span>
</div>
<h2 className="text-4xl font-space font-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-stone-100 to-stone-400 mb-3 group-hover:from-white group-hover:to-stone-200 transition-all duration-500">Empolvados</h2>
<p className="text-sm font-light text-stone-400/80 leading-relaxed max-w-xs mx-auto">
                        Soft, tender cookies filled with creamy dulce de leche and generously dusted with powdered sugar. Light, classic, and melt-in-your-mouth.
                    </p>
</div>
</div>
</div>

<div className="mt-12 space-y-6 w-full max-w-sm mx-auto">
<button className="w-full flex items-center justify-center gap-3 bg-stone-100 text-stone-900 py-3 md:py-4 rounded-xl md:rounded-2xl font-space font-normal hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10 relative overflow-hidden group" onclick="checkout()">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
<iconify-icon className="text-xl relative z-10" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
<span className="relative z-10">Order For Pickup</span>
</button>
<div className="p-4 md:p-5 rounded-2xl bg-[#140D0A] border border-stone-800/60 shadow-inner">
<h4 className="text-xs font-space text-stone-300 mb-3 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:ticket-linear" strokeWidth="1.5"></iconify-icon> Unlock 15% Off
                </h4>
<div className="flex gap-2">
<input className="bg-[#0A0705] border border-stone-800 rounded-lg md:rounded-xl px-4 py-2.5 text-sm w-full focus:outline-none focus:border-stone-500 text-stone-200 placeholder:text-stone-600 transition-colors" placeholder="Enter your email..." type="email"/>
<button className="bg-stone-800 text-stone-200 px-4 py-2.5 rounded-lg md:rounded-xl hover:bg-stone-700 hover:text-white transition-colors border border-stone-700 flex items-center justify-center group">
<iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-center gap-4 text-stone-500">
<a className="p-3 rounded-full bg-white/5 hover:bg-stone-100 hover:text-stone-900 border border-white/5 hover:border-stone-100 transition-all duration-300 group" href="#">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="p-3 rounded-full bg-white/5 hover:bg-stone-100 hover:text-stone-900 border border-white/5 hover:border-stone-100 transition-all duration-300 group" href="#">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="p-3 rounded-full bg-white/5 hover:bg-stone-100 hover:text-stone-900 border border-white/5 hover:border-stone-100 transition-all duration-300 group" href="#">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</aside>

<main className="w-full lg:w-7/12 xl:w-2/3 relative z-10 p-6 md:p-12 lg:p-24 lg:overflow-y-auto lg:h-screen">
<header className="mb-12">
<h1 className="text-5xl md:text-7xl font-space font-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-200 to-stone-600">
                Menu Core.
            </h1>
<p className="text-base md:text-lg font-light text-stone-400 mt-4 flex items-center gap-2">
<iconify-icon className="text-xl text-stone-500/50" icon="solar:donut-bitten-linear" strokeWidth="1.5"></iconify-icon>
                Select your bite of heaven
            </p>
</header>

<section className="mb-16 w-full max-w-4xl">
<div className="bg-gradient-to-b from-[#140D0A] to-[#0A0705] border border-stone-800/60 rounded-3xl p-6 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBoMjBWMEgwem0xOS0xdjE5SDFWMWgxOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-30"></div>

<div className="relative z-10 flex flex-wrap justify-between items-center mb-6 gap-4">
<h3 className="font-space text-lg text-stone-200 flex items-center gap-3">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</span>
                        Live GPS Tracker
                    </h3>
<div className="flex items-center gap-2 bg-[#1A110D] border border-amber-900/30 px-4 py-1.5 rounded-full">
<iconify-icon className="text-amber-500 text-sm" icon="solar:route-linear"></iconify-icon>
<span className="text-xs font-space text-amber-500/90 uppercase tracking-widest">Middle TN Route</span>
</div>
</div>

<div className="relative h-48 md:h-56 bg-[#0A0705] rounded-xl border border-stone-800/80 overflow-hidden shadow-inner">

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">
<path d="M 15% 20% Q 50% 45% 85% 75%" fill="none" stroke="rgba(168, 162, 158, 0.2)" stroke-dasharray="6 6" strokeWidth="2"></path>
</svg>

<div className="absolute top-[20%] left-[15%] flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group">
<div className="w-3 h-3 bg-stone-600 rounded-full border-2 border-[#0A0705]"></div>
<span className="text-xs font-space text-stone-500 mt-2 opacity-50 group-hover:opacity-100 transition-opacity">Nashville</span>
</div>
<div className="absolute top-[45%] left-[50%] flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group">
<div className="w-3 h-3 bg-stone-600 rounded-full border-2 border-[#0A0705]"></div>
<span className="text-xs font-space text-stone-500 mt-2 opacity-50 group-hover:opacity-100 transition-opacity">Smyrna</span>
</div>
<div className="absolute top-[75%] left-[85%] flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
<div className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-40"></span>
<div className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-[#0A0705] z-10 shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>
</div>
</div>

<div className="truck-marker absolute w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] z-20 cursor-help transition-transform hover:scale-110">
<iconify-icon className="text-xl text-[#0A0705]" icon="solar:bus-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="absolute bottom-4 left-4 bg-[#140D0A]/90 backdrop-blur-md border border-stone-700/50 px-4 py-2.5 rounded-lg z-10 shadow-lg">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-amber-500 text-sm" icon="solar:map-point-bold"></iconify-icon>
<p className="text-xs font-space text-stone-400 uppercase tracking-wide">Next Stop Today</p>
</div>
<p className="text-sm font-medium text-stone-200">The Square, Murfreesboro • 5:00 PM</p>
</div>
</div>
</div>
</section>

<div className="flex flex-col gap-6 md:gap-8 max-w-4xl">

<div className="perspective-1000 group">
<article className="transform-3d glare relative p-5 md:p-6 rounded-3xl bg-[#140D0A]/80 border border-stone-800/50 backdrop-blur-md flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-stone-500/0 group-hover:from-stone-500/5 group-hover:to-white/5 transition-colors duration-700 pointer-events-none"></div>
<div className="relative w-full sm:w-32 h-48 sm:h-32 shrink-0 rounded-2xl sm:rounded-2xl p-1 bg-gradient-to-tr from-stone-800/40 to-stone-700/20 group-hover:from-stone-400/30 group-hover:to-stone-200/30 transition-all duration-500 translate-z-30 cursor-pointer" onclick="addToCart('Mini Cake Amor', 5.00)">
<img alt="Mini Cake Amor" className="w-full h-full object-cover rounded-xl sm:rounded-xl" src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<iconify-icon className="absolute -top-2 -right-2 text-stone-300 text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white text-3xl" icon="solar:cart-plus-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 relative z-10 w-full translate-z-10">
<div className="flex flex-wrap justify-between items-start gap-4 mb-3">
<h3 className="text-2xl font-space font-normal tracking-tight text-stone-200 group-hover:text-white transition-colors duration-500">Mini Cake Amor</h3>
<div className="flex items-center gap-3">
<span className="text-stone-600 line-through text-sm font-space">6.00</span>
<button className="font-space text-sm text-stone-900 bg-stone-200 border border-stone-300/20 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-white hover:scale-105 transition-all flex items-center gap-2" onclick="addToCart('Mini Cake Amor', 5.00)">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                                    $5.00
                                </button>
</div>
</div>
<p className="text-sm md:text-base font-light text-stone-400/80 leading-relaxed">
                            Layers of delicate puff pastry cookies filled with raspberry, whipped cream, pastry cream, and dulce de leche.
                        </p>
</div>
</article>
</div>

<div className="perspective-1000 group">
<article className="transform-3d glare relative p-5 md:p-6 rounded-3xl bg-[#140D0A]/80 border border-stone-800/50 backdrop-blur-md flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-stone-500/0 group-hover:from-stone-500/5 group-hover:to-white/5 transition-colors duration-700 pointer-events-none"></div>
<div className="relative w-full sm:w-32 h-48 sm:h-32 shrink-0 rounded-2xl sm:rounded-2xl p-1 bg-gradient-to-tr from-stone-800/40 to-stone-700/20 group-hover:from-stone-400/30 group-hover:to-stone-200/30 transition-all duration-500 translate-z-30 cursor-pointer" onclick="addToCart('Chilenitos', 5.00)">
<img alt="Chilenitos" className="w-full h-full object-cover rounded-xl sm:rounded-xl" src="https://images.unsplash.com/photo-1621236378699-8597ffc34082?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white text-3xl" icon="solar:cart-plus-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 relative z-10 w-full translate-z-10">
<div className="flex flex-wrap justify-between items-start gap-4 mb-3">
<h3 className="text-2xl font-space font-normal tracking-tight text-stone-200 group-hover:text-white transition-colors duration-500">Chilenitos</h3>
<button className="font-space text-sm text-stone-200 bg-stone-800/50 border border-stone-600/50 px-4 py-1.5 rounded-full hover:bg-stone-700 hover:text-white transition-colors flex items-center gap-2" onclick="addToCart('Chilenitos', 5.00)">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                                $5.00
                            </button>
</div>
<p className="text-sm md:text-base font-light text-stone-400/80 leading-relaxed">
                            A delicate traditional cookie filled with rich dulce de leche and coated in soft, fluffy meringue.
                        </p>
</div>
</article>
</div>

<div className="perspective-1000 group">
<article className="transform-3d glare relative p-5 md:p-6 rounded-3xl bg-[#140D0A]/80 border border-stone-800/50 backdrop-blur-md flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-stone-500/0 group-hover:from-stone-500/5 group-hover:to-white/5 transition-colors duration-700 pointer-events-none"></div>
<div className="relative w-full sm:w-32 h-48 sm:h-32 shrink-0 rounded-2xl sm:rounded-2xl p-1 bg-gradient-to-tr from-stone-800/40 to-stone-700/20 group-hover:from-stone-400/30 group-hover:to-stone-200/30 transition-all duration-500 translate-z-30 cursor-pointer" onclick="addToCart('Calzones Rotos', 5.00)">
<img alt="Calzones Rotos" className="w-full h-full object-cover rounded-xl sm:rounded-xl" src="https://images.unsplash.com/photo-1601000938259-9e92002320b2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white text-3xl" icon="solar:cart-plus-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 relative z-10 w-full translate-z-10">
<div className="flex flex-wrap justify-between items-start gap-4 mb-3">
<h3 className="text-2xl font-space font-normal tracking-tight text-stone-200 group-hover:text-white transition-colors duration-500">Calzones Rotos</h3>
<button className="font-space text-sm text-stone-200 bg-stone-800/50 border border-stone-600/50 px-4 py-1.5 rounded-full hover:bg-stone-700 hover:text-white transition-colors flex items-center gap-2" onclick="addToCart('Calzones Rotos', 5.00)">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                                $5.00
                            </button>
</div>
<p className="text-sm md:text-base font-light text-stone-400/80 leading-relaxed mb-4">
                            Crispy, golden pastries made from a soft dough infused with hints of orange and vanilla, finished with a light dusting of sugar.
                        </p>
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs font-space text-stone-500 uppercase tracking-widest mr-1">Mods:</span>
<span className="text-xs md:text-sm text-stone-300 bg-stone-800/50 border border-stone-700 px-2 py-1 rounded-md cursor-pointer hover:bg-stone-700 transition-colors">Dulce de leche</span>
<span className="text-xs md:text-sm text-stone-300 bg-stone-800/50 border border-stone-700 px-2 py-1 rounded-md cursor-pointer hover:bg-stone-700 transition-colors">Nutella</span>
<span className="text-xs md:text-sm text-stone-300 bg-stone-800/50 border border-stone-700 px-2 py-1 rounded-md cursor-pointer hover:bg-stone-700 transition-colors">Strawberry Jelly</span>
</div>
</div>
</article>
</div>
</div>

<section className="mt-16 md:mt-24 perspective-1000 group">
<div className="transform-3d glare relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-[#1A1411] to-[#0A0705] border border-stone-700/30 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-stone-100/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex-1 translate-z-30">
<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-stone-800/50 border border-stone-700/50">
<iconify-icon className="text-base text-stone-300" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-space text-stone-300 uppercase tracking-widest">Private Booking</span>
</div>
<h2 className="text-3xl md:text-4xl font-space font-normal tracking-tight text-white mb-3">Book Us For Your Next Event</h2>
<p className="text-base font-light text-stone-400/80 max-w-md mx-auto md:mx-0">
                        Elevate your gatherings. Secure our futuristic cafe space or our exclusive catering services for your next premium gathering.
                    </p>
</div>
<div className="relative z-10 w-full md:w-auto translate-z-50">
<button className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-stone-100 text-stone-900 px-8 py-4 rounded-xl font-space font-normal hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
<iconify-icon className="text-xl group-hover:rotate-12 transition-transform" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> Contact Us
                    </button>
</div>
</div>
</section>
<div className="h-24 md:h-32"></div>
</main>

<div className="fixed bottom-6 right-6 z-50 bg-stone-100 text-stone-900 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-stone-300" id="toast">
<iconify-icon className="text-green-600 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<div>
<p className="text-sm font-space font-medium leading-tight">Added to order</p>
<p className="text-xs text-stone-600 leading-tight" id="toast-item">Item name</p>
</div>
</div>


    </>
  );
}
