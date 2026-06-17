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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-neutral-950/80">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl tracking-tight font-playfair font-medium text-white" href="#">Rene for Hairs<span className="font-playfair font-medium text-orange-500">.</span></a>
<div className="hidden md:flex items-center gap-8 text-base font-normal">
<a className="transition-colors font-geist hover:text-white" href="#">Start</a>
<a className="transition-colors font-geist hover:text-white" href="#about">Über uns</a>
<a className="transition-colors font-geist hover:text-white" href="#services">Leistungen</a>
<a className="transition-colors font-geist hover:text-white" href="#gallery">Galerie</a>
<a className="transition-colors font-geist hover:text-white" href="#reviews">Bewertungen</a>
<a className="transition-colors font-geist hover:text-white" href="#contact">Kontakt</a>
</div>
<a className="px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 font-geist bg-white hover:text-white text-neutral-950 hover:bg-orange-500" href="#contact">
                Termin buchen
            </a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0">
<img alt="Barber working" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="grid lg:grid-cols-2 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm bg-white/5 border-white/10">
<span className="text-sm font-medium tracking-wide uppercase font-geist text-orange-400">Premium Hair Studio</span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tight leading-[1.1] font-playfair font-medium text-white">
                    Wo Schönheit auf <span className="font-playfair font-medium text-orange-500">Selbstbewusstsein</span> trifft.
                </h1>
<p className="text-xl max-w-lg leading-relaxed font-playfair font-medium text-neutral-400">
                    Rene for Hairs steht für moderne Haarschnitte, präzise Colorationen, Balayage, Fades, Styling und Bartpflege. Für Frauen und Männer, die nicht irgendeinen Look wollen, sondern den richtigen.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
<a className="transition-all duration-300 text-lg font-medium font-geist rounded-full pt-4 pr-8 pb-4 pl-8 hover:text-white bg-white text-neutral-950 hover:bg-orange-500" href="#contact">Kontakt</a>

<div className="flex items-center gap-4 p-3 pr-6 rounded-full border backdrop-blur-md border-white/5 bg-neutral-900/50">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 object-cover border-neutral-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 object-cover border-neutral-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 object-cover border-neutral-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex flex-col">
<div className="flex text-xs text-orange-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs font-medium mt-0.5 font-geist text-white">Tausende zufriedene Kund:innen</span>
</div>
</div>
</div>
</div>

<div></div>
</div>
</header>

<section className="py-24 border-b bg-neutral-950 border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
<h2 className="text-4xl md:text-5xl tracking-tight leading-tight font-playfair font-medium text-white">
                    Mehr als ein Salon.<br/>Ein Erlebnis.
                </h2>
<p className="text-lg font-geist text-neutral-400">
                    Qualität ist kein Zufall. Seit über einem Jahrzehnt perfektionieren wir unser Handwerk, um dir genau das Ergebnis zu liefern, das du verdienst.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<span className="block text-4xl md:text-5xl tracking-tight mb-2 font-playfair font-medium text-orange-500">10+</span>
<span className="font-geist text-neutral-400">Jahre Erfahrung</span>
</div>
<div>
<span className="block text-4xl md:text-5xl tracking-tight mb-2 font-playfair font-medium text-orange-500">5k+</span>
<span className="font-geist text-neutral-400">Kund:innen</span>
</div>
<div className="">
<span className="block text-4xl md:text-5xl tracking-tight mb-2 font-playfair font-medium text-orange-500">12+</span>
<span className="font-geist text-neutral-400">Spezial-Leistungen</span>
</div>
<div>
<span className="block text-4xl md:text-5xl tracking-tight mb-2 font-playfair font-medium text-orange-500">2</span>
<span className="font-geist text-neutral-400">Standorte</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-950" id="services">
<div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
<h2 className="text-4xl md:text-5xl tracking-tight font-playfair font-medium text-white">Unsere Signature Services</h2>
<div className="hidden md:flex gap-2">
<button className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors border-white/10 hover:bg-white hover:text-black"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors border-white/10 hover:bg-white hover:text-black"><i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Damen" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 group-hover:opacity-90 transition-opacity from-neutral-950 via-neutral-950/40"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl mb-2 tracking-tight font-playfair font-medium text-white">Damenhaarschnitt &amp; Styling</h3>
<p className="text-base mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-geist text-neutral-300">
                            Individuelle Beratung und Schnitttechniken für deinen perfekten Look.
                        </p>
