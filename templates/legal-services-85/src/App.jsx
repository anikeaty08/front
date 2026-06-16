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



        lucide.createIcons();
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        // --- GLOBAL SCROLL PROGRESS ---
        gsap.to("#progress-bar", {
            width: "100%", ease: "none",
            scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0 }
        });

        // --- HERO ANIMATIONS ---
        const tlHero = gsap.timeline();
        tlHero.from("#navbar", { y: -100, opacity: 0, duration: 1, ease: "power4.out" })
              .to(".reveal-item", { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" }, "-=0.5")
              .to(".hero-visual", { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }, "-=0.8");

        // --- MOUSE PARALLAX ---
        document.addEventListener("mousemove", (e) => {
            const x = (e.clientX * -1) / 30;
            const y = (e.clientY * -1) / 30;
            gsap.to(".hero-blob", { x: x * 20, y: y * 20, duration: 2, ease: "power2.out" });
        });

        // --- HORIZONTAL SCROLL (SCENE 2) ---
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function() {
                let sections = gsap.utils.toArray(".panel");
                let scrollTween = gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#scene-2", pin: true, scrub: 1, snap: 1 / (sections.length - 1), end: "+=3000"
                    }
                });
                sections.forEach((panel) => {
                    gsap.to(panel.querySelector(".panel-content"), {
                        y: 0, opacity: 1, duration: 0.5,
                        scrollTrigger: { trigger: panel, containerAnimation: scrollTween, start: "left center", toggleActions: "play reverse play reverse" }
                    });
                    gsap.to(panel.querySelector(".panel-img"), {
                        scale: 1, opacity: 1, duration: 0.6, delay: 0.1, ease: "back.out(1.5)",
                        scrollTrigger: { trigger: panel, containerAnimation: scrollTween, start: "left center", toggleActions: "play reverse play reverse" }
                    });
                });
            }
        });

        // --- STICKY CARD STACK (PROCESS SECTION) ---
        const stackItems = document.querySelectorAll(".card-stack-item");
        stackItems.forEach((card, i) => {
            if(i !== stackItems.length - 1) {
                gsap.to(card, {
                    scale: 0.9, opacity: 0.5, ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: card,
                        start: "top top+=150",
                        end: "bottom top",
                        scrub: true,
                        endTrigger: stackItems[i+1]
                    }
                });
            }
        });

        // --- DRAW SVG LINES (CONSTAT) ---
        gsap.to(".scroll-draw", {
            strokeDashoffset: 0, duration: 1.5, ease: "power2.out",
            scrollTrigger: { trigger: "#scene-constat", start: "top 60%" }
        });

        // --- 3D TILT EFFECT ---
        const container = document.getElementById("tilt-container");
        const card = document.getElementById("tilt-card");
        if(container && card) {
            container.addEventListener("mousemove", (e) => {
                const rect = container.getBoundingClientRect();
                const rotateX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -15; 
                const rotateY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 15;
                gsap.to(card, { rotationX: rotateX, rotationY: rotateY, duration: 0.5, ease: "power1.out" });
            });
            container.addEventListener("mouseleave", () => {
                gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });
            });
            gsap.from(card, {
                rotationY: 45, opacity: 0, x: 100, duration: 1.2, ease: "power3.out",
                scrollTrigger: { trigger: "#scene-online", start: "top 60%" }
            });
        }

        // --- GENERIC FADE UP ---
        gsap.utils.toArray('.gs-fade-up').forEach(element => {
            gsap.from(element, {
                y: 40, opacity: 0, duration: 0.8, delay: element.getAttribute('data-delay') || 0, ease: "power2.out",
                scrollTrigger: { trigger: element, start: "top 85%" }
            });
        });

        // --- MAGNETIC BTN ---
         document.querySelectorAll(".btn-magnetic").forEach(btn => {
            btn.addEventListener("mousemove", (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3 });
            });
            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 h-1 bg-red-600 z-[100] w-0" id="progress-bar"></div>

