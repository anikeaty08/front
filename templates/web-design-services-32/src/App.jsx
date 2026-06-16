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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute -top-[20%] -left-[10%] w-2/3 h-2/3 bg-glow-teal filter blur-[100px] opacity-40 animate-pulse-glow"></div>
<div className="absolute top-[40%] -right-[10%] w-2/3 h-2/3 bg-glow-purple filter blur-[120px] opacity-30"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-cyan-900/10 to-transparent blur-[80px]"></div>
</div>

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#050608]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 md:px-8">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.5)]">
<span className="text-white font-semibold tracking-tighter">B</span>
</div>
<span className="self-center text-xl font-semibold whitespace-nowrap tracking-tight text-white group-hover:text-cyan-300 transition-colors">BLEY</span>
</a>
<div className="hidden md:block w-full md:w-auto" id="navbar-default">
<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
<li><a className="block py-2 px-3 text-gray-400 hover:text-cyan-300 transition-colors" href="#about">O nás</a></li>
<li><a className="block py-2 px-3 text-gray-400 hover:text-cyan-300 transition-colors" href="#process">Proces</a></li>
<li><a className="block py-2 px-3 text-gray-400 hover:text-cyan-300 transition-colors" href="#pricing">Ceník</a></li>
<li><a className="block py-2 px-3 text-white bg-white/10 rounded hover:bg-white/20 transition-all border border-white/10" href="#contact">Kontakt</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
<div className="text-center max-w-6xl mr-auto ml-auto relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                Tvorba webů pro Jižní Čechy
            </div>
<h1 className="leading-[1.1] md:text-6xl lg:text-7xl text-4xl font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
    Moderní web pro váš byznys <br className="hidden md:block"/>
<span className="text-gradient-primary">rychle, jednoduše a bez starostí</span>
</h1>
<p className="mb-10 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                Tvořím profesionální weby pro živnostníky a firmy v Jižních Čechách. <br className="hidden md:block"/>
<span className="text-gray-200 font-normal">Návrh zdarma — zaplatíte až po schválení.</span>
</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
<a className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-black bg-cyan-400 rounded-lg overflow-hidden transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_-5px_rgba(0,242,255,0.6)]" href="#contact">
<span className="relative z-10">Získat DEMO zdarma</span>
<svg className="lucide lucide-arrow-right w-4 h-4 ml-2 relative z-10 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-white/20 bg-white/5 rounded-lg hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_-10px_rgba(255,255,255,0.3)] transition-all" href="tel:+420777123456">
<svg className="lucide lucide-phone w-4 h-4 mr-2 text-gray-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                    Zavolat: +420 777 123 456
                </a>
</div>

<div className="perspective-container max-w-4xl mx-auto px-4">
<div className="tilted-mockup glass-card rounded-xl p-2 md:p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] border-t border-white/20 relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-lg overflow-hidden bg-[#0a0c10] aspect-video border border-white/5">

<div className="h-8 bg-[#151920] border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
<div className="ml-4 h-4 w-64 bg-white/5 rounded-full"></div>
</div>

<div className="p-8 md:p-12 flex flex-col items-center justify-center h-full relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="text-center space-y-4 relative z-10">
<div className="w-20 h-20 mx-auto bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-4">
<svg className="lucide lucide-layout w-10 h-10 text-white" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div className="h-4 w-48 bg-gray-700/50 rounded mx-auto"></div>
<div className="h-3 w-32 bg-gray-800/50 rounded mx-auto"></div>
<div className="flex gap-2 justify-center mt-4">
<div className="h-8 w-24 bg-cyan-500/20 rounded border border-cyan-500/30"></div>
<div className="h-8 w-24 bg-white/5 rounded border border-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-2xl neon-border-hover transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-cyan-950/50 flex items-center justify-center mb-4 border border-cyan-500/20 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-6 h-6 text-cyan-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-white font-medium text-lg mb-2">Demo zdarma do 48 h</h3>
<p className="text-gray-400 text-sm leading-relaxed">Nekupujete zajíce v pytli. Nejprve uvidíte návrh, až poté se rozhodnete.</p>
</div>

<div className="glass-card p-6 rounded-2xl neon-border-hover transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-950/50 flex items-center justify-center mb-4 border border-blue-500/20 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-smartphone w-6 h-6 text-blue-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-white font-medium text-lg mb-2">Responzivní design</h3>
<p className="text-gray-400 text-sm leading-relaxed">Váš web bude vypadat skvěle na mobilu, tabletu i počítači.</p>
</div>

<div className="glass-card p-6 rounded-2xl neon-border-hover transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-purple-950/50 flex items-center justify-center mb-4 border border-purple-500/20 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-trending-up w-6 h-6 text-purple-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-white font-medium text-lg mb-2">Více poptávek</h3>
<p className="text-gray-400 text-sm leading-relaxed">Design zaměřený na konverze. Proměňte návštěvníky v platící zákazníky.</p>
</div>

