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
brand: {
bg: '#0f172a',
surface: '#1e293b',
accent: '#2dd4bf',
cta: '#2dd4bf'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-bg/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="bg-brand-surface border border-white/10 p-1.5 rounded-lg flex items-center justify-center">
<iconify-icon className="text-brand-accent" height="24" icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-lg">LEVEL UP</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-brand-accent transition-colors" href="#">Teclados</a>
<a className="hover:text-brand-accent transition-colors" href="#">Ratones</a>
<a className="hover:text-brand-accent transition-colors" href="#">Audio</a>
<a className="hover:text-brand-accent transition-colors" href="#">Monitores</a>
</div>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon height="24" icon="solar:cart-large-linear" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon height="24" icon="solar:user-circle-linear" width="24"></iconify-icon></a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-cta/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-6 space-y-8">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                        Domina la partida con <span className="text-brand-accent">equipamiento</span> de nivel Dios.
                    </h1>
<p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-xl">
                        Periféricos de alto rendimiento para atletas de esports. Latencia cero, precisión milimétrica y la mejor inmersión.
                    </p>

<div className="inline-flex items-center gap-3 bg-brand-surface border border-white/10 rounded-lg p-3 pr-6">
<div className="bg-brand-accent/10 p-2 rounded-md flex items-center justify-center">
<iconify-icon className="text-brand-accent" height="24" icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Pack Setup Pro</span>
<div className="flex items-baseline gap-2">
<span className="text-sm line-through text-slate-500">RD$ 45,500</span>
<span className="font-semibold text-white">RD$ 35,990</span>
</div>
</div>
</div>

<div className="space-y-6">
<button className="w-full md:w-auto bg-brand-cta hover:bg-teal-300 text-brand-bg font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] flex items-center justify-center gap-2">
                            Comprar Ahora
                            <iconify-icon height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
<div className="flex flex-col gap-2">
<span className="text-xs text-slate-500">La oferta termina en:</span>
<div className="flex items-center gap-4 text-2xl font-mono text-white tracking-widest">
<div className="bg-brand-surface border border-white/5 rounded px-3 py-1">04</div>
<span className="text-slate-600">:</span>
<div className="bg-brand-surface border border-white/5 rounded px-3 py-1">59</div>
<span className="text-slate-600">:</span>
<div className="bg-brand-surface border border-white/5 rounded px-3 py-1 text-brand-cta">59</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 relative flex justify-center lg:justify-end">

<div className="bg-gradient-to-t from-brand-bg via-transparent to-transparent w-full h-full z-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 w-full max-w-md">
<img alt="Gaming Setup" className="rounded-3xl shadow-2xl border border-white/5 w-full object-cover h-[500px] contrast-125" src="https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?w=1600&amp;q=80" style={{}}/>

<div className="absolute -bottom-6 -left-6 md:-left-12 glass-card p-4 rounded-2xl flex items-center gap-4 max-w-xs shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
<div className="bg-indigo-600 p-3 rounded-xl shadow-inner flex items-center justify-center">
<iconify-icon className="text-white" height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-sm">Envío Express Gratis</h3>
<p className="text-xs text-slate-400 mt-0.5">En pedidos superiores a RD$ 3,000</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-brand-surface border border-white/5 p-5 rounded-2xl hover:border-brand-accent/30 transition-colors group">
<div className="bg-indigo-900/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-900/40 transition-colors">
<iconify-icon className="text-brand-accent" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed">
<span className="text-white font-medium">Garantía de 2 Años</span> en todos nuestros periféricos y componentes.
                    </p>
</div>

<div className="bg-brand-surface border border-white/5 p-5 rounded-2xl hover:border-brand-accent/30 transition-colors group">
<div className="bg-indigo-900/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-900/40 transition-colors">
<iconify-icon className="text-brand-accent" height="24" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed">
<span className="text-white font-medium">Envío en 24 Horas</span> recibe tu setup mañana mismo.
                    </p>
</div>

<div className="bg-brand-surface border border-white/5 p-5 rounded-2xl hover:border-brand-accent/30 transition-colors group">
<div className="bg-indigo-900/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-900/40 transition-colors">
<iconify-icon className="text-brand-accent" height="24" icon="solar:headphones-round-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed">
<span className="text-white font-medium">Soporte Técnico 24/7</span> por expertos en hardware y software.
                    </p>
</div>

<div className="bg-brand-surface border border-white/5 p-5 rounded-2xl hover:border-brand-accent/30 transition-colors group">
<div className="bg-indigo-900/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-900/40 transition-colors">
<iconify-icon className="text-brand-accent" height="24" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed">
<span className="text-white font-medium">Devolución 30 Días</span> si no mejora tu aim, te devolvemos el dinero.
                    </p>
</div>
</div>
</div>
</main>

<section className="py-24 bg-brand-bg relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Tu arsenal completo</h2>
<p className="text-slate-400 max-w-2xl mx-auto text-lg">Un ecosistema diseñado para maximizar tu rendimiento en cada partida.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-brand-surface rounded-2xl overflow-hidden border border-white/5 relative group hover:border-white/10 transition-all">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-48 bg-gradient-to-b from-slate-800 to-brand-surface flex items-center justify-center relative overflow-hidden">

<div className="w-3/4 h-3/4 bg-slate-900 rounded-lg border border-white/5 shadow-2xl transform hover:scale-105 transition-transform duration-500 p-4 flex flex-col gap-2 justify-center">
<div className="flex gap-1 justify-center opacity-50"><div className="w-4 h-4 bg-brand-accent/40 rounded"></div><div className="w-4 h-4 bg-slate-700 rounded"></div><div className="w-4 h-4 bg-slate-700 rounded"></div></div>
<div className="flex gap-1 justify-center opacity-50"><div className="w-4 h-4 bg-slate-700 rounded"></div><div className="w-4 h-4 bg-brand-accent/40 rounded"></div><div className="w-4 h-4 bg-slate-700 rounded"></div></div>
</div>
</div>
<div className="p-6 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-accent text-xl" icon="solar:keyboard-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white">Teclados Mecánicos</h3>
</div>
<p className="text-slate-400 text-sm">Switches ópticos de respuesta instantánea y construcción de aluminio.</p>
</div>
</div>

<div className="bg-brand-surface rounded-2xl overflow-hidden border border-white/5 relative group hover:border-white/10 transition-all">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-48 bg-gradient-to-b from-slate-800 to-brand-surface flex items-center justify-center relative overflow-hidden">
<div className="w-32 h-48 bg-slate-900/80 border border-white/5 rounded-full transform rotate-12 mt-8 p-4 shadow-2xl flex items-center justify-center">
<iconify-icon className="text-slate-500" height="48" icon="solar:mouse-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-6 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-accent text-xl" icon="solar:mouse-circle-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white">Ratones Ultraligeros</h3>
</div>
<p className="text-slate-400 text-sm">Sensores de 30K DPI y peso pluma de 55g para flicks perfectos.</p>
</div>
</div>

<div className="bg-brand-surface rounded-2xl overflow-hidden border border-white/5 relative group hover:border-white/10 transition-all">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-48 bg-gradient-to-b from-slate-800 to-brand-surface flex items-center justify-center relative overflow-hidden">
<div className="w-32 h-32 bg-slate-900 border border-slate-700 rounded-full shadow-2xl flex items-center justify-center p-1">
<div className="w-full h-full rounded-full border-4 border-slate-800 flex items-center justify-center">
<iconify-icon className="text-slate-400" height="40" icon="solar:headphones-round-sound-linear" width="40"></iconify-icon>
</div>
</div>
</div>
<div className="p-6 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-accent text-xl" icon="solar:soundwave-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white">Audio Espacial</h3>
</div>
<p className="text-slate-400 text-sm">Headsets con sonido 7.1 envolvente para escuchar cada paso enemigo.</p>
</div>
</div>

<div className="bg-brand-surface rounded-2xl overflow-hidden border border-white/5 relative group hover:border-white/10 transition-all">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-48 bg-gradient-to-b from-slate-800 to-brand-surface flex items-center justify-center p-8">
<div className="relative w-40 h-24 bg-indigo-900/20 rounded-lg shadow-lg border border-white/5 flex items-center justify-center">
<iconify-icon className="text-brand-accent" height="48" icon="solar:monitor-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-6 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-accent text-xl" icon="solar:display-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white">Monitores 360Hz</h3>
</div>
<p className="text-slate-400 text-sm">Paneles OLED y Fast IPS para una fluidez visual sin precedentes.</p>
</div>
</div>

<div className="bg-brand-surface rounded-2xl overflow-hidden border border-white/5 relative group hover:border-white/10 transition-all">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-48 bg-gradient-to-b from-slate-800 to-brand-surface flex items-center justify-center">
<div className="w-24 h-24 rounded-full border-2 border-brand-accent/20 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t-2 border-brand-accent animate-spin" style={{animationDuration: '3s'}}></div>
<iconify-icon className="text-slate-300" height="40" icon="solar:chair-2-linear" width="40"></iconify-icon>
</div>
</div>
<div className="p-6 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-accent text-xl" icon="solar:armchair-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white">Sillas Ergonómicas</h3>
</div>
<p className="text-slate-400 text-sm">Diseño lumbar adaptativo para largas sesiones de juego sin dolor.</p>
</div>
</div>

<div className="bg-brand-surface rounded-2xl overflow-hidden border border-white/5 relative group hover:border-white/10 transition-all">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-48 bg-gradient-to-b from-slate-800 to-brand-surface flex items-center justify-center p-8">
<iconify-icon className="text-indigo-500/80 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" height="64" icon="solar:lightbulb-bolt-linear" width="64"></iconify-icon>
</div>
<div className="p-6 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-accent text-xl" icon="solar:bolt-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white">Iluminación RGB</h3>
</div>
<p className="text-slate-400 text-sm">Ecosistema de luces sincronizadas con tus juegos favoritos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 max-w-7xl mx-auto px-6">
<div className="bg-gradient-to-r from-indigo-600 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl relative">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="grid grid-cols-1 md:grid-cols-2 items-center p-8 md:p-12 lg:p-16 relative z-10">
<div className="space-y-6 order-2 md:order-1">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Alfombrilla XXL<br/>incluida de regalo</h2>
<div className="space-y-4 text-indigo-100 text-base md:text-lg">
<p>Con la compra del Pack Setup Pro, recibes nuestra superficie de deslizamiento premium totalmente gratis.</p>
<p className="opacity-80 text-sm">Medidas 900x400mm, bordes cosidos y base antideslizante.</p>
</div>
<button className="bg-white text-indigo-900 hover:bg-slate-100 font-semibold px-8 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2 mt-4">
                        Reclamar Regalo
                        <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="order-1 md:order-2 flex justify-center md:justify-end mb-8 md:mb-0">

<div className="relative w-64 h-64 transform rotate-12 hover:rotate-0 transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-2xl border border-white/20 flex flex-col items-center justify-center text-center p-6">
<span className="text-5xl font-bold text-white/90 tracking-tighter">XL</span>
<span className="text-lg text-white/50 uppercase tracking-widest mt-2">Surface</span>
<div className="mt-8 bg-brand-accent px-4 py-1 rounded-full text-xs text-brand-bg font-bold backdrop-blur-sm uppercase">Edición Limitada</div>
</div>

<div className="absolute -inset-1 bg-brand-accent/30 blur-xl -z-10 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 mt-12 bg-brand-surface/30">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" height="20" icon="solar:gamepad-linear" width="20"></iconify-icon>
<span className="text-slate-500 font-medium">LEVEL UP © 2024</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-300 transition-colors" href="#">Privacidad</a>
<a className="hover:text-slate-300 transition-colors" href="#">Términos</a>
<a className="hover:text-slate-300 transition-colors" href="#">Contacto</a>
</div>
</div>
</footer>

    </>
  );
}
