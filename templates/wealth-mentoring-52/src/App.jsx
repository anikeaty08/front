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
      

<header className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-medium tracking-tighter text-lg">FFH</div>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#booking">
                Gespräch buchen
            </a>
</div>
</header>

<section className="pt-40 pb-24 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neutral-200/30 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/50 px-3 py-1 text-xs font-medium text-neutral-600 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                FINALLY FINANCIALLY HOME™
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6">
                Premium 1:1 Vermögensstruktur für Frauen mit 100.000 €+
            </h1>
<p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Geld zu haben verändert etwas. Zu wissen, was es für DICH tun soll, verändert alles.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white rounded-full px-8 py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors w-full sm:w-auto shadow-sm" href="#booking">
                    Kennenlern-Gespräch buchen
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-xs text-neutral-400 font-light px-4">8 Wochen private Begleitung</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-neutral-100">
<div className="max-w-3xl mx-auto">
<div className="space-y-8 text-lg font-light text-neutral-600 leading-relaxed">
<p className="text-2xl font-medium text-neutral-900 tracking-tight leading-snug">
                    Dieser Raum ist für Frauen, die plötzlich Vermögen haben… und merken:
                </p>
<div className="pl-6 border-l border-neutral-200 space-y-4">
<p>Es geht nicht mehr um „mehr Geld“. Sondern um richtige Entscheidungen.</p>
<p>Nicht mehr Input. Sondern Überblick.</p>
<p>Nicht mehr Optionen. Keine tausend Meinungen. Kein weiteres Produkt.</p>
<p className="font-medium text-neutral-900">Sondern Klarheit. Struktur.</p>
<p>Und das Gefühl: Endlich ankommen. Mit deinem Geld.</p>
</div>
<p className="mt-12">
                    Für Frauen, die genau an diesem Punkt stehen… zwischen Möglichkeiten und Unsicherheit. Zwischen „Ich könnte alles“ und „Was ist jetzt richtig?“
                </p>
<p className="text-neutral-900 font-medium">
                    Ich begleite dich dabei, dein Geld so zu führen, dass es sich klar, ruhig und richtig anfühlt. Und du weißt:
                </p>
<ul className="space-y-3 mt-6">
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:arrow-right-linear"></iconify-icon>
                        was dein Geld für dein Leben tun soll
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:arrow-right-linear"></iconify-icon>
                        was du dir heute wirklich erlauben kannst
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:arrow-right-linear"></iconify-icon>
                        was wachsen darf
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:arrow-right-linear"></iconify-icon>
                        was dich langfristig trägt
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:arrow-right-linear"></iconify-icon>
                        und was du vielleicht eines Tages weitergeben willst
                    </li>
</ul>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-neutral-100 text-sm font-light text-neutral-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-neutral-300" icon="solar:close-circle-linear"></iconify-icon>
                    Keine Anlageberatung.
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-neutral-300" icon="solar:close-circle-linear"></iconify-icon>
                    Keine Produktvermittlung.
                </div>
<div className="flex items-center gap-2 font-medium text-neutral-900">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
                    Klarheit &amp; Struktur.
                </div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
                    Für Frauen mit Vermögen
                </h2>
<p className="text-lg text-neutral-500 font-light">Die mehr wollen als „irgendeine Anlage“.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100">
<div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 mb-8 bg-neutral-100 px-3 py-1 rounded-full">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                        Dieses Mentoring ist für dich, wenn:
                    </div>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-neutral-600 font-light leading-relaxed">Du 100.000 €+ auf dem Konto hast (Erbe, Hausverkauf, Abfindung, Unternehmensverkauf, Scheidung, Rücklagen)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-neutral-600 font-light leading-relaxed">du merkst, dass Geld plötzlich Verantwortung bedeutet</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-neutral-600 font-light leading-relaxed">Du Entscheidungen nicht mehr aufschieben willst</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-neutral-600 font-light leading-relaxed">du verstehen willst, was dein Vermögen für dein Leben tun kann</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-neutral-600 font-light leading-relaxed">du Klarheit willst – nicht nur Rendite</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-neutral-600 font-light leading-relaxed">du dein Geld bewusst nutzen, sichern oder weitergeben möchtest</span>
