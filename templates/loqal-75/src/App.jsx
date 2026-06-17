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



        // Spotlight Logic
        function handleSpotlight(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }

        // Simple Exit Intent Trigger (Demo purpose)
        let hasShownPopup = false;
        document.addEventListener('mouseleave', e => {
            if (e.clientY < 0 && !hasShownPopup) {
                const popup = document.getElementById('exit-popup');
                popup.classList.add('opacity-100', 'pointer-events-auto');
                popup.querySelector('div.scale-95').classList.remove('scale-95');
                popup.querySelector('div.scale-95').classList.add('scale-100');
                hasShownPopup = true;
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
      

<div className="fixed text-xs font-medium text-white tracking-wide text-center bg-gray-900 z-50 pt-2 pb-2 top-0 right-0 left-0" style={{}}>
        ⚡ LIMITIERTES ANGEBOT: Nur noch 3 Website-Plätze für Januar verfügbar
    </div>
<div className="flex flex-col lg:flex-row min-h-screen pt-8 max-w-[1600px] mx-auto relative">

<aside className="lg:w-64 lg:fixed lg:h-[calc(100vh-2rem)] lg:top-8 flex flex-col z-40 glass-panel lg:bg-transparent lg:border-none w-full border-b border-gray-200 px-8 py-8 justify-between lg:ml-8 lg:rounded-3xl lg:bg-white/50" style={{}}>
<div>
<div className="mb-12">
<a className="block text-2xl tracking-tight font-semibold group" href="#">
                        loqal<span className="text-gray-400 font-normal" style={{}}>.</span>
</a>
</div>
<nav className="space-y-1">
<a className="block py-2 text-sm text-gray-900 font-medium hover:translate-x-1 transition-transform" href="#hero" style={{}}>Home</a>
<a className="block py-2 text-sm text-gray-500 hover:text-gray-900 hover:translate-x-1 transition-all" href="#problem" style={{}}>Lösung</a>
<a className="block py-2 text-sm text-gray-500 hover:text-gray-900 hover:translate-x-1 transition-all" href="#pricing" style={{}}>Preise</a>
<a className="block py-2 text-sm text-gray-500 hover:text-gray-900 hover:translate-x-1 transition-all" href="#roi" style={{}}>ROI Rechner</a>
<a className="block py-2 text-sm text-gray-500 hover:text-gray-900 hover:translate-x-1 transition-all" href="#faq" style={{}}>FAQ</a>
</nav>
</div>
<div className="hidden lg:block space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium" style={{}}>DW</div>
<div className="text-xs leading-tight">
<p className="font-medium text-gray-900" style={{}}>Daniel Weishar</p>
<p className="text-gray-500" style={{}}>Chemnitz, Sachsen</p>
</div>
</div>
<div className="pt-4 border-t border-gray-200" style={{}}>
<p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2" style={{}}>Kontakt</p>
<p className="text-xs text-gray-600 hover:text-gray-900 cursor-pointer" style={{}}>hallo@loqal.de</p>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-72 lg:p-8 flex flex-col gap-6 overflow-hidden pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6">

<section className="lg:p-16 grid-bg overflow-hidden animate-fade-up bg-white w-full border-gray-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative" id="hero">
<div className="max-w-3xl relative z-10">
<h1 className="lg:text-6xl leading-[1.05] text-4xl font-medium text-gray-900 tracking-tight mb-6" style={{}}>
                        Ihre Website in 48 Stunden – <span className="text-gray-400">Ihre Top 10 Rankings in 6 Monaten</span>
</h1>
<p className="text-lg text-gray-500 font-normal leading-relaxed mb-8 max-w-xl" style={{}}>
                        Professionelle Website + SEO-Dominanz für lokale Unternehmen in Sachsen. Ohne Agentur-Preise. Ohne Kompromisse.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<button className="bg-gray-900 text-white hover:bg-gray-800 transition-all text-sm font-medium px-6 py-3 rounded-full shadow-lg shadow-gray-200" style={{}}>
                            Kostenlose Website-Vorschau sichern
                        </button>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs font-medium text-gray-600" style={{}}>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-base" icon="lucide:check"></iconify-icon>
                            Über 50 zufriedene Kunden
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-purple-400 text-base" icon="lucide:star"></iconify-icon>
                            4.8★ Google-Bewertung
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400 text-base" icon="lucide:shield-check" style={{}}></iconify-icon>
                            30 Tage Geld-zurück
                        </div>
</div>
</div>

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none hidden lg:block" style={{}}></div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-up delay-100" id="problem">
<div className="lg:col-span-4 flex flex-col text-white bg-gray-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<iconify-icon className="text-3xl mb-4 text-white/80" icon="lucide:alert-circle"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tight mb-2">Kennen Sie das Problem?</h2>
<p className="text-gray-400 text-sm leading-relaxed" style={{}}>Der digitale Wandel wartet nicht. Lokale Unternehmen
            verlieren jeden Tag Marktanteile.</p>
</div>
</div>
<div className="lg:col-span-8 grid sm:grid-cols-3 gap-4 gap-x-4 gap-y-4">
<div className="spotlight-card bg-white border-gray-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '120.34375px', '--mouse-y': '10.5px'}}>
<div className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:ban"></iconify-icon>
</div>
<h3 className="font-medium text-gray-900 mb-2 text-sm" style={{}}>Keine Website</h3>
<p className="leading-relaxed text-xs text-gray-500" style={{}}>Sie verlieren täglich potenzielle Kunden an die Konkurrenz.</p>
</div>
<div className="bg-white rounded-3xl p-6 border border-gray-200 spotlight-card" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '216.90625px', '--mouse-y': '36.5px'}}>
<div className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:smartphone-off"></iconify-icon>
</div>
<h3 className="font-medium text-gray-900 mb-2 text-sm" style={{}}>Veraltete Technik</h3>
<p className="leading-relaxed text-xs text-gray-500" style={{}}>Nicht mobil-optimiert oder bei Google unauffindbar.</p>
</div>
<div className="bg-white rounded-3xl p-6 border border-gray-200 spotlight-card" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '101.453125px', '--mouse-y': '97.5px'}}>
<div className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:wallet"></iconify-icon>
</div>
<h3 className="font-medium text-gray-900 mb-2 text-sm" style={{}}>Teure Agenturen</h3>
<p className="text-xs text-gray-500 leading-relaxed" style={{}}>5.000-15.000€ Kosten und Monate Wartezeit.</p>
</div>
</div>
</section>

