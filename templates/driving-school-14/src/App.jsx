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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-black/80 border-stone-800">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="rounded-lg p-1.5 shadow-sm bg-orange-400 text-black shadow-orange-800">
<iconify-icon height="20" icon="lucide:car-front" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg text-stone-100">Mikes Fahrschule.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="transition-colors hover:text-orange-400" href="#angebot">Aktuelles</a>
<a className="transition-colors hover:text-orange-400" href="#klassen">Klassen</a>
<a className="transition-colors hover:text-orange-400" href="#seminare">Seminare</a>
<a className="transition-colors hover:text-orange-400" href="#standort">Standort</a>
<a className="transition-colors hover:text-orange-400" href="#kontakt">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex text-sm font-medium text-stone-400 hover:text-stone-100" href="tel:03012345678">
                    030 / 42 10 88 50
                </a>
<a className="hidden md:flex items-center gap-2 text-sm font-medium transition-all rounded-full px-5 py-2 shadow-sm ring-1 ring-offset-2 text-black bg-stone-100 hover:bg-stone-200 ring-stone-100" href="#kontakt">
<span className="">Anmelden</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<button className="md:hidden text-stone-100">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] opacity-70 from-orange-950 via-stone-950 to-black"></div>
<div className="grid lg:grid-cols-2 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm mb-6 animate-fade-in border-stone-800 bg-black">
<span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide uppercase text-stone-500">Zentral in Prenzlauer Berg</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.1] text-stone-100">
                    Echt abgefahren.<br/>
<span className="text-stone-500">Dein Führerschein bei Mike.</span>
</h1>
<p className="text-lg leading-relaxed mb-8 max-w-lg text-stone-400">
                    Modern, geduldig und direkt im Kiez. Wir bringen dich sicher durch den Berliner Stadtverkehr und erfolgreich zur Prüfung.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-medium transition-all shadow-lg bg-orange-400 text-black hover:bg-orange-300 shadow-orange-800 hover:shadow-orange-700" href="#kontakt">
                        Jetzt Platz sichern
                        <iconify-icon className="ml-2" icon="lucide:chevron-right" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border font-medium transition-all border-stone-800 bg-black text-stone-300 hover:bg-stone-950 hover:border-stone-700" href="#klassen">
                        Ausbildungsklassen
                    </a>
</div>
<div className="mt-10 flex items-center gap-6 grayscale opacity-80 text-stone-600">
<span className="font-semibold text-sm tracking-tight flex items-center gap-1"><iconify-icon icon="lucide:shield-check" width="16"></iconify-icon> DEKRA</span>
<span className="font-semibold text-sm tracking-tight flex items-center gap-1"><iconify-icon icon="lucide:check-circle" width="16"></iconify-icon> TÜV RHEINLAND</span>
<span className="font-semibold text-sm tracking-tight flex items-center gap-1"><iconify-icon icon="lucide:car" width="16"></iconify-icon> ADAC</span>
</div>
</div>
<div className="relative hidden lg:block">

<div className="aspect-square rounded-[2.5rem] overflow-hidden relative shadow-2xl border bg-stone-900 shadow-stone-800 border-stone-900">
<img alt="Driving in Berlin" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 backdrop-blur p-4 rounded-2xl shadow-lg border max-w-xs bg-black/90 border-black/50">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-red-900 text-red-300">
<iconify-icon icon="lucide:trophy" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-100">Hohe Bestehensquote</p>
<p className="text-xs text-stone-500">Wir bereiten dich optimal vor.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y pt-12 pb-12 bg-stone-950 border-stone-800" id="angebot">
<div className="max-w-4xl mx-auto px-6">
<div className="overflow-hidden md:p-10 shadow-stone-800/50 bg-black border-red-600 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl">

<div className="-top-24 -right-24 opacity-60 w-64 h-64 rounded-full absolute blur-3xl bg-orange-950"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div className="space-y-4">
<div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
<iconify-icon icon="lucide:flame" width="14"></iconify-icon>
                            Aktuelles Angebot
                        </div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-100">
                            Theorieunterricht in nur 7 Terminen!
                        </h2>
<p className="max-w-lg text-stone-400">
                            Starte jetzt deinen Weg zum Führerschein – schnell, modern und ohne Stress. Der nächste Intensivkurs beginnt bald.
                        </p>
<div className="flex flex-wrap items-center gap-4 mt-2">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-stone-900 text-stone-300">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
                                Start: 14. Februar 2026
                            </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-orange-950 text-orange-300">
