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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-[#F5F4F0]/90 backdrop-blur-md border-b border-[#8E8E83]/20">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tighter text-[#2C2C2C] uppercase" href="/">
                Reinpo
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C2C2C]/80">

<div className="relative group h-20 flex items-center">
<button className="flex items-center gap-1.5 hover:text-[#4A6741] transition-colors h-full">
                        Produkte
                        <iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>

<div className="absolute top-20 left-0 w-64 bg-white border border-[#8E8E83]/20 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col z-50">
<a className="px-5 py-3.5 text-sm text-[#2C2C2C] hover:bg-[#F5F4F0] hover:text-[#4A6741] border-b border-[#8E8E83]/10 transition-colors" href="/produkte/transporttanks">Transporttanks</a>
<a className="px-5 py-3.5 text-sm text-[#2C2C2C] hover:bg-[#F5F4F0] hover:text-[#4A6741] border-b border-[#8E8E83]/10 transition-colors" href="/produkte/aufzuchtbecken">Aufzuchtbecken</a>
<a className="px-5 py-3.5 text-sm text-[#2C2C2C] hover:bg-[#F5F4F0] hover:text-[#4A6741] border-b border-[#8E8E83]/10 transition-colors" href="/produkte/wannen-becken">Wannen &amp; Becken</a>
<a className="px-5 py-3.5 text-sm text-[#2C2C2C] hover:bg-[#F5F4F0] hover:text-[#4A6741] border-b border-[#8E8E83]/10 transition-colors" href="/produkte/bruteinrichtungen">Bruteinrichtungen</a>
<a className="px-5 py-3.5 text-sm text-[#2C2C2C] hover:bg-[#F5F4F0] hover:text-[#4A6741] transition-colors" href="/produkte/zubehoer">Zubehör</a>
</div>
</div>
<a className="hover:text-[#4A6741] transition-colors h-20 flex items-center" href="/referenzen">Referenzen</a>
<a className="hover:text-[#4A6741] transition-colors h-20 flex items-center" href="/ueber-uns">Über uns</a>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-xs font-medium text-[#8E8E83]">
<span className="text-[#2C2C2C]">DE</span>
<span className="w-px h-3 bg-[#8E8E83]/40"></span>
<a className="hover:text-[#2C2C2C] transition-colors" href="#">EN</a>
</div>
<a className="hidden md:inline-flex bg-[#2C2C2C] text-[#F5F4F0] px-6 py-3 text-xs font-medium uppercase tracking-widest hover:bg-[#4A6741] transition-colors rounded-none" href="/anfrage">
                    Anfrage
                </a>
<button className="md:hidden text-[#2C2C2C]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<main id="homepage">

<header className="relative w-full h-screen min-h-[600px] flex flex-col pt-20 bg-[#F5F4F0]">
<div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

<div className="flex flex-col justify-center px-6 md:px-12 lg:pl-16 lg:pr-24 py-12 lg:py-0 relative z-10">
<div className="relative pl-6 md:pl-8 before:absolute before:inset-y-0 before:left-0 before:w-1.5 before:bg-[#4A6741] before:animate-grow-vertical">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-[#2C2C2C] leading-[1.05]">
                            Maßgefertigte<br/>
                            Aquakultur-<br/>
                            Ausrüstung.
                        </h1>
</div>
<p className="mt-8 text-lg md:text-xl text-[#8E8E83] leading-relaxed max-w-lg font-light">
                        Konstruiert für die professionelle Fischzucht im DACH-Raum.
                    </p>
<div className="mt-12 flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center bg-[#2C2C2C] text-[#F5F4F0] px-8 py-4 text-sm font-medium hover:bg-[#4A6741] transition-colors rounded-none" href="#produkte">
                            Produkte entdecken
                        </a>
<a className="inline-flex items-center justify-center border border-[#8E8E83]/40 bg-transparent text-[#2C2C2C] px-8 py-4 text-sm font-medium hover:border-[#2C2C2C] transition-colors rounded-none" href="/anfrage">
                            Anfrage stellen
                        </a>
</div>
</div>

<div className="relative h-[40vh] lg:h-auto border-l border-[#8E8E83]/20 bg-[#E8E7E3] overflow-hidden">

<img alt="Transporttank Fertigung" className="object-cover w-full h-full opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
</div>

<div className="border-t border-[#8E8E83]/20 bg-[#F5F4F0]">
<div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row gap-6 md:gap-12 text-xs font-medium uppercase tracking-widest text-[#2C2C2C]/70">
<span className="flex items-center gap-2.5">
<iconify-icon className="text-[#4A6741] text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> 
                        100% Maßanfertigung
                    </span>
<span className="flex items-center gap-2.5">
<iconify-icon className="text-[#4A6741] text-base" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> 
                        DACH Kernmarkt
                    </span>
<span className="flex items-center gap-2.5">
<iconify-icon className="text-[#4A6741] text-base" icon="solar:chat-round-check-linear" strokeWidth="1.5"></iconify-icon> 
                        Individuelle Beratung
                    </span>
</div>
</div>
</header>

<section className="py-24 px-6 bg-[#2C2C2C] text-[#F5F4F0]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-between">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Präzision aus Prinzip.</h2>
<p className="text-base text-[#F5F4F0]/70 leading-relaxed">
                        Seit über zwei Jahrzehnten entwickelt und fertigt Reinpo funktionale Ausrüstung für die Aquakultur. Wir bauen robuste Systeme, die den Arbeitsalltag erleichtern und höchste biologische Anforderungen erfüllen – ohne Kompromisse bei Material und Verarbeitung.
                    </p>
</div>
<div className="grid grid-cols-2 gap-x-12 gap-y-8 border-l border-[#F5F4F0]/20 pl-8 md:pl-12">
<div>
<span className="block text-3xl font-medium tracking-tight mb-1 text-[#4A6741]">20+</span>
<span className="text-xs text-[#F5F4F0]/60 uppercase tracking-widest">Jahre Erfahrung</span>
</div>
<div>
<span className="block text-3xl font-medium tracking-tight mb-1 text-[#4A6741]">100%</span>
<span className="text-xs text-[#F5F4F0]/60 uppercase tracking-widest">Manufaktur</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F5F4F0]" id="produkte">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#4A6741] mb-3 block">Kategorien</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2C2C2C]">Unsere Systeme</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<a className="group flex flex-col bg-white border border-[#8E8E83]/20 hover:border-[#4A6741] transition-colors relative overflow-hidden" href="/produkte/transporttanks">
<div className="w-full aspect-[4/3] bg-[#E8E7E3] overflow-hidden relative">
<img alt="Transporttanks" className="object-cover w-full h-full grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 md:p-8">
<iconify-icon className="text-2xl text-[#4A6741] mb-6 block" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-[#2C2C2C] mb-2 group-hover:text-[#4A6741] transition-colors">Transporttanks</h3>
<p className="text-sm text-[#8E8E83] leading-relaxed">Isolierte GFK-Tanks für den sicheren Lebendfischtransport.</p>
</div>
</a>
<a className="group flex flex-col bg-white border border-[#8E8E83]/20 hover:border-[#4A6741] transition-colors relative overflow-hidden" href="/produkte/aufzuchtbecken">
<div className="w-full aspect-[4/3] bg-[#E8E7E3] overflow-hidden relative">
<img alt="Aufzuchtbecken" className="object-cover w-full h-full grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 md:p-8">
<iconify-icon className="text-2xl text-[#4A6741] mb-6 block" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-[#2C2C2C] mb-2 group-hover:text-[#4A6741] transition-colors">Aufzuchtbecken</h3>
<p className="text-sm text-[#8E8E83] leading-relaxed">Lange Rinnen und professionelle Rundbecken aus GFK.</p>
</div>
</a>
<a className="group flex flex-col bg-white border border-[#8E8E83]/20 hover:border-[#4A6741] transition-colors relative overflow-hidden" href="/produkte/bruteinrichtungen">
<div className="w-full aspect-[4/3] bg-[#E8E7E3] overflow-hidden relative">
<img alt="Bruteinrichtungen" className="object-cover w-full h-full grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 md:p-8">
<iconify-icon className="text-2xl text-[#4A6741] mb-6 block" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-[#2C2C2C] mb-2 group-hover:text-[#4A6741] transition-colors">Bruteinrichtungen</h3>
<p className="text-sm text-[#8E8E83] leading-relaxed">Zugsche Flaschen und Erbrütungs-Apparate für Bruthausanlagen.</p>
</div>
</a>
<a className="group flex flex-col bg-white border border-[#8E8E83]/20 hover:border-[#4A6741] transition-colors relative overflow-hidden" href="/produkte/zubehoer">
<div className="w-full aspect-[4/3] bg-[#E8E7E3] overflow-hidden relative">
<img alt="Zubehör" className="object-cover w-full h-full grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 md:p-8">
<iconify-icon className="text-2xl text-[#4A6741] mb-6 block" icon="solar:settings-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-[#2C2C2C] mb-2 group-hover:text-[#4A6741] transition-colors">Zubehör</h3>
<p className="text-sm text-[#8E8E83] leading-relaxed">Spezialanfertigungen, Kescher, Sortiergitter und Rohrsysteme.</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-[#8E8E83]/20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#2C2C2C]">Lassen Sie uns über Ihr Projekt sprechen.</h2>
<a className="inline-flex items-center justify-center bg-[#2C2C2C] text-[#F5F4F0] px-8 py-4 text-sm font-medium hover:bg-[#4A6741] transition-colors rounded-none shrink-0 gap-2" href="/anfrage">
                    Anfrage stellen
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>
</main>

<main className="py-32 px-6 bg-[#F5F4F0] border-b border-[#8E8E83]/20" id="referenzen-page">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-[#2C2C2C] mb-6">Unsere Referenzen</h1>
<p className="text-lg text-[#8E8E83] leading-relaxed font-light">
                    Reinpo Fishing vertraut auf langjährige Partnerschaften mit führenden Aquakulturbetrieben im DACH-Raum.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#8E8E83]/20 p-8 flex flex-col justify-between h-full group hover:border-[#4A6741] transition-colors">
<div>
<div className="flex items-start justify-between mb-8">
<iconify-icon className="text-3xl text-[#2C2C2C]" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-medium uppercase tracking-widest text-[#4A6741] bg-[#4A6741]/10 px-3 py-1">Direkter Kontakt möglich</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#2C2C2C] mb-2">Fischzucht Seeache &amp; Partner OG</h3>
<div className="flex items-center gap-2 text-sm text-[#8E8E83] mb-8">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                            Österreich
                        </div>
<blockquote className="text-sm text-[#8E8E83] italic border-l-2 border-[#8E8E83]/20 pl-4 mb-8">
                            „Referenztext auf Anfrage verfügbar“
                        </blockquote>
</div>
<div className="pt-6 border-t border-[#8E8E83]/10">
<span className="block text-xs font-medium uppercase tracking-widest text-[#2C2C2C]/50 mb-1">Telefon</span>
<a className="text-sm font-medium text-[#2C2C2C] hover:text-[#4A6741] transition-colors" href="tel:+436644342946">+43 664 4342946</a>
</div>
</div>

<div className="bg-transparent border-2 border-dashed border-[#8E8E83]/30 p-8 flex flex-col items-center justify-center text-center min-h-[360px]">
<iconify-icon className="text-3xl text-[#8E8E83]/40 mb-4" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#8E8E83]/60 uppercase tracking-widest">Coming Soon</span>
</div>

<div className="hidden lg:flex bg-transparent border-2 border-dashed border-[#8E8E83]/30 p-8 flex-col items-center justify-center text-center min-h-[360px]">
<iconify-icon className="text-3xl text-[#8E8E83]/40 mb-4" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#8E8E83]/60 uppercase tracking-widest">Coming Soon</span>
</div>
</div>
<div className="mt-16 text-center border-t border-[#8E8E83]/20 pt-16">
<p className="text-base text-[#8E8E83] mb-6">Weitere detaillierte Referenzprojekte senden wir Ihnen gerne auf Anfrage zu.</p>
<a className="inline-flex items-center justify-center border border-[#8E8E83]/40 bg-transparent text-[#2C2C2C] px-8 py-4 text-sm font-medium hover:border-[#2C2C2C] transition-colors rounded-none" href="/anfrage">
                    Weitere Referenzen anfragen
                </a>
</div>
</div>
</main>

<main className="py-32 px-6 bg-white" id="anfrage-page">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2C2C2C] mb-4">Ihre Projektanfrage.</h1>
<p className="text-base text-[#8E8E83]">Senden Sie uns Ihre Anforderungen. Wir melden uns zeitnah mit einer Einschätzung oder einem Angebot.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-widest text-[#2C2C2C]" htmlFor="name">Name / Firma</label>
<input className="w-full bg-[#F5F4F0] border border-[#8E8E83]/20 p-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#4A6741] focus:ring-1 focus:ring-[#4A6741] transition-shadow rounded-none" id="name" name="name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-widest text-[#2C2C2C]" htmlFor="email">E-Mail-Adresse</label>
<input className="w-full bg-[#F5F4F0] border border-[#8E8E83]/20 p-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#4A6741] focus:ring-1 focus:ring-[#4A6741] transition-shadow rounded-none" id="email" name="email" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-widest text-[#2C2C2C]" htmlFor="phone">Telefonnummer (Optional)</label>
<input className="w-full bg-[#F5F4F0] border border-[#8E8E83]/20 p-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#4A6741] focus:ring-1 focus:ring-[#4A6741] transition-shadow rounded-none" id="phone" name="phone" type="tel"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-widest text-[#2C2C2C]" htmlFor="message">Ihre Nachricht / Spezifikationen</label>
<textarea className="w-full bg-[#F5F4F0] border border-[#8E8E83]/20 p-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#4A6741] focus:ring-1 focus:ring-[#4A6741] transition-shadow resize-none rounded-none" id="message" name="message" required="" rows="5"></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-[#2C2C2C] text-[#F5F4F0] px-8 py-4 text-sm font-medium hover:bg-[#4A6741] transition-colors flex justify-center items-center gap-2 rounded-none" type="submit">
                        Anfrage absenden
                        <iconify-icon className="text-lg" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</form>
</div>
</main>

<footer className="mt-auto bg-[#2C2C2C] text-[#F5F4F0] border-t border-[#F5F4F0]/10 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<span className="text-xl font-semibold tracking-tighter uppercase mb-4 block">Reinpo</span>
<p className="text-sm text-[#F5F4F0]/60 max-w-sm leading-relaxed">
                        Hersteller von hochwertiger Aquakultur-Ausrüstung. Konzipiert für Langlebigkeit und Effizienz in der professionellen Fischzucht.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest mb-4 text-[#F5F4F0]/40">Kontakt</h4>
<ul className="space-y-3 text-sm text-[#F5F4F0]/80">
<li>Max Ferdus</li>
<li className="pt-2">
<a className="hover:text-[#4A6741] transition-colors flex items-center gap-2" href="mailto:ferdus.max@gmail.com">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                                ferdus.max@gmail.com
                            </a>
</li>
<li>
<a className="hover:text-[#4A6741] transition-colors flex items-center gap-2" href="tel:+420778094886">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                                +420 778 094 886
                            </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest mb-4 text-[#F5F4F0]/40">Rechtliches</h4>
<ul className="space-y-3 text-sm text-[#F5F4F0]/80">
<li><a className="hover:text-[#4A6741] transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-[#4A6741] transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-[#4A6741] transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-[#F5F4F0]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F5F4F0]/40">
<p>© 2024 Reinpo Fishing. Alle Rechte vorbehalten.</p>
<div className="flex items-center gap-4">
<span className="uppercase tracking-widest">Manufakturqualität</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
