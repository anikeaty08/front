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
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.rotate-x-12': { transform: 'perspective(1000px) rotateX(12deg)' },
'.rotate-x-0': { transform: 'perspective(1000px) rotateX(0deg)' }
});
}
]
};



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Reveal Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });

        // Modal Functionality
        function toggleModal() {
            const modal = document.getElementById('demo-modal');
            const isHidden = modal.classList.contains('hidden-modal');
            
            if (isHidden) {
                modal.classList.remove('hidden-modal');
                modal.classList.add('visible-modal');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                modal.classList.remove('visible-modal');
                modal.classList.add('hidden-modal');
                document.body.style.overflow = ''; // Restore scrolling
            }
        }
        
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.getElementById('demo-modal');
                if (modal.classList.contains('visible-modal')) {
                    toggleModal();
                }
            }
        });
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md transition-all duration-300 reveal active">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-semibold tracking-tighter">N</div>
<span className="text-white font-medium tracking-tight text-sm group-hover:opacity-80 transition-opacity uppercase">Novara Pro AI</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Lösungen</a>
<a className="hover:text-white transition-colors" href="#about">Über Uns</a>
<a className="hover:text-white transition-colors" href="#usecases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#pricing">Preise</a>
<a className="hover:text-white transition-colors" href="#contact">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20" onclick="toggleModal()">
                    Termin buchen
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-12 md:pt-48 md:pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[11px] font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Zukunft der Automatisierung
                </div>
<h1 className="reveal delay-100 text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] title-gradient">
                    Entfessle die Macht der<br/>Künstlichen Intelligenz
                </h1>
<p className="reveal delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
                    Von Grenzen zu Möglichkeiten mit KI-Mitarbeitern für Vertrieb, Marketing &amp; Support.
                </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto group relative px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" onclick="toggleModal()">
                        Jetzt deinen KI-Blueprint sichern
                        <iconify-icon className="inline ml-1 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<span className="text-xs text-indigo-400 font-medium animate-pulse">2 Spots Verfügbar</span>
</div>

<div className="mt-12 reveal delay-300 flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-4 py-1.5">
<div className="flex text-yellow-400 gap-0.5">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs text-slate-300">4.9/5 Sternen von über <span className="text-white font-medium">112 Kunden</span></span>
</div>
</div>

<div className="mt-20 relative perspective-[2000px] group reveal delay-300">
<div className="relative w-full max-w-5xl mx-auto glass-panel rounded-xl p-1 shadow-2xl transition-transform duration-700 ease-out transform rotate-x-12 group-hover:rotate-x-0 overflow-hidden border-t border-white/10">
<div className="bg-[#0A0A0C] rounded-lg overflow-hidden border border-white/5 h-[450px] md:h-[550px] relative">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

<div className="absolute inset-0 z-10 p-8 flex flex-col justify-center items-center">

<div className="flex gap-12 mb-12">
<div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border-dashed border-white/20">
<iconify-icon className="text-blue-400" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span className="text-xs text-slate-300">Anruf</span>
</div>
<div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border-dashed border-white/20">
<iconify-icon className="text-pink-400" icon="solar:chat-line-linear" width="16"></iconify-icon>
<span className="text-xs text-slate-300">Web Anfrage</span>
</div>
</div>

<div className="h-8 w-[1px] bg-gradient-to-b from-white/20 to-indigo-500/50 -mt-12 mb-2"></div>

<div className="relative z-20 w-full max-w-2xl bg-[#0F0F11] border border-white/10 rounded-xl p-6 shadow-2xl">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 rounded-full text-[10px] text-white border border-indigo-400 font-medium tracking-wide shadow-lg shadow-indigo-500/30">NOVARA PRO AI CORE</div>
<div className="grid grid-cols-3 gap-4 mt-2">

