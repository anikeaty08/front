import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
dark: '#020617',       // Deepest Slate
darkCard: '#0f172a',   // Card background fallback
primary: '#38bdf8',    // Light Blue (Neon style)
primaryGlow: 'rgba(56, 189, 248, 0.5)',
secondary: '#F97316',  // Vibrant Orange
secondaryHover: '#ea580c',
accent: '#84cc16',     // Lime Green
textMain: '#f8fafc',   // White-ish
textMuted: '#94a3b8',  // Muted Slate
},
fontFamily: {
heading: ['Poppins', 'sans-serif'],
body: ['Open Sans', 'sans-serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // FAQ Logic
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            // Toggle Hidden Class
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(45deg)';
                button.parentElement.classList.add('bg-white/5');
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                button.parentElement.classList.remove('bg-white/5');
            }
        }

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="glow-blob bg-primary w-[500px] h-[500px] -top-20 -left-20 animate-pulse" style={{animationDuration: '10s'}}></div>
<div className="glow-blob bg-secondary w-[400px] h-[400px] bottom-0 right-0 opacity-20"></div>
<div className="glow-blob bg-accent w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
</div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-heading font-semibold text-2xl tracking-tight text-white hover:text-primary transition-colors" href="#">
                Hauser<span className="text-slate-500 font-normal">Consulting</span>
</a>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary/10 border border-primary/30 text-primary font-heading font-medium text-sm rounded-lg hover:bg-primary hover:text-dark transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]" href="#strategiegespraech">
                Gespräch buchen
            </a>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 relative z-10">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

<div className="w-full lg:w-3/5 reveal active">

<div className="inline-flex items-center glass px-4 py-2 rounded-full mb-8 border border-primary/20">
<span className="flex h-2 w-2 relative mr-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-wider text-textMain">20+ Jahre Erfahrung &amp; 100k€ ROI-System</span>
</div>
<h1 className="font-heading font-semibold text-4xl md:text-6xl text-white leading-[1.1] tracking-tight mb-6">
                        Steck fest im <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">50-Stunden</span> Hamsterrad?
                    </h1>
<p className="font-body text-lg md:text-xl text-textMuted leading-relaxed mb-10 max-w-xl border-l-2 border-slate-700 pl-6">
                        Steigere deinen Praxisgewinn um 30-50% und arbeite dabei deutlich weniger. Das bewährte System für moderne Physiotherapie-Praxen.
                    </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="group inline-flex items-center justify-center bg-secondary text-white font-heading font-medium text-lg h-14 px-8 rounded-lg shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:bg-secondaryHover transition-all duration-300 relative overflow-hidden" href="#strategiegespraech">
<span className="relative z-10 flex items-center">Strategiegespräch <i className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i></span>
</a>
<a className="inline-flex items-center justify-center glass text-textMain hover:text-primary font-heading font-medium text-lg h-14 px-8 rounded-lg transition-all duration-300" href="#das-system">
                            Wie es funktioniert
                        </a>
</div>
</div>

<div className="w-full lg:w-2/5 reveal delay-200">
<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass p-2">
<img alt="Sascha Hauser - Physiotherapie Consultant" className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-white/10 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="bg-green-500/20 p-2 rounded-lg">
<i className="w-5 h-5 text-green-400" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wide">Durchschnittl. Wachstum</div>
<div className="text-white font-bold text-lg">+32% Gewinn</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative z-10">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-center mb-16 tracking-tight text-gradient reveal">
                Kommt dir das bekannt vor?
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass p-8 rounded-2xl reveal group">
<div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-red-400" data-lucide="x"></i>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3">Ausgebucht, wenig Umsatz</h3>
<p className="text-textMuted leading-relaxed text-sm">Dein Terminkalender ist voll, aber am Monatsende bleibt kaum etwas übrig.</p>
</div>

<div className="glass p-8 rounded-2xl reveal delay-100 group">
<div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-red-400" data-lucide="clock"></i>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3">50+ Stunden pro Woche</h3>
<p className="text-textMuted leading-relaxed text-sm">Du arbeitest ohne Ende, aber hast keine Zeit mehr für Familie oder dich selbst.</p>
</div>

