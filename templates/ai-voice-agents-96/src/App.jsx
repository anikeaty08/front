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
  


        // Init Lucide Icons
        lucide.createIcons();

        // Mouse Spotlight Logic
        function handleSpotlight(e) {
            const containers = document.querySelectorAll('.spotlight-wrapper');
            containers.forEach(container => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                container.style.setProperty('--cursor-x', `${x}px`);
                container.style.setProperty('--cursor-y', `${y}px`);
            });
        }
        document.addEventListener('mousemove', handleSpotlight);

        // Intersection Observer for Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Parallax Effect
        document.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            document.querySelectorAll('.parallax-bg').forEach(bg => {
                const speed = bg.getAttribute('data-speed');
                bg.style.transform = `translateY(${scrollY * speed}px) translateX(-50%)`;
            });
        });

        // ROI Calculator Logic
        const inputCalls = document.getElementById('input-calls');
        const inputCost = document.getElementById('input-cost');
        const displayCalls = document.getElementById('val-calls');
        const displayCost = document.getElementById('val-cost');
        const displayResult = document.getElementById('roi-result');

        function calculateROI() {
            const calls = parseInt(inputCalls.value);
            const cost = parseInt(inputCost.value);
            
            displayCalls.innerText = calls;
            displayCost.innerText = cost;

            // Simple formula: Calls * Cost * Efficiency Factor (0.4) * 12 months
            // This assumes 40% efficiency gain
            const savings = Math.floor((calls * (cost/160)) * 0.4 * 12); 
            // Cost is per agent, so estimating calls per agent capacity logic simplified for demo
            // Let's adjust: (Calls * 5 mins avg * Cost per min) - Automation Cost. 
            // Simplified for visual: (Calls * 2) * 12
            const simplifiedSavings = Math.floor(calls * 2.5 * 12);

            displayResult.innerText = `€${simplifiedSavings.toLocaleString()}`;
        }

        inputCalls.addEventListener('input', calculateROI);
        inputCost.addEventListener('input', calculateROI);
        calculateROI(); // Init

        // Card Rotation Logic
        let currentCard = 1;
        const totalCards = 3;
        const cards = document.querySelectorAll('.carousel-card');

        function updateCards() {
            cards.forEach((card, index) => {
                // Reset classes
                card.className = 'carousel-card absolute w-[300px] h-[200px] glass-panel rounded-xl p-6 flex flex-col justify-center items-center text-center transition-all duration-700 ease-out transform';
                
                if (index === currentCard) {
                    // Center
                    card.classList.add('z-10', 'scale-100', 'opacity-100', 'translate-x-0');
                } else if (index === (currentCard - 1 + totalCards) % totalCards) {
                    // Left (Prev)
                    card.classList.add('scale-75', 'opacity-50', '-translate-x-full', 'blur-sm');
                } else {
                    // Right (Next)
                    card.classList.add('scale-75', 'opacity-50', 'translate-x-full', 'blur-sm');
                }
            });
        }

        function rotateCards(direction) {
            if (direction === 'next') {
                currentCard = (currentCard + 1) % totalCards;
            } else {
                currentCard = (currentCard - 1 + totalCards) % totalCards;
            }
            updateCards();
        }
        
        // Auto rotate every 4 seconds
        setInterval(() => rotateCards('next'), 4000);
        updateCards(); // Init

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 saturate-150" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 animate-intro">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-[2px] opacity-80 absolute"></div>
<span className="z-10 text-xl font-semibold text-white tracking-tight relative" style={{}}>Atiende Con Ia</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Agentes</a>
<a className="hover:text-white transition-colors" href="#">Proceso</a>
<a className="hover:text-white transition-colors" href="#">Soluciones</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</div>
<div className="flex items-center gap-4">
<button className="flex gap-2 hover:bg-white/5 transition-all text-xs font-medium text-zinc-400 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="lucide lucide-languages w-3.5 h-3.5" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg> EN
                </button>
<button className="group relative px-5 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-wide overflow-hidden hover:scale-105 transition-transform duration-300">
<span className="relative z-10 flex items-center gap-1">Contáctanos <svg aria-hidden="true" className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</button>
</div>
</div>
</nav>

<main className="relative w-full overflow-hidden">

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50 parallax-bg" data-speed="0.1" style={{transform: 'translateY(221.7px) translateX(-50%)'}}></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] opacity-30 parallax-bg" data-speed="0.2" style={{transform: 'translateY(443.4px) translateX(-50%)'}}></div>
</div>