<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col leading-none group" href="#scene-1">
<span className="font-serif font-semibold text-lg text-blue-950 tracking-tight group-hover:text-red-600 transition-colors">AB JUSTICE</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium mt-1">Huissiers à Clamart</span>
</a>
<div className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-600 uppercase tracking-wide">
<a className="hover:text-blue-900 transition-colors nav-link" href="#scene-2">Missions</a>
<a className="hover:text-blue-900 transition-colors nav-link" href="#scene-constat">Constat</a>
<a className="hover:text-blue-900 transition-colors nav-link" href="#scene-online">En Ligne</a>
<a className="hover:text-blue-900 transition-colors nav-link" href="#scene-competence">Compétence</a>
<a className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-transform active:scale-95 shadow-lg shadow-red-900/10 normal-case tracking-normal btn-magnetic" href="#scene-contact">
                    Prendre RDV
                </a>
</div>
<button className="lg:hidden p-2 text-slate-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-50" id="scene-1">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="hero-blob absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-60"></div>
<div className="hero-blob absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-200 rounded-full blur-3xl opacity-50"></div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="max-w-2xl hero-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-blue-800 text-xs font-bold tracking-wider uppercase mb-8 border border-slate-200 shadow-sm reveal-item opacity-0 translate-y-4">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    SCP ABRAHMI · BLANCHET · LALLEMAND
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-blue-950 leading-[1.05] tracking-tight mb-8 reveal-item opacity-0 translate-y-4">
                    Huissier de justice <br/>
<span className="text-slate-400 italic">à Clamart</span>
</h1>
<p className="text-lg text-slate-600 mb-6 leading-relaxed reveal-item opacity-0 translate-y-4">
                    Étude d’huissiers de justice associées compétente à Clamart et dans ses alentours, nous vous accompagnons pour tous vos besoins en constats, recouvrement et procédures locatives.
                </p>
<p className="text-sm text-slate-500 mb-10 reveal-item opacity-0 translate-y-4">
                    Disponible en urgence, l’étude intervient rapidement pour sécuriser vos droits et obtenir des preuves fiables, que vous soyez particulier, professionnel ou collectivité.
                </p>
<div className="flex flex-col sm:flex-row gap-4 reveal-item opacity-0 translate-y-4">
<a className="btn-magnetic inline-flex items-center justify-center gap-3 bg-red-600 text-white px-6 py-4 rounded-xl font-medium shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all border border-red-500 group" href="tel:0627304190">
<div className="bg-white/20 p-1 rounded-full group-hover:animate-pulse">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="2"></i>
</div>
<span>URGENCE CONSTAT <span className="block text-[10px] font-normal opacity-90 leading-none mt-0.5">06 27 30 41 90</span></span>
</a>
<a className="btn-magnetic inline-flex items-center justify-center gap-3 bg-white text-blue-950 px-6 py-4 rounded-xl font-medium shadow-sm hover:shadow-md transition-all border border-slate-200 hover:border-blue-200" href="#scene-contact">
<span>Parler à un huissier à Clamart</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="relative h-[500px] hidden lg:flex items-center justify-center hero-visual opacity-0 scale-90">
<svg className="w-full h-full" viewbox="0 0 500 500">
<circle className="fill-white" cx="250" cy="250" r="200"></circle>
<g transform="translate(150, 150)">
<rect className="fill-white stroke-slate-200 stroke-2 shadow-2xl" height="180" rx="4" width="140" x="20" y="20"></rect>
<line className="stroke-slate-200 stroke-4" x1="40" x2="140" y1="50" y2="50"></line>
<line className="stroke-slate-200 stroke-4" x1="40" x2="140" y1="80" y2="80"></line>
<g className="anim-float">
<rect className="fill-blue-950" height="40" rx="5" transform="rotate(-15)" width="120" x="80" y="100"></rect>
<rect className="fill-red-600" height="80" rx="2" transform="rotate(-15)" width="20" x="130" y="80"></rect>
</g>
<path className="draw-path" d="M145 180 L155 190 L175 170" fill="none" stroke="#dc2626" strokeWidth="4"></path>
</g>
</svg>
</div>
</div>
</section>

