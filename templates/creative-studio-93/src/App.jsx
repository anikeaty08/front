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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


        // --- Language Toggle System ---
        document.addEventListener('DOMContentLoaded', () => {
            const elementsToTranslate = document.querySelectorAll('[data-en]');
            
            // Save initial Slovak texts directly from DOM
            elementsToTranslate.forEach(el => {
                if (!el.hasAttribute('data-sk')) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.setAttribute('data-sk', el.getAttribute('placeholder') || '');
                    } else {
                        el.setAttribute('data-sk', el.innerHTML);
                    }
                }
            });

            window.setLanguage = function(lang) {
                // Update Texts
                elementsToTranslate.forEach(el => {
                    const text = el.getAttribute(`data-${lang}`);
                    if (text !== null) {
                        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                            el.setAttribute('placeholder', text);
                        } else {
                            el.innerHTML = text;
                        }
                    }
                });
                
                // Update UI Switches
                document.querySelectorAll('.lang-sk').forEach(btn => {
                    if(lang === 'sk') { btn.classList.add('text-white'); btn.classList.remove('text-zinc-600'); }
                    else { btn.classList.remove('text-white'); btn.classList.add('text-zinc-600'); }
                });
                document.querySelectorAll('.lang-en').forEach(btn => {
                    if(lang === 'en') { btn.classList.add('text-white'); btn.classList.remove('text-zinc-600'); }
                    else { btn.classList.remove('text-white'); btn.classList.add('text-zinc-600'); }
                });
                
                // Save Preference
                localStorage.setItem('lang', lang);
                document.documentElement.lang = lang;
            }

            window.toggleLanguage = function() {
                const currentLang = localStorage.getItem('lang') || 'sk';
                setLanguage(currentLang === 'sk' ? 'en' : 'sk');
            }

            // Init language on load
            const savedLang = localStorage.getItem('lang') || 'sk';
            setLanguage(savedLang);
        });

        // Enhanced Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-base').forEach(el => {
            observer.observe(el);
        });

        // --- Premium Cursor Glow Logic ---
        const cursor = document.getElementById('cursor-glow');
        
        if (window.matchMedia("(min-width: 768px)").matches) {
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let cursorX = mouseX;
            let cursorY = mouseY;
            let isHovering = false;
            let hasMoved = false;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                if (!hasMoved) {
                    hasMoved = true;
                    cursor.style.opacity = '1';
                }
            });

            const interactiveElements = document.querySelectorAll('a, button, .interactive-target');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => isHovering = true);
                el.addEventListener('mouseleave', () => isHovering = false);
            });

            function animateCursor() {
                const dx = mouseX - cursorX;
                const dy = mouseY - cursorY;
                
                cursorX += dx * 0.1;
                cursorY += dy * 0.1;

                cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

                if (isHovering) {
                    cursor.style.background = 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(168,85,247,0.1) 20%, transparent 65%)';
                    cursor.style.width = '550px';
                    cursor.style.height = '550px';
                } else {
                    cursor.style.background = 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.05) 25%, transparent 60%)';
                    cursor.style.width = '500px';
                    cursor.style.height = '500px';
                }

                requestAnimationFrame(animateCursor);
            }

            animateCursor();
        }

        // --- Mobile Menu Logic ---
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');

        let is
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden md:block fixed pointer-events-none z-[60] w-[500px] h-[500px] rounded-full blur-[80px] opacity-0 transition-opacity duration-700 top-0 left-0 will-change-transform" id="cursor-glow" style={{background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.05) 25%, transparent 60%)'}}>
</div>

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<nav className="fixed w-full z-50 top-0 start-0 border-b backdrop-blur-xl border-white/10 bg-black/50">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 relative items-center justify-between">
<a className="flex items-center gap-2 group interactive-target md:order-1 flex-shrink-0 z-20" href="#">
<div className="flex group-hover:rotate-12 transition-transform cursor-pointer font-bold items-center justify-center w-10 h-10 text-white" role="button">
<img alt="Logo" className="transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] w-full h-full object-contain pt-1 pr-1 pb-1 pl-1 relative scale-110" src="https://www.rouby.sk/assets/RR_logo.svg?w=800&amp;q=80"/>
</div>
</a>

