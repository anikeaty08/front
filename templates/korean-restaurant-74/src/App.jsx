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



{
"@context": "https://schema.org",
"@type": "Restaurant",
"name": "Kamasot",
"image": [
"https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
],
"address": {
"@type": "PostalAddress",
"streetAddress": "Carrer del Consell de Cent",
"addressLocality": "Barcelona",
"addressRegion": "CT",
"postalCode": "08011",
"addressCountry": "ES"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 41.3851,
"longitude": 2.1734
},
"url": "https://www.kamasot.es",
"telephone": "+34931234567",
"servesCuisine": "Korean",
"priceRange": "$$",
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"
],
"opens": "12:30",
"closes": "23:00"
}
],
"menu": "https://www.kamasot.es/menu"
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
      

<div className="min-h-screen flex flex-col w-full relative">

<div aria-hidden="true" className="absolute inset-0 z-0 select-none pointer-events-none h-screen">
<img alt="Parrilla de Barbacoa Coreana en Kamasot Barcelona" className="w-full h-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30 lg:to-transparent lg:w-[85%]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
</div>

<header className="relative z-50 w-full">
<nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5 backdrop-blur-sm">

<a aria-label="Kamasot Inicio" className="flex items-center gap-3 group" href="/">
<div className="text-[#F05830] flex items-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="uppercase text-2xl font-semibold tracking-tight font-display text-white font-poppins">Kamasot</span>
</a>

<div className="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-400">
<a aria-current="page" className="text-white transition-colors hover:text-[#F05830]" href="/">Inicio</a>
<a className="hover:text-white transition-colors" href="#history">Nuestra Historia</a>
<a className="hover:text-white transition-colors" href="#bbq">Barbacoa Coreana</a>
<div className="relative group">
<button className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                            Menú 
                            <iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>
<a className="hover:text-white transition-colors" href="#contact">Contacto</a>
</div>

<div className="hidden sm:block">
<a className="group bg-white/10 hover:bg-[#F05830] border border-white/10 hover:border-[#F05830] text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-2 backdrop-blur-md" href="#reserve">
                        RESERVAR MESA
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<button aria-label="Abrir menú" className="lg:hidden text-white flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="32"></iconify-icon>
</button>
</nav>
</header>

<main className="relative z-10 flex-grow flex items-center w-full max-w-7xl mx-auto px-6 pt-12 pb-20 min-h-[85vh]">
<article className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

<div className="lg:col-span-8 flex flex-col justify-center">

