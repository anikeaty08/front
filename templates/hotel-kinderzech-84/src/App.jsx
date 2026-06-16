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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded font-serif text-xl italic">D</div>
<span className="font-serif text-lg tracking-tight text-slate-900 font-normal">Hotel Deutsches Haus</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#geschichte">Geschichte</a>
<a className="hover:text-slate-900 transition-colors" href="#gefuehl">Das Fest</a>
<a className="hover:text-slate-900 transition-colors" href="#hotel">Das Hotel</a>
<a className="hover:text-slate-900 transition-colors" href="#tagungen">Tagungen</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-base font-normal hover:bg-slate-800 transition-all flex items-center gap-2" href="#buchen">
<span>Jetzt Buchen</span>
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Dinkelsbühl Altstadt" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-amber-50 text-sm uppercase tracking-widest mb-6 font-normal">
                Historisches Festspiel &amp; Tradition
            </span>
<h1 className="text-5xl md:text-7xl text-white font-normal tracking-tight mb-6 leading-[1.1]">
                Die Kinderzeche in Dinkelsbühl – <br/>
<span className="italic text-amber-200">Geschichte, Gänsehaut &amp; Gemeinschaft</span>
</h1>
<p className="text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Warum die ganze Stadt im Juli Kopf steht – und was das Deutsche Haus damit zu tun hat. Erleben Sie lebendige Geschichte hautnah.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-amber-700 text-white rounded-lg text-lg font-normal hover:bg-amber-800 transition-all shadow-lg shadow-amber-900/20" href="#buchen">
                    Jetzt buchen &amp; mitten im Geschehen sein
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg text-lg font-normal hover:bg-white/20 transition-all" href="#geschichte">
                    Mehr erfahren
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 bg-white" id="geschichte">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-2 text-amber-700 mb-4">
<iconify-icon height="20" icon="solar:history-linear" width="20"></iconify-icon>
<span className="text-base font-medium uppercase tracking-wider">Wie alles begann</span>
</div>
<h2 className="text-4xl md:text-5xl text-slate-900 font-normal tracking-tight mb-6">
                        Ursprung einer <span className="italic font-light text-amber-700">Legende</span>
</h2>
<p className="text-xl text-slate-600 mb-6 leading-relaxed">
                        Die Wurzeln der Kinderzeche reichen tief in die Vergangenheit zurück. Sie basiert auf einem historischen Schulfest, das bereits 1629 erwähnt wurde – und womöglich noch viel älter ist.
                    </p>
<p className="text-xl text-slate-600 mb-6 leading-relaxed">
                        Im Zentrum steht die Legende der <strong className="font-medium text-slate-900">Kinderlore</strong>, der Tochter des Turmwächters. Sie soll im Dreißigjährigen Krieg die schwedischen Belagerer erweicht und so die Stadt vor der Plünderung bewahrt haben. Seit der ersten Aufführung des historischen Festspiels im Jahr 1897 wird diese Geschichte in ihrer modernen Form gefeiert.
                    </p>
<div className="border-l-2 border-amber-700 pl-6 py-2 bg-amber-50/50 rounded-r-lg">
<p className="text-lg text-slate-800 italic">
                            „1629 erstmals erwähnt, heute lebendiger denn je. Ein Festspiel, das Generationen verbindet.“
                        </p>
</div>
</div>
<div className="order-1 lg:order-2 relative group">
<div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-100 relative">
<img alt="Historische Szene" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
<button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur text-amber-700 transition-transform hover:scale-110">
<iconify-icon className="ml-1" height="32" icon="solar:play-linear" width="32"></iconify-icon>
</button>
</div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-white text-sm font-normal">
                            Video: Die Ursprünge der Kinderzeche
                        </div>
</div>
<div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-slate-200 rounded-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="gefuehl">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200 relative">
<img alt="Feiernde Menschen" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
<button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur text-amber-700 transition-transform hover:scale-110">
<iconify-icon className="ml-1" height="32" icon="solar:play-linear" width="32"></iconify-icon>
</button>
</div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-white text-sm font-normal">
                            Video: Emotion &amp; Atmosphäre
                        </div>
</div>
<div className="absolute -z-10 -top-6 -left-6 w-full h-full border border-slate-200 rounded-2xl"></div>
</div>
<div>
<div className="flex items-center gap-2 text-amber-700 mb-4">
<iconify-icon height="20" icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-base font-medium uppercase tracking-wider">Das Gefühl</span>
</div>
<h2 className="text-4xl md:text-5xl text-slate-900 font-normal tracking-tight mb-6">
                        Mehr als nur ein Fest – <br/>eine <span className="italic font-light text-amber-700">Haltung</span>
