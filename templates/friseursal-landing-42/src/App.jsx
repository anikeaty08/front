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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tighter font-semibold text-zinc-900 uppercase" href="#">
                New Style<span className="text-gold">.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#about">Über uns</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">Leistungen</a>
<a className="hover:text-zinc-900 transition-colors" href="#gallery">Galerie</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Kontakt</a>
</div>
<a className="bg-zinc-900 text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors tracking-wide hidden sm:block" href="#contact">
                Termin buchen
            </a>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Premium Salon Interior" className="w-full h-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
<span className="inline-block py-1 px-3 border border-white/20 rounded-full text-white/80 text-xs tracking-wider uppercase mb-6 bg-white/5 backdrop-blur-sm">
                Friseur &amp; Styling Studio Quickborn
            </span>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Ihr neuer Look <br className="hidden md:block"/> beginnt hier.
            </h1>
<p className="text-lg text-zinc-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Erleben Sie exklusives Styling und handwerkliche Perfektion in modernem Ambiente. Wir definieren Schönheit neu – individuell für Sie.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-white text-zinc-900 text-sm font-medium px-8 py-3.5 rounded-full hover:bg-zinc-100 transition-all transform hover:scale-105" href="#contact">
                    Jetzt Termin buchen
                </a>
<a className="backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-all" href="#services">
                    Preise &amp; Leistungen
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">
<div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100">
<img alt="Stylist bei der Arbeit" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-xl border border-zinc-100 hidden md:block">
<div className="flex items-center gap-3">
<span className="text-3xl font-semibold text-zinc-900">10+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide leading-tight">Jahre<br/>Erfahrung</span>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-6">
                    Leidenschaft für Trends <br/>in Quickborn
                </h2>
<div className="w-12 h-0.5 bg-gold mb-8"></div>
<p className="text-zinc-500 font-light leading-relaxed mb-6">
                    Willkommen bei New Style. Wir glauben daran, dass ein Haarschnitt mehr ist als nur eine Dienstleistung – es ist ein Ausdruck Ihrer Persönlichkeit. In unserem Salon in Quickborn verbinden wir klassisches Handwerk mit den neuesten urbanen Trends.
                </p>
<p className="text-zinc-500 font-light leading-relaxed mb-8">
                    Unser Team bildet sich stetig weiter, um Ihnen die besten Techniken für Colorationen, Balayage und präzise Schnitte zu bieten. Entspannen Sie sich in unserer exklusiven Atmosphäre und lassen Sie sich verwöhnen.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-gold" data-icon="lucide:check-circle-2" data-width="18"></span>
                        Individuelle Typberatung
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-gold" data-icon="lucide:check-circle-2" data-width="18"></span>
                        Premium Produkte
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-gold" data-icon="lucide:check-circle-2" data-width="18"></span>
                        Meisterhaftes Handwerk
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-4">Unser Angebot</h2>
<p className="text-zinc-500 font-light">Exzellenz in jedem Schnitt. Entdecken Sie unsere Premium-Dienstleistungen.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-gold transition-colors group cursor-default shadow-sm">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
<span className="iconify text-zinc-900 group-hover:text-gold transition-colors" data-icon="lucide:scissors" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Damenhaarschnitt</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">
                        Präzise Schnitte, von klassisch bis avantgardistisch, perfekt auf Ihre Gesichtsform abgestimmt.
                    </p>
<span className="text-xs font-medium text-zinc-900 border-b border-zinc-200 pb-0.5">Ab 45€</span>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-gold transition-colors group cursor-default shadow-sm">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
<span className="iconify text-zinc-900 group-hover:text-gold transition-colors" data-icon="lucide:user" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Herrenstyling</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">
                        Maskuline Schnitte, Bartpflege und modernes Styling für den gepflegten Mann.
                    </p>
<span className="text-xs font-medium text-zinc-900 border-b border-zinc-200 pb-0.5">Ab 32€</span>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-gold transition-colors group cursor-default shadow-sm">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
<span className="iconify text-zinc-900 group-hover:text-gold transition-colors" data-icon="lucide:palette" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Color &amp; Balayage</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">
                        Brillante Farben, sanfte Verläufe und haarschonende Techniken für strahlende Ergebnisse.
                    </p>