<div className="glass-card p-6 rounded-2xl neon-border-hover transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-teal-950/50 flex items-center justify-center mb-4 border border-teal-500/20 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-map-pin w-6 h-6 text-teal-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-white font-medium text-lg mb-2">Lokální servis</h3>
<p className="text-gray-400 text-sm leading-relaxed">Osobní přístup v Jižních Čechách. Žádné anonymní call centrum.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 relative overflow-hidden" id="about">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                    Web, který vám <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">přivede zakázky</span>
</h2>
<p className="text-gray-400 mb-8 text-lg font-light">
                    Většina malých firem má web, který neprodává. Já tvořím digitální vizitky, které budují důvěru a šetří vám čas při komunikaci se zákazníky.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
<svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-200">Profesionální a důvěryhodný vzhled</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
<svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-200">Jednoduchá orientace pro zákazníky</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
<svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-200">CTA tlačítka + kontaktní formulář</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
<svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-200">Základní SEO optimalizace pro vyhledávače</span>
</div>
</div>
</div>
<div className="relative animate-float-delayed">

<div className="aspect-square rounded-2xl border border-white/10 glass-card p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
<div className="grid grid-cols-2 gap-4 h-full">
<div className="bg-white/5 rounded-xl w-full h-4/5 self-end border border-white/5 animate-pulse"></div>
<div className="bg-gradient-to-b from-cyan-500/20 to-blue-500/20 rounded-xl w-full h-full border border-cyan-500/20"></div>
<div className="bg-white/5 rounded-xl w-full h-full border border-white/5"></div>
<div className="bg-white/5 rounded-xl w-full h-3/5 border border-white/5"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0c10] border border-cyan-500/50 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(0,242,255,0.3)] z-20">
<span className="text-cyan-400 font-semibold tracking-wide">GARANCE KVALITY</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 relative" id="process">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Jak to probíhá?</h2>
<p className="text-gray-400">Jednoduše, transparentně a bez zbytečných schůzek.</p>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600 md:-translate-x-1/2 h-full opacity-30"></div>
<div className="space-y-12 relative z-10">

