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



        // Initialize Icons
        lucide.createIcons();

        // Simple Tabs Implementation
        function openTab(tabName) {
            // Hide all tab contents
            const contents = document.getElementsByClassName("tab-content");
            for (let i = 0; i < contents.length; i++) {
                contents[i].classList.add("hidden");
                contents[i].classList.remove("grid");
            }

            // Reset all button styles
            const buttons = ['infra', 'dev', 'proj'];
            buttons.forEach(btn => {
                const el = document.getElementById('tab-btn-' + btn);
                // Set inactive style
                el.className = "px-6 py-3 rounded-xl text-sm font-light text-[#d1d5db]/60 hover:text-[#d1d5db] hover:bg-[#00214F] transition-all";
            });

            // Show current tab content
            const activeContent = document.getElementById("content-" + tabName);
            activeContent.classList.remove("hidden");
            activeContent.classList.add("grid");

            // Set active button style
            const activeBtn = document.getElementById('tab-btn-' + tabName);
            activeBtn.className = "px-6 py-3 rounded-xl text-sm font-semibold transition-all bg-[#A3172D] text-[#d1d5db] shadow-lg";
        }

        // Add simple fade-in animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        });

        // Define keyframes for tailwind in style tag since we can't use config
        document.head.insertAdjacentHTML("beforeend", `<style>
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .animate-fade-in {
                animation: fadeInUp 0.5s ease-out forwards;
            }
        </style>`)
    
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
      

<div className="grain-overlay"></div>

<nav className="fixed top-6 left-0 right-0 z-40 px-4 md:px-8">
<div className="max-w-7xl mx-auto bg-[#00214F]/90 backdrop-blur-md border border-[#A3172D]/30 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl shadow-black/50">

