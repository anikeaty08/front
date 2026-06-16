import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8DCCB]/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">

<a className="font-serif-custom text-xl md:text-2xl uppercase tracking-tighter text-[#3A302B]" href="#">
                Studio Élise
            </a>

<nav className="hidden lg:flex items-center space-x-10 text-sm tracking-wide text-[#7A6B63]">
<a className="hover:text-[#3A302B] transition-colors duration-300" href="#sluzby">Služby</a>
<a className="hover:text-[#3A302B] transition-colors duration-300" href="#o-nas">O nás</a>
<a className="hover:text-[#3A302B] transition-colors duration-300" href="#galerie">Galerie</a>
<a className="hover:text-[#3A302B] transition-colors duration-300" href="#cenik">Ceník</a>
<a className="hover:text-[#3A302B] transition-colors duration-300" href="#kontakt">Kontakt</a>
</nav>

<div className="hidden lg:block">
<a className="inline-flex items-center justify-center border border-[#3A302B] text-[#3A302B] hover:bg-[#3A302B] hover:text-[#FDFBF7] transition-colors duration-500 px-6 py-2.5 text-xs uppercase tracking-widest" href="#kontakt">
                    Rezervovat
                </a>
</div>

<button aria-label="Menu" className="lg:hidden text-[#3A302B] p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex flex-col lg:flex-row pt-20">

<div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 lg:py-0 z-10">
<h1 className="font-serif-custom text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight text-[#3A302B] mb-8 font-medium">
                Vlasy, které<br/>
                promluví za<br/>
                vás.
            </h1>
<p className="text-base md:text-lg text-[#7A6B63] max-w-md font-light leading-relaxed mb-12">
                Individuální péče, prémiové produkty a zkušené ruce. Váš styl je naše řemeslo. Objevte přirozenou eleganci ve Vinohradech.
            </p>
<div className="flex flex-col sm:flex-row gap-4 sm:items-center">
<a className="inline-flex items-center justify-center bg-[#3A302B] text-[#FDFBF7] hover:bg-[#52453F] transition-colors duration-500 px-8 py-4 text-xs uppercase tracking-widest text-center" href="#kontakt">
                    Rezervovat termín
                </a>
<a className="inline-flex items-center justify-center text-[#3A302B] border-b border-transparent hover:border-[#3A302B] transition-colors duration-300 px-4 py-3 text-xs uppercase tracking-widest text-center" href="#sluzby">
                    Zobrazit služby
                </a>
</div>
</div>

