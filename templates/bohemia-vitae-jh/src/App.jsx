import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- SCROLL REVEAL ANIMATION ENGINE ---
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });

        // --- NAVBAR SCROLL EFFECT ---
        const navbar = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('h-20');
                navbar.classList.remove('h-24');
                navBg.classList.remove('opacity-0');
            } else {
                navbar.classList.add('h-24');
                navbar.classList.remove('h-20');
                navBg.classList.add('opacity-0');
            }
        });

        // --- MOBILE MENU TOGGLE ---
        const btn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            menu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        btn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        links.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="absolute inset-0 bg-white/80 backdrop-blur-md shadow-sm transition-opacity duration-300" id="nav-bg"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-24 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-3">
<div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center text-white">
<span className="font-bold text-xl tracking-tighter">BV</span>
</div>
<div className="flex flex-col">
<a className="text-lg font-bold tracking-tight text-stone-900 uppercase leading-none" href="#">
                            Bohemia Vitae
                        </a>
<span className="text-[10px] tracking-widest text-stone-500 font-medium mt-0.5">JINDŘICHŮV HRADEC, a.s.</span>
</div>
</div>

<div className="hidden lg:flex items-center space-x-10">
<a className="text-sm font-medium text-stone-600 hover:text-green-900 transition-colors relative group" href="#o-spolecnosti">
                        O společnosti
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-900 transition-colors relative group" href="#cinnost">
                        Naše činnost
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-900 transition-colors relative group" href="#kariera">
                        Kariéra
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-stone-200 text-sm font-semibold rounded-full text-stone-900 bg-white hover:bg-stone-50 hover:border-green-800 hover:text-green-900 transition-all shadow-sm" href="#kontakt">
                        Kontakt
                    </a>
</div>

<button className="lg:hidden p-2 text-stone-600 hover:text-stone-900" id="mobile-menu-btn">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="fixed inset-0 z-40 bg-white transform translate-x-full transition-transform duration-300 lg:hidden flex flex-col pt-32 px-8 space-y-8" id="mobile-menu">
<button className="absolute top-8 right-6 p-2 text-stone-500" id="close-menu-btn">
<svg aria-hidden="true" data-icon="lucide:x" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<a className="text-2xl font-semibold text-stone-900 border-b border-stone-100 pb-4 mobile-link" href="#o-spolecnosti">O společnosti</a>
<a className="text-2xl font-semibold text-stone-900 border-b border-stone-100 pb-4 mobile-link" href="#cinnost">Naše činnost</a>
<a className="text-2xl font-semibold text-stone-900 border-b border-stone-100 pb-4 mobile-link" href="#kariera">Kariéra</a>
<a className="text-2xl font-semibold text-green-800 mobile-link" href="#kontakt">Kontaktovat</a>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-24 relative items-center">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="South Bohemian Landscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/10 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-50/90 via-stone-50/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur border border-stone-200 shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-stone-700">Tradiční české zemědělství od r. 1993</span>
</div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1]">
                        Stabilita. <br/>
<span className="text-green-800">Odpovědnost.</span> <br/>
                        Budoucnost.
                    </h1>
<p className="text-lg lg:text-xl text-stone-600 max-w-xl leading-relaxed font-medium">
                        Nejsme jen zemědělský podnik. Jsme strážci krajiny a garance potravinové soběstačnosti regionu. Spojujeme úctu k jihočeské půdě s moderními technologiemi.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-stone-900 hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" href="#cinnost">
                            Prozkoumat činnost
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-stone-700 bg-white/80 backdrop-blur border border-stone-200 hover:bg-white transition-all shadow-sm hover:shadow-md" href="#kontakt">
                            Spojit se s námi
                        </a>
</div>
</div>

<div className="lg:col-span-5 relative hidden lg:block h-[600px]">

<div className="absolute top-10 right-10 w-72 glass-panel p-6 rounded-2xl reveal reveal-delay-200 z-20 active">
<div className="flex items-center gap-4 mb-4">
<div className="p-3 bg-green-100 text-green-800 rounded-lg">
<svg aria-hidden="true" data-icon="lucide:trending-up" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<div>
<p className="text-xs text-stone-500 uppercase font-semibold">Produkce</p>
<p className="text-lg font-bold text-stone-900">Regionální lídr</p>
</div>
</div>
<p className="text-sm text-stone-600 leading-relaxed">
                            Stabilní dodavatel masa a plodin pro klíčové zpracovatele v České republice.
                        </p>
