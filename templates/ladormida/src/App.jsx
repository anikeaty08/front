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
theme: {
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717', // Base dark
},
yellow: {
500: '#EAB308', // Accent
600: '#CA8A04',
},
zinc: {
800: '#27272a', // Border
}
},
fontFamily: {
rubik: ['Rubik', 'sans-serif'],
inter: ['Inter', 'sans-serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800 glass-panel">
<div className="z-20 text-xs font-bold text-neutral-900 tracking-wide text-center bg-yellow-500 pt-1 pb-1 relative">
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="2" width="16"></iconify-icon>
<span className="">GASTOS DE ENVÍO GRATIS A LA PENÍNSULA</span>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<a className="uppercase flex items-center gap-2 group text-xl font-medium text-white tracking-wide font-rubik" href="#">
<span className="text-yellow-500 group-hover:rotate-12 transition-transform duration-300">
<iconify-icon className="" height="24" icon="solar:cup-hot-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
              La Dormida
            </a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#productos">
              Productos
            </a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#ritual">
              El Ritual
            </a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#nosotros">
              Nosotros
            </a>
</div>

<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon className="" height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative text-neutral-400 hover:text-yellow-500 transition-colors">
<iconify-icon height="20" icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-500 rounded-full"></span>
</button>
</div>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden border-b border-zinc-800">

<div className="absolute inset-0 z-0">

<img alt="Grupo de amigos compartiendo mate" className="opacity-60 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3533e003-4001-445e-9516-46d41ace40de_3840w.png"/>
<div className="bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/40 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-radial from-yellow-500/10 to-transparent blur-3xl"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
<div className="animate-blur-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs mb-6">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span className="">Mates auténticos en España</span>
</div>
<h1 className="font-rubik text-4xl md:text-6xl text-white font-normal tracking-tight mb-6 leading-tight">
            El ritual argentino que
            <br/>
<span className="italic text-yellow-500/90 font-serif">
              despierta los sentidos
            </span>
</h1>
<p className="font-inter text-base md:text-lg text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Conectá con el momento. Traemos mates de verdad —hechos a mano, con
            alma— directo de nuestros artesanos a tu mesa.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-neutral-900 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.3)]" href="#productos">
              Descubrí el mate
              <iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm" href="#ritual">
              ¿Cómo se prepara?
            </a>
</div>
</div>
</div>
</header>

<section className="py-24 bg-neutral-900 border-b border-zinc-800 relative overflow-hidden" id="nosotros">
<div className="absolute top-0 right-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-3xl mx-auto px-4 text-center relative z-10">
<iconify-icon className="text-yellow-500/50 mb-6 text-4xl" icon="solar:quote-up-square-linear"></iconify-icon>
<h2 className="font-rubik text-2xl md:text-3xl text-white font-normal mb-6 leading-relaxed">
          “La Dormida nace del amor por el mate y la necesidad de compartirlo
          lejos de casa. Más que una bebida, es una excusa para encontrarse.”
        </h2>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-neutral-400 text-xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="text-left">
<p className="text-sm font-medium text-white">Mauro y Valen</p>
<p className="text-xs text-neutral-500">Fundadores de La Dormida</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-b border-zinc-800" id="productos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div className="">
<h3 className="font-rubik text-3xl text-white font-normal mb-2">
              Nuestros Favoritos
            </h3>
<p className="text-neutral-400 font-light">
              Piezas únicas para tu ritual diario.
            </p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm text-yellow-500 hover:text-yellow-400 transition-colors" href="#">
            Ver tienda completa
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card rounded-xl overflow-hidden group">
<div className="relative h-64 bg-zinc-800/50 overflow-hidden">
<img alt="Mate Imperial de calabaza forrado en piel con virola de alpaca" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4d9d296-2af5-472f-88a9-f72be6a52348_1600w.png"/>
<div className="absolute top-4 right-4">
<span className="px-2 py-1 bg-black/50 backdrop-blur-md text-xs text-white rounded border border-white/10">
                  Bestseller
                </span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="font-rubik text-xl text-white font-normal">
                  Mate Imperial
                </h4>