</h2>
<p className="text-xl text-slate-600 mb-6 leading-relaxed">
                        Heute ist die Kinderzeche nicht bloß eine Veranstaltung im Kalender. Es ist ein Gefühl, das die ganze Stadt erfasst. Wenn der Juli anbricht, verwandelt sich Dinkelsbühl.
                    </p>
<p className="text-xl text-slate-600 mb-6 leading-relaxed">
                        Soziale Grenzen verschwinden, Tradition wird gelebt und die Gemeinschaft steht über allem. Man sagt hier nicht ohne Grund: <span className="text-slate-900 font-normal">Es gibt in Dinkelsbühl nur zwei Jahreszeiten – vor der Kinderzeche und nach der Kinderzeche.</span>
</p>
<ul className="space-y-3 mt-8">
<li className="flex items-center gap-3 text-xl text-slate-700">
<iconify-icon className="text-amber-600" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Gelebte Tradition seit Jahrhunderten
                        </li>
<li className="flex items-center gap-3 text-xl text-slate-700">
<iconify-icon className="text-amber-600" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Grenzenloser Zusammenhalt der Bürger
                        </li>
<li className="flex items-center gap-3 text-xl text-slate-700">
<iconify-icon className="text-amber-600" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Einzigartige Atmosphäre in der Altstadt
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="text-3xl md:text-4xl text-slate-900 font-normal tracking-tight mb-4">Impressionen der Festwoche</h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">Farbenprächtige Kostüme, historische Tänze und eine Stadt voller Lebensfreude.</p>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Festzug Kostüme" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
<span className="text-white font-serif text-3xl italic tracking-tight">Der historische Festzug</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Trommler" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Dinkelsbühl Architektur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1568444438385-ece31a33ce78?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Kinderzeche Atmosphäre" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
<span className="text-white font-serif text-2xl tracking-tight">Gemeinschaft feiern</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="hotel">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-amber-900/40">
<iconify-icon className="text-white" height="32" icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">
                Mitten im Geschehen:<br/>
<span className="text-amber-200 font-serif italic">Hotel Deutsches Haus</span>
</h2>
<p className="text-2xl text-slate-300 mb-8 leading-relaxed font-light">
                Warum im Deutschen Haus übernachten? Weil wir nicht nur Zuschauer sind, sondern Teil der Geschichte. Unser Haus spielt eine zentrale Rolle während der Festlichkeiten.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
<div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl">
<h3 className="text-xl font-serif text-amber-200 mb-2 tracking-tight">Zentrale Lage</h3>
<p className="text-base text-slate-400">Direkt in der Altstadt gelegen. Sie fallen aus der Tür und sind mitten im Festgeschehen.</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl">
<h3 className="text-xl font-serif text-amber-200 mb-2 tracking-tight">Historisches Flair</h3>
<p className="text-base text-slate-400">Das Ambiente unseres Hauses passt perfekt zur Zeitreise in das 17. Jahrhundert.</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl">
<h3 className="text-xl font-serif text-amber-200 mb-2 tracking-tight">Treffpunkt</h3>
<p className="text-base text-slate-400">Erleben Sie die Gemeinschaft hautnah, wenn sich lokale Gruppen bei uns versammeln.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 font-sans" id="tagungen">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4 block font-medium">Hotel Deutsches Haus</span>
<h2 className="text-4xl font-light tracking-tight text-slate-900 font-serif">Tagungspauschalen</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">

