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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


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
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qTiAlX0sxkuBOAiL7qHL"></div>

</div>
<div className="min-h-screen">

<header className="sticky top-0 z-40 backdrop-blur-none">
<div className="max-w-7xl sm:px-6 mr-auto ml-auto pr-4 pl-4">
<div className="flex bg-neutral-900 rounded-3xl mt-2 mb-2 pt-4 pr-8 pb-4 pl-8 items-center justify-between">
<div className="flex items-center gap-3">
<a className="text-lg font-semibold text-white tracking-tight" href="#" style={{}}>
                dabrovsky.photo
              </a>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium transition text-neutral-400 hover:text-white" href="#photobook">
                Photobook
              </a>
<a className="text-sm font-medium transition text-neutral-400 hover:text-white" href="#prints">
                Printy
              </a>
<a className="text-sm font-medium transition text-neutral-400 hover:text-white" href="#session">
                Sesja
              </a>
</nav>
<button aria-label="Menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border transition border-neutral-700 hover:bg-neutral-800 text-white">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 18h16"></path>
<path d="M4 6h16"></path>
</svg>
</button>
</div>
</div>
</header>

<main className="max-w-7xl sm:px-6 mr-auto ml-auto pr-4 pb-0 pl-4">
<section className="relative h-[85vh] flex flex-col items-center justify-center rounded-3xl overflow-hidden mb-6">
<img alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f995362-9751-4d89-86fa-a5f7c03be905_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative z-10 text-center text-white px-4">
<h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-4">
              dabrovsky.photo
            </h1>
<p className="text-xl md:text-2xl font-light opacity-90 mb-8">
              Art nude photography
            </p>
<div className="flex flex-wrap gap-4 justify-center">
<a className="px-8 py-3 bg-white text-neutral-900 rounded-full text-sm font-medium hover:bg-neutral-200 transition" href="#photobook">
                Photobook
              </a>
<a className="px-8 py-3 backdrop-blur bg-white/10 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/20 transition" href="#prints">
                Printy
              </a>
<a className="px-8 py-3 backdrop-blur bg-white/10 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/20 transition" href="#session">
                Sesja
              </a>
</div>
</div>
</section>
<section className="bg-white rounded-3xl p-6 md:p-12 mb-6" id="photobook">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="bg-neutral-100 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
<img alt="Latest Photobook" className="shadow-2xl max-h-full object-cover w-full h-full rounded" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8f75e15-5f15-4877-a253-da0b8f89efee_1600w.jpg"/>
</div>
<div className="space-y-6">
<div className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium tracking-wide">
                NOWOŚĆ
              </div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight">
                Volume 04: Ciało i Cień
              </h2>
<p className="text-neutral-600 leading-relaxed">
                Artystyczna podróż przez formę ludzkiego ciała w naturalnym
                świetle. Minimalistyczna kompozycja i surowe emocje zamknięte w
                twardej oprawie.
              </p>
<ul className="space-y-3 text-sm text-neutral-600 border-t border-b border-neutral-100 py-6">
<li className="flex justify-between">
<span>Format</span>
<span className="font-medium text-neutral-900">A4 Hardcover</span>
</li>
<li className="flex justify-between">
<span>Strony</span>
<span className="font-medium text-neutral-900">144 Strony</span>
</li>
<li className="flex justify-between">
<span>Papier</span>
<span className="font-medium text-neutral-900">
                    Arctic Volume White 150g
                  </span>
</li>
<li className="flex justify-between">
<span>Edycja</span>
<span className="font-medium text-neutral-900">
                    Limitowana (500 szt.)
                  </span>
</li>
</ul>
<div className="flex items-center gap-6 pt-2">
<span className="text-3xl font-light tracking-tight">249 PLN</span>
<button className="flex-1 bg-neutral-900 text-white px-6 py-4 rounded-xl font-medium hover:bg-black transition">
                  Kup najnowszy
                </button>