<section className="min-h-screen flex flex-col z-10 pt-32 pr-6 pb-20 pl-6 relative items-center justify-center">

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20" preserveaspectratio="none">
<path className="noodle-path" d="M0,100 Q400,300 800,100 T1600,100" fill="none" stroke="#2563EB" strokeWidth="1"></path>
</svg>


<div className="z-10 text-center max-w-4xl relative space-y-8">
<h1 className="md:text-7xl leading-[1.1] animate-intro text-5xl font-semibold text-white tracking-tight drop-shadow-2xl" style={{animationDelay: '0.4s'}}>
                    Eleva tu negocio con <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">agentes de IA</span>
</h1>
<p className="md:text-xl leading-relaxed animate-intro text-lg text-zinc-400 max-w-2xl mr-auto ml-auto" style={{animationDelay: '0.6s'}}>
                    Analizamos tus procesos de atención y adquisición para diseñar soluciones personalizadas con inteligencia artificial. Sin complicaciones técnicas. Sin promesas vacías.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-intro" style={{animationDelay: '0.8s'}}>

<button className="relative group px-8 py-4 bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="flex items-center gap-2 font-medium text-white relative">
<svg aria-hidden="true" className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 19v3"></path><path className="" d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect className="" height="13" rx="3" width="6" x="9" y="2"></rect></svg> Prueba Agente de Voz
                        </span>
</button>

<button className="relative group px-8 py-4 rounded-full bg-black/50 overflow-hidden">

<span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mask-image-linear-gradient opacity-0 group-hover:opacity-100 transition-opacity"></span>
<span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
<span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-transparent transition-colors duration-300"></span>
<span className="absolute inset-0 rounded-full p-[1px]" style={{WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}>
<span className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)] animate-[spin_3s_linear_infinite]"></span>
</span>
</span>
<span className="relative text-zinc-300 group-hover:text-white transition-colors">📩 Solicita diagnóstico gratuito</span>
</button>
</div>
<a className="inline-block text-sm text-zinc-500 hover:text-blue-400 transition-colors mt-4 animate-intro" href="#" style={{animationDelay: '1s'}}>
                    👉 Agendar una llamada
                </a>
</div>
</section>

<section className="border-y reveal-on-scroll bg-black/40 border-white/5 pt-12 pb-12 backdrop-blur-sm">
<div className="text-center mb-8">
<p className="text-sm font-medium text-zinc-500 tracking-wider uppercase">Potenciado por la mejor tecnología</p>
</div>
<div className="relative flex overflow-hidden group">
<div className="flex gap-16 animate-marquee whitespace-nowrap px-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<iconify-icon height="36" icon="logos:openai" width="96"></iconify-icon>
<iconify-icon height="36" icon="logos:google" width="96"></iconify-icon>
<iconify-icon height="36" icon="logos:microsoft" width="96"></iconify-icon>
<iconify-icon className="" height="36" icon="logos:stripe" width="96"></iconify-icon>
<iconify-icon className="" height="36" icon="logos:python" width="96"></iconify-icon>
<iconify-icon className="" height="36" icon="logos:twilio" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:anthropic" width="96"></iconify-icon>

<iconify-icon height="36" icon="logos:openai" width="96"></iconify-icon>
<iconify-icon height="36" icon="logos:google" width="96"></iconify-icon>
<iconify-icon height="36" icon="logos:microsoft" width="96"></iconify-icon>
<iconify-icon height="36" icon="logos:stripe" width="96"></iconify-icon>
<iconify-icon height="36" icon="logos:python" width="96"></iconify-icon>
<iconify-icon height="36" icon="logos:twilio" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:anthropic" width="96"></iconify-icon>
</div>

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020202] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020202] to-transparent z-10"></div>
</div>
</section>

<section className="py-32 px-6 relative reveal-on-scroll">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> DEMO EN VIVO
                    </div>
<h2 className="md:text-5xl text-base font-semibold text-white tracking-tight translate-x-16 translate-y-16 scale-110">Conoce a Lucía.</h2><p className="leading-relaxed -translate-y-3 text-sm text-zinc-400 translate-y-16 scale-100">
                        Habla con Lucía en tiempo real. Ella gestiona citas, responde dudas y cualifica clientes mientras tú duermes.
                        
                        Inteligencia contextual que entiende la intención, no solo las palabras.
                    </p>
