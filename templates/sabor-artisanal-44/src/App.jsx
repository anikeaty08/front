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
      

<header className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-stone-900" href="#">
                        SABOR<span className="text-orange-700">.</span>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-stone-900 transition-colors" href="#">Inicio</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Catálogo</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Nosotros</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Contacto</a>
</nav>

<div className="flex items-center space-x-4">
<button className="p-2 text-stone-500 hover:text-stone-900 transition-colors relative">
<iconify-icon height="24" icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
<span className="absolute top-1 right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-700"></span>
</span>
</button>
<button className="md:hidden p-2 text-stone-500">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="overflow-hidden sm:pt-24 sm:pb-32 pt-16 pb-24 relative">
<div className="absolute inset-x-0 top-0 h-96 -z-10 bg-gradient-to-br from-amber-100/40 to-transparent"></div>
<div className="sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4">
<span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 mb-8">
                Origen 100% Artesanal
            </span>
<h1 className="mx-auto max-w-4xl text-4xl font-medium tracking-tight text-stone-900 sm:text-6xl">
                Sabores auténticos que <span className="text-orange-800">cuentan historias.</span>
</h1>
<p className="leading-8 text-lg text-stone-600 max-w-2xl mt-6 mr-auto ml-auto">
                Descubre nuestra selección curada de ingredientes mexicanos. Transforma tus platillos diarios en experiencias culinarias extraordinarias con recetas de tradición.
            </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<a className="rounded-full bg-orange-700 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 transition-all" href="#">
                    Explorar Catálogo
                </a>
<a className="text-sm font-medium leading-6 text-stone-900 flex items-center gap-2 group" href="#">
                    Conocer más 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white border-t border-stone-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-12">
<div className="">
<h2 className="text-2xl font-medium tracking-tight text-stone-900 sm:text-3xl">Colección Esencial</h2>
<p className="mt-2 text-sm text-stone-500">Ingredientes básicos para la auténtica cocina mexicana.</p>
</div>
<a className="hidden sm:flex text-sm font-medium text-orange-700 hover:text-orange-800 items-center gap-1" href="#">
                    Ver todos <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">

<article className="group relative flex flex-col items-start justify-between rounded-2xl bg-stone-50/50 ring-1 ring-stone-200/60 p-2 transition-shadow hover:shadow-md">
<div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner bg-stone-200">
<img alt="Pasta de Achiote" className="object-cover w-full h-full" src="https://www.mayaland.com/assets/img/general_info/principales/mayan_cuisine/Achiote.png"/>
</div>
<div className="flex flex-col flex-1 px-4 py-5 w-full">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-stone-900">Pasta de Achiote</h3>
<p className="text-base font-medium text-orange-800">$120</p>
</div>
<p className="text-sm text-stone-600 mb-4 flex-1">
                            Elaborada en Yucatán con semillas selectas. Su perfil terroso es el secreto para marinados perfectos y el auténtico sabor del sureste.
                        </p>
<ul className="space-y-2 text-xs text-stone-500 mb-6">
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Ideal para Cochinita Pibil y aves.
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Mezcla artesanal sin conservadores.
                            </li>
</ul>
<button className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-stone-900 ring-1 ring-inset ring-stone-200 hover:bg-stone-50 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                            Comprar
                        </button>
</div>
</article>

<article className="group relative flex flex-col items-start justify-between rounded-2xl bg-stone-50/50 ring-1 ring-stone-200/60 p-2 transition-shadow hover:shadow-md">
<div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner bg-stone-200">
<img alt="Salsa Macha" className="object-cover w-full h-full" src="https://patijinich.com/es/wp-content/uploads/sites/3/2022/06/Salsa-Macha-con-Muchas-Nueces.jpg"/>
</div>
<div className="flex flex-col flex-1 px-4 py-5 w-full">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-stone-900">Salsa Macha</h3>
<p className="text-base font-medium text-orange-800">$185</p>
</div>
<p className="text-sm text-stone-600 mb-4 flex-1">
                            Sinfonía de chiles secos y aceite de oliva. Su picor elegante y textura crujiente elevan desde un taco hasta cortes finos.
                        </p>
<ul className="space-y-2 text-xs text-stone-500 mb-6">
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Con cacahuate y ajonjolí tostado.
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> El toque final para pizzas o pastas.
                            </li>
</ul>
<button className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-stone-900 ring-1 ring-inset ring-stone-200 hover:bg-stone-50 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                            Comprar
                        </button>
</div>
</article>

<article className="group relative flex flex-col items-start justify-between rounded-2xl bg-stone-50/50 ring-1 ring-stone-200/60 p-2 transition-shadow hover:shadow-md">
<div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner bg-stone-200">
<img alt="Chocolate de Mesa" className="object-cover w-full h-full" src="https://www.cocinavital.mx/wp-content/uploads/2023/09/chocolate-de-mesa.jpg"/>
</div>
<div className="flex flex-col flex-1 px-4 py-5 w-full">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-stone-900">Chocolate de Mesa</h3>
<p className="text-base font-medium text-orange-800">$150</p>
</div>
<p className="text-sm text-stone-600 mb-4 flex-1">
                            Cacao puro molido en piedra al estilo Guerrero. Una invitación a disfrutar de una bebida reconfortante con notas de canela y almendra.
                        </p>
<ul className="space-y-2 text-xs text-stone-500 mb-6">
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Preparación ideal en agua o leche.
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Cacao 70% de origen responsable.
                            </li>
