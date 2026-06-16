import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Set today's date as default
        document.getElementById('dateInput').valueAsDate = new Date();

        function calculateAfa() {
            // Get inputs
            const cost = parseFloat(document.getElementById('costInput').value) || 0;
            const years = parseInt(document.getElementById('yearsInput').value) || 1;
            
            // Update Slider Text
            document.getElementById('yearsDisplay').innerText = years;

            // Calculations
            const yearlyDepreciation = cost / years;
            const monthlyDepreciation = yearlyDepreciation / 12;
            const taxSavingsCalc = yearlyDepreciation * 0.30; // Assuming ~30% tax rate

            // Format Currency
            const formatter = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 2
            });

            // Update UI
            document.getElementById('yearlyResult').innerText = formatter.format(yearlyDepreciation);
            document.getElementById('monthlyResult').innerText = formatter.format(monthlyDepreciation);
            document.getElementById('taxSaving').innerText = formatter.format(taxSavingsCalc);
        }

        // Initialize
        calculateAfa();

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav div');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.style.background = 'rgba(255, 255, 255, 0.9)';
            } else {
                nav.classList.remove('shadow-sm');
                nav.style.background = 'rgba(255, 255, 255, 0.8)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
<div className="glass-panel">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg">
<span className="font-bold text-sm tracking-tighter">AfA</span>
</div>
<a className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity" href="#">
                        Afa-Recht.de
                    </a>
</div>
<div className="hidden md:flex items-center space-x-8 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#calculator">Rechner</a>
<a className="hover:text-zinc-900 transition-colors" href="#cases">Mandanten-Cases</a>
<a className="hover:text-zinc-900 transition-colors" href="#process">Ablauf</a>
<a className="hover:text-zinc-900 transition-colors" href="#team">Kanzlei</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900" href="tel:030123456">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                        030 / 123 45 67
                    </a>
<a className="bg-zinc-900 text-white text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-500/20" href="#contact">
                        Kostenlos anfragen
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="fade-in-up">
<div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="iconify" data-icon="lucide:check-circle" data-width="14"></span>
                    Aktualisiert für EStG 2024
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-6">
                    Steuerlast senken. <br/>Rechtssicher abschreiben.
                </h1>
<p className="text-lg md:text-xl text-zinc-500 font-medium tracking-tight max-w-2xl mx-auto mb-10 leading-relaxed">
                    Wir helfen Unternehmen und Investoren, Abschreibungspotenziale voll auszuschöpfen. <br className="hidden md:block"/>
                    Durchsetzung von Nutzungsdauer-Gutachten und optimierte AfA-Strategien.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 ring-4 ring-blue-50" href="#calculator">
                        Sparpotenzial berechnen
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-700 px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#cases">
                        Erfolgsgeschichten ansehen
                    </a>
</div>

<div className="border-t border-zinc-100 pt-10">
<p className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mb-6">Vertrauen von über 500 Mandanten</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-40">

<span className="text-lg font-bold tracking-tighter">FINANZKREIS</span>
<span className="text-lg font-bold tracking-tighter">IMMOGROUP</span>
<span className="text-lg font-bold tracking-tighter">STARTUP-DE</span>
<span className="text-lg font-bold tracking-tighter">TECHVENTURE</span>
<span className="text-lg font-bold tracking-tighter">HANDELSKONTOR</span>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full blur-[120px] -z-10"></div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-100 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">100% Finanzamt-konform</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Unsere Gutachten zur Restnutzungsdauer halten strengen Betriebsprüfungen stand. Wir übernehmen die Kommunikation.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-100 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Liquidität sofort erhöhen</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Durch verkürzte Abschreibungsdauern reduzieren Sie die Steuerlast im Jetzt und schaffen Cashflow für Re-Investitionen.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-100 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
<span className="iconify" data-icon="lucide:file-signature" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Fachanwälte &amp; StB</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Keine Algorithmen allein. Echte Prüfung durch spezialisierte Fachanwälte für Steuerrecht und vereidigte Buchprüfer.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-100 relative overflow-hidden" id="calculator">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-12 md:text-center max-w-2xl mx-auto">
<span className="text-blue-400 font-semibold text-xs tracking-wider uppercase mb-3 block">Live Berechnung</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Wie viel können Sie abschreiben?</h2>
<p className="text-zinc-400">Nutzen Sie unseren Rechner für eine erste Indikation der linearen AfA. Für degressive Optionen oder Sonderabschreibungen kontaktieren Sie uns.</p>
</div>
<div className="flex flex-col lg:flex-row gap-8 items-start">

<div className="w-full lg:w-7/12 bg-white text-zinc-900 rounded-3xl p-8 shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div>
<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Anschaffungskosten (Netto)</label>
<div className="relative group">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-medium">€</span>
<input className="w-full bg-zinc-50 text-zinc-900 text-xl font-medium py-3.5 pl-10 pr-4 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-zinc-300" id="costInput" oninput="calculateAfa()" step="1000" type="number" value="15000"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Anschaffungsdatum</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
<span className="iconify" data-icon="lucide:calendar" data-width="16"></span>
</span>
<input className="w-full bg-zinc-50 text-zinc-900 text-sm font-medium py-4 pl-10 pr-4 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" id="dateInput" onchange="calculateAfa()" type="date"/>
</div>
</div>
</div>
<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide">Nutzungsdauer laut AfA-Tabelle</label>
<div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold"><span id="yearsDisplay">5</span> Jahre</div>
</div>
<input className="w-full accent-zinc-900" id="yearsInput" max="20" min="1" oninput="calculateAfa()" step="1" type="range" value="5"/>
<div className="flex justify-between text-[10px] text-zinc-400 mt-2 font-medium uppercase tracking-wide">
<span>Kurzläufer (1J)</span>
<span>Immobilien/Anlagen (20J)</span>
</div>
</div>
<div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100 flex items-start gap-4">
<span className="iconify text-blue-600 shrink-0 mt-1" data-icon="lucide:info" data-width="18"></span>
<div className="text-xs text-zinc-500 leading-relaxed">
<strong>Experten-Tipp:</strong> Bei einer tatsächlichen Nutzungsdauer, die kürzer ist als die amtliche Tabelle, können wir durch ein Gutachten oft höhere Abschreibungen durchsetzen.
                        </div>
</div>
</div>

<div className="w-full lg:w-5/12">
<div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden h-full flex flex-col">

<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
<div className="mb-auto">
<p className="text-blue-100 text-sm font-medium mb-1">Jährlicher Abzugbetrag</p>
<h3 className="text-5xl font-semibold tracking-tighter mb-8" id="yearlyResult">3.000,00 €</h3>
<div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6 mb-8">
<div>
<p className="text-blue-200 text-xs mb-1">Steuerersparnis (ca. 30%)</p>
<p className="text-xl font-medium tracking-tight" id="taxSaving">900,00 €</p>
</div>
<div>
<p className="text-blue-200 text-xs mb-1">Monatliche Belastung</p>
<p className="text-xl font-medium tracking-tight" id="monthlyResult">250,00 €</p>
</div>
</div>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
<h4 className="text-sm font-semibold mb-2">Detaillierten AfA-Plan erhalten</h4>
<form className="flex flex-col gap-3" onsubmit="event.preventDefault();">
<div className="flex gap-2">
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-blue-200/50 focus:outline-none focus:bg-black/30 transition-all" placeholder="E-Mail für PDF-Export" type="email"/>
<button className="bg-white text-blue-600 p-2.5 rounded-lg hover:bg-blue-50 transition-colors shrink-0" type="submit">
<span className="iconify" data-icon="lucide:download" data-width="20"></span>
</button>
</div>
<div className="flex items-center gap-2">
<input className="rounded bg-white/10 border-white/20 text-blue-600 focus:ring-0 w-3 h-3" id="check" type="checkbox"/>
<label className="text-[10px] text-blue-100 opacity-80 cursor-pointer" htmlFor="check">Ich stimme der Datenschutzerklärung zu.</label>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-y border-zinc-100" id="cases">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-zinc-900">Echte Ergebnisse.</h2>
<p className="text-zinc-500 max-w-xl">
                        Sehen Sie, wie wir für Mandanten verschiedener Branchen durch rechtssichere Gutachten die Steuerlast signifikant gesenkt haben.
                    </p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-zinc-500">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18"></span>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-zinc-900">
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<span className="bg-purple-50 text-purple-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Immobilien</span>
<span className="text-zinc-400 text-xs">München</span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Restnutzungsdauer verkürzt</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Reduzierung der Restnutzungsdauer eines Mehrfamilienhauses von 50 auf 33 Jahre durch Bausubstanzgutachten.
                    </p>
<div className="border-t border-zinc-50 pt-4 mt-auto">
<p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mb-1">Steuervorteil / Jahr</p>
<p className="text-2xl font-bold text-zinc-900 tracking-tight">+ 12.400 €</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Tech / IT</span>
<span className="text-zinc-400 text-xs">Berlin</span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Sammelposten Optimierung</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Strategische Aufteilung von Server-Hardware in GWG und Sammelposten zur Glättung der Gewinnspitzen.
                    </p>
<div className="border-t border-zinc-50 pt-4 mt-auto">
<p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mb-1">Liquiditätseffekt</p>
<p className="text-2xl font-bold text-zinc-900 tracking-tight">+ 45.000 €</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Produktion</span>
<span className="text-zinc-400 text-xs">Stuttgart</span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Maschinenpark AfA</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Nachweis einer intensiveren Nutzung (Schichtbetrieb) zur Rechtfertigung erhöhter Abschreibungssätze.
                    </p>
<div className="border-t border-zinc-50 pt-4 mt-auto">
<p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mb-1">Steuerrückerstattung</p>
<p className="text-2xl font-bold text-zinc-900 tracking-tight">+ 28.500 €</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="process">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tighter mb-4">Der Weg zum Gutachten</h2>
<p className="text-zinc-500">In 4 Schritten zur maximalen steuerlichen Entlastung.</p>
</div>
<div className="relative">

<div className="absolute left-[28px] top-0 bottom-0 w-[1px] bg-zinc-100 md:left-1/2 md:-ml-[0.5px]"></div>

<div className="relative flex flex-col md:flex-row items-center mb-12 group">
<div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-16 md:pl-0">
<h3 className="text-lg font-semibold text-zinc-900 mb-2">1. Kostenlose Erstprüfung</h3>
<p className="text-sm text-zinc-500">Wir analysieren Ihre Anlagenspiegel und identifizieren Optimierungspotenziale unverbindlich.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border border-zinc-100 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-colors order-1">
<span className="font-bold text-sm">01</span>
</div>
<div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center mb-12 group">
<div className="md:w-1/2 md:pr-12 hidden md:block order-1"></div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border border-zinc-100 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-colors order-1">
<span className="font-bold text-sm">02</span>
</div>
<div className="md:w-1/2 md:pl-12 order-2 pl-16 md:pl-0">
<h3 className="text-lg font-semibold text-zinc-900 mb-2">2. Datenerfassung &amp; Berechnung</h3>
<p className="text-sm text-zinc-500">Unsere Experten erstellen auf Basis der aktuellen Rechtsprechung eine Detailkalkulation.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center mb-12 group">
<div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-16 md:pl-0">
<h3 className="text-lg font-semibold text-zinc-900 mb-2">3. Gutachtenerstellung</h3>
<p className="text-sm text-zinc-500">Erstellung des rechtssicheren Gutachtens durch zertifizierte Sachverständige.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border border-zinc-100 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-colors order-1">
<span className="font-bold text-sm">03</span>
</div>
<div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center group">
<div className="md:w-1/2 md:pr-12 hidden md:block order-1"></div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 bg-zinc-900 text-white border border-zinc-900 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 shadow-lg shadow-zinc-900/20 order-1">
<span className="iconify" data-icon="lucide:check" data-width="20"></span>
</div>
<div className="md:w-1/2 md:pl-12 order-2 pl-16 md:pl-0">
<h3 className="text-lg font-semibold text-zinc-900 mb-2">4. Einreichung beim Finanzamt</h3>
<p className="text-sm text-zinc-500">Wir unterstützen Ihren Steuerberater bei der Durchsetzung der Werte in der Bilanz.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100" id="team">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tighter mb-4">Ihr Expertenteam</h2>
<p className="text-zinc-500">Fachanwälte und Steuerberater mit Fokus auf Asset-Management.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="aspect-square bg-zinc-200 rounded-2xl mb-4 overflow-hidden relative">
<img alt="Partner" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Dr. Thomas Weber</h3>
<p className="text-xs text-zinc-500 mb-2">Fachanwalt für Steuerrecht</p>
<a className="text-[10px] text-blue-600 font-medium hover:underline" href="#">Profil ansehen</a>
</div>

<div className="group">
<div className="aspect-square bg-zinc-200 rounded-2xl mb-4 overflow-hidden relative">
<img alt="Partner" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Sarah Klein</h3>
<p className="text-xs text-zinc-500 mb-2">Wirtschaftsprüferin</p>
<a className="text-[10px] text-blue-600 font-medium hover:underline" href="#">Profil ansehen</a>
</div>

<div className="group">
<div className="aspect-square bg-zinc-200 rounded-2xl mb-4 overflow-hidden relative">
<img alt="Partner" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Michael Bauer</h3>
<p className="text-xs text-zinc-500 mb-2">Gutachter für Immobilien</p>
<a className="text-[10px] text-blue-600 font-medium hover:underline" href="#">Profil ansehen</a>
</div>

<div className="bg-zinc-900 rounded-2xl p-6 flex flex-col justify-center items-center text-center h-full aspect-square md:aspect-auto">
<div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-white mb-4">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Karriere</h3>
<p className="text-xs text-zinc-400 mb-4">Wir suchen Verstärkung.</p>
<a className="text-xs font-semibold text-white bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors" href="#">
                        Jobs ansehen
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tighter mb-8">Häufige Fragen zur AfA</h2>
<div className="space-y-6">

<div className="border-b border-zinc-100 pb-6">
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Wann lohnt sich ein Gutachten zur Nutzungsdauer?</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Besonders bei Bestandsimmobilien, die älter als 30 Jahre sind, oder bei technisch schnell veraltenden Maschinen. Wenn die tatsächliche Abnutzung schneller erfolgt als die amtliche Tabelle vorsieht, lohnt sich ein Gutachten fast immer ab einem Restbuchwert von 50.000 €.
                    </p>
</div>

<div className="border-b border-zinc-100 pb-6">
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Akzeptiert das Finanzamt die Gutachten?</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Ja. Gemäß § 7 Abs. 4 Satz 2 EStG kann eine kürzere Nutzungsdauer zugrunde gelegt werden, wenn diese nachgewiesen wird. Unsere Gutachten erfüllen alle Anforderungen der aktuellen Rechtsprechung des BFH.
                    </p>
</div>

<div className="pb-6">
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Was kostet die Beratung?</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Das Erstgespräch und die Potenzialanalyse sind kostenlos. Die Erstellung von Gutachten erfolgt zum Festpreis, der sich oft bereits im ersten Jahr durch die Steuerersparnis amortisiert.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-white text-center relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">Bereit Steuern zu sparen?</h2>
<p className="text-zinc-400 text-lg mb-10">Lassen Sie uns gemeinsam Ihr Potenzial analysieren. Kostenlos und unverbindlich.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="mailto:kontakt@afa-recht.de">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
                    Termin vereinbaren
                </a>
<a className="w-full sm:w-auto bg-zinc-800 border border-zinc-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2" href="tel:+4930123456">
<span className="iconify" data-icon="lucide:phone" data-width="18"></span>
                    Rückruf anfordern
                </a>
</div>
<div className="mt-12 flex justify-center items-center gap-6 text-zinc-500 text-xs font-medium">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="12"></span> Datenverschlüsselt</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="12"></span> Kostenloses Erstgespräch</span>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-16 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded text-xs font-bold">AfA</div>
<span className="font-bold tracking-tight">Afa-Recht.de</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed mb-4">
                    Die führende Plattform für rechtssichere Abschreibungsoptimierung und steuerliche Gutachten in Deutschland.
                </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:xing" data-width="16"></span></a>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-4">Lösungen</h4>
<ul className="space-y-3 text-xs text-zinc-500 font-medium">
<li><a className="hover:text-blue-600 transition-colors" href="#">Immobilien AfA</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">GWG &amp; Sammelposten</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Restnutzungsdauer</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Degressive AfA</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-4">Unternehmen</h4>
<ul className="space-y-3 text-xs text-zinc-500 font-medium">
<li><a className="hover:text-blue-600 transition-colors" href="#team">Über uns</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#cases">Referenzen</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Karriere</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#contact">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-4">Rechtliches</h4>
<ul className="space-y-3 text-xs text-zinc-500 font-medium">
<li><a className="hover:text-blue-600 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">AGB</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Cookie Einstellungen</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-400">© 2024 Afa-Recht.de. Alle Rechte vorbehalten.</p>
<div className="flex gap-2 items-center">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-[10px] text-zinc-500 font-medium">Systeme operational</span>
</div>
</div>
</footer>



    </>
  );
}
