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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
},
olive: {
900: '#363a28', // Dark olive
}
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-stone-950/80 border-stone-800">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase text-stone-100" href="#">
                Man of Earth
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-400">
<a className="transition-colors hover:text-stone-100" href="#problema">El Problema</a>
<a className="transition-colors hover:text-stone-100" href="#producto">Producto</a>
<a className="transition-colors hover:text-stone-100" href="#historia">Historia</a>
<a className="transition-colors hover:text-stone-100" href="#faq">FAQ</a>
</div>
<a className="group flex items-center gap-2 text-sm font-medium transition-colors text-stone-100 hover:text-stone-400" href="#comprar">
<span>Cart (0)</span>
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">

<img alt="Natural texture background" className="w-full h-full object-cover opacity-10 grayscale-[20%]" src="https://images.unsplash.com/photo-1506434304575-afbb92660c28?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-stone-950 via-stone-950/50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 fade-in-up" style={{animationDelay: '0.1s'}}>

<div className="flex flex-col gap-4">
<div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm bg-stone-800/50 border-stone-700">
<iconify-icon className="text-stone-300" icon="lucide:leaf" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wide text-stone-300">100% Algodón Orgánico Certificado</span>
</div>

<div className="flex items-center gap-3">
<div className="flex gap-0.5 text-yellow-500">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<div className="h-4 w-px bg-stone-700"></div>
<p className="text-sm font-medium text-stone-400">
<span className="text-stone-100">4.9/5</span> de +500 hombres
                        </p>
</div>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-stone-100">
                    Making Men <br className="hidden md:block"/>
<span className="text-stone-500">Men Again.</span>
</h1>
<p className="text-lg md:text-xl leading-relaxed max-w-lg text-stone-400">
                    El boxer diseñado para tu biología. Cero plásticos. Cero químicos. Cero excusas. Recupera tu salud hormonal desde la base.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded transition-all duration-300 shadow-sm hover:shadow-md bg-stone-100 text-stone-950 hover:bg-stone-200" href="#comprar">
                        Comprar Ahora - S/89.00
                    </a>
</div>
</div>
<div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl fade-in-up bg-stone-800" style={{animationDelay: '0.3s'}}>

<img alt="Boxer Man of Earth" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-stone-600">
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 bg-stone-100 text-stone-900" id="problema">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-black">
                    Tu ropa interior podría estar <span className="text-stone-500">trabajando en tu contra.</span>
</h2>
<p className="text-lg text-stone-600">
                    La mayoría de la ropa interior moderna está hecha de plástico disfrazado de tela.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 md:gap-12">
<div className="space-y-4 border-l pl-6 border-stone-300">
<iconify-icon className="text-stone-700" icon="lucide:flask-conical-off" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-black">Plásticos Sintéticos</h3>
<p className="leading-relaxed text-stone-600">
                        El 70% de la ropa contiene materiales sintéticos que liberan microplásticos y químicos directamente en tu piel con el calor.
                    </p>
</div>
<div className="space-y-4 border-l pl-6 border-stone-300">
<iconify-icon className="text-stone-700" icon="lucide:activity" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-black">Disrupción Endocrina</h3>
<p className="leading-relaxed text-stone-600">
                        El BPA y ftalatos presentes en telas como el poliéster son disruptores hormonales vinculados científicamente a niveles bajos de testosterona.
                    </p>
</div>
<div className="space-y-4 border-l pl-6 border-stone-300">
<iconify-icon className="text-stone-700" icon="lucide:shield-alert" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-black">Absorción Escrotal</h3>
<p className="leading-relaxed text-stone-600">
                        El área escrotal es altamente permeable, absorbiendo hasta 20 veces más químicos ambientales que otras zonas de tu cuerpo.
                    </p>
</div>
</div>
<div className="mt-16 text-center border-t pt-12 border-stone-200">
<p className="text-2xl font-medium tracking-tight text-stone-700">"No es paranoia. Es biología."</p>
</div>
</div>
</section>

<section className="py-24 bg-stone-950" id="producto">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 text-stone-100">
                    Diseñado para protegerte
                </h2>
<p className="text-stone-400">Volviendo a lo esencial con materiales puros.</p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative aspect-square rounded-xl overflow-hidden shadow-lg bg-stone-800">

<img alt="Organic Cotton Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&amp;w=2531&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 backdrop-blur px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider bg-black/90 text-stone-100">
                        Tejido Premium
                    </div>
</div>
<div className="grid sm:grid-cols-2 gap-8">