</div>

<div className="absolute top-40 left-0 w-80 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/40 reveal reveal-delay-300 z-10 active">
<img className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1569858241634-5aee6e47091a?w=800&amp;q=80"/>
</div>

<div className="absolute bottom-20 right-0 w-80 glass-panel p-6 rounded-2xl reveal reveal-delay-300 z-30 active">
<div className="flex items-center gap-4 mb-3">
<div className="p-3 bg-amber-100 text-amber-800 rounded-lg">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<p className="text-xs text-stone-500 uppercase font-semibold">Kvalita</p>
<p className="text-lg font-bold text-stone-900">Garance původu</p>
</div>
</div>
<div className="w-full bg-stone-200 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-green-700 h-1.5 rounded-full w-full"></div>
</div>
<p className="text-xs text-stone-500 text-right">100% Český chov</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
<span className="text-xs font-medium uppercase tracking-widest mb-2 text-stone-500">Scroll</span>
<svg aria-hidden="true" data-icon="lucide:arrow-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="o-spolecnosti">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-16 reveal active">
<h2 className="text-sm font-bold text-green-800 uppercase tracking-widest mb-3">O společnosti</h2>
<h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 tracking-tight">Síla tradice. Moderní přístup.</h3>
<p className="text-lg text-stone-600 leading-relaxed">
                    Společnost <strong className="text-stone-900">BOHEMIA VITAE Jindřichův Hradec, a.s.</strong> vznikla v roce 1993 transformací zemědělského družstva. Navazujeme na poctivou práci našich předků v regionu Jarošova nad Nežárkou. Jsme stabilním zaměstnavatelem a partnerem, který nehledí na kvartální zisky, ale na dlouhodobou udržitelnost krajiny a chovu.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 text-center hover:border-green-200 transition-colors reveal reveal-delay-100">
<svg aria-hidden="true" data-icon="lucide:landmark" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="text-xl font-bold text-stone-900 mb-2">30+ Let tradice</h4>
<p className="text-sm text-stone-600">Kontinuita hospodaření a zkušenosti předávané mezi generacemi.</p>
</div>
<div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 text-center hover:border-green-200 transition-colors reveal reveal-delay-200">
<svg aria-hidden="true" data-icon="lucide:users" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<h4 className="text-xl font-bold text-stone-900 mb-2">Regionální zaměstnavatel</h4>
<p className="text-sm text-stone-600">Dáváme práci lidem z okolí a podporujeme život na venkově.</p>
</div>
<div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 text-center hover:border-green-200 transition-colors reveal reveal-delay-300">
<svg aria-hidden="true" data-icon="lucide:leaf" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
<h4 className="text-xl font-bold text-stone-900 mb-2">Respekt k přírodě</h4>
<p className="text-sm text-stone-600">Hospodaříme tak, abychom půdu předali v lepším stavu, než jsme ji převzali.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-left bg-stone-50 pt-24 pb-24 relative" id="cinnost">

<div className="pointer-events-none bg-gradient-to-l from-stone-100 to-transparent w-1/2 h-full absolute top-0 right-0"></div>
<div className="sm:px-6 lg:px-8 text-left max-w-7xl mr-auto ml-auto pr-4 pl-4 relative justify-start">
<div className="flex flex-col md:flex-row reveal text-left mb-16 justify-start">
<div className="justify-start">
<h2 className="uppercase text-sm font-bold text-green-800 tracking-widest text-left mb-3">Naše činnost</h2>
<h3 className="md:text-4xl text-3xl font-bold text-stone-900 tracking-tight text-left">Pilíře naší produkce</h3>
</div>
<p className="md:mt-0 md:text-left text-left max-w-md mt-0" style={{visibility: 'hidden'}}>
                    Diverzifikovaná výroba zajišťuje naši stabilitu. Propojujeme rostlinnou a živočišnou výrobu v uzavřený, efektivní celek.
                </p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<a className="group relative h-[400px] rounded-2xl overflow-hidden reveal reveal-delay-100 cursor-pointer" href="#chov-prasat">
