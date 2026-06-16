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
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
800: '#292524',
900: '#1c1917',
},
accent: {
500: '#92b644', // Brand color adapted
900: '#3f4f1a',
}
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
widest: '0.25em',
},
}
}
}



        // Intersection Observer for Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-text');
            elements.forEach(el => observer.observe(el));

            // Parallax Effect
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                const parallaxBg = document.querySelector('.parallax-bg img');
                if (parallaxBg) {
                    parallaxBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
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

<nav className="fixed z-40 px-6 py-6 md:px-12 md:py-8 flex w-full top-0 items-center justify-between mix-blend-difference text-stone-200 bg-stone-900/5 backdrop-blur-sm border-b border-white/10">
<div className="uppercase text-sm font-medium tracking-widest">
<a href="#">Fyziokinesis</a>
</div>
<div className="hidden md:flex gap-8 text-xs font-light tracking-wide">
<a className="hover:opacity-70 transition-opacity" href="#about">O mně</a>
<a className="hover:opacity-70 transition-opacity" href="#services">Služby</a>
<a className="hover:opacity-70 transition-opacity" href="#education">Kurzy</a>
<a className="hover:opacity-70 transition-opacity" href="#pricing">Ceník</a>
<a className="hover:opacity-70 transition-opacity" href="#contact">Kontakt</a>
</div>
<button className="md:hidden text-stone-200">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="hidden md:block text-xs font-light tracking-wide opacity-80">
            Mgr. Zuzana Krchová
        </div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-stone-900">

<div className="absolute inset-0 z-0 parallax-bg">
<img alt="Fyziokinesis Hero" className="w-full h-full object-cover opacity-60 scale-105" src="https://www.fyziokinesis.cz/wp-content/uploads/2022/05/BKG-jedem.jpg" style={{transformOrigin: 'center center'}}/>
</div>

<div className="z-10 bg-gradient-to-b from-black/60 via-black/40 to-stone-900/90 absolute inset-0"></div>
<div className="z-20 flex flex-col text-center max-w-4xl px-6 relative items-center">
<span className="text-stone-300 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 reveal-text">Nestátní zdravotnické zařízení</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] reveal-text font-normal text-stone-50 tracking-tighter font-serif mb-8">
                Pohyb je <span className="font-light italic opacity-90 text-stone-200">Lék</span>.
            </h1>
<p className="md:text-base leading-relaxed reveal-text text-sm font-light text-stone-300 tracking-wide max-w-lg mb-12 visible">
                Komplexní péče v oblasti léčebné rehabilitace. Specializace na sportovní fyzioterapii, běžce, gynekologickou fyzioterapii a psychosomatiku.
            </p>
<a className="group reveal-text visible" href="#contact">
<button className="text-white border border-white/20 px-8 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all duration-500 ease-out backdrop-blur-sm">
                    [ Objednat se ]
                </button>
</a>
</div>
</header>

<section className="py-24 px-6 md:px-12 bg-stone-50">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 tracking-tight reveal-text">
                Neléčíme jen symptomy. <br/><span className="text-stone-500 italic">Hledáme příčinu.</span>
</h2>
<div className="w-12 h-[1px] bg-stone-300 mx-auto mb-8 reveal-text"></div>
<p className="text-stone-600 text-sm leading-7 font-light reveal-text">
                K pacientovi přistupuji komplexně, volím vždy individuální přístup a neopomíjím psychosomatickou složku obtíží. Po důkladném vyšetření cílím terapii na příčinu Vašich obtíží tak, aby byla léčba trvalá a bolesti se nevracely. Preferuji aktivní přístup k terapii a usiluji o to, aby se klient naučil vnímat své tělo.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">

<div className="p-8 border border-stone-200 hover:border-stone-400 transition-colors duration-500 reveal-text">
<iconify-icon className="text-stone-800 mb-6" icon="solar:running-linear" width="32"></iconify-icon>
<h3 className="font-serif text-xl mb-3 text-stone-900">Sportovní Fyzioterapie</h3>
<p className="text-xs text-stone-500 leading-6 font-light">
                    Specializace na běžce a sportovní zranění. Mým cílem je minimalizovat vznik funkčních poruch a zabránit strukturálnímu poškození.
                </p>
