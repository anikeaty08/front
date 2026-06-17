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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Video Data - Corrected to 10 unique videos
        const videos = [
            { id: "LNEJlQIjNQw", title: "1. Tu Ritual LED Venio", subtitle: "Por dónde empezar" },
            { id: "fU-1IV69E2M", title: "2. Ajuste Perfecto", subtitle: "Colócala bien en 1 minuto" },
            { id: "LNHRKIob7vU", title: "3. Piel lista", subtitle: "Prepara tu rostro como en spa" },
            { id: "P4kXP9C7kUs", title: "4. La Sesión Ideal", subtitle: "Paso a paso sin errores" },
            { id: "RRQyk2AwCpQ", title: "5. Qué vas a notar", subtitle: "Resultados según el color" },
            { id: "J69aO4k-42s", title: "6. Rutina Nocturna Glow", subtitle: "Potencia tu skincare" },
            { id: "KTzAv7PycII", title: "7. Rutina de Mañana", subtitle: "Luz, firmeza y constancia" },
            { id: "1GxXMAdwcrk", title: "8. Cuida tu Venio", subtitle: "Limpieza y mantenimiento fácil" },
            { id: "kp_f-LWvy2o", title: "9. Respuestas rápidas", subtitle: "Tus dudas más comunes" },
            { id: "kp_f-LWvy2o", title: "10. Errores típicos", subtitle: "Solución express en 60s" }
        ];

        // Populate Video Grid
        const grid = document.getElementById('video-grid');
        
        // Ensure grid is empty before populating
        grid.innerHTML = '';
        
        videos.forEach(video => {
            const card = document.createElement('div');
            card.className = "group cursor-pointer";
            card.onclick = () => openModal(video.id);
            
            card.innerHTML = `
                <div class="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 mb-4 card-hover transition-all duration-300">
                    <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${video.title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                            <i data-lucide="play" class="w-5 h-5 text-white fill-white ml-1"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-[10px] text-white rounded font-mono">
                        HD
                    </div>
                </div>
                <h3 class="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">${video.title}</h3>
                <p class="text-sm text-gray-500 mt-1">${video.subtitle}</p>
            `;
            grid.appendChild(card);
        });

        // Re-init icons for dynamic content
        lucide.createIcons();

        // Modal Logic
        const modal = document.getElementById('videoModal');
        const player = document.getElementById('youtube-player');

        function openModal(videoId) {
            player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            modal.classList.remove('hidden-modal');
            modal.classList.add('visible-modal');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('visible-modal');
            modal.classList.add('hidden-modal');
            player.src = "";
            document.body.style.overflow = '';
        }

        // Close modal on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('visible-modal')) {
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
      

<nav className="fixed z-50 bg-[#050505]/80 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="w-[28px] h-[28px]" fill="none" height="28" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22L3 4H7L12 14L17 4H21L12 22Z" fill="currentColor"></path>
</svg>
<span className="text-lg font-medium text-white tracking-tight">VENIO</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Inicio</a>
<a className="text-white" href="#tutoriales">Tutoriales</a>
<a className="hover:text-white transition-colors" href="#beneficios">Beneficios</a>
<a className="hover:text-white transition-colors" href="#">Tienda</a>
<a className="hover:text-white transition-colors" href="#">Soporte</a>
</div>
<div className="hidden md:block">
<button className="hover:bg-gray-200 transition-colors text-sm font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" onclick="window.location.href='https://pixelfy.me/chBMhA'" role="button">
                    Comprar Ahora
                </button>
</div>

<button className="md:hidden text-white">
<i data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden border-white/5 border-b pt-32 pr-6 pb-20 pl-6 relative">

<div className="glow-effect top-0 right-0 translate-x-1/4 -translate-y-1/4"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="space-y-8">
<div className="inline-flex gap-2 text-xs font-medium text-purple-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                    Curso Oficial Incluido
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gradient leading-[1.1]">
                    Desbloquea tu luminosidad.
                </h1>
