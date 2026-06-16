import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      let isScrolling;
      const floatingBar = document.getElementById('floating-bar');

      window.addEventListener('scroll', () => {
        // Hide bar when scrolling starts
        floatingBar.classList.add('translate-y-[200%]', 'opacity-0');

        // Clear existing timeout
        window.clearTimeout(isScrolling);

        // Show bar again when scrolling stops (after delay)
        isScrolling = setTimeout(() => {
          floatingBar.classList.remove('translate-y-[200%]', 'opacity-0');
        }, 500); // 500ms delay after scroll stops
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-[100] transition-all duration-300 bg-zinc-900/80 w-full border-white/5 border-b top-0 backdrop-blur-xl font-['Geist']">
<div className="flex h-24 max-w-7xl mx-auto px-6 items-center justify-between">
<div className="flex gap-12 items-center">
<a className="block hover:opacity-80 transition-opacity" href="/">
<img alt="Oma Ida Logo" className="filter opacity-90 mix-blend-screen w-auto h-16 object-cover invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76f1cea4-6358-4b8b-90f4-e2afc989943e_320w.png"/>
</a>
<div className="hidden md:flex gap-8 uppercase text-xs text-zinc-400 tracking-widest items-center">
<div className="relative group">
<a className="hover:text-white transition-colors duration-300 flex items-center gap-1 py-6" href="/zimmer">
                Zimmer
                <svg className="opacity-70 group-hover:rotate-180 transition-transform" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
<div className="glass-dropdown rounded-xl p-1 min-w-[220px] flex flex-col gap-0.5">
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/doppelzimmer">
                    Doppelzimmer
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/komfort-doppelzimmer">
                    Komfort Doppelzimmer
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/superior-doppelzimmer">
                    Superior Doppelzimmer
                  </a>
</div>
</div>
</div>
<a className="hover:text-white transition-colors duration-300" href="/angebote">
              Angebote
            </a>
<div className="relative group">
<button className="hover:text-white transition-colors duration-300 flex items-center gap-1 py-6 uppercase text-xs tracking-widest">
                Erleben
                <svg className="opacity-70 group-hover:rotate-180 transition-transform" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
<div className="glass-dropdown rounded-xl p-1 min-w-[140px] flex flex-col gap-0.5">
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/harz">
                    Natur
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/relax">
                    Relax
                  </a>
</div>
</div>
</div>
<div className="relative group">
<button className="hover:text-white transition-colors duration-300 flex items-center gap-1 py-6 uppercase text-xs tracking-widest">
                Informationen
                <svg className="opacity-70 group-hover:rotate-180 transition-transform" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
<div className="glass-dropdown rounded-xl p-1 min-w-[160px] flex flex-col gap-0.5">
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/anfahrt">
                    Anfahrt &amp; Lage
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/faq">
                    FAQ
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/anfragen">
                    Kontakt
                  </a>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center">
<button className="uppercase hover:bg-zinc-200 transition-all duration-300 cursor-pointer text-xs font-medium text-black tracking-widest bg-white rounded-full px-5 py-2" onclick="window.location.href='https://onepagebooking.com/hotel-oma-ida'">
            Jetzt buchen
          </button>
</div>
</div>
</nav>

<header className="overflow-hidden bg-zinc-900 w-full h-[60vh] relative">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-0 right-0 bottom-0 left-0">
<div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="flex flex-col z-10 h-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pl-7 relative justify-center">
<div className="max-w-4xl">
<div className="flex items-center gap-3 mb-6 animate-[fadeIn_1s_ease-out]">
<div className="w-8 h-[1px] bg-white/30"></div>
<span className="uppercase text-xs text-zinc-300 tracking-[0.3em]">
              Braunlage, Harz
            </span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[0.9] text-glow text-5xl text-white tracking-tighter mb-6">
<span className="block font-medium">Anfahrt &amp; Lage</span>
<span className="block serif font-normal italic text-white/90">
              Willkommen im Harz
            </span>
</h1>
<p className="md:text-lg leading-relaxed text-base font-light text-zinc-400 max-w-lg">
            Zentral gelegen und doch mitten in der Natur. Ihr Weg zu uns führt
            durch die malerischen Landschaften des Nationalparks.
          </p>
</div>
</div>
</header>

<section className="z-20 -mt-10 bg-zinc-900 relative">
<div className="max-w-7xl mx-auto px-6 pb-24">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 space-y-8">

<div className="glass-panel p-8 rounded-2xl border border-white/5">
<span className="uppercase block text-xs text-zinc-500 tracking-widest mb-4">
                Zieladresse
              </span>
<h2 className="text-2xl text-white font-medium mb-4 serif">
                Hotel Oma Ida
              </h2>
<p className="text-zinc-300 leading-relaxed mb-6">
                Herzog-Wilhelm-Straße 10
                <br/>
                38700 Braunlage
                <br/>
                Deutschland
              </p>
<div className="flex flex-col gap-3 mb-8">
<a className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors group" href="tel:+49055209997979">
<span className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
<svg height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
                  +49 (0) 5520 999 79 79
                </a>
<a className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors group" href="mailto:mail@strand-berg.de">
<span className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
<svg height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect fill="none" height="16" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
                  mail@strand-berg.de
                </a>
</div>

<a className="w-full bg-white text-black hover:bg-zinc-200 transition-all rounded-lg px-4 py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold" href="https://www.google.com/maps/dir/?api=1&amp;destination=StrandBerg%27s+Oma+Ida+Bed+%26+Breakfast&amp;destination_place_id=ChIJAQBsOWMQpUcRlfD1UwKhdck" target="_blank">
<svg height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11l19-9l-9 19l-2-8l-8-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                Route zu Oma Ida starten
              </a>
</div>

<div className="space-y-6 pt-4">
<div className="group">
<h3 className="flex items-center gap-3 text-white font-medium mb-2 text-lg">
<svg className="text-zinc-500" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="7" cy="17" fill="none" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
<circle cx="17" cy="17" fill="none" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
<path d="M14 6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Anreise mit dem Auto
                </h3>
<p className="text-zinc-400 text-sm leading-relaxed pl-8 border-l border-white/10 ml-2.5">
                  Über die A7 (Abfahrt Rhüden) oder die B4 erreichen Sie uns
                  bequem. Das Hotel befindet sich zentral in Braunlage.
                  Kostenfreie Parkplätze stehen unseren Gästen direkt am Haus
                  zur Verfügung (nach Verfügbarkeit).
                </p>
</div>
<div className="group">
<h3 className="flex items-center gap-3 text-white font-medium mb-2 text-lg">
<svg className="text-zinc-500" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect fill="none" height="16" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16" x="4" y="4"></rect>
<path d="M4 11h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="m8 4 8 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="m16 4-8 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Öffentliche Verkehrsmittel
                </h3>
<p className="text-zinc-400 text-sm leading-relaxed pl-8 border-l border-white/10 ml-2.5">
                  Der nächste Bahnhof befindet sich in Bad Harzburg oder
                  Wernigerode. Von dort aus fahren regelmäßig Busse direkt nach
                  Braunlage (Haltestelle Eisstadion oder ZOB).
                </p>
</div>
</div>
</div>

<div className="lg:col-span-8 h-[500px] lg:h-auto min-h-[500px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl map-container bg-zinc-800 group flex flex-col">
<div className="relative w-full flex-grow bg-zinc-800 overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center z-0">
<span className="animate-pulse text-zinc-600 uppercase tracking-widest text-xs">
                  Karte wird geladen...
                </span>
</div>
<iframe allowfullscreen="" className="relative z-10 w-full h-full transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=StrandBerg's%20Oma%20Ida%20Bed%20%26%20Breakfast%20Braunlage&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>

<div className="mt-24 pt-16 border-t border-white/5">
<div className="mb-12">
<span className="uppercase block text-xs text-zinc-500 tracking-widest mb-4">
              Umgebung
            </span>
<h3 className="text-3xl text-white font-medium tracking-tight">
              Entfernungen
            </h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl bg-zinc-800/50 border border-white/5 hover:border-white/20 transition-colors">
<svg className="text-white mb-4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m-4-4l4-4l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="text-2xl font-medium text-white mb-1">2 Min</div>
<div className="text-xs uppercase tracking-widest text-zinc-500">
                Zum Kurpark
              </div>
</div>
<div className="p-6 rounded-2xl bg-zinc-800/50 border border-white/5 hover:border-white/20 transition-colors">
<svg className="text-white mb-4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m8 3l4 8l5-5l5 15H2L8 3zM2 14h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="text-2xl font-medium text-white mb-1">900 m</div>
<div className="text-xs uppercase tracking-widest text-zinc-500">
                Wurmberg Seilbahn
              </div>
</div>
<div className="p-6 rounded-2xl bg-zinc-800/50 border border-white/5 hover:border-white/20 transition-colors">
<svg className="text-white mb-4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M9 22V12h6v10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="text-2xl font-medium text-white mb-1">500 m</div>
<div className="text-xs uppercase tracking-widest text-zinc-500">
                Stadtzentrum
              </div>
</div>
<div className="p-6 rounded-2xl bg-zinc-800/50 border border-white/5 hover:border-white/20 transition-colors">
<svg className="text-white mb-4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
<path d="M16 12h-4V8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="text-2xl font-medium text-white mb-1">15 Min</div>
<div className="text-xs uppercase tracking-widest text-zinc-500">
                Zum Brocken (Auto)
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="text-sm font-light text-zinc-500 bg-zinc-900 border-white/5 border-t pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="col-span-1 sm:col-span-2 lg:col-span-1">
<h3 className="serif text-2xl text-white tracking-tighter mb-6">
          Hotel Oma Ida
        </h3>
<p className="leading-relaxed mb-6">
          Herzog Wilhelm Straße 10
          <br/>
          38700 Braunlage, Deutschland
        </p>
<div className="flex flex-col gap-2 mb-8">
<a className="hover:text-white transition-colors text-xs tracking-wide" href="/tel:+49055209997979">
            +49 (0) 5520 999 79 79
          </a>
<a className="hover:text-white transition-colors text-xs tracking-wide" href="/mailto:mail@strand-berg.de">
            mail@strand-berg.de
          </a>
</div>

<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="https://www.instagram.com/strandberg_fewo/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-instagram" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="https://www.facebook.com/strandbergferienwohnungen" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-facebook" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a className="flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all w-8 h-8 border-zinc-800 border rounded-full" href="https://www.tiktok.com/@strandberg_fewo" rel="noopener noreferrer" target="_blank">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="https://www.linkedin.com/company/strandbergfewo" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-linkedin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
          Zimmer
        </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className="">
<a className="hover:text-white transition-colors" href="/zimmer">
              Alle Zimmer
            </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/doppelzimmer">
              Doppelzimmer
            </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/komfort-doppelzimmer">
              Komfort Doppelzimmer
            </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/superior-doppelzimmer">
              Superior Doppelzimmer
            </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
          Entdecken
        </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className="">
<a className="hover:text-white transition-colors" href="/angebote">
              Angebote
            </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/harz">
              Harz &amp; Umgebung
            </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/relax">
              Relax
            </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
          Informationen
        </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className="">
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/anfragen">
              Kontakt
            </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/anfahrt">
              Anfahrt &amp; Lage
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="/faq">
              FAQ
            </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
          Rechtliches
        </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li>
<a className="hover:text-white transition-colors" href="/datenschutz">
              Datenschutzerklärung
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="/impressum">
              Impressum
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="/agb">
              AGB
            </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p className="">
        © 2026 StrandBerg GmbH. Alle Rechte vorbehalten.
      </p>
</div>
</div>
</footer>

<div className="fixed md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-auto z-50 flex flex-col md:flex-row md:rounded-full transition-all duration-500 animate-[fadeIn_0.5s_ease-out] bg-zinc-900/95 border-white/10 border rounded-3xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 right-4 bottom-8 left-4 shadow-2xl backdrop-blur-xl items-center justify-between" id="floating-bar">
<div className="relative group px-5 py-3 md:py-3 w-full md:w-auto border-b md:border-b-0 border-white/10 md:border-r hover:bg-white/5 transition-colors rounded-t-3xl md:rounded-l-full md:rounded-tr-none cursor-pointer" onclick="toggleCalendar('float')">
<label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-500 mb-1 cursor-pointer">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
          Reisedaten
        </label>
<div className="flex items-center gap-2 text-xs text-white font-medium" id="float-date-display">
          09.01.2026 - 10.01.2026
        </div>
<input id="float-arrival" type="hidden" value="2026-01-09"/>
<input id="float-departure" type="hidden" value="2026-01-10"/>
<div className="hidden absolute bottom-[calc(100%+12px)] left-0 z-50 p-4 rounded-3xl glass-dropdown min-w-[320px] md:min-w-[600px] shadow-2xl origin-bottom-left transition-all duration-200" id="float-calendar-dropdown" onclick="event.stopPropagation()">

</div>
</div>
<div className="relative group px-5 py-3 md:py-3 w-full md:w-40 border-b md:border-b-0 border-white/10 md:border-r hover:bg-white/5 transition-colors cursor-pointer" onclick="toggleDropdown('float-guests-dropdown')">
<label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-500 mb-1 cursor-pointer">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
          Gäste
        </label>
<div className="flex items-center justify-between text-xs text-white font-medium">
<span id="float-guests-display">2 Erwachsene</span>
<svg className="text-zinc-500" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<input id="float-guests-value" type="hidden" value="2"/>
<div className="hidden absolute bottom-[calc(100%+8px)] left-0 w-full min-w-[180px] glass-dropdown rounded-2xl p-1 z-50 flex flex-col shadow-xl origin-bottom transition-all duration-200" id="float-guests-dropdown" onclick="event.stopPropagation()">
<div className="hover:bg-white/10 rounded-lg px-3 py-2 text-xs text-zinc-300 hover:text-white cursor-pointer transition-colors" onclick="selectOption('float', 'guests', '1', '1 Erwachsener')">
            1 Erwachsener
          </div>
<div className="hover:bg-white/10 rounded-lg px-3 py-2 text-xs text-white font-medium bg-white/5 cursor-pointer transition-colors" onclick="selectOption('float', 'guests', '2', '2 Erwachsene')">
            2 Erwachsene
          </div>
<div className="hover:bg-white/10 rounded-lg px-3 py-2 text-xs text-zinc-300 hover:text-white cursor-pointer transition-colors" onclick="selectOption('float', 'guests', '3', '3 Erwachsene')">
            3 Erwachsene
          </div>
</div>
</div>
<div className="relative group px-5 py-3 md:py-3 w-full md:w-40 hover:bg-white/5 transition-colors rounded-b-3xl md:rounded-none cursor-pointer" onclick="toggleDropdown('float-rooms-dropdown')">
<label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-500 mb-1 cursor-pointer">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20v-8m20 8v-8M4 10h16M2 14h20M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"></path>
</svg>
          Zimmer
        </label>
<div className="flex items-center justify-between text-xs text-white font-medium">
<span id="float-rooms-display">1 Zimmer</span>
<svg className="text-zinc-500" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<input id="float-rooms-value" type="hidden" value="1"/>
<div className="hidden absolute bottom-[calc(100%+8px)] left-0 w-full min-w-[180px] glass-dropdown rounded-2xl p-1 z-50 flex flex-col shadow-xl origin-bottom transition-all duration-200" id="float-rooms-dropdown" onclick="event.stopPropagation()">
<div className="hover:bg-white/10 rounded-lg px-3 py-2 text-xs text-white font-medium bg-white/5 cursor-pointer transition-colors" onclick="selectOption('float', 'rooms', '1', '1 Zimmer')">
            1 Zimmer
          </div>
<div className="hover:bg-white/10 rounded-lg px-3 py-2 text-xs text-zinc-300 hover:text-white cursor-pointer transition-colors" onclick="selectOption('float', 'rooms', '2', '2 Zimmer')">
            2 Zimmer
          </div>
<div className="hover:bg-white/10 rounded-lg px-3 py-2 text-xs text-zinc-300 hover:text-white cursor-pointer transition-colors" onclick="selectOption('float', 'rooms', '3', '3 Zimmer')">
            3 Zimmer
          </div>
</div>
</div>
<div className="p-1.5 w-full md:w-auto">
<button className="w-full md:w-auto bg-white text-black rounded-full px-6 py-3 flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)] group cursor-pointer relative overflow-hidden" onclick="executeSearch('float')">
<span className="text-xs tracking-widest uppercase font-semibold relative z-10">
            Suchen
          </span>
<svg className="group-hover:translate-x-0.5 transition-transform relative z-10" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7"></path>
</svg>
</button>
</div>
</div>



    </>
  );
}
