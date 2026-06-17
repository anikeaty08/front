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
      

<nav className="fixed w-full top-0 z-50 bg-[#F2EDE8]/80 backdrop-blur-md border-b border-[#C8BFB5]/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-['Inter'] text-xl tracking-tight font-normal text-[#2A2522]" href="#">POCZUCIA</a>
<a className="hidden md:inline-flex items-center justify-center bg-[#A89880] text-[#FFFFFF] px-5 py-2.5 text-sm font-['Inter'] font-normal tracking-wide hover:bg-[#2A2522] transition-colors" href="#umow">
                Umów sesję
            </a>
</div>
</nav>

<section className="pt-40 pb-24 md:pt-52 md:pb-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<h1 className="font-['Inter'] text-5xl md:text-7xl font-light tracking-tight leading-tight mb-8">
                    Wróć do ciała,<br/>wróć do siebie.
                </h1>
<p className="text-xl md:text-2xl text-[#5C5450] mb-12 leading-relaxed">
                    Witaj w przestrzeni poczucia, gdzie ciało przypomina Ci, kim naprawdę jesteś.
                </p>
<a className="inline-flex items-center justify-center bg-[#A89880] text-[#FFFFFF] px-8 py-4 text-base font-['Inter'] font-normal tracking-wide hover:bg-[#2A2522] transition-colors" href="#umow">
                    Umów sesję
                </a>
</div>