<section className="bg-white text-blue-950 overflow-hidden relative border-t border-slate-100" id="scene-2">
<div className="h-wrap md:flex md:w-[300vw] w-full h-auto md:h-screen">

<div className="panel w-full md:w-screen h-screen flex items-center justify-center border-r border-slate-100 bg-white relative">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
<div className="order-2 md:order-1 panel-content opacity-0 translate-y-10">
<span className="text-red-600 font-mono text-xs mb-4 block font-semibold uppercase tracking-wider">Nos Missions — 01</span>
<h3 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-blue-950">Signification d’actes à Clamart</h3>
<p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            Nous assurons la signification de tous types d’actes à Clamart (assignations, décisions de justice, commandements, congés). La signification par huissier sécurise vos démarches et fait courir les délais de procédure.
                        </p>
<a className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors gap-2 group" href="#scene-contact">
                            👉 Faire signifier un acte à Clamart 
                            <i className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="order-1 md:order-2 flex justify-center panel-img scale-90 opacity-0">
<div className="relative w-full max-w-sm aspect-square">
<svg className="w-full h-full drop-shadow-2xl" viewbox="0 0 400 350">

<circle className="fill-red-400 opacity-60 anim-float" cx="50" cy="50" r="8"></circle>
<circle className="fill-blue-200 opacity-60 anim-float-delayed" cx="350" cy="300" r="12"></circle>

<path className="fill-indigo-500" d="M50 120 H250 V300 H50 Z" rx="10"></path>
<rect className="fill-indigo-600" height="40" width="80" x="50" y="120"></rect>

<g className="anim-float">
<path className="fill-indigo-100 shadow-xl" d="M150 50 H330 V280 H150 V50 Z"></path>

<path className="fill-white opacity-50" d="M330 50 V90 H290"></path>

<rect className="fill-indigo-300" height="6" rx="3" width="120" x="180" y="100"></rect>
<rect className="fill-indigo-300" height="6" rx="3" width="120" x="180" y="120"></rect>
<rect className="fill-indigo-300" height="6" rx="3" width="80" x="180" y="140"></rect>

<circle className="fill-rose-500 opacity-90" cx="290" cy="240" r="25"></circle>
<path d="M280 240 L287 247 L300 234" fill="none" stroke="white" strokeWidth="3"></path>
</g>

<g className="anim-float-delayed" transform="translate(40, 180)">
<rect className="fill-white shadow-lg border border-slate-100" height="100" rx="6" width="160" x="0" y="0"></rect>

<rect className="fill-blue-950" height="24" rx="6" width="160" x="0" y="0"></rect>
<circle className="fill-white opacity-50" cx="15" cy="12" r="3"></circle>
<circle className="fill-white opacity-50" cx="25" cy="12" r="3"></circle>

<rect className="fill-slate-200" height="4" rx="2" width="80" x="20" y="40"></rect>
<rect className="fill-slate-200" height="4" rx="2" width="120" x="20" y="55"></rect>
<rect className="fill-slate-200" height="4" rx="2" width="100" x="20" y="70"></rect>
</g>
</svg>
</div>
</div>
</div>
</div>

<div className="panel w-full md:w-screen h-screen flex items-center justify-center bg-slate-50 relative border-r border-slate-200">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
<div className="order-2 md:order-1 panel-content opacity-0 translate-y-10">
<span className="text-red-600 font-mono text-xs mb-4 block font-semibold uppercase tracking-wider">Nos Missions — 02</span>
<h3 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-blue-950">Recouvrement à Clamart</h3>
<p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            Professionnels du droit et spécialistes du recouvrement, nous mettons tout en œuvre pour récupérer vos créances à Clamart et dans tout le 92.
                        </p>
