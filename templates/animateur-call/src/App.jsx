import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



        // Scroll reveal animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            el.classList.add('opacity-0'); // Initial state
            observer.observe(el);
        });

        // Timeline drawing
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const timeline = document.getElementById('timeline');
        if(timeline) timelineObserver.observe(timeline);

        // Sticky mobile CTA logic
        let lastScrollY = window.scrollY;
        const stickyCta = document.getElementById('sticky-cta');
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100 && !isAtBottom) {
                // Scrolling down
                stickyCta.style.transform = 'translateY(100%)';
            } else {
                // Scrolling up
                stickyCta.style.transform = 'translateY(0)';
            }
            lastScrollY = currentScrollY;
        }, { passive: true });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none z-0" id="confetti-container">
<div className="confetti bg-[#C9A227] left-[10%] duration-[15s]"></div>
<div className="confetti bg-[#6B8F71] left-[30%] duration-[12s] delay-[2s]"></div>
<div className="confetti bg-[#C96A4A] left-[50%] duration-[18s] delay-[5s]"></div>
<div className="confetti bg-[#6B8F71] left-[70%] duration-[14s] delay-[1s]"></div>
<div className="confetti bg-[#C9A227] left-[90%] duration-[16s] delay-[4s]"></div>
</div>

<section className="min-h-screen flex flex-col md:py-24 lg:px-8 bg-[#FDFBF7] z-10 pt-32 pr-6 pb-16 pl-6 relative items-center justify-center">
<div className="animate-fade-in-up text-center max-w-[800px] mr-auto ml-auto">

<div className="group w-48 h-48 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b29d152a-cc72-40a4-a4fe-7f15e8377d41_800w.png)] bg-cover bg-center z-10 mr-auto mb-10 ml-auto relative">
<div className="absolute inset-0 bg-[#C9A227]/10 rounded-full blur-2xl group-hover:bg-[#C9A227]/20 transition-all duration-[0.4s] ease-in-out"></div>
</div>
<span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#FDFBF7] tracking-wide bg-[#C96A4A] rounded-[6px] mb-8 pt-1 pr-2.5 pb-1 pl-2.5">Formation ICC</span>
<h1 className="text-[34px] md:text-[52px] lg:text-[64px] leading-[1.3] font-bold font-serif-custom mb-8">Devenez animateur.trice de Cercle du Choix©.</h1>
<p className="text-[16px] md:text-[18px] leading-[1.6] md:leading-[1.8] font-normal text-[#2D3436] max-w-[800px] mr-auto mb-10 ml-auto">Accompagnez des groupes et collectifs à passer de la confusion à la clarté et les guider à poser des choix conscients.</p>
<a className="btn-primary inline-flex items-center justify-center gap-3 md:px-[36px] md:py-[16px] text-[16px] sm:w-auto w-full pt-[14px] pr-[28px] pb-[14px] pl-[28px]" href="/animateur-cercle-du-choix#recap">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
                JE VEUX DEVENIR ANIMATEUR
            </a>
