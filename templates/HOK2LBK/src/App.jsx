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
      

<section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-50 pb-16 pt-20">
<div className="max-w-3xl mx-auto text-center px-6">
<h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
        Ein Tisch.<br/>
        Eine kuratierte Runde.<br/>
<span className="text-yellow-400">Menschen, die etwas bewegen.</span>
</h1>
<p className="text-lg sm:text-2xl text-gray-200 mb-6 font-light">
        Willkommen beim <span className="font-semibold text-white">digitale Unternehmer:innen Dinner NRW</span>.
      </p>
<p className="text-md sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto">
        Du willst dein Netzwerk erweitern, nicht mit Visitenkarten, sondern mit echten Optionen.<br/>
        Menschen, die wie du digitale Unternehmen aufbauen, skalieren oder investieren.<br/>
        Ein Abend, an dem Gespräche entstehen, die sich auszahlen. Menschlich &amp; geschäftlich.
      </p>
<a className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg px-8 py-3 shadow-lg transition" href="https://forms.gle/U5hcxPAitqLUrf2Q6">
        → Jetzt Interesse bekunden
      </a>
</div>
</section>

<section className="max-w-4xl mx-auto py-16 px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
<span className="text-yellow-500 text-3xl">💡</span>
          Was bringt dir dieser Abend?
        </h2>
<ul className="space-y-4 text-lg">
<li>✅ Zugang zu Unternehmer:innen, die nicht nur spannend klingen, sondern liefern</li>
<li>✅ Gespräche auf Augenhöhe über echte Herausforderungen &amp; Lösungen</li>
<li>✅ Austausch mit Menschen, die mindestens so groß denken und handeln wie du</li>
<li>✅ Ideen, Kooperationen, Investitionen: Alles ist möglich, nichts wird gepitcht</li>
<li>✅ Ein persönliches, entspanntes Setting, in dem Vertrauen entsteht.</li>
</ul>
<p className="mt-6 text-gray-600">
          Von Deep Talk, über Leidenschaft bis zu Business-Strategie. Ehrliche Gespräche hinterm Vorhang der Business-Show.
        </p>
</div>
<div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center items-center">
<blockquote className="italic text-lg text-gray-700 mb-4">
          „The best opportunities in life came from talking to people, being out there, and sharing ideas."
        </blockquote>
<div className="text-sm text-gray-500">– Sam Parr, My First Million Podcast</div>
</div>
</div>
</section>

<section className="text-white bg-gray-900 pt-16 pb-16">
<div className="max-w-4xl mx-auto px-6">

<div className="flex justify-center mb-10">
<img alt="Menschen beim gemeinsamen Dinner" className="w-full max-w-2xl aspect-video object-cover border-gray-800 border-4 rounded-2xl shadow-xl" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="flex items-center mb-8 gap-2">
<span className="text-2xl">🎯</span>
<h2 className="text-2xl font-bold">Für wen ist das Dinner gedacht?</h2>
</div>
<ul className="list-disc ml-8 space-y-2 text-lg mb-8">
<li>Unternehmer:innen, Selbstständige mit digitalem Fokus &amp; Substanz</li>
<li>Menschen, die in echten Gesprächen mehr bewegen als auf Panels</li>
<li>Alle, die langfristig bauen und bereits etwas erreicht haben.</li>
<li>Unternehmer:innen &amp; Creator, die aus Impulsen Geschäfte kreieren.</li>
</ul>
<div className="bg-gray-800 rounded-lg p-6 mb-6">
<p className="mb-2">Wenn du ...</p>
<ul className="list-disc ml-6 space-y-1">
<li>... lieber über funktionierende Strategien und Wachstum sprichst, als nur Theorien.</li>
<li>... dich bei Tech-News fragst „welchen reellen Business-Case kann ich damit bauen“.</li>
<li>... gerne ehrliche Verbindungen hast und dein Ego vor der Tür lassen kannst.</li>
</ul>
<p className="mt-4 font-semibold text-yellow-400">Dann passt du hier rein.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto py-16 px-6">
<div className="flex items-center mb-8 gap-2">
<span className="text-2xl">📍</span>
<h2 className="text-2xl font-bold">Hard Facts</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 text-lg">
<ul className="space-y-3">
<li><span className="font-bold">Ziel:</span> Verbindung, einmaliges Erlebnis &amp; harter ROI</li>
<li><span className="font-bold">Ort:</span> Herausragendes Restaurant mit privater Area in NRW (Location wird kuratiert)</li>
<li><span className="font-bold">Teilnahmegebühr:</span> ab 299 € (inkl. Menü, Getränke, Location &amp; Kuratierung)</li>
<li><span className="font-bold">Zielgruppe:</span> Unternehmer:innen &amp; Selbstständige aus NRW mit digitalem Fokus</li>
<li><span className="font-bold">Plätze:</span> Max. 12 Personen pro Dinner – keine Zufallsteilnehmer</li>
<li><span className="font-bold">Datum:</span> Noch offen – du wirst rechtzeitig informiert, wenn du passt.</li>
</ul>
<div className="flex flex-col items-center justify-center">
<a className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg px-8 py-3 shadow-lg transition mb-6" href="https://forms.gle/U5hcxPAitqLUrf2Q6">
          → Jetzt Interesse bekunden
        </a>
