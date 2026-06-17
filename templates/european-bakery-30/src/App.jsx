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
serif: ['Cinzel', 'serif'],
script: ['Great Vibes', 'cursive'],
},
colors: {
gold: {
100: '#fbf5e6',
200: '#f5e6c3',
300: '#ecd295',
400: '#e0b865',
500: '#d49e3d',
600: '#b87e2e',
},
stone: {
850: '#1f1f1e',
900: '#1c1917',
950: '#0c0a09',
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
}
}
}
}



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
      

<div className="fixed inset-0 bg-noise pointer-events-none z-0 opacity-50"></div>

<nav className="fixed w-full z-50 top-0 transition-all duration-500 bg-stone-950/70 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between relative gap-4">

<a className="flex flex-col items-start md:items-center justify-center group relative z-10 shrink-0" href="#">
<h1 className="font-serif text-lg md:text-3xl tracking-[0.15em] text-white font-medium group-hover:text-gold-300 transition-colors duration-500 uppercase leading-none">
                    Alessandro
                </h1>
<span className="font-script text-gold-400 text-base md:text-2xl mt-0.5 md:mt-1 tracking-wide leading-none opacity-90">
                    Panetteria Europea
                </span>
</a>


<a className="group overflow-hidden glass-card hover:bg-gold-500/10 transition-all duration-500 border-gold-500/20 md:px-6 md:py-3 flex items-center md:flex-col md:items-end justify-center shrink-0 gap-2 md:gap-0 border rounded-full pt-2 pr-4 pb-2 pl-4 relative" href="tel:+526141320501">

<svg className="lucide lucide-phone w-3.5 h-3.5 text-gold-400 md:hidden" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>

<span className="text-[10px] uppercase text-gold-400 hidden md:block font-medium tracking-widest mb-0.5">Reservar Mesa</span>

<span className="text-xs md:text-sm font-serif text-white group-hover:text-gold-200 transition-colors tracking-widest">
<span className="md:hidden font-medium">Reservar</span>
<span className="hidden md:inline font-merriweather">+52 614 132 0501</span>
</span>

<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold-600/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-stone-700/10 rounded-full blur-[80px] md:blur-[100px] mix-blend-screen"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
<div className="glass-card inline-flex items-center gap-3 px-4 py-1.5 rounded-full mb-10 transform hover:scale-105 transition-transform duration-500 cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
<span className="text-[10px] md:text-xs tracking-widest uppercase text-stone-300">Distrito Uno, CUU • 7AM - 11PM</span>
</div>
<h2 className="font-serif text-4xl md:text-7xl lg:text-9xl tracking-tight text-white mb-6 md:mb-8 leading-[1.05] drop-shadow-2xl opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
                Europa en <br/>
<span className="relative inline-block">
<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-gold-100 to-gold-600">el Norte</span>
<div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent blur-sm"></div>
</span>
</h2>
<p className="text-base md:text-xl text-stone-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] px-4">
                Una fusión sofisticada de panadería europea tradicional y el carácter gastronómico de Chihuahua.
            </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8 perspective-1000">

<div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden glass-card transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
<img alt="Viennoiserie" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-10 h-[1px] bg-gold-500 mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
<h3 className="font-serif text-xl md:text-2xl text-white mb-1">Panadería</h3>
<p className="text-[10px] md:text-xs text-stone-300 font-light tracking-wide uppercase">Masa Madre &amp; Fermentación Larga</p>
</div>
</div>

<div className="group relative h-64 md:h-96 rounded-2xl overflow-hidden glass-card transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] md:-mt-12 z-20 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
<img alt="Rib Eye" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-10 h-[1px] bg-gold-500 mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
<h3 className="font-serif text-xl md:text-2xl text-white mb-1">Cocina</h3>
<p className="text-[10px] md:text-xs text-stone-300 font-light tracking-wide uppercase">High Sterling Silver &amp; Cortes</p>
</div>
</div>

<div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden glass-card transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.9s_forwards]">
<img alt="Repostería" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1579372786152-73ad83863137?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-10 h-[1px] bg-gold-500 mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
<h3 className="font-serif text-xl md:text-2xl text-white mb-1">Repostería</h3>
<p className="text-[10px] md:text-xs text-stone-300 font-light tracking-wide uppercase">Técnica Francesa &amp; Chocolate Fino</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/30 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 space-y-8">
<span className="text-gold-500 font-script text-3xl opacity-80">Nuestra Filosofía</span>
<h3 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                        Más que panadería, un destino culinario.
                    </h3>
<div className="w-20 h-[1px] bg-gradient-to-r from-gold-500 to-transparent"></div>
<p className="text-stone-400 text-lg font-light leading-relaxed">
                        Ubicados en la exclusividad del segundo piso de All Loft, ofrecemos un refugio del bullicio urbano. Nuestra cocina combina la honestidad del ingrediente artesanal con la sofisticación del paladar chihuahuense, creando un ambiente vibrante ideal para desde un café matutino hasta una cena ejecutiva.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-4">
