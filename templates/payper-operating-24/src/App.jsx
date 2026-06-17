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
      

<svg style={{display: 'none'}}>
<defs>
<filter id="noiseFilter">
<feturbulence basefrequency="0.6" stitchtiles="stitch" type="fractalNoise"></feturbulence>
<fecolormatrix type="saturate" values="0"></fecolormatrix>
<fecomponenttransfer>
<fefunca slope="0.2" type="linear"></fefunca>
</fecomponenttransfer>
</filter>
<lineargradient id="wireframe-fade" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="white" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="transparent" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-6 h-6 bg-white/90 rounded-[4px] flex items-center justify-center group-hover:bg-[#C07916] transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<div className="w-2 h-2 bg-[#050505] rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">PAYPER</span>
</div>
<div className="hidden md:flex gap-8 text-[13px] font-medium text-white/50">
<a className="hover:text-white transition-colors duration-200" href="#soluciones">Soluciones</a>
<a className="hover:text-white transition-colors duration-200" href="#como-funciona">Flujo</a>
<a className="hover:text-white transition-colors duration-200" href="#modulos">Módulos</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Precios</a>
</div>
<div className="flex gap-4 items-center">
<a className="hidden sm:block text-[13px] font-medium text-white/60 hover:text-white transition-colors" href="#login">Log in</a>
<a className="text-[13px] font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-[#C07916] hover:text-white transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)] hover:shadow-[#C07916]/20" href="#demo">Ver Demo</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020202]">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(192,121,22,0.12)_0%,transparent_70%)] blur-[100px] rounded-full pointer-events-none animate-glow"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="relative max-w-5xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-white text-[10px] font-medium mb-10 backdrop-blur-md hover:border-[#C07916]/30 transition-all cursor-default shadow-[0_0_30px_-10px_rgba(0,0,0,1)] group">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C07916] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C07916]"></span>
</span>
<span className="tracking-wider uppercase bg-gradient-to-r from-white/90 to-white/50 bg-clip-text text-transparent group-hover:to-white transition-all">v2.0 Update: Cashless Offline</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.05] md:leading-[0.95]">
                El S.O. de la <br/>
<span className="relative inline-block">
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 relative z-10">Noche &amp; Eventos</span>
<span className="absolute inset-0 bg-gradient-to-r from-[#C07916]/0 via-[#C07916]/5 to-[#C07916]/0 blur-3xl -z-10 opacity-40 transform scale-y-50 translate-y-4"></span>
</span>
</h1>
<p className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                Gestioná tickets, pedidos, recetas, stock y cobros en una sola plataforma unificada.
                Integrá <span className="text-white/80 font-normal border-b border-white/10 pb-0.5 hover:border-[#C07916] transition-colors cursor-help">tecnología NFC</span> para facturar sin fricción.
            </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-28">
<button className="group h-10 px-6 bg-[#EAEAEA] text-black font-medium rounded-full text-[13px] hover:bg-white hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2">
                    Empezar Ahora 
                    <i className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#C07916]" data-lucide="arrow-right"></i>
</button>
<button className="h-10 px-6 border border-white/10 text-white/80 font-medium rounded-full text-[13px] hover:bg-white/5 hover:text-white hover:border-white/20 transition-all">
                    Hablar con Ventas
                </button>
</div>
</div>