<div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14px] text-[#2D3436]/55">
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#C9A227]" icon="solar:diploma-linear"></iconify-icon> Certification incluse</span>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 bg-[#F7F2EC] px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<h2 className="text-[28px] md:text-[36px] lg:text-[48px] leading-[1.3] font-semibold font-serif-custom text-center mb-6">Le Monde Actuel : Un Besoin Urgent</h2>
<div className="icc-separator mb-12"></div>
<div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 reveal-on-scroll opacity-0 animate-fade-in-up">

<div className="icc-card p-[28px] md:p-[36px] border-t-[4px] border-[#C96A4A]">
<div className="w-12 h-12 rounded-full bg-[#C96A4A]/10 flex items-center justify-center text-[#1A1A1A] mb-6">
<iconify-icon className="text-2xl text-[#C96A4A]" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<h3 className="font-serif-custom text-[22px] md:text-[26px] lg:text-[34px] font-semibold mb-8 leading-[1.3]">Ce que nous constatons</h3>
<ul className="space-y-4 text-[16px] md:text-[18px]">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C96A4A] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-[#2D3436]">Surinformé, suradapté</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C96A4A] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-[#2D3436]">Décisions prises par peur ou inertie</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C96A4A] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-[#2D3436]">Déconnecté du sens, dispersé</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C96A4A] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-[#2D3436]">Humain manipulé, dépossédé de son pouvoir</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C96A4A] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-[#2D3436]">Compromissions toxiques et subis quotidiens</span>
</li>
</ul>
</div>

<div className="icc-card p-[28px] md:p-[36px] border-t-[4px] border-[#6B8F71]">
<div className="w-12 h-12 rounded-full bg-[#6B8F71]/10 flex items-center justify-center text-[#1A1A1A] mb-6">
<iconify-icon className="text-2xl text-[#6B8F71]" icon="solar:stars-linear"></iconify-icon>
</div>
<h3 className="font-serif-custom text-[22px] md:text-[26px] lg:text-[34px] font-semibold mb-8 leading-[1.3]">Ce que nous créons ensemble</h3>
<ul className="space-y-4 text-[16px] md:text-[18px]">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F71] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#2D3436]">Des humains souverains capables de dire : "Ceci est non négociable pour moi"</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F71] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#2D3436]">Retrouver son autorité intérieure et ne plus donner son pouvoir à l'extérieur</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F71] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#2D3436]">Des décisions incarnées</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F71] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#2D3436]">Des collectifs alignés</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F71] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#2D3436]">Moins de compromissions toxiques, plus de choisis !</span>
</li>
</ul>
</div>
</div>
<p className="text-center text-[16px] md:text-[18px] font-medium mt-16 text-[#C9A227] reveal-on-scroll opacity-0 animate-fade-in-up">
                💡 Le choix conscient répond à un besoin vital de notre époque.
            </p>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-6 lg:px-8 bg-[#FDFBF7] text-center">
<div className="max-w-[800px] mx-auto reveal-on-scroll opacity-0 animate-fade-in-up">
<span className="text-[11px] uppercase block font-semibold text-[#6B8F71] tracking-wider mb-4">La Vision</span>
<h2 className="font-serif-custom text-[28px] md:text-[36px] lg:text-[48px] font-semibold mb-8 leading-[1.3]">
                Créer un réseau de personnes capables d'accompagner l'humain à choisir en conscience dans un monde saturé d'indécision.
            </h2>
<div className="icc-card mt-12 text-left p-[28px] md:p-[36px]">
<p className="text-[16px] md:text-[18px] text-[#2D3436] mb-6 font-medium flex flex-wrap items-center gap-2 leading-[1.6]">
<iconify-icon className="text-[#6B8F71] text-xl" icon="solar:leaf-linear"></iconify-icon>
                    Avec la formation <span className="text-[22px] text-slate-950 font-handwriting px-1 translate-y-1">Animateur de Cercle du Choix</span>, nous visons à :
                </p>
<ul className="space-y-4 text-[#2D3436] text-[16px] md:text-[18px]">
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A227] text-xl shrink-0" icon="solar:arrow-right-linear"></iconify-icon> Diffuser largement une culture du choix conscient</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A227] text-xl shrink-0" icon="solar:arrow-right-linear"></iconify-icon> Toucher les collectifs, organisations, groupes humains</li>
<li className="flex flex-wrap gap-x-2 gap-y-2 items-center"><iconify-icon className="text-[#C9A227] text-xl shrink-0" icon="solar:arrow-right-linear"></iconify-icon> Former des porteurs de Protocole CALL® capables de guider avec justesse</li>
</ul>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-6 lg:px-8 bg-[#F7F2EC] overflow-hidden">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif-custom text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-center mb-6 leading-[1.3]">Ce Que Vous Allez Pouvoir Faire</h2>
<div className="icc-separator mb-12"></div>
<div className="grid md:grid-cols-3 gap-6 md:gap-8 perspective-1000">

<div className="icc-card p-[28px] md:p-[36px] border-t-[4px] border-[#6B8F71] reveal-on-scroll opacity-0 animate-fade-in-up">
<div className="w-14 h-14 rounded-full bg-[#6B8F71]/10 flex items-center justify-center mb-6 text-[#1A1A1A]">
<iconify-icon className="text-3xl text-[#6B8F71]" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="font-serif-custom text-[22px] md:text-[26px] lg:text-[34px] font-semibold mb-4 leading-[1.3]">Animer des Cercles du Choix</h3>
<ul className="space-y-3 text-[16px] text-[#2D3436]">
<li className="flex items-start gap-2"><iconify-icon className="text-[#1A1A1A] text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon> Structurés et sécurisés</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#1A1A1A] text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon> Guider un groupe à clarifier ce qui est non-négociable</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#1A1A1A] text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon> Aider à poser des choix alignés et incarnés</li>
</ul>
</div>

<div className="icc-card p-[28px] md:p-[36px] border-t-[4px] border-[#C9A227] reveal-on-scroll delay-100 opacity-0 animate-fade-in-up">
<div className="w-14 h-14 rounded-full bg-[#C9A227]/10 flex items-center justify-center mb-6 text-[#1A1A1A]">
<iconify-icon className="text-3xl text-[#C9A227]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-serif-custom text-[22px] md:text-[26px] lg:text-[34px] font-semibold mb-4 leading-[1.3]">Tenir un Cadre Puissant</h3>
<ul className="space-y-3 text-[16px] text-[#2D3436]">
<li className="flex items-start gap-2"><iconify-icon className="text-[#1A1A1A] text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon> Cadre éthique, clair et sécurisant</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#1A1A1A] text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon> Gérer les dynamiques de groupe</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#1A1A1A] text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon> Posture solide et légitime</li>
</ul>
</div>

<div className="icc-card md:p-[36px] border-t-[4px] reveal-on-scroll delay-200 opacity-0 border-[#C96A4A] pt-[28px] pr-[28px] pb-[28px] pl-[28px] animate-fade-in-up">
<div className="w-14 h-14 rounded-full bg-[#C96A4A]/10 flex items-center justify-center mb-6 text-[#1A1A1A]">
<iconify-icon className="text-3xl text-[#C96A4A]" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="font-serif-custom text-[22px] md:text-[26px] lg:text-[34px] font-semibold mb-4 leading-[1.3]">Proposer des Cercles Partout</h3>
<ul className="text-[16px] text-[#2D3436] space-y-3">
<li className="flex items-start gap-2"><iconify-icon className="text-[#1A1A1A] text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon> En entreprise</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#1A1A1A] text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon> Dans des associations</li>
<li className="flex gap-x-2 gap-y-2 items-start"><iconify-icon className="shrink-0 text-lg text-[#1A1A1A]" height="18" icon="solar:check-read-linear" style={{color: 'rgb(26, 26, 26)'}} width="18"></iconify-icon> Dans des collectifs</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#1A1A1A] text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon> Dans des équipes de MLM</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#1A1A1A] text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon> En complément d'un cours de yoga ou de sophro,...</li>
</ul>
</div>
</div>
</div>
</section>

<section className="md:py-20 lg:py-24 lg:px-8 bg-[#FDFBF7] pt-12 pr-6 pb-12 pl-6">
<div className="max-w-[800px] mx-auto text-center reveal-on-scroll opacity-0 animate-fade-in-up">
<h2 className="text-[28px] md:text-[36px] lg:text-[48px] leading-[1.3] font-semibold font-serif-custom mb-6">Ce Que Vous Allez Obtenir</h2>
<div className="icc-separator mb-12"></div>
<div className="icc-card p-[28px] md:p-[36px] text-left">
<ul className="space-y-6">
<li className="flex items-start gap-4 group cursor-default">
<div className="relative w-6 h-6 shrink-0 mt-0.5">
<input checked="" className="peer appearance-none w-6 h-6 border-2 border-[#C9A227] rounded-md checked:bg-[#C9A227] transition-all duration-300" disabled="" type="checkbox"/>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 flex items-center justify-center pointer-events-none transition-opacity duration-300" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-[16px] md:text-[18px] text-[#2D3436] transition-colors">Une méthode claire pour animer des <span className="text-[20px] text-slate-950 font-handwriting px-1">Cercles du Choix</span></span>
</li>
<li className="flex items-start gap-4 group cursor-default">
<div className="relative w-6 h-6 shrink-0 mt-0.5">
<input checked="" className="peer appearance-none w-6 h-6 border-2 border-[#C9A227] rounded-md checked:bg-[#C9A227] transition-all duration-300" disabled="" type="checkbox"/>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 flex items-center justify-center pointer-events-none transition-opacity duration-300" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-[16px] md:text-[18px] text-[#2D3436] transition-colors">Une posture solide d'animateur</span>
</li>
<li className="flex items-start gap-4 group cursor-default">
<div className="relative w-6 h-6 shrink-0 mt-0.5">
<input checked="" className="peer appearance-none w-6 h-6 border-2 border-[#C9A227] rounded-md checked:bg-[#C9A227] transition-all duration-300" disabled="" type="checkbox"/>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 flex items-center justify-center pointer-events-none transition-opacity duration-300" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-[16px] md:text-[18px] text-[#2D3436] transition-colors">Une certification Animateur de Cercle du Choix (en ligne et présentiel)</span>
</li>
<li className="flex items-start gap-4 group cursor-default">
<div className="relative w-6 h-6 shrink-0 mt-0.5">
<input checked="" className="peer appearance-none w-6 h-6 border-2 border-[#C9A227] rounded-md checked:bg-[#C9A227] transition-all duration-300" disabled="" type="checkbox"/>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 flex items-center justify-center pointer-events-none transition-opacity duration-300" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-[16px] md:text-[18px] text-[#2D3436] transition-colors">Le droit d'utiliser la marque Protocole CALL® dans ce cadre précis</span>
</li>
<li className="flex items-start gap-4 group cursor-default">
<div className="relative w-6 h-6 shrink-0 mt-0.5">
<input checked="" className="peer appearance-none w-6 h-6 border-2 border-[#C9A227] rounded-md checked:bg-[#C9A227] transition-all duration-300" disabled="" type="checkbox"/>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 flex items-center justify-center pointer-events-none transition-opacity duration-300" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-[16px] md:text-[18px] text-[#2D3436] transition-colors">La confiance à guider des Cercles du Choix</span>
</li>
</ul>
</div>
<div className="mt-12">
<a className="btn-primary inline-flex items-center justify-center gap-3 md:px-[36px] md:py-[16px] text-[16px] sm:w-auto w-full pt-[14px] pr-[28px] pb-[14px] pl-[28px]" href="/animateur-cercle-du-choix#recap">
<iconify-icon className="text-xl" icon="solar:gift-linear"></iconify-icon>
                    OUI, JE REJOINS LA FORMATION
                </a>
</div>
</div>
</section>

<section className="md:py-20 lg:py-24 lg:px-8 bg-[#F7F2EC] pt-12 pr-6 pb-12 pl-6" id="programme">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll opacity-0 animate-fade-in-up">
<h2 className="font-serif-custom text-[28px] md:text-[36px] lg:text-[48px] font-semibold mb-6 leading-[1.3]">Le Programme Complet</h2>
<div className="icc-separator mb-6"></div>
<p className="text-[16px] md:text-[18px] font-medium text-[#2D3436]">2 modules de 2 jours de formation en ligne (4 jours) + 1 week-end complet en présentiel à Lartigue</p>
</div>
<div className="relative pl-8 md:pl-12 py-8 timeline-container visible" id="timeline">
<div className="timeline-line hidden sm:block"></div>

<div className="relative mb-12 group reveal-on-scroll opacity-0 animate-fade-in-up">
<div className="hidden sm:flex absolute -left-[2.85rem] w-8 h-8 bg-[#FFFFFF] border-[1.5px] border-[#C9A227] rounded-full items-center justify-center z-10 transition-transform duration-[0.4s] group-hover:scale-110">
<div className="w-2 h-2 bg-[#C9A227] rounded-full"></div>
</div>
<div className="icc-card md:p-[36px] border-t-[4px] border-[#C96A4A] pt-[28px] pr-[28px] pb-[28px] pl-[28px]">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#C9A227]/20">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#C96A4A]/10 flex items-center justify-center text-[#C96A4A]">
<iconify-icon className="text-2xl" icon="solar:key-linear"></iconify-icon>
</div>
<div className="">
<h3 className="font-serif-custom text-[22px] md:text-[26px] lg:text-[34px] font-semibold leading-[1.3]">MODULE 1 — Le Protocole CALL®</h3>
<div className="flex items-center gap-2 text-[14px] text-[#2D3436]/55 mt-1">
<iconify-icon icon="solar:laptop-linear"></iconify-icon> En ligne <span className="mx-1 text-[#C9A227]">•</span> <iconify-icon icon="solar:user-circle-linear"></iconify-icon> Sophie Delrot
                                    </div>
</div>
</div>
</div>
<div className="space-y-4 text-[#2D3436] text-[16px] md:text-[18px]">
<p className=""><span className="font-medium text-[#1A1A1A]">Fondation :</span> Les 7 phénomènes internes &amp; les 21 étapes du protocole CALL®</p>
<p className=""><span className="font-medium text-[#1A1A1A]">Pratique :</span> L'essentiel &amp; les subtilités du protocole</p><p className=""><span className="font-medium text-[#1A1A1A]">Dates : </span> 9 &amp; 10 juillet en ligne</p>
<div className="mt-4 pt-4 border-t border-[#C9A227]/10 bg-[#F7F2EC] rounded-lg p-4">
<span className="block text-[11px] uppercase tracking-wider text-[#C96A4A] font-semibold mb-1">Ce que vous apprenez</span>
<span className="text-[14px]">Maîtriser le protocole CALL pour vous-même et pour guider les autres avec précision et profondeur.</span>
</div>
</div>
</div>
</div>

<div className="group reveal-on-scroll opacity-0 mb-12 relative animate-fade-in-up">
<div className="hidden sm:flex absolute -left-[2.85rem] w-8 h-8 bg-[#FFFFFF] border-[1.5px] border-[#C9A227] rounded-full items-center justify-center z-10 transition-transform duration-[0.4s] group-hover:scale-110">
<div className="w-2 h-2 bg-[#C9A227] rounded-full"></div>
</div>
<div className="icc-card md:p-[36px] border-t-[4px] border-[#6B8F71] pt-[28px] pr-[28px] pb-[28px] pl-[28px]">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#C9A227]/20">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#6B8F71]/10 flex items-center justify-center text-[#6B8F71]">
<iconify-icon className="text-2xl" icon="solar:infinity-linear"></iconify-icon>
</div>
<div className="">
<h3 className="font-serif-custom text-[22px] md:text-[26px] lg:text-[34px] font-semibold leading-[1.3]">MODULE 2 — Le Cercle du Choix</h3>
<div className="flex items-center gap-2 text-[14px] text-[#2D3436]/55 mt-1">
<iconify-icon icon="solar:laptop-linear"></iconify-icon> En ligne <span className="mx-1 text-[#C9A227]">•</span> <iconify-icon icon="solar:user-circle-linear"></iconify-icon> Sophie Delrot
                                    </div>
</div>
</div>
</div>
<div className="space-y-4 text-[#2D3436] text-[16px] md:text-[18px]">
<p className="font-medium text-[#1A1A1A]">Structure et étapes d'un Cercle du Choix :</p>
<ul className="list-disc pl-5 space-y-1 text-[16px]">
<li className="">Ouvrir le cercle</li>
<li className="">Poser le cadre</li>
<li className="">Gérer les dynamiques de groupe</li>
<li className="">Clôturer le cercle</li>
<li className="">Organiser un cercle</li>
</ul>
<p className=""><span className="font-medium text-[#1A1A1A]">Posture de l'animateur :</span> Comment incarner le rôle avec justesse et présence</p><p className=""><span className="font-medium text-[#1A1A1A]">Dates :</span> 23 &amp; 24 juillet en ligne</p>
<div className="mt-4 pt-4 border-t border-[#C9A227]/10 bg-[#F7F2EC] rounded-lg p-4">
<span className="block text-[11px] uppercase tracking-wider text-[#6B8F71] font-semibold mb-1">Ce que vous apprenez</span>
<span className="text-[14px]">Animer un Cercle du Choix de A à Z avec confiance et compétence.</span>
</div>
</div>
</div>
</div><div className="group reveal-on-scroll opacity-0 mb-12 relative animate-fade-in-up">
<div className="hidden sm:flex absolute -left-[2.85rem] w-8 h-8 bg-[#FFFFFF] border-[1.5px] border-[#C9A227] rounded-full items-center justify-center z-10 transition-transform duration-[0.4s] group-hover:scale-110">
<div className="w-2 h-2 bg-[#C9A227] rounded-full"></div>
</div>
</div>

<div className="relative group reveal-on-scroll opacity-0 animate-fade-in-up">
<div className="hidden sm:flex absolute -left-[2.85rem] w-8 h-8 bg-[#FFFFFF] border-[1.5px] border-[#C9A227] rounded-full items-center justify-center z-10 transition-transform duration-[0.4s] group-hover:scale-110">
<div className="w-2 h-2 bg-[#C9A227] rounded-full"></div>
</div>
<div className="icc-card p-[28px] md:p-[36px] border-t-[4px] border-[#C9A227]">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#C9A227]/20">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227]">
<iconify-icon className="text-2xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<div className="">
<h3 className="font-serif-custom text-[22px] md:text-[26px] lg:text-[34px] font-semibold leading-[1.3]">WEEK-END 3 — Pratique Guidée &amp; Certification</h3>
<div className="flex text-[14px] text-[#2D3436]/55 mt-1 gap-x-2 gap-y-2 items-center">Présentiel à Lartigue Sophie Delrot &amp; Jean-Luc De Wachter</div>
</div>
</div>
</div>
<div className="space-y-4 text-[#2D3436] text-[16px] md:text-[18px]">
<p className=""><span className="font-medium text-[#1A1A1A]">Pratique guidée in situ :</span> Animer des cercles en conditions réelles</p>
<p className=""><span className="font-medium text-[#1A1A1A]">Gestion de la dynamique :</span> Supervision et ajustements</p>
<p className=""><span className="font-medium text-[#1A1A1A]">Certification :</span> Remise de l'attestation officielle</p>
<p className=""><span className="font-medium text-[#1A1A1A]">Remise de la BOX :</span> cahier + flyer + fascicule "Inviter, Animer, Évoluer" + éléments promotionnels</p><p className=""><span className="font-medium text-[#1A1A1A]">Dates :</span> 20 &amp; 21 août en présentiel à Lartigue</p>
<div className="mt-4 pt-4 border-t border-[#C9A227]/10 bg-[#C9A227]/5 rounded-lg p-4">
<span className="block text-[11px] uppercase tracking-wider text-[#C9A227] font-semibold mb-1">Ce que vous obtenez</span>
<span className="text-[14px]">Votre certification officielle et tous les outils pour lancer vos cercles immédiatement.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-6 lg:px-8 bg-[#FDFBF7]">
<div className="max-w-[800px] mx-auto">
<div className="icc-card overflow-hidden reveal-on-scroll text-center opacity-0 pb-10 relative animate-fade-in-up">

<div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C9A227]/40 rounded-tl-[14px] -translate-x-4 -translate-y-4"></div>
<span className="text-[11px] uppercase block font-semibold text-[#C9A227] tracking-widest mb-6 pt-10">L'Ambiance de Cette Formation 💛</span>
<div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-[18px] md:text-[22px] lg:text-[26px] font-serif-custom font-medium leading-[1.3]">
<span className="flex items-center gap-2"><iconify-icon className="text-[#6B8F71]" icon="solar:shield-check-linear"></iconify-icon> Sécurisante</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#6B8F71]" icon="solar:waterdrops-linear"></iconify-icon> Profonde</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#6B8F71]" icon="solar:users-group-rounded-linear"></iconify-icon> Humaine</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#C9A227]" icon="solar:fire-linear"></iconify-icon> Engagée</span>
</div>
<p className="text-[16px] md:text-[18px] text-[#2D3436] max-w-2xl mx-auto leading-[1.6]">
                    Un espace où vous pourrez vous poser, explorer, pratiquer et grandir en toute confiance.
                </p>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-6 lg:px-8 bg-[#F7F2EC]">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif-custom text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-center mb-6 leading-[1.3]">Votre Formatrice &amp; L'Inventeur du Protocole CALL®</h2>
<div className="icc-separator mb-12"></div>
<div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

<div className="icc-card p-[28px] md:p-[36px] text-center reveal-on-scroll opacity-0 animate-fade-in-up">
<div className="group cursor-pointer w-32 h-32 border-2 rounded-full mr-auto mb-6 ml-auto pt-1 pr-1 pb-1 pl-1 relative">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-[#C9A227]/20 opacity-0 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-md"></div>
<div className="flex overflow-hidden bg-center text-[#2D3436]/40 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52d77306-a897-4fb9-912d-d082313eb7f6_320w.png)] bg-cover z-10 rounded-full relative items-center justify-center">
</div>
</div>
<h3 className="font-serif-custom text-[22px] md:text-[26px] lg:text-[34px] font-semibold mb-2 leading-[1.3]">Sophie Delrot</h3>
<p className="text-[11px] text-[#C9A227] uppercase tracking-wider mb-6 font-semibold">Directrice de l'ICC, Formatrice &amp; Magifestatrice</p>
<div className="text-[#2D3436] text-[16px] md:text-[18px] space-y-4 mb-8 text-left leading-[1.6]">
<p>Sophie est une présence rare. Hypersensible, ancienne contrôleuse aérienne pendant 24 ans, elle guide aujourd'hui les êtres sur leur chemin avec justesse, clarté et douceur.</p>
<p className="">On dit d'elle qu'elle est une magifestatrice : elle relie le ciel et la terre, le mental et le cœur, le visible et l'invisible.</p>
<p className="">Avec elle, quelque chose se dépose, se clarifie, se libère. Elle crée un espace sacré où vous pouvez enfin vous écouter, vous choisir et passer un palier.</p>
<p>Son approche ? <span className="font-handwriting text-[20px] text-[#C9A227] px-1">Joisir</span> 💛 — choisir de mettre la joie au point de départ de chaque choix.</p>
</div>
<div className="border-[1.5px] border-[#C9A227] rounded-[10px] p-6 bg-[#FDFBF7] shadow-sm mt-auto text-left">
<p className="text-[18px] md:text-[22px] lg:text-[26px] leading-[1.3] font-medium italic text-[#1A1A1A] font-serif-custom">"Tout ce qui est choisi, n'est pas subi."</p>
</div>
</div>

<div className="icc-card md:p-[36px] reveal-on-scroll delay-100 text-center opacity-0 pt-[28px] pr-[28px] pb-[28px] pl-[28px] animate-fade-in-up">
<div className="group cursor-pointer w-32 h-32 border-2 rounded-full mr-auto mb-6 ml-auto pt-1 pr-1 pb-1 pl-1 relative">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-[#C9A227]/20 opacity-0 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-md"></div>
<div className="flex overflow-hidden bg-center text-[#2D3436]/40 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6df3d010-7f54-4989-98b3-7a2e172d16a0_320w.png)] bg-cover z-10 rounded-full relative items-center justify-center">
</div>
</div>
<h3 className="font-serif-custom text-[22px] md:text-[26px] lg:text-[34px] font-semibold mb-2 leading-[1.3]">Jean-Luc De Wachter</h3>
<p className="uppercase text-[11px] font-semibold text-[#C9A227] tracking-wider mb-6">Auteur, Penseur &amp; Inventeur du Protocole CALL® &amp; de l'Introspection Dynamique®</p>
<div className="text-[#2D3436] text-[16px] md:text-[18px] space-y-4 mb-8 text-left leading-[1.6]">
<p className="">Jean-Luc est philosophe, auteur et créateur visionnaire.</p>
<p className="">Auteur des livres "Business Bénédiction" et "Je te dis la vérité", il a inventé le Protocole CALL® et l'Introspection Dynamique®.</p>
<p className="">Son histoire ? En 2015, au bord de la faillite, à quelques mois des huissiers, il pose un choix si profond, si puissant qu'il devient non-négociable… et sa vie bascule.</p>
<p className="">Aujourd'hui, il transmet la mécanique du choix pour que chacun puisse transformer sa trajectoire et vivre avec confiance, foi et abondance.</p>
</div>
<div className="border-[1.5px] border-[#C9A227] rounded-[10px] p-6 bg-[#FDFBF7] shadow-sm mt-auto text-left">
<p className="text-[18px] md:text-[22px] lg:text-[26px] leading-[1.3] font-medium italic text-[#1A1A1A] font-serif-custom">"Tout ce qui est négociable est négocié. Ne laissons pas être négocié notre essentiel !"</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 bg-[#FDFBF7] px-6 lg:px-8">
<div className="max-w-[800px] mx-auto text-center reveal-on-scroll opacity-0 animate-fade-in-up">
<h2 className="font-serif-custom text-[28px] md:text-[36px] lg:text-[48px] font-semibold mb-6 leading-[1.3]">Cette Formation Est Pour Vous Si…</h2>
<div className="icc-separator mb-12"></div>
<div className="icc-card p-[28px] md:p-[36px] text-left border-t-[4px] border-[#6B8F71]">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 shrink-0 mt-0.5 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#C9A227]/10">
<iconify-icon className="text-[#C9A227] text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-[16px] md:text-[18px] text-[#2D3436]">Vous êtes coach, thérapeute, accompagnant et souhaitez ajouter un outil puissant à votre pratique</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 shrink-0 mt-0.5 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#C9A227]/10">
<iconify-icon className="text-[#C9A227] text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-[16px] md:text-[18px] text-[#2D3436]">Vous êtes responsable RH, manager, facilitateur et voulez accompagner vos équipes vers plus de clarté</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 shrink-0 mt-0.5 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#C9A227]/10">
<iconify-icon className="text-[#C9A227] text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-[16px] md:text-[18px] text-[#2D3436]">Vous animez déjà des groupes, cercles, ateliers et cherchez une méthode structurée</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 shrink-0 mt-0.5 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#C9A227]/10">
<iconify-icon className="text-[#C9A227] text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-[16px] md:text-[18px] text-[#2D3436]">Vous sentez l'appel de guider des humains vers leur souveraineté intérieure</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 shrink-0 mt-0.5 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#C9A227]/10">
<iconify-icon className="text-[#C9A227] text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-[16px] md:text-[18px] text-[#2D3436]">Vous voulez diffuser une culture du choix conscient dans votre environnement</span>
</li>
</ul>
</div>
<p className="mt-12 text-[16px] md:text-[18px] font-medium text-[#1A1A1A]">
                💛 Alors oui : cette formation est faite pour vous.
            </p>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-6 lg:px-8 bg-[#F7F2EC]">
<div className="max-w-[800px] mx-auto">
<div className="icc-card text-center relative reveal-on-scroll opacity-0 p-[28px] md:p-[36px] animate-fade-in-up">
<iconify-icon className="absolute top-8 left-8 text-4xl text-[#C9A227]/20" icon="solar:quote-right-linear"></iconify-icon>
<p className="font-serif-custom italic text-[22px] md:text-[26px] lg:text-[34px] text-[#1A1A1A] leading-[1.3] font-semibold mb-8 mt-6 relative z-10">
                    "Maîtriser l'art de choisir, c'est devenir légendaire. C'est incarner pleinement qui on est et le proclamer au monde entier."
                </p>
<div className="text-center">
<p className="font-medium text-[16px] md:text-[18px] text-[#1A1A1A]">Jean-Luc De Wachter</p>
<p className="text-[14px] text-[#2D3436]/55">Auteur, Penseur &amp; Inventeur du Protocole CALL®</p>
</div>
</div>
</div>
</section>

<section className="md:py-20 lg:py-24 lg:px-8 bg-[#FDFBF7] pt-12 pr-6 pb-12 pl-6" id="recap">
<div className="max-w-[800px] mx-auto">
<h2 className="font-serif-custom text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-center mb-6 leading-[1.3]">Informations Pratiques</h2>
<div className="icc-separator mb-12"></div>
<div className="icc-card reveal-on-scroll opacity-0 p-[28px] md:p-[36px] animate-fade-in-up">
<div className="grid sm:grid-cols-2 gap-y-8 gap-x-12">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#C9A227] text-2xl shrink-0 mt-1" icon="solar:calendar-linear"></iconify-icon>
<div className="">
<span className="block text-[11px] uppercase tracking-wider text-[#6B8F71] font-semibold">Date</span>
<span className="text-[16px] md:text-[18px] font-medium text-[#1A1A1A]">Juillet/Août 2026</span>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#C9A227] text-2xl shrink-0 mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<div className="">
<span className="block text-[11px] uppercase tracking-wider text-[#6B8F71] font-semibold">Durée</span>
<span className="text-[16px] md:text-[18px] font-medium text-[#1A1A1A]">4 jours en ligne + 1 week-end présentiel</span>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#C9A227] text-2xl shrink-0 mt-1" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<div className="">
<span className="block text-[11px] uppercase tracking-wider text-[#6B8F71] font-semibold">Format</span>
<span className="text-[#1A1A1A] font-medium text-[16px] md:text-[18px]">Hybride</span>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#C9A227] text-2xl shrink-0 mt-1" icon="solar:wallet-linear"></iconify-icon>
<div className="">
<span className="block text-[11px] uppercase tracking-wider text-[#6B8F71] font-semibold">Tarif</span>
<span className="text-[16px] md:text-[18px] font-medium text-[#1A1A1A]">2200€</span>
</div>
</div>
<div className="flex items-start gap-4 sm:col-span-2 pt-4 border-t border-[#C9A227]/20">
<iconify-icon className="text-[#C9A227] text-2xl shrink-0 mt-1" icon="solar:diploma-linear"></iconify-icon>
<div className="">
<span className="block text-[11px] uppercase tracking-wider text-[#C9A227] font-semibold">Certification &amp; Bonus</span>
<span className="text-[#1A1A1A] font-medium text-[16px] md:text-[18px] block">Attestation Animateur de Cercle du Choix</span>
<span className="text-[#2D3436] text-[14px] block mt-1">BOX complète (cahier, flyer, fascicule + éléments promotionnels)</span>
</div>
</div>
</div>
</div>
<div className="mt-10 md:mt-12 text-center reveal-on-scroll opacity-0 animate-fade-in-up">
<a className="btn-primary inline-flex items-center justify-center gap-3 md:px-[36px] md:py-[16px] text-[16px] sm:w-auto w-full pt-[14px] pr-[28px] pb-[14px] pl-[28px]" href="https://www.helloasso.com/associations/association-incandescence/evenements/animateur-de-cercle-du-choix">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
                    S'INSCRIRE À LA FORMATION
                </a>
</div>
</div>
</section>

<section className="md:py-20 lg:py-24 lg:px-8 bg-[#F7F2EC] pt-12 pr-6 pb-12 pl-6">
<div className="max-w-[800px] mx-auto">
<h2 className="font-serif-custom text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-center mb-6 leading-[1.3]">Questions Fréquentes</h2>
<div className="icc-separator mb-12"></div>
<div className="space-y-4 reveal-on-scroll opacity-0">
<details className="group icc-card !p-0 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-[#1A1A1A] text-[16px] md:text-[18px]">
                        Pour qui est cette formation ?
                        <span className="transition group-open:rotate-45">
<iconify-icon className="text-xl text-[#C9A227]" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-[#2D3436] text-[14px] md:text-[16px] leading-[1.6]">
                        Pour toute personne qui souhaite guider des groupes vers des choix conscients : coachs, thérapeutes, facilitateurs, managers, RH, animateurs de cercles, ou toute personne appelée par cette mission.
                    </div>
</details>
<details className="group icc-card !p-0 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer text-[16px] md:text-[18px] font-medium text-[#1A1A1A] pt-6 pr-6 pb-6 pl-6 items-center justify-between">Dois-je avoir participé à un Cercle du Choix avant ?<span className="transition group-open:rotate-45">
<iconify-icon className="text-xl text-[#C9A227]" icon="solar:add-circle-linear"></iconify-icon>
</span></summary>
<div className="px-6 pb-6 text-[#2D3436] text-[14px] md:text-[16px] leading-[1.6]">
                        C'est fortement recommandé pour comprendre l'expérience de l'intérieur, mais pas obligatoire. Si vous n'avez jamais participé, nous vous invitons à rejoindre un Cercle du Choix lors de la tournée.
                    </div>
</details>
<details className="group icc-card !p-0 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-[#1A1A1A] text-[16px] md:text-[18px]">
                        Quelle est la différence entre Animateur et Praticien CALL ?
                        <span className="transition group-open:rotate-45">
<iconify-icon className="text-xl text-[#C9A227]" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-[#2D3436] text-[14px] md:text-[16px] leading-[1.6]">
                        L'Animateur guide des groupes dans des Cercles du Choix collectifs. Le Praticien CALL accompagne en individuel avec le protocole CALL complet (21 étapes). Les deux formations sont complémentaires.
                    </div>
</details>
<details className="group icc-card !p-0 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-[#1A1A1A] text-[16px] md:text-[18px]">
                        Puis-je payer en plusieurs fois ?
                        <span className="transition group-open:rotate-45">
<iconify-icon className="text-xl text-[#C9A227]" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-[#2D3436] text-[14px] md:text-[16px] leading-[1.6]">
                        Oui, des facilités de paiement sont possibles. Contactez-nous pour en discuter.
                    </div>
</details>
<details className="group icc-card !p-0 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-[#1A1A1A] text-[16px] md:text-[18px]">
                        Que se passe-t-il après la certification ?
                        <span className="transition group-open:rotate-45">
<iconify-icon className="text-xl text-[#C9A227]" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-[#2D3436] text-[14px] md:text-[16px] leading-[1.6]">
                        Vous recevez votre attestation, votre BOX complète, et vous êtes autorisé(e) à animer des Cercles du Choix en utilisant le nom CALL. Vous intégrez également le réseau des Animateurs certifiés ICC.
                    </div>
</details>
</div>
</div>
</section>

<section className="md:py-24 lg:py-32 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FDFBF7] to-[#F7F2EC] pt-16 pr-6 pb-16 pl-6 relative" id="inscription">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="-translate-x-1/3 bg-[#6B8F71]/5 w-[600px] h-[600px] rounded-full absolute bottom-0 left-0 blur-3xl translate-y-1/3"></div>
<div className="max-w-[900px] mx-auto relative z-10 reveal-on-scroll opacity-0">
<div className="icc-card md:p-[56px] lg:p-[72px] border-t-[4px] shadow-[#1A1A1A]/5 text-center border-[#C96A4A] pt-[32px] pr-[32px] pb-[32px] pl-[32px] shadow-2xl">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C96A4A]/10 text-[#C96A4A] mb-8">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<h2 className="font-serif-custom text-[28px] md:text-[40px] lg:text-[48px] font-medium mb-6 leading-[1.2] text-[#1A1A1A] tracking-tight">
                Devenez Animateur de Cercle du Choix
            </h2>
<div className="icc-separator mb-10"></div>
<div className="text-[16px] md:text-[18px] text-[#2D3436] font-normal space-y-3 mb-10 leading-[1.7] max-w-[700px] mx-auto">
<p className="">Le monde a besoin de guides du choix conscient.</p>
<p className="">De personnes capables d'accompagner des collectifs à retrouver leur souveraineté intérieure.</p>
<p className="">De porteurs de CALL® qui diffusent une culture du choix dans un monde saturé d'indécision.</p>
<p className="font-normal text-[#1A1A1A] mt-8 text-[18px] md:text-[20px]">Et si cette personne, c'était vous ?</p>
</div>
<p className="text-[16px] md:text-[18px] font-normal text-[#1A1A1A] mb-8 max-w-[600px] mx-auto">
                Faites le choix de devenir Animateur. Rejoignez le réseau des porteurs de CALL.
            </p><button className="btn-primary group inline-flex md:px-[40px] md:py-[18px] text-[16px] sm:w-auto shadow-[#C96A4A]/20 transition-all hover:-translate-y-1 cursor-pointer font-medium w-full rounded-xl pt-[16px] pr-[32px] pb-[16px] pl-[32px] shadow-xl gap-x-3 gap-y-3 items-center justify-center" onclick="window.location.href='/animateur-cercle-du-choix#recap'" role="button">
<svg className="group-hover:scale-110 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
                OUI, JE REJOINS LA FORMATION
            </button>
<div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14px] md:text-[15px] text-[#2D3436]/70 font-normal">
<span className="flex items-center gap-2">
<svg className="text-[#C9A227]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
                    Certification incluse
                </span>
</div>
<p className="text-[20px] md:text-[24px] font-normal italic text-[#C9A227] tracking-tight font-serif-custom mt-12 mb-2">
                ✨ Ainsi soit-il. ✨
            </p>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] py-12 px-6 lg:px-8 text-center">
<div className="max-w-[800px] mx-auto flex flex-col items-center gap-6">
<p className="font-serif-custom font-bold text-[20px] text-[#C9A227] tracking-widest uppercase">Institut Choix et Conscience</p>
<p className="text-[14px] font-light text-[#FDFBF7]/45">©2026 · Institut Choix et Conscience (ICC) · Tous Droits Réservés</p>
<div className="flex gap-4 underline underline-offset-4 decoration-[#FDFBF7]/20 text-[14px] font-normal text-[#FDFBF7]/55 transition-colors">
<a className="hover:text-[#C9A227] hover:decoration-[#C9A227] transition-all duration-300" href="http://institut-choix-et-conscience.org/politique-confidentialite">Politique de confidentialité</a>
<a className="hover:text-[#C9A227] hover:decoration-[#C9A227] transition-all duration-300" href="http://institut-choix-et-conscience.org/cgv">Conditions générales</a>
</div>
<div className="w-full h-[1px] bg-[#FDFBF7]/10 my-2"></div>
<p className="text-[11px] font-light text-[#FDFBF7]/25 mt-2">Des questions ? Contactez-nous à <a className="text-[#FDFBF7]/45 font-medium hover:text-[#C9A227] transition-colors" href="mailto:contact@icc.com">contact@icc.com</a></p>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full md:hidden glass-panel p-4 z-50 transform transition-transform duration-300 translate-y-0 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] bg-[#FDFBF7]" id="sticky-cta">
<div className="flex items-center justify-between max-w-md mx-auto gap-4">
<div className="flex-1 min-w-0">
<p className="text-[11px] text-[#C9A227] uppercase tracking-wider truncate font-semibold">Formation Certifiante</p>
<p className="text-[14px] font-medium text-[#1A1A1A] truncate">Animateur CALL</p>
</div>
<a className="shrink-0 px-6 py-2.5 bg-[#C96A4A] text-[#FDFBF7] text-[14px] font-semibold rounded-[10px] shadow-lg shadow-[#C96A4A]/20 active:scale-95 transition-transform" href="#inscription">
                Je m'inscris
            </a>
</div>
</div>


    </>
  );
}