<div className="relative w-full aspect-[4/5] bg-[#E4DDD6] overflow-hidden">
<img alt="Embodied presence" className="absolute inset-0 w-full h-full object-cover object-center opacity-90 contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1bf39ea-89eb-4bb3-8e3e-9b4583a47a5f_800w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#2A2522]/20 mix-blend-multiply"></div>
<div className="absolute bottom-8 left-8 right-8 text-center mix-blend-difference text-[#FFFFFF]">
<p className="font-['Inter'] text-2xl tracking-tight font-light">Ciało,<br/>ufam Ci.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#E4DDD6] border-y border-[#C8BFB5]">
<div className="max-w-7xl mr-auto ml-auto">
<h2 className="font-['Inter'] text-3xl md:text-4xl font-light tracking-tight mb-16 text-center">Obszary pracy</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-[#C8BFB5] hover:border-[#8C8480] transition-colors group">
<iconify-icon className="text-[#8C8480] mb-8 group-hover:text-[#2A2522] transition-colors" height="32" icon="solar:hand-stars-linear" width="32"></iconify-icon>
<h3 className="font-['Inter'] text-2xl font-normal tracking-tight mb-4">Spotkania z ciałem</h3>
<p className="text-lg text-[#5C5450] leading-relaxed mb-6">
                        Uwalnianie napięć i powrót do przepływu poprzez głęboką pracę z tkankami. Przestrzeń na to, co nienazwane.
                    </p>
<ul className="text-base text-[#5C5450] space-y-2 font-['Inter'] font-light">
<li>Masaż Tajski</li>
<li>OsteoTai</li>
<li>WuoThai</li>
</ul>
</div>

<div className="p-8 border border-[#C8BFB5] hover:border-[#8C8480] transition-colors group">
<iconify-icon className="text-[#8C8480] mb-8 group-hover:text-[#2A2522] transition-colors" height="32" icon="solar:fingerprint-linear" width="32"></iconify-icon>
<h3 className="font-['Inter'] text-2xl font-normal tracking-tight mb-4">Sesje 1:1</h3>
<p className="text-lg text-[#5C5450] leading-relaxed mb-6">
                        Integracja strategii i somatyki. Poszukiwanie Twojego "Dlaczego?" i budowanie osobistej marki w zgodzie z układem nerwowym.
                    </p>
<ul className="text-base text-[#5C5450] space-y-2 font-['Inter'] font-light">
<li>Praca somatyczna</li>
<li>Psychosomatyka</li>
<li>Strategia Personal Brand</li>
</ul>
</div>

<div className="hover:border-[#8C8480] transition-colors group border-[#C8BFB5] border pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="text-[#8C8480] mb-8 group-hover:text-[#2A2522] transition-colors" height="32" icon="solar:headphones-linear" width="32"></iconify-icon>
<h3 className="font-['Inter'] text-2xl font-normal tracking-tight mb-4">Media</h3>
<p className="text-lg text-[#5C5450] leading-relaxed mb-6">
                        Rozmowy o czuciu, biznesie i powrotach do siebie. Przestrzeń dla nadwrażliwych, którzy chcą działać w swoim tempie.
                    </p>
<ul className="text-base text-[#5C5450] space-y-2 font-['Inter'] font-light">
<li>Podcast: Rozmowy nadWrażliwe</li>
<li>Substack: Poczytaj bez pośpiechu</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[#2A2522] text-[#FFFFFF]">
<div className="max-w-4xl mx-auto text-center">
<blockquote className="text-3xl md:text-5xl italic font-light leading-tight mb-12 text-[#F2EDE8]">
                "Nie mamy dokąd wracać. Bo nigdy nie odeszliśmy. Zawsze byliśmy we właściwym miejscu."
            </blockquote>
<p className="font-['Inter'] text-xl font-normal tracking-tight text-[#A89880]">
                — Ewa Anszperger
            </p>
<div className="mt-24 max-w-2xl mx-auto">
<p className="text-xl md:text-2xl text-[#E4DDD6] leading-relaxed font-light text-left md:text-center">
                    Ciało to brama, nie narzędzie do naprawy. Każde napięcie to historia, a każdy oddech to szansa na spotkanie z tym, co prawdziwe.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 relative w-full aspect-square bg-[#E4DDD6] grayscale">
<img alt="Ewa Anszperger" className="object-center contrast-125 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49759a7e-fb71-42e8-88fc-2ce3b56e3efe_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="lg:col-span-7 lg:pl-12">
<h2 className="font-['Inter'] text-3xl md:text-4xl font-light tracking-tight mb-8">O mnie</h2>
<div className="space-y-6 text-lg md:text-xl text-[#5C5450] leading-relaxed mb-12">
<p>
                        Przez ponad 20 lat zajmowałam się strategią marketingową i budowaniem marek. Zrozumiałam mechanizmy biznesu, ale w pewnym momencie to przestało wystarczać. Droga przez wypalenie skierowała mnie w stronę tego, co najbardziej pierwotne – ciała.
                    </p>
<p>
                        Dziś łączę te dwa światy. Pomagam odnaleźć spójność między tym, co wewnątrz (regulacja układu nerwowego, emocje), a tym, co na zewnątrz (Twoja marka, Twoje "Dlaczego?"). Wierzę w holistyczne podejście, gdzie biznes nie wyklucza empatii, a sukces nie wymaga poświęcenia zdrowia.
                    </p>
</div>
<div className="flex flex-wrap gap-3 font-['Inter'] text-sm font-normal text-[#5C5450]">
<span className="px-4 py-2 border border-[#C8BFB5]">Empatia</span>
<span className="px-4 py-2 border border-[#C8BFB5]">Bezpieczeństwo</span>
<span className="px-4 py-2 border border-[#C8BFB5]">Holistyczne podejście</span>
<span className="px-4 py-2 border border-[#C8BFB5]">Regulacja układu nerwowego</span>
</div>
</div>
</div>
</section>

<footer className="bg-[#E4DDD6] border-t border-[#C8BFB5] pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
<div>
<span className="font-['Inter'] text-xl tracking-tight font-normal text-[#2A2522] block mb-6">POCZUCIA</span>
<p className="text-lg text-[#5C5450] max-w-sm">
                    Poczuj Dom - ucieleśniony.
                </p>
</div>
<div className="md:text-right">
<h4 className="font-['Inter'] text-sm font-normal text-[#8C8480] mb-4 tracking-wide uppercase">Kontakt</h4>
<a className="text-xl text-[#2A2522] hover:text-[#A89880] transition-colors block mb-2" href="mailto:kontakt@poczucia.pl">
                    kontakt@poczucia.pl
                </a>
<a className="font-['Inter'] text-base text-[#5C5450] hover:text-[#2A2522] transition-colors underline underline-offset-4" href="#">
                    Rezerwacje Booksy
                </a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-['Inter'] font-light text-[#8C8480] pt-8 border-t border-[#C8BFB5]">
<p>© 2024 POCZUCIA Ewa Anszperger. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#2A2522] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#2A2522] transition-colors" href="#">Spotify</a>
<a className="hover:text-[#2A2522] transition-colors" href="#">Substack</a>
</div>
</div>
</footer>

    </>
  );
}
