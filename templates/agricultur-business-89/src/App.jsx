import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
'agri-green': {
50: '#f2fcf5',
100: '#e1f8e8',
200: '#c3ecd1',
300: '#94dab0',
400: '#5dba8a',
500: '#389e6b',
600: '#287f54',
700: '#226545',
800: '#1e513a',
900: '#194331',
950: '#0d251c',
},
'earth': {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
},
'harvest': {
50: '#fffbeb',
100: '#fef3c7',
600: '#d97706',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



{
"@context": "https://schema.org",
"@type": "AgriculturalBusiness",
"name": "BOHEMIA VITAE Jindřichův Hradec, a.s.",
"address": {
"@type": "PostalAddress",
"streetAddress": "Jarošov nad Nežárkou 239",
"addressLocality": "Jarošov nad Nežárkou",
"postalCode": "378 41",
"addressCountry": "CZ"
},
"telephone": "+420384324780",
"email": "info@bohemiavitae.cz",
"url": "https://www.bohemiavitae.cz",
"foundingDate": "1993",
"legalName": "BOHEMIA VITAE Jindřichův Hradec, a.s."
}



        // Gallery Expand Logic
        const expandBtn = document.getElementById('gallery-expand-btn');
        const galleryGrid = document.getElementById('gallery-grid');
        const galleryOverlay = document.getElementById('gallery-overlay');
        let isExpanded = false;

        expandBtn.addEventListener('click', () => {
            if (!isExpanded) {
                galleryGrid.style.height = 'auto'; // Let it flow naturally
                galleryOverlay.style.opacity = '0';
                expandBtn.innerText = 'Zobrazit méně';
                isExpanded = true;
            } else {
                galleryGrid.style.height = '600px';
                galleryOverlay.style.opacity = '1';
                expandBtn.innerText = 'Zobrazit celou galerii';
                // Scroll back to gallery top if user is deep down
                galleryGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                isExpanded = false;
            }
        });

        // Intersection Observer for Scroll Reveals
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('h-20', 'h-16');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.replace('h-16', 'h-20');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-agri-green-900 text-white flex items-center justify-center rounded-lg shadow-sm group-hover:bg-agri-green-800 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:wheat" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-earth-900 uppercase leading-none">Bohemia Vitae</span>
<span className="text-[10px] text-earth-500 tracking-wider font-medium uppercase mt-1">Jindřichův Hradec, a.s.</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-earth-600 hover:text-agri-green-800 transition-colors" href="#o-nas">O společnosti</a>
<a className="text-sm font-medium text-earth-600 hover:text-agri-green-800 transition-colors" href="#sektory">Výroba</a>
<a className="text-sm font-medium text-earth-600 hover:text-agri-green-800 transition-colors" href="#provozy">Provozy</a>
<a className="bg-earth-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-agri-green-700 transition-colors shadow-sm" href="#kontakt">
                    Kontaktovat
                </a>
</div>

<button className="md:hidden text-earth-900 p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-earth-200 p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-medium text-earth-800" href="#o-nas">O společnosti</a>
<a className="text-lg font-medium text-earth-800" href="#sektory">Výroba</a>
<a className="text-lg font-medium text-earth-800" href="#provozy">Provozy</a>
<a className="text-lg font-medium text-agri-green-700" href="#kontakt">Kontaktovat</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Česká pole a farma" className="w-full h-full object-cover object-center scale-105 animate-pulse-slow opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{animationDuration: '20s', animationDirection: 'alternate'}}/>

<div className="absolute inset-0 bg-gradient-to-r from-earth-900/90 via-earth-900/60 to-earth-900/30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-transparent to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agri-green-500/20 border border-agri-green-400/30 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-agri-green-400 animate-pulse"></span>
<span className="text-xs font-medium text-agri-green-100 tracking-wide uppercase">Tradice od roku 1993</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Stabilita a kvalita <br/> v srdci <span className="text-agri-green-300">jižních Čech</span>.
                </h1>
<p className="text-lg md:text-xl text-earth-200 max-w-2xl font-light leading-relaxed mb-10">
                    BOHEMIA VITAE Jindřichův Hradec, a.s. je významným regionálním producentem v oblasti živočišné a rostlinné výroby. Přinášíme na váš stůl poctivé produkty s respektem k přírodě.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-agri-green-600 hover:bg-agri-green-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-agri-green-900/50 hover:shadow-agri-green-700/50" href="#kontakt">
                        Kontaktovat společnost
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-lg transition-all duration-300" href="#o-nas">
                        Zjistit více
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<span className="iconify" data-icon="lucide:chevron-down" data-width="32" style={{strokeWidth: '1'}}></span>
</div>
</header>

