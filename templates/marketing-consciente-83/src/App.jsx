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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Lucide Icons
        lucide.createIcons();

        // Glare Card Logic (Ported from React)
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.glare-card-container');
            
            cards.forEach(container => {
                const card = container.querySelector('.glare-card');
                let isPointerInside = false;
                
                // State
                let state = {
                    glare: { x: 50, y: 50 },
                    background: { x: 50, y: 50 },
                    rotate: { x: 0, y: 0 }
                };

                const updateStyles = () => {
                    container.style.setProperty('--m-x', `${state.glare.x}%`);
                    container.style.setProperty('--m-y', `${state.glare.y}%`);
                    container.style.setProperty('--r-x', `${state.rotate.x}deg`);
                    container.style.setProperty('--r-y', `${state.rotate.y}deg`);
                    container.style.setProperty('--bg-x', `${state.background.x}%`);
                    container.style.setProperty('--bg-y', `${state.background.y}%`);
                };

                container.addEventListener('pointermove', (event) => {
                    const rotateFactor = 0.4;
                    const rect = container.getBoundingClientRect();
                    const position = {
                        x: event.clientX - rect.left,
                        y: event.clientY - rect.top,
                    };
                    const percentage = {
                        x: (100 / rect.width) * position.x,
                        y: (100 / rect.height) * position.y,
                    };
                    const delta = {
                        x: percentage.x - 50,
                        y: percentage.y - 50,
                    };

                    state.background.x = 50 + percentage.x / 4 - 12.5;
                    state.background.y = 50 + percentage.y / 3 - 16.67;
                    state.rotate.x = -(delta.y / 3.5); // Fixed axis for CSS transform
                    state.rotate.y = delta.x / 2;     // Fixed axis for CSS transform
                    state.rotate.x *= rotateFactor;
                    state.rotate.y *= rotateFactor;
                    state.glare.x = percentage.x;
                    state.glare.y = percentage.y;

                    updateStyles();
                });

                container.addEventListener('pointerenter', () => {
                    isPointerInside = true;
                    setTimeout(() => {
                        if (isPointerInside) {
                            container.style.setProperty('--duration', '0s');
                        }
                    }, 300);
                });

                container.addEventListener('pointerleave', () => {
                    isPointerInside = false;
                    container.style.removeProperty('--duration');
                    container.style.setProperty('--r-x', `0deg`);
                    container.style.setProperty('--r-y', `0deg`);
                });
            });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">

<div className="absolute inset-0 bg-grid opacity-30"></div>

<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#000000]/70 backdrop-blur-xl">
<div className="flex flex-wrap max-w-screen-xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<span className="self-center text-lg font-semibold tracking-tight text-white/90">Lucas Tell<span className="text-[#D4AF37]">.</span></span>
<div className="flex space-x-3">
<a className="text-xs font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:bg-white/10" href="https://wa.me/5493815514213">
                    Contacto <svg className="lucide lucide-arrow-right w-3 h-3 text-[#D4AF37]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden z-10 pt-28 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent z-0 pointer-events-none"></div>
<div className="grid md:grid-cols-2 z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="space-y-8 fade-in-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></span>
<span className="text-[11px] font-semibold text-white/80 uppercase tracking-widest">Estrategia &amp; Conciencia</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-5xl font-semibold text-white tracking-tighter">
                    Marketing con conciencia para empresas que quieren
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCD34D]">crecer con sentido</span>.
                </h1>
<p className="text-lg text-white/60 font-normal leading-relaxed max-w-lg tracking-wide">
                    Estrategia, eficiencia de equipos y sistemas medibles para líderes que buscan resultados reales sin
                    perder humanidad.
                </p>
<div className="pt-4 flex flex-col sm:flex-row gap-4">

<a className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] group" href="https://wa.me/5493815514213">
<span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#D4AF37_50%,#000000_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-8 py-1 text-sm font-semibold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-neutral-900 gap-2">
                            Hablar por WhatsApp
                            <svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</span>
</a>
</div>
</div>

