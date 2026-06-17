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
darkMode: 'class',
}



if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('themeToggle');
        themeToggleBtn.addEventListener('click', function() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });

        // Modal Data Content
        const modalData = {
            'despacho-region': {
                title: 'Despacho a Región',
                content: '<p class="mb-3">Realizamos envíos a todas las regiones de Chile a través de los principales operadores logísticos del país.</p><ul class="list-disc pl-5 space-y-2"><li>Los envíos se realizan en modalidad "por pagar".</li><li>El tiempo estimado de preparación es de 24 a 48 horas hábiles una vez confirmado el pago de su orden.</li><li>Recibirá un comprobante con el número de seguimiento al momento de realizarse el despacho.</li></ul>'
            },
            'pedido-santiago': {
                title: 'Cómo realizar un pedido (Cliente Santiago)',
                content: '<p class="mb-3">Para nuestros clientes ubicados en la Región Metropolitana, el proceso es el siguiente:</p><ol class="list-decimal pl-5 space-y-2"><li>Agregue los productos que desea adquirir al carrito de cotización en nuestro sitio web.</li><li>Complete el formulario con los datos de facturación de su empresa.</li><li>Un ejecutivo de ventas se contactará a la brevedad para confirmar el stock y entregar los valores finales.</li><li>Realice el pago de su pedido vía transferencia bancaria electrónica.</li><li>Coordine con su ejecutivo el retiro en nuestra sala de ventas o el despacho dentro de la ciudad de Santiago.</li></ol>'
            },
            'pedido-region': {
                title: 'Cómo realizar un pedido (Cliente Región)',
                content: '<p class="mb-3">Para clientes de regiones, siga estos pasos para concretar su compra:</p><ol class="list-decimal pl-5 space-y-2"><li>Seleccione los productos de su interés en nuestro catálogo online.</li><li>Envíe su solicitud de cotización detallando las cantidades requeridas de cada artículo.</li><li>Recibirá una proforma oficial con los valores y la disponibilidad actual.</li><li>Una vez confirmado y recepcionado el pago, procederemos a preparar su pedido en bodega.</li><li>Le informaremos las opciones logísticas y los costos aproximados para el envío a su ciudad.</li></ol>'
            },
            'retiro-pedido': {
                title: 'Cómo retirar un pedido',
                content: '<p class="mb-3">Puede retirar sus compras directamente en nuestras instalaciones sin costo adicional:</p><div class="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700/50 mb-3"><p class="font-normal text-neutral-900 dark:text-white mb-1">Dirección de Retiro:</p><p class="mb-3">Álvarez de Toledo 981, San Miguel, Santiago.</p><p class="font-normal text-neutral-900 dark:text-white mb-1">Horarios de Atención:</p><p>Lunes a viernes de 9:45 a 14:00 hrs y de 15:30 a 19:00 hrs.<br>Sábados de 10:00 a 13:00 hrs.</p></div><p class="text-sm text-neutral-500 dark:text-neutral-300 bg-blue-50/50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/50 flex gap-2.5 items-start"><i data-lucide="info" class="w-4.5 h-4.5 text-blue-500 flex-shrink-0 mt-0.5"></i> <span>Importante: Por favor, espere la confirmación por parte de su ejecutivo indicando que el "Pedido está listo para retiro" antes de acercarse a nuestra sucursal.</span></p>'
            }
        };

        // Modal Logic
        function openModal(id) {
            const modal = document.getElementById('infoModal');
            const container = document.getElementById('modalContainer');
            const title = document.getElementById('modalTitle');
            const body = document.getElementById('modalBody');

            const data = modalData[id];
            if (data) {
                title.textContent = data.title;
                body.innerHTML = data.content;
                
                // Re-initialize icons inside dynamically added content
                lucide.createIcons();
                
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                
                // Force reflow
                void container.offsetWidth;
                
                container.classList.remove('scale-95', 'opacity-0');
                container.classList.add('scale-100', 'opacity-100');
            }
        }

        function closeModal() {
            const modal = document.getElementById('infoModal');
            const container = document.getElementById('modalContainer');
            
            container.classList.remove('scale-100', 'opacity-100');
            container.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 300);
        }

        // Close modal on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
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
      