<div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:order-3 z-20 hidden md:block">
<button className="interactive-target shiny-cta group text-sm font-medium rounded-full pt-2 pr-5 pb-2 pl-5 shadow-lg whitespace-nowrap text-white">
<span className="group-hover:text-purple-300 transition-colors cursor-pointer" onclick="window.location.href='#kontakt'" role="button">Start Project</span>
</button>
</div>

<div className="flex items-center md:order-2 z-20">
<ul className="hidden md:flex text-sm font-medium space-x-8 text-zinc-400">
<li className=""><a className="interactive-target transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 relative hover:text-white" href="#">HOME</a>
</li>
<li className=""><a className="interactive-target transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 relative hover:text-white" data-en="SERVICES" data-sk="SLUŽBY" href="#sluzby">SLUŽBY</a>
</li>
<li className=""><a className="interactive-target transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 relative hover:text-white" data-en="PORTFOLIO" data-sk="PORTFÓLIO" href="#portfolio">PORTFÓLIO</a>
</li>
<li className=""><a className="interactive-target transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 relative hover:text-white" data-en="PROCESS" data-sk="PROCES" href="#proces">PROCES</a>
</li>
<li className=""><a className="interactive-target transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 relative hover:text-white" data-en="ABOUT" data-sk="O MNE" href="#o-mne">O MNE</a>
</li>
<li className=""><a className="interactive-target transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 relative hover:text-white" data-en="CONTACT" data-sk="KONTAKT" href="#kontakt">KONTAKT</a>
</li>
</ul>

<button aria-label="Toggle language" className="ml-4 md:ml-8 flex items-center gap-1.5 text-xs font-bold tracking-widest cursor-pointer group interactive-target" onclick="toggleLanguage()">
<span className="lang-sk transition-colors group-hover:text-purple-300 text-white">SK</span>
<span className="text-zinc-700">|</span>
<span className="lang-en transition-colors group-hover:text-purple-300 text-zinc-600">EN</span>
</button>
<button className="md:hidden flex items-center justify-center transition-colors ml-4 relative z-50 text-zinc-300 hover:text-purple-400" id="mobile-menu-btn">
<i className="w-7 h-7" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="absolute top-full left-0 w-full backdrop-blur-xl border-b border-purple-500/20 flex flex-col items-center py-8 gap-6 transition-all duration-300 opacity-0 pointer-events-none -translate-y-4 -z-10 md:hidden bg-black/95" id="mobile-menu">
<a className="text-lg font-medium transition-colors tracking-wide mobile-link text-zinc-300 hover:text-purple-400" href="#">HOME</a>
<a className="text-lg font-medium transition-colors tracking-wide mobile-link text-zinc-300 hover:text-purple-400" data-en="SERVICES" data-sk="SLUŽBY" href="#sluzby">SLUŽBY</a>
<a className="text-lg font-medium transition-colors tracking-wide mobile-link text-zinc-300 hover:text-purple-400" data-en="PORTFOLIO" data-sk="PORTFÓLIO" href="#portfolio">PORTFÓLIO</a>
<a className="text-lg font-medium transition-colors tracking-wide mobile-link text-zinc-300 hover:text-purple-400" data-en="PROCESS" data-sk="PROCES" href="#proces">PROCES</a>
<a className="text-lg font-medium transition-colors tracking-wide mobile-link text-zinc-300 hover:text-purple-400" data-en="ABOUT" data-sk="O MNE" href="#o-mne">O MNE</a>
<a className="text-lg font-medium transition-colors tracking-wide mobile-link text-zinc-300 hover:text-purple-400" data-en="CONTACT" data-sk="KONTAKT" href="#kontakt">KONTAKT</a>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden relative items-center justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px] -z-10 bg-purple-600/15">
</div>
<div className="container text-center mr-auto ml-auto pr-6 pl-6 mt-16">

<div className="inline-flex gap-2 reveal-base anim-elastic delay-100 hover:bg-purple-500/10 transition-colors cursor-default is-visible text-xs bg-purple-500/5 border-purple-500/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-[0_0_15px_rgba(168,85,247,0.15)] gap-x-2 gap-y-2 items-center text-purple-200">
<span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#a855f7]"></span>
<span data-en="Available for new projects" data-sk="K dispozícii pre nové projekty">K dispozícii pre nové projekty</span>
</div>

<h1 className="reveal-base anim-slide-up delay-200 md:text-7xl text-5xl font-semibold tracking-tight mb-6 is-visible">
<span className="text-sweep block pb-2" data-en="Surface &amp; Precision" data-sk="Povrch &amp; Precíznosť">Povrch &amp; Precíznosť</span>
</h1>

