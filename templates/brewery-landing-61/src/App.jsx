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



    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    btn?.addEventListener('click', () => {
      const isHidden = menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(isHidden));
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    // Close mobile menu on link click
    menu?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (!menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
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
      

<div className="pointer-events-none fixed inset-0 opacity-[0.12] mix-blend-multiply" style="background-image:
         radial-gradient(circle at 20% 10%, rgba(36,26,20,0.08) 0, rgba(36,26,20,0.00) 55%),
         radial-gradient(circle at 80% 30%, rgba(36,26,20,0.06) 0, rgba(36,26,20,0.00) 60%),
         radial-gradient(circle at 35% 85%, rgba(36,26,20,0.05) 0, rgba(36,26,20,0.00) 55%),
         repeating-linear-gradient(0deg, rgba(36,26,20,0.06) 0 1px, rgba(36,26,20,0.00) 1px 6px);
       "></div>

<header className="sticky top-0 z-50 border-b border-[#241A14]/15 bg-[#FBF3E7]/90 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">

<a className="group inline-flex items-center gap-3" href="#">
<div className="relative">
<div className="h-10 w-10 border border-[#241A14]/20 bg-white/60 shadow-sm ring-1 ring-[#C8782A]/10 grid place-items-center">
<span className="text-[#7B3F16] font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>H</span>
</div>
<div className="absolute -bottom-1 -right-1 h-3 w-3 border border-[#241A14]/15 bg-[#86A65B]/80"></div>
</div>
<div className="leading-tight">
<div className="text-lg sm:text-xl font-semibold tracking-tight text-[#241A14]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
              Brauerei Hauf
            </div>
<div className="text-xs text-[#241A14]/70 tracking-wide">
              Seit 1901
            </div>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm text-[#241A14]/80">
<a className="hover:text-[#241A14] transition" href="#biere">Unsere Biere</a>
<a className="hover:text-[#241A14] transition" href="#ueberuns">Über uns</a>
<a className="hover:text-[#241A14] transition" href="#fuehrung">Brauereiführung</a>
<a className="hover:text-[#241A14] transition" href="#wildermann">Gaststätte „Wilder Mann“</a>
<a className="hover:text-[#241A14] transition" href="#drive">Top 1 Getränke-Drive</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center bg-[#C8782A] px-4 py-2 text-sm font-semibold text-[#FFF6EC] shadow-sm shadow-[#241A14]/10 ring-1 ring-inset ring-white/10 hover:bg-[#B96F27] transition" href="#shop">
            Shop &amp; Fan-Artikel
          </a>
<button aria-controls="mobileMenu" aria-expanded="false" className="lg:hidden inline-flex items-center justify-center border border-[#241A14]/20 bg-white/50 px-3 py-2 text-sm font-semibold text-[#241A14] hover:bg-white/70 transition" id="menuBtn">
<span className="sr-only">Menü öffnen</span>
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden hidden pb-4" id="mobileMenu">
<div className="border border-[#241A14]/15 bg-white/60 p-4 shadow-sm ring-1 ring-[#C8782A]/10">
<div className="grid gap-3 text-sm text-[#241A14]/85">
<a className="px-3 py-2 hover:bg-[#FBF3E7]/70 transition" href="#biere">Unsere Biere</a>
<a className="px-3 py-2 hover:bg-[#FBF3E7]/70 transition" href="#ueberuns">Über uns</a>
<a className="px-3 py-2 hover:bg-[#FBF3E7]/70 transition" href="#fuehrung">Brauereiführung</a>
<a className="px-3 py-2 hover:bg-[#FBF3E7]/70 transition" href="#wildermann">Gaststätte „Wilder Mann“</a>
<a className="px-3 py-2 hover:bg-[#FBF3E7]/70 transition" href="#drive">Top 1 Getränke-Drive</a>
<div className="pt-2">
<a className="inline-flex w-full items-center justify-center bg-[#C8782A] px-4 py-2 text-sm font-semibold text-[#FFF6EC] shadow-sm shadow-[#241A14]/10 ring-1 ring-inset ring-white/10 hover:bg-[#B96F27] transition" href="#shop">
                Shop &amp; Fan-Artikel
              </a>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden border-b border-[#241A14]/15">
<div className="absolute inset-0">
<div className="h-full w-full bg-center bg-cover" style="background-image:
             linear-gradient(120deg, rgba(36,26,20,0.88), rgba(36,26,20,0.62), rgba(200,120,42,0.10)),
             url('https://images.unsplash.com/photo-1466173341027-56e3f4f0b4a8?auto=format&amp;fit=crop&amp;w=2400&amp;q=70');">
</div>
<div className="absolute inset-0 opacity-[0.12] mix-blend-overlay" style="background-image:
             repeating-linear-gradient(0deg, rgba(255,255,255,0.10) 0 1px, rgba(255,255,255,0.00) 1px 8px),
             repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, rgba(255,255,255,0.00) 1px 10px);
           "></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-28">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-[#FFF6EC]/85 backdrop-blur">
<span className="h-1.5 w-1.5 bg-[#86A65B]"></span>
            Tradition aus Dinkelsbühl seit 1901.
          </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#FFF6EC]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
            A gscheits Bier. Mit Leidenschaft gebraut.
          </h1>
<p className="mt-4 text-sm sm:text-base text-[#FFF6EC]/85 leading-relaxed">
            Regionale Rohstoffe, über 100 Jahre Erfahrung und handwerkliche Sorgfalt. Entdecken Sie den Geschmack der Brauerei Hauf.
          </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 bg-[#C8782A] px-5 py-3 text-sm font-semibold text-[#FFF6EC] shadow-sm shadow-black/20 ring-1 ring-inset ring-white/10 hover:bg-[#B96F27] transition" href="#biere">
<iconify-icon className="text-lg" icon="solar:beer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Unsere Biere entdecken
            </a>
<a className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-[#FFF6EC] backdrop-blur hover:bg-white/10 transition" href="#fuehrung">
<iconify-icon className="text-lg" icon="solar:map-point-wave-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Zur Brauereiführung
            </a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
<div className="border border-white/15 bg-white/5 p-4 backdrop-blur">
<div className="flex items-center gap-2 text-xs font-semibold text-[#FFF6EC]">
<iconify-icon className="text-base" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Regional
              </div>
<div className="mt-1 text-xs text-[#FFF6EC]/75">Rohstoffe mit Herkunft.</div>
</div>
<div className="border border-white/15 bg-white/5 p-4 backdrop-blur">
<div className="flex items-center gap-2 text-xs font-semibold text-[#FFF6EC]">
<iconify-icon className="text-base" icon="solar:medal-ribbons-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Handwerk
              </div>
<div className="mt-1 text-xs text-[#FFF6EC]/75">Erfahrung seit 1901.</div>
</div>
<div className="border border-white/15 bg-white/5 p-4 backdrop-blur">
<div className="flex items-center gap-2 text-xs font-semibold text-[#FFF6EC]">
<iconify-icon className="text-base" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Sorgfalt
              </div>
<div className="mt-1 text-xs text-[#FFF6EC]/75">Mit Ruhe gereift.</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FBF3E7] to-transparent"></div>
</section>

<section className="relative" id="ueberuns">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-14 sm:py-16 lg:py-20">
<div className="grid items-center gap-10 lg:grid-cols-2">
<div>
<div className="inline-flex items-center gap-2 border border-[#241A14]/15 bg-white/60 px-3 py-1 text-xs font-medium text-[#241A14]/75">
<span className="h-1.5 w-1.5 bg-[#86A65B]/90"></span>
              Familienbrauerei in Dinkelsbühl
            </div>
<h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-[#241A14]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
              5 Generationen Herzblut.
            </h2>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#241A14]/80">
              Mein Name ist Florian Hauf. Ich habe unsere Brauerei 2017 in der 5. Generation übernommen und trete damit in die Fußstapfen meines Vaters. Unsere Familie führt den Betrieb mit sehr viel Leidenschaft. Die langjährige Erfahrung unserer Brauerfamilie und ein engagiertes Team sind die beste Voraussetzung für erstklassigen Biergenuss.
            </p>
<div className="mt-6 flex items-center gap-4">
<div className="h-11 w-11 border border-[#241A14]/15 bg-white/70 shadow-sm ring-1 ring-[#C8782A]/10 grid place-items-center">
<iconify-icon className="text-xl text-[#7B3F16]" icon="solar:user-hand-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#241A14]">Florian Hauf</div>
<div className="text-xs text-[#241A14]/65">Braumeister &amp; Inhaber</div>
</div>
</div>
<div className="mt-5">
<div className="text-2xl text-[#241A14]/85 tracking-tight" style={{fontFamily: 'Pacifico, cursive'}}>
                Florian Hauf, Braumeister
              </div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 -z-10 bg-gradient-to-br from-[#C8782A]/12 via-white/20 to-[#86A65B]/10 blur-2xl"></div>
<div className="border border-[#241A14]/15 bg-white/60 shadow-sm ring-1 ring-[#241A14]/5 overflow-hidden">
<div className="aspect-[4/5] w-full bg-center bg-cover" style="background-image:
                     linear-gradient(180deg, rgba(36,26,20,0.08), rgba(36,26,20,0.45)),
                     url('https://images.unsplash.com/photo-1516458466270-1b4d79b6d00b?auto=format&amp;fit=crop&amp;w=1600&amp;q=70');">
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold text-[#241A14]">Eindruck aus der Brauerei</div>
<div className="mt-1 text-xs text-[#241A14]/70">Sudhaus, Kupfer &amp; Handwerk – nah dran am Alltag.</div>
</div>
<div className="flex items-center gap-2 text-xs font-semibold text-[#241A14]/70">
<iconify-icon className="text-base" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Echt &amp; bodenständig
                  </div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="border border-[#241A14]/15 bg-white/50 p-4">
<div className="text-xs font-semibold text-[#241A14]/75">Seit</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-[#7B3F16]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>1901</div>
</div>
<div className="border border-[#241A14]/15 bg-white/50 p-4">
<div className="text-xs font-semibold text-[#241A14]/75">Generationen</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-[#7B3F16]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>5</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#F3ECE1] border-y border-[#241A14]/15" id="biere">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-14 sm:py-16 lg:py-20">
<div className="flex items-end justify-between gap-6 flex-col sm:flex-row">
<div>
<div className="inline-flex items-center gap-2 border border-[#241A14]/15 bg-white/60 px-3 py-1 text-xs font-medium text-[#241A14]/75">
<span className="h-1.5 w-1.5 bg-[#86A65B]/90"></span>
              Ausgewählte Empfehlungen
            </div>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#241A14]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
              Frisch aus dem Sudhaus.
            </h2>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-[#7B3F16] hover:text-[#241A14] transition" href="#shop">
            Zum Shop
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-3">

<article className="group border border-[#241A14]/15 bg-white/60 p-6 shadow-sm ring-1 ring-[#241A14]/5 hover:bg-white/70 transition">
<div className="flex items-start justify-between gap-4">
<div className="inline-flex items-center gap-2 border border-[#C8782A]/25 bg-[#C8782A]/10 px-3 py-1 text-xs font-semibold text-[#7B3F16]">
<span className="h-1.5 w-1.5 bg-[#C8782A]"></span>
                Neu &amp; Saisonal
              </div>
<div className="h-11 w-11 border border-[#241A14]/15 bg-[#FBF3E7]/70 grid place-items-center">
<iconify-icon className="text-xl text-[#7B3F16]" icon="solar:glass-water-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-[#241A14]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
              Hauf Naturtrüb
            </h3>
<p className="mt-2 text-sm leading-relaxed text-[#241A14]/75">
              Der unfiltrierte, naturtrübe untergärige Biergenuss.
            </p>
<div className="mt-5 flex items-center gap-3 text-xs text-[#241A14]/70">
<div className="inline-flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:drop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                samtig &amp; frisch
              </div>
<span className="text-[#241A14]/25">•</span>
<div className="inline-flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                hopfig fein
              </div>
</div>
</article>

<article className="group border border-[#241A14]/15 bg-white/60 p-6 shadow-sm ring-1 ring-[#241A14]/5 hover:bg-white/70 transition">
<div className="flex items-start justify-between gap-4">
<div className="inline-flex items-center gap-2 border border-[#241A14]/15 bg-white/50 px-3 py-1 text-xs font-semibold text-[#241A14]/75">
<span className="h-1.5 w-1.5 bg-[#86A65B]"></span>
                Der Klassiker
              </div>
<div className="h-11 w-11 border border-[#241A14]/15 bg-[#FBF3E7]/70 grid place-items-center">
<iconify-icon className="text-xl text-[#7B3F16]" icon="solar:bottle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-[#241A14]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
              Hauf Alkoholfrei
            </h3>
<p className="mt-2 text-sm leading-relaxed text-[#241A14]/75">
              Voller Geschmack, ganz ohne Alkohol. Die perfekte Erfrischung.
            </p>
<div className="mt-5 flex items-center gap-3 text-xs text-[#241A14]/70">
<div className="inline-flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:sun-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                klar &amp; belebend
              </div>
<span className="text-[#241A14]/25">•</span>
<div className="inline-flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                alltagstauglich
              </div>
</div>
</article>

<article className="group border border-[#241A14]/15 bg-white/60 p-6 shadow-sm ring-1 ring-[#241A14]/5 hover:bg-white/70 transition" id="shop">
<div className="flex items-start justify-between gap-4">
<div className="inline-flex items-center gap-2 border border-[#C8782A]/25 bg-[#C8782A]/10 px-3 py-1 text-xs font-semibold text-[#7B3F16]">
<span className="h-1.5 w-1.5 bg-[#C8782A]"></span>
                Für Fans
              </div>
<div className="h-11 w-11 border border-[#241A14]/15 bg-[#FBF3E7]/70 grid place-items-center">
<iconify-icon className="text-xl text-[#7B3F16]" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-[#241A14]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
              Hauf Fan-Artikel
            </h3>
<p className="mt-2 text-sm leading-relaxed text-[#241A14]/75">
              Bierkrüge, Gläser und mehr für den vollendeten Genuss zu Hause.
            </p>
<div className="mt-5 flex items-center gap-3 text-xs text-[#241A14]/70">
<div className="inline-flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Geschenkideen
              </div>
<span className="text-[#241A14]/25">•</span>
<div className="inline-flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:ticket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                limitierte Stücke
              </div>
</div>
</article>
</div>
<div className="mt-10 flex justify-center">
<a className="inline-flex items-center justify-center gap-2 border border-[#241A14]/20 bg-white/60 px-5 py-3 text-sm font-semibold text-[#241A14] shadow-sm ring-1 ring-[#241A14]/5 hover:bg-white/80 transition" href="#sortiment">
            Zum gesamten Sortiment
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden border-y border-[#241A14]/15" id="wildermann">
<div className="absolute inset-0">
<div className="h-full w-full" style="background-image:
             linear-gradient(115deg, rgba(36,26,20,0.92), rgba(36,26,20,0.70), rgba(200,120,42,0.12)),
             radial-gradient(circle at 20% 20%, rgba(200,120,42,0.32), rgba(0,0,0,0) 60%),
             radial-gradient(circle at 80% 50%, rgba(134,166,91,0.14), rgba(0,0,0,0) 60%),
             url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&amp;fit=crop&amp;w=2400&amp;q=70');
             background-size: cover;
             background-position: center;
           ">
</div>
<div className="absolute inset-0 opacity-[0.16] mix-blend-overlay" style={{backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.10) 0 1px, rgba(255,255,255,0.00) 1px 9px)'}}>
</div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-[#FFF6EC]/85 backdrop-blur">
<iconify-icon className="text-base" icon="solar:fork-knife-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Fränkisch-bayrisch • Urig • Herzlich
          </div>
<h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FFF6EC]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
            Brauereigaststätte „Zum Wilden Mann“
          </h2>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#FFF6EC]/85">
            In unserer urigen Brauerstube und im idyllischen Biergarten vor dem Haus laden leckere fränkisch-bayrische Gerichte und gepflegte Hauf-Biere zum Verweilen ein. Ob zum Essen, Stammtisch oder einfach auf ein Bier – Sie sind herzlich willkommen!
          </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 bg-[#C8782A] px-5 py-3 text-sm font-semibold text-[#FFF6EC] shadow-sm shadow-black/20 ring-1 ring-inset ring-white/10 hover:bg-[#B96F27] transition" href="https://wildermann-dinkelsbuehl.de" rel="noopener" target="_blank">
              Mehr erfahren
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-[#FFF6EC] backdrop-blur hover:bg-white/10 transition" href="#drive">
<iconify-icon className="text-lg" icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Getränke-Drive
            </a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="border border-white/15 bg-white/5 p-4 backdrop-blur">
<div className="text-xs font-semibold text-[#FFF6EC]">Biergarten</div>
<div className="mt-1 text-xs text-[#FFF6EC]/75">Saisonal &amp; gemütlich.</div>
</div>
<div className="border border-white/15 bg-white/5 p-4 backdrop-blur">
<div className="text-xs font-semibold text-[#FFF6EC]">Brauerstube</div>
<div className="mt-1 text-xs text-[#FFF6EC]/75">Urig mit Charakter.</div>
</div>
<div className="border border-white/15 bg-white/5 p-4 backdrop-blur">
<div className="text-xs font-semibold text-[#FFF6EC]">Hauf-Biere</div>
<div className="mt-1 text-xs text-[#FFF6EC]/75">Gepflegt gezapft.</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FBF3E7] to-transparent"></div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-12 sm:py-14">
<div className="mx-auto max-w-3xl border border-[#241A14]/20 bg-white/60 p-6 sm:p-7 shadow-sm ring-1 ring-[#241A14]/5">
<div className="flex items-start gap-4">
<div className="h-11 w-11 border border-[#241A14]/15 bg-[#FBF3E7]/80 grid place-items-center">
<iconify-icon className="text-xl text-[#7B3F16]" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="min-w-0">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#241A14]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                Hinweis für Sammler (Etiketten &amp; Kronenkorken)
              </h3>
<p className="mt-2 text-sm leading-relaxed text-[#241A14]/80">
                Wir freuen uns über Ihr Interesse! Bitte senden Sie uns für Sammlerstücke einfach einen ausreichend frankierten Rückumschlag per Post zu. Ihre Anfrage wird dann kommentarlos bearbeitet. Bitte sehen Sie von E-Mail-Anfragen ab.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="drive">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="pb-6 sm:pb-8">
<div className="border border-[#241A14]/15 bg-[#FBF3E7] p-6 sm:p-7">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold text-[#241A14]">Top 1 Getränke-Drive</div>
<div className="mt-1 text-xs text-[#241A14]/70">Praktisch abholen – regionale Getränke, schnell und unkompliziert.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 border border-[#241A14]/20 bg-white/60 px-4 py-2 text-sm font-semibold text-[#241A14] hover:bg-white/80 transition" href="#kontakt">
              Kontakt &amp; Öffnungszeiten
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#241A14] text-[#FFF6EC]/85">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-14 sm:py-16">
<div className="grid gap-10 lg:grid-cols-3">

<div>
<div className="text-xl font-semibold tracking-tight text-[#FFF6EC]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
              Brauerei Hauf
            </div>
<div className="mt-1 text-xs text-[#FFF6EC]/65 tracking-wide">Dinkelsbühl • Seit 1901</div>
<div className="mt-5 space-y-2 text-sm leading-relaxed">
<div className="text-[#FFF6EC]/80">Brauerei Hauf GmbH &amp; Co.KG</div>
<div className="text-[#FFF6EC]/80">Heiningerstrasse 28, 91550 Dinkelsbühl</div>
<div className="text-[#FFF6EC]/80">Tel: 09851/5752-0</div>
<div className="text-[#FFF6EC]/80">E-Mail: <a className="underline decoration-white/20 hover:decoration-white/50 transition" href="mailto:info@hauf-bier.de">info@hauf-bier.de</a></div>
</div>
<div className="mt-6 flex items-center gap-3 text-xs text-[#FFF6EC]/60">
<span className="h-1.5 w-1.5 bg-[#86A65B]/80"></span>
              Regional verwurzelt. Modern gebraut.
            </div>
</div>

<div>
<div className="text-sm font-semibold text-[#FFF6EC]">Links</div>
<div className="mt-4 grid gap-2 text-sm">
<a className="text-[#FFF6EC]/75 hover:text-[#FFF6EC] transition" href="#">Home</a>
<a className="text-[#FFF6EC]/75 hover:text-[#FFF6EC] transition" href="#ueberuns">Über uns</a>
<a className="text-[#FFF6EC]/75 hover:text-[#FFF6EC] transition" href="#fuehrung">Brauereiführung</a>
<a className="text-[#FFF6EC]/75 hover:text-[#FFF6EC] transition" href="#biere">Produkte</a>
<a className="text-[#FFF6EC]/75 hover:text-[#FFF6EC] transition" href="#karriere">Karriere</a>
</div>
</div>

<div>
<div className="text-sm font-semibold text-[#FFF6EC]">Rechtliches</div>
<div className="mt-4 grid gap-2 text-sm">
<a className="text-[#FFF6EC]/75 hover:text-[#FFF6EC] transition" href="#impressum">Impressum</a>
<a className="text-[#FFF6EC]/75 hover:text-[#FFF6EC] transition" href="#datenschutz">Datenschutz</a>
<a className="text-[#FFF6EC]/75 hover:text-[#FFF6EC] transition" href="#barrierefreiheit">Barrierefreiheit</a>
</div>
<div className="mt-8 border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#FFF6EC]/85" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-sm font-semibold text-[#FFF6EC]">Besuch &amp; Führung</div>
<div className="mt-1 text-xs text-[#FFF6EC]/65">Termine auf Anfrage – wir freuen uns auf Sie.</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-8">
<div className="text-xs text-[#FFF6EC]/55">
            © <span id="year"></span> Brauerei Hauf Dinkelsbühl. Alle Rechte vorbehalten.
          </div>
<div className="text-xs text-[#FFF6EC]/55">
<span className="tracking-tight" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>BH</span>
<span className="mx-2 text-[#FFF6EC]/25">|</span>
            Handwerk &amp; Herkunft
          </div>
</div>
</div>
</div>
</footer>

<div className="sr-only" id="fuehrung">Brauereiführung</div>
<div className="sr-only" id="sortiment">Sortiment</div>
<div className="sr-only" id="kontakt">Kontakt</div>
<div className="sr-only" id="karriere">Karriere</div>
<div className="sr-only" id="impressum">Impressum</div>
<div className="sr-only" id="datenschutz">Datenschutz</div>
<div className="sr-only" id="barrierefreiheit">Barrierefreiheit</div>


    </>
  );
}