<ul className="space-y-2 mb-8 text-sm text-slate-500">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Recouvrement amiable</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Recouvrement judiciaire</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Saisies sur comptes</li>
</ul>
<a className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors gap-2 group" href="#scene-contact">
                            👉 Obtenir le recouvrement de ma créance 
                            <i className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="order-1 md:order-2 flex justify-center panel-img scale-90 opacity-0">
<div className="relative w-full max-w-sm aspect-square">
<svg className="w-full h-full drop-shadow-2xl" viewbox="0 0 400 350">

<circle className="anim-float" cx="360" cy="80" fill="none" r="5" stroke="#94a3b8" strokeWidth="2"></circle>
<circle className="anim-float-delayed" cx="40" cy="300" fill="none" r="5" stroke="#94a3b8" strokeWidth="2"></circle>

<rect className="fill-indigo-500 shadow-lg anim-float-delayed" height="110" rx="10" transform="rotate(5 290 235)" width="180" x="200" y="180"></rect>
<circle className="fill-white opacity-20" cx="260" cy="235" r="15" transform="rotate(5 290 235)"></circle>
<circle className="fill-white opacity-20" cx="290" cy="235" r="15" transform="rotate(5 290 235)"></circle>

<rect className="fill-indigo-100 shadow-md" height="140" rx="4" width="200" x="40" y="60"></rect>
<rect className="fill-blue-950" height="24" rx="4" width="200" x="40" y="60"></rect>
<circle className="fill-white opacity-50" cx="55" cy="72" r="3"></circle>
<circle className="fill-white opacity-50" cx="65" cy="72" r="3"></circle>
<rect className="fill-indigo-300" height="4" rx="2" width="100" x="60" y="100"></rect>
<rect className="fill-indigo-300" height="4" rx="2" width="140" x="60" y="115"></rect>

<g className="anim-float" transform="translate(130, 100)">

<path className="fill-white stroke-rose-500" d="M75 0 C75 0 150 15 150 75 C150 135 75 165 75 165 C75 165 0 135 0 75 C0 15 75 0 75 0 Z" strokeWidth="8"></path>

<path className="fill-white" d="M75 10 C75 10 135 22 135 75 C135 125 75 150 75 150 C75 150 15 125 15 75 C15 22 75 10 75 10 Z"></path>

<path className="fill-rose-500" d="M75 50 C83.2843 50 90 56.7157 90 65 C90 71.3657 86.1378 76.8073 80.7067 78.964 L 85 105 L 65 105 L 69.2933 78.964 C 63.8622 76.8073 60 71.3657 60 65 C60 56.7157 66.7157 50 75 50 Z"></path>
</g>
</svg>
</div>
</div>
</div>
</div>

<div className="panel w-full md:w-screen h-screen flex items-center justify-center bg-white relative">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
<div className="order-2 md:order-1 panel-content opacity-0 translate-y-10">
<span className="text-red-600 font-mono text-xs mb-4 block font-semibold uppercase tracking-wider">Nos Missions — 03</span>
<h3 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-blue-950">Constats d’huissier à Clamart</h3>
<p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            Doté d’une grande force probante, le constat d’huissier constitue un atout majeur pour prévenir ou résoudre un conflit à Clamart.
                        </p>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">
                            Travaux, voisinage, internet, nuisances sonores, état des lieux, réception de travaux, abandon de chantier...
                        </p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-red-600 font-bold bg-red-50 px-4 py-2 rounded-lg border border-red-100">
<i className="w-4 h-4" data-lucide="siren"></i>
                                Urgence : 06 27 30 41 90
                            </div>
</div>
</div>

<div className="order-1 md:order-2 flex justify-center panel-img scale-90 opacity-0">
<div className="relative w-full max-w-sm aspect-square">
<svg className="w-full h-full drop-shadow-2xl" viewbox="0 0 400 350">

<rect className="fill-indigo-100 anim-float-delayed" height="140" rx="20" transform="rotate(10 290 110)" width="140" x="220" y="40"></rect>