</div>

<div className="p-8 border border-stone-200 hover:border-stone-400 transition-colors duration-500 reveal-text">
<iconify-icon className="text-stone-800 mb-6" icon="solar:women-linear" width="32"></iconify-icon>
<h3 className="font-serif text-xl mb-3 text-stone-900">Ženy &amp; Gynekologie</h3>
<p className="text-xs text-stone-500 leading-6 font-light">
                    Řešení obtíží spojených s menstruačním cyklem, funkční sterilitou, těhotenstvím, po porodu a dysfunkcí pánevního dna.
                </p>
</div>

<div className="p-8 border border-stone-200 hover:border-stone-400 transition-colors duration-500 reveal-text">
<iconify-icon className="text-stone-800 mb-6" icon="solar:mind-linear" width="32"></iconify-icon>
<h3 className="font-serif text-xl mb-3 text-stone-900">Psychosomatika</h3>
<p className="text-xs text-stone-500 leading-6 font-light">
                    Hromadění negativních emocí zatěžuje tělo. Pracujeme na optimalizaci svalového napětí a uvolňování emocí.
                </p>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-t border-stone-200" id="about">
<div className="relative h-[60vh] md:h-auto overflow-hidden bg-stone-200 order-1">
<img alt="Mgr. Zuzana Krchová" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out" src="https://www.fyziokinesis.cz/wp-content/uploads/2024/02/20230612_143551-1-scaled.jpg"/>
</div>
<div className="bg-white flex flex-col justify-center p-12 md:p-20 lg:p-24 order-2">
<div className="max-w-lg">
<span className="text-[10px] tracking-widest uppercase text-stone-400 mb-4 block reveal-text">O mně</span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8 tracking-tight reveal-text">
                    Mgr. Zuzana Krchová
                </h2>
<div className="text-stone-600 text-sm leading-7 font-light space-y-4 reveal-text">
<p>
                        Bakalářské i magisterské studium v oboru fyzioterapie jsem absolvovala na 2. Lékařské fakultě UK pod vedením Prof. Pavla Koláře, PhD. Během studia jsem absolvovala stáže v Rakousku se specializací na ortopedické a neurologické pacienty.
                    </p>
<p>
                        Pracovala jsem v renomovaném rehabilitačním zařízení Bebalanced a nyní provozuji vlastní praxi Fyziokinesis. Přispívám odbornými články do časopisů a sama aktivně sportuji, což mi umožňuje rozumět obtížím z pohledu zdravotníka i sportovce.
                    </p>
</div>
<div className="mt-10 reveal-text">
<h4 className="font-serif text-lg mb-4 text-stone-900">Metody terapie</h4>
<ul className="text-xs text-stone-500 grid grid-cols-2 gap-2 font-light">
<li>• DNS dle Koláře</li>
<li>• Vojtova reflexní lokomoce</li>
<li>• Techniky měkkých tkání</li>
<li>• Kinesiotejping</li>
<li>• Fasciální manipulace</li>
<li>• Feldenkraisova metoda</li>
<li>• Sensomotorická stimulace</li>
<li>• Reiki &amp; prvky šamanismu</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-stone-100" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-300 pb-6 reveal-text">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">Specializované Služby</h2>
<span className="text-xs uppercase tracking-widest text-stone-500 mt-4 md:mt-0">Komplexní diagnostika a léčba</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">

<div className="reveal-text group">
<div className="mb-6 overflow-hidden aspect-[16/9]">
<img alt="Mobilizace" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" src="http://fyziokinesis.cz/wp-content/uploads/2022/06/mobilizace-1-1024x742.jpg"/>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Bolestivé stavy</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-4">
                        Řešení blokád páteře, výhřezů plotének, bolestí kloubů, hlavy či závratí. Často se jedná o řetězení poruch. Diagnostikujeme příčinu a volíme cílenou terapii, která řeší problém do hloubky, ne jen symptomaticky.
                    </p>
</div>

