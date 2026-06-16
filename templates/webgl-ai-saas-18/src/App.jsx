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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed mix-blend-overlay top-0 right-0 bottom-0 left-0"></div>

<nav className="fixed z-40 bg-neutral-800/80 border-white/10 rounded-lg border-b mt-12 mr-12 ml-12 top-0 right-0 left-0 backdrop-blur-xl gap-x-8 gap-y-8">
<div className="flex w-full max-w-full mt-1 pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-lg font-medium text-white tracking-tight">Staugaard Studio</span>
</a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-colors uppercase text-sm text-neutral-200 tracking-widest font-mono" href="#projects">Cases</a>
<a className="hover:text-white transition-colors uppercase text-sm text-neutral-200 tracking-widest font-mono" href="/#proces">Proces</a>
<a className="hover:text-white transition-colors uppercase text-sm text-neutral-200 tracking-widest font-mono" href="/#services">Services</a>
<a className="hover:text-white transition-colors uppercase text-sm text-neutral-200 tracking-widest font-mono" href="#testimonials">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 uppercase hover:bg-white transition-colors text-xs font-medium text-black tracking-widest bg-neutral-200 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5" href="#contact">
          Book gratis sparring <iconify-icon className="text-[14px]" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="max-w-full z-10 mr-auto ml-auto pt-6 pr-6 pb-20 pl-6 relative">

<section className="grid grid-cols-1 min-h-[calc(100vh-1.5rem)] lg:grid-cols-2 rounded-xl pt-8 pr-8 pb-8 pl-8 relative items-center" style={{overflow: 'hidden'}}>

<div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true">
<div className="absolute top-0 left-0 -z-10 w-full h-full filter hue-rotate-[200deg] saturate-[1.5]" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>

</div>

<div className="flex flex-col order-2 lg:order-1 z-10 pt-10 relative gap-x-8 gap-y-8 items-start">

<div className="animate-fade-up delay-100 flex uppercase text-xs text-neutral-400 tracking-widest font-mono pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">[ WEBDESIGN TIL SMV'er ]</div>

<h1 className="animate-fade-up delay-200 md:text-7xl leading-[1.05] uppercase text-5xl font-normal text-white tracking-tight">Hjemmesider der skaber værdi</h1>

<p className="animate-fade-up delay-300 md:text-lg leading-relaxed text-base font-light text-neutral-400 max-w-xl">Jeg skaber skræddersyet webdesign til ambitiøse virksomheder, der vil vinde markedet. Jeg designer din digitale tilstedeværelse med afsæt i dine forretningsmål.</p>

<div className="animate-fade-up delay-500 flex flex-wrap items-center gap-4 mt-2">
<a className="flex items-center gap-2 uppercase hover:bg-white transition-all text-xs font-medium text-black tracking-widest bg-neutral-200 rounded-lg pt-3 pr-6 pb-3 pl-6" href="#projects">

            Book gratis sparring
            <iconify-icon className="text-[14px]" height="14" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)'}} width="14"></iconify-icon>
</a>
<a className="flex items-center gap-2 uppercase hover:bg-[#252525] transition-all text-xs font-medium text-white tracking-widest bg-neutral-900 border-white/10 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="#contact">

            Se cases
            <svg className="text-[14px]" data-icon-set="solar" data-solar="arrow-right-linear" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>

<div className="animate-fade-up delay-700 -bottom-16 hidden lg:flex gap-2 text-sm font-light text-neutral-500 absolute left-0 gap-x-2 gap-y-2 items-center">
          Scroll for mere <iconify-icon className="text-base" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="order-1 lg:order-2 flex lg:justify-center lg:mt-0 z-10 h-[500px] mt-10 relative perspective-1000 items-center justify-center">

