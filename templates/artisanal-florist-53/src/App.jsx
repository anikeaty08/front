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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<header className="bg-[#a6c4a5] sticky top-0 z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
<div className="flex items-center gap-3 text-[#2d402b]">
<i className="w-8 h-8" data-lucide="flower-2" strokeWidth="1.5"></i>
</div>
<nav className="hidden md:flex gap-10">
<a className="text-lg font-medium text-[#2d402b] hover:text-white transition-colors" href="#">Home</a>
<a className="text-lg font-medium text-[#2d402b] hover:text-white transition-colors" href="#sklep">Shop</a>
<a className="text-lg font-medium text-[#2d402b] hover:text-white transition-colors" href="#o-nas">About Us</a>
<a className="text-lg font-medium text-[#2d402b] hover:text-white transition-colors" href="#">Events</a>
<a className="text-lg font-medium text-[#2d402b] hover:text-white transition-colors" href="#">Blog</a>
<a className="text-lg font-medium text-[#2d402b] hover:text-white transition-colors" href="#kontakt">Contact</a>
</nav>
<div className="flex items-center gap-6 text-[#2d402b]">
<button className="hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</button>
<button className="hover:text-white transition-colors relative">
<i className="w-6 h-6" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
</button>
<button className="md:hidden hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>
<main>

<section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Beautiful bouquet" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
<span className="inline-block py-1 px-3 bg-white/20 backdrop-blur-md rounded-full text-white text-sm tracking-widest uppercase mb-6 border border-white/30">Pracownia Florystyczna</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white mb-4 drop-shadow-sm">Kwiaty i Pasja</h1>
<p className="text-xl md:text-3xl font-medium text-white/90 tracking-tight mb-10 font-serif italic">Botanical Art &amp; Design</p>
<a className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#a6c4a5] text-white font-medium text-lg hover:bg-[#8eb88c] transition-all hover:scale-105 active:scale-95 shadow-lg" href="#zamow">
                    Kup Bukiet
                </a>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="sklep">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 border border-gray-100 flex flex-col">