<div className="p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow bg-black border-stone-900">
<div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-stone-900">
<iconify-icon className="text-stone-200" icon="lucide:sprout" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-stone-100">100% Algodón Orgánico</h3>
<p className="text-sm text-stone-400">Sin poliéster, sin elastano en la tela principal. Ni un solo gramo de plástico tocando tu piel.</p>
</div>

<div className="p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow bg-black border-stone-900">
<div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-stone-900">
<iconify-icon className="text-stone-200" icon="lucide:droplet-off" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-stone-100">Cero BPA ni Ftalatos</h3>
<p className="text-sm text-stone-400">Libre de disruptores hormonales. Testeado para pureza química.</p>
</div>

<div className="p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow bg-black border-stone-900">
<div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-stone-900">
<iconify-icon className="text-stone-200" icon="lucide:thermometer" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-stone-100">Temperatura Óptima</h3>
<p className="text-sm text-stone-400">Transpirabilidad natural superior a lo sintético. Mantiene tus testículos frescos para una fertilidad óptima.</p>
</div>

<div className="p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow bg-black border-stone-900">
<div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-stone-900">
<iconify-icon className="text-stone-200" icon="lucide:award" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-stone-100">Certificado GOTS</h3>
<p className="text-sm text-stone-400">Algodón orgánico verificado desde la semilla hasta la costura.</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="text-sm font-semibold border-b pb-0.5 transition-colors border-stone-100 hover:text-stone-400 hover:border-stone-400" href="#comprar">
                    Ver especificaciones completas →
                </a>
</div>
</div>
</section>

<section className="py-24 bg-stone-900">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tighter text-center mb-12 text-stone-100">¿Por qué 100% algodón orgánico?</h2>
<div className="rounded-xl shadow-sm border overflow-hidden bg-black border-stone-800">
<div className="grid grid-cols-3 border-b p-4 text-xs font-semibold uppercase tracking-wider text-stone-500 bg-stone-950 border-stone-800">
<div className="col-span-1">Característica</div>
<div className="col-span-1 text-center text-stone-100">Man of Earth</div>
<div className="col-span-1 text-center">Sintéticos Comunes</div>
</div>

<div className="grid grid-cols-3 p-5 border-b items-center border-stone-900">
<div className="col-span-1 text-sm font-medium text-stone-100">Material</div>
<div className="col-span-1 flex justify-center font-medium text-sm text-center text-stone-200">
<span className="px-2 py-1 rounded bg-stone-900">100% Orgánico</span>
</div>
<div className="col-span-1 flex justify-center text-sm text-center text-stone-600">Polyester / Lycra</div>
</div>

<div className="grid grid-cols-3 p-5 border-b items-center border-stone-900 bg-stone-950/30">
<div className="col-span-1 text-sm font-medium text-stone-100">Microplásticos</div>
<div className="col-span-1 flex justify-center">
<iconify-icon className="text-stone-200" icon="lucide:check" strokeWidth="2" width="20"></iconify-icon>
</div>
<div className="col-span-1 flex justify-center">
<iconify-icon className="text-stone-700" icon="lucide:x" strokeWidth="2" width="20"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-3 p-5 border-b items-center border-stone-900">
<div className="col-span-1 text-sm font-medium text-stone-100">Disruptores Endocrinos</div>
<div className="col-span-1 flex justify-center">
<span className="text-xs font-medium px-2 py-1 rounded bg-stone-900 text-stone-200">Libre (0%)</span>
</div>
<div className="col-span-1 flex justify-center text-sm text-stone-600">Presentes</div>
</div>

