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



        lucide.createIcons();
    
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
      

<div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-center py-3 px-4">
<p className="text-xs font-medium text-white tracking-wide uppercase">🧬 Longevity Jahresauftakt 2026 - Live am 27. Januar um 19 Uhr</p>
</div>

<header className="relative pt-16 pb-24 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-950/40 via-black to-black -z-10"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white tracking-wide">
                        2026 DAS ENTSCHEIDENDE JAHR FÜR LONGEVITY-EXPERTEN
                    </span>
<h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                        Warum 2026 das Jahr wird, in dem Longevity zur <span className="text-green-400 text-glow">größten Business‒Chance</span> des Jahrzehnts wird – und wie du als Arzt, Therapeut oder Coach davon <span className="underline decoration-green-400/50 decoration-2 underline-offset-4">profitierst.</span>
</h1>
<p className="text-lg text-neutral-400 leading-relaxed font-light max-w-xl">
                        Alle Insights zu den aktuell am schnellsten wachsenden Longevity-Strategien – und wie du daraus ein skalierbares Longevity-Business aufbaust (oder nahtlos in dein bestehendes Business integrierst), das dir mindestens 100.000 € Monatsumsatz ermöglicht – auch ohne Vertriebserfahrung oder Verkaufstalent.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="group bg-orange-500 hover:bg-orange-400 text-white text-base font-medium py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                            Jetzt gratis zum Live-Event anmelden
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<p className="text-sm text-neutral-400">Bereits über <span className="text-white font-medium">4000+ Coaches, Ärzte &amp; Therapeuten</span> haben teilgenommen.</p>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl blur-sm"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 aspect-[4/5] lg:aspect-square">
<img alt="Sebastian Dietrich Speaking" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs font-medium text-white mb-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                LIVE TRAINING
                            </div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="bg-white py-12 border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter text-black">VOGUE</span>
<span className="text-xl font-bold tracking-tighter text-black">STUTTGARTER NACHRICHTEN</span>
<span className="text-xl font-bold tracking-tighter text-black">FUNCTIONAL TRAINING</span>
<span className="text-xl font-bold tracking-tighter text-black">dn research</span>
<span className="text-xl font-bold tracking-tighter text-black">Ortholadics</span>
<span className="text-xl font-bold tracking-tighter text-black">ROSETTICS</span>
</div>
</div>
</div>

<section className="bg-[#1e1b4b] py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="relative mx-auto border-neutral-800 bg-neutral-900 border-[8px] rounded-t-xl h-[280px] max-w-[450px] md:h-[350px] md:max-w-[600px] shadow-2xl">
<div className="rounded-lg overflow-hidden h-full bg-neutral-800">
<img alt="Webinar Preview" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> LIVE
                            </div>
</div>
</div>
<div className="relative mx-auto bg-neutral-900 rounded-b-xl h-[21px] max-w-[500px] md:max-w-[700px]"></div>
</div>

<div className="order-1 lg:order-2 space-y-6">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Das LIVE-Highlight am 27.01:</h2>
<p className="text-lg text-indigo-100 font-light leading-relaxed">
                        Sebastian Dietrich – Gründer der Longevity Business Mastery – betreut einige der bekanntesten Health und Longevity-Experten im deutschsprachigen Raum. Erhalte kostenlos im Live-Event deine persönliche „Longevity-Business-Roadmap“ und erfahre, was 2026 im Gesundheits- und Coaching-Business tatsächlich funktionieren wird.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<h2 className="text-center text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-20">Was dich am 27.01. LIVE erwartet:</h2>
<div className="relative border-l border-neutral-800 ml-4 md:ml-0 md:pl-12 space-y-20">