<div className="flex z-50 text-xs text-neutral-50 bg-neutral-900 dark:bg-black py-1.5 px-4 relative items-center justify-between border-b border-transparent dark:border-neutral-800">
<div className="hidden md:flex gap-4 font-normal text-neutral-300 dark:text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Despachos</a>
<a className="hover:text-white transition-colors" href="#">Descargas</a>
<a className="hover:text-white transition-colors" href="#">Catálogos</a>
</div>
<div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end font-normal text-neutral-300 dark:text-neutral-400">
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="mailto:ventas@imblasco.cl">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> ventas@imblasco.cl
            </a>
<span className="text-neutral-600 dark:text-neutral-700">|</span>
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="tel:+56225443327">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> 225443327
            </a>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-14 gap-6">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-normal tracking-tight text-neutral-950 dark:text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-neutral-900 dark:bg-white rounded-md flex items-center justify-center text-white dark:text-neutral-900 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="package"></i>
</div>
                        IMBLASCO
                    </a>
</div>

<div className="flex-1 max-w-xl hidden md:flex">
<div className="relative w-full group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400 dark:text-neutral-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</div>
<input className="block w-full pl-9 pr-3 py-1.5 border border-neutral-200 dark:border-neutral-800 rounded-full bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white dark:focus:bg-neutral-950 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500/50 transition-all text-sm font-normal" placeholder="Buscar productos, categorías o SKU..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-1.5 flex items-center hidden lg:flex">
<span className="text-xs text-neutral-400 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded-full font-normal tracking-tight transition-colors">⌘K</span>
</div>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3 text-neutral-600 dark:text-neutral-400">

<button aria-label="Toggle Theme" className="p-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm font-normal relative flex items-center justify-center" id="themeToggle">
<i className="w-4.5 h-4.5 hidden dark:block" data-lucide="sun"></i>
<i className="w-4.5 h-4.5 block dark:hidden" data-lucide="moon"></i>
</button>
<button className="md:hidden p-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
<i className="w-4.5 h-4.5" data-lucide="search"></i>
</button>
<a className="hidden sm:flex items-center gap-1.5 p-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm font-normal" href="#">
<i className="w-4.5 h-4.5" data-lucide="user"></i>
<span className="hidden lg:block">Mi Cuenta</span>
</a>
<a className="flex items-center gap-1.5 p-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm font-normal relative" href="#">
<i className="w-4.5 h-4.5" data-lucide="shopping-cart"></i>
<span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-white dark:ring-neutral-950"></span>
</a>
</div>
</div>
</div>

<nav className="border-t border-neutral-100 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-950/50 hidden md:block transition-colors duration-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<ul className="flex items-center gap-6 overflow-x-auto hide-scroll py-1.5 text-sm font-normal text-neutral-500 dark:text-neutral-400">
<li><a className="text-neutral-900 dark:text-white hover:text-neutral-900 dark:hover:text-white whitespace-nowrap transition-colors flex items-center gap-1.5" href="#"><i className="w-3.5 h-3.5" data-lucide="tag"></i>Ofertas</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white whitespace-nowrap transition-colors" href="#">Novedades</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white whitespace-nowrap transition-colors" href="#">Artículos Publicitarios</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white whitespace-nowrap transition-colors" href="#">Trofeos y Premios</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white whitespace-nowrap transition-colors" href="#">Timbres Automáticos</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white whitespace-nowrap transition-colors" href="#">Packaging</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white whitespace-nowrap transition-colors" href="#">Artículos de Pesca</a></li>
</ul>
</div>
</nav>

