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
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
colors: {
gold: {
100: '#FBF4D8',
200: '#F5E6AA',
300: '#EFD679',
400: '#E9C64B',
500: '#CFA628',
600: '#A48016',
900: '#3D2D03',
},
dark: {
950: '#020202', // Pitch black
900: '#080808', // Soft black
800: '#121212', // Panel black
700: '#1A1A1A', // Border black
}
},
animation: {
'float': 'float 8s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out 4s infinite',
'shimmer': 'shimmer 2.5s linear infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
shimmer: {
'100%': { transform: 'translateX(100%)' },
}
}
}
}
}

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
      
<div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent"></div>
</div>
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-dark-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group z-50" href="#">
<div className="text-gold-400">
<iconify-icon icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<span className="font-serif text-xl tracking-tight text-white">
            Gewinnerpages.de
          </span>
</a>
<a className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-black bg-white hover:bg-gold-200 rounded-full transition-all duration-300" href="#cta">
          Analyse buchen
          <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] -z-10"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="space-y-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-white/60">
              High-Ticket Conversion Systems
            </span>
</div>
<h1 className="text-6xl lg:text-7xl font-serif text-white leading-[0.95] tracking-tight">
            Markt-
            <br/>
            Dominanz
            <br/>
<span className="text-white/30 italic font-light">
              statt Mittelmaß.
            </span>
</h1>
<p className="text-lg text-white/60 font-light max-w-md leading-relaxed border-l border-white/10 pl-6">
            Wir verwandeln Ihre Webseite von einer digitalen Visitenkarte in ein
            automatisiertes System, das kalten Traffic in
            <span className="text-white font-medium">
              vorqualifizierte 5-stellige Deals
            </span>
            konvertiert.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<a className="btn-glow group relative px-10 py-4 bg-gradient-to-r from-gold-200 to-gold-500 text-black rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:-translate-y-1" href="#cta">
<span className="relative flex items-center gap-3">
                Jetzt Agentur skalieren
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</a>
<div className="flex items-center gap-3">
<div className="flex -space-x-4">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<div className="w-10 h-10 rounded-full bg-dark-800 border-2 border-black flex items-center justify-center text-[10px] text-white font-medium">
                  +120
                </div>
</div>
<span className="text-xs text-white/40">Zufriedene Partner</span>
</div>
</div>
</div>

<div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end group perspective-1000">

<div className="relative z-10 w-[85%] h-[90%] rounded-[2rem] overflow-hidden border border-white/10 transition-transform duration-700 group-hover:rotate-y-2 group-hover:scale-[1.01]">
<div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent z-10"></div>

<img alt="Founder" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute top-20 -left-4 z-20 glass-panel p-4 rounded-2xl animate-float">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-white/40 uppercase tracking-wide">
                  Revenue
                </p>
<p className="text-lg font-bold text-white">+ €42.000</p>
</div>
</div>
</div>

<div className="absolute bottom-32 -right-8 z-20 glass-panel p-4 rounded-2xl animate-float-delayed">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover border border-white/20" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&amp;h=100&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
</div>
<div>
<p className="text-[10px] text-white/40 uppercase tracking-wide">
                  New Call Booked
                </p>
<p className="text-sm font-medium text-white">Julia M. (CEO)</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-10 bg-dark-950/50 border-b border-white/5 overflow-hidden backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-mono uppercase tracking-widest text-white/30 mb-8">
          Vertraut von Marktführern &amp; Elite-Brands
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-3xl group-hover:text-gold-400 transition-colors" icon="solar:buildings-2-bold"></iconify-icon>
<span className="font-serif text-xl font-bold tracking-tight group-hover:text-white transition-colors">
              ImmoInvest
            </span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-3xl group-hover:text-gold-400 transition-colors" icon="solar:chart-square-bold"></iconify-icon>
<span className="font-serif text-xl font-bold tracking-tight group-hover:text-white transition-colors">
              ScaleCapital
            </span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-3xl group-hover:text-gold-400 transition-colors" icon="solar:shield-check-bold"></iconify-icon>
<span className="font-serif text-xl font-bold tracking-tight group-hover:text-white transition-colors">
              SecureLaw
            </span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-3xl group-hover:text-gold-400 transition-colors" icon="solar:globe-bold"></iconify-icon>