<div className="glass p-8 rounded-2xl reveal delay-200 group">
<div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-red-400" data-lucide="file-warning"></i>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3">Abhängig von Verordnungen</h3>
<p className="text-textMuted leading-relaxed text-sm">Deine Praxis lebt von Kassenrezepten – wenn die ausbleiben, wird's eng.</p>
</div>

<div className="glass p-8 rounded-2xl reveal group">
<div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-red-400" data-lucide="bar-chart-2"></i>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3">Keine Zeit für Management</h3>
<p className="text-textMuted leading-relaxed text-sm">Marketing, Vertrieb, Prozesse – dafür fehlt dir einfach die Zeit und das Know-how.</p>
</div>

<div className="glass p-8 rounded-2xl reveal delay-100 group">
<div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-red-400" data-lucide="users"></i>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3">Team ist überlastet</h3>
<p className="text-textMuted leading-relaxed text-sm">Deine Mitarbeiter sind am Limit, Fluktuation ist hoch, gute Leute zu finden schwer.</p>
</div>

<div className="glass p-8 rounded-2xl reveal delay-200 group">
<div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-red-400" data-lucide="compass"></i>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3">Keine Exit-Strategie</h3>
<p className="text-textMuted leading-relaxed text-sm">Du willst irgendwann verkaufen oder kürzertreten – aber wie soll das gehen?</p>
</div>
</div>
</div>
</section>

<section className="py-20 relative z-10">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-white mb-6 tracking-tight">
                    Deine Transformation
                </h2>
<p className="font-body text-xl text-textMuted max-w-2xl mx-auto">
                    So sieht dein Leben aus, wenn wir fertig sind:
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex flex-col items-start p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 reveal border border-transparent hover:border-white/5">
<div className="p-3 bg-accent/10 rounded-lg mb-4">
<i className="w-6 h-6 text-accent" data-lucide="check-circle"></i>
</div>
<h3 className="font-heading font-medium text-lg text-white mb-2">50% mehr Zeit für dich</h3>
<p className="text-textMuted text-sm leading-relaxed">Arbeite 30% weniger – und hab endlich wieder Zeit für Familie, Hobbys, Leben.</p>
</div>

<div className="flex flex-col items-start p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 reveal delay-100 border border-transparent hover:border-white/5">
<div className="p-3 bg-primary/10 rounded-lg mb-4">
<i className="w-6 h-6 text-primary" data-lucide="trending-up"></i>
</div>
<h3 className="font-heading font-medium text-lg text-white mb-2">30-50% höherer Gewinn</h3>
<p className="text-textMuted text-sm leading-relaxed">Deine Praxis erwirtschaftet deutlich mehr Gewinn – bei weniger Arbeitsstunden.</p>
</div>

<div className="flex flex-col items-start p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 reveal delay-200 border border-transparent hover:border-white/5">
<div className="p-3 bg-secondary/10 rounded-lg mb-4">
<i className="w-6 h-6 text-secondary" data-lucide="unlock"></i>
</div>
<h3 className="font-heading font-medium text-lg text-white mb-2">Unabhängigkeit von Kassen</h3>
<p className="text-textMuted text-sm leading-relaxed">Hochpreisige Privatpatienten-Programme machen dich unabhängig von Verordnungen.</p>
</div>

<div className="flex flex-col items-start p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 reveal border border-transparent hover:border-white/5">
<div className="p-3 bg-purple-500/10 rounded-lg mb-4">
<i className="w-6 h-6 text-purple-400" data-lucide="cpu"></i>
</div>
<h3 className="font-heading font-medium text-lg text-white mb-2">Digitalisierte Prozesse</h3>
<p className="text-textMuted text-sm leading-relaxed">Verkauf, Onboarding, Service – alles automatisiert, skalierbar, professionell.</p>
</div>