<span className="font-medium text-yellow-500">60€</span>
</div>
<p className="text-sm text-neutral-400 font-light mb-4">
                Hechos a base de calabaza, forrados en piel con virola de
                alpaca.
              </p>
<button className="w-full py-2.5 rounded-lg border border-zinc-700 hover:border-yellow-500 hover:text-yellow-500 text-white transition-all text-sm font-medium flex items-center justify-center gap-2">
                Añadir al carrito
              </button>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden group">
<div className="relative h-64 bg-zinc-800/50 overflow-hidden">
<img alt="Kit Matero Completo" className="group-hover:scale-105 transition-transform duration-500 bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5cbea838-c03d-4d79-9a53-fd17a806fa80_1600w.png"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="font-rubik text-xl text-white font-normal">
                  Kit Iniciación
                </h4>
<span className="font-medium text-yellow-500">85€</span>
</div>
<p className="text-sm font-light text-neutral-400 mb-4">
                Termo con forrado de piel, mate imperial y 500g de yerba suave.
              </p>
<button className="w-full py-2.5 rounded-lg border border-zinc-700 hover:border-yellow-500 hover:text-yellow-500 text-white transition-all text-sm font-medium flex items-center justify-center gap-2">
                Añadir al carrito
              </button>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden group">
<div className="relative h-64 bg-zinc-800/50 overflow-hidden">
<img alt="Yerba Orgánica" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9897de3-85b2-48a4-aade-60235e5da347_1600w.png"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="font-rubik text-xl text-white font-normal">
                  Yerba Premium
                </h4>
<span className="font-medium text-yellow-500">14€</span>
</div>
<p className="text-sm font-light text-neutral-400 mb-4" style={{}}>
                Cosecha limitada, estacionamiento natural de 24 meses. Sabor
                equilibrado.
              </p>
<button className="w-full py-2.5 rounded-lg border border-zinc-700 hover:border-yellow-500 hover:text-yellow-500 text-white transition-all text-sm font-medium flex items-center justify-center gap-2">
                Añadir al carrito
              </button>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-1 text-sm text-yellow-500 hover:text-yellow-400 transition-colors" href="#">
            Ver tienda completa
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900 border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col items-center text-center p-6 rounded-xl border border-transparent hover:bg-zinc-800/30 hover:border-zinc-800 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-4">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-rubik text-lg mb-2">
              Envíos a toda España
            </h4>
<p className="text-sm text-neutral-400 font-light">
              Te lo llevamos a donde estés en 24/48hs. Empaque seguro y cuidado.
            </p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-xl border border-transparent hover:bg-zinc-800/30 hover:border-zinc-800 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-4">
<iconify-icon height="24" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-rubik text-lg mb-2">100% Argentino</h4>
<p className="text-sm text-neutral-400 font-light">
              Productos importados de origen y artesanías hechas por manos
              expertas.
            </p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-xl border border-transparent hover:bg-zinc-800/30 hover:border-zinc-800 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-4">
<iconify-icon height="24" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-rubik text-lg mb-2">Atención Humana</h4>
<p className="text-sm text-neutral-400 font-light">
              ¿Dudas? Escribinos. Te respondemos nosotros, sin robots.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="ritual">
<div className="absolute inset-0 bg-neutral-900">
<div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="glass-card p-2 rounded-2xl rotate-2">
<img alt="Preparación del mate" className="bg-center w-full h-[500px] object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9945f809-926d-4ad8-8798-515f7d956f8f_1600w.png"/>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-yellow-500 font-medium tracking-wide text-sm uppercase mb-2 block">
              Paso a paso
            </span>
<h3 className="font-rubik text-3xl md:text-4xl text-white font-normal mb-8">
              El arte de cebar un buen mate
            </h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-700 text-neutral-400 flex items-center justify-center font-rubik text-sm">
                  1
                </div>
<div>
<h5 className="text-white font-medium mb-1">La Montañita</h5>
<p className="text-sm text-neutral-400 font-light">
                    Llená el mate 3/4 partes con yerba. Tapalo con la mano,
                    agitalo y dejá la yerba inclinada a 45°.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-700 text-neutral-400 flex items-center justify-center font-rubik text-sm">
                  2
                </div>