<iconify-icon icon="lucide:clock" width="16"></iconify-icon>
                                Begrenzte Plätze
                            </div>
</div>
</div>
<div className="flex-shrink-0">
<a className="block md:w-auto transition-all hover:bg-stone-200 shadow-stone-100/20 font-medium text-black text-center bg-stone-100 w-full rounded-xl pt-3 pr-8 pb-3 pl-8 shadow-lg" href="#kontakt">
                            Jetzt Platz sichern
                        </a>
<p className="text-xs text-center mt-2 text-stone-600">Früh anmelden lohnt sich.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 bg-black">
<div className="grid md:grid-cols-2 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="order-2 md:order-1">
<div className="relative">

<div className="grid grid-cols-2 gap-4">
<img alt="Fahrlehrer im Auto" className="rounded-2xl object-cover h-64 w-full shadow-lg border border-stone-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de41e35d-e10e-4127-a983-36a7fadf2c73_800w.jpg"/>
<img alt="Fahrschule Details" className="rounded-2xl object-cover h-64 w-full shadow-lg border translate-y-8 border-stone-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/169b43ba-ef63-4a5c-a98a-51f6b5e2fe23_800w.png" style={{}}/>
</div>

<div className="absolute -bottom-6 -left-6 p-4 rounded-xl shadow-xl border max-w-[200px] bg-black border-stone-900">
<p className="font-semibold text-lg text-stone-100">Mikes Fahrschule</p>
<p className="text-sm text-stone-500">Seit vielen Jahren in Prenzlauer Berg.</p>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-stone-100">
                    Willkommen bei Mikes Fahrschule. <br/>
<span className="text-stone-500">Persönlich &amp; Kompetent.</span>
</h2>
<div className="prose prose-stone mb-8 leading-relaxed text-stone-400">
<p className="mb-4">
                        Wir sind keine Fahrschulkette, sondern ein echtes Berliner Original. In unserer Fahrschule in der Jablonskistraße herrscht eine freundliche, familiäre Atmosphäre.
                    </p>
<p className="">
                        Mike und das Team wissen, dass aller Anfang schwer ist. Deshalb setzen wir auf Geduld, moderne Unterrichtsmethoden und Fahrzeuge, die Spaß machen. Unser Ziel ist es nicht nur, dass du die Prüfung bestehst, sondern dass du dich danach sicher im Straßenverkehr fühlst.
                    </p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-orange-400" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-stone-300">Individuelle Betreuung statt Massenabfertigung</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-orange-400" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-stone-300">Entspannte Lernatmosphäre ohne Druck</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-orange-400" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-stone-300">Modernste Fahrzeuge &amp; Medien</span>
</li>
</ul>
</div>
</div>
</section>

<section className="pt-24 pb-16 bg-stone-950" id="klassen">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="font-medium tracking-wide text-sm uppercase mb-2 block text-orange-400">Ausbildung</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-stone-100">Führerscheinklassen</h2>
<p className="text-stone-500 text-lg">
                    Ob Auto, Motorrad oder Anhänger – wir bieten dir die passende Ausbildung für deine Mobilität.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-2xl p-8 border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-black border-stone-800">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors bg-stone-900 text-stone-100">
<iconify-icon icon="lucide:car" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-100">Klasse B (PKW)</h3>
<p className="text-stone-500 mb-4 text-sm leading-relaxed">
                        Der Klassiker. Lerne sicher Autofahren im dichten Berliner Stadtverkehr. Schaltgetriebe oder Automatik.
                    </p>
<div className="text-xs font-medium uppercase tracking-wide text-stone-600">Ab 18 Jahren</div>
</div>

<div className="group rounded-2xl p-8 border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-black border-stone-800">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors bg-stone-900 text-stone-100">
<iconify-icon icon="lucide:users" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-100">Begleitetes Fahren (BF17)</h3>
<p className="text-stone-500 mb-4 text-sm leading-relaxed">
                        Starte früher durch! Mit 17 Jahren darfst du bereits in Begleitung fahren und sammelst wertvolle Erfahrung.
                    </p>
<div className="text-xs font-medium uppercase tracking-wide text-stone-600">Start ab 16 ½</div>
</div>

<div className="group rounded-2xl p-8 border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-black border-stone-800">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors bg-stone-900 text-stone-100">
<iconify-icon icon="lucide:bike" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-100">Klasse A1 &amp; A</h3>
<p className="text-stone-500 mb-4 text-sm leading-relaxed">
                        Freiheit auf zwei Rädern. Vom Leichtkraftrad (125er) bis zur offenen Klasse A bilden wir dich sicher aus.
                    </p>
