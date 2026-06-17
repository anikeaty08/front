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



tailwind.config = { darkMode: 'class' }



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Icons embedded to remove external dependencies and ensure fast updates
        const systemIcons = {
            sun: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
            moon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
            mountain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
            monitor: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
            book: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
        };

        // Theme Toggle Logic
        const html = document.documentElement;
        const themeToggle = document.getElementById('theme-toggle');
        const themeIconContainer = document.getElementById('theme-icon-container');

        function updateThemeIcon() {
            themeIconContainer.innerHTML = html.classList.contains('dark') ? systemIcons.sun : systemIcons.moon;
        }

        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            updateThemeIcon();
        });
        
        // Init theme
        updateThemeIcon();

        // Simulator Logic - Adjusted horizontally to widen the clear visual zone uniformly
        const baseCurves = {
            P: [940, 260, 820, 290, 690, 360, 640, 420, 600, 600, 790, 850, 940, 1050],
            B: [990, 320, 860, 340, 720, 380, 640, 420, 590, 550, 690, 800, 790, 1050],
            L: [1010, 380, 890, 390, 740, 410, 640, 420, 590, 500, 620, 750, 690, 1050]
        };

        const elements = {
            sliderP: document.getElementById('slider-p'),
            sliderB: document.getElementById('slider-b'),
            sliderL: document.getElementById('slider-l'),
            valP: document.getElementById('val-p'),
            valB: document.getElementById('val-b'),
            valL: document.getElementById('val-l'),
            aberrationDeep: document.getElementById('aberration-deep'),
            aberrationPattern: document.getElementById('aberration-pattern'),
            aberrationTint: document.getElementById('aberration-tint'),
            visionGuideDynamic: document.getElementById('vision-guide-dynamic'),
            container: document.getElementById('lens-container'),
            tooltip: document.getElementById('tooltip'),
            tooltipIconContainer: document.getElementById('tooltip-icon-container'),
            tooltipTitle: document.getElementById('tooltip-title'),
            tooltipDesc: document.getElementById('tooltip-desc'),
        };

        function generateFillDString(pts) {
            const [StartX, StartY, C1X, C1Y, C2X, C2Y, MidX, MidY, C3X, C3Y, C4X, C4Y, EndX, EndY] = pts;
            const rightEdge = `M 500 -50 L 1050 -50 L 1050 ${StartY} L ${StartX} ${StartY}`;
            const rightCurve = `C ${C1X} ${C1Y}, ${C2X} ${C2Y}, ${MidX} ${MidY} C ${C3X} ${C3Y}, ${C4X} ${C4Y}, ${EndX} ${EndY}`;
            const bottomEdge = `L ${1000 - EndX} ${EndY}`;
            const leftCurve = `C ${1000 - C4X} ${C4Y}, ${1000 - C3X} ${C3Y}, ${1000 - MidX} ${MidY} C ${1000 - C2X} ${C2Y}, ${1000 - C1X} ${C1Y}, ${1000 - StartX} ${StartY}`;
            const leftEdge = `L -50 ${StartY} L -50 -50 Z`;
            return `${rightEdge} ${rightCurve} ${bottomEdge} ${leftCurve} ${leftEdge}`;
        }

        function generateGuideDString(pts) {
            const [StartX, StartY, C1X, C1Y, C2X, C2Y, MidX, MidY, C3X, C3Y, C4X, C4Y, EndX, EndY] = pts;
            const right = `M ${StartX} ${StartY} C ${C1X} ${C1Y}, ${C2X} ${C2Y}, ${MidX} ${MidY} C ${C3X} ${C3Y}, ${C4X} ${C4Y}, ${EndX} ${EndY}`;
            const left = `M ${1000 - StartX} ${StartY} C ${1000 - C1X} ${C1Y}, ${1000 - C2X} ${C2Y}, ${1000 - MidX} ${MidY} C ${1000 - C3X} ${C3Y}, ${1000 - C4X} ${C4Y}, ${1000 - EndX} ${EndY}`;
            return `${right} ${left}`;
        }

        function updateLens() {
            let p = parseFloat(elements.sliderP.value);
            let b = parseFloat(elements.sliderB.value);
            let l = parseFloat(elements.sliderL.value);

            elements.valP.innerText = p + '%';
            elements.valB.innerText = b + '%';
            elements.valL.innerText = l + '%';

            let sum = p + b + l;
            if (sum === 0) { b = 1; sum = 1; }

            let wP = p / sum;
            let wB = b / sum;
            let wL = l / sum;

            let currentPts = [];
            for (let i = 0; i < 14; i++) {
                currentPts[i] = (wP * baseCurves.P[i]) + (wB * baseCurves.B[i]) + (wL * baseCurves.L[i]);
            }

            const dFill = generateFillDString(currentPts);
            const dGuide = generateGuideDString(currentPts);
            
            elements.aberrationDeep.setAttribute('d', dFill);
            elements.aberrationPattern.setAttribute('d', dFill);
            elements.aberrationTint.setAttribute('d', dFill);
            elements.visionGuideDynamic.setAttribute('d', dGuide);
        }

        function setScenario(l, b, p) {
            elements.sliderL.value = l;
            elements.sliderB.value = b;
            elements.sliderP.value = p;
            updateLens();
        }

        elements.sliderP.addEventListener('input', updateLens);
        elements.sliderB.addEventListener('input', updateLens);
        elements.sliderL.addEventListener('input', updateLens);

        elements.container.addEventListener('mousemove', (e) => {
            const rect = elements.container.getBoundingClientRect();
            const y = ((e.clientY - rect.top) / rect.height) * 1000;
            const x = e.clientX - rect.left;

            if (y < 420) {
                elements.tooltipTitle.innerText = "Longe";
                elements.tooltipTitle.className = "text-3xl font-light tracking-tight text-blue-600 dark:text-blue-400 whitespace-nowrap transition-colors duration-500";
                elements.tooltipDesc.innerText = "Condução, Paisagem";
                elements.tooltipIconContainer.innerHTML = systemIcons.mountain;
                elements.tooltipIconContainer.className = "w-6 h-6 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors duration-500";
            } else if (y < 650) {
                elements.tooltipTitle.innerText = "Intermédia";
                elements.tooltipTitle.className = "text-3xl font-light tracking-tight text-violet-600 dark:text-violet-400 whitespace-nowrap transition-colors duration-500";
                elements.tooltipDesc.innerText = "Computador, Tablier";
                elements.tooltipIconContainer.innerHTML = systemIcons.monitor;
                elements.tooltipIconContainer.className = "w-6 h-6 flex items-center justify-center text-violet-600 dark:text-violet-400 transition-colors duration-500";
            } else {
                elements.tooltipTitle.innerText = "Perto";
                elements.tooltipTitle.className = "text-3xl font-light tracking-tight text-green-600 dark:text-green-400 whitespace-nowrap transition-colors duration-500";
                elements.tooltipDesc.innerText = "Leitura, Dispositivos";
                elements.tooltipIconContainer.innerHTML = systemIcons.book;
                elements.tooltipIconContainer.className = "w-6 h-6 flex items-center justify-center text-green-600 dark:text-green-400 transition-colors duration-500";
            }

            elements.tooltip.style.left = `${x}px`;
            elements.tooltip.style.top = `${e.clientY - rect.top}px`;
            elements.tooltip.style.opacity = '1';
        });

        elements.container.addEventListener('mouseleave', () => elements.tooltip.style.opacity = '0');

        updateLens();
        
        window.addEventListener('load', () => {
            elements.container.style.transform = 'scale(0.9) translateY(20px)';
            elements.container.style.opacity = '0';
            elements.container.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
            
            setTimeout(() => {
                elements.container.style.transform = 'scale(1) translateY(0)';
                elements.container.style.opacity = '1';
            }, 100);
        });
    
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
      

