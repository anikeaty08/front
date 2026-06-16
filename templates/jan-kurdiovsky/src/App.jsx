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



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Reveal Elements on Scroll + Counter Trigger
            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            
            const revealOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    
                    // Add reveal class
                    entry.target.classList.add('is-visible');
                    
                    // Trigger counter if inside revealed element
                    const counters = entry.target.querySelectorAll('.counter-up');
                    counters.forEach(counter => {
                        if (counter.classList.contains('counted')) return;
                        
                        counter.classList.add('counted');
                        const target = parseFloat(counter.getAttribute('data-target'));
                        const decimals = parseInt(counter.getAttribute('data-decimals')) || 1;
                        const duration = 2000; // ms
                        const frameRate = 30; // ms
                        const totalFrames = duration / frameRate;
                        const increment = target / totalFrames;
                        let currentCount = 0;

                        const countInterval = setInterval(() => {
                            currentCount += increment;
                            if (currentCount >= target) {
                                counter.innerText = target.toFixed(decimals);
                                clearInterval(countInterval);
                            } else {
                                counter.innerText = currentCount.toFixed(decimals);
                            }
                        }, frameRate);
                    });
                    
                    observer.unobserve(entry.target);
                });
            }, revealOptions);

            revealElements.forEach(el => revealOnScroll.observe(el));

            // 2. Parallax Hover Effect on Hero Visual
            const parallaxWrap = document.querySelector('.parallax-wrap');
            const parallaxInner = document.querySelector('.parallax-inner');

            if (parallaxWrap && parallaxInner) {
                parallaxWrap.addEventListener('mousemove', (e) => {
                    const rect = parallaxWrap.getBoundingClientRect();
                    // Calculate mouse position relative to center of container
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const moveX = (x - centerX) * 0.05;
                    const moveY = (y - centerY) * 0.05;
                    
                    parallaxInner.style.transform = `perspective(1000px) translate3d(${moveX}px, ${moveY}px, 0) rotateX(${-moveY * 0.1}deg) rotateY(${moveX * 0.1}deg)`;
                });

                parallaxWrap.addEventListener('mouseleave', () => {
                    // Reset to initial CSS state smoothly
                    parallaxInner.style.transform = `perspective(1000px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)`;
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40"></div>

</div>

<header className="sticky top-0 w-full z-50 bg-[#02040A]/80 backdrop-blur-md border-b border-[#1F2933]">
<div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-6 h-6 border border-[#EF4444] flex items-center justify-center relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EF4444] animate-[ticker-slide_2s_linear_infinite]"></div>
<span className="text-[#F9FAFB] font-medium text-xs">W</span>
</div>
<span className="font-medium text-[#F9FAFB] tracking-tight text-sm">WEALTH PORTFOLIO</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-xs tracking-wide text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors relative group" href="#sluzby">
                    Služby
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#EF4444] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs tracking-wide text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors relative group" href="#proces">
                    Proces
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#EF4444] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs tracking-wide text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors relative group" href="#reference">
                    Reference
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#EF4444] transition-all duration-300 group-hover:w-full"></span>
</a>
</nav>

<div className="hidden md:flex items-center">
<a className="text-xs text-[#F9FAFB] hover:text-[#EF4444] transition-colors flex items-center gap-2 tracking-wide group" href="#kontakt">
                    Klientský portál
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<button className="md:hidden text-[#F9FAFB]">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow flex flex-col relative z-10">

<section className="relative pt-24 pb-32 border-b border-[#1F2933] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<div className="flex items-center gap-2 mb-8 reveal-on-scroll">
<span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse"></span>
<span className="text-[#EF4444] text-xs tracking-widest uppercase font-medium">Strategické plánování</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#F9FAFB] font-light tracking-tight leading-[1.1] mb-8 reveal-on-scroll group cursor-default">
                        Chytrá finanční
                        <br/>
                        řešení pro
                        <br/>
<span className="text-[#9CA3AF] inline-block transition-transform duration-500 group-hover:tracking-normal">dlouhodobý růst.</span>
</h1>
<p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-lg mb-12 leading-relaxed reveal-on-scroll">
                        Pomáhám chránit a zhodnocovat váš majetek pomocí sofistikovaných investičních strategií založených na datech, nikoliv emocích.
                    </p>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 reveal-on-scroll">
<a className="relative overflow-hidden bg-[#0B1120] border border-[#EF4444] text-[#F9FAFB] px-8 py-4 text-xs tracking-wide uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_14px_-2px_rgba(239,68,68,0.4)] group inline-flex items-center gap-3" href="#kontakt">
                            Domluvit nezávaznou konzultaci
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent overflow-hidden">
<span className="block w-1/3 h-full bg-[#EF4444] absolute left-[-100%] group-hover:animate-ticker"></span>
</span>
</a>

<div className="flex gap-6 border-l border-[#1F2933] pl-6 py-1">
<div className="flex flex-col">
<span className="text-[#22C55E] text-lg font-light flex items-center gap-0.5 tracking-tight">
                                    +<span className="counter-up" data-target="8.5">0.0</span>%
                                </span>
<span className="text-[10px] uppercase tracking-widest text-[#9CA3AF]">Cílový výnos</span>
</div>
<div className="flex flex-col">
<span className="text-[#F9FAFB] text-lg font-light tracking-tight">
<span className="counter-up" data-decimals="0" data-target="15">0</span> let
                                </span>
<span className="text-[10px] uppercase tracking-widest text-[#9CA3AF]">Horizont</span>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] lg:h-[600px] w-full parallax-wrap reveal-on-scroll" id="hero-visual">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#EF4444]/10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="absolute inset-0 flex items-center justify-center transform-gpu transition-transform duration-700 ease-out parallax-inner" style={{perspective: '1000px'}}>
<div className="relative w-[120%] h-[120%] rotate-x-[60deg] rotate-z-[-15deg] scale-110">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2933_1px,transparent_1px),linear-gradient(to_bottom,#1F2933_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 mask-radial"></div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 1000">
<defs>
<lineargradient id="chart-red" x1="0" x2="0" y1="1" y2="0">
<stop offset="0%" stop-color="#EF4444" stop-opacity="0"></stop>
<stop offset="100%" stop-color="#EF4444" stop-opacity="0.2"></stop>
</lineargradient>
</defs>

<path d="M100,800 L100,600 Q250,650 400,450 T700,300 T900,150 L900,800 Z" fill="url(#chart-red)"></path>

<path className="draw-anim" d="M100,600 Q250,650 400,450 T700,300 T900,150" fill="none" stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>

<circle cx="400" cy="450" fill="#02040A" r="8" stroke="#F9FAFB" strokeWidth="3"></circle>
<circle cx="700" cy="300" fill="#02040A" r="8" stroke="#EF4444" strokeWidth="3"></circle>

<circle cx="900" cy="150" fill="#F9FAFB" r="10" stroke="#EF4444" strokeWidth="4"></circle>
<circle className="animate-pulse" cx="900" cy="150" fill="#EF4444" opacity="0.2" r="24"></circle>
</svg>

<div className="absolute left-[10%] bottom-[20%] w-[1px] h-[60%] bg-gradient-to-t from-transparent via-[#1F2933] to-transparent">
<div className="absolute bottom-[25%] left-0 w-4 h-[1px] bg-[#1F2933]"></div>
<div className="absolute bottom-[50%] left-0 w-4 h-[1px] bg-[#1F2933]"></div>
<div className="absolute bottom-[75%] left-0 w-4 h-[1px] bg-[#1F2933]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#1F2933] bg-[#050814] overflow-hidden group-marquee">
<div className="flex items-center">
<div className="py-4 px-6 border-r border-[#1F2933] bg-[#02040A] relative z-20 whitespace-nowrap hidden sm:block">
<span className="text-[10px] font-medium tracking-widest text-[#9CA3AF] uppercase flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                        Live Data
                    </span>
</div>
<div className="flex-1 overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'}}>
<div className="animate-marquee flex items-center gap-12 py-4">

<span className="text-xs text-[#9CA3AF] font-mono tracking-wide flex items-center gap-2 hover:text-[#F9FAFB] transition-colors">S&amp;P 500 <span className="text-[#22C55E]">+1.24%</span></span>
<span className="text-xs text-[#9CA3AF] font-mono tracking-wide flex items-center gap-2 hover:text-[#F9FAFB] transition-colors">NASDAQ <span className="text-[#22C55E]">+0.89%</span></span>
<span className="text-xs text-[#9CA3AF] font-mono tracking-wide flex items-center gap-2 hover:text-[#F9FAFB] transition-colors">VIX <span className="text-[#EF4444]">-4.20%</span></span>
<span className="text-xs text-[#9CA3AF] font-mono tracking-wide flex items-center gap-2 hover:text-[#F9FAFB] transition-colors">US10Y <span className="text-[#9CA3AF]">4.25%</span></span>
<span className="text-xs text-[#9CA3AF] font-mono tracking-wide flex items-center gap-2 hover:text-[#F9FAFB] transition-colors">GOLD <span className="text-[#22C55E]">+0.15%</span></span>
<span className="text-xs text-[#9CA3AF] font-mono tracking-wide flex items-center gap-2 hover:text-[#F9FAFB] transition-colors">S&amp;P 500 <span className="text-[#22C55E]">+1.24%</span></span>
<span className="text-xs text-[#9CA3AF] font-mono tracking-wide flex items-center gap-2 hover:text-[#F9FAFB] transition-colors">NASDAQ <span className="text-[#22C55E]">+0.89%</span></span>
<span className="text-xs text-[#9CA3AF] font-mono tracking-wide flex items-center gap-2 hover:text-[#F9FAFB] transition-colors">VIX <span className="text-[#EF4444]">-4.20%</span></span>
<span className="text-xs text-[#9CA3AF] font-mono tracking-wide flex items-center gap-2 hover:text-[#F9FAFB] transition-colors">US10Y <span className="text-[#9CA3AF]">4.25%</span></span>
<span className="text-xs text-[#9CA3AF] font-mono tracking-wide flex items-center gap-2 hover:text-[#F9FAFB] transition-colors">GOLD <span className="text-[#22C55E]">+0.15%</span></span>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#1F2933] relative" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end gap-8">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-4 reveal-on-scroll">
<span className="text-[#EF4444] text-xs tracking-widest uppercase font-medium">01. Služby</span>
<div className="w-12 h-[1px] bg-[#1F2933]"></div>
</div>
<h2 className="text-3xl md:text-5xl text-[#F9FAFB] font-light tracking-tight mb-4 reveal-on-scroll relative inline-block group">
                            Co přesně pro vás můžu řešit
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#EF4444] transition-all duration-700 ease-out group-hover:w-full"></span>
</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1F2933] border border-[#1F2933]">

<div className="bg-[#050814] p-10 relative group hover:z-10 transition-all duration-300 reveal-on-scroll cursor-default overflow-hidden" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-[#EF4444] opacity-30 group-hover:opacity-100 group-hover:h-[2px] transition-all duration-300"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#EF4444]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

<svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 blur-[2px] text-[#EF4444] group-hover:blur-[1px] transition-all" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0,50 L10,40 L20,45 L30,20 L40,30 L50,15 L60,25 L70,5 L80,15 L100,0" fill="none" stroke="currentColor" strokeWidth="1"></path>
</svg>
<div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
<div className="w-10 h-10 border border-[#1F2933] bg-[#02040A] flex items-center justify-center mb-6 text-[#F9FAFB] group-hover:border-[#EF4444]/50 group-hover:text-[#EF4444] transition-colors">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-[#F9FAFB] font-medium mb-3 tracking-tight">Investice</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed mb-8">
                                Sestavení diverzifikovaného portfolia na míru (ETF, akcie, dluhopisy). Zaměření na minimalizaci poplatků a maximalizaci dlouhodobého složeného úročení.
                            </p>
<a className="inline-flex items-center gap-2 text-xs text-[#9CA3AF] hover:text-[#EF4444] tracking-wide uppercase transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#EF4444] hover:after:w-full after:transition-all" href="#">
                                Zjistit více
                            </a>
</div>
</div>

<div className="bg-[#050814] p-10 relative group hover:z-10 transition-all duration-300 reveal-on-scroll cursor-default overflow-hidden" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-[#EF4444] opacity-30 group-hover:opacity-100 group-hover:h-[2px] transition-all duration-300"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#EF4444]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="absolute bottom-6 right-6 flex items-end gap-1 opacity-10 group-hover:opacity-30 transition-opacity h-16">
<div className="w-2 bg-[#F9FAFB] h-full"></div>
<div className="w-2 bg-[#F9FAFB] h-[80%]"></div>
<div className="w-2 bg-[#F9FAFB] h-[60%]"></div>
<div className="w-2 bg-[#EF4444] h-[40%]"></div>
<div className="w-2 bg-[#EF4444] h-[20%]"></div>
</div>
<div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
<div className="w-10 h-10 border border-[#1F2933] bg-[#02040A] flex items-center justify-center mb-6 text-[#F9FAFB] group-hover:border-[#EF4444]/50 group-hover:text-[#EF4444] transition-colors">
<iconify-icon icon="solar:home-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-[#F9FAFB] font-medium mb-3 tracking-tight">Úvěry a hypotéky</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed mb-8">
                                Optimalizace dluhové zátěže. Vyjednání nejlepších podmínek pro financování bydlení či developerských projektů a chytrá strategie předčasného splácení.
                            </p>
<a className="inline-flex items-center gap-2 text-xs text-[#9CA3AF] hover:text-[#EF4444] tracking-wide uppercase transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#EF4444] hover:after:w-full after:transition-all" href="#">
                                Zjistit více
                            </a>
</div>
</div>

<div className="bg-[#050814] p-10 relative group hover:z-10 transition-all duration-300 reveal-on-scroll cursor-default overflow-hidden" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-[#EF4444] opacity-30 group-hover:opacity-100 group-hover:h-[2px] transition-all duration-300"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#EF4444]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

<svg className="absolute top-10 right-10 w-24 h-24 opacity-10 group-hover:opacity-30 transition-opacity transform -rotate-90" viewbox="0 0 32 32">
<circle cx="16" cy="16" fill="transparent" r="16" stroke="#1F2933" strokeWidth="4"></circle>
<circle cx="16" cy="16" fill="transparent" r="16" stroke="#F9FAFB" stroke-dasharray="70 100" stroke-dashoffset="0" strokeWidth="4"></circle>
<circle cx="16" cy="16" fill="transparent" r="16" stroke="#EF4444" stroke-dasharray="20 100" stroke-dashoffset="-70" strokeWidth="4"></circle>
</svg>
<div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
<div className="w-10 h-10 border border-[#1F2933] bg-[#02040A] flex items-center justify-center mb-6 text-[#F9FAFB] group-hover:border-[#EF4444]/50 group-hover:text-[#EF4444] transition-colors">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-[#F9FAFB] font-medium mb-3 tracking-tight">Komplexní plán</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed mb-8">
                                Audit stávajících smluv, nastavení ochrany majetku a rodiny, daňová optimalizace a příprava na generační obměnu a rentu.
                            </p>
<a className="inline-flex items-center gap-2 text-xs text-[#9CA3AF] hover:text-[#EF4444] tracking-wide uppercase transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#EF4444] hover:after:w-full after:transition-all" href="#">
                                Zjistit více
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#1F2933] bg-[#02040A] relative overflow-hidden" id="proces">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center flex flex-col items-center">
<div className="flex items-center gap-2 mb-4 reveal-on-scroll">
<span className="text-[#EF4444] text-xs tracking-widest uppercase font-medium">02. Metodika</span>
</div>
<h2 className="text-3xl md:text-5xl text-[#F9FAFB] font-light tracking-tight reveal-on-scroll relative group inline-block">
                        Jak spolupráce probíhá
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#EF4444] transition-all duration-700 ease-out group-hover:w-full"></span>
</h2>
</div>

<div className="relative pt-12 pb-12 reveal-on-scroll">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[200px] -translate-y-1/2 pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 200">
<path className="draw-anim" d="M 50,150 Q 250,150 500,100 T 950,50" fill="none" opacity="0.5" stroke="#B91C1C" stroke-dasharray="10 6" strokeWidth="2"></path>
</svg>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="relative flex flex-col items-center text-center md:pt-32 group">
<div className="w-4 h-4 rounded-full bg-[#02040A] border-2 border-[#1F2933] group-hover:border-[#EF4444] transition-colors absolute top-0 md:top-[142px] z-10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#1F2933]"></div>
<span className="text-[10px] text-[#EF4444] font-mono mb-3 mt-6 md:mt-0">FÁZE 1</span>
<h4 className="text-lg text-[#F9FAFB] font-medium tracking-tight mb-2">Audit a analýza</h4>
<p className="text-xs text-[#9CA3AF] leading-relaxed max-w-[200px]">Detailní zmapování současné situace, rizik a neefektivit ve stávajícím portfoliu.</p>
</div>

<div className="relative flex flex-col items-center text-center md:pt-20 group">
<div className="w-4 h-4 rounded-full bg-[#02040A] border-2 border-[#1F2933] group-hover:border-[#EF4444] transition-colors absolute top-0 md:top-[107px] z-10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#1F2933]"></div>
<span className="text-[10px] text-[#EF4444] font-mono mb-3 mt-6 md:mt-0">FÁZE 2</span>
<h4 className="text-lg text-[#F9FAFB] font-medium tracking-tight mb-2">Návrh strategie</h4>
<p className="text-xs text-[#9CA3AF] leading-relaxed max-w-[200px]">Vytvoření investičního plánu a asset alokace na míru vašemu horizontu a cílům.</p>
</div>

<div className="relative flex flex-col items-center text-center md:pt-10 group">
<div className="w-4 h-4 rounded-full bg-[#02040A] border-2 border-[#1F2933] group-hover:border-[#EF4444] transition-colors absolute top-0 md:top-[74px] z-10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#1F2933]"></div>
<span className="text-[10px] text-[#EF4444] font-mono mb-3 mt-6 md:mt-0">FÁZE 3</span>
<h4 className="text-lg text-[#F9FAFB] font-medium tracking-tight mb-2">Implementace</h4>
<p className="text-xs text-[#9CA3AF] leading-relaxed max-w-[200px]">Založení účtů, nákup aktiv a nastavení automatizace dle schváleného plánu.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-4 h-4 rounded-full bg-[#02040A] border-2 border-[#EF4444] shadow-[0_0_10px_rgba(239,68,68,0.5)] absolute top-0 md:top-[42px] z-10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#F9FAFB]"></div>
</div>
<span className="text-[10px] text-[#EF4444] font-mono mb-3 mt-6 md:mt-0">FÁZE 4</span>
<h4 className="text-lg text-[#F9FAFB] font-medium tracking-tight mb-2">Monitoring a rebalanc</h4>
<p className="text-xs text-[#9CA3AF] leading-relaxed max-w-[200px]">Průběžná správa, reporting výsledků a úpravy vah při tržních výkyvech.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#1F2933] bg-[#050814]" id="reference">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end gap-8">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-4 reveal-on-scroll">
<span className="text-[#EF4444] text-xs tracking-widest uppercase font-medium">03. Případové studie</span>
<div className="w-12 h-[1px] bg-[#1F2933]"></div>
</div>
<h2 className="text-3xl md:text-5xl text-[#F9FAFB] font-light tracking-tight reveal-on-scroll relative inline-block group">
                            Reference klientů
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#EF4444] transition-all duration-700 ease-out group-hover:w-full"></span>
</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-[#1F2933] bg-[#02040A] p-8 flex flex-col reveal-on-scroll relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(239,68,68,0.05)]">
<div className="absolute top-0 left-0 w-full h-[1px] bg-[#1F2933] group-hover:bg-[#EF4444] transition-colors"></div>
<div className="mb-6">
<span className="inline-block bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-medium">Investice</span>
</div>
<p className="text-base text-[#F9FAFB] font-light leading-relaxed mb-8 flex-grow">
                            "Přechod k systematickému pasivnímu investování s jasnou strategií nám ušetřil nemalé prostředky na poplatcích a přinesl klid do rodinných financí."
                        </p>
<div className="w-8 h-[1px] bg-[#EF4444] mb-4"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#050814] border border-[#1F2933] flex items-center justify-center text-[#9CA3AF] text-xs font-mono">PJ</div>
<div>
<div className="text-sm font-medium text-[#F9FAFB]">Petr J.</div>
<div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Majitel IT firmy</div>
</div>
</div>
</div>

<div className="border border-[#1F2933] bg-[#02040A] p-8 flex flex-col reveal-on-scroll relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(239,68,68,0.05)]">
<div className="absolute top-0 left-0 w-full h-[1px] bg-[#1F2933] group-hover:bg-[#EF4444] transition-colors"></div>
<div className="mb-6">
<span className="inline-block bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-medium">Komplexní plán</span>
</div>
<p className="text-base text-[#F9FAFB] font-light leading-relaxed mb-8 flex-grow">
                            "Cením si datového přístupu. Žádné spekulace, jen tvrdá čísla a modely vývoje naší renty. Poprvé mám pocit absolutní kontroly nad majetkem."
                        </p>
<div className="w-8 h-[1px] bg-[#EF4444] mb-4"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#050814] border border-[#1F2933] flex items-center justify-center text-[#9CA3AF] text-xs font-mono">MN</div>
<div>
<div className="text-sm font-medium text-[#F9FAFB]">Martina N.</div>
<div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Lékařka</div>
</div>
</div>
</div>

<div className="border border-[#1F2933] bg-[#02040A] p-8 flex flex-col reveal-on-scroll relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(239,68,68,0.05)]">
<div className="absolute top-0 left-0 w-full h-[1px] bg-[#1F2933] group-hover:bg-[#EF4444] transition-colors"></div>
<div className="mb-6">
<span className="inline-block bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-medium">Hypotéka</span>
</div>
<p className="text-base text-[#F9FAFB] font-light leading-relaxed mb-8 flex-grow">
                            "Získali jsme podmínky, na které jsme v bance nedosáhli. Navíc jsme nastavili strukturu splácení tak, aby nebrzdila naše portfolio cenných papírů."
                        </p>
<div className="w-8 h-[1px] bg-[#EF4444] mb-4"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#050814] border border-[#1F2933] flex items-center justify-center text-[#9CA3AF] text-xs font-mono">LK</div>
<div>
<div className="text-sm font-medium text-[#F9FAFB]">Lukáš K.</div>
<div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Developer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#1F2933] bg-[#02040A] relative overflow-hidden" id="kontakt">

<div className="absolute top-10 left-0 w-full h-[1px] bg-[#1F2933]">
<div className="h-full w-[20%] bg-[#EF4444] animate-[ticker-slide_4s_linear_infinite]"></div>
</div>
<div className="max-w-3xl mx-auto px-6 text-center z-10 relative reveal-on-scroll">
<iconify-icon className="text-[#EF4444] mb-6" icon="solar:shield-check-linear" strokeWidth="1.2" width="48"></iconify-icon>
<h2 className="text-4xl md:text-6xl text-[#F9FAFB] font-light tracking-tight mb-6">
                    Začněte budovat systém.
                </h2>
<p className="text-base text-[#9CA3AF] leading-relaxed mb-10 max-w-xl mx-auto">
                    Konzultace je nezávazná a slouží k ověření, zda dává spolupráce smysl pro obě strany na základě vašich očekávání a mých analytických možností.
                </p>
<a className="relative overflow-hidden bg-[#0B1120] border border-[#EF4444] text-[#F9FAFB] px-10 py-5 text-sm tracking-wide uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_-2px_rgba(239,68,68,0.5)] group inline-flex items-center justify-center gap-3 w-full sm:w-auto" href="mailto:kontakt@priklad.cz">
                    Domluvit schůzku
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent overflow-hidden">
<span className="block w-1/3 h-full bg-[#EF4444] absolute left-[-100%] group-hover:animate-ticker"></span>
</span>
</a>
</div>
</section>
</main>

<footer className="bg-[#02040A] border-t border-[#1F2933] pt-20 pb-10 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-5">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 border border-[#EF4444] flex items-center justify-center relative overflow-hidden">
<span className="text-[#F9FAFB] font-medium text-xs">W</span>
</div>
<span className="font-medium text-[#F9FAFB] tracking-tight text-sm">WEALTH PORTFOLIO</span>
</div>
<p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
                        Systematická správa majetku a investiční poradenství postavené na datech, prokazatelných strategiích a absolutní transparentnosti.
                    </p>
</div>

<div className="md:col-span-3 md:col-start-7">
<h5 className="text-[#F9FAFB] text-xs uppercase tracking-widest font-medium mb-6 flex items-center gap-2">
<span className="w-2 h-[1px] bg-[#EF4444]"></span> Navigace
                    </h5>
<ul className="space-y-4">
<li><a className="text-sm text-[#9CA3AF] hover:text-[#EF4444] transition-colors" href="#sluzby">Služby a řešení</a></li>
<li><a className="text-sm text-[#9CA3AF] hover:text-[#EF4444] transition-colors" href="#proces">Investiční metodika</a></li>
<li><a className="text-sm text-[#9CA3AF] hover:text-[#EF4444] transition-colors" href="#reference">Reference klientů</a></li>
<li><a className="text-sm text-[#9CA3AF] hover:text-[#EF4444] transition-colors" href="#kontakt">Klientský portál</a></li>
</ul>
</div>

<div className="md:col-span-3">
<h5 className="text-[#F9FAFB] text-xs uppercase tracking-widest font-medium mb-6 flex items-center gap-2">
<span className="w-2 h-[1px] bg-[#EF4444]"></span> Kontakt
                    </h5>
<ul className="space-y-4">
<li>
<a className="text-sm text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors flex items-center gap-2" href="mailto:kontakt@wealth.cz">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                                kontakt@wealth.cz
                            </a>
</li>
<li className="text-sm text-[#9CA3AF] flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                            +420 777 123 456
                        </li>
<li className="text-sm text-[#9CA3AF] flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
                            Praha, Česká republika
                        </li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-[#1F2933] flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-xs text-[#9CA3AF] tracking-wide">
                    © 2024 Wealth Portfolio Management. Všechna práva vyhrazena.
                </p>
<div className="flex items-center gap-6">
<a aria-label="LinkedIn" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors" href="#">
<iconify-icon icon="mingcute:linkedin-line" width="20"></iconify-icon>
</a>
<a aria-label="Twitter" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors" href="#">
<iconify-icon icon="mingcute:social-x-line" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