<span className="font-serif text-xl font-bold tracking-tight group-hover:text-white transition-colors">
              GlobalTech
            </span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-3xl group-hover:text-gold-400 transition-colors" icon="solar:crown-bold"></iconify-icon>
<span className="font-serif text-xl font-bold tracking-tight group-hover:text-white transition-colors">
              EliteCoaching
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-950 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
<img alt="Frustrated Team" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl border-l-2 border-red-500 max-w-xs">
<p className="text-red-400 text-xs font-bold mb-1">WARNUNG</p>
<p className="text-white text-sm">
              Ad-Budget steigt, Ergebnisse sinken. Das System ist kaputt.
            </p>
</div>
</div>
<div className="order-1 lg:order-2">
<p className="text-xs font-mono text-white/30 mb-8 uppercase tracking-widest">
            Die Realität
          </p>
<h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
            Warum Ihre Ads Geld verbrennen statt
            <span className="italic text-white/50">Wachstum zu erzeugen.</span>
</h2>
<div className="space-y-4">
<div className="group p-5 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] rounded-xl transition-all duration-300 hover:border-red-500/30 flex gap-4 items-start">
<div className="shrink-0 mt-1 text-red-500/80 group-hover:text-red-500 transition-colors">
<iconify-icon icon="solar:close-circle-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 group-hover:text-white transition-colors">
                  Die Design-Falle
                </h3>
<p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">
                  Ihre Seite sieht aus wie ein Kunstwerk, konvertiert aber wie
                  ein defekter Automat. Hübsch verkauft nicht.
                </p>
</div>
</div>
<div className="group p-5 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] rounded-xl transition-all duration-300 hover:border-red-500/30 flex gap-4 items-start">
<div className="shrink-0 mt-1 text-red-500/80 group-hover:text-red-500 transition-colors">
<iconify-icon icon="solar:close-circle-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 group-hover:text-white transition-colors">
                  Vergleichbarkeit
                </h3>
<p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">
                  Ohne klare psychologische Trigger sind Sie nur eine Ware – und
                  Waren werden über den Preis gekauft.
                </p>
</div>
</div>
<div className="group p-5 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] rounded-xl transition-all duration-300 hover:border-red-500/30 flex gap-4 items-start">
<div className="shrink-0 mt-1 text-red-500/80 group-hover:text-red-500 transition-colors">
<iconify-icon icon="solar:close-circle-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 group-hover:text-white transition-colors">
                  Traffic-Loch
                </h3>
<p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">
                  Die Botschaft in der Ad passt nicht zur Landingpage. Das
                  Ergebnis: Hohe Klickpreise, keine Termine.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 relative overflow-hidden">

<div className="absolute right-0 top-0 h-full w-1/2 opacity-10 mix-blend-overlay pointer-events-none">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-block p-4 rounded-full bg-red-500/10 text-red-500 mb-6">
<iconify-icon icon="solar:danger-triangle-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
          Der stille Tod Ihrer
          <span className="text-white/30 decoration-1 underline underline-offset-4">
            Autorität.
          </span>
</h2>
<div className="bg-dark-950 border border-white/10 p-8 rounded-2xl relative overflow-hidden mb-12 shadow-2xl shadow-black/50">
<div className="absolute top-0 left-0 w-1 h-full bg-red-500/50"></div>
<p className="text-white/80 font-light text-xl leading-relaxed relative z-10">
            In der High-Ticket Welt gibt es keine zweiten Chancen. Während Sie
            zögern, etabliert sich die Konkurrenz als Marktführer. , statt sich
            die Kunden auszusuchen, mit denen Sie arbeiten wollen.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
<div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm text-center group hover:bg-white/10 transition-colors">
<p className="text-3xl text-white font-serif mb-1 group-hover:scale-110 transition-transform duration-300">
              0%
            </p>
<p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
              Planbarkeit
            </p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm text-center group hover:bg-white/10 transition-colors">
<p className="text-3xl text-white font-serif mb-1 group-hover:scale-110 transition-transform duration-300">
              High
            </p>
<p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
              Stress Level
            </p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm text-center group hover:bg-white/10 transition-colors">
<p className="text-3xl text-white font-serif mb-1 group-hover:scale-110 transition-transform duration-300">
              Low
            </p>
<p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
              Profit Marge
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative flex items-center justify-center text-center overflow-hidden">

