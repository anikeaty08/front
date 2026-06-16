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



        // Inicializa Lucide Icons
        lucide.createIcons();
        // Registra el plugin ScrollTrigger de GSAP
        gsap.registerPlugin(ScrollTrigger);

        const house = document.getElementById('house-group');
        const cone = document.getElementById('scan-cone');
        const intruder = document.getElementById('intruder');

        // Configuración Inicial de la vista 3D
        gsap.set(house, { rotateX: -10, rotateY: -35, scale: 0.7 });

        // Escenas de Animación basadas en el scroll
        const scenes = [
            // 0. Introducción: Vista arquitectónica general
            { 
                rx: -15, ry: -45, scale: 0.8, x: 0, y: 0,
                onStart: () => {
                    gsap.to(cone, { opacity: 0.3, borderBottomColor: "rgba(6, 182, 212, 0.1)" });
                    gsap.to(intruder, { opacity: 0, z: 250 }); 
                    gsap.killTweensOf(".intruder-body"); 
                    gsap.set(cone, { background: 'repeating-linear-gradient(0deg, rgba(34,211,238,0.2) 0px, transparent 2px, transparent 20px)' });
                }
            },
            // 1. Tecnología de la Cámara: Zoom a la cámara
            { 
                rx: -5, ry: -25, scale: 2.2, x: -60, y: 40,
                onStart: () => {
                    gsap.to(cone, { opacity: 0.8, borderBottomColor: "rgba(6, 182, 212, 0.3)" }); 
                    gsap.to(intruder, { opacity: 0.5, z: 200, duration: 1 }); 
                }
            },
            // 2. Alerta de Intruso: Vista mostrando el rayo rojo golpeando al Intruder
            { 
                rx: -40, ry: -60, scale: 1.1, x: 30, y: -10,
                onStart: () => {
                    // El cono se vuelve rojo (el color de la alerta)
                    gsap.to(cone, { 
                        opacity: 1, 
                        borderBottomColor: "rgba(239, 68, 68, 0.4)", 
                        duration: 0.5
                    }); 
                    // La textura de escaneo del cono cambia a líneas rojas
                    gsap.set(cone, { 
                        background: 'repeating-linear-gradient(0deg, rgba(239, 68, 68, 0.2) 0px, transparent 2px, transparent 20px)',
                    }); 

                    // El intruso aparece completamente y comienza a parpadear
                    gsap.to(intruder, { opacity: 1, z: 180, duration: 1, ease: "power2.out" }); 
                    
                    // Efecto de parpadeo en el contorno del intruso
                    gsap.fromTo(".intruder-body", 
                        { borderColor: "rgba(239, 68, 68, 0.6)" }, 
                        { borderColor: "white", repeat: -1, yoyo: true, duration: 0.2 }
                    );
                }
            }
        ];

        // Creación de ScrollTriggers
        document.querySelectorAll('.section-trigger').forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => animateScene(i),
                onEnterBack: () => animateScene(i)
            });
        });

        function animateScene(index) {
            const state = scenes[index];
            if(state.onStart) state.onStart();

            // Aplica la animación de la casa (el mundo 3D)
            gsap.to(house, {
                rotateX: state.rx,
                rotateY: state.ry,
                scale: state.scale,
                xPercent: state.x,
                yPercent: state.y,
                duration: 1.5,
                ease: "power3.inOut"
            });
        }

        // Efecto Parallax del Ratón
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 15;
            const y = (e.clientY / window.innerHeight - 0.5) * 15;
            
            gsap.to('.world', {
                rotateY: x,
                rotateX: -y,
                duration: 1,
                ease: "power2.out"
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-40 pointer-events-none p-6 flex flex-col justify-between">
<div className="flex justify-between w-full border-b border-white/5 pb-4">
<div className="flex gap-4 items-center">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<div className="font-mono text-xs text-red-400 font-bold tracking-widest">TRANSMISIÓN EN VIVO // RESIDENCIAL_CAM_01</div>
</div>
<div className="font-mono text-[10px] text-zinc-500 hidden sm:block">
                PROTOCOLO SEGURO <span className="text-cyan-500">ACTIVO</span>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full flex items-center justify-center opacity-30">
<div className="w-full h-[1px] bg-cyan-500/20 absolute"></div>
<div className="h-full w-[1px] bg-cyan-500/20 absolute"></div>
<div className="w-2 h-2 border border-cyan-500"></div>
</div>
<div className="flex justify-between items-end w-full border-t border-white/5 pt-4">
<div className="hidden md:block w-64">
<div className="text-[9px] text-zinc-600 font-mono mb-1">REGISTROS DEL SISTEMA</div>
<div className="text-[10px] text-cyan-500/80 font-mono leading-tight">
                    &gt; Escaneando perímetro...<br/>
                    &gt; Análisis de objeto: ESTRUCTURAL<br/>
                    &gt; Movimiento detectado: SECTOR 4<br/>
                    &gt; Rastreo de objetivo ID: #9921
                </div>
</div>
<div className="flex gap-2">
<div className="px-3 py-1 bg-cyan-950/40 border border-cyan-800 rounded text-[10px] font-mono text-cyan-400">
                    SENSORES: ENCENDIDOS
                 </div>
<div className="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded text-[10px] font-mono text-zinc-400">
                    VISIÓN NOCTURNA: AUTO
                 </div>
</div>
</div>
</div>
<nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-[2px]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-cyan-400" data-lucide="shield-check"></i>
<span className="font-bold text-sm tracking-tight text-white">NEXUS<span className="text-zinc-500">HOGAR</span></span>
</div>
<button className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full transition-all border border-white/5 backdrop-blur-md">
                Acceso Clientes
            </button>
</div>
</nav>
<div className="fixed inset-0 z-0 flex items-center justify-center bg-[#020617] scene-container pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [transform:perspective(500px)_rotateX(60deg)_scale(3)] opacity-20"></div>
<div className="world transition-transform duration-100 ease-out" id="world">
<div className="house-group" id="house-group">
<div className="face w-floor"></div>
<div className="face wall w-front">
<div className="window win-front-l"></div>
<div className="window win-front-r"></div>
<div className="cctv-wrapper">
<div className="camera-arm"></div>
<div className="camera-head">
<div className="cam-face-front">
<div className="cam-lens"></div>
</div>
<div className="cam-status"></div>
<div className="cone-scan" id="scan-cone"></div>
</div>
</div>
</div>
<div className="face wall w-back"></div>
<div className="face wall w-right">
<div className="window win-side-2"></div>
</div>
<div className="face wall w-left">
<div className="window win-side"></div>
</div>
<div className="face gable g-front"></div>
<div className="face gable g-back"></div>
<div className="face roof-panel r-left">
<div className="roof-grid"></div>
</div>
<div className="face roof-panel r-right">
<div className="roof-grid"></div>
</div>
<div className="face porch-step"></div>
<div className="intruder-wrap" id="intruder">
<div className="target-ui">NO AUTORIZADO</div>
<div className="intruder-body">
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-black/50 blur-sm rounded-full rotate-x-90"></div>
</div>
</div>
</div>
</div>
<main className="relative z-20 w-full pt-20">
<section className="h-screen flex items-center px-6 md:px-24 section-trigger" data-index="0">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-[10px] font-mono mb-8 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    PROTECCIÓN INTELIGENTE v2.0
                </div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tight text-white mb-6">
                    Hogar<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-zinc-600">Fortaleza.</span>
</h1>
<p className="text-zinc-400 text-lg max-w-md leading-relaxed">
                    Vigilancia residencial de última generación. Nuestra IA distingue entre residentes, invitados y amenazas con una precisión del 99.9%.
                </p>
</div>
</section>
<section className="h-screen flex items-center justify-end px-6 md:px-24 section-trigger" data-index="1">
<div className="max-w-md w-full bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-lg relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-50">
<i className="w-12 h-12 text-zinc-700" data-lucide="cctv"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Cámara Web Centinela</h2> <div className="h-0.5 w-12 bg-cyan-500 mb-6"></div>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-zinc-800 pb-3">
<span className="text-xs text-zinc-500 font-mono">RESOLUCIÓN</span>
<span className="text-sm text-white font-mono">8K HDR</span>
</div>
<div className="flex items-center justify-between border-b border-zinc-800 pb-3">
<span className="text-xs text-zinc-500 font-mono">CAMPO DE VISIÓN</span>
<span className="text-sm text-white font-mono">180° PANORÁMICO</span>
</div>
<div className="flex items-center justify-between border-b border-zinc-800 pb-3">
<span className="text-xs text-zinc-500 font-mono">PROCESADOR IA</span>
<span className="text-sm text-cyan-400 font-mono">MOTOR NEURAL X1</span>
</div>
</div>
<p className="text-xs text-zinc-400 mt-6 leading-relaxed">
                    La unidad Centinela montada mapea continuamente el espacio volumétrico de la entrada de su propiedad, creando un gemelo digital en tiempo real para el análisis de amenazas.
                </p>
</div>
</section>
<section className="h-screen flex items-center justify-center px-6 section-trigger" data-index="2">
<div className="w-full max-w-lg">
<div className="bg-red-500/10 border border-red-500/30 rounded-xl p-1 mb-6 flex items-center gap-3 backdrop-blur-md">
<div className="bg-red-500/20 p-2 rounded-lg">
<i className="w-5 h-5 text-red-500" data-lucide="alert-triangle"></i>
</div>
<span className="text-sm font-semibold text-red-200 tracking-wide">AMENAZA DETECTADA EN SECTOR A</span>
</div>
<h2 className="text-5xl font-medium text-white tracking-tight mb-4 text-center">Respuesta Instantánea</h2>
<p className="text-zinc-500 text-center mb-10">
                    Cuando un sujeto no identificado irrumpe en la geocerca, Nexus alerta a las autoridades y activa inmediatamente los protocolos defensivos.
                </p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-900 border border-zinc-800 p-4 rounded text-center">
<div className="text-2xl font-mono text-white mb-1">0.4s</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Tiempo de Respuesta</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 p-4 rounded text-center">
<div className="text-2xl font-mono text-cyan-400 mb-1">100%</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Tasa de Captura</div>
</div>
</div>
</div>
</section>
</main>
<footer className="py-8 border-t border-white/5 bg-black text-center relative z-20">
<div className="flex justify-center items-center gap-2 mb-2">
<i className="w-4 h-4 text-zinc-600" data-lucide="shield"></i>
<span className="text-xs text-zinc-500 font-semibold tracking-wide">NEXUS SECURE</span>
</div>
<p className="text-[10px] text-zinc-700 font-mono">DERECHOS DE AUTOR © 2024. TODOS LOS DERECHOS RESERVADOS.</p>
</footer>


    </>
  );
}
