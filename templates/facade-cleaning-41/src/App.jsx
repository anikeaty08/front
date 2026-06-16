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
      

<header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex-shrink-0">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
<iconify-icon icon="solar:buildings-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">FR<span className="text-emerald-600">.</span>WALDVIERTEL</span>
</a>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#leistungen">Leistungen</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#prozess">Prozess</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#vorteile">Warum wir?</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all" href="#kontakt">
                        Gratis Probefläche
                    </a>

<button className="md:hidden p-2 text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main>

<section className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20 mb-6">
                    Ihr lokaler Partner im Waldviertel
                </span>
<h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                    Professionelle Fassadenreinigung im Waldviertel – Sauberkeit, die den Wert erhält.
                </h1>
<p className="mx-auto max-w-2xl text-lg text-slate-300 mb-10">
                    Wir entfernen Algen, Pilze und Schmutz ohne Neuanstrich. Schnell, ökologisch und kosteneffizient. Bringen Sie Ihre Immobilie wieder zum Strahlen.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all" href="#kontakt">
                        Kostenlose Probefläche anfragen
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white/20 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all" href="#leistungen">
                        Unsere Leistungen
                    </a>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white py-12" id="vorteile">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">Warum wir?</h2>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Ihre Vorteile auf einen Blick</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col items-center text-center">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4 ring-1 ring-emerald-100">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Kostenlose Probefläche</h3>
<p className="text-sm text-slate-600">Wir reinigen eine Musterfläche vor Ort – völlig unverbindlich und gratis.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4 ring-1 ring-emerald-100">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Bis zu 70% günstiger</h3>
<p className="text-sm text-slate-600">Sparen Sie sich die hohen Kosten eines kompletten Neuanstrichs.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4 ring-1 ring-emerald-100">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Biologisch abbaubar</h3>
<p className="text-sm text-slate-600">Schonend zur Umwelt dank moderner und ökologischer Reinigungsmittel.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4 ring-1 ring-emerald-100">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Regional verwurzelt</h3>
<p className="text-sm text-slate-600">Schnell bei Ihnen im gesamten Waldviertel, keine langen Anfahrtswege.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-50" id="leistungen">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Unsere Kernleistungen</h2>
<p className="text-lg text-slate-600">Maßgeschneiderte Reinigungslösungen für jede Oberfläche. Wir stellen den ursprünglichen Zustand Ihrer Immobilie wieder her.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-emerald-500/50">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:bacteria-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Algen- &amp; Moosentfernung</h3>
<p className="text-sm text-slate-600 leading-relaxed">Nachhaltige Beseitigung von organischem Bewuchs. Wir bekämpfen die Ursache tief in den Poren, damit Ihre Fassade länger sauber bleibt.</p>
</div>

<div className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-emerald-500/50">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:home-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Putz- &amp; Steinfassaden</h3>
<p className="text-sm text-slate-600 leading-relaxed">Spezialreinigung für sensible Oberflächen. Egal ob Wärmedämmverbundsystem (WDVS), Klinker oder Naturstein – wir haben das richtige Verfahren.</p>
</div>

<div className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-emerald-500/50">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Langzeitschutz (Imprägnierung)</h3>
<p className="text-sm text-slate-600 leading-relaxed">Nach der Reinigung versiegeln wir die Fläche transparent. Wasser perlt ab, Schmutz haftet nicht mehr – für Jahre geschützt.</p>
</div>

<div className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-emerald-500/50">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:home-angle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Dachreinigung</h3>
<p className="text-sm text-slate-600 leading-relaxed">Befreiung von Flechten und Moos auf Dächern. Verhindert Feuchtigkeitsschäden und verlängert die Lebensdauer Ihrer Dacheindeckung.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white border-y border-slate-200" id="prozess">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Unser 3-Schritte System</h2>
<p className="text-lg text-slate-600">Transparent, schonend und hochwirksam. So bringen wir Ihre Fassade wieder in Topform.</p>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">