<div className="flex flex-col items-start p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 reveal delay-100 border border-transparent hover:border-white/5">
<div className="p-3 bg-pink-500/10 rounded-lg mb-4">
<i className="w-6 h-6 text-pink-400" data-lucide="smile"></i>
</div>
<h3 className="font-heading font-medium text-lg text-white mb-2">Starkes, motiviertes Team</h3>
<p className="text-textMuted text-sm leading-relaxed">Dein Team arbeitet selbstständig, Fluktuation sinkt, Qualität steigt.</p>
</div>

<div className="flex flex-col items-start p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 reveal delay-200 border border-transparent hover:border-white/5">
<div className="p-3 bg-teal-500/10 rounded-lg mb-4">
<i className="w-6 h-6 text-teal-400" data-lucide="sun"></i>
</div>
<h3 className="font-heading font-medium text-lg text-white mb-2">Exit-Option oder Freiheit</h3>
<p className="text-textMuted text-sm leading-relaxed">Deine Praxis läuft auch ohne dich – verkaufe sie oder genieße deine Freiheit.</p>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden z-10">

<div className="absolute inset-0 bg-dark/80 backdrop-blur-sm z-0"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-semibold text-3xl md:text-5xl mb-6 tracking-tight text-white">
                    Meine Story
                </h2>
<p className="font-body text-xl text-textMuted max-w-3xl mx-auto">
                    Von 50-Stunden-Wochen zu 2 erfolgreichen Exits.
                </p>
</div>
<div className="relative py-10 max-w-4xl mx-auto">

<div className="timeline-line"></div>

<div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16 reveal">
<div className="md:w-5/12 text-center md:text-right md:pr-10 order-2 md:order-1">
<h3 className="font-heading font-medium text-2xl mb-2 text-white">Der Start</h3>
<p className="text-slate-400 text-sm">Gründung meiner ersten Praxis mit 2 Mitarbeitern. 50-Stunden-Wochen, kein Geld, keine Zeit.</p>
</div>
<div className="z-10 bg-dark border border-primary/50 shadow-[0_0_15px_rgba(56,189,248,0.5)] w-6 h-6 rounded-full flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0"></div>
<div className="md:w-5/12 md:pl-10 order-3 flex justify-center md:justify-start">
<span className="bg-white/5 border border-white/10 text-primary font-medium px-4 py-1 rounded-full text-xs backdrop-blur-md">2001</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16 reveal">
<div className="md:w-5/12 text-center md:text-right md:pr-10 order-2 md:order-1 md:flex md:justify-end">
<span className="bg-white/5 border border-white/10 text-primary font-medium px-4 py-1 rounded-full text-xs backdrop-blur-md">2005</span>
</div>
<div className="z-10 bg-dark border border-primary/50 shadow-[0_0_15px_rgba(56,189,248,0.5)] w-6 h-6 rounded-full flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0"></div>
<div className="md:w-5/12 md:pl-10 order-3 text-center md:text-left">
<h3 className="font-heading font-medium text-2xl mb-2 text-white">Der Wendepunkt</h3>
<p className="text-slate-400 text-sm">850€ Investment in eine FPZ-Studie – Ergebnis: 100.000€ Zusatzgewinn. Ich verstand: Systeme &gt; Zeit.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16 reveal">
<div className="md:w-5/12 text-center md:text-right md:pr-10 order-2 md:order-1">
<h3 className="font-heading font-medium text-2xl mb-2 text-white">Skalierung</h3>
<p className="text-slate-400 text-sm">Aufbau mehrerer Therapiezentren. Digitalisierung, Prozesse, High-Ticket-Programme.</p>
</div>
<div className="z-10 bg-dark border border-primary/50 shadow-[0_0_15px_rgba(56,189,248,0.5)] w-6 h-6 rounded-full flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0"></div>
<div className="md:w-5/12 md:pl-10 order-3 flex justify-center md:justify-start">
<span className="bg-white/5 border border-white/10 text-primary font-medium px-4 py-1 rounded-full text-xs backdrop-blur-md">2012</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16 reveal">
<div className="md:w-5/12 text-center md:text-right md:pr-10 order-2 md:order-1 md:flex md:justify-end">
<span className="bg-white/5 border border-white/10 text-primary font-medium px-4 py-1 rounded-full text-xs backdrop-blur-md">2015-2019</span>
</div>
<div className="z-10 bg-dark border border-primary/50 shadow-[0_0_15px_rgba(56,189,248,0.5)] w-6 h-6 rounded-full flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0"></div>
<div className="md:w-5/12 md:pl-10 order-3 text-center md:text-left">
<h3 className="font-heading font-medium text-2xl mb-2 text-white">Exits</h3>
<p className="text-slate-400 text-sm">Verkauf der Praxen – weil sie auch ohne mich liefen. Finanzielle Freiheit erreicht.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:justify-between reveal">
<div className="md:w-5/12 text-center md:text-right md:pr-10 order-2 md:order-1">
<h3 className="font-heading font-medium text-2xl mb-2 text-white">Mission: Freiheit</h3>
<p className="text-slate-400 text-sm">Jetzt helfe ich Praxisinhabern wie dir, denselben Weg zu gehen – schneller und einfacher.</p>
</div>
<div className="z-10 bg-secondary border border-white w-6 h-6 rounded-full flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0 shadow-[0_0_20px_rgba(249,115,22,0.8)]"></div>
<div className="md:w-5/12 md:pl-10 order-3 flex justify-center md:justify-start">
<span className="bg-secondary text-white font-medium px-4 py-1 rounded-full text-xs shadow-lg">Heute</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative z-10" id="das-system">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-white mb-6 tracking-tight">
                    Das 4-Säulen-System
                </h2>
