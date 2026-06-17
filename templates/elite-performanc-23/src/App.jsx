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



          (function(){
            const section = document.querySelector('[data-element-id="aura-emlktoxzg2hkusty"]');
            if (!section) return;

            const track = section.querySelector('[data-slider-track="true"]');
            if (!track) return;

            const items = Array.from(track.children);
            if (!items.length) return;

            const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            let rafId = null;
            let lastT = null;
            let x = 0;

            const gap = (function(){
              const cs = getComputedStyle(track);
              const g = parseFloat(cs.columnGap || cs.gap || '0');
              return Number.isFinite(g) ? g : 0;
            })();

            function setTransform(px){
              track.style.transform = 'translate3d(' + px.toFixed(2) + 'px, 0, 0)';
            }

            function measureSetWidth(){
              const half = Math.floor(items.length / 2);
              const set = items.slice(0, half);
              if (!set.length) return track.scrollWidth / 2;

              let w = 0;
              for (let i = 0; i < set.length; i++){
                w += set[i].getBoundingClientRect().width;
                if (i !== set.length - 1) w += gap;
              }
              return w;
            }

            let setWidth = 0;
            function refresh(){
              track.style.transform = 'translate3d(0,0,0)';
              x = 0;
              setWidth = measureSetWidth();
              setTransform(0);
            }

            const SPEED = 36; // px/s

            function tick(t){
              if (prefersReduced) return;
              if (lastT == null) lastT = t;
              const dt = Math.min(64, t - lastT) / 1000;
              lastT = t;

              x -= SPEED * dt;
              if (setWidth > 0 && Math.abs(x) >= setWidth) x += setWidth;

              setTransform(x);
              rafId = requestAnimationFrame(tick);
            }

            function start(){
              if (prefersReduced) return;
              if (rafId) cancelAnimationFrame(rafId);
              lastT = null;
              rafId = requestAnimationFrame(tick);
            }

            function stop(){
              if (rafId) cancelAnimationFrame(rafId);
              rafId = null;
              lastT = null;
            }

            refresh();
            start();

            section.addEventListener('mouseenter', stop);
            section.addEventListener('mouseleave', start);
            window.addEventListener('resize', function(){
              refresh();
              start();
            }, { passive: true });
          })();
        
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b bg-neutral-950/80 border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-base font-bold tracking-tighter text-white" href="#">COLE<span className="accent">.</span>HARRIS</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium transition-colors text-neutral-400 hover:text-white" href="#metoda">Metoda</a>
<a className="text-xs font-medium transition-colors text-neutral-400 hover:text-white" href="#wyniki">Wyniki</a>
<a className="text-xs font-medium transition-colors text-neutral-400 hover:text-white" href="#aplikuj">Aplikuj</a>
</div>
<a className="accent-bg text-xs font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity text-neutral-950" href="#aplikuj">Aplikuj teraz</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-16">
<div className="absolute inset-0 z-0">
<img alt="" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&amp;q=80" style={{filter: 'grayscale(60%) contrast(1.2)'}}/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/70"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50"></div>
</div>
<div className="overflow-hidden z-1 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c8ff00]/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 right-0 h-48 gradient-fade"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="flex items-center gap-2 mb-8">
<span className="w-2 h-2 rounded-full accent-bg pulse-dot"></span>
<span className="mono text-xs uppercase tracking-widest text-neutral-400">Obecnie przyjmuję 4 nowych klientów</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
                        Nie brakuje Ci<br/>
<span className="accent">formy.</span><br/>
                        Brakuje Ci<br/>
<span className="text-neutral-500">systemów.</span>
</h1>
<p className="text-base sm:text-lg max-w-xl leading-relaxed mb-10 font-light text-neutral-400">
                        Twoja dyscyplina zbudowała firmę. Twoje ciało zostało w tyle. Przestań traktować fitness jak hobby. To infrastruktura. Instaluję system operacyjny, który czyni liderów <span className="font-medium text-white">nie do zatrzymania.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="accent-bg text-sm font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-center text-neutral-950" href="#aplikuj">
                            Aplikuj o transformację
                        </a>