<section className="lg:p-12 animate-fade-up delay-200 bg-white border-gray-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="max-w-2xl mb-12">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4" style={{}}>Die loqal Lösung</h2>
<p className="font-normal text-gray-500" style={{}}>Wir machen professionelle Websites und SEO bezahlbar für lokale Unternehmen. Ohne Wartezeit. Ohne versteckte Kosten.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group">
<div className="mb-4 text-purple-500 bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2" style={{}}>Blitzschnell ⚡</h3>
<p className="text-sm text-gray-500 leading-relaxed" style={{}}>Website live in 48 Stunden. Keine monatelangen Projekte. Ihr Business ist in 2 Tagen online.</p>
</div>
<div className="group">
<div className="mb-4 text-blue-500 bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
<iconify-icon icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2" style={{}}>SEO-Dominanz 📈</h3>
<p className="text-sm text-gray-500 leading-relaxed" style={{}}>Top 10 Rankings in 6 Monaten. 30 SEO-optimierte Artikel pro Monat, automatisch erstellt.</p>
</div>
<div className="group">
<div className="mb-4 text-blue-500 bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
<iconify-icon icon="lucide:piggy-bank" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2" style={{}}>Transparent 💰</h3>
<p className="text-sm text-gray-500 leading-relaxed" style={{}}>Festpreise statt Stundenabrechnung. Keine unklaren Kosten. ROI-Garantie.</p>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-fade-up delay-200">
<div className="md:col-span-4 mb-4 px-2">
<h2 className="text-2xl font-medium tracking-tight">So einfach geht's</h2>
</div>