<div className="text-xs font-medium uppercase tracking-wide text-stone-600">Bike-to-Bike Ausbildung</div>
</div>

<div className="group rounded-2xl p-8 border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-black border-stone-800">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors bg-stone-900 text-stone-100">
<iconify-icon icon="lucide:container" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-100">Anhänger (BE / B96)</h3>
<p className="text-stone-500 mb-4 text-sm leading-relaxed">
                        Ideal für Wohnwagen oder Handwerk. Wir zeigen dir, wie man auch große Gespanne sicher rangiert.
                    </p>
<div className="text-xs font-medium uppercase tracking-wide text-stone-600">Praxisorientiert</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 relative border-t border-stone-900" id="seminare">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-orange-900/10 blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6">

<div className="text-center max-w-2xl mx-auto mb-16">
<span className="font-medium tracking-wide text-sm uppercase mb-2 block text-orange-400">Spezialkurse</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-stone-100">Seminare &amp; Kurse</h2>
<p className="text-stone-500 text-lg">
                    Bei Mikes Fahrschule bieten wir verschiedene Seminare und Kurse an – verständlich erklärt, professionell durchgeführt und in entspannter Atmosphäre.
                </p>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-20">

<div className="group rounded-2xl p-8 border bg-black border-stone-800 hover:border-stone-700 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-stone-900 text-orange-400 group-hover:bg-orange-950 transition-colors">
<iconify-icon icon="solar:shield-warning-linear" width="26"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-100">ASF – Aufbauseminar</h3>
</div>
<div className="space-y-4">
<p className="text-stone-400 text-sm leading-relaxed">
                            Pflichtseminar nach Auffälligkeiten in der Probezeit (A- oder B-Verstoß). Die Teilnahme verhindert den Entzug der Fahrerlaubnis. Beachte: Die Probezeit verlängert sich dadurch einmalig um 2 Jahre.
                        </p>
<div className="h-px bg-stone-900 w-full my-4"></div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-stone-300">
<iconify-icon className="shrink-0 mt-0.5 text-stone-500" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span>Gruppengröße 6–12 Personen</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-300">
<iconify-icon className="shrink-0 mt-0.5 text-stone-500" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span>4 Sitzungen à 135 Minuten</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-300">
<iconify-icon className="shrink-0 mt-0.5 text-stone-500" icon="solar:steering-wheel-linear" width="18"></iconify-icon>
<span>1 Beobachtungsfahrt (45 Min.)</span>
</li>
</ul>
</div>
</div>

<div className="group rounded-2xl p-8 border bg-black border-stone-800 hover:border-stone-700 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-stone-900 text-orange-400 group-hover:bg-orange-950 transition-colors">
<iconify-icon icon="solar:verified-check-linear" width="26"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-100">Fahreignungsseminar (FES)</h3>
</div>
<div className="space-y-4">
<p className="text-stone-400 text-sm leading-relaxed">
                            Punkteabbau leicht gemacht. Bei einem Stand von 1 bis 5 Punkten kannst du durch freiwillige Teilnahme 1 Punkt abbauen (alle 5 Jahre möglich).
                        </p>
<div className="h-px bg-stone-900 w-full my-4"></div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-stone-300">
<iconify-icon className="shrink-0 mt-0.5 text-stone-500" icon="solar:black-board-linear" width="18"></iconify-icon>
<span>2 verkehrspädagogische Sitzungen (je 90 Min.)</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-300">
<iconify-icon className="shrink-0 mt-0.5 text-stone-500" icon="solar:chat-round-line-linear" width="18"></iconify-icon>
<span>2 verkehrspsychologische Sitzungen (je 75 Min.)</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-300">
<iconify-icon className="shrink-0 mt-0.5 text-stone-500" icon="solar:user-check-linear" width="18"></iconify-icon>
<span>Einzel- oder Kleingruppentermine</span>
</li>
</ul>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto">
<h3 className="text-lg font-medium text-stone-100 mb-6 flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="solar:calendar-linear"></iconify-icon>
                    Bevorstehende Seminare
                </h3>
<div className="rounded-2xl border overflow-hidden bg-black border-stone-800 divide-y divide-stone-800">

<div className="p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-stone-900/50 transition-colors">
<div className="sm:w-32 shrink-0">
<div className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-stone-900 text-orange-400 border border-stone-800">
                                FES
                            </div>