<div className="relative">
<div className="absolute -left-[21px] md:-left-[53px] top-2 w-3 h-3 bg-white rounded-full ring-4 ring-black"></div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 block">Teil 1: Wissenschaft &amp; Fundament</span>
<h3 className="text-2xl font-semibold text-white mb-4">Die 12 Ursachen des Alterns – und wie du sie umkehrst</h3>
<div className="prose prose-invert prose-lg text-neutral-400 font-light">
<p>In Teil 1 erklärt Sebastian die neuesten wissenschaftlichen Erkenntnisse zur Longevity-Forschung – von den 12 biologischen Ursachen des Alterns (Hallmarks of Aging) bis zu konkreten Interventionen, mit denen du das biologische Alter messbar reduzieren kannst.</p>
<p className="mt-4">Du lernst, wie du diese Erkenntnisse praktisch anwendest z. B. mit Darmaufbau, Mitochondrien-Regeneration, Fasten-Strategien, Entgiftung und Nervensystem-Reset und wie du damit sichtbare, reproduzierbare Ergebnisse bei deinen Kunden erzielst.</p>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] md:-left-[53px] top-2 w-3 h-3 bg-white rounded-full ring-4 ring-black"></div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 block">Teil 2: Der Boommarkt Longevity</span>
<h3 className="text-2xl font-semibold text-white mb-4">Der größte Wachstumsmarkt der nächsten 20 Jahre</h3>
<div className="prose prose-invert prose-lg text-neutral-400 font-light">
<p>Ich zeige dir, wie sich Longevity von einem Trend zu einer Milliardenindustrie entwickelt, angetrieben von Investoren wie Jeff Bezos, Sergey Brin, Tony Robbins oder Sam Altman.</p>
<p className="mt-4">Du erfährst, wie KI, Genetik, Wearables und epigenetische Tests das Gesundheitsbusiness neu definieren und warum du jetzt in diesen Markt einsteigen musst, bevor er gesättigt ist.</p>
<p className="mt-4 text-white font-medium">Ziel: <span className="text-neutral-400 font-light">Dich als Experten in einem Zukunftsmarkt zu positionieren, der Medizin, Coaching und Technologie verbindet.</span></p>
</div>
</div>

<div className="relative rounded-xl overflow-hidden border border-white/10 my-12">
<img alt="Seminar Room" className="w-full h-auto object-cover opacity-80" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1200&amp;q=80"/>
</div>

<div className="relative">
<div className="absolute -left-[21px] md:-left-[53px] top-2 w-3 h-3 bg-white rounded-full ring-4 ring-black"></div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 block">Teil 3: Vom Wissen zum Business</span>
<h3 className="text-2xl font-semibold text-white mb-4">Wie du als Coach, Arzt oder Therapeut ein profitables Longevity-Business aufbaust</h3>
<div className="prose prose-invert prose-lg text-neutral-400 font-light">
<p>Hier zeige ich dir Schritt für Schritt, wie du dein Wissen in ein skalierbares Business-Modell verwandelst, mit klarer Zielgruppe, strukturierter Coaching-Architektur, hybriden Online-/Offline-Angeboten und digitalen Tools wie BioAge-Tests und Apps.</p>
<p className="mt-4">Du lernst, wie du dein Angebot richtig positionierst und Inhalte automatisierst ohne Vertrieb oder Kaltakquise.</p>
<p className="mt-4 text-white font-medium">Ergebnis: <span className="text-neutral-400 font-light">Ein nachhaltiges Business, das Gesundheit, Wissenschaft und Unternehmertum verbindet.</span></p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-center text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-16">Für wen ist das Live Training:</h2>
<div className="grid lg:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-colors">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="dumbbell"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Du bist <span className="text-green-400">Coach oder Trainer</span></h3>
<p className="text-neutral-400 font-light leading-relaxed">Wenn du mit 1:1 oder Gruppenprogrammen arbeitest, zeigt dir die Anleitung, wie du durch Longevity deine Positionierung schärfst, Premiumpreise durchsetzt – und planbar mehr Klienten gewinnst.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-colors">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="stethoscope"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Du bist <span className="text-green-400">Therapeut oder Arzt</span></h3>
<p className="text-neutral-400 font-light leading-relaxed">Wenn du deine Praxis auf ein neues Level heben willst, erfährst du, wie du Longevity-Protokolle integrierst, neue Kundengruppen erschließt – und deinen Stundensatz erhöhst.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-colors">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Du bist <span className="text-green-400">Quereinsteiger</span></h3>
<p className="text-neutral-400 font-light leading-relaxed">Wenn du aus dem 9-to-5 ausbrechen möchtest, lernst du das System kennen, mit dem du in einen Zukunftsmarkt einsteigst – auch ohne medizinischen Hintergrund.</p>
</div>
</div>
<div className="text-center mt-12">
<button className="bg-orange-500 hover:bg-orange-400 text-white text-base font-medium py-4 px-10 rounded-lg transition-all duration-200 inline-flex items-center gap-2">
                    Jetzt gratis zum Live-Event anmelden
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="space-y-2">
<p className="text-lg text-white font-medium">Sebastian Dietrich</p>
<span className="inline-block px-3 py-1 bg-green-900/30 text-green-400 border border-green-900/50 rounded text-sm font-medium">Deutschlands #1 Longevity‒Ausbilder</span>
</div>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Seit über 10 Jahren zeigt Sebastian Ärzten, Therapeuten und Coaches, wie sie wissenschaftlich fundierte Longevity-Konzepte in skalierbare Business-Modelle verwandeln – und dabei echte Transformation statt Theorie schaffen. Als Gründer der Longevity Business Mastery hat er mehr als 300 Experten ausgebildet und hilft ihnen, Gesundheit und Unternehmertum zu verbinden.
                    </p>
