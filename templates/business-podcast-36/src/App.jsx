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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
<div className="w-[80vw] h-[50vh] bg-gradient-to-b from-orange-900/20 via-red-900/10 to-transparent blur-[120px] rounded-full absolute -top-20 opacity-50"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-xl bg-black/50 border-b border-white/5">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-shadow">
<iconify-icon className="text-white text-lg" icon="solar:microphone-3-linear"></iconify-icon>
</div>
                Höper.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors tracking-tight" href="#about">Der Host</a>
<a className="hover:text-white transition-colors tracking-tight" href="#value">Fokus</a>
<a className="hover:text-white transition-colors tracking-tight" href="#episodes">Episoden</a>
<a className="hover:text-white transition-colors tracking-tight" href="#media">Referenzen</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 rounded-full transition-all" href="#episodes">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                Abonnieren
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden z-10">

<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col justify-center order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium tracking-tight mb-8 w-max">
<iconify-icon className="text-sm" icon="solar:star-fall-linear"></iconify-icon>
                    Top 10 Business Podcast in DACH
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
                    Wissen, das<br/>skaliert.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-10 font-medium">
                    Kein Bullshit. Nur praxiserprobte Strategien. Florian Höper spricht mit den Top 1% der Unternehmer, Marketer und Visionäre über <span className="text-white">Performance, Skalierung</span> und echtes <span className="text-white">Business-Mindset</span>.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="bg-white text-black px-8 py-4 rounded-full text-base font-semibold tracking-tight inline-flex items-center gap-3 hover:scale-105 transition-transform" href="#episodes">
<iconify-icon className="text-xl" icon="solar:headphones-round-sound-linear"></iconify-icon>
                        Aktuelle Episode hören
                    </a>
<div className="flex items-center gap-4 border-l border-white/10 pl-6 py-2">
<div className="text-sm font-medium text-neutral-500 space-y-3">
<a className="hover:text-white transition-colors flex items-center gap-2 group" href="#">
<iconify-icon className="text-base group-hover:text-orange-500 transition-colors" icon="solar:music-note-linear"></iconify-icon> Spotify
                            </a>
<a className="hover:text-white transition-colors flex items-center gap-2 group" href="#">
<iconify-icon className="text-base group-hover:text-orange-500 transition-colors" icon="solar:podcast-linear"></iconify-icon> Apple Podcasts
                            </a>
</div>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] group">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
<img alt="Florian Höper Portrait" className="w-full h-full object-cover object-center grayscale group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-10 right-10 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
<iconify-icon className="text-orange-400 text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<p className="text-white font-semibold tracking-tight text-base">50k+ Hörer</p>
<p className="text-neutral-400 text-xs font-medium">Jeden Monat</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 -mt-10 px-6">
<div className="max-w-6xl mx-auto backdrop-blur-xl bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 shadow-2xl">
<div className="text-center px-4">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">150+</p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Episoden</p>
</div>
<div className="text-center px-4">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">4.9</p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest flex items-center justify-center gap-1">
<iconify-icon className="text-orange-500" icon="solar:star-linear"></iconify-icon> Apple Rating
                </p>
</div>
<div className="text-center px-4">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">8-stellig</p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Gäste-Umsätze</p>
</div>
<div className="text-center px-4">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Top 1%</p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Netzwerk</p>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="value">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Der Blueprint für Deinen Durchbruch.</h2>
<p className="text-base md:text-lg text-neutral-400 font-medium">Keine theoretischen Konzepte. In diesem Podcast sezieren wir die exakten Strategien, Funnels und Mindsets der erfolgreichsten Köpfe im digitalen Raum.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-neutral-900/30 border border-white/5 p-8 rounded-3xl hover:bg-neutral-900/50 transition-colors group">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 group-hover:text-orange-400 transition-colors" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 text-white">Performance &amp; Skalierung</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-medium">Wie man von 10k auf 100k im Monat skaliert. Wir analysieren Ads, Funnels, Conversion-Raten und High-Ticket-Sales Strategien, die heute wirklich funktionieren.</p>
</div>

<div className="bg-neutral-900/30 border border-white/5 p-8 rounded-3xl hover:bg-neutral-900/50 transition-colors group">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 group-hover:text-orange-400 transition-colors" icon="solar:crown-star-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 text-white">Branding &amp; Autorität</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-medium">Sichtbarkeit ist die neue Währung. Lerne, wie Du Dich als unangefochtener Experte positionierst und einen Sog kreierst, der Traumkunden anzieht.</p>
</div>