<div className="bg-white p-6 rounded-3xl border border-gray-200 relative overflow-hidden" style={{}}>
<span className="text-6xl font-semibold text-gray-100 absolute -bottom-4 -right-4 select-none" style={{}}>1</span>
<h3 className="font-medium text-gray-900 mb-2 relative z-10" style={{}}>Erstgespräch</h3>
<p className="text-xs text-gray-500 relative z-10" style={{}}>10 Min Telefonat. Wir verstehen Ihre Ziele.</p>
</div>

<div className="overflow-hidden bg-white border-gray-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative" style={{}}>
<span className="text-6xl font-semibold text-gray-100 absolute -bottom-4 -right-4 select-none" style={{}}>2</span>
<h3 className="font-medium text-gray-900 mb-2 relative z-10" style={{}}>Vorschau 24h</h3>
<p className="text-xs text-gray-500 relative z-10" style={{}}>Sie erhalten einen Preview-Link. Risikofrei.</p>
</div>

<div className="bg-white p-6 rounded-3xl border border-gray-200 relative overflow-hidden" style={{}}>
<span className="text-6xl font-semibold text-gray-100 absolute -bottom-4 -right-4 select-none" style={{}}>3</span>
<h3 className="font-medium text-gray-900 mb-2 relative z-10" style={{}}>Live in 48h</h3>
<p className="text-xs text-gray-500 relative z-10" style={{}}>Nach Freigabe geht Ihre Seite online.</p>
</div>

<div className="bg-white p-6 rounded-3xl border border-gray-200 relative overflow-hidden" style={{}}>
<span className="text-6xl font-semibold text-gray-100 absolute -bottom-4 -right-4 select-none" style={{}}>4</span>
<h3 className="font-medium text-gray-900 mb-2 relative z-10" style={{}}>SEO Autopilot</h3>
<p className="text-xs text-gray-500 relative z-10" style={{}}>30 Artikel/Monat. Sie lehnen sich zurück.</p>
</div>
</section>

<section className="animate-fade-up delay-300" id="pricing">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2" style={{}}>Wählen Sie Ihr Paket</h2>
<p className="text-gray-500 text-sm" style={{}}>Alle Pakete inkl. professioneller Website, Mobile-Optimierung und SSL.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

<div className="bg-white rounded-3xl p-8 border border-gray-200" style={{}}>
<div className="mb-6">
<h3 className="text-lg font-medium text-gray-900" style={{}}>Website Express</h3>
<p className="text-xs text-gray-400 mt-1" style={{}}>Perfekt für den schnellen Start</p>
</div>
<div className="mb-8">
<span className="text-3xl font-semibold text-gray-900" style={{}}>1.497€</span>
<span className="text-sm text-gray-500" style={{}}>einmalig</span>
</div>
<button className="w-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 text-sm font-medium py-3 rounded-xl transition-colors mb-8" style={{}}>
                            Jetzt starten
                        </button>
<ul className="space-y-3 text-sm text-gray-600" style={{}}>
<li className="flex gap-3 items-center"><iconify-icon className="text-gray-400" icon="lucide:check" style={{}}></iconify-icon> Profi-Website (5 Seiten)</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-gray-400" icon="lucide:check" style={{}}></iconify-icon> Mobile-optimiert &amp; SSL</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-gray-400" icon="lucide:check" style={{}}></iconify-icon> Kontaktformular</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-gray-400" icon="lucide:check" style={{}}></iconify-icon> Live in 48 Stunden</li>
</ul>
</div>