<div className="space-y-4 pt-4 border-t border-white/10">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check"></i>
<span className="text-neutral-300 font-medium">Über 400+ analysierte biologische Alterstests</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check"></i>
<span className="text-neutral-300 font-medium">300+ ausgebildete Longevity-Coaches seit 2019</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check"></i>
<span className="text-neutral-300 font-medium">−12 Jahre biologisches Alter durch eigene Methoden nachweisbar</span>
</div>
</div>
<div className="pt-6">
<button className="bg-orange-500 hover:bg-orange-400 text-white text-base font-medium py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-2">
                            Jetzt gratis zum Live-Event anmelden
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="relative">
<div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
<img alt="Sebastian Dietrich" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">

<div className="bg-neutral-900 rounded-3xl overflow-hidden border border-white/5 grid lg:grid-cols-2">
<div className="p-10 lg:p-14 flex flex-col justify-center space-y-6">
<span className="text-xs tracking-widest text-neutral-500 uppercase">Kundenerfahrung</span>
<h3 className="text-2xl font-semibold text-white">Von Praxis zu Premium-Business</h3>
<p className="text-neutral-400 font-light leading-relaxed">Dr. Katja W. begleitet Frauen dabei, ihre Gesundheit und ihr biologisches Alter messbar zu verbessern. <br/>Vor dem Mentoring lag sie bei ca. 6 000 € Monatsumsatz. Heute konstant über 60 000 € – bei höherer Patientenzufriedenheit und weniger Arbeitszeit.</p>
<div className="space-y-2 pt-4">
<p className="text-white font-medium mb-2">Ergebnis:</p>
<div className="flex gap-3 text-sm text-neutral-300 font-light">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check-circle-2"></i>
                            Umsatz pro Patient verdoppelt bei gleichbleibender Qualität
                        </div>
<div className="flex gap-3 text-sm text-neutral-300 font-light">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check-circle-2"></i>
                            Von 6 000 € auf 62 000 € Monatsumsatz in 16 Wochen
                        </div>
<div className="flex gap-3 text-sm text-neutral-300 font-light">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check-circle-2"></i>
                            Kein herumschlagen mehr mit Krankenkasse bei der Abrechnung
                        </div>
</div>
<div className="pt-6">
<p className="text-white font-medium">Dr. Katja W.</p>
<p className="text-neutral-500 text-sm">Internistin &amp; zertifizierte Longevity-Coachin</p>
</div>
</div>
<div className="h-64 lg:h-auto bg-neutral-800 relative">
<img alt="Dr. Katja W." className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&amp;q=80"/>
</div>
</div>