<div>
<h4 className="text-white font-serif text-xl mb-2">Maestría</h4>
<p className="text-stone-500 text-sm">Panes de masa madre y pastelería con 100% de aprobación.</p>
</div>
<div>
<h4 className="text-white font-serif text-xl mb-2">Servicio</h4>
<p className="text-stone-500 text-sm">Hospitalidad personalizada y atención al detalle.</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative group">
<div className="absolute -inset-4 bg-gold-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
<div className="relative rounded-2xl overflow-hidden glass-card border-none shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
<img alt="Interior Alessandro" className="w-full object-cover opacity-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8">
<p className="text-white font-serif text-2xl">Citadela 5701</p>
<p className="text-gold-400 font-script text-xl">Edificio All Loft</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-900/30 border-y border-white/5 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="font-serif text-4xl md:text-5xl text-white mb-6">La Colección</h2>
<p className="text-stone-400 font-light max-w-lg mx-auto">
                    Una selección curada de nuestros platillos y repostería más aclamada por nuestros visitantes.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative glass-card p-4 rounded-xl hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[4/5] rounded-lg overflow-hidden mb-5 relative">
<img alt="Chilaquiles" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-stone-950/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-white font-medium text-xs">$330</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-serif text-white tracking-tight">Chilaquiles Ramos</h3>
</div>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-4">
                        La fusión perfecta: salsas artesanales con el icónico chicharrón de la Ramos. Un clásico norteño elevado.
                    </p>
</div>

<div className="group relative glass-card p-4 rounded-xl hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 lg:mt-12">
<div className="aspect-[4/5] rounded-lg overflow-hidden mb-5 relative">
<img alt="Steak" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-stone-950/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-white font-medium text-xs">$559</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-serif text-white tracking-tight">Steak Rib Eye Churchill</h3>
</div>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-4">
                        300g de calidad High Sterling Silver, terminado con mantequilla de ajo y especias finas.
                    </p>
</div>

<div className="group relative glass-card p-4 rounded-xl hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[4/5] rounded-lg overflow-hidden mb-5 relative">
<img alt="Sandwich" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1634068712716-e56598357a62?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-stone-950/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-white font-medium text-xs">$449</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-serif text-white tracking-tight">Sandwich French Dip</h3>
</div>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-4">
                        800g de Roast Beef, mozzarella y cebolla caramelizada en nuestra baguette artesanal, servido con jugo de carne.
                    </p>
</div>

<div className="group relative glass-card p-4 rounded-xl hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 lg:mt-12">
<div className="aspect-[4/5] rounded-lg overflow-hidden mb-5 relative">
<img alt="Cake" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-stone-950/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-white font-medium text-xs">$159</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-serif text-white tracking-tight">Pastel Trufa</h3>
</div>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-4">
                        El favorito indiscutible. Chocolate de origen, texturas sedosas y una presentación impecable.
                    </p>
</div>
</div>
</div>
</section>

<footer className="relative pt-24 pb-12 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-stone-900 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center justify-center text-center mb-16 space-y-8">

<div className="group cursor-default">
<h2 className="font-serif text-3xl md:text-5xl tracking-[0.2em] text-white uppercase mb-2 group-hover:text-gold-300 transition-colors duration-500">Alessandro</h2>
<p className="font-script text-gold-500 text-2xl md:text-3xl opacity-80">Panetteria Europea</p>
</div>

<div className="flex flex-col md:flex-row gap-8 md:gap-16 text-stone-400 font-light text-sm md:text-base">
<div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:bg-white/5 transition-colors">
<svg className="lucide lucide-map-pin w-4 h-4 text-gold-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Citadela 5701, All Loft Piso 2, D1</span>
</div>
<a className="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:bg-white/5 hover:text-white transition-colors" href="tel:+526141320501">
<svg className="lucide lucide-phone w-4 h-4 text-gold-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+52 614 132 0501</span>
</a>
<div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:bg-white/5 transition-colors">
<svg className="lucide lucide-clock w-4 h-4 text-gold-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Lun - Dom: 7:00 AM - 11:00 PM</span>
</div>
</div>

<div className="flex gap-8 pt-4">
<a className="text-stone-500 hover:text-white transform hover:scale-125 transition-all duration-300" href="#">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-stone-500 hover:text-white transform hover:scale-125 transition-all duration-300" href="#">
<svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>

<div className="border-t border-white/5 pt-8 text-center">
<p className="text-stone-600 text-xs tracking-widest uppercase">
                    © 2024 Alessandro Panetteria. Chihuahua, México.
                </p>
</div>
</div>
</footer>

<style>
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .perspective-1000 {
            perspective: 1000px;
        }
    </style>


    </>
  );
}