<section className="py-24 bg-white relative overflow-hidden" id="o-nas">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="reveal">
<h2 className="text-xs font-bold tracking-widest text-agri-green-700 uppercase mb-3">O nás</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-earth-900 tracking-tight mb-8">
                        Více než 30 let zkušeností v moderním zemědělství.
                    </h3>
<div className="prose prose-earth text-earth-600 leading-relaxed mb-8">
<p className="mb-4">
                            Jsme stabilní akciová společnost se sídlem v Jarošově nad Nežárkou, navazující na dlouholetou tradici zemědělské prvovýroby v regionu Jindřichohradecka. Od svého založení v roce 1993 systematicky rozvíjíme naše provozy s důrazem na kvalitu produkce a welfare zvířat.
                        </p>
<p>
                            Naším hlavním cílem je udržitelná produkce potravin a surovin. Kombinujeme osvědčené zemědělské postupy s moderními technologiemi, abychom zajistili maximální efektivitu a zároveň šetrnost k životnímu prostředí v jižních Čechách.
                        </p>
</div>

<div className="bg-earth-50 border border-earth-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-agri-green-700" data-icon="lucide:shield-check" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-semibold text-earth-900">Korporátní údaje</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm">
<div>
<span className="block text-earth-400 text-xs uppercase tracking-wider mb-0.5">Základní kapitál</span>
<span className="font-medium text-earth-800">106 593 000 Kč</span>
</div>
<div>
<span className="block text-earth-400 text-xs uppercase tracking-wider mb-0.5">Právní forma</span>
<span className="font-medium text-earth-800">Akciová společnost</span>
</div>
<div>
<span className="block text-earth-400 text-xs uppercase tracking-wider mb-0.5">IČ</span>
<span className="font-medium text-earth-800">48201987</span>
</div>
<div>
<span className="block text-earth-400 text-xs uppercase tracking-wider mb-0.5">DIČ</span>
<span className="font-medium text-earth-800">CZ48201987</span>
</div>
</div>
</div>
</div>

<div className="relative reveal delay-200">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-earth-200 relative z-10">
<img alt="Pohled na farmu" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute -bottom-6 -left-6 w-2/3 aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-white z-20">
<img alt="Obilná pole" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-topography opacity-50 z-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-earth-50 border-t border-earth-200/60" id="sektory">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-xs font-bold tracking-widest text-agri-green-700 uppercase mb-3">Naše Produkce</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-earth-900 tracking-tight">
                    Komplexní zemědělská výroba
                </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl p-8 shadow-sm border border-earth-100 hover:shadow-lg hover:border-agri-green-200 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 bg-harvest-50 text-harvest-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-agri-green-50 group-hover:text-agri-green-600 transition-colors">
<span className="iconify" data-icon="lucide:bird" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="text-xl font-semibold text-earth-900 mb-3">Chov drůbeže</h4>
<p className="text-sm text-earth-500 leading-relaxed mb-4">
                        Specializujeme se na výkrm brojlerů, chov kuřic a produkci konzumních vajec. Zajišťujeme vysoký standard hygieny a zdraví chovu.
                    </p>
<ul className="text-xs text-earth-400 space-y-2">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-agri-green-500 rounded-full"></span>Brojleři a kuřata</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-agri-green-500 rounded-full"></span>Produkce vajec</li>
</ul>
</div>

<div className="group bg-white rounded-xl p-8 shadow-sm border border-earth-100 hover:shadow-lg hover:border-agri-green-200 transition-all duration-300 hover:-translate-y-1 reveal delay-100">
<div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-agri-green-50 group-hover:text-agri-green-600 transition-colors">
<span className="iconify" data-icon="lucide:piggy-bank" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="text-xl font-semibold text-earth-900 mb-3">Chov prasat</h4>
<p className="text-sm text-earth-500 leading-relaxed mb-4">
                        Vlastní odchov selat a následný výkrm. Zaměřujeme se na produkci kvalitního vepřového masa s jasným původem v regionu.
                    </p>
<ul className="text-xs text-earth-400 space-y-2">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-agri-green-500 rounded-full"></span>Odchov selat</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-agri-green-500 rounded-full"></span>Výkrm prasat</li>
</ul>
</div>

