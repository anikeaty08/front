import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function openModal() {
            const modal = document.getElementById('deskModal');
            modal.classList.remove('hidden-modal');
            modal.classList.add('visible-modal');
        }

        function closeModal() {
            const modal = document.getElementById('deskModal');
            modal.classList.remove('visible-modal');
            modal.classList.add('hidden-modal');
        }

        // Close modal when clicking outside
        document.getElementById('deskModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#889DB2]/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter uppercase text-black" href="#">
                Aura Builder
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#889DB2]">
<a className="hover:text-[#ED9B38] transition-colors" href="#offers">Angebote</a>
<a className="hover:text-[#ED9B38] transition-colors" href="#map">Verfügbarkeit</a>
<a className="hover:text-[#ED9B38] transition-colors" href="#faq">FAQ</a>
</div>
<a className="bg-black text-white text-xs font-medium px-5 py-2.5 rounded hover:bg-[#ED9B38] transition-colors duration-300" href="#contact">
                Besichtigung anfragen
            </a>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
<span className="w-2 h-2 rounded-full bg-[#ED9B38]"></span>
<span className="text-xs font-medium text-[#889DB2] tracking-wide uppercase">Zug &amp; Baar</span>
</div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
                    Coworking &amp; <br/>
                    Virtual Office in <span className="text-[#ED9B38]">Zentralschweiz</span>.
                </h1>
<p className="text-lg text-[#889DB2] leading-relaxed max-w-lg">
                    Flexible Bürolösungen ohne Fixkostenrisiko. Verlegen Sie Ihr Domizil oder nutzen Sie fertig eingerichtete Arbeitsplätze mit 24/7 Zugang und voller Infrastruktur.
                </p>
<div className="flex flex-wrap gap-4 text-sm text-[#889DB2]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#ED9B38]" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>1 Monat Kündigungsfrist</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#ED9B38]" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Alles aus einer Hand</span>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 bg-[#ED9B38] text-white px-6 py-3 rounded text-sm font-medium hover:bg-black transition-colors duration-300" href="#contact">
                        Besichtigung anfragen
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-[#ED9B38]/10 rounded-2xl -z-10 blur-xl"></div>
<img alt="Modernes Büro in Zug" className="rounded-xl shadow-lg object-cover w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-[#889DB2]/10">
<div className="max-w-3xl mx-auto px-6 text-center space-y-6">
<h2 className="text-3xl font-medium tracking-tight">Suchen Sie Flexibilität statt Fixkosten?</h2>
<p className="text-[#889DB2] leading-relaxed">
                Herkömmliche Büromieten binden Kapital und erfordern langfristige Verträge. Wir bieten Ihnen die Freiheit, monatlich zu entscheiden. Ob repräsentative Geschäftsadresse für Ihr Unternehmen oder ein vollausgestatteter Arbeitsplatz – wir kümmern uns um die Infrastruktur, Sie fokussieren sich auf Ihr Geschäft.
            </p>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="offers">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Unsere Lösungen</h2>
<p className="text-[#889DB2]">Drei Modelle für Ihren geschäftlichen Erfolg in Zug und Baar.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<a className="group block p-8 rounded-xl border border-gray-100 bg-white hover:border-[#ED9B38] transition-colors duration-300 shadow-sm hover:shadow-md" href="#virtual-office">
<div className="w-12 h-12 rounded bg-[#ED9B38]/10 flex items-center justify-center text-[#ED9B38] mb-6">
<iconify-icon icon="solar:mailbox-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Virtual Office</h3>
<p className="text-sm text-[#889DB2] leading-relaxed mb-6">
                    Professionelle Geschäftsadresse und Domizil ohne physischen Büroraum. Ideal für Firmeneintragungen.
                </p>
<span className="text-[#ED9B38] text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">Details ansehen →</span>
</a>

<a className="group block p-8 rounded-xl border border-gray-100 bg-white hover:border-[#ED9B38] transition-colors duration-300 shadow-sm hover:shadow-md" href="#fix-desk">
<div className="w-12 h-12 rounded bg-[#ED9B38]/10 flex items-center justify-center text-[#ED9B38] mb-6">
<iconify-icon icon="solar:chair-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Fixer Arbeitsplatz</h3>
<p className="text-sm text-[#889DB2] leading-relaxed mb-6">
                    Ihr fester Schreibtisch in einem professionellen Umfeld. Monatlich flexibel und fertig eingerichtet.
                </p>
<span className="text-[#ED9B38] text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">Details ansehen →</span>
</a>

<a className="group block p-8 rounded-xl border border-gray-100 bg-white hover:border-[#ED9B38] transition-colors duration-300 shadow-sm hover:shadow-md" href="#own-office">
<div className="w-12 h-12 rounded bg-[#ED9B38]/10 flex items-center justify-center text-[#ED9B38] mb-6">
<iconify-icon icon="solar:key-minimalistic-square-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Eigenes Office</h3>
<p className="text-sm text-[#889DB2] leading-relaxed mb-6">
                    Ein abschliessbares Büro für mehr Ruhe und Diskretion. Repräsentativ und eigenständig.
                </p>
<span className="text-[#ED9B38] text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">Details ansehen →</span>
</a>
</div>
</section>

<section className="py-24 bg-gray-50" id="virtual-office">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<img alt="Virtual Office Atmosphäre" className="rounded-xl shadow-sm w-full h-[400px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2370&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2 space-y-6">
<div className="text-[#ED9B38] text-sm font-medium tracking-wide uppercase">Geschäftsadresse</div>
<h2 className="text-3xl font-medium tracking-tight">Virtual Office</h2>
<p className="text-[#889DB2]">Verlegen Sie Ihr Domizil nach Zug oder Baar und profitieren Sie von einer seriösen Aussenwirkung.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Professionelle Geschäftsadresse für Kunden und Behörden</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Unterstützung bei der Firmeneintragung</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Steuerliche Vorteile durch Standortwahl (Hinweis: Keine Steuerberatung)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Seriöses Auftreten ohne physisches Büro</span>
</li>
</ul>
<a className="inline-block mt-4 border border-[#000000] text-[#000000] px-6 py-2 rounded text-sm font-medium hover:bg-[#000000] hover:text-white transition-colors" href="#contact">Besichtigung anfragen</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="fix-desk">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<div className="text-[#ED9B38] text-sm font-medium tracking-wide uppercase">Coworking</div>
<h2 className="text-3xl font-medium tracking-tight">Fixer Arbeitsplatz</h2>
<p className="text-[#889DB2]">Ein fester Desk in einem kundenfreundlichen Umfeld. Alles ist für Sie vorbereitet.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Fertig eingerichteter Arbeitsplatz (Plug &amp; Play)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Monatlich flexibel buchbar, keine Unterhaltskosten</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Nutzung von Sitzungsräumen inklusive</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Gute ÖV-Anbindung &amp; Parkplätze separat mietbar</span>
</li>
</ul>
<a className="inline-block mt-4 border border-[#000000] text-[#000000] px-6 py-2 rounded text-sm font-medium hover:bg-[#000000] hover:text-white transition-colors" href="#contact">Besichtigung anfragen</a>
</div>
<div>
<img alt="Fix Desk Setup" className="rounded-xl shadow-sm w-full h-[400px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2370&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="own-office">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<img alt="Abschliessbares Büro" className="rounded-xl shadow-sm w-full h-[400px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&amp;w=2370&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2 space-y-6">
<div className="text-[#ED9B38] text-sm font-medium tracking-wide uppercase">Privatsphäre</div>
<h2 className="text-3xl font-medium tracking-tight">Eigenes Office</h2>
<p className="text-[#889DB2]">Für Unternehmer, die Ruhe und einen eigenen, abschliessbaren Bereich benötigen.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Eigenständiges, abschliessbares Büro</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Repräsentativ für Kundenempfänge</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Zugang 24/7 / 365</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ED9B38] shrink-0 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-gray-700">Inklusive Infrastruktur (WLAN, Drucker)</span>
</li>
</ul>
<a className="inline-block mt-4 border border-[#000000] text-[#000000] px-6 py-2 rounded text-sm font-medium hover:bg-[#000000] hover:text-white transition-colors" href="#contact">Besichtigung anfragen</a>
</div>
</div>
</section>

<section className="py-24 bg-black text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="space-y-4">
<iconify-icon className="text-[#ED9B38]" icon="solar:graph-up-linear" width="32"></iconify-icon>
<h4 className="font-medium text-lg">Preis-Leistung</h4>
<p className="text-sm text-gray-400">Sehr gutes Verhältnis. Keine versteckten Kosten, alles transparent.</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-[#ED9B38]" icon="solar:calendar-linear" width="32"></iconify-icon>
<h4 className="font-medium text-lg">Hohe Flexibilität</h4>
<p className="text-sm text-gray-400">Nur 1 Monat Kündigungsfrist. Arbeitsplatz jederzeit wechselbar.</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-[#ED9B38]" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h4 className="font-medium text-lg">Direkter Kontakt</h4>
<p className="text-sm text-gray-400">Unkomplizierte Organisation mit einem festen Ansprechpartner.</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-[#ED9B38]" icon="solar:printer-linear" width="32"></iconify-icon>
<h4 className="font-medium text-lg">Volle Infrastruktur</h4>
<p className="text-sm text-gray-400">WLAN, Drucker, Scanner, Mobiliar und Kundenparkplätze vorhanden.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="map">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Büroplan &amp; Verfügbarkeit</h2>
<p className="text-[#889DB2]">Wählen Sie einen freien Platz für Details.</p>
</div>
<div className="flex gap-4 text-xs font-medium mt-4 md:mt-0">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> Frei</div>
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-400"></span> Besetzt</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-8 bg-gray-50 overflow-hidden relative shadow-inner">

<div className="grid grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto relative">

<div className="absolute -top-6 left-0 text-[10px] text-gray-400 tracking-widest uppercase">Eingang / Empfang</div>

<div className="col-span-2 row-span-2 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-white text-gray-400 text-xs tracking-wider uppercase p-4">
                        Sitzungszimmer
                    </div>


<div className="aspect-square bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 hover:shadow-md transition-all group relative" onclick="openModal()">
<div className="w-2 h-2 rounded-full bg-emerald-500 mb-2"></div>
<iconify-icon className="text-gray-300 group-hover:text-emerald-500 transition-colors" icon="solar:laptop-linear"></iconify-icon>
<span className="text-[10px] text-gray-400 mt-1">#01</span>
</div>

<div className="aspect-square bg-gray-100 border border-gray-200 rounded-lg flex flex-col items-center justify-center opacity-70 cursor-not-allowed">
<div className="w-2 h-2 rounded-full bg-red-400 mb-2"></div>
<iconify-icon className="text-gray-300" icon="solar:laptop-linear"></iconify-icon>
<span className="text-[10px] text-gray-400 mt-1">#02</span>
</div>

<div className="aspect-square bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 hover:shadow-md transition-all group" onclick="openModal()">
<div className="w-2 h-2 rounded-full bg-emerald-500 mb-2"></div>
<iconify-icon className="text-gray-300 group-hover:text-emerald-500 transition-colors" icon="solar:laptop-linear"></iconify-icon>
<span className="text-[10px] text-gray-400 mt-1">#03</span>
</div>

<div className="aspect-square bg-gray-100 border border-gray-200 rounded-lg flex flex-col items-center justify-center opacity-70 cursor-not-allowed">
<div className="w-2 h-2 rounded-full bg-red-400 mb-2"></div>
<iconify-icon className="text-gray-300" icon="solar:laptop-linear"></iconify-icon>
<span className="text-[10px] text-gray-400 mt-1">#04</span>
</div>

<div className="col-span-2 aspect-[2/1] bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 hover:shadow-md transition-all group" onclick="openModal()">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-gray-600">Office A</span>
</div>
<iconify-icon className="text-gray-300 group-hover:text-emerald-500 transition-colors" icon="solar:armchair-2-linear" width="24"></iconify-icon>
</div>

<div className="aspect-square bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 hover:shadow-md transition-all group" onclick="openModal()">
<div className="w-2 h-2 rounded-full bg-emerald-500 mb-2"></div>
<iconify-icon className="text-gray-300 group-hover:text-emerald-500 transition-colors" icon="solar:laptop-linear"></iconify-icon>
<span className="text-[10px] text-gray-400 mt-1">#05</span>
</div>

<div className="aspect-square bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 hover:shadow-md transition-all group" onclick="openModal()">
<div className="w-2 h-2 rounded-full bg-emerald-500 mb-2"></div>
<iconify-icon className="text-gray-300 group-hover:text-emerald-500 transition-colors" icon="solar:laptop-linear"></iconify-icon>
<span className="text-[10px] text-gray-400 mt-1">#06</span>
</div>
</div>
</div>
</div>
</section>

<div className="hidden-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" id="deskModal">
<div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-[sweep_0.3s_ease-out]">
<button className="absolute top-4 right-4 text-gray-400 hover:text-black z-10" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="h-40 bg-gray-100 relative">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2370&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-4 bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded font-medium uppercase tracking-wide">Verfügbar</div>
</div>
<div className="p-6">
<h3 className="text-xl font-medium mb-1">Arbeitsplatz / Office</h3>
<p className="text-sm text-[#889DB2] mb-4">Fertig eingerichteter Arbeitsplatz</p>
<div className="space-y-2 mb-6 text-sm text-gray-600">
<div className="flex justify-between border-b border-gray-50 py-1">
<span>Laufzeit</span>
<span className="font-medium text-black">Monatlich flexibel</span>
</div>
<div className="flex justify-between border-b border-gray-50 py-1">
<span>Zugang</span>
<span className="font-medium text-black">24/7</span>
</div>
<div className="flex justify-between border-b border-gray-50 py-1">
<span>Infrastruktur</span>
<span className="font-medium text-black">Inklusive</span>
</div>
</div>
<a className="block w-full text-center bg-[#ED9B38] text-white py-3 rounded font-medium hover:bg-black transition-colors" href="#contact" onclick="closeModal()">
                    Besichtigung anfragen
                </a>
</div>
</div>
</div>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight">Ihr Weg zum Arbeitsplatz</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-[#889DB2]/30 -z-10"></div>
<div className="flex flex-col items-center text-center bg-gray-50 z-10">
<div className="w-16 h-16 rounded-full bg-white border border-[#ED9B38] flex items-center justify-center text-[#ED9B38] shadow-sm mb-6">
<span className="text-xl font-semibold">1</span>
</div>
<h3 className="text-lg font-medium mb-2">Anfrage</h3>
<p className="text-sm text-[#889DB2]">Sie kontaktieren uns für Ihr gewünschtes Angebot.</p>
</div>
<div className="flex flex-col items-center text-center bg-gray-50 z-10">
<div className="w-16 h-16 rounded-full bg-white border border-[#ED9B38] flex items-center justify-center text-[#ED9B38] shadow-sm mb-6">
<span className="text-xl font-semibold">2</span>
</div>
<h3 className="text-lg font-medium mb-2">Besichtigung</h3>
<p className="text-sm text-[#889DB2]">Wir zeigen Ihnen die Räumlichkeiten in Zug oder Baar.</p>
</div>
<div className="flex flex-col items-center text-center bg-gray-50 z-10">
<div className="w-16 h-16 rounded-full bg-white border border-[#ED9B38] flex items-center justify-center text-[#ED9B38] shadow-sm mb-6">
<span className="text-xl font-semibold">3</span>
</div>
<h3 className="text-lg font-medium mb-2">Nutzung</h3>
<p className="text-sm text-[#889DB2]">Unkomplizierte Organisation und direkter Start.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h2 className="text-3xl font-medium tracking-tight">Standorte Zug &amp; Baar</h2>
<p className="text-[#889DB2] leading-relaxed">
                    Unsere Räumlichkeiten befinden sich in verkehrsgünstiger Lage im Kanton Zug. Sowohl in Zug als auch in Baar profitieren Sie von einer exzellenten Erreichbarkeit mit öffentlichen Verkehrsmitteln sowie vorhandenen Kundenparkplätzen. Das Umfeld ist repräsentativ und kundenfreundlich.
                </p>
</div>
<div className="rounded-xl overflow-hidden shadow-lg h-[300px] relative bg-gray-200">

<img alt="Standort Umgebung" className="w-full h-full object-cover filter grayscale opacity-80" src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&amp;w=2248&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-white/90 px-6 py-3 rounded shadow-lg backdrop-blur text-center">
<div className="font-medium text-black">Zentralschweiz</div>
<div className="text-xs text-[#889DB2]">Zug • Baar</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-center">Häufige Fragen</h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-gray-100 shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">Wie sind die Kündigungsfristen?</span>
<span className="text-[#ED9B38] group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#889DB2]">
                        Wir bieten hohe Flexibilität. Die Kündigungsfrist beträgt lediglich 1 Monat.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-gray-100 shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">Gibt es Parkplätze?</span>
<span className="text-[#ED9B38] group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#889DB2]">
                        Ja, es sind Kundenparkplätze vorhanden. Dauerparkplätze können separat angemietet werden.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-gray-100 shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">Wann habe ich Zutritt zum Büro?</span>
<span className="text-[#ED9B38] group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#889DB2]">
                        Sie haben 24/7 Zugang an 365 Tagen im Jahr.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-gray-100 shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">Kann ich Sitzungsräume nutzen?</span>
<span className="text-[#ED9B38] group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#889DB2]">
                        Ja, die Nutzung von Sitzungsräumen ist bei unseren Arbeitsplatz-Lösungen inbegriffen.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-gray-100 shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">Was beinhaltet das Virtual Office?</span>
<span className="text-[#ED9B38] group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#889DB2]">
                        Es beinhaltet eine professionelle Geschäftsadresse (Domizil) in Zug oder Baar, Unterstützung bei der Firmeneintragung und sorgt für Seriosität gegenüber Kunden und Behörden.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-gray-100 shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">Ist die Infrastruktur inklusive?</span>
<span className="text-[#ED9B38] group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#889DB2]">
                        Ja, WLAN, Drucker, Scanner und Mobiliar sind im Preis enthalten.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="contact">
<div className="max-w-xl mx-auto px-6 text-center space-y-8">
<h2 className="text-4xl font-medium tracking-tight">Interesse geweckt?</h2>
<p className="text-[#889DB2] text-lg">
                Gerne zeigen wir Ihnen unsere Räumlichkeiten in Zug und Baar persönlich. Kontaktieren Sie uns für eine unverbindliche Besichtigung.
            </p>
<form className="space-y-4 text-left bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide">Name</label>
<input className="w-full bg-white border border-gray-200 rounded p-3 text-sm focus:outline-none focus:border-[#ED9B38] transition-colors" placeholder="Ihr Name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide">E-Mail</label>
<input className="w-full bg-white border border-gray-200 rounded p-3 text-sm focus:outline-none focus:border-[#ED9B38] transition-colors" placeholder="ihre@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide">Interesse an</label>
<select className="w-full bg-white border border-gray-200 rounded p-3 text-sm focus:outline-none focus:border-[#ED9B38] transition-colors">
<option>Besichtigung allgemein</option>
<option>Fixer Arbeitsplatz</option>
<option>Virtual Office</option>
<option>Eigenes Office</option>
</select>
</div>
<button className="w-full bg-[#ED9B38] text-white font-medium py-3 rounded hover:bg-black transition-colors duration-300" type="button">
                    Besichtigung anfragen
                </button>
</form>
</div>
</section>

<footer className="bg-black text-[#889DB2] py-12 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-white font-medium tracking-tight uppercase">AURA BUILDER</div>
<div className="text-sm">
                © 2023 Aura Builder. Alle Rechte vorbehalten.
            </div>
</div>
</footer>



    </>
  );
}
