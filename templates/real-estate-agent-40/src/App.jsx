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



        // Language Switcher Logic
        function switchLang(lang) {
            const enElements = document.querySelectorAll('.lang-en');
            const esElements = document.querySelectorAll('.lang-es');
            const btnEn = document.getElementById('btn-en');
            const btnEs = document.getElementById('btn-es');

            if (lang === 'en') {
                enElements.forEach(el => {
                    el.classList.remove('hidden-lang');
                    setTimeout(() => el.style.opacity = '1', 10);
                });
                esElements.forEach(el => {
                    el.style.opacity = '0';
                    setTimeout(() => el.classList.add('hidden-lang'), 300);
                });
                
                // Button Styling
                btnEn.classList.add('bg-slate-100', 'shadow-sm', 'text-slate-900');
                btnEn.classList.remove('text-slate-400');
                btnEs.classList.remove('bg-slate-100', 'shadow-sm', 'text-slate-900');
                btnEs.classList.add('text-slate-400');

            } else {
                esElements.forEach(el => {
                    el.classList.remove('hidden-lang');
                    setTimeout(() => el.style.opacity = '1', 10);
                });
                enElements.forEach(el => {
                    el.style.opacity = '0';
                    setTimeout(() => el.classList.add('hidden-lang'), 300);
                });

                // Button Styling
                btnEs.classList.add('bg-slate-100', 'shadow-sm', 'text-slate-900');
                btnEs.classList.remove('text-slate-400');
                btnEn.classList.remove('bg-slate-100', 'shadow-sm', 'text-slate-900');
                btnEn.classList.add('text-slate-400');
            }
        }
    
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
      

<nav className="w-full flex justify-end p-6 fixed top-0 z-50 pointer-events-none">
<div className="pointer-events-auto flex items-center space-x-2 bg-white/90 backdrop-blur-md rounded-full p-1 border border-slate-200 shadow-sm">
<button className="px-3 py-1 text-xs font-medium rounded-full transition-all text-slate-900 bg-slate-100 shadow-sm" id="btn-en" onclick="switchLang('en')">EN</button>
<button className="px-3 py-1 text-xs font-medium rounded-full transition-all text-slate-400 hover:text-slate-600" id="btn-es" onclick="switchLang('es')">ES</button>
</div>
</nav>

<header className="pt-24 pb-16 px-6 max-w-7xl mx-auto w-full">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col items-start space-y-8">

<div className="flex items-center gap-4">
<div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0">
<img alt="Kariam Perez" className="w-full h-full object-cover rounded-full shadow-sm ring-2 ring-slate-50" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col items-start">
<h2 className="text-sm font-semibold text-slate-900 tracking-tight">Kariam Perez</h2>
<div className="lang-en lang-content">
<p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">Real Estate Agent</p>
</div>
<div className="lang-es lang-content hidden-lang">
<p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">Agente de Bienes Raíces</p>
</div>
</div>
</div>
<div className="space-y-6 max-w-lg">

<div className="lang-en lang-content">
<h1 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight leading-[1.05]">
                            Buying a Home Doesn’t Have to Be Hard
                        </h1>
<p className="text-base text-slate-500 font-light leading-relaxed">
                            I guide you step by step through the process in Georgia and Florida. From the first call to handing you the keys.
                        </p>
</div>

<div className="lang-es lang-content hidden-lang">
<h1 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight leading-[1.05]">
                            Comprar una Casa No Tiene Que Ser Difícil
                        </h1>
<p className="text-base text-slate-500 font-light leading-relaxed">
                            Te acompaño paso a paso en el proceso en Georgia y Florida. Desde la primera llamada hasta entregarte las llaves.
                        </p>
</div>

<div className="flex items-center gap-6 pt-2 opacity-80">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100" />
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[10px] font-medium text-slate-600">+50</div>
</img></div>
<div className="text-xs font-medium text-slate-500">
<span className="lang-en lang-content">Families Helped</span>
<span className="lang-es lang-content hidden-lang">Familias Ayudadas</span>
</div>
</div>
</div>
</div>

<div className="w-full">
<div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="mb-6">
<div className="lang-en lang-content">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Start Your Home Journey</h3>
<p className="text-xs text-slate-500 mt-1">Fill out the form below to get a free consultation.</p>
</div>
<div className="lang-es lang-content hidden-lang">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Empieza tu Camino a Casa</h3>
<p className="text-xs text-slate-500 mt-1">Llena el formulario para una consulta gratis.</p>
</div>
</div>
<form className="space-y-4">

