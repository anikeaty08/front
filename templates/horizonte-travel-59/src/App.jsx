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



        // Simple Slider Logic
        const track = document.getElementById('slider-track');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const slides = track.children;
        let currentIndex = 0;

        function updateSlider() {
            const width = track.clientWidth;
            track.style.transform = `translateX(-${currentIndex * width}px)`;
            
            // Update dots (simple implementation)
            const dots = document.querySelectorAll('button[onclick^="goToSlide"]');
            dots.forEach((dot, index) => {
                dot.classList.toggle('bg-white', index === currentIndex);
                dot.classList.toggle('bg-white/40', index !== currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        });

        // Handle window resize
        window.addEventListener('resize', updateSlider);
        
        // Auto slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }, 5000);
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-zinc-900 font-semibold tracking-tighter text-lg uppercase flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-zinc-900"></span>
                Les Ainés d'Abord
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Qui sommes-nous ?</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Événements</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors" href="#">
                    Faire un don
                    <iconify-icon height="16" icon="solar:heart-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-zinc-900 flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="pt-24 pb-12 px-6">
<div className="max-w-5xl mx-auto">

<div className="mb-12 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-500 mb-6 uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Nos Services
                </div>
<h1 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight mb-4">Un engagement en faveur du bien-être et de la dignité durable de nos aînés.
</h1>
<p className="text-zinc-500 font-light max-w-2xl leading-relaxed md:mx-0 mx-auto">
                    Nous offrons aux aînés un accompagnement complet et humain, centré sur leur santé, leur dignité et leur bien-être quotidien.


                </p>
</div>

<div className="relative w-full rounded-2xl overflow-hidden mb-12 group h-[300px] md:h-[400px] border border-zinc-100 shadow-sm">

<div className="flex h-full transition-transform duration-500 ease-out" id="slider-track">

<div className="min-w-full h-full relative">
<img alt="Kyoto Mountains" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a6dacef-31e9-444c-9fa7-6852769e7beb_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded border border-white/10 text-[10px] font-medium tracking-wide uppercase mb-2">Japon</span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight">Kyoto Highlands</h2>
</div>
</div>

<div className="min-w-full h-full relative">
<img alt="Swiss Alps" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded border border-white/10 text-[10px] font-medium tracking-wide uppercase mb-2">Suisse</span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight">Alpes Zermatt</h2>
</div>
</div>

<div className="min-w-full h-full relative">
<img alt="Camping" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00a33e67-28ac-4203-8974-7bd810dd09c3_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded border border-white/10 text-[10px] font-medium tracking-wide uppercase mb-2">Islande</span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight">Northern Lights</h2>
</div>
</div>
</div>

<button className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 cursor-pointer z-10" id="prevBtn">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 cursor-pointer z-10" id="nextBtn">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
<button className="w-1.5 h-1.5 rounded-full bg-white transition-all hover:bg-white/80" onclick="goToSlide(0)"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white/40 transition-all hover:bg-white/80" onclick="goToSlide(1)"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white/40 transition-all hover:bg-white/80" onclick="goToSlide(2)"></button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

<div className="group relative bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:border-zinc-200 transition-all overflow-hidden">
<div className="absolute top-8 right-8 text-zinc-300 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="32" icon="solar:map-point-wave-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Roteiro Dinâmico</h3>
<p className="text-sm text-zinc-500 mb-8 max-w-xs leading-relaxed">
                        Visualize sua viagem dia a dia com mapas interativos e sugestões em tempo real baseadas no seu perfil.
                    </p>

<div className="bg-white rounded-xl shadow-sm border border-zinc-200/60 p-4 max-w-sm mx-auto md:mx-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<span className="font-bold text-sm">12</span>
</div>
<div>
<div className="text-xs text-zinc-400 font-medium">Outubro, Terça-feira</div>
<div className="text-sm font-semibold text-zinc-900">Chegada em Kyoto</div>
</div>
</div>
<div className="space-y-3 pl-5 border-l border-zinc-100 ml-5">
<div className="relative pl-6">
<div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-white"></div>
<div className="text-xs text-zinc-500">14:00</div>
<div className="text-sm font-medium text-zinc-900">Check-in no Ritz-Carlton</div>
</div>
<div className="relative pl-6">
<div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-white"></div>
<div className="text-xs text-zinc-500">19:30</div>
<div className="text-sm font-medium text-zinc-900">Jantar Omakase</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-8 border border-zinc-100 hover:border-zinc-200 transition-all shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<div className="absolute top-8 right-8 text-zinc-300 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="32" icon="solar:tuning-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Preferências</h3>
<p className="text-sm text-zinc-500 mb-8 max-w-xs leading-relaxed">
                        Ajuste o nível de aventura, luxo e ritmo da viagem. Nossa IA recalcula as opções instantaneamente.
                    </p>

<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-zinc-700">Ritmo da Viagem</span>
<span className="text-xs text-zinc-400">Relaxado</span>
</div>
<input className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-zinc-900" type="range" value="30"/>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">Experiências Privadas</span>
<span className="text-xs text-zinc-400">Apenas tours exclusivos</span>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-200 checked:right-0 transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-200 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 hover:bg-white hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Docs Digitalizados</h4>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Passaportes, vouchers e tickets acessíveis offline com segurança biométrica.
                    </p>
</div>

<div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 hover:bg-white hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Colaboração</h4>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Convide amigos e familiares para visualizar e sugerir atividades no roteiro.
                    </p>
</div>

<div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 hover:bg-white hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon height="20" icon="solar:bell-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Alertas em Tempo Real</h4>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Notificações sobre portões de embarque, atrasos e clima local.
                    </p>
</div>
</div>

<div className="mt-12 rounded-2xl bg-zinc-900 text-white p-8 md:p-12 relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="max-w-md">
<h3 className="text-2xl font-medium tracking-tight mb-2">Pronto para começar?</h3>
<p className="text-zinc-400 text-sm font-light">Crie seu primeiro roteiro gratuitamente e descubra o novo padrão de viajar.</p>
</div>
<button className="bg-white text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors flex items-center gap-2">
                        Criar Novo Roteiro
                        <iconify-icon height="18" icon="solar:add-circle-linear" width="18"></iconify-icon>
</button>
</div>

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
</div>
</div>
</main>


    </>
  );
}