<div className="absolute inset-0 opacity-20 grayscale">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="w-20 h-20 mx-auto rounded-full bg-dark-900 border border-gold-500/30 flex items-center justify-center mb-8">
<iconify-icon className="text-gold-500 text-4xl animate-spin-slow" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
          Hören Sie auf, Traffic zu kaufen.

          <span className="text-gradient-gold italic">
            Beginnen Sie, Vertrauen zu skalieren.
          </span>
</h2>
<div className="max-w-xl mx-auto border-y border-white/10 py-10 bg-white/[0.02]">
<p className="text-white/80 text-lg font-light leading-relaxed">
            Traffic ist eine Ware. Wahre Knappheit herrscht beim Vertrauen. Sie
            brauchen nicht mehr Klicks, sondern eine psychologische Architektur,
            die Skepsis abbaut, bevor das erste Wort gesprochen wird.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-dark-950 border-y border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
<div className="space-y-8">
<div className="inline-block px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs tracking-widest uppercase font-semibold">
            Der Gewinner Standard
          </div>
<h2 className="text-4xl md:text-5xl font-serif text-white">
            Ein Kalender voller

            <span className="italic text-white/40">Entscheider.</span>
</h2>
<div className="space-y-6 mt-8">
<div className="flex gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20 text-gold-400">
<iconify-icon className="text-2xl" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white font-semibold text-lg mb-2">
                  Voller Kalender
                </h3>
<p className="text-white/50 text-sm leading-relaxed">
                  Stellen Sie sich vor: Sie öffnen Ihren Laptop und sehen
                  Termine mit CEOs, die Ihr Angebot bereits kennen und Ihren
                  Preis respektieren.
                </p>
</div>
</div>
<div className="flex gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20 text-gold-400">
<iconify-icon className="text-2xl" icon="solar:user-speak-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-white font-semibold text-lg mb-2">
                  24/7 Vertrieb
                </h3>
<p className="text-white/50 text-sm leading-relaxed">
                  Ihre Webseite arbeitet als Ihr bester Mitarbeiter. Sie schläft
                  nie, fordert keine Provision und liefert konstant
                  Elite-Kunden.
                </p>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gold-400/20 blur-[100px] -z-10 transition-opacity duration-700 opacity-50 group-hover:opacity-80"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10">
<img alt="Successful Business Meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl">
<div className="flex items-start gap-4">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="flex text-gold-400 text-xs mb-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white italic">
                    "Wir haben den Umsatz in 3 Monaten verdoppelt. Endlich
                    planbar."
                  </p>
<p className="text-xs text-white/40 mt-2 font-bold uppercase">
                    Markus W., CEO
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark-900 pt-32 pb-32 relative">
<div className="max-w-6xl mx-auto px-6 text-center">
<span className="text-gold-400 text-sm tracking-widest uppercase mb-4 block font-semibold">
          Die Methode
        </span>
<h2 className="text-4xl md:text-6xl font-serif text-white mb-16">
          Conversion
          <span className="text-gradient-gold">Ecology™</span>
</h2>
<div className="grid md:grid-cols-3 gap-8 text-left relative z-10">

<div className="p-8 border border-white/10 rounded-3xl bg-dark-950 relative group hover:border-white/20 transition-all">
<div className="flex group-hover:bg-white/10 transition-colors bg-white/5 w-12 h-12 rounded-full mb-6 items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="solar:brain-linear"></iconify-icon>
<iconify-icon className="text-2xl text-white" height="24" icon="solar:star-outline" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Psychologie</h3>
<p className="text-sm text-white/50 leading-relaxed">
              Wir entschlüsseln die Kaufmotive Ihrer Zielgruppe und bauen eine
              Argumentationskette, die emotional und logisch unwiderstehlich
              ist.
            </p>
</div>

<div className="p-8 border border-gold-500/30 rounded-3xl bg-dark-950 shadow-[0_0_30px_rgba(207,166,40,0.05)] relative transform md:-translate-y-4">
<div className="absolute -top-3 left-8 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider">
              Core
            </div>
<div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-gold-400" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Architektur</h3>
<p className="text-sm text-white/50 leading-relaxed">
              Ein maßgeschneidertes digitales Ökosystem. High-End Design trifft
              auf Performance Code. Keine Templates, pure Maßarbeit.
            </p>
</div>