<img alt="Chov prasat" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1604135972804-24fc2d794185?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center text-white mb-4 border border-white/20">
<svg aria-hidden="true" className="" data-icon="lucide:piggy-bank" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5-7h.01M2 8v1a2 2 0 0 0 2 2h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-2xl font-bold text-white mb-2">Chov prasat</h4>
<p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                            Uzavřený obrat stáda. Vlastní selata, kontrolovaný výkrm a garance zdravotního stavu.
                        </p>
<div className="mt-4 flex items-center text-green-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                            Zjistit více <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</a>

<a className="group relative h-[400px] rounded-2xl overflow-hidden reveal reveal-delay-200 cursor-pointer" href="#rostlinna-vyroba">
<img alt="Rostlinná výroba" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center text-white mb-4 border border-white/20">
<svg aria-hidden="true" data-icon="lucide:wheat" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 22L16 8M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4"></path><path d="M11.47 17.47L13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0"></path></g></svg>
</div>
<h4 className="text-2xl font-bold text-white mb-2">Rostlinná výroba</h4>
<p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                            Péče o půdní fond. Produkce krmných směsí pro vlastní chovy a tržních plodin (řepka, obiloviny).
                        </p>
<div className="mt-4 flex items-center text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                            Zjistit více <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</a>

<a className="group relative h-[400px] rounded-2xl overflow-hidden reveal reveal-delay-300 cursor-pointer" href="#chov-drubeze">
<img alt="Chov drůbeže" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center text-white mb-4 border border-white/20">
<svg aria-hidden="true" data-icon="lucide:egg" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-2xl font-bold text-white mb-2">Chov drůbeže</h4>
<p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                            Výkrm kuřecích brojlerů a produkce čerstvých vajec. Prodej zástavové drůbeže maloodběratelům.
                        </p>
<div className="mt-4 flex items-center text-green-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                            Zjistit více <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-stone-100" id="chov-prasat">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="flex items-center gap-2 mb-6">
<span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Živočišná výroba</span>
</div>
<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 tracking-tight">Chov prasat s důrazem na welfare</h2>
<p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        Klíčem ke kvalitnímu masu je kontrola celého životního cyklu. Provozujeme <span className="text-stone-900 font-semibold">uzavřený obrat stáda</span>, což znamená, že zvířata neputují mezi farmami, nestresují se a my máme 100% přehled o jejich genetice a výživě.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-stone-700">Vlastní odchov selat v moderních porodnách</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-stone-700">Krmení směsmi z vlastní rostlinné výroby</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-stone-700">Pravidelný veterinární dozor a vysoký hygienický standard</span>
</li>
</ul>
</div>
<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl reveal reveal-delay-200">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur p-4 rounded-xl border border-white/50 shadow-lg">
<p className="text-sm font-semibold text-stone-800">Garance původu</p>
<p className="text-xs text-stone-500">České maso na váš stůl.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-b border-stone-200" id="rostlinna-vyroba">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 reveal">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=1600&amp;q=80"/>
</div>
<div className="order-1 lg:order-2 reveal reveal-delay-200">
<div className="flex items-center gap-2 mb-6">
<span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Rostlinná výroba</span>
</div>
<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 tracking-tight">Síla vychází z půdy</h2>
<p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        Naše pole nejsou jen výrobní prostředek, jsou dědictví. Obhospodařujeme stovky hektarů půdy v okolí Jindřichova Hradce. Pěstujeme plodiny, které primárně slouží k zajištění soběstačnosti naší živočišné výroby.
                    </p>
<div className="grid grid-cols-2 gap-6 mt-8">
<div className="glass-card-hover bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
<svg aria-hidden="true" data-icon="lucide:sprout" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-bold text-stone-900">Obiloviny</h4>
<p className="text-xs text-stone-500 mt-1">Pšenice, ječmen, oves pro krmiva.</p>
</div>
<div className="glass-card-hover bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
<svg aria-hidden="true" data-icon="lucide:sun" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
<h4 className="font-bold text-stone-900">Řepka</h4>
<p className="text-xs text-stone-500 mt-1">Klíčová tržní plodina regionu.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="chov-drubeze">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<span className="bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Chov drůbeže</span>
<h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-6">Čerstvost bez kompromisů</h2>
<p className="text-stone-600 text-lg">
                    Dodáváme drůbež a vejce jak velkým zpracovatelům, tak koncovým zákazníkům. Známe původ každého kusu.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="hover:shadow-lg transition-all duration-300 reveal reveal-delay-100 group bg-stone-50 bg-cover bg-center border-stone-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 bg-[url(default)]">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-800 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:drumstick" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23a4.5 3.43 135 0 0-6.23 6.23"></path><path d="m8.29 12.71l-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"></path></g></svg>
