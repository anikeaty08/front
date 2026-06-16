import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scroll Reveal Animation
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();

        // Calculator Logic
        function switchType(type) {
            const btnKredit = document.getElementById('btn-kredit');
            const btnLeasing = document.getElementById('btn-leasing');
            const labelAmount = document.getElementById('label-amount');

            if (type === 'kredit') {
                btnKredit.className = "px-8 py-2.5 text-sm font-medium rounded-lg bg-slate-800 text-white shadow-sm border border-slate-700 transition-all";
                btnLeasing.className = "px-8 py-2.5 text-sm font-medium rounded-lg text-slate-400 hover:text-white transition-all";
                labelAmount.innerText = "Kreditsumme";
            } else {
                btnLeasing.className = "px-8 py-2.5 text-sm font-medium rounded-lg bg-slate-800 text-white shadow-sm border border-slate-700 transition-all";
                btnKredit.className = "px-8 py-2.5 text-sm font-medium rounded-lg text-slate-400 hover:text-white transition-all";
                labelAmount.innerText = "Finanzierungsbetrag";
            }
            calculate();
        }

        function updateAmount(val) {
             const formatter = new Intl.NumberFormat('de-AT', {
                style: 'decimal',
                maximumFractionDigits: 0,
            });
            document.getElementById('display-amount').innerText = formatter.format(val);
            document.getElementById('amount').value = val;
        }

        function calculate() {
            const amount = parseFloat(document.getElementById('amount').value) || 0;
            const feeRate = parseFloat(document.getElementById('fee').value) || 0;
            const interestDiff = parseFloat(document.getElementById('interest').value) || 0;

            // Calculation logic
            let refund = (amount * feeRate) + interestDiff;
            
            // Format currency German style
            const formatter = new Intl.NumberFormat('de-AT', {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });

            document.getElementById('result').innerText = formatter.format(refund);
        }

        // Init
        calculate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#0b1120]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group" href="#">
<div className="text-yellow-500 p-1 rounded-lg transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:scale" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="self-center text-lg font-semibold whitespace-nowrap text-white tracking-tight">Reclaim Services</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-[#0b1120] bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-white/5" onclick="document.getElementById('calculator').scrollIntoView()" type="button">
                    Kostenlos prüfen
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Menü öffnen</span>
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-slate-400 hover:text-white transition-colors" href="#legal-basis">Rechtslage</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-400 hover:text-white transition-colors" href="#calculator">Rechner</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-400 hover:text-white transition-colors" href="#process">Ablauf</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-20">

<img alt="Legal Architecture" className="w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2112&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-[#0b1120]/80 via-[#0b1120]/95 to-[#0b1120]"></div>
<div className="px-6 mx-auto max-w-7xl relative z-10 text-center">
<div className="reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-200 text-xs font-medium mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.15)]">
<span className="flex h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                    Aktuelle OGH-Rechtsprechung Österreich
                </div>
<h1 className="mb-6 text-4xl font-semibold tracking-tight leading-[1.1] text-white md:text-6xl lg:text-7xl">
                    Kreditgebühren <br className="hidden md:block"/>
<span className="text-gold">erfolgreich zurückfordern.</span>
</h1>
<p className="mb-10 text-lg font-normal text-slate-400 lg:text-xl sm:px-16 xl:px-48 max-w-4xl mx-auto leading-relaxed">
                    Wir setzen Ihre Ansprüche auf Rückerstattung unzulässiger Bearbeitungsgebühren bei Krediten und Leasingverträgen durch. 
                    <span className="text-slate-200">Ohne Kostenrisiko. Ohne Aufwand.</span>
</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
<a className="inline-flex justify-center items-center py-3.5 px-8 text-base font-medium text-center text-[#0b1120] rounded-lg bg-gold-gradient hover:brightness-110 focus:ring-4 focus:ring-yellow-500/20 transition-all shadow-[0_0_20px_rgba(234,179,8,0.15)]" href="#calculator">
                        Anspruch berechnen
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="inline-flex justify-center items-center py-3.5 px-8 text-base font-medium text-center text-white rounded-lg border border-slate-700 hover:bg-slate-800/50 focus:ring-4 focus:ring-slate-800 transition-all bg-[#0b1120]/50 backdrop-blur-sm" href="#legal-basis">
                        Rechtslage verstehen
                    </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800/50 pt-12 max-w-5xl mx-auto reveal">
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">Ø 1.200€</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Rückerstattung</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">100%</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Erfolgsbasis</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">0€</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Kostenrisiko</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">14 Tage</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Auszahlung</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f172a] relative border-t border-slate-800/50" id="legal-basis">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Die rechtliche Grundlage</h2>
<div className="space-y-6 text-slate-400 text-lg leading-relaxed">
<p>
                        In den letzten Jahren hat der <strong className="text-white">Oberste Gerichtshof (OGH)</strong> in Österreich mehrere wegweisende Urteile gefällt, die die Rechte von Kreditnehmern und Leasingkunden massiv stärken.
                    </p>