<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Eingehend</span>
<span className="text-[10px] text-emerald-400">Live</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 p-1.5 rounded bg-white/5">
<div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[8px]">K</div>
<div className="h-1.5 w-12 bg-white/10 rounded"></div>
</div>
<div className="flex items-center gap-2 p-1.5 rounded bg-white/5">
<div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[8px]">M</div>
<div className="h-1.5 w-16 bg-white/10 rounded"></div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/5 z-0"></div>
<div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mb-2 animate-pulse">
<iconify-icon className="text-indigo-400" icon="solar:cpu-bolt-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] text-indigo-200 text-center relative z-10">Analyse &amp; Aktion</span>
<div className="mt-2 w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-indigo-500"></div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="flex items-center gap-1 mb-3">
<iconify-icon className="text-green-400" icon="solar:calendar-mark-linear" width="12"></iconify-icon>
<span className="text-[10px] text-slate-400">Terminierung</span>
</div>
<div className="space-y-2">
<div className="flex justify-end">
<div className="bg-green-500/20 text-green-100 px-2 py-1 rounded-t-lg rounded-bl-lg text-[9px]">Termin bestätigt</div>
</div>
<div className="flex justify-start">
<div className="bg-white/10 text-slate-300 px-2 py-1 rounded-t-lg rounded-br-lg text-[9px] border border-white/5">Sync CRM...</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-8 w-[1px] bg-gradient-to-b from-indigo-500/50 to-white/20 mt-2"></div>

<div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 border border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-300">Wachstum automatisiert</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-[#030304] to-transparent z-20"></div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="flex-1 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Herausforderungen <br/><span className="text-red-400/80">die dein Wachstum bremsen</span></h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Die Realität in vielen Unternehmen: Manuelle Prozesse und Fachkräftemangel verhindern Skalierung.
                    </p>
</div>
<div className="flex-1 w-full grid gap-4 reveal delay-100">
<div className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-400" icon="solar:users-group-two-rounded-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">Fachkräftemangel</h3>
<p className="text-slate-500 text-xs mt-1">Qualifizierte Mitarbeiter sind schwer zu finden. Zentrale Wachstumsbremse.</p>
</div>
</div>
<div className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-400" icon="solar:phone-calling-rounded-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">Überlastete Telefone &amp; Support</h3>
<p className="text-slate-500 text-xs mt-1">Kundenanfragen bleiben liegen, Chancen gehen verloren.</p>
</div>
</div>
<div className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-400" icon="solar:clock-circle-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">Verlust von Zeit &amp; Effizienz</h3>
<p className="text-slate-500 text-xs mt-1">Manuelle Abläufe bremsen Wachstum und Innovation.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050507]" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-white mb-16 tracking-tight reveal">Unsere Lösungen</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl reveal delay-100 flex flex-col group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-400" icon="solar:phone-calling-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Voice Agents</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Nehmen Anrufe entgegen, führen Erstgespräche &amp; buchen Termine automatisch.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-100 flex flex-col group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-400" icon="solar:chat-round-line-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Chat Agents</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Beantworten Anfragen auf deiner Website, WhatsApp oder Social Media in Sekunden.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-100 flex flex-col group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-400" icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">CRM-Automatisierung</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Leads werden automatisch bewertet, priorisiert &amp; nachgefasst.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-200 flex flex-col group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-400" icon="solar:user-id-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Recruiting KI</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Bewerber-Screening, Interviews &amp; Follow-up automatisiert.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-200 flex flex-col group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-400" icon="solar:factory-2-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Industrie-Automatisierung</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Von Produktionsplanung bis Datenmanagement effizient gestaltet.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-200 flex flex-col group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-400" icon="solar:megaphone-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Marketing-Automatisierung</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Erstellt Content, versendet Newsletter &amp; schaltet Kampagnen vollautomatisch.
                    </p>
</div>
</div>

