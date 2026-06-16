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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


                const section = document.querySelector('section');
                const backs = section.querySelectorAll('.absolute.inset-0');
                section.addEventListener('mousemove', (e) => {
                  const r = section.getBoundingClientRect();
                  const x = (e.clientX - r.left) / r.width - 0.5;
                  const y = (e.clientY - r.top) / r.height - 0.5;
                  backs[0].style.transform = `scale(0.95) translate(${x * -8}px, ${y * -8 - 24}px)`;
                  backs[1].style.transform = `scale(0.98) translate(${x * -5}px, ${y * -5 - 12}px)`;
                });
                section.addEventListener('mouseleave', () => {
                  backs[0].style.transform = 'scale(0.95) translate(0px, -24px)';
                  backs[1].style.transform = 'scale(0.98) translate(0px, -12px)';
                });
              
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4gq2Yrv2p0bIa0hdLPQx"></div>

</div>
</div>

<div className="fixed inset-0 -z-10">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950"></div>

<div className="pointer-events-none absolute inset-0" style={{backgroundImage: 'url(\'https://uploads-ssl.webflow.com/5f6d66c5f1e4a5f0c1b3b1a1/63a4d9b4b4c7d418f9ed2c73_noise.png\')'}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-40 transition animate-[slideInBlur_0.8s_ease-out_0.2s_forwards] bg-neutral-950/40 border-white/10 border-b blur-sm backdrop-blur translate-y-[-20px]">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="supports-[backdrop-filter]:bg-neutral-900/30 border-0 rounded-none mt-4 backdrop-blur-none">
<div className="flex h-16 w-full items-center justify-between">

<a className="flex items-center gap-2 transition hover:opacity-80" href="https://shorturl.at/XETOt">
<span className="text-sm font-semibold tracking-tight text-neutral-200">
                MetaSolutions.
              </span>
</a>

<nav className="hidden md:flex bg-neutral-900/40 border-white/10 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6 gap-x-8 gap-y-8 items-center">
<a className="transition hover:text-neutral-100 text-sm font-normal text-neutral-300/80" href="#work">
                Work
              </a>
<a className="transition hover:text-neutral-100 text-sm font-normal text-neutral-300/80" href="#services">
                Services
              </a>
<a className="transition hover:text-neutral-100 text-sm font-normal text-neutral-300/80" href="#pricing">
                Plans
              </a>
<a className="transition hover:text-neutral-100 text-sm font-normal text-neutral-300/80" href="#faq">
                FAQ
              </a>
<a className="transition hover:text-neutral-100 text-sm font-normal text-neutral-300/80" href="https://wa.me/971586155033?text=Hello%20I%20would%20be%20interested%20in%20your%20service">
                Contact
              </a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 transition hover:bg-neutral-800/60 text-sm font-medium text-neutral-100 bg-neutral-900/60 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" href="https://wa.me/971586155033?text=Hello%20I%20would%20be%20interested%20in%20your%20service" rel="noopener noreferrer" target="_blank">
                Whatsapp
              </a>
<button className="inline-flex transition hover:bg-neutral-800/60 md:hidden bg-neutral-900/60 w-9 h-9 border-white/10 border rounded-full items-center justify-center" onclick="window.location.href='https://wa.me/971586155033?text=Hello%20I%20would%20be%20interested%20in%20your%20service'" role="button">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="message-circle-more" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(229, 229, 229)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
<path d="M8 12h.01"></path>
<path d="M12 12h.01"></path>
<path d="M16 12h.01"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</header>

<main className="relative">
<section className="sm:pt-44 md:pt-48 md:pb-32 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-24 pl-6">
<div className="flex flex-col text-center space-y-6 items-center">

<div className="relative animate-[scaleInBlur_1.2s_ease-out_0.6s_forwards] mb-8 blur-lg scale-50">
<div className="absolute -inset-8 bg-[radial-gradient(closest-side,rgba(120,120,255,0.18),transparent)] blur-2xl"></div>
<div className="relative h-14 w-14 ring-1 shadow-[0_0_40px_-10px_rgba(120,120,255,0.4),inset_0_1px_0_0_rgba(255,255,255,0.06)] flex ring-white/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af757665-5346-4907-89cf-3b2b013be82e_320w.jpg)] bg-cover rounded-2xl items-center justify-center" style={{}}></div>
</div>

<div className="mb-6 opacity-0 translate-y-4 blur-sm animate-[slideInBlur_0.8s_ease-out_0.8s_forwards]">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] border-white/10 bg-neutral-900/50 text-neutral-300" style={{}}>
<span className="h-1.5 w-1.5 rounded-full shadow-[0_0_0_3px_rgba(16,185,129,0.15)] bg-emerald-400/80"></span>
              Growth &amp; Conversion Agency
            </span>
</div>

<h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b font-semibold opacity-0 translate-y-8 blur-sm animate-[slideInBlur_1s_ease-out_1s_forwards] from-neutral-100 via-neutral-200 to-neutral-400/90">
<span className="block">Crafting Brands That</span>
<span className="block">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-400/80" style={{}}>
                Convert &amp; Scale
              </span>
<span className="bg-clip-text italic font-['Playfair_Display']" style={{}}>
                Effortlessly
              </span>
</span>
</h1>

<p className="max-w-2xl sm:text-lg animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] text-base text-neutral-300/80 opacity-0 mt-6 blur-sm translate-y-6" style={{}}>
            We blend world-class aesthetics with data-driven strategies to turn
            visitors into loyal customers. Your all-in-one partner for design,
            development, and growth.
          </p>

