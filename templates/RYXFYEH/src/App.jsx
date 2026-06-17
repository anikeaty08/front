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
      
  const ctx=document.getElementById('efficacyChart');
  new Chart(ctx,{type:'line',data:{labels:['Tydz 0','Tydz 1','Tydz 2','Tydz 3','Tydz 4'],datasets:[{label:'Samo szczotkowanie',data:[0,10,18,25,30],borderColor:'#94a3b8',borderWidth:3,tension:.4},{label:'Oroxil Plus Junior',data:[0,22,40,52,60],borderColor:'#f43f5e',borderWidth:3,tension:.4}]},options:{plugins:{legend:{labels:{font:{family:'Plus Jakarta Sans',weight:'500'},boxWidth:20}}},scales:{y:{beginAtZero:true,max:60,ticks:{stepSize:20,font:{family:'Plus Jakarta Sans'}}},x:{ticks:{font:{family:'Plus Jakarta Sans'}}}}});


lucide.createIcons();


  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('in-view')}
    })
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

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
      

<header className="fixed top-0 inset-x-0 z-30 backdrop-blur-sm/60">
<nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight" href="#">Oroxil</a>
<div className="flex items-center gap-6">
<a className="text-sm font-medium hover:text-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-500" href="#how">Działanie</a>
<a className="text-sm font-medium hover:text-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-500" href="#ingredients">Skład</a>
<a className="text-sm font-medium hover:text-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-500" href="#contact">Kontakt</a>
<button className="inline-flex items-center gap-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-sm px-4 py-2 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">
        Kup teraz
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</nav>
</header>

<section className="relative overflow-hidden pt-32 pb-28">

<div aria-hidden="true" className="absolute -top-48 -left-56 w-[600px] h-[600px] bg-rose-400/20 rounded-full blur-3xl bg-animated"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-6 reveal">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">Zdrowa buzia dziecka każdego dnia</h1>
<p className="mt-6 max-w-lg text-lg text-slate-600">Naturalny spray do jamy ustnej z resweratrolem – bez alkoholu, bez chlorheksydyny. Smak, który dzieci naprawdę lubią.</p>
<div className="mt-10 flex flex-wrap gap-4">
<button className="inline-flex items-center gap-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">
          Poznaj produkt
          <i className="w-5 h-5" data-lucide="rocket"></i>
</button>
<a className="inline-flex items-center gap-2 text-slate-700 hover:text-rose-600 font-medium" href="#how">
          Jak działa?
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="lg:col-span-6 reveal delay-1">
<img alt="Uśmiechnięte dziecko" className="w-full h-[420px] object-cover rounded-2xl shadow-2xl ring-1 ring-slate-900/10" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="flex flex-wrap justify-center gap-6 reveal delay-2">
<div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
<i className="w-4 h-4 text-rose-600" data-lucide="shield-off"></i><span className="text-sm font-medium">Bez alkoholu</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
<i className="w-4 h-4 text-rose-600" data-lucide="x-octagon"></i><span className="text-sm font-medium">Bez chlorheksydyny</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
<i className="w-4 h-4 text-rose-600" data-lucide="leaf"></i><span className="text-sm font-medium">Resweratrol</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
<i className="w-4 h-4 text-rose-600" data-lucide="smile"></i><span className="text-sm font-medium">Smak truskawkowy</span>
</div>
</div>
</section>

