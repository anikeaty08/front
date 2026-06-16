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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 z-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center text-white group-hover:rotate-3 transition-transform duration-300">
<i className="w-3.5 h-3.5" data-lucide="paw-print"></i>
</div>
<span className="font-semibold tracking-tighter text-lg">KIVRA</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium" href="#">Safety</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium" href="#">How it works</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm font-medium text-zinc-600 hover:text-zinc-900 px-3 py-2" href="#">Log in</a>
<a className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-lg shadow-lg shadow-zinc-900/10 hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden hero-mesh">
<div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 tracking-tight">Now live in Bangalore &amp; Mumbai</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.1]">
                Care for your pets,<br/>
<span className="text-zinc-400">worry-free.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Connect with verified neighbors to care for your loved ones when you're away. Fully insured, vetted, and trusted.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-zinc-900 text-white font-medium text-sm shadow-xl shadow-zinc-900/10 hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="search"></i>
                    Find a Sitter
                </button>
<button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-white border border-zinc-200 text-zinc-700 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="heart-handshake"></i>
                    Become a Host
                </button>
</div>

<div className="relative max-w-4xl mx-auto mt-8 perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-2xl blur opacity-30"></div>

<div className="relative bg-white border border-zinc-200 rounded-xl shadow-2xl overflow-hidden float-card">

<div className="h-10 border-b border-zinc-100 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
</div>
<div className="mx-auto w-1/3 h-1.5 bg-zinc-100 rounded-full"></div>
</div>

<div className="p-6 bg-zinc-50/50 text-left grid md:grid-cols-2 gap-6">

<div className="space-y-4">
<div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<div>
<div className="h-2.5 w-24 bg-zinc-200 rounded-full mb-1.5"></div>
<div className="h-2 w-16 bg-zinc-100 rounded-full"></div>
</div>
</div>
<div className="h-2 w-full bg-zinc-100 rounded-full mb-2"></div>
<div className="h-2 w-2/3 bg-zinc-100 rounded-full"></div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100 opacity-60">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
<div className="flex-1">
<div className="h-2.5 w-20 bg-zinc-200 rounded-full mb-1.5"></div>
<div className="h-2 w-12 bg-zinc-100 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex flex-col justify-center items-center text-center space-y-3">
<div className="w-16 h-16 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center shadow-sm">
<i className="w-8 h-8 text-zinc-900" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Verified Sitters</h3>
<p className="text-xs text-zinc-500 mt-1">Every host passes a background check.</p>
</div>
<button className="mt-2 px-4 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-md">View Profile</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<p className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-8">Trusted by pet parents at</p>
<div className="marquee-container overflow-hidden">
<div className="flex justify-center gap-12 opacity-50 grayscale">

<span className="text-lg font-bold text-zinc-800 font-serif italic">VoguePet</span>
<span className="text-lg font-bold text-zinc-800 tracking-tighter">WAGS</span>
<span className="text-lg font-bold text-zinc-800 uppercase">Bark&amp;Co</span>
<span className="text-lg font-bold text-zinc-800 font-mono">PET.IO</span>
<span className="text-lg font-bold text-zinc-800">TheDailyTail</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Safety first, always.</h2>
<p className="text-zinc-500 max-w-lg">We've built a platform where trust is the foundation. Every feature is designed to give you peace of mind.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 bg-zinc-50/30 hover:bg-zinc-50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm">
<i className="w-5 h-5 text-zinc-900" data-lucide="scan-face"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Identity Verification</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Every sitter provides government ID and passes a mandatory background check before joining.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 bg-zinc-50/30 hover:bg-zinc-50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm">
<i className="w-5 h-5 text-zinc-900" data-lucide="shield"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Premium Insurance</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Every booking is covered by our premium insurance, protecting your pet and your home.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 bg-zinc-50/30 hover:bg-zinc-50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm">
<i className="w-5 h-5 text-zinc-900" data-lucide="image"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Photo Updates</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Get GPS-tracked walk maps and cute photo updates sent directly to your phone daily.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-100 bg-zinc-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8">How Kivra works</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-medium text-sm">1</div>
<div>
<h3 className="text-base font-medium text-zinc-900">Search nearby</h3>
<p className="text-sm text-zinc-500 mt-1">Browse profiles, read reviews, and see who's available in your neighborhood.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-zinc-200 text-zinc-900 flex items-center justify-center font-medium text-sm">2</div>
<div>
<h3 className="text-base font-medium text-zinc-900">Meet &amp; Greet</h3>
<p className="text-sm text-zinc-500 mt-1">Schedule a free meet and greet to ensure your pet and the sitter are a perfect match.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-zinc-200 text-zinc-900 flex items-center justify-center font-medium text-sm">3</div>
<div>
<h3 className="text-base font-medium text-zinc-900">Book &amp; Relax</h3>
<p className="text-sm text-zinc-500 mt-1">Pay securely through Kivra. Enjoy your trip while getting daily updates.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-zinc-200 max-w-md mx-auto rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover border border-zinc-100" src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-zinc-900">Sarah J.</div>
<div className="flex text-yellow-400 text-[10px] gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">Available</span>
</div>
<div className="space-y-2">
<div className="h-20 bg-zinc-50 rounded-lg border border-zinc-100 w-full flex items-center justify-center text-zinc-400 text-xs">
<div className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="map-pin"></i>
                                    Map Preview
                                </div>
</div>
<button className="w-full py-2 bg-zinc-900 text-white text-xs font-medium rounded-lg">Contact Sarah</button>
</div>
</div>

<div className="absolute top-10 -right-4 w-full h-full bg-zinc-200 rounded-2xl -z-10 opacity-50 rotate-6 scale-95"></div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="bg-zinc-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Ready to find the perfect care?</h2>
<p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">Join thousands of happy pets and their owners on Kivra today.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 bg-white text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-100 transition-colors">
                            Get Started for Free
                        </button>
<button className="px-8 py-3 bg-transparent border border-zinc-700 text-white rounded-lg font-medium text-sm hover:bg-zinc-800 transition-colors">
                            Download App
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-100 py-12 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="paw-print"></i>
</div>
<span className="font-semibold tracking-tight text-sm">KIVRA</span>
</div>
<p className="text-xs text-zinc-500">Made with love for our furry friends.</p>
</div>
<div>
<h4 className="font-medium text-sm text-zinc-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">About</a></li>
<li><a className="hover:text-zinc-900" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-zinc-900 mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Blog</a></li>
<li><a className="hover:text-zinc-900" href="#">Safety</a></li>
<li><a className="hover:text-zinc-900" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-zinc-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Terms</a></li>
<li><a className="hover:text-zinc-900" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 Kivra Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-600" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-zinc-400 hover:text-zinc-600" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-zinc-400 hover:text-zinc-600" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