</li>
</ul>
</div>

<div className="p-8">
<div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 mb-8 px-3 py-1">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
                        Nicht für dich, wenn:
                    </div>
<ul className="space-y-5">
<li className="flex items-start gap-3 opacity-60">
<iconify-icon className="text-neutral-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-neutral-500 font-light leading-relaxed">Du nur eine schnelle Rendite willst</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<iconify-icon className="text-neutral-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-neutral-500 font-light leading-relaxed">Du Geldanlagenvermittlung erwartest</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<iconify-icon className="text-neutral-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-neutral-500 font-light leading-relaxed">Du Verantwortung abgeben möchtest</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<iconify-icon className="text-neutral-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-neutral-500 font-light leading-relaxed">du möchtest, dass jemand für dich entscheidet</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<iconify-icon className="text-neutral-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-neutral-500 font-light leading-relaxed">du einfach nur ein paar Tipps hören willst</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white selection:bg-neutral-700 selection:text-white">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
                Plötzlich Vermögen. <br/>
<span className="text-neutral-400">Und niemand erklärt dir, wie man damit lebt.</span>
</h2>
<div className="space-y-6 text-neutral-300 font-light text-lg leading-relaxed">
<p>Über Vermögensaufbau wird viel gesprochen. Aber kaum jemand spricht darüber, was passiert, wenn es plötzlich da ist. 100.000 €. 300.000 €. Oder mehr.</p>
<p className="text-white font-medium">Nicht das Geld wird zum Problem. Sondern die Entscheidungen.</p>
<p>Mit dem Geld kommen Fragen:</p>
<div className="grid sm:grid-cols-2 gap-4 text-base bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700/50">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>Soll ich investieren?</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>Soll ich tilgen?</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>Soll ich es einfach liegen lassen?</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>Wie viel darf ich ausgeben?</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>Wie viel sollte bleiben?</div>
<div className="flex items-center gap-2 text-white"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Und was, wenn ich falsch entscheide?</div>
</div>
<div className="pt-8 border-t border-neutral-800 mt-8">
<p className="text-neutral-400 text-base">Das Problem ist nicht dein Wissen.</p>
<p className="text-2xl font-medium text-white mt-2 tracking-tight">Das Problem ist: Du hast keine Orientierung.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-20 text-center">
                In 3 Schritten zu deinem Financial Home
            </h2>
<div className="space-y-16">

<div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
<div className="text-6xl md:text-8xl font-light tracking-tighter text-neutral-100 shrink-0 select-none">01</div>
<div className="pt-2 md:pt-6">
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-4">Klarheit</h3>
<p className="text-neutral-500 font-light leading-relaxed mb-4">
                            Du siehst dein gesamtes Vermögen. Nicht nur Zahlen. Sondern Bedeutung.
                        </p>
<p className="text-neutral-600 font-light">
                            Du weißt, was wirklich da ist – und was es für dein Leben heißt.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
<div className="text-6xl md:text-8xl font-light tracking-tighter text-neutral-100 shrink-0 select-none">02</div>
<div className="pt-2 md:pt-6">
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-4">Struktur</h3>
<p className="text-neutral-500 font-light leading-relaxed mb-4">
                            Dein Geld bekommt Ordnung. Du weißt, was wofür da ist.
                        </p>
<div className="flex gap-3 mb-4">
<span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs text-neutral-600">Sicherheit</span>
<span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs text-neutral-600">Wachstum</span>
<span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs text-neutral-600">Freiheit</span>
</div>
<p className="text-neutral-600 font-light">
                            Kein Chaos mehr. Keine widersprüchlichen Entscheidungen.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
<div className="text-6xl md:text-8xl font-light tracking-tighter text-neutral-100 shrink-0 select-none">03</div>
<div className="pt-2 md:pt-6">
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-4">Lebensgestaltung</h3>
<p className="text-neutral-500 font-light leading-relaxed mb-4">
                            Du entscheidest bewusst. Und genießt, ohne dich zu hinterfragen. Du weißt:
                        </p>