<div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 text-white relative shadow-xl shadow-gray-200/50 md:-mt-4 md:mb-4" style={{}}>
<div className="absolute top-0 right-0 bg-white text-gray-900 text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl tracking-wide" style={{}}>BESTSELLER</div>
<div className="mb-6">
<h3 className="text-lg font-medium">Website + SEO Kickstart</h3>
<p className="text-xs text-gray-400 mt-1" style={{}}>Website + 3 Monate SEO-Power</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold">2.997€</span>
<span className="text-xs text-gray-500 line-through decoration-pink-500" style={{}}>4.782€</span>
</div>
<span className="text-sm text-gray-400" style={{}}>einmalig</span>
</div>
<button className="w-full bg-white text-gray-900 hover:bg-gray-100 text-sm font-medium py-3 rounded-xl transition-colors mb-8" style={{}}>
                            Jetzt Top 10 Plätze sichern
                        </button>
<ul className="space-y-3 text-sm text-gray-300" style={{}}>
<li className="flex gap-3 items-center"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Alles aus "Website Express"</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 30 SEO-Artikel (3 Mon.)</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Keyword-Recherche</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Google My Business Setup</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200" style={{}}>
<div className="mb-6">
<h3 className="text-lg font-medium text-gray-900" style={{}}>Local SEO Dominanz</h3>
<p className="text-xs text-gray-400 mt-1" style={{}}>Top 10 oder Geld zurück</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold text-gray-900" style={{}}>4.997€</span>
<span className="text-xs text-gray-400 line-through" style={{}}>8.964€</span>
</div>
<span className="text-sm text-gray-500" style={{}}>einmalig</span>
</div>
<button className="w-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 text-sm font-medium py-3 rounded-xl transition-colors mb-8" style={{}}>
                            Top 10 Garantie sichern
                        </button>
<ul className="space-y-3 text-sm text-gray-600" style={{}}>
<li className="flex gap-3 items-center"><iconify-icon className="text-gray-400" icon="lucide:check" style={{}}></iconify-icon> 180 SEO-Artikel (6 Mon.)</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-gray-900" icon="lucide:shield" style={{}}></iconify-icon> <span className="font-medium text-gray-900" style={{}}>GARANTIE: Top 10</span></li>
<li className="flex gap-3 items-center"><iconify-icon className="text-gray-400" icon="lucide:check" style={{}}></iconify-icon> 20 hochwertige Backlinks</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-gray-400" icon="lucide:check" style={{}}></iconify-icon> Social Media Setup</li>
</ul>
</div>
</div>

<div className="mt-6 bg-gradient-to-r from-gray-50 to-white border border-gray-200 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4" style={{}}>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-sm font-semibold text-gray-900" style={{}}>🎁 SPECIAL OFFER</span>
<span className="text-[10px] bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full font-medium">Nur noch 3 Plätze</span>
</div>
<p className="text-sm text-gray-500" style={{}}>Buchen Sie heute und erhalten Sie: Website-Vorschau, Analytics Setup &amp; 1 Monat Extra Content.</p>
</div>
<button className="text-sm font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900" style={{}}>Jetzt Angebot sichern</button>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-up" id="roi">
<div className="bg-white rounded-3xl p-8 border border-gray-200" style={{}}>
<h2 className="text-2xl font-medium tracking-tight mb-6">ROI Rechner</h2>
<div className="space-y-6">
<div>
<label className="block text-xs font-medium text-gray-500 mb-2" style={{}}>Ihre Branche</label>
<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-gray-900" style={{}}>
<option>Friseur / Beauty</option>
<option>Zahnarzt / Arzt</option>
<option>Handwerk / Bau</option>
<option>Rechtsanwalt</option>
</select>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-medium text-gray-500" style={{}}>Durchschnittlicher Auftragswert</label>
<span className="text-xs font-medium text-gray-900" style={{}}>150€</span>
</div>
<input className="accent-gray-900" max="1000" min="50" style={{}} type="range" value="150"/>
</div>
<button className="w-full bg-gray-900 text-white text-sm font-medium py-3 rounded-xl shadow-lg" style={{}}>
                            Berechnen
                        </button>