<p className="font-body text-xl text-textMuted max-w-2xl mx-auto">
                    Vier bewährte Säulen für ein skalierbares Business:
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass p-8 rounded-2xl relative reveal group hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 text-slate-600 font-bold text-6xl opacity-10 group-hover:opacity-20 transition-opacity">1</div>
<i className="w-10 h-10 text-primary mb-6" data-lucide="target"></i>
<h3 className="font-heading font-medium text-lg text-white mb-3">Verkaufsprozesse</h3>
<p className="text-sm text-textMuted leading-relaxed">Automatisierte Lead-Generierung und Sales-Funnel – dein Verkauf läuft ohne dich.</p>
</div>

<div className="glass p-8 rounded-2xl relative reveal delay-100 group hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 text-slate-600 font-bold text-6xl opacity-10 group-hover:opacity-20 transition-opacity">2</div>
<i className="w-10 h-10 text-accent mb-6" data-lucide="laptop"></i>
<h3 className="font-heading font-medium text-lg text-white mb-3">Digitale Dienste</h3>
<p className="text-sm text-textMuted leading-relaxed">Online-Therapie und Videokurse – skaliere deine Expertise ohne Zeiteinsatz.</p>
</div>

<div className="glass p-8 rounded-2xl relative reveal delay-200 group hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 text-slate-600 font-bold text-6xl opacity-10 group-hover:opacity-20 transition-opacity">3</div>
<i className="w-10 h-10 text-secondary mb-6" data-lucide="bar-chart"></i>
<h3 className="font-heading font-medium text-lg text-white mb-3">Praxis-Dashboard</h3>
<p className="text-sm text-textMuted leading-relaxed">Echtzeitdaten zu Umsatz und KPIs – triff bessere Entscheidungen auf Knopfdruck.</p>
</div>

<div className="glass p-8 rounded-2xl relative reveal delay-300 group hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 text-slate-600 font-bold text-6xl opacity-10 group-hover:opacity-20 transition-opacity">4</div>
<i className="w-10 h-10 text-purple-400 mb-6" data-lucide="gem"></i>
<h3 className="font-heading font-medium text-lg text-white mb-3">High-Ticket</h3>
<p className="text-sm text-textMuted leading-relaxed">Premium-Angebote für Selbstzahler – unabhängig von Kassen, höhere Margen.</p>
</div>
</div>
</div>
</section>