<div className="overflow-hidden pt-8 pr-8 pb-8 pl-8">
<div className="relative inline-block group">
<a className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] inline-flex items-center justify-center gap-2 z-10 text-white bg-neutral-900/60 border-white/20 border rounded-xl pt-3 pr-6 pb-3 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" href="https://wa.me/971586155033?text=Hello%20I%20would%20be%20interested%20in%20your%20service" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" rel="noopener noreferrer" style={{-X: '199.8125px', -Y: '7.5px', -O: '0'}} target="_blank">
<span className="inline-flex items-center gap-2 font-semibold z-10 relative" onclick="window.location.href='https://www.google.com'" role="button">
                  Start Scaling Today
                  <svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10"></span>
</a>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>

<div className="mt-14 flex items-center gap-6 opacity-0 translate-y-4 blur-sm animate-[slideInBlur_0.8s_ease-out_1.6s_forwards] text-neutral-400">
<a className="group" href="https://shorturl.at/XETOt"></a>
<a className="group" href="https://shorturl.at/XETOt"></a>
<a className="group" href="https://shorturl.at/XETOt"></a>
</div>
</div>
</section>
</main>

<section className="sm:px-6 lg:px-8 md:py-20 w-full max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="services">

<div className="flex mt-6 mb-6 items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full pt-1 pr-3 pb-1 pl-3 text-slate-300/80 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all" style={{}}>
<svg className="lucide lucide-layers h-3.5 w-3.5 text-cyan-300" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
          Our Expertise
        </span>
</div>

<div className="max-w-3xl scroll-fade scroll-fade-delay text-center mr-auto ml-auto visible">
<h1 className="md:text-6xl text-4xl font-semibold tracking-tight text-slate-50" style={{}}>
          Design That
          <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300" style={{}}>
            Sells
          </span>
</h1>
<p className="md:text-lg text-base text-slate-400 mt-4" style={{}}>
          From visual identity to high-performance funnels, we build the systems
          that power your growth.
        </p>
</div>

<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<article className="relative overflow-hidden rounded-2xl ring-1 p-6 md:p-8 min-h-[20rem] md:min-h-[22rem] scroll-fade scroll-fade-delay-2 bg-white/5 ring-white/10 hover:bg-white/[0.08] hover:ring-white/20 transition-all group visible">
<div className="absolute inset-0 bg-gradient-to-br via-transparent to-transparent from-white/5"></div>
<div className="absolute -top-12 -right-10 h-48 w-48 rounded-full blur-2xl bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-all"></div>

<div className="grid gap-3 sm:gap-4">

<div className="flex items-center justify-between rounded-xl border px-4 py-3 backdrop-blur-sm border-white/10 bg-black/30 hover:bg-black/40 transition-all">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 bg-gradient-to-br from-slate-400/20 to-slate-600/10 ring-white/10 ring-1 rounded-lg items-center justify-center">
<svg className="lucide lucide-palette w-[16px] h-[16px]" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.5" cy="6.5" r=".5"></circle>
<circle cx="17.5" cy="10.5" r=".5"></circle>
<circle cx="8.5" cy="7.5" r=".5"></circle>
<circle cx="6.5" cy="12.5" r=".5"></circle>
<path className="" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
</svg>
</div>
<div className="">
<p className="text-sm font-medium text-slate-200" style={{}}>
                    UI/UX Design Systems
                  </p>
<p className="text-xs text-slate-400" style={{}}>
                    Consistent, scalable brand identity
                  </p>
</div>
</div>
<button className="relative h-6 w-10 transition-all duration-300 hover:bg-cyan-500/60 bg-cyan-500/40 ring-cyan-400/40 ring-1 rounded-full">
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-all duration-300 translate-x-4 bg-white/90"></span>
</button>
</div>

<div className="flex items-center justify-between rounded-xl border px-4 py-3 backdrop-blur-sm border-white/10 bg-black/30 hover:bg-black/40 transition-all">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 bg-gradient-to-br from-slate-400/20 to-slate-600/10 ring-white/10 ring-1 rounded-lg items-center justify-center">
<svg className="lucide lucide-layout w-[16px] h-[16px]" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="3" x2="21" y1="9" y2="9"></line>
<line x1="9" x2="9" y1="21" y2="9"></line>
</svg>
</div>
<div className="">
<p className="text-sm font-medium text-slate-200" style={{}}>
                    Landing Page Optimization
                  </p>
<p className="text-xs text-slate-400" style={{}}>
                    High-velocity A/B testing
                  </p>
</div>
</div>
<button className="relative h-6 w-10 transition-all duration-300 hover:bg-cyan-500/60 bg-cyan-500/40 ring-cyan-400/40 ring-1 rounded-full">
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-all duration-300 translate-x-4 bg-white/90"></span>
</button>
</div>

<div className="flex items-center justify-between rounded-xl border px-4 py-3 backdrop-blur-sm border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 bg-gradient-to-br from-slate-400/20 to-slate-600/10 ring-white/10 ring-1 rounded-lg items-center justify-center">
<svg className="lucide lucide-shopping-cart h-4 w-4 text-slate-300/70" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</svg>
</div>
<div className="">
<p className="text-sm font-medium text-slate-300/80" style={{}}>
                    Checkout Flow
                  </p>
<p className="text-xs text-slate-500" style={{}}>
                    Frictionless payment experiences
                  </p>
</div>
</div>
<button className="relative h-6 w-10 rounded-full ring-1 cursor-not-allowed bg-white/10 ring-white/10" disabled="">
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white/40"></span>
</button>
</div>
</div>

<div className="mt-6 md:mt-10 max-w-md">
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-100" style={{}}>
              High-Performance Design
            </h3>
<p className="mt-1 text-sm text-slate-400" style={{}}>
              We don't just make things look pretty. We design strategic user
              interfaces that guide visitors towards conversion.
            </p>
</div>
</article>