</div>
<div className="mt-8 pt-8 border-t border-gray-100" style={{}}>
<p className="text-xs text-gray-400 mb-4" style={{}}>BEISPIELRECHNUNG FRISEUR CHEMNITZ</p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-gray-50 p-4 rounded-xl" style={{}}>
<p className="text-[10px] uppercase text-gray-400 mb-1" style={{}}>Ohne Website</p>
<p className="text-lg font-medium">~10 Kunden</p>
<p className="text-xs text-gray-500" style={{}}>pro Monat</p>
</div>
<div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
<p className="text-[10px] uppercase text-blue-600 mb-1">Mit loqal</p>
<p className="text-lg font-medium text-blue-900">~40 Kunden</p>
<p className="text-xs text-blue-700">+1.600€ Umsatz/Monat</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-center" style={{}}>
<h3 className="text-xl font-medium mb-6">Das sagen unsere Kunden</h3>
<div className="space-y-6">
<div className="border-b border-gray-100 pb-6" style={{}}>
<div className="flex gap-1 text-purple-400 text-xs mb-2">★★★★★</div>
<p className="text-sm text-gray-600 italic mb-3" style={{}}>"Von 50 auf 800 Website-Besucher in 3 Monaten. Jetzt Platz 3 bei 'Physiotherapie Dresden'."</p>
<p className="text-xs font-medium text-gray-900" style={{}}>- Petra M., Dresden</p>
</div>
<div className="border-b border-gray-100 pb-6" style={{}}>
<div className="flex gap-1 text-purple-400 text-xs mb-2">★★★★★</div>
<p className="text-sm text-gray-600 italic mb-3" style={{}}>"Endlich bezahlbar. 5.000€ wollten andere. Hier bekam ich eine bessere Website für ein Drittel."</p>
<p className="text-xs font-medium text-gray-900" style={{}}>- Thomas K., Chemnitz</p>
</div>
<div>
<div className="flex gap-1 text-purple-400 text-xs mb-2">★★★★★</div>
<p className="text-sm text-gray-600 italic mb-3" style={{}}>"Top 10 Garantie eingehalten. Nach 4 Monaten ranken wir für alle Keywords."</p>
<p className="text-xs font-medium text-gray-900" style={{}}>- Sandra L., Leipzig</p>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-12 animate-fade-up" id="faq" style={{}}>
<h2 className="text-2xl font-medium tracking-tight mb-8">Häufig gestellte Fragen</h2>
<div className="space-y-4">
<details className="group border border-gray-200 rounded-xl bg-gray-50/50 open:bg-white open:ring-1 open:ring-gray-200 transition-all" style={{}}>
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-gray-900" style={{}}>
<span>Warum so viel günstiger als Agenturen?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm mt-0 px-4 pb-4 leading-relaxed" style={{}}>
                            Wir haben Prozesse automatisiert. Während Agenturen manuell bauen, nutzen wir KI für Content-Erstellung und moderne Frameworks. Das spart 80% Zeit – diese Ersparnis geben wir weiter.
                        </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-gray-50/50 open:bg-white open:ring-1 open:ring-gray-200 transition-all" style={{}}>
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-gray-900" style={{}}>
<span>Was passiert bei der Top 10 Garantie?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm mt-0 px-4 pb-4 leading-relaxed" style={{}}>
                            Erreichen wir nicht mindestens 3 von 5 Keywords in den Top 10 nach 6 Monaten, erstatten wir Ihnen die SEO-Kosten zu 100% zurück. Schriftlich fixiert.
                        </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-gray-50/50 open:bg-white open:ring-1 open:ring-gray-200 transition-all" style={{}}>
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-gray-900" style={{}}>
<span>Kann ich die Website selbst bearbeiten?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm mt-0 px-4 pb-4 leading-relaxed" style={{}}>
                            Ja! Nach dem Launch erhalten Sie vollen Zugriff. Texte und Bilder können Sie einfach selbst ändern.
                        </div>
</details>
</div>
</section>

<section className="bg-gray-900 rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden animate-fade-up" style={{}}>
<div className="relative z-10">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Bereit, online gefunden zu werden?</h2>
<p className="text-gray-400 mb-8 max-w-lg mx-auto" style={{}}>Starten Sie noch heute. Kostenfreies Erstgespräch. Unverbindliche Website-Vorschau.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
<button className="bg-white text-gray-900 hover:bg-gray-100 text-sm font-medium px-8 py-3 rounded-full transition-colors" style={{}}>
                            Kostenlose Beratung buchen
                        </button>