<p className="md:text-xl reveal-base anim-blur delay-300 is-visible text-lg max-w-2xl mr-auto mb-10 ml-auto text-zinc-400" data-en="Leave a mark." data-sk="
      Zanechaj stopu.">
      Zanechaj stopu.</p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal-base anim-pop delay-400 is-visible">
<a className="interactive-target shiny-cta text-xl font-semibold text-right rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg text-white" href="#kontakt">Start Project</a>
</div>
</div>
</section>

<div className="border-y overflow-hidden z-20 bg-black/20 w-full border-white/5 pt-10 pb-10 relative backdrop-blur-sm">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none">
</div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none">
</div>
<div className="flex w-fit animate-scroll hover:[animation-play-state:paused]">

<div className="flex items-center gap-16 px-8 shrink-0">
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="uppercase group-hover:text-white transition-colors text-sm font-medium tracking-widest text-gray-300" data-en="branding" data-sk="branding">branding</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="uppercase group-hover:text-white transition-colors text-sm font-medium tracking-widest text-gray-300" data-en="laser engraving" data-sk="gravírovanie laserom">gravírovanie laserom</span>
</div>
<div className="flex gap-4 group gap-x-4 gap-y-4 items-center">
<div className="group-hover:bg-purple-400 transition-colors bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] w-2 h-2 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)] from-purple-400 via-purple-600 to-purple-400">
</div>
<span className="uppercase group-hover:text-white transition-colors text-sm font-medium tracking-widest text-gray-300" data-en="vinyl cutting" data-sk="plotrovanie fólií">plotrovanie fólií</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="uppercase group-hover:text-white transition-colors text-sm font-medium tracking-widest text-gray-300" data-en="photography" data-sk="fotografovanie">fotografovanie</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="uppercase group-hover:text-white transition-colors text-sm font-medium tracking-widest text-gray-300" data-en="graphic design" data-sk="grafický dizajn">grafický dizajn</span>
</div>
</div>

<div className="flex items-center gap-16 px-8 shrink-0">
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="uppercase group-hover:text-white transition-colors text-sm font-medium tracking-widest text-gray-300" data-en="branding" data-sk="branding">branding</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="uppercase group-hover:text-white transition-colors text-sm font-medium tracking-widest text-gray-300" data-en="laser marking" data-sk="značenie laserom">značenie laserom</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="text-sm font-medium uppercase tracking-widest group-hover:text-white transition-colors text-gray-300" data-en="vinyl application" data-sk="aplikácia fólií">aplikácia fólií</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="text-sm font-medium uppercase tracking-widest group-hover:text-white transition-colors text-gray-300" data-en="photography" data-sk="fotografovanie">fotografovanie</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="text-sm font-medium uppercase tracking-widest group-hover:text-white transition-colors text-gray-300" data-en="visualizations" data-sk="vizualizácie">vizualizácie</span>
</div>
</div>

<div className="flex items-center gap-16 px-8 shrink-0">
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="text-sm font-medium uppercase tracking-widest group-hover:text-white transition-colors text-gray-300" data-en="branding" data-sk="branding">branding</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="text-sm font-medium uppercase tracking-widest group-hover:text-white transition-colors text-gray-300" data-en="laser engraving" data-sk="gravírovanie laserom">gravírovanie laserom</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="text-sm font-medium uppercase tracking-widest group-hover:text-white transition-colors text-gray-300" data-en="sign making" data-sk="rezaná grafika">rezaná grafika</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="text-sm font-medium uppercase tracking-widest group-hover:text-white transition-colors text-gray-300" data-en="photography" data-sk="fotografovanie">fotografovanie</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)]">
</div>
<span className="text-sm font-medium uppercase tracking-widest group-hover:text-white transition-colors text-gray-300" data-en="post-production" data-sk="postprodukcia">postprodukcia</span>
</div>
</div>
</div>
</div>

<section className="min-h-screen flex flex-col pt-20 pb-20 relative justify-center" id="sluzby">
<div className="container mx-auto px-6 mb-16 md:text-center reveal-base anim-slide-up w-full z-10">
<h2 className="md:text-4xl text-3xl font-semibold mb-4 tracking-tight" data-en="Services" data-sk="Služby">Služby</h2>
<p className="text-zinc-400 max-w-2xl mr-auto ml-auto" data-en="Every surface can leave a mark." data-sk="Každý povrch môže niesť značku">Každý povrch môže niesť značku</p>
</div>
<div className="container z-10 w-full mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

