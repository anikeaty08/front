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



        // Navbar transparency on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('bg-[#FAFAF8]/90', 'bg-[#FAFAF8]');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('bg-[#FAFAF8]', 'bg-[#FAFAF8]/90');
            }
        });

        // Scroll Reveal Animation Observer
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-500 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#1A1A1A]/5 py-4" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
<a className="font-serif-custom text-2xl tracking-tighter text-[#1B4332] flex items-center gap-2" href="#">
<span className="text-[#C9A84C]">E</span>D
            </a>
<div className="hidden lg:flex items-center gap-8 text-xs tracking-wide uppercase font-medium text-[#1A1A1A]/70">
<a className="hover:text-[#1B4332] transition-colors" href="#misja">Misja &amp; Wyróżniki</a>
<a className="hover:text-[#1B4332] transition-colors" href="#zespol">Zespół</a>
<a className="hover:text-[#1B4332] transition-colors flex items-center gap-1 group" href="#uslugi">
                    Zakres Usług
                    <iconify-icon className="group-hover:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="hover:text-[#1B4332] transition-colors" href="#rtg">Pracownia RTG</a>
<a className="hover:text-[#1B4332] transition-colors" href="#galeria">Galeria</a>
<a className="hover:text-[#1B4332] transition-colors" href="#cennik">Cennik</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-wide font-medium rounded-full border border-[#C9A84C] text-[#C9A84C] hover:bg-[#1B4332] hover:border-[#1B4332] hover:text-white transition-all duration-300" href="#kontakt">
                Umów wizytę
            </a>
<button className="lg:hidden text-[#1A1A1A]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-[100svh] flex items-center justify-center bg-[#1B4332] overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-fixed opacity-10 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-transparent to-transparent"></div>
<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-20">

<div className="perspective-wrapper mb-12">
<div className="logo-3d font-serif-custom text-8xl md:text-[160px] leading-none tracking-tighter text-[#C9A84C]">
                    ED
                </div>
</div>
<h1 className="font-serif-custom text-5xl md:text-7xl lg:text-8xl tracking-tighter text-[#FAFAF8] mb-6 reveal-on-scroll delay-100 font-light">
                Twój uśmiech.<br/><span className="text-[#C9A84C] italic">Nasza misja.</span>
</h1>
<p className="text-[#FAFAF8]/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 reveal-on-scroll delay-200">
                Poczuj różnicę w opiece stomatologicznej klasy premium. Łączymy szwajcarską precyzję z bezkompromisowym komfortem.
            </p>
<div className="reveal-on-scroll delay-300">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-wide font-medium rounded-full border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#2D6A4F] hover:border-[#2D6A4F] hover:text-white transition-all duration-500 group" href="#kontakt">
                    Umów wizytę
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-[#FAFAF8]" id="misja">
<div className="max-w-7xl mx-auto px-6 md:px-12">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
<div className="order-2 lg:order-1 relative aspect-[4/5] rounded-2xl overflow-hidden reveal-on-scroll">
<img alt="Nowoczesny gabinet stomatologiczny" className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-[#1A1A1A]/10 rounded-2xl pointer-events-none"></div>
</div>
<div className="order-1 lg:order-2 reveal-on-scroll delay-100">
<div className="w-12 h-[1px] bg-[#C9A84C] mb-8"></div>
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight text-[#1A1A1A] mb-8 font-medium">
                        Stomatologia zorientowana na perfekcję
                    </h2>
<div className="space-y-6 text-[#1A1A1A]/70 font-light text-base md:text-lg leading-relaxed">
<p>W Elite Dental wierzymy, że zdrowy uśmiech to fundament pewności siebie. Nasza klinika została zaprojektowana tak, aby przełamać tradycyjne wyobrażenie o wizycie u dentysty.</p>
<p>Łączymy najnowocześniejsze technologie, interdyscyplinarne podejście naszego zespołu oraz atmosferę niczym w butikowym hotelu, aby zapewnić Ci spokój i najwyższą jakość leczenia.</p>
</div>
</div>
</div>

<div className="text-center mb-16 reveal-on-scroll">
<h3 className="font-serif-custom text-3xl md:text-4xl tracking-tight text-[#1A1A1A] font-medium">Co nas wyróżnia</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-[#1A1A1A]/5 hover:border-[#C9A84C]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 rounded-full bg-[#FAFAF8] flex items-center justify-center mb-6 text-[#C9A84C] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-lg tracking-tight mb-3">Holistyczne podejście</h4>
<p className="text-sm text-[#1A1A1A]/60 font-light leading-relaxed">Traktujemy zdrowie jamy ustnej jako integralną część zdrowia całego organizmu.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-[#1A1A1A]/5 hover:border-[#C9A84C]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-full bg-[#FAFAF8] flex items-center justify-center mb-6 text-[#C9A84C] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
<iconify-icon icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-lg tracking-tight mb-3">Ekspercki zespół</h4>
<p className="text-sm text-[#1A1A1A]/60 font-light leading-relaxed">Specjaliści z wieloletnim doświadczeniem, nieustannie podnoszący swoje kwalifikacje.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-[#1A1A1A]/5 hover:border-[#C9A84C]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 reveal-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-[#FAFAF8] flex items-center justify-center mb-6 text-[#C9A84C] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-lg tracking-tight mb-3">Cyfrowa precyzja</h4>
<p className="text-sm text-[#1A1A1A]/60 font-light leading-relaxed">Wykorzystujemy skanery wewnątrzustne i druk 3D dla najwyższej dokładności.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-[#1A1A1A]/5 hover:border-[#C9A84C]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 reveal-on-scroll delay-300">
<div className="w-12 h-12 rounded-full bg-[#FAFAF8] flex items-center justify-center mb-6 text-[#C9A84C] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
<iconify-icon icon="solar:sofa-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-lg tracking-tight mb-3">Bezstresowa atmosfera</h4>
<p className="text-sm text-[#1A1A1A]/60 font-light leading-relaxed">Wnętrza zaprojektowane z myślą o głębokim relaksie przed i w trakcie wizyty.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="zespol">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<div className="w-12 h-[1px] bg-[#C9A84C] mb-6"></div>
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight text-[#1A1A1A] font-medium">Poznaj naszych ekspertów</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#1B4332] hover:text-[#C9A84C] transition-colors mt-6 md:mt-0" href="#">
                    Więcej o zespole
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="group relative overflow-hidden rounded-2xl bg-[#FAFAF8] reveal-on-scroll">
<div className="aspect-square p-8 pb-0 flex items-end justify-center">
<div className="w-48 h-48 rounded-full border-2 border-[#C9A84C]/30 p-2 group-hover:border-[#1B4332] transition-colors duration-500 relative z-10 bg-white">
<img alt="Dr Anna Kowalska" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="p-8 text-center transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
<h3 className="font-serif-custom text-2xl tracking-tight font-medium mb-1">Dr Anna Kowalska</h3>
<p className="text-[#C9A84C] text-xs uppercase tracking-wide font-medium mb-4">Protetyka &amp; Estetyka</p>
<p className="text-sm text-[#1A1A1A]/60 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">Specjalizuje się w zaawansowanych rekonstrukcjach protetycznych i cyfrowym projektowaniu uśmiechu.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#FAFAF8] reveal-on-scroll delay-100">
<div className="aspect-square p-8 pb-0 flex items-end justify-center">
<div className="w-48 h-48 rounded-full border-2 border-[#C9A84C]/30 p-2 group-hover:border-[#1B4332] transition-colors duration-500 relative z-10 bg-white">
<img alt="Dr Jan Nowak" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="p-8 text-center transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
<h3 className="font-serif-custom text-2xl tracking-tight font-medium mb-1">Dr Jan Nowak</h3>
<p className="text-[#C9A84C] text-xs uppercase tracking-wide font-medium mb-4">Chirurgia &amp; Implantologia</p>
<p className="text-sm text-[#1A1A1A]/60 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">Ekspert w dziedzinie implantologii mikroinwazyjnej oraz regeneracji tkanek.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#FAFAF8] reveal-on-scroll delay-200">
<div className="aspect-square p-8 pb-0 flex items-end justify-center">
<div className="w-48 h-48 rounded-full border-2 border-[#C9A84C]/30 p-2 group-hover:border-[#1B4332] transition-colors duration-500 relative z-10 bg-white">
<img alt="Dr Maria Wiśniewska" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="p-8 text-center transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
<h3 className="font-serif-custom text-2xl tracking-tight font-medium mb-1">Dr Maria Wiśniewska</h3>
<p className="text-[#C9A84C] text-xs uppercase tracking-wide font-medium mb-4">Endodoncja Mikroskopowa</p>
<p className="text-sm text-[#1A1A1A]/60 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">Ratuje zęby uznane za beznadziejne, pracując wyłącznie w powiększeniu mikroskopowym.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FAFAF8] border-t border-[#1A1A1A]/5" id="uslugi">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-20 reveal-on-scroll">
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight text-[#1A1A1A] font-medium mb-4">Kompleksowa Opieka</h2>
<p className="text-[#1A1A1A]/60 font-light max-w-2xl mx-auto text-base">Oferujemy pełen zakres nowoczesnej stomatologii w jednym, prestiżowym miejscu.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<a className="group block border-b border-[#1A1A1A]/10 pb-8 hover:border-[#C9A84C] transition-colors duration-300 reveal-on-scroll" href="#">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-[#1B4332] group-hover:text-[#C9A84C] transition-colors" icon="solar:tooth-linear" width="32"></iconify-icon>
<iconify-icon className="text-[#1A1A1A]/30 group-hover:text-[#C9A84C] transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif-custom text-2xl tracking-tight font-medium mb-2 group-hover:text-[#1B4332] transition-colors">Stomatologia Estetyczna</h3>
<p className="text-sm text-[#1A1A1A]/60 font-light">Licówki porcelanowe, wybielanie, bonding. Cyfrowe projektowanie nowego, harmonijnego uśmiechu.</p>
</a>

<a className="group block border-b border-[#1A1A1A]/10 pb-8 hover:border-[#C9A84C] transition-colors duration-300 reveal-on-scroll delay-100" href="#">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-[#1B4332] group-hover:text-[#C9A84C] transition-colors" icon="solar:bone-linear" width="32"></iconify-icon>
<iconify-icon className="text-[#1A1A1A]/30 group-hover:text-[#C9A84C] transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif-custom text-2xl tracking-tight font-medium mb-2 group-hover:text-[#1B4332] transition-colors">Implantologia</h3>
<p className="text-sm text-[#1A1A1A]/60 font-light">Najwyższej klasy implanty szwajcarskie. Trwałe uzupełnianie braków zębowych z gwarancją.</p>
</a>

<a className="group block border-b border-[#1A1A1A]/10 pb-8 hover:border-[#C9A84C] transition-colors duration-300 reveal-on-scroll delay-200" href="#">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-[#1B4332] group-hover:text-[#C9A84C] transition-colors" icon="solar:health-linear" width="32"></iconify-icon>
<iconify-icon className="text-[#1A1A1A]/30 group-hover:text-[#C9A84C] transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif-custom text-2xl tracking-tight font-medium mb-2 group-hover:text-[#1B4332] transition-colors">Protetyka Cyfrowa</h3>
<p className="text-sm text-[#1A1A1A]/60 font-light">Korony i mosty pełnoceramiczne wykonywane na podstawie skanów wewnątrzustnych bez wycisków.</p>
</a>

<a className="group block border-b border-[#1A1A1A]/10 pb-8 hover:border-[#C9A84C] transition-colors duration-300 reveal-on-scroll" href="#">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-[#1B4332] group-hover:text-[#C9A84C] transition-colors" icon="solar:magnifer-linear" width="32"></iconify-icon>
<iconify-icon className="text-[#1A1A1A]/30 group-hover:text-[#C9A84C] transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif-custom text-2xl tracking-tight font-medium mb-2 group-hover:text-[#1B4332] transition-colors">Endodoncja Mikroskopowa</h3>
<p className="text-sm text-[#1A1A1A]/60 font-light">Precyzyjne leczenie kanałowe z wykorzystaniem zaawansowanych mikroskopów zabiegowych.</p>
</a>

<a className="group block border-b border-[#1A1A1A]/10 pb-8 hover:border-[#C9A84C] transition-colors duration-300 reveal-on-scroll delay-100" href="#">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-[#1B4332] group-hover:text-[#C9A84C] transition-colors" icon="solar:scissor-linear" width="32"></iconify-icon>
<iconify-icon className="text-[#1A1A1A]/30 group-hover:text-[#C9A84C] transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif-custom text-2xl tracking-tight font-medium mb-2 group-hover:text-[#1B4332] transition-colors">Chirurgia Stomatologiczna</h3>
<p className="text-sm text-[#1A1A1A]/60 font-light">Bezbolesne usuwanie ósemek, plastyka dziąseł i zabiegi mikrochirurgiczne w znieczuleniu miejscowym.</p>
</a>

<a className="group block border-b border-[#1A1A1A]/10 pb-8 hover:border-[#C9A84C] transition-colors duration-300 reveal-on-scroll delay-200" href="#">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-[#1B4332] group-hover:text-[#C9A84C] transition-colors" icon="solar:shield-star-linear" width="32"></iconify-icon>
<iconify-icon className="text-[#1A1A1A]/30 group-hover:text-[#C9A84C] transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif-custom text-2xl tracking-tight font-medium mb-2 group-hover:text-[#1B4332] transition-colors">Profilaktyka i Higienizacja</h3>
<p className="text-sm text-[#1A1A1A]/60 font-light">Skaling, piaskowanie i fluoryzacja wykonywane według protokołu Guided Biofilm Therapy.</p>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#1B4332] text-[#FAFAF8] relative overflow-hidden" id="rtg">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2D6A4F] to-transparent opacity-50 pointer-events-none"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C9A84C] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<p className="text-[#C9A84C] text-xs uppercase tracking-wide font-medium mb-4">Centrum Diagnostyki</p>
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight font-medium mb-6">Pracownia Tomografii 3D &amp; RTG</h2>
<p className="text-[#FAFAF8]/70 font-light text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                        Posiadamy własną, w pełni wyposażoną pracownię radiologiczną. Wykonujemy badania najwyższej rozdzielczości z minimalną dawką promieniowania, dostępne również dla pacjentów zewnętrznych gabinetów.
                    </p>
<ul className="space-y-4 mb-12 text-sm font-light text-[#FAFAF8]/80">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon>
                            Tomografia stożkowa CBCT 3D
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon>
                            Pantomogram cyfrowy
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon>
                            Cefalometria
                        </li>
</ul>
</div>

<div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 reveal-on-scroll delay-200 relative">

<div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#C9A84C] text-[#1A1A1A] text-xs font-medium uppercase tracking-wider py-1 px-3 rounded-full">
                        Najczęściej wybierane
                    </div>
<h3 className="font-serif-custom text-2xl font-medium mb-6 border-b border-white/10 pb-4">Cennik Badań</h3>
<div className="space-y-4">
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="font-light text-sm">Zdjęcie punktowe (RVG)</span>
<span className="font-medium text-[#C9A84C]">50 PLN</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="font-light text-sm">Pantomogram cyfrowy</span>
<span className="font-medium text-[#C9A84C]">120 PLN</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5 bg-white/5 -mx-4 px-4 rounded-lg">
<span className="font-medium text-sm text-white">Tomografia CBCT (szczęka + żuchwa)</span>
<span className="font-medium text-[#C9A84C]">350 PLN</span>
</div>
<div className="flex justify-between items-center py-3">
<span className="font-light text-sm">Tomografia CBCT (wycinek / endo)</span>
<span className="font-medium text-[#C9A84C]">150 PLN</span>
</div>
</div>
<button className="w-full mt-8 py-3 px-4 border border-white/20 rounded-full text-xs uppercase tracking-wide font-medium hover:bg-white hover:text-[#1B4332] transition-colors duration-300">
                        Umów badanie
                    </button>
</div>
</div>
</div>
</section>

<div className="fixed bottom-6 right-6 z-50">
<a className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1B4332] border border-[#C9A84C] text-[#C9A84C] shadow-lg hover:bg-[#C9A84C] hover:text-[#1A1A1A] transition-all duration-300 group" href="#kontakt">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:calendar-add-linear" width="24"></iconify-icon>
</a>
</div>

<footer className="bg-[#1A1A1A] text-[#FAFAF8] py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="font-serif-custom text-3xl tracking-tighter text-[#FAFAF8] flex items-center gap-2 mb-6" href="#">
<span className="text-[#C9A84C]">E</span>D
                    </a>
<p className="text-[#FAFAF8]/50 text-xs leading-relaxed font-light mb-6">
                        Klinika stomatologii premium, gdzie innowacja spotyka się z empatią, a zdrowie łączy się z perfekcyjną estetyką.
                    </p>
<div className="flex gap-4 text-[#FAFAF8]/50">
<a className="hover:text-[#C9A84C] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-[#C9A84C] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-[#C9A84C] transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium tracking-tight mb-6 text-sm">Nawigacja</h4>
<ul className="space-y-3 text-xs font-light text-[#FAFAF8]/60">
<li><a className="hover:text-[#C9A84C] transition-colors" href="#misja">Misja &amp; Co nas wyróżnia</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#zespol">Nasz Zespół</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#uslugi">Zakres Usług</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#galeria">Galeria Uśmiechów</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#blog">Blog Edukacyjny</a></li>
</ul>
</div>
<div>
<h4 className="font-medium tracking-tight mb-6 text-sm">Informacje</h4>
<ul className="space-y-3 text-xs font-light text-[#FAFAF8]/60">
<li><a className="hover:text-[#C9A84C] transition-colors" href="#rtg">Pracownia RTG</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#technologie">Sprzęt i Technologie</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#wspolpraca">Współpraca (B2B)</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#cennik">Cennik Usług</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#">Polityka Prywatności</a></li>
</ul>
</div>
<div>
<h4 className="font-medium tracking-tight mb-6 text-sm">Kontakt</h4>
<ul className="space-y-3 text-xs font-light text-[#FAFAF8]/60 mb-6">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-[#C9A84C]" icon="solar:map-point-linear"></iconify-icon>
                            ul. Złota 44, 00-120 Warszawa
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C9A84C]" icon="solar:phone-linear"></iconify-icon>
                            +48 22 123 45 67
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C9A84C]" icon="solar:letter-linear"></iconify-icon>
                            kontakt@elitedental.pl
                        </li>
</ul>
<h4 className="font-medium tracking-tight mb-3 text-sm">Godziny otwarcia</h4>
<ul className="space-y-1 text-xs font-light text-[#FAFAF8]/60">
<li className="flex justify-between"><span>Pon - Pt:</span> <span>08:00 - 20:00</span></li>
<li className="flex justify-between"><span>Sobota:</span> <span>09:00 - 14:00</span></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-[#FAFAF8]/40">
<p>© 2023 Elite Dental. Wszelkie prawa zastrzeżone.</p>
<p>Projekt inspirowany najwyższymi standardami estetyki.</p>
</div>
</div>
</footer>



    </>
  );
}