<button className="bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 text-sm font-medium px-8 py-3 rounded-full transition-colors" style={{}}>
                            +49 123 4567890
                        </button>
</div>
<p className="text-xs text-gray-500 flex items-center justify-center gap-2" style={{}}>
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Nächste verfügbare Termine: Morgen 10:00 Uhr
                    </p>
</div>

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
</section>

<footer className="mt-8 border-t border-gray-200 pt-8 pb-4" style={{}}>
<div className="flex flex-col lg:flex-row justify-between gap-8">
<div>
<a className="text-lg font-semibold tracking-tight text-gray-900 block mb-4" href="#" style={{}}>loqal</a>
<p className="text-xs text-gray-500 max-w-xs leading-relaxed" style={{}}>
                            Marketing Infrastructure Solutions.<br/>
                            Daniel Weishar, Chemnitz, Sachsen.<br/>
                            Made in Germany.
                        </p>
</div>
<div className="flex gap-8 text-xs text-gray-500" style={{}}>
<div className="space-y-2">
<p className="font-medium text-gray-900" style={{}}>Rechtliches</p>
<a className="block hover:text-gray-900" href="#" style={{}}>Impressum</a>
<a className="block hover:text-gray-900" href="#" style={{}}>Datenschutz</a>
<a className="block hover:text-gray-900" href="#" style={{}}>AGB</a>
</div>
<div className="space-y-2">
<p className="font-medium text-gray-900" style={{}}>Regionen</p>
<span className="block">Chemnitz</span>
<span className="block">Dresden</span>
<span className="block">Leipzig</span>
</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-gray-100 text-[10px] text-gray-400 flex justify-between items-center" style={{}}>
<p>© 2025 loqal. Alle Rechte vorbehalten.</p>
<div className="flex gap-2">
<iconify-icon icon="lucide:lock" width="12"></iconify-icon> SSL Secured
                    </div>
</div>
</footer>
</main>
</div>

<div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
<div className="bg-gray-900/90 backdrop-blur text-white p-4 rounded-2xl shadow-2xl flex justify-between items-center border border-gray-700" style={{}}>
<div className="text-xs">
<span className="block font-medium">🚀 Starten Sie jetzt</span>
<span className="text-gray-400" style={{}}>Nur noch 3 Plätze</span>
</div>
<button className="bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-lg" style={{}}>
                Beratung
            </button>
</div>
</div>

<div className="fixed inset-0 z-[60] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" id="exit-popup">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
<div className="bg-white p-8 rounded-3xl max-w-md w-full mx-4 relative shadow-2xl transition-transform duration-300 transform">
<button className="absolute top-4 right-4 text-gray-400 hover:text-gray-900" onclick="document.getElementById('exit-popup').classList.remove('opacity-100', 'pointer-events-auto')" style={{}}>
<iconify-icon icon="lucide:x"></iconify-icon>
</button>
<div className="text-center mb-6">
<div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" style={{}}>🎁</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2" style={{}}>Warten Sie!</h3>
<p className="text-sm text-gray-500" style={{}}>Erhalten Sie eine KOSTENLOSE Website-Analyse (Wert: 297€)</p>
</div>
<div className="space-y-3 mb-6">
<div className="flex gap-3 text-sm text-gray-600" style={{}}><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Wie Ihre Konkurrenz rankt</div>
<div className="flex gap-3 text-sm text-gray-600" style={{}}><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Profitable Keywords</div>
</div>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-1 focus:ring-gray-900" placeholder="Ihre E-Mail Adresse" style={{}} type="email"/>
<button className="w-full bg-gray-900 text-white text-sm font-medium py-3 rounded-xl" style={{}}>Kostenlose Analyse erhalten</button>
</div>
</div>


    </>
  );
}
