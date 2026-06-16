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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex flex-col leading-none">
<span className="text-xl font-semibold tracking-tighter text-stone-900">LA'CHEF</span>
<span className="text-[0.65rem] tracking-widest uppercase text-stone-500">Mainpuri</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-orange-600 transition-colors" href="#menu">Menu</a>
<a className="hover:text-orange-600 transition-colors" href="#ambience">Ambience</a>
<a className="hover:text-orange-600 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-orange-600 transition-colors" href="#location">Contact</a>
</div>
<div className="flex items-center gap-3">
<button className="bg-stone-900 text-stone-50 text-xs font-medium px-4 py-2 rounded-full hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-stone-900/10">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
<span>Book Table</span>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

<div className="absolute inset-0 z-0">
<img alt="Restaurant Ambience" className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-stone-900/30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-100 text-xs font-medium backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                    Open till 11 PM
                </div>
<div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-2">
                        LA'CHEF <br/>
<span className="font-serif italic text-orange-200 font-normal">Mainpuri</span>
</h1>
<h2 className="text-2xl text-stone-300 font-medium tracking-wide font-serif">ला'चीफ मैनपुरी</h2>
</div>
<p className="text-stone-300 text-lg max-w-md leading-relaxed font-light">
                    Great Taste. Warm Service. Memorable Moments. <br/>
                    Experience the best multi-cuisine dining in the heart of the city.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="bg-orange-600 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-orange-500 transition-all hover:-translate-y-1 shadow-xl shadow-orange-900/20 flex items-center gap-2">
                        Order Online
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all hover:-translate-y-1 flex items-center gap-2">
                        View Menu
                        <span className="iconify" data-icon="lucide:utensils" data-width="16"></span>
</button>
</div>
<div className="pt-8 flex items-center gap-6 text-stone-400 text-xs tracking-wide">
<div className="flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:star" data-width="16"></span>
<span>4.4 Rating (100+ Reviews)</span>
</div>
</div>
</div>

<div className="hidden md:block relative h-[500px] w-full perspective-1000">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/20 blur-[100px]"></div>

<div className="absolute top-10 right-10 w-64 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 cursor-default group">
<img alt="Thali" className="w-full h-40 object-cover rounded-xl mb-3 shadow-lg group-hover:shadow-xl transition-shadow" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium">Special Thali</h3>
<p className="text-stone-300 text-xs">Authentic North Indian</p>
</div>
<span className="text-orange-300 font-medium text-sm">₹249</span>
</div>
</div>

<div className="absolute bottom-20 left-10 w-64 bg-white/95 backdrop-blur-md border border-stone-200/50 p-4 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 z-20 cursor-default group">
<img alt="Salad" className="w-full h-40 object-cover rounded-xl mb-3 shadow-lg group-hover:shadow-xl transition-shadow" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex justify-between items-start">
<div>
<h3 className="text-stone-900 font-medium">Healthy Greens</h3>
<p className="text-stone-500 text-xs">Fresh &amp; Organic</p>
</div>
<span className="text-orange-600 font-medium text-sm">₹199</span>
</div>
</div>
</div>
</div>
</header>

<section className="border-b border-stone-200 bg-white relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-100">
<div className="flex flex-col items-center gap-3 py-2">
<div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-1">
<span className="iconify" data-icon="lucide:armchair" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-stone-900 font-medium">Comfortable Dine-In</h3>
<p className="text-stone-500 text-xs max-w-[200px]">Cozy seating perfect for family dinners and gatherings.</p>
</div>
<div className="flex flex-col items-center gap-3 py-2">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center mb-1">
<span className="iconify" data-icon="lucide:car" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-stone-900 font-medium">Drive-Through</h3>
<p className="text-stone-500 text-xs max-w-[200px]">Quick pickup service without leaving your car.</p>
</div>
<div className="flex flex-col items-center gap-3 py-2">
<div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-1">
<span className="iconify" data-icon="lucide:bike" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-stone-900 font-medium">No-Contact Delivery</h3>
<p className="text-stone-500 text-xs max-w-[200px]">Hot food delivered safely to your doorstep.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="menu">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-orange-600 text-xs font-semibold tracking-wider uppercase mb-2 block">Our Specialties</span>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">Curated for Taste</h2>
<p className="text-stone-500 mt-3 text-sm max-w-md">Authentic flavors prepared with love. From rich North Indian curries to our signature thalis.</p>
</div>
<button className="text-stone-900 border border-stone-200 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors flex items-center gap-2">
                View Full Menu <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl border border-stone-100 p-3 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