<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-[#F05830]"></span>
<span className="text-[#F05830] text-lg font-medium tracking-widest uppercase">
                            가마솥 • Since 1994
                        </span>
</div>

<h1 className="font-display text-6xl sm:text-8xl lg:text-[9rem] leading-[0.9] uppercase text-white tracking-tight mb-8 font-poppins">
                        The Soul of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-poppins">Seoul.</span>
</h1>

<div className="max-w-xl mb-10 border-l border-white/20 pl-6">
<p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light">
                            Durante 30 años, Kamasot ha traído el auténtico sabor de Corea a Barcelona. Experimenta el chisporroteo de la Barbacoa premium y el confort de nuestras recetas tradicionales.
                        </p>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="group bg-[#F05830] hover:bg-[#d04622] text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_-10px_rgba(240,88,48,0.4)]" href="#menu">
                            VER MENÚ COMPLETO
                            <iconify-icon icon="solar:chef-hat-linear" width="20"></iconify-icon>
</a>
<address className="flex items-center gap-3 text-sm text-gray-400 not-italic">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-white">Carrer del Consell de Cent, Barcelona</span>
</address>
</div>
</div>

<aside className="lg:col-span-4 flex justify-start lg:justify-end lg:mb-8">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl w-full max-w-sm transform transition hover:scale-[1.02] duration-500 shadow-2xl">
<div className="flex justify-between items-start mb-6">
<div>
<span className="block text-4xl font-display text-white mb-1 font-poppins">30</span>
<span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Años de Tradición</span>
</div>
<div className="bg-[#F05830] p-2 rounded-full text-white">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="24"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 rounded-2xl bg-black/40 border border-white/5">
<img alt="Bibimbap Bowl" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-white text-sm font-medium">Bibimbap Auténtico</p>
<p className="text-xs text-gray-500">Bowl de piedra tradicional</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-2xl bg-black/40 border border-white/5">
<img alt="Kimchi Casero" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<p className="text-white text-sm font-medium">Kimchi Casero</p>
<p className="text-xs text-gray-500">Fermentación perfecta</p>
</div>
</div>
</div>
</div>
</aside>
</article>
</main>

<div className="relative z-20 w-full bg-[#F05830] overflow-hidden py-4 select-none border-t border-b border-white/10" role="complementary">
<div className="flex whitespace-nowrap">
<div className="flex items-center animate-marquee shrink-0">
<span className="font-display text-3xl font-medium uppercase tracking-wide text-black px-8 font-poppins">Korean BBQ</span>
<iconify-icon className="text-black" icon="solar:star-linear" width="24"></iconify-icon>
<span className="font-display text-3xl font-medium uppercase tracking-wide text-black px-8 font-poppins">Bulgogi</span>
<iconify-icon className="text-black" icon="solar:star-linear" width="24"></iconify-icon>
<span className="font-display text-3xl font-medium uppercase tracking-wide text-black px-8 font-poppins">Bibimbap</span>
<iconify-icon className="text-black" icon="solar:star-linear" width="24"></iconify-icon>
<span className="font-display text-3xl font-medium uppercase tracking-wide text-black px-8 font-poppins">Kimbap</span>
<iconify-icon className="text-black" icon="solar:star-linear" width="24"></iconify-icon>
<span className="font-display text-3xl font-medium uppercase tracking-wide text-black px-8 font-poppins">Kimchi</span>
<iconify-icon className="text-black" icon="solar:star-linear" width="24"></iconify-icon>
</div>
<div aria-hidden="true" className="flex items-center animate-marquee shrink-0">
<span className="font-display text-3xl font-medium uppercase tracking-wide text-black px-8 font-poppins">Korean BBQ</span>
<iconify-icon className="text-black" icon="solar:star-linear" width="24"></iconify-icon>
<span className="font-display text-3xl font-medium uppercase tracking-wide text-black px-8 font-poppins">Bulgogi</span>
<iconify-icon className="text-black" icon="solar:star-linear" width="24"></iconify-icon>
<span className="font-display text-3xl font-medium uppercase tracking-wide text-black px-8 font-poppins">Bibimbap</span>
<iconify-icon className="text-black" icon="solar:star-linear" width="24"></iconify-icon>
<span className="font-display text-3xl font-medium uppercase tracking-wide text-black px-8 font-poppins">Kimbap</span>
<iconify-icon className="text-black" icon="solar:star-linear" width="24"></iconify-icon>
<span className="font-display text-3xl font-medium uppercase tracking-wide text-black px-8 font-poppins">Kimchi</span>
<iconify-icon className="text-black" icon="solar:star-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<section className="lg:py-32 bg-neutral-50 w-full pt-20 pb-20 relative" id="features">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
<div className="absolute top-[10%] right-[5%] w-96 h-96 bg-orange-400/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-semibold tracking-wider uppercase">Establecido en 1994</span>
</div>
<h2 className="uppercase md:text-6xl text-5xl font-semibold text-neutral-900 tracking-tight font-display font-poppins">
                            Taste the <span className="text-[#F05830] italic font-medium font-poppins">Tradition</span>
</h2>
</div>
<p className="text-neutral-500 text-lg max-w-md font-normal leading-relaxed text-right lg:text-left">
                        Nuestro menú es una celebración de la herencia culinaria coreana, elaborado con ingredientes locales de Barcelona pero arraigado en Seúl.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<article className="md:col-span-2 group relative rounded-[2rem] overflow-hidden bg-neutral-900 h-[400px] lg:h-[500px]">
<img alt="Bulgogi BBQ a la parrilla" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 lg:p-10 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-3xl lg:text-4xl text-white font-display uppercase tracking-tight mb-2 font-poppins">Bulgogi &amp; BBQ</h3>
<p className="text-gray-300 text-sm lg:text-base max-w-md font-light">Ternera marinada en finas lonchas asada a la perfección en tu mesa. El corazón de la experiencia Kamasot.</p>
</div>
<a aria-label="Ver detalles de Barbacoa" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition hover:bg-[#F05830] hover:text-white" href="#bbq">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-[2rem] p-8 flex flex-col justify-between hover:border-orange-200 transition-colors duration-300 relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl group-hover:bg-orange-100 transition-colors"></div>
<div>
<iconify-icon className="text-[#F05830] mb-6" icon="solar:history-linear" width="40"></iconify-icon>
<h3 className="text-2xl text-neutral-900 font-display uppercase tracking-tight mb-4 font-poppins">30 Años en Barcelona</h3>
<p className="text-neutral-500 font-light leading-relaxed">
                                Desde que abrimos nuestras puertas, nos hemos mantenido fieles a las recetas de nuestra abuela. Orgullosos de ser uno de los restaurantes coreanos más antiguos de la ciudad.
                            </p>
</div>
<div className="mt-8 pt-8 border-t border-neutral-100 flex items-center gap-3">
<img alt="Chef Park" className="w-10 h-10 rounded-full grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="text-sm font-medium text-neutral-400">Head Chef Park</span>
</div>
</article>

<article className="relative rounded-[2rem] overflow-hidden h-[400px] bg-neutral-100 group">
<img alt="Dolsot Bibimbap" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8">
<div className="bg-[#F05830] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-3">Favorito del Cliente</div>
<h3 className="text-2xl text-white font-display tracking-tight font-poppins">Dolsot Bibimbap</h3>
</div>
</article>

<article className="relative rounded-[2rem] overflow-hidden h-[400px] bg-neutral-100 group">
<img alt="Fresh Kimbap" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<div className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-3">Street Food Clásico</div>
<h3 className="text-2xl text-white font-display tracking-tight font-poppins">Fresh Kimbap</h3>
</div>
</article>

<div className="bg-[#F05830] rounded-[2rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-xl"></div>
<div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-xl"></div>
<div className="relative z-10">
<h3 className="text-3xl text-white font-display uppercase tracking-tight mb-4 font-poppins">¿Listo para pedir?</h3>
<p className="text-white/80 font-light mb-8 max-w-xs mx-auto">
                                Explora nuestro menú completo de guisos, fideos y sets de barbacoa.
                            </p>
<a className="bg-white text-[#F05830] hover:bg-neutral-100 px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all shadow-xl flex items-center gap-2 mx-auto" href="#fullmenu">
                                Ver Menú Completo
                                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-[#F05830]" icon="solar:fire-linear" width="24"></iconify-icon>
<span className="font-display uppercase text-xl tracking-tight">Kamasot</span>
</div>
<p className="text-neutral-500 text-sm font-light">© 2024 Kamasot Barcelona. Authentic Korean Cuisine.</p>
<div className="flex gap-4">
<a aria-label="Instagram" className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a aria-label="Ubicación" className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>
</div>


    </>
  );
}