<a className="transition-colors hover:border-white/25 text-sm font-medium text-white text-center border-white/10 border rounded-full pt-4 pr-8 pb-4 pl-8" href="#metoda">
                            Poznaj metodę
                        </a>
</div>
<div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/5">
<div>
<div className="text-2xl font-bold tracking-tight accent">340+</div>
<div className="text-xs text-neutral-500 mt-1">Liderów biznesu</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-2xl font-bold tracking-tight accent">97%</div>
<div className="text-xs text-neutral-500 mt-1">Wskaźnik sukcesu</div>
</div>
<div className="w-px h-10 hidden sm:block bg-white/10"></div>
<div className="hidden sm:block">
<div className="text-2xl font-bold tracking-tight accent">12 lat</div>
<div className="text-xs text-neutral-500 mt-1">Doświadczenia</div>
</div>
</div>
</div>
<div className="hidden lg:block relative">
<div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/5">
<img alt="Trening" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&amp;q=80" style={{filter: 'grayscale(30%) contrast(1.1)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 z-10">
<div className="backdrop-blur-md bg-neutral-950/60 rounded-xl p-4 border border-white/10">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full accent-bg pulse-dot"></div>
<span className="mono text-xs text-neutral-300">Gotowość bojowa. Każdego dnia.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-white/5 border-t pt-4 pb-4 relative">
<div className="px-6">
<div aria-label="Slider treningów" className="relative" role="region">
<div className="overflow-hidden">
<div className="flex gap-4 will-change-transform" data-slider-track="true">

<div className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Sled push" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="bg-gradient-to-t from-neutral-950/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute bottom-3 left-3 mono text-xs text-neutral-400 uppercase tracking-wider">Pchanie sań</span>
</div>
<div className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Wioślarz" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<span className="absolute bottom-3 left-3 mono text-xs text-neutral-400 uppercase tracking-wider">Wioślarz</span>
</div>
<div className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Bieganie" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<span className="absolute bottom-3 left-3 mono text-xs text-neutral-400 uppercase tracking-wider">Wytrzymałość</span>
</div>
<div className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Trening" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<span className="absolute bottom-3 left-3 mono text-xs text-neutral-400 uppercase tracking-wider">Funkcjonalność</span>
</div>

<div aria-hidden="true" className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden relative border border-white/5">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="bg-gradient-to-t from-neutral-950/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute bottom-3 left-3 mono text-xs text-neutral-400 uppercase tracking-wider">Pchanie sań</span>
</div>
<div aria-hidden="true" className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden relative border border-white/5">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<span className="absolute bottom-3 left-3 mono text-xs text-neutral-400 uppercase tracking-wider">Wioślarz</span>
</div>
<div aria-hidden="true" className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden relative border border-white/5">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<span className="absolute bottom-3 left-3 mono text-xs text-neutral-400 uppercase tracking-wider">Wytrzymałość</span>
</div>
<div aria-hidden="true" className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden relative border border-white/5">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<span className="absolute bottom-3 left-3 mono text-xs text-neutral-400 uppercase tracking-wider">Funkcjonalność</span>
</div>
</div>
</div>
<div className="pointer-events-none absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-neutral-950 to-transparent"></div>
<div className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-neutral-950 to-transparent"></div>
</div>
</div>

</section>

<section className="relative py-24 md:py-32 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<span className="mono text-xs accent uppercase tracking-widest">Problem</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6">
                    Branża fitness została<br/><span className="line-through text-neutral-600">zaprojektowana</span> stworzona<br/>byś ponosił porażkę.
                </h2>
