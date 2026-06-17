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



    // Render lucide icons
    window.lucide && lucide.createIcons();

    // Print
    document.getElementById('printBtn')?.addEventListener('click', () => window.print());

    // Photo: if you have a direct URL of the provided image, set it here:
    // Example: const providedPhotoURL = 'https://...';
    const providedPhotoURL = ''; // set programmatically if available
    const imgEl = document.getElementById('profilePhoto');
    if (providedPhotoURL) imgEl.src = providedPhotoURL;

    // Change photo via click
    const inputEl = document.getElementById('photoInput');
    const changeBtn = document.getElementById('changePhotoBtn');

    function loadFileToImg(file) {
      const reader = new FileReader();
      reader.onload = e => { imgEl.src = e.target.result; };
      reader.readAsDataURL(file);
    }

    imgEl.addEventListener('click', () => inputEl.click());
    changeBtn.addEventListener('click', () => inputEl.click());
    inputEl.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) loadFileToImg(file);
    });

    // Drag & drop (optional)
    imgEl.addEventListener('dragover', (e) => {
      e.preventDefault();
      imgEl.classList.add('ring-2', 'ring-neutral-400');
    });
    imgEl.addEventListener('dragleave', () => {
      imgEl.classList.remove('ring-2', 'ring-neutral-400');
    });
    imgEl.addEventListener('drop', (e) => {
      e.preventDefault();
      imgEl.classList.remove('ring-2', 'ring-neutral-400');
      const file = e.dataTransfer.files?.[0];
      if (file) loadFileToImg(file);
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
      
<main className="max-w-4xl mx-auto p-6 md:p-10">

<div className="flex items-center justify-end gap-2 mb-4 md:mb-6 print:hidden">
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-900 transition" id="printBtn">
<i className="w-4 h-4" data-lucide="printer"></i>
<span className="text-sm font-medium">Drucken / PDF</span>
</button>
</div>

<section className="bg-white rounded-2xl shadow-sm ring-1 ring-neutral-200 overflow-hidden">

<div className="relative p-6 md:p-8 bg-gradient-to-br from-neutral-50 to-white">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">

<div className="md:col-span-1">
<div className="group relative">
<img alt="Profilfoto" className="w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-neutral-200 bg-neutral-100" id="profilePhoto" onerror="this.src='data:image/svg+xml;utf8,&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;600&quot; height=&quot;750&quot; viewBox=&quot;0 0 600 750&quot;&gt;&lt;rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;%23f3f4f6&quot;/&gt;&lt;circle cx=&quot;300&quot; cy=&quot;270&quot; r=&quot;120&quot; fill=&quot;%23e5e7eb&quot;/&gt;&lt;rect x=&quot;120&quot; y=&quot;450&quot; width=&quot;360&quot; height=&quot;180&quot; rx=&quot;24&quot; fill=&quot;%23e5e7eb&quot;/&gt;&lt;/svg&gt;'" src=""/>
<input accept="image/*" className="hidden" id="photoInput" type="file"/>
<button className="print:hidden absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/90 backdrop-blur text-neutral-700 ring-1 ring-neutral-200 hover:bg-white transition" id="changePhotoBtn" type="button">
<i className="w-4 h-4" data-lucide="image-plus"></i>
<span className="text-xs font-medium">Foto ändern</span>
</button>
</div>
</div>

<div className="md:col-span-2">
<h1 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">
              Büşra Büngül
            </h1>
<p className="mt-2 text-lg md:text-xl tracking-tight font-medium text-neutral-700">
              Medizinische Laboratoriumstechnikerin &amp; Pflegeassistenz
            </p>

<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
<div className="flex items-center gap-2 text-neutral-700">
<i className="w-4 h-4 text-neutral-500" data-lucide="map-pin"></i>
<span>Sofia, Bulgarien</span>
</div>
<a className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900" href="tel:+359877103840">
<i className="w-4 h-4 text-neutral-500" data-lucide="phone"></i>
<span>+359 877 103 840</span>
</a>
<a className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900" href="mailto:busra_0057@hotmail.com">
<i className="w-4 h-4 text-neutral-500" data-lucide="mail"></i>
<span>busra_0057@hotmail.com</span>
</a>
<div className="flex items-center gap-2 text-neutral-700">
<i className="w-4 h-4 text-neutral-500" data-lucide="badge-check"></i>
<span>Bulgarische langfristige Aufenthaltserlaubnis</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 md:p-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<aside className="md:col-span-1">

<div>
<h2 className="text-xl tracking-tight font-semibold text-neutral-900">Profil</h2>
<p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
                Ich bin 29 Jahre alt, komme aus der Türkei und verfüge über insgesamt 2,5 Jahre Erfahrung im Gesundheitswesen:
                1,5 Jahre in der Türkei als Medizinische Laboratoriumstechnikerin sowie 1 Jahr in Dublin/Irland als Pflegeassistentin.
                Aktuell arbeite ich in Sofia (Bulgarien). Aufgrund meines türkischen Passes bin ich für eine Tätigkeit in Deutschland
                visumspflichtig und suche eine Arbeitgeberin/einen Arbeitgeber, die/der den Prozess unterstützt.
              </p>
</div>

<div className="mt-8">
<h2 className="text-xl tracking-tight font-semibold text-neutral-900">Sprachen</h2>
<ul className="mt-4 space-y-4">
<li>
<div className="flex items-center justify-between text-sm">
<span className="font-medium text-neutral-800">Türkisch</span>
<span className="text-neutral-500">Muttersprache</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-neutral-200">
<div className="h-2 rounded-full bg-neutral-900" style={{width: '100%'}}></div>
</div>
</li>
<li>
<div className="flex items-center justify-between text-sm">
<span className="font-medium text-neutral-800">Englisch</span>
<span className="text-neutral-500">Fortgeschritten</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-neutral-200">
<div className="h-2 rounded-full bg-neutral-900" style={{width: '80%'}}></div>
</div>
</li>
<li>
<div className="flex items-center justify-between text-sm">
<span className="font-medium text-neutral-800">Deutsch</span>
<span className="text-neutral-500">Anfänger (A1)</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-neutral-200">
<div className="h-2 rounded-full bg-neutral-900" style={{width: '30%'}}></div>
</div>
</li>
</ul>
</div>

<div className="mt-8">
<h2 className="text-xl tracking-tight font-semibold text-neutral-900">Aufenthaltsstatus</h2>
<ul className="mt-3 space-y-2 text-[15px] text-neutral-700">
<li className="flex gap-2">
<i className="w-4 h-4 mt-0.5 text-neutral-500" data-lucide="shield-check"></i>
                  Bulgarische langfristige Aufenthaltserlaubnis vorhanden
                </li>
<li className="flex gap-2">
<i className="w-4 h-4 mt-0.5 text-neutral-500" data-lucide="briefcase"></i>
                  Für Deutschland visumspflichtig; Suche nach Arbeitgeber/in mit Visum-Unterstützung
                </li>
</ul>
</div>
</aside>

<section className="md:col-span-2">

<div>
<h2 className="text-xl tracking-tight font-semibold text-neutral-900">Berufserfahrung</h2>
<div className="mt-4 space-y-6">

<article className="p-4 rounded-xl ring-1 ring-neutral-200">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="gamepad-2"></i>
<h3 className="font-medium text-neutral-900">Croupierin</h3>
</div>
<span className="text-sm text-neutral-500">Sofia, Bulgarien</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Pragmatic Play</p>
<ul className="mt-3 list-disc list-inside text-[15px] text-neutral-700 space-y-1.5">
<li>Präsentation von Spielen für Kundinnen und Kunden in einer Studio-Umgebung.</li>
</ul>
</article>

<article className="p-4 rounded-xl ring-1 ring-neutral-200">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="heart-handshake"></i>
<h3 className="font-medium text-neutral-900">Pflegeassistentin</h3>
</div>
<span className="text-sm text-neutral-500">Sep 2022 – Jun 2023 · Dublin, Irland</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Be Independent Home Care</p>
<ul className="mt-3 list-disc list-inside text-[15px] text-neutral-700 space-y-1.5">
<li>Besuch der Klientinnen und Klienten.</li>
<li>Unterstützung bei der Einhaltung des medizinischen Behandlungs- und Terminplans.</li>
<li>Regelmäßige Berichterstattung an die/den Vorgesetzte/n über den Zustand der Klientinnen und Klienten.</li>
</ul>
</article>

<article className="p-4 rounded-xl ring-1 ring-neutral-200">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="test-tube-2"></i>
<h3 className="font-medium text-neutral-900">Medizinische Laboratoriumstechnikerin</h3>
</div>
<span className="text-sm text-neutral-500">2015 – 2017 · Istanbul, Türkei</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Eyüp Devlet Hastanesi</p>
<ul className="mt-3 list-disc list-inside text-[15px] text-neutral-700 space-y-1.5">
<li>Untersuchung und Analyse von Körperflüssigkeiten und Aufbereitung der Ergebnisse in arztgerechten Berichten.</li>
<li>Kalibrierung und Wartung von Laborgeräten.</li>
</ul>
</article>
</div>
</div>

<div className="mt-8">
<h2 className="text-xl tracking-tight font-semibold text-neutral-900">Ausbildung</h2>
<div className="mt-4 p-4 rounded-xl ring-1 ring-neutral-200">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="graduation-cap"></i>
<h3 className="font-medium text-neutral-900">Bachelor – Medizinische Labortechnik</h3>
</div>
<span className="text-sm text-neutral-500">2016</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Plato MYO, Istanbul, Türkei</p>
</div>
</div>
</section>
</div>
</div>
</section>
</main>




    </>
  );
}