<div className="bg-cyan-900 dark:bg-cyan-950 w-full border-neutral-800 border-t transition-colors duration-200">
<div className="sm:px-6 lg:px-8 overflow-x-auto hide-scroll max-w-7xl mx-auto px-4">
<div className="flex min-w-max gap-6 text-sm font-normal text-white/90 py-2 items-center justify-between">
<button className="hover:text-white transition-colors tracking-tight text-left focus:outline-none" onclick="openModal('despacho-region')">DESPACHO REGIÓN</button>
<button className="hover:text-white transition-colors tracking-tight text-left focus:outline-none" onclick="openModal('pedido-santiago')">CÓMO REALIZAR UN PEDIDO (SANTIAGO)</button>
<button className="hover:text-white transition-colors tracking-tight text-left focus:outline-none" onclick="openModal('pedido-region')">CÓMO REALIZAR UN PEDIDO (REGIÓN)</button>
<button className="hover:text-white transition-colors tracking-tight text-left focus:outline-none" onclick="openModal('retiro-pedido')">CÓMO RETIRAR UN PEDIDO</button>
</div>
</div>
</div>
</header>
<main className="pb-16">

<section className="overflow-hidden flex flex-col [--fx-filter:blur(10px)_liquid-glass(2.6,10)_saturate(1.25)_noise(0.5,1,0)] dark:border-neutral-900 w-full border-transparent border-b pt-16 pb-12 relative items-center">

<div className="z-20 flex flex-col items-center px-4 max-w-4xl mx-auto text-center mb-6 relative">
<div className="inline-flex animate-fade-in-up text-sm font-normal text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 border rounded-full mb-6 px-3 py-1.5 shadow-sm items-center transition-colors" style={{animationDelay: '0.1s'}}>
                    Importadora Mayorista Líder en Chile
                </div>
<h1 className="animate-fade-in-up dark:from-white dark:to-white/50 transition-colors md:text-5xl lg:bg-clip-text lg:text-transparent lg:text-7xl text-4xl font-semibold tracking-tight bg-gradient-to-b from-black/100 to-black/50 mb-4" style={{animationDelay: '0.2s', lineHeight: '1.1'}}>Regalos Corporativos<br/>y Artículos Publicitarios</h1>
<p className="md:text-lg leading-relaxed animate-fade-in-up text-base font-normal text-neutral-500 dark:text-neutral-400 max-w-2xl transition-colors" style={{animationDelay: '0.3s'}}>Potencia tu marca con nuestro extenso catálogo de productos por mayor. Expertos en línea cobre, trofeos, tecnología y merchandising corporativo.</p>
</div>

<div className="flex animate-fade-in-up z-20 w-full h-[260px] mt-6 relative justify-center" style={{animationDelay: '0.4s'}}>

<div className="absolute top-0 z-30">
<button className="px-6 py-2.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-normal text-sm shadow-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700 focus:ring-opacity-75 tracking-tight border border-neutral-200 dark:border-neutral-800">
                        Explorar Catálogo
                    </button>
</div>

<div className="absolute top-8 w-full overflow-hidden flex justify-center pointer-events-none">
<div className="flex gap-4 w-max animate-scroll-left">

<div className="flex gap-4 pr-4">
<div className="w-44 h-56 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-white/10 -rotate-3 bg-neutral-900 dark:bg-neutral-800 flex-shrink-0">
<img alt="Etiquetas Sale" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="w-44 h-56 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-white/10 rotate-2 bg-white dark:bg-neutral-900 flex-shrink-0">
<img alt="Mochila de Cuero" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="w-44 h-56 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-white/10 -rotate-2 bg-white dark:bg-neutral-900 flex-shrink-0">
<img alt="Vaso de Café" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="w-44 h-56 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-white/10 rotate-2 bg-white dark:bg-neutral-900 flex-shrink-0">
<img alt="Libreta y Agenda" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="w-44 h-56 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-white/10 -rotate-3 bg-blue-50 dark:bg-blue-900/20 flex-shrink-0">
<img alt="Bolígrafo de lujo" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
</div>