<div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative bg-[#F5EFE6]">
<img alt="Žena s krásnými vlasy v salonu" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</section>

<section className="bg-[#F5EFE6] border-y border-[#E8DCCB]/60 py-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8DCCB]/60">
<div className="py-4 md:py-0">
<p className="font-serif-custom text-4xl text-[#3A302B] mb-2 font-medium">12+</p>
<p className="text-xs uppercase tracking-widest text-[#7A6B63]">Let zkušeností</p>
</div>
<div className="py-4 md:py-0">
<p className="font-serif-custom text-4xl text-[#3A302B] mb-2 font-medium">800+</p>
<p className="text-xs uppercase tracking-widest text-[#7A6B63]">Spokojených klientů</p>
</div>
<div className="py-4 md:py-0">
<div className="flex justify-center items-center gap-1 mb-2">
<p className="font-serif-custom text-4xl text-[#3A302B] font-medium">4.9</p>
<iconify-icon className="text-[#C5B39B]" icon="solar:star-linear" width="20"></iconify-icon>
</div>
<p className="text-xs uppercase tracking-widest text-[#7A6B63]">Průměrné hodnocení</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="sluzby">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight text-[#3A302B] mb-6 font-medium">Péče pro každý typ vlasů</h2>
<p className="text-[#7A6B63] font-light leading-relaxed">
                    Nabízíme komplexní kadeřnické služby založené na osobním přístupu, precizní technice a těch nejkvalitnějších produktech.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="group bg-white p-10 md:p-12 border border-[#E8DCCB]/40 flex flex-col h-full transition-shadow duration-500 hover:shadow-xl hover:shadow-[#3A302B]/5">
<h3 className="font-serif-custom text-3xl text-[#3A302B] mb-4 font-medium">Střih &amp; Styling</h3>
<p className="text-[#7A6B63] font-light text-sm leading-relaxed mb-10 flex-grow">
                        Klasické i moderní střihy precizně přizpůsobené tvaru vašeho obličeje, textuře vlasů a životnímu stylu.
                    </p>
<div className="space-y-4 pt-6 border-t border-[#E8DCCB]/40">
<div className="flex justify-between items-end text-sm">
<span className="text-[#3A302B]">Dámský střih</span>
<span className="text-[#7A6B63]">od 1 500 Kč</span>
</div>
<div className="flex justify-between items-end text-sm">
<span className="text-[#3A302B]">Foukaná &amp; Styling</span>
<span className="text-[#7A6B63]">od 800 Kč</span>
</div>
</div>
</div>

<div className="group bg-[#F5EFE6] p-10 md:p-12 border border-[#E8DCCB]/40 flex flex-col h-full transition-shadow duration-500 hover:shadow-xl hover:shadow-[#3A302B]/5">
<h3 className="font-serif-custom text-3xl text-[#3A302B] mb-4 font-medium">Barvení &amp; Melíry</h3>
<p className="text-[#7A6B63] font-light text-sm leading-relaxed mb-10 flex-grow">
                        Od jemných a přirozených balayage přes precizní tónování až po komplexní plné barvení s šetrnými barvami.
                    </p>
<div className="space-y-4 pt-6 border-t border-[#E8DCCB]/60">
<div className="flex justify-between items-end text-sm">
<span className="text-[#3A302B]">Balayage techniky</span>
<span className="text-[#7A6B63]">od 3 500 Kč</span>
</div>
<div className="flex justify-between items-end text-sm">
<span className="text-[#3A302B]">Kompletní barvení</span>
<span className="text-[#7A6B63]">od 2 200 Kč</span>
</div>
</div>
</div>

<div className="group bg-white p-10 md:p-12 border border-[#E8DCCB]/40 flex flex-col h-full transition-shadow duration-500 hover:shadow-xl hover:shadow-[#3A302B]/5">
<h3 className="font-serif-custom text-3xl text-[#3A302B] mb-4 font-medium">Péče &amp; Ošetření</h3>
<p className="text-[#7A6B63] font-light text-sm leading-relaxed mb-10 flex-grow">
                        Hloubková regenerace, keratinové kúry a výživné masky pro obnovu zdraví, síly a přirozeného lesku vašich vlasů.
                    </p>
<div className="space-y-4 pt-6 border-t border-[#E8DCCB]/40">
<div className="flex justify-between items-end text-sm">
<span className="text-[#3A302B]">Hloubková regenerace</span>
<span className="text-[#7A6B63]">od 900 Kč</span>
</div>
<div className="flex justify-between items-end text-sm">
<span className="text-[#3A302B]">Keratinová péče</span>
<span className="text-[#7A6B63]">od 2 500 Kč</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="o-nas">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-1/2">
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight text-[#3A302B] mb-8 font-medium">Vášeň pro řemeslo</h2>
<div className="space-y-6 text-[#7A6B63] font-light leading-relaxed text-sm md:text-base">
<p>
                        Věříme, že dokonalý účes nezačíná nůžkami, ale nasloucháním. Dobrý kadeřník nenasazuje jen univerzální střih, ale hledá styl, ve kterém se klientka sama pozná a cítí se přirozeně krásná.
                    </p>
<p>
                        V našem boutique salonu ve Vinohradech pracujeme výhradně s prémiovými produkty, které respektují zdraví vlasů i přírodu. Každá návštěva je rituálem péče, klidu a osobní pozornosti.
                    </p>
</div>

<div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-[#E8DCCB]/40">
<div>
<p className="font-serif-custom text-3xl text-[#3A302B] mb-1 font-medium">3</p>
<p className="text-xs uppercase tracking-widest text-[#7A6B63]">Senior specialistky</p>
</div>
<div>
<p className="font-serif-custom text-3xl text-[#3A302B] mb-1 font-medium">100%</p>
<p className="text-xs uppercase tracking-widest text-[#7A6B63]">Prémiové produkty</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 aspect-[3/4] lg:aspect-auto lg:h-[800px] overflow-hidden group">
<img alt="Kadeřnice v salonu" className="w-full h-full object-cover img-hover-zoom" src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="galerie">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight text-[#3A302B] font-medium">Ukázky naší práce</h2>
<a className="inline-flex items-center gap-2 text-[#3A302B] text-sm uppercase tracking-widest hover:text-[#7A6B63] transition-colors" href="https://instagram.com" target="_blank">
                    Sledovat na Instagramu
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

<div className="aspect-[4/5] overflow-hidden group bg-stone-100">
<img alt="Blond balayage ukázka" className="w-full h-full object-cover img-hover-zoom" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="aspect-[4/5] overflow-hidden group bg-stone-100">
<img alt="Detail textury vlasů" className="w-full h-full object-cover img-hover-zoom" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="aspect-[4/5] overflow-hidden group bg-stone-100 hidden md:block lg:hidden">
<img alt="Brunette styling" className="w-full h-full object-cover img-hover-zoom" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>

<div className="aspect-[4/5] overflow-hidden group bg-stone-100 lg:row-span-2 lg:aspect-auto">
<img alt="Elegantní účes" className="w-full h-full object-cover img-hover-zoom" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>

<div className="aspect-[4/5] overflow-hidden group bg-stone-100">
<img alt="Interiér salonu" className="w-full h-full object-cover img-hover-zoom" loading="lazy" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-[4/5] overflow-hidden group bg-stone-100">
<img alt="Příprava barvy" className="w-full h-full object-cover img-hover-zoom" loading="lazy" src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F5EFE6]" id="cenik">
<div className="max-w-4xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight text-[#3A302B] mb-6 font-medium">Ceník služeb</h2>
<p className="text-[#7A6B63] font-light">Zakládáme si na transparentnosti. Zde je přehled našich hlavních služeb.</p>
</div>
<div className="space-y-16">

<div>
<h3 className="font-serif-custom text-2xl text-[#3A302B] mb-6 font-medium uppercase tracking-wider text-center md:text-left">Střihy</h3>
<div className="space-y-4">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#E8DCCB] pb-3 gap-2 sm:gap-0">
<span className="text-[#3A302B] text-base">Dámský střih &amp; foukaná (krátké vlasy)</span>
<span className="text-[#3A302B] font-medium text-base whitespace-nowrap">od 1 500 Kč</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#E8DCCB] pb-3 gap-2 sm:gap-0">
<span className="text-[#3A302B] text-base">Dámský střih &amp; foukaná (dlouhé vlasy)</span>
<span className="text-[#3A302B] font-medium text-base whitespace-nowrap">od 1 900 Kč</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#E8DCCB] pb-3 gap-2 sm:gap-0">
<span className="text-[#3A302B] text-base">Foukaná &amp; styling</span>
<span className="text-[#3A302B] font-medium text-base whitespace-nowrap">od 800 Kč</span>
</div>
</div>
</div>

<div>
<h3 className="font-serif-custom text-2xl text-[#3A302B] mb-6 font-medium uppercase tracking-wider text-center md:text-left">Barvení</h3>
<div className="space-y-4">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#E8DCCB] pb-3 gap-2 sm:gap-0">
<span className="text-[#3A302B] text-base">Balayage / Ombré (včetně tónování)</span>
<span className="text-[#3A302B] font-medium text-base whitespace-nowrap">od 3 500 Kč</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#E8DCCB] pb-3 gap-2 sm:gap-0">
<span className="text-[#3A302B] text-base">Celkové barvení (jedna barva)</span>
<span className="text-[#3A302B] font-medium text-base whitespace-nowrap">od 2 200 Kč</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#E8DCCB] pb-3 gap-2 sm:gap-0">
<span className="text-[#3A302B] text-base">Tónování / Glossing</span>
<span className="text-[#3A302B] font-medium text-base whitespace-nowrap">od 1 200 Kč</span>
</div>
</div>
</div>

<div>
<h3 className="font-serif-custom text-2xl text-[#3A302B] mb-6 font-medium uppercase tracking-wider text-center md:text-left">Péče</h3>
<div className="space-y-4">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#E8DCCB] pb-3 gap-2 sm:gap-0">
<span className="text-[#3A302B] text-base">Keratinové vyhlazení vlasů</span>
<span className="text-[#3A302B] font-medium text-base whitespace-nowrap">od 2 500 Kč</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#E8DCCB] pb-3 gap-2 sm:gap-0">
<span className="text-[#3A302B] text-base">Hloubková regenerační kúra (při střihu)</span>
<span className="text-[#3A302B] font-medium text-base whitespace-nowrap">od 900 Kč</span>
</div>
</div>
</div>
</div>
<p className="text-xs text-center text-[#7A6B63] mt-16 italic font-light">
                * Všechny ceny jsou konečné a zahrnují mytí, použití prémiové kosmetiky a profesionální poradenství. Přesná cena závisí na délce a hustotě vlasů.
            </p>
</div>
</section>

<section className="py-24 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight text-[#3A302B] mb-16 text-center font-medium">Slova našich klientek</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-[#E8DCCB]/40 bg-[#FDFBF7] flex flex-col">
<div className="flex text-[#C5B39B] mb-6">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-[#7A6B63] font-light text-sm leading-relaxed flex-grow mb-8 italic">
                        „Hledala jsem salon, kde mi nevytvoří jen na chvíli hezký účes, ale poradí mi s dlouhodobou péčí. Ve Studiu Élise jsem našla profesionalitu, nádherné prostředí a úžasný výsledek balayage.“
                    </p>
<div className="border-t border-[#E8DCCB]/40 pt-4">
<p className="text-[#3A302B] font-medium text-sm">Martina K.</p>
<p className="text-xs text-[#7A6B63]">Klientka od roku 2021</p>
</div>
</div>

<div className="p-8 border border-[#E8DCCB]/40 bg-[#FDFBF7] flex flex-col">
<div className="flex text-[#C5B39B] mb-6">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-[#7A6B63] font-light text-sm leading-relaxed flex-grow mb-8 italic">
                        „Nádherný zážitek od příchodu až po odchod. Miluji tu klidnou atmosféru, žádný stres, jen čas pro sebe. Můj střih drží tvar i týdny po návštěvě, což je u mých jemných vlasů malý zázrak.“
                    </p>
<div className="border-t border-[#E8DCCB]/40 pt-4">
<p className="text-[#3A302B] font-medium text-sm">Veronika S.</p>
<p className="text-xs text-[#7A6B63]">Klientka od roku 2022</p>
</div>
</div>

<div className="p-8 border border-[#E8DCCB]/40 bg-[#FDFBF7] flex flex-col">
<div className="flex text-[#C5B39B] mb-6">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-[#7A6B63] font-light text-sm leading-relaxed flex-grow mb-8 italic">
                        „Zachránily mi vlasy po nepovedeném odbarvování jinde. Mají ohromný cit pro barvu a vždy přesně vědí, jaký tón mi sedne. Už bych nešla jinam.“
                    </p>
<div className="border-t border-[#E8DCCB]/40 pt-4">
<p className="text-[#3A302B] font-medium text-sm">Klára P.</p>
<p className="text-xs text-[#7A6B63]">Klientka od roku 2020</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="kontakt">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="w-full lg:w-1/2 flex flex-col justify-center">
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight text-[#3A302B] mb-8 font-medium">Rezervujte si termín</h2>
<p className="text-[#7A6B63] font-light leading-relaxed mb-12 max-w-md">
                    Pro zajištění maximálního komfortu a dostatku času pro vaši péči přijímáme klientky pouze na základě předchozí rezervace.
                </p>
<div className="space-y-8 mb-12">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#C5B39B] mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<p className="text-xs uppercase tracking-widest text-[#7A6B63] mb-1">Adresa</p>
<p className="text-[#3A302B] text-base">Mánesova 123/45<br/>120 00 Praha 2 – Vinohrady</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#C5B39B] mt-1" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div>
<p className="text-xs uppercase tracking-widest text-[#7A6B63] mb-1">Otevírací doba</p>
<p className="text-[#3A302B] text-base">Po – Pá: 9:00 – 19:00<br/>So – Ne: Zavřeno</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#C5B39B] mt-1" icon="solar:phone-linear" width="24"></iconify-icon>
<div>
<p className="text-xs uppercase tracking-widest text-[#7A6B63] mb-1">Kontakt</p>
<p className="text-[#3A302B] text-base">+420 777 123 456<br/>rezervace@studioelise.cz</p>
</div>
</div>
</div>
<div>
<a className="inline-flex items-center justify-center bg-[#3A302B] text-[#FDFBF7] hover:bg-[#52453F] transition-colors duration-500 px-8 py-4 text-xs uppercase tracking-widest w-full sm:w-auto text-center" href="#">
                        Vybrat termín online
                    </a>
</div>
</div>

<div className="w-full lg:w-1/2 bg-[#F5EFE6] relative aspect-square md:aspect-auto overflow-hidden group">

<img alt="Praha Vinohrady" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply img-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 backdrop-blur px-8 py-6 text-center border border-[#E8DCCB]/40 shadow-xl">
<p className="font-serif-custom text-2xl text-[#3A302B] font-medium mb-1">Vinohrady</p>
<p className="text-xs uppercase tracking-widest text-[#7A6B63]">Praha 2</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#3A302B] text-[#FDFBF7] py-16 border-t border-[#52453F]">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<a className="font-serif-custom text-2xl uppercase tracking-tighter text-[#FDFBF7] block mb-2" href="#">
                    Studio Élise
                </a>
<p className="text-[#A89F96] text-xs font-light tracking-wide">© 2024 Studio Élise. Všechna práva vyhrazena.</p>
</div>
<div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-[#A89F96]">
<a className="hover:text-[#FDFBF7] transition-colors" href="#">Ochrana osobních údajů</a>
<a className="hover:text-[#FDFBF7] transition-colors" href="#">Obchodní podmínky</a>
<a className="hover:text-[#FDFBF7] transition-colors flex items-center gap-1" href="https://instagram.com" target="_blank">
                    Instagram
                </a>
</div>
</div>
</footer>

    </>
  );
}