<div className="service-card interactive-target group relative overflow-hidden border rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] reveal-base anim-pop delay-100 aspect-[3/4] flex flex-col justify-end bg-zinc-900/50 border-white/5">
<div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500 z-10 bg-zinc-900/30"></div>
<video className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 z-0" loop="" muted="" playsinline="" src="https://www.rouby.sk/assets/video/LASER.webm"></video>
<div className="z-10 transition-opacity duration-500 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-20 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex backdrop-blur-md w-12 h-12 rounded-lg mb-6 shadow-inner items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] text-zinc-300 bg-zinc-800/80">
<svg className="w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2h4v4l-2 3-2-3z"></path>
<line stroke-dasharray="3 3" x1="12" x2="12" y1="9" y2="20"></line>
<path d="M4 20h16"></path>
<path d="M12 20l-2-3"></path>
<path d="M12 20l2-3"></path>
<path d="M12 20l-4-1"></path>
<path d="M12 20l4-1"></path>
</svg>
</div>
<h3 className="text-2xl font-medium mb-3 tracking-tight group-hover:text-purple-100 transition-colors drop-shadow-md text-white" data-en="Laser Engraving" data-sk="
          Laserové gravírovanie">
          Laserové gravírovanie</h3>
<p className="text-sm leading-relaxed group-hover:text-purple-200 transition-colors drop-shadow text-zinc-400" data-en="Precise marking and engraving on various materials with an emphasis on the smallest details and durability." data-sk="Precízne značenie a gravírovanie do rôznych materiálov s dôrazom na najmenšie detaily a trvácnosť.">
          Precízne značenie a gravírovanie do rôznych materiálov s dôrazom na najmenšie detaily a trvácnosť.
        </p>
</div>
</div>

<div className="service-card interactive-target group relative overflow-hidden border rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] reveal-base anim-pop delay-200 aspect-[3/4] flex flex-col justify-end bg-zinc-900/50 border-white/5">
<div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500 z-10 bg-zinc-900/30"></div>
<video className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 z-0" loop="" muted="" playsinline="" src="https://www.rouby.sk/assets/video/PLOTTER.webm"></video>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent z-10 opacity-90 transition-opacity duration-500">
</div>
<div className="relative z-20 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="w-12 h-12 backdrop-blur-md rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] bg-zinc-800/80 text-zinc-300">
<i className="w-6 h-6" data-lucide="scissors" strokeWidth="1.5"></i>
</div>
<h3 className="group-hover:text-purple-100 transition-colors text-2xl font-medium text-white tracking-tight mb-3 drop-shadow-md" data-en="Vinyl Cutting" data-sk="
          Plotrovanie fólií">
          Plotrovanie fólií</h3>
<p className="text-sm leading-relaxed group-hover:text-purple-200 transition-colors drop-shadow text-zinc-400" data-en="Cut graphics and precise preparation of vinyl films for wraps, advertising applications, and custom marking." data-sk="Rezaná grafika a precízna príprava vinylových fólií pre polepy, reklamné aplikácie a značenie na mieru.">
          Rezaná grafika a precízna príprava vinylových fólií pre polepy, reklamné aplikácie a značenie na mieru.</p>
</div>
</div>

<div className="service-card interactive-target group relative overflow-hidden border rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] reveal-base anim-pop delay-300 aspect-[3/4] flex flex-col justify-end bg-zinc-900/50 border-white/5">
<div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500 z-10 bg-zinc-900/30"></div>
<video className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 z-0" loop="" muted="" playsinline="" src="https://www.rouby.sk/assets/video/BRANDING.webm"></video>
<div className="z-10 transition-opacity duration-500 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-20 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="w-12 h-12 backdrop-blur-md rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] bg-zinc-800/80 text-zinc-300">
<i className="w-6 h-6" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium mb-3 tracking-tight group-hover:text-purple-100 transition-colors drop-shadow-md text-white" data-en="Branding" data-sk="
          Branding">
          Branding</h3>