<aside className="w-[420px] xl:w-[480px] h-full border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 flex flex-col z-20 relative shadow-[10px_0_50px_rgba(0,0,0,0.05)] dark:shadow-[10px_0_50px_rgba(0,0,0,0.5)] shrink-0 transition-colors duration-500">
<div className="p-6 xl:p-8 border-b border-zinc-200 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-900/50 transition-colors duration-500 relative shrink-0">

<button className="absolute top-6 right-6 xl:top-8 xl:right-8 p-2 rounded-full bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center" id="theme-toggle">
<div className="flex items-center justify-center" id="theme-icon-container"></div>
</button>

<div className="mb-6">
<svg className="h-8 xl:h-10 w-auto" fill="none" viewbox="0 0 500 160" xmlns="http://www.w3.org/2000/svg">
<text className="fill-[#16488A] dark:fill-white transition-colors duration-500" fontFamily="'Inter', sans-serif" fontSize="115" font-weight="600" letter-spacing="-2" text-anchor="middle" x="250" y="130">POLO</text>
<path d="M 30 70 Q 250 -20 470 70 Q 330 15 255 10 L 210 85 L 240 10 Q 130 15 30 70 Z" fill="#2FB2E6"></path>
</svg>
</div>
<h1 className="xl:text-4xl text-3xl dark:text-white leading-tight transition-colors duration-500 font-light text-zinc-900 tracking-tight mb-2">Progressivas<br/>Tech</h1>
<p className="dark:text-zinc-400 leading-relaxed transition-colors duration-500 xl:text-lg text-base text-zinc-600 font-extralight text-justify">
                Ajuste os parâmetros abaixo para analisar como a distribuição no espaço intermédio influencia o comportamento do campo lateral.
            </p>
