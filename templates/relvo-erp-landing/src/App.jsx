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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Theme Toggle Logic
        function toggleTheme() {
            const body = document.getElementById('app-body');
            const isDark = body.classList.contains('dark');
            const sunIcon = document.getElementById('theme-icon-sun');
            const moonIcon = document.getElementById('theme-icon-moon');

            if (isDark) {
                body.classList.remove('dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            } else {
                body.classList.add('dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            }
        }

        // Spotlight Logic
        const spotlight = document.getElementById('spotlight');
        
        document.addEventListener('mousemove', (e) => {
            if(spotlight.style.opacity === '') {
                spotlight.style.opacity = '1';
            }
            const x = e.clientX;
            const y = e.clientY;
            spotlight.style.setProperty('--mouse-x', `${x}px`);
            spotlight.style.setProperty('--mouse-y', `${y}px`);
        });

        // Typewriter Effect
        // Using plural forms to ensure grammatical consistency with "diarios"
        const phrases = ["Cierres contables", "Balances", "Estados de resultados", "Flujos de caja"];
        let currentPhraseIndex = 0;
        let isDeleting = false;
        let txt = '';
        
        function type() {
          const fullTxt = phrases[currentPhraseIndex];
          
          if (isDeleting) {
            txt = fullTxt.substring(0, txt.length - 1);
          } else {
            txt = fullTxt.substring(0, txt.length + 1);
          }

          const element = document.getElementById('typewriter-text');
          if(element) element.innerHTML = txt;

          let typeSpeed = 100;
          if (isDeleting) typeSpeed /= 2;

          if (!isDeleting && txt === fullTxt) {
            typeSpeed = 2000; // Wait at end
            isDeleting = true;
          } else if (isDeleting && txt === '') {
            isDeleting = false;
            currentPhraseIndex++;
            if (currentPhraseIndex === phrases.length) currentPhraseIndex = 0;
            typeSpeed = 500;
          }

          setTimeout(type, typeSpeed);
        }

        document.addEventListener('DOMContentLoaded', type);
    
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
      

<div id="spotlight" style={{opacity: '1'}}></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

<div className="absolute inset-0 grid-bg"></div>

<div className="absolute top-0 left-1/4 w-[800px] h-[800px] ambient-glow rounded-full mix-blend-screen translate-y-[-50%]"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] ambient-glow rounded-full mix-blend-screen translate-y-[30%] opacity-50"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-[var(--glass-border)] bg-[var(--nav-bg)] backdrop-blur-xl transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[var(--text-main)] rounded-sm flex items-center justify-center transition-colors">
<div className="w-3 h-3 bg-[var(--bg-main)] rounded-sm transition-colors"></div>
</div>
<span className="text-lg font-semibold tracking-tighter">RELVO</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-muted font-medium">
<a className="hover:text-[var(--text-main)] transition-colors" href="#solucion">Solución</a>
<a className="hover:text-[var(--text-main)] transition-colors" href="#integraciones">Integraciones</a>
<a className="hover:text-[var(--text-main)] transition-colors" href="#precios">Precios</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-[var(--glass-hover)] text-muted hover:text-[var(--text-main)] transition-all" onclick="toggleTheme()">
<svg className="lucide lucide-sun w-4 h-4 hidden" data-lucide="sun" fill="none" height="24" id="theme-icon-sun" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="lucide lucide-moon w-4 h-4" data-lucide="moon" fill="none" height="24" id="theme-icon-moon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>
<a className="text-xs font-medium bg-[var(--text-main)] text-[var(--bg-main)] px-4 py-2 rounded-full hover:opacity-90 transition-opacity tracking-tight" href="#early-bird">
                    Acceso anticipado
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Próximamente: Contabilidad Autónoma v1.0
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium tracking-tight mb-6"><span className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400" id="typewriter-text">Cierres contable</span><span className="typewriter-cursor"></span>diarios,<br/> <span className="text-[var(--text-main)]">en piloto automático</span></h1>
<p className="md:text-xl text-muted leading-relaxed text-lg font-light max-w-2xl mr-auto mb-10 ml-auto">Relvo es el IA - Based ERP que automatiza cada movimiento financiero en tiempo real. Sin planillas. Sin espera. Sin fricción.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-[var(--text-main)] text-[var(--bg-main)] rounded-full font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm" href="#early-bird">
                    Solicitar acceso <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="w-full sm:w-auto px-8 py-3 glass-panel rounded-full font-medium transition-all text-sm">
                    Ver demo interactiva
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto animate-float">
<div className="glass-panel rounded-xl p-1 shadow-2xl shadow-indigo-500/10">
<div className="bg-[var(--card-inner)] rounded-lg p-6 md:p-10 transition-colors duration-500">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 gap-x-6 gap-y-6">
<div className="col-span-1 glass-panel p-5 rounded-lg border-0 bg-[var(--bg-main)]/50">
<div className="text-muted text-xs font-medium uppercase tracking-widest mb-2">Conciliación</div>
<div className="text-3xl font-medium mb-1">100%</div>
<div className="text-xs text-green-500 flex items-center gap-1">
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Al día
                            </div>
</div>
<div className="col-span-1 glass-panel border-0 rounded-lg pt-5 pr-5 pb-5 pl-5">
<div className="text-muted text-xs font-medium uppercase tracking-widest mb-2">Flujo de Caja</div>
<div className="text-3xl font-medium mb-1">$4.2M</div>
<div className="text-xs text-indigo-500 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +12% vs mes anterior
                            </div>
</div>
<div className="col-span-1 glass-panel p-5 rounded-lg border-0 bg-[var(--bg-main)]/50">
<div className="text-muted text-xs font-medium uppercase tracking-widest mb-2">Asientos Hoy</div>
<div className="text-3xl font-medium mb-1">1,402</div>
<div className="text-xs text-muted flex items-center gap-1">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Procesados IA
                            </div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-4 text-xs text-muted py-2 border-b border-[var(--glass-border)]">
<span className="w-16">10:42 AM</span>
<div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-[var(--text-main)]">Pago recibido de Cliente X</span>
<span className="ml-auto opacity-70">Factura #4021 • BCI</span>
</div>
<div className="flex items-center gap-4 text-xs text-muted py-2 border-b border-[var(--glass-border)]">
<span className="w-16">10:41 AM</span>
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><svg className="lucide lucide-refresh-cw w-3 h-3" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg></div>
<span className="text-[var(--text-main)]">Conciliación automática nómina</span>
<span className="ml-auto opacity-70">Buk • Santander</span>
</div>
<div className="flex items-center gap-4 text-xs text-muted py-2">
<span className="w-16">10:38 AM</span>
<div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500"><svg className="lucide lucide-file-text w-3 h-3" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
<span className="text-[var(--text-main)]">Lectura DTE Proveedor</span>
<span className="ml-auto opacity-70">SII • Cloud Vision</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-10 pb-32 px-6 relative" id="ai-assistant">
<div className="max-w-4xl mx-auto text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-4">Tu analista financiero 24/7</h2>
<p className="text-muted text-sm">Consulta el estado de tu empresa en lenguaje natural. Relvo AI interpreta tus datos en tiempo real.</p>
</div>
<div className="max-w-2xl mx-auto glass-panel rounded-2xl border border-[var(--glass-border)] shadow-2xl overflow-hidden flex flex-col relative z-20">

<div className="px-6 py-4 border-b border-[var(--glass-border)] bg-[var(--nav-bg)]/80 backdrop-blur-md flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 relative">
<svg className="lucide lucide-sparkles w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[var(--bg-main)] rounded-full"></span>
</div>
<div>
<div className="text-sm font-medium">Relvo AI</div>
<div className="text-[10px] text-muted">Conectado a ERP &amp; Bancos</div>
</div>
</div>
<button className="text-muted hover:text-[var(--text-main)] transition-colors p-1 rounded-md hover:bg-[var(--glass-hover)]">
<svg className="lucide lucide-more-horizontal w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="p-6 space-y-6 min-h-[400px] bg-gradient-to-b from-[var(--bg-main)]/50 to-[var(--bg-main)]/80 relative">

<div className="flex justify-center">
<span className="text-[10px] font-medium text-muted uppercase tracking-widest opacity-60">Hoy, 10:45 AM</span>
</div>

<div className="flex gap-4 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex-shrink-0 flex items-center justify-center text-indigo-500 mt-1">
<svg className="lucide lucide-bot w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="space-y-2">
<div className="bg-[var(--card-inner)] border border-[var(--glass-border)] rounded-2xl rounded-tl-sm p-4 text-sm leading-relaxed shadow-sm">
<p>Hola, he detectado un aumento del 12% en el flujo de caja ($4.2M) respecto al mes anterior. ¿Te gustaría ver el desglose por clientes?</p>
</div>
</div>
</div>

<div className="flex gap-4 max-w-[90%] ml-auto flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-gray-200/20 flex-shrink-0 flex items-center justify-center text-muted mt-1 overflow-hidden border border-[var(--glass-border)]">
<svg className="lucide lucide-user w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="space-y-2">
<div className="bg-indigo-600 text-white rounded-2xl rounded-tr-sm p-4 text-sm leading-relaxed shadow-md shadow-indigo-500/20">
<p>Sí, y dime qué facturas pendientes tienen mayor impacto en la liquidez de esta semana.</p>
</div>
</div>
</div>

<div className="flex gap-4 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex-shrink-0 flex items-center justify-center text-indigo-500 mt-1 animate-pulse">
<svg className="lucide lucide-bot w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="space-y-3">
<div className="bg-[var(--card-inner)] border border-[var(--glass-border)] rounded-2xl rounded-tl-sm p-4 text-sm leading-relaxed shadow-sm">
<p className="mb-3">Aquí tienes el análisis. Las facturas críticas por cobrar antes del viernes son:</p>

<div className="bg-[var(--bg-main)] rounded-lg border border-[var(--glass-border)] overflow-hidden mb-2">
<div className="flex items-center justify-between p-3 border-b border-[var(--glass-border)] hover:bg-[var(--glass-hover)] transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<div>
<div className="font-medium text-xs">Empresas Copec S.A.</div>
<div className="text-[10px] text-muted">Vence en 2 días</div>
</div>
</div>
<div className="text-right">
<div className="font-medium text-xs">$4.500.000</div>
<div className="text-[10px] text-indigo-400 group-hover:underline flex items-center justify-end gap-0.5">Ver factura <svg className="lucide lucide-arrow-up-right w-2.5 h-2.5" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div>
</div>
</div>
<div className="flex items-center justify-between p-3 hover:bg-[var(--glass-hover)] transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div>
<div className="font-medium text-xs">Cencosud Retail</div>
<div className="text-[10px] text-muted">Vence en 4 días</div>
</div>
</div>
<div className="text-right">
<div className="font-medium text-xs">$2.150.000</div>
<div className="text-[10px] text-indigo-400 group-hover:underline flex items-center justify-end gap-0.5">Ver factura <svg className="lucide lucide-arrow-up-right w-2.5 h-2.5" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div>
</div>
</div>
</div>
<p className="text-xs text-muted">¿Quieres que envíe un recordatorio automático de cobro a estos contactos?</p>
</div>
</div>
</div>
</div>

<div className="p-4 bg-[var(--nav-bg)] border-t border-[var(--glass-border)]">
<div className="relative flex items-center group">
<button className="absolute left-3 p-1.5 text-muted hover:text-[var(--text-main)] transition-colors rounded-md hover:bg-[var(--glass-hover)] z-10">
<svg className="lucide lucide-paperclip w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
</button>
<input className="w-full bg-[var(--bg-main)] text-sm border border-[var(--glass-border)] rounded-full pl-12 pr-12 py-3 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-muted/50" placeholder="Escribe un mensaje a Relvo..." type="text"/>
<button className="absolute right-2 p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-colors shadow-lg shadow-indigo-500/20">
<svg className="lucide lucide-arrow-up w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
<div className="text-center mt-3">
<span className="text-[10px] text-muted opacity-60 flex items-center justify-center gap-1"><svg className="lucide lucide-shield-check w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Tus datos financieros están encriptados y seguros.</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
</section>

<section className="z-10 border-[var(--glass-border)] border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">El problema que enfrentan los CFOs hoy</h2>
<p className="text-muted leading-relaxed mb-6">Tu equipo financiero trabaja en silos. Sistemas desconectados, tareas repetitivas y cierres contables lentos que obligan a operar a ciegas.</p>
<ul className="text-muted text-sm space-y-4 gap-x-3 gap-y-3">
<li className="flex gap-3 gap-x-3 gap-y-3 items-center">Conciliaciones con planillas y muchos softwares</li>
<li className="flex gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-x w-[16px] h-[16px] text-red-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Reportes desactualizados
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-x w-4 h-4 text-red-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Altos costos operativos y riesgo latente
                        </li>
</ul>
</div>
<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
<div className="relative z-10">
<h3 className="text-xl font-medium mb-4">La solución Relvo</h3>
<p className="text-sm text-muted mb-6">
                            Un sistema contable autónomo que conecta todas las fuentes de datos, interpreta movimientos y mantiene tus libros al día.
                        </p>
<div className="flex items-start gap-3 p-3 bg-[var(--glass-hover)] rounded-lg mb-2">
<svg className="lucide lucide-cpu w-5 h-5 text-indigo-500 mt-0.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<div className="">
<div className="text-sm font-medium">Lidera con datos reales</div>
<div className="text-xs text-muted">Sin escalar tu equipo (Headcount neutro).</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="integraciones">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Integraciones Plug &amp; Play</h2>
<p className="text-muted text-sm max-w-xl mx-auto">
                    Relvo se conecta nativamente a todo tu stack financiero y operativo.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel p-6 rounded-xl hover:border-blue-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
<svg className="lucide lucide-landmark w-5 h-5" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
</div>
<h3 className="text-sm font-medium mb-2">Bancos y Fintech</h3>
<p className="text-xs text-muted leading-relaxed">
                        Fintoc, BCI, BancoEstado, Itaú, Santander, Mercado Pago.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl hover:border-green-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
<svg className="lucide lucide-receipt w-5 h-5" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
</div>
<h3 className="text-sm font-medium mb-2">SII &amp; Facturación</h3>
<p className="text-xs text-muted leading-relaxed">
                        Nubox, Chipax, Defontana. Integración completa facturas/boletas.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl hover:border-purple-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h3 className="text-sm font-medium mb-2">Pasarelas de Pago</h3>
<p className="text-xs text-muted leading-relaxed">
                        Xepelin, Transbank, Getnet, Flow, Kushki.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-sm font-medium mb-2">RRHH &amp; E-commerce</h3>
<p className="text-xs text-muted leading-relaxed">
                        Buk, Talana, GeoVictoria, Shopify, Mercado Libre, Rindegastos.
                    </p>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="solucion">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-center">Capacidades Principales</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

<div className="md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 mb-4">
<svg className="lucide lucide-refresh-ccw w-5 h-5" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2">Conciliación 100% Automatizada</h3>
<p className="text-sm text-muted max-w-md">
                            Conciliación bancaria y fiscal sin intervención humana. Nuestro motor cruza miles de transacciones en segundos.
                        </p>
</div>
<div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500">
<svg className="lucide lucide-settings w-64 h-64 text-indigo-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between group hover:border-pink-500/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-brain-circuit w-5 h-5" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<div className="">
<h3 className="text-lg font-medium mb-2">Clasificación IA</h3>
<p className="text-xs text-muted">
                            Asignación inteligente por proveedor, centro de costo y unidad de negocio.
                        </p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between group hover:border-sky-500/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-500 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium mb-2">KPIs Tiempo Real</h3>
<p className="text-xs text-muted">
                            Reportes financieros listos para tomar decisiones al instante.
                        </p>
</div>
</div>

<div className="md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-4">
<svg className="lucide lucide-scale w-5 h-5" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2">Balance y EERR Diarios</h3>
<p className="text-sm text-muted max-w-md">
                            Olvídate de esperar al día 20 del mes siguiente. Ten tu estado de resultados y flujo de caja actualizados cada mañana.
                        </p>
</div>
</div>
</div>
<div className="mt-6 text-center">
<span className="inline-flex items-center gap-2 text-muted border-[var(--glass-border)] text-sm border rounded-full pt-2 pr-4 pb-2 pl-4"><svg className="lucide lucide-rocket w-4 h-4 text-orange-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg> Migración rápida con csv y desde los principales ERP</span>
</div>
</div>
</section>

<section className="border-[var(--glass-border)] z-10 border-t pt-24 pr-6 pb-24 pl-6 relative" id="precios">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight mb-16 text-center">Planes diseñados para crecer</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-panel p-8 rounded-2xl border-t border-[var(--glass-border)] hover:bg-[var(--glass-hover)] transition-colors">
<h3 className="text-lg font-medium text-muted mb-2">Starter</h3>
<div className="text-3xl font-medium mb-1">$99 <span className="text-sm text-muted font-normal">USD/mes</span></div>
<p className="text-xs text-muted mb-6">Para empresas pequeñas.</p>
<ul className="space-y-3 text-sm text-muted mb-8">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Bancos + SII</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 Usuario</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Reportes básicos</li>
</ul>
<button className="w-full py-2 rounded-lg border border-[var(--glass-border)] text-sm font-medium hover:bg-[var(--glass-hover)] transition-colors">Seleccionar</button>
</div>

<div className="glass-panel p-8 rounded-2xl border border-indigo-500/30 relative bg-[var(--card-inner)] shadow-2xl shadow-indigo-500/5">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">Popular</div>
<h3 className="text-lg font-medium text-indigo-400 mb-2">Pro</h3>
<div className="text-3xl font-medium mb-1">$299 <span className="text-sm text-muted font-normal">USD/mes</span></div>
<p className="text-xs text-muted mb-6">Para equipos en expansión.</p>
<ul className="space-y-3 text-sm text-muted mb-8">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Full Integraciones</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Multiusuario</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> IA de conciliación avanzada</li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">Empezar con Pro</button>
</div>

<div className="glass-panel p-8 rounded-2xl border-t border-[var(--glass-border)] hover:bg-[var(--glass-hover)] transition-colors">
<h3 className="text-lg font-medium text-muted mb-2">Enterprise</h3>
<div className="text-xl font-medium mb-1">Desde $999 <span className="text-sm text-muted font-normal">USD/mes</span></div>
<p className="text-xs text-muted mb-6">Para operaciones complejas.</p>
<ul className="space-y-3 text-sm text-muted mb-8">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Multiempresa</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Reporting avanzado</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> API Privada</li>
</ul>
<button className="w-full py-2 rounded-lg border border-[var(--glass-border)] text-sm font-medium hover:bg-[var(--glass-hover)] transition-colors">Contactar Ventas</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 text-center overflow-hidden" id="early-bird">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full -z-10"></div>
<div className="max-w-xl mx-auto relative glass-panel p-8 md:p-12 rounded-3xl border border-indigo-500/20">
<div className="inline-flex items-center gap-2 mb-6 text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Early Access: Q4 2024
            </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Únete a la lista de espera</h2>
<p className="text-muted mb-8 font-light">
                Estamos abriendo cupos gradualmente. Asegura tu lugar para recibir beneficios exclusivos de lanzamiento y onboarding prioritario.
            </p>
<form className="relative w-full max-w-sm mx-auto group">
<div className="relative flex items-center">
<svg className="lucide lucide-mail absolute left-4 w-5 h-5 text-muted transition-colors group-focus-within:text-indigo-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-12 pr-32 py-4 bg-[var(--bg-main)] border border-[var(--glass-border)] rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-sm transition-all shadow-sm placeholder:text-muted/50" placeholder="tu@empresa.com" required="" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[var(--text-main)] text-[var(--bg-main)] hover:bg-indigo-600 hover:text-white rounded-full px-5 text-xs font-semibold transition-all" type="submit">
                        Unirme
                    </button>
</div>
<div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-muted opacity-70">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Sin spam. Solo updates del producto.
                </div>
</form>
</div>
</section>

<footer className="border-t border-[var(--glass-border)] bg-[var(--nav-bg)] py-12 px-6 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-[var(--text-main)] rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-[var(--bg-main)] rounded-sm"></div>
</div>
<span className="text-base font-semibold tracking-tighter">RELVO</span>
</div>
<div className="text-xs text-muted">
                © 2024 Relvo Inc. Todos los derechos reservados.
            </div>
<div className="flex gap-6">
<a className="text-muted hover:text-[var(--text-main)] transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-muted hover:text-[var(--text-main)] transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</footer>


    </>
  );
}