<div className="reveal-text group">
<div className="mb-6 overflow-hidden aspect-[16/9]">
<img alt="Analýza běhu" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" src="http://fyziokinesis.cz/wp-content/uploads/2022/06/analyza-beh-1024x683.jpg"/>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Analýza běhu</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-4">
                        Pro běžce s bolestmi nebo pro vylepšení techniky. Vyšetření na běžeckém páse s kamerou a videoanalýzou. Nacvičíme správnou techniku a ukážeme speciální cvičení pro odstranění obtíží.
                    </p>
</div>

<div className="reveal-text group">
<div className="mb-6 overflow-hidden aspect-[16/9]">
<img alt="Rehabilitace" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" src="http://fyziokinesis.cz/wp-content/uploads/2022/06/operace-urazy-768x1024.jpg"/>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Úrazy a operace</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-4">
                        Rehabilitace po operacích páteře, endoprotézách, plastikách vazů či zlomeninách. Zaměřujeme se na včasné a správné zatěžování, práci s jizvou a otokem, a návrat do sportu bez fixace vadných stereotypů.
                    </p>
</div>

<div className="reveal-text group">
<div className="mb-6 overflow-hidden aspect-[16/9]">
<img alt="Těhotenství" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" src="https://www.fyziokinesis.cz/wp-content/uploads/2022/11/tehotenstvi.jpg"/>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Těhotenství &amp; Pánevní dno</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-4">
                        Péče o nastávající maminky (bolesti zad, otoky) a poporodní rehabilitace (diastáza, jizvy). Řešení inkontinence, bolestivé menstruace a dysfunkcí pánevního dna pomocí biofeedbacku a komplexního cvičení.
                    </p>
</div>

<div className="reveal-text group">
<div className="mb-6 overflow-hidden aspect-[16/9]">
<img alt="Děti" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" src="https://www.fyziokinesis.cz/wp-content/uploads/2022/05/fyzio-dōti-fin-768x477-1.jpg"/>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Děti</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-4">
                        Léčba dětí od 4 let. Vadné držení těla, plochonoží, skolióza či dyspraxie. Terapie formou hry, aby byla pro dítě zábavná a efektivní.
                    </p>
</div>

<div className="reveal-text group">
<div className="mb-6 overflow-hidden aspect-[16/9]">
<img alt="Psychosomatika" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" src="https://www.fyziokinesis.cz/wp-content/uploads/2022/05/psychosomatika-fin.jpg"/>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Psychosomatika</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-4">
                        Fyzické projevy stresu a emocí. Práce na uvolnění emočního napětí ve svalech, řešení "nevysvětlitelných" bolestí a poruch.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white border-t border-stone-200" id="education">
<div className="max-w-4xl mx-auto">
<h2 className="font-serif text-3xl text-stone-900 mb-12 text-center tracking-tight reveal-text">Vzdělání a Certifikace</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-xs font-light text-stone-600 reveal-text">
<ul className="space-y-3 list-disc pl-4">
<li>Masér pro sportovní a rekondiční masáže (2011)</li>
<li>Kurz aplikace vývojové kineziologie dle Vojty (2013)</li>
<li>Motus Kinesiology Taping (2014)</li>
<li>Viscerovertebrální vztahy (2015)</li>
<li>Fyzioterapie u dysfunkce pánevního dna (2015)</li>
<li>Komplexní terapie triggerpointů (2015)</li>
<li>Feldenkrais (2016)</li>
<li>Škola pánevního dna, metoda 3x3 (2016)</li>
<li>Fascial Manipulation®/ Stecco® (2018)</li>
</ul>
<ul className="space-y-3 list-disc pl-4">
<li>Mobilizace v kontextu vývojové kineziologie (2019)</li>
<li>Hluboký stabilizační systém páteře (2019)</li>
<li>Hormonální joga (2020)</li>
<li>Thajská tradiční masáž (2021)</li>
<li>Fyzioterapie v těhotenství a po porodu (2022)</li>
<li>Reiki 1. a 2. stupeň (2022)</li>
<li>Medicínská cesta - šamanský výcvik (2023)</li>
<li>Flossing Rockflosss (2023)</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-stone-50 border-t border-stone-200" id="pricing">
<div className="max-w-3xl mx-auto text-center reveal-text">
<h2 className="font-serif text-3xl text-stone-900 mb-12 tracking-tight">Ceník Služeb</h2>
<div className="border border-stone-200 bg-white p-12 relative overflow-hidden">