</ul>
<button className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-stone-900 ring-1 ring-inset ring-stone-200 hover:bg-stone-50 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                            Comprar
                        </button>
</div>
</article>

<article className="group relative flex flex-col items-start justify-between rounded-2xl bg-stone-50/50 ring-1 ring-stone-200/60 p-2 transition-shadow hover:shadow-md">
<div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner bg-stone-200">
<img alt="Pasta de Mole Poblano" className="object-cover w-full h-full" src="https://mmmole.com/wp-content/uploads/2019/01/mole-poblano-11.jpg"/>
</div>
<div className="flex flex-col flex-1 px-4 py-5 w-full">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-stone-900">Mole Poblano Artesanal</h3>
<p className="text-base font-medium text-orange-800">$210</p>
</div>
<p className="text-sm text-stone-600 mb-4 flex-1">
                            Receta tradicional de los conventos de Puebla. Un equilibrio perfecto y complejo entre chiles secos, chocolate, nueces y especias dulces.
                        </p>
<ul className="space-y-2 text-xs text-stone-500 mb-6">
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Ideal para enmoladas o aves.
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Rinde de 6 a 8 porciones.
                            </li>
</ul>
<button className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-stone-900 ring-1 ring-inset ring-stone-200 hover:bg-stone-50 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                            Comprar
                        </button>
</div>
</article>

<article className="group relative flex flex-col items-start justify-between rounded-2xl bg-stone-50/50 ring-1 ring-stone-200/60 p-2 transition-shadow hover:shadow-md">
<div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner bg-stone-200">
<img className="" src="https://www.milenio.com/uploads/media/2021/03/25/extracto-de-vainilla.jpg"/>
</div>
<div className="flex flex-col flex-1 px-4 py-5 w-full">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-stone-900">Vainilla de Papantla</h3>
<p className="text-base font-medium text-orange-800">$340</p>
</div>
<p className="text-sm text-stone-600 mb-4 flex-1">
                            Extracto puro de la región Totonaca de Veracruz. Un aroma floral profundo y notas amaderadas que transforman cualquier postre o bebida.
                        </p>
<ul className="space-y-2 text-xs text-stone-500 mb-6">
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Sin endulzantes añadidos.
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Extracto de origen natural.
                            </li>
</ul>
<button className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-stone-900 ring-1 ring-inset ring-stone-200 hover:bg-stone-50 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                            Comprar
                        </button>
</div>
</article>

<article className="group relative flex flex-col items-start justify-between rounded-2xl bg-stone-50/50 ring-1 ring-stone-200/60 p-2 transition-shadow hover:shadow-md">
<div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner bg-stone-200">
<img alt="Sal de Gusano" className="object-cover w-full h-full" src="https://www.todosano.com/cdn/shop/products/Sal_de_gusano_L_1200x.png?v=1700247798"/>
</div>
<div className="flex flex-col flex-1 px-4 py-5 w-full">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-stone-900">Sal de Gusano</h3>
<p className="text-base font-medium text-orange-800">$180</p>
</div>
<p className="text-sm text-stone-600 mb-4 flex-1">
                            Mezcla oaxaqueña de sal de mar, chile costeño y gusano de maguey tostado. El acompañante por excelencia para mezcal y cítricos frescos.
                        </p>
<ul className="space-y-2 text-xs text-stone-500 mb-6">
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Elaboración artesanal en comal.
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Sazonador perfecto para frutas.
                            </li>
</ul>
<button className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-stone-900 ring-1 ring-inset ring-stone-200 hover:bg-stone-50 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                            Comprar
                        </button>
</div>
</article>
</div>
</div>
</section>

<footer className="bg-stone-900 py-12 sm:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="xl:grid xl:grid-cols-3 xl:gap-8">
<div className="space-y-8">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">
                        SABOR<span className="text-orange-500">.</span>
</a>
<p className="text-sm leading-6 text-stone-400 max-w-xs">
                        Llevando el alma de la gastronomía mexicana a tu cocina, un ingrediente artesanal a la vez.
                    </p>
<div className="flex space-x-6">
<a className="text-stone-500 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</a>
<a className="text-stone-500 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
<div className="md:grid md:grid-cols-2 md:gap-8">
<div>
<h3 className="text-sm font-medium leading-6 text-white tracking-tight">Tienda</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-stone-400 hover:text-white transition-colors" href="#">Catálogo completo</a></li>
<li><a className="text-sm leading-6 text-stone-400 hover:text-white transition-colors" href="#">Salsas y Chiles</a></li>
</ul>
</div>
<div className="mt-10 md:mt-0">
<h3 className="text-sm font-medium leading-6 text-white tracking-tight">Soporte</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-stone-400 hover:text-white transition-colors" href="#">Envíos y devoluciones</a></li>
<li><a className="text-sm leading-6 text-stone-400 hover:text-white transition-colors" href="#">Preguntas frecuentes</a></li>
</ul>
</div>
</div>
<div className="md:grid md:grid-cols-1 md:gap-8">
<div>
<h3 className="text-sm font-medium leading-6 text-white tracking-tight">Legal</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-stone-400 hover:text-white transition-colors" href="#">Términos de servicio</a></li>
<li><a className="text-sm leading-6 text-stone-400 hover:text-white transition-colors" href="#">Privacidad</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
<p className="text-xs leading-5 text-stone-500">© 2024 Sabor México. Todos los derechos reservados.</p>
</div>
</div>
</footer>

    </>
  );
}
