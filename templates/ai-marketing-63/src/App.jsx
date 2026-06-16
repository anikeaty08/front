import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
925: '#121212',
950: '#0a0a0a',
},
brand: {
500: '#6366f1',
600: '#4f46e5',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 8s ease-in-out infinite',
'beam': 'beam 2s linear infinite',
'scroll': 'scroll 20s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
beam: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' }
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Simple smooth scroll script for infinite ticker visual only (CSS handles animation usually, this is backup or enhancement logic if needed, but keeping it minimal as requested)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full pointer-events-none z-[-1]">
<div className="bg-dots w-full h-full"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)]">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white">DATACIVIS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#product">Producto</a>
<a className="hover:text-white transition-colors" href="#solutions">Soluciones</a>
<a className="hover:text-white transition-colors" href="#integration">Integración</a>
<a className="hover:text-white transition-colors" href="#pricing">Precios</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Login</a>
<a className="group h-8 px-4 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#">
<span>Beta Access</span>
<i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="relative pt-36 pb-20 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] hero-glow blur-[120px] -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/20 mb-10 backdrop-blur-sm shadow-[0_0_15px_-5px_rgba(99,102,241,0.2)]">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400"></span>
</span>
<span className="text-[11px] text-indigo-200 font-medium tracking-wide uppercase">Lisa 2.0 Engine Live</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.92] mb-8 text-white text-glow text-balance">
                Marketing impulsado<br/>
                por <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">inteligencia pura.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light text-balance antialiased">
                Orquestación de campañas, diseño de creativos y gestión de clientes en tiempo real. Todo controlado mediante voz y lenguaje natural.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
<button className="h-11 px-8 rounded-lg bg-white text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] flex items-center gap-2">
<i className="w-4 h-4" data-lucide="mic"></i>
<span>Hablar con LISA</span>
</button>
<button className="h-11 px-8 rounded-lg border border-white/10 text-neutral-300 text-sm font-medium hover:bg-white/5 transition-all bg-neutral-900/50 backdrop-blur-sm hover:border-white/20">
                    Ver Documentación
                </button>
</div>

<div className="relative max-w-6xl mx-auto perspective-1000 group">

<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="relative rounded-xl border border-white/10 bg-[#080808] overflow-hidden shadow-2xl flex h-[600px] md:h-[700px] text-left ring-1 ring-white/5">

<div className="w-64 border-r border-white/5 bg-[#0A0A0A] hidden md:flex flex-col">
<div className="p-4 border-b border-white/5 flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded flex items-center justify-center shadow-inner border border-white/10">
<i className="w-3 h-3 text-white" data-lucide="sparkles"></i>
</div>
<span className="text-xs font-semibold text-white tracking-tight">LISA OS</span>
</div>
<div className="p-3 space-y-1">
<div className="text-[10px] text-neutral-600 font-semibold uppercase tracking-wider px-2 py-2">Workspace</div>
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-md bg-white/5 text-neutral-200 text-xs font-medium border border-white/5 shadow-sm">
<i className="w-4 h-4 text-indigo-400" data-lucide="message-square"></i>
                                Agente Activo
                            </button>
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 text-neutral-500 hover:text-neutral-300 text-xs font-medium transition-colors group/nav">
<i className="w-4 h-4 group-hover/nav:text-neutral-300 transition-colors" data-lucide="layout-grid"></i>
                                Campañas
                            </button>
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 text-neutral-500 hover:text-neutral-300 text-xs font-medium transition-colors group/nav">
<i className="w-4 h-4 group-hover/nav:text-neutral-300 transition-colors" data-lucide="users"></i>
                                Audiencias
                            </button>
</div>
<div className="mt-auto p-4 border-t border-white/5 bg-neutral-900/30">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 overflow-hidden relative">
<img alt="User" className="w-full h-full opacity-80 scale-110" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium">Admin User</span>
<span className="text-[10px] text-neutral-500">Pro Plan</span>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#050505] relative">
<div className="noise-overlay"></div>