<div className="group bg-white rounded-xl p-8 shadow-sm border border-earth-100 hover:shadow-lg hover:border-agri-green-200 transition-all duration-300 hover:-translate-y-1 reveal delay-200">
<div className="w-12 h-12 bg-stone-100 text-stone-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-agri-green-50 group-hover:text-agri-green-600 transition-colors">
<span className="iconify" data-icon="lucide:beef" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="text-xl font-semibold text-earth-900 mb-3">Chov skotu</h4>
<p className="text-sm text-earth-500 leading-relaxed mb-4">
                        Chov skotu a jatečných zvířat tvoří důležitou součást naší živočišné výroby, využívající vazbu na vlastní rostlinnou produkci.
                    </p>
<ul className="text-xs text-earth-400 space-y-2">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-agri-green-500 rounded-full"></span>Jatečná zvířata</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-agri-green-500 rounded-full"></span>Masná produkce</li>
</ul>
</div>

<div className="group bg-white rounded-xl p-8 shadow-sm border border-earth-100 hover:shadow-lg hover:border-agri-green-200 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-agri-green-50 group-hover:text-agri-green-600 transition-colors">
<span className="iconify" data-icon="lucide:sprout" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="text-xl font-semibold text-earth-900 mb-3">Rostlinná výroba</h4>
<p className="text-sm text-earth-500 leading-relaxed mb-4">
                        Doplňková rostlinná výroba slouží primárně k zajištění krmivové základny pro živočišnou výrobu, pěstování komodit a obilovin.
                    </p>
</div>

<div className="group bg-white rounded-xl p-8 shadow-sm border border-earth-100 hover:shadow-lg hover:border-agri-green-200 transition-all duration-300 hover:-translate-y-1 reveal delay-100">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-agri-green-50 group-hover:text-agri-green-600 transition-colors">
<span className="iconify" data-icon="lucide:tractor" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="text-xl font-semibold text-earth-900 mb-3">Služby</h4>
<p className="text-sm text-earth-500 leading-relaxed mb-4">
                        Poskytujeme podpůrné služby pro živočišnou i rostlinnou výrobu, včetně technického zázemí a zpracování.
                    </p>
</div>

<div className="group bg-white rounded-xl p-8 shadow-sm border border-earth-100 hover:shadow-lg hover:border-agri-green-200 transition-all duration-300 hover:-translate-y-1 reveal delay-200">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-agri-green-50 group-hover:text-agri-green-600 transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="text-xl font-semibold text-earth-900 mb-3">Obchod a distribuce</h4>
<p className="text-sm text-earth-500 leading-relaxed mb-4">
                        Zajišťujeme prodej vlastní produkce velkoodběratelům i v rámci regionálních sítí s důrazem na čerstvost.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-earth-900 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-topography"></div>
<div className="absolute inset-0 bg-gradient-to-r from-earth-900 via-transparent to-earth-900 z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 text-agri-green-400 mb-4">
<span className="iconify" data-icon="lucide:map-pin" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-bold uppercase tracking-widest">Regionální Působnost</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    Srdce našeho podnikání bije na Jindřichohradecku
                </h3>
<p className="text-earth-300 leading-relaxed mb-8">
                    Naše farmy, pole a provozy jsou strategicky rozmístěny v okolí Jarošova nad Nežárkou. Tato koncentrace nám umožňuje efektivní logistiku, dohled nad kvalitou a minimalizaci uhlíkové stopy při přepravě. Jsme hrdým zaměstnavatelem v regionu.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-agri-green-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:home" data-width="20"></span>
</div>
<div>
<span className="block text-white font-medium">Sídlo společnosti</span>
<span className="text-sm text-earth-400">Jarošov nad Nežárkou 239</span>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-earth-700 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:warehouse" data-width="20"></span>
</div>
<div>
<span className="block text-white font-medium">Síť provozoven</span>
<span className="text-sm text-earth-400">Drůbežárny, vepříny a hospodářské objekty v okruhu</span>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] w-full bg-earth-800 rounded-2xl border border-earth-700 p-8 shadow-2xl reveal delay-200 overflow-hidden group">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
<div className="relative">
<span className="absolute inline-flex h-full w-full rounded-full bg-agri-green-400 opacity-75 animate-ping"></span>
<div className="relative inline-flex rounded-full h-4 w-4 bg-agri-green-500 border-2 border-earth-800"></div>
</div>
<div className="mt-2 bg-earth-900/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-white border border-earth-600">Jarošov n. Než.</div>
</div>