<div className="-translate-x-1/2 -translate-y-1/2 animate-pulse filter pointer-events-none bg-gradient-to-tr from-orange-500/20 to-red-500/20 opacity-70 mix-blend-screen w-[500px] h-[500px] rounded-full absolute top-1/2 left-1/2 blur-3xl">
</div>
<div className="-translate-x-1/2 -translate-y-1/2 animate-pulse filter pointer-events-none bg-amber-500/10 opacity-70 mix-blend-screen w-[400px] h-[400px] rounded-full absolute top-1/2 left-1/2 blur-3xl" style={{animationDelay: '2s'}}></div>

<div className="z-10 w-full max-w-sm relative">

<div className="-top-12 -left-4 z-30 animate-float-reverse hidden md:block absolute">
<div className="flex gap-3 bg-neutral-900/90 border-white/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur-xl gap-x-3 gap-y-3 items-center">
<div className="flex text-[#fd4d1e] bg-orange-600/10 w-10 h-10 border-orange-600/20 border rounded-md items-center justify-center">
<iconify-icon className="text-xl" height="20" icon="solar:medal-ribbons-star-outline" strokeWidth="1.5" style={{color: 'rgb(234, 88, 12)'}} width="20"></iconify-icon>
</div>
<div className="pr-2">
<div className="uppercase text-xs font-medium text-neutral-500 tracking-wider font-mono">Erfaring</div>
<div className="text-base font-semibold text-neutral-100">+5 år i branchen</div>
</div>
</div>
</div>

<div className="absolute -bottom-8 -right-8 z-30 animate-float-slow delay-700 hidden md:block">
<div className="flex bg-neutral-900/90 border-white/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur-xl gap-x-3 gap-y-3 items-center">
<div className="flex -space-x-2 pl-1">
<div className="flex text-xs text-neutral-400 bg-[#222] w-8 h-8 border-neutral-900 border-2 rounded-full items-center justify-center">
                  JP</div>
<div className="flex text-xs text-neutral-400 bg-[#222] w-8 h-8 border-neutral-900 border-2 rounded-full items-center justify-center">
                  AS</div>
<div className="flex text-xs font-medium text-white bg-orange-700 w-8 h-8 border-neutral-900 border-2 rounded-full items-center justify-center">
                  +4</div>
</div>
<div className="pr-2">
<div className="uppercase text-xs font-medium text-neutral-500 tracking-wider font-mono">Erfaring</div>
<div className="text-base font-semibold text-neutral-100">+10 live projekter</div>
</div>
</div>
</div>

<div className="aspect-[4/5] overflow-hidden animate-float-slow group cursor-pointer hover:border-orange-500/30 transition-all duration-500 md:aspect-square bg-neutral-900 w-full border-white/5 border rounded-lg relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]" style={{overflow: 'hidden'}}>

<div className="z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0" style={{overflow: 'hidden'}}>
</div>

<div className="group-hover:opacity-100 transition-opacity duration-500 delay-100 opacity-0 z-10 absolute top-4 right-4">
<div className="bg-black/50 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur-md">
<svg className="text-xl text-white" data-icon-set="solar" data-solar="code-linear" height="20" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m17 7.83l1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974c0 .89-.771 1.585-2.314 2.973L17 16.83M13.987 5L12 12.415l-1.987 7.415M7 7.83L5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33s.771 1.585 2.314 2.973L7 16.83" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<img alt="Alex Roberts" className="transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] sepia-[10%] group-hover:grayscale-0 object-repeat w-full h-full object-cover bg-center z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e15d2104-cd3b-440f-83f0-a3bd6ecf40c7_800w.png"/>

<div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="inline-flex uppercase group-hover:opacity-100 transition-opacity duration-300 delay-100 text-xs font-medium text-neutral-300 tracking-widest font-mono bg-[#1a1a1a]/80 opacity-0 border-white/10 border rounded-lg mb-3 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 animate-pulse bg-green-500 rounded-full"></span>
                Tilgængelig
              </div>
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight">Kristoffer Staugaard</h3>
<p className="uppercase text-sm font-light text-neutral-400 tracking-widest font-mono mt-1">Web Designer
                  </p>
