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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
<span className="text-white text-lg font-bold">S</span>
</div>
                SHIMAGO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white hover:text-red-500 transition-colors" href="#menu">Menu</a>
<a className="hover:text-white hover:text-red-500 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-white hover:text-red-500 transition-colors" href="#location">Location</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]" href="tel:08847284547">
<iconify-icon icon="lucide:phone-call" strokeWidth="1.5" width="16"></iconify-icon>
                088472 84547
            </a>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-500/30 text-red-400 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                    Ludihana's Hottest Slice
                </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
                    SHIMAGO <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 neon-text">PIZZERIA</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-lg mx-auto lg:mx-0 font-light tracking-wide">
                    Hot. Fresh. Loaded. The ultimate street-style pizza experience in Jodhewal Basti.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
<a className="group relative px-8 py-4 bg-red-600 text-white rounded-lg font-semibold tracking-tight overflow-hidden transition-all hover:bg-red-700 shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)]" href="#menu">
<span className="relative z-10 flex items-center gap-2">
                            ORDER NOW
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
</a>
<a className="px-8 py-4 bg-transparent border border-neutral-700 text-white rounded-lg font-semibold tracking-tight hover:border-white hover:bg-white/5 transition-all" href="#menu">
                        VIEW MENU
                    </a>
</div>
<div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-neutral-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="lucide:clock" width="18"></iconify-icon>
<span>Fast Delivery</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="lucide:star" width="18"></iconify-icon>
<span>4.1 Rating (16+)</span>
</div>
</div>
</div>

<div className="relative perspective-container h-[400px] md:h-[600px] flex items-center justify-center">

<div className="absolute top-10 left-10 w-12 h-12 z-20 animate-float" style={{animationDelay: '1s'}}>
<iconify-icon className="text-green-500 opacity-80 rotate-45" icon="lucide:leaf" width="32"></iconify-icon>
</div>
<div className="absolute bottom-20 right-10 w-10 h-10 z-20 animate-float" style={{animationDelay: '2s'}}>
<div className="w-4 h-4 rounded-full bg-red-600 blur-[1px]"></div>
</div>


<div className="relative w-64 h-64 md:w-96 md:h-96 group animate-float cursor-pointer">

<div className="absolute inset-4 bg-red-600/30 rounded-full blur-3xl group-hover:bg-red-600/50 transition-all duration-500"></div>

<div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-neutral-900 transition-transform duration-700 ease-out transform group-hover:rotate-12 group-hover:scale-105">
<img alt="Delicious Pizza" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>
</div>

<div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-4 opacity-50">
<div className="w-2 h-12 bg-white rounded-full steam-particle" style={{animationDelay: '0s'}}></div>
<div className="w-2 h-16 bg-white rounded-full steam-particle" style={{animationDelay: '1s'}}></div>
<div className="w-2 h-10 bg-white rounded-full steam-particle" style={{animationDelay: '0.5s'}}></div>
</div>
</div>

<div className="absolute bottom-10 -left-4 md:left-10 bg-white text-black px-4 py-2 rounded-lg font-bold shadow-lg transform -rotate-6 animate-float" style={{animationDelay: '1.5s'}}>
                    From ₹149
                </div>
</div>
</div>
</header>

<section className="py-20 bg-neutral-950 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group perspective-container h-full">
<div className="card-3d relative h-full bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-red-600/50 hover:bg-neutral-900 transition-colors">
<div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-lg">
<iconify-icon icon="lucide:utensils" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Dine-In</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Experience the vibe. Chill music, hot pizza, and a perfect evening spot.</p>
</div>
</div>

<div className="group perspective-container h-full">
<div className="card-3d relative h-full bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-red-600/50 hover:bg-neutral-900 transition-colors">
<div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-lg">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Takeaway</h3>
<p className="text-sm text-neutral-400 leading-relaxed">In a rush? Grab your box of happiness hot and fresh from the counter.</p>
</div>
</div>

<div className="group perspective-container h-full">
<div className="card-3d relative h-full bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-red-600/50 hover:bg-neutral-900 transition-colors">
<div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-lg">
<iconify-icon icon="lucide:bike" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Delivery</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Shimago at your doorstep. Fast delivery covering Subhash Nagar &amp; beyond.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">SIGNATURE <span className="text-red-600">FEAST</span></h2>
<p className="text-neutral-400 max-w-md">Budget-friendly delights and premium loaded pizzas. The best of Ludhiana.</p>
</div>
<a className="text-white border-b border-red-500 pb-1 hover:text-red-500 transition-colors text-sm font-medium tracking-wide" href="#">VIEW FULL MENU</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group perspective-container">
<div className="card-3d bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-red-600/30">
<div className="h-48 overflow-hidden relative">
<img alt="Classic Veg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 bg-black/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded">
                                BESTSELLER
                            </div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white mb-1">Classic Veggie</h3>
