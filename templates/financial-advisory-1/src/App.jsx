import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
dark: {
DEFAULT: '#0b1e36',
accent: '#0e2844'
},
sand: '#B2A49A',
light: '#F4F1EE',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
spacing: {
'18': '4.5rem',
'22': '5.5rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-dark/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="text-white font-serif tracking-widest uppercase text-xl font-semibold flex items-center gap-2" href="#">
<span className="text-sand">Dr.</span> Rotter
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
<a className="hover:text-sand transition-colors" href="#leistungen">Leistungen</a>
<a className="hover:text-sand transition-colors" href="#kundenstimmen">Kundenstimmen</a>
<a className="hover:text-sand transition-colors" href="#expertise">Gestaltungsberatung</a>
<a className="hover:text-sand transition-colors" href="#about">Zusammenarbeit</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-sand text-dark rounded-full hover:bg-sand/90 transition-all shadow-[0_0_15px_rgba(178,164,154,0.15)]" href="#contact">
                Termin buchen
            </a>
<button className="md:hidden text-white p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative bg-dark pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
<div className="max-w-2xl fade-in-up">
<p className="text-sand text-xs tracking-widest uppercase font-medium mb-6 flex items-center gap-4">
<span className="w-8 h-px bg-sand"></span>
                        Für erfahrene Unternehmer und Investoren
                    </p>
<h1 className="text-4xl lg:text-6xl text-white font-serif font-semibold tracking-tight leading-[1.1] mb-8">
                        Erfolgreiche Investitionen sind kein Zufall. <span className="text-white/70 italic font-normal block mt-2">Setze auf mein Wissen für Deine finanzielle Freiheit.</span>
</h1>
<p className="text-white/70 text-base leading-relaxed mb-10 max-w-lg">
                        Profitiere von meiner langjährigen Erfahrung als Unternehmer, aktiver Investor, Steuerberater und Rechtsanwalt für Deinen Vermögensaufbau.
                    </p>
<ul className="space-y-4 mb-12">
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-sand text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Partner Duske &amp; Partner
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-sand text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            RA &amp; StB LL.M. | Zertifizierter Stiftungsberater
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-sand text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Fachberater Internationales Steuerrecht
                        </li>
</ul>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-sand text-dark rounded-full hover:bg-white transition-all group" href="#contact">
                        Starte jetzt Deinen strategischen Vermögensaufbau
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative lg:ml-auto w-full max-w-lg fade-in-up delay-200">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
<img alt="Dr. Markus Rotter Portrait" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 image-overlay"></div>
</div>

<div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-sand/30 rounded-2xl"></div>
</div>
</div>
</div>
</section>

<section className="bg-dark-accent border-y border-sand/20">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-sand/10">
<div className="text-center">
<div className="text-4xl md:text-5xl font-serif text-sand mb-2">15</div>
<div className="text-xs text-white/60 uppercase tracking-widest">Jahre Erfahrung</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-serif text-sand mb-2">20</div>
<div className="text-xs text-white/60 uppercase tracking-widest">Jahre Fachexpertise</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-serif text-sand mb-2">2.5k+</div>
<div className="text-xs text-white/60 uppercase tracking-widest">Beratungen</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-serif text-sand mb-2">4</div>
<div className="text-xs text-white/60 uppercase tracking-widest">Fachbücher</div>
</div>
</div>
</div>
</section>

<section className="bg-light py-24 lg:py-32" id="expertise">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight font-semibold text-dark">
                    Meine fachliche Expertise kombiniert mit persönlicher Unternehmererfahrung
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-10 relative group hover:shadow-[0_20px_40px_-15px_rgba(11,30,54,0.05)] transition-all duration-300 fade-in-up delay-100">
<div className="absolute top-0 left-0 w-full h-1 bg-sand scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<span className="text-sand/30 font-serif text-4xl mb-6 block">01</span>
<h3 className="text-xl font-serif font-semibold text-dark mb-4">Unternehmertum</h3>
<p className="text-dark/60 text-sm leading-relaxed">
                        Ich kenne die Praxis. Durch eigene Investitionen und die Führung mehrerer Unternehmen weiß ich genau, welche Herausforderungen und Chancen auf Dich warten.
                    </p>
</div>

<div className="bg-white p-10 relative group hover:shadow-[0_20px_40px_-15px_rgba(11,30,54,0.05)] transition-all duration-300 fade-in-up delay-200">
<div className="absolute top-0 left-0 w-full h-1 bg-sand scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<span className="text-sand/30 font-serif text-4xl mb-6 block">02</span>
<h3 className="text-xl font-serif font-semibold text-dark mb-4">Steuer-Expertise</h3>
<p className="text-dark/60 text-sm leading-relaxed">
                        Strategische Steuergestaltung ist kein Hexenwerk, sondern erfordert tiefes Fachwissen. Wir strukturieren Dein Setup so, dass mehr Kapital für den Vermögensaufbau bleibt.
                    </p>
</div>

<div className="bg-white p-10 relative group hover:shadow-[0_20px_40px_-15px_rgba(11,30,54,0.05)] transition-all duration-300 fade-in-up delay-300">
<div className="absolute top-0 left-0 w-full h-1 bg-sand scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<span className="text-sand/30 font-serif text-4xl mb-6 block">03</span>
<h3 className="text-xl font-serif font-semibold text-dark mb-4">Rechtliche Expertise</h3>
<p className="text-dark/60 text-sm leading-relaxed">
                        Ein solides Fundament braucht rechtliche Sicherheit. Mein juristisches Hintergrundwissen schützt Deine Strukturen vor angreifbaren Konstrukten.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-dark py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#B2A49A 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<iconify-icon className="text-sand/20 text-6xl mb-6 block mx-auto" icon="solar:quote-left-bold-duotone"></iconify-icon>
<blockquote className="text-2xl md:text-4xl text-white font-serif tracking-tight leading-snug mb-8">
                „Weil Denken die schwerste Arbeit ist, die es gibt, beschäftigen sich auch nur wenige damit."
            </blockquote>
<cite className="text-sand text-sm uppercase tracking-widest not-italic">
                — Dr. Markus Rotter, LL.M.
            </cite>
</div>
</section>

<section className="bg-white py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight font-semibold text-dark mb-4">
                    Kommt Dir eine dieser Herausforderungen bekannt vor?
                </h2>
<p className="text-dark/60 text-sm">Die meisten Unternehmer scheitern nicht an der Idee, sondern an der Struktur.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">

<div className="border border-light p-8 hover:border-sand transition-colors duration-300 group cursor-default">
<iconify-icon className="text-sand text-3xl mb-4 group-hover:scale-110 transition-transform" icon="solar:danger-triangle-linear"></iconify-icon>
<h4 className="text-lg font-semibold text-dark mb-3">Hohe Steuernachzahlung</h4>
<p className="text-sm text-dark/60">Gewinne sind schön, bis das Finanzamt seinen Teil fordert. Wir optimieren vorab, statt im Nachhinein zu reagieren.</p>
</div>

<div className="border border-light p-8 hover:border-sand transition-colors duration-300 group cursor-default">
<iconify-icon className="text-sand text-3xl mb-4 group-hover:scale-110 transition-transform" icon="solar:buildings-linear"></iconify-icon>
<h4 className="text-lg font-semibold text-dark mb-3">Unternehmenskauf/-verkauf</h4>
<p className="text-sm text-dark/60">Transaktionen bergen enorme steuerliche Sprengkraft. Strukturierung ist hier der Schlüssel zum Erhalt des Kaufpreises.</p>
</div>

<div className="border border-light p-8 hover:border-sand transition-colors duration-300 group cursor-default">
<iconify-icon className="text-sand text-3xl mb-4 group-hover:scale-110 transition-transform" icon="solar:global-linear"></iconify-icon>
<h4 className="text-lg font-semibold text-dark mb-3">Internationale Strukturen</h4>
<p className="text-sm text-dark/60">Wegzug oder Auslandsgesellschaft? Ohne saubere Planung drohen Doppelbesteuerung und Wegzugsbesteuerung.</p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center text-sm font-medium text-dark border-b border-dark pb-1 hover:text-sand hover:border-sand transition-colors" href="#contact">
                    Lass uns Deine Struktur prüfen <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-light py-24 lg:py-32" id="leistungen">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight font-semibold text-dark mb-16">
                Umfassende Betreuung für Deinen Erfolg
            </h2>
<div className="grid lg:grid-cols-2 gap-16">

<div>
<div className="flex items-center gap-4 mb-8">
<span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sand border border-sand/20">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="20"></iconify-icon>
</span>
<h3 className="text-2xl font-serif font-semibold text-dark">Operative Beratung</h3>
</div>
<div className="space-y-4">
<details className="group bg-white p-6 rounded-sm shadow-sm border border-transparent open:border-sand/20 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-dark">
                                Steuererklärung &amp; Jahresabschluss
                                <iconify-icon className="text-sand transition-transform group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-dark/60 leading-relaxed border-t border-light pt-4">
                                Präzise Erstellung nach aktuellen Standards. Wir sorgen dafür, dass Du alle Fristen einhältst und keine Potenziale verschenkst.
                            </div>
</details>
<details className="group bg-white p-6 rounded-sm shadow-sm border border-transparent open:border-sand/20 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-dark">
                                Finanzbuchführung &amp; Lohnbuchhaltung
                                <iconify-icon className="text-sand transition-transform group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-dark/60 leading-relaxed border-t border-light pt-4">
                                Digital, effizient und transparent. Deine Zahlen sind die Basis für alle strategischen Entscheidungen.
                            </div>
</details>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-8">
<span className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-sand">
<iconify-icon icon="solar:route-linear" width="20"></iconify-icon>
</span>
<h3 className="text-2xl font-serif font-semibold text-dark">Strategische Beratung</h3>
</div>
<div className="space-y-4">
<details className="group bg-white p-6 rounded-sm shadow-sm border border-transparent open:border-sand/20 cursor-pointer" open="">
<summary className="flex justify-between items-center font-medium text-sm text-dark">
                                Steuerstruktur &amp; Holding
                                <iconify-icon className="text-sand transition-transform group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-dark/60 leading-relaxed border-t border-light pt-4">
                                Aufbau intelligenter Unternehmensstrukturen (GmbH, Holding, Stiftungen) zur Thesaurierung von Gewinnen und Reinvestition.
                            </div>
</details>
<details className="group bg-white p-6 rounded-sm shadow-sm border border-transparent open:border-sand/20 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-dark">
                                Vermögensplanung &amp; Nachfolge
                                <iconify-icon className="text-sand transition-transform group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-dark/60 leading-relaxed border-t border-light pt-4">
                                Schutz des privaten Vermögens und steueroptimierte Übertragung an die nächste Generation.
                            </div>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark py-24 lg:py-32 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight font-semibold text-white">So einfach geht's</h2>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2"></div>
<div className="grid md:grid-cols-3 gap-12 text-center relative z-10">

<div className="relative bg-dark px-4">
<div className="w-16 h-16 mx-auto rounded-full bg-dark-accent border border-sand flex items-center justify-center text-sand text-xl font-serif mb-6 shadow-[0_0_20px_rgba(178,164,154,0.1)]">
                            01
                        </div>
<h4 className="text-white font-medium mb-2">Termin buchen</h4>
<p className="text-xs text-white/50">Wähle einen passenden Slot im Kalender aus.</p>
</div>

<div className="relative bg-dark px-4">
<div className="w-16 h-16 mx-auto rounded-full bg-dark-accent border border-sand flex items-center justify-center text-sand text-xl font-serif mb-6 shadow-[0_0_20px_rgba(178,164,154,0.1)]">
                            02
                        </div>
<h4 className="text-white font-medium mb-2">Kennenlerngespräch</h4>
<p className="text-xs text-white/50">Wir analysieren Deine aktuelle Situation und Ziele.</p>
</div>

<div className="relative bg-dark px-4">
<div className="w-16 h-16 mx-auto rounded-full bg-sand border border-sand flex items-center justify-center text-dark text-xl font-serif mb-6">
                            03
                        </div>
<h4 className="text-white font-medium mb-2">Get started</h4>
<p className="text-xs text-white/50">Wir setzen Deine neue Struktur in die Tat um.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-transparent border border-sand text-sand rounded-full hover:bg-sand hover:text-dark transition-all" href="#contact">
                    Starte jetzt Deinen strategischen Vermögensaufbau
                </a>
</div>
</div>
</section>

<section className="bg-light py-24 lg:py-32" id="kundenstimmen">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight font-semibold text-dark mb-16 text-center">Kundenstimmen</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 border border-dark/5 hover:border-sand/30 transition-colors">
<iconify-icon className="text-sand text-4xl mb-6 opacity-50" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-sm text-dark/80 leading-relaxed mb-8">
                        "Endlich ein Steuerberater, der mitdenkt. Die Holding-Struktur hat uns im ersten Jahr bereits einen sechsstelligen Betrag an Steuern gespart, den wir reinvestieren konnten."
                    </p>
<div>
<p className="font-semibold text-dark text-sm">Michael T.</p>
<p className="text-xs text-dark/50">Geschäftsführer E-Commerce</p>
</div>
</div>

<div className="bg-white p-8 border border-dark/5 hover:border-sand/30 transition-colors">
<iconify-icon className="text-sand text-4xl mb-6 opacity-50" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-sm text-dark/80 leading-relaxed mb-8">
                        "Die Kombination aus anwaltlicher und steuerlicher Beratung ist Gold wert. Herr Dr. Rotter hat unseren Unternehmensverkauf rechtssicher und hochgradig steueroptimiert begleitet."
                    </p>
<div>
<p className="font-semibold text-dark text-sm">Sarah L.</p>
<p className="text-xs text-dark/50">Tech-Gründerin</p>
</div>
</div>

<div className="bg-white p-8 border border-dark/5 hover:border-sand/30 transition-colors">
<iconify-icon className="text-sand text-4xl mb-6 opacity-50" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-sm text-dark/80 leading-relaxed mb-8">
                        "Komplexes Steuerrecht wurde uns verständlich übersetzt. Dank der neuen Struktur ist unser privates Vermögen geschützt und wächst deutlich schneller."
                    </p>
<div>
<p className="font-semibold text-dark text-sm">Andreas K.</p>
<p className="text-xs text-dark/50">Immobilien-Investor</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 lg:py-32">
<div className="max-w-5xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight font-semibold text-dark mb-16 text-center">Das macht den Unterschied</h2>
<div className="grid md:grid-cols-2 bg-light rounded-2xl overflow-hidden border border-dark/5">

<div className="p-8 md:p-12 md:border-r border-dark/5 bg-white">
<h3 className="text-lg font-medium text-dark/40 mb-8 border-b border-light pb-4">Andere Steuerberater</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-dark/20 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-dark/60">Verwalten nur die Vergangenheit</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-dark/20 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-dark/60">Standard-Lösungen aus der Schublade</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-dark/20 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-dark/60">Reagieren erst nach Aufforderung</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-dark/20 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-dark/60">Rein steuerlicher Fokus</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-dark/20 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-dark/60">Theoretisches Wissen</span>
</li>
</ul>
</div>

<div className="p-8 md:p-12 bg-dark text-white relative shadow-2xl">
<div className="absolute top-0 right-0 w-32 h-32 bg-sand/10 blur-3xl rounded-full"></div>
<h3 className="text-lg font-medium text-sand mb-8 border-b border-white/10 pb-4 flex items-center gap-2">
                        Dr. Markus Rotter
                    </h3>
<ul className="space-y-6 relative z-10">
<li className="flex items-start gap-4">
<iconify-icon className="text-sand text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/90">Gestalten aktiv Deine finanzielle Zukunft</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-sand text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/90">Maßgeschneiderte strategische Konzepte</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-sand text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/90">Proaktive Kommunikation &amp; Impulse</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-sand text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/90">Kombination aus Steuer &amp; Recht</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-sand text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/90">Echte eigene Unternehmererfahrung</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-light py-24 lg:py-32 border-t border-dark/5" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-serif tracking-tight font-semibold text-dark mb-6">
                        Dein Partner auf Augenhöhe
                    </h2>
<div className="space-y-4 text-sm text-dark/70 leading-relaxed mb-8">
<p>
                            Als Unternehmer und Investor kenne ich die Herausforderungen auf dem Weg zur finanziellen Freiheit aus eigener Erfahrung. Reine Theorie reicht in der Praxis oft nicht aus.
                        </p>
<p>
                            Mein Ansatz kombiniert tiefgreifendes rechtliches und steuerliches Fachwissen mit echtem unternehmerischen Denken. Wir sprechen eine Sprache und verfolgen das gleiche Ziel: Deinen Vermögensaufbau maximal zu beschleunigen und abzusichern.
                        </p>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 border-l-2 border-sand pl-6">
<div className="flex items-center gap-2 text-sm text-dark font-medium">
<iconify-icon className="text-sand" icon="solar:check-read-linear"></iconify-icon> Rechtsanwalt
                        </div>
<div className="flex items-center gap-2 text-sm text-dark font-medium">
<iconify-icon className="text-sand" icon="solar:check-read-linear"></iconify-icon> Stiftungsberater
                        </div>
<div className="flex items-center gap-2 text-sm text-dark font-medium">
<iconify-icon className="text-sand" icon="solar:check-read-linear"></iconify-icon> Steuerberater
                        </div>
<div className="flex items-center gap-2 text-sm text-dark font-medium">
<iconify-icon className="text-sand" icon="solar:check-read-linear"></iconify-icon> Autor
                        </div>
<div className="flex items-center gap-2 text-sm text-dark font-medium">
<iconify-icon className="text-sand" icon="solar:check-read-linear"></iconify-icon> Fachanwalt Steuerrecht
                        </div>
<div className="flex items-center gap-2 text-sm text-dark font-medium">
<iconify-icon className="text-sand" icon="solar:check-read-linear"></iconify-icon> Unternehmer
                        </div>
</div>

<div className="pt-8 border-t border-dark/10">
<p className="text-xs text-dark/40 uppercase tracking-widest mb-4">Partner &amp; Netzwerke</p>
<div className="flex gap-6 opacity-60 grayscale">
<span className="font-serif font-bold text-lg">DUSKE &amp; PARTNER</span>
<span className="font-sans font-bold text-lg tracking-tighter">STEUERELITE</span>
</div>
</div>
</div>

<div className="relative">
<div className="aspect-square bg-white p-4 pb-12 shadow-xl border border-dark/5 rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="Dr. Markus Rotter Office" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 lg:py-32">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight font-semibold text-dark mb-12 text-center">Häufig gestellte Fragen</h2>
<div className="space-y-4">
<details className="group border-b border-light pb-4" open="">
<summary className="flex justify-between items-center font-medium text-base text-dark cursor-pointer py-4 hover:text-sand transition-colors">
                        Für wen eignet sich die strategische Beratung?
                        <span className="text-dark group-open:rotate-45 transition-transform text-xl">+</span>
</summary>
<div className="mt-2 text-sm text-dark/60 leading-relaxed pl-4 border-l-2 border-sand">
                        Meine Beratung richtet sich primär an erfahrene Unternehmer, Geschäftsführer und Investoren, die aktiv am Vermögensaufbau arbeiten und komplexe Strukturen (GmbHs, Holdings, Immobilien) optimieren möchten.
                    </div>
</details>
<details className="group border-b border-light pb-4">
<summary className="flex justify-between items-center font-medium text-base text-dark cursor-pointer py-4 hover:text-sand transition-colors">
                        Muss ich meinen aktuellen Steuerberater wechseln?
                        <span className="text-dark group-open:rotate-45 transition-transform text-xl">+</span>
</summary>
<div className="mt-2 text-sm text-dark/60 leading-relaxed pl-4 border-l-2 border-sand">
                        Nicht zwingend. Wir können auch ergänzend als Sparringspartner für die strategische Ausrichtung agieren, während Dein bisheriger Berater die operative Buchhaltung weiterführt. Für maximale Effizienz bieten wir jedoch auch Komplettlösungen an.
                    </div>
</details>
<details className="group border-b border-light pb-4">
<summary className="flex justify-between items-center font-medium text-base text-dark cursor-pointer py-4 hover:text-sand transition-colors">
                        Wie läuft das erste Kennenlernen ab?
                        <span className="text-dark group-open:rotate-45 transition-transform text-xl">+</span>
</summary>
<div className="mt-2 text-sm text-dark/60 leading-relaxed pl-4 border-l-2 border-sand">
                        In einem unverbindlichen 15-30 minütigen Erstgespräch (meist via Video-Call) klären wir Deine aktuelle Situation, Deine Ziele und prüfen, ob wir fachlich und menschlich zueinander passen.
                    </div>
</details>
<details className="group border-b border-light pb-4">
<summary className="flex justify-between items-center font-medium text-base text-dark cursor-pointer py-4 hover:text-sand transition-colors">
                        Was kostet eine Erstberatung zur Strukturierung?
                        <span className="text-dark group-open:rotate-45 transition-transform text-xl">+</span>
</summary>
<div className="mt-2 text-sm text-dark/60 leading-relaxed pl-4 border-l-2 border-sand">
                        Das initiale Kennenlerngespräch ist kostenfrei. Eine tiefergehende strukturierte Erstberatung wird nach zeitlichem Aufwand auf Honorarbasis abgerechnet, worüber wir Dich im Vorfeld transparent informieren.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-dark py-32 px-6 relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 opacity-20">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-sand blur-[100px] rounded-full mix-blend-overlay"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0e2844] blur-[100px] rounded-full mix-blend-overlay"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif tracking-tight font-semibold leading-tight mb-8">
                „Das beste Mittel zu viele Steuern zu bezahlen ist, sich für schlauer zu halten als seinen Berater."
            </h2>