<span className="text-xs font-medium text-zinc-900 border-b border-zinc-200 pb-0.5">Preis nach Beratung</span>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-gold transition-colors group cursor-default shadow-sm">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
<span className="iconify text-zinc-900 group-hover:text-gold transition-colors" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Brautstyling</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">
                        Der perfekte Look für Ihren großen Tag. Inklusive Probe-Styling und Make-Up.
                    </p>
<span className="text-xs font-medium text-zinc-900 border-b border-zinc-200 pb-0.5">Pakete verfügbar</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-2">Inspiration</h2>
<p className="text-zinc-500 font-light">Echte Ergebnisse. Glückliche Kunden.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-gold transition-colors" href="https://instagram.com" target="_blank">
                    Auf Instagram folgen
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-zinc-100">
<img alt="Balayage Ergebnis" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Balayage &amp; Styling</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-zinc-100">
<img alt="Herren Haarschnitt" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="relative group overflow-hidden rounded-xl bg-zinc-100">
<img alt="Kurzhaarfrisur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-zinc-100">
<img alt="Salon Interieur Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-center">Das sagen unsere Kunden</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50">
<div className="flex text-gold mb-4 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-zinc-300 font-light italic mb-6">"Endlich ein Friseur in Quickborn, der versteht was ich will. Die Atmosphäre ist super entspannt und das Ergebnis einfach perfekt. Komme definitiv wieder!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-semibold">SA</div>
<span className="text-sm font-medium">Sophie A.</span>
</div>
</div>

<div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50">
<div className="flex text-gold mb-4 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-zinc-300 font-light italic mb-6">"Sehr professionelles Team und hochwertige Produkte. Mein Haarschnitt sitzt auch nach Wochen noch perfekt. Bester Friseur in der Umgebung."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-semibold">MK</div>
<span className="text-sm font-medium">Michael K.</span>
</div>
</div>

<div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50">
<div className="flex text-gold mb-4 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-zinc-300 font-light italic mb-6">"Ich habe hier mein Brautstyling machen lassen und fühlte mich wie eine Königin. Danke an das ganze Team für die tolle Betreuung!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-semibold">LW</div>
<span className="text-sm font-medium">Lena W.</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200" id="contact">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-8">Wir freuen uns auf Sie</h2>
<div className="space-y-8">
<div>
<p className="text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-2">Adresse</p>
<p className="text-lg text-zinc-900">Bahnhofstraße 12<br/>25451 Quickborn</p>
</div>
<div>
<p className="text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-2">Kontakt</p>
<p className="text-lg text-zinc-900 hover:text-gold transition-colors cursor-pointer">+49 (0) 4106 123456</p>
<p className="text-lg text-zinc-900 hover:text-gold transition-colors cursor-pointer">hallo@newstyle-quickborn.de</p>
</div>
<div>
<p className="text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-2">Öffnungszeiten</p>
<div className="grid grid-cols-2 gap-4 max-w-xs text-sm text-zinc-600">
<span>Mo - Fr</span>
<span className="text-right">09:00 - 18:30</span>
<span>Sa</span>
<span className="text-right">09:00 - 15:00</span>
<span>So</span>
<span className="text-right">Geschlossen</span>
</div>
</div>
<div className="flex gap-4 pt-4">
<a className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
</div>
</div>
</div>

<div className="h-full min-h-[400px] bg-zinc-100 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37803.96317202353!2d9.870582294155165!3d53.73177893967845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b22a009419b48b%3A0x4248963c6581970!2s25451%20Quickborn!5e0!3m2!1sde!2sde!4v1709825555431!5m2!1sde!2sde" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
<div className="border-t border-zinc-100 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400">
<p>© 2024 New Style Quickborn. Alle Rechte vorbehalten.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-900" href="#">Impressum</a>
<a className="hover:text-zinc-900" href="#">Datenschutz</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