<p>
                        Banken haben häufig <span className="text-yellow-500/90 font-medium">Bearbeitungsgebühren</span> verrechnet, die als "laufzeitunabhängig" deklariert waren, für die jedoch keine konkrete Gegenleistung erbracht wurde. Diese Klauseln wurden in vielen Fällen als rechtswidrig eingestuft.
                    </p>
<div className="bg-blue-950/30 border border-blue-900/30 p-6 rounded-xl mt-6">
<div className="flex gap-4">
<span className="iconify text-yellow-500 flex-shrink-0 mt-1" data-icon="lucide:scale" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Ihr Recht auf Rückzahlung</h4>
<p className="text-sm text-slate-400">Betroffen sind Konsumkredite, Wohnbaukredite und KFZ-Leasingverträge der letzten Jahre. Die Verjährung ist oft noch nicht eingetreten.</p>
</div>
</div>
</div>
</div>
</div>
<div className="relative reveal delay-200">
<div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-blue-600/20 rounded-2xl blur-2xl opacity-30"></div>
<div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
<img alt="Law Books" className="w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent p-8">
<div className="flex items-center gap-3 text-yellow-400 mb-2">
<span className="iconify" data-icon="lucide:gavel" data-width="20"></span>
<span className="text-sm font-bold uppercase tracking-wider">Judikatur</span>
</div>
<p className="text-white font-medium">Wir prüfen Ihren Vertrag auf unzulässige Klauseln.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0b1120] relative overflow-hidden" id="calculator">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-4">
                    Rückforderungs-Rechner
                </h2>
<p className="text-slate-400">Berechnen Sie unverbindlich Ihr Potenzial.</p>
</div>

<div className="reveal delay-100 relative glass-panel rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50">

<div className="h-1 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
<div className="p-8 md:p-12 relative z-10">

<div className="flex justify-center mb-10">
<div className="bg-[#0f172a] p-1 rounded-xl border border-slate-800 inline-flex shadow-inner">
<button className="px-8 py-2.5 text-sm font-medium rounded-lg bg-slate-800 text-white shadow-sm border border-slate-700 transition-all" id="btn-kredit" onclick="switchType('kredit')">Kredit</button>
<button className="px-8 py-2.5 text-sm font-medium rounded-lg text-slate-400 hover:text-white transition-all" id="btn-leasing" onclick="switchType('leasing')">Leasing</button>
</div>
</div>

<div className="space-y-8">
<div>
<div className="flex justify-between items-end mb-4">
<label className="block text-sm font-medium text-slate-300" htmlFor="amount">
<span id="label-amount">Finanzierungssumme</span>
</label>
<div className="text-2xl font-semibold text-white tracking-tight">
                                    € <span id="display-amount">25.000</span>
</div>
</div>
<input className="w-full mb-2" max="150000" min="5000" oninput="updateAmount(this.value); calculate()" step="1000" type="range" value="25000"/>
<div className="flex justify-between text-xs text-slate-500 font-medium">
<span>€ 5.000</span>
<span>€ 150.000</span>
</div>
<input id="amount" type="hidden" value="25000"/>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#0f172a]/50 p-4 rounded-xl border border-slate-800">
<label className="block mb-3 text-xs font-medium text-slate-400 uppercase tracking-wider" htmlFor="fee">Bearbeitungsgebühr</label>
<select className="bg-transparent border-0 text-white text-lg font-medium focus:ring-0 block w-full p-0 cursor-pointer" id="fee" onchange="calculate()">
<option value="0.01">1% (Niedrig)</option>
<option value="0.02">2% (Durchschnitt)</option>
<option selected="" value="0.03">3% (Häufig)</option>
<option value="0.04">4% (Hoch)</option>
</select>
</div>
<div className="bg-[#0f172a]/50 p-4 rounded-xl border border-slate-800">
<label className="block mb-3 text-xs font-medium text-slate-400 uppercase tracking-wider" htmlFor="interest">Zinsanpassung</label>
<select className="bg-transparent border-0 text-white text-lg font-medium focus:ring-0 block w-full p-0 cursor-pointer" id="interest" onchange="calculate()">
<option value="0">Keine</option>
<option value="200">Gering (~200€)</option>
<option selected="" value="500">Mittel (~500€)</option>
<option value="1000">Hoch (~1000€)</option>
</select>
</div>
</div>
</div>