<p className="text-white/60 text-lg mb-12">
                Worauf wartest du noch? Du hast nichts zu verlieren – außer zu viel Steuern zu zahlen.
            </p>
<a className="inline-flex items-center justify-center px-10 py-5 text-base font-semibold bg-sand text-dark rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-sand/20" href="#contact">
                Starte jetzt Deinen strategischen Vermögensaufbau
            </a>
</div>
</section>

<footer className="bg-dark border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-white font-serif tracking-widest uppercase text-2xl font-semibold flex items-center gap-2 mb-6" href="#">
<span className="text-sand">Dr.</span> Rotter
                    </a>
<p className="text-xs text-white/50 leading-relaxed mb-6">
                        Strategische Steuer- und Rechtsberatung für Unternehmer und Investoren. Vermögen schützen und mehren.
                    </p>
<div className="flex gap-4">
<a className="text-sand hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-sand hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon> 
</a>
<a className="text-sand hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon> 
</a>
</div>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6 tracking-wide">Navigation</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-sand transition-colors" href="#">Startseite</a></li>
<li><a className="hover:text-sand transition-colors" href="#about">Über mich</a></li>
<li><a className="hover:text-sand transition-colors" href="#leistungen">Leistungen</a></li>
<li><a className="hover:text-sand transition-colors" href="#kundenstimmen">Kundenstimmen</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6 tracking-wide">Wissen</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-sand transition-colors" href="#">Bücher</a></li>
<li><a className="hover:text-sand transition-colors" href="#">Blog / Insights</a></li>
<li><a className="hover:text-sand transition-colors" href="#">Steuerelitetraining</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6 tracking-wide">Rechtliches</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-sand transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-sand transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-sand transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/40">
                    © 2025 Dr. Markus Rotter, LL.M. All rights reserved.
                </p>
<div className="flex gap-4 text-white/30 text-xs font-serif">
<span>Partner Duske &amp; Partner</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