<div className="bg-neutral-900/30 border border-white/5 p-8 rounded-3xl hover:bg-neutral-900/50 transition-colors group">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 group-hover:text-orange-400 transition-colors" icon="solar:brain-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 text-white">High-Performance Mindset</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-medium">Business-Wachstum beginnt im Kopf. Routinen, Biohacking und die mentalen Modelle der Top-Performer, um im Chaos den Fokus zu behalten.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-y border-white/5 relative" id="episodes">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Deep Dives.</h2>
<p className="text-base text-neutral-400 font-medium">Die neuesten Episoden direkt aus dem Studio.</p>
</div>
<a className="text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-2 pb-2" href="#">
                    Alle Episoden ansehen <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-white/10">
<img alt="Episode Cover" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1590845947376-2638caa89309?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20">Ep. 142</span>
<div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
<iconify-icon className="text-xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="text-xs text-neutral-500 font-medium tracking-widest uppercase mb-3 flex items-center gap-3">
<span>1:15:30</span> • <span>Marketing</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-orange-400 transition-colors">Die Anatomie eines 8-stelligen Funnels</h3>
<p className="text-sm text-neutral-400 line-clamp-2">Wie baut man einen Sales-Funnel, der Millionen umsetzt? Ein exklusiver Einblick in die Backend-Strukturen der größten Player.</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-white/10">
<img alt="Episode Cover" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20">Ep. 141</span>
<div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
<iconify-icon className="text-xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="text-xs text-neutral-500 font-medium tracking-widest uppercase mb-3 flex items-center gap-3">
<span>58:20</span> • <span>Personal Branding</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-orange-400 transition-colors">LinkedIn Hack: Von 0 auf 100k Follower</h3>
<p className="text-sm text-neutral-400 line-clamp-2">Organische Reichweite ist nicht tot. Erfahre die genaue Content-Matrix, um auf LinkedIn einen massiven Sog aufzubauen.</p>
</div>

<div className="group cursor-pointer hidden lg:block">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-white/10">
<img alt="Episode Cover" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20">Ep. 140</span>
<div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
<iconify-icon className="text-xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="text-xs text-neutral-500 font-medium tracking-widest uppercase mb-3 flex items-center gap-3">
<span>1:05:45</span> • <span>Mindset</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-orange-400 transition-colors">Die Psychologie des Closings</h3>
<p className="text-sm text-neutral-400 line-clamp-2">Verkaufen ist Psychologie. Lerne die mentalen Frameworks der besten Closer im High-Ticket Segment kennen.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-black" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5">
<div className="relative p-2 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
<img alt="Florian Höper Avatar" className="w-full rounded-2xl object-cover grayscale" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-black border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-sm">
<iconify-icon className="text-3xl text-orange-500 mb-2" icon="solar:pen-new-square-linear"></iconify-icon>
<p className="text-sm font-semibold text-white tracking-tight">SPIEGEL-Bestseller</p>
<p className="text-xs text-neutral-400 font-medium">Ghostwriter für die 1%</p>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 mb-6 text-orange-500 font-medium text-sm tracking-widest uppercase">
<span className="w-8 h-px bg-orange-500"></span> Der Host
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Geschichten, die <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Märkte dominieren.</span></h2>
<div className="space-y-6 text-base md:text-lg text-neutral-300 leading-relaxed font-medium mb-10">
<p>
                            Als SPIEGEL-Bestsellerautor und exklusiver Ghostwriter arbeitet Florian Höper im Verborgenen mit den einflussreichsten Unternehmern, CEOs und Profisportlern zusammen. Er kennt die Strategien, die hinter verschlossenen Türen besprochen werden.
                        </p>
<p>
                            In diesem Podcast holt er genau diese Köpfe ans Mikrofon. Das Ziel? Das verborgene Wissen der Branchen-Leader zugänglich zu machen. Für alle, die ihr Business nicht nur aufbauen, sondern zu einer dominanten Marke im Markt entwickeln wollen.
                        </p>
</div>
<a className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors border-b border-white/20 hover:border-orange-400 pb-1" href="#">
                        Mehr über Florians Arbeit erfahren <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-950/20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-neutral-900 border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[80px] rounded-full pointer-events-none"></div>