<article className="relative overflow-hidden min-h-[20rem] md:min-h-[22rem] scroll-fade scroll-fade-delay-3 hover:bg-white/[0.08] hover:ring-white/20 transition-all group bg-white/5 ring-white/10 ring-1 rounded-2xl pt-0 pr-0 pb-0 pl-0 visible">
<div className="absolute inset-0 group-hover:bg-[radial-gradient(40%_40%_at_50%_50%,rgba(99,102,241,0.30),transparent_60%)] transition-all"></div>
<div className="p-6 md:p-8">
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-100" style={{}}>
              Strategic Funnels
            </h3>
<p className="mt-1 text-sm max-w-lg text-slate-400" style={{}}>
              Orchestrating the perfect user journey from initial ad click to
              final purchase with precision-engineered funnel architecture.
            </p>
</div>

<div className="pointer-events-none overflow-visible absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.25),transparent_60%)] blur-2xl"></div>

<div className="relative h-72 sm:h-80 md:h-[22rem] overflow-visible">

<div className="absolute inset-0"></div>

<div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

<div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20 animate-pulse" style={{animationDelay: '0s'}}></div>

<div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{animationDelay: '.6s'}}></div>

<div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{animationDelay: '1.2s'}}></div>

<div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{animationDelay: '1.8s'}}></div>
<div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{animationDelay: '2.4s'}}></div>
<div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/15 animate-pulse" style={{animationDelay: '3s'}}></div>
</div>

<div className="absolute left-1/2 top-1/2 hidden sm:block">
<div className="h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300/80 backdrop-blur-sm flex hover:border-white/20 hover:text-slate-200 transition">
<svg className="lucide lucide-pen-tool h-4 w-4" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19 7-7 3 3-7 7-3-3z"></path>
<path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
<path d="m2 2 7.586 7.586"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
</div>
</div>
<div className="absolute left-1/2 top-1/2 hidden md:block">
<div className="h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300/80 backdrop-blur-sm flex hover:border-white/20 hover:text-slate-200 transition">
<svg className="lucide lucide-figma w-[16px] h-[16px]" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(226, 232, 240)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
</div>
</div>
<div className="absolute left-1/2 top-1/2 hidden sm:block">
<div className="h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300/80 backdrop-blur-sm flex hover:border-white/20 hover:text-slate-200 transition">
<svg className="lucide lucide-code-2 h-4 w-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
</div>
</div>
<div className="absolute left-1/2 top-1/2 hidden md:block">
<div className="h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300/80 backdrop-blur-sm flex hover:border-white/20 hover:text-slate-200 transition">
<svg className="lucide lucide-smartphone h-4 w-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl transition-all duration-500 group-hover:scale-110"></div>
<div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(2,6,23,0.75)] ring-1 ring-blue-400/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:w-32">
<svg className="md:w-14 md:h-14 w-[36px] h-[36px]" data-lucide="dollar-sign" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<line className="" x1="12" x2="12" y1="2" y2="22"></line>
<path className="" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_40px_6px_rgba(59,130,246,0.25)]"></div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 hidden sm:block">
<div className="items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300/80 backdrop-blur-sm flex hover:border-white/20 hover:text-slate-200 transition">
<svg className="lucide lucide-bar-chart-2 h-4 w-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="18" y1="20" y2="10"></line>
<line x1="12" x2="12" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="14"></line>
</svg>
</div>
</div>
</div>
</article>
</div>

<div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

<article className="relative overflow-hidden min-h-[15rem] md:min-h-[16rem] scroll-fade scroll-fade-delay hover:bg-white/[0.08] hover:ring-white/20 transition-all group ring-white/10 ring-1 visible bg-white/5 rounded-2xl pt-0 pr-0 pb-4 pl-0">

<div className="absolute inset-x-[-12px] top-[-8px] bottom-[-8px] bg-white/[0.02] ring-1 ring-white/5 rounded-2xl pointer-events-none opacity-60"></div>

<div className="absolute inset-x-[-6px] top-[-4px] bottom-[-4px] bg-white/[0.03] ring-1 ring-white/8 rounded-2xl pointer-events-none opacity-80"></div>

<div className="relative z-10">
<div className="pt-6 pr-6 pb-6 pl-6">
<h4 className="text-base font-semibold tracking-tight" style={{}}>
                Data-Driven Strategy
              </h4>
<p className="mt-1 text-sm text-slate-400" style={{}}>
                We analyze user behavior to uncover hidden revenue
                opportunities.
              </p>
</div>
<div className="relative overflow-visible pr-6 pl-6">

<div className="pointer-events-none absolute inset-x-8 top-[-12px] bottom-2 bg-gradient-to-b from-white/5 to-transparent/20 opacity-0 mix-blend-normal ring-neutral-50/5 ring-1 rounded-xl blur-none scale-95 invisible"></div>

<div className="pointer-events-none absolute inset-x-6 top-[-6px] bottom-1 blur-[1px] opacity-0 mix-blend-normal ring-1 rounded-xl mt-4 mb-4 scale-[0.97] invisible"></div>

<div className="pointer-events-none absolute inset-x-3 top-0 bottom-0 ring-white/10 ring-1 bg-gradient-to-b from-[#ffffff]/20 to-black/0 rounded-2xl mt-3 mb-3"></div>

<div className="relative max-w-3xl mr-auto ml-auto pt-2 pr-0 pb-0 pl-0">


<div className="shadow-[0_24px_90px_-20px_rgba(0,0,0,0.7)] bg-white/10 border-white/20 border-2 rounded-2xl mt-6 mb-6 backdrop-blur-xl">
<div className="sm:p-6 pt-6 pr-6 pb-6 pl-6 shadow-sm backdrop-blur-none">

<label className="block">
<div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3">

<svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="7"></circle>
<path d="M21 21l-4.3-4.3"></path>
</svg>
<input className="w-full bg-transparent placeholder:text-white/60 focus:outline-none text-white" placeholder="Why is bounce rate high?" type="text"/>
</div>
</label>

<div className="mt-4 space-y-3">
<button className="group flex w-full items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-left hover:bg-white/20 transition">
<span className="flex items-center gap-3">

<svg className="w-[20px] h-[20px] text-neutral-50" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17l6-6 4 4 8-8"></path>
</svg>
<span className="text-white">Optimize checkout</span>
</span>
<span className="text-sm text-white/70" style={{}}>
                          Strategy
                        </span>
</button>
<button className="group flex w-full items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-left hover:bg-white/20 transition">
<span className="flex items-center gap-3">

<svg className="w-[20px] h-[20px] text-neutral-50" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v-6M6 20V10M18 20V4"></path>
</svg>
<span className="text-white">Improve retention</span>
</span>
<span className="text-sm text-white/70" style={{}}>CRO</span>
</button>
</div>
</div>
</div>
</div>


</div>
</div>
</article>

<article className="relative overflow-hidden min-h-[15rem] md:min-h-[16rem] scroll-fade scroll-fade-delay-2 ring-1 rounded-2xl bg-white/5 ring-white/10 hover:bg-white/[0.08] hover:ring-white/20 transition-all group visible">
<div className="flex pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h4 className="text-base font-semibold tracking-tight" style={{}}>
              Custom Development
            </h4>
<span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] border-white/10 bg-white/5 text-slate-300" style={{}}>
<svg className="lucide lucide-code h-3.5 w-3.5 text-cyan-300" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
              Full-Stack
            </span>
</div>
<div className="pr-6 pb-6 pl-6">
<div className="relative mt-6 mb-4">
<div className="hover:bg-black/50 transition-all bg-black/60 border-white/10 border rounded-xl pt-3 pr-3 pb-3 pl-3 backdrop-blur">
<div className="flex gap-1 mb-2 items-center">
<span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
</div>
<div className="overflow-x-auto">
<pre className="text-[10px] sm:text-[11px] md:text-[12px] leading-tight sm:leading-5 min-w-max text-slate-300"><code className="" style={{}}>// Component: High-Converting Hero
export const Hero = () =&gt; {
  return (
    &lt;Section className="flex-col"&gt;
      &lt;Headline&gt;Turn Traffic Into Revenue&lt;/Headline&gt;
      &lt;Button variant="primary"&gt;
        Start Scaling
      &lt;/Button&gt;
    &lt;/Section&gt;
  );
};</code></pre>
</div>
</div>
</div>
</div>
</article>

<article className="relative overflow-hidden min-h-[15rem] md:min-h-[16rem] scroll-fade scroll-fade-delay-3 hover:bg-white/[0.08] hover:ring-white/20 transition-all group bg-white/5 ring-white/10 ring-1 rounded-2xl visible">
<div className="absolute inset-0 group-hover:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)] transition-all blur-sm"></div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h4 className="text-base font-semibold tracking-tight text-slate-100" style={{}}>
                Growth Monitoring
              </h4>
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-emerald-400/60 animate-pulse"></div>
<span className="text-xs text-slate-400" style={{}}>Live</span>
</div>
</div>
<p className="text-sm text-slate-400" style={{}}>
              Real-time analytics to track every conversion and optimize your
              ROAS.
            </p>
</div>
<div className="relative mx-auto px-6">
<div className="relative h-40 w-full max-w-sm mx-auto group">

<div className="absolute left-12 top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-[#ffffff] to-[#ffffff]/5"></div>
<div className="absolute right-12 top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-l from-[#ffffff] to-[#ffffff]/5"></div>

<div className="absolute left-4 top-1/2 -translate-y-1/2">
<div className="h-12 w-12 flex ring-white/10 ring-1 bg-black/40 rounded-full items-center justify-center">
<svg className="lucide lucide-megaphone w-[24px] h-[24px]" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m3 11 18-5v12L3 14v-3z"></path>
<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
</svg>
</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap" style={{}}>
                  Ad Traffic
                </div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[1000px]">
<div className="flex h-14 w-14 hover:from-cyan-500/40 hover:to-blue-600/30 transition-all group/node cursor-pointer ring-white-400/50 ring-1 group-hover:rotate-y-10 group-hover:rotate-x-5 duration-700 ease-out transform-style-preserve-3d bg-gradient-to-br from-cyan-500/30 to-blue-600/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11dcbbda-ccca-43b6-9524-e205dbeae5f7_320w.jpg)] bg-cover rounded-full items-center justify-center"></div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap" style={{}}>
                  Landing Page
                </div>
</div>
<div className="absolute right-4 top-1/2 -translate-y-1/2">
<div className="h-12 w-12 flex bg-black/40 ring-white/10 ring-1 rounded-full items-center justify-center">
<svg className="group-hover/node:scale-110 transition-transform w-[20px] h-[20px] text-neutral-50" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="2" y2="22"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap" style={{}}>
                  Sale
                </div>
</div>
</div>
</div>
<div className="px-6 pb-6">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></div>
<span className="text-slate-400" style={{}}>
                    Active Visitors: 420
                  </span>
</div>
<div className="flex items-center gap-1">
<div className="h-1.5 w-1.5 rounded-full bg-cyan-400/80"></div>
<span className="text-slate-400" style={{}}>Conv. Rate: 4.8%</span>
</div>
</div>
<span className="text-slate-500" style={{}}>Updated 5s ago</span>
</div>
</div>
</article>
</div>
</section>

<section className="sm:px-6 lg:px-8 md:py-20 w-full max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="work">

