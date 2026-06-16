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



        const scene = document.getElementById('scene');
        const card = document.getElementById('card');

        if(scene && card) {
            // Configuration for sensitivity
            const maxRotation = 12; // Max degrees of rotation

            scene.addEventListener('mousemove', (e) => {
                // Get boundaries of the scene
                const rect = scene.getBoundingClientRect();
                
                // Calculate mouse position relative to center of scene
                const x = e.clientX - rect.left - (rect.width / 2);
                const y = e.clientY - rect.top - (rect.height / 2);
                
                // Calculate rotation percentages
                const rotateY = (x / (rect.width / 2)) * maxRotation;
                const rotateX = -(y / (rect.height / 2)) * maxRotation; // Negative to tilt towards mouse

                // Apply transform
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            // Reset when mouse leaves
            scene.addEventListener('mouseleave', () => {
                card.style.transform = `rotateX(0deg) rotateY(0deg)`;
                card.style.transition = 'transform 0.5s ease-out';
            });

            // Remove transition during movement for smoothness
            scene.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s ease-out';
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<span className="text-lg font-semibold tracking-tighter">SML.</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#rooms">Resort &amp; Rooms</a>
<a className="hover:text-zinc-900 transition-colors" href="#experiences">Experiences</a>
<a className="hover:text-zinc-900 transition-colors" href="#gallery">Gallery</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Sign in
                </button>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm">
                    Book Stay
                </button>
</div>
</div>
</nav>

<main className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">

<div className="absolute inset-0 w-full h-full overflow-hidden -z-20">
<video autoplay="" className="w-full h-full object-cover opacity-30" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-mountain-peaks-in-the-clouds-4131-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-[#fafafa] z-10"></div>
</div>

<div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob -z-10"></div>
<div className="absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

<div className="flex-1 text-center lg:text-left mt-12 lg:mt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/80 backdrop-blur-sm border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Now accepting winter reservations
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-tight">
                    Elevate your perspective in <span className="text-zinc-400">Shimla.</span>
</h1>
<p className="text-base md:text-lg text-zinc-500 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 font-light">
                    Experience luxury perched amidst the Himalayas. A seamlessly designed sanctuary where nature meets modern comfort.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                        Explore Rooms
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium text-zinc-700 hover:bg-zinc-100/50 backdrop-blur-sm transition-colors flex items-center justify-center gap-2 border border-zinc-200 sm:border-transparent hover:border-zinc-200">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                        Watch Video
                    </button>
</div>
</div>

<div className="flex-1 w-full max-w-[280px] sm:max-w-sm lg:max-w-lg perspective-1000 hidden md:block" id="scene">

<div className="relative w-full aspect-[4/5] rounded-3xl preserve-3d transition-transform duration-200 ease-out shadow-2xl border border-white/20" id="card" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1626606076701-d0b2b8e3a246?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-3xl preserve-3d"></div>

<div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-xs font-medium flex items-center gap-2 translate-z-30 shadow-xl">
<iconify-icon icon="solar:sun-fog-linear" width="16"></iconify-icon>
                        18°C Shimla
                    </div>

<div className="absolute bottom-8 left-8 right-8 preserve-3d">
<h3 className="text-white text-2xl font-semibold tracking-tight mb-2 translate-z-40 drop-shadow-md">The Alpine Suite</h3>
<p className="text-zinc-300 text-sm font-light mb-4 translate-z-20 max-w-[80%]">Panoramic valley views with floor-to-ceiling windows and a private heated plunge pool.</p>
<div className="flex items-center justify-between translate-z-50">
<span className="text-white font-medium text-lg tracking-tight">₹14,500 <span className="text-xs text-zinc-400 font-normal">/ night</span></span>
<button className="bg-white text-zinc-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors shadow-lg">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="absolute top-1/2 left-[-20px] bg-white rounded-2xl p-3 shadow-xl border border-zinc-100 translate-z-40 animate-pulse">
<iconify-icon className="text-zinc-700" icon="solar:cup-hot-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-full max-w-5xl mx-auto px-4 md:px-6 mt-16 md:mt-24 relative z-20">
<div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40 p-3 md:p-4 flex flex-col md:flex-row items-center gap-3 md:gap-4">
<div className="flex-1 flex w-full md:w-auto items-center relative border border-zinc-200 rounded-2xl hover:border-zinc-300 transition-colors bg-white/50">
<div className="pl-4 pr-2 text-zinc-400">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1 py-3 px-2 relative">
<label className="block text-xs font-medium text-zinc-500 mb-0.5">Check in</label>
<input className="w-full bg-transparent text-sm text-zinc-800 font-medium focus:outline-none cursor-pointer" type="date"/>
</div>
</div>
<div className="flex-1 flex w-full md:w-auto items-center relative border border-zinc-200 rounded-2xl hover:border-zinc-300 transition-colors bg-white/50">
<div className="pl-4 pr-2 text-zinc-400">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1 py-3 px-2 relative">
<label className="block text-xs font-medium text-zinc-500 mb-0.5">Check out</label>
<input className="w-full bg-transparent text-sm text-zinc-800 font-medium focus:outline-none cursor-pointer" type="date"/>
</div>
</div>
<div className="flex-1 flex w-full md:w-auto items-center relative border border-zinc-200 rounded-2xl hover:border-zinc-300 transition-colors bg-white/50">
<div className="pl-4 pr-2 text-zinc-400">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1 py-3 px-2">
<label className="block text-xs font-medium text-zinc-500 mb-0.5">Guests</label>
<select className="w-full bg-transparent text-sm text-zinc-800 font-medium focus:outline-none appearance-none cursor-pointer">
<option>2 Adults, 1 Room</option>
<option>1 Adult, 1 Room</option>
<option>4 Adults, 2 Rooms</option>
</select>
</div>
</div>
<button className="w-full md:w-auto bg-zinc-900 text-white px-8 py-4 rounded-2xl text-sm font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-md">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
                    Search
                </button>
</div>
</div>
</main>

<section className="py-20 md:py-32 bg-zinc-50 border-t border-zinc-100" id="rooms">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Accommodations</h2>
<p className="text-sm md:text-base text-zinc-500 max-w-xl font-light">From cozy mountain retreats to expansive luxury suites, discover the perfect space for your Himalayan escape.</p>
</div>
<button className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-1 w-fit">
                    View all rooms <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-3xl p-3 border border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all duration-300 group flex flex-col">
<div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-5 relative">
<img alt="Basic Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1598928506311-c55dd1b6e271?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-zinc-800 tracking-tight">Standard</div>
</div>
<div className="px-2 flex-1 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-1">Alpine Basic</h3>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2">Essential comfort with forest views. Perfect for solo travelers or short stays.</p>
<div className="flex items-center gap-4 text-xs font-medium text-zinc-500 mb-6">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 1 Queen</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:maximize-linear" width="16"></iconify-icon> 280 sqft</span>
</div>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-100">
<span className="text-zinc-900 font-semibold tracking-tight">₹8,000 <span className="text-xs text-zinc-400 font-normal">/night</span></span>
<button className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-3 border border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all duration-300 group flex flex-col">
<div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-5 relative">
<img alt="Standard Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-zinc-800 tracking-tight">Most Popular</div>
</div>
<div className="px-2 flex-1 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-1">Valley Standard</h3>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2">Spacious interiors featuring a private balcony overlooking the Shimla valley.</p>
<div className="flex items-center gap-4 text-xs font-medium text-zinc-500 mb-6">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 1 King</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:maximize-linear" width="16"></iconify-icon> 400 sqft</span>
</div>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-100">
<span className="text-zinc-900 font-semibold tracking-tight">₹12,500 <span className="text-xs text-zinc-400 font-normal">/night</span></span>
<button className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-3 border border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all duration-300 group flex flex-col">
<div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-5 relative">
<img alt="Premium Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-zinc-800 tracking-tight">Premium</div>
</div>
<div className="px-2 flex-1 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-1">Summit Premium</h3>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2">Elevated corner suites with wrap-around glass windows and a deep soaking tub.</p>
<div className="flex items-center gap-4 text-xs font-medium text-zinc-500 mb-6">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 1 King</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:maximize-linear" width="16"></iconify-icon> 650 sqft</span>
</div>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-100">
<span className="text-zinc-900 font-semibold tracking-tight">₹18,000 <span className="text-xs text-zinc-400 font-normal">/night</span></span>
<button className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-3xl p-3 border border-zinc-800 hover:border-zinc-700 hover:shadow-2xl transition-all duration-300 group flex flex-col">
<div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-5 relative">
<img alt="Luxury Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 px-2.5 py-1 rounded-lg text-xs font-semibold text-white tracking-tight">Luxury</div>
</div>
<div className="px-2 flex-1 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-white mb-1">Himalayan Luxury</h3>
<p className="text-xs text-zinc-400 mb-4 line-clamp-2">The ultimate retreat. Two bedrooms, a private plunge pool, and dedicated butler service.</p>
<div className="flex items-center gap-4 text-xs font-medium text-zinc-400 mb-6">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 2 Kings</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:maximize-linear" width="16"></iconify-icon> 1200 sqft</span>
</div>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-800">
<span className="text-white font-semibold tracking-tight">₹35,000 <span className="text-xs text-zinc-500 font-normal">/night</span></span>
<button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-zinc-900 hover:scale-105 transition-transform">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="experiences">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 md:mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Curated Experiences</h2>
<p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto font-light">Immerse yourself in carefully designed activities that harmonize with the natural beauty and culture of Shimla.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

<div className="p-5 md:p-6 rounded-3xl bg-zinc-50/80 border border-zinc-100 hover:bg-zinc-100 transition-colors group flex flex-col justify-between aspect-square">
<div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300">
<iconify-icon icon="solar:waterdrop-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm md:text-base font-semibold text-zinc-900 mb-1">Swimming</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Infinity pools overlooking the majestic valleys.</p>
</div>
</div>

<div className="p-5 md:p-6 rounded-3xl bg-zinc-50/80 border border-zinc-100 hover:bg-zinc-100 transition-colors group flex flex-col justify-between aspect-square">
<div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:text-emerald-500 transition-all duration-300">
<iconify-icon icon="solar:flag-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm md:text-base font-semibold text-zinc-900 mb-1">Golf Getaways</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Exclusive access to premier high-altitude golf courses.</p>
</div>
</div>

<div className="p-5 md:p-6 rounded-3xl bg-zinc-50/80 border border-zinc-100 hover:bg-zinc-100 transition-colors group flex flex-col justify-between aspect-square">
<div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:text-rose-400 transition-all duration-300">
<iconify-icon icon="solar:bath-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm md:text-base font-semibold text-zinc-900 mb-1">In-Suite Spa</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Bespoke wellness treatments in your room.</p>
</div>
</div>

<div className="p-5 md:p-6 rounded-3xl bg-zinc-50/80 border border-zinc-100 hover:bg-zinc-100 transition-colors group flex flex-col justify-between aspect-square lg:col-span-1 md:col-span-3 lg:col-span-auto">
<div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:text-amber-500 transition-all duration-300">
<iconify-icon icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm md:text-base font-semibold text-zinc-900 mb-1">Cultural Tours</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Guided heritage walks through Shimla's historic paths.</p>
</div>
</div>

<div className="p-5 md:p-6 rounded-3xl bg-zinc-50/80 border border-zinc-100 hover:bg-zinc-100 transition-colors group flex flex-col justify-between aspect-square">
<div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:text-orange-500 transition-all duration-300">
<iconify-icon icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm md:text-base font-semibold text-zinc-900 mb-1">Cooking Masterclass</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Learn authentic Himalayan recipes with our chefs.</p>
</div>
</div>

<div className="p-5 md:p-6 rounded-3xl bg-zinc-50/80 border border-zinc-100 hover:bg-zinc-100 transition-colors group flex flex-col justify-between aspect-square">
<div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm md:text-base font-semibold text-zinc-900 mb-1">Chauffeured Trips</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Luxury private transport for local sightseeing.</p>
</div>
</div>

<div className="p-5 md:p-6 rounded-3xl bg-zinc-50/80 border border-zinc-100 hover:bg-zinc-100 transition-colors group flex flex-col justify-between aspect-square md:col-span-2">
<div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:text-teal-500 transition-all duration-300">
<iconify-icon icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm md:text-base font-semibold text-zinc-900 mb-1">Yoga &amp; Meditation</h3>
<p className="text-xs text-zinc-500 max-w-xs">Sunrise sessions guided by experts in our open-air mountain pavilion, designed to rejuvenate mind and soul.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-zinc-900 text-white overflow-hidden" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">A Glimpse of Shimla Heights</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-xl font-light">Explore the breathtaking visuals of our property, where every corner frames a picture-perfect moment.</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[200px]">

<div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Mountain View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-sm font-medium tracking-tight">Snow-capped Peaks</span>
</div>
</div>

<div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group hidden md:block">
<img alt="Interior Details" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621817362848-ee5b1e008bfc?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Dining Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-sm font-medium tracking-tight">Artisan Dining</span>
</div>
</div>

<div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group hidden md:block">
<img alt="Wellness Spa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-2 md:col-span-3 row-span-1 rounded-3xl overflow-hidden relative group">
<img alt="Lounge Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551882547-ff40c6658bbd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-12 md:py-16 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-xl font-semibold tracking-tighter text-white">SML.</span>
<p className="text-xs text-zinc-500">© 2024 Shimla Heights. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Resort</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