<section className="bg-slate-50 py-24" id="how">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Dwa razy skuteczniejszy niż samo szczotkowanie</h2>
<p className="mt-6 text-lg text-slate-600">Efekty zauważalne po 14 dniach przy jednej aplikacji dziennie.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-rose-600 mt-1" data-lucide="check-circle"></i>
<span>Zredukuje biofilm bakteryjny już w pierwszym tygodniu.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-rose-600 mt-1" data-lucide="check-circle"></i>
<span>Łagodzi podrażnienia dziąseł i wspiera regenerację błony śluzowej.</span>
</li>
</ul>
</div>
<div className="space-y-8 reveal delay-1">
<div className="p-6 border border-slate-200 rounded-2xl bg-white shadow flex items-center gap-4">
<i className="w-8 h-8 text-rose-600" data-lucide="trending-up"></i>
<div><h3 className="font-medium text-slate-900">Natychmiastowa ulga</h3><p className="text-sm text-slate-600">Formuła działa od pierwszej aplikacji.</p></div>
</div>
<div className="p-6 border border-slate-200 rounded-2xl bg-white shadow flex items-center gap-4">
<i className="w-8 h-8 text-rose-600" data-lucide="clock"></i>
<div><h3 className="font-medium text-slate-900">Długotrwała ochrona</h3><p className="text-sm text-slate-600">Aktywne składniki utrzymują się do 8 h.</p></div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden">
<div aria-hidden="true" className="absolute -bottom-48 right-0 w-[540px] h-[540px] bg-indigo-400/20 rounded-full blur-3xl bg-animated"></div>
<div className="max-w-7xl mx-auto px-6 py-24 reveal">
<div className="max-w-4xl mx-auto">
<canvas aria-label="Wykres skuteczności Oroxil Plus Junior względem samego szczotkowania" id="efficacyChart"></canvas>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="ingredients">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 reveal">Prosty skład. Skuteczne działanie.</h2>
<div className="mt-12 grid lg:grid-cols-12 gap-12">
<ul className="space-y-4 lg:col-span-6 reveal delay-1">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-rose-600" data-lucide="droplet"></i><span>Woda</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-rose-600" data-lucide="droplets"></i><span>Gliceryna</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-rose-600" data-lucide="syringe"></i><span>Sorbitol</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-rose-600" data-lucide="leaf"></i><span>Resweratrol</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-rose-600" data-lucide="cup-straw"></i><span>Aromat truskawkowy</span></li>
</ul>
<div className="lg:col-span-6 reveal delay-2">
<h3 className="font-medium text-slate-900">Dawkowanie</h3>
<p className="mt-4 text-slate-600">1–2 aplikacje, maksymalnie dwa razy dziennie. Nie wymaga przepłukiwania.</p>
<img alt="Butelka Oroxil Plus Junior" className="mt-8 rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-center reveal">Zaufali nam rodzice</h2>
<div className="mt-16 grid md:grid-cols-3 gap-12">
<figure className="bg-white border border-slate-200 rounded-2xl p-6 shadow reveal delay-1">
<blockquote className="text-slate-600">“Spray stał się szybkim ratunkiem przy pierwszych podrażnieniach dziąseł. Nasz codzienny must-have.”</blockquote>
<figcaption className="mt-4 font-medium text-slate-900">Anna, mama Zuzi</figcaption>
</figure>
<figure className="bg-white border border-slate-200 rounded-2xl p-6 shadow reveal delay-2">
<blockquote className="text-slate-600">“Brak alkoholu i przyjemny smak przekonały nawet naszego niejadka.”</blockquote>
<figcaption className="mt-4 font-medium text-slate-900">Marek, tata Oli</figcaption>
</figure>
<figure className="bg-white border border-slate-200 rounded-2xl p-6 shadow reveal delay-3">
<blockquote className="text-slate-600">“Polecam pacjentom po zabiegach – naturalna pomoc w gojeniu.”</blockquote>
<figcaption className="mt-4 font-medium text-slate-900">dr Katarzyna, stomatolog</figcaption>
</figure>
</div>
</div>
</section>

<section className="relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-rose-50"></div>
<div className="max-w-7xl mx-auto px-6 py-28 text-center relative z-10 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Oroxil Plus Junior – naturalna pielęgnacja ząbków</h2>
<p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">Zostaw e-mail, a damy Ci znać, gdy pojawi się w Twojej aptece.</p>
<form className="mt-10 flex max-w-md mx-auto">
<label className="sr-only" htmlFor="email">Adres e-mail</label>
<input className="flex-1 px-4 py-3 rounded-l-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 outline-none" id="email" placeholder="Twój e-mail" required="" type="email"/>
<button className="px-4 py-3 bg-rose-600 text-white rounded-r-lg hover:bg-rose-700 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500" type="submit">
        Powiadom mnie
      </button>
</form>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-slate-500">© 2024 Oroxil Plus Junior</p>
<div className="flex gap-4">
<a className="text-sm text-slate-500 hover:text-rose-600" href="#">Polityka prywatności</a>
<a className="text-sm text-slate-500 hover:text-rose-600" href="#">Kontakt</a>
</div>
</div>
</footer>










    </>
  );
}