<p className="text-base leading-relaxed font-light text-neutral-400">
                    Sprzedano Ci systemy dla osób z nieograniczonym czasem i brakiem obowiązków. Oto co naprawdę Cię powstrzymuje.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="bg-white/[0.02] border rounded-2xl p-8 transition-all card-glow border-white/5 hover:border-white/10">
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{color: '#ef4444'}} width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-base font-semibold tracking-tight mb-2">"Po prostu ćwicz więcej i jedz mniej."</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Deficyt kaloryczny bez kontekstu metabolicznego to sabotaż. Nie jesteś równaniem termodynamicznym. Twój kortyzol jest zbyt wysoki, sen kuleje, a ciało jest w trybie przetrwania.</p>
</div>
</div>
</div>
<div className="bg-white/[0.02] border rounded-2xl p-8 transition-all card-glow border-white/5 hover:border-white/10">
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{color: '#ef4444'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-2">"Ten 10-minutowy trening z aplikacji zmieni Twoje życie."</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Aplikacja za 50 zł miesięcznie nie zna Twojej historii kontuzji, poziomu stresu, harmonogramu podróży ani faktu, że nie spałeś więcej niż 5 godzin od dwóch tygodni.</p>
</div>
</div>
</div>
<div className="bg-white/[0.02] border rounded-2xl p-8 transition-all card-glow border-white/5 hover:border-white/10">
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{color: '#ef4444'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-2">"Ekstremalne cardio to klucz do utraty tłuszczu."</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Zajeżdżanie się biegami podnosi kortyzol, spala mięśnie i obniża testosteron. Kończysz lżejszy, ale słabszy, sflaczały i bardziej wyczerpany.</p>
</div>
</div>
</div>
<div className="bg-white/[0.02] border rounded-2xl p-8 transition-all card-glow border-white/5 hover:border-white/10">
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{color: '#ef4444'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-2">"Potrzebujesz po prostu więcej motywacji."</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Motywacja to uczucie. Uczucia są zawodne. Nie zbudowałeś firmy na motywacji — zbudowałeś ją na systemach, odpowiedzialności i nienegocjowalnych standardach.</p>
</div>
</div>
</div>
</div>
<div className="mt-12 p-8 rounded-2xl border border-[#c8ff00]/20 bg-[#c8ff00]/[0.03]">
<p className="text-base sm:text-lg font-medium text-center text-white">
                    Odpowiedzią nie jest większy wysiłek. To <span className="accent font-semibold">lepsza inżynieria.</span>
</p>
</div>
</div>
</section>

<section className="relative py-24 md:py-32" id="metoda">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="mono text-xs accent uppercase tracking-widest">Model pracy</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6">
                    Protokół Harrisa<span className="accent">.</span>
</h2>
<p className="text-base leading-relaxed font-light text-neutral-400">
                    Trzy zintegrowane filary. Bez zbędnych wypełniaczy. Każda zmienna jest zaprojektowana pod Twoją fizjologię, psychologię i harmonogram.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white/[0.02] border rounded-2xl overflow-hidden hover:border-[#c8ff00]/20 transition-all card-glow relative border-white/5">
<div className="relative h-48 overflow-hidden">
<img alt="Inżynieria metaboliczna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>
<div className="absolute top-4 left-4 mono text-xs text-neutral-400">01</div>
</div>
<div className="p-8">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/5">
<iconify-icon className="accent" icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Inżynieria<br/>Metaboliczna</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                            Nie zgadujemy. Testujemy. Badania krwi, markery metaboliczne, panele hormonalne — budujemy protokół skalibrowany pod Twoją biologię.
                        </p>
</div>
</div>

<div className="group bg-white/[0.02] border rounded-2xl overflow-hidden hover:border-[#c8ff00]/20 transition-all card-glow relative border-white/5">
<div className="relative h-48 overflow-hidden">
<img alt="Siła mentalna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>
<div className="absolute top-4 left-4 mono text-xs text-neutral-400">02</div>
</div>
<div className="p-8">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/5">
<iconify-icon className="accent" icon="solar:mind-map-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Siła<br/>Mentalna</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                            Transformacja fizyczna to wydarzenie psychologiczne. Demontujemy historie, które sobie opowiadasz i instalujemy tożsamość człowieka czynu.
                        </p>
</div>
</div>

<div className="group bg-white/[0.02] border rounded-2xl overflow-hidden hover:border-[#c8ff00]/20 transition-all card-glow relative border-white/5">
<div className="relative h-48 overflow-hidden">
<img alt="Integracja stylu życia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&amp;q=80" style={{filter: 'grayscale(40%) contrast(1.15)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>
<div className="absolute top-4 left-4 mono text-xs text-neutral-400">03</div>
</div>
<div className="p-8">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/5">
<iconify-icon className="accent" icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Integracja<br/>Stylu Życia</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                            Podróżujesz 200 dni w roku? Spotkania do północy? Świetnie. Protokół adaptuje się do Twojego chaosu — nigdy odwrotnie.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 border-t border-white/5" id="wyniki">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="mono text-xs accent uppercase tracking-widest">Case studies</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6">
                    Wyniki to jedyna<br/>waluta, która się liczy<span className="accent">.</span>
</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/[0.02] border rounded-2xl p-8 border-white/5">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold accent bg-neutral-800">MR</div>
<div>
<div className="text-sm font-semibold">Marek R.</div>
<div className="text-xs text-neutral-500">CEO, Firma SaaS</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/[0.02] rounded-xl text-center">
<div>
<div className="text-lg font-bold accent">-14kg</div>
<div className="text-[10px] uppercase text-neutral-600">Tłuszcz</div>
</div>
<div className="border-x border-white/5">
<div className="text-lg font-bold accent">3x</div>
<div className="text-[10px] uppercase text-neutral-600">Energia</div>
</div>
<div>
<div className="text-lg font-bold accent">8h</div>
<div className="text-[10px] uppercase text-neutral-600">Sen</div>
</div>
</div>
<p className="text-sm leading-relaxed font-light text-neutral-400">
                        "Prowadziłem firmę wartą 40 mln USD na 5 godzinach snu i potrójnym espresso. Cole nie tylko zmienił moje ciało — on przeinstalował mój sposób działania."
                    </p>
</div>

<div className="bg-white/[0.02] border rounded-2xl p-8 border-white/5">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold accent bg-neutral-800">SK</div>
<div>
<div className="text-sm font-semibold">Sara K.</div>
<div className="text-xs text-neutral-500">Partner, Kancelaria Prawna</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/[0.02] rounded-xl text-center">
<div>
<div className="text-lg font-bold accent">-18%</div>
<div className="text-[10px] uppercase text-neutral-600">BF</div>
</div>
<div className="border-x border-white/5">
<div className="text-lg font-bold accent">+40%</div>
<div className="text-[10px] uppercase text-neutral-600">Siła</div>
</div>
<div>
<div className="text-lg font-bold accent">5</div>
<div className="text-[10px] uppercase text-neutral-600">Podciągnięć</div>
</div>
</div>
<p className="text-sm leading-relaxed font-light text-neutral-400">
                        "Próbowałam wszystkiego — keto, trenerów z sieciówek, aplikacji. Cole był pierwszą osobą, która potraktowała moje cele z taką samą powagą, z jaką ja podchodzę do sali rozpraw."
                    </p>
</div>

<div className="bg-white/[0.02] border rounded-2xl p-8 border-white/5">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold accent bg-neutral-800">DP</div>
<div>
<div className="text-sm font-semibold">Dawid P.</div>
<div className="text-xs text-neutral-500">Founder, Fundusz PE</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/[0.02] rounded-xl text-center">
<div>
<div className="text-lg font-bold accent">-12kg</div>
<div className="text-[10px] uppercase text-neutral-600">Waga</div>
</div>
<div className="border-x border-white/5">
<div className="text-lg font-bold accent">-45%</div>
<div className="text-[10px] uppercase text-neutral-600">Kortyzol</div>
</div>
<div>
<div className="text-lg font-bold accent">-15l</div>
<div className="text-[10px] uppercase text-neutral-600">Wiek biol.</div>
</div>
</div>
<p className="text-sm leading-relaxed font-light text-neutral-400">
                        "Lekarz powiedział, że jestem tykającą bombą. W wieku 47 lat miałem biomarkery 60-latka. Pół roku z Cole'em — mój wiek biologiczny cofnął się o 15 lat."
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<span className="mono text-xs accent uppercase tracking-widest">Ostrzeżenie</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6">
                        To nie jest<br/>dla każdego<span className="accent">.</span>
</h2>
<p className="text-base leading-relaxed font-light mb-8 text-neutral-400">
                        Odrzucam więcej zgłoszeń, niż akceptuję. Nie dlatego, że chcę być ekskluzywny — ale dlatego, że to działa tylko wtedy, gdy spełniasz określone standardy.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 bg-red-500/[0.03] border border-red-500/10 rounded-xl">
<iconify-icon className="flex-shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5" style={{color: '#ef4444'}} width="20"></iconify-icon>
<p className="text-xs text-neutral-500 leading-relaxed"><span className="block font-semibold text-white mb-1">Szukający dróg na skróty</span>Budujemy ciała na dekady, nie na jedno zdjęcie z wakacji.</p>
</div>
<div className="flex items-start gap-4 p-4 bg-red-500/[0.03] border border-red-500/10 rounded-xl">
<iconify-icon className="flex-shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5" style={{color: '#ef4444'}} width="20"></iconify-icon>
<p className="text-xs text-neutral-500 leading-relaxed"><span className="block font-semibold text-white mb-1">Architekci wymówek</span>"Jestem zbyt zajęty" to narracja, nie fakt. Każdy z moich klientów zarządza milionami i ma taką samą dobę.</p>
</div>
</div>
</div>
<div className="bg-[#c8ff00]/[0.03] border border-[#c8ff00]/15 rounded-2xl p-8">
<h3 className="text-lg font-semibold tracking-tight mb-6 accent">To JEST dla Ciebie, jeśli:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm font-light text-neutral-300">
<iconify-icon className="accent flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Zbudowałeś coś wyjątkowego w karierze, ale Twoje ciało nie odzwierciedla Twoich ambicji.
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-neutral-300">
<iconify-icon className="accent flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Rozumiesz, że elitarne wyniki wymagają elitarnej inwestycji — czasu, pieniędzy i wysiłku.
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-neutral-300">
<iconify-icon className="accent flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Chcesz być sprawny i dominujący fizycznie po 60-tce i 70-tce.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 border-t border-white/5" id="aplikuj">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="mono text-xs accent uppercase tracking-widest">Zacznij tutaj</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6">
                    Twoje ciało to Twój atut<br/>lub obciążenie<span className="accent">.</span>
</h2>
<p className="text-base text-neutral-400 font-light">
                    To nie jest newsletter. To aplikacja. Jeśli się zakwalifikujesz, skontaktuję się w ciągu 48h w celu umówienia 15-minutowej rozmowy strategicznej.
                </p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Dziękujemy za zgłoszenie. Skontaktujemy się wkrótce.');">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium mb-2 text-neutral-400">Imię i Nazwisko *</label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-2 text-neutral-400">Email *</label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-2 text-neutral-400">Stanowisko / Firma *</label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-2 text-neutral-400">Jaka jest Twoja największa frustracja fizyczna? *</label>
<textarea className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white resize-none" required="" rows="3"></textarea>
</div>
<div>
<label className="block text-xs font-medium mb-2 text-neutral-400">W skali 1-10, jak bardzo jesteś zdeterminowany, by dokonać transformacji? *</label>
<input className="w-full accent-bg h-1 rounded-lg cursor-pointer" max="10" min="1" step="1" type="range"/>
<div className="flex justify-between text-[10px] text-neutral-600 mt-2 mono">
<span>1 - TYLKO PATRZĘ</span>
<span>10 - ZA WSZELKĄ CENĘ</span>
</div>
</div>
<button className="w-full accent-bg text-sm font-semibold py-4 rounded-full text-neutral-950 hover:opacity-90 transition-opacity" type="submit">
                    Wyślij aplikację
                </button>
</form>
</div>
</section>

<footer className="border-t py-12 border-white/5">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-base font-bold tracking-tighter text-white">COLE<span className="accent">.</span>HARRIS</div>
<div className="text-[10px] text-neutral-600 mono uppercase tracking-widest">
                © 2025 Cole Harris. Wszelkie prawa zastrzeżone.
            </div>
</div>
</footer>

    </>
  );
}