<span className="inline-flex items-center gap-2 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium transition-colors font-geist text-white bg-white/20 hover:bg-white hover:text-black">
                            Mehr erfahren
                        </span>
</div>
</div>

<div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Herren" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 group-hover:opacity-90 transition-opacity from-neutral-950 via-neutral-950/40"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl mb-2 tracking-tight font-playfair font-medium text-white">Herrenhaarschnitt &amp; Fade</h3>
<p className="text-base mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-geist text-neutral-300">
                            Präzise Übergänge und klassisches Handwerk für den modernen Mann.
                        </p>
<span className="inline-flex items-center gap-2 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium transition-colors font-geist text-white bg-white/20 hover:bg-white hover:text-black">
                            Mehr erfahren
                        </span>
</div>
</div>

<div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Balayage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 group-hover:opacity-90 transition-opacity from-neutral-950 via-neutral-950/40"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl mb-2 tracking-tight font-playfair font-medium text-white">Balayage &amp; Blond Spezial</h3>
<p className="text-base mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-geist text-neutral-300">
                            Natürliche Verläufe und strahlende Blondtöne vom Experten.
                        </p>
<span className="inline-flex items-center gap-2 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium transition-colors font-geist text-white bg-white/20 hover:bg-white hover:text-black">
                            Mehr erfahren
                        </span>
</div>
</div>

<div className="hidden lg:block group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Bart" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 group-hover:opacity-90 transition-opacity from-neutral-950 via-neutral-950/40"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl mb-2 tracking-tight font-playfair font-medium text-white">Bartpflege &amp; Konturen</h3>
<p className="text-base mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-geist text-neutral-300">
                            Wellness für den Bart mit Hot Towel und scharfer Klinge.
                        </p>
<span className="inline-flex items-center gap-2 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium transition-colors font-geist text-white bg-white/20 hover:bg-white hover:text-black">
                            Mehr erfahren
                        </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 font-playfair font-medium text-white">Weil du nur das Beste verdienst.</h2>
<div className="w-24 h-1 mx-auto rounded-full bg-orange-500"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="border p-10 rounded-3xl transition-all duration-300 border-white/5 bg-neutral-900/40 hover:bg-neutral-900">
<div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-orange-500/10">
<i className="w-8 h-8 text-orange-500" data-lucide="scissors" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl mb-4 tracking-tight font-playfair font-medium text-white">Expert:innen für Schnitt</h3>
<p className="font-geist text-neutral-400">
                        Unser Team beherrscht die neuesten Techniken und klassisches Handwerk in Perfektion.
                    </p>
</div>
<div className="border p-10 rounded-3xl transition-all duration-300 border-white/5 bg-neutral-900/40 hover:bg-neutral-900">
<div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-orange-500/10">
<i className="w-8 h-8 text-orange-500" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl mb-4 tracking-tight font-playfair font-medium text-white">Premium Produkte</h3>
<p className="font-geist text-neutral-400">
                        Wir verwenden ausschließlich hochwertige Pflege- und Stylingprodukte für langanhaltende Gesundheit.
                    </p>
</div>
<div className="border p-10 rounded-3xl transition-all duration-300 border-white/5 bg-neutral-900/40 hover:bg-neutral-900">
<div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-orange-500/10">
<i className="w-8 h-8 text-orange-500" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl mb-4 tracking-tight font-playfair font-medium text-white">Begeisternder Service</h3>
<p className="font-geist text-neutral-400">
                        Vom ersten Hallo bis zum Finish – bei uns stehst du und dein Wohlbefinden im Mittelpunkt.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-neutral-950" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-playfair font-medium text-white">Unsere Arbeit spricht für sich.</h2>