</div>
<div className="flex group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-black bg-white opacity-0 w-10 h-10 rounded-lg scale-75 items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="grid grid-cols-1 md:grid-cols-12 md:gap-y-0 lg:mt-32 lg:pt-0 w-full border-neutral-300/50 border-t mt-20 pt-16 pb-16 gap-x-y-12 gap-y-12">

<div className="flex flex-col md:col-span-4 md:border-r md:pr-8 lg:col-span-3 lg:pt-16 lg:pr-16 border-neutral-300/50 pt-6 pr-8 gap-x-4 gap-y-4">
<div className="flex gap-2 text-xs font-mono tracking-widest uppercase">
<span className="text-neutral-500">[ Vores mission ]</span>
</div>
<h2 className="md:text-2xl text-xl font-medium text-neutral-900 tracking-tight">Staugaard Studio</h2>
</div>

<div className="flex flex-col pt-6 pl-8 justify-between gap-x-0 gap-y-16 md:col-span-8 md:pl-8 lg:col-span-9 lg:pl-16 lg:gap-20 lg:pt-16">

<h3 className="md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-4xl font-normal text-neutral-900 tracking-tight max-w-full">Jeg er Kristoffer,
webdesigneren bag
Staugaard Studio.</h3>

<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12 w-full">
<p className="lg:text-xl leading-relaxed text-lg font-light text-neutral-600 max-w-full">Jeg har startet studiet for at redde danske SMV'er og startups fra de samme trætte standard-templates. Jeg designer og udvikler hjemmesider fra bunden for at skabe din unikke digitale identitet, med afsæt i dine forretningsmål.</p>
<a className="shrink-0 inline-flex items-center justify-center uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300 text-xs font-medium text-neutral-900 tracking-widest bg-transparent border border-neutral-300 hover:border-neutral-900 rounded-lg pt-3.5 pr-7 pb-3.5 pl-7" href="#about">
        About Us
      </a>
</div>
</div>
</section><section className="grid grid-cols-1 z-10 md:grid-cols-2 lg:grid-cols-4 w-full mt-6 relative gap-x-6 gap-y-6">

<div className="flex flex-col min-h-[650px] group overflow-hidden lg:col-span-2 bg-neutral-900 border-white/10 border rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl gap-x-4 gap-y-0">

<div className="flex pt-2 pr-2 pb-2.5 pl-2 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex gap-3 gap-x-4 gap-y-4 items-center">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="framer" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg>
<div className="flex gap-2 font-mono text-xs tracking-widest uppercase">
<span className="text-neutral-500">Projekt</span>
<span className="font-medium text-neutral-200">Callbuddy</span>
</div>
</div>
<button className="uppercase hover:bg-white/10 hover:text-white transition-all text-xs text-neutral-400 tracking-widest font-mono bg-white/5 border-white/10 border rounded pt-1 pr-2.5 pb-1 pl-2.5">Info</button>
</div>

<div className="flex-1 overflow-hidden bg-[#df4f1b] border-white/5 border rounded-lg relative gap-x-4 gap-y-4">
<div className="bg-center group-hover:scale-105 transition-transform duration-700 opacity-20 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<h2 className="text-6xl font-semibold italic text-white tracking-tight mix-blend-overlay drop-shadow-2xl">NOISE</h2>
</div>

<img alt="Audio" className="-bottom-8 -left-8 contrast-125 group-hover:-translate-y-2 transition-transform duration-700 z-10 w-56 h-56 object-cover border-white border-4 rounded-tl-[100px] absolute shadow-2xl grayscale translate-y-4 rotate-[-12deg]" src="https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Camera" className="-bottom-10 contrast-125 group-hover:translate-y-0 transition-transform duration-500 z-20 w-48 h-48 object-cover border-white border-4 rounded-t-full absolute left-32 shadow-2xl grayscale translate-y-8" src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Tape" className="-bottom-6 contrast-125 group-hover:translate-y-2 transition-transform duration-700 z-10 w-44 h-44 object-cover border-white border-4 rounded-tr-[80px] absolute right-10 shadow-2xl grayscale translate-y-6 rotate-[8deg]" src="https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>

