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
orange: '#F97316', // Tailwind Orange-500 equivalent adjusted
dark: '#0A0A0A',
gray: '#171717',
light: '#F5F5F5',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-semibold tracking-tighter group-hover:bg-neutral-900 transition-colors">
                    G
                </div>
<span className="font-semibold text-lg tracking-tight text-neutral-900 group-hover:text-orange-600 transition-colors">GOBATIN</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-orange-600 transition-colors" href="#module">Lösungsmodule</a>
<a className="hover:text-orange-600 transition-colors" href="#beratung">Beratung</a>
<a className="hover:text-orange-600 transition-colors" href="#unternehmen">Unternehmen</a>
<a className="hover:text-orange-600 transition-colors" href="#karriere">Karriere</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#kontakt">Login</a>
<a className="bg-neutral-900 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-md" href="#kontakt">
                    Beratung anfordern
                </a>
</div>

<button className="md:hidden text-neutral-900">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden hero-gradient text-white">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-orange-400 mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Die Zukunft Ihrer Unternehmensprozesse
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 leading-[1.1]">
                    Intelligente ERP-Lösungen für den <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Mittelstand.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl font-light">
                    Wir transformieren komplexe Geschäftsabläufe in effiziente digitale Prozesse. GOBATIN Consulting ist Ihr strategischer Partner für ganzheitliche Unternehmenssoftware, Finanzbuchhaltung und Warenwirtschaft.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-orange-600 text-white font-medium hover:bg-orange-500 transition-all duration-200" href="#module">
                        Lösungen entdecken
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-neutral-700 bg-transparent text-white font-medium hover:bg-white/5 transition-all duration-200" href="#kontakt">
                        Gespräch vereinbaren
                    </a>
</div>
</div>
</div>

<div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[800px] h-[600px] bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl p-4 opacity-50 rotate-[-12deg] hover:rotate-0 transition-transform duration-700 ease-out">
<div className="w-full h-full bg-neutral-800/50 rounded overflow-hidden relative">
<div className="absolute top-4 left-4 right-4 h-8 bg-neutral-700/50 rounded flex items-center px-3 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>

<div className="absolute top-16 left-4 right-4 bottom-4 grid grid-cols-4 gap-4">
<div className="col-span-1 bg-neutral-700/30 rounded"></div>
<div className="col-span-3 grid grid-rows-3 gap-4">
<div className="row-span-1 bg-neutral-700/30 rounded"></div>
<div className="row-span-2 bg-neutral-700/30 rounded flex items-center justify-center text-neutral-600">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="64"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-100 bg-white py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-neutral-500 mb-8 font-medium">Vertrauen durch Kompetenz in Österreich und darüber hinaus</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">

<div className="flex items-center gap-2 font-semibold text-xl tracking-tight"><span className="iconify text-orange-600" data-icon="lucide:hexagon"></span> Industries AG</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight"><span className="iconify text-orange-600" data-icon="lucide:box"></span> Logistik Gmbh</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight"><span className="iconify text-orange-600" data-icon="lucide:triangle"></span> Alpine Trade</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight"><span className="iconify text-orange-600" data-icon="lucide:circle"></span> Future Finance</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="beratung">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Warum GOBATIN Consulting?</h2>
<p className="text-neutral-600 text-lg">Wir verbinden betriebswirtschaftliches Know-how mit technischer Exzellenz. Unsere Lösungen sind nicht nur Software, sondern das Fundament Ihres Wachstums.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 group">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:layers" data-width="24" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Modulare Architektur</h3>
<p className="text-neutral-600 leading-relaxed text-sm">
                        Keine starren Monolithen. Wir implementieren flexible Module, die genau dort ansetzen, wo Ihr Unternehmen sie benötigt – skalierbar vom Start-up bis zum Konzern.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 group">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:cpu" data-width="24" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Prozessautomatisierung</h3>
<p className="text-neutral-600 leading-relaxed text-sm">
                        Reduzieren Sie manuelle Tätigkeiten. Durch intelligente Workflows in Warenwirtschaft und Buchhaltung schaffen wir Freiräume für wertschöpfende Aufgaben.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 group">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:shield-check" data-width="24" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Compliance &amp; Sicherheit</h3>
