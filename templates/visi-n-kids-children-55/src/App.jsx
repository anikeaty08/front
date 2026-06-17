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
'display': ['Fredoka', 'sans-serif'],
'body': ['Nunito', 'sans-serif'],
},
colors: {
brand: {
blue: '#4CC9F0',
purple: '#7209B7',
pink: '#F72585',
yellow: '#FFD60A',
green: '#70E000',
dark: '#10002B',
unid: '#003366'
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'spin-slow': 'spin 20s linear infinite',
'bounce-slow': 'bounce 3s infinite',
'wiggle': 'wiggle 3s ease-in-out infinite',
'pop': 'pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
'glow': 'glow 2s ease-in-out infinite alternate',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) rotate(3deg)' },
'50%': { transform: 'translateY(-15px) rotate(-3deg)' },
},
wiggle: {
'0%, 100%': { transform: 'rotate(-5deg)' },
'50%': { transform: 'rotate(5deg)' },
},
pop: {
'0%': { transform: 'scale(0.5)', opacity: '0' },
'100%': { transform: 'scale(1)', opacity: '1' },
},
glow: {
'0%': { filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))' },
'100%': { filter: 'drop-shadow(0 0 20px rgba(255,255,255,1))' },
}
}
}
}
}



        // Scroll Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, {
                threshold: 0.1
            });

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });

        // Trigger for Mission/Vision/Values (Confetti + Reveal)
        function triggerSection(id, colorHex) {
            const content = document.getElementById('content-' + id);
            const title = document.getElementById('title-' + id);
            
            // Toggle Content
            content.classList.toggle('active');
            
            // Toggle Glow on Title
            if (content.classList.contains('active')) {
                title.classList.add('glow-effect');
                
                // Fire Confetti!
                // Using canvas-confetti library
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: [colorHex, '#FFFFFF', '#000000'],
                    disableForReducedMotion: true
                });

                // Mobile confetti burst specific to tap location (simulated center for simplicity on touch)
                if(window.innerWidth < 768) {
                    confetti({
                        particleCount: 50,
                        spread: 100,
                        origin: { y: 0.5 },
                        colors: [colorHex, '#FFD60A']
                    });
                }
            } else {
                title.classList.remove('glow-effect');
            }
        }

        // Existing Scripts
        function revealLessons() {
            const grid = document.getElementById('lessons-grid');
            if (grid.classList.contains('hidden')) {
                grid.classList.remove('hidden');
                grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function toggleLesson(id) {
            const allDetails = document.querySelectorAll('[id^="lesson-"]');
            allDetails.forEach(el => {
                if (el.id !== 'lesson-' + id) {
                    el.classList.add('hidden');
                }
            });
            const detail = document.getElementById('lesson-' + id);
            detail.classList.toggle('hidden');
        }

        function toggleModule(moduleId) {
            const content = document.getElementById('content-' + moduleId);
            const icon = document.getElementById('icon-' + moduleId);
            content.classList.toggle('hidden');
            if (content.classList.contains('hidden')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(180deg)';
            }
        }

        function toggleClass(classId) {
            const content = document.getElementById('content-' + classId);
            content.classList.toggle('hidden');
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-4 border-black transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-10 h-10 bg-brand-blue rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<svg aria-hidden="true" className="iconify text-2xl text-white iconify--lucide" data-icon="lucide:smile" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
<div className="flex flex-col -space-y-1">
<span className="font-display font-extrabold text-xl tracking-tight text-black">Visión</span>
<span className="font-display font-extrabold text-xl tracking-tight text-brand-blue">KIDS</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="font-display font-semibold text-slate-600 hover:text-brand-purple hover:-translate-y-1 transition-all" href="#inicio">Inicio</a>
<a className="font-display font-semibold text-slate-600 hover:text-brand-purple hover:-translate-y-1 transition-all" href="#libro">El Libro</a>
<a className="font-display font-semibold text-slate-600 hover:text-brand-purple hover:-translate-y-1 transition-all" href="#curso">Curso Unicidad</a>
<a className="font-display font-semibold text-brand-pink hover:text-brand-purple hover:-translate-y-1 transition-all" href="#girls">Chicas ❤️</a>
<a className="font-display font-semibold text-slate-600 hover:text-brand-purple hover:-translate-y-1 transition-all" href="#vision">Misión</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-brand-yellow text-black font-display font-extrabold px-6 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="https://drive.google.com/file/d/1Qbn1gY9_v9QhfKk47HyKHD3gD6eiUluT/view?usp=drive_link" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
<span>DESCARGAR</span>
</a>

<button className="md:hidden text-black p-2">
<svg aria-hidden="true" className="iconify text-3xl iconify--lucide" data-icon="lucide:menu" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-brand-blue/10" id="inicio">

<div className="sunburst"></div>

<div className="absolute top-32 left-10 text-white/80 animate-float hidden md:block">
<svg aria-hidden="true" className="iconify text-8xl iconify--lucide" data-icon="lucide:cloud" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-20 right-10 text-brand-blue/20 animate-float-delayed hidden md:block">
<svg aria-hidden="true" className="iconify text-9xl iconify--lucide" data-icon="lucide:star" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-0">

<div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20 reveal-on-scroll">
<div className="inline-block bg-brand-green text-black font-display font-semibold text-sm md:text-base px-3 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-6 rotate-[-2deg] animate-pulse">
                    ✨ ¡RECURSO GRATUITO PARA NIÑOS!
                </div>
<h1 className="font-display font-extrabold text-6xl md:text-8xl leading-[0.9] text-black mb-6 drop-shadow-xl relative tracking-tight">
                    EL MÁS <br/>
<span className="text-brand-pink relative inline-block transform hover:scale-110 transition-transform cursor-default">
                         GRANDE
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-black" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
</span> <br/>
<span className="text-brand-purple">LEGADO</span>
</h1>
<p className="font-body text-xl md:text-2xl text-slate-700 font-semibold max-w-lg mb-8 leading-relaxed">
                    Una aventura increíble para descubrir 6 lecciones que cambiarán tu vida. ¡Únete a Jesús y David en esta historia inolvidable!
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="group relative px-8 py-4 bg-brand-pink text-white font-display font-extrabold text-xl rounded-2xl border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center justify-center gap-3" href="https://drive.google.com/file/d/1Qbn1gY9_v9QhfKk47HyKHD3gD6eiUluT/view?usp=drive_link" target="_blank">
<svg aria-hidden="true" className="iconify group-hover:animate-bounce iconify--lucide" data-icon="lucide:book-open" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        QUIERO EL LIBRO
                    </a>
<a className="px-8 py-4 bg-white text-black font-display font-semibold text-xl rounded-2xl border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center justify-center" href="#curso">
                        Ver Curso
                    </a>
</div>

<div className="relative w-full max-w-md">
<div className="bg-white p-3 rounded-xl border-2 border-black border-dashed flex items-center justify-between gap-3 shadow-sm transform hover:-rotate-1 transition-transform">
<div className="flex items-center gap-3">
<div className="bg-brand-yellow w-10 h-10 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 animate-bounce-slow">
<svg className="lucide lucide-bell text-black" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</div>
<div className="text-left leading-tight">
<p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">RECORDATORIO</p>
<p className="font-display font-bold text-sm text-black">¡Descárgalo hoy y empieza a leer!</p>
</div>
</div>
<a className="bg-black text-white text-xs font-bold px-4 py-2 rounded-lg border border-black hover:bg-slate-800 transition-colors whitespace-nowrap" href="https://drive.google.com/file/d/1Qbn1gY9_v9QhfKk47HyKHD3gD6eiUluT/view?usp=drive_link" target="_blank">
                            Bajar PDF ⬇️
                        </a>
</div>
</div>
</div>

<div className="w-full md:w-1/2 relative h-[500px] md:h-[700px] flex items-center justify-center hero-container reveal-on-scroll">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 layer-back w-full text-center select-none pointer-events-none">
<span className="font-display font-extrabold text-[150px] md:text-[250px] text-white opacity-80 tracking-tight" style={{WebkitTextStroke: '4px black', textShadow: '10px 10px 0px rgba(0,0,0,0.1)'}}>
                        JESÚS
                    </span>
</div>
<div className="relative z-30 animate-float layer-front">
<div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-yellow rounded-full border-2 border-black flex items-center justify-center animate-bounce-slow z-40">
<span className="font-display font-extrabold text-xl text-center leading-tight">¡GRATIS!PDF</span>
</div>
<img alt="Personaje Animado 3D" className="md:h-[600px] mask-image-gradient hover:rotate-0 transition-all duration-500 h-[400px] object-cover bg-center border-black border-4 rounded-3xl shadow-[10px_10px_0px_rgba(0,0,0,1)] rotate-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4b024a3-f4e4-4444-a6d6-d6d291b318df_1600w.png"/>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
<svg className="relative block h-[60px] w-[calc(100%+1.3px)] text-white fill-current" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>
</header>

<section className="py-20 relative bg-white" id="libro">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="bg-brand-purple rounded-[3rem] p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-all duration-500 reveal-on-scroll" id="book-container">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#FFF 2px, transparent 2px)', backgroundSize: '30px 30px'}}></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

<div className="w-full md:w-5/12 flex justify-center">
<div className="relative group">

<div className="absolute inset-0 bg-white rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 border-2 border-black"></div>

<img alt="Portada Original El Más Grande Legado" className="relative w-64 md:w-80 rounded-lg shadow-2xl border-2 border-black rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300 aspect-[2/3] object-cover" src="https://placehold.co/800x1200/FFD60A/000000?text=Portada+Original+Aqui&amp;font=fredoka"/>

<div className="speech-bubble absolute -bottom-8 -right-8 bg-white text-black font-extrabold font-display text-sm leading-tight px-4 py-3 rounded-2xl border-2 border-black rotate-6 shadow-md max-w-[150px] text-center z-20">
                                SEIS LECCIONES QUE CAMBIARÁN TU VIDA.
                            </div>
</div>
</div>

<div className="w-full md:w-7/12 text-center md:text-left text-white relative">
<h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6 text-stroke-sm tracking-tight">
                            UNA HISTORIA QUE 
                            <span className="text-brand-green text-stroke-sm">TRANSFORMA VIDAS</span>
</h2>
<p className="font-body text-2xl mb-8 font-medium leading-relaxed opacity-90">
                            Descubre junto a tus hijos el poder de la fe a través de una experiencia única. Haz clic en las palabras flotantes para descubrir lo que contiene.
                        </p>

<div className="h-40 relative w-full mb-8 select-none" id="floating-trigger-zone">
<div className="sticker-hover absolute top-2 left-10 md:left-0 bg-brand-yellow text-black font-display font-black text-3xl px-6 py-3 rounded-full border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] -rotate-6 animate-wiggle z-10" onclick="revealLessons()">
                                FULL COLOR
                            </div>
<div className="sticker-hover absolute bottom-2 right-10 md:right-20 bg-brand-blue text-white font-display font-black text-3xl px-6 py-3 rounded-full border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] rotate-6 animate-float z-10" onclick="revealLessons()">
                                INTERACTIVO
                            </div>

<svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-white opacity-50 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 5v14M5 12l7 7 7-7"></path>
</svg>
</div>
<div className="text-center md:text-left">
<p className="text-sm font-bold text-white/70 uppercase tracking-widest">¡Haz clic arriba para explorar!</p>
</div>
</div>
</div>

<div className="hidden mt-12 pt-12 border-t-4 border-white/20 animate-pop" id="lessons-grid">
<h3 className="font-display font-extrabold text-3xl text-center text-white mb-8 text-stroke-sm">LAS 6 LECCIONES INCREÍBLES</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 border-4 border-black cursor-pointer hover:bg-brand-yellow transition-colors group relative" onclick="toggleLesson(1)">
<div className="flex justify-between items-center mb-2">
<span className="font-display font-black text-4xl text-black/20 group-hover:text-black/40">01</span>
<svg className="lucide lucide-plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</div>
<h4 className="font-display font-bold text-xl text-black">La Creación</h4>
<div className="hidden mt-4 pt-4 border-t-2 border-black/10 animate-pop" id="lesson-1">
<p className="text-sm font-body text-slate-700 mb-3">Descubre cómo Dios hizo el mundo con amor y detalle en 7 días maravillosos.</p>
<a className="inline-block text-xs font-bold bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-800" href="https://drive.google.com/file/d/1Qbn1gY9_v9QhfKk47HyKHD3gD6eiUluT/view?usp=drive_link" target="_blank">Descargar para leer completo</a>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border-4 border-black cursor-pointer hover:bg-brand-green transition-colors group relative" onclick="toggleLesson(2)">
<div className="flex justify-between items-center mb-2">
<span className="font-display font-black text-4xl text-black/20 group-hover:text-black/40">02</span>
<svg className="lucide lucide-plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</div>
<h4 className="font-display font-bold text-xl text-black">El Arca de Noé</h4>
<div className="hidden mt-4 pt-4 border-t-2 border-black/10 animate-pop" id="lesson-2">
<p className="text-sm font-body text-slate-700 mb-3">Una aventura sobre la obediencia y la promesa del arcoíris.</p>
<a className="inline-block text-xs font-bold bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-800" href="https://drive.google.com/file/d/1Qbn1gY9_v9QhfKk47HyKHD3gD6eiUluT/view?usp=drive_link" target="_blank">Descargar para leer completo</a>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border-4 border-black cursor-pointer hover:bg-brand-blue transition-colors group relative" onclick="toggleLesson(3)">
<div className="flex justify-between items-center mb-2">
<span className="font-display font-black text-4xl text-black/20 group-hover:text-black/40">03</span>
<svg className="lucide lucide-plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</div>
<h4 className="font-display font-bold text-xl text-black">David y Goliat</h4>
<div className="hidden mt-4 pt-4 border-t-2 border-black/10 animate-pop" id="lesson-3">
<p className="text-sm font-body text-slate-700 mb-3">Cómo un pequeño pastor venció al gigante con fe y valentía.</p>
<a className="inline-block text-xs font-bold bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-800" href="https://drive.google.com/file/d/1Qbn1gY9_v9QhfKk47HyKHD3gD6eiUluT/view?usp=drive_link" target="_blank">Descargar para leer completo</a>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border-4 border-black cursor-pointer hover:bg-brand-pink transition-colors group relative" onclick="toggleLesson(4)">
<div className="flex justify-between items-center mb-2">
<span className="font-display font-black text-4xl text-black/20 group-hover:text-black/40">04</span>
<svg className="lucide lucide-plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</div>
<h4 className="font-display font-bold text-xl text-black">El Nacimiento</h4>
<div className="hidden mt-4 pt-4 border-t-2 border-black/10 animate-pop" id="lesson-4">
<p className="text-sm font-body text-slate-700 mb-3">La llegada del Salvador en un humilde pesebre.</p>
<a className="inline-block text-xs font-bold bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-800" href="https://drive.google.com/file/d/1Qbn1gY9_v9QhfKk47HyKHD3gD6eiUluT/view?usp=drive_link" target="_blank">Descargar para leer completo</a>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border-4 border-black cursor-pointer hover:bg-[#ff6b6b] transition-colors group relative" onclick="toggleLesson(5)">
<div className="flex justify-between items-center mb-2">
<span className="font-display font-black text-4xl text-black/20 group-hover:text-black/40">05</span>
<svg className="lucide lucide-plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</div>
<h4 className="font-display font-bold text-xl text-black">Los Milagros</h4>
<div className="hidden mt-4 pt-4 border-t-2 border-black/10 animate-pop" id="lesson-5">
<p className="text-sm font-body text-slate-700 mb-3">Jesús sana, alimenta y calma la tormenta.</p>
<a className="inline-block text-xs font-bold bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-800" href="https://drive.google.com/file/d/1Qbn1gY9_v9QhfKk47HyKHD3gD6eiUluT/view?usp=drive_link" target="_blank">Descargar para leer completo</a>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border-4 border-black cursor-pointer hover:bg-brand-yellow transition-colors group relative" onclick="toggleLesson(6)">
<div className="flex justify-between items-center mb-2">
<span className="font-display font-black text-4xl text-black/20 group-hover:text-black/40">06</span>
<svg className="lucide lucide-plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</div>
<h4 className="font-display font-bold text-xl text-black">¡Vive!</h4>
<div className="hidden mt-4 pt-4 border-t-2 border-black/10 animate-pop" id="lesson-6">
<p className="text-sm font-body text-slate-700 mb-3">La tumba está vacía: la historia de la Resurrección.</p>
<a className="inline-block text-xs font-bold bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-800" href="https://drive.google.com/file/d/1Qbn1gY9_v9QhfKk47HyKHD3gD6eiUluT/view?usp=drive_link" target="_blank">Descargar para leer completo</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative bg-brand-yellow/10 border-t-4 border-black" id="curso">
<div className="max-w-4xl mx-auto px-4 md:px-6">
<div className="text-center mb-12 reveal-on-scroll">
<span className="inline-block bg-black text-white px-4 py-2 rounded-lg font-bold text-sm tracking-wider uppercase mb-4 rotate-2">20 Lecciones en Video</span>
<h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-6 tracking-tight leading-tight">
                    CURSO SOBRE <span className="text-brand-blue">UNICIDAD</span> <br/>
<span className="text-black underline decoration-brand-yellow decoration-4">IMPACTA TU MUNDO</span>
</h2>
<p className="font-body text-xl text-slate-600 max-w-2xl mx-auto">
                    Aprende los fundamentos de la doctrina unicitaria y descubre quién eres en Dios. 4 módulos interactivos diseñados especialmente para niños.
                </p>
</div>

<div className="flex flex-col gap-6 reveal-on-scroll">

<div className="bg-white rounded-xl border-4 border-black overflow-hidden shadow-[8px_8px_0px_#4CC9F0]">
<div className="bg-brand-blue/10 p-6 flex justify-between items-center cursor-pointer hover:bg-brand-blue/20 transition-colors" onclick="toggleModule('mod1')">
<div>
<span className="text-brand-blue font-extrabold text-sm uppercase tracking-widest">Módulo 1</span>
<h3 className="font-display font-bold text-2xl text-black">Fundamentos de Unicidad</h3>
</div>
<div className="transform transition-transform duration-300" id="icon-mod1">
<svg className="lucide lucide-chevron-down" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="hidden border-t-4 border-black" id="content-mod1">
<div className="divide-y-2 divide-slate-100">
<div className="bg-white">
<div className="p-5 flex justify-between items-center cursor-pointer hover:bg-slate-50" onclick="toggleClass('mod1-class1')">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold font-display">1</div>
<span className="font-bold text-lg font-body">¿Quién es Dios?</span>
</div>
<svg className="lucide lucide-chevron-down text-slate-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="hidden bg-slate-50 p-6 border-t border-slate-200" id="content-mod1-class1">
<div className="aspect-video bg-slate-800 rounded-lg flex flex-col items-center justify-center text-white mb-4 shadow-inner relative overflow-hidden group">
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-play-circle" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</div>
<span className="font-display font-bold text-xl">Video de la Clase</span>
<span className="text-sm text-slate-400">Próximamente</span>
</div>
<p className="text-slate-600 mb-6 font-medium">En esta clase aprenderemos que Dios es Uno y no hay nadie como Él. Exploraremos textos bíblicos clave.</p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="flex items-center gap-2 bg-brand-blue text-white font-bold py-2 px-4 rounded-lg border-2 border-black hover:shadow-md transition-all text-sm">
<svg className="lucide lucide-upload" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
                                            Entregar Tarea
                                        </button>
<button className="flex items-center gap-2 bg-white text-black font-bold py-2 px-4 rounded-lg border-2 border-black hover:bg-slate-100 transition-all text-sm">
<svg className="lucide lucide-file-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
                                            Descargar Recursos
                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border-4 border-black overflow-hidden shadow-[8px_8px_0px_#7209B7]">
<div className="bg-brand-purple/10 p-6 flex justify-between items-center cursor-pointer hover:bg-brand-purple/20 transition-colors" onclick="toggleModule('mod2')">
<div><span className="text-brand-purple font-extrabold text-sm uppercase tracking-widest">Módulo 2</span><h3 className="font-display font-bold text-2xl text-black">Identidad en Cristo</h3></div>
<div className="transform transition-transform duration-300" id="icon-mod2"><svg className="lucide lucide-chevron-down" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></div>
</div>
<div className="hidden border-t-4 border-black bg-white p-8 text-center text-slate-500" id="content-mod2"><p className="font-bold">Contenido del Módulo 2 aquí...</p></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-brand-pink text-white border-t-4 border-black" id="girls">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1z\\' fill=\\'%23ffffff\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2 text-center md:text-left reveal-on-scroll">
<div className="inline-block bg-white text-brand-pink font-extrabold text-sm px-4 py-1 rounded-full border-2 border-black rotate-[-3deg] mb-6 animate-pulse">🚀 PRÓXIMAMENTE</div>
<h2 className="font-display font-extrabold text-5xl md:text-7xl mb-6 text-stroke tracking-tight leading-none drop-shadow-[4px_4px_0px_#000]">ESPACIO <br/> PARA CHICAS</h2>
<p className="font-body text-xl font-bold mb-8 leading-relaxed text-white/90">Estamos preparando algo <span className="bg-black px-1 transform -skew-x-12 inline-block">increíble</span> para señoritas y adolescentes.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
<input className="flex-1 px-4 py-3 rounded-xl border-2 border-black font-body focus:outline-none focus:ring-4 focus:ring-brand-yellow text-black" placeholder="Tu correo electrónico" type="email"/>
<button className="bg-black text-white px-6 py-3 rounded-xl font-display font-bold border-2 border-white/20 hover:bg-slate-800 transition-colors">¡Avísame!</button>
</form>
</div>
<div className="w-full md:w-1/2 relative h-[400px] reveal-on-scroll">
<div className="absolute top-10 left-10 w-48 bg-white p-4 rounded-xl border-4 border-black rotate-[-6deg] shadow-[8px_8px_0px_rgba(0,0,0,0.3)] z-20 animate-wiggle">
<div className="bg-brand-purple h-32 rounded-lg mb-2 flex items-center justify-center"><svg className="lucide lucide-heart-handshake text-white" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762"></path></svg></div>
<p className="font-display font-bold text-black text-center text-lg">Amistad Real</p>
</div>
<div className="absolute bottom-10 right-10 w-48 bg-white p-4 rounded-xl border-4 border-black rotate-[6deg] shadow-[8px_8px_0px_rgba(0,0,0,0.3)] z-10 animate-float">
<div className="bg-brand-yellow h-32 rounded-lg mb-2 flex items-center justify-center"><svg className="lucide lucide-book-heart text-black" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><path d="M12 8a2 2 0 1 1-2.7 2.7l.7.7a2 2 0 1 0 2-3.4Z"></path></svg></div>
<p className="font-display font-bold text-black text-center text-lg">Diario Bíblico</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="vision">

<div className="absolute -left-20 top-40 w-64 h-64 bg-brand-yellow/30 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute -right-20 bottom-40 w-64 h-64 bg-brand-blue/30 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 reveal-on-scroll">
<span className="font-display font-semibold text-slate-400 text-xl uppercase tracking-[0.2em] mb-4 block">Nuestra Esencia</span>
</div>
<div className="flex flex-col gap-12 md:gap-8">

<div className="group relative text-center md:text-left reveal-on-scroll">
<div className="mvv-item inline-block font-display font-black text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue/70 cursor-pointer select-none hover:scale-105 transition-transform" onclick="triggerSection('mision', '#4CC9F0')" style={{WebkitTextStroke: '3px black', textShadow: '6px 6px 0px rgba(0,0,0,0.1)'}}>
<span className="relative z-10 transition-all" id="title-mision">MISIÓN</span>
</div>
<div className="mvv-content mt-6 md:ml-4" id="content-mision">
<div className="bg-brand-blue text-white p-8 rounded-3xl border-4 border-black shadow-[10px_10px_0px_#000] max-w-2xl transform -rotate-1">
<div className="flex items-start gap-4">
<svg className="w-12 h-12 flex-shrink-0 animate-bounce-slow" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<p className="font-body text-xl md:text-2xl font-bold leading-relaxed">
                                    Equipar a los padres con herramientas creativas y bíblicas para construir cimientos sólidos en el corazón de sus hijos.
                                </p>
</div>
</div>
</div>
</div>

<div className="group relative text-center md:text-right reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="mvv-item inline-block font-display font-black text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-pink/70 cursor-pointer select-none hover:scale-105 transition-transform" onclick="triggerSection('vision-txt', '#F72585')" style={{WebkitTextStroke: '3px black', textShadow: '6px 6px 0px rgba(0,0,0,0.1)'}}>
<span className="relative z-10 transition-all" id="title-vision-txt">VISIÓN</span>
</div>
<div className="mvv-content mt-6 md:mr-4 flex justify-center md:justify-end" id="content-vision-txt">
<div className="bg-brand-pink text-white p-8 rounded-3xl border-4 border-black shadow-[10px_10px_0px_#000] max-w-2xl transform rotate-1">
<div className="flex items-start gap-4">
<svg className="w-12 h-12 flex-shrink-0 animate-bounce-slow" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="15" r="4"></circle><circle cx="18" cy="15" r="4"></circle><path d="M14 15a2 2 0 0 0-2-2a2 2 0 0 0-2 2m-7.5-2L5 7c.7-1.3 1.4-2 3-2m13.5 8L19 7c-.7-1.3-1.5-2-3-2"></path></svg>
<p className="font-body text-xl md:text-2xl font-bold leading-relaxed text-left">
                                    Ver una generación de niños apasionados por Jesús, creciendo en familias unidas y espiritualmente fuertes.
                                </p>
</div>
</div>
</div>
</div>

<div className="group relative text-center md:text-left reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="mvv-item inline-block font-display font-black text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green/70 cursor-pointer select-none hover:scale-105 transition-transform" onclick="triggerSection('valores', '#70E000')" style={{WebkitTextStroke: '3px black', textShadow: '6px 6px 0px rgba(0,0,0,0.1)'}}>
<span className="relative z-10 transition-all" id="title-valores">VALORES</span>
</div>
<div className="mvv-content mt-6 md:ml-4" id="content-valores">
<div className="bg-brand-green text-black p-8 rounded-3xl border-4 border-black shadow-[10px_10px_0px_#000] max-w-2xl transform -rotate-1">
<div className="flex items-start gap-4">
<svg className="w-12 h-12 flex-shrink-0 animate-bounce-slow" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
<p className="font-body text-xl md:text-2xl font-bold leading-relaxed">
                                    Creatividad, integridad bíblica, diversión en familia y excelencia en todo lo que hacemos para Dios.
                                </p>
</div>
</div>
</div>
</div>
</div>
<p className="text-center mt-16 text-slate-400 font-display text-sm animate-pulse">👇 ¡Haz clic en las palabras gigantes! 👇</p>
</div>
</section>

<footer className="bg-black text-white py-12 border-t-8 border-brand-yellow">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center text-black">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:smile" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
<span className="font-display font-extrabold text-2xl">Visión KIDS</span>
</div>
<div className="flex gap-6">
<a className="hover:text-brand-yellow transition-colors" href="#"><svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:instagram" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="hover:text-brand-blue transition-colors" href="#"><svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:facebook" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
<div className="text-center md:text-left border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-base text-gray-400 font-body">
<p>© 2024 Visión Kids. Todos los derechos reservados.</p>
<p>Diseñado para bendecir a las familias.</p>
</div>
</div>
</footer>



    </>
  );
}
