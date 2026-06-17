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



        // Intersection Observer for scroll animations
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 // Trigger when 15% of element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
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
      

<div className="spline-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><iframe frameborder="0" height="100%" src="https://ibb.co/RT4PpNRb https://ibb.co/wrdwJwxW https://ibb.co/n8Q8KRrW https://ibb.co/hJCsKJ6Q https://ibb.co/cKmbhmjR https://ibb.co/mVGxJy7f" width="100%"></iframe></div>

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 bg-white/80 border-neutral-100">
<div className="flex h-20 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="group flex items-center gap-2" href="#">
<div className="flex group-hover:scale-110 transition-transform duration-300 text-xs font-bold text-white tracking-tighter w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d11bdb2-af27-4493-96ca-d2be545a86ad_320w.png)] bg-cover bg-center rounded-full items-center justify-center">LP</div>
<span className="text-2xl tracking-tighter font-semibold text-brand">LA PASTI</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-brand transition-colors text-base font-medium text-neutral-500" href="#products">Productes</a>
<a className="hover:text-brand transition-colors text-base font-medium text-neutral-500" href="#coffee">Cafeteria</a>
<a className="hover:text-brand transition-colors text-base font-medium text-neutral-500" href="#locations">Ubicacions</a>
</div>

<a className="hidden md:flex items-center gap-2 hover:bg-brand px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg bg-neutral-900 text-white" href="https://www.instagram.com/lapasti_/" target="_blank">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
<span className="">Instagram</span>
</a>

<button className="md:hidden text-neutral-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-brand text-xs font-medium tracking-wide bg-red-50 border-red-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
                    La Pastisseria de Sabadell
                </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] text-neutral-950">
                    Productes <br/>
<span className="text-brand">100% artesans</span>.
                </h1>
<p className="text-xl md:text-2xl text-neutral-500 font-normal leading-relaxed max-w-lg delay-100 reveal active">
                    Artesanía contemporánea. Una experiència de sabor autèntica al cor de Sabadell.
                </p>
<div className="flex flex-wrap gap-4 pt-4 delay-200 reveal active">
<a className="inline-flex items-center justify-center transition-all duration-300 focus:outline-none ring-offset-2 focus:ring-2 hover:-translate-y-1 hover:shadow-xl hover:bg-red-800 shadow-red-200 text-base font-medium text-white ring-red-500 rounded-full pt-4 pr-8 pb-4 pl-8" href="#locations">
                        Visítanos hoy
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 rounded-full focus:outline-none hover:-translate-y-1 text-neutral-900 bg-neutral-100 hover:bg-neutral-200" href="#products">
                        Ver carta
                    </a>
</div>
</div>
<div className="relative reveal delay-300 active">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group bg-neutral-100">

<img alt="Croissant Artesanal" className="group-hover:scale-105 transition-transform duration-1000 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9f7e76c-aee5-4a01-bd44-0a1046d945d5_800w.png"/>

<div className="absolute bottom-6 left-6 backdrop-blur p-4 rounded-2xl shadow-lg border max-w-xs transition-transform duration-500 group-hover:translate-y-[-5px] bg-white/90 border-white/50">
<div className="flex items-center gap-3">
<div className="p-2 rounded-full bg-green-100 text-green-700">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">4,7 sobre 5</div>
<div className="text-xs text-neutral-500">Google Reviews (38 ressenyes)</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-16 px-6 relative overflow-hidden text-white">
<div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
<h2 className="md:text-5xl leading-tight text-3xl font-semibold tracking-tight reveal text-neutral-900 active">“Moments dolços, moments per compartir,<br/>això és La Pasti”</h2>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="products">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal active">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-neutral-900">Els nostres clàssics</h2>
<p className="text-xl text-neutral-500">Elaborados diariamente en nuestro obrador.</p>
</div>
<div className="flex gap-2">
<span className="px-4 py-2 border rounded-full text-sm font-medium hover:border-brand transition-colors cursor-default bg-white border-neutral-200">Croissants</span>
<span className="px-4 py-2 border rounded-full text-sm font-medium hover:border-brand transition-colors cursor-default bg-white border-neutral-200">Cookies</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-3xl p-2 hover:shadow-xl transition-all duration-500 border reveal delay-100 hover:-translate-y-2 bg-white border-neutral-100">
<div className="aspect-square rounded-2xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Croissants" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb4d73ab-c69c-445e-bce2-8de43fcd4425_800w.png"/>
<div className="absolute top-4 left-4 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/90">Top Seller</div>
</div>
<div className="px-4 pb-6">
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-900">Croissants</h3>
<ul className="space-y-3 text-lg text-neutral-600">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-brand rounded-full"></span>Clàssic mantega</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>Farcit de crema clara</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>Xocolata intensa</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>Decorat sucre glas</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Crema verda (Pistatxo)</li>
</ul>
</div>
</div>

<div className="group rounded-3xl p-2 hover:shadow-xl transition-all duration-500 border reveal delay-200 hover:-translate-y-2 bg-white border-neutral-100">
<div className="aspect-square rounded-2xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Cookies XL" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b822b72e-c65a-4950-ac34-6f3255d7599e_800w.png"/>
</div>
<div className="px-4 pb-6">
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-900">Cookies XL</h3>
<ul className="space-y-3 text-lg text-neutral-600">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>Ferrero (xoco + bombó)</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>Kinder (crema clara)</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>Lotus (crema + galeta)</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>Oreo (crema clara)</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Pistatxo i crema verda</li>
</ul>
</div>
</div>

