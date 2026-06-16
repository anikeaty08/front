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
      

<header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" style={{color: 'white'}}></iconify-icon>
</div>
<span className="text-sm font-medium tracking-widest text-slate-100 uppercase">Velptec</span>
</div>
<nav className="hidden md:flex gap-6 text-sm">
<a className="text-slate-400 hover:text-slate-100 transition-colors" href="#projekt">Projekt</a>
<a className="text-slate-400 hover:text-slate-100 transition-colors" href="#research">Research</a>
<a className="text-slate-400 hover:text-slate-100 transition-colors" href="#wireframes">Wireframes</a>
<a className="text-slate-400 hover:text-slate-100 transition-colors" href="#hifi">Hi-Fi</a>
<a className="text-slate-400 hover:text-slate-100 transition-colors" href="#resume">Resümee</a>
</nav>
</div>
</header>
<main>

<section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800/30 text-blue-300 text-xs mb-6">
<iconify-icon icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5"></iconify-icon>
                UX/UI Design Prüfungsleistung
            </div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                Entwicklung der digitalen <br className="hidden md:block"/>Velptec Produktlandschaft.
            </h1>
<p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                Eine umfassende Case Study von der initialen Projektidee über Nutzerforschung und Wireframing bis hin zu High-Fidelity Mockups.
            </p>
</section>

<section className="max-w-5xl mx-auto px-6 py-12" id="projekt">
<div className="mb-8">
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">1. Projektwahl &amp; Beschreibung</h2>
<div className="h-px w-12 bg-blue-600/50"></div>
</div>
<div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
<div className="grid md:grid-cols-3 gap-8 relative z-10">
<div>
<div className="flex items-center gap-3 mb-3 text-white font-medium">
<iconify-icon className="text-xl text-blue-400" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
                            Projekttitel
                        </div>
<p className="text-slate-400 text-sm leading-relaxed">Velptec Sync – Smartes Workflow &amp; Ressourcen-Management</p>
</div>
<div>
<div className="flex items-center gap-3 mb-3 text-white font-medium">
<iconify-icon className="text-xl text-blue-400" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                            Thema
                        </div>
<p className="text-slate-400 text-sm leading-relaxed">Eine plattformübergreifende Web- und Mobile-App, die es Teams ermöglicht, Projektphasen, Zeiten und Hardware-Ressourcen (wie den Velptec Beamer oder Velptec Roller) zentral zu buchen und zu verwalten.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-3 text-white font-medium">
<iconify-icon className="text-xl text-blue-400" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
                            Motivation
                        </div>
<p className="text-slate-400 text-sm leading-relaxed">Agenturen und Tech-Teams verlieren täglich wertvolle Zeit durch fragmentierte Tools. Velptec Sync löst dieses Chaos, schafft Transparenz und optimiert die Auslastung der Hardware.</p>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-12" id="research">
<div className="mb-8">
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">2. Nutzeranalyse &amp; Synthese</h2>
<div className="h-px w-12 bg-blue-600/50"></div>
</div>

<div className="bg-blue-950/20 border border-blue-900/30 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-start md:items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-400" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-blue-200 mb-1">Problem Statement</h3>
<p className="text-base text-slate-300 italic">
                        "Julian braucht einen Weg, um Hardware wie den Velptec Beamer und Projektzeiten zentral zu buchen, weil dezentrale Tools zu Doppelbuchungen und Kommunikationschaos im Team führen."
                    </p>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 flex flex-col">
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800/60">
<div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 text-2xl">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white">Julian, 32</h3>
<p className="text-xs text-slate-400">Senior Project Manager</p>
</div>
</div>
<div className="space-y-4 flex-1">
<div>
<h4 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-1">Alltag &amp; Verhalten</h4>
<p className="text-sm text-slate-400 leading-relaxed">Koordiniert 3-5 Projekte gleichzeitig. Ist viel in Meetings und jongliert zwischen Laptop am Schreibtisch und Smartphone unterwegs.</p>
</div>
<div>
<h4 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-1">Bedürfnisse &amp; Ziele</h4>
<p className="text-sm text-slate-400 leading-relaxed">Sucht nach Übersichtlichkeit. Möchte mit einem Klick sehen, wer welche Ausrüstung blockiert und wie der Projektstatus ist.</p>
</div>
<div>
<h4 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-1">Herausforderungen</h4>
<p className="text-sm text-slate-400 leading-relaxed">Oft sind Geräte (wie Test-Smartphones oder Velptec Beamer) "verschwunden". Das Nachverfolgen in Slack-Channels kostet Nerven.</p>
</div>
</div>
</div>