<p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                    10 Video Tutoriales guiados para una piel perfecta. Domina tu máscara LED Venio y transforma tu rutina de skincare con ciencia y tecnología.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 hover:bg-gray-200 transition-all text-sm font-medium text-black bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-[#ff85f5] to-[#ffffff] rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#tutoriales">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                        VER VIDEOS AHORA
                    </a>
<div className="flex gap-2 hover:bg-white/5 transition-all cursor-pointer text-sm border-white/10 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center">
<span>Leer Guía de Uso</span>
</div>
</div>

<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-700 border border-black flex items-center justify-center text-[10px]">MJ</div>
<div className="w-8 h-8 rounded-full bg-gray-600 border border-black flex items-center justify-center text-[10px]">LM</div>
<div className="w-8 h-8 rounded-full bg-gray-500 border border-black flex items-center justify-center text-[10px]">+2k</div>
</div>
<div className="flex flex-col">
<div className="flex text-yellow-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs text-gray-500 mt-1">Usuarios verificados</span>
</div>
</div>
</div>

<div className="flex w-full h-[500px] relative items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-red-500/10 to-blue-500/20 blur-[100px] rounded-full"></div>
<div className="relative z-10 w-full max-w-md aspect-square bg-gradient-to-b from-gray-800 to-black border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center justify-center overflow-hidden group">

<div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
<img alt="Woman Skincare" className="opacity-40 mix-blend-overlay w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0277fc65-f412-4a6a-94f2-9131dc4ce4c6_1600w.png"/>
<div className="relative z-20 text-center p-8">
</div>

<div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#111] border border-white/10 transform rotate-12 -z-10 rounded-xl"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#080808] border-white/5 border-b pt-24 pb-24" id="beneficios">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">4 Modos. Resultados Profesionales.</h2>
<p className="text-gray-400 text-lg font-light">Ciencia aplicada a tu piel en cada longitud de onda.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-600/20 blur-[40px] rounded-full group-hover:bg-red-600/30 transition-all"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-4 border border-red-500/20">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Luz Roja</h3>
<p className="text-xs text-red-300 font-mono mb-3">630nm + 850nm</p>
<p className="text-sm text-gray-400 leading-relaxed">Rejuvenece, suaviza líneas de expresión y aumenta drásticamente la elasticidad de la piel.</p>
</div>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 blur-[40px] rounded-full group-hover:bg-blue-600/30 transition-all"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
<i className="w-5 h-5" data-lucide="droplet"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Luz Azul</h3>
<p className="text-xs text-blue-300 font-mono mb-3">470nm + 850nm</p>
<p className="text-sm text-gray-400 leading-relaxed">Control de grasa, calma rojeces y minimiza la apariencia de los poros visibles.</p>
</div>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/20 blur-[40px] rounded-full group-hover:bg-purple-600/30 transition-all"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Luz Violeta</h3>
<p className="text-xs text-purple-300 font-mono mb-3">850nm</p>
<p className="text-sm text-gray-400 leading-relaxed">Doble cuidado para imperfecciones persistentes y mejora de la textura global.</p>
</div>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-pink-600/20 blur-[40px] rounded-full group-hover:bg-pink-600/30 transition-all"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 border border-pink-500/20">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Infrarroja</h3>
<p className="text-xs text-pink-300 font-mono mb-3">850nm</p>
<p className="text-sm text-gray-400 leading-relaxed">Regeneración celular profunda y reducción efectiva de la inflamación.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="tutoriales">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">Domina tu Rutina</h2>
<p className="text-gray-400 text-lg font-light">Accede a los 10 módulos exclusivos para clientes.</p>
</div>
<div className="text-sm text-gray-500 font-mono">
                    10 Videos • 45 Min Total
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="video-grid">

</div>
</div>
</section>

<section className="bg-[#080808] border-white/5 border-t pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="flex justify-center mb-6 text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-6">"El curso marcó la diferencia. Entendí exactamente cómo usar cada luz para mi tipo de piel y los resultados en firmeza fueron visibles en la tercera semana."</h3>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="text-left">
<p className="text-sm font-medium text-white">Elena Martínez</p>
<p className="text-xs text-gray-500">Cliente Verificada • Madrid</p>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<svg className="text-white" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22L3 4H7L12 14L17 4H21L12 22Z" fill="currentColor"></path>
</svg>
<span className="text-lg font-medium tracking-tight text-gray-200">VENIO</span>
<span className="text-xs text-gray-600 ml-2">© 2024</span>
</div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
<div className="text-xs text-gray-600 flex gap-4">
<a className="hover:text-gray-400" href="#">Privacidad</a>
<a className="hover:text-gray-400" href="#">Términos</a>
<a className="hover:text-gray-400" href="#">Contacto</a>
</div>
</div>
</div>
</footer>

<div className="hidden-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" id="videoModal">
<button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full" onclick="closeModal()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="100%" id="youtube-player" src="" title="YouTube video player" width="100%"></iframe>
</div>
</div>


    </>
  );
}