<div className="bg-white p-10 flex flex-col shadow-sm">
<span className="text-[10px] uppercase tracking-widest text-slate-900 font-medium mb-10 block">Halbtags ohne Abendessen</span>
<h3 className="text-3xl font-light text-center mb-6 tracking-tight font-serif">Light</h3>
<p className="text-base text-center text-slate-600 mb-8 font-light">Begrüßung mit Kaffee und Tee, dazu Gebäck oder Kuchen</p>
<div className="text-center mb-12">
<p className="text-base font-normal text-slate-900">64 € pro Person</p>
<p className="text-sm text-slate-500 font-light">(ohne Übernachtung)</p>
</div>
<h4 className="text-2xl font-light text-center mb-6 tracking-tight font-serif">Light PLUS Variante</h4>
<p className="text-base text-center text-slate-600 mb-8 font-light">Inklusive unlimitierte Tagungsgetränke im Raum während Ihres Aufenthalts</p>
<div className="text-center mb-10">
<p className="text-base font-normal text-slate-900">72,80 € pro Person</p>
<p className="text-sm text-slate-500 font-light">(ohne Übernachtung)</p>
</div>
<div className="mt-auto pt-8 border-t border-slate-200">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="20" icon="solar:monitor-linear" width="20"></iconify-icon>
<p className="text-base text-slate-600 font-light">Tagungstechnik mit Leinwand, Flipchart, Pinnwand, Beamer oder Flatscreen</p>
</li>
<li className="border-t border-slate-100 pt-6 flex items-start gap-4">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="20" icon="solar:cup-linear" width="20"></iconify-icon>
<p className="text-base text-slate-600 font-light">Eine Erfrischungspause mit Kaffee, Tee sowie Auswahl an Kuchen, Gebäck und Obst</p>
</li>
<li className="border-t border-slate-100 pt-6 flex items-start gap-4">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="20" icon="solar:plate-linear" width="20"></iconify-icon>
<p className="text-base text-slate-600 font-light">Mittagsbuffet aus der Open Kitchen mit Suppe, Salatbar und verschiedenen Hauptgängen, sowie ein Softgetränk oder Wasser (0,4 l) pro Person inklusive</p>
</li>
</ul>
</div>
</div>

<div className="bg-stone-100 p-10 flex flex-col shadow-sm">
<span className="text-[10px] uppercase tracking-widest text-slate-900 font-medium mb-10 block">Pro Tag ohne Abendessen</span>
<h3 className="text-3xl font-light text-center mb-6 tracking-tight font-serif">Balance</h3>
<p className="text-base text-center text-slate-600 mb-8 font-light">Begrüßung mit Kaffee und Tee, dazu Gebäck oder Kuchen</p>
<div className="text-center mb-12">
<p className="text-base font-normal text-slate-900">75 € pro Person</p>
<p className="text-sm text-slate-500 font-light">(ohne Übernachtung)</p>
</div>
<h4 className="text-2xl font-light text-center mb-6 tracking-tight font-serif">Balance PLUS Variante</h4>
<p className="text-base text-center text-slate-600 mb-8 font-light">Inklusive unlimitierte Tagungsgetränke im Raum während Ihres Aufenthalts</p>
<div className="text-center mb-10">
<p className="text-base font-normal text-slate-900">87,80 € pro Person</p>
<p className="text-sm text-slate-500 font-light">(ohne Übernachtung)</p>
</div>
<div className="mt-auto pt-8 border-t border-slate-200">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="20" icon="solar:monitor-linear" width="20"></iconify-icon>
<p className="text-base text-slate-600 font-light">Tagungstechnik mit Leinwand, Flipchart, Pinnwand, Beamer oder Flatscreen</p>
</li>
<li className="border-t border-slate-200/60 pt-6 flex items-start gap-4">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="20" icon="solar:cup-linear" width="20"></iconify-icon>
<p className="text-base text-slate-600 font-light">Zwei Erfrischungspausen mit Kaffee, Tee sowie Auswahl an Kuchen, Gebäck und Obst</p>
</li>
<li className="border-t border-slate-200/60 pt-6 flex items-start gap-4">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" height="20" icon="solar:plate-linear" width="20"></iconify-icon>
<p className="text-base text-slate-600 font-light">Mittagsbuffet aus der Open Kitchen mit Suppe, Salatbar und verschiedenen Hauptgängen, sowie ein Softgetränk oder Wasser (0,4 l) pro Person inklusive</p>
</li>
</ul>
</div>
</div>