<div className="absolute top-1/3 left-1/4 flex flex-col items-center z-10 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="w-3 h-3 rounded-full bg-earth-400 border border-earth-900"></div>
<span className="text-[10px] text-earth-400 mt-1">Chov drůbeže</span>
</div>
<div className="absolute bottom-1/3 right-1/4 flex flex-col items-center z-10 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="w-3 h-3 rounded-full bg-earth-400 border border-earth-900"></div>
<span className="text-[10px] text-earth-400 mt-1">Výkrm prasat</span>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-earth-600/30" style={{strokeWidth: '1.5', strokeDasharray: '4'}}>
<line x1="50%" x2="25%" y1="50%" y2="33%"></line>
<line x1="50%" x2="75%" y1="50%" y2="66%"></line>
<circle cx="50%" cy="50%" fill="none" r="120" stroke="rgba(255,255,255,0.05)"></circle>
</svg>
</div>
</div>
</section>

<section className="py-24 bg-white" id="provozy">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
<div>
<h2 className="text-xs font-bold tracking-widest text-agri-green-700 uppercase mb-3">Galerie</h2>
<h3 className="text-3xl font-semibold text-earth-900 tracking-tight">Naše farmy a technika</h3>
</div>

<button className="text-sm font-medium text-earth-900 border-b border-earth-300 hover:border-agri-green-600 hover:text-agri-green-700 transition-all pb-1" id="gallery-expand-btn">
                    Zobrazit celou galerii
                </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[600px] overflow-hidden relative transition-all duration-700 ease-in-out" id="gallery-grid">

<div className="col-span-2 row-span-2 rounded-xl overflow-hidden bg-earth-100 group">
<img alt="Farma drůbež" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="rounded-xl overflow-hidden bg-earth-100 group">
<img alt="Technika" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="rounded-xl overflow-hidden bg-earth-100 group">
<img alt="Zemědělství" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="rounded-xl overflow-hidden bg-earth-100 group">
<img alt="Sklizeň" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="rounded-xl overflow-hidden bg-earth-100 group">
<img alt="Pole" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="col-span-2 rounded-xl overflow-hidden bg-earth-100 group">
<img alt="Krajina" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-300" id="gallery-overlay"></div>
</div>
</div>
</section>

<section className="py-20 bg-agri-green-50 border-y border-agri-green-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="flex flex-col items-center text-center reveal">
<div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-agri-green-700 mb-4">
<span className="iconify" data-icon="lucide:clock" data-width="24"></span>
</div>
<h4 className="font-semibold text-earth-900 mb-2">Tradice 30+ let</h4>
<p className="text-xs text-earth-500">Stabilita od roku 1993</p>
</div>
<div className="flex flex-col items-center text-center reveal delay-100">
<div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-agri-green-700 mb-4">
<span className="iconify" data-icon="lucide:award" data-width="24"></span>
</div>
<h4 className="font-semibold text-earth-900 mb-2">Kvalita a kontrola</h4>
<p className="text-xs text-earth-500">Přísné normy produkce</p>
</div>
<div className="flex flex-col items-center text-center reveal delay-200">
<div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-agri-green-700 mb-4">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<h4 className="font-semibold text-earth-900 mb-2">Regionální rozvoj</h4>
<p className="text-xs text-earth-500">Zaměstnávání v regionu</p>
</div>
<div className="flex flex-col items-center text-center reveal delay-300">
<div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-agri-green-700 mb-4">
<span className="iconify" data-icon="lucide:leaf" data-width="24"></span>
</div>
<h4 className="font-semibold text-earth-900 mb-2">Komplexnost</h4>
<p className="text-xs text-earth-500">Živočišná i rostlinná výroba</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-xs font-bold tracking-widest text-agri-green-700 uppercase mb-3">Kontakt</h2>
<h3 className="text-3xl font-semibold text-earth-900 tracking-tight mb-8">
                        Jsme tu pro vás
                    </h3>
<div className="space-y-8">
<div className="flex gap-4">
<span className="iconify text-earth-400 mt-1" data-icon="lucide:map-pin" data-width="20"></span>
<div>
<p className="text-sm font-semibold text-earth-900">Adresa sídla</p>
<p className="text-earth-600">Jarošov nad Nežárkou 239<br/>378 41</p>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-earth-400 mt-1" data-icon="lucide:phone" data-width="20"></span>
<div>
<p className="text-sm font-semibold text-earth-900">Telefonní spojení</p>
<a className="block text-earth-600 hover:text-agri-green-700" href="tel:+420384324780">+420 384 324 780</a>
<a className="block text-earth-600 hover:text-agri-green-700" href="tel:+420727878406">+420 727 878 406</a>
<a className="block text-earth-600 hover:text-agri-green-700" href="tel:+420727878403">+420 727 878 403</a>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-earth-400 mt-1" data-icon="lucide:mail" data-width="20"></span>
<div>
<p className="text-sm font-semibold text-earth-900">E-mail</p>
<a className="block text-earth-600 hover:text-agri-green-700" href="mailto:info@bohemiavitae.cz">info@bohemiavitae.cz</a>
</div>
</div>
</div>