<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 reveal delay-300">
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<iconify-icon className="text-emerald-400" icon="solar:heart-linear" width="24"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium">Mitarbeiterfreundlich</h4>
<p className="text-xs text-slate-500">Dein Team wird entlastet, Fokus auf wertvolle Aufgaben.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" width="24"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium">Fehlerfrei &amp; präzise</h4>
<p className="text-xs text-slate-500">Kein Vergessen, kein Missverständnis.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<iconify-icon className="text-emerald-400" icon="solar:globe-linear" width="24"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium">Multilingual</h4>
<p className="text-xs text-slate-500">Kundenkommunikation in allen Sprachen.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]" id="about">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl font-medium text-white mb-8 tracking-tight">Wer wir sind &amp; was uns antreibt</h2>
<p className="text-slate-300 text-lg leading-relaxed">
                Novara Pro AI ist mehr als ein Technologieanbieter – wir sind Architekten einer neuen Business-Ära. Unsere Mission: Unternehmern intelligente Systeme zu geben, die Arbeit erleichtern, Wachstum beschleunigen und Wettbewerbsvorteile sichern. Wir verbinden KI, Automatisierung und Design zu Lösungen, die nicht nur funktionieren, sondern dein Unternehmen sichtbar machen.
            </p>
</div>
</section>

<section className="py-24 bg-[#030304]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-white mb-16 tracking-tight reveal">Das Team hinter Novara Pro AI</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal delay-100">

<div className="glass-panel p-6 rounded-xl text-center group">
<div className="w-20 h-20 mx-auto rounded-full bg-slate-800 mb-4 flex items-center justify-center text-white text-xl border border-white/10">KV</div>
<h4 className="text-white font-medium">Kristiyan Velinov</h4>
<div className="text-xs text-indigo-400 uppercase tracking-wide mb-3">Visionär &amp; Stratege</div>
<p className="text-xs text-slate-500">Verantwortlich für Unternehmensführung, Wachstum und Vertrieb auf höchster Ebene.</p>
</div>

<div className="glass-panel p-6 rounded-xl text-center group">
<div className="w-20 h-20 mx-auto rounded-full bg-slate-800 mb-4 flex items-center justify-center text-white text-xl border border-white/10">MA</div>
<h4 className="text-white font-medium">Mario Albrecht</h4>
<div className="text-xs text-indigo-400 uppercase tracking-wide mb-3">Kreativer Kopf</div>
<p className="text-xs text-slate-500">Zuständig für Marketing, Branding, Design und die Entwicklung digitaler Lerninhalte.</p>
</div>

<div className="glass-panel p-6 rounded-xl text-center group">
<div className="w-20 h-20 mx-auto rounded-full bg-slate-800 mb-4 flex items-center justify-center text-white text-xl border border-white/10">VS</div>
<h4 className="text-white font-medium">Valentin Schürer</h4>
<div className="text-xs text-indigo-400 uppercase tracking-wide mb-3">Technik-Mind</div>
<p className="text-xs text-slate-500">Leitet Automatisierungen, Prozesse und sorgt für effiziente Strukturen.</p>
</div>

<div className="glass-panel p-6 rounded-xl text-center group">
<div className="w-20 h-20 mx-auto rounded-full bg-slate-800 mb-4 flex items-center justify-center text-white text-xl border border-white/10">AÜ</div>
<h4 className="text-white font-medium">Ali Ünal</h4>
<div className="text-xs text-indigo-400 uppercase tracking-wide mb-3">Sales-Leader</div>
<p className="text-xs text-slate-500">Entwickelt Vertriebsstrategien, akquiriert Kunden und skaliert den Vertrieb &amp; Marketing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.01]" id="usecases">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-12 tracking-tight reveal">So setzen Unternehmen unsere KI ein</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group reveal delay-100 glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-indigo-400" icon="solar:scissors-square-linear" width="24"></iconify-icon>
<h3 className="text-white font-medium">Friseursalons &amp; Studios</h3>
</div>
<p className="text-slate-400 text-sm">Kein verpasster Anruf, automatisierte Terminbuchungen, bis zu 30 % höhere Auslastung.</p>
</div>