<section className="py-20 relative z-10">
<div className="max-w-[1200px] mx-auto px-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 glass rounded-3xl border-t border-white/10">
<div className="text-center reveal">
<div className="font-heading font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-400 mb-2">30-50%</div>
<div className="text-slate-400 text-sm font-medium uppercase tracking-wide">mehr Gewinn</div>
</div>
<div className="text-center reveal delay-100">
<div className="font-heading font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-400 mb-2">20+</div>
<div className="text-slate-400 text-sm font-medium uppercase tracking-wide">Jahre Erfahrung</div>
</div>
<div className="text-center reveal delay-200">
<div className="font-heading font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-400 mb-2">100k€</div>
<div className="text-slate-400 text-sm font-medium uppercase tracking-wide">ROI aus Studie</div>
</div>
<div className="text-center reveal delay-300">
<div className="font-heading font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-400 mb-2">2</div>
<div className="text-slate-400 text-sm font-medium uppercase tracking-wide">Erfolgreiche Exits</div>
</div>
</div>

<h2 className="font-heading font-semibold text-3xl text-white text-center mb-12 tracking-tight reveal">
                Was meine Klienten sagen
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-2xl reveal">
<i className="w-8 h-8 text-primary/40 mb-4 fill-current" data-lucide="quote"></i>
<p className="text-slate-300 mb-6 leading-relaxed italic text-sm">„Dank Saschas System konnte ich meinen Gewinn um 40% steigern – und arbeite jetzt nur noch 30 Stunden pro Woche.“</p>
<div className="flex items-center gap-1 mb-3 text-secondary">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<div>
<div className="font-heading font-medium text-white">Julia M.</div>
<div className="text-xs text-textMuted">Physiotherapie-Praxis, Hamburg</div>
</div>
</div>

<div className="glass p-8 rounded-2xl reveal delay-100">
<i className="w-8 h-8 text-primary/40 mb-4 fill-current" data-lucide="quote"></i>
<p className="text-slate-300 mb-6 leading-relaxed italic text-sm">„Die 850€-Studie hat sich für mich zigfach ausgezahlt. Endlich habe ich ein System, das auch ohne mich funktioniert.“</p>
<div className="flex items-center gap-1 mb-3 text-secondary">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<div>
<div className="font-heading font-medium text-white">Thomas K.</div>
<div className="text-xs text-textMuted">Therapiezentrum, München</div>
</div>
</div>

<div className="glass p-8 rounded-2xl reveal delay-200">
<i className="w-8 h-8 text-primary/40 mb-4 fill-current" data-lucide="quote"></i>
<p className="text-slate-300 mb-6 leading-relaxed italic text-sm">„Ich war skeptisch, ob das für meine Praxis funktioniert. Heute bin ich überzeugt – beste Investition ever!“</p>
<div className="flex items-center gap-1 mb-3 text-secondary">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<div>
<div className="font-heading font-medium text-white">Sarah L.</div>
<div className="text-xs text-textMuted">Ergotherapie-Praxis, Berlin</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative z-10">
<div className="max-w-[800px] mx-auto px-6">
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-white text-center mb-12 tracking-tight reveal">
                Häufige Fragen
            </h2>
<div className="space-y-4">

<div className="glass rounded-xl overflow-hidden reveal group hover:border-white/20 transition-colors">
<button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-heading font-medium text-lg text-white">Funktioniert das auch für meine Praxis?</span>
<i className="w-5 h-5 text-primary transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="hidden px-6 pb-6 text-textMuted leading-relaxed border-t border-white/5 pt-4 text-sm">
                        Ja! Das System funktioniert für Physio-, Ergo-, Logopraxen und Therapiezentren jeder Größe. Egal ob du alleine oder mit Team arbeitest.
                    </div>
</div>