<div className="grid grid-cols-3 p-5 border-b items-center border-stone-900 bg-stone-950/30">
<div className="col-span-1 text-sm font-medium text-stone-100">Transpirabilidad</div>
<div className="col-span-1 flex justify-center">
<iconify-icon className="text-stone-200" icon="lucide:check" strokeWidth="2" width="20"></iconify-icon>
</div>
<div className="col-span-1 flex justify-center">
<iconify-icon className="text-stone-700" icon="lucide:x" strokeWidth="2" width="20"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-3 p-5 items-center">
<div className="col-span-1 text-sm font-medium text-stone-100">Impacto Ambiental</div>
<div className="col-span-1 flex justify-center text-sm font-medium text-stone-200">Biodegradable</div>
<div className="col-span-1 flex justify-center text-sm text-stone-600">Desecho eterno</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-black border-stone-900">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<h2 className="text-3xl font-semibold tracking-tighter mb-8 text-stone-100">Los detalles importan</h2>
<div className="space-y-6">
<div className="flex justify-between border-b pb-4 border-stone-900">
<span className="text-stone-500">Material</span>
<span className="font-medium text-stone-100">100% Algodón Orgánico GOTS</span>
</div>
<div className="flex justify-between border-b pb-4 border-stone-900">
<span className="text-stone-500">Gramaje</span>
<span className="font-medium text-stone-100">180 gsm (Ligero pero resistente)</span>
</div>
<div className="flex justify-between border-b pb-4 border-stone-900">
<span className="text-stone-500">Cintura</span>
<span className="font-medium text-stone-100">Elástico revestido (sin contacto con piel)</span>
</div>
<div className="flex justify-between border-b pb-4 border-stone-900">
<span className="text-stone-500">Costuras</span>
<span className="font-medium text-stone-100">Planas (Flatlock) anti-irritación</span>
</div>
<div className="flex justify-between items-center pt-2">
<span className="text-stone-500">Tallas</span>
<button className="text-sm font-medium underline underline-offset-4 text-stone-100 hover:text-stone-400" onclick="document.getElementById('sizeModal').showModal()">
                            Ver guía de tallas
                        </button>
</div>
</div>
</div>
<div className="order-1 md:order-2 aspect-[4/5] rounded-lg overflow-hidden bg-stone-900">
<img alt="Detalle de tela" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-stone-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tighter text-center mb-16 text-stone-100">Lo que dicen quienes hicieron el cambio</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-lg shadow-sm border bg-black border-stone-900">
<div className="flex gap-1 mb-4 text-stone-200">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="mb-6 leading-relaxed text-stone-400">"Nunca pensé que la ropa interior importara tanto hasta que probé estos. La diferencia en la sensación de la piel y la frescura es inmediata. No vuelvo al poliéster."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-stone-800">

<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-stone-100">Carlos M.</p>
<p className="text-xs text-stone-500">Comprador Verificado</p>
</div>
</div>
</div>

<div className="p-8 rounded-lg shadow-sm border bg-black border-stone-900">
<div className="flex gap-1 mb-4 text-stone-200">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="mb-6 leading-relaxed text-stone-400">"Mejor inversión para mi salud. Es minimalista, cómodo y me da paz mental saber que no tengo químicos pegados al cuerpo todo el día."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-stone-800">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-stone-100">Javier R.</p>
<p className="text-xs text-stone-500">Comprador Verificado</p>
</div>
</div>
</div>

<div className="p-8 rounded-lg shadow-sm border bg-black border-stone-900">
<div className="flex gap-1 mb-4 text-stone-200">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="mb-6 leading-relaxed text-stone-400">"El corte es perfecto. No aprieta, no se sube. Y el tejido se siente increíblemente natural. 10/10."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-stone-800">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2544&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-stone-100">Luis P.</p>
<p className="text-xs text-stone-500">Comprador Verificado</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 text-stone-900" id="historia">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative aspect-square md:aspect-[3/4] rounded-lg overflow-hidden grayscale opacity-80">
<img alt="Hombre naturaleza" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6 text-black">Por qué creamos Man of Earth</h2>
<div className="space-y-6 text-lg leading-relaxed text-stone-600">
<p>
                        En un mundo obsesionado con lo sintético, rápido y barato, la salud masculina ha pasado a un segundo plano. Los niveles de testosterona han caído drásticamente en los últimos 50 años, y el entorno químico en el que vivimos es parte del problema.
                    </p>
<p>
                        Nos dimos cuenta de que lo primero que nos ponemos cada mañana era, irónicamente, lo más tóxico. Plásticos derivados del petróleo rozando nuestra zona más sensible.
                    </p>
<p>
                        Decidimos cambiarlo. Sin atajos. Sin materiales "performance" que son solo marketing para poliéster barato. Solo algodón, tal como la naturaleza lo diseñó.
                    </p>
</div>
<blockquote className="mt-8 border-l-2 border-stone-500 pl-6 text-xl font-medium italic text-stone-800">
                    "Creemos que ser hombre empieza por cuidar lo esencial."
                </blockquote>
</div>
</div>
</section>

<section className="py-24 bg-stone-800/50" id="comprar">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-2xl shadow-xl overflow-hidden border bg-black border-stone-800">
<div className="grid lg:grid-cols-12 gap-0">

<div className="lg:col-span-7 p-8 flex items-center justify-center bg-stone-900">
<img alt="Man of Earth Boxer Pack" className="max-h-[600px] w-auto object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
</div>

<div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
<div className="mb-2 text-stone-500 text-sm font-semibold tracking-wide uppercase">Edición Clásica</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-stone-100">Haz el cambio hoy</h2>

