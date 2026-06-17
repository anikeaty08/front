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



        // Initialize Icons
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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity" href="#">
                COSPHERA
            </a>
<div className="hidden md:flex space-x-8 text-xs font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#overview">Übersicht</a>
<a className="hover:text-gray-900 transition-colors" href="#technology">Technologie</a>
<a className="hover:text-gray-900 transition-colors" href="#ingredients">Inhaltsstoffe</a>
<a className="hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="bg-gray-900 hover:bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full transition-all transform hover:scale-105" href="#buy">
                Kaufen
            </a>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden" id="overview">
<div className="text-center max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-100 rounded-full px-3 py-1 mb-8 fade-in-up">
<span className="text-yellow-600 text-[10px] font-semibold tracking-wide uppercase">Neu</span>
<span className="text-gray-400 text-[10px]">|</span>
<span className="text-gray-500 text-[10px] font-medium tracking-tight">Made in Germany</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-gray-900 mb-6 fade-in-up delay-100 leading-[1.1]">
                Retinol Gold. <br/>
<span className="text-gray-400">Die Zeit gehört dir.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 font-normal max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-200">
                Anti-Aging mit Sofort- &amp; Langzeiteffekt. Maximale Wirkung, sanft zur Haut. 
                Erlebe die Symbiose aus Golden A Technologie und purer Pflege.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<a className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition-all w-full md:w-auto" href="#buy">
                    Jetzt bestellen
                </a>
<a className="text-blue-600 hover:text-blue-700 hover:underline px-8 py-3 text-sm font-medium transition-all flex items-center gap-1" href="#technology">
                    Wie es funktioniert <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
<div className="mt-16 md:mt-24 max-w-6xl mx-auto px-6 fade-in-up delay-300">
<div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl bg-gray-100">
<img alt="Retinol Gold Texture" className="hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfefc3ab-9544-4411-8e3a-8a73ff06f924_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
<p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">Textur</p>
<p className="text-2xl md:text-3xl font-medium tracking-tight">Reichhaltig. Nicht fettend.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 text-white bg-black pt-24 pb-24" id="technology">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl mb-20">
<h2 className="md:text-5xl text-4xl font-semibold tracking-tight mb-6" style={{}}>Wissenschaft, die unter die Haut geht.</h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-gray-400">
                    Warum ist Golden-A Retinol so effektiv? Wir haben Retinol, Hyaluron und ein Anti-Aging-Peptid in kolloidalem Gold verkapselt. Das Ergebnis: Tiefenwirkung ohne Reizung.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="md:p-10 flex flex-col group hover:bg-gray-800 transition-colors duration-500 bg-gray-900 h-96 rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
<svg className="lucide lucide-sparkles text-yellow-500 w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-2">Golden A Technologie</h3>
<p className="leading-relaxed text-sm text-gray-400">Transportiert Retinol tief und reizfrei in die Haut. Maximale Wirkung auch für sensible Hauttypen.</p>
</div>
<div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 w-3/4"></div>
</div>
</div>

<div className="bg-gray-900 rounded-3xl p-8 md:p-10 flex flex-col justify-between h-96 group hover:bg-gray-800 transition-colors duration-500">
<div className="">
<div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
<svg className="lucide lucide-leaf text-green-500 w-6 h-6" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2">RetinArt</h3>
<p className="leading-relaxed text-sm text-gray-400">Gewonnen aus der Chlorella-Alge. Stärkt die Struktur der Haut ähnlich wie Retinol, jedoch ohne Irritationen.</p>
</div>
<div className="opacity-50">
<img alt="Nature" className="filter group-hover:grayscale-0 transition-all duration-500 w-full h-24 object-cover rounded-xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8fb5c94-7d00-4b8b-b28a-edd2a83e551c_800w.png"/>
</div>
</div>

<div className="bg-gray-900 rounded-3xl p-8 md:p-10 flex flex-col justify-between h-96 md:col-span-2 lg:col-span-1 group hover:bg-gray-800 transition-colors duration-500">
<div className="">
<div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
<svg className="lucide lucide-droplets text-blue-400 w-6 h-6" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2">Hydro-Komplex</h3>
<p className="text-gray-400 text-sm leading-relaxed">Hoch- und niedermolekulare Hyaluronsäure polstert von innen auf. Niacinamid stärkt die Barriere.</p>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<span>Soforteffekt</span>
<div className="flex-1 h-px bg-gray-700"></div>
<span>Langzeitwirkung</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 pt-24 pb-24" id="ingredients">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square">
<img alt="Clean Ingredients" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfefc3ab-9544-4411-8e3a-8a73ff06f924_1600w.jpg"/>
<div className="bg-black/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f353cc5b-b8cf-426e-9c66-b9374f6b8eb0_1600w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="md:text-5xl text-3xl font-semibold text-gray-900 tracking-tight mb-8">
                        Reinheit. <br/>
                        Ohne Kompromisse.
                    </h2>
<div className="space-y-10">
<div className="flex gap-5">
<div className="mt-1">
<svg className="lucide lucide-check-circle-2 w-6 h-6 text-gray-900" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900 mb-1">100% Vegan &amp; Clean</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                                    Frei von Parfum, Silikonen, Parabenen, PEGs und Mineralölen. Keine Tierversuche. 
                                    Peta-Approved Vegan.
                                </p>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1">
<svg className="lucide lucide-shield-check w-6 h-6 text-gray-900" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-gray-900 mb-1">Für jeden Hauttyp</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                                    Perfekt für normale, trockene, reife und Mischhaut. Sicher auch für sensible Haut und während Schwangerschaft/Stillzeit.
                                </p>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1">