<div className="p-8 border border-white/10 rounded-3xl bg-dark-950 relative group hover:border-white/20 transition-all">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-2xl text-white" height="24" icon="solar:tuning-square-2-linear" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Automation</h3>
<p className="text-sm text-white/50 leading-relaxed">
              Das System qualifiziert, filtert und terminiert. Sie sprechen nur
              noch mit Kontakten, die bereit sind zu kaufen.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">

<div className="w-full md:w-5/12 relative group">
<div className="absolute -inset-2 bg-gradient-to-tr from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg rounded-full"></div>
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden transition-all duration-700 relative z-10 border border-white/10">
<img alt="Filip Budzinski" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>

<div className="w-full md:w-7/12 space-y-8">
<div>
<h4 className="text-gold-400 font-serif italic text-2xl mb-2">
                Der Architekt
              </h4>
<h2 className="text-5xl text-white font-medium tracking-tight">
                Filip Budzinski
              </h2>
</div>
<div className="relative bg-dark-950 p-10 rounded-3xl border border-white/10 overflow-hidden group">
<div className="absolute top-0 right-0 p-10 opacity-10">
<iconify-icon className="text-[140px] text-white pointer-events-none" icon="solar:quote-up-square-linear"></iconify-icon>
</div>
<div className="relative z-10 space-y-6 text-white/80 text-xl font-serif italic leading-relaxed">
<p>
                  "Die meisten Agenturen sind exzellent darin, Dinge 'schön' zu
                  machen, aber furchtbar darin, Profit zu generieren. Mein
                  Hintergrund ist nicht Kunst – es ist Direct Response
                  Marketing."
                </p>
<p className="text-gold-400">
                  "Wir bauen Systeme, die nicht nur existieren, sondern
                  dominieren."
                </p>
</div>
</div>
<div className="pt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-white/10 border border-black"></div>
<div className="w-10 h-10 rounded-full bg-white/20 border border-black"></div>
</div>
<div className="text-xs uppercase tracking-widest text-white/30">
                Gewinnerpages.de Founder
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-dark-900 overflow-hidden">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl font-serif text-white">
            Der Weg zur
            <span className="text-gold-400 italic">Autorität</span>
</h2>
</div>
<div className="space-y-0 relative">

<div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group pb-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-2xl text-white font-serif mb-2">
                1. Audit &amp; Strategie
              </h3>
<p className="text-sm text-white/50">
                Wir analysieren Ihr Angebot radikal. Wir finden die "Lecks",
                durch die Sie Geld verlieren, und definieren Ihre
                unwiderstehliche Positionierung.
              </p>
</div>
<div className="w-14 h-14 rounded-full bg-dark-950 border border-white/10 flex items-center justify-center text-white relative z-10 shrink-0 order-1 md:order-2 group-hover:border-gold-500 transition-colors shadow-2xl">
<iconify-icon className="text-xl" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<div className="md:w-1/2 order-3 md:order-3 hidden md:block pl-8">
<img className="rounded-xl border border-white/10 opacity-50 grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&amp;h=150&amp;fit=crop"/>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 pb-16 group">
<div className="md:w-1/2 hidden md:block order-1 pr-8 text-right">
<img className="rounded-xl border border-white/10 opacity-50 grayscale group-hover:grayscale-0 transition-all ml-auto" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&amp;h=150&amp;fit=crop"/>
</div>
<div className="w-14 h-14 rounded-full bg-dark-950 border border-gold-500 flex items-center justify-center text-gold-400 relative z-10 shrink-0 order-1 md:order-2 shadow-[0_0_20px_rgba(207,166,40,0.2)]">
<iconify-icon className="text-xl" icon="solar:code-linear"></iconify-icon>
</div>
<div className="md:w-1/2 order-2 md:order-3">
<h3 className="text-2xl text-white font-serif mb-2">
                2. Build &amp; Launch
              </h3>
<p className="text-sm text-white/50">
                Wir bauen Ihre "Gewinner Page" und die Ads-Infrastruktur. Copy,
                Design, Tech – alles Done-For-You. Ein schlüsselfertiges Asset.
              </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-2xl text-white font-serif mb-2">3. Skalierung</h3>
<p className="text-sm text-white/50">
                Wir schalten den Traffic ein. Tägliche Optimierung senkt Ihren
                CPA. Sie erhalten einen vorhersehbaren Strom an High-Ticket
                Terminen.
              </p>