<p className="text-sm leading-relaxed group-hover:text-purple-200 transition-colors drop-shadow text-zinc-400" data-en="Visual identity including professional photography, graphic design, and post-production." data-sk="Vizuálna identita vrátane profesionálneho fotografovania, grafického dizajnu a postprodukcie.">
          Vizuálna identita vrátane profesionálneho fotografovania, grafického dizajnu a postprodukcie.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 min-h-screen flex flex-col justify-center relative overflow-hidden border-t border-white/5" id="portfolio">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] -z-10 pointer-events-none bg-purple-600/15"></div>
<div className="container md:text-center reveal-base anim-slide-up w-full mr-auto mb-8 ml-auto pr-6 pl-6">
<h2 className="md:text-4xl text-3xl font-medium tracking-tight mb-4" data-en="Portfolio" data-sk="Portfólio">Portfólio</h2>
<p className="text-zinc-400 max-w-2xl mr-auto ml-auto" data-en="Premium visual experiences crafted with attention to detail." data-sk="Prémiové vizuálne zážitky vytvorené s dôrazom na detail.">Prémiové vizuálne zážitky vytvorené s dôrazom na detail.</p>
</div>
<div className="relative w-full max-w-[1400px] mx-auto h-[380px] md:h-[550px] flex items-center justify-center reveal-base anim-blur delay-200 perspective-1000 group" id="carousel-container">

<button className="hidden md:flex md:left-12 -translate-y-1/2 hover:border-purple-500 transition-all group/btn interactive-target z-50 w-12 h-12 border rounded-full absolute top-1/2 left-4 shadow-[0_0_20px_rgba(0,0,0,0.6)] backdrop-blur-md items-center justify-center hover:text-white hover:bg-purple-600 text-zinc-300 bg-zinc-900/80 border-white/10" id="port-prev">
<i className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="hidden md:flex md:right-12 -translate-y-1/2 hover:border-purple-500 transition-all group/btn interactive-target w-12 h-12 z-50 border rounded-full absolute top-1/2 right-4 shadow-[0_0_20px_rgba(0,0,0,0.6)] backdrop-blur-md items-center justify-center hover:text-white hover:bg-purple-600 text-zinc-300 bg-zinc-900/80 border-white/10" id="port-next">
<i className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>

<div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 text-xs tracking-widest pointer-events-none text-purple-400 transition-all duration-700" id="swipe-hint">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
<span>SWIPE TO EXPLORE</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>