<p className="text-lg font-geist text-neutral-400">Entdecke echte Ergebnisse von echten Kund:innen.</p>
</div>
<a className="px-8 py-3 rounded-full border font-medium transition-colors font-geist border-white/20 text-white hover:bg-white hover:text-black" href="#">
                Galerie ansehen
            </a>
</div>
<div className="flex gap-4 overflow-x-auto pb-8 px-6 no-scrollbar snap-x">
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center">
<img alt="Work 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center">
<img alt="Work 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center">
<img alt="Work 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center">
<img alt="Work 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center">
<img alt="Work 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center">
<img alt="Work 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-12 px-6 bg-neutral-950">
<div className="md:p-20 overflow-hidden text-center max-w-7xl rounded-3xl mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 relative border shadow-2xl group border-white/10">

<img alt="Background pattern" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<div className="absolute inset-0 backdrop-blur-lg bg-neutral-900/20"></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-neutral-950/80 via-neutral-950/20"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 font-playfair font-medium drop-shadow-lg text-white">Du bist dir nicht sicher, was dir steht?</h2>
<p className="text-xl mb-10 leading-relaxed font-playfair font-medium drop-shadow-md text-white/90">
                    Kein Problem. Wir beraten ehrlich, typgerecht und passend zu deinem Alltag. Du bekommst Empfehlungen, die zu deinem Gesicht, deinem Haar und deinem Stil passen.
                </p>
<button className="backdrop-blur-sm px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:scale-105 font-geist bg-white/90 hover:bg-white hover:shadow-white/20 text-neutral-900">
                    Beratung anfragen
                </button>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl tracking-tight mb-16 text-center font-playfair font-medium text-white">Vorher. Nachher. Wow.</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="rounded-3xl overflow-hidden border border-white/5 bg-neutral-900">
<div className="relative h-64">
<div className="absolute inset-0 flex">
<div className="w-1/2 h-full relative border-r border-white/10">
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="absolute top-4 left-4 text-xs font-bold uppercase px-2 py-1 rounded font-geist bg-black/50 text-white">Vorher</span>
</div>
<div className="w-1/2 h-full relative">
<img className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="absolute top-4 right-4 text-xs font-bold uppercase px-2 py-1 rounded font-geist text-white bg-orange-500">Nachher</span>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl mb-1 font-playfair font-medium text-white">Balayage Transformation</h3>
<p className="text-sm font-geist text-neutral-500">Color Correction &amp; Styling</p>
</div>
</div>

<div className="rounded-3xl overflow-hidden border border-white/5 bg-neutral-900">
<div className="relative h-64">
<div className="absolute inset-0 flex">
<div className="w-1/2 h-full relative border-r border-white/10">
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<span className="absolute top-4 left-4 text-xs font-bold uppercase px-2 py-1 rounded font-geist bg-black/50 text-white">Vorher</span>
</div>
<div className="w-1/2 h-full relative">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&amp;fit=crop&amp;w=400"/>
<span className="absolute top-4 right-4 text-xs font-bold uppercase px-2 py-1 rounded font-geist text-white bg-orange-500">Nachher</span>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl mb-1 font-playfair font-medium text-white">Damen Cut + Styling</h3>
<p className="text-sm font-geist text-neutral-500">Volumen &amp; Struktur</p>
</div>
</div>

