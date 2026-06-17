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



        // Initialize Lucide Icons
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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-100">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl tracking-tight font-medium text-stone-900 hover:opacity-70 transition-opacity" href="#">
                Ricarda Bürgi
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#atelier">Atelier</a>
<a className="text-base font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#kollektion">Kollektion</a>
<a className="text-base font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#kontakt">Kontakt</a>
</div>
<button className="md:hidden text-stone-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 pt-32 pr-6 pb-20 pl-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="fade-in-up space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-yellow-600"></span>
                    Handgefertigte Unikate
                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-stone-900 tracking-tight">Goldschmuck aus Bern</h1>
<p className="leading-relaxed text-xl text-stone-500 max-w-md">In meiner kleinen Manufaktur entstehen zeitlose Stücke aus edlen Metallen. Geschmiedet für die Ewigkeit.</p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="px-8 py-4 bg-stone-900 text-white text-base font-medium rounded-lg hover:bg-stone-800 transition-all flex items-center gap-2 group" href="#kollektion">
                        Kollektion ansehen
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="relative aspect-[4/5] md:aspect-square bg-stone-200 rounded-2xl overflow-hidden fade-in-up delay-200 shadow-xl shadow-stone-200/50">

<img alt="Goldring auf Holzstruktur" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="border-y bg-white border-stone-100 pt-24 pb-24" id="atelier">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-5 relative space-y-6">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 relative">

<img alt="Hände arbeiten an Schmuck" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
<p className="text-sm font-medium text-stone-900">Ricarda Bürgi</p>
<p className="text-xs text-stone-500">Goldschmiedin</p>
</div>
</div>
</div>
<div className="md:col-span-1"></div>
<div className="md:col-span-6 space-y-8 md:pt-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">
                        Das Handwerk im Fokus
                    </h2>
<div className="space-y-6 text-xl text-stone-500 leading-relaxed">
<p className="">
                            Willkommen in meinem kleinen Atelier. Als Einfrau-Betrieb lege ich Wert auf jeden einzelnen Hammerschlag. Hier gibt es keine großen Industrie-Maschinen, sondern traditionelles Werkzeug, Geduld und Leidenschaft.
                        </p>
<p>
                            Jedes Stück, das meine Werkbank verlässt, erzählt eine Geschichte. Inspiriert von organischen Strukturen – wie der Rinde eines Baumes oder der Strömung eines Flusses – forme ich Edelmetalle zu persönlichen Begleitern.
                        </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-100">
<div>
<i className="w-8 h-8 text-stone-800 mb-3" data-lucide="hammer" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-stone-900">Handarbeit</h3>
<p className="text-base text-stone-500 mt-1">100% Manufaktur</p>
</div>
<div>
<i className="w-8 h-8 text-stone-800 mb-3" data-lucide="gem" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-stone-900">Materialien</h3>
<p className="text-base text-stone-500 mt-1">Recyceltes Gold &amp; Silber</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="kollektion">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="space-y-2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">Aktuelle Arbeiten</h2>
<p className="text-xl text-stone-500">Ausgewählte Stücke aus der Werkstatt.</p>
</div>
<a className="text-stone-900 font-medium hover:text-stone-600 transition-colors flex items-center gap-2" href="#">
                    Alle Werke ansehen <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<article className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden mb-6">
<img alt="Trauringe Gold" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white/90 backdrop-blur text-xs font-medium text-stone-900 rounded">Eheringe</span>
</div>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-1 group-hover:text-yellow-700 transition-colors">Trauringe 'Natur'</h3>
<p className="text-base text-stone-500">585er Gelbgold, mattiert</p>
<p className="text-base font-medium text-stone-900 mt-3">Auf Anfrage</p>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden mb-6">
<img alt="Silberring Struktur" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white/90 backdrop-blur text-xs font-medium text-stone-900 rounded">Unikat</span>
</div>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-1 group-hover:text-yellow-700 transition-colors">Ring 'Fels'</h3>
<p className="text-base text-stone-500">925er Silber, gehämmerte Struktur</p>
<p className="text-base font-medium text-stone-900 mt-3">CHF 240.00</p>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden mb-6">
<img alt="Halskette Gold" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-1 group-hover:text-yellow-700 transition-colors">Anhänger 'Solitär'</h3>
<p className="text-base text-stone-500">Goldfassung mit Turmalin</p>
<p className="text-base font-medium text-stone-900 mt-3">CHF 480.00</p>
</article>
</div>
</div>
</section>

<section className="text-stone-50 bg-stone-900 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Perfektion im Detail</h2>
<p className="text-xl text-stone-400 leading-relaxed">
                    Die Schönheit liegt oft im Kleinen. Eine feine Ziselierung, eine spezielle Mattierung oder die Art, wie ein Stein gefasst ist. Ich nehme mir die Zeit, die es braucht, bis jedes Detail stimmt.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-stone-400" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg">Persönliche Beratung im Atelier</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-stone-400" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg">Anfertigung nach Maß</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-stone-400" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg">Umarbeitungen von Erbstücken</span>
</li>
</ul>
</div>
<div className="relative h-96 w-full rounded-2xl overflow-hidden border border-stone-700">
<img alt="Makroaufnahme Werkzeug" className="opacity-80 w-full h-full absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-12" id="kontakt">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="bg-stone-50 rounded-2xl p-8 md:p-16 border border-stone-100 text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">
                    Interesse an einem Unikat?
                </h2>
<p className="text-xl text-stone-500 max-w-2xl mx-auto">
                    Besuchen Sie mich in meinem Atelier oder schreiben Sie mir für einen unverbindlichen Beratungstermin.
                </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<a className="px-8 py-4 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors w-full md:w-auto" href="mailto:kontakt@ricardabuergi.ch">
                        Termin vereinbaren
                    </a>
<a className="px-8 py-4 bg-white border border-stone-200 text-stone-900 rounded-lg font-medium hover:bg-stone-50 transition-colors w-full md:w-auto" href="#">
                        Anfahrt ansehen
                    </a>
</div>
</div>
<div className="grid md:grid-cols-4 gap-8 pt-20 border-t border-stone-100 mt-20">
<div className="col-span-1 md:col-span-2 space-y-4">
<span className="text-lg font-semibold tracking-tight text-stone-900">Ricarda Bürgi</span>
<p className="text-base text-stone-500">Goldschmiede &amp; Design<br/> Musterstrasse 12<br/> Vechigen</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wide mb-4">Social</h4>
<ul className="space-y-3 text-base text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Pinterest</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wide mb-4">Rechtliches</h4>
<ul className="space-y-3 text-base text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Datenschutz</a></li>
</ul>
</div>
</div>
<div className="pt-12 mt-12 border-t border-stone-100 flex justify-between items-center text-stone-400 text-sm">
<p className="">© 2026 Ricarda Bürgi. Alle Rechte vorbehalten.</p>
<p>Design inspiriert von Handwerk.</p>
</div>
</div>
</section>


    </>
  );
}