</div>
</div>
</div>
</section>
<section className="bg-white rounded-3xl p-6 md:p-12 mb-6">
<h3 className="text-2xl font-light tracking-tight mb-8">Archiwum</h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="group">
<div className="aspect-[3/4] bg-neutral-100 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bf79840-b7ed-4d8d-acd3-c5f5835a065e_800w.jpg"/>
</div>
<div className="flex justify-between items-baseline">
<div>
<h4 className="font-medium">Volume 03</h4>
<p className="text-xs text-neutral-500">Ostatnie sztuki</p>
</div>
<div className="text-right">
<span className="block font-medium">199 PLN</span>
<button className="text-xs underline mt-1">Kup</button>
</div>
</div>
</div>
<div className="group">
<div className="aspect-[3/4] bg-neutral-100 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3001134-ae66-49be-8bea-f8eed8b7e07e_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline">
<div>
<h4 className="font-medium">Volume 02</h4>
<p className="text-xs text-neutral-500">Dostępny</p>
</div>
<div className="text-right">
<span className="block font-medium">199 PLN</span>
<button className="text-xs underline mt-1">Kup</button>
</div>
</div>
</div>
<div className="group">
<div className="aspect-[3/4] bg-neutral-100 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a96798fa-9905-42b3-9d61-fec4d29fbe06_800w.jpg"/>
</div>
<div className="flex justify-between items-baseline">
<div>
<h4 className="font-medium">Volume 01</h4>
<p className="text-xs text-neutral-500">Wyprzedany</p>
</div>
<div className="text-right">
<span className="block font-medium text-neutral-400">---</span>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white rounded-3xl p-6 md:p-12 mb-6" id="prints">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<h3 className="text-3xl font-light tracking-tight">Kolekcja Printów</h3>
<p className="text-sm text-neutral-500">
              Wszystkie printy sygnowane i numerowane
            </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="aspect-[2/3] bg-neutral-100 rounded-xl overflow-hidden group relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c1c4611-4743-407c-9375-ca363769720b_1600w.jpg"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white p-4 text-center">
<span className="text-lg font-light">"Silence"</span>
<span className="text-sm mt-1">od 300 PLN</span>
</div>
</div>
<div className="aspect-[2/3] bg-neutral-100 rounded-xl overflow-hidden group relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0aab170-b3d3-4816-9435-0ac1e1d853a3_800w.jpg"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white p-4 text-center">
<span className="text-lg font-light">"Form"</span>
<span className="text-sm mt-1">od 300 PLN</span>
</div>
</div>
<div className="aspect-[2/3] bg-neutral-100 rounded-xl overflow-hidden group relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eab41fb3-55ff-46e1-973d-56fe1a4282a3_800w.jpg"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white p-4 text-center">
<span className="text-lg font-light">"Motion"</span>
<span className="text-sm mt-1">od 300 PLN</span>
</div>
</div>
<div className="aspect-[2/3] bg-neutral-100 rounded-xl overflow-hidden group relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b59bad79-703a-4c05-8ed2-fafcc49a7b51_800w.jpg"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white p-4 text-center">
<span className="text-lg font-light">"Light"</span>
<span className="text-sm mt-1">od 300 PLN</span>
</div>
</div>
<div className="aspect-[2/3] bg-neutral-100 rounded-xl overflow-hidden group relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cee814f4-9f14-4c82-896a-b36587194633_800w.jpg"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white p-4 text-center">
<span className="text-lg font-light">"Shadow"</span>
<span className="text-sm mt-1">od 300 PLN</span>
</div>
</div>
<div className="aspect-[2/3] bg-neutral-100 rounded-xl overflow-hidden group relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/361b93b3-4faa-4d90-a64d-f5de4921a4d7_800w.jpg"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white p-4 text-center">
<span className="text-lg font-light">"Grain"</span>
<span className="text-sm mt-1">od 300 PLN</span>
</div>
</div>
</div>
</section>
<section className="bg-neutral-900 text-white rounded-3xl p-6 md:p-12 mb-6" id="session">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Sesja Studyjna
            </h2>
<p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
              Kameralne sesje studyjne aktu, prowadzone w bezpiecznej i
              spokojnej atmosferze. Tworzymy obrazy pełne estetyki i szacunku
              dla ciała.
            </p>
<div className="inline-flex flex-col sm:flex-row items-center justify-center gap-8 border border-white/10 bg-white/5 backdrop-blur rounded-2xl p-8 mb-8 w-full max-w-3xl">
<div className="text-center sm:text-left">
<p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                  Cena startowa
                </p>
