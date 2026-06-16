import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Montserrat', 'sans-serif'],
},
colors: {
green: {
900: '#1B4332',
800: '#2D6A4F',
},
gold: '#D4A017',
light: '#F8FAF5',
}
}
}
}



{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Usługi Ogrodnicze Grzegorz",
"image": "https://images.unsplash.com/photo-1558904541-efa843a96f0a?auto=format&fit=crop&q=80&w=1200",
"telephone": "+48577567549",
"email": "grzegorz04052012@gmail.com",
"areaServed": ["Wyszków", "Radzymin", "Marki", "Kobyłka"],
"industry": "Usługi ogrodnicze"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Close details on outside click (optional improvement for Accordion)
        const detailsElements = document.querySelectorAll("details");
        detailsElements.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                detailsElements.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm" id="header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-heading font-semibold text-xl tracking-tight text-green-900 flex items-center gap-2" href="#">
<iconify-icon className="text-gold text-2xl" icon="solar:leaf-linear"></iconify-icon>
                GRZEGORZ
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-green-900/70 hover:text-green-900 transition-colors" href="#o-mnie">O mnie</a>
<a className="text-green-900/70 hover:text-green-900 transition-colors" href="#uslugi">Usługi</a>
<a className="text-green-900/70 hover:text-green-900 transition-colors" href="#realizacje">Realizacje</a>
<a className="text-green-900/70 hover:text-green-900 transition-colors" href="#kontakt">Kontakt</a>
</nav>
<div className="hidden md:flex items-center gap-6">
<a className="flex items-center gap-2 text-sm font-semibold tracking-tight group" href="tel:577567549">
<iconify-icon className="text-gold text-lg group-hover:animate-pulse" icon="solar:phone-calling-linear"></iconify-icon>
                    577 567 549
                </a>
<a className="bg-green-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-800 transition-all hover:shadow-lg hover:shadow-green-900/20" href="#kontakt">
                    Bezpłatna wycena
                </a>
</div>

<button className="md:hidden text-2xl text-green-900 p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-white border-t border-black/5 absolute w-full left-0 top-20 shadow-xl" id="mobile-menu">
<div className="flex flex-col p-6 gap-4">
<a className="text-base font-medium text-green-900 mobile-link" href="#o-mnie">O mnie</a>
<a className="text-base font-medium text-green-900 mobile-link" href="#uslugi">Usługi</a>
<a className="text-base font-medium text-green-900 mobile-link" href="#realizacje">Realizacje</a>
<a className="text-base font-medium text-green-900 mobile-link" href="#kontakt">Kontakt</a>
<hr className="border-black/5 my-2"/>
<a className="text-lg font-semibold text-green-900 flex items-center gap-2" href="tel:577567549">
<iconify-icon className="text-gold" icon="solar:phone-calling-linear"></iconify-icon>
                    577 567 549
                </a>
<a className="bg-green-900 text-center text-white px-5 py-3 rounded-xl text-sm font-medium mt-2 mobile-link" href="#kontakt">
                    Bezpłatna wycena
                </a>
</div>
</div>
</header>

<a className="md:hidden fixed bottom-6 right-6 z-40 bg-gold text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-gold/30 hover:scale-105 transition-transform" href="tel:577567549">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1558904541-efa843a96f0a?auto=format&amp'}}></div>
<div className="absolute inset-0 hero-overlay"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-10 md:mt-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium mb-8">
<iconify-icon className="text-gold" icon="solar:map-point-linear"></iconify-icon>
                Wyszków | Radzymin | Marki | Kobyłka | i okolice
            </div>
<h1 className="font-heading font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.1] mb-6 drop-shadow-sm">
                Twój ogród w <br className="hidden md:block"/>najlepszych rękach.
            </h1>
<p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Profesjonalna pielęgnacja ogrodów, precyzyjne przycinanie drzew i estetyczne układanie kostki. 
                Lokalnie, rzetelnie, z polecenia.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-yellow-600 text-white rounded-full font-medium text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/20" href="tel:577567549">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                    Zadzwoń teraz
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-base transition-all flex items-center justify-center" href="#uslugi">
                    Zobacz usługi
                </a>
</div>
<p className="text-white/60 text-xs mt-6 flex items-center justify-center gap-2">
<iconify-icon className="text-gold text-sm" icon="solar:verified-check-linear"></iconify-icon>
                Bezpłatna wycena na miejscu – bez zobowiązań
            </p>
</div>

<div className="wave-bottom text-light">
<svg data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,110.2,192.25,92.83,238.15,79.8,283.43,63.5,321.39,56.44Z" fill="currentColor"></path>
</svg>
</div>
</section>

<section className="py-24 md:py-32 bg-light relative" id="o-mnie">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-gold/20 rounded-3xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
<img alt="Ogrodnik przy pracy Marki" className="relative rounded-3xl object-cover h-[500px] w-full shadow-lg border border-black/5" src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div>
<h2 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight mb-6">Cześć, jestem Grzegorz.</h2>
<div className="space-y-6 text-green-900/80 text-base leading-relaxed font-light">
<p>Zajmuję się ogrodami, bo to moja pasja – nie tylko praca. Każdy ogród traktuję indywidualnie, bo wiem, że to Twoja przestrzeń i zasługuje na najlepszą opiekę.</p>
<p>Działam osobiście – to ja przyjeżdżam, oceniam i wykonuję pracę od początku do końca. Nie ma tu podwykonawców ani przypadkowych ekip – jest tylko moje zaangażowanie i dbałość o detal.</p>
</div>
<div className="mt-10 bg-white p-6 rounded-2xl border border-black/5 shadow-sm flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-green-800 text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-sm mb-1 tracking-tight">Działam osobiście</h3>
<p className="text-xs text-green-900/60 leading-relaxed">Każde zlecenie wykonuję sam, dlatego mogę zagwarantować najwyższą jakość i dotrzymywanie terminów.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white relative" id="uslugi">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight mb-4">Co mogę dla Ciebie zrobić?</h2>
<p className="text-green-900/60 text-base font-light">Kompleksowe usługi ogrodnicze i brukarskie dopasowane do Twoich potrzeb.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-3xl bg-light hover:bg-green-900 transition-colors duration-300 border border-black/5">
<iconify-icon className="text-3xl text-gold mb-6 group-hover:text-white transition-colors" icon="solar:leaf-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg tracking-tight mb-3 group-hover:text-white transition-colors">Koszenie trawy</h3>
<p className="text-sm text-green-900/70 group-hover:text-white/80 font-light leading-relaxed transition-colors">Regularnie lub jednorazowo – zwracam Ci piękny, równy trawnik bez kiwnięcia palcem. Możliwość stałej współpracy sezonowej.</p>
</div>

<div className="group p-8 rounded-3xl bg-light hover:bg-green-900 transition-colors duration-300 border border-black/5">
<iconify-icon className="text-3xl text-gold mb-6 group-hover:text-white transition-colors" icon="solar:scissors-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg tracking-tight mb-3 group-hover:text-white transition-colors">Przycinanie drzew i krzewów</h3>
<p className="text-sm text-green-900/70 group-hover:text-white/80 font-light leading-relaxed transition-colors">Fachowe formowanie koron, żywopłotów i krzewów ozdobnych. Twój ogród będzie wyglądał jak z okładki.</p>
</div>

<div className="group p-8 rounded-3xl bg-light hover:bg-green-900 transition-colors duration-300 border border-black/5">
<iconify-icon className="text-3xl text-gold mb-6 group-hover:text-white transition-colors" icon="solar:tree-2-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg tracking-tight mb-3 group-hover:text-white transition-colors">Wycinanie drzew</h3>
<p className="text-sm text-green-900/70 group-hover:text-white/80 font-light leading-relaxed transition-colors">Bezpieczne usuwanie drzew wraz z utylizacją gałęzi. Działam sprawnie i porządkuję teren po sobie.</p>
</div>

<div className="group p-8 rounded-3xl bg-light hover:bg-green-900 transition-colors duration-300 border border-black/5">
<iconify-icon className="text-3xl text-gold mb-6 group-hover:text-white transition-colors" icon="solar:hand-stars-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg tracking-tight mb-3 group-hover:text-white transition-colors">Pielęgnacja ogrodu</h3>
<p className="text-sm text-green-900/70 group-hover:text-white/80 font-light leading-relaxed transition-colors">Odchwaszczanie, nawożenie, grabienie, wiosenne i jesienne porządki – kompleksowa opieka przez cały sezon.</p>
</div>

<div className="group p-8 rounded-3xl bg-light hover:bg-green-900 transition-colors duration-300 border border-black/5">
<iconify-icon className="text-3xl text-gold mb-6 group-hover:text-white transition-colors" icon="solar:ruler-cross-pen-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg tracking-tight mb-3 group-hover:text-white transition-colors">Układanie kostki brukowej</h3>
<p className="text-sm text-green-900/70 group-hover:text-white/80 font-light leading-relaxed transition-colors">Ścieżki, podjazdy i tarasy z kostki brukowej – solidnie, estetycznie i na lata. Bezpłatna wycena na miejscu.</p>
</div>

<div className="group p-8 rounded-3xl bg-light hover:bg-green-900 transition-colors duration-300 border border-black/5">
<iconify-icon className="text-3xl text-gold mb-6 group-hover:text-white transition-colors" icon="solar:home-smile-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg tracking-tight mb-3 group-hover:text-white transition-colors">Podjazdy</h3>
<p className="text-sm text-green-900/70 group-hover:text-white/80 font-light leading-relaxed transition-colors">Projektuję i wykonuję funkcjonalne podjazdy dopasowane do Twojej nieruchomości i gustu.</p>
</div>

<div className="group p-8 rounded-3xl bg-light hover:bg-green-900 transition-colors duration-300 border border-black/5">
<iconify-icon className="text-3xl text-gold mb-6 group-hover:text-white transition-colors" icon="solar:pallete-2-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg tracking-tight mb-3 group-hover:text-white transition-colors">Malowanie płotów</h3>
<p className="text-sm text-green-900/70 group-hover:text-white/80 font-light leading-relaxed transition-colors">Odświeżam i maluję ogrodzenia – drewniane, metalowe, betonowe. Nowy wygląd bez wymiany całego płotu.</p>
</div>

<div className="group p-8 rounded-3xl bg-light hover:bg-green-900 transition-colors duration-300 border border-black/5">
<iconify-icon className="text-3xl text-gold mb-6 group-hover:text-white transition-colors" icon="solar:sofa-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg tracking-tight mb-3 group-hover:text-white transition-colors">Meble ogrodowe</h3>
<p className="text-sm text-green-900/70 group-hover:text-white/80 font-light leading-relaxed transition-colors">Montaż, naprawa i odnawianie mebli ogrodowych. Przywracam im dawny blask lub pomagam złożyć nowe zestawy.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-green-900 text-white relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight mb-16 text-center">Dlaczego klienci mi ufają?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-2xl text-gold" icon="solar:user-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-white/80 leading-relaxed">Osobiście wykonuję każdą pracę – <span className="text-white font-medium">bez podwykonawców</span></p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-2xl text-gold" icon="solar:map-point-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-white/80 leading-relaxed">Działam lokalnie – znam specyfikę <span className="text-white font-medium">ogrodów w tym regionie</span></p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-2xl text-gold" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-white/80 leading-relaxed">Szybka reakcja – kontaktuję się w ciągu <span className="text-white font-medium">kilku godzin</span></p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-2xl text-gold" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-white/80 leading-relaxed">Zlecenia z poleceń – zadowoleni <span className="text-white font-medium">klienci wracają i polecają mnie</span> dalej</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-light">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight mb-16 text-center">Jak to wygląda krok po kroku?</h2>
<div className="flex flex-col gap-6">
<div className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-gold/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-light text-green-900 font-heading font-semibold text-xl flex items-center justify-center shrink-0 border border-black/5">1</div>
<div>
<h3 className="font-semibold text-lg tracking-tight mb-2">Kontakt</h3>
<p className="text-sm text-green-900/70 font-light">Zadzwoń lub napisz – odpiszę najszybciej jak mogę.</p>
</div>
</div>
<div className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-gold/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-light text-green-900 font-heading font-semibold text-xl flex items-center justify-center shrink-0 border border-black/5">2</div>
<div>
<h3 className="font-semibold text-lg tracking-tight mb-2">Bezpłatna wycena</h3>
<p className="text-sm text-green-900/70 font-light">Przyjeżdżam, oglądam ogród i podaję konkretną cenę – bez ukrytych kosztów.</p>
</div>
</div>
<div className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-gold/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-light text-green-900 font-heading font-semibold text-xl flex items-center justify-center shrink-0 border border-black/5">3</div>
<div>
<h3 className="font-semibold text-lg tracking-tight mb-2">Realizacja</h3>
<p className="text-sm text-green-900/70 font-light">Przyjeżdżam w umówionym terminie i wykonuję pracę starannie i szybko.</p>
</div>
</div>
<div className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-gold/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-light text-green-900 font-heading font-semibold text-xl flex items-center justify-center shrink-0 border border-black/5">4</div>
<div>
<h3 className="font-semibold text-lg tracking-tight mb-2">Efekt końcowy</h3>
<p className="text-sm text-green-900/70 font-light">Zostawiam po sobie porządek i piękny ogród – Ty tylko odbierasz efekt.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="realizacje">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight mb-16 text-center">Efekty mojej pracy</h2>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="relative group overflow-hidden rounded-3xl break-inside-avoid">
<img alt="koszenie trawy Radzymin" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium text-sm tracking-tight">Koszenie trawy – Radzymin</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl break-inside-avoid">
<img alt="kostka brukowa Marki" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium text-sm tracking-tight">Kostka brukowa – Marki</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl break-inside-avoid">
<img alt="pielęgnacja ogrodu Wyszków" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium text-sm tracking-tight">Pielęgnacja ogrodu – Wyszków</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl break-inside-avoid">
<img alt="przycinanie drzew Kobyłka" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium text-sm tracking-tight">Przycinanie drzew – Kobyłka</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl break-inside-avoid">
<img alt="podjazd z kostki brukowej Wyszków" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium text-sm tracking-tight">Podjazd z kostki – Wyszków</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl break-inside-avoid">
<img alt="wycinanie drzew Radzymin" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium text-sm tracking-tight">Wycinanie drzew – Radzymin</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-light">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight mb-16 text-center">Co mówią moi klienci?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
<div className="flex gap-1 text-gold mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-green-900/80 font-light leading-relaxed mb-6 italic">"Grzegorz skosił trawnik i przyciął żywopłot – ogród wygląda rewelacyjnie. Przyszedł punktualnie, pracował sprawnie, po sobie posprzątał. Zdecydowanie polecam!"</p>
<p className="font-semibold text-sm tracking-tight">– Anna K., Marki</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
<div className="flex gap-1 text-gold mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-green-900/80 font-light leading-relaxed mb-6 italic">"Ułożył mi podjazd z kostki – efekt przeszedł oczekiwania. Solidna robota, uczciwa cena i zero stresu z jego strony. Już umawiamy się na wiosenną pielęgnację ogrodu."</p>
<p className="font-semibold text-sm tracking-tight">– Marek T., Radzymin</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
<div className="flex gap-1 text-gold mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-green-900/80 font-light leading-relaxed mb-6 italic">"Wycinał u mnie duże drzewo przy domu – bezpiecznie, sprawnie i teren po nim jak sprzed pracy. Polecili mi go sąsiedzi i ja też polecam dalej."</p>
<p className="font-semibold text-sm tracking-tight">– Joanna W., Wyszków</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-black/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight mb-6">Działam w Twoim rejonie</h2>
<div className="flex flex-wrap justify-center gap-3 mb-6">
<span className="px-4 py-2 bg-light border border-black/5 rounded-full text-sm font-medium">Wyszków</span>
<span className="px-4 py-2 bg-light border border-black/5 rounded-full text-sm font-medium">Radzymin</span>
<span className="px-4 py-2 bg-light border border-black/5 rounded-full text-sm font-medium">Marki</span>
<span className="px-4 py-2 bg-light border border-black/5 rounded-full text-sm font-medium">Kobyłka</span>
<span className="px-4 py-2 bg-light border border-black/5 rounded-full text-sm font-medium text-green-900/60">i okoliczne miejscowości</span>
</div>
<p className="text-sm text-green-900/60 font-light">Nie ma Cię na liście? Zadzwoń – ustalimy czy dojadę!</p>
</div>
<div className="w-full h-[400px] rounded-3xl overflow-hidden border border-black/5 shadow-sm">

<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155456.9634934661!2d21.056024479577716!3d52.38556784852934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb6a7b7b15a99%3A0x6a0c5c4e38e8e7a0!2sRadzymin!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-light">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight mb-12 text-center">Masz pytania? Mam odpowiedzi.</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-black/5 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-sm">
                        Czy wycena jest bezpłatna?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-green-900/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-green-900/70 font-light leading-relaxed">
                        Tak, zawsze przyjeżdżam bezpłatnie, oglądam ogród i podaję konkretną cenę bez żadnych zobowiązań z Twojej strony.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-black/5 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-sm">
                        Czy możemy umówić się na stałą współpracę sezonową?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-green-900/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-green-900/70 font-light leading-relaxed">
                        Oczywiście! Wielu klientów korzysta ze stałej opieki nad ogrodem przez cały sezon – koszenie, pielęgnacja, jesienne porządki. Chętnie ustalimy harmonogram.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-black/5 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-sm">
                        Co z wywozem gałęzi i odpadów po pracy?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-green-900/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-green-900/70 font-light leading-relaxed">
                        Sprzątam po sobie i mogę zabrać odpady – wystarczy wcześniej to ustalić. Zostawiam ogród w lepszym stanie niż zastałem.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-black/5 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-sm">
                        Na jakim obszarze działasz?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-green-900/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-green-900/70 font-light leading-relaxed">
                        Głównie Wyszków, Radzymin, Marki i Kobyłka. Jeśli jesteś z okolic – zadzwoń, na pewno coś ustalimy.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-black/5 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-sm">
                        Jak szybko możesz przyjechać?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-green-900/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-green-900/70 font-light leading-relaxed">
                        Staram się reagować szybko – zazwyczaj w ciągu 1-3 dni roboczych od kontaktu. W sezonie warto umawiać się z wyprzedzeniem.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-green-900 text-white relative overflow-hidden" id="kontakt">

<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight mb-4">Twój ogród zasługuje na profesjonalną opiekę.</h2>
<p className="text-white/70 text-base font-light">Zadzwoń lub napisz – bezpłatna wycena, zero zobowiązań.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">

<div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
<form action="mailto:grzegorz04052012@gmail.com" className="space-y-5" enctype="text/plain" method="post">
<div>
<label className="block text-xs font-medium text-white/70 mb-2" htmlFor="name">Imię</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" id="name" name="Imię" placeholder="Jan Kowalski" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-white/70 mb-2" htmlFor="phone">Numer telefonu</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" id="phone" name="Telefon" placeholder="123 456 789" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-white/70 mb-2" htmlFor="message">Wiadomość / zakres prac</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none" id="message" name="Wiadomość" placeholder="Opisz w skrócie, co jest do zrobienia..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-gold hover:bg-yellow-600 text-white font-medium py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2" type="submit">
                            Wyślij zapytanie
                            <iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>

<div className="flex flex-col gap-8 lg:pt-8">
<a className="group flex items-start gap-5" href="tel:577567549">
<div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
<iconify-icon className="text-2xl text-gold" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white/50 mb-1">Zadzwoń bezpośrednio</p>
<p className="font-heading font-semibold text-3xl tracking-tight text-white group-hover:text-gold transition-colors">577 567 549</p>
</div>
</a>
<a className="group flex items-start gap-5" href="mailto:grzegorz04052012@gmail.com">
<div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
<iconify-icon className="text-2xl text-gold" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white/50 mb-1">Napisz e-mail</p>
<p className="font-medium text-base text-white group-hover:text-gold transition-colors break-all">grzegorz04052012@gmail.com</p>
</div>
</a>
<div className="flex items-start gap-5">
<div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-gold" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white/50 mb-1">Obszar działania</p>
<p className="font-medium text-base text-white">Wyszków, Radzymin, Marki, <br/>Kobyłka i okolice</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-gold" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white/50 mb-1">Dostępność</p>
<p className="font-medium text-base text-white">Poniedziałek – Sobota<br/>7:00 – 19:00</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A1A14] py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-center md:text-left">
<a className="font-heading font-semibold text-lg tracking-tight text-white flex items-center justify-center md:justify-start gap-2 mb-2" href="#">
<iconify-icon className="text-gold" icon="solar:leaf-linear"></iconify-icon>
                    GRZEGORZ
                </a>
<p className="text-xs text-white/50 font-light">Ogrodnik z pasją, okolice Warszawy.</p>
</div>
<nav className="flex flex-wrap justify-center gap-6 text-xs text-white/50">
<a className="hover:text-white transition-colors" href="#o-mnie">O mnie</a>
<a className="hover:text-white transition-colors" href="#uslugi">Usługi</a>
<a className="hover:text-white transition-colors" href="#realizacje">Realizacje</a>
<a className="hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</nav>
<div className="text-center md:text-right text-xs text-white/30 font-light">
<p>© 2025 Grzegorz – Usługi Ogrodnicze.</p>
</div>
</div>
</footer>



    </>
  );
}