</div>
<div className="p-6 xl:p-8 flex flex-col gap-6 xl:gap-8 flex-1 overflow-y-auto">

<div className="flex flex-col gap-3 group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
<label className="text-lg xl:text-xl tracking-tight text-zinc-800 dark:text-zinc-200 font-extralight transition-colors duration-500">L - Visão de Longe</label>
</div>
<span className="text-lg xl:text-xl tracking-tight text-blue-600 dark:text-blue-400 font-light transition-colors duration-500" id="val-l">0%</span>
</div>
<input className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full appearance-none cursor-pointer outline-none transition-colors duration-500 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-6 [&amp;::-webkit-slider-thumb]:h-6 [&amp;::-webkit-slider-thumb]:bg-blue-500 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-lg [&amp;::-webkit-slider-thumb]:border-[3px] [&amp;::-webkit-slider-thumb]:border-white dark:[&amp;::-webkit-slider-thumb]:border-zinc-900 [&amp;::-webkit-slider-thumb]:transition-all [&amp;::-webkit-slider-thumb]:active:scale-90" id="slider-l" max="100" min="0" type="range" value="0"/>
<p className="text-sm xl:text-base text-zinc-500 font-extralight leading-snug">Expande a zona superior, movendo os eixos periféricos para fora.</p>
</div>

<div className="flex flex-col gap-3 group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3.5 h-3.5 rounded-full bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
<label className="text-lg xl:text-xl tracking-tight text-zinc-800 dark:text-zinc-200 font-extralight transition-colors duration-500">B - Balanceada</label>
</div>
<span className="text-lg xl:text-xl tracking-tight text-violet-600 dark:text-violet-400 font-light transition-colors duration-500" id="val-b">100%</span>
</div>
<input className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full appearance-none cursor-pointer outline-none transition-colors duration-500 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-6 [&amp;::-webkit-slider-thumb]:h-6 [&amp;::-webkit-slider-thumb]:bg-violet-500 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-lg [&amp;::-webkit-slider-thumb]:border-[3px] [&amp;::-webkit-slider-thumb]:border-white dark:[&amp;::-webkit-slider-thumb]:border-zinc-900 [&amp;::-webkit-slider-thumb]:transition-all [&amp;::-webkit-slider-thumb]:active:scale-90" id="slider-b" max="100" min="0" type="range" value="100"/>
<p className="text-sm xl:text-base text-zinc-500 font-extralight leading-snug">Distribuição equilibrada entre as zonas de visão focada.</p>
</div>

<div className="flex flex-col gap-3 group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
<label className="text-lg xl:text-xl tracking-tight text-zinc-800 dark:text-zinc-200 font-extralight transition-colors duration-500">P - Visão de Perto</label>
</div>
<span className="text-lg xl:text-xl tracking-tight text-green-600 dark:text-green-400 font-light transition-colors duration-500" id="val-p">0%</span>
</div>
<input className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full appearance-none cursor-pointer outline-none transition-colors duration-500 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-6 [&amp;::-webkit-slider-thumb]:h-6 [&amp;::-webkit-slider-thumb]:bg-green-500 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-lg [&amp;::-webkit-slider-thumb]:border-[3px] [&amp;::-webkit-slider-thumb]:border-white dark:[&amp;::-webkit-slider-thumb]:border-zinc-900 [&amp;::-webkit-slider-thumb]:transition-all [&amp;::-webkit-slider-thumb]:active:scale-90" id="slider-p" max="100" min="0" type="range" value="0"/>
<p className="text-sm xl:text-base text-zinc-500 font-extralight leading-snug">Alarga massivamente a base do corredor para leitura inferior.</p>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-zinc-100 dark:bg-zinc-950 relative overflow-hidden p-6 xl:p-10 transition-colors duration-500">