<div className="flex gap-4 pr-4">
<div className="w-44 h-56 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-white/10 -rotate-3 bg-neutral-900 dark:bg-neutral-800 flex-shrink-0">
<img alt="Etiquetas Sale" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="w-44 h-56 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-white/10 rotate-2 bg-white dark:bg-neutral-900 flex-shrink-0">
<img alt="Mochila de Cuero" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="w-44 h-56 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-white/10 -rotate-2 bg-white dark:bg-neutral-900 flex-shrink-0">
<img alt="Vaso de Café" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="w-44 h-56 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-white/10 rotate-2 bg-white dark:bg-neutral-900 flex-shrink-0">
<img alt="Libreta y Agenda" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="w-44 h-56 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-white/10 -rotate-3 bg-blue-50 dark:bg-blue-900/20 flex-shrink-0">
<img alt="Bolígrafo de lujo" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
<a className="group flex flex-col items-center justify-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all text-center" href="#">
<div className="w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
<i className="w-5 h-5" data-lucide="coffee"></i>
</div>
<span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Línea Cobre</span>
</a>
<a className="group flex flex-col items-center justify-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all text-center" href="#">
<div className="w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-green-50 dark:group-hover:bg-green-900/30 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
<i className="w-5 h-5" data-lucide="leaf"></i>
</div>
<span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Línea Bamboo</span>
</a>
<a className="group flex flex-col items-center justify-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all text-center" href="#">
<div className="w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/30 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
<i className="w-5 h-5" data-lucide="medal"></i>
</div>
<span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Trofeos Premium</span>
</a>
<a className="group flex flex-col items-center justify-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all text-center" href="#">
<div className="w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/30 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
<i className="w-5 h-5" data-lucide="printer"></i>
</div>
<span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Sublimación</span>
</a>
<a className="group hidden md:flex flex-col items-center justify-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all text-center" href="#">
<div className="w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</div>
<span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Bolsas y Empaques</span>
</a>
<a className="group hidden md:flex flex-col items-center justify-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all text-center" href="#">
<div className="w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Escritura</span>
</a>
<a className="group hidden lg:flex flex-col items-center justify-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all text-center" href="#">
<div className="w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="laptop"></i>
</div>
<span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Tecnología</span>
</a>
<a className="group hidden lg:flex flex-col items-center justify-center gap-2.5 p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all text-center" href="#">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-900 dark:text-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
<span className="text-sm font-normal text-neutral-900 dark:text-white transition-colors">Ver todo</span>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex mb-6 items-center justify-between">
<h2 className="text-2xl font-normal tracking-tight text-neutral-900 dark:text-white transition-colors">Nuevos Productos</h2>
<div className="flex gap-2">
<button className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
<i className="w-4.5 h-4.5" data-lucide="chevron-left"></i>
</button>
<button className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-sm">
<i className="w-4.5 h-4.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">

<div className="group relative flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-3 transition-all duration-300 group-hover:border-neutral-300 dark:group-hover:border-neutral-700">
<img alt="Llavero metálico pastillero K67" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1703589535932-52d08169014f?w=800&amp;q=80"/>
</div>
<div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mb-1">Accesorios-Herramientas</p>
<h3 className="text-base font-normal text-neutral-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
<a href="#">Llavero metálico pastillero K67</a>
</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-1.5 font-normal">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Stock disponible
                        </p>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer">
<div className="absolute top-2.5 left-2.5 z-20">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-normal bg-white text-blue-600 shadow-sm uppercase tracking-tight">Oferta</span>
</div>
<div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-3 transition-all duration-300 group-hover:border-neutral-300 dark:group-hover:border-neutral-700">
<img alt="Posavasos Encobrizados" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1522036877096-160ea15c62fd?w=800&amp;q=80"/>
</div>
<div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mb-1">Línea Cobre</p>
<h3 className="text-base font-normal text-neutral-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
<a href="#">Set De 2 Posavasos Encobrizados M112</a>
</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-1.5 font-normal">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 840 unids.
                        </p>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer">
<div className="absolute top-2.5 left-2.5 z-20">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-normal bg-white text-neutral-500 shadow-sm uppercase tracking-tight">Agotado</span>
</div>
<div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-3 transition-all duration-300 group-hover:border-neutral-300 dark:group-hover:border-neutral-700">
<img alt="Llavero Grua Cobre" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1767216485881-77f9db593d89?w=800&amp;q=80"/>
</div>
<div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mb-1">Llaveros</p>
<h3 className="text-base font-normal text-neutral-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
<a href="#">Llavero Grua Cobre K86</a>
</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-1.5 font-normal">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600"></span> Sin stock
                        </p>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer">