<g className="anim-float" transform="translate(40, 180)">
<path className="fill-indigo-500" d="M0 20 H50 L60 0 H140 V20 H160 V120 H0 V20 Z"></path>

<rect className="fill-white shadow-sm" height="80" width="100" x="20" y="-30"></rect>
<rect className="fill-slate-200" height="4" width="60" x="30" y="-10"></rect>
<rect className="fill-slate-200" height="4" width="80" x="30" y="5"></rect>

<path className="fill-indigo-400 opacity-90" d="M0 120 V40 H160 V120 H0 Z"></path>
</g>

<g className="anim-float" transform="translate(100, 80)">
<rect className="fill-white shadow-xl border border-slate-100" height="160" rx="8" width="220" x="0" y="0"></rect>

<rect className="fill-blue-950" height="30" rx="8" width="220" x="0" y="0"></rect>
<circle className="fill-rose-500" cx="15" cy="15" r="3"></circle>
<circle className="fill-indigo-400" cx="25" cy="15" r="3"></circle>
<circle className="fill-indigo-200" cx="35" cy="15" r="3"></circle>

<rect className="fill-slate-100" height="80" rx="4" width="100" x="20" y="50"></rect>

<circle className="fill-indigo-300" cx="70" cy="90" r="15"></circle>
<path className="fill-indigo-200" d="M40 130 L60 100 L80 130"></path>

<rect className="fill-slate-200" height="6" rx="3" width="60" x="140" y="50"></rect>
<rect className="fill-slate-200" height="6" rx="3" width="40" x="140" y="65"></rect>
<rect className="fill-slate-200" height="6" rx="3" width="50" x="140" y="80"></rect>

<circle className="fill-green-500 shadow-md" cx="210" cy="150" r="20"></circle>
<path d="M202 150 L208 156 L218 144" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 relative border-t border-slate-200" id="scene-constat">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 md:gap-24">

<div className="md:w-5/12 hidden md:block">
<div className="sticky top-32">
<div className="relative w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden border border-slate-200 flex items-center justify-center shadow-2xl shadow-slate-200/40">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
<svg className="w-3/4 opacity-90 relative z-10" viewbox="0 0 400 300">
<path d="M50 250 L350 250" stroke="#cbd5e1" strokeWidth="2"></path>
<path className="shadow-xl" d="M100 250 L100 100 L200 50 L300 100 L300 250" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2"></path>
<circle className="fill-red-100 animate-pulse" cx="200" cy="150" r="40"></circle>
<path className="draw-path scroll-draw" d="M180 150 L200 170 L220 130" fill="none" stroke="#dc2626" strokeWidth="4"></path>
</svg>
</div>
<div className="mt-6 flex items-center gap-3 text-sm text-slate-500 justify-center">
<i className="w-4 h-4 text-red-600" data-lucide="shield-check"></i>
<span>Preuve certifiée par un officier ministériel</span>
</div>
</div>
</div>

<div className="md:w-7/12 py-12">
<div className="mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-200 shadow-sm">
                            Force Probante
                        </div>
<h2 className="text-4xl md:text-5xl font-serif text-blue-950 mb-8 tracking-tight leading-tight">Le constat d’huissier à Clamart : <span className="text-red-600">une preuve fiable</span></h2>
<p className="text-lg text-slate-600 leading-relaxed text-balance">
                            Le constat permet de figer une situation à un instant précis et constitue une preuve juridiquement recevable devant les tribunaux. Chaque constat est établi avec rigueur, neutralité et objectivité pour garantir vos droits.
                        </p>
</div>
<div className="space-y-8">

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 transform hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center shadow-sm mb-6 text-red-600">
<i className="w-6 h-6" data-lucide="alert-triangle"></i>
</div>
<h3 className="text-xl font-semibold text-blue-950 mb-3">Prévenir un litige</h3>
<p className="text-slate-500">
                                Dissuadez la partie adverse d'entamer une action infondée grâce à un état des lieux factuel.
                            </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 transform hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center shadow-sm mb-6 text-red-600">
