import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "AgriculturalBusiness",
"name": "DOČEŠ a.s.",
"image": "https://images.unsplash.com/photo-1625246333195-5519a49d75f0",
"telephone": "+420 384 386 111",
"email": "doces@doces.cz",
"address": {
"@type": "PostalAddress",
"streetAddress": "Jarošov nad Nežárkou 239",
"addressLocality": "Jarošov nad Nežárkou",
"postalCode": "378 41",
"addressCountry": "CZ"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 49.1895,
"longitude": 15.0722
},
"url": "http://www.doces.cz",
"foundingDate": "1991"
}



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Sticky Nav Style Change on Scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('bg-white/80', 'bg-white/95');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.replace('bg-white/95', 'bg-white/80');
            }
        });

        // Gallery Toggle Logic
        const toggleBtn = document.getElementById('gallery-toggle');
        const hiddenImages = document.querySelectorAll('.gallery-hidden');
        const galleryText = document.getElementById('gallery-text');
        const galleryIcon = document.getElementById('gallery-icon');
        let isExpanded = false;

        toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            hiddenImages.forEach(img => {
                if(isExpanded) {
                    img.classList.remove('hidden');
                    img.classList.add('block', 'animate-[fadeIn_0.5s_ease-out]');
                } else {
                    img.classList.add('hidden');
                    img.classList.remove('block');
                }
            });
            
            galleryText.textContent = isExpanded ? 'Zobrazit méně' : 'Zobrazit více realizací';
            galleryIcon.setAttribute('icon', isExpanded ? 'lucide:chevron-up' : 'lucide:chevron-down');
            
            // If collapsing, scroll back to gallery top smoothly
            if(!isExpanded) {
                document.getElementById('galerie').scrollIntoView({behavior: 'smooth'});
            }
        });

        // Reveal on Scroll Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-stone-200/50 shadow-sm" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex gap-3 gap-x-3 gap-y-3 items-center">
<svg className="" fill="none" height="40" viewbox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">

<path className="" d="M20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20" stroke="#14532D" strokeLinecap="round" strokeWidth="2"></path>
<path className="" d="M20 36C20 36 20 20 20 10C20 10 28 14 28 23C28 32 20 36 20 36Z" fill="#D97706" fillOpacity="0.2" stroke="#D97706" strokeWidth="1.5"></path>
<path d="M20 20L26 14" stroke="#D97706" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xl font-semibold tracking-tight text-stone-900">DOČEŠ <span className="text-stone-400 font-light">a.s.</span></span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-stone-600 hover:text-green-800 transition-colors" href="#o-nas">O nás</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-800 transition-colors" href="#sluzby">Služby</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-800 transition-colors" href="#produkty">Produkty</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-800 transition-colors" href="#laborator">Laboratoř</a>
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all duration-200 bg-stone-800 rounded-full hover:bg-stone-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900" href="#kontakt">
                        Kontaktovat
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-500 hover:text-stone-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-stone-100" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
<a className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-green-800 hover:bg-stone-50" href="#o-nas">O nás</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-green-800 hover:bg-stone-50" href="#sluzby">Služby</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-green-800 hover:bg-stone-50" href="#produkty">Produkty</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-green-800 hover:bg-stone-50" href="#laborator">Laboratoř</a>
<a className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-green-900 text-white" href="#kontakt">Kontaktovat nás</a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Letecký pohled na pole a zemědělskou krajinu" className="w-full h-full object-cover object-center transform scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fae072ce-a5e3-4b84-98ac-9970723c1de6_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70"></div>
</div>
<div className="z-10 sm:px-6 lg:px-8 reveal text-center max-w-5xl mr-auto ml-auto pr-4 pl-4 relative">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-green-100 text-xs font-medium uppercase tracking-wider mb-6">
                Od roku 1991
            </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight tracking-tight">
                Tradice v srdci přírody. <br className="hidden md:block"/>
<span className="text-green-200 serif-italic">Kvalita</span> pro vaši úrodu.
            </h1>