<div className="mt-10 bg-gradient-to-br from-[#0f172a] to-[#0b1120] rounded-xl p-8 text-center text-white relative overflow-hidden border border-slate-800 shadow-2xl">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-600 via-transparent to-transparent"></div>
<div className="relative z-10">
<p className="text-sm font-medium text-slate-400 mb-2">Geschätzte Rückerstattung (abzüglich Erfolgshonorar)</p>
<div className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 mb-3 drop-shadow-sm">
                                € <span id="result">1.250,00</span>
</div>
<p className="text-xs text-slate-500 opacity-80 max-w-sm mx-auto">*Dies ist eine unverbindliche Schätzung basierend auf Erfahrungswerten.</p>
</div>
</div>
<div className="mt-8 text-center">
<button className="w-full md:w-auto min-w-[300px] text-[#0b1120] bg-gold-gradient hover:brightness-110 focus:ring-4 focus:ring-yellow-500/30 font-medium rounded-lg text-lg px-8 py-4 transition-all shadow-xl shadow-yellow-500/10 transform hover:-translate-y-1">
                            Jetzt kostenlos Fall prüfen
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f172a] border-t border-slate-800/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Warum Reclaim Services?</h2>
<p className="text-slate-400">Wir kombinieren juristische Expertise mit modernster Technologie für Ihren Erfolg.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#0b1120] p-8 rounded-2xl border border-slate-800 hover:border-yellow-500/30 transition-all duration-300 group reveal delay-100">
<div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/10 transition-colors">
<span className="iconify text-yellow-500" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Kein Kostenrisiko</h3>
<p className="text-slate-400 leading-relaxed text-sm">Wir arbeiten ausschließlich auf Erfolgsbasis. Sie zahlen nur, wenn wir Geld für Sie zurückholen. Anwalts- und Gerichtskosten übernehmen unsere Finanzierungspartner.</p>
</div>

<div className="bg-[#0b1120] p-8 rounded-2xl border border-slate-800 hover:border-yellow-500/30 transition-all duration-300 group reveal delay-200">
<div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/10 transition-colors">
<span className="iconify text-yellow-500" data-icon="lucide:hourglass" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Minimaler Aufwand</h3>
<p className="text-slate-400 leading-relaxed text-sm">Laden Sie Ihre Vertragsunterlagen digital hoch. Ab diesem Zeitpunkt übernehmen wir die gesamte Kommunikation mit Banken und Anwälten.</p>
</div>

<div className="bg-[#0b1120] p-8 rounded-2xl border border-slate-800 hover:border-yellow-500/30 transition-all duration-300 group reveal delay-300">
<div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/10 transition-colors">
<span className="iconify text-yellow-500" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Experten-Netzwerk</h3>
<p className="text-slate-400 leading-relaxed text-sm">Wir arbeiten mit spezialisierten Verbraucherschutzanwälten zusammen, die bereits hunderte Fälle gegen Banken gewonnen haben.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0b1120] relative" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Ihr Weg zur Rückerstattung</h2>
<div className="relative pl-8 border-l border-slate-800 space-y-12">

<div className="relative">
<span className="absolute -left-[39px] flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 ring-4 ring-[#0b1120] text-yellow-500 font-bold text-xs">1</span>
<h3 className="text-lg font-semibold text-white mb-2">Unterlagen hochladen</h3>
<p className="text-slate-400 text-sm">Senden Sie uns Ihren Kredit- oder Leasingvertrag. Ein Foto oder Scan genügt für die Erstprüfung.</p>
</div>

<div className="relative">
<span className="absolute -left-[39px] flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 ring-4 ring-[#0b1120] text-yellow-500 font-bold text-xs">2</span>
<h3 className="text-lg font-semibold text-white mb-2">Kostenlose Analyse</h3>
<p className="text-slate-400 text-sm">Unsere Experten prüfen innerhalb von 48 Stunden, ob unzulässige Gebühren verrechnet wurden.</p>
</div>