</div>
<h3 className="text-xl font-bold text-stone-900 mb-3">Výkrm brojlerů</h3>
<p className="text-stone-600 leading-relaxed text-sm">
                        Produkce kuřecího masa v halách s kontrolovaným mikroklimatem pro optimální přírůstky a zdraví.
                    </p>
</div>
<div className="hover:shadow-lg transition-all duration-300 reveal reveal-delay-200 group bg-stone-50 border-stone-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="" data-icon="lucide:egg" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-bold text-stone-900 mb-3">Produkce vajec</h3>
<p className="text-stone-600 leading-relaxed text-sm">
                        Chov nosnic v obohacených klecích splňující nejpřísnější normy EU. Čerstvá vejce přímo z farmy.
                    </p>
</div>
<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-all duration-300 reveal reveal-delay-300 group">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<h3 className="text-xl font-bold text-stone-900 mb-3">Prodej ze dvora</h3>
<p className="text-stone-600 leading-relaxed text-sm">
                        Pro drobnochovatele nabízíme sezónní prodej kuřic, krůt a další zástavové drůbeže.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f1712] relative overflow-hidden">
<div className="absolute inset-0 opacity-20">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#grad)"></path>
</svg>
<defs>
<lineargradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#22c55e', stopOpacity: '1'}}>
<stop offset="100%" style={{stopColor: '#0f1712', stopOpacity: '0'}}>
</stop></stop></lineargradient>
</defs>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="md:text-4xl text-3xl font-bold text-white tracking-tight mb-6" style={{}}>Krajina je náš domov, ne jen zdroj zisku.</h2>
<p className="text-stone-400 text-lg mb-8 leading-relaxed">
                        Cirkulární ekonomika pro nás není trend, ale nutnost. Hnůj ze živočišné výroby vracíme do půdy jako nejcennější hnojivo. Tím zvyšujeme podíl organické hmoty, zadržujeme vodu v krajině a předcházíme erozi.
                    </p>
<div className="flex flex-col sm:flex-row gap-6">
<div className="flex items-center gap-4">
<div className="p-3 bg-green-900/50 rounded-lg border border-green-800 text-green-400">
<svg aria-hidden="true" data-icon="lucide:recycle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.78 1.78 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16l-3 3l3 3m-5.707-8.404L7.196 9.5L3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633l4.096 1.098l1.097-4.096"></path></g></svg>
</div>
<div className="text-stone-300 text-sm font-medium">Uzavřený cyklus živin</div>
</div>
<div className="flex items-center gap-4">
<div className="p-3 bg-green-900/50 rounded-lg border border-green-800 text-green-400">
<svg aria-hidden="true" data-icon="lucide:droplets" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
</div>
<div className="text-stone-300 text-sm font-medium">Ochrana spodních vod</div>
</div>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 reveal reveal-delay-200">
<img className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-500 object-cover" src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f1712] to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-100 border-b border-stone-200" id="kariera">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
<h2 className="text-3xl font-bold text-stone-900 mb-4">Hledáte stabilní práci v regionu?</h2>
<p className="text-stone-600 mb-8 max-w-2xl mx-auto">
                Vážíme si poctivé práce. Nabízíme zázemí silné společnosti, férové jednání a jistotu výplaty. Přidejte se k týmu BOHEMIA VITAE.
            </p>
<div className="flex justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-green-900 hover:bg-green-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-1" href="#kontakt">
                    Kontaktovat personální oddělení
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 space-y-8 reveal">
<div className="">
<h2 className="text-3xl font-bold text-stone-900 mb-6">Kontaktujte nás</h2>
<p className="text-stone-500">
                            Máte dotaz k prodeji drůbeže, nabídce práce nebo obchodní spolupráci? Jsme tu pro vás.
                        </p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-stone-100 rounded-lg text-stone-600">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div className="">