<div className="group bg-brand rounded-3xl p-2 hover:shadow-xl transition-all duration-500 border border-brand md:col-span-2 lg:col-span-1 reveal delay-300 hover:-translate-y-2 text-white">
<div className="aspect-square rounded-2xl overflow-hidden mb-6 relative bg-red-800">
<img alt="Panettone" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a36b221-dbf0-421e-a4a8-da3598a35fd2_800w.png"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 border-2 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:border-white transition-colors border-white/30">
<span className="text-sm font-bold tracking-widest uppercase">Nadal</span>
</div>
</div>
</div>
<div className="px-4 pb-6">
<div className="flex items-start justify-between">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Otros dulces</h3>
<iconify-icon className="text-red-200" icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<p className="leading-relaxed text-lg text-red-100 mb-4">Turrons, panettones, panellets</p><p className="text-base text-red-200 mb-6 leading-relaxed opacity-90">
    Elaborats artesanalment amb ingredients nobles com l'ametlla Marcona i xocolata Valrhona. Una tradició que es renova cada any per oferir-te el millor sabor de les festes.
</p>
<span className="inline-block px-3 py-1 text-brand text-sm font-bold rounded-full group-hover:bg-red-50 transition-colors bg-white">Edició Limitada</span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden py-24 px-6 bg-white" id="coffee">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 space-y-8 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                        Cafè d'especialitat &amp; <br/><span className="text-brand">Estil Contemporani</span>
</h2>
<div className="space-y-6 text-xl text-neutral-500">
<p>
                            El nostre espai a Sabadell està dissenyat per gaudir. Una barra revestida amb <span className="font-medium text-neutral-900">rajola vermella brillant</span> que presideix el local, on la nostra màquina <span className="font-medium text-neutral-900">Rocket Espresso</span> treballa sense parar.
                        </p>
<p>
                            Servei de cafè professional, begudes fredes i un ambient net i actual.
                        </p>
</div>
<div className="grid grid-cols-2 gap-6 pt-6">
<div className="flex flex-col gap-2 p-6 rounded-2xl transition-colors duration-300 group cursor-default bg-stone-50 hover:bg-red-50">
<iconify-icon className="text-brand group-hover:scale-110 transition-transform" icon="solar:cup-hot-linear" width="32"></iconify-icon>
<span className="text-lg font-semibold text-neutral-900">Rocket Espresso</span>
<span className="text-sm text-neutral-500">Maquinària Professional</span>
</div>
<div className="flex flex-col gap-2 p-6 rounded-2xl transition-colors duration-300 group cursor-default bg-stone-50 hover:bg-red-50">
<iconify-icon className="text-brand group-hover:scale-110 transition-transform" icon="solar:cup-paper-linear" width="32"></iconify-icon>
<span className="text-lg font-semibold text-neutral-900">Iced Coffee</span>
<span className="text-sm text-neutral-500">Begudes fredes</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative reveal delay-200">
<div className="grid grid-cols-2 gap-4">
<div className="translate-y-12">
<img alt="Cafeteria Interior" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0738bd7-b5eb-46e3-ad9e-dc3a02964b5e_800w.png"/>
</div>
<div className="">
<img alt="Latte Art" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95ad3077-1c02-40c7-9e1c-988e361d88fc_800w.png"/>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="text-white bg-neutral-900 mt-12 pt-24 pr-6 pb-24 pl-6" id="locations">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">

<div className="space-y-6 reveal">
<div className="flex text-sm font-bold text-white tracking-tighter w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c855894b-5abb-468e-8c53-848e22436090_320w.jpg)] rounded-full items-center justify-center">
                        LP
                    </div>
<h2 className="text-3xl font-semibold tracking-tight">LA PASTI</h2>
<p className="text-lg text-neutral-400">Productes 100% artesans a Sabadell.</p>
</div>

<div className="col-span-2 grid md:grid-cols-2 gap-8 reveal delay-100">
<div className="space-y-4 group">
<div className="flex items-center gap-2 text-brand mb-2">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="font-semibold uppercase tracking-wider text-sm">Local 1</span>
</div>
<p className="text-xl font-medium group-hover:text-brand transition-colors">Carrer d’Alemanya, 31</p>
<p className="text-lg text-neutral-400">Sabadell, Barcelona</p>
<a className="inline-flex items-center gap-2 border-b pb-1 transition-colors mt-2 text-white border-white/30 hover:border-white" href="https://share.google/YJneP8DYqr0sYOAR8">
                            Veure a Google Maps <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="space-y-4 group">
<div className="flex items-center gap-2 text-brand mb-2">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="font-semibold uppercase tracking-wider text-sm">Local 2</span>
</div>
<p className="text-xl font-medium group-hover:text-brand transition-colors">Carrer de la Rosa, 3</p>
<p className="text-lg text-neutral-400">Sabadell, Barcelona</p>
<a className="inline-flex items-center gap-2 border-b pb-1 transition-colors mt-2 text-white border-white/30 hover:border-white" href="https://share.google/YJneP8DYqr0sYOAR8">
                            Veure a Google Maps <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t pt-12 flex flex-col md:flex-row justify-between items-center gap-6 reveal delay-200 border-neutral-800">
<div className="flex gap-4">
<a className="flex items-center gap-3 px-6 py-3 rounded-full transition-colors group bg-neutral-800 hover:bg-neutral-700" href="tel:937204133">
<iconify-icon className="group-hover:text-brand transition-colors" icon="solar:phone-linear" width="20"></iconify-icon>
<span className="font-medium">937 204 133</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 bg-brand rounded-full transition-colors group hover:bg-red-800" href="https://www.instagram.com/lapasti_/">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
<span className="font-medium">@lapasti_</span>
</a>
</div>
<p className="text-neutral-500 text-sm">© 2024 La Pasti Sabadell. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