<i className="w-6 h-6" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-semibold text-blue-950 mb-3">Sécuriser une situation</h3>
<p className="text-slate-500">
                                Figez la réalité juridique avant travaux, location ou événement pour protéger vos intérêts.
                            </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 transform hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center shadow-sm mb-6 text-red-600">
<i className="w-6 h-6" data-lucide="gavel"></i>
</div>
<h3 className="text-xl font-semibold text-blue-950 mb-3">Appuyer une procédure</h3>
<p className="text-slate-500">
                                Le procès-verbal de constat est une preuve indispensable pour faire valoir vos droits devant un juge.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-32 relative" id="scene-process">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-40"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-24 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-serif text-blue-950 tracking-tight mb-6">Comment se déroule <br/>l’intervention d’un huissier</h2>
</div>
<div className="relative flex flex-col gap-8 pb-12 w-full">

<div className="card-stack-item sticky top-28 z-10 w-full rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 p-8 md:p-12 overflow-hidden">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-400 font-serif text-3xl font-medium">01</div>
<div>
<h3 className="text-2xl font-bold text-blue-950 mb-3">Votre demande</h3>
<p className="text-slate-600 text-lg leading-relaxed">Vous nous contactez et nous transmettez les éléments de votre situation.</p>
</div>
</div>
</div>

<div className="card-stack-item sticky top-36 z-20 w-full rounded-3xl bg-red-600 border border-red-500 shadow-xl shadow-red-900/20 p-8 md:p-12 overflow-hidden text-white">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
<div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-red-500 border-2 border-red-400 flex items-center justify-center flex-shrink-0 text-white font-serif text-3xl font-medium">02</div>
<div>
<h3 className="text-2xl font-bold text-white mb-3">Analyse du dossier</h3>
<p className="text-red-50 text-lg leading-relaxed">Un huissier de justice ou un collaborateur dédié analyse votre dossier et définit la procédure adaptée.</p>
</div>
</div>
</div>

<div className="card-stack-item sticky top-44 z-30 w-full rounded-3xl bg-slate-900 border border-slate-800 shadow-xl shadow-slate-900/30 p-8 md:p-12 overflow-hidden">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
<div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center flex-shrink-0 text-slate-400 font-serif text-3xl font-medium">03</div>
<div>
<h3 className="text-2xl font-bold text-white mb-3">Intervention officielle</h3>
<p className="text-slate-300 text-lg leading-relaxed">Nous procédons à l’intervention (constat, signification, recouvrement) et établissons les actes correspondants.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden border-t border-slate-200" id="scene-online">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal-group order-2 lg:order-1">
<h2 className="text-4xl font-serif text-blue-950 mb-6 tracking-tight">Des services en ligne pour <br/>faciliter vos démarches</h2>
<p className="text-slate-600 mb-10 text-lg leading-relaxed">L’étude met à votre disposition plusieurs outils digitaux sécurisés.</p>
<div className="space-y-4">
<a className="group block p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-red-200 hover:bg-white hover:shadow-lg hover:shadow-red-900/5 transition-all duration-300" href="#">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="file-box"></i>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<div className="font-bold text-blue-950">Espace DROPACT</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" data-lucide="arrow-right"></i>
</div>
<div className="text-sm text-slate-500 mt-1">Consulter vos actes et constats</div>
</div>
</div>
</a>
<a className="group block p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-red-200 hover:bg-white hover:shadow-lg hover:shadow-red-900/5 transition-all duration-300" href="#">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="credit-card"></i>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<div className="font-bold text-blue-950">Paiement en ligne</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" data-lucide="arrow-right"></i>
</div>
<div className="text-sm text-slate-500 mt-1">Régler un dossier par CB sécurisée</div>
</div>
</div>
</a>
</div>
</div>