<h4 className="font-bold text-stone-900">Sídlo společnosti</h4>
<p className="text-stone-600">Jarošov nad Nežárkou 239</p>
<p className="text-stone-600">378 41 Jarošov nad Nežárkou</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-stone-100 rounded-lg text-stone-600">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="font-bold text-stone-900">Telefon</h4>
<a className="text-lg text-green-800 font-semibold hover:underline" href="tel:+420384324780">+420 384 324 780</a>
<p className="text-xs text-stone-500 mt-1">Po-Pá: 7:00 - 15:30</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-stone-100 rounded-lg text-stone-600">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div className="">
<h4 className="font-bold text-stone-900">Email</h4>
<a className="text-lg text-green-800 font-semibold hover:underline" href="mailto:info@bohemiavitae.cz">info@bohemiavitae.cz</a>
</div>
</div>
</div>
<div className="pt-6 border-t border-stone-100">
<div className="grid grid-cols-2 gap-4 text-sm text-stone-500">
<div>
<span className="block font-medium text-stone-900">IČ:</span> 48201987
                            </div>
<div className="">
<span className="block font-medium text-stone-900">DIČ:</span> CZ48201987
                            </div>
<div className="col-span-2 text-xs text-stone-400">
                                Společnost je zapsána v obchodním rejstříku vedeném Krajským soudem v Českých Budějovicích, oddíl B, vložka 580.
                            </div>
</div>
</div>
</div>

<div className="lg:col-span-3 h-[500px] bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-inner reveal reveal-delay-200 relative group">

<iframe allowfullscreen="" className="group-hover:grayscale-0 transition-all duration-700 ease-in-out grayscale" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.564531846175!2d15.06602977759496!3d49.18663807663469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d3e5a5a5a5a5b%3A0x4296ec2367756770!2sJaro%C5%A1ov%20nad%20Ne%C5%BE%C3%A1rkou%20239%2C%20378%2041%20Jaro%C5%A1ov%20nad%20Ne%C5%BE%C3%A1rkou!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz" style={{border: '0'}} width="100%">
</iframe>

<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md border border-stone-200 pointer-events-none">
<p className="text-xs font-bold text-stone-800">Hlavní sídlo</p>
<p className="text-[10px] text-stone-500">Jarošov n. Nežárkou 239</p>
</div>
</div>
</div>
</div>
</section>

<footer className="text-stone-400 bg-stone-900 border-stone-800 border-t pt-16 pb-16">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-white text-xl font-bold tracking-tight uppercase block mb-6">Bohemia Vitae</span>
<p className="text-sm leading-relaxed text-stone-500 mb-6">
                        Zemědělství s tradicí a respektem. <br/>
                        Stabilní partner pro region Jižní Čechy.
                    </p>
<div className="flex gap-4 gap-x-4 gap-y-4">
<a className="hover:text-white transition-colors text-stone-500" href="/#">
<svg aria-hidden="true" className="w-[20px] h-[20px]" data-icon="lucide:facebook" data-icon-replaced="true" data-width="20" height="20" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="hover:text-white transition-colors text-stone-500" href="/#">
<svg aria-hidden="true" className="w-[20px] h-[20px]" data-icon="lucide:linkedin" data-icon-replaced="true" data-width="20" height="20" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle className="" cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-white font-semibold mb-6">Navigace</h4>
<ul className="space-y-3 text-sm">
<li className=""><a className="hover:text-green-400 transition-colors" href="#o-spolecnosti">O společnosti</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#cinnost">Naše činnost</a></li>
<li className=""><a className="hover:text-green-400 transition-colors" href="#kariera">Kariéra</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-6">Produkce</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-green-400 transition-colors" href="#chov-prasat">Chov prasat</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#rostlinna-vyroba">Rostlinná výroba</a></li>
<li className=""><a className="hover:text-green-400 transition-colors" href="#chov-drubeze">Chov drůbeže</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-6">Rychlý kontakt</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2 text-stone-300">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 
                            +420 384 324 780
                        </li>
<li className="flex items-center gap-2 text-stone-300">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg> 
                            info@bohemiavitae.cz
                        </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row text-xs text-stone-600 border-stone-800 border-t pt-8 items-center justify-between">
<p className="">© 2026 BOHEMIA VITAE Jindřichův Hradec, a.s. Všechna práva vyhrazena. Design BLEY.cz</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-300 transition-colors" href="#">Ochrana osobních údajů</a>
<a className="hover:text-stone-300 transition-colors" href="#">Cookies</a>
<a className="hover:text-stone-300 transition-colors" href="#">Právní doložka</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