<div className="flex-1 min-h-0 w-full flex items-center justify-center relative pb-6">
<div className="relative aspect-square h-full max-h-[750px] w-auto rounded-full cursor-crosshair" id="lens-container">
<svg className="w-full h-full drop-shadow-2xl" id="lens-svg" viewbox="0 0 1000 1000">
<defs>
<pattern height="60" id="contour-pattern" patterntransform="scale(1.5)" patternunits="userSpaceOnUse" width="60">
<path className="stroke-zinc-300 dark:stroke-zinc-800 transition-colors duration-500" d="M 0 15 Q 15 5 30 15 T 60 15 M 0 45 Q 15 35 30 45 T 60 45" fill="none" opacity="0.6" strokeWidth="1"></path>
<path className="stroke-zinc-300 dark:stroke-zinc-800 transition-colors duration-500" d="M 0 30 Q 15 20 30 30 T 60 30 M 0 60 Q 15 50 30 60 T 60 60" fill="none" opacity="0.3" strokeWidth="1"></path>
</pattern>
<filter height="140%" id="aberration-blur" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="30"></fegaussianblur>
</filter>
<filter height="140%" id="heavy-blur" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="45"></fegaussianblur>
</filter>
<clippath id="circle-clip">
<circle cx="500" cy="500" r="490"></circle>
</clippath>

<radialgradient cx="50%" cy="50%" id="lens-glow" r="50%">
<stop offset="0%" stop-color="#bae6fd"></stop> 
<stop offset="60%" stop-color="#0284c7"></stop> 
<stop offset="100%" stop-color="#082f49"></stop> 
</radialgradient>
</defs>

<circle className="" cx="500" cy="500" fill="url(#lens-glow)" r="490"></circle>
<g clipPath="url(#circle-clip)">

<g className="text-zinc-300 dark:text-zinc-800 transition-colors duration-500" fill="none" stroke="currentColor">
<line stroke-dasharray="10 10" strokeWidth="2" x1="0" x2="1000" y1="420" y2="420"></line>
<line stroke-dasharray="10 10" strokeWidth="2" x1="500" x2="500" y1="0" y2="1000"></line>
<path className="text-zinc-400 dark:text-white opacity-40 transition-colors duration-500" d="M 470 420 L 530 420 M 500 390 L 500 450" strokeWidth="3"></path>
</g>

<path className="fill-white dark:fill-[#09090b] opacity-90 dark:opacity-95 transition-colors duration-500" filter="url(#heavy-blur)" id="aberration-deep" style={{transition: 'd 0.3s cubic-bezier(0.2, 0, 0, 1)'}}></path>
<g filter="blur(2px)" style={{transition: 'd 0.3s cubic-bezier(0.2, 0, 0, 1)'}}>
<path fill="url(#contour-pattern)" id="aberration-pattern" style={{transition: 'd 0.3s cubic-bezier(0.2, 0, 0, 1)'}}></path>
</g>
<path className="fill-zinc-200 dark:fill-[#18181b] opacity-80 dark:opacity-85 transition-colors duration-500" filter="url(#aberration-blur)" id="aberration-tint" style={{transition: 'd 0.3s cubic-bezier(0.2, 0, 0, 1)'}}></path>

<path className="stroke-zinc-900 dark:stroke-white opacity-20 dark:opacity-15 transition-colors duration-500" fill="none" id="vision-guide-dynamic" strokeWidth="2" style={{transition: 'd 0.3s cubic-bezier(0.2, 0, 0, 1)'}}></path>
</g>

<circle className="stroke-zinc-300 dark:stroke-zinc-800 transition-colors duration-500" cx="500" cy="500" fill="none" r="490" strokeWidth="4"></circle>
<circle className="stroke-zinc-400 dark:stroke-zinc-700 transition-colors duration-500" cx="500" cy="500" fill="none" opacity="0.8" r="488" strokeWidth="2"></circle>
<path className="stroke-white opacity-60 dark:opacity-10 transition-opacity duration-500" d="M 150 250 A 400 400 0 0 1 850 250" fill="none" filter="blur(16px)" strokeWidth="30"></path>

<g className="font-medium text-4xl tracking-tight pointer-events-none transition-colors duration-500">

<text dy="12" fill="#22c55e" opacity="0.4" x="920" y="260">P</text>
<text dy="12" fill="#22c55e" opacity="0.4" text-anchor="end" x="80" y="260">P</text>

<text dy="12" fill="#8b5cf6" opacity="0.4" x="960" y="340">B</text>
<text dy="12" fill="#8b5cf6" opacity="0.4" text-anchor="end" x="40" y="340">B</text>

