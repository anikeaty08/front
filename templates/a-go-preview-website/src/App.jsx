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



tailwind.config = {
theme: {
extend: {
fontFamily: {
manrope: ['Manrope', 'sans-serif'],
inter: ['Inter', 'sans-serif'],
},
colors: {
noir: '#000000',
accent: '#37CF86', // a-gO Green
'accent-dark': '#2da36a',
'accent-secondary': '#FFB600', // a-gO Orange
glass: 'rgba(255, 255, 255, 0.05)',
},
backgroundImage: {
'radial-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
}
}
}
}
}



        // Star Background
        function generateBoxShadows(n, color) {
            let value = '';
            for (let i = 0; i < n; i++) {
                const x = Math.floor(Math.random() * 2000);
                const y = Math.floor(Math.random() * 2000);
                value += `${x}px ${y}px ${color}`;
                if (i < n - 1) value += ', ';
            }
            return value;
        }
        document.getElementById('stars-small').style.boxShadow = generateBoxShadows(350, '#ffffff');
        document.getElementById('stars-medium').style.boxShadow = generateBoxShadows(100, '#ffffff');
        document.getElementById('stars-big').style.boxShadow = generateBoxShadows(40, '#ffffff');

        // Scroll Progress
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('scroll-progress').style.width = scrolled + "%";
        }, { passive: true });

        // Globe (Visual Only - Digital Twin Metaphor)
        (function() {
            const canvas = document.getElementById('globe-canvas');
            const loader = document.getElementById('globe-loader');
            const container = document.getElementById('globe-container');
            if (!canvas || !container) return;

            const context = canvas.getContext('2d', { alpha: true });
            let width = container.clientWidth;
            let height = container.clientHeight;
            let radius = Math.min(width, height) / 2.2; 
            
            let landFeatures = null;
            let allDots = [];
            let rotation = [0, 0];
            let autoRotate = true;

            const projection = d3.geoOrthographic().scale(radius).translate([width / 2, height / 2]).clipAngle(90);
            const path = d3.geoPath().projection(projection).context(context);

            function resize() {
                width = container.clientWidth;
                height = container.clientHeight;
                radius = Math.min(width, height) / 2.2;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                context.scale(dpr, dpr);
                projection.scale(radius).translate([width / 2, height / 2]);
                if (landFeatures) render();
            }
            window.addEventListener('resize', resize);
            resize();

            function render() {
                context.clearRect(0, 0, width, height);
                const currentScale = projection.scale();
                const scaleFactor = currentScale / radius;

                // Globe Edge
                context.beginPath();
                context.arc(width / 2, height / 2, currentScale, 0, 2 * Math.PI);
                context.strokeStyle = "rgba(55, 207, 134, 0.1)"; // Green Tint
                context.lineWidth = 1 * scaleFactor;
                context.stroke();

                if (!landFeatures) return;

                // Graticule
                const graticule = d3.geoGraticule();
                context.beginPath();
                path(graticule());
                context.strokeStyle = "rgba(255,255,255,0.05)";
                context.lineWidth = 0.5 * scaleFactor;
                context.stroke();

                // Dots
                context.fillStyle = "#37CF86"; // a-gO Green
                allDots.forEach(dot => {
                    const projected = projection([dot.lng, dot.lat]);
                    if (projected) {
                         context.beginPath();
                         context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI);
                         context.fill();
                    }
                });
            }

            async function loadWorldData() {
                try {
                    const response = await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json");
                    if (!response.ok) throw new Error("Failed");
                    landFeatures = await response.json();
                    
                    // Simple dot generation for visual effect
                    for(let i=0; i<600; i++) {
                        allDots.push({ lng: Math.random()*360-180, lat: Math.random()*160-80 });
                    }

                    loader.style.display = 'none';
                    canvas.classList.add('loaded');
                    
                    d3.timer(() => {
                        if (autoRotate) {
                            rotation[0] += 0.3;
                            projection.rotate(rotation);
                            render();
                        }
                    });
                } catch (e) { console.error(e); }
            }
            loadWorldData();
        })();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#051a0f_0%,_#000000_100%)]"></div>
<div className="absolute inset-0 w-[1px] h-[1px] bg-transparent animate-[animStar_100s_linear_infinite] optimize-gpu" id="stars-small"></div>
<div className="absolute inset-0 w-[2px] h-[2px] bg-transparent animate-[animStar_150s_linear_infinite] optimize-gpu" id="stars-medium"></div>
<div className="absolute inset-0 w-[3px] h-[3px] bg-transparent animate-[animStar_200s_linear_infinite] optimize-gpu" id="stars-big"></div>
<div className="absolute inset-0 bg-grid-pattern z-[1] opacity-60"></div>