<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 lang-en lang-content" htmlFor="name">Name</label>
<label className="block text-xs font-medium text-slate-700 mb-1.5 lang-es lang-content hidden-lang" htmlFor="name">Nombre</label>
<div className="relative">
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 outline-none transition-all bg-slate-50/50 focus:bg-white" id="name" name="name" type="text"/>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 lang-en lang-content" htmlFor="phone">Phone</label>
<label className="block text-xs font-medium text-slate-700 mb-1.5 lang-es lang-content hidden-lang" htmlFor="phone">Teléfono</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 outline-none transition-all bg-slate-50/50 focus:bg-white" id="phone" name="phone" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 lang-en lang-content" htmlFor="email">Email</label>
<label className="block text-xs font-medium text-slate-700 mb-1.5 lang-es lang-content hidden-lang" htmlFor="email">Email</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 outline-none transition-all bg-slate-50/50 focus:bg-white" id="email" name="email" type="email"/>
</div>
</div>

<div className="pt-2">
<span className="block text-xs font-medium text-slate-700 mb-3 lang-en lang-content">I want to:</span>
<span className="block text-xs font-medium text-slate-700 mb-3 lang-es lang-content hidden-lang">Quiero:</span>
<div className="grid grid-cols-3 gap-3">
<label className="radio-option cursor-pointer relative">
<input className="sr-only" name="intent" type="radio" value="buy"/>
<div className="rounded-md border border-slate-200 py-2 text-center hover:bg-slate-50 transition-colors bg-white">
<span className="block text-xs font-medium lang-en lang-content">Buy</span>
<span className="block text-xs font-medium lang-es lang-content hidden-lang">Comprar</span>
</div>
</label>
<label className="radio-option cursor-pointer relative">
<input className="sr-only" name="intent" type="radio" value="sell"/>
<div className="rounded-md border border-slate-200 py-2 text-center hover:bg-slate-50 transition-colors bg-white">
<span className="block text-xs font-medium lang-en lang-content">Sell</span>
<span className="block text-xs font-medium lang-es lang-content hidden-lang">Vender</span>
</div>
</label>
<label className="radio-option cursor-pointer relative">
<input className="sr-only" name="intent" type="radio" value="unsure"/>
<div className="rounded-md border border-slate-200 py-2 text-center hover:bg-slate-50 transition-colors bg-white">
<span className="block text-xs font-medium lang-en lang-content">Unsure</span>
<span className="block text-xs font-medium lang-es lang-content hidden-lang">No sé</span>
</div>
</label>
</div>
</div>

<div className="pt-3">
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 transition-all" type="submit">
<span className="lang-en lang-content">Talk to Kariam</span>
<span className="lang-es lang-content hidden-lang">Hablar con Kariam</span>
</button>
</div>
<p className="text-[10px] text-center text-slate-400 mt-2">
<span className="lang-en lang-content">No spam. Unsubscribe anytime.</span>
<span className="lang-es lang-content hidden-lang">Sin spam. Cancela cuando quieras.</span>
</p>
</form>
</div>
</div>
</div>
</header>

<section className="py-16 bg-slate-50 border-t border-slate-200">
<div className="max-w-2xl mx-auto px-6">
<div className="mb-12 text-center">
<div className="lang-en lang-content">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">The Journey Home</h2>
</div>
<div className="lang-es lang-content hidden-lang">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">El Camino a Casa</h2>
</div>
</div>
<div className="relative border-l border-slate-200 ml-3 md:ml-4 space-y-10">

<div className="relative pl-8 md:pl-10">
<span className="absolute -left-[5px] md:-left-[6px] top-1 h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-white border-2 border-emerald-500"></span>
<div className="lang-en lang-content">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Step 1</span>
<h3 className="text-sm font-medium text-slate-900">Fill Out the Form</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Tell me a little about what you are looking for.</p>
</div>
<div className="lang-es lang-content hidden-lang">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Paso 1</span>
<h3 className="text-sm font-medium text-slate-900">Llena el Formulario</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Cuéntame un poco sobre lo que buscas.</p>
</div>
</div>

<div className="relative pl-8 md:pl-10">
<span className="absolute -left-[5px] md:-left-[6px] top-1 h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-white border-2 border-emerald-500"></span>
<div className="lang-en lang-content">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Step 2</span>
<h3 className="text-sm font-medium text-slate-900">Discovery Call</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">We chat about your budget, needs, and timeline.</p>
</div>
<div className="lang-es lang-content hidden-lang">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Paso 2</span>
<h3 className="text-sm font-medium text-slate-900">Llamada de Descubrimiento</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Hablamos sobre tu presupuesto, necesidades y tiempos.</p>
</div>
</div>