<div className="w-full h-full relative">
<div className="portfolio-item rounded-2xl w-[280px] h-[380px] md:w-[400px] md:h-[550px] is-active" style={{zIndex: '30'}}>
<div className="portfolio-inner w-full h-full relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950">
<img alt="Ploskacka" className="bg-center w-full h-full object-cover" src="https://rouby.sk/assets/images/Flask.jpg?w=800&amp;q=80"/>
<div className="portfolio-overlay absolute inset-0 pointer-events-none"></div>
<div className="absolute inset-0 flex items-end p-6 md:p-8 pointer-events-none">
<div className="portfolio-content max-w-sm">
<h3 className="text-xl md:text-3xl font-medium tracking-tight drop-shadow-md text-white" data-en="Stainless Steel" data-sk="Antikorová oceľ">Antikorová oceľ</h3>
</div>
</div>
</div>
</div>
<div className="portfolio-item rounded-2xl w-[280px] h-[380px] md:w-[400px] md:h-[550px]" style={{zIndex: '20'}}>
<div className="portfolio-inner w-full h-full relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950">
<img alt="Radiaca páka" className="object-center w-full h-full object-cover" src="https://rouby.sk/assets/images/Knob_celok.jpg?w=800&amp;q=80"/>
<div className="portfolio-overlay absolute inset-0 pointer-events-none"></div>
<div className="absolute inset-0 flex items-end p-6 md:p-8 pointer-events-none">
<div className="portfolio-content max-w-sm">
<h3 className="text-xl md:text-3xl font-medium tracking-tight drop-shadow-md text-white" data-en="Gear Knob" data-sk="Radiaca páka">Radiaca páka</h3>
</div>
</div>
</div>
</div>
<div className="portfolio-item rounded-2xl w-[280px] h-[380px] md:w-[400px] md:h-[550px]" style={{zIndex: '10'}}>
<div className="portfolio-inner overflow-hidden w-full h-full border rounded-2xl relative bg-zinc-950 border-white/10">
<img alt="Eloxovaný hliník" className="object-center w-full h-full object-cover" src="https://rouby.sk/assets/images/Elox_profily.jpg?w=800&amp;q=80"/>
<div className="portfolio-overlay absolute inset-0 pointer-events-none"></div>
<div className="absolute inset-0 flex items-end p-6 md:p-8 pointer-events-none">
<div className="portfolio-content max-w-sm">
<h3 className="text-xl md:text-3xl font-medium tracking-tight drop-shadow-md text-white" data-en="Anodized Aluminium" data-sk="Eloxovaný hliník">Eloxovaný hliník</h3>
</div>
</div>
</div>
</div>
<div className="portfolio-item rounded-2xl w-[280px] h-[380px] md:w-[400px] md:h-[550px]" style={{zIndex: '10'}}>
<div className="portfolio-inner w-full h-full relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950">
<img alt="Raw hliník" className="object-center w-full h-full object-cover" src="https://rouby.sk/assets/images/Raw_hlinik_celok.jpg?w=800&amp;q=80"/>
<div className="portfolio-overlay absolute inset-0 pointer-events-none"></div>
<div className="absolute inset-0 flex items-end p-6 md:p-8 pointer-events-none">
<div className="portfolio-content max-w-sm">
<h3 className="text-xl md:text-3xl font-medium tracking-tight drop-shadow-md text-white" data-en="Raw Aluminium" data-sk="Raw hliník">Raw hliník</h3>
</div>
</div>
</div>
</div>
<div className="portfolio-item rounded-2xl w-[280px] h-[380px] md:w-[400px] md:h-[550px]" style={{zIndex: '20'}}>
<div className="portfolio-inner w-full h-full relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950">
<img alt="Záver G19 Gen4" className="object-center w-full h-full object-cover" src="https://rouby.sk/assets/images/G19_nozzle.jpg?w=800&amp;q=80"/>
<div className="portfolio-overlay absolute inset-0 pointer-events-none"></div>
<div className="absolute inset-0 flex items-end p-6 md:p-8 pointer-events-none">
<div className="portfolio-content max-w-sm">
<h3 className="text-xl md:text-3xl font-medium tracking-tight drop-shadow-md text-white" data-en="Slide G19 Gen4" data-sk="Záver G19 Gen4">Záver G19 Gen4</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 min-h-screen flex flex-col justify-center relative overflow-hidden border-t border-white/5" id="proces">
<div className="container mx-auto px-6 max-w-4xl w-full">
<div className="text-center mb-20 reveal-base anim-slide-up">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight mb-4" data-en="Process" data-sk="Proces">Proces</h2>
<p className="text-zinc-400" data-en="How we turn your vision into reality." data-sk="Ako premeníme vašu predstavu na skutočnosť.">Ako premeníme vašu predstavu na skutočnosť.</p>
</div>
<div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500/30 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="reveal-base anim-elastic delay-100 flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold bg-zinc-950 text-purple-300">1</div>
<div className="reveal-base anim-slide-right delay-200 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border backdrop-blur-sm hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-500 border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs tracking-wider font-mono text-purple-400" data-en="PHASE 01" data-sk="FÁZA 01">FÁZA 01</span>
<h3 className="group-hover:text-purple-300 transition-colors font-medium text-white" data-en="Discovery" data-sk="Objavovanie">Objavovanie</h3>
</div>
<p className="text-sm text-zinc-400" data-en="We get to know you first. Then we create." data-sk="Najprv vás spoznáme. Až potom tvoríme.">Najprv vás spoznáme. Až potom tvoríme.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="reveal-base anim-elastic delay-100 flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold bg-zinc-950 text-purple-300">2</div>
<div className="reveal-base anim-slide-left delay-200 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border backdrop-blur-sm hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-500 border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs tracking-wider font-mono text-purple-400" data-en="PHASE 02" data-sk="FÁZA 02">FÁZA 02</span>
<h3 className="group-hover:text-purple-300 transition-colors font-medium text-white" data-en="Design &amp; Concept" data-sk="Návrh &amp; Koncept">Návrh &amp; Koncept</h3>
</div>
<p className="text-sm text-zinc-400" data-en="We define the direction and build the foundation for what comes next." data-sk="Tvoríme vizuálny smer a základ, na ktorom potom staviame finálny výstup.">Tvoríme vizuálny smer a základ, na ktorom potom staviame finálny výstup.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="reveal-base anim-elastic delay-100 flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold bg-zinc-950 text-purple-300">3</div>
<div className="reveal-base anim-slide-right delay-200 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border backdrop-blur-sm hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-500 border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50">
<div className="flex gap-3 mb-2 gap-x-3 gap-y-3 items-center">
<span className="text-xs tracking-wider font-mono text-purple-400" data-en="PHASE 03" data-sk="FÁZA 03">FÁZA 03</span>
<h3 className="group-hover:text-purple-300 transition-colors font-medium text-white" data-en="Production" data-sk="Realizácia">Realizácia</h3>
</div>
<p className="text-sm text-zinc-400" data-en="We engrave, cut, shoot, and craft — turning ideas into real objects." data-sk="Gravírujeme, plotrujeme, fotíme a spracovávame všetko do finálnej podoby.">Gravírujeme, plotrujeme, fotíme a spracovávame všetko do finálnej podoby.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="reveal-base anim-elastic delay-100 flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold bg-zinc-950 text-purple-300">4</div>
<div className="reveal-base anim-slide-left delay-200 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border backdrop-blur-sm hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-500 border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs tracking-wider font-mono text-purple-400" data-en="PHASE 04" data-sk="FÁZA 04">FÁZA 04</span>
<h3 className="group-hover:text-purple-300 transition-colors font-medium text-white" data-en="Final Touch" data-sk="Finále">Finále</h3>
</div>
<p className="text-sm text-zinc-400" data-en="We refine the details. Done." data-sk="Doladíme detaily a hotovo.">Doladíme detaily a hotovo.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 min-h-screen flex flex-col justify-center relative overflow-hidden border-t border-white/5" id="o-mne">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] -z-10 pointer-events-none bg-purple-600/15"></div>
<div className="container mx-auto px-6 w-full max-w-6xl">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="w-full lg:w-1/2 reveal-base anim-slide-right delay-100">
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative rounded-2xl overflow-hidden border aspect-[4/5] shadow-2xl border-white/10 bg-zinc-900">