<div className="relative h-[500px] md:h-[700px] w-full flex items-end justify-center fade-in-up delay-200">
<div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent opacity-20 rounded-full blur-3xl scale-75 translate-y-20"></div>
<img alt="Lucas Tell" className="object-bottom w-full h-full object-contain z-10 relative drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49bf3e2b-7b7f-4dd2-a427-faa846b60801_original.gif" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'}}/>
</div>
</div>
</section>

<section className="md:py-32 py-24 relative z-10">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">
                El problema no es la falta de esfuerzo. 
                <span className="text-white/40">Es la falta de alineación.</span>
</h2>

<div className="ios-card rounded-[2rem] p-10 md:p-12 text-left shadow-2xl overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="grid gap-8 relative z-10">
<div className="flex items-start gap-5 group">
<div className="p-1.5 rounded-full bg-red-500/10 text-red-400 mt-0.5 border border-red-500/10">
<svg className="lucide lucide-x w-3.5 h-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<p className="text-lg text-white/70 font-normal">Hacés mucho pero no todo convierte.</p>
</div>
<div className="flex items-start gap-5 group">
<div className="p-1.5 rounded-full bg-red-500/10 text-red-400 mt-0.5 border border-red-500/10">
<svg className="lucide lucide-x w-3.5 h-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<p className="text-lg text-white/70 font-normal">Tu equipo trabaja, pero sin foco claro.</p>
</div>
<div className="flex items-start gap-5 group">
<div className="p-1.5 rounded-full bg-red-500/10 text-red-400 mt-0.5 border border-red-500/10">
<svg className="lucide lucide-x w-3.5 h-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<p className="text-lg text-white/70 font-normal">Usás herramientas, pero no tenés sistema.</p>
</div>
<div className="w-full h-px bg-white/10 my-2"></div>
<div className="flex items-start gap-5 group">
<div className="p-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] mt-0.5 border border-[#D4AF37]/20 shadow-[0_0_15px_-3px_#D4AF37]">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-lg text-white font-medium">Querés crecer sin perder propósito.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8 text-center md:text-left">