</div>
<div className="flex-grow">
<h4 className="font-medium text-stone-200">Fahreignungsseminar (Punkteabbau)</h4>
<div className="flex flex-wrap items-center gap-x-6 gap-y-1 mt-1 text-sm text-stone-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Mi., 11. Februar 2026 – 18:00 Uhr</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Jablonskistraße 20</span>
</div>
</div>
<div className="shrink-0 pt-2 sm:pt-0">
<a className="text-sm font-medium text-stone-300 hover:text-white flex items-center gap-1 group" href="#kontakt">
                                Anmelden <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-stone-900/50 transition-colors">
<div className="sm:w-32 shrink-0">
<div className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-stone-900 text-orange-400 border border-stone-800">
                                ASF
                            </div>
</div>
<div className="flex-grow">
<h4 className="font-medium text-stone-200">Aufbauseminar für Fahranfänger</h4>
<div className="flex flex-wrap items-center gap-x-6 gap-y-1 mt-1 text-sm text-stone-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Di., 03. Februar 2026 – 18:00 Uhr</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Jablonskistraße 20</span>
</div>
</div>
<div className="shrink-0 pt-2 sm:pt-0">
<a className="text-sm font-medium text-stone-300 hover:text-white flex items-center gap-1 group" href="#kontakt">
                                Anmelden <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-stone-900/50 transition-colors">
<div className="sm:w-32 shrink-0">
<div className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-stone-900 text-orange-400 border border-stone-800">
                                THEORIE
                            </div>
</div>
<div className="flex-grow">
<h4 className="font-medium text-stone-200">7-Tage Theorie Intensivkurs</h4>
<div className="flex flex-wrap items-center gap-x-6 gap-y-1 mt-1 text-sm text-stone-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon> Start: Sa., 14. Februar 2026</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Jablonskistraße 20</span>
</div>
</div>
<div className="shrink-0 pt-2 sm:pt-0">
<a className="text-sm font-medium text-stone-300 hover:text-white flex items-center gap-1 group" href="#kontakt">
                                Anmelden <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all shadow-lg bg-orange-400 text-black hover:bg-orange-300 shadow-orange-900/20" href="#kontakt">
                        Jetzt informieren und Platz sichern
                    </a>
<p className="mt-3 text-xs text-stone-600">Alle Informationen zu Terminen und Anmeldung erhalten Sie direkt bei uns.</p>
</div>
</div>
</div>
</section>

<section className="bg-black pt-24 pb-24 relative" id="standort">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-stone-100">
                        Mitten im Kiez.<br/>
                        Zentral in Berlin.
                    </h2>
<p className="text-lg mb-8 leading-relaxed text-stone-400">
                        Unsere Fahrschule befindet sich im Herzen von Berlin – im beliebten Prenzlauer Berg. Die Jablonskistraße 20 ist der ideale Startpunkt für deine Fahrstunden.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg border bg-stone-950 text-stone-300 border-stone-900">
<iconify-icon icon="lucide:map-pin" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-stone-100">Top Anbindung</h4>
<p className="text-stone-500 text-sm mt-1">
                                    Du erreichst uns bequem mit der Tram (M10, M2) und anderen öffentlichen Verkehrsmitteln. Perfekt für Schüler und Berufstätige.
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg border bg-stone-950 text-stone-300 border-stone-900">
<iconify-icon icon="lucide:building-2" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-stone-100">Echte Fahrschule</h4>
<p className="text-stone-500 text-sm mt-1">
                                    Kein anonymes Online-Portal. Ein echter Ort zum Lernen mit persönlichem Ansprechpartner.
                                </p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 transition-colors font-medium hover:text-orange-300 text-orange-400" href="https://maps.google.com/?q=Jablonskistraße+20,+10405+Berlin" target="_blank">
<iconify-icon icon="lucide:map" width="18"></iconify-icon>
                        Route planen auf Google Maps
                    </a>
</div>

<div className="grid grid-cols-2 gap-4 auto-rows-[200px] gap-x-4 gap-y-4">

<div className="col-span-2 relative group overflow-hidden rounded-2xl">
</div>


</div>
</div>
<div className="text-center mt-16">
<span className="inline-block px-4 py-2 rounded-full font-medium text-sm bg-stone-900 text-stone-400">
                    Echte Fahrschule. Echter Standort. Echte Erfahrungen.
                </span>
</div>
</div>
</section>