<ul className="space-y-2 text-neutral-600 font-light mb-4">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-400 rounded-full"></div>was du dir leisten kannst.</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-400 rounded-full"></div>was bleiben sollte.</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-400 rounded-full"></div>wie du entscheidest.</li>
</ul>
<p className="text-neutral-900 font-medium">
                            Dein Geld passt zu deinem Leben. Nicht umgekehrt.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-neutral-100">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">Das Ergebnis</h2>
<div className="space-y-6 text-neutral-500 font-light leading-relaxed">
<p className="text-lg text-neutral-900 font-medium">Du bist klar.</p>
<p>Nicht mehr getrieben von Gedanken.<br/>Nicht mehr im Warten.<br/>Nicht mehr im Zweifel.</p>
<div className="pl-4 border-l-2 border-neutral-100 space-y-4">
<p>Dieses ständige Gefühl: „Ich müsste eigentlich etwas tun…“ ist weg.</p>
<p>Auch der Gedanke: „Mein Geld liegt einfach nur da“ verliert seine Schwere.</p>
</div>
<p>Du weißt, was du hast, was du willst, und was du tust.</p>
<p className="text-xl font-medium text-neutral-900 mt-8 tracking-tight">
                        Und genau dann entsteht das, wonach die meisten eigentlich suchen:<br/>Ruhe.
                    </p>
</div>
</div>

<div>
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">Was sich konkret für dich verändert</h2>
<div className="bg-[#FAFAFA] rounded-2xl p-8 border border-neutral-100 h-full">
<p className="text-neutral-900 font-medium mb-4">Du weißt,</p>
<ul className="space-y-3 text-neutral-600 font-light mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:check-circle-linear"></iconify-icon>
                            wie dein Vermögen aufgebaut ist.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:check-circle-linear"></iconify-icon>
                            wie viel Sicherheit du brauchst.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:check-circle-linear"></iconify-icon>
                            was wachsen darf.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:check-circle-linear"></iconify-icon>
                            und was du dir leisten kannst.
                        </li>
</ul>
<div className="pt-6 border-t border-neutral-200 space-y-2">
<p className="text-neutral-900 font-medium">Du triffst Entscheidungen. Selbstbewusst.</p>
<p className="text-neutral-500 font-light">Ohne dich auf andere verlassen zu müssen.</p>
<p className="text-neutral-900 font-medium pt-2">Du führst dein Vermögen. Nicht umgekehrt.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<div className="flex items-center gap-6 mb-12">
<div className="w-20 h-20 rounded-full bg-neutral-900 text-white flex items-center justify-center text-2xl font-medium tracking-tighter shadow-sm">
                    MR
                </div>
<div>
<div className="text-sm font-medium text-neutral-400 mb-1 tracking-wide uppercase">Über mich</div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">Manuela Renner</h2>
<p className="text-neutral-500 font-light mt-1">Betriebswirtin. Investorin. Mentorin.</p>
</div>
</div>
<div className="prose prose-neutral prose-lg max-w-none font-light text-neutral-600 leading-relaxed">
<p>Seit 2006 bewege ich mich in der Finanzwelt. Nicht nur beratend – sondern selbst investierend. Ich halte:</p>
<div className="flex flex-wrap gap-3 my-6">
<span className="px-4 py-2 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:home-smile-linear"></iconify-icon> 12 vermietete Objekte
                    </span>
<span className="px-4 py-2 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:chart-up-linear"></iconify-icon> Aktien &amp; ETFs
                    </span>
<span className="px-4 py-2 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:safe-circle-linear"></iconify-icon> Sachwerte wie Gold
                    </span>
</div>
<p>Ich habe Vermögen nicht nur begleitet. Ich habe es selbst aufgebaut.</p>
<p className="mt-6">Und ich weiß, wie es ist, plötzlich viel Geld auf dem Konto zu haben. Nach einem Wohnungsverkauf hatte ich selbst über 100.000 € Cash auf dem Konto. Und genau da beginnt etwas, worüber kaum jemand spricht:</p>
<p className="text-xl text-neutral-900 font-medium tracking-tight my-8 border-l-2 border-neutral-900 pl-6 py-2">
                    Viel Geld fühlt sich anders an.<br/>