<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 z-10 bg-[#050505]/80 backdrop-blur-md">
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Contexto:</span>
<span className="text-xs text-white font-medium bg-white/5 px-2 py-0.5 rounded border border-white/5">Q4 Retail Strategy</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-emerald-400">Online</span>
</div>
</div>
</div>

<div className="flex-1 p-8 overflow-y-auto space-y-8 z-10 scrollbar-hide">

<div className="flex justify-end">
<div className="max-w-[400px]">
<div className="bg-neutral-800 text-white text-sm p-4 rounded-2xl rounded-tr-sm border border-white/10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)]">
                                        Analizá el rendimiento de la semana pasada y proponé una campaña para reactivar el segmento "Carrito Abandonado" con un presupuesto de $500.
                                    </div>
<div className="text-[10px] text-neutral-600 mt-2 text-right font-medium">Hace 2 min · Vía Voz</div>
</div>
</div>

<div className="flex items-start gap-4 max-w-[90%]">
<div className="w-10 h-10 rounded-full bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)] relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/20 blur-md"></div>
<i className="w-5 h-5 text-indigo-300 relative z-10" data-lucide="sparkles"></i>
</div>
<div className="flex-1 space-y-4">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-white">LISA</span>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium tracking-wide">THINKING</span>
</div>
<div className="text-sm text-neutral-300 leading-relaxed font-light">
                                        He analizado los datos. La semana pasada tuvimos una tasa de abandono del <span className="text-white font-medium">65%</span>. Aquí tienes la estrategia generada optimizada para conversión:
                                    </div>

<div className="rounded-xl border border-white/10 bg-[#0C0C0C] overflow-hidden group/card transition-all hover:border-white/20 w-full md:w-[500px] shadow-2xl">

<div className="h-9 bg-white/5 border-b border-white/5 flex items-center justify-between px-3">
<span className="text-[10px] font-medium text-neutral-400 flex items-center gap-1.5">
<i className="w-3 h-3 text-indigo-400" data-lucide="layers"></i>
                                                Campaign Draft v1.0
                                            </span>
<div className="flex gap-2">
<button className="w-2 h-2 rounded-full bg-red-500/20 hover:bg-red-500 transition-colors"></button>
<button className="w-2 h-2 rounded-full bg-yellow-500/20 hover:bg-yellow-500 transition-colors"></button>
<button className="w-2 h-2 rounded-full bg-green-500/20 hover:bg-green-500 transition-colors"></button>
</div>
</div>
<div className="p-4 grid grid-cols-2 gap-4 relative">

<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl pointer-events-none"></div>

<div className="col-span-2 flex gap-3 mb-1">
<div className="flex-1 p-3 rounded bg-neutral-900/50 border border-white/5">
<div className="text-[9px] text-neutral-500 uppercase tracking-wider font-semibold">Target</div>
<div className="text-xs text-white mt-1 font-medium">Checkout &gt; 48h</div>
</div>
<div className="flex-1 p-3 rounded bg-neutral-900/50 border border-white/5">
<div className="text-[9px] text-neutral-500 uppercase tracking-wider font-semibold">Canales</div>
<div className="text-xs text-white mt-1 flex gap-2">
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="instagram"></i>
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="mail"></i>
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="message-circle"></i>
</div>
</div>
</div>

<div className="col-span-1 aspect-[4/5] bg-neutral-900 rounded border border-white/5 relative overflow-hidden group/ad">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

<div className="w-full h-full bg-[#111] flex items-center justify-center overflow-hidden">
<div className="w-20 h-20 rounded-full bg-indigo-600/30 blur-2xl group-hover/ad:bg-indigo-500/40 transition-colors duration-500"></div>
</div>
<div className="absolute bottom-3 left-3 z-20">
<div className="text-[9px] bg-white/90 text-black px-1.5 py-0.5 rounded w-fit mb-1 font-semibold">Sponsored</div>
<div className="text-[10px] text-white/90 leading-tight">Tu estilo te espera.<br/>10% OFF hoy.</div>
</div>
</div>

<div className="col-span-1 space-y-2">
<div className="p-3 rounded bg-neutral-900/50 border border-white/5 h-full flex flex-col justify-between">
<div>
<div className="text-[9px] text-neutral-500 mb-2 uppercase tracking-wider font-semibold">WhatsApp Script</div>
<div className="text-[10px] text-neutral-300 italic leading-relaxed pl-2 border-l border-indigo-500/30">
                                                            "Hola {nombre}, notamos que dejaste tus items. ¿Te ayudamos a finalizar?"
                                                        </div>
</div>
<div className="pt-2">
<button className="w-full py-1.5 text-[10px] bg-white/5 text-neutral-300 border border-white/10 rounded font-medium hover:bg-white/10 hover:text-white transition-colors">Ver variantes</button>
</div>
</div>
</div>
</div>
</div>
<div className="flex gap-3 pt-1">
<button className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-[0_0_15px_-5px_rgba(99,102,241,0.5)] transition-all">
                                            Lanzar Campaña
                                        </button>
<button className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/5 text-neutral-300 text-xs font-medium transition-colors">
                                            Ajustar Presupuesto
                                        </button>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-[#050505] z-20">
<div className="relative">
<input className="w-full bg-[#0F0F0F] text-sm text-white rounded-lg border border-white/10 pl-4 pr-12 py-3 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all placeholder:text-neutral-600 font-light" placeholder="Escribe un comando o presiona M para hablar..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-neutral-800 border border-white/5 cursor-pointer hover:bg-neutral-700 transition-colors group/mic">
<i className="w-4 h-4 text-neutral-400 group-hover/mic:text-white transition-colors" data-lucide="mic"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="product">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 text-balance">Sistema Operativo para Growth</h2>
<p className="text-neutral-400 font-light text-lg">Reemplazamos fragmentación con inteligencia unificada.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-5 h-auto md:h-[850px]">

<div className="md:col-span-2 md:row-span-2 bento-card rounded-2xl p-8 flex flex-col group">

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity"></div>
<div className="relative z-10 flex-1">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/10 flex items-center justify-center mb-6 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
<i className="w-6 h-6 text-indigo-400" data-lucide="mic-2"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Voice-to-Action Engine</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8 font-light">
                        LISA entiende tus objetivos de negocio hablados y los traduce en configuraciones técnicas precisas en Meta, Google y CRMs sin que toques un solo botón.
                    </p>

<div className="mt-auto w-full bg-[#0A0A0A] rounded-lg border border-white/5 p-4 space-y-3 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/50"></div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
<div className="h-1.5 w-24 bg-neutral-800 rounded-full"></div>
<div className="h-1.5 w-12 bg-neutral-800 rounded-full"></div>
</div>
<div className="flex items-center gap-3 opacity-40">
<div className="w-2 h-2 bg-neutral-700 rounded-full"></div>
<div className="h-1.5 w-32 bg-neutral-700 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bento-card rounded-2xl p-6 relative group">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-900/40 blur-[50px] rounded-full group-hover:bg-teal-800/50 transition-all"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<i className="w-6 h-6 text-teal-300 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" data-lucide="share-2"></i>
<h3 className="text-lg font-medium text-white mb-1">Omnicanalidad</h3>
<p className="text-xs text-neutral-500">Instagram, WhatsApp, SMS. Una mente central.</p>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bento-card rounded-2xl p-6 relative group">
<div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<i className="w-6 h-6 text-emerald-400" data-lucide="bar-chart-2"></i>
<span className="text-[10px] text-emerald-500/80 font-mono">+24%</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">Live Analytics</h3>
<p className="text-xs text-neutral-500 mb-4">Tableros dinámicos.</p>

<div className="mt-auto flex items-end gap-1 h-8 w-full">
<div className="w-1/5 bg-neutral-800 rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-700 delay-75"></div>
<div className="w-1/5 bg-neutral-800 rounded-t-sm h-[70%] group-hover:h-[90%] transition-all duration-700 delay-100"></div>
<div className="w-1/5 bg-emerald-900/40 rounded-t-sm h-[50%] group-hover:h-[75%] transition-all duration-700 delay-150"></div>
<div className="w-1/5 bg-emerald-500 rounded-t-sm h-[80%] group-hover:h-[100%] transition-all duration-700 delay-200 shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
<div className="w-1/5 bg-neutral-800 rounded-t-sm h-[60%] group-hover:h-[50%] transition-all duration-700 delay-300"></div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 bento-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 group">
<div className="absolute -left-10 bottom-0 w-40 h-40 bg-pink-900/20 blur-[60px] rounded-full group-hover:bg-pink-800/30 transition-all"></div>
<div className="flex-1 relative z-10">
<div className="flex items-center gap-3 mb-3">
<div className="p-1.5 rounded bg-pink-500/10 border border-pink-500/20">
<i className="w-4 h-4 text-pink-300" data-lucide="palette"></i>
</div>
<h3 className="text-lg font-medium text-white">Estudio Creativo I.A.</h3>
</div>
<p className="text-sm text-neutral-400 font-light">Generación automática de banners, videos cortos y copies persuasivos optimizados para conversión.</p>
</div>

<div className="flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity relative z-10">
<div className="w-14 h-20 bg-neutral-900 rounded border border-white/10 overflow-hidden transform group-hover:-rotate-6 transition-transform duration-500">
<div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black"></div>
</div>
<div className="w-14 h-20 bg-neutral-900 rounded border border-white/10 overflow-hidden transform group-hover:translate-y-[-5px] transition-transform duration-500 delay-75">
<div className="w-full h-full bg-gradient-to-br from-pink-900/20 to-black"></div>
</div>
<div className="w-14 h-20 bg-neutral-900 rounded border border-white/10 overflow-hidden transform group-hover:rotate-6 transition-transform duration-500 delay-150">
<div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black"></div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 bento-card rounded-2xl p-6 group">
<div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full">
<i className="w-6 h-6 text-blue-400 mb-4" data-lucide="database"></i>
<h3 className="text-lg font-medium text-white mb-2">Sync Profunda</h3>
<p className="text-xs text-neutral-500 mb-6">Conecta tu inventario. LISA pausa anuncios si no hay stock.</p>

<div className="mt-auto border-t border-white/5 pt-4 space-y-2">
<div className="flex items-center justify-between text-[9px] text-neutral-500 font-mono bg-black/20 p-1.5 rounded border border-white/5">
<span>POST /api/stock</span>
<span className="text-green-500">200 OK</span>
</div>
<div className="flex items-center justify-between text-[9px] text-neutral-500 font-mono bg-black/20 p-1.5 rounded border border-white/5">
<span>GET /crm/leads</span>
<span className="text-blue-500">SYNCING</span>
</div>
<div className="flex items-center justify-between text-[9px] text-neutral-500 font-mono bg-black/20 p-1.5 rounded border border-white/5 opacity-50">
<span>PUT /ads/status</span>
<span className="text-neutral-500">...</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bento-card rounded-2xl p-6 flex flex-col justify-center group">
<i className="w-6 h-6 text-neutral-200 mb-3 group-hover:text-white transition-colors" data-lucide="shield-check"></i>
<h3 className="text-lg font-medium text-white mb-1">Enterprise Grade</h3>
<p className="text-xs text-neutral-500">Datos encriptados. Compliance GDPR.</p>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-950/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
<span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] whitespace-nowrap">Trusted By</span>
<div className="w-full overflow-hidden relative group">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030303] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030303] to-transparent z-10"></div>
<div className="flex gap-20 animate-infinite-scroll whitespace-nowrap items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
<span className="text-xl font-bold text-white font-sans tracking-tight">MERCADOLIBRE</span>
<span className="text-xl font-bold text-white font-serif">VOGUE</span>
<span className="text-xl font-bold text-white font-sans italic">Rappi</span>
<span className="text-xl font-bold text-white font-mono">Globant</span>
<span className="text-xl font-bold text-white font-sans tracking-tight">NU BANK</span>
<span className="text-xl font-bold text-white font-serif">Toyota</span>