<div className="absolute -right-10 -top-10 text-stone-50 opacity-50 pointer-events-none">
<iconify-icon icon="solar:bill-check-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 space-y-8">
<div className="flex justify-between items-end border-b border-stone-100 pb-4">
<span className="text-sm font-medium uppercase tracking-wider text-stone-800">Terapie 55 min</span>
<div className="text-right">
<span className="block font-serif text-2xl text-stone-900">1.500,-</span>
<span className="text-[10px] text-stone-400">Blatná zaváděcí cena: 850,-</span>
</div>
</div>
<div className="flex justify-between items-end border-b border-stone-100 pb-4">
<span className="text-sm font-medium uppercase tracking-wider text-stone-800">Terapie 25 min</span>
<div className="text-right">
<span className="block font-serif text-2xl text-stone-900">800,-</span>
<span className="text-[10px] text-stone-400">Blatná zaváděcí cena: 450,-</span>
</div>
</div>
</div>
<div className="mt-12 text-[10px] text-stone-400 font-light text-left leading-relaxed">
<p>Terapii je potřeba zrušit 24 h dopředu (pondělní terapii v pátek) formou SMS. V opačném případě bude účtován storno poplatek 100% ceny. V případě nemoci storno neúčtuji.</p>
<p className="mt-2 font-mono">Číslo účtu: 115-3051320227/0100</p>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-200 pt-24 pb-12 px-6 md:px-12 border-t border-stone-800" id="contact">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16">
<div className="max-w-sm reveal-text">
<h4 className="font-serif text-2xl mb-6 text-white">Kontaktujte nás.</h4>
<p className="text-stone-400 text-xs leading-relaxed mb-8 font-light">
                    Objednání prosím telefonicky. Pokud se nedovoláte, omlouvám se, právě se věnuji pacientům - zavolám zpět.
                </p>
<div className="space-y-4 mb-8">
<a className="flex items-center gap-4 text-sm hover:text-white transition-colors group" href="tel:728546769">
<iconify-icon className="text-stone-500 group-hover:text-white transition-colors" icon="solar:phone-calling-linear"></iconify-icon>
                        728 546 769
                    </a>
<a className="flex items-center gap-4 text-sm hover:text-white transition-colors group" href="mailto:krchova@fyziokinesis.cz">
<iconify-icon className="text-stone-500 group-hover:text-white transition-colors" icon="solar:letter-linear"></iconify-icon>
                        krchova@fyziokinesis.cz
                    </a>
</div>
<div className="text-xs text-stone-500 font-mono">
<p>Ostrovského 253/3, Praha 5</p>
<p>Blatná 388 01</p>
<p className="mt-2">IČO: 05280770</p>
</div>
</div>
<div className="flex-1 reveal-text">
<div className="w-full h-64 bg-stone-800 relative overflow-hidden group cursor-pointer border border-stone-700">
<img alt="Mapa" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://www.fyziokinesis.cz/wp-content/uploads/2022/05/mapa-1536x625.jpg"/>
<div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 text-[10px] uppercase tracking-widest backdrop-blur-md">
                        Areál Ženských domovů (1. patro, dveře 1.036)
                    </div>
</div>
<p className="text-[10px] text-stone-500 mt-4 font-light">
                    MHD: Na Knížecí / Anděl. Parkování: Nový Smíchov (3h zdarma) nebo hlídané parkoviště.
                 </p>
</div>
</div>
<div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-stone-800 flex justify-between items-center">
<div className="text-[10px] text-stone-500 font-light uppercase tracking-widest">
                © 2026 Fyziokinesis
            </div>
<div className="text-stone-500 hover:text-white transition-colors">
<a className="text-[10px]" href="#">Zpět nahoru</a>
</div>
</div>
</footer>


    </>
  );
}