<img alt="Kreatívny priestor" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -right-4 md:-right-8 border p-5 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl reveal-base anim-pop delay-300 bg-zinc-950 border-white/10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] text-purple-400">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-2xl font-bold tracking-tight text-white">10+</div>
<div className="text-xs uppercase tracking-widest font-medium text-purple-300" data-en="Years of experience" data-sk="Rokov praxe">Rokov praxe</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 reveal-base anim-slide-left delay-200 mt-12 lg:mt-0">
<div className="inline-flex gap-3 items-center text-xs font-mono tracking-widest mb-6 text-purple-400">
<span className="w-8 h-px bg-purple-500/50"></span>
<span data-en="WHO I AM" data-sk="KTO SOM">KTO SOM</span>
</div>
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight mb-6" data-en="The fusion of technology and craft" data-sk="Spojenie technológie a remesla">Spojenie technológie a remesla</h2>
<div className="space-y-6 text-base leading-relaxed text-zinc-400">
<p data-en="Welcome to my world, where precision meets creativity. I am a designer and creator with a passion for detail, surfaces, and visual identity. I believe that every brand deserves to be memorable and every material can leave a mark." data-sk="Vitajte v mojom svete, kde sa precíznosť stretáva s kreativitou. Som dizajnér a tvorca s vášňou pre detail, povrchy a vizuálnu identitu. Verím, že každá značka si zaslúži byť zapamätateľná a každý materiál môže niesť príbeh.">
                            Vitajte v mojom svete, kde sa precíznosť stretáva s kreativitou. Som dizajnér a tvorca s vášňou pre detail, povrchy a vizuálnu identitu. Verím, že každá značka si zaslúži byť zapamätateľná a každý materiál môže niesť príbeh.
                        </p>
<p data-en="My journey started with graphic design and gradually expanded into the physical world. Today, I combine digital design with physical production – from laser engraving to foil application." data-sk="Moja cesta začala pri grafickom dizajne a postupne sa rozšírila do fyzického sveta. Dnes kombinujem digitálny návrh s fyzickou výrobou – od laserového gravírovania až po aplikáciu fólií.">
                            Moja cesta začala pri grafickom dizajne a postupne sa rozšírila do fyzického sveta. Dnes kombinujem digitálny návrh s fyzickou výrobou – od laserového gravírovania až po aplikáciu fólií.
                        </p>