<div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">1. Rychlý telefon</h3>
<p className="text-gray-400 text-sm">Krátká konzultace (5–10 min). Zjistím, co děláte a co potřebujete.</p>
</div>
<div className="w-8 h-8 rounded-full bg-[#050608] border-2 border-cyan-500 shadow-[0_0_15px_rgba(0,242,255,0.5)] z-10 flex items-center justify-center text-xs font-bold text-cyan-400 order-1 md:order-2">1</div>
<div className="md:w-5/12 order-3 md:order-3"></div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 group">
<div className="md:w-5/12 order-3 md:order-1"></div>
<div className="w-8 h-8 rounded-full bg-[#050608] border-2 border-blue-500 shadow-[0_0_15px_rgba(0,157,255,0.5)] z-10 flex items-center justify-center text-xs font-bold text-blue-400 order-1 md:order-2">2</div>
<div className="md:w-5/12 text-left order-2 md:order-3">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">2. Návrh zdarma</h3>
<p className="text-gray-400 text-sm">Do 48 hodin připravím demo ukázku webu. Nezávazně.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-purple-400 transition-colors">3. Úpravy a schválení</h3>
<p className="text-gray-400 text-sm">Doladíme detaily, texty a fotky k vaší spokojenosti.</p>
</div>
<div className="w-8 h-8 rounded-full bg-[#050608] border-2 border-purple-500 shadow-[0_0_15px_rgba(179,91,255,0.5)] z-10 flex items-center justify-center text-xs font-bold text-purple-400 order-1 md:order-2">3</div>
<div className="md:w-5/12 order-3 md:order-3"></div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 group">
<div className="md:w-5/12 order-3 md:order-1"></div>
<div className="w-8 h-8 rounded-full bg-[#050608] border-2 border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)] z-10 flex items-center justify-center text-xs font-bold text-teal-400 order-1 md:order-2">4</div>
<div className="md:w-5/12 text-left order-2 md:order-3">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-teal-400 transition-colors">4. Spuštění webu</h3>
<p className="text-gray-400 text-sm">Do 7 dnů je web online, zabezpečený a připravený prodávat.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-[#0a0c10]/50" id="pricing">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-center text-white mb-16 tracking-tight">Férové ceny, žádné skryté poplatky</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="glass-card p-8 rounded-2xl border-white/5 hover:border-white/20 transition-all">
<h3 className="text-xl text-gray-300 font-medium mb-4">Jednostránkový web</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white tracking-tight">9 900 Kč</span>
<span className="text-gray-500 text-sm">jednorázově</span>
</div>
<p className="text-gray-400 text-sm mb-8 border-b border-white/10 pb-8">Ideální pro vizitku živnostníka nebo jednoduchou prezentaci služby.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Moderní design na míru</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Responzivní zobrazení</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Kontaktní formulář</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Hosting na 1 rok zdarma</li>
</ul>
<a className="block w-full py-3 text-center rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors font-medium text-sm" href="#contact">Poptat tento web</a>
</div>

<div className="glass-card p-8 rounded-2xl border-cyan-500/30 relative overflow-hidden group hover:border-cyan-400/50 transition-all shadow-[0_0_30px_-10px_rgba(0,242,255,0.1)]">
<div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">DOPORUČENO</div>
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
<h3 className="text-xl text-white font-medium mb-4">Web do 6 sekcí</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white tracking-tight">15–25 000 Kč</span>
<span className="text-gray-500 text-sm">jednorázově</span>
</div>
<p className="text-gray-400 text-sm mb-8 border-b border-white/10 pb-8">Pro firmy, které chtějí ukázat portfolio, služby a budovat značku.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Rozšířený strukturovaný design</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Galerie realizací / Portfolio</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Pokročilé SEO nastavení</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Napojení na Google Mapy a sítě</li>
</ul>
<a className="block w-full py-3 text-center rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 hover:shadow-[0_0_20px_-5px_rgba(0,242,255,0.5)] transition-all text-sm" href="#contact">Poptat DEMO zdarma</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 relative">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-12">Spokojení klienti</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">

<div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
</div>
<div>
<div className="text-white font-medium text-sm">Jan Novák</div>
<div className="text-gray-500 text-xs">Truhlářství Novák</div>
</div>
</div>
<p className="text-gray-400 text-sm italic">"Konečně web, který mi přivádí zákazníky. Pan Bley vše vysvětlil a do týdne bylo hotovo."</p>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
</div>
<div>
<div className="text-white font-medium text-sm">Petr Svoboda</div>
<div className="text-gray-500 text-xs">Autoservis JH</div>
</div>
</div>
<p className="text-gray-400 text-sm italic">"Líbilo se mi, že jsem viděl návrh předem zdarma. Neměl jsem co ztratit a výsledek je super."</p>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
</div>
<div>
<div className="text-white font-medium text-sm">Marie Dvořáková</div>
<div className="text-gray-500 text-xs">Kosmetický salón</div>
</div>
</div>
<p className="text-gray-400 text-sm italic">"Čistý design, jednoduchá domluva. Zákaznice si nový web chválí pro přehlednost."</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 relative z-10 overflow-hidden" id="contact">
<div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto">
<div className="glass-card p-8 md:p-12 rounded-3xl border border-cyan-500/20 shadow-[0_0_50px_-20px_rgba(0,0,0,0.5)]">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Začněte s návrhem zdarma</h2>
<p className="text-gray-400">Vyplňte formulář a ozvu se vám do 24 hodin.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">Jméno</label>
<input className="w-full bg-[#0a0c10] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Jan Novák" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">Telefon</label>
<input className="w-full bg-[#0a0c10] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="+420 777 000 000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">E-mail</label>
<input className="w-full bg-[#0a0c10] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="vas@email.cz" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">Lokalita</label>
<input className="w-full bg-[#0a0c10] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Např. České Budějovice" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">Typ podnikání</label>
<input className="w-full bg-[#0a0c10] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Např. Truhlář" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">Stručný popis projektu</label>
<textarea className="w-full bg-[#0a0c10] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Co by měl web umět?" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold text-lg tracking-tight hover:shadow-[0_0_30px_-5px_rgba(0,157,255,0.6)] transition-all transform hover:scale-[1.01] active:scale-[0.99]" type="submit">
                        Požádat o DEMO zdarma
                    </button>
<p className="text-center text-xs text-gray-500 mt-4">Odesláním souhlasíte se zpracováním osobních údajů.</p>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020305] py-12 px-4 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
<span className="text-white text-xs font-bold">B</span>
</div>
<span className="text-xl font-bold tracking-tight text-white">BLEY</span>
</div>
<ul className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
<li><a className="hover:text-cyan-400 transition-colors" href="#">O nás</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Služby</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">GDPR</a></li>
</ul>
<div className="flex flex-col text-right text-sm text-gray-500">
<a className="hover:text-white transition-colors" href="tel:+420777123456">+420 777 123 456</a>
<a className="hover:text-white transition-colors" href="mailto:info@bley.cz">info@bley.cz</a>
</div>
</div>
<div className="text-center text-xs text-gray-700 mt-12">
            © 2023 BLEY Design. Všechna práva vyhrazena.
        </div>
</footer>


    </>
  );
}