<div className="flex flex-col min-h-[650px] group overflow-hidden lg:col-span-1 bg-neutral-900 border-white/10 border rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl gap-x-4 gap-y-0">

<div className="flex pt-2 pr-2 pb-2.5 pl-2 items-center justify-between">
<div className="flex items-center gap-3">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="figma" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path className="" d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
<div className="flex gap-2 font-mono text-xs tracking-widest uppercase">
<span className="text-neutral-500">Projekt</span>
<span className="font-medium text-neutral-200">Bookido</span>
</div>
</div>
<button className="font-mono text-xs tracking-widest uppercase border border-white/10 text-neutral-400 bg-white/5 px-2.5 py-1 rounded hover:bg-white/10 hover:text-white transition-all">Info</button>
</div>

<div className="relative flex-1 rounded-lg overflow-hidden border border-white/5 bg-neutral-900">
<img alt="Bio" className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
</div>
</div>

<div className="flex flex-col min-h-[650px] lg:col-span-1 gap-x-4 gap-y-6">

<div className="flex-1 flex flex-col group overflow-hidden bg-neutral-900 border-white/10 border rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl gap-x-4 gap-y-0">

<div className="flex pt-2 pr-2 pb-2.5 pl-2 items-center justify-between">
<div className="flex items-center gap-3">
<svg className="text-neutral-500 w-3.5 h-3.5 w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="react" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '14px', height: '14px', color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538a15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86q.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005a27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a26 26 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034q.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565" fill="#737373">
</path>
</svg>
<div className="flex gap-2 font-mono text-xs tracking-widest uppercase">
<span className="text-neutral-500">Projekt</span>
<span className="font-medium text-neutral-200">AirPlate</span>
</div>
</div>
<button className="uppercase hover:bg-white/10 hover:text-white transition-all text-xs text-neutral-400 tracking-widest font-mono bg-white/5 border-white/10 border rounded pt-1 pr-2.5 pb-1 pl-2.5">Info</button>
</div>

<div className="relative flex-1 rounded-lg overflow-hidden border border-white/5 bg-[#111] bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:10px_10px]">
<div className="flex pb-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-[4.5rem] h-[4.5rem] border-[3px] overflow-hidden group-hover:scale-110 transition-transform duration-500 border-[#222] rounded-full relative shadow-[0_0_30px_rgba(0,0,0,0.8)]">
<img alt="Album Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 rounded-full inset-shadow"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col group overflow-hidden bg-neutral-900 border-white/10 border rounded-xl px-1.5 py-1.5 shadow-2xl">

<div className="flex pt-2 pr-2 pb-2.5 pl-2 items-center justify-between">
<div className="flex items-center gap-3">
<svg className="text-neutral-500 w-3.5 h-3.5 w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="webflow" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '14px', height: '14px', color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m24 4.515l-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001l2.622-5.277h4.854v5.244h.144l2.72-5.244z" fill="#737373">
</path>
</svg>
<div className="flex gap-2 font-mono text-xs tracking-widest uppercase">
<span className="text-neutral-500">Projekt</span>
<span className="font-medium text-neutral-200">Wellness by gitte</span>
</div>
</div>
<button className="uppercase hover:bg-white/10 hover:text-white transition-all text-xs text-neutral-400 tracking-widest font-mono bg-white/5 border-white/10 border rounded pt-1 pr-2.5 pb-1 pl-2.5">Info</button>
</div>

<div className="relative flex-1 rounded-lg overflow-hidden border border-white/5 bg-black">
<img alt="Movie Still" className="group-hover:scale-105 transition-transform duration-700 group-hover:opacity-70 opacity-50 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>

