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
      

<nav className="absolute top-0 left-0 w-full z-50 py-8 px-6 md:px-12 flex justify-between items-center">
<a className="text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity" href="#">
            POCZUCIA
        </a>
<div className="hidden md:flex gap-8 items-center">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-wider" href="#oferta">Oferta</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-wider" href="#filozofia">Filozofia</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-wider" href="#o-mnie">O mnie</a>
<a className="text-xs font-medium bg-zinc-900 text-zinc-50 px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors uppercase tracking-wider" href="https://booksy.com" target="_blank">
                Umów sesję
            </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-6">
<div className="max-w-4xl mx-auto text-center z-10">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-zinc-900 mb-8 leading-none">
                Wróć do ciała,<br/>wróć do siebie.
            </h1>
<p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed" style={{fontFamily: '\'Newsreader\', serif'}}>
                Witaj w przestrzeni poczucia, gdzie ciało przypomina Ci, kim naprawdę jesteś. Połączenie strategii z głęboką pracą z ciałem.
            </p>
<a className="inline-flex items-center gap-3 bg-zinc-900 text-zinc-50 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 hover:scale-[1.02] transition-all duration-300" href="https://booksy.com" target="_blank">
<span>Umów sesję</span>
<iconify-icon height="1.2em" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</a>
</div>

<div className="w-full max-w-6xl mx-auto mt-20 md:mt-32 relative">
<img alt="Detale pracy z ciałem" className="w-full h-[50vh] md:h-[60vh] object-cover rounded-3xl grayscale-[0.8] contrast-125 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ea702dd-e135-4233-b863-5c3c07119244_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent rounded-3xl"></div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="oferta">
<div className="mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Przestrzeń pracy</h2>
<p className="text-base text-zinc-500" style={{fontFamily: '\'Newsreader\', serif'}}>Wybierz formę spotkania dopasowaną do Twoich aktualnych potrzeb.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

<div className="group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center mb-8 group-hover:bg-zinc-900 group-hover:text-zinc-50 transition-colors duration-300">
<iconify-icon height="1.5em" icon="solar:hand-heart-linear" style={{strokeWidth: '1.5'}} width="1.5em"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">Spotkania z ciałem</h3>
<p className="text-zinc-600 mb-6 leading-relaxed" style={{fontFamily: '\'Newsreader\', serif'}}>
                    Uwalnianie napięć i przywracanie przepływu. Masaż tajski, OsteoTai oraz WuoThai. Praca u podstaw Twojego układu nerwowego.
                </p>
<span className="text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Więcej o metodach <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</span>
</div>

<div className="group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center mb-8 group-hover:bg-zinc-900 group-hover:text-zinc-50 transition-colors duration-300">
<iconify-icon height="1.5em" icon="solar:user-speak-linear" style={{strokeWidth: '1.5'}} width="1.5em"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">Sesje 1:1</h3>
<p className="text-zinc-600 mb-6 leading-relaxed" style={{fontFamily: '\'Newsreader\', serif'}}>
                    Praca somatyczna, psychosomatyka i docieranie do sedna Twojego "Dlaczego?". Połączenie strategii z czuciem.
                </p>
<span className="text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Poznaj proces <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</span>
</div>

<div className="group cursor-pointer bg-zinc-900 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
<div className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center mb-8 text-zinc-50 group-hover:bg-zinc-50 group-hover:text-zinc-900 transition-colors duration-300">
<iconify-icon height="1.5em" icon="solar:lightbulb-linear" style={{strokeWidth: '1.5'}} width="1.5em"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4 text-zinc-50">Budowa Marki Osobistej</h3>
<p className="text-zinc-400 mb-6 leading-relaxed" style={{fontFamily: '\'Newsreader\', serif'}}>
        Oddzielna przestrzeń dla biznesu. Wykorzystaj moje 20-letnie doświadczenie strategiczne, aby zbudować autentyczną markę w zgodzie z Twoim "Dlaczego?".
    </p>
<span className="text-sm font-medium flex items-center gap-2 text-zinc-50 group-hover:gap-3 transition-all duration-300">
        Poznaj ofertę biznesową <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</span>