<span className="text-xl font-bold text-white font-sans tracking-tight">MERCADOLIBRE</span>
<span className="text-xl font-bold text-white font-serif">VOGUE</span>
<span className="text-xl font-bold text-white font-sans italic">Rappi</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-800/20 blur-[100px] -z-10 rounded-full"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">Acceso Temprano</h2>
<p className="text-neutral-400 mb-12 font-light">Estamos incorporando equipos seleccionados para la beta cerrada.</p>
<div className="p-[1px] rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-transparent inline-block">
<div className="bg-[#080808] rounded-2xl p-10 sm:p-14 border border-white/5 relative overflow-hidden">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none"></div>
<h3 className="text-2xl font-semibold text-white mb-2">Datacivis Pro</h3>
<div className="text-5xl font-bold text-white mb-8 tracking-tighter mt-4">$299<span className="text-lg text-neutral-500 font-normal tracking-normal ml-2">/mes</span></div>
<div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 text-left mb-10 text-sm text-neutral-300">
<div className="flex gap-3 items-center"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> 5 Agentes de IA activos</div>
<div className="flex gap-3 items-center"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Meta + WhatsApp API</div>
<div className="flex gap-3 items-center"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Creativos Ilimitados</div>
<div className="flex gap-3 items-center"><i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="check"></i> Soporte Prioritario</div>
</div>
<button className="w-full sm:w-auto px-10 py-3.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
                        Solicitar Invitación
                    </button>
<p className="text-[11px] text-neutral-600 mt-6 font-medium tracking-wide uppercase">Limited Spots Available</p>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<div className="w-3 h-3 bg-neutral-700 rounded-sm"></div>
<span className="text-[10px] font-bold text-neutral-300 tracking-widest uppercase">DATACIVIS SYSTEM v1.0</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Términos</a>
<a className="hover:text-white transition-colors" href="#">Estado del Sistema</a>
</div>
<div className="flex gap-5">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
</footer>


    </>
  );
}