<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent-secondary/10 rounded-full blur-[100px] mix-blend-screen"></div>
</div>

<div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
<div className="h-full bg-accent w-0 transition-all duration-100 ease-out shadow-[0_0_10px_#37CF86]" id="scroll-progress" style={{width: '0%'}}></div>
</div>

<header className="fixed top-0 w-full z-50 pt-6 px-4">
<div className="max-w-6xl mx-auto">
<nav className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex items-center justify-between shadow-2xl shadow-black/50 transition-all duration-300">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-black flex items-center justify-center border border-white/10 shrink-0 text-white font-bold font-manrope">
                        A
                    </div>
<span className="text-lg font-manrope font-bold tracking-tight text-white hidden xs:block">a-gO</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#accueil">Accueil</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#technologie">Technologie</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#applications">Applications</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:block text-xs font-bold text-zinc-500 hover:text-white cursor-pointer transition-colors">FR</span>
<a className="shiny-cta px-6 py-2 text-xs font-bold uppercase tracking-wider text-white group flex items-center gap-2 shrink-0" href="#contact">
<span>Utiliser a-gO</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>
</div>
</header>

<main className="lg:pt-48 lg:pb-32 overflow-hidden md:px-6 z-10 pt-32 pr-4 pb-12 pl-4 relative" id="accueil">
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer group animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
<span className="text-xs font-medium text-green-100/90 tracking-wide font-manrope">Diagnostic Précoce TNC</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-semibold text-slate-100 tracking-tighter font-manrope mb-8 drop-shadow-2xl text-balance">
                    Marchez 5 minutes. <br className="hidden lg:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent-secondary">Voyez 20 ans à l'avance.</span>
</h1>
<p className="text-lg lg:text-xl text-zinc-300/80 max-w-2xl mb-12 font-light leading-relaxed text-balance">
                    Révolutionnez le dépistage précoce des maladies neurodégénératives avec notre technologie de marche 3D sans capteur.
                </p>

<div className="grid grid-cols-3 gap-6 w-full max-w-lg mb-12 border-t border-b border-white/5 py-6">
<div className="text-center lg:text-left">
<div className="text-2xl md:text-3xl font-bold text-accent font-manrope">93%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">De précision</div>
</div>
<div className="text-center lg:text-left">
<div className="text-2xl md:text-3xl font-bold text-accent-secondary font-manrope">5 min</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Test rapide</div>
</div>
<div className="text-center lg:text-left">
<div className="text-2xl md:text-3xl font-bold text-white font-manrope">20 ans</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Avant symptômes</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto group relative px-8 py-4 bg-accent hover:bg-emerald-600 text-black rounded-full font-bold tracking-wide transition-all shadow-[0_0_40px_-10px_rgba(55,207,134,0.5)] flex items-center justify-center gap-3" href="#contact">
<iconify-icon icon="solar:walking-round-linear" width="20"></iconify-icon>
                        Utiliser a-gO
                    </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-800 bg-black/50 hover:bg-zinc-900/80 backdrop-blur text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-3 font-medium" href="#technologie">
                        En savoir plus
                    </a>
</div>
</div>

<div className="relative w-full h-[400px] md:h-[600px] lg:h-[750px] flex items-center justify-center order-1 lg:order-2">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
<div className="w-full h-full relative z-10 flex items-center justify-center" id="globe-container">
<canvas className="w-full h-full max-w-[800px] aspect-square loaded" height="800" id="globe-canvas" width="800"></canvas>
<div className="absolute text-accent text-xs font-mono animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id="globe-loader">INITIALIZING TWIN...</div>
</div>
</div>
</div>

<div className="mt-20 border-y border-white/5 bg-black/20 backdrop-blur-sm py-12 relative z-10 -mx-4 md:-mx-6 lg:mx-0 lg:rounded-xl">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
<span className="text-xs font-bold tracking-[0.2em] text-zinc-600 uppercase">Partenaires Scientifiques</span>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 grayscale opacity-50 hover:opacity-100 transition-all duration-700">
<span className="text-white font-manrope font-semibold text-lg">UNICAEN</span>
<span className="text-white font-manrope font-semibold text-lg">INSERM</span>
<span className="text-white font-manrope font-semibold text-lg">COMETE</span>
<span className="text-white font-manrope font-semibold text-lg">MEDICEN</span>
<span className="text-white font-manrope font-semibold text-lg">UE</span>
</div>
</div>
</div>
</main>