<iconify-icon className="text-4xl text-white mb-6" icon="solar:letter-opened-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Der Inner Circle.</h2>
<p className="text-base text-neutral-400 font-medium mb-10 max-w-xl mx-auto">1x wöchentlich die wichtigsten Learnings aus den Interviews, exklusive Marketing-Hacks und Buch-Empfehlungen direkt in Dein Postfach. 0% Bullshit. 100% Value.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-neutral-600" placeholder="Deine E-Mail Adresse" required="" type="email"/>
<button className="bg-white text-black font-semibold text-sm px-6 py-4 rounded-xl hover:bg-neutral-200 transition-colors whitespace-nowrap" type="submit">
                        Zugang sichern
                    </button>
</form>
<p className="text-xs text-neutral-600 mt-4">Jederzeit abmeldbar. Kein Spam.</p>
</div>
</div>
</section>

<section className="py-20 bg-black border-t border-white/5" id="media">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium tracking-widest text-neutral-600 uppercase mb-12">Bekannt aus den führenden Medien</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 text-xl md:text-2xl font-semibold tracking-tight text-neutral-700">
<span className="hover:text-white transition-colors duration-300 cursor-default">ARD</span>
<span className="hover:text-white transition-colors duration-300 cursor-default">ZDF</span>
<span className="hover:text-white transition-colors duration-300 cursor-default">RTL</span>
<span className="hover:text-white transition-colors duration-300 cursor-default">SWR</span>
<span className="hover:text-white transition-colors duration-300 cursor-default">DIE WELT</span>
<span className="hover:text-white transition-colors duration-300 cursor-default">SPIEGEL</span>
<span className="hover:text-white transition-colors duration-300 cursor-default">WDR</span>
<span className="hover:text-white transition-colors duration-300 cursor-default">MEN'S HEALTH</span>
<span className="hover:text-white transition-colors duration-300 cursor-default">FORBES</span>
</div>
</div>
</section>

<footer className="py-12 bg-black text-center border-t border-white/5 pb-40">
<div className="flex justify-center gap-6 mb-8 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
<div className="flex items-center justify-center gap-6 text-xs text-neutral-600 font-medium mb-4">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
<a className="hover:text-white transition-colors" href="#">Kontakt</a>
</div>
<p className="text-xs text-neutral-700 font-medium">© 2024 Florian Höper. Alle Rechte vorbehalten.</p>
</footer>

<div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 pointer-events-none">
<div className="max-w-5xl mx-auto backdrop-blur-2xl bg-neutral-900/80 border border-white/10 rounded-2xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)] p-4 pointer-events-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">

<div className="flex items-center gap-4 w-full md:w-1/3 min-w-0">
<div className="w-12 h-12 bg-neutral-800 rounded-lg shrink-0 overflow-hidden relative group cursor-pointer">
<img alt="Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590845947376-2638caa89309?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white text-lg" icon="solar:maximize-square-linear"></iconify-icon>
</div>
</div>
<div className="min-w-0 flex-1">
<p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-0.5 truncate">Jetzt läuft</p>
<p className="text-sm font-medium text-white tracking-tight truncate">Die Anatomie eines 8-stelligen Funnels</p>
</div>
</div>

<div className="w-full md:flex-1 flex flex-col items-center gap-2">
<div className="flex items-center gap-6 text-neutral-400">
<button className="hover:text-white transition-colors"><iconify-icon className="text-xl" icon="solar:skip-previous-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]">
<iconify-icon className="text-xl ml-0.5" icon="solar:play-linear"></iconify-icon>
</button>
<button className="hover:text-white transition-colors"><iconify-icon className="text-xl" icon="solar:skip-next-linear"></iconify-icon></button>
</div>
<div className="w-full flex items-center gap-3 text-xs font-medium text-neutral-500">
<span>12:45</span>
<input className="w-full" max="100" min="0" type="range" value="35"/>
<span>1:15:30</span>
</div>
</div>

<div className="hidden md:flex items-center justify-end gap-4 w-1/3 text-neutral-400">
<button className="hover:text-white transition-colors"><iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon></button>
<div className="flex items-center gap-2 w-24">
<iconify-icon className="text-lg shrink-0" icon="solar:volume-loud-linear"></iconify-icon>
<input className="w-full" max="100" min="0" type="range" value="80"/>
</div>
</div>
</div>
</div>

    </>
  );
}