</div><div className="w-full mt-10 perspective-1000 relative z-30">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#020202] shadow-[0_0_50px_-15px_rgba(6,182,212,0.15)] group transition-transform duration-500 hover:scale-[1.01]">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.1),transparent_70%)] opacity-80 pointer-events-none"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-blue-900/20 rounded-full blur-[80px] pointer-events-none"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none"></div>

<div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.01]">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
<span className="text-[10px] font-mono font-medium tracking-widest text-cyan-300 uppercase">Online | Listening</span>
</div>
<div className="h-3 w-[1px] bg-white/10"></div>
<span className="text-[10px] font-mono text-zinc-600 tracking-wider">LUCIA_AI_V2</span>
</div>
<div className="flex gap-1.5">
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="w-1 h-1 rounded-full bg-cyan-500/40 animate-pulse"></div>
</div>
</div>

<div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-10 text-center">

<div className="relative w-40 h-40 mb-8 flex items-center justify-center">

<div className="absolute inset-0 rounded-full border border-cyan-500/20 border-t-cyan-400/50 animate-[spin_4s_linear_infinite]"></div>
<div className="absolute inset-3 rounded-full border border-blue-500/20 border-b-blue-400/50 animate-[spin_6s_linear_infinite_reverse]"></div>

<div className="absolute inset-8 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
<div className="w-16 h-16 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
<div className="absolute inset-0 bg-white/40 rounded-full animate-ping opacity-20"></div>
<svg className="lucide lucide-waves w-8 h-8 text-white drop-shadow-md" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
</div>

<h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-3">
        "Soy Lucía. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">Puedo agendar 50 citas</span> mientras lees esto."
      </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-8 max-w-sm mx-auto">
        No soy un contestador. Entiendo, razono y vendo. ¿Hacemos una prueba en vivo?
      </p>

<button className="relative group/btn flex flex-col items-center gap-3 outline-none">
<div className="relative flex items-center justify-center w-20 h-20">

<div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping opacity-50 duration-1000"></div>
<div className="absolute inset-0 rounded-full bg-cyan-500/10 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] delay-150"></div>

<div className="relative z-10 w-full h-full bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover/btn:scale-105 group-active/btn:scale-95 cursor-pointer border-4 border-black/5">
<svg className="lucide lucide-mic w-8 h-8 text-black fill-black/5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 19v3"></path><path className="" d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
</div>
<span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-500 group-hover/btn:text-cyan-300 transition-colors">Presiona para hablar</span>
</button>

<a className="mt-6 flex items-center gap-1.5 text-xs text-zinc-600 hover:text-white transition-colors group/link pb-1 border-b border-transparent hover:border-zinc-700" href="#">
<span className="">O prefiere chatear por texto</span>
<svg className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover/link:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-white/20 rounded-tl-xl pointer-events-none"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-white/20 rounded-tr-xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-white/20 rounded-bl-xl pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-white/20 rounded-br-xl pointer-events-none"></div>
</div>
</div>

<div className="relative spotlight-wrapper group" style={{-CursorX: '465px', -CursorY: '377px'}}>

<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden reveal-on-scroll">
<div className="max-w-7xl mx-auto px-6 text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white">Flujo Continuo</h2>
</div>

<div className="relative max-w-4xl mx-auto h-[300px] perspective-1000" id="card-carousel">
<button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all" onclick="rotateCards('prev')">
<svg aria-hidden="true" className="lucide lucide-chevron-left w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all" onclick="rotateCards('next')">
<svg aria-hidden="true" className="lucide lucide-chevron-right w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="flex w-full h-full relative items-center justify-center">

<div className="carousel-card absolute w-[300px] h-[200px] glass-panel rounded-xl p-6 flex flex-col justify-center items-center text-center transition-all duration-700 ease-out transform scale-75 opacity-50 -translate-x-full blur-sm" data-index="0">
<iconify-icon className="text-blue-400 mb-4" icon="solar:database-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-2">Análisis de Datos</h3>
<p className="text-sm text-zinc-400">Procesamos tu información histórica.</p>
</div>

<div className="carousel-card absolute w-[300px] h-[200px] glass-panel rounded-xl p-6 flex flex-col justify-center items-center text-center transition-all duration-700 ease-out transform z-10 scale-100 opacity-100 translate-x-0" data-index="1">
<iconify-icon className="text-purple-400 mb-4" icon="solar:cpu-bolt-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-2">Entrenamiento IA</h3>
<p className="text-sm text-zinc-400">Adaptamos el modelo a tu voz de marca.</p>
</div>

