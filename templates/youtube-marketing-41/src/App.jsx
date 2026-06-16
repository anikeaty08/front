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
  


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-8 shadow-2xl shadow-black/50">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-zap w-3 h-3 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-sm font-medium text-white tracking-tight">WideFlow</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Audiência</a>
<a className="hover:text-white transition-colors" href="#">Soluções</a>
<a className="hover:text-white transition-colors" href="#">Oportunidade</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
<img alt="BR" className="w-4 h-auto rounded-[2px]" src="https://flagcdn.com/w20/br.png"/>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<a className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-full bg-zinc-100 px-4 font-medium text-zinc-900 transition-all hover:bg-white hover:scale-105" href="#">
<span className="text-xs">Entrar</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950 z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

<div className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Nova engine de tráfego disponível
            </div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-6 text-white leading-[1.1]">
                Domine o YouTube. <br/>
<span className="text-zinc-500">Onde a atenção é </span><span className="text-gradient-primary">real.</span>
</h1>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Chega de métricas de vaidade. Conecte sua marca aos canais que o público realmente ouve. 
                Gerencie campanhas e rastreie cada real vendido em uma única plataforma unificada.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium text-base hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                    Acessar Plataforma
                    <svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<button className="h-12 px-8 rounded-full glass-panel text-white font-medium text-base hover:bg-white/10 transition-all flex items-center gap-2 group">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 fill-white ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
                    Ver Demonstração
                </button>
</div>
</div>

<div className="relative mt-20 w-full max-w-6xl mx-auto perspective-[1000px]">
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/40">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Monitoramento Oficial Integrado Com</p>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Kiwify</span>
<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-flame w-5 h-5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg> Hotmart</span>
<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Eduzz</span>
<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Monetizze</span>
<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Stripe</span>
<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-wallet w-5 h-5" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg> Paypal</span>
<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-infinity w-5 h-5" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg> Paddle</span>

<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Kiwify</span>
<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-flame w-5 h-5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg> Hotmart</span>
<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Eduzz</span>
<span className="text-xl font-bold flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Monetizze</span>
</div>
<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

<div className="sticky top-32">
<span className="text-blue-500 font-medium tracking-wide text-sm mb-4 block">AUDIÊNCIA REAL</span>
<h2 className="text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
                    Visualização não paga conta. <br/>
<span className="text-zinc-600">Retenção sim.</span>
</h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed font-light">
                    O mercado mudou. Enquanto outras redes sociais oferecem segundos de distração, o YouTube oferece profundidade e confiança.
                    <br/><br/>
                    A WideFlow não é apenas uma ferramenta de busca. É o seu centro de comando para posicionar sua marca dentro das histórias que o seu público já ama assistir.
                </p>
<div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border-l-4 border-l-blue-500">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=11"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=33"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=53"/>
</div>
<div>
<p className="text-sm text-white font-medium">Conecte-se com quem influencia.</p>
<p className="text-xs text-zinc-500">Mais de 10k creators mapeados.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-6">

<div className="group glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 hover:border-blue-500/30 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full group-hover:bg-blue-600/30 transition-all"></div>
<div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-clock w-6 h-6 text-blue-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Alta Retenção</h3>
<p className="text-base text-zinc-400 font-light">Vídeos longos geram confiança profunda na marca. O público está lá para ouvir, não apenas para rolar o feed.</p>
</div>

<div className="group glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 hover:border-violet-500/30 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-violet-600/20 blur-[60px] rounded-full group-hover:bg-violet-600/30 transition-all"></div>
<div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-target w-6 h-6 text-violet-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Público Qualificado</h3>
<p className="text-base text-zinc-400 font-light">Intenção de busca real. O usuário procurou pelo conteúdo, tornando a conversão muito mais natural.</p>
</div>

<div className="group glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 hover:border-emerald-500/30 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-600/20 blur-[60px] rounded-full group-hover:bg-emerald-600/30 transition-all"></div>
<div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-bar-chart-2 w-6 h-6 text-emerald-400" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">ROI Mensurável</h3>
<p className="text-base text-zinc-400 font-light">Rastreamento pixel-perfect de cada conversão. Saiba exatamente quanto volta para cada real investido.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                    Potência máxima para  <span className="text-gradient-primary">sua operação.</span>
</h2>
<p className="text-lg text-zinc-400 font-light">
                    Transformamos processos complexos em um fluxo de trabalho intuitivo, projetado para escalar.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative rounded-3xl bg-zinc-900/50 border border-white/5 p-8 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded">01</span>
<div className="h-px bg-white/10 flex-1"></div>
</div>
<div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Discovery</h3>
<p className="text-base text-zinc-400 mb-8 font-light">
                        A Curadoria Perfeita. Acesse nosso marketplace com mais de 70.000 canais brasileiros mapeados com filtros avançados.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-blue-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Análise preditiva de Shorts vs Longos
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-blue-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Contatos verificados
                        </li>
</ul>
</div>

<div className="group relative rounded-3xl bg-zinc-900/50 border border-white/5 p-8 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-mono text-violet-500 bg-violet-500/10 px-2 py-1 rounded">02</span>
<div className="h-px bg-white/10 flex-1"></div>
</div>
<div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center mb-6 text-violet-400 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="lucide lucide-kanban-square w-6 h-6" data-lucide="kanban-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M8 7v7"></path><path d="M12 7v4"></path><path d="M16 7v9"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-4">CRM Gestão</h3>
<p className="text-base text-zinc-400 mb-8 font-light">
                        O Fim do Caos Operacional. Elimine planilhas e prints de WhatsApp. Sua agência inteira em uma única tela.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-violet-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Inbox proprietário para negociação
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-violet-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Gestão de prazos e entregáveis
                        </li>
</ul>
</div>

<div className="group relative rounded-3xl bg-zinc-900/50 border border-white/5 p-8 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">03</span>
<div className="h-px bg-white/10 flex-1"></div>
</div>
<div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="lucide lucide-pie-chart w-6 h-6" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Tracking ROI</h3>
<p className="text-base text-zinc-400 mb-8 font-light">
                        A Verdade sobre o ROI. Saiba exatamente quanto cada real investido trouxe de volta com integração via Webhook.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Integração Hotmart, Kiwify, Eduzz
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Short Links monitorados
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-40 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto px-6">
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8">
                Pronto para escalar  suas vendas?
            </h2>
<p className="text-xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto">
                Cadastre-se agora e descubra como conectar sua marca aos criadores que realmente convertem. O acesso é imediato.
            </p>
<div className="flex flex-col items-center">
<button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-10 font-medium text-zinc-900 transition-all duration-300 hover:bg-zinc-200 hover:ring-4 hover:ring-white/20">
<span className="mr-2 text-lg">Cadastre-se Grátis</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 transition-all group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-zinc-300/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
</button>
<p className="mt-6 text-sm text-zinc-600">Nenhum cartão de crédito necessário • Setup em 2 minutos</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-zap w-2.5 h-2.5 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-base font-semibold text-white tracking-tight">WideFlow</span>
</div>
<div className="flex gap-8 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Termos de Uso</a>
<a className="hover:text-white transition-colors" href="#">Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<p className="text-zinc-600 text-sm">© 2024 WideFlow Inc.</p>
</div>
</footer>


    </>
  );
}