<div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
<div className="bg-slate-900/20 border border-slate-800/40 rounded-xl p-5">
<h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:eye-linear"></iconify-icon> What they see
                        </h4>
<ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
<li>Überfüllte Excel-Listen</li>
<li>Unaufgeräumte Schreibtische der Kollegen</li>
<li>Viele ungelesene Notifications</li>
</ul>
</div>
<div className="bg-slate-900/20 border border-slate-800/40 rounded-xl p-5">
<h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:volume-loud-linear"></iconify-icon> What they hear
                        </h4>
<ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
<li>"Weißt du, wo der Beamer ist?"</li>
<li>"Ich dachte, du hättest das gebucht."</li>
<li>Klagen über zu viele Tools im Unternehmen.</li>
</ul>
</div>
<div className="bg-slate-900/20 border border-slate-800/40 rounded-xl p-5">
<h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:brain-linear"></iconify-icon> What they think &amp; feel
                        </h4>
<ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
<li>Fühlt sich oft überfordert vom Mikromanagement.</li>
<li>Denkt: "Das muss doch effizienter gehen."</li>
<li>Frustriert von Ineffizienz.</li>
</ul>
</div>
<div className="bg-slate-900/20 border border-slate-800/40 rounded-xl p-5">
<h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:chat-round-line-linear"></iconify-icon> What they say &amp; do
                        </h4>
<ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
<li>Schreibt Rundmails zur Gerätesuche.</li>
<li>Versucht, eigene Tabellen zu pflegen.</li>
<li>Sagt: "Bitte tragt das beim nächsten Mal ein."</li>
</ul>
</div>
<div className="bg-red-950/10 border border-red-900/20 rounded-xl p-5">
<h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-red-400" icon="solar:danger-triangle-linear"></iconify-icon> Pains (Frustrations)
                        </h4>
<ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
<li>Zeitverlust durch Suchen von Hardware.</li>
<li>Unklare Zuständigkeiten bei Übergaben.</li>
</ul>
</div>
<div className="bg-green-950/10 border border-green-900/20 rounded-xl p-5">
<h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-green-400" icon="solar:cup-star-linear"></iconify-icon> Gains (Goals)
                        </h4>
<ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
<li>Eine Single Source of Truth.</li>
<li>Einfache Buchung in unter 10 Sekunden.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-800/40" id="wireframes">
<div className="mb-8 flex justify-between items-end">
<div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">3. Wireframes &amp; Prototypes</h2>
<div className="h-px w-12 bg-blue-600/50 mb-4"></div>
<p className="text-sm text-slate-400 max-w-xl">Low-Fidelity Konzepte für die Mobile App und das Desktop Dashboard, fokussiert auf Informationsarchitektur und Flow.</p>
</div>
<div className="hidden sm:flex gap-2">
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300 font-medium tracking-widest uppercase">Mobile</span>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300 font-medium tracking-widest uppercase">Desktop</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-8">

<div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[300px]">
<div className="w-48 h-80 border-2 border-dashed border-slate-700 rounded-[2rem] flex flex-col overflow-hidden relative">
<div className="h-10 border-b border-dashed border-slate-700 flex justify-between items-center px-4">
<div className="w-4 h-4 bg-slate-800 rounded-full"></div>
<div className="w-16 h-2 bg-slate-800 rounded"></div>
</div>
<div className="p-4 space-y-4 flex-1">
<div className="w-full h-24 bg-slate-800/50 rounded-xl"></div>
<div className="w-3/4 h-4 bg-slate-800 rounded"></div>
<div className="grid grid-cols-2 gap-2">
<div className="h-12 bg-slate-800/50 rounded-lg"></div>
<div className="h-12 bg-slate-800/50 rounded-lg"></div>
</div>
<div className="w-full h-8 bg-blue-900/40 border border-dashed border-blue-800/50 rounded flex justify-center items-center mt-auto">
<div className="w-12 h-2 bg-blue-800/50 rounded"></div>
</div>
</div>
</div>
<p className="mt-4 text-xs text-slate-500">Mobile Flow: Dashboard → Buchung → Bestätigung</p>
</div>