<div className="">
<h5 className="text-white font-medium mb-1">El agua tibia</h5>
<p className="text-sm text-neutral-400 font-light">
                    Echá un chorrito de agua tibia en la parte vacía. Esperá que
                    la yerba se hinche.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-700 text-neutral-400 flex items-center justify-center font-rubik text-sm">
                  3
                </div>
<div className="">
<h5 className="text-white font-medium mb-1">
                    Introducir la bombilla
                  </h5>
<p className="text-sm text-neutral-400 font-light">
                    Tapá el pico de la bombilla con el dedo y colocala en la
                    parte húmeda, haciéndola tocar el fondo.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-yellow-500/50 text-yellow-500 flex items-center justify-center font-rubik text-sm">
                  4
                </div>
<div className="">
<h5 className="text-white font-medium mb-1">¡A disfrutar!</h5>
<p className="text-sm text-neutral-400 font-light">
                    Cebá siempre cerca de la bombilla con agua a 75-80°C. No
                    dejes que hierva.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-850/30 border-y border-zinc-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
<h3 className="font-rubik text-2xl text-white font-normal mb-2">
          Comunidad Matera
        </h3>
<p className="text-neutral-400 font-light">
          Lo que dicen quienes ya tienen su mate La Dormida.
        </p>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-neutral-900 border border-zinc-800">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm italic mb-4">
            "Increíble la calidad del cuero y las terminaciones. Llegó a Madrid
            en 2 días. Me siento como en casa."
          </p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-white">
              LG
            </div>
<span className="text-xs text-neutral-500">Juandi González</span>
</div>
</div>

<div className="p-6 rounded-xl bg-neutral-900 border border-zinc-800">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm italic mb-4">
            "Es mi primer mate y me ayudaron un montón por WhatsApp para elegir
            el mejor para empezar. 10/10."
          </p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-white">
              MR
            </div>
<span className="text-xs text-neutral-500">Marta Ruiz</span>
</div>
</div>

<div className="p-6 rounded-xl bg-neutral-900 border border-zinc-800">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm italic mb-4">
            "El kit de regalo es precioso. El packaging es muy cuidado, ideal
            para regalar. Repetiré seguro."
          </p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-white">
              PD
            </div>
<span className="text-xs text-neutral-500">Pablo Díaz</span>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 border-t border-zinc-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="font-rubik text-lg tracking-tight text-white uppercase flex items-center gap-2 mb-4" href="#">
<span className="text-yellow-500">
<iconify-icon icon="solar:cup-hot-linear"></iconify-icon>
</span>
              La Dormida
            </a>
<p className="text-sm text-neutral-500 font-light">
              Mates, bombillas y yerba de calidad premium. Llevando la cultura
              argentina a cada rincón de España.
            </p>
</div>
<div>
<h5 className="text-white font-medium mb-4 text-sm">Tienda</h5>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li>
<a className="hover:text-yellow-500 transition-colors" href="#">
                  Mates
                </a>
</li>
<li>
<a className="hover:text-yellow-500 transition-colors" href="#">
                  Bombillas
                </a>
</li>
<li>
<a className="hover:text-yellow-500 transition-colors" href="#">
                  Yerba
                </a>
</li>
<li>
<a className="hover:text-yellow-500 transition-colors" href="#">
                  Termos
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4 text-sm">Ayuda</h5>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li>
<a className="hover:text-yellow-500 transition-colors" href="#">
                  Envíos y Devoluciones
                </a>
</li>
<li>
<a className="hover:text-yellow-500 transition-colors" href="#">
                  Preguntas Frecuentes
                </a>
</li>
<li>
<a className="hover:text-yellow-500 transition-colors" href="#">
                  Contacto
                </a>
</li>
<li>
<a className="hover:text-yellow-500 transition-colors" href="#">
                  Cuidado del Mate
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4 text-sm">Newsletter</h5>
<p className="text-xs text-neutral-500 mb-4">
              Recibí ofertas y tips materos.
            </p>
<form className="flex gap-2">
<input className="w-full bg-zinc-800 border border-zinc-700 text-white text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Tu email" type="email"/>
<button className="bg-yellow-500 hover:bg-yellow-600 text-neutral-900 rounded-lg px-3 py-2 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">
            © 2023 La Dormida. Todos los derechos reservados.
          </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