</div>
<div className="w-14 h-14 rounded-full bg-dark-950 border border-white/10 flex items-center justify-center text-white relative z-10 shrink-0 order-1 md:order-2 group-hover:border-gold-500 transition-colors shadow-2xl">
<iconify-icon className="text-xl" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<div className="md:w-1/2 order-3 md:order-3 hidden md:block pl-8">
<img className="rounded-xl border border-white/10 opacity-50 grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&amp;h=150&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-950 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] gap-x-6 gap-y-6">

<div className="md:col-span-2 row-span-2 rounded-[2rem] bg-gradient-to-br from-dark-900 to-black border border-white/5 p-10 flex flex-col justify-end relative overflow-hidden group hover:border-gold-500/20 transition-colors">
<div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
<img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon className="text-gold-500" icon="solar:crown-line-duotone" width="200"></iconify-icon>
</div>
<div className="relative z-10 bg-dark-950/80 backdrop-blur-sm p-6 rounded-2xl border border-white/5 inline-block max-w-lg">
<h3 className="text-3xl font-serif text-white mb-2">
                Unerschütterliche Autorität
              </h3>
<p className="text-white/60 text-sm leading-relaxed">
                Premium-Preise verlangen Premium-Auftritt. Unsere
                Design-Psychologie positioniert Sie so, dass Preisdiskussionen
                verschwinden und Respekt bleibt.
              </p>
</div>
</div>

<div className="rounded-[2rem] bg-dark-900 border border-white/5 p-8 flex flex-col justify-between hover:border-white/20 transition-colors relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-gold-500/5 rounded-bl-full"></div>
<iconify-icon className="text-gold-400 text-3xl" icon="solar:hourglass-linear"></iconify-icon>
<div>
<h4 className="text-xl text-white font-medium mb-2">Zeit zurück</h4>
<p className="text-sm text-white/50">
                Keine Kaltakquise. Kein "Follow-up" Hell. Automatisierte
                Lead-Gen.
              </p>
</div>
</div>

<div className="rounded-[2rem] bg-dark-900 border border-white/5 p-8 flex flex-col justify-between hover:border-white/20 transition-colors relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/5 rounded-bl-full"></div>
<iconify-icon className="text-white/70 text-3xl" icon="solar:target-linear"></iconify-icon>
<div>
<h4 className="text-xl text-white font-medium mb-2">Laser Fokus</h4>
<p className="text-sm text-white/50">
                Wir filtern Zeitverschwender technisch aus. Nur B2B Entscheider.
              </p>
</div>
</div>

</div>
</div>
</section>

<section className="py-32 bg-dark-950/30 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<div className="inline-block px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs tracking-widest uppercase font-semibold mb-6">
            The Direct Comparison
          </div>
<h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">
            Das
            <span className="text-gold-400">Upgrade</span>
            für Ihr Business
          </h2>
<p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed">
            Warum Top-Performer zu uns wechseln: Wir ersetzen Hoffnung durch
            Datengestützte Dominanz. Sehen Sie den Unterschied.
          </p>
</div>

<div className="rounded-3xl border border-white/10 bg-dark-900/40 backdrop-blur-xl overflow-hidden relative shadow-2xl mb-20">

<div className="grid grid-cols-2 text-center border-b border-white/10">
<div className="p-8 bg-white/[0.02]">
<span className="text-white/40 font-serif italic text-lg">
                Übliche Agentur
              </span>
</div>
<div className="p-8 bg-gradient-to-b from-gold-500/10 to-transparent border-l border-white/10 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gold-500 shadow-[0_0_20px_rgba(207,166,40,0.5)]"></div>
<span className="text-gold-400 font-bold tracking-wide text-lg flex items-center justify-center gap-2">
<iconify-icon icon="solar:crown-line-duotone"></iconify-icon>
                Gewinnerpages.de
              </span>
</div>
</div>

<div className="divide-y divide-white/5">

<div className="grid grid-cols-2 group hover:bg-white/[0.01] transition-colors">
<div className="p-6 md:p-8 text-sm md:text-base text-white/50 flex items-center justify-center gap-3">
<iconify-icon className="text-red-900 shrink-0 text-xl" icon="solar:close-circle-linear"></iconify-icon>
<span className="line-through decoration-red-900/50">
                  Fokus auf Likes &amp; "Branding"
                </span>