<div className="bg-[#82806b] text-white p-10 flex flex-col shadow-sm">
<span className="text-[10px] uppercase tracking-widest text-white/90 font-medium mb-10 block">Pro Tag mit Abendessen</span>
<h3 className="text-3xl font-light text-center mb-6 tracking-tight font-serif">Comfort</h3>
<p className="text-base text-center text-white/80 mb-8 font-light">Begrüßung mit Kaffee und Tee, dazu Gebäck oder Kuchen</p>
<div className="text-center mb-12">
<p className="text-base font-normal text-white">107 € pro Person</p>
<p className="text-sm text-white/60 font-light">(ohne Übernachtung)</p>
</div>
<h4 className="text-2xl font-light text-center mb-6 tracking-tight font-serif">Comfort PLUS Variante</h4>
<p className="text-base text-center text-white/80 mb-8 font-light">Inklusive unlimitierte Tagungsgetränke im Raum während Ihres Aufenthalts</p>
<div className="text-center mb-10">
<p className="text-base font-normal text-white">119,80 € pro Person</p>
<p className="text-sm text-white/60 font-light">(ohne Übernachtung)</p>
</div>
<div className="mt-auto pt-8 border-t border-white/20">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-white/60 shrink-0 mt-0.5" height="20" icon="solar:monitor-linear" width="20"></iconify-icon>
<p className="text-base text-white/90 font-light">Tagungstechnik mit Leinwand, Flipchart, Pinnwand, Beamer oder Flatscreen</p>
</li>
<li className="border-t border-white/10 pt-6 flex items-start gap-4">
<iconify-icon className="text-white/60 shrink-0 mt-0.5" height="20" icon="solar:cup-linear" width="20"></iconify-icon>
<p className="text-base text-white/90 font-light">Zwei Erfrischungspausen mit Kaffee, Tee sowie Auswahl an Kuchen, Gebäck und Obst</p>
</li>
<li className="border-t border-white/10 pt-6 flex items-start gap-4">
<iconify-icon className="text-white/60 shrink-0 mt-0.5" height="20" icon="solar:plate-linear" width="20"></iconify-icon>
<p className="text-base text-white/90 font-light">Mittagsbuffet aus der Open Kitchen mit Suppe, Salatbar und verschiedenen Hauptgängen, sowie ein Softgetränk oder Wasser (0,4 l) pro Person inklusive</p>
</li>
<li className="border-t border-white/10 pt-6 flex items-start gap-4">
<iconify-icon className="text-white/60 shrink-0 mt-0.5" height="20" icon="solar:plate-linear" width="20"></iconify-icon>
<p className="text-base text-white/90 font-light">Abendessen vom Open Kitchen-Buffet mit Suppe, Salatbar und verschiedenen Hauptgängen von der Live Cooking-Station</p>
</li>
</ul>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start border-t border-slate-200 pt-10">
<h3 className="text-2xl font-light text-slate-900 tracking-tight font-serif">Weitere Informationen</h3>
<div className="space-y-0">
<button className="w-full flex items-center justify-between py-4 border-b border-slate-300 text-left text-base text-slate-700 font-light hover:text-slate-900 transition-colors">
<span>Pauschalen und Tagungsgetränke</span>
<iconify-icon className="text-slate-400" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between py-4 border-b border-slate-300 text-left text-base text-slate-700 font-light hover:text-slate-900 transition-colors">
<span>Preise zzgl. MwSt.</span>
<iconify-icon className="text-slate-400" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-5 bg-light border-top border-light">
<div className="container-xxl px-4">
<div className="row g-4 align-items-stretch">

<div className="col-lg-5">
<div className="bg-white p-4 p-md-5 shadow-sm border h-100 d-flex flex-column justify-content-center">
<h2 className="text-uppercase fw-medium text-dark mb-5" style={{fontSize: '11px', letterSpacing: '0.15em'}}>Facts &amp; Ausstattung</h2>
<ul className="list-unstyled d-flex flex-column flex-grow-1 m-0 p-0">
<li className="d-flex align-items-center gap-3 py-3 border-top border-dark border-2">
<iconify-icon className="text-secondary flex-shrink-0" height="24" icon="solar:maximize-square-linear" width="24"></iconify-icon>
<span className="text-secondary" style={{fontSize: '1rem', fontWeight: '300', lineHeight: '1.4'}}>19 vollklimatisierte Tagungsräume mit 20-1200 m², teilweise mit Kfz befahrbar</span>
</li>
<li className="d-flex align-items-center gap-3 py-3 border-top border-light">
<iconify-icon className="text-secondary flex-shrink-0" height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<span className="text-secondary" style={{fontSize: '1rem', fontWeight: '300', lineHeight: '1.4'}}>Flexible Räumlichkeiten für Kapazitäten von 2 bis 600 Personen</span>
</li>
<li className="d-flex align-items-center gap-3 py-3 border-top border-light">
<iconify-icon className="text-secondary flex-shrink-0" height="24" icon="solar:monitor-linear" width="24"></iconify-icon>
<span className="text-secondary" style={{fontSize: '1rem', fontWeight: '300', lineHeight: '1.4'}}>Ausstattung mit modernster Konferenztechnik</span>
</li>
<li className="d-flex align-items-center gap-3 py-3 border-top border-light">
<iconify-icon className="text-secondary flex-shrink-0" height="24" icon="solar:user-check-linear" width="24"></iconify-icon>
<span className="text-secondary" style={{fontSize: '1rem', fontWeight: '300', lineHeight: '1.4'}}>Persönlicher Ansprechpartner und professionelles Team vor Ort</span>
</li>
<li className="d-flex align-items-center gap-3 py-3 border-top border-light">
<iconify-icon className="text-secondary flex-shrink-0" height="24" icon="solar:plate-linear" width="24"></iconify-icon>
<span className="text-secondary" style={{fontSize: '1rem', fontWeight: '300', lineHeight: '1.4'}}>Feine Kulinarik eines 4-Sterne-Superior-Hotels</span>
</li>
<li className="d-flex align-items-center gap-3 py-3 border-top border-light">
<iconify-icon className="text-secondary flex-shrink-0" height="24" icon="solar:bed-linear" width="24"></iconify-icon>
<span className="text-secondary" style={{fontSize: '1rem', fontWeight: '300', lineHeight: '1.4'}}>150 vollklimatisierte Zimmer und Suiten sowie Partnerhotels</span>
</li>
<li className="d-flex align-items-center gap-3 py-3 border-top border-bottom border-light">
<iconify-icon className="text-secondary flex-shrink-0" height="24" icon="solar:dumbbell-linear" width="24"></iconify-icon>
<span className="text-secondary" style={{fontSize: '1rem', fontWeight: '300', lineHeight: '1.4'}}>85° C Business-Sauna und Fitness Area mit modernen Techno Gym-Geräten</span>
</li>
</ul>
<div className="mt-5 d-flex align-items-center gap-4">
<a className="btn btn-outline-dark px-4 py-2 rounded-0" href="#anfrage" style={{fontWeight: '300'}}>
                                Anfrage
                            </a>