<div className="relative overflow-hidden rounded-xl h-64 w-full">
<img alt="La'Chef Thali" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold px-2 py-1 rounded border border-stone-200">BESTSELLER</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-stone-900">La'Chef Special Thali</h3>
<div className="w-4 h-4 border border-green-600 p-[2px] flex items-center justify-center rounded-[2px]" title="Vegetarian">
<div className="w-full h-full bg-green-600 rounded-full"></div>
</div>
</div>
<p className="text-stone-500 text-xs leading-relaxed mb-4">A royal feast with paneer, dal makhani, seasonal veg, rice, breads, raita and sweet.</p>
<div className="flex items-center justify-between pt-2 border-t border-stone-100">
<span className="text-stone-900 font-semibold">₹280</span>
<button className="text-orange-600 text-xs font-medium hover:underline">Add to Order</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-100 p-3 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
<div className="relative overflow-hidden rounded-xl h-64 w-full">
<img alt="Paneer Butter Masala" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-stone-900">Paneer Butter Masala</h3>
<div className="w-4 h-4 border border-green-600 p-[2px] flex items-center justify-center rounded-[2px]" title="Vegetarian">
<div className="w-full h-full bg-green-600 rounded-full"></div>
</div>
</div>
<p className="text-stone-500 text-xs leading-relaxed mb-4">Cottage cheese cubes cooked in a rich, creamy tomato gravy with butter and spices.</p>
<div className="flex items-center justify-between pt-2 border-t border-stone-100">
<span className="text-stone-900 font-semibold">₹240</span>
<button className="text-orange-600 text-xs font-medium hover:underline">Add to Order</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-100 p-3 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
<div className="relative overflow-hidden rounded-xl h-64 w-full">
<img alt="Family Platter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-stone-900">Family Dinner Platter</h3>
<div className="w-4 h-4 border border-red-600 p-[2px] flex items-center justify-center rounded-[2px]" title="Non-Vegetarian Options Available">
<div className="w-full h-full bg-red-600 rounded-full"></div>
</div>
</div>
<p className="text-stone-500 text-xs leading-relaxed mb-4">Assorted kebabs, curries and breads perfect for a family of four. Great value.</p>
<div className="flex items-center justify-between pt-2 border-t border-stone-100">
<span className="text-stone-900 font-semibold">₹850</span>
<button className="text-orange-600 text-xs font-medium hover:underline">Add to Order</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-100 py-24 border-y border-stone-200" id="ambience">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Interior" className="rounded-2xl shadow-lg translate-y-8 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Seating" className="rounded-2xl shadow-lg w-full h-64 object-cover" src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 blur-3xl rounded-full opacity-60"></div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<span className="text-orange-600 text-xs font-semibold tracking-wider uppercase">Ambience</span>
<h2 className="text-3xl md:text-5xl font-semibold text-stone-900 tracking-tight">Warm, Cozy &amp; <br/>Family Friendly</h2>
<p className="text-stone-600 leading-relaxed text-sm md:text-base">
                        Located beside Canara Bank on Kachari Road, we offer a peaceful escape from the city bustle. Whether it's a birthday celebration or a quiet dinner, our interiors are designed for comfort.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-stone-700 text-sm">
<span className="bg-green-100 text-green-700 p-1 rounded-full"><span className="iconify" data-icon="lucide:check" data-width="14"></span></span>
                            Polite &amp; professional staff
                        </li>
<li className="flex items-center gap-3 text-stone-700 text-sm">
<span className="bg-green-100 text-green-700 p-1 rounded-full"><span className="iconify" data-icon="lucide:check" data-width="14"></span></span>
                            Hygienic &amp; sanitized kitchen
                        </li>
<li className="flex items-center gap-3 text-stone-700 text-sm">
<span className="bg-green-100 text-green-700 p-1 rounded-full"><span className="iconify" data-icon="lucide:check" data-width="14"></span></span>
                            Comfortable seating for large families
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden" id="reviews">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-3 py-1 rounded-full mb-4">
<span className="iconify text-yellow-500" data-icon="lucide:star" data-width="14"></span>
<span className="text-xs font-medium text-stone-700">4.4 Rating on Google</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">Loved by Mainpuri</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-orange-100 transition-colors">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"Food was delicious and beautifully presented. It's rare to find such quality in Mainpuri at these prices."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">RK</div>
<span className="text-xs font-medium text-stone-900">Rahul Kumar</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-orange-100 transition-colors md:-translate-y-4">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star-half" data-width="16"></span>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"Staff very polite and helpful. We celebrated my daughter's birthday here and they made it special."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">AS</div>
<span className="text-xs font-medium text-stone-900">Anjali Singh</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-orange-100 transition-colors">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"Cozy charm and warm atmosphere. The thali is a must-try. Definitely visiting again."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">VY</div>
<span className="text-xs font-medium text-stone-900">Vikram Yadav</span>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-300 py-20 relative overflow-hidden" id="location">
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-8">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Visit Us</h2>
<p className="text-stone-400 text-sm">We are open every day from 11:00 AM to 11:00 PM</p>
</div>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="mt-1 text-orange-500">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Address</h4>
<p className="text-sm leading-relaxed max-w-xs">
                                Kachari Road, beside Canara Bank,<br/>
                                Awas Vikas Colony, Mainpuri,<br/>
                                Uttar Pradesh – 205001
                            </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-orange-500">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Contact</h4>
<p className="text-sm">+91 XXXXX XXXXX</p>
<p className="text-xs text-stone-500 mt-1">For delivery &amp; reservations</p>
</div>
</div>
</div>
<button className="bg-white text-stone-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-200 transition-colors w-full md:w-auto flex justify-center items-center gap-2">
<span className="iconify" data-icon="lucide:navigation" data-width="16"></span>
                    Get Directions
                </button>
</div>

<div className="h-80 w-full rounded-2xl overflow-hidden bg-stone-800 border border-stone-700 relative group">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.817366378774!2d79.0200!3d27.2200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEzJzEyLjAiTiA3OcKwMDEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(83%)', opacity: '0.8'}} width="100%">
</iframe>
<div className="absolute inset-0 pointer-events-none border-4 border-stone-800/50 rounded-2xl"></div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
<p>© 2024 La'Chef Mainpuri. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</section>

    </>
  );
}