<div className="rounded-xl overflow-hidden h-56 mb-6">
<img alt="Popularne" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight text-[#2d402b] mb-3">Popularne Kompozycje</h3>
<p className="text-lg text-gray-500 mb-6 flex-grow leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<button className="self-start inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#a6c4a5] text-white font-medium text-base hover:bg-[#8eb88c] transition-colors">
                        Zobacz
                    </button>
</div>

<div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 border border-gray-100 flex flex-col">
<div className="rounded-xl overflow-hidden h-56 mb-6">
<img alt="Ślubne" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight text-[#2d402b] mb-3">Ślubne Bukiety</h3>
<p className="text-lg text-gray-500 mb-6 flex-grow leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<button className="self-start inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#a6c4a5] text-white font-medium text-base hover:bg-[#8eb88c] transition-colors">
                        Zobacz
                    </button>
</div>

<div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 border border-gray-100 flex flex-col">
<div className="rounded-xl overflow-hidden h-56 mb-6 relative">
<span className="absolute top-3 left-3 w-3 h-3 bg-red-400 rounded-full z-10"></span>
<img alt="Doniczkowe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight text-[#2d402b] mb-3">Rośliny Doniczkowe</h3>
<p className="text-lg text-gray-500 mb-6 flex-grow leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<button className="self-start inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#a6c4a5] text-white font-medium text-base hover:bg-[#8eb88c] transition-colors">
                        Zobacz
                    </button>
</div>

<div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 border border-gray-100 flex flex-col">
<div className="rounded-xl overflow-hidden h-56 mb-6">
<img alt="Warsztaty" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight text-[#2d402b] mb-3">Warsztaty Florystyczne</h3>
<p className="text-lg text-gray-500 mb-6 flex-grow leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<button className="self-start inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#a6c4a5] text-white font-medium text-base hover:bg-[#8eb88c] transition-colors">
                        Zobacz
                    </button>
</div>
</div>
</section>

<section className="py-24 bg-[#f4f7f4] border-y border-[#e2ece2]" id="zamow">
<div className="max-w-4xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#2d402b] mb-4">Stwórz Własny Bukiet</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Wybierz ulubione kwiaty, określ budżet, a my stworzymy dla Ciebie niepowtarzalną kompozycję prosto z serca.</p>
</div>
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgb(0,0,0,0.04)] border border-gray-100">
<form className="space-y-12">

<div>
<h3 className="text-2xl font-serif font-medium tracking-tight text-[#2d402b] mb-6 flex items-center gap-3">
<i className="w-6 h-6 text-[#a6c4a5]" data-lucide="leaf" strokeWidth="1.5"></i>
                                Jakie kwiaty mają się znaleźć w bukiecie?
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<label className="relative flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group">
<input className="peer sr-only" name="flowers" type="checkbox" value="roze"/>
<div className="w-6 h-6 rounded border-2 border-gray-300 bg-white peer-checked:bg-[#a6c4a5] peer-checked:border-[#a6c4a5] flex items-center justify-center transition-all">
<i className="text-white opacity-0 peer-checked:opacity-100 w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="ml-4 text-lg font-medium text-gray-700">Róże</span>
</label>

<label className="relative flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group">
<input className="peer sr-only" name="flowers" type="checkbox" value="peonie"/>
<div className="w-6 h-6 rounded border-2 border-gray-300 bg-white peer-checked:bg-[#a6c4a5] peer-checked:border-[#a6c4a5] flex items-center justify-center transition-all">
<i className="text-white opacity-0 peer-checked:opacity-100 w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="ml-4 text-lg font-medium text-gray-700">Peonie</span>
</label>

<label className="relative flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group">
<input className="peer sr-only" name="flowers" type="checkbox" value="tulipany"/>
<div className="w-6 h-6 rounded border-2 border-gray-300 bg-white peer-checked:bg-[#a6c4a5] peer-checked:border-[#a6c4a5] flex items-center justify-center transition-all">
<i className="text-white opacity-0 peer-checked:opacity-100 w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="ml-4 text-lg font-medium text-gray-700">Tulipany</span>
</label>

<label className="relative flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group">
<input className="peer sr-only" name="flowers" type="checkbox" value="eustoma"/>
<div className="w-6 h-6 rounded border-2 border-gray-300 bg-white peer-checked:bg-[#a6c4a5] peer-checked:border-[#a6c4a5] flex items-center justify-center transition-all">
<i className="text-white opacity-0 peer-checked:opacity-100 w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="ml-4 text-lg font-medium text-gray-700">Eustoma</span>
</label>

<label className="relative flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group">
<input className="peer sr-only" name="flowers" type="checkbox" value="gozdziki"/>
<div className="w-6 h-6 rounded border-2 border-gray-300 bg-white peer-checked:bg-[#a6c4a5] peer-checked:border-[#a6c4a5] flex items-center justify-center transition-all">
<i className="text-white opacity-0 peer-checked:opacity-100 w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="ml-4 text-lg font-medium text-gray-700">Goździki</span>
</label>

<label className="relative flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group">
<input checked="" className="peer sr-only" name="flowers" type="checkbox" value="dodatki"/>
<div className="w-6 h-6 rounded border-2 border-gray-300 bg-white peer-checked:bg-[#a6c4a5] peer-checked:border-[#a6c4a5] flex items-center justify-center transition-all">
<i className="text-white opacity-0 peer-checked:opacity-100 w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="ml-4 text-lg font-medium text-gray-700">Dużo zieleni</span>
</label>
</div>
</div>
<hr className="border-gray-100"/>

<div>
<h3 className="text-2xl font-serif font-medium tracking-tight text-[#2d402b] mb-6">Dane zamówienia</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-lg font-medium text-gray-700">Imię i nazwisko</label>
<input className="w-full h-14 px-4 bg-gray-50 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#a6c4a5]/50 focus:border-[#a6c4a5] transition-all" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="space-y-2">
<label className="text-lg font-medium text-gray-700">Data dostawy / odbioru</label>
<input className="w-full h-14 px-4 bg-gray-50 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#a6c4a5]/50 focus:border-[#a6c4a5] transition-all text-gray-600" type="date"/>
</div>
<div className="space-y-2 md:col-span-2">
<label className="text-lg font-medium text-gray-700 flex justify-between">
<span>Planowany budżet</span>
<span className="text-[#a6c4a5] font-medium" id="budgetValue">250 PLN</span>
</label>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#a6c4a5]" max="1000" min="100" oninput="document.getElementById('budgetValue').innerText = this.value + ' PLN'" step="50" type="range" value="250"/>
</div>
<div className="space-y-2 md:col-span-2">
<label className="text-lg font-medium text-gray-700">Dodatkowe życzenia (np. kolorystyka, bilecik)</label>
<textarea className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#a6c4a5]/50 focus:border-[#a6c4a5] transition-all resize-none" placeholder="Tutaj wpisz swoje wskazówki..." rows="4"></textarea>
</div>
</div>
</div>
<button className="w-full h-16 rounded-xl bg-[#2d402b] text-white font-medium text-xl hover:bg-[#1f2d1e] transition-colors shadow-lg flex items-center justify-center gap-2" type="button">
                            Zamawiam Bukiet
                            <i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden" id="o-nas">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute inset-0 border border-[#a6c4a5] rounded-2xl translate-x-6 translate-y-6 lg:translate-x-10 lg:translate-y-10 z-0"></div>
<img alt="Florists working" className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl" src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2 flex flex-col justify-center">
<span className="text-lg tracking-[0.2em] uppercase text-[#a6c4a5] font-medium mb-4 block">O nas</span>
<h2 className="text-5xl md:text-6xl font-serif font-medium tracking-tight text-[#2d402b] mb-8 leading-tight">Pasja, która rozkwita</h2>
<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
<p>
                            Tworzymy kompozycje z najświeższych kwiatów, dopasowując je do Twoich indywidualnych potrzeb. Nasza kwiaciarnia to miejsce, gdzie natura spotyka się z dbałością o każdy detal.
                        </p>
<p>
                            Od lat projektujemy oprawy florystyczne na śluby, eventy oraz tworzymy bukiety, które wyrażają więcej niż tysiąc słów. Zapraszamy do naszego świata pełnego barw i zapachów.
                        </p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#2d402b] text-[#e2ece2] pt-24 pb-12 px-6 md:px-12" id="kontakt">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
<div className="space-y-6">
<h4 className="text-2xl font-serif font-medium tracking-tight text-white">Kwiaty</h4>
<ul className="space-y-4">
<li><a className="text-lg hover:text-white transition-colors" href="#">Kwiaty | Pasja</a></li>
<li><a className="text-lg hover:text-white transition-colors" href="#">Shop</a></li>
<li><a className="text-lg hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-lg hover:text-white transition-colors" href="#">Events</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-2xl font-serif font-medium tracking-tight text-white">Contact</h4>
<ul className="space-y-4">
<li className="text-lg">+48 123 456 789</li>
<li className="text-lg">kontakt@kwiatyipasja.pl</li>
<li className="text-lg">ul. Florystyczna 12<br/>00-000 Warszawa</li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-2xl font-serif font-medium tracking-tight text-white">Social us</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-[#e2ece2]/30 flex items-center justify-center hover:bg-white hover:text-[#2d402b] transition-all" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-[#e2ece2]/30 flex items-center justify-center hover:bg-white hover:text-[#2d402b] transition-all" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-[#e2ece2]/30 flex items-center justify-center hover:bg-white hover:text-[#2d402b] transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="space-y-6">
<h4 className="text-2xl font-serif font-medium tracking-tight text-white">Subscribe Form</h4>
<form className="flex flex-col gap-4">
<input className="bg-transparent border-b border-[#e2ece2]/40 py-3 text-lg text-white placeholder:text-[#e2ece2]/60 focus:outline-none focus:border-white transition-colors rounded-none" placeholder="Twój adres email" type="email"/>
<button className="self-start mt-2 inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#a6c4a5] text-white font-medium text-lg hover:bg-[#8eb88c] transition-colors" type="button">
                        Zapisz się
                    </button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-[#e2ece2]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base opacity-60">
<p>© 2024 Kwiaty i Pasja. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
</div>
</div>
</footer>


    </>
  );
}