<div className="flex flex-col min-h-[650px] group overflow-hidden lg:col-span-2 bg-neutral-900 border-white/10 border rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl gap-x-6 gap-y-0">

<div className="flex pt-2 pr-2 pb-2.5 pl-2 items-center justify-between">
<div className="flex items-center gap-3">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="webflow" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '12px', height: '12px', color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m24 4.515l-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001l2.622-5.277h4.854v5.244h.144l2.72-5.244z" fill="#737373">
</path>
</svg>
<div className="flex gap-2 font-mono text-xs tracking-widest uppercase">
<span className="text-neutral-500">Projekt</span>
<span className="font-medium text-neutral-200">Gluds Café</span>
</div>
</div>
<button className="font-mono text-xs tracking-widest uppercase border border-white/10 text-neutral-400 bg-white/5 px-2.5 py-1 rounded hover:bg-white/10 hover:text-white transition-all">Info</button>
</div>

<div className="relative flex-1 rounded-lg overflow-hidden border border-white/5 bg-[#8b918f] flex items-end justify-center pt-8 px-6 lg:px-10">
<div className="w-full h-[90%] bg-white rounded-t-xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] p-6 group-hover:translate-y-2 transition-transform duration-700 flex flex-col gap-6 relative overflow-hidden">

<div className="flex gap-6 h-full">

<div className="w-1/4 hidden sm:flex flex-col gap-3 border-r border-neutral-100 pr-4">
<div className="w-6 h-6 bg-black rounded-md mb-4 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-sm"></div>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<div className="w-3 h-3 rounded bg-neutral-200"></div>
<div className="h-1.5 w-12 bg-neutral-200 rounded"></div>
</div>
<div className="flex items-center gap-2 text-neutral-900">
<div className="w-3 h-3 rounded bg-black"></div>
<div className="h-1.5 w-16 bg-black rounded"></div>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<div className="w-3 h-3 rounded bg-neutral-200"></div>
<div className="h-1.5 w-14 bg-neutral-200 rounded"></div>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<div className="w-3 h-3 rounded bg-neutral-200"></div>
<div className="h-1.5 w-10 bg-neutral-200 rounded"></div>
</div>
</div>

<div className="flex-1 flex flex-col gap-6">

<div className="flex justify-between items-center border-b border-neutral-100 pb-4">
<div className="flex gap-8 w-full">
<div className="flex flex-col gap-1 w-1/3 relative">
<span className="text-sm font-medium text-neutral-500">Sales</span>
<span className="text-2xl font-semibold text-black tracking-tight">624 <span className="text-xs text-emerald-500 font-medium">↗ 15%</span></span>
<div className="absolute -bottom-4 left-0 w-full h-0.5 bg-black"></div>
</div>
<div className="flex flex-col gap-1 w-1/3">
<span className="text-sm font-medium text-neutral-500">Gross volume</span>
<span className="text-2xl font-semibold text-black tracking-tight">$245,324 <span className="text-xs text-emerald-500 font-medium">↗ 17%</span></span>
</div>
<div className="flex flex-col gap-1 w-1/3">
<span className="text-sm font-medium text-neutral-500">Refunds</span>
<span className="text-2xl font-semibold text-black tracking-tight">72 <span className="text-xs text-red-500 font-medium">↘ 12%</span></span>
</div>
</div>
</div>

<div className="flex-1 relative w-full mt-4 border-b border-dashed border-neutral-200 pb-8">
<svg className="absolute inset-0 w-full h-full text-emerald-500/20" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L0 50 L10 40 L20 60 L30 30 L40 50 L50 20 L60 40 L70 10 L80 30 L90 20 L100 0 L100 100 Z" fill="currentColor"></path>
</svg>
<svg className="absolute inset-0 w-full h-full text-emerald-500 drop-shadow-md" fill="none" preserveaspectratio="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100">
<path className="" d="M0 50 L10 40 L20 60 L30 30 L40 50 L50 20 L60 40 L70 10 L80 30 L90 20 L100 0" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col min-h-[650px] group overflow-hidden bg-neutral-900 border-white/10 border rounded-xl px-1.5 py-1.5 shadow-2xl">