<form className="space-y-8" id="addToCartForm" onsubmit="event.preventDefault(); alert('Redirigiendo a Shopify Checkout...');">

<div>
<label className="block text-sm font-medium mb-3 text-stone-300">Cantidad</label>
<div className="grid grid-cols-1 gap-3">

<label className="cursor-pointer relative">
<input className="peer sr-only" name="pack" type="radio" value="1"/>
<div className="p-4 rounded-lg border-2 peer-checked:border-stone-900 peer-checked:bg-stone-50 transition-all flex justify-between items-center border-stone-800 hover:border-stone-600">
<div>
<span className="block font-semibold text-stone-100">1 Boxer</span>
<span className="text-sm text-stone-500">Prueba la calidad</span>
</div>
<span className="font-medium text-stone-100">S/89.00</span>
</div>
</label>

<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="pack" type="radio" value="3"/>
<div className="p-4 rounded-lg border-2 peer-checked:border-stone-900 peer-checked:bg-stone-50 transition-all flex justify-between items-center relative overflow-hidden border-stone-800 hover:border-stone-600">
<div className="text-[10px] uppercase font-bold px-2 py-0.5 absolute top-0 right-0 rounded-bl bg-stone-100 text-stone-950">Más Popular</div>
<div>
<span className="block font-semibold text-stone-100">Pack de 3</span>
<span className="text-sm text-stone-500">Renueva tu cajón</span>
</div>
<div className="text-right">
<span className="block font-medium text-stone-100">S/240.00</span>
<span className="text-xs font-medium text-olive-200">Ahorras 10%</span>
</div>
</div>
</label>

<div className="p-4 rounded-lg border opacity-60 flex justify-between items-center cursor-not-allowed border-stone-900 bg-stone-950">
<div>
<span className="block font-medium text-stone-600">Suscripción Mensual</span>
<span className="text-sm text-stone-600">Próximamente</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<label className="block text-sm font-medium text-stone-300">Talla</label>
<button className="text-xs underline text-stone-500 hover:text-stone-200" onclick="document.getElementById('sizeModal').showModal()" type="button">Guía de tallas</button>
</div>
<div className="grid grid-cols-4 gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio" value="s"/>
<div className="h-12 rounded border flex items-center justify-center font-medium peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all border-stone-800 text-stone-400 hover:border-stone-600">S</div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="size" type="radio" value="m"/>
<div className="h-12 rounded border flex items-center justify-center font-medium peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all border-stone-800 text-stone-400 hover:border-stone-600">M</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio" value="l"/>
<div className="h-12 rounded border flex items-center justify-center font-medium peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all border-stone-800 text-stone-400 hover:border-stone-600">L</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio" value="xl"/>
<div className="h-12 rounded border flex items-center justify-center font-medium peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all border-stone-800 text-stone-400 hover:border-stone-600">XL</div>
</label>
</div>
</div>

<button className="w-full py-4 font-semibold rounded transition-all transform active:scale-[0.99] shadow-lg bg-stone-100 text-stone-950 hover:bg-stone-200" type="submit">
                                Agregar al Carrito
                            </button>

<div className="pt-4 space-y-2 text-sm text-stone-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-200" icon="lucide:check-circle"></iconify-icon>
<span>Envío gratis en pedidos de Pack 3</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-200" icon="lucide:shield-check"></iconify-icon>
<span>Garantía de satisfacción 30 días</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-200" icon="lucide:refresh-cw"></iconify-icon>
<span>Cambios y devoluciones sin costo</span>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tighter text-center mb-12 text-stone-100">Preguntas Frecuentes</h2>
<div className="space-y-4">

<details className="group rounded-lg border overflow-hidden bg-black border-stone-800">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium list-none text-stone-100">
<span>¿Por qué no usan lycra o spandex?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed border-t pt-4 text-stone-400 border-stone-900">
                        La lycra y el spandex son derivados del petróleo que contienen plastificantes. Queremos evitar cualquier material sintético en contacto directo con tu piel para asegurar cero transferencia de químicos y máxima transpirabilidad.
                    </div>
</details>

<details className="group rounded-lg border overflow-hidden bg-black border-stone-800">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium list-none text-stone-100">
<span>¿Cómo es el ajuste sin materiales elásticos?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed border-t pt-4 text-stone-400 border-stone-900">
                        Utilizamos un corte anatómico inteligente y el tejido natural del algodón (mechanical stretch). Además, la cintura elástica está recubierta para dar soporte sin tocar tu piel. El ajuste es firme pero no constrictivo.
                    </div>