<div className="max-w-5xl mx-auto px-4" id="como-funciona">
<div className="relative rounded-xl border border-white/[0.08] bg-[#050505] shadow-2xl overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
<div className="py-16 md:py-24 relative flex justify-center items-center overflow-x-auto no-scrollbar">
<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>
<div className="flex items-center gap-4 md:gap-8 min-w-max px-12">
<div className="flex flex-col items-center gap-5 group">
<div className="w-14 h-14 rounded-xl bg-[#0A0A0A] border border-white/[0.08] flex items-center justify-center shadow-lg group-hover:border-[#C07916]/30 group-hover:bg-white/[0.02] group-hover:shadow-[0_0_30px_-15px_rgba(192,121,22,0.4)] transition-all duration-500 z-10">
<i className="w-[18px] h-[18px] text-white/40 group-hover:text-[#C07916] transition-colors duration-300" data-lucide="smartphone"></i>
</div>
<span className="text-[10px] tracking-[0.2em] text-white/20 uppercase font-medium group-hover:text-white/50 transition-colors">Cliente</span>
</div>
<div className="h-px w-10 md:w-20 bg-white/[0.04] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C07916]/60 to-transparent w-full -translate-x-full animate-flow-subtle"></div>
</div>
<div className="flex flex-col items-center gap-5 group">
<div className="w-14 h-14 rounded-xl bg-[#0A0A0A] border border-white/[0.08] flex items-center justify-center shadow-lg group-hover:border-white/20 group-hover:bg-white/[0.02] transition-all duration-500 z-10">
<i className="w-[18px] h-[18px] text-white/40 group-hover:text-white transition-colors duration-300" data-lucide="scan-line"></i>
</div>
<span className="text-[10px] tracking-[0.2em] text-white/20 uppercase font-medium group-hover:text-white/50 transition-colors">Acceso/QR</span>
</div>
<div className="h-px w-10 md:w-20 bg-white/[0.04] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-full -translate-x-full animate-flow-subtle" style={{animationDelay: '0.6s'}}></div>
</div>
<div className="flex flex-col items-center gap-5 group">
<div className="w-14 h-14 rounded-xl bg-[#0A0A0A] border border-white/[0.08] flex items-center justify-center shadow-lg group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 z-10">
<i className="w-[18px] h-[18px] text-white/40 group-hover:text-blue-400 transition-colors duration-300" data-lucide="credit-card"></i>
</div>
<span className="text-[10px] tracking-[0.2em] text-white/20 uppercase font-medium group-hover:text-white/50 transition-colors">Cobro</span>
</div>
<div className="h-px w-10 md:w-20 bg-white/[0.04] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent w-full -translate-x-full animate-flow-subtle" style={{animationDelay: '1.2s'}}></div>
</div>
<div className="flex flex-col items-center gap-5 group">
<div className="w-14 h-14 rounded-xl bg-[#0A0A0A] border border-white/[0.08] flex items-center justify-center shadow-lg group-hover:border-emerald-500/30 group-hover:shadow-[0_0_30px_-15px_rgba(16,185,129,0.3)] transition-all duration-500 z-10">
<i className="w-[18px] h-[18px] text-white/40 group-hover:text-emerald-400 transition-colors duration-300" data-lucide="database"></i>
</div>
<span className="text-[10px] tracking-[0.2em] text-white/20 uppercase font-medium group-hover:text-white/50 transition-colors">Stock -1</span>
</div>
<div className="h-px w-10 md:w-20 bg-white/[0.04] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full -translate-x-full animate-flow-subtle" style={{animationDelay: '1.8s'}}></div>
</div>
<div className="flex flex-col items-center gap-5 group">
<div className="w-14 h-14 rounded-xl bg-[#0A0A0A] border border-white/[0.08] flex items-center justify-center shadow-lg group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_-15px_rgba(168,85,247,0.3)] transition-all duration-500 z-10">
<i className="w-[18px] h-[18px] text-white/40 group-hover:text-purple-400 transition-colors duration-300" data-lucide="pie-chart"></i>
</div>
<span className="text-[10px] tracking-[0.2em] text-white/20 uppercase font-medium group-hover:text-white/50 transition-colors">Data</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 border-t border-white/[0.06] bg-[#030303]">
<div className="py-5 text-center border-r border-white/[0.06]">
<div className="text-[9px] text-white/20 uppercase tracking-[0.15em] font-semibold mb-1.5">Uptime</div>
<div className="text-[13px] font-mono text-[#C07916]">99.99%</div>
</div>
<div className="py-5 text-center border-r border-white/[0.06]">
<div className="text-[9px] text-white/20 uppercase tracking-[0.15em] font-semibold mb-1.5">Sync Time</div>
<div className="text-[13px] font-mono text-white/90">&lt;50ms</div>
</div>
<div className="py-5 text-center">
<div className="text-[9px] text-white/20 uppercase tracking-[0.15em] font-semibold mb-1.5">Mode</div>
<div className="text-[13px] font-mono text-emerald-500/90 flex items-center justify-center gap-2">
<span className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                            Offline-First
                        </div>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 bg-[#FFFFFF] relative z-20" id="soluciones">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                    Arquitectura adaptable.
                </h2>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                    Desde bares de especialidad hasta festivales masivos. Payper escala horizontalmente según la demanda de tu operación.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-auto lg:h-[550px]">
<div className="group md:col-span-1 md:row-span-2 rounded-2xl bg-[#F8F8F7] border border-slate-200 p-8 flex flex-col justify-between relative overflow-hidden hover:border-[#C07916]/30 hover:shadow-xl hover:shadow-[#C07916]/5 transition-all duration-500">
<div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-gradient-to-b from-[#C07916]/10 to-transparent rounded-full blur-[60px] group-hover:bg-[#C07916]/15 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-100 flex items-center justify-center mb-6 shadow-sm text-[#C07916] group-hover:scale-110 transition-transform duration-500">
<i className="w-5 h-5" data-lucide="music"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2 tracking-tight">Nightclubs &amp; Discos</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                            Eliminá el efectivo. Aumentá el ticket promedio un 30% con pulseras RFID y recargas previas.
                        </p>
</div>
<div className="relative z-10 mt-8 space-y-4">
<div className="flex items-center gap-3 text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
<div className="w-4 h-4 rounded-full bg-[#C07916]/10 flex items-center justify-center text-[#C07916]">
<i className="w-2.5 h-2.5" data-lucide="check"></i>
</div> Control de Barras
                        </div>
<div className="flex items-center gap-3 text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
<div className="w-4 h-4 rounded-full bg-[#C07916]/10 flex items-center justify-center text-[#C07916]">
<i className="w-2.5 h-2.5" data-lucide="check"></i>
</div> Sistema VIP &amp; Reservas
                        </div>
<div className="flex items-center gap-3 text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
<div className="w-4 h-4 rounded-full bg-[#C07916]/10 flex items-center justify-center text-[#C07916]">
<i className="w-2.5 h-2.5" data-lucide="check"></i>
</div> Promoter Tracking
                        </div>
</div>
</div>
<div className="group md:col-span-2 bg-[#080808] rounded-2xl border border-black/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-dot-pattern opacity-[0.1] group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]/60"></div>
<div className="relative z-10 max-w-md pl-2">
<div className="inline-flex items-center gap-2 mb-5 border border-white/10 px-2.5 py-1 rounded-md bg-white/[0.03] backdrop-blur-sm">
<i className="w-3 h-3 text-white/80" data-lucide="tent"></i>
<span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/60">Enterprise</span>
</div>
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Festivales &amp; Eventos Masivos</h3>
<p className="text-sm text-white/50 leading-relaxed font-light">
                            Infraestructura <span className="text-white border-b border-white/20">Offline-First</span>. Procesá transacciones sin depender de internet. Sincronización automática en background.
                        </p>
</div>
<div className="relative z-10 mt-8 md:mt-0 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-5 w-full md:w-auto min-w-[220px] shadow-2xl group-hover:border-emerald-500/20 transition-colors duration-500">
<div className="absolute top-5 right-5 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
<div className="flex items-end justify-between mb-4">
<span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Live TPS</span>
</div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">12,402</div>
<div className="text-[10px] text-emerald-400/80 mb-4 font-mono">+12% vs last hour</div>
<svg className="w-full h-10 stroke-emerald-500/40 fill-none overflow-visible" strokeWidth="1.5">
<path d="M0 30 L 10 28 L 20 32 L 30 20 L 40 25 L 50 15 L 60 20 L 70 10 L 80 15 L 90 5 L 100 10" vector-effect="non-scaling-stroke"></path>
<path className="fill-emerald-500/5 stroke-none" d="M0 30 L 100 10 L 100 40 L 0 40 Z"></path>
</svg>
</div>
</div>
<div className="group md:col-span-1 rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-slate-50 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-5 text-slate-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
<i className="w-5 h-5" data-lucide="beer"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Bares &amp; Pubs</h3>
<p className="text-xs text-slate-500 leading-relaxed font-light">
                            Menú digital QR con pagos integrados en mesa. KDS en cocina para eliminar el papel y los errores.
                        </p>
</div>
</div>
<div className="group md:col-span-1 rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-slate-50 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-5 text-slate-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
<i className="w-5 h-5" data-lucide="ticket"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Teatros &amp; Estadios</h3>
<p className="text-xs text-slate-500 leading-relaxed font-light">
                            Venta ambulante con POS móviles (Sunmi/SmartPOS). Control de stock crítico en tiempo real.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202] relative border-t border-white/[0.06] overflow-hidden" id="modulos">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Suite Modular</h2>
<p className="text-white/40 text-lg font-light max-w-xl">Herramientas interconectadas. Activá solo lo que necesitás.</p>
</div>
<button className="text-white/40 hover:text-white text-xs border-b border-white/10 pb-1 hover:border-white transition-colors flex items-center gap-1.5">
                    Ver documentación API <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#080808] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="h-48 w-full flex items-center justify-center relative overflow-hidden bg-white/[0.01] border-b border-white/[0.04]">
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent"></div>

<svg className="relative z-10 overflow-visible" height="120" viewbox="0 0 180 120" width="180">
<g className="animate-float-slow" style={{transformOrigin: 'center'}}>

<path d="M40 30 L120 30 C125 30 130 35 130 40 L130 80 C130 85 125 90 120 90 L40 90 C35 90 30 85 30 80 L30 40 C30 35 35 30 40 30 Z" fill="transparent" filter="url(#noiseFilter)" opacity="0.5" stroke="white" stroke-opacity="0.3" strokeWidth="0.5" transform="translate(0, -10)"></path>

<path d="M50 40 L130 40 C135 40 140 45 140 50 L140 90 C140 95 135 100 130 100 L50 100 C45 100 40 95 40 90 L40 50 C40 45 45 40 50 40 Z" fill="black" filter="url(#noiseFilter)" stroke="white" stroke-opacity="0.5" strokeWidth="0.7" transform="translate(0, 0)"></path>

<path className="drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" d="M60 50 L140 50 C145 50 150 55 150 60 L150 100 C150 105 145 110 140 110 L60 110 C55 110 50 105 50 100 L50 60 C50 55 55 50 60 50 Z" fill="black" filter="url(#noiseFilter)" stroke="white" strokeWidth="1" transform="translate(0, 10)"></path>
<circle className="animate-pulse" cx="130" cy="80" fill="url(#wireframe-fade)" r="8" stroke="white" strokeWidth="1"></circle>
</g>
</svg>
</div>
<div className="p-6 relative z-10 bg-[#080808]">
<h3 className="text-base font-medium text-white/90 mb-2">Punto Cashless</h3>
<p className="text-sm text-white/40 leading-relaxed font-light">Carga de saldo, activación de pulseras y devolución de saldo remanente.</p>
</div>
</div>

<div className="group relative bg-[#080808] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="h-48 w-full flex items-center justify-center relative overflow-hidden bg-white/[0.01] border-b border-white/[0.04]">
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent"></div>
<svg className="relative z-10 overflow-visible" height="120" viewbox="0 0 180 120" width="180">
<g className="animate-float-reverse" style={{transformOrigin: 'center'}}>

<path d="M30 20 L150 20 C155 20 160 25 160 30 L160 90 C160 95 155 100 150 100 L30 100 C25 100 20 95 20 90 L20 30 C20 25 25 20 30 20 Z" fill="black" filter="url(#noiseFilter)" stroke="white" strokeWidth="0.8"></path>

<line stroke="white" stroke-opacity="0.4" strokeWidth="0.5" x1="35" x2="100" y1="40" y2="40"></line>
<line stroke="white" stroke-opacity="0.4" strokeWidth="0.5" x1="35" x2="120" y1="50" y2="50"></line>
<line stroke="white" stroke-opacity="0.4" strokeWidth="0.5" x1="35" x2="90" y1="60" y2="60"></line>

<path className="group-hover:-translate-y-2 transition-transform duration-700 ease-out" d="M110 35 L145 35 L145 75 L110 75 Z" fill="#0A0A0A" stroke="white" strokeWidth="1"></path>
<line className="group-hover:-translate-y-2 transition-transform duration-700" stroke="white" strokeWidth="0.5" x1="115" x2="140" y1="45" y2="45"></line>
</g>
</svg>
</div>
<div className="p-6 relative z-10 bg-[#080808]">
<h3 className="text-base font-medium text-white/90 mb-2">KDS Cocina/Barra</h3>
<p className="text-sm text-white/40 leading-relaxed font-light">Pantallas de despacho. Tiempos de preparación y alertas de demora.</p>
</div>
</div>

<div className="group relative bg-[#080808] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="h-48 w-full flex items-center justify-center relative overflow-hidden bg-white/[0.01] border-b border-white/[0.04]">
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent"></div>
<svg className="relative z-10 overflow-visible" height="120" viewbox="0 0 180 120" width="180">
<g className="animate-float-slow">

<path d="M60 40 L100 20 L140 40 L100 60 Z" fill="black" filter="url(#noiseFilter)" stroke="white" strokeWidth="0.6"></path>
<path d="M60 40 L60 80 L100 100 L100 60" fill="transparent" stroke="white" stroke-opacity="0.5" strokeWidth="0.6"></path>
<path d="M140 40 L140 80 L100 100" fill="transparent" stroke="white" stroke-opacity="0.8" strokeWidth="0.6"></path>

<g className="group-hover:translate-y-[-15px] transition-transform duration-1000">
<path d="M40 30 L60 20 L80 30 L60 40 Z" fill="black" filter="url(#noiseFilter)" stroke="white" strokeWidth="1"></path>
<path d="M40 30 L40 50 L60 60 L60 40" fill="transparent" stroke="white" strokeWidth="0.6"></path>
<path d="M80 30 L80 50 L60 60" fill="transparent" stroke="white" strokeWidth="0.6"></path>
</g>
</g>
</svg>
</div>
<div className="p-6 relative z-10 bg-[#080808]">
<h3 className="text-base font-medium text-white/90 mb-2">Gestión de Stock</h3>
<p className="text-sm text-white/40 leading-relaxed font-light">Control de inventario por receta. Descuento automático de insumos.</p>
</div>
</div>

<div className="group relative bg-[#080808] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="h-48 w-full flex items-center justify-center relative overflow-hidden bg-white/[0.01] border-b border-white/[0.04]">
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent"></div>
<svg className="relative z-10 overflow-visible" height="120" viewbox="0 0 180 120" width="180">
<g className="animate-float-reverse">

<path d="M70 60 L110 60" stroke="white" stroke-dasharray="2 2" strokeWidth="0.5"></path>

<circle cx="70" cy="60" fill="black" filter="url(#noiseFilter)" r="25" stroke="white" strokeWidth="0.8"></circle>
<circle cx="70" cy="60" fill="transparent" r="12" stroke="white" stroke-opacity="0.5" strokeWidth="0.5"></circle>

<circle className="group-hover:translate-x-2 transition-transform duration-500" cx="110" cy="60" fill="black" filter="url(#noiseFilter)" r="25" stroke="white" strokeWidth="0.8"></circle>
<circle className="group-hover:translate-x-2 transition-transform duration-500" cx="110" cy="60" fill="transparent" r="12" stroke="white" stroke-opacity="0.5" strokeWidth="0.5"></circle>
</g>
</svg>
</div>
<div className="p-6 relative z-10 bg-[#080808]">
<h3 className="text-base font-medium text-white/90 mb-2">Staff App</h3>
<p className="text-sm text-white/40 leading-relaxed font-light">Gestión de accesos, listas de invitados y comisiones automáticas para RRPP.</p>
</div>
</div>

<div className="group relative bg-[#080808] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="h-48 w-full flex items-center justify-center relative overflow-hidden bg-white/[0.01] border-b border-white/[0.04]">
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent"></div>
<svg className="relative z-10 overflow-visible" height="120" viewbox="0 0 180 120" width="180">
<g className="animate-float-slow">

<rect fill="black" filter="url(#noiseFilter)" height="70" rx="4" stroke="white" strokeWidth="0.8" width="40" x="70" y="30"></rect>

<rect fill="transparent" height="24" rx="1" stroke="white" stroke-opacity="0.5" strokeWidth="0.5" width="24" x="78" y="45"></rect>
<path d="M78 45 L85 45 M78 45 L78 52 M102 69 L102 62 M102 69 L95 69" stroke="white" strokeWidth="1"></path>

<line className="opacity-50 blur-[1px]" stroke="white" strokeWidth="1" x1="65" x2="115" y1="55" y2="55">
<animate attributename="y1" dur="3s" repeatcount="indefinite" values="40;80;40"></animate>
<animate attributename="y2" dur="3s" repeatcount="indefinite" values="40;80;40"></animate>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0;1;0"></animate>
</line>
</g>
</svg>
</div>
<div className="p-6 relative z-10 bg-[#080808]">
<h3 className="text-base font-medium text-white/90 mb-2">Auto-Pedido</h3>
<p className="text-sm text-white/40 leading-relaxed font-light">Web-app para clientes. Pedidos desde la mesa sin descargar aplicaciones.</p>
</div>
</div>

<div className="group relative bg-[#080808] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="h-48 w-full flex items-center justify-center relative overflow-hidden bg-white/[0.01] border-b border-white/[0.04]">
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent"></div>
<svg className="relative z-10 overflow-visible" height="120" viewbox="0 0 180 120" width="180">
<g className="animate-float-reverse">

<path d="M40 90 L140 90" stroke="white" stroke-opacity="0.2" strokeWidth="0.5"></path>
<path d="M40 90 L60 70" stroke="white" stroke-opacity="0.2" strokeWidth="0.5"></path>

<path d="M50 90 L50 60 L70 50 L70 80 L50 90" fill="black" filter="url(#noiseFilter)" stroke="white" strokeWidth="0.6"></path>
<path d="M50 60 L70 50 L90 60 L70 70 Z" fill="transparent" opacity="0.5" stroke="white" strokeWidth="0.4"></path>

<path className="group-hover:translate-y-[-5px] transition-transform duration-500" d="M80 90 L80 40 L100 30 L100 80 L80 90" fill="black" filter="url(#noiseFilter)" stroke="white" strokeWidth="0.6"></path>
<path className="group-hover:translate-y-[-5px] transition-transform duration-500" d="M80 40 L100 30 L120 40 L100 50 Z" fill="transparent" opacity="0.5" stroke="white" strokeWidth="0.4"></path>

<circle className="animate-pulse" cx="120" cy="40" fill="white" r="4">
<animate attributename="cy" dur="2s" repeatcount="indefinite" values="40;35;40"></animate>
</circle>
</g>
</svg>
</div>
<div className="p-6 relative z-10 bg-[#080808]">
<h3 className="text-base font-medium text-white/90 mb-2">Analytics Live</h3>
<p className="text-sm text-white/40 leading-relaxed font-light">Dashboard en tiempo real. Ventas por hora, ticket promedio y arqueo.</p>
</div>
</div>

<div className="group relative bg-[#080808] rounded-2xl border border-white/[0.08] overflow-hidden md:col-span-2 lg:col-span-3 hover:border-cyan-500/30 transition-all duration-500 p-8 flex flex-col md:flex-row items-center gap-10">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.02] via-transparent to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">
<span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></span> Nuevo
                    </div>

<div className="relative w-full md:w-1/3 h-40 flex items-center justify-center">
<svg className="overflow-visible" height="140" viewbox="0 0 200 140" width="200">
<defs>
<lineargradient id="ticket-grad" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="transparent" stop-opacity="0"></stop>
</lineargradient>
</defs>
<g className="animate-float-slow">

<path d="M40 40 L160 40 L160 100 L40 100 Z" fill="black" filter="url(#noiseFilter)" stroke="cyan" stroke-opacity="0.5" strokeWidth="0.8"></path>
<circle cx="40" cy="70" fill="#080808" r="8" stroke="cyan" stroke-opacity="0.5" strokeWidth="0.8"></circle>
<circle cx="160" cy="70" fill="#080808" r="8" stroke="cyan" stroke-opacity="0.5" strokeWidth="0.8"></circle>
<path d="M70 40 L70 100" stroke="cyan" stroke-dasharray="4 4" stroke-opacity="0.3" strokeWidth="0.5"></path>

<rect className="animate-pulse" fill="cyan" fillOpacity="0.3" height="4" rx="2" width="40" x="85" y="55"></rect>
<rect fill="cyan" fillOpacity="0.15" height="4" rx="2" width="25" x="85" y="65"></rect>
</g>
</svg>
</div>
<div className="relative z-10 flex-grow text-center md:text-left">
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-cyan-100 transition-colors">Ticketera Marca Blanca</h3>
<p className="text-sm text-white/40 leading-relaxed font-light max-w-3xl">
                            Venta de entradas directamente en tu propio dominio. Eliminá intermediarios, mantené el control total de tu base de datos y ahorrá significativamente en Service Fees.
                        </p>
<div className="mt-6 flex justify-center md:justify-start">
<button className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors">
                                Explorar Feature <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-200">
<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-0 border border-slate-200 bg-white shadow-2xl rounded-sm overflow-hidden">
<div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-200 relative">
<div className="flex items-center gap-2 mb-8">
<i className="w-4 h-4 text-[#C07916]" data-lucide="cpu"></i>
<span className="text-[10px] font-mono font-medium tracking-widest text-[#C07916] uppercase">Core Operating System</span>
</div>
<h2 className="text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[0.95]">
                        Control Total.<br/>
<span className="text-slate-400">En tiempo real.</span>
</h2>
<p className="text-slate-500 font-light text-lg mb-12 max-w-md leading-relaxed">
                        Sumate a los más de 500 venues que transformaron su operación. Infraestructura de alta frecuencia para entornos críticos.
                    </p>
<div className="space-y-6">
<button className="group w-full text-left focus:outline-none">
<div className="flex items-baseline justify-between border-b border-slate-200 pb-3 mb-2 group-hover:border-[#C07916] transition-colors duration-300">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#C07916] transition-colors">Agendar Demo Técnica</h3>
<i className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#C07916]" data-lucide="arrow-right"></i>
</div>
<p className="text-xs text-slate-400 font-light font-mono uppercase tracking-wide">Sesión de 15 min con arquitecto</p>
</button>
<button className="group w-full text-left focus:outline-none">
<div className="flex items-baseline justify-between border-b border-slate-200 pb-3 mb-2 group-hover:border-[#C07916] transition-colors duration-300">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#C07916] transition-colors">Planes &amp; Precios</h3>
<i className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#C07916]" data-lucide="arrow-right"></i>
</div>
<p className="text-xs text-slate-400 font-light font-mono uppercase tracking-wide">Escalabilidad horizontal</p>
</button>
</div>
</div>
<div className="bg-slate-50/50 relative min-h-[500px] flex flex-col overflow-hidden">
<div className="absolute inset-0 border-l border-slate-200 pointer-events-none"></div>
<div className="absolute top-12 right-12 w-64 h-32 border border-slate-200 bg-white p-6 shadow-sm">
<div className="text-[9px] font-mono text-slate-400 mb-2 uppercase tracking-wider">Node Status</div>
<div className="text-sm font-mono text-slate-900 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                            SYSTEM OPERATIONAL
                        </div>
</div>
<div className="absolute top-1/2 left-12 -translate-y-1/2 w-48 border border-slate-200 bg-white p-6 shadow-sm group cursor-pointer hover:border-[#C07916]/50 transition-colors duration-300">
<div className="flex justify-between items-start mb-4">
<i className="w-4 h-4 text-slate-400" data-lucide="activity"></i>
</div>
<div className="text-3xl font-mono font-medium text-slate-900 tracking-tight">100.00%</div>
<div className="h-0.5 w-full bg-slate-100 mt-4 overflow-hidden">
<div className="h-full bg-[#C07916] w-full animate-pulse"></div>
</div>
</div>
<div className="absolute top-0 bottom-0 left-[50%] border-l border-dashed border-slate-200 pointer-events-none"></div>
<div className="absolute bottom-12 right-12 text-right">
<div className="flex items-center justify-end gap-2 text-[9px] font-mono text-slate-400 uppercase tracking-widest mb-2">
<span className="w-1.5 h-1.5 bg-[#C07916] rounded-full"></span> Graph API
                        </div>
<div className="flex gap-1.5 justify-end">
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
</div>
</div>
<div className="absolute top-1/2 right-4 -translate-y-1/2 rotate-90 origin-right">
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-[0.2em]">Infrastructure</span>
</div>
<div className="absolute top-1/2 left-4 -translate-y-1/2 -rotate-90 origin-left">
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-[0.2em]">Uptime Metric</span>
</div>
</div>
</div>
<div className="mt-16 border-t border-slate-100 pt-10">
<p className="text-[10px] font-semibold tracking-[0.2em] text-slate-400 uppercase text-center mb-10">Confían en Payper</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-lg font-bold font-sans text-slate-900 cursor-default">MANDARINE</span>
<span className="text-lg font-serif italic font-bold text-slate-900 cursor-default">The Roxy</span>
<span className="text-lg font-mono font-bold text-slate-900 cursor-default">CROBAR</span>
<span className="text-lg font-sans font-black tracking-tighter text-slate-900 cursor-default">NICETO</span>
<span className="text-lg font-serif font-bold text-slate-900 cursor-default">VÓRTERIX</span>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] border-t border-white/[0.06] pt-20 pb-10 relative overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-t from-[#C07916]/5 to-transparent pointer-events-none blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
<div>
<div className="flex items-center gap-2.5 mb-6">
<div className="w-3.5 h-3.5 bg-[#C07916] rounded-[2px] shadow-[0_0_10px_#C07916]"></div>
<span className="text-white font-medium tracking-tight text-sm">PAYPER</span>
</div>
</div>
<div>
<h4 className="text-white font-medium text-xs mb-5">Producto</h4>
<ul className="space-y-3 text-xs text-white/30">
<li><a className="hover:text-white transition-colors" href="#">Cashless</a></li>
<li><a className="hover:text-white transition-colors" href="#">Punto de Venta</a></li>
<li><a className="hover:text-white transition-colors" href="#">Inventario</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hardware</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-xs mb-5">Compañía</h4>
<ul className="space-y-3 text-xs text-white/30">
<li><a className="hover:text-white transition-colors" href="#">Sobre Nosotros</a></li>
<li><a className="hover:text-white transition-colors" href="#">Clientes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carreras</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-xs mb-5">Legal</h4>
<ul className="space-y-3 text-xs text-white/30">
<li><a className="hover:text-white transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Términos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Seguridad</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.06] text-[10px] text-white/20">
<p>© 2024 Payper Systems Inc. Todos los derechos reservados.</p>
<div className="flex gap-6 mt-6 md:mt-0">
<i className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" data-lucide="twitter"></i>
<i className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" data-lucide="instagram"></i>
<i className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
