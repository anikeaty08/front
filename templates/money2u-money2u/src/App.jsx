import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
base: '#030405',
card: '#080A0C',
border: 'rgba(255, 255, 255, 0.06)',
neon: '#34d399', // emerald-400
neonHover: '#10b981', // emerald-500
}
},
letterSpacing: {
tighter: '-0.04em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('py-2');
                navbar.classList.remove('py-4');
                navbar.style.background = 'rgba(3, 4, 5, 0.95)';
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2');
                navbar.style.background = 'rgba(3, 4, 5, 0.8)';
            }
        });

        // Mobile Menu
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-square-linear" width="24" height="24"></iconify-icon>';
            } else {
                closeMenu();
            }
        });

        function closeMenu() {
            menuOpen = false;
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'auto';
            menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>';
        }

        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Scroll Reveal
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-brand-base/80 backdrop-blur-xl border-b border-brand-border transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 z-50" href="#">
<span className="text-white font-medium text-2xl tracking-tighter">money<span className="text-brand-neon">2u</span></span>
</a>

<div className="hidden lg:flex items-center gap-10 text-sm font-light text-gray-400">
<a className="hover:text-white transition-colors duration-300" href="#sluzby">Služby</a>
<a className="hover:text-white transition-colors duration-300" href="#pro-poradce">Pro poradce</a>
<a className="hover:text-white transition-colors duration-300" href="#o-nas">O nás</a>
<a className="hover:text-white transition-colors duration-300" href="#nasi-poradci">Naši poradci</a>
<a className="hover:text-white transition-colors duration-300" href="#kontakt">Kontakt</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="text-xs uppercase tracking-widest text-white border border-brand-border px-5 py-3 hover:border-brand-neon hover:text-brand-neon transition-colors duration-300" href="#nasi-poradci">
                    Najít poradce
                </a>
<a className="text-xs uppercase tracking-widest text-brand-base bg-brand-neon px-5 py-3 shadow-[0_0_15px_rgba(52,211,153,0.1)] hover:shadow-[0_0_25px_rgba(52,211,153,0.3)] hover:bg-brand-neonHover transition-all duration-300" href="#pro-poradce">
                    Chci spolupráci
                </a>
</div>

<button aria-label="Menu" className="lg:hidden text-white z-50 p-2" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-brand-base z-40 flex flex-col justify-center items-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<a className="text-2xl font-light text-white mobile-link" href="#sluzby">Služby</a>
<a className="text-2xl font-light text-white mobile-link" href="#pro-poradce">Pro poradce</a>
<a className="text-2xl font-light text-white mobile-link" href="#o-nas">O nás</a>
<a className="text-2xl font-light text-white mobile-link" href="#nasi-poradci">Naši poradci</a>
<a className="text-2xl font-light text-white mobile-link" href="#kontakt">Kontakt</a>
<div className="flex flex-col gap-4 mt-8 w-full px-12 text-center">
<a className="border border-brand-border py-4 text-sm tracking-widest text-white uppercase mobile-link" href="#nasi-poradci">Najít poradce</a>
<a className="bg-brand-neon py-4 text-sm tracking-widest text-brand-base uppercase mobile-link" href="#pro-poradce">Chci spolupráci</a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0 flex items-center justify-center">
<div className="absolute w-[200vw] h-[200vh] bg-nodes opacity-30 rotate-[15deg] animate-[spin_120s_linear_infinite]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-base/80 to-brand-base"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start pt-12 pb-24">
<div className="inline-flex items-center gap-3 mb-8 reveal">
<span className="w-1.5 h-1.5 bg-brand-neon rounded-full shadow-[0_0_8px_#34d399]"></span>
<span className="text-xs uppercase tracking-widest text-gray-400">Síť nezávislých poradců</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-extralight text-white leading-[1.05] tracking-tighter mb-8 max-w-5xl reveal" style={{transitionDelay: '100ms'}}>
                Řídíme Vaše finance <br className="hidden md:block"/>
                správným směrem, <br/>
<span className="text-brand-neon glow-text font-light word-slider">
<span className="word-slider-inner">
<span className="block h-[1.1em]">férově.</span>
<span className="block h-[1.1em]">bez skrytých poplatků.</span>
<span className="block h-[1.1em]">nezávisle.</span>
<span className="block h-[1.1em]">na pohodu.</span>
<span className="block h-[1.1em]">férově.</span>
</span>
</span>
</h1>
<p className="text-lg md:text-xl font-light text-gray-400 max-w-2xl leading-relaxed mb-12 reveal" style={{transitionDelay: '200ms'}}>
                Kompletní péče a servis v oblasti financí a realit. Přinášíme nízkonákladové prostředí bez direktiv, postavené na profesionálním přístupu a kolektivní spolupráci.
            </p>
