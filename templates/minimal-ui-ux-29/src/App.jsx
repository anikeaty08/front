import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Comfortaa', 'cursive'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e', // Beige/Warm Grey accent
800: '#292524',
900: '#1c1917',
}
},
animation: {
'fade-in-up': 'fadeInUp 1.0s ease-in-out 1.0s forwards',
'reveal': 'reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px) translateZ(-50px)' },
'100%': { opacity: '1', transform: 'translateY(0) translateZ(0)' },
},
reveal: {
'0%': { clipPath: 'inset(0 100% 0 0)' },
'100%': { clipPath: 'inset(0 0 0 0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex flex-col md:flex-row min-h-screen w-full relative">

<aside className="fixed z-50 bottom-0 w-full md:top-0 md:left-0 md:h-screen md:w-24 glass-sidebar flex md:flex-col justify-between items-center py-4 px-6 md:py-8 transition-all duration-300">

<div className="hidden md:flex flex-col items-center">
<span className="font-display font-semibold text-xl tracking-tighter text-black">JD</span>
</div>

<nav className="flex md:flex-col gap-8 md:gap-10 w-full justify-around md:justify-center items-center">
<a className="group relative flex items-center justify-center text-stone-400 hover:text-black transition-colors duration-300" href="#hero">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute left-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block whitespace-nowrap">Domov</span>
</a>
<a className="group relative flex items-center justify-center text-stone-400 hover:text-black transition-colors duration-300" href="#work">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute left-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block whitespace-nowrap">Dela</span>
</a>
<a className="group relative flex items-center justify-center text-stone-400 hover:text-black transition-colors duration-300" href="#tools">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute left-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block whitespace-nowrap">Orodja</span>
</a>
<a className="group relative flex items-center justify-center text-stone-400 hover:text-black transition-colors duration-300" href="#pricing">
<iconify-icon icon="lucide:credit-card" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute left-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block whitespace-nowrap">Cenik</span>
</a>
<a className="group relative flex items-center justify-center text-stone-400 hover:text-black transition-colors duration-300" href="#contact">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute left-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block whitespace-nowrap">Kontakt</span>
</a>
</nav>

<div className="hidden md:flex flex-col items-center">
<div className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-pulse"></div>
</div>
</aside>

<main className="w-full md:pl-24 relative z-0">

<section className="min-h-screen flex flex-col lg:flex-row overflow-hidden relative" id="hero">

<div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden bg-stone-200">
<div className="absolute inset-0 bg-stone-900/10 z-10 mix-blend-overlay"></div>
<img alt="Designer Portrait" className="w-full h-full object-cover grayscale sepia-[0.1] contrast-[1.05] animate-reveal opacity-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" style={{animationDelay: '0.2s'}}/>
</div>

<div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-20 bg-stone-50/50 backdrop-blur-sm relative">
<div className="max-w-xl opacity-0 animate-fade-in-up">
<span className="font-sans text-xs uppercase tracking-[0.2em] text-stone-400 mb-6 block">Umetnost Digitalnega</span>
<h1 className="font-display text-4xl lg:text-5xl leading-tight tracking-tight text-stone-900 mb-6">
                            Ustvarjam digitalna <br/>
<span className="italic font-light text-stone-500">doživetja</span> z dušo.
                        </h1>
<p className="font-sans text-sm font-light text-stone-600 mb-10 max-w-sm leading-relaxed">
                            Sem Jan, UI/UX oblikovalec, specializiran za preoblikovanje kompleksnih idej v čiste, intuitivne in estetsko dovršene spletne rešitve.
                        </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="group relative px-8 py-3 bg-stone-900 text-stone-50 text-xs font-medium tracking-wide rounded-full overflow-hidden transition-all hover:bg-black hover:scale-[1.02]" href="#contact">
<span className="relative z-10">Kontaktiraj me</span>
</a>
<a className="group px-8 py-3 bg-transparent border border-stone-300 text-stone-900 text-xs font-medium tracking-wide rounded-full hover:border-stone-900 transition-all flex items-center gap-2" href="#work">
<span>Moja dela</span>
<iconify-icon className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" icon="lucide:arrow-down-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 bg-stone-100" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<h2 className="font-display text-3xl tracking-tight text-stone-900 mb-2">Izbrana Dela</h2>
<p className="text-xs text-stone-500 font-light">Kolekcija prenov 2023 — 2024</p>
</div>
<div className="hidden md:block w-32 h-[1px] bg-stone-300 mb-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-stone-200 overflow-hidden rounded-sm relative mb-6">
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-700 z-10"></div>
<img alt="Architecture Project" className="w-full h-full object-cover grayscale-[100%] group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-stone-200 pt-4">
<div>
<h3 className="font-display text-lg text-stone-900 mb-1 group-hover:translate-x-2 transition-transform duration-500">Arhitektura Novak</h3>
<p className="text-xs text-stone-400 font-light">Prenova Identitete / Web Design</p>
</div>
<iconify-icon className="text-stone-300 group-hover:text-stone-900 transition-colors" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="w-full aspect-[4/3] bg-stone-200 overflow-hidden rounded-sm relative mb-6">
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-700 z-10"></div>
<img alt="E-commerce Fashion" className="w-full h-full object-cover grayscale-[100%] group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-105" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-stone-200 pt-4">
<div>
<h3 className="font-display text-lg text-stone-900 mb-1 group-hover:translate-x-2 transition-transform duration-500">Lumina Mode</h3>
<p className="text-xs text-stone-400 font-light">E-Commerce / UX Raziskava</p>
</div>
<iconify-icon className="text-stone-300 group-hover:text-stone-900 transition-colors" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-stone-200 overflow-hidden rounded-sm relative mb-6">
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-700 z-10"></div>
<img alt="FinTech App" className="w-full h-full object-cover grayscale-[100%] group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-stone-200 pt-4">
<div>
<h3 className="font-display text-lg text-stone-900 mb-1 group-hover:translate-x-2 transition-transform duration-500">Vault Finance</h3>
<p className="text-xs text-stone-400 font-light">App Interface / Dashboard</p>
</div>
<iconify-icon className="text-stone-300 group-hover:text-stone-900 transition-colors" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-50 border-y border-stone-200 overflow-hidden">
<div className="px-6 lg:px-20 max-w-7xl mx-auto">
<div className="text-center mb-16">
<iconify-icon className="text-stone-300 mb-4" icon="lucide:quote" width="32"></iconify-icon>
<h2 className="font-display text-2xl tracking-tight text-stone-900">Zaupanje Odličnosti</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="p-8 md:p-10 border border-stone-200 bg-white/40 hover:bg-white hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500 group">
<div className="flex items-center gap-1 mb-6 text-stone-300 group-hover:text-stone-900 transition-colors">
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
</div>
<p className="font-display text-lg leading-relaxed text-stone-800 mb-8">
                                "Sodelovanje z Janom je preseglo vsa pričakovanja. Njegov občutek za minimalizem in funkcionalnost je dvignil našo znamko na povsem nov nivo."
                            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200 grayscale overflow-hidden">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Ana Kovač</h4>
<p className="text-[10px] text-stone-400 uppercase tracking-wider">CEO, Studio Krog</p>
</div>
</div>
</div>

<div className="p-8 md:p-10 border border-stone-200 bg-white/40 hover:bg-white hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500 group md:-mt-8">
<div className="flex items-center gap-1 mb-6 text-stone-300 group-hover:text-stone-900 transition-colors">
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
</div>
<p className="font-display text-lg leading-relaxed text-stone-800 mb-8">
                                "Estetika, ki diha. Vsak element na strani ima svoj namen. Končni izdelek ni le spletna stran, ampak prava digitalna umetnina."
                            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200 grayscale overflow-hidden">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Marko Zupan</h4>
<p className="text-[10px] text-stone-400 uppercase tracking-wider">Direktor, AlpineTech</p>
</div>
</div>
</div>

<div className="p-8 md:p-10 border border-stone-200 bg-white/40 hover:bg-white hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500 group">
<div className="flex items-center gap-1 mb-6 text-stone-300 group-hover:text-stone-900 transition-colors">
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
</div>
<p className="font-display text-lg leading-relaxed text-stone-800 mb-8">
                                "Profesionalnost od prvega klica do končnega lansiranja. Jan razume luksuzni segment in ve, kako vizualno komunicirati vrednost."
                            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200 grayscale overflow-hidden">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Sara Vidmar</h4>
<p className="text-[10px] text-stone-400 uppercase tracking-wider">Ustanoviteljica, Bloom</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 bg-stone-100 relative overflow-hidden" id="tools">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 text-center mb-20">
<h2 className="font-display text-3xl tracking-tight text-stone-900 mb-4">Digitalni Arzenal</h2>
<p className="text-sm text-stone-500 font-light max-w-lg mx-auto">Precizna orodja za brezkompromisne rezultate.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">

<div className="flex flex-col items-center justify-center p-8 bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl hover:border-stone-300 transition-all duration-500 animate-float" style={{animationDelay: '0s'}}>
<iconify-icon className="text-stone-800 mb-4 drop-shadow-lg" icon="lucide:figma" strokeWidth="1" width="32"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Figma</span>
</div>

<div className="flex flex-col items-center justify-center p-8 bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl hover:border-stone-300 transition-all duration-500 animate-float" style={{animationDelay: '1.5s'}}>
<iconify-icon className="text-stone-800 mb-4 drop-shadow-lg" icon="lucide:code-2" strokeWidth="1" width="32"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Development</span>
</div>

<div className="flex flex-col items-center justify-center p-8 bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl hover:border-stone-300 transition-all duration-500 animate-float" style={{animationDelay: '0.5s'}}>
<iconify-icon className="text-stone-800 mb-4 drop-shadow-lg" icon="lucide:pen-tool" strokeWidth="1" width="32"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Adobe CC</span>
</div>

<div className="flex flex-col items-center justify-center p-8 bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl hover:border-stone-300 transition-all duration-500 animate-float" style={{animationDelay: '2s'}}>
<iconify-icon className="text-stone-800 mb-4 drop-shadow-lg" icon="lucide:wand-2" strokeWidth="1" width="32"></iconify-icon>
<span className="text-xs font-medium tracking-wide">AI Enhanced</span>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 bg-stone-50" id="pricing">
<div className="text-center mb-20">
<h2 className="font-display text-3xl tracking-tight text-stone-900">Investicija</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto border-t border-stone-200">

<div className="group p-10 md:p-12 border-b md:border-b-0 md:border-r border-stone-200 md:border-l hover:bg-white transition-colors duration-500 relative">
<div className="mb-8">
<h3 className="font-display text-xl text-stone-900 mb-2">Esenca</h3>
<p className="text-xs text-stone-500 h-10">Popoln začetek za osebne znamke.</p>
</div>
<ul className="space-y-4 mb-12">
<li className="flex items-center gap-3 text-xs text-stone-600 font-light"><iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon> Unikaten Design</li>
<li className="flex items-center gap-3 text-xs text-stone-600 font-light"><iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon> Do 5 podstrani</li>
<li className="flex items-center gap-3 text-xs text-stone-600 font-light"><iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon> Mobile Responsive</li>
</ul>
<a className="inline-block w-full py-3 border border-stone-200 text-center text-xs font-medium uppercase tracking-wider hover:bg-stone-900 hover:text-white transition-all" href="#">Izberi</a>
</div>

<div className="group p-10 md:p-12 border-b md:border-b-0 md:border-r border-stone-200 bg-white relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-900 text-white px-3 py-1 text-[10px] uppercase tracking-widest rounded-full">Priporočeno</div>
<div className="mb-8">
<h3 className="font-display text-xl text-stone-900 mb-2">Podpis</h3>
<p className="text-xs text-stone-500 h-10">Za podjetja, ki želijo izstopati.</p>
</div>
<ul className="space-y-4 mb-12">
<li className="flex items-center gap-3 text-xs text-stone-600 font-light"><iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon> Vse iz paketa Esenca</li>
<li className="flex items-center gap-3 text-xs text-stone-600 font-light"><iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon> Napredne Animacije</li>
<li className="flex items-center gap-3 text-xs text-stone-600 font-light"><iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon> CMS Integracija</li>
<li className="flex items-center gap-3 text-xs text-stone-600 font-light"><iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon> SEO Optimizacija</li>
</ul>
<a className="inline-block w-full py-3 bg-stone-900 text-white text-center text-xs font-medium uppercase tracking-wider hover:bg-stone-800 transition-all" href="#">Izberi</a>
</div>

<div className="group p-10 md:p-12 border-b md:border-b-0 border-stone-200 md:border-r hover:bg-white transition-colors duration-500 relative">
<div className="mb-8">
<h3 className="font-display text-xl text-stone-900 mb-2">Prestiž</h3>
<p className="text-xs text-stone-500 h-10">Popolna custom rešitev brez limitov.</p>
</div>
<ul className="space-y-4 mb-12">
<li className="flex items-center gap-3 text-xs text-stone-600 font-light"><iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon> Custom Development</li>
<li className="flex items-center gap-3 text-xs text-stone-600 font-light"><iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon> 3D Elementi</li>
<li className="flex items-center gap-3 text-xs text-stone-600 font-light"><iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon> Branding Strategija</li>
</ul>
<a className="inline-block w-full py-3 border border-stone-200 text-center text-xs font-medium uppercase tracking-wider hover:bg-stone-900 hover:text-white transition-all" href="#">Izberi</a>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 bg-stone-100">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<h2 className="font-display text-3xl tracking-tight text-stone-900">Miselni Proces</h2>
<a className="text-xs border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors" href="#">Vsi članki</a>
</div>
<div className="flex flex-col gap-8">

<article className="group flex flex-col md:flex-row gap-8 items-start cursor-pointer">
<div className="w-full md:w-64 aspect-[3/2] overflow-hidden rounded-sm bg-stone-200">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 border-b border-stone-200 pb-8 group-hover:border-stone-400 transition-colors">
<span className="text-[10px] text-stone-400 uppercase tracking-widest mb-2 block">Oktober 12, 2023</span>
<h3 className="font-display text-xl text-stone-900 mb-2 group-hover:text-stone-600 transition-colors">Pomen praznega prostora v luksuznem dizajnu</h3>
<p className="text-xs text-stone-500 font-light line-clamp-2">Zakaj manj ni vedno več, ampak je manj - bolje. Raziskovanje negativnega prostora v digitalnih medijih.</p>
</div>
</article>

<article className="group flex flex-col md:flex-row gap-8 items-start cursor-pointer">
<div className="w-full md:w-64 aspect-[3/2] overflow-hidden rounded-sm bg-stone-200">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 border-b border-stone-200 pb-8 group-hover:border-stone-400 transition-colors">
<span className="text-[10px] text-stone-400 uppercase tracking-widest mb-2 block">September 28, 2023</span>
<h3 className="font-display text-xl text-stone-900 mb-2 group-hover:text-stone-600 transition-colors">Tipografija kot glas blagovne znamke</h3>
<p className="text-xs text-stone-500 font-light line-clamp-2">Kako izbira pisave podzavestno vpliva na percepcijo vrednosti in zaupanja pri uporabnikih.</p>
</div>
</article>
</div>
</section>

<footer className="bg-stone-900 text-stone-100 py-24 px-6 lg:px-20 relative overflow-hidden" id="contact">

<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
<div>
<h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-8">Ustvarimo nekaj<br/>brezčasnega.</h2>
<a className="text-xl md:text-2xl font-light text-stone-400 hover:text-white transition-colors border-b border-stone-800 hover:border-white pb-1 inline-block" href="mailto:hello@janportfolio.si">
                            hello@janportfolio.si
                        </a>
</div>
<div className="flex flex-col justify-end items-start md:items-end">
<nav className="flex flex-col gap-4 text-sm font-light text-stone-400 text-right">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
<a className="hover:text-white transition-colors" href="#">Behance</a>
</nav>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800 text-[10px] text-stone-500 uppercase tracking-widest">
<p>© 2024 Jan Design. Vse pravice pridržane.</p>
<p>Ljubljana, Slovenija</p>
</div>
</footer>
</main>
</div>

    </>
  );
}