<div className="carousel-card absolute w-[300px] h-[200px] glass-panel rounded-xl p-6 flex flex-col justify-center items-center text-center transition-all duration-700 ease-out transform scale-75 opacity-50 translate-x-full blur-sm" data-index="2">
<iconify-icon className="text-green-400 mb-4" icon="solar:rocket-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-2">Despliegue</h3>
<p className="text-sm text-zinc-400">Integración total en tus canales.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#020202] to-[#050505] relative reveal-on-scroll">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_0_100px_rgba(37,99,235,0.1)]">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8">
<h3 className="text-2xl font-semibold text-white">¿Cuánto dinero pierdes hoy?</h3>

<div className="">
<div className="flex justify-between mb-4">
<label className="text-sm text-zinc-400">Volumen de llamadas mensuales</label>
<span className="text-white font-mono" id="val-calls">500</span>
</div>
<input className="w-full" id="input-calls" max="1000" min="0" type="range" value="500"/>
</div>

<div className="">
<div className="flex justify-between mb-4">
<label className="text-sm text-zinc-400">Coste actual por agente (€)</label>
<span className="text-white font-mono" id="val-cost">1500</span>
</div>
<input className="w-full" id="input-cost" max="5000" min="1000" step="100" type="range" value="1500"/>
</div>
</div>

<div className="flex flex-col items-center justify-center bg-black/40 rounded-2xl border border-white/5 p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<iconify-icon className="text-green-500" icon="solar:chart-square-linear" width="100"></iconify-icon>
</div>
<span className="text-zinc-400 text-sm uppercase tracking-widest mb-2">Ahorro Estimado</span>
<div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 font-mono tracking-tighter" id="roi-result">€15.000</div>
<span className="text-zinc-500 text-sm mt-2">/ año</span>
<div className="mt-6 w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[75%] shadow-[0_0_10px_#22c55e]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative reveal-on-scroll">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Soluciones a Medida</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" onmousemove="handleSpotlight(event)">

<div className="relative group rounded-2xl bg-zinc-900 overflow-hidden spotlight-wrapper" style={{-CursorX: '465px', -CursorY: '-1053px'}}>
<div className="absolute inset-0 spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative h-full bg-[#050505] m-[1px] rounded-2xl p-8 overflow-hidden z-10 glass-panel">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-500">
<iconify-icon className="text-blue-500" icon="solar:calendar-add-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Agendamiento Automático</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sincronización bidireccional con Google Calendar y CRM. Citas confirmadas sin intervención.</p>
</div>
</div>

<div className="relative group rounded-2xl bg-zinc-900 overflow-hidden spotlight-wrapper" style={{-CursorX: '139.671875px', -CursorY: '-1053px'}}>
<div className="absolute inset-0 spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative h-full bg-[#050505] m-[1px] rounded-2xl p-8 overflow-hidden z-10 glass-panel">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-500">
<iconify-icon className="text-purple-500" icon="solar:shield-check-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20">
<iconify-icon icon="solar:headphones-round-sound-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Soporte Sin Esperas</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Atención 24/7 con capacidad infinita. Resuelve dudas frecuentes y escala casos complejos.</p>
</div>
</div>

<div className="relative group rounded-2xl bg-zinc-900 overflow-hidden spotlight-wrapper" style={{-CursorX: '-185.6640625px', -CursorY: '-1053px'}}>
<div className="absolute inset-0 spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative h-full bg-[#050505] m-[1px] rounded-2xl p-8 overflow-hidden z-10 glass-panel">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-500">
<iconify-icon className="text-green-500" icon="solar:magnet-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center mb-6 text-green-400 border border-green-500/20">
<iconify-icon icon="solar:magnet-wave-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Captación de Leads</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Cualificación proactiva de prospectos. Convierte visitantes en oportunidades de venta reales.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-purple-900/10 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 px-6">
<h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter">¿Listo para el siguiente paso?</h2>
<button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300">
                    Solicitar Diagnóstico Gratis
                </button>
<div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
<p>AtiendeConIA © 2024. Todos los derechos reservados.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacidad</a>
<a className="hover:text-zinc-400" href="#">Términos</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