<div className="flex items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-trophy h-3.5 w-3.5 text-cyan-300" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M12 2v7"></path>
<path d="M12 15a4 4 0 0 0 4-4V7H8v4a4 4 0 0 0 4 4Z"></path>
</svg>
          Proven Results
        </span>
</div>

<div className="max-w-3xl text-center mt-6 mr-auto ml-auto scroll-fade scroll-fade-delay visible">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50" style={{}}>
          Design That Drives
          <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300" style={{}}>
            Revenue
          </span>
</h1>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
          We don't just win design awards. We help our partners dominate their
          markets.
        </p>
</div>

<div className="relative group mt-12 scroll-fade scroll-fade-delay-2 visible">

<div className="pointer-events-none absolute inset-x-6 -top-24 h-[14rem] md:h-[16rem] shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[0.96] group-hover:blur-sm group-hover:brightness-50 ring-white/10 ring-1 bg-neutral-900/25 opacity-20 border-white/10 border rounded-2xl blur-none backdrop-blur-sm brightness-100" style={{animation: 'float-gentle-back 6s ease-in-out infinite'}}>
<div className="flex md:px-5 opacity-80 border-white/10 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="inline-flex gap-2 text-slate-300 opacity-80 items-center">
<div className="flex h-6 w-6 ring-1 rounded-lg items-center justify-center bg-black/40 ring-white/10">
<svg className="lucide lucide-user w-[14px] h-[14px] text-slate-300" data-lucide="user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-4 -top-16 h-[14.5rem] md:h-[17rem] shadow-[0_6px_25px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-[0.98] group-hover:blur-sm group-hover:brightness-50 ring-white/10 ring-1 bg-neutral-900/35 opacity-60 border-white/10 border rounded-2xl blur-none backdrop-blur-sm brightness-100" style={{animation: 'float-gentle-middle 6s ease-in-out infinite 2s'}}>
<div className="flex md:px-5 border-white/10 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="inline-flex gap-2 text-slate-300 items-center">
<div className="flex h-6 w-6 ring-1 rounded-lg items-center justify-center bg-black/40 ring-white/10">
<svg className="lucide lucide-user w-[14px] h-[14px] text-slate-300" data-lucide="user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-white/20 ring-white/10"></span>
</div>
</div>
</div>

<div className="relative z-10 transition-all duration-500 ease-out group-hover:-translate-y-6 group-hover:scale-[1.03] group-hover:brightness-110 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] bg-neutral-900/60 border-white/10 border ring-white/10 ring-1 rounded-2xl mt-40 mb-40 backdrop-blur-xl">
<div className="flex md:px-5 border-white/10 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur-sm items-center justify-between">
<div className="inline-flex gap-2 text-slate-300 items-center">
<div className="flex h-6 w-6 bg-black/60 ring-white/20 ring-1 rounded-lg items-center justify-center backdrop-blur">
<svg className="lucide lucide-shopping-bag w-[14px] h-[14px] text-slate-300" data-lucide="shopping-bag" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
</div>
<span className="text-sm font-medium">Slean Aesthetics.</span>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full ring-1 bg-emerald-400/80 ring-emerald-400/20"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-cyan-400/80 ring-cyan-400/20"></span>
<span className="h-2 w-2 rounded-full ring-1 bg-blue-400/80 ring-blue-400/20"></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">

<div className="space-y-6">
<h3 className="md:text-3xl text-2xl font-semibold text-slate-100 tracking-tight">
                Slean Landing Page &amp; Paid Ads
              </h3>
<p className="md:text-base text-sm text-slate-400 mt-2">
                We completely overhauled Slean digital presence, from a regular
                visual identity to a high-converting landing page ecosystem. The
                result was a massive spike in qualified leads and a
                significantly lower CAC.
              </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
<div className="rounded-xl border px-5 py-4 bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all backdrop-blur-sm">
<div className="md:text-3xl text-2xl font-semibold text-neutral-50 tracking-tight">
                    740%
                  </div>
<p className="mt-1 text-sm text-slate-400" style={{}}>
                    conversion rate increase
                  </p>
</div>
<div className="border rounded-xl pt-4 pr-5 pb-4 pl-5 bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all backdrop-blur-sm">
<div className="md:text-3xl text-2xl font-semibold text-neutral-50 tracking-tight">
                    14x
                  </div>
<p className="mt-1 text-sm text-slate-400" style={{}}>
                    revenue growth (YoY)
                  </p>
</div>
</div>

<div className="rounded-xl border px-5 py-4 bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all backdrop-blur-sm">
<div className="md:text-3xl text-2xl font-semibold text-neutral-50 tracking-tight">
                  Generated $1M+ in AR
                </div>
<p className="text-sm text-slate-400 mt-1">
                  Performance Growth Framework
                </p>
</div>
</div>

<div className="flex items-center justify-center">
<div className="w-full max-w-lg rounded-xl overflow-hidden border bg-white/10 border-white/20 hover:border-white/30 transition-all backdrop-blur-sm">
<img alt="Modern dashboard redesign and brand identity" className="w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef2689ac-3a67-450f-bd7f-c1a7c03f7315_1600w.png" style={{}}/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="about">

<div className="flex mt-6 mb-6 items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10">
<svg className="lucide lucide-users h-3.5 w-3.5 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
          About Us
        </span>
</div>

<div className="max-w-3xl text-center mx-auto mt-6 scroll-fade scroll-fade-delay visible">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50">
          European Standards,
          <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300">
            Dubai Ambition
          </span>
</h2>
<p className="mt-4 text-base md:text-lg text-slate-400">
          We combine Western strategic precision with the dynamic innovation of
          the Middle East.
        </p>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start scroll-fade scroll-fade-delay-2 visible">