<p className="text-4xl font-light">od 1500 zł</p>
</div>
<div className="h-px w-full sm:w-px sm:h-16 bg-white/10"></div>
<div className="text-left text-sm text-neutral-300 space-y-2">
<p>• Czas trwania: 2–3 godziny</p>
<p>• 15 wyselekcjonowanych zdjęć po autorskiej obróbce</p>
<p>• Konsultacja przed sesją (online/tel)</p>
<p>• Prywatna galeria online</p>
</div>
</div>
<p className="text-xs text-neutral-500 max-w-xl mx-auto">
              Dbam o pełną prywatność. Zdjęcia są publikowane tylko za wyraźną
              zgodą osoby fotografowanej. Każda sesja odbywa się w oparciu o
              jasne zasady i granice.
            </p>
</div>
</section>
<section className="bg-white rounded-3xl p-6 md:p-12 mb-6" id="contact">
<div className="max-w-xl mx-auto">
<h3 className="text-3xl font-light tracking-tight text-center mb-2">
              Skontaktuj się
            </h3>
<p className="text-center text-neutral-500 mb-8">
              Odpowiadam zazwyczaj w ciągu 48h.
            </p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full p-4 bg-neutral-50 rounded-xl border-none focus:ring-2 focus:ring-neutral-900 placeholder:text-neutral-400" placeholder="Imię" type="text"/>
<input className="w-full p-4 bg-neutral-50 rounded-xl border-none focus:ring-2 focus:ring-neutral-900 placeholder:text-neutral-400" placeholder="Email" type="email"/>
</div>
<select className="w-full p-4 bg-neutral-50 rounded-xl border-none focus:ring-2 focus:ring-neutral-900 text-neutral-800">
<option disabled="" selected="" value="">
                  Temat wiadomości
                </option>
<option value="sesja">Sesja</option>
<option value="photobook">Photobook</option>
<option value="print">Print</option>
<option value="inne">Inne</option>
</select>
<input className="w-full p-4 bg-neutral-50 rounded-xl border-none focus:ring-2 focus:ring-neutral-900 placeholder:text-neutral-400" placeholder="Preferowany termin (opcjonalnie)" type="text"/>
<textarea className="w-full p-4 bg-neutral-50 rounded-xl border-none focus:ring-2 focus:ring-neutral-900 placeholder:text-neutral-400" placeholder="Wiadomość" rows="4"></textarea>
<button className="w-full py-4 bg-neutral-900 text-white font-medium rounded-xl hover:bg-black transition" type="submit">
                Wyślij wiadomość
              </button>
</form>
</div>
</section>
<section className="bg-neutral-100 rounded-3xl p-8 text-center mb-6">
<h3 className="text-xl font-medium tracking-tight mb-4">O mnie</h3>
<div className="max-w-2xl mx-auto text-neutral-600 leading-relaxed space-y-4">
<p>
              Moja fotografia to poszukiwanie formy i światła. W akcie nie
              chodzi o nagość samą w sobie, ale o szczerość, geometrię ciała i
              emocje, które zapisują się w kadrze. Dążę do minimalizmu, który
              pozwala wybrzmieć temu, co najważniejsze.
            </p>
<p>
              W pracy z drugą osobą najważniejszy jest dla mnie komfort i
              zaufanie. Wierzę, że dobre zdjęcie powstaje wtedy, gdy osoba przed
              obiektywem czuje się bezpiecznie i może być sobą. Moje kadry są
              ciche, spokojne, ale pełne treści.
            </p>
<a className="inline-block pt-2 text-neutral-900 font-medium hover:underline" href="https://instagram.com/dabrovsky.photo">
              Portfolio: Instagram @dabrovsky.photo
            </a>
</div>
</section>
<footer className="bg-neutral-900 rounded-3xl p-8 text-white">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-6">
<a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition" href="https://instagram.com/dabrovsky.photo">
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="mailto:contact@dabrovsky.photo">
                contact@dabrovsky.photo
              </a>
</div>
<div className="text-sm text-neutral-500">© 2025 dabrovsky.photo</div>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">
              Polityka prywatności
            </a>
</div>
</footer>
</main>
</div>


    </>
  );
}