<div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[300px]">
<div className="w-full max-w-sm h-64 border-2 border-dashed border-slate-700 rounded-xl flex overflow-hidden">
<div className="w-1/4 border-r border-dashed border-slate-700 p-3 space-y-3">
<div className="w-full h-4 bg-slate-800 rounded mb-6"></div>
<div className="w-full h-2 bg-slate-800/50 rounded"></div>
<div className="w-full h-2 bg-slate-800/50 rounded"></div>
<div className="w-full h-2 bg-slate-800/50 rounded"></div>
</div>
<div className="flex-1 p-4 flex flex-col">
<div className="flex justify-between mb-4">
<div className="w-1/3 h-6 bg-slate-800 rounded"></div>
<div className="w-8 h-6 bg-slate-800 rounded"></div>
</div>
<div className="flex-1 bg-slate-800/30 rounded-lg border border-dashed border-slate-700 p-2 grid grid-cols-3 gap-2">
<div className="bg-slate-800/50 rounded"></div>
<div className="bg-slate-800/50 rounded"></div>
<div className="bg-slate-800/50 rounded"></div>
</div>
</div>
</div>
<p className="mt-4 text-xs text-slate-500">Desktop Flow: Sidebar Nav → Kalenderübersicht → Details</p>
</div>
</div>

<div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/60">
<h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> Reflexion: Wireframes &amp; Prototyping
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Bei der Adaption der Wireframes lag der Fokus stark auf dem Nutzungskontext. Für Mobile (Fokus: unterwegs, schnelle Aktionen) wurden große Touch-Targets und ein vertikaler Flow gewählt, um die Buchung des "Velptec Beamers" in unter drei Taps zu ermöglichen. Für Desktop (Fokus: Planung, Übersicht am Schreibtisch) kam ein klassisches Zwei-Spalten-Layout zum Einsatz, um Kalender und Detailansicht parallel darzustellen.<br/><br/>
                    Herausfordernd war das Prototyping der interaktiven Zustände (Dropdowns für Ressourcenwahl). Dies wurde in Figma durch einfache Overlay-Interaktionen gelöst, um den Klickpfad sauber zu simulieren, ohne sich in UI-Details zu verlieren.
                </p>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-800/40" id="hifi">
<div className="mb-8">
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">4. High-Fidelity &amp; Mockups</h2>
<div className="h-px w-12 bg-blue-600/50 mb-4"></div>
<p className="text-sm text-slate-400 max-w-xl">Entwicklung des visuellen Designs, Typografie, Farbgebung und Umsetzung in realistische Kontext-Mockups.</p>
</div>

<div className="grid md:grid-cols-5 gap-6 mb-8">

<div className="md:col-span-2 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-2 border border-slate-700/50 shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
<div className="bg-slate-950 rounded-xl h-[400px] border border-slate-800 flex flex-col overflow-hidden relative z-10">
<div className="px-5 pt-6 pb-4 border-b border-slate-800/50 bg-slate-900/50">
<h3 className="text-white font-medium text-lg tracking-tight">Velptec Sync</h3>
<p className="text-slate-500 text-xs">Ressourcenbuchung</p>
</div>
<div className="p-5 flex-1 space-y-5">
<div>
<label className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-2 block">Gerät auswählen</label>
<div className="bg-slate-900 border border-slate-700 rounded-lg p-3 flex justify-between items-center cursor-pointer hover:border-slate-500 transition-colors">
<span className="text-sm text-white flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:projector-linear"></iconify-icon> Velptec Beamer</span>
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-2 block">Datum &amp; Zeit</label>
<div className="flex gap-2">
<div className="bg-slate-900 border border-slate-700 rounded-lg p-3 flex-1 text-sm text-slate-300">Heute</div>
<div className="bg-slate-900 border border-slate-700 rounded-lg p-3 flex-1 text-sm text-slate-300">14:00</div>
</div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-3 rounded-lg mt-auto transition-colors shadow-lg shadow-blue-900/20">
                                Jetzt buchen
                            </button>
</div>
</div>
</div>

<div className="md:col-span-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-2 border border-slate-700/50 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
<div className="bg-slate-950 rounded-xl h-[400px] border border-slate-800 flex overflow-hidden relative z-10">

<div className="w-48 border-r border-slate-800/80 bg-slate-900/30 p-4 flex flex-col gap-2">
<div className="text-white font-medium tracking-widest text-xs uppercase mb-6 px-2">Velptec</div>
<div className="bg-blue-900/20 text-blue-400 text-xs px-3 py-2 rounded-md font-medium border border-blue-800/30">Dashboard</div>
<div className="text-slate-400 hover:text-slate-200 text-xs px-3 py-2 cursor-pointer transition-colors">Kalender</div>
<div className="text-slate-400 hover:text-slate-200 text-xs px-3 py-2 cursor-pointer transition-colors">Hardware</div>
</div>