<p className="text-neutral-600 leading-relaxed text-sm">
                        Unsere Lösungen erfüllen strengste österreichische und europäische Standards (RKSV, DSGVO). Finanzdaten sind sensibel – wir behandeln sie auch so.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="module">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Unsere Software-Module</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                        Alles in einem System.<br/>Perfekt integriert.
                    </h2>
</div>
<a className="text-neutral-900 font-medium hover:text-orange-600 inline-flex items-center gap-1 transition-colors" href="#">
                    Alle Module ansehen <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

<div className="col-span-1 lg:col-span-2 bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-100 relative overflow-hidden group hover:border-orange-200 transition-colors">
<div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="iconify" data-icon="lucide:banknote" data-width="200"></span>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white border border-neutral-200 rounded-lg flex items-center justify-center mb-6 text-neutral-900 shadow-sm">
<span className="iconify" data-icon="lucide:calculator" data-width="20"></span>
</div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-4 tracking-tight">Finanzbuchhaltung &amp; Controlling</h3>
<p className="text-neutral-600 mb-6 max-w-lg leading-relaxed">
                            Das Herzstück Ihres Unternehmens. Erleben Sie eine rechtssichere, automatisierte Buchhaltung, die mehr kann als nur Zahlen verwalten. Von der Bilanzierung über die Kostenrechnung bis hin zum Liquiditätsmanagement.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-neutral-700">
<span className="iconify text-orange-600 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Vollständige Integration in Warenwirtschaft und Lohn</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<span className="iconify text-orange-600 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Automatischer Zahlungsverkehr &amp; Mahnwesen</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<span className="iconify text-orange-600 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Umfassendes Reporting für die Geschäftsführung</span>
</li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-neutral-900 hover:text-orange-600 transition-colors" href="#">
                            Mehr erfahren <span className="iconify ml-1" data-icon="lucide:chevron-right" data-width="14"></span>
</a>
</div>
</div>

<div className="bg-neutral-900 rounded-2xl p-8 md:p-10 border border-neutral-800 text-white relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900 z-0"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center mb-6 text-orange-500 shadow-sm">
<span className="iconify" data-icon="lucide:package-check" data-width="20"></span>
</div>
<h3 className="text-2xl font-semibold mb-4 tracking-tight">Warenwirtschaft</h3>
<p className="text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">
                            Optimieren Sie Ihren Materialfluss vom Einkauf bis zum Versand. Behalten Sie Lagerstände in Echtzeit im Blick und automatisieren Sie Bestellvorschläge.
                        </p>
<div className="border-t border-white/10 pt-6 mt-auto">
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Features:</span>
<span className="text-white font-medium">Lager, Einkauf, Verkauf</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-orange-200 transition-colors shadow-sm group">
<div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">CRM &amp; Vertrieb</h3>
<p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                        Verwalten Sie Kundenbeziehungen zentral. 360°-Blick auf jeden Kontakt, Verkaufschancen-Tracking und integriertes Kampagnenmanagement für Ihren Vertriebserfolg.
                    </p>
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-200 hover:border-orange-600 pb-0.5 transition-colors" href="#">Details zu CRM</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-orange-200 transition-colors shadow-sm group">
<div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:factory" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Fertigung (PPS)</h3>
<p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                        Planen Sie Ressourcen effizient. Von der Stückliste bis zur Kapazitätsplanung – für eine Produktion, die Termine hält und Kosten minimiert.
                    </p>
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-200 hover:border-orange-600 pb-0.5 transition-colors" href="#">Produktion optimieren</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-orange-200 transition-colors shadow-sm group">
<div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:user-cog" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Personal &amp; Lohn</h3>
<p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                        Rechtssichere Lohnabrechnung für Österreich. Verwalten Sie Stammdaten, Urlaube und Zeiterfassung in einem intuitiven System.
                    </p>
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-200 hover:border-orange-600 pb-0.5 transition-colors" href="#">HR Lösungen</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 text-white overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/20 via-neutral-950 to-neutral-950"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Nahtlose Integration für Ihren Erfolg</h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                        In der modernen Wirtschaft darf Software keine Insel sein. Bei GOBATIN Consulting sorgen wir dafür, dass Ihre Daten fließen. Ein Auftrag im Webshop löst automatisch eine Buchung in der WaWi aus und aktualisiert die Finanzbuchhaltung. Ohne Medienbrüche.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center shrink-0 mt-1">
<span className="font-bold text-sm">1</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Analyse &amp; Konzeption</h4>
<p className="text-neutral-500 text-sm">Wir verstehen Ihre Prozesse, bevor wir Software installieren.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center shrink-0 mt-1">
<span className="font-bold text-sm">2</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Implementierung &amp; Migration</h4>
<p className="text-neutral-500 text-sm">Sicherer Datentransfer und Einrichtung der Module nach Maß.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center shrink-0 mt-1">
<span className="font-bold text-sm">3</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Schulung &amp; Support</h4>
<p className="text-neutral-500 text-sm">Wir lassen Sie nicht allein. Laufende Betreuung für Ihr Team.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] w-full bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-2xl flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