<p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Spolehlivý partner v oblasti výroby krmných směsí, výkupu komodit a laboratorních analýz. Stavíme na poctivém řemesle a moderních technologiích.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-green-800 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-green-900/30 flex items-center justify-center gap-2" href="#sluzby">
                    Naše služby
                    <iconify-icon height="18" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium transition-all duration-300 flex items-center justify-center" href="#kontakt">
                    Kontaktovat
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
<iconify-icon className="text-white" height="32" icon="lucide:chevron-down" strokeWidth="1" width="32"></iconify-icon>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="o-nas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6">Pevné kořeny v jižních Čechách</h2>
<div className="h-1 w-20 bg-green-800 mb-8 rounded-full"></div>
<p className="text-stone-600 mb-6 leading-relaxed">
                        Společnost <strong className="text-stone-800">DOČEŠ a.s.</strong> byla založena v roce 1991. Sídlíme v malebném prostředí Jarošova nad Nežárkou, kde navazujeme na dlouholetou zemědělskou tradici regionu.
                    </p>
<p className="text-stone-600 mb-8 leading-relaxed">
                        Naší prioritou není jen objem, ale především stabilita a důvěra. Provozujeme moderní posklizňovou linku a výrobnu krmných směsí, která splňuje nejpřísnější evropské normy. Jsme hrdým partnerem pro desítky farmářů i velkých podniků.
                    </p>
<dl className="grid grid-cols-2 gap-x-8 gap-y-8 mt-10 border-t border-stone-100 pt-10">
<div className="">
<dt className="text-sm font-medium text-stone-500">Založeno</dt>
<dd className="mt-1 text-3xl font-semibold text-green-900 tracking-tight">1991</dd>
</div>
<div>
<dt className="text-sm font-medium text-stone-500">Skladovací kapacita</dt>
<dd className="mt-1 text-3xl font-semibold text-green-900 tracking-tight">41 000 t</dd>
</div>
</dl>
</div>
<div className="relative reveal delay-200">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
<img alt="Areál sila a zemědělská technika" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1564505288635-35d201f6df8c?w=1600&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-stone-100 rounded-lg -z-10"></div>
<div className="absolute -top-6 -right-6 w-32 h-32 bg-green-50 rounded-full -z-10 blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="sluzby">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">Naše hlavní činnosti</h2>
<p className="text-stone-600">Komplexní služby pro moderní zemědělství pod jednou střechou.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-green-50 text-green-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-800 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:warehouse" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Výkup a skladování</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
                        Disponujeme dvěma betonovými sily s celkovou kapacitou 41 000 tun. Zajišťujeme nákup, ošetření a bezpečné skladování rostlinných komodit.
                    </p>
<ul className="text-xs text-stone-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-green-600" icon="lucide:check"></iconify-icon> Aktivní větrání</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-600" icon="lucide:check"></iconify-icon> Teplotní monitoring</li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:factory" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Výroba krmiv</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
                        Ročně vyrobíme cca 23 000 tun krmných směsí. Specializujeme se na optimalizované receptury pro vysokou užitkovost a zdraví zvířat.
                    </p>
<ul className="text-xs text-stone-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon> Vlastní míchárna</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon> Medikované směsi</li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-700 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:flask-conical" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Laboratoř</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
                        Provozujeme vlastní laboratoř pro kontrolu kvality vstupních surovin i hotových výrobků. Služby nabízíme i externím partnerům.
                    </p>
<ul className="text-xs text-stone-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-sky-600" icon="lucide:check"></iconify-icon> Rozbory obilovin</li>
<li className="flex items-center gap-2"><iconify-icon className="text-sky-600" icon="lucide:check"></iconify-icon> Kontrola mykotoxinů</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-0" id="produkty">

<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="bg-stone-900 py-24 px-8 lg:px-16 flex flex-col justify-center text-white">
<div className="max-w-md mx-auto lg:mx-0 reveal">
<div className="flex items-center gap-3 mb-4 text-green-400">
<iconify-icon height="24" icon="lucide:wheat" width="24"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-widest">Komodity</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold mb-6">Rostlinné produkty</h2>
<p className="text-stone-400 mb-8 font-light">
                        Vykupujeme a prodáváme široké spektrum zemědělských komodit. Důraz klademe na čistotu a potravinářskou kvalitu.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Pšenice
                        </div>
<div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Ječmen
                        </div>
<div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Řepka
                        </div>
<div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Oves
                        </div>
<div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Tritikále
                        </div>
<div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Hrách
                        </div>