<div className="relative">
<span className="absolute -left-[39px] flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-[#0b1120] ring-4 ring-[#0b1120] font-bold text-xs">3</span>
<h3 className="text-lg font-semibold text-white mb-2">Geld zurück erhalten</h3>
<p className="text-slate-400 text-sm">Wir setzen den Anspruch durch. Nach Erfolg überweisen wir Ihnen das Geld abzüglich der Provision.</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden glass-panel border border-slate-700/50 reveal delay-200 flex items-center justify-center bg-[#0f172a]">

<div className="text-center p-8">
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-900/20 text-blue-400 mb-6 animate-pulse">
<span className="iconify" data-icon="lucide:file-check-2" data-width="40"></span>
</div>
<h4 className="text-white font-medium mb-2">Digital &amp; Sicher</h4>
<p className="text-slate-500 text-sm max-w-xs mx-auto">SSL-verschlüsselte Datenübertragung und DSGVO-konforme Verarbeitung Ihrer Finanzdaten.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f172a] border-t border-slate-800" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-12 text-center reveal">Häufig gestellte Fragen</h2>
<div className="space-y-4 reveal delay-100">
<details className="group border border-slate-800 rounded-lg bg-[#0b1120] open:bg-slate-900 open:ring-1 open:ring-slate-700 transition-all">
<summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white list-none hover:text-yellow-400 transition-colors">
<span>Wie hoch ist die Erfolgsprovision?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-500" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-400 px-5 pb-5 leading-relaxed border-t border-slate-800 mt-2 pt-4 text-sm">
                        Unsere Provision beträgt im Erfolgsfall 35% inkl. USt. vom zurückgeholten Betrag. Wenn wir kein Geld für Sie zurückholen, zahlen Sie 0%. Das Risiko liegt zu 100% bei uns.
                    </div>
</details>
<details className="group border border-slate-800 rounded-lg bg-[#0b1120] open:bg-slate-900 open:ring-1 open:ring-slate-700 transition-all">
<summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white list-none hover:text-yellow-400 transition-colors">
<span>Verschlechtert sich mein Verhältnis zur Bank?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-500" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-400 px-5 pb-5 leading-relaxed border-t border-slate-800 mt-2 pt-4 text-sm">
                        Nein. Die Rückforderung unzulässiger Gebühren ist Ihr gutes Recht und ein standardisierter Vorgang. Ihre Bonität oder laufende Kredite werden dadurch nicht negativ beeinflusst.
                    </div>
</details>
<details className="group border border-slate-800 rounded-lg bg-[#0b1120] open:bg-slate-900 open:ring-1 open:ring-slate-700 transition-all">
<summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white list-none hover:text-yellow-400 transition-colors">
<span>Welche Unterlagen werden benötigt?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-500" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-400 px-5 pb-5 leading-relaxed border-t border-slate-800 mt-2 pt-4 text-sm">
                        Für die Erstprüfung benötigen wir lediglich den Kredit- oder Leasingvertrag. Sollten weitere Unterlagen (z.B. Kontoauszüge) notwendig sein, fordern wir diese gezielt an.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#0b1120] text-slate-400 border-t border-slate-800 relative pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<span className="iconify text-yellow-500" data-icon="lucide:scale" data-width="24"></span>
<span className="text-xl font-semibold text-white tracking-tight">Reclaim Services</span>
</a>
<p className="text-sm leading-relaxed mb-6 text-slate-500">
                        Spezialisiert auf die Durchsetzung von Verbraucherrechten im Bankensektor. Wir kämpfen für Ihr Geld.
                    </p>
</div>
<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Rechtliches</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-yellow-500 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">AGB</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Menü</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-yellow-500 transition-colors" href="#calculator">Rechner</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#legal-basis">Rechtslage</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Kontakt</h3>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 text-slate-500" data-icon="lucide:map-pin" data-width="16"></span>
<span>Reclaim Services GmbH<br/>Wien, Österreich</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-slate-500" data-icon="lucide:mail" data-width="16"></span>
<a className="hover:text-white transition-colors" href="mailto:info@reclaim-services.at">info@reclaim-services.at</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-600">
                    © 2023 Reclaim Services GmbH. Alle Rechte vorbehalten.
                </div>
<div className="flex gap-4">
<span className="iconify text-slate-600 hover:text-white cursor-pointer transition-colors" data-icon="lucide:linkedin" data-width="20"></span>
<span className="iconify text-slate-600 hover:text-white cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="20"></span>
</div>
</div>
</div>
</footer>



    </>
  );
}