<svg className="lucide lucide-flask-conical w-6 h-6 text-gray-900" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-gray-900 mb-1">Deutsche Qualität</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                                    Hergestellt in Deutschland nach GMP und ISO 9001 Standards. Dermatologisch getestet.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">Ergebnisse, die man sieht.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="space-y-2">
<p className="text-5xl md:text-6xl font-semibold tracking-tighter text-gray-900">Sofort</p>
<p className="text-sm text-gray-500 font-medium">Intensive Feuchtigkeit &amp; Frische</p>
</div>
<div className="space-y-2">
<p className="text-5xl md:text-6xl font-semibold tracking-tighter text-gray-900">2-4</p>
<p className="text-sm text-gray-500 font-medium">Wochen für gemilderte Falten</p>
</div>
<div className="space-y-2">
<p className="text-5xl md:text-6xl font-semibold tracking-tighter text-gray-900">100%</p>
<p className="text-sm text-gray-500 font-medium">Zufriedenheits-Garantie</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Häufig gestellte Fragen</h2>
<div className="space-y-4">

<details className="group bg-white rounded-2xl p-6 cursor-pointer border border-transparent hover:border-gray-200 transition-all">
<summary className="flex items-center justify-between font-medium text-gray-900">
                        Wie wende ich die Creme am besten an?
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
                        Trage sie täglich morgens und/oder abends nach der Reinigung auf Gesicht, Hals und Dekolleté auf. Tagsüber empfehlen wir zusätzlich einen Sonnenschutz. Für maximale Ergebnisse kannst du sie ideal mit dem Retinol Gold Serum kombinieren.
                    </p>
</details>

<details className="group bg-white rounded-2xl p-6 cursor-pointer border border-transparent hover:border-gray-200 transition-all">
<summary className="flex items-center justify-between font-medium text-gray-900">
                        Ist die Creme auch für empfindliche Haut geeignet?
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
                        Ja, absolut. Dank der speziellen Verkapselungstechnologie (Golden A) gelangen die Wirkstoffe tief in die Haut, ohne die Oberfläche zu reizen. Zudem wirken Sheabutterextrakt und Bisabolol beruhigend.
                    </p>
</details>

<details className="group bg-white rounded-2xl p-6 cursor-pointer border border-transparent hover:border-gray-200 transition-all">
<summary className="flex items-center justify-between font-medium text-gray-900">
                        Kann ich die Creme während der Schwangerschaft nutzen?
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
                        Ja. Unsere vegane Formel ist so konzipiert, dass sie sicher in der Schwangerschaft und Stillzeit verwendet werden kann. Es handelt sich um Clean Beauty ohne schädliche Zusatzstoffe.
                    </p>
</details>

<details className="group bg-white rounded-2xl p-6 cursor-pointer border border-transparent hover:border-gray-200 transition-all">
<summary className="flex items-center justify-between font-medium text-gray-900">
                        Was, wenn ich nicht zufrieden bin?
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
                        Deine Zufriedenheit steht an erster Stelle. Dank unseres 30 Tage Geld-zurück-Versprechens kannst du die Creme risikofrei testen. Bist du nicht zufrieden, kümmern wir uns um eine schnelle Lösung.
                    </p>
</details>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden text-center bg-white pt-24 pb-24 relative" id="buy">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6">
                Dein neuer Gold-Standard.
            </h2>
<p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
                Retinol Gold Creme (50ml). Luxuriöse Pflege für Tag und Nacht.
            </p>
<div className="bg-gray-50 rounded-[2rem] p-8 max-w-sm mx-auto shadow-lg border border-gray-100">
<img alt="Product Packshot" className="mix-blend-multiply w-48 h-48 object-contain rounded-xl mr-auto mb-6 ml-auto shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57204995-60fb-45e0-86a5-fc608b73b00f_800w.jpg"/>
<div className="flex justify-between items-end mb-6">
<div className="text-left">
<p className="text-xs text-gray-500 font-medium">COSPHERA</p>
<p className="font-semibold text-gray-900">Retinol Gold Creme</p>
</div>
<div className="text-right">
<p className="text-xl font-bold tracking-tight">29,90 €</p>
</div>
</div>
<button className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-transform active:scale-95 flex items-center justify-center gap-2">
                    In den Warenkorb <svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
<p className="text-[10px] text-gray-400 mt-4">Kostenloser Versand &amp; 30 Tage Rückgaberecht</p>
</div>
</div>
</section>

<footer className="bg-gray-50 py-12 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 text-center md:text-left">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-sm font-semibold tracking-tight text-gray-900 block mb-4" href="#">COSPHERA</a>
<p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                        Clean Beauty Performance. Vegan, dermatologisch getestet und hergestellt in Deutschland für deine Hautgesundheit.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-4">Shop</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-gray-900" href="#">Alle Produkte</a></li>
<li><a className="hover:text-gray-900" href="#">Sets &amp; Bundles</a></li>
<li><a className="hover:text-gray-900" href="#">Neuheiten</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-4">Rechtliches</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-gray-900" href="#">Impressum</a></li>
<li><a className="hover:text-gray-900" href="#">Datenschutz</a></li>
<li><a className="hover:text-gray-900" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400">
<p>© 2023 COSPHERA. All rights reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<svg className="lucide lucide-instagram w-4 h-4 hover:text-gray-600 cursor-pointer" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-facebook w-4 h-4 hover:text-gray-600 cursor-pointer" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