<text dy="12" fill="#3b82f6" opacity="0.4" x="980" y="420">L</text>
<text dy="12" fill="#3b82f6" opacity="0.4" text-anchor="end" x="20" y="420">L</text>
</g>
</svg>

<div className="absolute pointer-events-none opacity-0 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-[120%] bg-white border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 px-6 py-4 rounded-2xl shadow-2xl flex flex-col items-center gap-2 z-50 transition-colors" id="tooltip">
<div className="w-6 h-6 flex items-center justify-center transition-colors duration-500 text-zinc-900 dark:text-zinc-50" id="tooltip-icon-container"></div>
<span className="text-3xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 whitespace-nowrap transition-colors duration-500" id="tooltip-title">Zona de Visão</span>
<span className="text-xl font-extralight text-zinc-500 dark:text-zinc-400 whitespace-nowrap transition-colors duration-500" id="tooltip-desc">Distância</span>
</div>
</div>
</div>

<div className="w-full max-w-[1400px] mx-auto shrink-0 z-30 flex flex-col justify-end">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mb-8">

<div className="group bg-white border-2 border-zinc-200 hover:border-blue-500 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-blue-500 rounded-xl flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl hover:shadow-blue-500/15 overflow-hidden" onclick="setScenario(100, 0, 0)">
<div className="bg-zinc-100 text-zinc-600 group-hover:bg-blue-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-blue-500 dark:group-hover:text-white text-center py-4 px-4 font-semibold tracking-widest text-sm xl:text-base uppercase transition-colors">
                        Ultimate Tech Longe
                    </div>
<div className="p-6 xl:p-8 flex-1 flex flex-col text-center justify-center transition-colors duration-500">
<p className="text-lg xl:text-xl text-zinc-600 dark:text-zinc-400 font-extralight leading-relaxed transition-colors duration-500">
                            Lente com melhor campo de <span className="font-medium text-blue-600 dark:text-blue-400">visão à distância</span> e praticamente livre de aberrações laterais.
                        </p>
</div>
</div>

<div className="group bg-white border-2 border-zinc-200 hover:border-violet-500 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-violet-500 rounded-xl flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl hover:shadow-violet-500/15 overflow-hidden" onclick="setScenario(0, 100, 0)">
<div className="bg-zinc-100 text-zinc-600 group-hover:bg-violet-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-violet-500 dark:group-hover:text-white text-center py-4 px-4 font-semibold tracking-widest text-sm xl:text-base uppercase transition-colors">
                        Ultimate Tech Balanceada
                    </div>
<div className="p-6 xl:p-8 flex-1 flex flex-col text-center justify-center transition-colors duration-500">
<p className="text-lg xl:text-xl text-zinc-600 dark:text-zinc-400 font-extralight leading-relaxed transition-colors duration-500">
                            Lente Ultimate para uma <span className="font-medium text-violet-600 dark:text-violet-400">visão extraordinária a todas as distâncias.</span> Conforto visual e transição suave.
                        </p>
</div>
</div>

<div className="group bg-white border-2 border-zinc-200 hover:border-green-500 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-green-500 rounded-xl flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl hover:shadow-green-500/15 overflow-hidden" onclick="setScenario(0, 0, 100)">
<div className="bg-zinc-100 text-zinc-600 group-hover:bg-green-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-green-500 dark:group-hover:text-white text-center py-4 px-4 font-semibold tracking-widest text-sm xl:text-base uppercase transition-colors">
                        Ultimate Tech Perto
                    </div>
<div className="p-6 xl:p-8 flex-1 flex flex-col text-center justify-center transition-colors duration-500">
<p className="text-lg xl:text-xl text-zinc-600 dark:text-zinc-400 font-extralight leading-relaxed transition-colors duration-500">
<span className="font-medium text-green-600 dark:text-green-400">Visão de curta distância</span> com excelente campo de visão, ideal para qualquer actividade de perto.
                        </p>
</div>
</div>
</div>

<div className="w-full text-center flex items-center justify-center">
<span className="text-sm xl:text-base font-light text-zinc-500 dark:text-zinc-500 transition-colors duration-500">
                    Powered By 
                    <a className="font-medium text-purple-600 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-400 transition-colors" href="https://www.purpleprofile.pt" rel="noopener noreferrer" target="_blank">
                        Purple Profile
                    </a>
</span>
</div>
</div>
</main>


    </>
  );
}
