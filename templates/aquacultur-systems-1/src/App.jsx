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
      

<nav className="sticky top-0 z-50 bg-[#F5F4F0]/90 backdrop-blur-md border-b border-[#8E8E83]/20">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tighter text-[#2C2C2C] uppercase" href="#">
                Reinpo
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C2C2C]/80">
<a className="hover:text-[#4A6741] transition-colors" href="#produkte">Produkte</a>
<a className="hover:text-[#4A6741] transition-colors" href="#einzelprodukt">Systeme</a>
<a className="hover:text-[#4A6741] transition-colors" href="#referenzen">Referenzen</a>
<a className="hover:text-[#4A6741] transition-colors" href="#ueber-uns">Über uns</a>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-xs font-medium text-[#8E8E83]">
<span className="text-[#2C2C2C]">DE</span>
<span className="w-px h-3 bg-[#8E8E83]/40"></span>
<a className="hover:text-[#2C2C2C] transition-colors" href="#">EN</a>
</div>
<a className="hidden md:inline-flex bg-[#2C2C2C] text-[#F5F4F0] px-5 py-2.5 text-xs font-medium uppercase tracking-widest hover:bg-[#4A6741] transition-colors rounded-none" href="#kontakt">
                    Anfrage
                </a>
<button className="md:hidden text-[#2C2C2C]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full pt-16 pb-24 md:pt-24 md:pb-32 px-6">
<div className="max-w-7xl mx-auto flex flex-col gap-12">
<div className="max-w-3xl">
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-[#2C2C2C] leading-[1.1]">
                    Maßgefertigte <br className="hidden md:block"/>
                    Aquakultur-Ausrüstung.
                </h1>
<p className="mt-6 text-lg md:text-xl text-[#8E8E83] leading-relaxed max-w-2xl font-light">
                    Industrielle Präzision für die moderne Fischzucht. Konstruiert und gefertigt für höchste Ansprüche an Langlebigkeit und Funktionalität in Mitteleuropa.
                </p>
<div className="mt-10 flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center bg-[#2C2C2C] text-[#F5F4F0] px-8 py-4 text-sm font-medium hover:bg-[#4A6741] transition-colors rounded-none" href="#produkte">
                        Produkte entdecken
                    </a>
<a className="inline-flex items-center justify-center border border-[#8E8E83]/40 bg-transparent text-[#2C2C2C] px-8 py-4 text-sm font-medium hover:border-[#2C2C2C] transition-colors rounded-none" href="#kontakt">
                        Kontakt aufnehmen
                    </a>
</div>
</div>
<div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#E8E7E3] relative overflow-hidden">

<img alt="Industrielle Fertigung" className="object-cover w-full h-full opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 border border-[#8E8E83]/20 pointer-events-none"></div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white border-y border-[#8E8E83]/20" id="produkte">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#4A6741] mb-3 block">Kategorien</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2C2C2C]">Unsere Systeme</h2>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#2C2C2C] hover:text-[#4A6741] transition-colors" href="#">
                    Alle ansehen 
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group flex flex-col bg-[#F5F4F0] border border-[#8E8E83]/20 p-8 hover:border-[#4A6741]/50 transition-colors relative overflow-hidden" href="#einzelprodukt">
<div className="mb-12 text-[#2C2C2C]">
<iconify-icon className="text-3xl" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#2C2C2C] mb-2 group-hover:text-[#4A6741] transition-colors">Transporttanks</h3>
<p className="text-sm text-[#8E8E83] leading-relaxed">Isolierte GFK-Tanks für den sicheren und stressfreien Lebendfischtransport.</p>
</a>

<a className="group flex flex-col bg-[#F5F4F0] border border-[#8E8E83]/20 p-8 hover:border-[#4A6741]/50 transition-colors relative overflow-hidden" href="#einzelprodukt">
<div className="mb-12 text-[#2C2C2C]">
<iconify-icon className="text-3xl" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#2C2C2C] mb-2 group-hover:text-[#4A6741] transition-colors">Aufzuchtbecken</h3>
<p className="text-sm text-[#8E8E83] leading-relaxed">Rund- und Langstrombecken mit optimierter Hydraulik und Selbstreinigung.</p>
</a>

<a className="group flex flex-col bg-[#F5F4F0] border border-[#8E8E83]/20 p-8 hover:border-[#4A6741]/50 transition-colors relative overflow-hidden" href="#einzelprodukt">
<div className="mb-12 text-[#2C2C2C]">
<iconify-icon className="text-3xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#2C2C2C] mb-2 group-hover:text-[#4A6741] transition-colors">Brutanlagen</h3>
<p className="text-sm text-[#8E8E83] leading-relaxed">Kompakte Erbrütungssysteme (Zuglasysteme, Rinnen) für maximale Schlupfraten.</p>
</a>

<a className="group flex flex-col bg-[#F5F4F0] border border-[#8E8E83]/20 p-8 hover:border-[#4A6741]/50 transition-colors relative overflow-hidden" href="#einzelprodukt">
<div className="mb-12 text-[#2C2C2C]">
<iconify-icon className="text-3xl" icon="solar:settings-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#2C2C2C] mb-2 group-hover:text-[#4A6741] transition-colors">Zubehör</h3>
<p className="text-sm text-[#8E8E83] leading-relaxed">Spezialarmaturen, Ablaufgitter, Belüftungstechnik und Sortiergeräte.</p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6" id="einzelprodukt">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="w-full aspect-[4/3] bg-[#E8E7E3] relative border border-[#8E8E83]/20">

<img alt="Pro-Line Aufzuchtbecken" className="object-cover w-full h-full grayscale-[30%] mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-medium tracking-widest text-[#2C2C2C] border border-[#8E8E83]/20">
                        Serie R-2000
                    </div>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium uppercase tracking-widest text-[#8E8E83] mb-2">Aufzuchtbecken</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2C2C2C] mb-6">Pro-Line Rundbecken</h2>
<p className="text-base text-[#8E8E83] leading-relaxed mb-8">
                        Nahtlos gefertigtes GFK-Rundbecken für die intensive Fischzucht. Die konische Bodenform in Verbindung mit dem zentrischen Mittelablauf garantiert eine optimale Selbstreinigung und Strömungsführung, um Feststoffe effektiv auszuleiten.
                    </p>
<ul className="flex flex-col gap-4 mb-10 border-t border-[#8E8E83]/20 pt-6">
<li className="flex items-start gap-3 text-sm text-[#2C2C2C]">
<iconify-icon className="text-[#4A6741] text-lg mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Volumen: 2.000L bis 15.000L (Maßanfertigung möglich)</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2C2C2C]">
<iconify-icon className="text-[#4A6741] text-lg mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Material: Hochwertiges, lebensmittelechtes Glasfaserverstärktes Polyester (GFK)</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2C2C2C]">
<iconify-icon className="text-[#4A6741] text-lg mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Inklusive Doppelrohr-Ablauf-System zur Niveauregulierung</span>
</li>
</ul>
<a className="inline-flex items-center justify-center w-full md:w-auto bg-[#2C2C2C] text-[#F5F4F0] px-8 py-4 text-sm font-medium hover:bg-[#4A6741] transition-colors rounded-none" href="#kontakt">
                        Angebot anfragen
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#2C2C2C] text-[#F5F4F0]" id="ueber-uns">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-between">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Präzision aus Prinzip.</h2>
<p className="text-base text-[#F5F4F0]/70 leading-relaxed mb-6">
                    Seit über zwei Jahrzehnten entwickelt und fertigt Reinpo Ausrüstung für die Aquakultur. Unser Ansatz ist rein funktional: Wir bauen Systeme, die robust sind, den Arbeitsalltag erleichtern und den höchsten biologischen Anforderungen der Tiere entsprechen.
                </p>
<p className="text-base text-[#F5F4F0]/70 leading-relaxed">
                    Keine Kompromisse bei Material und Verarbeitung. Gefertigt in unserer eigenen Manufaktur, bewährt in hunderten Anlagen in Deutschland, Österreich und der Schweiz.
                </p>
</div>
<div className="grid grid-cols-2 gap-x-12 gap-y-8 border-l border-[#F5F4F0]/20 pl-8 md:pl-12">
<div>
<span className="block text-3xl font-medium tracking-tight mb-1 text-[#4A6741]">20+</span>
<span className="text-sm text-[#F5F4F0]/60 uppercase tracking-widest">Jahre Erfahrung</span>
</div>
<div>
<span className="block text-3xl font-medium tracking-tight mb-1 text-[#4A6741]">100%</span>
<span className="text-sm text-[#F5F4F0]/60 uppercase tracking-widest">Maßanfertigung</span>
</div>
<div>
<span className="block text-3xl font-medium tracking-tight mb-1 text-[#4A6741]">DACH</span>
<span className="text-sm text-[#F5F4F0]/60 uppercase tracking-widest">Kernmarkt</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-b border-[#8E8E83]/20" id="referenzen">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="shrink-0">
<span className="text-xl font-semibold tracking-tighter text-[#2C2C2C]/40 uppercase">AQUA-ZENTRUM SÜD</span>
</div>
<div className="flex-1 relative">
<iconify-icon className="absolute -top-6 -left-6 text-4xl text-[#8E8E83]/20" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<blockquote className="text-lg md:text-xl text-[#2C2C2C] font-light leading-relaxed">
                        "Die Transporttanks von Reinpo sind die zuverlässigsten auf dem Markt. Die Isolierung und die robusten Verschlüsse bewähren sich jeden Tag in unserem harten Praxisalltag. Eine Investition, die sich absolut gelohnt hat."
                    </blockquote>
<cite className="block mt-6 text-sm font-medium text-[#8E8E83] not-italic">
                        — Betriebsleitung, Aqua-Zentrum Süd GmbH
                    </cite>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="kontakt">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2C2C2C] mb-4">Lassen Sie uns über Ihr Projekt sprechen.</h2>
<p className="text-base text-[#8E8E83]">Senden Sie uns Ihre Anforderungen. Wir melden uns zeitnah mit einer Einschätzung oder einem Angebot.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-widest text-[#2C2C2C]" htmlFor="name">Name / Firma</label>
<input className="w-full bg-white border border-[#8E8E83]/40 p-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#4A6741] focus:ring-1 focus:ring-[#4A6741] transition-shadow rounded-none" id="name" name="name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-widest text-[#2C2C2C]" htmlFor="email">E-Mail-Adresse</label>
<input className="w-full bg-white border border-[#8E8E83]/40 p-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#4A6741] focus:ring-1 focus:ring-[#4A6741] transition-shadow rounded-none" id="email" name="email" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-widest text-[#2C2C2C]" htmlFor="phone">Telefonnummer (Optional)</label>
<input className="w-full bg-white border border-[#8E8E83]/40 p-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#4A6741] focus:ring-1 focus:ring-[#4A6741] transition-shadow rounded-none" id="phone" name="phone" type="tel"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-widest text-[#2C2C2C]" htmlFor="message">Ihre Nachricht / Spezifikationen</label>
<textarea className="w-full bg-white border border-[#8E8E83]/40 p-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#4A6741] focus:ring-1 focus:ring-[#4A6741] transition-shadow resize-none rounded-none" id="message" name="message" required="" rows="5"></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-[#2C2C2C] text-[#F5F4F0] px-8 py-4 text-sm font-medium hover:bg-[#4A6741] transition-colors flex justify-center items-center gap-2 rounded-none" type="submit">
                        Anfrage absenden
                        <iconify-icon className="text-lg" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="mt-auto bg-[#2C2C2C] text-[#F5F4F0] border-t border-[#F5F4F0]/10 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<span className="text-xl font-semibold tracking-tighter uppercase mb-4 block">Reinpo</span>
<p className="text-sm text-[#F5F4F0]/60 max-w-sm leading-relaxed">
                        Hersteller von hochwertiger Aquakultur-Ausrüstung. Konzipiert für Langlebigkeit und Effizienz in der modernen Fischzucht.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest mb-4 text-[#F5F4F0]/40">Kontakt</h4>
<ul className="space-y-3 text-sm text-[#F5F4F0]/80">
<li>Industriestraße 14</li>
<li>8000 Zürich, Schweiz</li>
<li className="pt-2"><a className="hover:text-[#4A6741] transition-colors" href="mailto:info@reinpo.ch">info@reinpo.ch</a></li>
<li><a className="hover:text-[#4A6741] transition-colors" href="tel:+41441234567">+41 44 123 45 67</a></li>
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
<span className="uppercase tracking-widest">Swiss Engineering</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
