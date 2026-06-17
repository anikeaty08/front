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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
},
colors: {
navy: {
800: '#1e293b',
900: '#0f172a',
},
gold: {
500: '#d4af37',
600: '#b4941f',
}
},
boxShadow: {
'glow': '0 0 20px rgba(212, 175, 55, 0.15)',
}
}
}
}



        // Form Handling
        document.getElementById('heroForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = '<span class="iconify animate-spin w-5 h-5" data-icon="lucide:loader-2"></span> Wysyłanie...';
            btn.disabled = true;
            btn.classList.add('opacity-75');

            setTimeout(() => {
                btn.innerHTML = '<span class="iconify w-5 h-5" data-icon="lucide:check"></span> Wysłano pomyślnie';
                btn.classList.remove('bg-navy-900', 'hover:bg-navy-800');
                btn.classList.add('bg-green-600', 'hover:bg-green-700');
                this.reset();
                setTimeout(() => {
                    btn.innerHTML = originalContent;
                    btn.disabled = false;
                    btn.classList.remove('opacity-75', 'bg-green-600', 'hover:bg-green-700');
                    btn.classList.add('bg-navy-900', 'hover:bg-navy-800');
                }, 3000);
            }, 1500);
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
      

<header className="relative w-full min-h-[100vh] md:min-h-[850px] flex flex-col justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover object-top opacity-100" src="https://bukowski-kielce.pl/wp-content/uploads/2024/06/IMG_2679-scaled-1.jpg"/>

<div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
</div>

<nav className="absolute top-0 w-full z-50 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-3 text-white">
<div className="w-10 h-10 bg-gold-500 rounded flex items-center justify-center text-navy-900">
<span className="iconify w-6 h-6" data-icon="lucide:scale" data-strokeWidth="1.5"></span>
</div>
<div>
<span className="block text-lg font-semibold tracking-tight leading-none">MICHAŁ BUKOWSKI</span>
<span className="block text-xs text-white/60 tracking-[0.2em] uppercase mt-1">Kancelaria Adwokacka</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
<a className="hover:text-white transition" href="#o-mnie">O mnie</a>
<a className="hover:text-white transition" href="#specjalizacje">Specjalizacje</a>
<a className="hover:text-white transition" href="#kontakt">Kontakt</a>
<a className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded text-white transition backdrop-blur-sm flex items-center gap-2" href="tel:+48664314578">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5"></span>
                        +48 664 314 578
                    </a>
</div>
</div>
</nav>

<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center pt-20">

<div className="lg:col-span-7 space-y-8 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-medium uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
                    Skuteczna obrona prawna
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
                    Bezpieczeństwo <br/>
                    w <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-amber-200">trudnych</span> sprawach.
                </h1>
<p className="text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed">
                    Specjalistyczna pomoc w sprawach karnych i rodzinnych. Indywidualna strategia obrony i pełna dyskrecja na każdym etapie postępowania.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="px-8 py-4 bg-white text-navy-900 rounded font-medium text-center hover:bg-slate-100 transition shadow-[0_0_20px_rgba(255,255,255,0.15)]" href="#contact-card">
                        Bezpłatna wycena sprawy
                    </a>
<a className="px-8 py-4 border border-white/20 text-white rounded font-medium text-center hover:bg-white/5 transition flex items-center justify-center gap-2" href="#specjalizacje">
                        Zobacz specjalizacje
                        <span className="iconify" data-icon="lucide:arrow-down" data-strokeWidth="1.5"></span>
</a>
</div>
<div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
<div>
<p className="text-3xl font-semibold text-white tracking-tight">15+</p>
<p className="text-xs text-slate-400 uppercase mt-1">Lat praktyki</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">500+</p>
<p className="text-xs text-slate-400 uppercase mt-1">Spraw</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">24h</p>
<p className="text-xs text-slate-400 uppercase mt-1">Kontakt</p>
</div>
</div>
</div>

<div className="lg:col-span-5" id="contact-card">
<div className="bg-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-navy-900"></div>
<div className="mb-6">
<h3 className="text-2xl font-semibold text-navy-900 tracking-tight">Opisz swój problem</h3>
<p className="text-sm text-slate-500 mt-1">Oddzwonię z propozycją strategii działania.</p>
</div>
<form className="space-y-4" id="heroForm">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 uppercase tracking-wide">Imię</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-navy-900 focus:outline-none focus:ring-1 focus:ring-navy-900 focus:border-navy-900 transition placeholder-slate-400" placeholder="Jan" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 uppercase tracking-wide">Telefon</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-navy-900 focus:outline-none focus:ring-1 focus:ring-navy-900 focus:border-navy-900 transition placeholder-slate-400" placeholder="000-000-000" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 uppercase tracking-wide">Kategoria sprawy</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-navy-900 appearance-none focus:outline-none focus:ring-1 focus:ring-navy-900 transition cursor-pointer">
<option>Sprawa karna</option>
<option>Rozwód / Rodzinna</option>
<option>Odszkodowanie</option>
<option>Inna sprawa</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-icon="lucide:chevron-down"></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 uppercase tracking-wide">Krótki opis</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-navy-900 focus:outline-none focus:ring-1 focus:ring-navy-900 transition placeholder-slate-400 resize-none" placeholder="Czego dotyczy sprawa?" rows="3"></textarea>
</div>
<label className="custom-check flex items-start gap-3 cursor-pointer group">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-4 h-4 mt-0.5 border border-slate-300 rounded flex-shrink-0 flex items-center justify-center transition peer-checked:bg-navy-900 peer-checked:border-navy-900">
<span className="iconify text-white text-xs opacity-0 peer-checked:opacity-100" data-icon="lucide:check"></span>
</div>
<span className="text-[10px] text-slate-400 leading-tight">
                                Wyrażam zgodę na przetwarzanie danych osobowych w celu kontaktu.
                            </span>
</label>
<button className="w-full py-4 bg-navy-900 text-white font-medium rounded hover:bg-navy-800 transition shadow-lg shadow-navy-900/20 flex items-center justify-center gap-2 group" type="submit">
                            Prześlij zgłoszenie
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="2"></span>
</button>
</form>
</div>
</div>
</div>
</header>

<section className="bg-navy-900 border-b border-white/5 py-10 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition duration-500">

<div className="flex items-center gap-2 text-white font-medium text-lg tracking-tight">
<span className="iconify w-6 h-6" data-icon="lucide:shield-check"></span> Bezpieczeństwo
            </div>
<div className="flex items-center gap-2 text-white font-medium text-lg tracking-tight">
<span className="iconify w-6 h-6" data-icon="lucide:award"></span> Rzetelność
            </div>
<div className="flex items-center gap-2 text-white font-medium text-lg tracking-tight">
<span className="iconify w-6 h-6" data-icon="lucide:scale"></span> Skuteczność
            </div>
<div className="flex items-center gap-2 text-white font-medium text-lg tracking-tight">
<span className="iconify w-6 h-6" data-icon="lucide:clock"></span> Szybkość
            </div>
</div>
</section>

<section className="py-24 bg-white relative" id="o-mnie">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">

<div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
<img className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-110 hover:grayscale-0 transition duration-700" src="https://bukowski-kielce.pl/wp-content/uploads/2024/06/IMG_2679-scaled-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl border border-white/20">
<p className="text-white text-sm italic">"Moim celem jest nie tylko wygrana, ale przede wszystkim przywrócenie spokoju klientowi."</p>
<p className="text-gold-500 text-xs font-semibold mt-2 uppercase tracking-wider">— Adw. Michał Bukowski</p>
</div>
</div>

<div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl"></div>
<div className="absolute -top-8 -right-8 w-32 h-32 bg-navy-900/5 rounded-full blur-2xl"></div>
</div>
<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight">
                    Doświadczenie, które <br/>daje przewagę.
                </h2>
<div className="w-12 h-1 bg-gold-500 rounded-full"></div>
<p className="text-slate-500 leading-relaxed text-lg">
                    Prawo to nie tylko przepisy, to przede wszystkim ludzie i ich historie. W swojej praktyce łączę głęboką wiedzę merytoryczną z empatią i zrozumieniem dla trudnej sytuacji klienta.
                </p>
<p className="text-slate-500 leading-relaxed text-lg">
                    Specjalizuję się w prowadzeniu skomplikowanych procesów sądowych, gdzie liczy się każdy detal. Moja kancelaria to miejsce, gdzie Twój problem staje się moim zadaniem do rozwiązania.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 mt-0.5">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check"></span>
</div>
<span className="text-slate-700 font-medium">Indywidualne podejście do każdej sprawy</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 mt-0.5">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check"></span>
</div>
<span className="text-slate-700 font-medium">Pełna poufność i dyskrecja adwokacka</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 mt-0.5">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check"></span>
</div>
<span className="text-slate-700 font-medium">Transparentne zasady rozliczeń</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="specjalizacje">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-gold-600 font-semibold uppercase tracking-widest text-xs mb-2 block">Obszary praktyki</span>
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight">W czym mogę pomóc?</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-gold-500/50 hover:shadow-glow transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors">
<span className="iconify w-6 h-6" data-icon="lucide:gavel"></span>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">Prawo Karne</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Obrona w postępowaniu przygotowawczym i sądowym. Sprawy o przestępstwa pospolite, gospodarcze oraz skarbowe. Pomoc w sprawach aresztowych.
                    </p>
<a className="text-xs font-semibold uppercase tracking-wide text-navy-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Szczegóły <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-gold-500/50 hover:shadow-glow transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-5">
<span className="iconify w-32 h-32" data-icon="lucide:heart-handshake"></span>
</div>
<div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors relative z-10">
<span className="iconify w-6 h-6" data-icon="lucide:users"></span>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors relative z-10">Prawo Rodzinne</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10">
                        Rozwody, podział majątku, alimenty, władza rodzicielska. Prowadzę sprawy z wyczuciem i dbałością o interesy Klienta oraz dobro małoletnich.
                    </p>
<a className="text-xs font-semibold uppercase tracking-wide text-navy-900 flex items-center gap-1 group-hover:gap-2 transition-all relative z-10" href="#">
                        Szczegóły <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-gold-500/50 hover:shadow-glow transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors">
<span className="iconify w-6 h-6" data-icon="lucide:briefcase"></span>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">Obsługa Biznesu</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Stała obsługa prawna firm, przygotowywanie i opiniowanie umów, windykacja należności, spory sądowe w sprawach gospodarczych.
                    </p>
<a className="text-xs font-semibold uppercase tracking-wide text-navy-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Szczegóły <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-navy-900 relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L100 0 L100 100 Z" fill="#ffffff"></path>
</svg>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Twój problem wymaga <br/>profesjonalnego rozwiązania.</h2>
<p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Nie czekaj, aż sprawa się skomplikuje. Skontaktuj się ze mną, aby ustalić najlepszą strategię działania.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 bg-gold-500 text-navy-900 rounded font-semibold hover:bg-gold-600 transition flex items-center justify-center gap-2" href="tel:+48664314578">
<span className="iconify" data-icon="lucide:phone-call"></span>
                    Zadzwoń: 664 314 578
                </a>
<button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded font-medium hover:bg-white/10 transition" onclick="document.getElementById('contact-card').scrollIntoView({behavior: 'smooth'})">
                    Wypełnij formularz
                </button>
</div>
</div>
</section>

<footer className="bg-navy-900 border-t border-white/10 text-slate-400 py-16 text-sm">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 text-white mb-6">
<span className="iconify w-6 h-6 text-gold-500" data-icon="lucide:scale"></span>
<span className="font-semibold tracking-tight">Kancelaria Adwokacka</span>
</div>
<p className="mb-6 max-w-sm">Profesjonalna pomoc prawna świadczona z najwyższą starannością i poszanowaniem zasad etyki adwokackiej.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:facebook"></span>
</a>
<a className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:linkedin"></span>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Kontakt</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 text-gold-500" data-icon="lucide:map-pin"></span>
                        Kielce, ul. Sienkiewicza 12/3
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-gold-500" data-icon="lucide:phone"></span>
<a className="hover:text-white transition" href="tel:+48664314578">+48 664 314 578</a>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-gold-500" data-icon="lucide:mail"></span>
<a className="hover:text-white transition" href="mailto:kontakt@kancelaria.pl">kontakt@kancelaria.pl</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Informacje</h4>
<ul className="space-y-3">
<li><a className="hover:text-gold-500 transition" href="#">Strona Główna</a></li>
<li><a className="hover:text-gold-500 transition" href="#">O Kancelarii</a></li>
<li><a className="hover:text-gold-500 transition" href="#">Cennik</a></li>
<li><a className="hover:text-gold-500 transition" href="#">Polityka Prywatności</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs text-slate-600">
            © 2024 Adwokat Michał Bukowski. Wszelkie prawa zastrzeżone. Realizacja: Design Studio.
        </div>
</footer>


    </>
  );
}