</div>
<div className="p-6 md:p-8 text-sm md:text-base text-white flex items-center justify-center gap-3 border-l border-white/5 font-semibold bg-gold-500/[0.01] group-hover:bg-gold-500/[0.03] transition-colors relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-gold-500 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>Obsession für Umsatz &amp; Net-Profit</span>
</div>
</div>

<div className="grid grid-cols-2 group hover:bg-white/[0.01] transition-colors">
<div className="p-6 md:p-8 text-sm md:text-base text-white/50 flex items-center justify-center gap-3">
<iconify-icon className="text-red-900 shrink-0 text-xl" icon="solar:close-circle-linear"></iconify-icon>
<span className="line-through decoration-red-900/50">
                  Generische Templates
                </span>
</div>
<div className="p-6 md:p-8 text-sm md:text-base text-white flex items-center justify-center gap-3 border-l border-white/5 font-semibold bg-gold-500/[0.01] group-hover:bg-gold-500/[0.03] transition-colors relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-gold-500 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>Maßgeschneiderte Verkaufs-Psychologie</span>
</div>
</div>

<div className="grid grid-cols-2 group hover:bg-white/[0.01] transition-colors">
<div className="p-6 md:p-8 text-sm md:text-base text-white/50 flex items-center justify-center gap-3">
<iconify-icon className="text-red-900 shrink-0 text-xl" icon="solar:close-circle-linear"></iconify-icon>
<span className="line-through decoration-red-900/50">
                  Unklare Kommunikation
                </span>
</div>
<div className="p-6 md:p-8 text-sm md:text-base text-white flex items-center justify-center gap-3 border-l border-white/5 font-semibold bg-gold-500/[0.01] group-hover:bg-gold-500/[0.03] transition-colors relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-gold-500 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>Direkter Zugang zum Gründer</span>
</div>
</div>

<div className="grid grid-cols-2 group hover:bg-white/[0.01] transition-colors">
<div className="p-6 md:p-8 text-sm md:text-base text-white/50 flex items-center justify-center gap-3">
<iconify-icon className="text-red-900 shrink-0 text-xl" icon="solar:close-circle-linear"></iconify-icon>
<span className="line-through decoration-red-900/50">
                  Lange Entwicklungszeiten
                </span>
</div>
<div className="p-6 md:p-8 text-sm md:text-base text-white flex items-center justify-center gap-3 border-l border-white/5 font-semibold bg-gold-500/[0.01] group-hover:bg-gold-500/[0.03] transition-colors relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-gold-500 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>Launch-Ready in 14-21 Tagen</span>
</div>
</div>

<div className="grid grid-cols-2 group hover:bg-white/[0.01] transition-colors">
<div className="p-6 md:p-8 text-sm md:text-base text-white/50 flex items-center justify-center gap-3">
<iconify-icon className="text-red-900 shrink-0 text-xl" icon="solar:close-circle-linear"></iconify-icon>
<span className="line-through decoration-red-900/50">
                  Setup &amp; Bye Bye
                </span>
</div>
<div className="p-6 md:p-8 text-sm md:text-base text-white flex items-center justify-center gap-3 border-l border-white/5 font-semibold bg-gold-500/[0.01] group-hover:bg-gold-500/[0.03] transition-colors relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-gold-500 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>Fortlaufende Conversion-Optimierung</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white/5 border border-white/5 p-8 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group">
<div className="w-14 h-14 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-2xl border border-green-500/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-bold"></iconify-icon>
</div>
<div>
<p className="text-3xl font-serif text-white">+312%</p>
<p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
                Durchschnittl. ROI
              </p>
</div>
</div>
<div className="bg-white/5 border border-white/5 p-8 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group">
<div className="w-14 h-14 rounded-full bg-gold-500/10 text-gold-400 flex items-center justify-center text-2xl border border-gold-500/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-bold"></iconify-icon>
</div>
<div>
<p className="text-3xl font-serif text-white">€4.2M+</p>
<p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
                Kunden-Umsatz
              </p>
