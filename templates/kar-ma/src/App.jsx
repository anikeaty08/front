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
teal: '#155e75',
dark: '#083344',
light: '#f8fafc',
accent: '#0ea5e9',
gold: '#f59e0b'
}
},
fontFamily: {
serif: ['"Instrument Serif"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
display: ['"Google Sans Flex"', 'sans-serif'],
mono: ['"Space Grotesk"', 'sans-serif'],
quote: ['"Newsreader"', 'serif'],
},
borderRadius: {
'4xl': '2rem',
'5xl': '2.5rem',
'6xl': '4rem',
}
}
}
}



      // Init Icons
      lucide.createIcons();

      // Mobile Menu Logic
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');

      if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        // Hide menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            });
        });
      }

      // Intersection Observer for Scroll Animations
      // This handles the "element by element" reveal as the user scrolls
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target); // Run animation once
          }
        });
      }, observerOptions);

      // Select all elements with the 'reveal-on-scroll' class
      const elementsToAnimate = document.querySelectorAll('.reveal-on-scroll');
      elementsToAnimate.forEach(el => observer.observe(el));
    
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
      

<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b74a664-fbfd-4635-896f-89d14fdc9239_3840w.png?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<nav className="fixed z-50 w-full top-0 pointer-events-none">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex md:px-6 shadow-2xl shadow-black/50 transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1) hover:scale-[1.01] hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.15)] hover:border-white/20 hover:bg-[#0f172a] group pointer-events-auto bg-[#0f172a]/80 w-full h-14 max-w-3xl border-white/10 border rounded-full mt-6 mr-auto ml-auto pr-4 pl-4 backdrop-blur-2xl items-center justify-between relative overflow-hidden isolate" style={{animation: 'nav-enter 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both'}}>

<div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent h-full w-full transform -translate-x-[150%] skew-x-[-20deg] pointer-events-none group-hover:animate-[shine_1.2s_ease-in-out]">
<style>
              @keyframes shine {
                0% { transform: translateX(-150%) skewX(-20deg); }
                100% { transform: translateX(150%) skewX(-20deg); }
              }
            </style>
</div>

<div className="flex items-center gap-2 relative z-10">
<a className="flex-shrink-0 flex items-center gap-2 transition-transform duration-300 hover:scale-105" href="#">
<img alt="Kar &amp; Ma" className="opacity-90 group-hover:opacity-100 transition-all duration-300 w-12 h-15 object-contain invert brightness-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd3fc2dd-93d6-404f-9063-1a805d8b3ba9_1600w.png"/>
</a>
</div>

<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 tracking-wide hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#productos">
              Productos
            </a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 tracking-wide hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#marcas">
              Marcas
            </a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 tracking-wide hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#beneficios">
              Diferencial
            </a>
<a className="hover:text-white hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-xs font-medium text-slate-400 tracking-wide rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#nosotros">
              Empresa
            </a>
</div>

<div className="flex items-center gap-3 md:gap-4 relative z-10">
<a className="group/btn relative rounded-full bg-white text-brand-dark px-5 py-2 text-xs font-semibold hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] ring-2 ring-transparent hover:ring-white/50" href="#contacto">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-200/50 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 ease-out"></div>
<span className="relative z-10 flex items-center gap-1">
                Cotiza Aquí
                <svg className="lucide lucide-arrow-up-right opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 w-0 group-hover/btn:w-3" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</span>
</a>

<div className="md:hidden flex items-center">
<button className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-90" id="mobile-menu-btn">
<svg className="lucide lucide-menu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 6h16"></path>
<path d="M4 18h16"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="hidden md:hidden pointer-events-auto absolute top-24 left-4 right-4 bg-brand-dark border border-white/10 rounded-3xl shadow-2xl py-6 px-6 flex-col gap-4 ring-1 ring-white/5 glass-card" id="mobile-menu">
<a className="text-sm font-medium text-white/80 py-3 block border-b border-white/5 hover:text-white transition-colors" href="#productos">
          Productos
        </a>
<a className="text-sm font-medium text-white/80 py-3 block border-b border-white/5 hover:text-white transition-colors" href="#marcas">
          Marcas
        </a>
<a className="text-sm font-medium text-white/80 py-3 block border-b border-white/5 hover:text-white transition-colors" href="#beneficios">
          Diferencial
        </a>
<a className="text-sm font-medium text-white/80 py-3 block border-b border-white/5 hover:text-white transition-colors" href="#nosotros">
          Empresa
        </a>
<a className="mt-2 block w-full text-center bg-white text-brand-dark px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors" href="#contacto">
          Cotiza Aquí
        </a>
</div>
</nav>

<header className="min-h-screen flex overflow-hidden pt-20 pb-24 relative items-center justify-center">

<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Pozas de sal Kar &amp; Ma" className="opacity-60 w-full h-full object-cover saturate-0 scale-105" src="https://images.unsplash.com/photo-1622100394397-f9bfe7c3f2fc?w=1600&amp;q=80"/>
<div className="pointer-events-none bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 lg:px-8 flex flex-col text-center w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-center">

<div className="lg:mb-12 transform hover:scale-105 transition-transform duration-700 mb-10 reveal-on-scroll delay-100">
<img alt="Kar &amp; Ma Logo" className="md:h-64 lg:h-72 w-auto h-60 object-contain drop-shadow-2xl invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b74a664-fbfd-4635-896f-89d14fdc9239_3840w.png?w=800&amp;q=80"/>
</div>

<h2 className="leading-snug md:text-4xl text-2xl font-light text-slate-200 tracking-tight font-quote max-w-4xl mb-12 drop-shadow-lg reveal-on-scroll delay-200">
          Única empresa del norte con
          <span className="font-medium italic text-white">
            pozas cristalizadoras propias
          </span>
          .
          <br className="hidden md:block"/>
          Control total para uso industrial y consumo masivo.
        </h2>

<div className="flex flex-wrap opacity-90 mb-8 justify-center reveal-on-scroll delay-300">
<div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full bg-brand-teal/20 backdrop-blur-sm group hover:bg-brand-teal/30 transition-colors mx-1">
<svg className="lucide lucide-award w-4 h-4 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" r="7"></circle>
<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
</svg>
<span className="text-white text-xs font-semibold tracking-widest uppercase">
              Certificado BPM
            </span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full bg-brand-teal/20 backdrop-blur-sm group hover:bg-brand-teal/30 transition-colors mx-1">
<svg className="lucide lucide-shield-check w-4 h-4 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-white text-xs font-semibold tracking-widest uppercase">
              HACCP Internacional
            </span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-12 mb-14 w-full max-w-2xl reveal-on-scroll delay-400">
<div className="flex flex-col items-center justify-center py-5 px-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors hover:border-brand-accent/30">
<div className="h-8 flex items-center justify-center mb-1">
<h3 className="group-hover:scale-105 transition-transform duration-300 h-full flex items-center justify-center">
<img alt="Salina" className="w-auto h-15 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b175b940-f92b-44a5-95bd-4190aa37dbe5_1600w.png"/>
</h3>
</div>
<span className="font-sans text-[10px] uppercase tracking-widest text-slate-400 font-medium mt-1">
              Marca Premium Industrial
            </span>
</div>
<div className="flex flex-col items-center justify-center py-5 px-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors hover:border-brand-accent/30">
<div className="h-8 flex items-center justify-center mb-1">
<h3 className="group-hover:scale-105 transition-transform duration-300 h-full flex items-center justify-center">
<img alt="Costeñita" className="w-13 h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89fb20f9-e773-4dbb-8869-23db60811052_800w.png"/>
</h3>
</div>
<span className="font-sans text-[10px] uppercase tracking-widest text-slate-400 font-medium mt-1">
              Marca Estándar Consumo
            </span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-30 reveal-on-scroll delay-500">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(14,165,233,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(14,165,233,0.2)] w-full sm:w-auto flex items-center justify-center" href="#contacto" style={{'--spread': '90deg', '--shimmer-color': 'rgba(0,0,0,0.1)', '--radius': '9999px', '--speed': '3s', '--cut': '1px', '--bg': '#ffffff'}}>
<div className="absolute inset-0 overflow-hidden rounded-full">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur-sm"></div>
<div className="z-10 flex gap-2 overflow-hidden w-full rounded-full pt-4 pr-8 pb-4 pl-8 relative gap-x-2 gap-y-2 items-center justify-center">
<div style={{position: 'absolute', inset: '0', background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.4), transparent)', animation: 'borderBeamRotation 4s infinite linear'}}></div>
<span className="whitespace-nowrap z-10 font-medium tracking-wide relative text-brand-dark">
                Cotizar Solución
              </span>
<svg className="lucide lucide-file-text w-4 h-4 relative z-10 text-brand-dark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
<style>
                @keyframes borderBeamRotation {
                  0% { transform: translateX(-100%) skewX(-15deg); }
                  100% { transform: translateX(200%) skewX(-15deg); }
                }
                @keyframes rotate-gradient {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              </style>
</div>
</a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-light to-transparent z-20"></div>
</header>

<section className="bg-brand-light pt-24 pb-24 relative" id="productos">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
              Nuestra Oferta
            </span>
</div>
<h2 className="lg:text-5xl text-brand-dark text-4xl tracking-tight font-display mb-6">
            Calidad Técnica Superior
          </h2>
<p className="text-slate-500 text-lg">
            Garantizamos pureza y consistencia gracias a nuestras propias pozas
            cristalizadoras, eliminando intermediarios en el proceso.
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

<div className="reveal-on-scroll delay-100 group relative rounded-5xl overflow-hidden bg-white border border-slate-200 shadow-xl shadow-brand-dark/5 hover:shadow-2xl hover:shadow-brand-accent/10 transition-all duration-500 h-[600px] flex flex-col justify-end">
<div className="absolute inset-0">
<img alt="Industrial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1621315892013-f32af7358947?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-teal/80 to-transparent opacity-95"></div>
</div>
<div className="relative p-10 lg:p-12 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-white w-fit">
<span className="text-xs font-medium uppercase tracking-wider">
                  Industrial
                </span>
</div>
<h3 className="text-3xl text-white font-display mb-4">Insumos B2B</h3>
<p className="text-slate-200 max-w-md mb-8">
                Formulaciones precisas para pesca, curtiembre, textil y
                ganadería. Abastecimiento directo de planta.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-100 text-sm">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Stock de seguridad permanente
                </li>
<li className="flex items-center gap-3 text-slate-100 text-sm">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Trazabilidad completa
                </li>
<li className="flex items-center gap-3 text-slate-100 text-sm">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Homogeneidad de lote
                </li>
</ul>
<button className="w-full bg-white text-brand-teal py-4 rounded-full font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Solicitar Ficha Técnica
                <svg className="lucide lucide-file-text w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</button>
</div>
</div>

<div className="reveal-on-scroll delay-200 group relative rounded-5xl overflow-hidden bg-white border border-slate-200 shadow-xl shadow-brand-dark/5 hover:shadow-2xl hover:shadow-brand-accent/10 transition-all duration-500 h-[600px] flex flex-col justify-end">
<div className="absolute inset-0">
<img alt="Consumo Humano" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1627925760000-ab58b9d84432?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-teal/80 to-transparent opacity-95"></div>
</div>
<div className="relative p-10 lg:p-12 z-10">
<div className="inline-flex gap-2 text-white bg-white/10 w-fit border-white/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<span className="text-xs font-medium uppercase tracking-wider">
                  Consumo Masivo
                </span>
</div>
<h3 className="text-3xl text-white font-display mb-4">
                Canal Tradicional y Moderno
              </h3>
<p className="text-slate-200 mb-8 max-w-md">
                Marcas posicionadas en el norte del país, procesadas bajo
                rigurosos estándares de inocuidad alimentaria.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-100 text-sm">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Yodo y Flúor balanceados
                </li>
<li className="flex items-center gap-3 text-slate-100 text-sm">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Proceso libre de contaminantes
                </li>
<li className="flex items-center gap-3 text-slate-100 text-sm">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Presentaciones versátiles
                </li>
</ul>
<button className="w-full bg-white text-brand-teal py-4 rounded-full font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Ver Catálogo
                <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="mt-16 text-center reveal-on-scroll delay-300">
<div className="flex gap-1 justify-center text-brand-gold mb-3">
<svg className="lucide lucide-star w-5 h-5 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-sm font-medium text-slate-400">
            Socio estratégico de las principales industrias del norte
          </p>
</div>
</div>
</section>
<section className="py-24 bg-brand-teal relative overflow-hidden" id="marcas">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>
<div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-dark/20 rounded-full blur-3xl"></div>
</div>
<div className="lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-white/80">
              Nuestras Marcas
            </span>
</div>
<h2 className="lg:text-5xl text-4xl text-white tracking-tight font-display mb-6">
            Especialización por Sector
          </h2>
<p className="text-slate-200 text-lg">
            Desarrollamos marcas diferenciadas para cumplir con los requisitos
            específicos de cada industria y del hogar.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="reveal-on-scroll delay-100 group lg:p-14 hover:bg-white/10 transition-all duration-500 flex flex-col text-center bg-white/5 border-white/10 border rounded-5xl pt-10 pr-10 pb-10 pl-10 relative backdrop-blur-sm items-center hover:border-brand-accent/20">
<div className="flex group-hover:scale-110 transition-transform duration-500 w-32 h-24 mb-6 items-center justify-center">
<h3 className="w-full h-full flex items-center justify-center">
<img alt="Salina" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a324a04-7f94-48d4-bbe2-3235f4889d65_800w.png"/>
</h3>
</div>
<p className="text-slate-200 mb-8 leading-relaxed">
              La referencia en pureza industrial. Formulada para procesos
              químicos exigentes, textiles y tratamiento de aguas, con
              certificación de pureza.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-accent hover:text-white transition-colors" href="#contacto">
                Consultar Industrial
                <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="reveal-on-scroll delay-200 group relative bg-white/5 backdrop-blur-sm rounded-5xl p-10 lg:p-14 border border-white/10 hover:bg-white/10 transition-all duration-500 flex flex-col items-center text-center hover:border-brand-accent/20">
<div className="w-32 h-24 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<h3 className="w-full h-full flex items-center justify-center">
<img alt="Costeñita" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89fb20f9-e773-4dbb-8869-23db60811052_1600w.png"/>
</h3>
</div>
<p className="text-slate-200 mb-8 leading-relaxed">
              La marca de confianza en los hogares norteños. Sal de mesa y
              cocina con el balance ideal de minerales, garantizando salud y
              sabor.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-gold hover:text-white transition-colors" href="#contacto">
                Ver Distribuidores
                <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="beneficios">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
              Ventaja Competitiva
            </span>
</div>
<h2 className="lg:text-5xl text-brand-dark text-4xl tracking-tight font-display mb-6">
            La diferencia del productor directo
          </h2>
<p className="text-slate-500 text-lg">
            Nuestro modelo de pozas propias elimina riesgos de abastecimiento y
            calidad en la cadena de suministro.
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 items-center">

<div className="reveal-on-scroll delay-100 lg:p-12 bg-slate-50 border-slate-200 border rounded-5xl pt-10 pr-10 pb-10 pl-10">
<h3 className="text-2xl text-slate-500 font-display mb-8">
              Revendedores / Acopiadores
            </h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<svg className="lucide lucide-x w-6 h-6 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<div className="">
<h4 className="font-medium text-slate-700">
                    Dependencia de terceros
                  </h4>
<p className="text-sm text-slate-500 mt-1">
                    Sujetos a disponibilidad externa, arriesgando el flujo de
                    producción de su industria.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<svg className="lucide lucide-x w-6 h-6 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<div className="">
<h4 className="font-medium text-slate-700">Calidad variable</h4>
<p className="text-sm text-slate-500 mt-1">
                    Mezcla de lotes de distintos orígenes que altera la pureza
                    química.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<svg className="lucide lucide-x w-6 h-6 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<div className="">
<h4 className="font-medium text-slate-700">Costos ocultos</h4>
<p className="text-sm text-slate-500 mt-1">
                    Márgenes de intermediación que encarecen el insumo final.
                  </p>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-300 lg:p-12 border-brand-teal/20 shadow-xl lg:-ml-8 z-10 bg-brand-dark border rounded-5xl pt-10 pr-10 pb-10 pl-10 relative text-white">
<div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-semibold uppercase px-4 py-2 rounded-bl-3xl rounded-tr-3xl">
              Productor
            </div>
<h3 className="flex items-center gap-3 text-3xl font-display mb-8 text-white">
              Con
              <img alt="Kar &amp; Ma" className="w-20 h-20 object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd3fc2dd-93d6-404f-9063-1a805d8b3ba9_1600w.png"/>
</h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
<div className="">
<h4 className="font-semibold text-white">
                    Pozas Cristalizadoras Propias
                  </h4>
<p className="text-sm text-slate-300 mt-1">
                    Única planta en el norte con control total desde la
                    extracción, garantizando pureza estable.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
<div className="">
<h4 className="font-semibold text-white">
                    Abastecimiento Garantizado
                  </h4>
<p className="text-sm text-slate-300 mt-1">
                    Capacidad productiva autónoma para grandes volúmenes
                    industriales sin quiebres de stock.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
<div className="">
<h4 className="font-semibold text-white">Precios Competitivos</h4>
<p className="text-sm text-slate-300 mt-1">
                    Venta directa de planta, optimizando la estructura de costos
                    para su empresa.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24" id="nosotros">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
<span className="text-xs font-medium uppercase tracking-widest text-brand-teal">
              Trayectoria
            </span>
</div>
<h2 className="lg:text-5xl text-brand-dark text-4xl tracking-tight font-display">
            25 años consolidando la industria
          </h2>
</div>
<div className="relative">

<div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 lg:mb-24 relative pl-16 lg:pl-0 reveal-on-scroll delay-100">
<div className="lg:text-right order-2 lg:order-1">
<div className="inline-block shadow-brand-teal/10 bg-brand-teal text-xl text-white font-display rounded-full mb-4 pt-1 pr-4 pb-1 pl-4 shadow-lg">
                1998
              </div>
<h3 className="text-brand-dark text-2xl font-medium tracking-tight font-mono mb-3">
                Visión Fundacional
              </h3>
<p className="text-slate-500 leading-relaxed">
                Bajo la dirección de la Sra. Carmen Lam, se establece la empresa
                con el lanzamiento de
                <span className="font-semibold text-brand-teal">Costeñita</span>
                , enfocada en la calidad desde el primer día.
              </p>
</div>
<div className="order-1 lg:order-2 flex justify-center lg:justify-start">
<div className="relative w-full max-w-sm aspect-video rounded-3xl overflow-hidden shadow-lg group">
<img alt="Inicios" className="lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 transform lg:group-hover:scale-105 w-full h-full object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e069470c-b081-4495-bf74-74dc3e6ac915_1600w.png"/>
</div>
</div>
<div className="absolute left-8 lg:left-1/2 top-8 lg:top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-light border-4 border-brand-teal rounded-full z-10 shadow-sm"></div>
</div>

<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 lg:mb-24 relative pl-16 lg:pl-0 reveal-on-scroll delay-200">
<div className="order-2 lg:order-2">
<div className="inline-block shadow-brand-teal/10 bg-brand-teal text-xl text-white font-display rounded-full mb-4 pt-1 pr-4 pb-1 pl-4 shadow-lg">
                2005
              </div>
<h3 className="text-brand-dark text-2xl font-medium tracking-tight font-mono mb-3">
                Industrialización
              </h3>
<p className="text-slate-500 leading-relaxed">
                Pioneros en implementar tecnología de secado industrial en la
                región. Nace
                <span className="font-semibold text-brand-teal">Salina</span>
                para atender la demanda B2B con especificaciones técnicas
                precisas.
              </p>
</div>
<div className="order-1 lg:order-1 flex justify-center lg:justify-end">
<div className="relative w-full max-w-sm aspect-video rounded-3xl overflow-hidden shadow-lg group">
<img alt="Tecnología" className="w-full h-full object-cover grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 transform lg:group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a324a04-7f94-48d4-bbe2-3235f4889d65_1600w.png"/>
</div>
</div>
<div className="absolute left-8 lg:left-1/2 top-8 lg:top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-light border-4 border-brand-teal rounded-full z-10 shadow-sm"></div>
</div>

<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative pl-16 lg:pl-0 reveal-on-scroll delay-300">
<div className="lg:text-right order-2 lg:order-1">
<div className="inline-block shadow-brand-accent/20 bg-brand-accent text-xl text-white font-display rounded-full mb-4 pt-1 pr-4 pb-1 pl-4 shadow-lg">
                HOY
              </div>
<h3 className="text-brand-dark text-2xl font-medium tracking-tight font-mono mb-3">
                Liderazgo con Infraestructura Propia
              </h3>
<p className="text-slate-500 leading-relaxed">
                Referente sólido del norte con pozas cristalizadoras propias,
                asegurando autonomía productiva y estándares internacionales BPM
                / HACCP.
              </p>
</div>
<div className="order-1 lg:order-2 flex justify-center lg:justify-start">
<div className="relative w-full max-w-sm aspect-video rounded-3xl overflow-hidden shadow-lg group">
<img alt="Industria actual" className="w-full h-full object-cover grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 transform lg:group-hover:scale-105" src="https://images.unsplash.com/photo-1589930452609-3060d6966f08?w=800&amp;q=80"/>
</div>
</div>
<div className="absolute left-8 lg:left-1/2 top-8 lg:top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-light border-4 border-brand-accent rounded-full z-10 shadow-sm"></div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-dark text-white py-24 rounded-t-6xl relative overflow-hidden" id="contacto">
<div className="absolute top-0 right-0 w-1/3 h-full bg-cover bg-center opacity-5 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1621315892013-f32af7358947?w=800&amp;q=80')]"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div className="reveal-on-scroll delay-100">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
<span className="text-xs font-medium uppercase tracking-wider">
                Departamento Comercial
              </span>
</div>
<h2 className="lg:text-5xl text-4xl tracking-tight font-google-sans-flex mb-4">
              Solicite cotización directa
            </h2>
<p className="text-slate-400 mb-10 text-lg">
              Atención inmediata para requerimientos industriales y distribución
              masiva.
            </p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">
                    Nombre
                  </label>
<input className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:bg-slate-800 transition-colors" placeholder="Su nombre" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">
                    Empresa
                  </label>
<input className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:bg-slate-800 transition-colors" placeholder="Nombre empresa" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">
                  Email Corporativo
                </label>
<input className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:bg-slate-800 transition-colors" placeholder="correo@empresa.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">
                    Línea de Interés
                  </label>
<div className="relative">
<select className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-brand-accent cursor-pointer">
<option className="bg-brand-dark">
                        Sal Industrial (Sacos)
                      </option>
<option className="bg-brand-dark">
                        Consumo Masivo (Paquetes)
                      </option>
<option className="bg-brand-dark">
                        Distribución Mayorista
                      </option>
</select>
<svg className="lucide lucide-chevron-down absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">
                    Volumen Estimado
                  </label>
<div className="relative">
<select className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-brand-accent cursor-pointer">
<option className="bg-brand-dark">1 - 5 Toneladas</option>
<option className="bg-brand-dark">5 - 15 Toneladas</option>
<option className="bg-brand-dark">+15 Toneladas</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">
                  Mensaje
                </label>
<textarea className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:bg-slate-800 transition-colors resize-none" placeholder="Detalles específicos del requerimiento..." rows="3"></textarea>
</div>
<button className="group w-full bg-white text-brand-dark font-semibold py-4 rounded-full mt-4 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl" type="button">
                Enviar Solicitud
                <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</form>
</div>

<div className="flex flex-col justify-between reveal-on-scroll delay-300">
<div className="">
<h3 className="text-3xl font-google-sans-flex mb-8">
                Información de Planta
              </h3>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
<svg className="lucide lucide-map-pin w-5 h-5 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div className="">
<p className="text-slate-400 text-sm mb-1">
                      Ubicación Estratégica
                    </p>
<p className="text-lg text-white">
                      Carretera Panamericana Norte KM 807Lambayeque, Chiclayo,
                      Perú
                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
<svg className="lucide lucide-mail w-5 h-5 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</div>
<div className="">
<p className="text-slate-400 text-sm mb-1">Ventas</p>
<a className="text-lg text-white hover:text-brand-accent transition-colors" href="mailto:ventas@consorciokarma.com">
                      ventas@consorciokarma.com
                    </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
<svg className="lucide lucide-phone w-5 h-5 text-brand-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</div>
<div className="">
<p className="text-slate-400 text-sm mb-1">
                      Central Telefónica
                    </p>
<div className="flex flex-col gap-1">
<a className="text-lg text-white hover:text-brand-accent transition-colors" href="tel:+51961447740">
                        +51 961 447 740
                      </a>
<a className="text-base text-slate-300 hover:text-brand-accent transition-colors" href="tel:+51979085554">
                        +51 979 085 554
                      </a>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="flex items-center">
<img alt="Kar &amp; Ma" className="hover:opacity-90 transition-opacity hover:grayscale-0 w-15 h-auto object-contain grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b74a664-fbfd-4635-896f-89d14fdc9239_320w.png?w=800&amp;q=80"/>
</span>
<div className="flex gap-6 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">
                  Productos
                </a>
<a className="hover:text-white transition-colors" href="#">
                  Empresa
                </a>
<a className="hover:text-white transition-colors" href="#">
                  Privacidad
                </a>
</div>
<p className="text-sm text-slate-500">
                © 2026 Consorcio Kar &amp; Ma S.A.C.
              </p>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