<div className="relative pl-8 md:pl-10">
<span className="absolute -left-[5px] md:-left-[6px] top-1 h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-white border-2 border-emerald-500"></span>
<div className="lang-en lang-content">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Step 3</span>
<h3 className="text-sm font-medium text-slate-900">Financing &amp; Search</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Secure the best loan and start visiting homes.</p>
</div>
<div className="lang-es lang-content hidden-lang">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Paso 3</span>
<h3 className="text-sm font-medium text-slate-900">Financiamiento y Búsqueda</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Aseguramos el préstamo y empezamos a visitar casas.</p>
</div>
</div>

<div className="relative pl-8 md:pl-10">
<span className="absolute -left-[5px] md:-left-[6px] top-1 h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-white border-2 border-emerald-500"></span>
<div className="lang-en lang-content">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Step 4</span>
<h3 className="text-sm font-medium text-slate-900">Closing</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Review the numbers, sign the papers, and get the keys.</p>
</div>
<div className="lang-es lang-content hidden-lang">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Paso 4</span>
<h3 className="text-sm font-medium text-slate-900">Cierre</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Revisamos números, firmas los papeles y recibes las llaves.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-10 text-center">
<div className="lang-en lang-content">
<h2 className="text-lg font-medium text-slate-900 tracking-tight">Stories from Happy Homeowners</h2>
</div>
<div className="lang-es lang-content hidden-lang">
<h2 className="text-lg font-medium text-slate-900 tracking-tight">Historias de Clientes Felices</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="flex items-center gap-3 mb-3">
<img alt="Sarah" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="text-xs font-medium text-slate-900">Sarah Jenkins</div>
</div>
<div className="lang-en lang-content">
<p className="text-xs text-slate-600 leading-relaxed">"Kariam made the impossible possible. We found our dream home in two weeks!"</p>
</div>
<div className="lang-es lang-content hidden-lang">
<p className="text-xs text-slate-600 leading-relaxed">"Kariam hizo posible lo imposible. ¡Encontramos nuestra casa soñada en dos semanas!"</p>
</div>
</div>

<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="flex items-center gap-3 mb-3">
<img alt="Michael" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="text-xs font-medium text-slate-900">Michael Ross</div>
</div>
<div className="lang-en lang-content">
<p className="text-xs text-slate-600 leading-relaxed">"Professional, patient, and incredibly knowledgeable about the market."</p>
</div>
<div className="lang-es lang-content hidden-lang">
<p className="text-xs text-slate-600 leading-relaxed">"Profesional, paciente y con un conocimiento increíble del mercado."</p>
</div>
</div>

<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="flex items-center gap-3 mb-3">
<img alt="Elena" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="text-xs font-medium text-slate-900">Elena Gomez</div>
</div>
<div className="lang-en lang-content">
<p className="text-xs text-slate-600 leading-relaxed">"As a first time buyer, she explained every single detail. Highly recommend!"</p>
</div>
<div className="lang-es lang-content hidden-lang">
<p className="text-xs text-slate-600 leading-relaxed">"Como compradora primeriza, ella explicó cada detalle. ¡Altamente recomendada!"</p>
</div>
</div>

<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="flex items-center gap-3 mb-3">
<img alt="David" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="text-xs font-medium text-slate-900">David Chen</div>
</div>
<div className="lang-en lang-content">
<p className="text-xs text-slate-600 leading-relaxed">"Sold our house way faster than we expected. The process was seamless."</p>
</div>
<div className="lang-es lang-content hidden-lang">
<p className="text-xs text-slate-600 leading-relaxed">"Vendió nuestra casa mucho más rápido de lo esperado. El proceso fue fluido."</p>
</div>
</div>

<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="flex items-center gap-3 mb-3">
<img alt="Maria" className="w-8 h-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="text-xs font-medium text-slate-900">Maria Rodriguez</div>
</div>
<div className="lang-en lang-content">
<p className="text-xs text-slate-600 leading-relaxed">"Gracias a Kariam, ahora tenemos nuestro hogar en Florida. Excelente servicio."</p>
</div>
<div className="lang-es lang-content hidden-lang">
<p className="text-xs text-slate-600 leading-relaxed">"Gracias a Kariam, ahora tenemos nuestro hogar en Florida. Excelente servicio."</p>
</div>
</div>

<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="flex items-center gap-3 mb-3">
<img alt="James" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="text-xs font-medium text-slate-900">James Wilson</div>
</div>
<div className="lang-en lang-content">
<p className="text-xs text-slate-600 leading-relaxed">"Simply the best. She fights for her clients and gets the best deals."</p>
</div>
<div className="lang-es lang-content hidden-lang">
<p className="text-xs text-slate-600 leading-relaxed">"Simplemente la mejor. Lucha por sus clientes y consigue los mejores tratos."</p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-8 text-center border-t border-slate-100 mt-8">
<p className="text-[10px] text-slate-400">© 2023 Kariam Real Estate. Georgia &amp; Florida.</p>
</footer>


    </>
  );
}