<span className="text-neutral-500 font-light text-lg">300.000 € sind nicht dasselbe wie 300 € im Monat anzulegen.</span>
</p>
<p>Plötzlich haben Entscheidungen Gewicht. 10 % sind nicht mehr „Marktschwankung“. Sondern 30.000 €.<br/>Und das spürst du. Nicht im Kopf. Sondern im Gefühl.</p>
<p className="mt-8">Genau deshalb arbeite ich nicht mit Trends. Nicht mit dem, was gerade “alle” machen. Sondern mit Klarheit. Im Kopf – und im Gefühl.</p>
<p>Denn Geld zu haben ist der Anfang. Zu wissen, was es für dein Leben tun soll, ist der Unterschied.</p>
<p className="mt-8 font-medium text-neutral-900">
                    Ich begleite Frauen, die ihr Vermögen verstehen wollen – statt nur hoffen.<br/>
                    Damit ihr Geld bleibt. Wächst. Und sich klar, ruhig und richtig anfühlt.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-neutral-100" id="booking">
<div className="max-w-xl mx-auto">
<div className="rounded-3xl border border-neutral-200 p-8 md:p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-[#FAFAFA]/50">
<div className="text-xs font-medium tracking-widest text-neutral-400 uppercase mb-4">Das Mentoring</div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">FINALLY FINANCIALLY HOME™</h2>
<p className="text-neutral-500 font-light mb-10">
                    8 Wochen zu Klarheit, Struktur und Ruhe in deinem Vermögen.
                </p>
<div className="mb-10">
<div className="text-sm text-neutral-400 mb-1">Investition</div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">15.000 €</div>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-neutral-200 text-sm text-neutral-600 mb-10">
<iconify-icon className="text-neutral-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                    Ich begleite maximal 3 Frauen gleichzeitig.
                </div>
<a className="flex items-center justify-center gap-2 w-full bg-neutral-900 text-white rounded-full px-8 py-4 text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm" href="#">
                    Kennenlern-Gespräch buchen
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-12 text-center">Häufige Fragen</h2>
<div className="space-y-2">
<details className="group bg-white rounded-2xl border border-neutral-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium tracking-tight text-neutral-900 select-none">
                        Ist das Anlageberatung?
                        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
<iconify-icon className="text-neutral-400 transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-500 font-light leading-relaxed">
                        Nein. Ich verkaufe oder vermittle keine Finanzprodukte. Du lernst Struktur und Entscheidungslogik.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-neutral-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium tracking-tight text-neutral-900 select-none">
                        Brauche ich Vorkenntnisse?
                        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
<iconify-icon className="text-neutral-400 transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-500 font-light leading-relaxed">
                        Nein. Du brauchst nur die Bereitschaft, Verantwortung zu übernehmen.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-neutral-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium tracking-tight text-neutral-900 select-none">
                        Was, wenn ich unsicher bin?
                        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
<iconify-icon className="text-neutral-400 transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-500 font-light leading-relaxed">
                        Dafür ist das Kennenlern-Gespräch da. Wir finden gemeinsam heraus, ob dieser Raum der richtige für dich ist.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white pt-24 pb-12 px-6 text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                Mehr Geld verändert deinen Kontostand.<br/>
<span className="text-neutral-400">Klarheit verändert, wie es sich anfühlt.</span>
</h2>
<div className="font-medium tracking-widest text-sm text-neutral-500 mt-12 mb-8">FINALLY FINANCIALLY HOME™</div>
<a className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 rounded-full px-8 py-3.5 text-sm font-medium hover:bg-neutral-100 transition-colors mb-24" href="#booking">
                Gespräch buchen
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-800 text-xs font-light text-neutral-500">
<div className="font-medium tracking-tighter text-base text-neutral-400">FFH</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
</div>
<div>© 2024 Manuela Renner</div>
</div>
</div>
</footer>

    </>
  );
}
