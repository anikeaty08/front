import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="grain"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-[#eb0029] flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
<i className="text-white w-5 h-5" data-lucide="crosshair"></i>
</div>
<span className="font-semibold text-xl tracking-tight uppercase">Gangbusters</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#about">The Game</a>
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#classes">Operatives</a>
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#maps">Maps</a>
</div>
<button className="bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2 skew-x-[-10deg]">
<span className="skew-x-[10deg]">Join Beta</span>
<i className="w-4 h-4 skew-x-[10deg]" data-lucide="arrow-right"></i>
</button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden bg-[#020203] pt-32 pb-20 relative">

<div className="absolute inset-0 hero-grid pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507] pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80 pointer-events-none z-0"></div>

<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#eb0029]/5 to-transparent pointer-events-none"></div>
<div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#eb0029]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex gap-2 uppercase text-sm font-medium text-[#eb0029] tracking-wide bg-[#eb0029]/5 border-[#eb0029]/20 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Mais que um jogo de cartas</div>
<h1 className="leading-[0.9] lg:text-6xl text-6xl font-semibold text-white tracking-tight drop-shadow-2xl">O esporte da mente que transforma cartas em estratégia.</h1>
<p className="leading-relaxed text-xl text-zinc-500 max-w-lg">Bridge combina estratégia, parceria, memória e leitura de jogo como nenhum outro jogo de cartas.</p>

<div className="w-full max-w-md pt-4">
<form className="flex flex-col gap-4">
<div className="relative group">

<div className="absolute -inset-0.5 bg-gradient-to-r from-[#eb0029]/50 to-zinc-800 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
<div className="relative flex bg-black border border-white/10 rounded-lg p-1 focus-within:border-[#eb0029]/50 transition-colors">
<input className="w-full bg-transparent text-white px-4 py-3 outline-none placeholder:text-zinc-700 font-medium tracking-wide uppercase" placeholder="ENTER EMAIL ADDRESS" type="email"/>
<button className="hover:bg-[#c40022] uppercase transition-colors flex-shrink-0 font-medium text-white tracking-wider bg-[#eb0029] rounded-md pt-2 pr-6 pb-2 pl-6 shadow-[0_0_20px_-5px_#eb0029]" type="submit">
                                    Enlist
                                </button>
</div>
</div>
<div className="flex items-center gap-3">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-5 h-5 border border-zinc-700 group-hover:border-[#eb0029] flex items-center justify-center transition-colors bg-black">
<input className="peer hidden" type="checkbox"/>
<i className="w-3.5 h-3.5 text-[#eb0029] opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-500 transition-colors select-none">I agree to the Terms of Service</span>
</label>
</div>
</form>
</div>
</div>

<div className="relative lg:h-[600px] w-full hidden lg:block perspective-1000">

<div className="absolute inset-0 border border-white/5 transform rotate-3 z-0"></div>
<div className="absolute inset-0 border border-[#eb0029]/10 transform -rotate-2 z-0"></div>

<div className="absolute inset-4 bg-black overflow-hidden group shadow-[0_0_50px_-15px_rgba(0,0,0,1)]">

<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply"></div>
<img alt="Cyberpunk Character" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1140391269/vector/vector-illustration-of-horizontal-lines-pattern-seamless-scan-lines-background-for-design.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=X7336z2R8N9bOaY7x7y3r5e2d6l6g7j8k9l0m1n2o3p')] opacity-10 pointer-events-none z-20 mix-blend-overlay bg-repeat"></div>

<div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent w-full z-30">
<div className="text-4xl font-semibold tracking-tighter mb-2 text-white/90">OPERATIVE: JINX</div>
<div className="flex gap-4 text-[#eb0029]">
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="zap"></i> ASSAULT</div>
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="shield-alert"></i> HIGH THREAT</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-black/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-1">
<div className="text-4xl font-semibold text-white tracking-tight">150K+</div>
<div className="text-sm text-zinc-600 uppercase tracking-wider font-medium">Waitlist Members</div>
</div>
<div className="space-y-1">
<div className="text-4xl font-semibold text-white tracking-tight">5v5</div>
<div className="text-sm text-zinc-600 uppercase tracking-wider font-medium">Tactical Gameplay</div>
</div>
<div className="space-y-1">
<div className="text-4xl font-semibold text-white tracking-tight">12</div>
<div className="text-sm text-zinc-600 uppercase tracking-wider font-medium">Launch Maps</div>
</div>
<div className="space-y-1">
<div className="text-4xl font-semibold text-white tracking-tight">Q4</div>
<div className="text-sm text-zinc-600 uppercase tracking-wider font-medium">Beta Launch</div>
</div>
</div>
</section>

<section className="bg-[#050507] pt-32 pb-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-sm font-medium text-[#eb0029] mb-4 uppercase tracking-widest">Core Mechanics</h2>
<h3 className="text-5xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl">
                    PRECISION MEETS <br/>
<span className="italic text-zinc-600">EXPRESSION.</span>
</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900/30 border border-white/5 hover:border-[#eb0029] p-8 transition-colors duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-opacity duration-300">
<i className="w-24 h-24 text-[#eb0029] -rotate-12" data-lucide="crosshair"></i>
</div>
<div className="z-10 relative">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-white group-hover:text-[#eb0029] transition-colors">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<h4 className="text-2xl font-semibold tracking-tight mb-3">Estratégia</h4>
<p className="leading-relaxed group-hover:text-zinc-400 transition-colors text-lg text-zinc-500">Cada mão é um novo problema para resolver.
Bridge exige leitura, cálculo, adaptação e tomada de decisão.</p>
</div>
</div>

<div className="group relative bg-zinc-900/30 border border-white/5 hover:border-[#eb0029] p-8 transition-colors duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-opacity duration-300">
<i className="w-24 h-24 text-[#eb0029] -rotate-12" data-lucide="zap"></i>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-white group-hover:text-[#eb0029] transition-colors">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h4 className="text-2xl font-semibold tracking-tight mb-3">Parceria</h4>
<p className="leading-relaxed group-hover:text-zinc-400 transition-colors text-lg text-zinc-500">Você nunca joga sozinho.
No bridge, a conexão entre os parceiros faz toda a diferença.</p>
</div>
</div>

<div className="group relative bg-zinc-900/30 border border-white/5 hover:border-[#eb0029] p-8 transition-colors duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-opacity duration-300">
<i className="w-24 h-24 text-[#eb0029] -rotate-12" data-lucide="users"></i>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-white group-hover:text-[#eb0029] transition-colors">
<i className="w-6 h-6" data-lucide="network"></i>
</div>
<h4 className="text-2xl font-semibold tracking-tight mb-3">Competição</h4>
<p className="leading-relaxed group-hover:text-zinc-400 transition-colors text-lg text-zinc-500">Principiantes e campeões podem sentar na mesma mesa.
Poucos esportes permitem esse nível de convivência e aprendizado.</p>
</div>
</div>
</div>
</div>
</section>

<div className="clip-diagonal flex overflow-hidden bg-[#eb0029] w-full h-24 relative items-center justify-center">
<div className="flex gap-12 animate-marquee whitespace-nowrap">
<span className="text-4xl font-semibold text-black uppercase tracking-tighter">Do not falter</span>
<span className="text-4xl font-semibold text-black/50 uppercase tracking-tighter">///</span>
<span className="uppercase text-4xl font-semibold text-black tracking-tighter">PENSE MELHOR</span>
<span className="text-4xl font-semibold text-black/50 uppercase tracking-tighter">///</span>
<span className="uppercase text-4xl font-semibold text-black tracking-tighter">JOGUE EM DUPLA</span>
<span className="text-4xl font-semibold text-black/50 uppercase tracking-tighter">///</span>
<span className="uppercase text-4xl font-semibold text-black tracking-tighter">DOMINE A MESA</span>
<span className="text-4xl font-semibold text-black/50 uppercase tracking-tighter">///</span>
</div>
</div>

<section className="bg-[#020203] pt-32 pb-32" id="classes">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 relative">
<div className="relative z-10 aspect-[4/5] bg-zinc-900 border border-zinc-800 p-2 transform -rotate-3 transition-transform hover:rotate-0 duration-500">
<img alt="Cyberpunk Agent" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-6 right-6 flex flex-col items-end gap-1">
<div className="w-16 h-1 bg-[#eb0029]"></div>
<div className="w-8 h-1 bg-white"></div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-full border-2 border-[#eb0029] transform rotate-3 translate-x-4 translate-y-4 z-0 opacity-50"></div>
</div>
<div className="md:w-1/2 w-full space-y-8">
<div className="">
<h2 className="text-sm font-medium text-[#eb0029] mb-4 uppercase tracking-widest">The Roster</h2>
<h3 className="text-5xl font-semibold text-white tracking-tight mb-6">ESCOLHA SUA PORTA DE ENTRADA</h3>
<p className="text-xl text-zinc-500 leading-relaxed">
                        From street-samurai duelists to heavy-weapons techies. Every agent brings a unique kit to the battlefield. No two matches play the same.
                    </p>
</div>
<div className="space-y-4">

<div className="group cursor-pointer">
<div className="flex items-center justify-between border-b border-zinc-800 py-4 group-hover:border-[#eb0029] transition-colors">
<span className="group-hover:text-white transition-colors text-2xl font-semibold text-zinc-600">01. Conheça o jogo</span>
<i className="w-6 h-6 text-[#eb0029] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group cursor-pointer">
<div className="flex items-center justify-between border-b border-zinc-800 py-4 group-hover:border-[#eb0029] transition-colors">
<span className="group-hover:text-white transition-colors text-2xl font-semibold text-zinc-600">02. Descubra a comunidade</span>
<i className="w-6 h-6 text-[#eb0029] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group cursor-pointer">
<div className="flex items-center justify-between border-b border-zinc-800 py-4 group-hover:border-[#eb0029] transition-colors">
<span className="group-hover:text-white transition-colors text-2xl font-semibold text-zinc-600">03. Comece a aprender</span>
<i className="w-6 h-6 text-[#eb0029] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="pt-4">
<button className="text-white border-b border-white pb-1 hover:text-[#eb0029] hover:border-[#eb0029] transition-colors uppercase tracking-widest text-sm font-medium">View All Agents</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050507] border-t border-white/5 relative overflow-hidden" id="maps">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-sm font-medium text-[#eb0029] mb-4 uppercase tracking-widest">Operations</h2>
<h3 className="text-5xl font-semibold tracking-tight text-white">
                        THEATERS OF WAR
                    </h3>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 border border-zinc-800 hover:border-[#eb0029] hover:bg-[#eb0029] hover:text-white flex items-center justify-center transition-all clip-button group" onclick="document.getElementById('map-scroller').scrollBy({left: -400, behavior: 'smooth'})">
<i className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" data-lucide="chevron-left"></i>
</button>
<button className="w-12 h-12 border border-zinc-800 hover:border-[#eb0029] hover:bg-[#eb0029] hover:text-white flex items-center justify-center transition-all clip-button group" onclick="document.getElementById('map-scroller').scrollBy({left: 400, behavior: 'smooth'})">
<i className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 hide-scroll -mx-6 px-6" id="map-scroller">

<div className="snap-start shrink-0 w-[85vw] md:w-[600px] group relative cursor-pointer">
<div className="aspect-video relative overflow-hidden clip-button border border-white/10 group-hover:border-[#eb0029] transition-all duration-300">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex items-center justify-between">
<div>
<div className="text-[#eb0029] text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
<div className="w-2 h-2 bg-[#eb0029] rounded-full animate-pulse"></div>
                                        Control Point
                                    </div>
<h4 className="text-3xl font-semibold text-white tracking-tight">NEON SECTOR</h4>
</div>
<div className="hidden md:block text-right">
<div className="text-zinc-500 text-xs font-mono">LOC_ID: 0921</div>
<div className="text-zinc-500 text-xs font-mono">DISTRICT: LOWER</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-start border-t border-zinc-800 pt-4 opacity-50 group-hover:opacity-100 transition-opacity">
<p className="text-zinc-400 text-sm max-w-xs">Tight corridors and vertical flanking routes in the heart of the neon slums.</p>
<i className="w-5 h-5 text-[#eb0029]" data-lucide="map-pin"></i>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[600px] group relative cursor-pointer">
<div className="aspect-video relative overflow-hidden clip-button border border-white/10 group-hover:border-[#eb0029] transition-all duration-300">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&amp;w=2544&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex items-center justify-between">
<div className="">
<div className="text-[#eb0029] text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
<div className="w-2 h-2 bg-[#eb0029] rounded-full animate-pulse"></div>
                                        Payload Escort
                                    </div>
<h4 className="text-3xl font-semibold text-white tracking-tight">BIOLAB OMEGA</h4>
</div>
<div className="hidden md:block text-right">
<div className="text-zinc-500 text-xs font-mono">LOC_ID: 1044</div>
<div className="text-zinc-500 text-xs font-mono">DISTRICT: CORP</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-start border-t border-zinc-800 pt-4 opacity-50 group-hover:opacity-100 transition-opacity">
<p className="text-zinc-400 text-sm max-w-xs">A sterile high-tech facility with destructible glass barriers and long sightlines.</p>
<i className="w-5 h-5 text-[#eb0029]" data-lucide="flask-conical"></i>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[600px] group relative cursor-pointer">
<div className="aspect-video relative overflow-hidden clip-button border border-white/10 group-hover:border-[#eb0029] transition-all duration-300">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex items-center justify-between">
<div>
<div className="text-[#eb0029] text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
<div className="w-2 h-2 bg-[#eb0029] rounded-full animate-pulse"></div>
                                        Deathmatch
                                    </div>
<h4 className="text-3xl font-semibold text-white tracking-tight">SKYHOOK PLATFORM</h4>
</div>
<div className="hidden md:block text-right">
<div className="text-zinc-500 text-xs font-mono">LOC_ID: 8821</div>
<div className="text-zinc-500 text-xs font-mono">DISTRICT: AERO</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-start border-t border-zinc-800 pt-4 opacity-50 group-hover:opacity-100 transition-opacity">
<p className="text-zinc-400 text-sm max-w-xs">Atmospheric low-gravity zones on a moving platform above the clouds.</p>
<i className="w-5 h-5 text-[#eb0029]" data-lucide="cloud"></i>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[600px] group relative cursor-pointer">
<div className="aspect-video relative overflow-hidden clip-button border border-white/10 group-hover:border-[#eb0029] transition-all duration-300">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex items-center justify-between">
<div>
<div className="text-[#eb0029] text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
<div className="w-2 h-2 bg-[#eb0029] rounded-full animate-pulse"></div>
                                        Tactical
                                    </div>
<h4 className="text-3xl font-semibold text-white tracking-tight">FOUNDRY 01</h4>
</div>
<div className="hidden md:block text-right">
<div className="text-zinc-500 text-xs font-mono">LOC_ID: 3321</div>
<div className="text-zinc-500 text-xs font-mono">DISTRICT: IND</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-start border-t border-zinc-800 pt-4 opacity-50 group-hover:opacity-100 transition-opacity">
<p className="text-zinc-400 text-sm max-w-xs">Industrial complex with active hazards and moving machinery.</p>
<i className="w-5 h-5 text-[#eb0029]" data-lucide="factory"></i>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-[#eb0029]">

<div className="absolute inset-0 bg-black opacity-10 mix-blend-multiply pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23000000\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="text-center max-w-4xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="md:text-8xl leading-[0.9] text-6xl font-semibold text-white tracking-tighter mb-8">Entre em um novo universo de estratégia.
</h2>
<p className="text-xl text-white/80 max-w-2xl mr-auto mb-10 ml-auto">Conheça o bridge, acompanhe os conteúdos e descubra por que esse jogo conquista gerações no mundo todo.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<input className="bg-black/20 border border-white/20 text-white placeholder:text-white/50 px-6 py-4 w-full md:w-96 outline-none focus:bg-black/40 transition-colors rounded-none font-medium" placeholder="agent@gangbusters.gg" type="email"/>
<button className="bg-white text-[#eb0029] px-8 py-4 font-semibold hover:bg-zinc-100 transition-colors w-full md:w-auto uppercase tracking-wide">
                    Claim Spot
                </button>
</div>
<p className="mt-4 text-white/50 text-sm">Join 150,000+ others waiting for deployment.</p>
</div>
</section>

<footer className="bg-black pt-20 pb-10 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-[#eb0029] flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="crosshair"></i>
</div>
<span className="font-semibold text-lg tracking-tight uppercase">Gangbusters</span>
</div>
<p className="text-zinc-600 max-w-sm text-lg">
                        A next-generation tactical shooter built for competitive play. Developed by industry veterans.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Explore</h4>
<ul className="space-y-4 text-zinc-600">
<li><a className="hover:text-[#eb0029] transition-colors" href="#">Game Info</a></li>
<li><a className="hover:text-[#eb0029] transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-[#eb0029] transition-colors" href="#">Maps</a></li>
<li><a className="hover:text-[#eb0029] transition-colors" href="#">Esports</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Social</h4>
<ul className="space-y-4 text-zinc-600">
<li><a className="hover:text-[#eb0029] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="twitter"></i> Twitter</a></li>
<li><a className="hover:text-[#eb0029] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="youtube"></i> YouTube</a></li>
<li><a className="hover:text-[#eb0029] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="message-circle"></i> Discord</a></li>
<li><a className="hover:text-[#eb0029] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="instagram"></i> Instagram</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-700 text-sm">
<div>© 2024 Gangbusters Inc. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-zinc-500" href="#">Privacy Policy</a>
<a className="hover:text-zinc-500" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