<section className="py-24 px-4 md:px-6 relative z-10" id="technologie">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-manrope font-semibold tracking-tight mb-4">
                    Une technologie <span className="text-accent">de rupture</span>
</h2>
<p className="text-zinc-400 max-w-xl text-balance">Notre solution transforme la marche en données précieuses grâce à l'intelligence artificielle et la modélisation 3D.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:walking-round-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold font-manrope mb-2">1. Marche simple</h3>
<p className="text-zinc-400 text-sm">Le patient marche naturellement pendant 5 minutes sur un tapis de marche.</p>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold font-manrope mb-2">2. Capture</h3>
<p className="text-zinc-400 text-sm">3 smartphones filment simultanément sous différents angles. Sans capteur physique.</p>
</div>
</div>

<div className="glass-card md:row-span-2 rounded-3xl p-8 relative overflow-hidden group flex flex-col">
<div className="absolute top-0 right-0 w-64 h-64 bg-accent-secondary/10 rounded-full blur-[80px]"></div>
<div className="h-full flex flex-col justify-center">
<div className="w-12 h-12 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center text-accent-secondary mb-6">
<iconify-icon icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold font-manrope mb-4">Jumeau Numérique &amp; IA</h3>
<p className="text-zinc-400 mb-8">Un modèle biomécanique 3D est créé en temps réel. L'IA analyse plus de <span className="text-white font-bold">200 paramètres</span> de marche.</p>
<div className="mt-auto border border-zinc-800 bg-black/50 rounded-lg p-4 font-mono text-xs text-zinc-500">
<div className="flex justify-between mb-2">
<span>Status:</span>
<span className="text-accent">PROCESSING</span>
</div>
<div className="flex justify-between mb-2">
<span>Parameters:</span>
<span className="text-white">204 DETECTED</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-accent h-full w-[93%] animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="glass-card md:col-span-2 rounded-3xl relative overflow-hidden group flex items-center justify-center bg-zinc-900/50">
<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
<iconify-icon className="text-white/20 group-hover:text-accent transition-colors cursor-pointer z-10" icon="solar:play-circle-linear" width="64"></iconify-icon>
<p className="absolute bottom-6 left-8 text-sm font-mono text-accent">VISUALISATION DU JUMEAU NUMÉRIQUE</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 relative bg-zinc-900/20">
<div className="max-w-6xl mx-auto">
<h3 className="text-2xl font-bold font-manrope mb-12 text-center">Comparaison avec les solutions existantes</h3>
<div className="glass-card rounded-2xl overflow-hidden border border-white/5">
<div className="grid grid-cols-4 bg-white/5 p-6 border-b border-white/10 text-xs md:text-sm font-bold tracking-wider text-zinc-400 uppercase">
<div className="col-span-1">Critères</div>
<div className="col-span-1 text-center text-accent">a-gO</div>
<div className="col-span-1 text-center">Capteurs Physiques</div>
<div className="col-span-1 text-center">Tests Cognitifs</div>
</div>
<div className="grid grid-cols-4 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors">
<div className="font-medium text-white text-sm">Temps de setup</div>
<div className="text-center text-accent font-bold text-lg">&lt; 2 min</div>
<div className="text-center text-zinc-500 text-sm">15-30 min</div>
<div className="text-center text-zinc-500 text-sm">5-10 min</div>
</div>
<div className="grid grid-cols-4 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors">
<div className="font-medium text-white text-sm">Prédiction précoce</div>
<div className="text-center text-accent font-bold text-lg">20 ans</div>
<div className="text-center text-zinc-500 text-sm">5-10 ans</div>
<div className="text-center text-zinc-500 text-sm">2-5 ans</div>
</div>
<div className="grid grid-cols-4 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors">
<div className="font-medium text-white text-sm">Coût équipement</div>
<div className="text-center text-accent font-bold text-lg">Faible</div>
<div className="text-center text-zinc-500 text-sm">Élevé</div>
<div className="text-center text-zinc-500 text-sm">Moyen</div>
</div>
<div className="grid grid-cols-4 p-6 items-center hover:bg-white/5 transition-colors">
<div className="font-medium text-white text-sm">Facilité</div>
<div className="text-center text-accent font-bold text-lg">Très élevée</div>
<div className="text-center text-zinc-500 text-sm">Faible</div>
<div className="text-center text-zinc-500 text-sm">Moyenne</div>
</div>
</div>
<p className="text-center text-zinc-600 text-xs mt-6 font-mono">* Études PRESAGE 2024</p>
</div>
</section>