<div className="rounded-3xl overflow-hidden border border-white/5 bg-neutral-900">
<div className="relative h-64">
<div className="absolute inset-0 flex">
<div className="w-1/2 h-full relative border-r border-white/10">
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&amp;fit=crop&amp;w=400"/>
<span className="absolute top-4 left-4 text-xs font-bold uppercase px-2 py-1 rounded font-geist bg-black/50 text-white">Vorher</span>
</div>
<div className="w-1/2 h-full relative">
<img className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute top-4 right-4 text-xs font-bold uppercase px-2 py-1 rounded font-geist text-white bg-orange-500">Nachher</span>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl mb-1 font-playfair font-medium text-white">Herren Fade + Konturen</h3>
<p className="text-sm font-geist text-neutral-500">Sharp &amp; Clean Look</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-white/5 bg-neutral-900/50">
<div className="flex-1 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-orange-500/10 border-orange-500/20">
<span className="text-xs font-bold tracking-widest uppercase font-geist text-orange-500">Atmosphäre</span>
</div>
<h2 className="text-4xl md:text-5xl tracking-tight leading-tight font-playfair font-medium text-white">
                        Mehr als ein Termin. <br/>Ein Moment für dich.
                    </h2>
<p className="text-lg leading-relaxed font-geist text-neutral-400">
                        Bei Rene for Hairs geht es nicht nur um Haare. Es geht um Ausstrahlung. Um Details. Und um das Gefühl, nach dem Termin stärker rauszugehen als man reingekommen ist. Genieße Espresso, kühle Drinks und entspannte Beats in einer Umgebung, die für Ruhe sorgt.
                    </p>
<button className="px-8 py-3 rounded-full border font-medium transition-colors font-geist border-white/20 text-white hover:bg-white hover:text-black">
                        Mehr über uns
                    </button>
</div>
<div className="flex-1 w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden relative group">
<img alt="Salon Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
<h2 className="text-4xl md:text-5xl tracking-tight font-playfair font-medium text-white">Tipps, Trends &amp; Pflege</h2>
<a className="hidden md:block font-medium font-geist text-orange-500 hover:text-orange-400" href="#">Alle Beiträge →</a>
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden mb-6 h-64 border relative border-white/5">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 text-sm mb-3 text-neutral-500">
<span className="font-medium font-geist text-orange-500">Pflege</span>
<span className="font-geist">•</span>
<span className="font-geist">12. März 2024</span>
</div>
<h3 className="text-2xl mb-2 transition-colors font-playfair font-medium text-white group-hover:text-orange-500">So hält deine Farbe länger</h3>
<p className="line-clamp-2 font-geist text-neutral-400">Profitipps für strahlenden Glanz und Haltbarkeit, auch Wochen nach dem Friseurbesuch.</p>
</article>
<article className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden mb-6 h-64 border relative border-white/5">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center gap-3 text-sm mb-3 text-neutral-500">
<span className="font-medium font-geist text-orange-500">Style Guide</span>
<span className="font-geist">•</span>
<span className="font-geist">05. März 2024</span>
</div>
<h3 className="text-2xl mb-2 transition-colors font-playfair font-medium text-white group-hover:text-orange-500">Welche Frisur passt zu deiner Kopfform?</h3>
<p className="line-clamp-2 font-geist text-neutral-400">Eckig, oval oder herzförmig? Wir verraten, welcher Schnitt deine Vorzüge betont.</p>
</article>
<article className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden mb-6 h-64 border relative border-white/5">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center gap-3 text-sm mb-3 text-neutral-500">
<span className="font-medium font-geist text-orange-500">How-To</span>
<span className="font-geist">•</span>
<span className="font-geist">28. Feb 2024</span>
</div>
<h3 className="text-2xl mb-2 transition-colors font-playfair font-medium text-white group-hover:text-orange-500">Die häufigsten Styling-Fehler</h3>
<p className="line-clamp-2 font-geist text-neutral-400">Und wie du sie vermeidest, um jeden Morgen wie frisch vom Friseur auszusehen.</p>
</article>
</div>
</section>

<section className="max-w-7xl sm:px-6 lg:px-8 sm:py-10 md:py-12 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 border-t border-white/5 bg-neutral-950" id="reviews">
<div className="flex items-center justify-between">
<div className="space-y-1">
<p className="text-xs sm:text-sm font-geist text-neutral-400">Was Kunden sagen</p>
<h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-medium font-playfair text-white">Echte Stimmen</h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4" data-lucide="quote"></i>
<span className="text-sm font-geist">Geprüftes Feedback</span>
</div>
</div>
<div className="relative mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-neutral-950">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r to-transparent z-10 from-neutral-950"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l to-transparent z-10 from-neutral-950"></div>