<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-[#A3172D] to-[#00214F] rounded-full border border-[#706438] flex items-center justify-center">
<span className="font-black text-xl text-[#d1d5db]">A</span>
</div>
<span className="font-black text-xl tracking-tighter text-[#d1d5db] hidden md:block">ALBION FC</span>
</div>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[#A3172D] hover:text-[#d1d5db] transition-colors" href="#">Home</a>
<a className="text-sm font-light text-[#d1d5db] hover:text-[#A3172D] transition-colors" href="#">Sports City</a>
<a className="text-sm font-light text-[#d1d5db] hover:text-[#A3172D] transition-colors" href="#">Teams</a>
<a className="text-sm font-light text-[#d1d5db] hover:text-[#A3172D] transition-colors" href="#">Scouting</a>
<a className="text-sm font-light text-[#d1d5db] hover:text-[#A3172D] transition-colors" href="#">International</a>
<a className="text-sm font-light text-[#d1d5db] hover:text-[#A3172D] transition-colors" href="#">History</a>
<a className="text-sm font-light text-[#d1d5db] hover:text-[#A3172D] transition-colors" href="#">About Us</a>
<a className="text-sm font-light text-[#d1d5db] hover:text-[#A3172D] transition-colors" href="#">Press</a>
<a className="text-sm font-light text-[#d1d5db] hover:text-[#A3172D] transition-colors" href="#">Tickets</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block px-5 py-2 rounded-xl bg-[#A3172D] hover:bg-[#8a1225] text-[#d1d5db] text-xs font-semibold tracking-wide uppercase transition-all border border-transparent hover:border-[#706438]" href="#">
                    Contact
                </a>
<button className="lg:hidden text-[#d1d5db]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden group">

<div className="absolute inset-0 z-0">
<img alt="Albion Football Legacy" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out opacity-60" src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&amp;w=2831&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-[#00214F]/80 via-[#00214F]/40 to-[#00214F] z-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#00214F]/60 to-[#A3172D]/30 z-10 mix-blend-multiply"></div>

<div className="relative z-20 text-center max-w-5xl px-4 mt-16">
<h3 className="text-lg md:text-xl font-light text-[#d1d5db] mb-6 tracking-widest uppercase opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                Descubrí por qué somos diferentes
            </h3>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#d1d5db] tracking-tighter leading-[0.9] mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                Un Club<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3172D] to-[#d1d5db]">Formador</span>
</h1>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce text-[#706438]">
<i className="w-8 h-8" data-lucide="arrow-down"></i>
</div>
</header>

<section className="py-24 px-4 md:px-8 bg-[#00214F]">
<div className="max-w-7xl mx-auto">

<div className="mb-12 md:flex md:items-end md:justify-between">
<h2 className="text-5xl md:text-6xl font-black text-[#d1d5db] tracking-tighter">
                    Metodología Pionera
                </h2>
<p className="mt-4 md:mt-0 text-[#706438] font-medium uppercase tracking-wider text-sm">Excelencia desde 1891</p>
</div>

<div className="flex flex-wrap gap-2 mb-8 p-1 bg-[#001533] rounded-2xl w-fit border border-[#706438]/20">
<button className="px-6 py-3 rounded-xl text-sm font-semibold transition-all bg-[#A3172D] text-[#d1d5db] shadow-lg" id="tab-btn-infra" onclick="openTab('infra')">
                    Infrastructure
                </button>
<button className="px-6 py-3 rounded-xl text-sm font-light text-[#d1d5db]/60 hover:text-[#d1d5db] hover:bg-[#00214F] transition-all" id="tab-btn-dev" onclick="openTab('dev')">
                    Player Development
                </button>
<button className="px-6 py-3 rounded-xl text-sm font-light text-[#d1d5db]/60 hover:text-[#d1d5db] hover:bg-[#00214F] transition-all" id="tab-btn-proj" onclick="openTab('proj')">
                    Player Projection
                </button>
</div>

<div className="tab-content grid lg:grid-cols-2 gap-12 items-center animate-fade-in" id="content-infra">
<div className="order-2 lg:order-1">
<div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#A3172D]/20 relative group">
<img alt="Sports City" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#00214F] to-transparent opacity-60"></div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<h3 className="text-3xl font-bold text-[#d1d5db] tracking-tight">La Ciudad Deportiva</h3>
<p className="text-lg text-[#d1d5db] font-light leading-relaxed">
                        La Ciudad Deportiva de Albion ya es una realidad en construcción: 7 of the 9 professional pitches are already finished, and the main building is progressing rapidly within a 40-hectare property with more than 5,500 m² of projected facilities. A space designed to develop footballers in a comprehensive, modern environment with elite international standards.
                    </p>
<button className="group flex items-center gap-3 text-[#A3172D] hover:text-[#d1d5db] transition-colors">
<span className="font-semibold uppercase tracking-wide">Learn More</span>
<i className="w-5 h-5 transition-transform group-hover:translate-x-2" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="tab-content hidden grid lg:grid-cols-2 gap-12 items-center animate-fade-in" id="content-dev">
<div className="order-2 lg:order-1">
<div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#A3172D]/20 relative group">
<img alt="Youth Academy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#00214F] to-transparent opacity-60"></div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<h3 className="text-3xl font-bold text-[#d1d5db] tracking-tight">Desarrollo Integral</h3>
<p className="text-lg text-[#d1d5db] font-light leading-relaxed">
                        Acompañamos a cada futbolista dentro y fuera de la cancha con un seguimiento personalizado y una metodología de trabajo diseñada para potenciar al máximo sus capacidades. Desde la formación técnico-táctica, pasando por el desarrollo físico y nutricional, hasta su desempeño académico, cuentan con un equipo de profesionales que los guía y apoya todos los días.
                    </p>
</div>
</div>

<div className="tab-content hidden grid lg:grid-cols-2 gap-12 items-center animate-fade-in" id="content-proj">
<div className="order-2 lg:order-1">
<div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#A3172D]/20 relative group">
<img alt="International Play" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#00214F] to-transparent opacity-60"></div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<h3 className="text-3xl font-bold text-[#d1d5db] tracking-tight">Proyección Internacional</h3>
<p className="text-lg text-[#d1d5db] font-light leading-relaxed">
                        Trabajamos todos los días para crear oportunidades que impulsen el crecimiento de nuestros futbolistas. Competimos internacionalmente desde las primeras categorías en torneos en América y Europa, organizamos en nuestra Ciudad Deportiva el Torneo Pioneros U16 y enviamos futbolistas a entrenar en clubes de élite mundial para potenciar su desarrollo en entornos de alto rendimiento.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#00214F] to-[#001533] overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex justify-between items-end mb-12">
<h2 className="text-6xl font-black text-[#d1d5db] tracking-tighter">Noticias</h2>
<div className="flex gap-2">
<button className="p-3 rounded-full border border-[#706438]/30 text-[#d1d5db] hover:bg-[#A3172D] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="p-3 rounded-full border border-[#706438]/30 text-[#d1d5db] hover:bg-[#A3172D] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 md:px-0">

<article className="min-w-[320px] md:min-w-[400px] bg-[#00214F] border border-[#A3172D]/20 rounded-3xl overflow-hidden group hover:border-[#A3172D] transition-all duration-300">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80" src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#A3172D] text-[#d1d5db] text-xs font-bold px-3 py-1 rounded-lg">Fútbol Juvenil</div>
</div>
<div className="p-8 space-y-4">
<h3 className="text-2xl font-bold text-[#d1d5db] leading-tight group-hover:text-[#A3172D] transition-colors">Victoria histórica de la Sub-19</h3>
<p className="text-[#d1d5db]/70 font-light leading-relaxed">El plantel juvenil aseguró su lugar en la final tras un desempeño táctico impecable en el complejo...</p>
<a className="inline-block text-sm font-semibold text-[#706438] hover:text-[#d1d5db] uppercase tracking-wider mt-2" href="#">Leer más</a>
</div>
</article>

<article className="min-w-[320px] md:min-w-[400px] bg-[#00214F] border border-[#A3172D]/20 rounded-3xl overflow-hidden group hover:border-[#A3172D] transition-all duration-300">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-[#706438] text-[#d1d5db] text-xs font-bold px-3 py-1 rounded-lg">Institucional</div>
</div>
<div className="p-8 space-y-4">
<h3 className="text-2xl font-bold text-[#d1d5db] leading-tight group-hover:text-[#A3172D] transition-colors">Avances en la Ciudad Deportiva</h3>
<p className="text-[#d1d5db]/70 font-light leading-relaxed">La fase 2 de construcción comienza esta semana, enfocada en el centro de alto rendimiento...</p>
<a className="inline-block text-sm font-semibold text-[#706438] hover:text-[#d1d5db] uppercase tracking-wider mt-2" href="#">Leer más</a>
</div>
</article>

<article className="min-w-[320px] md:min-w-[400px] bg-[#00214F] border border-[#A3172D]/20 rounded-3xl overflow-hidden group hover:border-[#A3172D] transition-all duration-300">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80" src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#00214F] border border-[#706438] text-[#d1d5db] text-xs font-bold px-3 py-1 rounded-lg">Prensa</div>
</div>
<div className="p-8 space-y-4">
<h3 className="text-2xl font-bold text-[#d1d5db] leading-tight group-hover:text-[#A3172D] transition-colors">Conferencia de Prensa: Temporada 2025</h3>
<p className="text-[#d1d5db]/70 font-light leading-relaxed">Declaraciones del cuerpo técnico sobre los objetivos planteados para el próximo campeonato...</p>
<a className="inline-block text-sm font-semibold text-[#706438] hover:text-[#d1d5db] uppercase tracking-wider mt-2" href="#">Leer más</a>
</div>
</article>
</div>
</div>
</section>

<section className="py-12 px-4 md:px-8 bg-[#001533]">
<div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative bg-[#A3172D]">

<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#706438_0%,_transparent_40%)] opacity-30"></div>
<div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_#00214F_0%,_transparent_50%)] opacity-80"></div>
<div className="relative z-10 grid lg:grid-cols-2 items-center min-h-[500px]">
<div className="p-12 md:p-20 space-y-8">
<h3 className="text-xl font-medium text-[#d1d5db]/80 uppercase tracking-widest">Tienda Oficial</h3>
<h2 className="text-5xl md:text-7xl font-black text-[#d1d5db] tracking-tighter leading-none">
                        Llevá el ADN Pionero a todos lados
                    </h2>
<div className="pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#00214F] text-[#d1d5db] font-semibold hover:bg-[#003366] transition-all border border-[#706438]/30 shadow-xl" href="#">
                            Visitar Tienda
                            <i className="ml-3 w-5 h-5 text-[#706438]" data-lucide="shopping-bag"></i>
</a>
</div>
</div>
<div className="h-full min-h-[400px] relative flex items-center justify-center p-8">

<img alt="Camiseta 25/26" className="w-3/4 object-contain drop-shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 rounded-2xl opacity-90 border-4 border-[#00214F]/20" src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-10 right-10 bg-[#706438] text-[#00214F] font-black text-lg px-4 py-2 rounded-lg rotate-12 shadow-lg">
                        25/26
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-[#00214F]">
<div className="max-w-7xl mx-auto">
<h2 className="text-5xl md:text-6xl font-black text-[#d1d5db] tracking-tighter mb-16 text-center md:text-left">
                Historias Pioneras
            </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00214F]/20 to-[#00214F]"></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="text-[#706438] text-xs font-bold uppercase tracking-wider mb-2 block">Orígenes</span>
<h4 className="text-xl font-bold text-[#d1d5db] leading-tight">El inicio de una pasión nacional</h4>
</div>
</div>
<p className="text-sm text-[#d1d5db]/60 font-light line-clamp-2">Cómo Albion FC sentó las bases del fútbol en Uruguay en 1891.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00214F]/20 to-[#00214F]"></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="text-[#706438] text-xs font-bold uppercase tracking-wider mb-2 block">Leyendas</span>
<h4 className="text-xl font-bold text-[#d1d5db] leading-tight">Jugadores que marcaron época</h4>
</div>
</div>
<p className="text-sm text-[#d1d5db]/60 font-light line-clamp-2">Perfiles de los atletas que construyeron nuestra identidad ganadora.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00214F]/20 to-[#00214F]"></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="text-[#706438] text-xs font-bold uppercase tracking-wider mb-2 block">Comunidad</span>
<h4 className="text-xl font-bold text-[#d1d5db] leading-tight">Más que 90 minutos</h4>
</div>
</div>
<p className="text-sm text-[#d1d5db]/60 font-light line-clamp-2">El impacto social de Albion en los barrios históricos de Montevideo.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00214F]/20 to-[#00214F]"></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="text-[#706438] text-xs font-bold uppercase tracking-wider mb-2 block">Futuro</span>
<h4 className="text-xl font-bold text-[#d1d5db] leading-tight">La próxima generación</h4>
</div>
</div>
<p className="text-sm text-[#d1d5db]/60 font-light line-clamp-2">Conocé a los talentos que se preparan para debutar en primera.</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#001533] pt-24 pb-12 px-4 md:px-8 border-t border-[#706438]/20">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 mb-20">
<div>
<h2 className="text-4xl md:text-5xl font-black text-[#d1d5db] tracking-tight mb-6">
                        Sumate a hacer historia
                    </h2>
<p className="text-xl text-[#d1d5db]/60 font-light">Suscribite para recibir novedades exclusivas del Decano.</p>
</div>
<div className="flex flex-col justify-center">
<form className="flex gap-4">
<input className="w-full bg-[#00214F] border border-[#706438]/30 rounded-xl px-6 py-4 text-[#d1d5db] focus:outline-none focus:border-[#A3172D] transition-colors placeholder-[#d1d5db]/30" placeholder="Tu correo electrónico" type="email"/>
<button className="bg-[#A3172D] text-[#d1d5db] px-8 py-4 rounded-xl font-semibold hover:bg-[#8a1225] transition-colors whitespace-nowrap" type="submit">
                            Suscribirse
                        </button>
</form>
</div>
</div>
<div className="border-t border-[#706438]/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-[#A3172D] to-[#00214F] rounded-full border border-[#706438] flex items-center justify-center text-xs font-bold">A</div>
<span className="text-[#d1d5db]/40 font-medium tracking-widest text-sm">ALBION 1891</span>
</div>
<div className="flex gap-6">
<a className="text-[#d1d5db]/60 hover:text-[#A3172D] transition-colors" href="#"><i className="w-6 h-6" data-lucide="instagram"></i></a>
<a className="text-[#d1d5db]/60 hover:text-[#A3172D] transition-colors" href="#"><i className="w-6 h-6" data-lucide="twitter"></i></a>
<a className="text-[#d1d5db]/60 hover:text-[#A3172D] transition-colors" href="#"><i className="w-6 h-6" data-lucide="facebook"></i></a>
<a className="text-[#d1d5db]/60 hover:text-[#A3172D] transition-colors" href="#"><i className="w-6 h-6" data-lucide="youtube"></i></a>
</div>
<div className="text-[#d1d5db]/30 text-xs font-light">
                    © 2024 Albion Football Club. Todos los derechos reservados.
                </div>
</div>
</div>
</footer>



    </>
  );
}