</div>
</div>
<div className="bg-white/5 border border-white/5 p-8 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group">
<div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-2xl border border-blue-500/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-bold"></iconify-icon>
</div>
<div>
<p className="text-3xl font-serif text-white">100%</p>
<p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
                Zufriedenheits-Garantie
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark-900 border-t border-white/5 py-32">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-widest uppercase text-white/50 mb-6">
<span className="w-1 h-1 rounded-full bg-gold-500"></span>
            Roadmap
          </div>
<h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Der nächste Schritt ist
            <span className="text-gold-400 italic">risikofrei.</span>
</h2>
<p className="text-white/40 max-w-lg mx-auto font-light">
            Kein Verkaufsdruck. Wir prüfen ehrlich, ob wir der richtige Partner
            für Ihr Wachstum sind.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

<div className="group relative">
<div className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-dark-900 border border-white/30 group-hover:border-gold-500 group-hover:bg-gold-500 transition-colors duration-500 z-10 hidden md:block"></div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 hover:-translate-y-1 h-full">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-gold-500/10 group-hover:text-gold-400 transition-colors">
<iconify-icon className="text-2xl" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<span className="text-5xl font-serif text-white/5 group-hover:text-white/10 transition-colors">
                  01
                </span>
</div>
<h3 className="text-xl text-white font-medium mb-3">
                Analyse buchen
              </h3>
<p className="text-sm text-white/50 leading-relaxed">
                Füllen Sie den kurzen Fragebogen aus. Wir schauen uns Ihr
                aktuelles Setup an und prüfen das Potenzial für eine
                Zusammenarbeit.
              </p>
</div>
</div>

<div className="group relative">
<div className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-dark-900 border border-white/30 group-hover:border-gold-500 group-hover:bg-gold-500 transition-colors duration-500 z-10 hidden md:block"></div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 hover:-translate-y-1 h-full">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-gold-500/10 group-hover:text-gold-400 transition-colors">
<iconify-icon className="text-2xl" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<span className="text-5xl font-serif text-white/5 group-hover:text-white/10 transition-colors">
                  02
                </span>
</div>
<h3 className="text-xl text-white font-medium mb-3">
                Strategie Call
              </h3>
<p className="text-sm text-white/50 leading-relaxed">
                Wenn es passt, entwickeln wir im Gespräch einen groben Fahrplan
                für Ihre Skalierung. Komplett kostenlos.
              </p>
</div>
</div>

<div className="group relative">
<div className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-dark-900 border border-white/30 group-hover:border-gold-500 group-hover:bg-gold-500 transition-colors duration-500 z-10 hidden md:block"></div>
<div className="bg-gradient-to-br from-gold-500/5 to-transparent border border-gold-500/20 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-1 h-full">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 border border-gold-500/20">
<iconify-icon className="text-2xl" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<span className="text-5xl font-serif text-gold-500/10 group-hover:text-gold-500/20 transition-colors">
                  03
                </span>
</div>
<h3 className="text-xl text-white font-medium mb-3">Entscheidung</h3>
<p className="text-sm text-white/50 leading-relaxed">
                Sie erhalten ein Angebot oder Tipps zur Umsetzung. Sie
                entscheiden ohne Druck, ob Sie den Weg mit uns gehen.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-black relative overflow-hidden flex flex-col items-center justify-center text-center" id="cta">

<div className="absolute inset-0 opacity-20">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<h2 className="text-5xl md:text-8xl font-serif text-white mb-10 tracking-tight">
          Ihr Imperium beginnt
          <br/>
<span className="text-gradient-gold italic">mit einem Klick.</span>
</h2>
<p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
          Der Markt ist voll, aber an der Spitze ist immer Platz. Akzeptieren
          Sie keine Mittelmäßigkeit mehr.
        </p>
<a className="btn-glow group relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-black transition-all duration-300 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full hover:scale-105" href="#">
<span className="relative flex items-center gap-3">
            Kostenlose Strategie-Analyse sichern
            <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<div className="mt-10 flex items-center justify-center gap-2 text-xs text-white/30 uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Limitierte Plätze für Q4 verfügbar
        </div>
</div>
<footer className="absolute bottom-0 w-full py-8 border-t border-white/5 bg-dark-950/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/20">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<iconify-icon icon="solar:cup-star-bold"></iconify-icon>
<span>© 2024 Gewinnerpages.de. Made in Germany.</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">
              Datenschutz
            </a>
<a className="hover:text-white transition-colors" href="#">AGB</a>
</div>
</div>
</footer>
</section>

    </>
  );
}