<div className="bg-white p-6 rounded-2xl ring-1 ring-slate-200 shadow-sm relative text-center">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white font-semibold text-lg ring-4 ring-white">
                                1
                            </div>
<div className="mt-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Vorbehandlung</h3>
<p className="text-sm text-slate-600">Auftragen unseres biologisch abbaubaren Reinigungsschaums. Dieser löst Algen, Schmutz und Pilze tiefenwirksam an.</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl ring-1 ring-slate-200 shadow-sm relative text-center">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white font-semibold text-lg ring-4 ring-white">
                                2
                            </div>
<div className="mt-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Sanfte Reinigung</h3>
<p className="text-sm text-slate-600">Schonendes Abspülen der gelösten Verschmutzungen mit speziell abgestimmtem Wasserdruck. Ohne die Oberfläche aufzurauen.</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl ring-1 ring-slate-200 shadow-sm relative text-center border-b-4 border-emerald-500">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold text-lg ring-4 ring-white">
                                3
                            </div>
<div className="mt-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Langzeitschutz</h3>
<p className="text-sm text-slate-600">Applikation des transparenten Fassadenschutzes. Verhindert schnelle Neuverschmutzung und schützt vor Witterung.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-50" id="kontakt">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Sichern Sie sich Ihre gratis Probefläche.</h2>
<p className="text-lg text-slate-600 mb-8">Überzeugen Sie sich selbst von unserem Verfahren, bevor Sie sich entscheiden. Füllen Sie das Formular aus, und wir melden uns zeitnah für eine Terminvereinbarung im Waldviertel.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Rufen Sie uns an</p>
<p className="text-sm text-slate-600 mt-1">+43 (0) 123 456 789</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Schreiben Sie uns</p>
<p className="text-sm text-slate-600 mt-1">office@fassadenreinigung-waldviertel.at</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="vorname">Vorname</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" id="vorname" name="vorname" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="nachname">Nachname</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" id="nachname" name="nachname" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="telefon">Telefonnummer</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" id="telefon" name="telefon" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">E-Mail Adresse</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" id="email" name="email" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="objekttyp">Objekttyp</label>
<select className="custom-select block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 bg-white" id="objekttyp" name="objekttyp">
<option>Einfamilienhaus</option>
<option>Mehrfamilienhaus</option>
<option>Gewerbeobjekt</option>
<option>Sonstiges</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="ort">Ort im Waldviertel</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" id="ort" name="ort" placeholder="z.B. Zwettl, Horn..." type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="nachricht">Zusätzliche Informationen (optional)</label>
<textarea className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" id="nachricht" name="nachricht" rows="4"></textarea>
</div>

<div className="flex items-start">
<div className="flex h-6 items-center">
<input className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600" id="datenschutz" name="datenschutz" type="checkbox"/>
</div>
<div className="ml-3 text-sm leading-6">
<label className="text-slate-600" htmlFor="datenschutz">Ich stimme der Verarbeitung meiner Daten gemäß der <a className="font-medium text-emerald-600 hover:text-emerald-500" href="#">Datenschutzerklärung</a> zu.</label>
</div>
</div>
<button className="block w-full rounded-md bg-emerald-600 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors" type="button">
                                Kostenlos anfragen
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
<iconify-icon icon="solar:buildings-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-white">FR<span className="text-emerald-500">.</span>WALDVIERTEL</span>
</a>
<p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                        Ihr zuverlässiger Partner für professionelle Fassadenreinigung und Werterhalt von Immobilien im gesamten Waldviertel, Niederösterreich.
                    </p>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-4">Schnelllinks</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#leistungen">Leistungen</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#prozess">Prozess</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#vorteile">Warum wir?</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#kontakt">Kontakt</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-4">Rechtliches</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Impressum</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Datenschutz</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">
                    © 2023 Fassadenreinigung Waldviertel. Alle Rechte vorbehalten.
                </p>
<div className="flex items-center gap-4 text-slate-500">
<p className="text-xs">Made in Niederösterreich</p>
</div>
</div>
</div>
</footer>

    </>
  );
}
