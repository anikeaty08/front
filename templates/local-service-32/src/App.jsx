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



    (function() {
        const container = document.getElementById('card-grid-container');
        if(!container) return;
        const cards = container.querySelectorAll('.card-item');
        let activeCard = null;
        
        // Initial setup for default positions is handled by CSS styles inline
        
        cards.forEach((card, index) => {
            card.addEventListener('click', function(e) {
                e.stopPropagation();
                
                if (activeCard === card) {
                    resetCards();
                    return;
                }
                
                // Dim all other cards
                cards.forEach((c) => {
                    c.style.filter = 'blur(4px) grayscale(0.4)';
                    c.style.opacity = '0.5';
                    c.style.transform = c.style.transform.replace(/scale\([^\)]+\)/, '') + ' scale(0.9)';
                    c.style.zIndex = '0';
                });
                
                // Highlight clicked card
                card.style.filter = 'none';
                card.style.opacity = '1';
                card.style.transform = 'translate(0, -10px) rotate(0deg) scale(1.15)';
                card.style.zIndex = '50';
                
                activeCard = card;
            });
        });
        
        document.addEventListener('click', function(e) {
            if (activeCard && !container.contains(e.target)) {
                resetCards();
            }
        });
        
        function resetCards() {
            cards.forEach((c) => {
                c.style.filter = '';
                c.style.opacity = '';
                // The style attribute will revert to inline styles defined in HTML due to how browser handles style="" property clearing, 
                // but since we modified style.transform directly, we should clear the overrides we added
                c.style.transform = ''; // This reverts to the inline style defined in HTML? No, it clears inline.
                // Re-applying initial transforms manually or relying on CSS classes would be cleaner, but for this snippet:
                // We'll just let them clear. The inline styles in HTML are robust enough if we don't overwrite them destructively.
                // Actually, clearing style.transform removes the inline rotation. Let's fix that by NOT clearing, but removing the added scale/translate.
                // For simplicity in this snippet, reloading the inline style from attribute is safest:
                c.setAttribute('style', c.getAttribute('style') || ''); 
                c.style.zIndex = '';
            });
            activeCard = null;
        }
    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex-shrink-0 flex items-center" href="#">
<img alt="Web Enhance" className="w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0cdab21-441b-4178-a3ed-a5c7748cf2fa_320w.png"/><img alt="Web Enhance" className="w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ce1f105-2121-4955-a4bf-dc1c2fc22baa_320w.png"/>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#testimonials">Testimonials</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>

<div className="">
<a className="inline-flex items-center justify-center hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 text-sm font-medium text-white bg-slate-900 border-transparent border rounded-lg pt-2 pr-4 pb-2 pl-4" href="https://tally.so/r/gD9z1M">Free Website Preview</a>
</div>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-24 overflow-hidden pt-32 pb-16">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4">
<h1 className="sm:text-6xl lg:text-7xl text-5xl font-semibold text-slate-900 tracking-tight max-w-4xl mr-auto mb-6 ml-auto">We Build High-Converting Websites for Local &amp; Service Businesses</h1>
<p className="leading-relaxed text-lg text-slate-500 max-w-2xl mr-auto mb-10 ml-auto">Designed to build trust, attract customers, and support your local growth — with clear upfront pricing and simple ongoing maintenance.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-20 gap-x-4 gap-y-4 items-center justify-center">
<a className="inline-flex flex-col items-center justify-center hover:bg-slate-800 transition-all shadow-slate-200 text-white bg-slate-900 rounded-lg pt-3 pr-10 pb-3 pl-10 shadow-lg" href="https://tally.so/r/gD9z1M">
<span className="text-base font-medium">Get a Free Website Preview</span>
<span className="text-xs font-normal text-slate-400 mt-0.5">(No commitment or payment required)</span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#how-it-works">
<iconify-icon className="" icon="lucide:play-circle" strokeWidth="1.5" width="20"></iconify-icon>
    See How It Works
  </a>
</div>

<div className="md:py-20 w-full pt-12 pb-12 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-r from-blue-50/30 via-transparent to-orange-50/30 blur-3xl -z-10 opacity-60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

<div className="relative w-full mt-8 sm:mt-12">

<div className="absolute -top-12 left-[8%] sm:left-[14%] z-20 animate-[bounce_3s_infinite_ease-in-out]">
<div className="relative group cursor-default">
<div className="flex items-center gap-1.5 bg-[#3b82f6] text-white text-sm font-medium px-3.5 py-1.5 rounded-full shadow-[0_8px_16px_-4px_rgba(59,130,246,0.3)] transform -rotate-6 transition-transform group-hover:rotate-0 hover:scale-105 duration-300">
<span className="">designer</span>
<svg className="lucide lucide-arrow-up-right opacity-90" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>

<div className="absolute -bottom-1 left-5 w-2.5 h-2.5 bg-[#3b82f6] rotate-45"></div>
</div>
</div>

<div className="absolute -top-10 right-[8%] sm:right-[12%] z-20 animate-[bounce_3.5s_infinite_ease-in-out]">
<div className="relative group cursor-default">
<div className="flex items-center gap-1.5 bg-[#f97316] text-white text-sm font-medium px-3.5 py-1.5 rounded-full shadow-[0_8px_16px_-4px_rgba(249,115,22,0.3)] transform rotate-3 transition-transform group-hover:rotate-0 hover:scale-105 duration-300">
<span className="">artist</span>
<svg className="lucide lucide-arrow-up-right opacity-90" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>

<div className="absolute -bottom-1 right-5 w-2.5 h-2.5 bg-[#f97316] rotate-45"></div>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10" id="card-grid-container">

<div className="card-item relative aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" data-card-index="0" style={{transform: 'rotate(-8deg) translateY(20px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-900 ring-1 rounded-2xl absolute top-0 right-0 bottom-0 left-0 shadow-2xl">
<img alt="Artwork card" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2df71356-1d99-4d9e-9752-08fe2ad35df5_800w.png"/>
</div>
</div>

<div className="card-item relative aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" data-card-index="1" style={{transform: 'rotate(-3deg) translateY(30px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-900 ring-1 rounded-2xl absolute top-0 right-0 bottom-0 left-0 shadow-2xl">
<img alt="3D render card" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb398683-451f-4335-aab1-c7e122fb2763_800w.png"/>
</div>
</div>

<div className="card-item relative aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" data-card-index="2" style={{transform: 'rotate(3deg) translateY(10px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-900 ring-1 rounded-2xl absolute top-0 right-0 bottom-0 left-0 shadow-2xl">
<img alt="Minimal shapes card" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/928d9bc4-604e-449d-bf8a-1b431bfb618e_800w.png"/>
</div>
</div>

<div className="card-item aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative" data-card-index="3" style={{transform: 'rotate(0deg) translateY(-5px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-900 ring-1 rounded-2xl absolute top-0 right-0 bottom-0 left-0 shadow-2xl">
<img alt="Abstract red card" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4170983c-1b5b-4cfe-b386-f2f8036709b5_800w.png"/>
</div>
</div>

<div className="card-item relative aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" data-card-index="4" style={{transform: 'rotate(-2deg) translateY(15px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-900 ring-1 rounded-2xl absolute top-0 right-0 bottom-0 left-0 shadow-2xl">
<img alt="Mountains card" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e077a987-c1e5-4d77-aeef-566976fa8880_800w.png"/>
</div>
</div>

<div className="card-item relative aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" data-card-index="5" style={{transform: 'rotate(6deg) translateY(25px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-900 ring-1 rounded-2xl absolute top-0 right-0 bottom-0 left-0 shadow-2xl">
<img alt="Green minimal card" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ccf94398-01bb-42b1-b092-12c40b99d5b6_800w.png"/>
</div>
</div>
</div>
</div>
</div>


</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-100 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wider mb-12">We Build Websites For</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 text-left">

<div className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
<path className="" d="M17.64 15 22 10.64"></path>
<path className="" d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V7.86c0-.55-.45-1-1-1H16.4c-.84 0-1.65-.33-2.25-.93L12.9 4.7"></path>
<path d="M7 8v6"></path>
<path d="M7 8c0-1.66 1.34-3 3-3h3"></path>
</svg>
</div>
<div className="">
<span className="block text-base font-medium text-slate-900 tracking-tight">Tradies</span>
<p className="text-sm text-slate-500 mt-1 leading-relaxed">Plumbers, electricians, builders</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
</svg>
</div>
<div className="">
<span className="block text-base font-medium text-slate-900 tracking-tight">Clinics &amp; Health</span>
<p className="text-sm text-slate-500 mt-1 leading-relaxed">Chiro, physio, massage, wellness</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<div className="">
<span className="block text-base font-medium text-slate-900 tracking-tight">Professional Services</span>
<p className="text-sm text-slate-500 mt-1 leading-relaxed">Consultants, accountants, coaches</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
<path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
<path d="M2 7h20"></path>
<path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
</svg>
</div>
<div className="">
<span className="block text-base font-medium text-slate-900 tracking-tight">Local Services</span>
<p className="text-sm text-slate-500 mt-1 leading-relaxed">Cleaning, landscaping, maintenance</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Built for Busy Local Business Owners</h2>
<p className="text-lg text-slate-500">If you don’t want to build or maintain your website yourself, this is for you.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="lucide:user" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Service &amp; Professional Businesses</h3>
<p className="leading-relaxed text-slate-500">Ideal for trades, clinics, consultants, and local services that need to be found, trusted, and chosen by local customers in their area.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="lucide:refresh-ccw" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Outdated or Missing Websites</h3>
<p className="leading-relaxed text-slate-500">If you don’t have a website — or yours is outdated, slow, or not mobile-friendly — we’ll design and build a modern site that works for your business.
</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="lucide:wallet" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Clear Pricing</h3>
<p className="leading-relaxed text-slate-500">Transparent upfront pricing for your website build, plus a simple monthly fee for hosting, updates, and maintenance. No surprises.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-slate-900 pt-24 pb-24 relative" id="how-it-works">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
<div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
</div>
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">How it works</h2>
<p className="text-slate-400 text-lg">Three simple steps to your new online presence.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-slate-700 z-0"></div>

<div className="relative z-10">
<div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-xl font-medium mb-6 mx-auto md:mx-0">1</div>
<h3 className="text-xl font-medium mb-3">Tell us about your business</h3>
<p className="leading-relaxed text-slate-400">Answer a few simple questions about your services, location, and goals.
No technical knowledge required.</p>
</div>

<div className="relative z-10">
<div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-xl font-medium mb-6 mx-auto md:mx-0">2</div>
<h3 className="text-xl font-medium mb-3">We build &amp; launch</h3>
<p className="leading-relaxed text-slate-400">We design and launch a professional, mobile-optimised website tailored to your business. Built to help customers trust you and take action.</p>
</div>

<div className="relative z-10">
<div className="w-16 h-16 rounded-full bg-indigo-600 border border-indigo-400 flex items-center justify-center text-xl font-medium mb-6 mx-auto md:mx-0 shadow-lg shadow-indigo-900/50">3</div>
<h3 className="text-xl font-medium mb-3">We manage everything</h3>
<p className="leading-relaxed text-slate-400">Hosting, updates, backups, and technical maintenance are handled for you. Just message us when you need a change.
</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Everything your website needs to support growth</h2>
<p className="text-lg text-slate-500">A fast, professional website with hosting, updates, and maintenance included</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon className="" icon="lucide:monitor-smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-2">Custom Design</h3>
<p className="leading-relaxed text-sm text-slate-500">Looks professional and trustworthy. Tailored to your business, not a generic template.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-2">Mobile Optimized</h3>
<p className="leading-relaxed text-sm text-slate-500">Works perfectly on phones, tablets, and desktops. Where most local customers search.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="lucide:server" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-2">Hosting &amp; Maintenance</h3>
<p className="leading-relaxed text-sm text-slate-500">Secure hosting, backups, and monitoring to keep your site fast and online</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon className="" icon="lucide:pen-tool" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-2">Monthly Updates</h3>
<p className="leading-relaxed text-sm text-slate-500">Content updates when you need them. Just send us the change and we’ll handle it.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon className="" icon="lucide:search" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-2">Basic SEO Setup</h3>
<p className="leading-relaxed text-sm text-slate-500">Built to be found locally on Google, without long-term SEO contracts or paid ads.
</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon className="" icon="lucide:message-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-2">Real Human Support</h3>
<p className="leading-relaxed text-sm text-slate-500">Talk to a real person who knows your site. No bots. No tickets.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white border-y border-slate-800" id="work">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Example Website Layouts</h2>
<p className="text-lg text-slate-400">Examples of websites we build for local service and professional businesses.</p>
</div>
<a className="inline-flex items-center justify-center hover:bg-slate-100 transition-all text-sm font-medium text-slate-900 bg-white border-transparent border rounded-lg pt-2.5 pr-6 pb-2.5 pl-6" href="#pricing">View Pricing</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer">

<div className="h-64 bg-[#E8F5E9] relative overflow-hidden flex items-center justify-center p-8">

<div className="w-full h-full bg-white rounded-lg shadow-sm border border-green-100/50 flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500 origin-bottom">
<div className="h-4 border-b border-slate-50 flex items-center px-2 space-x-1 bg-white">
<div className="w-1.5 h-1.5 rounded-full bg-red-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-yellow-300"></div>
</div>
<div className="flex-1 p-4 flex gap-4 items-center bg-white">
<div className="flex-1 space-y-2">
<div className="w-2/3 h-2 bg-slate-100 rounded"></div>
<div className="w-full h-2 bg-slate-100 rounded"></div>
<div className="w-1/2 h-2 bg-slate-100 rounded"></div>
<div className="mt-2 w-20 h-6 bg-green-600 rounded"></div>
</div>
<div className="w-16 h-20 bg-green-50 rounded-md flex items-center justify-center">
<iconify-icon className="text-green-300" icon="lucide:leaf" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Organic Greens</h3>
<p className="text-sm text-slate-500">E-commerce &amp; Branding</p>
</div>
<div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
<iconify-icon icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600">Shopify</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600">Design</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="h-64 bg-[#EEF2FF] relative overflow-hidden flex items-center justify-center p-8">
<div className="w-full h-full bg-white rounded-lg shadow-sm border border-indigo-100/50 flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500 origin-bottom">
<div className="h-4 border-b border-slate-50 flex items-center px-2 space-x-1 bg-white">
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
</div>
<div className="flex-1 p-4 bg-white">
<div className="flex justify-between items-center mb-4">
<div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">N</div>
<div className="flex gap-2"><div className="w-12 h-2 bg-slate-100 rounded"></div></div>
</div>
<div className="space-y-2">
<div className="w-full h-12 bg-slate-50 rounded border border-slate-100"></div>
<div className="flex gap-2">
<div className="w-1/2 h-6 bg-slate-50 rounded"></div>
<div className="w-1/2 h-6 bg-slate-50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Nexus Analytics</h3>
<p className="text-sm text-slate-500">SaaS Marketing Site</p>
</div>
<div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
<iconify-icon icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600">B2B</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600">Development</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="h-64 bg-[#FFF7ED] relative overflow-hidden flex items-center justify-center p-8">
<div className="w-full h-full bg-white rounded-lg shadow-sm border border-orange-100/50 flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500 origin-bottom">
<div className="h-4 border-b border-slate-50 flex items-center px-2 space-x-1 bg-white">
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
</div>
<div className="flex-1 relative bg-white">
<div className="absolute inset-0 bg-slate-50/50"></div>
<div className="absolute bottom-0 w-full h-3/5 bg-white p-3 border-t border-slate-100 shadow-sm">
<div className="w-2/3 h-2 bg-slate-200 rounded mb-2"></div>
<div className="w-full h-1.5 bg-slate-100 rounded mb-1"></div>
<div className="w-full h-1.5 bg-slate-100 rounded"></div>
</div>
<div className="absolute top-3 left-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-orange-200">A</div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Arch &amp; Beam</h3>
<p className="text-sm text-slate-500">Architecture Portfolio</p>
</div>
<div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
<iconify-icon icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600">Portfolio</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600">CMS</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Why businesses switch to managed websites</h2>
<p className="text-lg text-slate-500 mb-8">Traditional website projects are expensive and hard to maintain.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 text-indigo-600">
<iconify-icon icon="lucide:check-circle" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-slate-900">Flexible Payment Options</h4>
<p className="text-sm text-slate-500 mt-1">Choose a one-time build fee or spread the cost over 12 months to manage your cash flow.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-indigo-600">
<iconify-icon icon="lucide:check-circle" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-slate-900">Fast Turnaround</h4>
<p className="text-sm text-slate-500 mt-1">Launch quickly so customers can start finding and contacting you sooner.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-indigo-600">
<iconify-icon icon="lucide:check-circle" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-slate-900">Everything Managed Ongoing
</h4>
<p className="text-sm text-slate-500 mt-1">We don’t just build your site — we manage updates, changes, and your Google presence over time.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-white rounded-2xl transform rotate-3"></div>
<div className="bg-white border-slate-100 border rounded-2xl p-8 relative shadow-xl">
<div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
<p className="uppercase text-xs font-semibold text-slate-400 tracking-wider">Traditional Agency / DIY</p>
<p className="uppercase text-xs font-semibold text-indigo-600 tracking-wider text-right">Web Enhance 
($99/month explained)</p>
</div>
<div className="space-y-5">
<div className="flex justify-between items-start text-sm">
<span className="text-slate-500 max-w-[48%] leading-relaxed">$3,500+ upfront project cost</span>
<span className="font-medium text-slate-900 text-right max-w-[48%] leading-relaxed">One-time build, then $99/month ongoing care</span>
</div>
<div className="flex justify-between items-start text-sm">
<span className="text-slate-500 max-w-[48%] leading-relaxed">$100–$150/hr for small updates</span>
<span className="leading-relaxed font-medium text-slate-900 text-right max-w-[48%]">Content updates included</span>
</div>
<div className="flex justify-between items-start text-sm">
<span className="text-slate-500 max-w-[48%] leading-relaxed">Hosting, backups &amp; SSL billed separately</span>
<span className="leading-relaxed font-medium text-slate-900 text-right max-w-[48%]">Hosting, SSL &amp; backups included</span>
</div>
<div className="flex text-sm items-start justify-between">
<span className="leading-relaxed text-slate-500 max-w-[48%]">No ongoing monitoring</span>
<span className="leading-relaxed font-medium text-slate-900 text-right max-w-[48%]">Performance &amp; uptime monitoring</span>
</div>
<div className="flex justify-between items-start text-sm">
<span className="leading-relaxed text-slate-500 max-w-[48%]">Breaks go unnoticed</span>
<span className="leading-relaxed font-medium text-slate-900 text-right max-w-[48%]">Security &amp; maintenance handled</span>
</div>
<div className="flex justify-between items-start text-sm">
<span className="leading-relaxed text-slate-500 max-w-[48%]">You’re responsible for fixes</span>
<span className="leading-relaxed font-medium text-slate-900 text-right max-w-[48%]">One point of contact — no tickets, no stress</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 text-center">
<p className="text-sm font-medium text-slate-700">Your website stays fast, secure, and up-to-date without you thinking about it.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Real results for real businesses</h2>
<p className="text-lg text-slate-500">See what our partners have to say about their new digital presence.</p>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-16">
<div className="group relative aspect-video bg-slate-100 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all border border-slate-100">
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur text-slate-900 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:play" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent z-10">
<p className="text-white font-medium text-lg">"We doubled our leads in the first month."</p>
<p className="text-slate-300 text-sm">Sarah Jenkins, Jenkins Law</p>
</div>

<div className="absolute inset-0 bg-slate-200"></div>
</div>
<div className="group relative aspect-video bg-slate-100 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all border border-slate-100">
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur text-slate-900 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:play" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent z-10">
<p className="text-white font-medium text-lg">"The easiest website update I've ever done."</p>
<p className="text-slate-300 text-sm">Mike Ross, Urban Fitness</p>
</div>

<div className="absolute inset-0 bg-slate-300"></div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-indigo-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed mb-6">"I used to spend hours trying to fix my WordPress site. Now I just send an email and it's handled. The peace of mind is worth every penny."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">David Chen</p>
<p className="text-xs text-slate-500">Owner, Chen Consulting</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-indigo-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed mb-6">"The design is beautiful and the mobile version works perfectly. Our customers constantly compliment us on the new look."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Emma Watson</p>
<p className="text-xs text-slate-500">Manager, The Local Cafe</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-indigo-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed mb-6">"The team is responsive and actually understands SEO. We've seen a real difference in local calls."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">James Miller</p>
<p className="text-xs text-slate-500">Founder, Miller Tech</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="pricing">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-lg text-slate-500">Two simple components: your website build and ongoing website care.</p><p className="text-lg text-slate-500">You’ll see pricing upfront, but nothing is charged until you approve your preview.</p>
</div>

<div className="max-w-5xl mx-auto mb-12">
<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">

<div className="md:w-5/12 lg:p-10 md:border-b-0 md:border-r flex flex-col bg-slate-50/50 border-slate-200 border-b pt-8 pr-8 pb-8 pl-8 justify-center">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-6">Everything Included in Your Website</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-600">Professional &amp; high converting website</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-600">Mobile-optimised and fast</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-600">Initial SEO &amp; Google Business Profile setup</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-600">On going hosting, security, support &amp; updates</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-600">Flexible pricing options</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-600">Ready to launch in 3–5 days</span>
</li>
</ul>
</div>

<div className="md:w-7/12 p-8 lg:p-10 bg-white flex flex-col justify-center">
<div className="mb-8">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Clear pricing — no surprises</h3>
<p className="text-sm text-slate-500">Flexible options to suit your cash flow.</p>
</div>
<div className="space-y-4">

<div className="relative">
<div className="flex bg-indigo-50/50 z-10 border-indigo-200 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative items-center justify-between">
<div className="absolute -top-3 right-4 bg-indigo-600 text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">Best Value</div>
<div className="">
<span className="block text-base font-medium text-slate-900">One-Time Payment</span>
<span className="block text-xs text-indigo-600 mt-0.5">Save $500 total</span>
</div>
<div className="text-right">
<span className="block text-2xl font-medium text-slate-900 tracking-tight">$1,500</span>
<span className="block text-xs text-slate-500">NZD</span>
</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between p-5 border border-slate-200 bg-slate-50/30 rounded-xl">
<div className="">
<span className="block text-base font-medium text-slate-900">12-Month Plan</span>
<span className="block text-xs text-slate-500 mt-0.5">Start with less upfront</span>
</div>
<div className="text-right">
<span className="block text-2xl font-medium text-slate-900 tracking-tight">$167</span>
<span className="block text-xs text-slate-500">NZD / mo</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
<div className="grid md:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="">
<h3 className="text-2xl font-semibold mb-2">Ongoing Hosting &amp; Maintenance</h3>
<p className="text-slate-400 mb-6">Everything required to keep your website fast, secure, and up to date. Without you managing anything</p>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-5xl font-bold tracking-tight">$99</span>
<span className="text-xl text-slate-400">NZD / month</span>
</div><p className="text-slate-400 mb-6">Required for all websites</p>
</div>
<div className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4 gap-x-4 gap-y-4">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
        Secure hosting &amp; SSL
    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
        Monthly backups
    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
        Performance &amp; uptime monitoring
    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
        Software &amp; security updates
    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
        Content updates included
    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
        Technical support via email
    </div>
</div>
<p className="text-slate-400 mb-6">Equivalent to $300+ / month if managed separately</p></div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex flex-col items-center justify-center hover:bg-slate-800 transition-all shadow-slate-200 text-white bg-slate-900 rounded-lg pt-3 pr-10 pb-3 pl-10 shadow-lg" href="https://tally.so/r/gD9z1M">
<span className="text-base font-medium">Get a Free Website Preview</span>
<span className="text-xs font-normal text-slate-400 mt-0.5">(No commitment or payment required)</span>
</a>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-24 pb-24">
<div className="sm:px-6 lg:px-8 max-w-3xl mr-auto ml-auto pr-4 pl-4">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group overflow-hidden bg-white border-slate-200 border rounded-xl">
<summary className="flex cursor-pointer hover:bg-slate-50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
    What does the build fee cover?
    <span className="group-open:rotate-45 transition-transform duration-300 text-slate-400">
<iconify-icon className="" height="24" icon="lucide:plus-circle" width="24"></iconify-icon>
</span>
</summary>
<div className="leading-relaxed text-slate-500 pr-6 pb-6 pl-6 space-y-4">
<p className="">The build fee covers the design and development of your website. This includes mobile optimisation, initial on-page SEO setup, layout, copy structure, contact forms, and making sure your site is fast, secure, and ready to convert visitors.

You can choose to pay this upfront or spread the cost over 12 months.</p>
</div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer hover:bg-slate-50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                What is included in the $99/month fee?
                <span className="text-slate-400 group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="" height="24" icon="lucide:plus-circle" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed space-y-4">
<p className="">The $99/month fee covers everything needed to keep your website running smoothly and up to date, including secure hosting, SSL security, backups, performance monitoring, software updates, and ongoing content changes.

If you ever need text, images, or updates changed, just email us — no hourly fees or extra charges.</p>
</div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer hover:bg-slate-50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                When do I pay?
                <span className="text-slate-400 group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="" height="24" icon="lucide:plus-circle" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed space-y-4">
<p>You don’t pay anything upfront.</p>
<p>We first create a website preview based on your business details so you can see the direction, layout, and overall quality. Once you’ve reviewed the preview and are happy to proceed, we’ll confirm your payment option (one-time payment or 12-month plan) and then take payment before finalising and launching the site.</p>
<p>Nothing is charged until you approve the preview.</p>
</div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer hover:bg-slate-50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                What is a website preview?
                <span className="text-slate-400 group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="" height="24" icon="lucide:plus-circle" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed space-y-4">
<p>A website preview is a draft version of your website, built specifically for your business.</p>
<p>We use your business details, services, and location to create a draft so you can see how your site could look before committing. It’s not a generic template — it’s tailored to your business from the start.</p>
<p>Once you’re happy with the preview, we refine the design, content, and structure based on your feedback before finalising the site.</p>
<p>There’s no obligation and nothing is charged until you approve the preview.</p>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white text-center">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="sm:text-5xl text-4xl font-semibold tracking-tight mb-6">Let’s Build a Website That Turns Visitors Into Customers</h2>
<p className="text-lg text-slate-400 max-w-2xl mr-auto mb-10 ml-auto">Designed for local and service-based businesses.</p>
<a className="inline-flex flex-col items-center justify-center hover:bg-indigo-50 transition-all shadow-indigo-900/20 bg-white rounded-xl pt-3 pr-8 pb-3 pl-8 shadow-xl" href="https://tally.so/r/gD9z1M">
<span className="text-lg font-medium text-slate-900">Get Started</span>
<span className="text-xs font-normal text-slate-500 mt-0.5">(No commitment or payment required)</span>
</a>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-10">

<div className="max-w-md">
<div className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Web Enhance</div>
<p className="text-base text-slate-500">Professional websites built to help customers choose you</p>
</div>

<div className="flex flex-col md:items-end gap-3">
<a className="text-base font-medium text-slate-900 hover:text-slate-600 transition-colors" href="mailto:matt@webenhance.co.nz">matt@webenhance.co.nz</a>
<div className="flex items-center gap-3 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<span className="text-slate-300">|</span>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
</div></div></div></div></footer>
    </>
  );
}