<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-marquee-ltr">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Lena Weber</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Stammkundin seit 2021</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Endlich habe ich den Salon meines Vertrauens gefunden. Die Balayage sieht so natürlich aus und hält ewig.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Marc Schäfer</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Google Bewertung</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Bester Fade in der Stadt. Kein langes Warten, entspannte Atmosphäre und ein Friseur, der sein Handwerk versteht.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Sarah Kline</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Instagram</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Ich wurde noch nie so gut beraten. Meine neue Frisur passt perfekt zu meiner Gesichtsform. Danke an das Team!
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">David Koch</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Neukunde</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Sehr professionell. Die Bartpflege war Wellness pur. Komme auf jeden Fall nächsten Monat wieder.
                        </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Lena Weber</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Stammkundin seit 2021</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Endlich habe ich den Salon meines Vertrauens gefunden. Die Balayage sieht so natürlich aus und hält ewig.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Marc Schäfer</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Google Bewertung</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Bester Fade in der Stadt. Kein langes Warten, entspannte Atmosphäre und ein Friseur, der sein Handwerk versteht.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Sarah Kline</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Instagram</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Ich wurde noch nie so gut beraten. Meine neue Frisur passt perfekt zu meiner Gesichtsform. Danke an das Team!
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">David Koch</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Neukunde</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Sehr professionell. Die Bartpflege war Wellness pur. Komme auf jeden Fall nächsten Monat wieder.
                        </p>
</article>
</div>
</div>
<div className="border-t border-white/5"></div>

<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-marquee-rtl">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] border rounded-2xl pt-5 pr-5 pb-5 pl-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Julia Meier</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">@julia_m</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Ich habe lange nach einem Friseur gesucht, der Blondtöne so gut hinbekommt. Kein Gelbstich, einfach perfekt.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] border rounded-2xl pt-5 pr-5 pb-5 pl-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Tom Bauer</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Stammkunde</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Super Service, leckerer Kaffee und der Haarschnitt sitzt auch nach 2 Wochen noch top. Absolute Empfehlung!
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] border rounded-2xl pt-5 pr-5 pb-5 pl-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Sophie Müller</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Google Bewertung</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Die Produkte riechen fantastisch und meine Haare fühlen sich so gesund an wie nie zuvor.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Felix Jung</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">@felixj</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Schnell, sauber, freundlich. Genau so muss ein Friseurbesuch sein. Der Preis ist für die Leistung absolut fair.
                        </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] border rounded-2xl pt-5 pr-5 pb-5 pl-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Julia Meier</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">@julia_m</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Ich habe lange nach einem Friseur gesucht, der Blondtöne so gut hinbekommt. Kein Gelbstich, einfach perfekt.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] border rounded-2xl pt-5 pr-5 pb-5 pl-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Tom Bauer</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Stammkunde</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Super Service, leckerer Kaffee und der Haarschnitt sitzt auch nach 2 Wochen noch top. Absolute Empfehlung!
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] border rounded-2xl pt-5 pr-5 pb-5 pl-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Sophie Müller</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">Google Bewertung</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Die Produkte riechen fantastisch und meine Haare fühlen sich so gesund an wie nie zuvor.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-white/5 bg-neutral-900/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-geist text-white">Felix Jung</span>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs font-geist text-neutral-400">@felixj</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base font-geist text-neutral-300">
                            Schnell, sauber, freundlich. Genau so muss ein Friseurbesuch sein. Der Preis ist für die Leistung absolut fair.
                        </p>
</article>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-neutral-950" id="contact">

<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-20 blur-sm" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-neutral-950/80"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
<div className="space-y-8">
<h2 className="text-5xl tracking-tight font-playfair font-medium text-white">Rene for Hairs</h2>
<p className="text-xl font-playfair font-medium text-neutral-400">
                    Bereit für deinen neuen Look? Vereinbare jetzt deinen Termin oder schreib uns. Wir freuen uns auf dich.
                </p>