<a className="text-dark text-decoration-none border-bottom border-dark pb-1" href="#kongress" style={{fontWeight: '300'}}>
                                Kongress &amp; Messe
                            </a>
</div>
</div>
</div>

<div className="col-lg-7">
<div className="h-100 w-100">
<img alt="Business Event Networking" className="w-100 h-100" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=1600" style={{objectFit: 'cover', minHeight: '500px'}}/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl text-slate-900 font-normal tracking-tight mb-12 text-center font-serif">Häufige Fragen zur Kinderzeche</h2>
<div className="space-y-4">
<details className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-lg transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between p-6 text-xl font-normal text-slate-900">
<span>Wann findet die Kinderzeche statt?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-xl text-slate-600 leading-relaxed">
                        Die Kinderzeche findet jährlich im Juli statt. Die Festwoche erstreckt sich in der Regel über 10 Tage rund um das dritte und vierte Juliwochenende.
                    </div>
</details>
<details className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-lg transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between p-6 text-xl font-normal text-slate-900">
<span>Wo kann ich den Festzug am besten sehen?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-xl text-slate-600 leading-relaxed">
                        Der Festzug führt durch die historische Altstadt. Gäste des Hotel Deutsches Haus haben den Vorteil, nur wenige Schritte gehen zu müssen, um erstklassige Plätze am Straßenrand zu finden.
                    </div>
</details>
<details className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-lg transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between p-6 text-xl font-normal text-slate-900">
<span>Kann ich noch ein Zimmer buchen?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-xl text-slate-600 leading-relaxed">
                        Da die Kinderzeche sehr beliebt ist, empfehlen wir eine frühzeitige Buchung. Nutzen Sie unseren Buchungskalender, um Live-Verfügbarkeiten zu prüfen.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-amber-50 border-t border-amber-100" id="buchen">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl text-slate-900 font-normal tracking-tight mb-6">
                Ein Teil der Geschichte werden.
            </h2>
<p className="text-2xl text-slate-600 mb-10 max-w-xl mx-auto">
                Sichern Sie sich jetzt Ihr Zimmer zur Kinderzeche im Hotel Deutsches Haus und erleben Sie Dinkelsbühl von seiner schönsten Seite.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-normal hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 transform hover:-translate-y-1">
<iconify-icon height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
                    Jetzt Zimmer sichern
                </button>
<button className="w-full sm:w-auto text-slate-700 bg-white border border-slate-200 px-8 py-4 rounded-lg text-lg font-normal hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
                    Kontakt aufnehmen
                </button>
</div>
<p className="mt-8 text-base text-slate-400">
                Hotel Deutsches Haus • Weinmarkt 3 • 91550 Dinkelsbühl
            </p>
</div>
</section>

    </>
  );
}