<section className="py-24 px-4 md:px-6" id="applications">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold font-manrope mb-4">Applications</h2>
<div className="flex justify-center gap-4">
<span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">MÉDICAL (2028)</span>
<span className="px-4 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-bold border border-zinc-700">NON MÉDICAL (2026)</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-2xl relative group">
<div className="absolute top-4 right-4 text-[10px] font-bold bg-accent text-black px-2 py-1 rounded">93% PRÉCISION</div>
<div className="flex gap-4 items-start">
<div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent shrink-0">
<iconify-icon icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-bold text-white mb-2">Diagnostic TNC</h4>
<p className="text-zinc-400 text-sm mb-4">Dépistage précoce des troubles neurocognitifs.</p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span> Détection ultra-précoce</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span> Validation clinique</li>
</ul>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl relative group">
<div className="absolute top-4 right-4 text-[10px] font-bold bg-accent text-black px-2 py-1 rounded">20 ANS AVANT</div>
<div className="flex gap-4 items-start">
<div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent shrink-0">
<iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-bold text-white mb-2">Pronostic MND</h4>
<p className="text-zinc-400 text-sm mb-4">Prédiction des maladies neurodégénératives jusqu'à 20 ans avant les symptômes.</p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span> Prédiction long terme</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span> Intervention précoce</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 relative border-t border-white/5">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold font-manrope mb-4">Tarification</h2>
<p className="text-zinc-400">Adaptée à chaque structure.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-2xl border-l-4 border-l-accent flex flex-col">
<h3 className="text-2xl font-bold text-white mb-2">Grandes Structures</h3>
<p className="text-zinc-500 text-sm mb-8">Hôpitaux, centres de recherche, grandes entreprises.</p>
<div className="mt-auto space-y-4">
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-zinc-400 text-sm">Équipement</span>
<span className="text-white font-semibold text-sm">Nous consulter</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-zinc-400 text-sm">Abonnement</span>
<span className="text-accent font-semibold text-sm">500€ / mois</span>
</div>
<button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-bold mt-4 transition-colors">Contacter</button>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border-l-4 border-l-accent-secondary flex flex-col">
<h3 className="text-2xl font-bold text-white mb-2">Petites Structures</h3>
<p className="text-zinc-500 text-sm mb-8">Cabinets médicaux, centres sportifs, TPE/PME.</p>
<div className="mt-auto space-y-4">
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-zinc-400 text-sm">Équipement</span>
<span className="text-accent-secondary font-semibold text-sm">Leasing disponible</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-zinc-400 text-sm">Coût par test</span>
<span className="text-white font-semibold text-sm">Variable</span>
</div>
<button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-bold mt-4 transition-colors">Contacter</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-zinc-900/30" id="contact">
<div className="max-w-2xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
<h2 className="text-3xl font-bold text-center mb-8 font-manrope">Contactez-nous</h2>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Prénom</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Votre prénom" type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Nom</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Votre nom" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Email Professionnel</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="nom@entreprise.com" type="email"/>
</div>
<div>
<label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Message</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Décrivez votre projet..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-accent hover:bg-emerald-600 text-black font-bold rounded-lg transition-colors">Envoyer ma demande</button>
</form>
</div>
</section>

<footer className="bg-black border-t border-zinc-900 pt-16 pb-8 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-3 mb-6">
<span className="text-xl font-bold font-manrope tracking-tight text-white">a-gO</span>
</div>
<p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                    Diagnostic précoce des troubles neurocognitifs et détection des maladies neurodégénératives.
                </p>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Produit</h4>
<ul className="space-y-3 text-zinc-500 text-sm">
<li><a className="hover:text-accent transition-colors" href="#technologie">Technologie</a></li>
<li><a className="hover:text-accent transition-colors" href="#applications">Applications</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Entreprise</h4>
<ul className="space-y-3 text-zinc-500 text-sm">
<li><a className="hover:text-accent transition-colors" href="#">Équipe</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Mentions légales</a></li>
</ul>
</div>
</div>
<div className="relative w-full overflow-hidden opacity-5 select-none pointer-events-none flex justify-center">
<h1 className="text-[15vw] font-black font-manrope leading-none text-transparent tracking-tighter" style={{WebkitTextStroke: '1px #fff'}}>
                a-gO AI
            </h1>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 uppercase tracking-wider">
<p>© 2026 a-gO. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">LinkedIn</a>
</div>
</div>
</footer>



    </>
  );
}