<div className="group reveal delay-200 glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-indigo-400" icon="solar:chef-hat-linear" width="24"></iconify-icon>
<h3 className="text-white font-medium">Gastronomie &amp; Hospitality</h3>
</div>
<p className="text-slate-400 text-sm">Reservierungen, Bestellungen &amp; Gäste-Anfragen automatisiert, Team konzentriert sich auf Service.</p>
</div>

<div className="group reveal delay-300 glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-indigo-400" icon="solar:hammer-linear" width="24"></iconify-icon>
<h3 className="text-white font-medium">Handwerk &amp; Dienstleister</h3>
</div>
<p className="text-slate-400 text-sm">KI-Agents managen Neukundenanfragen, Terminplanung und Follow-ups ohne Verzögerung.</p>
</div>

<div className="group reveal delay-300 glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-indigo-400" icon="solar:buildings-2-linear" width="24"></iconify-icon>
<h3 className="text-white font-medium">Industrie &amp; Konzerne</h3>
</div>
<p className="text-slate-400 text-sm">KI übernimmt repetitive Aufgaben in Recruiting, HR, Support oder Vertrieb 100 % DSGVO-konform.</p>
</div>
</div>

<div className="mt-20 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-white/10 rounded-2xl p-8 text-center reveal">
<h3 className="text-2xl font-medium text-white mb-2">KI-Sprachlösungen verändern den Markt</h3>
<p className="text-indigo-200 font-medium mb-4">Die Zukunft des Kundenkontakts ist automatisiert.</p>
<p className="text-slate-400 text-sm max-w-2xl mx-auto mb-8">
                    Novara Pro AI bringt KI-Sprachlösungen auf ein neues Level – zugänglich, skalierbar und profitabel für alle Branchen.
                </p>
<button className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors" onclick="toggleModal()">
                    Jetzt mehr erfahren
                </button>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-white mb-16 tracking-tight reveal">Der Unterschied zwischen Standard &amp; Exzellenz</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal delay-100">
<div className="glass-panel p-8 rounded-2xl border-red-500/20 opacity-80">
<h3 className="text-lg font-medium text-red-300 mb-6">Traditionelle Wege</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 text-sm">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" width="16"></iconify-icon>
                        Hohe Fixkosten für Personal &amp; Schulung
                    </li>
<li className="flex items-start gap-3 text-slate-500 text-sm">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" width="16"></iconify-icon>
                        Erreichbarkeit nur zu Geschäftszeiten
                    </li>
<li className="flex items-start gap-3 text-slate-500 text-sm">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" width="16"></iconify-icon>
                        Manuelle, fehleranfällige Prozesse
                    </li>
</ul>
</div>
<div className="glass-panel p-8 rounded-2xl border-indigo-500/40 bg-indigo-500/5 relative">
<div className="absolute -top-3 right-8 px-3 py-1 bg-indigo-600 rounded-full text-[10px] text-white font-medium">Novara Pro AI</div>
<h3 className="text-lg font-medium text-white mb-6">Die Novara Lösung</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-300 text-sm">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                        Skalierbare KI-Agenten ohne Lohnnebenkosten
                    </li>
<li className="flex items-start gap-3 text-slate-300 text-sm">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                        24/7 Verfügbarkeit in perfekter Qualität
                    </li>
<li className="flex items-start gap-3 text-slate-300 text-sm">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                        Volle Integration: Funnels, Dashboards, CRM
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050507]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-lg mx-auto p-1 rounded-2xl bg-gradient-to-b from-indigo-500/20 to-transparent reveal">
<div className="bg-[#0A0A0C] rounded-xl p-8 border border-white/10 text-center h-full flex flex-col">
<h3 className="text-xl font-medium text-white mb-2">Novara Assurance Testpaket</h3>
<div className="text-4xl font-bold text-white mb-6 mt-4">149 € <span className="text-sm font-normal text-slate-500">/ Monat</span></div>
<p className="text-slate-400 text-sm mb-8 leading-relaxed">
                        Starte mit einem Einstieg in die Welt von Novara Pro AI und erlebe, wie intelligente Automatisierung dein Business transformiert. Perfekt, um unsere Qualität, Performance und Effizienz kennenzulernen.
                    </p>