<div className="relative z-20 w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.4)]">
<span className="iconify text-white" data-icon="lucide:database" data-width="32"></span>
</div>

<div className="absolute top-10 left-10 p-3 bg-neutral-800 rounded-lg border border-neutral-700 flex items-center gap-2 animate-bounce duration-[3000ms]">
<span className="iconify text-neutral-400" data-icon="lucide:shopping-cart" data-width="16"></span>
<span className="text-xs font-mono text-neutral-300">E-Commerce</span>
</div>
<div className="absolute bottom-10 right-10 p-3 bg-neutral-800 rounded-lg border border-neutral-700 flex items-center gap-2 animate-bounce duration-[4000ms]">
<span className="iconify text-neutral-400" data-icon="lucide:users" data-width="16"></span>
<span className="text-xs font-mono text-neutral-300">HR/Admin</span>
</div>
<div className="absolute top-10 right-20 p-3 bg-neutral-800 rounded-lg border border-neutral-700 flex items-center gap-2 animate-bounce duration-[3500ms]">
<span className="iconify text-neutral-400" data-icon="lucide:truck" data-width="16"></span>
<span className="text-xs font-mono text-neutral-300">Logistik</span>
</div>
<div className="absolute bottom-20 left-20 p-3 bg-neutral-800 rounded-lg border border-neutral-700 flex items-center gap-2 animate-bounce duration-[4500ms]">
<span className="iconify text-neutral-400" data-icon="lucide:pie-chart" data-width="16"></span>
<span className="text-xs font-mono text-neutral-300">Finance</span>
</div>

<svg className="absolute inset-0 w-full h-full z-10 pointer-events-none stroke-neutral-700" strokeWidth="1">
<line x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line x1="50%" x2="80%" y1="50%" y2="80%"></line>
<line x1="50%" x2="80%" y1="50%" y2="20%"></line>
<line x1="50%" x2="20%" y1="50%" y2="70%"></line>
</svg>
</div>
</div>
</div>
</section>

<section className="py-20 bg-orange-50 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">Bereit für den nächsten Schritt?</h2>
<p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam herausfinden, wie GOBATIN Ihre Unternehmensprozesse optimieren kann. Vereinbaren Sie ein unverbindliches Erstgespräch.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#kontakt">
                    Termin vereinbaren
                </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-white text-neutral-900 border border-neutral-200 font-medium hover:bg-neutral-50 transition-all" href="mailto:office@gobatin-consulting.at">
                    E-Mail schreiben
                </a>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-neutral-100 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">

<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">G</div>
<span className="font-semibold text-neutral-900 tracking-tight">GOBATIN</span>
</a>
<p className="text-neutral-500 mb-6 max-w-sm">
                        Ihr Partner für professionelle Unternehmenssoftware und strategische Prozessberatung. Wir digitalisieren den Mittelstand.
                    </p>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-orange-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="hover:text-orange-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="hover:text-orange-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
</div>
</div>

<div>
<h4 className="font-semibold text-neutral-900 mb-4">Lösungen</h4>
<ul className="space-y-3 text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Rechnungswesen</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Warenwirtschaft</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">CRM / Vertrieb</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Fertigung (PPS)</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Personal &amp; Lohn</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-neutral-900 mb-4">Dienstleistungen</h4>
<ul className="space-y-3 text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Beratung</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Implementierung</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Schulungen</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Support</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-neutral-900 mb-4">Unternehmen</h4>
<ul className="space-y-3 text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Karriere</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Impressum</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2023 GOBATIN Consulting. Alle Rechte vorbehalten.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-900 transition-colors" href="#">Datenschutz</a>
<a className="hover:text-neutral-900 transition-colors" href="#">AGB</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Cookie Einstellungen</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