<div className="flex-1 p-6 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white tracking-tight">Ressourcen Übersicht</h3>
<div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700"></div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
<div className="text-xs text-slate-500 mb-1">Verfügbar</div>
<div className="text-xl text-white font-medium">12</div>
</div>
<div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
<div className="text-xs text-slate-500 mb-1">Gebucht (Heute)</div>
<div className="text-xl text-white font-medium">4</div>
</div>
</div>
<div className="flex-1 border border-slate-800 rounded-lg bg-slate-900/20 p-4">

<div className="flex border-b border-slate-800 pb-2 mb-3 text-xs font-medium text-slate-500">
<div className="w-1/3">Gerät</div>
<div className="w-1/3">Status</div>
<div className="w-1/3">Nutzer</div>
</div>
<div className="flex items-center text-sm text-slate-300 py-2 border-b border-slate-800/50">
<div className="w-1/3 flex items-center gap-2"><iconify-icon icon="solar:projector-linear"></iconify-icon> Velptec Beamer</div>
<div className="w-1/3"><span className="px-2 py-0.5 rounded text-[10px] bg-red-900/30 text-red-400 border border-red-800/50">Gebucht</span></div>
<div className="w-1/3">Julian M.</div>
</div>
<div className="flex items-center text-sm text-slate-300 py-2">
<div className="w-1/3 flex items-center gap-2"><iconify-icon icon="solar:monitor-linear"></iconify-icon> Velptec Roller</div>
<div className="w-1/3"><span className="px-2 py-0.5 rounded text-[10px] bg-green-900/30 text-green-400 border border-green-800/50">Frei</span></div>
<div className="w-1/3">-</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/60">
<h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon icon="solar:palette-linear"></iconify-icon> Reflexion: Designentscheidungen &amp; Mockups
                </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                    Das Designsystem basiert auf einer Dark-Mode-Ästhetik (Marineblau und neutrale Grautöne), um den Kontrast für konzentriertes Arbeiten zu optimieren. Die Typografie (Inter) wurde bewusst schlicht gewählt, wobei unterschiedliche Font-Weights (z.B. Medium für Überschriften, Normal für Body) klare Hierarchien schaffen. Die primäre Interaktionsfarbe ist ein gedämpftes Blau, welches den Fokus subtil lenkt, ohne zu blenden.
                </p>
<p className="text-sm text-slate-400 leading-relaxed">
                    Für die Mockups wurden cleane, ablenkungsfreie Szenen gewählt (Isometrische Geräte-Darstellung), um die Benutzeroberfläche für sich sprechen zu lassen. Das Desktop-Mockup zeigt die Übersichtlichkeit der Daten, während das Mobile-Mockup die Greifbarkeit des Call-to-Actions in den Vordergrund stellt. Alle Komponenten berücksichtigen interaktive Zustände (Hover-Effekte in der Sidebar, Fokus-States bei Eingabefeldern), um die Usability zu maximieren.
                </p>
</div>
</section>
</main>


<section className="bg-stone-50 py-16 border-t border-slate-200 text-stone-800 transition-colors duration-500 mt-12" id="resume">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-4">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-3">Abschließendes Resümee</h2>
<p className="text-stone-500 text-sm max-w-xl mx-auto">Zusammenfassung des Designprozesses und der wichtigsten Erkenntnisse aus der Konzeption von Velptec Sync.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl p-8 border border-stone-200/60 shadow-sm shadow-stone-200/50 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-orange-300"></div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:route-linear"></iconify-icon>
                        Der Prozess
                    </h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        Die strukturierte Herangehensweise – beginnend bei der Zielgruppenanalyse (Julian) über erste Wireframes bis hin zum High-Fidelity Design – hat maßgeblich zur Qualität des Endprodukts beigetragen. Besonders die Empathy Map half dabei, nicht nur Features zu bauen, sondern echte Schmerzpunkte (Pains) zu adressieren.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-stone-200/60 shadow-sm shadow-stone-200/50 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-rose-300"></div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-rose-500" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
                        Zentrale Erkenntnisse
                    </h3>
<ul className="text-sm text-stone-600 space-y-3">
<li className="flex items-start gap-2">
<iconify-icon className="text-rose-400 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong>Nutzerzentrierung:</strong> Die Applikation funktioniert nur, wenn die Buchung des "Velptec Beamer" schneller geht als das Schreiben einer Slack-Nachricht.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-rose-400 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong>Designsysteme:</strong> Konsistente Abstände, eine reduzierte Typografie-Hierarchie und klare Kontraste sind das Fundament eines sauberen UI.</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 text-center text-xs text-stone-400 font-medium tracking-widest uppercase">
                Ende der Prüfungsleistung
            </div>
</div>
</section>

    </>
  );
}
