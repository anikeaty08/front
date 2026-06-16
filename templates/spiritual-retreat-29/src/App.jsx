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



        document.addEventListener('DOMContentLoaded', () => {
            // 1. Intersection Observer for Scroll Reveals
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Scale divider lines
                        if(entry.target.querySelector('#divider-line')) {
                            entry.target.querySelector('#divider-line').style.transform = 'scaleY(1)';
                        }
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-box');
            revealElements.forEach(el => observer.observe(el));

            // 2. 3D Tilt Effect for Video Card
            const tiltContainer = document.getElementById('tilt-container');
            const tiltCard = tiltContainer.querySelector('.tilt-card');

            if(tiltContainer && tiltCard) {
                tiltContainer.addEventListener('mousemove', (e) => {
                    const rect = tiltContainer.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -5; // Max -5deg to 5deg
                    const rotateY = ((x - centerX) / centerX) * 5;

                    tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });

                tiltContainer.addEventListener('mouseleave', () => {
                    tiltCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                });
            }

            // 3. Navbar scroll effect
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    nav.classList.add('py-4', 'backdrop-blur-md', 'bg-[#03090F]/80');
                    nav.classList.remove('py-8', 'mix-blend-difference');
                } else {
                    nav.classList.add('py-8', 'mix-blend-difference');
                    nav.classList.remove('py-4', 'backdrop-blur-md', 'bg-[#03090F]/80');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference text-[#F7F5F0] transition-transform duration-500 ease-in-out" id="navbar">
<div className="serif text-xl md:text-2xl tracking-[0.15em] font-medium opacity-90 cursor-default">CORAL EFFATA</div>
<div className="hidden md:flex gap-12 items-center">
<span className="text-[10px] uppercase tracking-[0.25em] opacity-80">San Andrés, Col</span>
<a className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] hover:text-[#4FD1C5] transition-colors duration-300" href="#acceso">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-500 group-hover:-translate-y-full">Acceso Privado</span>
<span className="absolute top-0 left-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-[#4FD1C5]">Acceso Privado</span>
</span>
</a>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#03090F]">

<div className="absolute inset-0 z-0">
<div className="w-full h-full animate-slow-zoom origin-center">
<video autoplay="" className="w-full h-full object-cover opacity-40" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/5091624/5091624-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-[#03090F]/80 via-[#03090F]/30 to-[#03090F]"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center perspective-1000">
<div className="reveal-box active">
<div className="inline-flex items-center gap-2 py-1.5 px-4 border border-[#4FD1C5]/30 rounded-full backdrop-blur-md bg-[#4FD1C5]/5 text-[#4FD1C5] mb-8 hover:bg-[#4FD1C5]/10 transition-colors duration-500 cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></span>
<span className="text-[10px] tracking-[0.3em] uppercase">Ritual Oceánico Premium</span>
</div>
</div>
<h1 className="serif text-5xl md:text-7xl lg:text-8xl text-[#F7F5F0] leading-[1.1] tracking-tight font-light mb-8 reveal-box stagger-1">
<div className="text-mask-reveal"><span>Donde los deseos se siembran.</span></div>
<div className="text-mask-reveal"><span className="italic text-[#8FA3B5]">Y los ciclos renacen.</span></div>
</h1>
<p className="text-[#AABBC8] text-lg font-light max-w-lg mx-auto leading-relaxed mb-16 reveal-box stagger-2 opacity-80">
                Algunas cosas no necesitan ser superadas. Necesitan ser entregadas a la inmensidad para que la alquimia del agua haga el resto.
            </p>
<a className="group flex flex-col items-center gap-4 text-[#F7F5F0] opacity-70 hover:opacity-100 transition-all duration-700 reveal-box stagger-3 cursor-pointer btn-magnetic" href="#ciclo">
<span className="text-[10px] tracking-[0.3em] uppercase border-b border-transparent group-hover:border-[#F7F5F0] pb-1 transition-all">Profundizar</span>
<iconify-icon className="text-[#4FD1C5] group-hover:translate-y-2 transition-transform duration-700" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</a>
</div>
</header>

<section className="relative w-full py-32 md:py-40 px-6 bg-[#F7F5F0] flex items-center justify-center border-b border-[#1a1a1a]/5 overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-20">
<div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#1a1a1a] to-transparent"></div>
<div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#1a1a1a] to-transparent"></div>
</div>
<div className="max-w-3xl mx-auto text-center reveal-box relative z-10">
<div className="mb-8 mx-auto w-10 h-10 flex items-center justify-center rounded-full border border-[#1a1a1a]/10">
<iconify-icon className="text-[#1a1a1a]/50" icon="solar:infinity-linear" width="20"></iconify-icon>
</div>
<h2 className="serif text-4xl md:text-5xl text-[#1a1a1a] leading-tight font-light tracking-tight mb-8">
                No es una despedida.<br/><span className="italic text-[#4FD1C5]">Es una transformación de energía.</span>
</h2>
<div className="w-px h-16 bg-[#1a1a1a] opacity-10 mx-auto my-8 scale-y-0 transition-transform duration-1000 origin-top delay-500" id="divider-line"></div>
<p className="text-lg text-[#555] font-light leading-relaxed">
                Coral Effata es el espacio liminal donde no solo sueltas el peso del pasado, sino que plantas activamente la semilla de tu futuro en el corazón del arrecife.
            </p>
</div>
</section>

<section className="relative w-full py-32 md:py-48 px-6 bg-[#03090F] overflow-hidden" id="ciclo">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -left-[10%] top-[20%] w-[600px] h-[600px] bg-[#4FD1C5] blur-[120px] rounded-full animate-blob"></div>
<div className="absolute right-[0%] bottom-[0%] w-[600px] h-[600px] bg-[#1A3A4A] blur-[100px] rounded-full animate-blob" style={{animationDelay: '-5s'}}></div>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">

<div className="lg:col-span-5 flex flex-col gap-12">
<div className="reveal-box">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-px bg-[#4FD1C5] origin-left transition-transform duration-700 hover:scale-x-150"></div>
<span className="text-[#4FD1C5] text-[10px] tracking-[0.25em] uppercase font-medium">Ciencia y Espíritu</span>
</div>
<h3 className="serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#F7F5F0] leading-[1.1]">
                        La Alquimia<br/>
<span className="italic text-[#8FA3B5]">del Agua.</span>
</h3>
<p className="text-[#AABBC8] font-light text-lg leading-relaxed mt-6 border-l border-[#ffffff]/10 pl-6 transition-colors duration-500 hover:border-[#4FD1C5]/50">
                        El océano no solo recibe, <span className="text-[#F7F5F0]">reconfigura</span>. Diseñamos un proceso donde la biología marina y tu intención espiritual convergen.
                    </p>
</div>
<div className="space-y-12 relative">

<div className="absolute left-[11px] top-2 bottom-0 w-px bg-gradient-to-b from-[#4FD1C5]/50 via-[#4FD1C5]/10 to-transparent"></div>

<div className="group relative pl-10 reveal-box stagger-1 cursor-default">
<div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border border-[#4FD1C5]/30 bg-[#03090F] flex items-center justify-center group-hover:border-[#4FD1C5] group-hover:shadow-[0_0_15px_rgba(79,209,197,0.3)] transition-all duration-500 z-10">
<div className="w-1.5 h-1.5 bg-[#4FD1C5] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
</div>
<h4 className="text-[#F7F5F0] text-lg font-normal mb-2 tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                            01. Transmutación
                        </h4>
<p className="text-[#6d8194] font-light text-sm leading-relaxed group-hover:text-[#AABBC8] transition-colors">
                            El pergamino biodegradable, hecho de fibras marinas y semillas de coral, reacciona a la salinidad convirtiéndose en nutriente.
                        </p>
</div>
<div className="group relative pl-10 reveal-box stagger-2 cursor-default">
<div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border border-[#4FD1C5]/30 bg-[#03090F] flex items-center justify-center group-hover:border-[#4FD1C5] group-hover:shadow-[0_0_15px_rgba(79,209,197,0.3)] transition-all duration-500 z-10">
<div className="w-1.5 h-1.5 bg-[#4FD1C5] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
</div>
<h4 className="text-[#F7F5F0] text-lg font-normal mb-2 tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                            02. Integración Simbiótica
                        </h4>
<p className="text-[#6d8194] font-light text-sm leading-relaxed group-hover:text-[#AABBC8] transition-colors">
                            El coral absorbe la ofrenda. Tu historia personal pasa a formar parte de un organismo eterno y vivo.
                        </p>
</div>
<div className="group relative pl-10 reveal-box stagger-3 cursor-default">
<div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border border-[#4FD1C5]/30 bg-[#03090F] flex items-center justify-center group-hover:border-[#4FD1C5] group-hover:shadow-[0_0_15px_rgba(79,209,197,0.3)] transition-all duration-500 z-10">
<div className="w-1.5 h-1.5 bg-[#4FD1C5] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
</div>
<h4 className="text-[#F7F5F0] text-lg font-normal mb-2 tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                            03. El Silencio Azul
                        </h4>
<p className="text-[#6d8194] font-light text-sm leading-relaxed group-hover:text-[#AABBC8] transition-colors">
                            Bajo la presión del agua, el ruido mental se apaga. Solo queda tu respiración y la inmensidad.
                        </p>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-full flex flex-col items-center justify-center lg:justify-end reveal-box stagger-2 perspective-1000" id="tilt-container">
<div className="tilt-card relative w-full aspect-[4/5] md:aspect-[3/4] rounded-sm bg-[#0B151F] shadow-2xl border border-[#ffffff]/10 cursor-none group">

<div className="absolute inset-0 overflow-hidden rounded-sm">
<video autoplay="" className="w-full h-full object-cover opacity-80 scale-105 group-hover:scale-110 transition-transform duration-[2s]" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/854226/854226-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#061018] via-transparent to-transparent z-10 opacity-60"></div>
</div>

<div className="absolute bottom-8 left-8 right-8 z-20 tilt-card-inner">
<div className="backdrop-blur-xl bg-[#0B151F]/40 border border-[#ffffff]/10 p-6 rounded-sm shadow-lg hover:bg-[#0B151F]/60 transition-colors duration-300">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-[#4FD1C5] text-xl animate-pulse" icon="solar:water-linear"></iconify-icon>
<span className="text-[9px] uppercase tracking-widest text-[#F7F5F0]/60 font-mono">Profundidad: 12M</span>
</div>
<p className="serif text-lg md:text-xl italic text-[#F7F5F0] leading-tight">
                                "En la calma profunda, nada se pierde. Todo se renueva."
                            </p>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
<div className="w-20 h-20 rounded-full border border-[#4FD1C5]/30 backdrop-blur-sm flex items-center justify-center text-[#F7F5F0] text-[10px] tracking-widest uppercase">
                            Ver
                        </div>
</div>
</div>

<div className="absolute -right-8 top-1/4 w-32 h-32 border-r border-t border-[#4FD1C5]/10 rounded-tr-3xl hidden lg:block pointer-events-none"></div>
<div className="absolute -left-8 bottom-1/4 w-32 h-32 border-l border-b border-[#4FD1C5]/10 rounded-bl-3xl hidden lg:block pointer-events-none"></div>
</div>
</div>
</section>

<section className="w-full py-24 bg-[#EAE7DF] px-6 border-b border-[#1a1a1a]/5 relative">
<div className="max-w-4xl mx-auto relative z-10">
<div className="text-center mb-16 reveal-box">
<p className="serif text-3xl md:text-4xl text-[#1a1a1a] font-light italic">¿Qué puedes entregar al coral?</p>
<p className="text-[10px] tracking-[0.2em] uppercase text-[#666] mt-4">No hay categorías. Solo verdad.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]/10 border border-[#1a1a1a]/10 shadow-sm">

<div className="bg-[#EAE7DF] p-8 flex items-start gap-5 hover:bg-[#F2F0E9] transition-colors duration-500 reveal-box stagger-1 group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<iconify-icon className="text-[#1a1a1a] opacity-50 text-xl mt-1 group-hover:text-[#4FD1C5] group-hover:rotate-12 transition-all duration-500" icon="solar:stars-linear"></iconify-icon>
<div>
<h5 className="text-[#1a1a1a] font-medium text-sm uppercase tracking-wider mb-2 group-hover:text-[#000] transition-colors">Manifestación</h5>
<p className="text-[#555] font-light text-sm leading-relaxed group-hover:text-[#333] transition-colors">Un deseo que quieres ver florecer en tu realidad.</p>
</div>
</div>

<div className="bg-[#EAE7DF] p-8 flex items-start gap-5 hover:bg-[#F2F0E9] transition-colors duration-500 reveal-box stagger-2 group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<iconify-icon className="text-[#1a1a1a] opacity-50 text-xl mt-1 group-hover:text-[#4FD1C5] group-hover:rotate-12 transition-all duration-500" icon="solar:trash-bin-trash-linear"></iconify-icon>
<div>
<h5 className="text-[#1a1a1a] font-medium text-sm uppercase tracking-wider mb-2 group-hover:text-[#000] transition-colors">Liberación</h5>
<p className="text-[#555] font-light text-sm leading-relaxed group-hover:text-[#333] transition-colors">Un miedo o patrón que ya no quieres cargar contigo.</p>
</div>
</div>

<div className="bg-[#EAE7DF] p-8 flex items-start gap-5 hover:bg-[#F2F0E9] transition-colors duration-500 reveal-box stagger-3 group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<iconify-icon className="text-[#1a1a1a] opacity-50 text-xl mt-1 group-hover:text-[#4FD1C5] group-hover:rotate-[360deg] transition-all duration-700 ease-out" icon="solar:restart-circle-linear"></iconify-icon>
<div>
<h5 className="text-[#1a1a1a] font-medium text-sm uppercase tracking-wider mb-2 group-hover:text-[#000] transition-colors">Cierre</h5>
<p className="text-[#555] font-light text-sm leading-relaxed group-hover:text-[#333] transition-colors">Un ciclo del pasado que necesitas honrar y concluir.</p>
</div>
</div>

<div className="bg-[#EAE7DF] p-8 flex items-start gap-5 hover:bg-[#F2F0E9] transition-colors duration-500 reveal-box stagger-4 group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<iconify-icon className="text-[#1a1a1a] opacity-50 text-xl mt-1 group-hover:text-[#4FD1C5] group-hover:rotate-12 transition-all duration-500" icon="solar:leaf-linear"></iconify-icon>
<div>
<h5 className="text-[#1a1a1a] font-medium text-sm uppercase tracking-wider mb-2 group-hover:text-[#000] transition-colors">Intención</h5>
<p className="text-[#555] font-light text-sm leading-relaxed group-hover:text-[#333] transition-colors">Energía pura para tu próxima etapa de vida.</p>
</div>
</div>
</div>
<div className="text-center mt-12 reveal-box">
<p className="text-sm text-[#555] font-light italic">"El océano no guarda resentimientos. Recibe... y transforma."</p>
</div>
</div>
</section>

<section className="w-full py-24 bg-[#05111A] px-6 text-[#E0E6ED] border-b border-[#ffffff]/5 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20">
<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#4FD1C5] rounded-full animate-pulse"></div>
<div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#4FD1C5] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute top-1/2 left-2/3 w-1 h-1 bg-[#4FD1C5] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
</div>
<div className="max-w-4xl mx-auto text-center space-y-8 reveal-box relative z-10">
<h3 className="serif text-3xl md:text-5xl font-light text-[#F7F5F0]">El verdadero lujo es participar en la creación de vida.</h3>
<p className="text-lg font-light text-[#8FA3B5] max-w-2xl mx-auto leading-relaxed">
                Coral Effata trasciende la experiencia personal. Es un acto regenerativo que contribuye tangiblemente al ecosistema marino.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-[#2A3C4F]/50 mt-12">
<div className="group cursor-default">
<span className="block text-2xl serif text-[#4FD1C5] mb-2 group-hover:scale-110 transition-transform duration-500">Nutre</span>
<span className="text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">Un coral real</span>
</div>
<div className="group cursor-default">
<span className="block text-2xl serif text-[#4FD1C5] mb-2 group-hover:scale-110 transition-transform duration-500 delay-75">Genera</span>
<span className="text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">Vida submarina</span>
</div>
<div className="group cursor-default">
<span className="block text-2xl serif text-[#4FD1C5] mb-2 group-hover:scale-110 transition-transform duration-500 delay-150">Convierte</span>
<span className="text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">Carga en energía</span>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-[#F7F5F0] px-6">
<div className="max-w-3xl mx-auto text-center reveal-box">
<h4 className="text-[10px] font-medium uppercase tracking-[0.2em] mb-8 text-[#666]">Nuestra Promesa</h4>
<p className="serif text-2xl md:text-3xl text-[#1a1a1a] leading-normal font-light">
                No prometemos milagros instantáneos.<br/>
                Prometemos algo más verdadero:<br/>
<span className="italic text-[#4FD1C5]">Un acto consciente de entrega absoluta.</span>
</p>
<p className="mt-8 text-lg font-light text-[#555]">
                Porque cuando siembras con intención pura, dejas de intentar controlar. Empiezas a confiar.
            </p>
</div>
</section>

<section className="w-full min-h-[90vh] flex items-center justify-center bg-[#0B151F] px-6 relative overflow-hidden" id="acceso">

<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_#1A3A4A_0%,_transparent_50%)] opacity-40"></div>
<div className="max-w-5xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col justify-center space-y-8 reveal-box">
<h2 className="serif text-4xl text-[#F7F5F0] font-light">¿Es este ritual<br/>para ti?</h2>
<ul className="space-y-6 text-[#8FA3B5] font-light text-base md:text-lg">
<li className="flex gap-4 items-center group cursor-default">
<div className="w-6 h-6 rounded-full border border-[#4FD1C5]/30 flex items-center justify-center group-hover:border-[#4FD1C5] transition-colors">
<iconify-icon className="text-[#4FD1C5] text-sm group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="group-hover:text-[#F7F5F0] transition-colors">Para quien quiere sembrar un deseo</span>
</li>
<li className="flex gap-4 items-center group cursor-default">
<div className="w-6 h-6 rounded-full border border-[#4FD1C5]/30 flex items-center justify-center group-hover:border-[#4FD1C5] transition-colors">
<iconify-icon className="text-[#4FD1C5] text-sm group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="group-hover:text-[#F7F5F0] transition-colors">Para quien necesita cerrar un ciclo</span>
</li>
<li className="flex gap-4 items-center group cursor-default">
<div className="w-6 h-6 rounded-full border border-[#4FD1C5]/30 flex items-center justify-center group-hover:border-[#4FD1C5] transition-colors">
<iconify-icon className="text-[#4FD1C5] text-sm group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="group-hover:text-[#F7F5F0] transition-colors">Para quien entiende que soltar es crear</span>
</li>
</ul>
<div className="pt-8 border-t border-[#ffffff]/5 mt-4">
<p className="serif text-xl md:text-2xl text-[#F7F5F0] italic opacity-80">
                        "Entierra lo que pesa.<br/>
                        Siembra lo que deseas.<br/>
                        Deja que el océano haga el resto."
                    </p>
</div>
</div>

<div className="bg-[#05111A] p-8 md:p-12 border border-[#2A3C4F] reveal-box stagger-2 relative group hover:border-[#4FD1C5]/30 transition-colors duration-700">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#4FD1C5]/5 blur-3xl rounded-full pointer-events-none"></div>
<div className="mb-10 relative">
<h3 className="serif text-3xl text-[#F7F5F0] font-light">Solicitud de Acceso</h3>
<p className="text-[#8FA3B5] mt-4 font-light text-xs leading-relaxed tracking-wide">
                        Los cupos son limitados para garantizar la intimidad.
                    </p>
</div>
<form className="space-y-10">
<div className="group relative input-container">
<input className="peer w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] text-lg py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-transparent" id="name" required="" type="text"/>
<label className="absolute left-0 top-2 text-[#55697d] text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#4FD1C5] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-[#4FD1C5] pointer-events-none" htmlFor="name">Nombre Completo</label>
<div className="input-underline absolute bottom-0 left-0 w-full h-[1px]"></div>
</div>
<div className="group relative input-container">
<input className="peer w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] text-lg py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-transparent" id="intention" required="" type="text"/>
<label className="absolute left-0 top-2 text-[#55697d] text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#4FD1C5] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-[#4FD1C5] pointer-events-none" htmlFor="intention">Tu Intención (Breve)</label>
<div className="input-underline absolute bottom-0 left-0 w-full h-[1px]"></div>
</div>
<div className="pt-6">
<button className="w-full group relative flex items-center justify-between gap-3 bg-[#EAE7DF] text-[#03090F] px-6 py-4 text-[10px] uppercase tracking-[0.25em] font-medium overflow-hidden transition-all duration-500 hover:text-[#03090F]" type="button">

<div className="absolute inset-0 bg-[#4FD1C5] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
<span className="relative z-10">Iniciar Solicitud</span>
<iconify-icon className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
<div className="absolute bottom-6 w-full text-center">
<p className="text-[#2A3C4F] text-[10px] font-light tracking-wide uppercase opacity-70">
                San Andrés Islas • Colombia © 2024
            </p>
</div>
</section>



    </>
  );
}