<div className="absolute top-2.5 right-2.5 z-20">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-normal bg-white text-orange-600 shadow-sm uppercase tracking-tight">Próxima Llegada</span>
</div>
<div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-3 transition-all duration-300 group-hover:border-neutral-300 dark:group-hover:border-neutral-700">
<img alt="Mug Térmico Acero Inox" className="w-full h-full object-cover z-10 relative transition-transform duration-700 ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1516390118834-21602d501886?w=800&amp;q=80"/>
</div>
<div className="">
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mb-1">Mugs y Tazones</p>
<h3 className="text-base font-normal text-neutral-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
<a href="#">Mug Térmico Acero Inox M202</a>
</h3>
<p className="text-sm text-orange-600 dark:text-orange-400 mt-1 flex items-center gap-1 font-normal">
<i className="w-3.5 h-3.5" data-lucide="calendar"></i> 30 Mayo 2026
                        </p>
</div>
</div>
</div>
<div className="mt-10 text-center">
<button className="inline-flex items-center justify-center gap-1.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white px-5 py-2.5 rounded-full text-sm font-normal hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-sm">
                    Cargar más productos
                    <i className="w-4 h-4" data-lucide="rotate-cw"></i>
</button>
</div>
</section>
</main>

<footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-12 pb-8 transition-colors duration-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
<div>
<h4 className="text-sm font-normal text-neutral-900 dark:text-white mb-4 uppercase tracking-tight">Atención al Cliente</h4>
<ul className="space-y-2.5 text-sm text-neutral-500 dark:text-neutral-400 font-normal">
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Cómo realizar un pedido</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Despachos a Región</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Retiro en tienda</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Políticas Comerciales</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-normal text-neutral-900 dark:text-white mb-4 uppercase tracking-tight">Empresa</h4>
<ul className="space-y-2.5 text-sm text-neutral-500 dark:text-neutral-400 font-normal">
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Nuestra Empresa</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Nuestro Taller</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Contacto</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-sm font-normal text-neutral-900 dark:text-white mb-4 uppercase tracking-tight">Contáctanos</h4>
<div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800">
<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 flex items-start gap-2 font-normal">
<i className="w-4 h-4 mt-0.5 text-neutral-400 dark:text-neutral-500 flex-shrink-0" data-lucide="map-pin"></i>
                            Álvarez de Toledo 981, San Miguel, Santiago.
                        </p>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 flex items-start gap-2 font-normal">
<i className="w-4 h-4 mt-0.5 text-neutral-400 dark:text-neutral-500 flex-shrink-0" data-lucide="clock"></i>
                            Lunes a viernes 9:45 a 14:00 hrs y 15:30 a 19:00 hrs. Sábados 10:00 a 13:00 hrs.
                        </p>
<p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2 font-normal">
<i className="w-4 h-4 mt-0.5 text-neutral-400 dark:text-neutral-500 flex-shrink-0" data-lucide="phone"></i>
                            225443327 - 225443382 - 225440418
                        </p>
</div>
</div>
</div>
<div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                    © 2024 Importadora Blas y Compañia Ltda. Todos los derechos reservados.
                </p>
<div className="flex gap-4">
<a className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">
<span className="sr-only">Facebook</span>
<i className="w-4.5 h-4.5" data-lucide="users"></i>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4" id="infoModal">
<div className="absolute inset-0 bg-neutral-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-xl w-full relative z-10 transform scale-95 opacity-0 transition-all duration-300" id="modalContainer">
<div className="flex items-center justify-between p-5 border-b border-neutral-100 dark:border-neutral-800">
<h3 className="text-xl font-normal tracking-tight text-neutral-900 dark:text-white" id="modalTitle"></h3>
<button className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-5 text-sm text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed overflow-y-auto max-h-[60vh]" id="modalBody">

</div>
<div className="p-5 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 rounded-b-2xl flex justify-end">
<button className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors text-sm font-normal shadow-sm focus:outline-none" onclick="closeModal()">
                    Cerrar
                </button>
</div>
</div>
</div>


    </>
  );
}