<div className="glass rounded-xl overflow-hidden reveal group hover:border-white/20 transition-colors">
<button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-heading font-medium text-lg text-white">Wie viel Zeit muss ich investieren?</span>
<i className="w-5 h-5 text-primary transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="hidden px-6 pb-6 text-textMuted leading-relaxed border-t border-white/5 pt-4 text-sm">
                        Am Anfang ca. 5-10 Stunden pro Woche für Setup und Implementierung. Danach läuft das System weitgehend automatisiert.
                    </div>
</div>

<div className="glass rounded-xl overflow-hidden reveal group hover:border-white/20 transition-colors">
<button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-heading font-medium text-lg text-white">Was kostet die Zusammenarbeit?</span>
<i className="w-5 h-5 text-primary transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="hidden px-6 pb-6 text-textMuted leading-relaxed border-t border-white/5 pt-4 text-sm">
                        Das besprechen wir im kostenfreien Strategiegespräch – individuell auf deine Situation angepasst. ROI ist garantiert höher als Investment.
                    </div>
</div>

<div className="glass rounded-xl overflow-hidden reveal group hover:border-white/20 transition-colors">
<button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-heading font-medium text-lg text-white">Brauche ich technisches Know-how?</span>
<i className="w-5 h-5 text-primary transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="hidden px-6 pb-6 text-textMuted leading-relaxed border-t border-white/5 pt-4 text-sm">
                        Nein! Ich begleite dich Schritt für Schritt. Alle Tools sind einfach zu bedienen, und du bekommst meine volle Unterstützung.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="strategiegespraech">

<div className="absolute inset-0 bg-primary/10 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-[800px] mx-auto px-6 relative z-10 text-center reveal">
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-white mb-6 leading-tight tracking-tight">
                Bereit für mehr Freiheit?
            </h2>
<p className="font-body text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Buche jetzt dein kostenfreies Strategiegespräch – und lass uns gemeinsam deinen Weg zur Praxis-Transformation planen.
            </p>
<a className="inline-flex items-center justify-center bg-secondary text-white font-heading font-medium text-lg h-16 px-12 rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.7)] hover:scale-105 hover:bg-secondaryHover transition-all duration-300 mb-8 border border-white/10" href="#">
                Strategiegespräch sichern <i className="ml-2 w-6 h-6" data-lucide="arrow-right"></i>
</a>
<div className="flex flex-wrap justify-center gap-6 md:gap-10 text-slate-400 text-sm">
<span className="flex items-center"><i className="w-4 h-4 text-primary mr-2" data-lucide="check"></i> Kostenfrei</span>
<span className="flex items-center"><i className="w-4 h-4 text-primary mr-2" data-lucide="check"></i> 30 Minuten</span>
<span className="flex items-center"><i className="w-4 h-4 text-primary mr-2" data-lucide="check"></i> Unverbindlich</span>
</div>
</div>
</section>

<footer className="bg-dark/80 backdrop-blur-xl text-slate-400 py-16 border-t border-white/5 relative z-10">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<div className="font-heading font-semibold text-2xl text-white mb-4">Hauser Consulting</div>
<p className="text-sm leading-relaxed mb-6 text-slate-500">Premium-Consulting für Physiotherapie-Praxen. Mehr Gewinn. Mehr Zeit. Mehr Freiheit.</p>
</div>

<div>
<h4 className="font-heading font-medium text-white mb-4">Navigation</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Start</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Über mich</a></li>
<li><a className="hover:text-primary transition-colors" href="#das-system">Das System</a></li>
<li><a className="hover:text-primary transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="font-heading font-medium text-white mb-4">Rechtliches</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-primary transition-colors" href="#">AGB</a></li>
</ul>
</div>

<div>
<h4 className="font-heading font-medium text-white mb-4">Kontakt</h4>
<ul className="space-y-2 text-sm">
<li className="flex items-center"><i className="w-4 h-4 mr-2" data-lucide="mail"></i> info@saschahauser.de</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2" data-lucide="phone"></i> +49 (0) 123 456789</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2" data-lucide="map-pin"></i> Altenkirchen</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-slate-600">© 2025 Hauser Consulting.</div>
<div className="flex space-x-6">
<a className="hover:text-primary transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-primary transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="hover:text-primary transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