</div>
</div>
</section>

<section className="bg-[#111110] text-[#FAFAFA] py-32 px-6" id="filozofia">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<iconify-icon className="text-zinc-700 mb-10" height="2em" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}} width="2em"></iconify-icon>
<blockquote className="text-3xl md:text-5xl font-light italic leading-tight mb-12 text-zinc-100" style={{fontFamily: '\'Newsreader\', serif'}}>
                "Nie mamy dokąd wracać. Bo nigdy nie odeszliśmy. Zawsze byliśmy we właściwym miejscu."
            </blockquote>
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-20">
                — Ewa Anszperger
            </span>
<div className="max-w-2xl text-center">
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-6">Ciało to brama, nie narzędzie do naprawy.</h3>
<p className="text-zinc-400 leading-relaxed" style={{fontFamily: '\'Newsreader\', serif'}}>
                    Moje podejście opiera się na założeniu, że wszystko, czego potrzebujesz, już w Tobie jest. Spotkania ze mną to przestrzeń bezpiecznej obecności, w której Twój układ nerwowy może zwolnić, regulując się poprzez dotyk i świadomość.
                </p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="o-mnie">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-zinc-100 rounded-[2rem] -z-10"></div>
<img alt="Ewa Anszperger" className="w-full aspect-[4/5] object-cover rounded-2xl grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49759a7e-fb71-42e8-88fc-2ce3b56e3efe_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-8">Ewa Anszperger</h2>
<div className="space-y-6 text-zinc-600 text-lg" style={{fontFamily: '\'Newsreader\', serif'}}>
<p className="leading-relaxed">
                        Przez 20 lat zajmowałam się strategią marketingową i budowaniem marek osobistych, szukając "Dlaczego?" biznesów i ludzi. To doświadczenie nauczyło mnie analizy i struktury, ale też doprowadziło na skraj wypalenia.
                    </p>
<p className="leading-relaxed">
                        Droga powrotna prowadziła przez ciało. Mindfulness, psychosomatyka i wreszcie głęboka praca z tkankami poprzez masaż tajski, OsteoTai i WuoThai stały się moim nowym językiem. 
                    </p>
<p className="leading-relaxed">
                        Dziś łączę te dwa światy. Moja praktyka to holistyczne podejście oparte na empatii, poczuciu absolutnego bezpieczeństwa i regulacji układu nerwowego. Pomagam Ci poczuć dom, który nosisz w sobie.
                    </p>
</div>
<div className="mt-12 flex flex-wrap gap-3">
<span className="px-4 py-2 border border-zinc-200 rounded-full text-xs font-medium text-zinc-500 uppercase tracking-wider">Empatia</span>
<span className="px-4 py-2 border border-zinc-200 rounded-full text-xs font-medium text-zinc-500 uppercase tracking-wider">Bezpieczeństwo</span>
<span className="px-4 py-2 border border-zinc-200 rounded-full text-xs font-medium text-zinc-500 uppercase tracking-wider">Holizm</span>
<span className="px-4 py-2 border border-zinc-200 rounded-full text-xs font-medium text-zinc-500 uppercase tracking-wider">Regulacja</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 mt-16 py-12 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<a className="text-sm font-medium tracking-widest uppercase block mb-2" href="#">POCZUCIA</a>
<span className="text-xs text-zinc-500" style={{fontFamily: '\'Newsreader\', serif'}}>Poczuj Dom - ucieleśniony.</span>
</div>
<div className="flex gap-6 items-center">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon height="1.5em" icon="solar:camera-linear" width="1.5em"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="sr-only">Spotify</span>
<iconify-icon height="1.5em" icon="solar:music-note-linear" width="1.5em"></iconify-icon>
</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 uppercase tracking-wider transition-colors" href="#">
                    Substack
                </a>
</div>
<div className="text-xs text-zinc-400 text-center md:text-right">
                © 2024 Poczucia Ewa Anszperger.<br/>Wszelkie prawa zastrzeżone.
            </div>
</div>
</footer>

    </>
  );
}