<button className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-colors mb-6" onclick="toggleModal()">
                        Jetzt starten
                    </button>
<ul className="space-y-3 text-left mt-auto pl-4">
<li className="flex items-center gap-3 text-xs text-slate-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="14"></iconify-icon>
                            Schnelles Setup
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="14"></iconify-icon>
                            Erste Automatisierung
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="14"></iconify-icon>
                            Kein Risiko
                        </li>
</ul>
</div>
</div>

<div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 reveal delay-100">
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">80+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Zufriedene Kunden</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">Über 80%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Kundenerfolg</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">69+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Abgeschlossene Projekte</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">5+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Jahre Erfahrung</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white/[0.01]" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-white mb-16 tracking-tight reveal">Was unsere Kunden sagen</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel p-8 rounded-2xl reveal delay-100 relative">
<div className="flex text-yellow-400 gap-0.5 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                        "Ich konnte nicht ans Telefon, weil ich auf der Baustelle war. Jetzt übernimmt die KI Terminvereinbarungen und Anfragen – ich habe pro Woche 8 Stunden mehr Zeit und keine Aufträge mehr verloren."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-medium text-white">MW</div>
<div>
<div className="text-white text-sm font-medium">Markus Weber</div>
<div className="text-slate-500 text-xs">Handwerksmeister</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-200 relative bg-white/[0.02]">
<div className="flex text-yellow-400 gap-0.5 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                        "Dank Novara Pro AI verpassen wir keine Kundenanrufe mehr. Endlich können wir uns voll auf unsere Arbeit konzentrieren."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-medium text-white">AK</div>
<div>
<div className="text-white text-sm font-medium">Anna Keller</div>
<div className="text-slate-500 text-xs">Saloninhaberin</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-300 relative">
<div className="flex text-yellow-400 gap-0.5 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                        "Unser Recruiting war überlastet. Novara Pro AI filtert Bewerbungen, vereinbart Erstgespräche und entlastet HR um 40 %."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-medium text-white">TR</div>
<div>
<div className="text-white text-sm font-medium">Thomas Richter</div>
<div className="text-slate-500 text-xs">Teamleiter</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-300 relative bg-white/[0.02]">
<div className="flex text-yellow-400 gap-0.5 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                        "Vor Novara Pro AI haben wir täglich bis zu 15 Anrufe verpasst. Jetzt übernimmt der Voice Agent automatisiert… Umsatzsteigerung +22 % in 3 Monaten."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-medium text-white">SH</div>
<div>
<div className="text-white text-sm font-medium">Sabine Hoffmann</div>
<div className="text-slate-500 text-xs">Restaurantleiterin</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-white mb-16 tracking-tight reveal">Häufig gestellte Fragen</h2>
<div className="space-y-4 reveal">
<details className="group bg-white/5 rounded-xl p-4 cursor-pointer border border-white/5 open:bg-white/10 transition-colors">
<summary className="flex justify-between items-center text-white font-medium text-sm">
                    Was genau bietet Novara Pro AI?
                    <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</summary>
<div className="mt-4 text-slate-400 text-xs leading-relaxed">
                    Wir bieten maßgeschneiderte KI-Lösungen für Sprach-, Chat- und Prozessautomatisierung, die Ihr Unternehmen effizienter und skalierbarer machen.
                </div>
</details>
<details className="group bg-white/5 rounded-xl p-4 cursor-pointer border border-white/5 open:bg-white/10 transition-colors">
<summary className="flex justify-between items-center text-white font-medium text-sm">
                    Wie schnell ist ein KI-Sprachassistent einsatzbereit?
                    <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</summary>