<p className="text-gray-500 text-center text-sm">
          Wir kuratieren jede Gruppe individuell.
          Deine Anfrage ist unverbindlich.
        </p>
</div>
</div>
</section>

<section className="bg-gray-100 py-16">
<div className="max-w-4xl mx-auto px-6">
<div className="flex items-center mb-8 gap-2">
<span className="text-2xl">🧭</span>
<h2 className="text-2xl font-bold">Warum ich das mache?</h2>
</div>
<p className="text-lg mb-6">
        Ich glaube an die Wirkung von Begegnungen. Nicht jede Verbindung entsteht in einem Zoom-Call, manche brauchen einfach einen guten Tisch, eine offene Haltung und Menschen, die was zu sagen haben.
      </p>
<p className="text-lg mb-6">
        Als Marketer, Event Veranstalter, Community Creator, Mastermind Host und Podcast Host durfte ich viele Menschen connecten. Daraus sind echte Freundschaften, Unternehmen und Investitionen entstanden.
      </p>
<p className="text-lg mb-6">
        Echte Verbindung mit Menschen erfüllt mich. Mein Unternehmen ist meine Leidenschaft und durch Events bringe ich alles zusammen.
      </p>
<p className="text-lg font-semibold text-gray-800 mb-2">
        Aus einem Dinner wird ein Deal und ein unbezahlbarer Kontakt für dich.
      </p>
<div className="mt-4 text-gray-700">
        – Andreas
        Host des Unternehmer:innen Podcast
        Marketer &amp; Community Manager
      </div>
</div>
</section>

<section className="bg-yellow-50 py-16" id="interesse">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-2xl font-bold mb-6">✍️ Du willst dabei sein?</h2>
<p className="text-lg mb-3">
        Wir kuratieren jede Gruppe von Grund auf. Wenn du glaubst, dass du in diese Runde gehörst, fülle das kurze Formular aus.
        Damit zeigst du dein Interesse und stehst auf der Warteliste.
      </p>
<a className="inline-block bg-gray-900 hover:bg-gray-800 text-yellow-400 font-semibold rounded-lg px-8 py-3 shadow-lg transition my-4" href="https://forms.gle/U5hcxPAitqLUrf2Q6" target="_blank">
        → Jetzt Interesse bekunden
      </a>
<p className="mt-3 text-gray-600 text-sm mb-6">
        Du bekommst keine automatische Bestätigung – ich lese jede Antwort selbst und melde mich persönlich bei dir, wenn es passt.
      </p>
<div className="bg-white rounded-lg p-4 mt-6 shadow">
<p className="font-semibold mb-2">🔁 Du kennst jemanden, für den das passt?</p>
<p className="text-sm text-gray-600">Dann leite den Link gerne weiter – oder trag den Namen mit ins Formular ein.</p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto py-12 px-6">
<h2 className="text-xl font-bold mb-4">✅ Die nächsten Schritte:</h2>
<ul className="list-decimal ml-8 space-y-2 text-lg mb-6">
<li>Das Formular ausfüllen: <a className="underline text-yellow-500" href="https://forms.gle/U5hcxPAitqLUrf2Q6">Jetzt Interesse bekunden</a></li>
<li>Das ist noch keine Buchung. Wir wählen die Dinner-Gruppe gezielt aus und schicken dir einen Buchungslink, sobald die Personen, Zeit &amp; Ort stehen. Die Eintragung hier dient als Reservierung, die verfällt, sobald du nicht buchst.</li>
<li>Wir melden uns bei allen passenden Bewerbern, um eine ausgewählte Gruppe zusammenzustellen.</li>
<li>Das Dinner soll möglichst hohen Nutzen für dich haben, deshalb ist erst nach dem Gespräch die Buchung möglich.</li>
</ul>
<div className="flex gap-6 text-sm text-gray-500 mt-8">
<a className="underline hover:text-gray-900" href="#">Impressum &amp; Datenschutz</a>
<a className="underline hover:text-gray-900" href="https://www.linkedin.com/in/andreas" target="_blank">Mehr zu mir (LinkedIn)</a>
</div>
</section>

<footer className="bg-gray-900 py-6 text-gray-400 text-center text-sm">
    © 2024 Digitale Unternehmer:innen Dinner NRW · by Andreas
  </footer>

    </>
  );
}