</div>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-4 text-sm text-zinc-300">
<i className="w-5 h-5 text-purple-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span data-en="Individual approach to every project" data-sk="Individuálny prístup ku každému projektu">Individuálny prístup ku každému projektu</span>
</li>
<li className="flex items-center gap-4 text-sm text-zinc-300">
<i className="w-5 h-5 text-purple-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span data-en="Emphasis on premium quality and detail" data-sk="Dôraz na prémiovú kvalitu a detail">Dôraz na prémiovú kvalitu a detail</span>
</li>
<li className="flex items-center gap-4 text-sm text-zinc-300">
<i className="w-5 h-5 text-purple-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span data-en="Comprehensive solutions from design to execution" data-sk="Komplexné riešenia od návrhu po realizáciu">Komplexné riešenia od návrhu po realizáciu</span>
</li>
</ul>
<div className="mt-10">
<a className="interactive-target shiny-cta text-base font-semibold rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg transition-all inline-flex items-center gap-2 group text-white" href="#kontakt">
<span data-en="Let's collaborate" data-sk="Spolupracujme">Spolupracujme</span>
<i className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-t min-h-screen flex flex-col justify-center py-20 relative border-white/10" id="kontakt">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px] -z-10 bg-purple-600/20"></div>
<div className="container mx-auto px-6 text-center w-full">
<h2 className="reveal-base anim-blur md:text-5xl text-4xl font-semibold tracking-tight font-montserrat mb-6" data-en="Have a vision?" data-sk="Máš predstavu?">Máš predstavu?</h2>
<p className="reveal-base anim-slide-up delay-100 text-zinc-400 max-w-xl mr-auto mb-10 ml-auto" data-en="Laser, visuals or branding. Let’s leave a mark." data-sk="Laser, vizuál alebo branding. Napíš mi a spoločne zanecháme stopu.">Laser, vizuál alebo branding. Napíš mi a spoločne zanecháme stopu.</p>
<div className="reveal-base anim-pop delay-200">
<form action="https://formspree.io/f/mzdklqqz" className="flex flex-col gap-4 md:p-8 text-left w-full max-w-md border rounded-2xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-[0_0_30px_rgba(168,85,247,0.05)] backdrop-blur-xl gap-x-4 gap-y-4 bg-zinc-900/40 border-white/5" method="POST">
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-zinc-400" data-en="Your Name" data-sk="Vaše meno">Vaše meno</label>
<input className="placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm w-full border rounded-xl pt-3 pr-4 pb-3 pl-4 text-zinc-200 bg-black/40 border-white/10" name="name" placeholder="Darth Vader" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-zinc-400" data-en="Email" data-sk="E-mail">E-mail</label>
<input className="placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm w-full border rounded-xl pt-3 pr-4 pb-3 pl-4 text-zinc-200 bg-black/40 border-white/10" name="email" placeholder="@" required="" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-zinc-400" data-en="Message" data-sk="Správa">Správa</label>
<textarea className="w-full border rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm resize-none bg-black/40 border-white/10 text-zinc-200" data-en="Let's create something" data-sk="Poďme niečo vytvoriť" name="message" placeholder="Poďme niečo vytvoriť" required="" rows="4"></textarea>
</div>
<button className="interactive-target shiny-cta mt-2 inline-flex items-center justify-center group text-base font-semibold rounded-xl py-3.5 px-8 w-full transition-all text-white" type="submit">
<span data-en="Send Message" data-sk="Odoslať správu">Odoslať správu</span>
</button>
</form>
</div>
</div>
</section>
<footer className="border-t pt-8 pb-8 bg-black border-white/5">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
<p className="text-xs tracking-tighter sm:tracking-normal md:text-sm whitespace-nowrap transition-colors hover:text-purple-400" data-en="© 2026 ROUBY | Surface &amp; Precision | Leave a mark." data-sk="© 2026 ROUBY | Povrch &amp; Precíznosť | Zanechaj stopu.">© 2026 ROUBY | Povrch &amp; Precíznosť | Zanechaj stopu.</p>
<div className="flex gap-6">
<a className="interactive-target transition-colors hover:text-purple-400" href="https://www.instagram.com/rouby.sk">Instagram</a>
<a className="interactive-target transition-colors hover:text-purple-400" href="https://www.linkedin.com/in/robertrola/">LinkedIn</a>
<a className="interactive-target transition-colors hover:text-purple-400" href="https://behance.net/roubyrola">Behance</a>
</div>
</div>
</footer>

    </>
  );
}