<div className="bg-neutral-900 rounded-3xl overflow-hidden border border-white/5 grid lg:grid-cols-2">
<div className="p-10 lg:p-14 flex flex-col justify-center space-y-6">
<span className="text-xs tracking-widest text-neutral-500 uppercase">Kundenerfahrung</span>
<h3 className="text-2xl font-semibold text-white">Vom Coach zur Longevity-Expertin</h3>
<p className="text-neutral-400 font-light leading-relaxed">„Ich dachte, der Markt sei überfüllt – bis ich verstanden habe, wie Longevity funktioniert. Mein erstes Programm war in 3 Tagen ausverkauft.“</p>
<div className="space-y-2 pt-4">
<p className="text-white font-medium mb-2">Ergebnis:</p>
<div className="flex gap-3 text-sm text-neutral-300 font-light">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check-circle-2"></i>
                            100 000 € Launch-Umsatz im ersten Durchlauf
                        </div>
<div className="flex gap-3 text-sm text-neutral-300 font-light">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check-circle-2"></i>
                            Angebot definiert, dass ihr Kunden aus der Hand reißen
                        </div>
<div className="flex gap-3 text-sm text-neutral-300 font-light">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check-circle-2"></i>
                            Erstes digitales Programm automatisiert verkauft
                        </div>
</div>
<div className="pt-6">
<p className="text-white font-medium">Alexandra B.</p>
<p className="text-neutral-500 text-sm">Heilpraktikerin &amp; Longevity-Mentorin</p>
</div>
</div>
<div className="h-64 lg:h-auto bg-neutral-800 relative order-first lg:order-last">
<img alt="Alexandra B." className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&amp;q=80"/>
</div>
</div>

<div className="bg-neutral-900 rounded-3xl overflow-hidden border border-white/5 grid lg:grid-cols-2">
<div className="p-10 lg:p-14 flex flex-col justify-center space-y-6">
<span className="text-xs tracking-widest text-neutral-500 uppercase">Kundenerfahrung</span>
<h3 className="text-2xl font-semibold text-white">Vom Therapeuten zum Unternehmer</h3>
<p className="text-neutral-400 font-light leading-relaxed">„Ich war ausgebucht, aber nicht frei. Heute läuft mein Business automatisiert – und ich arbeite nur 2 Tage pro Woche.“</p>
<div className="space-y-2 pt-4">
<p className="text-white font-medium mb-2">Ergebnis:</p>
<div className="flex gap-3 text-sm text-neutral-300 font-light">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check-circle-2"></i>
                            Leadqualität massiv gesteigert
                        </div>
<div className="flex gap-3 text-sm text-neutral-300 font-light">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check-circle-2"></i>
                            Umsatz von 39 000 € auf 167 000 € Monat
                        </div>
</div>
<div className="pt-6">
<p className="text-white font-medium">Ben Lehmann</p>
<p className="text-neutral-500 text-sm">CEO at Artistry Studios</p>
</div>
</div>
<div className="h-64 lg:h-auto bg-neutral-800 relative">
<img alt="Ben Lehmann" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black text-center px-6">
<div className="max-w-4xl mx-auto space-y-10">
<h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-tight">
                Meld dich jetzt kostenlos an und sei beim großen Longevity Business Update 2026 dabei! In <span className="underline decoration-green-400 decoration-2 underline-offset-4">nur 120 Minuten zeige ich dir, wie du dein Gesundheits- oder Coaching-Business wissenschaftlich fundiert</span>, digital skalierbar und nachhaltig profitabel machst.
            </h2>
<button className="bg-orange-500 hover:bg-orange-400 text-white text-lg font-medium py-4 px-12 rounded-lg transition-all duration-200 inline-flex items-center gap-2 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                Jetzt gratis zum Live-Event anmelden
                <i className="w-6 h-6" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/10 text-center">
<div className="max-w-4xl mx-auto px-6 space-y-6">
<p className="text-neutral-500 text-sm">© 2025 INEX Health. All rights reserved</p>
<div className="flex justify-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
</div>
<p className="text-xs text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed">
                This website is not part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. Facebook is a trademark of Facebook, Inc. We use Google remarketing pixels/cookies on this site to re-communicate with people who visit our site and ensure that we are able to reach them in the future with relevant messages and information. Google shows our ads across third party sites across the internet to help communicate our message and reach the right people who have shown interest in our information in the past.
            </p>
</div>
</footer>


    </>
  );
}