</div>
</div>
</div>
<div className="h-96 lg:h-auto relative">
<img alt="Detail zralé pšenice" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1694621216902-905423a13491?w=1600&amp;q=80"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="h-96 lg:h-auto relative order-2 lg:order-1">
<img alt="Hospodářská zvířata" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-amber-50 py-24 px-8 lg:px-16 flex flex-col justify-center order-1 lg:order-2">
<div className="max-w-md mx-auto lg:mx-0 reveal">
<div className="flex items-center gap-3 mb-4 text-amber-700">
<iconify-icon height="24" icon="lucide:sprout" width="24"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-widest">Výživa</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6">Krmné směsi</h2>
<p className="text-stone-600 mb-8">
                        Vyrábíme kompletní krmné směsi pro drůbež, prasata, skot i králíky. Naše technologie umožňuje výrobu medikovaných směsí pod veterinárním dohledem pro zajištění maximálního zdraví chovu.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 bg-amber-200 p-1 rounded-full"><iconify-icon className="text-amber-800 text-xs block" icon="lucide:check"></iconify-icon></div>
<span className="text-stone-700 font-medium">Sypké i granulované formy</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-amber-200 p-1 rounded-full"><iconify-icon className="text-amber-800 text-xs block" icon="lucide:check"></iconify-icon></div>
<span className="text-stone-700 font-medium">Optimalizace receptur na míru</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="laborator">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6">Laboratorní služby</h2>
<p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto">
                Kvalita není náhoda. V naší laboratoři provádíme precizní rozbory pro potřeby výroby i pro veřejnost a obchodní partnery.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-stone-50 border border-stone-100 text-left">
<h4 className="font-semibold text-stone-900 mb-2">Vstupní analýza</h4>
<p className="text-sm text-stone-500">Rychlé stanovení vlhkosti, N-látek, škrobu a příměsí u obilovin.</p>
</div>
<div className="p-6 rounded-xl bg-stone-50 border border-stone-100 text-left">
<h4 className="font-semibold text-stone-900 mb-2">Hygiena krmiv</h4>
<p className="text-sm text-stone-500">Testování na přítomnost mykotoxinů a mikrobiologickou nezávadnost.</p>
</div>
<div className="p-6 rounded-xl bg-stone-50 border border-stone-100 text-left">
<h4 className="font-semibold text-stone-900 mb-2">Poradenství</h4>
<p className="text-sm text-stone-500">Interpretace výsledků a doporučení pro úpravu krmných dávek.</p>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
<div className="flex items-center gap-6">

<div className="flex w-16 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c86c0a73-9d1d-42e8-9e8a-0a6f5597da9f_320w.png)] bg-contain border-blue-700 border relative shadow-inner items-center justify-center">
</div>
<div className="">
<h3 className="text-lg font-medium text-white">Projekt modernizace výroby krmných směsí</h3>
<p className="text-stone-400 text-sm mt-1">Spolufinancováno Evropskou unií. Cílem je zvýšení kvality a snížení energetické náročnosti.</p>
</div>
</div>
</div></section>

<section className="bg-stone-50 pt-24 pb-24" id="galerie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl font-semibold text-stone-900">Galerie realizací</h2>
<p className="text-stone-500 mt-2">Nahlédněte do našeho provozu.</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="gallery-grid">

<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 group relative cursor-pointer">
<img alt="Silo detail" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1645206974100-dd47dae46387?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 group relative cursor-pointer">
<img alt="Sklizeň" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1566840842463-fdd9ea744d1c?w=800&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 group relative cursor-pointer">
<img alt="Laboratorní zkumavky" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1627920769842-6887c6df05ca?w=800&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 group relative cursor-pointer">
<img alt="Pole při západu slunce" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?w=800&amp;q=80"/>
</div>


<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 5" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 6" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1454179083322-198bb4daae41?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 7" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1598612518644-2cf30290e3e5?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 8" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1598402424785-e458d943a215?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 9" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1762083328496-9401a8e675e3?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 10" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1758609195377-af2c59b235a7?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 11" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1615071017819-62f659090f4c?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 12" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1675221659295-245735d4a156?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 13" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 14" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 15" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 16" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1761839257946-4616bcfafec7?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 17" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 18" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 19" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1559884743-74a57598c6c7?w=2560&amp;q=80"/></div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden"><img alt="Galerie 20" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1761839257475-4ca368dae6c3?w=2560&amp;q=80"/></div>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors focus-custom" id="gallery-toggle">
<span id="gallery-text">Zobrazit více realizací</span>
<iconify-icon icon="lucide:chevron-down" id="gallery-icon"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="uppercase text-sm font-medium text-stone-400 tracking-widest text-center mb-8">Důvěřují nám zemědělci i zpracovatelé</p>
<div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold text-stone-700"><div className="bg-center bg-stone-700 w-8 h-8 rounded-full"></div>AGRO JIH</div>
<div className="flex items-center gap-2 text-xl font-bold text-stone-700"><div className="bg-center bg-stone-700 w-8 h-8 rounded-sm rotate-45"></div>BIO FARMA</div>
<div className="flex items-center gap-2 text-xl font-bold text-stone-700"><div className="w-8 h-8 border-stone-700 border-2 rounded-full"></div>CEREA</div>
<div className="flex items-center gap-2 text-xl font-bold text-stone-700"><div className="w-8 h-8 bg-stone-700 rounded-tr-xl"></div>ZEMPRO</div>
</div>
</div>
</section>