<section className="py-16 border-y bg-stone-100 text-black border-stone-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold mb-4">Preise &amp; Kosten</h2>
<p className="mb-8 max-w-2xl mx-auto leading-relaxed text-stone-600">
                Die Kosten für einen Führerschein hängen stark von deinen individuellen Vorkenntnissen und dem Lernfortschritt ab. Wir setzen auf Fairness und Transparenz: Du zahlst nur das, was du wirklich brauchst.
            </p>
<div className="inline-block border rounded-xl p-6 border-stone-300 bg-stone-200">
<p className="font-medium text-stone-800">
                    Kontaktiere uns für ein persönliches, unverbindliches Angebot.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-black" id="kontakt">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-stone-100">
                        Bereit durchzustarten?
                    </h2>
<p className="mb-8 text-lg text-stone-400">
                        Komm einfach während der Öffnungszeiten vorbei, ruf uns an oder schreib uns eine Nachricht. Wir freuen uns auf dich!
                    </p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-orange-950 text-orange-400">
<iconify-icon icon="lucide:map-pin" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-stone-100">Adresse</h4>
<p className="text-stone-500">
                                    Mikes Fahrschule<br/>
                                    Jablonskistraße 20<br/>
                                    10405 Berlin (Prenzlauer Berg)
                                </p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-orange-950 text-orange-400">
<iconify-icon icon="lucide:phone" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-stone-100">Kontakt</h4>
<a className="block text-stone-500 transition-colors hover:text-orange-400" href="tel:03012345678">030 / 42 10 88 50</a>
<a className="block text-stone-500 transition-colors hover:text-orange-400" href="mailto:info@mikes-fahrschule.de">info@mikes-fahrschule.de</a>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-orange-950 text-orange-400">
<iconify-icon icon="lucide:clock" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-stone-100">Bürozeiten</h4>
<div className="grid grid-cols-2 gap-x-8 text-stone-500 text-sm mt-1">
<span>Mo - Do:</span>
<span>15:00 - 18:00 Uhr</span>
<span>Fr:</span>
<span>nach Vereinbarung</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-8 md:p-10 rounded-3xl border shadow-sm bg-stone-950 border-stone-800">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-sm font-medium text-stone-300">Vorname</label>
<input className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm border-stone-800 bg-black" placeholder="Max" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-stone-300">Nachname</label>
<input className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm border-stone-800 bg-black" placeholder="Mustermann" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-stone-300">Email Adresse</label>
<input className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm border-stone-800 bg-black" placeholder="max@beispiel.de" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-stone-300">Ich interessiere mich für</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm appearance-none border-stone-800 bg-black text-stone-400">
<option>Führerschein Klasse B</option>
<option>Theorie-Intensivkurs (7 Tage)</option>
<option>Motorrad (A1/A)</option>
<option>BF17 (Begleitetes Fahren)</option>
<option>Allgemeine Anfrage</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-600" icon="lucide:chevron-down"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-stone-300">Nachricht</label>
<textarea className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm resize-none border-stone-800 bg-black" placeholder="Deine Nachricht an uns..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 font-medium rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-300 text-black shadow-orange-800" type="button">
                            Nachricht absenden
                            <iconify-icon icon="lucide:send" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-stone-950 border-stone-800">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4 group">
<div className="rounded-lg p-1 bg-orange-400 text-black">
<iconify-icon height="16" icon="lucide:car-front" width="16"></iconify-icon>
</div>
<span className="font-bold tracking-tight text-stone-100">MIKES FAHRSCHULE.</span>
</div>
<p className="text-sm text-stone-500 max-w-xs leading-relaxed">
                        Deine moderne Fahrschule in Berlin Prenzlauer Berg. Wir bilden dich sicher und kompetent aus.
                    </p>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm text-stone-100">Ausbildung</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="transition-colors hover:text-orange-400" href="#">PKW Klasse B</a></li>
<li><a className="transition-colors hover:text-orange-400" href="#">Motorrad A/A1</a></li>
<li><a className="transition-colors hover:text-orange-400" href="#">BF17</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm text-stone-100">Rechtliches</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="transition-colors hover:text-orange-400" href="#">Impressum</a></li>
<li><a className="transition-colors hover:text-orange-400" href="#">Datenschutz</a></li>
<li><a className="transition-colors hover:text-orange-400" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-800 text-stone-600">
<p>© 2024 Mikes Fahrschule Berlin. Alle Rechte vorbehalten.</p>
<p>Made for Berlin.</p>
</div>
</div>
</footer>

    </>
  );
}