<div className="mt-4 text-slate-400 text-xs leading-relaxed">
                    Abhängig von der Komplexität kann ein Basis-System oft innerhalb weniger Tage konfiguriert und live geschaltet werden.
                </div>
</details>
<details className="group bg-white/5 rounded-xl p-4 cursor-pointer border border-white/5 open:bg-white/10 transition-colors">
<summary className="flex justify-between items-center text-white font-medium text-sm">
                    Ersetzt die KI meine Mitarbeiter?
                    <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</summary>
<div className="mt-4 text-slate-400 text-xs leading-relaxed">
                    Nein, sie entlastet sie von repetitiven Aufgaben, damit sie sich auf komplexere und wertschöpfende Tätigkeiten konzentrieren können.
                </div>
</details>
<details className="group bg-white/5 rounded-xl p-4 cursor-pointer border border-white/5 open:bg-white/10 transition-colors">
<summary className="flex justify-between items-center text-white font-medium text-sm">
                    Wie sicher sind meine Daten?
                    <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</summary>
<div className="mt-4 text-slate-400 text-xs leading-relaxed">
                    Datenschutz hat höchste Priorität. Unsere Systeme arbeiten DSGVO-konform und nutzen verschlüsselte Übertragungswege.
                </div>
</details>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Starte dein Projekt</h2>
<p className="text-slate-400 max-w-2xl mx-auto mb-10">
                Warte nicht, bis deine Konkurrenz dich überholt: Kontaktiere uns heute und erhalte deine KI-Lösung – exakt auf dich zugeschnitten, schnell und messbar wirksam.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-all duration-300" onclick="toggleModal()">
                    Jetzt starten
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all duration-300" onclick="toggleModal()">
                    Anfrage senden
                </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[100px] pointer-events-none"></div>
</section>

<footer className="border-t border-white/5 bg-[#020203] py-12 text-sm reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[9px] font-bold">N</div>
<span className="text-white font-medium tracking-tight uppercase">Novara Pro AI</span>
</div>
<p className="text-slate-500 text-xs leading-relaxed">
                        Intelligente Web- &amp; KI-Systeme für Wachstum und Effizienz.
                    </p>
</div>
<div className="flex gap-12 flex-wrap">
<div>
<h4 className="text-white font-medium mb-4">Navigation</h4>
<ul className="space-y-2 text-slate-500 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">Über Uns</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#pricing">Preise</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Rechtliches</h4>
<ul className="space-y-2 text-slate-500 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Datenschutzerklärung</a></li>
<li><a className="hover:text-white transition-colors" href="#">Impressum</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© 2024 Novara Pro AI. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="16"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center hidden-modal p-4" id="demo-modal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="toggleModal()"></div>

<div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 w-full max-w-md relative z-10 shadow-2xl" id="modal-content">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors" onclick="toggleModal()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<div className="text-center mb-6">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 mb-4 border border-indigo-500/20">
<iconify-icon icon="solar:calendar-mark-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Vorteil sichern</h3>
<p className="text-sm text-slate-400">Erhalten Sie Ihre KI-Lösung exakt auf Sie zugeschnitten.</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="Max Mustermann" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">E-Mail Adresse</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="max@firma.de" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Telefonnummer</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="+49 123 456789" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Branche</label>
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-slate-400">
<option disabled="" selected="" value="">Bitte wählen</option>
<option value="beauty">Beauty &amp; Lifestyle</option>
<option value="gastro">Gastronomie &amp; Hotels</option>
<option value="handwerk">Handwerk &amp; Dienstleistung</option>
<option value="industrie">Industrie &amp; Konzerne</option>
<option value="other">Sonstige</option>
</select>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-colors mt-2 shadow-lg shadow-indigo-500/20" type="button">
                    Anfrage senden
                </button>
</form>
</div>
</div>



    </>
  );
}