<div className="flex pt-2 pr-2 pb-2.5 pl-2 items-center justify-between">
<div className="flex items-center gap-3">
<svg className="text-neutral-500 w-3.5 h-3.5 w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="wordpress" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '14px', height: '14px', color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175c0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864c0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105c.582-.075.514-.93-.067-.899c0 0-1.755.135-2.88.135c-1.064 0-2.85-.15-2.85-.15c-.585-.03-.661.855-.075.885c0 0 .54.061 1.125.09l1.68 4.605l-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1c.585-.075.516-.93-.065-.896c0 0-1.746.138-2.874.138c-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833c-.046-.003-.091-.009-.141-.009c-1.06 0-1.812.923-1.812 1.914c0 .89.513 1.643 1.06 2.531c.411.72.89 1.643.89 2.977c0 .915-.354 1.994-.821 3.479l-1.075 3.585l-3.9-11.61zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406l3.315 9.087q.036.078.078.149c-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709A10.79 10.79 0 0 1 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12s12-5.385 12-12S18.615 0 12 0" fill="#737373">
</path>
</svg>
<div className="flex gap-2 font-mono text-xs tracking-widest uppercase">
<span className="text-neutral-500">Projekt</span>
<span className="font-medium text-neutral-200">Justesen Artpack</span>
</div>
</div>
<button className="font-mono text-xs tracking-widest uppercase border border-white/10 text-neutral-400 bg-white/5 px-2.5 py-1 rounded hover:bg-white/10 hover:text-white transition-all">Info</button>
</div>

<div className="relative flex-1 rounded-lg overflow-hidden border border-white/5 bg-[#2c2c2c] flex items-end justify-center pt-10 px-6 lg:px-12">
<div className="w-full h-full bg-[#0a0a0a] rounded-t-2xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border border-white/10 group-hover:translate-y-2 transition-transform duration-700 flex flex-col items-center pt-12 relative overflow-hidden">

<div className="absolute top-4 w-full px-6 flex justify-between items-center">
<div className="font-semibold text-white tracking-tight flex items-center gap-1">DAFT
          <span className="text-[#dcfc3b]">ART</span></div>
<div className="flex gap-4 text-xs font-medium">
<span className="text-neutral-400">Pricing</span><span className="text-white">Sign In</span></div>
</div>

<div className="flex flex-col items-center mt-6 z-10 px-4">
<div className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 rounded-full mb-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Beta Release
        </div>
<h3 className="text-3xl md:text-4xl text-white font-normal text-center tracking-tight max-w-sm leading-[1.1] mb-8">
          Create the album cover you've always dreamed of</h3>
<button className="bg-[#dcfc3b] hover:bg-white transition-colors text-black text-sm font-semibold px-6 py-2.5 rounded-full">CREATE FOR FREE</button>
</div>

<div className="absolute -bottom-12 flex gap-4 w-[150%] justify-center opacity-90 group-hover:-translate-y-4 transition-transform duration-700">
<img alt="Art 1" className="w-32 h-32 object-cover rounded-xl shadow-2xl rotate-[-15deg] translate-y-8 border border-white/10" src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<img alt="Art 2" className="w-40 h-40 object-cover rounded-xl shadow-2xl rotate-[-5deg] z-10 border border-white/10" src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<img alt="Art 3" className="w-48 h-48 object-cover rounded-xl shadow-2xl -translate-y-4 z-20 border border-white/20" src="https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<img alt="Art 4" className="w-40 h-40 object-cover rounded-xl shadow-2xl rotate-[8deg] z-10 border border-white/10" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<img alt="Art 5" className="w-32 h-32 object-cover rounded-xl shadow-2xl rotate-[18deg] translate-y-6 border border-white/10" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none z-30 opacity-80">
</div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