<p className="text-neutral-500 text-xs mb-4 line-clamp-2">Loaded with onions, capsicum, and grilled mushrooms.</p>
<div className="flex justify-between items-center">
<span className="text-red-500 font-bold text-lg">₹199</span>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group perspective-container">
<div className="card-3d bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-red-600/30">
<div className="h-48 overflow-hidden relative">
<img alt="Paneer Special" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white mb-1">Paneer Makhani</h3>
<p className="text-neutral-500 text-xs mb-4 line-clamp-2">Spicy paneer chunks with makhani sauce base and mozzarella.</p>
<div className="flex justify-between items-center">
<span className="text-red-500 font-bold text-lg">₹249</span>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group perspective-container">
<div className="card-3d bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-red-600/30">
<div className="h-48 overflow-hidden relative">
<img alt="Chicken Delight" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                HOT
                            </div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white mb-1">Spicy Chicken</h3>
<p className="text-neutral-500 text-xs mb-4 line-clamp-2">Peri-peri chicken, red paprika, and extra cheese.</p>
<div className="flex justify-between items-center">
<span className="text-red-500 font-bold text-lg">₹299</span>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group perspective-container">
<div className="card-3d bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-red-600/30">
<div className="h-48 overflow-hidden relative">
<img alt="Snacks" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white mb-1">Evening Snacks</h3>
<p className="text-neutral-500 text-xs mb-4 line-clamp-2">Garlic bread, fries, and burgers for the perfect evening bite.</p>
<div className="flex justify-between items-center">
<span className="text-red-500 font-bold text-lg">₹99+</span>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900 border-y border-neutral-800" id="reviews">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star-half" width="20"></iconify-icon>
</div>
<h2 className="text-3xl font-bold text-white mb-2">LOVED FOR TASTE &amp; QUALITY</h2>
<p className="text-neutral-400 mb-12">4.1 Rating based on 16+ Google Reviews</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
<div className="bg-black p-8 rounded-xl border border-neutral-800 text-left hover:border-red-600/40 transition-colors">
<iconify-icon className="text-red-600 mb-4 opacity-50" icon="lucide:quote" width="32"></iconify-icon>
<p className="text-lg text-neutral-300 italic mb-4">"Very good quality and delicious taste. The cheese pull was real!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-bold">A</div>
<div>
<p className="text-sm font-semibold text-white">Amit Singh</p>
<p className="text-xs text-neutral-500">Local Guide</p>
</div>
</div>
</div>
<div className="bg-black p-8 rounded-xl border border-neutral-800 text-left hover:border-red-600/40 transition-colors">
<iconify-icon className="text-red-600 mb-4 opacity-50" icon="lucide:quote" width="32"></iconify-icon>
<p className="text-lg text-neutral-300 italic mb-4">"Nice place for evening snacks. Affordable and hygienic."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-bold">R</div>
<div>
<p className="text-sm font-semibold text-white">Rohan K.</p>
<p className="text-xs text-neutral-500">Foodie</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center" id="location">
<div className="space-y-8">
<h2 className="text-4xl font-bold tracking-tight text-white">VISIT <span className="text-red-600">SHIMAGO</span></h2>
<p className="text-neutral-400 text-lg">We are located in the heart of Jodhewal Basti. Drop by for a hot slice or call us for delivery.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-semibold mb-1">Address</h4>
<p className="text-neutral-400 text-sm">1, Main Road, Jodhewal Basti,<br/>Subhash Nagar, Ludhiana, Punjab – 141007</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-semibold mb-1">Order Now</h4>
<p className="text-neutral-400 text-sm mb-2">Call us directly to place your order.</p>
<a className="inline-flex items-center gap-2 text-red-500 font-bold hover:text-red-400 transition-colors" href="tel:08847284547">
                            088472 84547 <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">

<iframe allowfullscreen="" className="map-dark absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.633917482324!2d75.87702507541604!3d30.91694307449553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a830b89155555%3A0x6b4c10a30146059e!2sShimago%20Pizzeria!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%">
</iframe>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
<div className="relative">
<div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.8)] animate-bounce">
<iconify-icon className="text-white" icon="lucide:pizza" width="16"></iconify-icon>
</div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/50 blur-sm rounded-full"></div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900 bg-black pt-12 pb-6">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h3 className="text-xl font-bold text-white tracking-tight">SHIMAGO</h3>
<p className="text-xs text-neutral-500 mt-1">© 2024 Shimago Pizzeria. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-red-600 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-red-600 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