<div className="space-y-6">
<div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] transition-all h-full">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-100">
                European Roots, Global Hub
              </h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed">
              We are a team of European digital experts based in Dubai. This
              unique positioning allows us to offer the reliability and quality
              standards of European agencies while operating from one of the
              world's most rapidly evolving business hubs. We understand global
              markets and bridge the gap between aesthetics and performance.
            </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] transition-all h-full">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-100">
                Niche-Specific Mastery
              </h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed">
              Our advisory isn't generic. We deep-dive into your specific niche,
              whether it's E-commerce, SaaS, or High-Ticket Services, ensuring
              that every funnel strategy is perfectly calibrated for your target
              audience.
            </p>
</div>
</div>

<div className="relative group h-full">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative p-8 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-xl h-full flex flex-col justify-between hover:border-white/20 transition-all">
<div className="">
<div className="flex items-center justify-between mb-6">
<div className="">
<span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wide uppercase mb-2">
                    Head of Marketing
                  </span>
<h3 className="text-2xl font-bold text-white tracking-tight">
                    Mattheus Sanojca
                  </h3>
</div>
<div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-2 ring-white/10 shadow-lg overflow-hidden bg-slate-800">
<img alt="Mattheus Sanojca" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ab0f297-3c7b-4ec8-ba28-4b8dbaf2d2c7_320w.png" style={{}}/>
</div>
</div>
<div className="space-y-4">
<p className="text-slate-300 text-sm leading-relaxed">
                  Mattheus brings over in marketing strategy and funnel
                  optimization. A veteran in the industry, he has engineered
                  growth systems for diverse niches across Europe and the Middle
                  East.
                </p>
<p className="text-slate-400 text-sm leading-relaxed">
                  His role goes beyond management; he provides high-level
                  advisory to ensure your business doesn't just attract traffic,
                  but captures value at every step. His "Perfect Advisory"
                  framework is the core of our client success stories.
                </p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400 box-shadow-glow"></div>
<span className="text-xs text-slate-400 font-medium">
                  10+ Years Exp.
                </span>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
<span className="text-xs text-slate-400 font-medium">
                  Funnel Architect
                </span>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
<span className="text-xs text-slate-400 font-medium">
                  Strategic Advisor
                </span>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-white"></div>
<span className="text-xs text-slate-400 font-medium">
                  Dubai &amp; Europe
                </span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="sm:px-6 lg:px-8 md:py-20 opacity-100 w-full max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="pricing">

<div className="flex scroll-fade items-center justify-center">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-badge-check h-3.5 w-3.5 text-cyan-300" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
          Partnership Models
        </span>
</div>

<div className="max-w-3xl text-center mx-auto mt-6 scroll-fade scroll-fade-delay visible">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50" style={{}}>
          Invest in Your
          <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300" style={{}}>
            Growth
          </span>
</h1>
<p className="md:text-lg text-base text-slate-400 mt-4">
          Flexible retainer models designed to scale with your business
          ambitions
        </p>
</div>

<div className="flex mt-6 items-center justify-center scroll-fade scroll-fade-delay-2 visible">
<div className="inline-flex items-center gap-2 rounded-xl border p-1 border-white/10 bg-white/5 relative">
<div className="absolute top-1 left-1 h-[calc(100%-8px)] bg-black/40 ring-1 ring-white/10 rounded-lg transition-all duration-300 ease-out" id="slider-indicator" style={{width: '87px'}}></div>
<button className="px-4 py-2 text-xs sm:text-sm rounded-lg tracking-wide relative z-10 transition-colors duration-200 text-slate-200" id="monthly-btn" style={{}} type="button">
            Monthly
          </button>
<button className="sm:text-sm hover:text-slate-200 relative z-10 transition-colors duration-200 text-xs text-slate-300 tracking-wide rounded-lg pt-2 pr-4 pb-2 pl-4" id="yearly-btn" style={{}} type="button">
            Quarterly
          </button>
<span className="px-3 py-2 text-[11px] rounded-lg inline-flex items-center gap-1 bg-white/5 text-slate-300 relative z-10" style={{}}>
<svg className="lucide lucide-percent h-3.5 w-3.5 text-cyan-300" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="19" x2="5" y1="5" y2="19"></line>
<circle cx="6.5" cy="6.5" r="2.5"></circle>
<circle cx="17.5" cy="17.5" r="2.5"></circle>
</svg>
            Save 15%
          </span>
</div>
</div>

<div className="grid gap-8 lg:grid-cols-3 mt-12 mr-auto ml-auto max-w-7xl scroll-fade scroll-fade-delay-3 visible">

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_30px_rgba(103,232,249,0.15)] hover:ring-1 hover:ring-cyan-300/20 bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]" style={{backdropFilter: 'blur(16px)'}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="relative">
<h3 className="text-xl font-semibold tracking-tight" style={{}}>
                Design Partner
              </h3>
<p className="mt-2 text-sm text-neutral-400" style={{}}>
                For teams needing continuous world-class design
              </p>
<div className="mt-6 flex items-baseline gap-2">
<span className="transition-all duration-200 text-3xl tracking-tighter" id="starter-price">
                  $3,900+
                </span>
<span className="text-sm text-neutral-400" style={{}}>/month</span>
</div>
<ul className="text-sm mt-8 space-y-3">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    Unlimited design requests
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    UI, UX, Branding &amp; Graphics
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    48h average turnaround
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    Slack communication
                  </span>
</li>
</ul>
<a className="hover:bg-white/10 transition block text-sm font-medium text-white text-center bg-white/5 w-full border-white/10 border rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4" href="https://wa.me/971586155033?text=Hello%20I%20would%20be%20interested%20in%20your%20service" rel="noopener noreferrer" target="_blank">
                Book a Call
              </a>
</div>
</div>
</div>