<div className="mt-8 h-64 w-full rounded-xl overflow-hidden border border-earth-200 shadow-sm">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.302302345678!2d15.068!3d49.192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDExJzMxLjIiTiAxNcKwMDQnMDQuOCJF!5e0!3m2!1scs!2scz!4v1600000000000!5m2!1scs!2scz" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>

<div className="bg-earth-50 rounded-2xl p-8 lg:p-10 shadow-sm border border-earth-100 reveal delay-100">
<h4 className="text-xl font-semibold text-earth-900 mb-6">Napište nám</h4>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-earth-700 mb-1" htmlFor="name">Jméno a příjmení</label>
<input className="w-full rounded-lg border-earth-200 bg-white py-2.5 px-3 text-sm text-earth-900 focus:border-agri-green-500 focus:ring-agri-green-500 focus:outline-none shadow-sm transition-shadow" id="name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-earth-700 mb-1" htmlFor="email">E-mail</label>
<input className="w-full rounded-lg border-earth-200 bg-white py-2.5 px-3 text-sm text-earth-900 focus:border-agri-green-500 focus:ring-agri-green-500 focus:outline-none shadow-sm transition-shadow" id="email" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-earth-700 mb-1" htmlFor="phone">Telefon</label>
<input className="w-full rounded-lg border-earth-200 bg-white py-2.5 px-3 text-sm text-earth-900 focus:border-agri-green-500 focus:ring-agri-green-500 focus:outline-none shadow-sm transition-shadow" id="phone" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-earth-700 mb-1" htmlFor="message">Zpráva</label>
<textarea className="w-full rounded-lg border-earth-200 bg-white py-2.5 px-3 text-sm text-earth-900 focus:border-agri-green-500 focus:ring-agri-green-500 focus:outline-none shadow-sm transition-shadow resize-none" id="message" rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<div className="flex items-center h-5">
<input className="h-4 w-4 rounded border-earth-300 text-agri-green-600 focus:ring-agri-green-500" id="gdpr" type="checkbox"/>
</div>
<div className="text-xs text-earth-500">
<label htmlFor="gdpr">Souhlasím se zpracováním osobních údajů pro účely vyřízení poptávky.</label>
</div>
</div>
<button className="w-full py-3 px-4 bg-agri-green-700 hover:bg-agri-green-800 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300" type="submit">
                            Odeslat zprávu
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-earth-950 text-earth-400 py-16 border-t border-earth-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<div className="flex items-center gap-2 text-white mb-6">
<span className="iconify" data-icon="lucide:wheat" data-width="24"></span>
<span className="font-bold tracking-tight text-lg">BOHEMIA VITAE</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                        Stabilní regionální zemědělský podnik s tradicí a odpovědným přístupem k produkci potravin a péči o krajinu.
                    </p>
<a className="text-xs text-agri-green-500 hover:text-agri-green-400 transition-colors" href="https://www.bohemiavitae.cz" rel="noopener noreferrer" target="_blank">
                        Původní web →
                    </a>
</div>
<div>
<h4 className="text-white font-medium mb-4">Navigace</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#o-nas">O společnosti</a></li>
<li><a className="hover:text-white transition-colors" href="#sektory">Výrobní sektory</a></li>
<li><a className="hover:text-white transition-colors" href="#provozy">Galerie</a></li>
<li><a className="hover:text-white transition-colors" href="#kontakt">Kontakty</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Právní informace</h4>
<ul className="space-y-3 text-sm">
<li>IČ: 48201987</li>
<li>DIČ: CZ48201987</li>
<li>Založeno: 1993</li>
<li><a className="hover:text-white transition-colors" href="#">Ochrana osobních údajů</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Kontakt</h4>
<ul className="space-y-3 text-sm">
<li>Jarošov nad Nežárkou 239</li>
<li>378 41</li>
<li><a className="hover:text-white transition-colors" href="mailto:info@bohemiavitae.cz">info@bohemiavitae.cz</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-earth-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 BOHEMIA VITAE Jindřichův Hradec, a.s. Všechna práva vyhrazena.</p>
<div className="flex gap-4">
<span className="opacity-50">Design Concept</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