<section className="bg-stone-50 pt-24 pb-24" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6">Kontaktujte nás</h2>
<p className="text-stone-600 mb-10">Máte dotaz ohledně výkupu, nebo potřebujete vyrobit krmnou směs na míru? Jsme tu pro vás.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-green-700 border border-stone-100 shrink-0">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-semibold text-stone-900">Sídlo společnosti</h4>
<p className="text-stone-600 mt-1">Jarošov nad Nežárkou 239378 41 Jarošov nad Nežárkou</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-green-700 border border-stone-100 shrink-0">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-semibold text-stone-900">Telefon</h4>
<p className="text-stone-600 mt-1"><a className="hover:text-green-800 transition-colors" href="tel:+420384386111">+420 384 386 111</a></p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-green-700 border border-stone-100 shrink-0">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-semibold text-stone-900">E-mail</h4>
<p className="text-stone-600 mt-1"><a className="hover:text-green-800 transition-colors" href="mailto:doces@doces.cz">doces@doces.cz</a></p>
</div>
</div>
</div>

<div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-stone-200 h-64 w-full relative group">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.854619448827!2d15.069986315682883!3d49.1895399793214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d1487f2f8f8b7%3A0x400af0f6615b1e0!2sJaro%C5%A1ov%20nad%20Ne%C5%BE%C3%A1rkou%20239%2C%20378%2041%20Jaro%C5%A1ov%20nad%20Ne%C5%BE%C3%A1rkou!5e0!3m2!1scs!2scz!4v1620000000000!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none border-4 border-white/50 rounded-2xl"></div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-stone-100 reveal delay-100">
<form action="#" className="space-y-6" method="POST">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="name">Jméno a příjmení</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus-custom transition-all" id="name" name="name" placeholder="Jan Novák" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="phone">Telefon</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus-custom transition-all" id="phone" name="phone" placeholder="+420 777 000 000" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="email">E-mail</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus-custom transition-all" id="email" name="email" placeholder="jan@firma.cz" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="message">Zpráva</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus-custom transition-all resize-none" id="message" name="message" placeholder="Mám zájem o..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<div className="flex items-center h-5">
<input className="w-4 h-4 rounded border-stone-300 text-green-700 focus:ring-green-700" id="gdpr" name="gdpr" type="checkbox"/>
</div>
<div className="text-sm">
<label className="font-medium text-stone-600" htmlFor="gdpr">Souhlasím se zpracováním osobních údajů</label>
</div>
</div>
<button className="w-full px-6 py-4 bg-gradient-to-r from-green-800 to-green-700 hover:from-green-700 hover:to-green-600 text-white font-medium rounded-lg shadow-lg shadow-green-900/10 transition-all duration-300 transform hover:-translate-y-0.5" type="button">
                            Odeslat nezávaznou poptávku
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<span className="text-white font-semibold tracking-tight text-lg block mb-4">DOČEŠ a.s.</span>
<p className="text-sm leading-relaxed">
                        Spolehlivý partner pro zemědělce v Jihočeském kraji i celé ČR. Kvalita, tradice, budoucnost.
                    </p>
<p className="text-sm leading-relaxed">
                        IČO: 13503871, DIČ: CZ13503871
                    </p>
</div>
<div className="">
<h5 className="text-white font-medium mb-4">Navigace</h5>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white transition-colors" href="#hero">Úvod</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#o-nas">O nás</a></li>
</ul></div>
</div>
<div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p className="">© 2024 DOČEŠ a.s. Všechna práva vyhrazena.</p>
<p className="md:mt-0 cursor-pointer mt-2" onclick="window.location.href='/Bley.cz'" role="button">Design by BLEY.cz</p>
</div>
</div>
</footer>



    </>
  );
}