<div className="p-8 rounded-[2rem] hover:bg-white/5 transition-colors duration-500 group border border-transparent hover:border-white/5">
<div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 shadow-inner border border-[#D4AF37]/10 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Conciencia</h3>
<p className="text-white/50 text-base font-normal leading-relaxed">Decisiones claras, liderazgo presente y propósito real. Sin dogmas, con coherencia.</p>
</div>

<div className="p-8 rounded-[2rem] hover:bg-white/5 transition-colors duration-500 group border border-transparent hover:border-white/5">
<div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 shadow-inner border border-[#D4AF37]/10 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-target w-6 h-6" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Estrategia</h3>
<p className="text-white/50 text-base font-normal leading-relaxed">Marketing orientado a ventas, no a métricas vacías. Acciones que mueven la aguja.</p>
</div>

<div className="p-8 rounded-[2rem] hover:bg-white/5 transition-colors duration-500 group border border-transparent hover:border-white/5">
<div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 shadow-inner border border-[#D4AF37]/10 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-cpu w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Sistema</h3>
<p className="text-white/50 text-base font-normal leading-relaxed">Procesos, tecnología e IA al servicio del humano. Eficiencia medible y escalable.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Qué hago</h2>
<p className="text-white/40 mt-3 text-lg">Soluciones integrales para escalar con orden.</p>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="p-8 rounded-[2rem] ios-card hover:bg-white/10 transition-all duration-300 group">
<svg className="lucide lucide-megaphone w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Marketing con conciencia</h3>
<p className="text-sm text-white/50 font-normal">Foco en ventas y comunicación auténtica.</p>
</div>
<div className="p-8 rounded-[2rem] ios-card hover:bg-white/10 transition-all duration-300 group">
<svg className="lucide lucide-message-square w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Claridad de mensaje</h3>
<p className="text-sm text-white/50 font-normal">Posicionamiento que resuena con tu audiencia.</p>
</div>
<div className="p-8 rounded-[2rem] ios-card hover:bg-white/10 transition-all duration-300 group">
<svg className="lucide lucide-users w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Eficiencia de equipos</h3>
<p className="text-sm text-white/50 font-normal">Liderazgo y delegación efectiva.</p>
</div>
<div className="p-8 rounded-[2rem] ios-card hover:bg-white/10 transition-all duration-300 group">
<svg className="lucide lucide-bar-chart-3 w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Sistemas medibles</h3>
<p className="text-sm text-white/50 font-normal">Estructuras escalables basadas en datos.</p>
</div>
<div className="p-8 rounded-[2rem] ios-card hover:bg-white/10 transition-all duration-300 group">
<svg className="lucide lucide-bot w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Tecnología e IA</h3>
<p className="text-sm text-white/50 font-normal">Uso inteligente de herramientas sin perder humanidad.</p>
</div>
<div className="p-8 rounded-[2rem] ios-card hover:bg-white/10 transition-all duration-300 group">
<svg className="lucide lucide-heart-handshake w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Acompañamiento</h3>
<p className="text-sm text-white/50 font-normal">Soporte estratégico y coaching real.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="servicios">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Planes y Servicios</h2>
<p className="text-white/40 mt-3">Inversiones claras para resultados tangibles.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="glare-card-container min-h-[500px] w-full h-full" style={{'--mx': '98.19121253452326%', '--my': '4.189999389648437%', '--rx': '0deg', '--ry': '0deg', '--bg-x': '62.04780313363082%', '--bg-y': '34.72666646321614%'}}>
<div className="glare-card relative h-full w-full rounded-[2rem] border border-white/10 bg-neutral-950 overflow-hidden">

<div className="relative z-10 p-8 flex flex-col h-full bg-neutral-800/85 backdrop-blur-mdborder border-white/10w-full&gt; &lt;h3 class=" font-medium="" mb-2"="" text-white="" text-xl="">Marketing &amp; Contenido
          <div className="text-3xl font-semibold text-[#D4AF37] mb-6 tracking-tight">USD 650</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Estrategia de marketing consciente
            </li>
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Contenido alineado a ventas
            </li>
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Claridad de mensaje
            </li>
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Métricas reales y accionables
            </li>
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Sistema pensado para convertir
            </li>
</ul>
<a className="w-full py-3.5 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold text-center transition-all text-sm z-20 relative" href="https://wa.me/5493815514213">
            Contratar por WhatsApp
          </a>
</div>

<div className="absolute inset-0 opacity-[var(--opacity)] transition-opacity duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background" style={{background: 'radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0) 90%)', mixBlendMode: 'soft-light', pointerEvents: 'none'}}>
</div>
<div className="glare-layer-foil absolute inset-0 opacity-[var(--opacity)] transition-opacity duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background mix-blend-color-dodge pointer-events: none;">
</div>
</div>
</div>

<div className="glare-card-container w-full h-full min-h-[500px]" style={{'--mx': '1.0335956537291917%', '--my': '36.510003662109376%', '--rx': '0deg', '--ry': '0deg', '--bg-x': '37.758398913432295%', '--bg-y': '45.500001220703126%'}}>
<div className="glare-card relative h-full w-full rounded-[2rem] border border-white/10 bg-neutral-950 overflow-hidden">

<div className="relative z-10 p-8 flex flex-col h-full bg-neutral-800/85 backdrop-blur-mdborder border-white/10w-full&gt; &lt;h3 class=">
<h3 className="text-xl font-medium text-white mb-2">Monitoreo de Ads</h3>
<div className="text-3xl font-semibold text-[#D4AF37] mb-6 tracking-tight">USD 80</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Seguimiento de campañas
            </li>
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Optimización continua
            </li>
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Lectura clara de métricas
            </li>
</ul>
<a className="w-full py-3.5 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black font-semibold text-center transition-all text-sm z-20 relative" href="https://wa.me/5493815514213">
            Hablar por WhatsApp
          </a>
</div>

<div className="absolute inset-0 opacity-[var(--opacity)] transition-opacity duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background" style={{background: 'radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0) 90%)', mixBlendMode: 'soft-light', pointerEvents: 'none'}}>
</div>
<div className="glare-layer-foil absolute inset-0 opacity-[var(--opacity)] transition-opacity duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background mix-blend-color-dodge pointer-events: none;">
</div>
</div>
</div>

<div className="glare-card-container w-full h-full min-h-[500px]" style={{'--mx': '5.167997982843326%', '--my': '1.6300018310546875%', '--rx': '0deg', '--ry': '0deg', '--bg-x': '38.79199949571083%', '--bg-y': '33.87333394368489%'}}>
<div className="glare-card relative h-full w-full rounded-[2rem] border border-white/10 bg-neutral-950 overflow-hidden">

<div className="relative z-10 p-8 flex flex-col h-full bg-neutral-800/85 backdrop-blur-mdborder border-white/10w-full&gt; &lt;h3 class=">
<h3 className="text-xl font-medium text-white mb-2">Coaching &amp; Eficiencia</h3>
<div className="text-3xl font-semibold text-[#D4AF37] mb-6 tracking-tight">USD 100</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Acompañamiento a líderes
            </li>
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Comunicación clara y foco
            </li>
<li className="flex items-center gap-3 text-white/80 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Mejora de rendimiento real
            </li>
</ul>
<a className="w-full py-3.5 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black font-semibold text-center transition-all text-sm z-20 relative" href="https://wa.me/5493815514213">
            Coordinar por WhatsApp
          </a>
</div>

<div className="absolute inset-0 opacity-[var(--opacity)] transition-opacity duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background" style={{background: 'radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0) 90%)', mixBlendMode: 'soft-light', pointerEvents: 'none'}}>
</div>
<div className="glare-layer-foil absolute inset-0 opacity-[var(--opacity)] transition-opacity duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background mix-blend-color-dodge pointer-events: none;">
</div>
</div>
</div>
</div>

<div className="mt-8 p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/20 bg-[#D4AF37]/5 backdrop-blur-xl relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-2xl">
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Coaching Personal</h3>
<p className="text-white/60 font-normal text-lg">Procesos personalizados para líderes que buscan claridad profunda,
          foco y coherencia.</p>
</div>
<a className="whitespace-nowrap bg-white text-black hover:bg-gray-100 font-semibold py-3.5 px-8 rounded-xl transition-colors shadow-lg" href="https://wa.me/5493815514213">
        Consultar ahora
      </a>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 text-center">
<div className="max-w-3xl mx-auto px-6">
<svg className="lucide lucide-quote w-8 h-8 text-[#D4AF37] mx-auto mb-8 opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-2xl md:text-3xl font-light text-white leading-relaxed tracking-tight">
                "No creo en el crecimiento desordenado. No creo en la presión sin sentido. Creo en sistemas que respetan a las personas y generan resultados reales."
            </p>
<div className="mt-8 text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-semibold opacity-80">— Lucas Tell</div>
</div>
</section>

<section className="py-24 relative overflow-hidden z-10 border-t border-white/5 bg-black/40 backdrop-blur-sm">
<div className="relative z-10 max-w-xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">
                Ordená tu negocio, tu equipo y tu mensaje
            </h2>
<div className="mt-10 flex justify-center">

<a className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] group" href="https://wa.me/5493815514213">
<span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#D4AF37_50%,#000000_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-10 py-1 text-base font-semibold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-neutral-900 gap-3">
                        Hablar por WhatsApp ahora
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>
</section>

<footer className="py-12 bg-black border-t border-white/5 text-center text-gray-500 text-xs font-medium relative z-10">
<p>© 2024 Lucas Tell. Todos los derechos reservados.</p>
<div className="flex justify-center gap-6 mt-6 opacity-40">
<svg className="lucide lucide-instagram w-4 h-4 hover:text-white transition-colors cursor-pointer" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-linkedin w-4 h-4 hover:text-white transition-colors cursor-pointer" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</footer>


    </>
  );
}
