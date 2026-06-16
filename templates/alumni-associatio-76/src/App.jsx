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
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                      const target = +counter.getAttribute('data-target');
                      if (!target) return;
                      const duration = 2000;
                      const increment = target / (duration / 16);
                      let current = 0;
                      const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                          counter.innerText = Math.ceil(current).toLocaleString('it-IT');
                          requestAnimationFrame(updateCounter);
                        } else {
                          counter.innerText = target.toLocaleString('it-IT');
                        }
                      };
                      updateCounter();
                      counter.classList.remove('counter');
                    });
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
              document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

              window.addEventListener('scroll', () => {
                  const scrolled = window.scrollY;
                  const blob = document.querySelector('.floating');
                  if(blob) blob.style.transform = `translateY(${scrolled * 0.1}px)`;
              });
            });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="group flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-[#003DA5] to-[#00A3E0] shadow-lg shadow-blue-900/10 rounded-full"></div>
<span className="text-[#003DA5] font-semibold tracking-tighter text-lg group-hover:opacity-80 transition-opacity">
            P&amp;G ALUMNI
            <span className="font-light text-[#00A3E0]">ITALIA</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-[#003DA5] transition-colors" href="#pilastri">
            Chi Siamo
          </a>
<a className="text-sm font-medium hover:text-[#003DA5] transition-colors" href="#eventi">
            Eventi
          </a>
<a className="text-sm font-medium hover:text-[#003DA5] transition-colors" href="#news">
            Notizie
          </a>
<a className="text-sm font-medium hover:text-[#003DA5] transition-colors" href="#">
            Login
          </a>
<a className="px-6 py-2.5 bg-[#003DA5] text-white text-xs font-medium tracking-wide rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-[#002a75] hover:scale-105 hover:shadow-xl active:scale-95" href="#">
            DIVENTA SOCIO
          </a>
</div>

<button className="md:hidden text-[#003DA5]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-b from-[#00A3E0]/5 to-transparent -z-10 blur-3xl rounded-bl-[10rem] floating opacity-80"></div>
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl fade-in-up relative z-10">
<span className="inline-block py-1 px-3 border border-[#00A3E0]/30 text-[#003DA5] text-xs font-medium tracking-wide mb-6 bg-white rounded-full shadow-sm animate-on-scroll">
              NETWORK ESCLUSIVO PER LEADER
            </span>
<h1 className="text-5xl md:text-7xl font-light text-[#003DA5] tracking-tight leading-[1.1] mb-8 animate-on-scroll stagger-1">
              L'eccellenza non è solo un passato.
              <br/>
<span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#003DA5] to-[#00A3E0]">
                È un'eredità condivisa.
              </span>
</h1>
<p className="text-lg md:text-xl font-light text-slate-500 max-w-xl leading-relaxed mb-10 delay-100 fade-in-up animate-on-scroll stagger-2">
              Benvenuti in P&amp;G Alumni Italia. Il punto d'incontro per chi ha
              guidato il cambiamento e continua a plasmare il futuro del
              business. Una rete prestigiosa dove la leadership trova casa.
            </p>
<div className="flex flex-col sm:flex-row gap-4 delay-200 fade-in-up animate-on-scroll stagger-3">
<a className="group px-8 py-4 bg-[#003DA5] text-white text-sm font-medium tracking-wide rounded-full shadow-lg shadow-[#003DA5]/20 flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 hover:bg-[#002a75] hover:shadow-xl" href="#">
                DIVENTA SOCIO
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="hidden lg:block relative animate-on-scroll stagger-2 perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-[#003DA5] to-[#00A3E0] rounded-[2.5rem] transform rotate-3 opacity-10 blur-2xl"></div>
<img alt="Alumni P&amp;G Network" className="relative rounded-[2.5rem] shadow-2xl shadow-[#003DA5]/20 object-cover h-[600px] w-full transform -rotate-1 hover:rotate-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left animate-on-scroll">
<div className="group">
<p className="text-4xl md:text-5xl font-light text-[#003DA5] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-500">
<span className="counter" data-target="1200">0</span>
              +
            </p>
<p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Soci Attivi
            </p>
</div>
<div className="group">
<p className="text-4xl md:text-5xl font-light text-[#003DA5] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-500">
<span className="counter" data-target="30">0</span>
              +
            </p>
<p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Anni di Storia
            </p>
</div>
<div className="group">
<p className="text-4xl md:text-5xl font-light text-[#003DA5] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-500">
<span className="counter" data-target="250">0</span>
              +
            </p>
<p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Aziende Rappresentate
            </p>
</div>
<div className="group">
<p className="text-4xl md:text-5xl font-light text-[#003DA5] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-500">
<span className="counter" data-target="50">0</span>
              +
            </p>
<p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Eventi Annuali
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="eventi">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-[#003DA5] font-semibold tracking-widest text-xs uppercase mb-3">
              Agenda
            </h2>
<h3 className="text-3xl md:text-4xl font-light text-[#003DA5] tracking-tight animate-on-scroll">
              Prossimi Appuntamenti
            </h3>
</div>
<a className="text-[#00A3E0] hover:text-[#003DA5] transition-colors text-sm font-medium flex items-center gap-1" href="#">
            Visualizza calendario completo
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group bg-white hover:border-[#00A3E0]/30 p-8 transition-all duration-300 cursor-pointer flex flex-col h-full rounded-[2rem] border border-slate-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover-lift animate-on-scroll stagger-1">
<div className="h-56 -mx-8 -mt-8 mb-6 overflow-hidden relative rounded-t-[2rem]">
<img alt="Gala" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-2 mb-6">
<span className="px-3 py-1 bg-slate-50 text-[#003DA5] text-xs font-medium rounded-full">
                Networking
              </span>
<span className="text-slate-400 text-xs">Milano</span>
</div>
<h4 className="text-xl font-medium text-[#003DA5] mb-3 group-hover:text-[#00A3E0] transition-colors">
              Cena di Gala d'Autunno
            </h4>
<p className="text-slate-500 text-sm font-light mb-8 flex-grow">
              Un'esclusiva serata di networking presso Palazzo Parigi per
              celebrare i nuovi soci dell'anno.
            </p>
<div className="mt-auto border-t border-slate-50 pt-6 flex justify-between items-center">
<div className="flex items-center gap-2 text-slate-500">
<iconify-icon className="text-[#00A3E0]" icon="solar:calendar-linear"></iconify-icon>
<span className="text-xs font-medium">15 Ottobre 2023</span>
</div>
<span className="w-8 h-8 rounded-full bg-[#003DA5]/5 flex items-center justify-center text-[#003DA5] group-hover:bg-[#003DA5] group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
</article>

<article className="group bg-white hover:border-[#00A3E0]/30 p-8 transition-all duration-300 cursor-pointer flex flex-col h-full rounded-[2rem] border border-slate-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover-lift animate-on-scroll stagger-2">
<div className="h-56 -mx-8 -mt-8 mb-6 overflow-hidden relative rounded-t-[2rem]">
<img alt="Webinar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-2 mb-6">
<span className="px-3 py-1 bg-slate-50 text-[#003DA5] text-xs font-medium rounded-full">
                Webinar
              </span>
<span className="text-slate-400 text-xs">Online</span>
</div>
<h4 className="text-xl font-medium text-[#003DA5] mb-3 group-hover:text-[#00A3E0] transition-colors">
              Digital Leadership nel 2024
            </h4>
<p className="text-slate-500 text-sm font-light mb-8 flex-grow">
              Tavola rotonda virtuale con i CEO delle principali tech company
              italiane, moderata da Alumni.
            </p>
<div className="mt-auto border-t border-slate-50 pt-6 flex justify-between items-center">
<div className="flex items-center gap-2 text-slate-500">
<iconify-icon className="text-[#00A3E0]" icon="solar:calendar-linear"></iconify-icon>
<span className="text-xs font-medium">02 Novembre 2023</span>
</div>
<span className="w-8 h-8 rounded-full bg-[#003DA5]/5 flex items-center justify-center text-[#003DA5] group-hover:bg-[#003DA5] group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
</article>

<article className="group bg-white hover:border-[#00A3E0]/30 p-8 transition-all duration-300 cursor-pointer flex flex-col h-full rounded-[2rem] border border-slate-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover-lift animate-on-scroll stagger-3">
<div className="h-56 -mx-8 -mt-8 mb-6 overflow-hidden relative rounded-t-[2rem]">
<img alt="Mentoring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-2 mb-6">
<span className="px-3 py-1 bg-slate-50 text-[#003DA5] text-xs font-medium rounded-full">
                Mentoring
              </span>
<span className="text-slate-400 text-xs">Roma</span>
</div>
<h4 className="text-xl font-medium text-[#003DA5] mb-3 group-hover:text-[#00A3E0] transition-colors">
              Masterclass: Give Back
            </h4>
<p className="text-slate-500 text-sm font-light mb-8 flex-grow">
              Workshop dedicato al programma di mentoring per supportare le
              nuove generazioni di startupper.
            </p>
<div className="mt-auto border-t border-slate-50 pt-6 flex justify-between items-center">
<div className="flex items-center gap-2 text-slate-500">
<iconify-icon className="text-[#00A3E0]" icon="solar:calendar-linear"></iconify-icon>
<span className="text-xs font-medium">12 Novembre 2023</span>
</div>
<span className="w-8 h-8 rounded-full bg-[#003DA5]/5 flex items-center justify-center text-[#003DA5] group-hover:bg-[#003DA5] group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-[#003DA5] relative overflow-hidden" id="pilastri">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#00A3E0] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#003DA5] rounded-full mix-blend-overlay filter blur-[80px] opacity-30"></div>
</div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#00A3E0 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 text-center">
<h2 className="text-[#00A3E0] font-medium tracking-widest text-xs uppercase mb-4">
            La Nostra Missione
          </h2>
<h3 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            Tre pilastri. Un unico obiettivo.
          </h3>
</div>
<div className="grid md:grid-cols-3 gap-x-8 gap-y-16">

<div className="relative group animate-on-scroll stagger-1">
<div className="w-16 h-16 bg-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-[#003DA5] transition-colors duration-500 rounded-full">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-light text-white mb-4">Engagement</h4>
<p className="text-blue-100/80 font-light leading-relaxed mb-6">
              Creiamo connessioni di valore attraverso eventi esclusivi e
              piattaforme digitali. Una rete viva che non smette mai di
              dialogare.
            </p>
<div className="border-t border-white/20 pt-4">
<span className="block text-2xl font-medium text-white mb-1">
                50+
              </span>
<span className="text-xs text-[#00A3E0] uppercase tracking-wide">
                Eventi di networking all'anno
              </span>
</div>
</div>

<div className="relative group animate-on-scroll stagger-2">
<div className="w-16 h-16 bg-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-[#003DA5] transition-colors duration-500 rounded-full">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-light text-white mb-4">Enrichment</h4>
<p className="text-blue-100/80 font-light leading-relaxed mb-6">
              Formazione continua e contenuti di alto profilo. Manteniamo i
              nostri soci all'avanguardia sulle tendenze globali.
            </p>
<div className="border-t border-white/20 pt-4">
<span className="block text-2xl font-medium text-white mb-1">
                100+
              </span>
<span className="text-xs text-[#00A3E0] uppercase tracking-wide">
                Articoli e pubblicazioni
              </span>
</div>
</div>

<div className="relative group animate-on-scroll stagger-3">
<div className="w-16 h-16 bg-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-[#003DA5] transition-colors duration-500 rounded-full">
<iconify-icon icon="solar:hand-heart-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-light text-white mb-4">Give Back</h4>
<p className="text-blue-100/80 font-light leading-relaxed mb-6">
              Restituiamo alla comunità attraverso programmi di mentoring per
              studenti e supporto a iniziative no-profit.
            </p>
<div className="border-t border-white/20 pt-4">
<span className="block text-2xl font-medium text-white mb-1">
                3.000+
              </span>
<span className="text-xs text-[#00A3E0] uppercase tracking-wide">
                Ore di mentoring erogate
              </span>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#003DA5] text-sm font-medium tracking-wide rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-blue-50 hover:scale-105 hover:shadow-xl" href="#">
            UNISCITI A NOI
          </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
<div className="max-w-7xl mx-auto">
<h2 className="text-[#003DA5] font-semibold tracking-widest text-xs uppercase mb-16 text-center">
          La Voce dei Soci
        </h2>
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">

<div className="flex flex-col gap-6">
<iconify-icon className="text-[#00A3E0]/40" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<blockquote className="text-xl md:text-2xl font-light text-[#003DA5] leading-relaxed animate-on-scroll">
              "In P&amp;G Alumni ho ritrovato non solo colleghi, ma quella
              mentalità distintiva che ci unisce. È l'unico network dove la
              fiducia è implicita e il valore è immediato."
            </blockquote>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">

<div className="w-full h-full bg-[#003DA5] text-white flex items-center justify-center font-medium">
                  LS
                </div>
</div>
<div>
<cite className="not-italic font-semibold text-slate-800 block">
                  Laura Sarti
                </cite>
<span className="text-xs text-slate-500 uppercase tracking-wide">
                  CEO, GreenFuture Italia
                </span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<iconify-icon className="text-[#00A3E0]/40" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<blockquote className="text-xl md:text-2xl font-light text-[#003DA5] leading-relaxed">
              "Il programma di mentoring è un'opportunità straordinaria di 'Give
              Back'. Trasmettere l'esperienza maturata alle nuove generazioni è
              il vero successo."
            </blockquote>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
<div className="w-full h-full bg-[#00A3E0] text-white flex items-center justify-center font-medium">
                  MV
                </div>
</div>
<div>
<cite className="not-italic font-semibold text-slate-800 block">
                  Marco Valli
                </cite>
<span className="text-xs text-slate-500 uppercase tracking-wide">
                  Direttore Commerciale, FoodCo
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-white border border-slate-100 shadow-2xl shadow-[#003DA5]/10 overflow-hidden relative rounded-[3rem] shadow-blue-900/10 animate-on-scroll">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#00A3E0]/10 rounded-bl-full -mr-16 -mt-16"></div>
<div className="relative px-8 py-16 md:px-20 md:py-20 text-center">
<h2 className="text-4xl md:text-5xl font-light text-[#003DA5] tracking-tight mb-6">
            Il tuo posto è qui.
          </h2>
<p className="text-lg text-slate-500 font-light mb-10 max-w-2xl mx-auto">
            Entra a far parte dell'élite professionale che condivide il tuo
            stesso DNA. Accesso a eventi esclusivi, directory soci e opportunità
            di crescita continua.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-10 py-4 bg-[#003DA5] text-white text-sm font-medium tracking-wide rounded-full shadow-lg shadow-[#003DA5]/20 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-[#002a75] hover:scale-105 hover:shadow-xl" href="#">
              ISCRIVITI ORA
            </a>
<a className="w-full sm:w-auto text-[#003DA5] hover:text-[#00A3E0] font-medium text-sm px-6 py-4 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-slate-50 hover:shadow-sm" href="#">
              Contatta la segreteria
            </a>
</div>
<p className="mt-8 text-xs text-slate-400">
            L'iscrizione è riservata esclusivamente a ex dipendenti Procter
            &amp; Gamble.
          </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-100 bg-slate-50/30" id="news">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-light text-[#003DA5] tracking-tight">
            Ultime Notizie
          </h2>
<a className="text-xs font-medium text-[#00A3E0] hover:text-[#003DA5] uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-full px-4 py-2 border border-transparent hover:border-[#00A3E0]/20 hover:bg-[#00A3E0]/5" href="#">
            Tutte le news
          </a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<a className="group block animate-on-scroll stagger-1" href="#">
<div className="mb-4 overflow-hidden relative shadow-lg bg-slate-100 rounded-3xl">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#003DA5]/20 mix-blend-multiply"></div>
</div>
<time className="text-xs text-[#00A3E0] font-medium mb-2 block">
              28 Settembre 2023
            </time>
<h3 className="text-lg font-medium text-[#003DA5] group-hover:text-[#00A3E0] transition-colors mb-2">
              Nuova partnership strategica con SDA Bocconi
            </h3>
<p className="text-slate-500 text-sm font-light line-clamp-2">
              Siglato l'accordo per percorsi di formazione executive riservati
              ai soci Alumni a condizioni agevolate.
            </p>
</a>

<a className="group block animate-on-scroll stagger-2 rounded-full" href="#">
<div className="aspect-video bg-white mb-4 overflow-hidden relative border border-slate-100 rounded-3xl aspect-[4/3] shadow-xl">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#003DA5]/20 mix-blend-multiply"></div>
</div>
<time className="text-xs text-[#00A3E0] font-medium mb-2 block">
              15 Settembre 2023
            </time>
<h3 className="text-lg font-medium text-[#003DA5] group-hover:text-[#00A3E0] transition-colors mb-2">
              Intervista al Presidente: "Il valore del network oggi"
            </h3>
<p className="text-slate-500 text-sm font-light line-clamp-2">
              Riflessioni sul ruolo dell'associazione nel panorama economico
              italiano e le sfide per il prossimo triennio.
            </p>
</a>

<a className="group block animate-on-scroll stagger-3" href="#">
<div className="aspect-video bg-white mb-4 overflow-hidden relative border border-slate-100 rounded-3xl">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#003DA5]/20 mix-blend-multiply"></div>
</div>
<time className="text-xs text-[#00A3E0] font-medium mb-2 block">
              01 Settembre 2023
            </time>
<h3 className="text-lg font-medium text-[#003DA5] group-hover:text-[#00A3E0] transition-colors mb-2">
              Apertura candidature Alumni Awards 2024
            </h3>
<p className="text-slate-500 text-sm font-light line-clamp-2">
              Al via le nomination per premiare i soci che si sono distinti per
              innovazione e impatto sociale.
            </p>
</a>
</div>
</div>
</section>

<footer className="bg-[#003DA5] text-white pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="w-8 h-8 bg-gradient-to-br from-white to-[#00A3E0] mb-6 rounded-full"></div>
<p className="text-blue-100/70 text-sm font-light leading-relaxed">
              L'associazione ufficiale degli Alumni P&amp;G in Italia.
              Connettere leader, ispirare il futuro.
            </p>
</div>
<div>
<h4 className="font-semibold text-sm mb-6 tracking-wide text-[#00A3E0]">
              Associazione
            </h4>
<ul className="space-y-4 text-sm font-light text-blue-100/80">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Chi Siamo
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Board Direttivo
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Statuto
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Contatti
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-6 tracking-wide text-[#00A3E0]">
              Attività
            </h4>
<ul className="space-y-4 text-sm font-light text-blue-100/80">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Eventi
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Mentoring
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">News</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Alumni Awards
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-6 tracking-wide text-[#00A3E0]">
              Soci
            </h4>
<ul className="space-y-4 text-sm font-light text-blue-100/80">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Diventa Socio
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Area Riservata
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Rinnova Quota
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/50 font-light">
<p>© 2023 P&amp;G Alumni Italia. Tutti i diritti riservati.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Cookie Policy
            </a>
<a className="hover:text-white transition-colors" href="#">Credits</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