<div className="order-1 lg:order-2 relative flex justify-center perspective-1000 h-[400px] items-center" id="tilt-container">
<div className="w-full max-w-md bg-blue-950 rounded-2xl p-6 shadow-2xl transform-style-3d will-change-transform relative z-10 border border-blue-900" id="tilt-card">
<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 rounded-2xl pointer-events-none transition-opacity duration-300 mix-blend-overlay"></div>
<div className="flex items-center justify-between mb-8 border-b border-blue-900 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-blue-300 text-xs font-mono">secure.abjustice.fr</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<div className="h-8 bg-blue-900 rounded w-1/2 animate-pulse"></div>
<div className="h-4 bg-red-900/50 rounded w-12"></div>
</div>
<div className="h-32 bg-blue-900/50 rounded w-full border border-blue-900/50 p-4">
<div className="h-2 bg-blue-800 rounded w-3/4 mb-3"></div>
<div className="h-2 bg-blue-800 rounded w-1/2"></div>
</div>
<div className="flex justify-end mt-4">
<div className="h-10 bg-red-600 rounded w-1/3 shadow-lg shadow-red-900/40 flex items-center justify-center text-white text-xs font-bold tracking-wider">PAYER</div>
</div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 blur-[80px] rounded-full -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm gs-fade-up">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="shield"></i>
</div>
<h2 className="text-2xl font-serif text-blue-950 mb-4 tracking-tight">Confidentialité &amp; Sécurité</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Tous les dossiers sont traités de manière strictement confidentielle, sécurisés selon les normes en vigueur et suivis avec rigueur par une équipe dédiée.
                    </p>
<div className="text-sm font-medium text-slate-500 flex items-center gap-2">
<i className="w-4 h-4 text-green-500" data-lucide="check-circle"></i>
                        Respect strict du cadre légal
                    </div>
</div>

<div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm gs-fade-up" data-delay="0.1">
<div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h2 className="text-2xl font-serif text-blue-950 mb-4 tracking-tight">Suivi personnalisé</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Chaque dossier fait l’objet d’un suivi au jour le jour, d’une information claire et d’une clôture formalisée par des actes officiels.
                    </p>
<div className="text-sm font-medium text-slate-500 flex items-center gap-2">
<i className="w-4 h-4 text-green-500" data-lucide="check-circle"></i>
                        Issue de la procédure
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="scene-competence">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto gs-fade-up">
<h2 className="text-3xl md:text-4xl font-serif text-blue-950 tracking-tight mb-4">Notre compétence territoriale</h2>
<p className="text-slate-600">Autour de Clamart et en région parisienne.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="border border-slate-200 rounded-2xl p-8 hover:border-red-200 transition-colors gs-fade-up">
<div className="flex items-center gap-3 mb-6">
<span className="w-3 h-3 rounded-full bg-red-500"></span>
<h3 className="font-bold text-blue-950 uppercase tracking-wider">Office de Clamart</h3>
</div>
<div className="space-y-4 text-slate-600">
<p className="font-medium text-blue-950">Signification et exécution :</p>
<p>Hauts-de-Seine (92), Yvelines (78), Val-d’Oise (95), Eure-et-Loir (28)</p>
</div>
</div>

<div className="border border-slate-200 rounded-2xl p-8 hover:border-blue-200 transition-colors gs-fade-up" data-delay="0.1">
<div className="flex items-center gap-3 mb-6">
<span className="w-3 h-3 rounded-full bg-blue-900"></span>
<h3 className="font-bold text-blue-950 uppercase tracking-wider">Office de Paris</h3>
</div>
<div className="space-y-4 text-slate-600">
<p className="font-medium text-blue-950">Compétence sur :</p>
<p>Paris (75), Seine-et-Marne (77), Yonne (89), Essonne (91), Seine-Saint-Denis (93), Val-de-Marne (94)</p>
</div>
</div>
</div>
<div className="mt-8 text-center bg-slate-50 rounded-xl p-4 text-sm text-slate-500 gs-fade-up">
                👉 En matière de <span className="font-semibold text-blue-950">constat</span> et <span className="font-semibold text-blue-950">recouvrement amiable</span>, la compétence est <span className="underline decoration-red-300">nationale</span>.
            </div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-serif text-blue-950 tracking-tight mb-12 text-center">Questions fréquentes</h2>
