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
venio: {
red: '#FF4D4D',
blue: '#4D79FF',
purple: '#A64DFF',
infrared: '#FF854D',
dark: '#050505',
card: '#0F0F11'
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Data for videos
        const videos = [
            { id: 'LNEJlQIjNQw', title: '1. Tu Ritual LED Venio: por dónde empezar' },
            { id: 'fU-1IV69E2M', title: '2. Ajuste Perfecto: colócala bien en 1 minuto' },
            { id: 'LNHRKIob7vU', title: '3. Piel lista: prepara tu rostro como en spa' },
            { id: 'P4kXP9C7kUs', title: '4. La Sesión Ideal: paso a paso sin errores' },
            { id: 'RRQyk2AwCpQ', title: '5. Qué vas a notar (y cuándo) según el color' },
            { id: 'J69aO4k-42s', title: '6. Rutina Nocturna Glow: potencia tu skincare' },
            { id: 'KTzAv7PycII', title: '7. Rutina de Mañana: luz, firmeza y constancia' },
            { id: '1GxXMAdwcrk', title: '8. Cuida tu Venio: limpieza y mantenimiento' },
            { id: 'kp_f-LWvy2o', title: '9. Respuestas rápidas: tus dudas más comunes' },
            { id: 'kp_f-LWvy2o', title: '10. Errores típicos: solución express' }
        ];

        const player = document.getElementById('main-player');
        const titleDisplay = document.getElementById('video-title');
        const playlistContainer = document.getElementById('playlist-container');
        const moduleCounter = document.getElementById('current-module-display');
        let activeIndex = 0;

        function loadPlaylist() {
            playlistContainer.innerHTML = '';
            videos.forEach((video, index) => {
                const isActive = index === activeIndex;
                
                const item = document.createElement('div');
                item.className = `p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group ${isActive ? 'bg-white/10 border border-white/5' : 'hover:bg-white/5 border border-transparent'}`;
                item.onclick = () => playVideo(index);

                item.innerHTML = `
                    <div class="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
                        <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <i data-lucide="play" class="w-3 h-3 text-white fill-white"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h5 class="text-sm font-medium truncate ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}">${video.title}</h5>
                        <p class="text-xs text-zinc-600 mt-1">Módulo ${index + 1}</p>
                    </div>
                `;
                playlistContainer.appendChild(item);
            });
            
            // Re-initialize icons for the new elements
            lucide.createIcons();
        }

        function playVideo(index) {
            activeIndex = index;
            const video = videos[index];
            
            // Update iframe
            player.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
            
            // Update Text
            titleDisplay.textContent = video.title;
            moduleCounter.textContent = index + 1;

            // Refresh playlist UI to show active state
            loadPlaylist();
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            loadPlaylist();
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
      

<nav className="fixed w-full z-50 top-0 border-b bg-venio-dark/80 backdrop-blur-md border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="text-white" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M12 8L7 18H17L12 8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xl font-medium tracking-tight text-white">VENIO</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="transition-colors hover:text-white" href="#">Inicio</a>
<a className="transition-colors hover:text-white" href="#benefits">Tecnología</a>
<a className="transition-colors hover:text-white" href="#course">Curso Video</a>
<a className="transition-colors hover:text-white" href="#">Soporte</a>
</div>
<button className="hidden md:flex transition-colors text-sm font-medium rounded-full pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center hover:bg-zinc-200 text-black bg-white">
<span className="" onclick="window.location.href='https://pixelfy.me/chBMhA'" role="button">Comprar</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>

<button className="md:hidden text-zinc-400">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-[100px] -z-10 opacity-60"></div>
<div className="grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="space-y-8 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-purple-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-purple-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                    Tu rutina de lujo para tu piel
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-white">
                    Desbloquea tu <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Luminosidad.</span>
</h1>
<p className="text-lg md:text-xl max-w-lg leading-relaxed font-light text-zinc-400">
                    10 tutoriales guiados para dominar tu máscara LED Venio. Piel más firme, reducción de arrugas y resultados de spa desde casa.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 transition-all text-base font-medium rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-zinc-200 text-black bg-white" href="#course">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                        Comenzar Curso Ahora
                    </a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium border transition-all text-white border-white/10 hover:bg-white/5" href="#benefits">
                        Descubre los Beneficios de la tecnologia LED
                    </a>
</div>

<div className="pt-6 flex items-center gap-6 text-zinc-500 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="shield-check"></i>
<span>Garantía 2 años</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="star"></i>
<span>4.9/5 Reseñas</span>
</div>
</div>
</div>

<div className="relative flex justify-center items-center lg:justify-end">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr via-red-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow from-purple-600/20 to-blue-600/20"></div>

<div className="relative w-full max-w-[600px] animate-float">


<div className="absolute -right-4 top-20 hidden md:block">
</div><img alt="Venio LED Mask Kit con Caja y Control Remoto" className="transform hover:scale-[1.02] transition-transform duration-700 ease-out z-10 w-full h-auto object-contain relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7596e05f-80a9-40b6-873e-de581df41c2a_800w.png"/>
<div className="absolute -left-4 bottom-10 hidden md:block">
</div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-4">Ciencia LED avanzada para piel perfecta</h2>
<p className="text-lg font-light text-zinc-400">4 modos de luz para cada necesidad de tu piel.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-venio-card border hover:border-red-500/50 transition-colors duration-300 relative overflow-hidden border-white/5">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-all">
<i className="w-6 h-6" data-lucide="sun"></i>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Luz Roja</h3>
<p className="text-xs font-mono mb-3 text-red-400">630nm + 850nm</p>
<p className="text-base leading-relaxed text-zinc-400">Suaviza líneas de expresión profundas y aumenta la elasticidad natural.</p>
</div>

<div className="group p-6 rounded-2xl bg-venio-card border hover:border-blue-500/50 transition-colors duration-300 relative overflow-hidden border-white/5">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Luz Azul</h3>
<p className="text-xs font-mono mb-3 text-blue-400">470nm + 850nm</p>
<p className="text-base leading-relaxed text-zinc-400">Control bacteriano, reducción de grasa y calma rojeces al instante.</p>
</div>

<div className="group p-6 rounded-2xl bg-venio-card border hover:border-purple-500/50 transition-colors duration-300 relative overflow-hidden border-white/5">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Luz Violeta</h3>
<p className="text-xs font-mono mb-3 text-purple-400">850nm Dual</p>
<p className="text-base leading-relaxed text-zinc-400">Doble cuidado de imperfecciones. Regeneración y cicatrización.</p>
</div>

<div className="group p-6 rounded-2xl bg-venio-card border hover:border-orange-500/50 transition-colors duration-300 relative overflow-hidden border-white/5">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Infrarrojo</h3>
<p className="text-xs font-mono mb-3 text-orange-400">850nm Deep</p>
<p className="text-base leading-relaxed text-zinc-400">Regeneración celular profunda y potente reducción de la inflamación.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="course">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Tu Ritual LED Venio</h2>
<p className="text-lg font-light max-w-2xl text-zinc-400">
                    Sigue paso a paso nuestros 10 módulos diseñados por expertos para maximizar los resultados de tu nueva máscara.
                </p>
</div>
<div className="text-right hidden md:block">
<p className="text-sm text-zinc-500">Progreso del curso</p>
<div className="flex items-center gap-2 text-white">
<span id="current-module-display">1</span> <span className="text-zinc-600">/</span> 10
                </div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-8 h-auto lg:h-[600px]">

<div className="lg:col-span-2 rounded-2xl overflow-hidden border shadow-2xl relative flex flex-col bg-black border-white/10">
<div className="relative w-full h-full min-h-[300px] lg:min-h-0">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" id="main-player" src="https://www.youtube.com/embed/LNEJlQIjNQw?rel=0" title="Venio Video Player">
</iframe>
</div>
<div className="p-6 bg-venio-card border-t border-white/5">
<div className="flex items-start justify-between gap-4">
<div>
<span className="text-xs font-mono mb-1 block text-purple-400">AHORA REPRODUCIENDO</span>
<h3 className="text-xl md:text-2xl font-medium text-white" id="video-title">1. Por dónde empezar</h3>
</div>
<button className="p-2 rounded-full transition-colors hover:bg-white/10 text-white">
<i className="w-5 h-5" data-lucide="share-2"></i>
</button>
</div>
</div>
</div>

<div className="lg:col-span-1 bg-venio-card rounded-2xl border flex flex-col overflow-hidden max-h-[600px] border-white/5">
<div className="p-4 border-b border-white/5 bg-white/5">
<h4 className="text-sm font-medium tracking-wide text-white">MÓDULOS DEL CURSO</h4>
</div>
<div className="overflow-y-auto custom-scrollbar flex-1 p-2 space-y-1" id="playlist-container"><div className="p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group bg-white/10 border border-white/5">
<div className="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://img.youtube.com/vi/LNEJlQIjNQw/mqdefault.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-sm font-medium truncate text-white">1. Tu Ritual LED Venio: por dónde empezar</h5>
<p className="text-xs text-zinc-600 mt-1">Módulo 1</p>
</div>
</div><div className="p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group hover:bg-white/5 border border-transparent">
<div className="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://img.youtube.com/vi/fU-1IV69E2M/mqdefault.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-sm font-medium truncate text-zinc-400 group-hover:text-zinc-200">2. Ajuste Perfecto: colócala bien en 1 minuto</h5>
<p className="text-xs text-zinc-600 mt-1">Módulo 2</p>
</div>
</div><div className="p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group hover:bg-white/5 border border-transparent">
<div className="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://img.youtube.com/vi/LNHRKIob7vU/mqdefault.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-sm font-medium truncate text-zinc-400 group-hover:text-zinc-200">3. Piel lista: prepara tu rostro como en spa</h5>
<p className="text-xs text-zinc-600 mt-1">Módulo 3</p>
</div>
</div><div className="p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group hover:bg-white/5 border border-transparent">
<div className="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://img.youtube.com/vi/P4kXP9C7kUs/mqdefault.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-sm font-medium truncate text-zinc-400 group-hover:text-zinc-200">4. La Sesión Ideal: paso a paso sin errores</h5>
<p className="text-xs text-zinc-600 mt-1">Módulo 4</p>
</div>
</div><div className="p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group hover:bg-white/5 border border-transparent">
<div className="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://img.youtube.com/vi/RRQyk2AwCpQ/mqdefault.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-sm font-medium truncate text-zinc-400 group-hover:text-zinc-200">5. Qué vas a notar (y cuándo) según el color</h5>
<p className="text-xs text-zinc-600 mt-1">Módulo 5</p>
</div>
</div><div className="p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group hover:bg-white/5 border border-transparent">
<div className="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://img.youtube.com/vi/J69aO4k-42s/mqdefault.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-sm font-medium truncate text-zinc-400 group-hover:text-zinc-200">6. Rutina Nocturna Glow: potencia tu skincare</h5>
<p className="text-xs text-zinc-600 mt-1">Módulo 6</p>
</div>
</div><div className="p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group hover:bg-white/5 border border-transparent">
<div className="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://img.youtube.com/vi/KTzAv7PycII/mqdefault.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-sm font-medium truncate text-zinc-400 group-hover:text-zinc-200">7. Rutina de Mañana: luz, firmeza y constancia</h5>
<p className="text-xs text-zinc-600 mt-1">Módulo 7</p>
</div>
</div><div className="p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group hover:bg-white/5 border border-transparent">
<div className="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://img.youtube.com/vi/1GxXMAdwcrk/mqdefault.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-sm font-medium truncate text-zinc-400 group-hover:text-zinc-200">8. Cuida tu Venio: limpieza y mantenimiento</h5>
<p className="text-xs text-zinc-600 mt-1">Módulo 8</p>
</div>
</div><div className="p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group hover:bg-white/5 border border-transparent">
<div className="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://img.youtube.com/vi/kp_f-LWvy2o/mqdefault.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-sm font-medium truncate text-zinc-400 group-hover:text-zinc-200">9. Respuestas rápidas: tus dudas más comunes</h5>
<p className="text-xs text-zinc-600 mt-1">Módulo 9</p>
</div>
</div><div className="p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group hover:bg-white/5 border border-transparent">
<div className="relative w-20 h-12 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://img.youtube.com/vi/kp_f-LWvy2o/mqdefault.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-play w-3 h-3 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-sm font-medium truncate text-zinc-400 group-hover:text-zinc-200">10. Errores típicos: solución express</h5>
<p className="text-xs text-zinc-600 mt-1">Módulo 10</p>
</div>
</div></div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-transparent border-t to-white/5 border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium mb-6 text-white">¿Tienes dudas sobre tu tratamiento?</h2>
<p className="text-lg mb-8 font-light text-zinc-400">
                Nuestro equipo de dermatología y soporte técnico está disponible para ayudarte a conseguir tu mejor piel.
            </p>
<div className="flex justify-center gap-4">
<a className="flex items-center gap-2 px-6 py-3 rounded-lg transition-colors border text-white bg-white/10 hover:bg-white/20 border-white/5" href="#">
<i className="w-5 h-5" data-lucide="mail"></i>
                    Contactar Soporte
                </a>
<a className="flex items-center gap-2 px-6 py-3 transition-colors text-zinc-400 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="book-open"></i>
                    Ver Manual PDF
                </a>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<div className="mb-8 md:mb-0">
<div className="flex items-center gap-2 mb-4">
<svg className="text-white" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M12 8L7 18H17L12 8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xl font-medium text-white">VENIO</span>
</div>
<p className="text-zinc-500 text-sm max-w-xs">
                        Tecnología dermatológica avanzada para el cuidado de la piel en casa. Diseñado para resultados reales.
                    </p>
</div>
<div className="flex gap-12">
<div>
<h4 className="font-medium mb-4 text-white">Producto</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="transition-colors hover:text-white" href="#">Máscara LED</a></li>
<li><a className="transition-colors hover:text-white" href="#">Resultados</a></li>
<li><a className="transition-colors hover:text-white" href="#">Garantía</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-white">Compañía</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="transition-colors hover:text-white" href="#">Sobre Nosotros</a></li>
<li><a className="transition-colors hover:text-white" href="#">Contacto</a></li>
<li><a className="transition-colors hover:text-white" href="#">Términos</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs border-white/10 text-zinc-600">
<p>© 2023 Venio Skincare. Todos los derechos reservados.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<i className="w-4 h-4 cursor-pointer transition-colors hover:text-white" data-lucide="instagram"></i>
<i className="w-4 h-4 cursor-pointer transition-colors hover:text-white" data-lucide="twitter"></i>
<i className="w-4 h-4 cursor-pointer transition-colors hover:text-white" data-lucide="facebook"></i>
</div>
</div>
</div>
</footer>



    </>
  );
}