<div className="card-top w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ring-1 ring-cyan-400/30 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 rounded-[1.2em] hover:shadow-[0_0_40px_rgba(103,232,249,0.25)] hover:ring-cyan-400/50" style={{backdropFilter: 'blur(16px)'}}>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="relative">
<h3 className="text-xl font-semibold tracking-tight" style={{}}>
                Growth Partner
              </h3>
<p className="mt-2 text-sm text-neutral-400" style={{}}>
                Design + Development + CRO Strategy
              </p>
<div className="mt-6 flex items-baseline gap-2">
<span className="transition-all duration-200 text-3xl tracking-tighter" id="pro-price">
                  $6,500+
                </span>
<span className="text-sm text-neutral-400" style={{}}>/month</span>
</div>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    Everything in Design Partner
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    Webflow/React Development
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    Conversion Rate Optimization
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    Weekly strategy calls
                  </span>
</li>
</ul>
<a className="hover:brightness-95 transition block text-sm font-semibold text-neutral-900 text-center bg-gradient-to-br from-cyan-300 to-indigo-300 w-full rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4" href="https://wa.me/971586155033?text=Hello%20I%20would%20be%20interested%20in%20your%20service" rel="noopener noreferrer" target="_blank">
                Start Free Trial
              </a>
</div>
</div>
</div>

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em] hover:shadow-[0_0_30px_rgba(103,232,249,0.15)] hover:ring-1 hover:ring-cyan-300/20" style={{backdropFilter: 'blur(16px)'}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="relative">
<h3 className="text-xl font-semibold tracking-tight" style={{}}>
                Full Scale
              </h3>
<p className="mt-2 text-sm text-neutral-400" style={{}}>
                Complete digital transformation
              </p>
<div className="flex gap-2 mt-6 gap-x-2 gap-y-2 items-baseline">
<span className="text-3xl tracking-tighter transition-all duration-200" id="enterprise-price" style={{}}>
                  Custom
                </span>
</div>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    Dedicated 3-person team
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300">
                    Full-stack Web Development
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    Advanced Analytics &amp; Reporting
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-neutral-300" style={{}}>
                    Priority 24/7 Support
                  </span>
</li>
</ul>
<a className="hover:bg-white/10 transition block text-sm font-medium text-white text-center bg-white/5 w-full border-white/10 border rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4" href="https://wa.me/971586155033?text=Hello%20I%20would%20be%20interested%20in%20your%20service" rel="noopener noreferrer" target="_blank">
                Contact Sales
              </a>
</div>
</div>
</div>
</div>

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em] mt-12 mr-auto ml-auto max-w-7xl scroll-fade scroll-fade-delay visible" style={{backdropFilter: 'blur(16px)'}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="relative max-w-7xl text-center mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-semibold tracking-tight" style={{}}>
            Have a specific project?
          </h3>
<p className="mt-2 text-sm text-neutral-400" style={{}}>
            One-off Landing Page: Starting at $2,500 • Brand Identity: Starting
            at $5,000
          </p>
<div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-neutral-500">
<span className="flex items-center gap-2" style={{}}>
<svg className="h-3 w-3 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
              Cancel anytime
            </span>
<span className="flex items-center gap-2" style={{}}>
<svg className="h-3 w-3 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
              Pause subscription
            </span>
<span className="flex items-center gap-2" style={{}}>
<svg className="h-3 w-3 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
              7-day money back
            </span>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 md:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="faq">

<div className="flex items-center justify-center scroll-fade visible">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-help-circle h-3.5 w-3.5 text-cyan-300" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path d="M12 17h.01"></path>
</svg>
          Common Questions
        </span>
</div>

<div className="max-w-3xl text-center mx-auto mt-6 scroll-fade scroll-fade-delay visible">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50" style={{}}>
          Everything You
          <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300" style={{}}>
            Need to Know
          </span>
</h1>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
          Quick answers to help you start your transformation with confidence
        </p>
</div>

<div className="grid gap-6 lg:grid-cols-2 mt-12 gap-x-6 gap-y-6">

<div className="relative overflow-hidden rounded-[1.2em] ring-1 ring-white/10 bg-white/5 hover:bg-white/10 hover:ring-white/20 transition-all self-start scroll-fade scroll-fade-delay-2 visible" style={{backdropFilter: 'blur(16px)'}}>
<div className="relative p-6 md:p-8 text-center flex flex-col items-center">
<div className="h-12 w-12 flex ring-white/10 ring-1 bg-black/40 rounded-xl items-center justify-center">
<svg className="lucide lucide-message-circle h-6 w-6 text-slate-300" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-100 mt-4" style={{}}>
              Still have questions?
            </h3>
<p className="mt-2 text-sm md:text-base text-slate-400 max-w-md" style={{}}>
              Book a discovery call to see if we're the right partner for your
              growth goals.
            </p>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 border-white/10 border rounded-xl mt-6 pt-3 pr-4 pb-3 pl-4" href="https://wa.me/971586155033?text=Hello%20I%20would%20be%20interested%20in%20your%20service" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
              Book Discovery Call
            </a>
</div>
</div>

<div className="scroll-fade scroll-fade-delay-3 space-y-4 visible">

<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium" style={{}}>
                How fast is your turnaround time?
              </span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-300 transition-transform duration-300 rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 text-sm text-slate-400 pt-0 pr-4 pb-0 pl-4" style={{maxHeight: '84px'}}>
<div className="pb-6">
                For most design requests, we deliver within 24-48 hours. Complex
                development tasks or full-page designs typically take 3-7 days.
                We work in agile sprints to ensure steady progress and quick
                feedback loops.
              </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="flex focus:outline-none text-left w-full pt-3 pr-4 pb-3 pl-4 gap-x-4 gap-y-4 items-center justify-between" data-faq-toggle="" onclick="const c=this.nextElementSibling,i=this.querySelector('svg');if(c.style.maxHeight==='0px'||!c.style.maxHeight){c.style.maxHeight=c.scrollHeight+'px';i.classList.add('rotate-180')}else{c.style.maxHeight='0px';i.classList.remove('rotate-180')}" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium">
                Do you handle development too?
              </span>