<div className="grid gap-6">

<div className="bg-white border border-slate-200 rounded-2xl p-6 gs-fade-up">
<h3 className="text-lg font-semibold text-blue-950 mb-2">Quand faire appel à un huissier de justice ?</h3>
<p className="text-slate-600">Dès qu’une situation nécessite une preuve officielle ou une intervention légale.</p>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 gs-fade-up">
<h3 className="text-lg font-semibold text-blue-950 mb-2">Le constat est-il valable devant un tribunal ?</h3>
<p className="text-slate-600">Oui, il dispose d’une force probante reconnue.</p>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 gs-fade-up">
<h3 className="text-lg font-semibold text-blue-950 mb-2">Qui peut faire appel à l’étude ?</h3>
<p className="text-slate-600">Particuliers, professionnels, entreprises, collectivités.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden border-t border-slate-200" id="scene-contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10 items-start">
<div className="gs-fade-up">
<h2 className="text-4xl font-serif text-blue-950 mb-6 tracking-tight">Contacter un huissier <br/>de justice à Clamart</h2>
<div className="text-lg text-slate-600 mb-8">
                    L’étude vous accueille :<br/>
<span className="font-medium text-blue-950">9h–13h / 14h–18h30</span> (17h le vendredi)
                </div>
<div className="space-y-6">
<div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">Office de Clamart</div>
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-slate-400 mt-1" data-lucide="map-pin"></i>
<div>
<div className="font-medium text-blue-950">56 avenue Jean Jaurès</div>
<div className="text-slate-500">92143 Clamart Cedex</div>
</div>
</div>
</div>
<div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Office de Paris</div>
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-slate-400 mt-1" data-lucide="map-pin"></i>
<div>
<div className="font-medium text-blue-950">6 Villa Duthy</div>
<div className="text-slate-500">75014 Paris</div>
</div>
</div>
</div>
<a className="flex items-center gap-3 text-slate-500 hover:text-red-600 transition-colors font-medium" href="mailto:etude-clamart@abjustice.fr">
<i className="w-5 h-5" data-lucide="mail"></i> etude-clamart@abjustice.fr
                    </a>
</div>
</div>

<div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xl shadow-slate-200/50 relative overflow-hidden gs-fade-up" data-delay="0.2">
<h3 className="text-xl font-serif font-semibold text-blue-950 mb-6">Demande de rendez-vous</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-slate-50 border border-slate-200 text-blue-950 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 transition-all placeholder:text-slate-400" placeholder="Nom" type="text"/>
<input className="w-full bg-slate-50 border border-slate-200 text-blue-950 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 transition-all placeholder:text-slate-400" placeholder="Téléphone" type="tel"/>
</div>
<textarea className="w-full bg-slate-50 border border-slate-200 text-blue-950 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 transition-all placeholder:text-slate-400" placeholder="Votre message..." rows="3"></textarea>
<button className="btn-magnetic w-full bg-blue-950 text-white font-medium py-3 rounded-xl hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20" type="button">
                        Envoyer la demande
                    </button>
<div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
<button className="w-full text-left text-sm text-slate-500 hover:text-blue-950 transition-colors flex items-center gap-2" type="button">
                            👉 Demander un rendez-vous à Clamart
                        </button>
<button className="w-full text-left text-sm text-slate-500 hover:text-blue-950 transition-colors flex items-center gap-2" type="button">
                            👉 Être rappelé par l’étude
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-white text-slate-500 py-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
<p>© 2024 SCP ABRAHMI · BLANCHET · LALLEMAND. Huissiers de Justice.</p>
</div>
</footer>



    </>
  );
}