<div className="flex flex-col sm:flex-row gap-6 reveal" style={{transitionDelay: '300ms'}}>
<a className="group relative px-8 py-4 bg-white text-brand-base text-sm uppercase tracking-widest overflow-hidden" href="#nasi-poradci">
<span className="relative z-10 transition-colors group-hover:text-white">Najít svého poradce</span>
<div className="absolute inset-0 bg-brand-neon transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
</a>
<a className="group px-8 py-4 border border-brand-border text-white text-sm uppercase tracking-widest hover:border-white transition-colors duration-300 flex items-center gap-3" href="#pro-poradce">
                    Chci spolupráci
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 reveal" style={{transitionDelay: '500ms'}}>
<span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
</div>
</header>

<section className="py-32 relative" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:w-1/2 reveal">
<h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tighter mb-6">Komplexní ekosystém.</h2>
<p className="font-light text-gray-400 leading-relaxed text-lg">
                    Pokrýváme všechny potřeby našich klientů od běžného finančního plánování až po realitní transakce a moderní správu přes aplikaci.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group bg-brand-card border border-brand-border p-8 reveal transition-all duration-500 hover:-translate-y-2 hover:bg-[#0c0f13]">
<div className="w-12 h-12 flex items-center justify-center mb-16 border border-brand-border text-brand-neon transition-colors group-hover:border-brand-neon/30">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">Kompletní péče</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">
                        Nezávislé a objektivní finanční plánování pro rodiny i firmy. Žádné skryté poplatky.
                    </p>
<div className="glow-bottom mt-8"></div>
</div>

<div className="group bg-brand-card border border-brand-border p-8 reveal transition-all duration-500 hover:-translate-y-2 hover:bg-[#0c0f13]" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 flex items-center justify-center mb-16 border border-brand-border text-brand-neon transition-colors group-hover:border-brand-neon/30">
<iconify-icon height="24" icon="solar:smartphone-update-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">My Plann</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">
                        Moderní mobilní aplikace pro dokonalý přehled a správu vašich osobních financí 24/7.
                    </p>
<div className="glow-bottom mt-8"></div>
</div>

<div className="group bg-brand-card border border-brand-border p-8 reveal transition-all duration-500 hover:-translate-y-2 hover:bg-[#0c0f13]" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 flex items-center justify-center mb-16 border border-brand-border text-brand-neon transition-colors group-hover:border-brand-neon/30">
<iconify-icon height="24" icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">Finanční produkty</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">
                        Zajištění hypoték, úvěrů, pojištění a investic napříč celým trhem s důrazem na výhodnost pro klienta.
                    </p>
<div className="glow-bottom mt-8"></div>
</div>

<div className="group bg-brand-card border border-brand-border p-8 reveal transition-all duration-500 hover:-translate-y-2 hover:bg-[#0c0f13]" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 flex items-center justify-center mb-16 border border-brand-border text-brand-neon transition-colors group-hover:border-brand-neon/30">
<iconify-icon height="24" icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">Realitní služby</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">
                        Profesionální prodej, koupě a pronájem nemovitostí ve spolupráci se sesterskou sítí reality2u.
                    </p>
<div className="glow-bottom mt-8"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-brand-card/50 border-y border-brand-border overflow-hidden" id="pro-poradce">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-3 mb-6">
<span className="text-xs uppercase tracking-widest text-brand-neon">Kariéra &amp; Spolupráce</span>
</div>
<h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tighter mb-8 leading-tight">
                        Svoboda v podnikání.<br/>
                        Bez nesmyslných direktiv.
                    </h2>
<p className="font-light text-gray-400 mb-10 leading-relaxed text-lg">
                        Vznikli jsme jako nízkonákladová, profesionální a pohodová firma. U nás nezažijete multilevelový tlak, ale férové sdílení know-how a transparentní zázemí.
                    </p>
<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<iconify-icon className="text-brand-neon mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white font-normal text-base tracking-tight">Nezávislost a žádný multilevel</h4>
<p className="text-sm font-light text-gray-500 mt-1">Pracujete pro své klienty, ne pro manažery nad vámi.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-brand-neon mt-1" icon="solar:wallet-money-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white font-normal text-base tracking-tight">Transparentní provize</h4>
<p className="text-sm font-light text-gray-500 mt-1">Jasně dané podmínky a maximální ziskovost pro vaši práci.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-brand-neon mt-1" icon="solar:cpu-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white font-normal text-base tracking-tight">Silné back-office a IT</h4>
<p className="text-sm font-light text-gray-500 mt-1">Aplikace My Plann, sdílení nástrojů a minimalizace byrokracie.</p>
</div>
</div>
</div>
<a className="inline-block border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-brand-base transition-colors duration-300" href="#kontakt">
                        Nezávazný hovor
                    </a>
</div>

<div className="relative h-[600px] w-full reveal" style={{transitionDelay: '200ms'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-neon/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 border border-brand-border bg-brand-base/50 backdrop-blur-md p-6 flex flex-col gap-4 transform rotate-y-[-10deg] rotate-x-[5deg] perspective-1000 shadow-2xl">

<div className="flex justify-between items-center border-b border-brand-border pb-4">
<div className="w-32 h-4 bg-gray-800 rounded-sm"></div>
<div className="w-10 h-10 rounded-full bg-gray-800"></div>
</div>

<div className="flex gap-4 mt-4">
<div className="flex-1 bg-gray-900/50 border border-brand-border p-4">
<iconify-icon className="text-gray-600 mb-4" icon="solar:graph-up-linear" width="24"></iconify-icon>
<div className="w-16 h-3 bg-gray-800 rounded-sm mb-2"></div>
<div className="w-24 h-6 bg-brand-neon/20 rounded-sm"></div>
</div>
<div className="flex-1 bg-gray-900/50 border border-brand-border p-4">
<iconify-icon className="text-gray-600 mb-4" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<div className="w-20 h-3 bg-gray-800 rounded-sm mb-2"></div>
<div className="w-16 h-6 bg-white/20 rounded-sm"></div>
</div>
</div>

<div className="flex-1 border border-brand-border bg-gradient-to-t from-brand-neon/5 to-transparent mt-4 relative overflow-hidden flex items-end">
<svg className="absolute bottom-0 w-full h-32 text-brand-neon/30" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L0 50 Q 25 80 50 40 T 100 20 L 100 100 Z" fill="currentColor"></path>
</svg>
<svg className="absolute bottom-0 w-full h-32 text-brand-neon" fill="none" preserveaspectratio="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100">
<path d="M0 50 Q 25 80 50 40 T 100 20"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="o-nas">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-extralight text-white tracking-tighter mb-6 max-w-3xl mx-auto reveal">
                Od roku 2012 stavíme firmu, kde je na prvním místě férové jednání a profesionální přístup.
            </h2>
<p className="font-light text-gray-500 max-w-2xl mx-auto mb-20 reveal" style={{transitionDelay: '100ms'}}>
                Začínali jsme jako dva poradci s vizí dělat finance jinak. Dnes tvoříme stabilní síť pokrývající celou Českou republiku, ale naše základní hodnoty zůstaly stejné.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 mt-10">

<div className="reveal flex flex-col items-center" style={{transitionDelay: '200ms'}}>
<span className="text-5xl md:text-7xl font-extralight text-white tracking-tighter mb-2">200+</span>
<div className="w-8 h-px bg-brand-neon mb-4"></div>
<span className="text-xs uppercase tracking-widest text-gray-500">Nezávislých poradců</span>
</div>

<div className="reveal flex flex-col items-center" style={{transitionDelay: '300ms'}}>
<span className="text-5xl md:text-7xl font-extralight text-white tracking-tighter mb-2">20k+</span>
<div className="w-8 h-px bg-brand-neon mb-4"></div>
<span className="text-xs uppercase tracking-widest text-gray-500">Spokojených klientů</span>
</div>

<div className="reveal flex flex-col items-center" style={{transitionDelay: '400ms'}}>
<span className="text-5xl md:text-7xl font-extralight text-white tracking-tighter mb-2">16</span>
<div className="w-8 h-px bg-brand-neon mb-4"></div>
<span className="text-xs uppercase tracking-widest text-gray-500">Poboček v ČR</span>
</div>

<div className="reveal flex flex-col items-center" style={{transitionDelay: '500ms'}}>
<span className="text-5xl md:text-7xl font-extralight text-white tracking-tighter mb-2">2012</span>
<div className="w-8 h-px bg-brand-neon mb-4"></div>
<span className="text-xs uppercase tracking-widest text-gray-500">Rok založení</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-brand-card/30 border-t border-brand-border" id="nasi-poradci">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
<div>
<h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tighter mb-4">Naši poradci.</h2>
<p className="font-light text-gray-400">Najděte profesionála ve svém okolí.</p>
</div>

<div className="relative w-full md:w-64">
<select className="w-full bg-transparent border-b border-brand-border text-white py-3 pl-0 pr-8 focus:outline-none focus:border-brand-neon appearance-none font-light cursor-pointer rounded-none">
<option className="bg-brand-base" value="all">Všechny kraje</option>
<option className="bg-brand-base" value="praha">Praha a okolí</option>
<option className="bg-brand-base" value="jihomoravsky">Jihomoravský kraj</option>
<option className="bg-brand-base" value="moravskoslezsky">Moravskoslezský kraj</option>
<option className="bg-brand-base" value="jihocesky">Jihočeský kraj</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1px bg-brand-border overflow-hidden rounded-sm">

<div className="bg-brand-base p-8 hover:bg-brand-card transition-colors group reveal">
<p className="text-xs font-medium text-brand-neon tracking-widest uppercase mb-4">Brno</p>
<h3 className="text-xl text-white font-normal tracking-tight mb-1">Ing. Jan Novák</h3>
<p className="text-sm text-gray-500 font-light mb-8">Investiční specialista</p>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors" href="tel:+420000000000">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                            +420 777 123 456
                        </a>
<a className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors" href="mailto:jan.novak@money2u.cz">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                            jan.novak@money2u.cz
                        </a>
</div>
</div>

<div className="bg-brand-base p-8 hover:bg-brand-card transition-colors group reveal">
<p className="text-xs font-medium text-brand-neon tracking-widest uppercase mb-4">Praha</p>
<h3 className="text-xl text-white font-normal tracking-tight mb-1">Petra Svobodová</h3>
<p className="text-sm text-gray-500 font-light mb-8">Hypoteční specialistka</p>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors" href="tel:+420000000000">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                            +420 777 987 654
                        </a>
<a className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors" href="mailto:petra.svobodova@money2u.cz">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                            petra.svobodova@money2u.cz
                        </a>
</div>
</div>

<div className="bg-brand-base p-8 hover:bg-brand-card transition-colors group reveal">
<p className="text-xs font-medium text-brand-neon tracking-widest uppercase mb-4">Ostrava</p>
<h3 className="text-xl text-white font-normal tracking-tight mb-1">Mgr. Tomáš Dvořák</h3>
<p className="text-sm text-gray-500 font-light mb-8">Komplexní finanční péče</p>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors" href="tel:+420000000000">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                            +420 777 456 123
                        </a>
<a className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors" href="mailto:tomas.dvorak@money2u.cz">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                            tomas.dvorak@money2u.cz
                        </a>
</div>
</div>

<div className="bg-brand-base p-8 hover:bg-brand-card transition-colors group reveal">
<p className="text-xs font-medium text-brand-neon tracking-widest uppercase mb-4">České Budějovice</p>
<h3 className="text-xl text-white font-normal tracking-tight mb-1">Alena Kovářová</h3>
<p className="text-sm text-gray-500 font-light mb-8">Pojistná specialistka</p>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors" href="tel:+420000000000">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                            +420 777 321 654
                        </a>
<a className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors" href="mailto:alena.kovarova@money2u.cz">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                            alena.kovarova@money2u.cz
                        </a>
</div>
</div>

<div className="bg-brand-base p-8 flex items-center justify-center reveal">
<a className="text-sm text-gray-400 uppercase tracking-widest hover:text-brand-neon transition-colors flex flex-col items-center gap-2" href="#">
<iconify-icon icon="solar:add-circle-linear" width="32"></iconify-icon>
                        Zobrazit další
                    </a>
</div>
<div className="bg-brand-base hidden lg:block reveal"></div>
</div>
</div>
</section>

<section className="py-32 border-t border-brand-border relative overflow-hidden" id="kontakt">
<div className="absolute top-0 right-0 w-1/2 h-full bg-brand-neon/5 blur-[150px] pointer-events-none hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20">

<div className="reveal">
<h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tighter mb-10">Zahajte komunikaci.</h2>
<div className="space-y-12">
<div>
<h3 className="text-xs uppercase tracking-widest text-brand-neon mb-4">Sídlo společnosti</h3>
<p className="text-white text-lg font-light tracking-tight mb-1">money2u s.r.o.</p>
<p className="text-gray-500 font-light text-sm mb-4">Tolstého 35, 616 00 Brno</p>
<div className="flex flex-col gap-2">
<a className="text-gray-400 hover:text-white text-sm flex items-center gap-2 w-fit transition-colors" href="mailto:info@money2u.cz">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                                    info@money2u.cz
                                </a>
<p className="text-gray-400 text-sm flex items-center gap-2">
<iconify-icon icon="solar:buildings-2-linear" width="18"></iconify-icon>
                                    IČ: 24203102 | DIČ: CZ24203102
                                </p>
</div>
</div>
<div className="h-px w-16 bg-brand-border"></div>
<div>
<h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Mám zájem o</h3>
<div className="flex flex-wrap gap-4">
<span className="px-4 py-2 border border-brand-border text-xs text-gray-400 rounded-full cursor-default hover:border-brand-neon transition-colors">Služby pro klienty</span>
<span className="px-4 py-2 border border-brand-neon text-brand-neon text-xs rounded-full cursor-default shadow-[0_0_10px_rgba(52,211,153,0.1)]">Spolupráci jako poradce</span>
<span className="px-4 py-2 border border-brand-border text-xs text-gray-400 rounded-full cursor-default hover:border-brand-neon transition-colors">Realitní služby</span>
</div>
</div>
</div>
</div>

<div className="bg-brand-card/50 border border-brand-border p-8 md:p-12 reveal">
<form className="space-y-8 flex flex-col">
<div className="relative pt-6">
<input className="peer w-full bg-transparent border-0 border-b border-brand-border px-0 py-2 text-white font-light focus:ring-0 focus:border-brand-neon transition-colors placeholder-transparent" id="name" placeholder="Jméno a příjmení" type="text"/>
<label className="absolute left-0 top-8 text-gray-500 font-light text-sm transition-all peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-brand-neon cursor-text origin-left" htmlFor="name">Jméno a příjmení</label>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative pt-6">
<input className="peer w-full bg-transparent border-0 border-b border-brand-border px-0 py-2 text-white font-light focus:ring-0 focus:border-brand-neon transition-colors placeholder-transparent" id="email" placeholder="E-mail" type="email"/>
<label className="absolute left-0 top-8 text-gray-500 font-light text-sm transition-all peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-brand-neon cursor-text origin-left" htmlFor="email">E-mail</label>
</div>
<div className="relative pt-6">
<input className="peer w-full bg-transparent border-0 border-b border-brand-border px-0 py-2 text-white font-light focus:ring-0 focus:border-brand-neon transition-colors placeholder-transparent" id="phone" placeholder="Telefon" type="tel"/>
<label className="absolute left-0 top-8 text-gray-500 font-light text-sm transition-all peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-brand-neon cursor-text origin-left" htmlFor="phone">Telefon</label>
</div>
</div>
<div className="relative pt-6">
<textarea className="peer w-full bg-transparent border-0 border-b border-brand-border px-0 py-2 text-white font-light focus:ring-0 focus:border-brand-neon transition-colors placeholder-transparent resize-none" id="message" placeholder="Zpráva" rows="3"></textarea>
<label className="absolute left-0 top-8 text-gray-500 font-light text-sm transition-all peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-brand-neon cursor-text origin-left" htmlFor="message">Vaše zpráva / poznámka</label>
</div>
<button className="mt-4 bg-white text-brand-base px-8 py-4 text-sm uppercase tracking-widest font-normal hover:bg-brand-neon transition-colors self-start inline-flex items-center gap-3" type="button">
                            Odeslat
                            <iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-brand-border">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<a className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity" href="#">
<span className="text-white font-medium text-xl tracking-tighter">money<span className="text-brand-neon">2u</span></span>
</a>
<div className="flex gap-6 text-xs text-gray-500 font-light uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Ochrana os. údajů</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
<p className="text-xs text-gray-600 font-light">
                © 2023 money2u s.r.o. Všechna práva vyhrazena.
            </p>
</div>
</footer>



    </>
  );
}