</details>

<details className="group rounded-lg border overflow-hidden bg-black border-stone-800">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium list-none text-stone-100">
<span>¿El algodón orgánico dura igual que el convencional?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed border-t pt-4 text-stone-400 border-stone-900">
                        De hecho, suele durar más. Al no ser tratado con químicos agresivos durante el procesamiento, las fibras de algodón orgánico mantienen su integridad estructural por más tiempo.
                    </div>
</details>

<details className="group rounded-lg border overflow-hidden bg-black border-stone-800">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium list-none text-stone-100">
<span>¿Cómo debo lavar mi boxer?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed border-t pt-4 text-stone-400 border-stone-900">
                        Recomendamos lavar con agua fría y colores similares. Secar al aire libre es ideal para la longevidad de la fibra y el medio ambiente, pero pueden usarse en secadora a temperatura baja.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-16 border-t bg-stone-100 text-stone-600 border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<div className="mb-8 md:mb-0 text-center md:text-left">
<h3 className="text-2xl font-semibold tracking-tighter mb-2 text-black">¿Listo para hacer el cambio?</h3>
<p>Cuida lo que importa.</p>
</div>
<a className="px-8 py-3 font-medium rounded transition-colors bg-black text-stone-100 hover:bg-stone-800" href="#comprar">
                    Comprar Ahora
                </a>
</div>
<div className="grid md:grid-cols-4 gap-8 border-t pt-12 text-sm border-stone-200">
<div>
<h4 className="font-semibold mb-4 uppercase tracking-wider text-xs text-black">Man of Earth</h4>
<p>Making Men Men Again.</p>
</div>
<div>
<h4 className="font-semibold mb-4 uppercase tracking-wider text-xs text-black">Ayuda</h4>
<ul className="space-y-2">
<li><a className="transition-colors hover:text-black" href="#">Envíos y Devoluciones</a></li>
<li><a className="transition-colors hover:text-black" href="#">Guía de Tallas</a></li>
<li><a className="transition-colors hover:text-black" href="#">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 uppercase tracking-wider text-xs text-black">Legal</h4>
<ul className="space-y-2">
<li><a className="transition-colors hover:text-black" href="#">Términos del Servicio</a></li>
<li><a className="transition-colors hover:text-black" href="#">Política de Privacidad</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 uppercase tracking-wider text-xs text-black">Síguenos</h4>
<div className="flex gap-4">
<a className="transition-colors hover:text-black" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-black" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="mt-12 text-center text-xs text-stone-400">
                © 2023 Man of Earth. Todos los derechos reservados.
            </div>
</div>
</footer>

<dialog className="p-0 rounded-lg shadow-2xl backdrop:bg-stone-900/50 open:animate-in open:fade-in open:zoom-in-95 backdrop:backdrop-blur-sm max-w-lg w-full m-auto" id="sizeModal">
<div className="p-6 md:p-8 bg-black">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-semibold text-stone-100">Guía de Tallas</h3>
<form method="dialog">
<button className="text-stone-600 hover:text-stone-100">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
</form>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-stone-500 uppercase bg-stone-950">
<tr>
<th className="px-4 py-3">Talla</th>
<th className="px-4 py-3">Cintura (cm)</th>
<th className="px-4 py-3">Cintura (in)</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-900">
<tr className="bg-black">
<td className="px-4 py-3 font-medium text-stone-100">S</td>
<td className="px-4 py-3">71 - 76</td>
<td className="px-4 py-3">28 - 30</td>
</tr>
<tr className="bg-black">
<td className="px-4 py-3 font-medium text-stone-100">M</td>
<td className="px-4 py-3">81 - 86</td>
<td className="px-4 py-3">32 - 34</td>
</tr>
<tr className="bg-black">
<td className="px-4 py-3 font-medium text-stone-100">L</td>
<td className="px-4 py-3">91 - 97</td>
<td className="px-4 py-3">36 - 38</td>
</tr>
<tr className="bg-black">
<td className="px-4 py-3 font-medium text-stone-100">XL</td>
<td className="px-4 py-3">102 - 107</td>
<td className="px-4 py-3">40 - 42</td>
</tr>
</tbody>
</table>
</div>
<p className="mt-4 text-xs text-stone-500">
                * Mide alrededor de tu cintura natural. Si estás entre dos tallas, te recomendamos elegir la más grande para mayor comodidad debido a la naturaleza no elástica del algodón 100%.
            </p>
</div>
</dialog>

    </>
  );
}