<svg className="lucide lucide-chevron-down transition-transform duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(203, 213, 225)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300" style={{maxHeight: '0px'}}>
<div className="pb-6">
                Yes, our Growth Partner and Full Scale plans include full-stack
                development. We specialize in React, Next.js, and Webflow,
                ensuring pixel-perfect implementation of our designs.
              </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="flex focus:outline-none text-left w-full pt-3 pr-4 pb-3 pl-4 gap-x-4 gap-y-4 items-center justify-between" data-faq-toggle="" onclick="const c=this.nextElementSibling,i=this.querySelector('svg');if(c.style.maxHeight==='0px'||!c.style.maxHeight){c.style.maxHeight=c.scrollHeight+'px';i.classList.add('rotate-180')}else{c.style.maxHeight='0px';i.classList.remove('rotate-180')}" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium" style={{}}>
                What is "CRO Strategy"?
              </span>
<svg className="lucide lucide-chevron-down transition-transform duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(203, 213, 225)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300" style={{maxHeight: '0px'}}>
<div className="pb-6">
                Conversion Rate Optimization (CRO) involves analyzing user
                behavior on your site and making data-backed changes to increase
                the percentage of visitors who become customers. We use
                heatmaps, A/B testing, and user feedback.
              </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="flex gap-4 focus:outline-none text-left w-full pt-3 pr-4 pb-3 pl-4 gap-x-4 gap-y-4 items-center justify-between" data-faq-toggle="" onclick="const c=this.nextElementSibling,i=this.querySelector('svg');if(c.style.maxHeight==='0px'||!c.style.maxHeight){c.style.maxHeight=c.scrollHeight+'px';i.classList.add('rotate-180')}else{c.style.maxHeight='0px';i.classList.remove('rotate-180')}" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium">
                Can I pause my subscription?
              </span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-300 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300" style={{maxHeight: '0px'}}>
<div className="pb-6">
                Absolutely. If you run out of tasks or need a break, you can
                pause your subscription and resume it whenever you have more
                work for us. No questions asked.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 md:py-20 w-full max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
<div className="relative scroll-fade pt-20 visible">
<div className="flex items-center justify-center">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10" style={{}}>
<svg className="lucide lucide-rocket h-3.5 w-3.5 text-cyan-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
            Start Your Transformation
          </span>
</div>
<div className="max-w-3xl text-center mx-auto mt-6 scroll-fade scroll-fade-delay visible">
<h2 className="md:text-6xl text-4xl font-semibold text-slate-50 tracking-tight" style={{}}>
            Ready to Dominate
          </h2>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50 mt-1" style={{}}>
            Your
            <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300" style={{}}>
              Market?
            </span>
</h2>
<p className="mt-4 text-base md:text-lg text-slate-400" style={{}}>
            Stop leaving money on the table. Let's build a brand that converts.
          </p>

<div className="relative inline-block group mt-6 scroll-fade scroll-fade-delay-2 visible">
<a className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] inline-flex items-center justify-center gap-2 text-white bg-neutral-900/60 z-10 border-white/20 border rounded-xl pt-3 pr-6 pb-3 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" href="https://wa.me/971586155033?text=Hello%20I%20would%20be%20interested%20in%20your%20service" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" rel="noopener noreferrer" style={{-X: '236px', -Y: '31px', -O: '1'}} target="_blank">
<span className="z-10 inline-flex items-center gap-2 font-semibold relative">
                Start Scaling Today
                <svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10"></span>
</a>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>
</section>

<footer className="mt-20 border-t border-white/10 bg-black/40 pt-16 pb-8 backdrop-blur-lg">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2" href="https://shorturl.at/XETOt">
<span className="text-lg font-semibold tracking-tight text-neutral-200">
                MetaSolutions.
              </span>
</a>
<p className="mt-4 text-sm text-neutral-400 max-w-xs">
              Helping ambitious brands scale through data-driven design and
              development.
            </p>
<div className="mt-6 flex gap-4">

</div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-neutral-200">Services</h3>
<ul className="mt-4 space-y-2 text-sm text-neutral-400">
<li className="">
<a className="hover:text-white transition" href="https://shorturl.at/XETOt">
                  Web Design
                </a>
</li>
<li className="">
<a className="hover:text-white transition" href="https://shorturl.at/XETOt">
                  Development
                </a>
</li>
<li className="">
<a className="hover:text-white transition" href="https://shorturl.at/XETOt">
                  CRO Strategy
                </a>
</li>
<li className="">
<a className="hover:text-white transition" href="https://shorturl.at/XETOt">
                  Branding
                </a>
</li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-neutral-200">Company</h3>
<ul className="mt-4 space-y-2 text-sm text-neutral-400">
<li className="">
<a className="hover:text-white transition" href="https://shorturl.at/XETOt">
                  About
                </a>
</li>
<li className="">
<a className="hover:text-white transition" href="https://shorturl.at/XETOt">
                  Work
                </a>
</li>
<li className="">
<a className="hover:text-white transition" href="https://shorturl.at/XETOt">
                  Careers
                </a>
</li>
<li className="">
<a className="hover:text-white transition" href="https://shorturl.at/XETOt">
                  Contact
                </a>
</li>
</ul>
</div>
<div className="">
<ul className="mt-4 space-y-2 text-sm text-neutral-400">
<li className=""></li>
<li className=""></li>
</ul>
</div>
</div>
</div>
</footer>

    </>
  );
}