<div className="space-y-6 pt-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-orange-500/10">
<i className="w-5 h-5 text-orange-500" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-medium text-lg font-geist text-white">Salon Mitte</h4>
<p className="font-geist text-neutral-400">Hauptstraße 24, 10115 Berlin</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-orange-500/10">
<i className="w-5 h-5 text-orange-500" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-medium text-lg font-geist text-white">Anrufen</h4>
<p className="font-geist text-neutral-400">+49 30 123 456 78</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-orange-500/10">
<i className="w-5 h-5 text-orange-500" data-lucide="clock"></i>
</div>
<div>
<h4 className="font-medium text-lg font-geist text-white">Öffnungszeiten</h4>
<p className="font-geist text-neutral-400">Di - Fr: 10:00 - 19:00 Uhr<br/>Sa: 09:00 - 16:00 Uhr</p>
</div>
</div>
</div>
</div>

<div className="backdrop-blur-xl border p-8 md:p-10 rounded-3xl bg-white/5 border-white/10">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium ml-1 font-geist text-neutral-400">Name</label>
<input className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all border-white/10 text-white placeholder:text-neutral-600 bg-neutral-900/50 focus:border-orange-500 focus:ring-orange-500" placeholder="Dein Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium ml-1 font-geist text-neutral-400">Telefon</label>
<input className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all border-white/10 text-white placeholder:text-neutral-600 bg-neutral-900/50 focus:border-orange-500 focus:ring-orange-500" placeholder="Deine Nummer" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium ml-1 font-geist text-neutral-400">E-Mail</label>
<input className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all border-white/10 text-white placeholder:text-neutral-600 bg-neutral-900/50 focus:border-orange-500 focus:ring-orange-500" placeholder="deine@email.de" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium ml-1 font-geist text-neutral-400">Nachricht</label>
<textarea className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all border-white/10 text-white placeholder:text-neutral-600 bg-neutral-900/50 focus:border-orange-500 focus:ring-orange-500" placeholder="Wunschtermin oder Frage..." rows="4"></textarea>
</div>
<button className="w-full font-bold py-4 rounded-xl transition-all duration-300 font-geist bg-white hover:text-white text-neutral-950 hover:bg-orange-500">
                        Termin anfragen
                    </button>
</form>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-neutral-950 border-neutral-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<h3 className="text-3xl tracking-tight mb-4 font-playfair font-medium text-white">Rene for Hairs<span className="font-playfair font-medium text-orange-500">.</span></h3>
<p className="mb-8 max-w-md font-geist text-neutral-400">Premium Hair Studio für Frauen &amp; Männer. <br/>Wo Handwerk auf Leidenschaft trifft.</p>
<div className="flex gap-6 mb-12">
<a className="w-12 h-12 rounded-full border flex items-center justify-center transition-all border-white/10 hover:text-white text-neutral-400 hover:bg-orange-500 hover:border-orange-500" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-12 h-12 rounded-full border flex items-center justify-center transition-all border-white/10 hover:text-white text-neutral-400 hover:bg-orange-500 hover:border-orange-500" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-12 h-12 rounded-full border flex items-center justify-center transition-all border-white/10 hover:text-white text-neutral-400 hover:bg-orange-500 hover:border-orange-500" href="#">
<i className="w-5 h-5" data-lucide="video"></i>
</a>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm border-t pt-8 w-full text-neutral-500 border-neutral-900">
<a className="transition-colors font-geist hover:text-white" href="#">Impressum</a>
<a className="transition-colors font-geist hover:text-white" href="#">Datenschutz</a>
<a className="transition-colors font-geist hover:text-white" href="#">AGB</a>
<span className="font-geist">© 2024 Rene for Hairs. All rights reserved.</span>
</div>
</div>
</footer>


    </>
  );
}
