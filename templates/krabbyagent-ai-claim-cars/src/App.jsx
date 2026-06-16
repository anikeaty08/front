import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Tab Logic
        function switchTab(tabId) {
            // Content
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });
            document.getElementById('content-' + tabId).classList.add('active');

            // Buttons styles
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-neutral-50', 'border-neutral-200');
                btn.classList.add('border-transparent', 'hover:bg-neutral-50');
                
                // Icon colors logic for active state
                const iconContainer = btn.querySelector('div > div');
                iconContainer.classList.remove('text-blue-600', 'border-neutral-200');
                iconContainer.classList.add('text-neutral-400', 'border-neutral-100');
            });

            const activeBtn = document.getElementById('tab-' + tabId);
            activeBtn.classList.remove('border-transparent', 'hover:bg-neutral-50');
            activeBtn.classList.add('bg-neutral-50', 'border-neutral-200');
            
            const activeIconContainer = activeBtn.querySelector('div > div');
            activeIconContainer.classList.remove('text-neutral-400');
            activeIconContainer.classList.add('text-blue-600');
        }

        // Observer for Reveal on Scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2.5 group" href="/">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-neutral-500/10">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-lg text-neutral-900">ClaimFlow AI</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-500 font-medium">
<a className="hover:text-neutral-900 transition-colors" href="#features">Funcionalidades</a>
<a className="hover:text-neutral-900 transition-colors" href="#demo">Cómo funciona</a>
<a className="hover:text-neutral-900 transition-colors" href="#integrations">Integraciones</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-all text-white bg-neutral-900 rounded-full py-2 px-4 shadow-lg shadow-neutral-500/10 hover:shadow-neutral-500/20" href="#contact">
<span className="font-medium">Solicitar Demo</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</nav>

<button className="md:hidden text-neutral-500 hover:text-neutral-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="pt-16">

<section className="relative pt-16 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 border border-blue-100 text-xs font-medium text-blue-700 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                            Nuevo: Análisis de daños por visión computarizada
                        </div>
<h1 className="text-5xl lg:text-[64px] leading-[1.05] font-medium tracking-tight text-neutral-900 mb-6">
                            Gestión de siniestros <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">en tiempo real.</span>
</h1>
<p className="text-lg text-neutral-500 mb-8 leading-relaxed max-w-lg font-light">
                            Transforma el momento más estresante del conductor en una experiencia fluida. Nuestra IA gestiona el reporte, analiza los daños visuales y coordina la grúa en segundos.
                        </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="shiny-cta flex items-center gap-2" href="#demo">
<span>Ver Demo Interactiva</span>
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
</a>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full ring-2 ring-white bg-neutral-100 flex items-center justify-center text-xs text-neutral-600">A</div>
<div className="w-8 h-8 rounded-full ring-2 ring-white bg-neutral-100 flex items-center justify-center text-xs text-neutral-600">M</div>
<div className="w-8 h-8 rounded-full ring-2 ring-white bg-neutral-100 flex items-center justify-center text-xs text-neutral-600">S</div>
</div>
<span className="text-sm text-neutral-500 font-medium">+20 Aseguradoras</span>
</div>
</div>
</div>

<div className="relative lg:h-[700px] h-[600px] w-full flex items-center justify-center lg:justify-end">
<div className="relative w-[320px] h-[650px] bg-neutral-950 rounded-[40px] shadow-2xl border-[6px] border-neutral-800 overflow-hidden">

<div className="absolute inset-0 opacity-40">
<img alt="Map" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 via-neutral-900/80 to-neutral-900"></div>

<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black w-[100px] h-[28px] rounded-full z-20"></div>

<div className="relative z-10 h-full flex flex-col pt-16 pb-6 px-4">
<div className="flex-1 space-y-4 overflow-hidden flex flex-col justify-end pb-4">

<div className="flex gap-2 animate-fade-in-up delay-100">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div className="bg-neutral-800 border border-white/5 text-neutral-200 p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[85%]">
                                            Hola Juan. Detectamos una desaceleración brusca en tu vehículo. ¿Estás bien?
                                        </div>
</div>

<div className="flex justify-end animate-fade-in-up delay-500 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[80%] shadow-lg shadow-blue-900/20">
                                            Sí, estoy bien. Un coche me golpeó por atrás en el semáforo.
                                        </div>
</div>

<div className="flex gap-2 animate-fade-in-up delay-1000 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div className="bg-neutral-800 border border-white/5 text-neutral-200 p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[85%]">
                                            Entendido. ¿Puedes enviar una foto del daño trasero para agilizar el reclamo?
                                        </div>
</div>

<div className="animate-fade-in-up delay-2000 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="ml-10 bg-neutral-800/50 border border-dashed border-neutral-700 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-neutral-800 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-neutral-300 text-xs font-medium">Subir fotografía</p>
<p className="text-[10px] text-neutral-500">Toque para capturar</p>
</div>
</div>
</div>
</div>

<div className="h-12 bg-neutral-800/80 backdrop-blur rounded-full flex items-center px-4 gap-3 border border-white/5">
<iconify-icon className="text-neutral-400" icon="solar:add-circle-linear" width="20"></iconify-icon>
<div className="h-4 w-[1px] bg-neutral-600"></div>
<span className="text-neutral-500 text-xs">Escribe un mensaje...</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden" id="features">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
<span className="text-blue-500 font-medium tracking-wide uppercase text-xs mb-3 block">Eficiencia Operativa</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Menos fricción,<br/>
<span className="text-neutral-500">resolución más rápida.</span>
</h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Nuestra IA reduce el tiempo de ciclo de un siniestro en un 60%, desde el primer reporte hasta la autorización de reparación.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group reveal-on-scroll">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Visión Computarizada</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-light">
                            Analiza fotos del accidente al instante para estimar costos de reparación y detectar daños ocultos con un 94% de precisión.
                        </p>
</div>

<div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Detección de Fraude</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-light">
                            Cruza metadatos de ubicación, clima y telemetría para validar la autenticidad del siniestro en tiempo real.
                        </p>
</div>

<div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Disponibilidad 24/7</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-light">
                            Los accidentes no tienen horario. Tu asistente AI escala infinitamente para atender picos de demanda durante tormentas o festivos.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 lg:px-8" id="demo">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<span className="text-blue-600 font-medium tracking-wide uppercase text-xs">Experiencia del Usuario</span>
<h2 className="text-4xl font-medium tracking-tight text-neutral-900 mt-2 mb-6">
                        Asistencia paso a paso
                    </h2>
<p className="text-neutral-500 mb-10 font-light text-lg">
                        Vea cómo el asistente guía al asegurado desde el impacto hasta la solución.
                    </p>
<div className="space-y-3">
<button className="tab-btn w-full text-left p-5 rounded-2xl bg-neutral-50 border border-neutral-200 transition-all duration-300 group" id="tab-report" onclick="switchTab('report')">
<div className="flex items-center gap-4">
<div className="p-2 bg-white rounded-lg border border-neutral-100 text-blue-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900 text-sm">1. Reporte Inteligente</h4>
<p className="text-xs text-neutral-500 mt-0.5">Triaje médico y validación de póliza.</p>
</div>
</div>
</button>
<button className="tab-btn w-full text-left p-5 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all duration-300 group" id="tab-assess" onclick="switchTab('assess')">
<div className="flex items-center gap-4">
<div className="p-2 bg-white rounded-lg border border-neutral-100 text-neutral-400 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900 text-sm">2. Avalúo Visual</h4>
<p className="text-xs text-neutral-500 mt-0.5">Estimación de daños por fotos.</p>
</div>
</div>
</button>
<button className="tab-btn w-full text-left p-5 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all duration-300 group" id="tab-dispatch" onclick="switchTab('dispatch')">
<div className="flex items-center gap-4">
<div className="p-2 bg-white rounded-lg border border-neutral-100 text-neutral-400 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:towing-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900 text-sm">3. Despacho de Servicios</h4>
<p className="text-xs text-neutral-500 mt-0.5">Grúa y taller asignados automáticamente.</p>
</div>
</div>
</button>
</div>
</div>

<div className="reveal-on-scroll">
<div className="bg-neutral-900 rounded-[32px] p-8 min-h-[440px] relative overflow-hidden shadow-2xl flex flex-col justify-center">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none"></div>

<div className="tab-content active space-y-6 relative z-10" id="content-report">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs text-neutral-400 font-medium tracking-widest uppercase">Llamada en curso</span>
</div>
<div className="space-y-4 font-mono text-sm leading-relaxed">
<div className="flex gap-4">
<span className="text-blue-400 font-semibold shrink-0 w-12">AI:</span>
<span className="text-neutral-300">"Hola María. Veo que estás en Av. Reforma. ¿Hay heridos en el vehículo?"</span>
</div>
<div className="flex gap-4">
<span className="text-neutral-500 font-semibold shrink-0 w-12">User:</span>
<span className="text-white">"No, solo daños materiales. El otro conductor también está bien."</span>
</div>
<div className="flex gap-4">
<span className="text-blue-400 font-semibold shrink-0 w-12">AI:</span>
<span className="text-neutral-300">"Excelente. Tu póliza #9928 está activa. No muevas el auto, inicio el protocolo de asistencia."</span>
</div>
</div>
<div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
<span className="text-neutral-400 text-xs">Tiempo de respuesta</span>
<span className="text-white font-medium text-sm">0.8 segundos</span>
</div>
</div>

<div className="tab-content space-y-6 relative z-10" id="content-assess">
<div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-800 border border-white/10">
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-neutral-700 w-24 h-24" icon="solar:car-linear" width="64"></iconify-icon>
</div>

<div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-red-500/70 rounded-lg">
<div className="absolute -top-6 left-0 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-medium">
                                        Parachoques Trasero (Severo)
                                    </div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-neutral-400">
<span>Estimación Preliminar</span>
<span>Confianza: 98%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[98%] bg-gradient-to-r from-blue-500 to-indigo-500"></div>
</div>
</div>
</div>

<div className="tab-content space-y-6 relative z-10" id="content-dispatch">
<div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
<div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Servicio Asignado</h4>
<p className="text-green-400 text-xs mt-0.5">Grúa en camino (12 min)</p>
</div>
</div>
<div className="space-y-3 pt-2">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:map-point-linear"></iconify-icon>
<span>Destino: Taller Certificado BMW</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:user-linear"></iconify-icon>
<span>Operador: Carlos Ruiz (Placa 455-X)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-neutral-100 bg-neutral-50/50 overflow-hidden">
<p className="text-center text-xs font-medium text-neutral-400 uppercase tracking-widest mb-8">Confían en nuestra tecnología</p>
<div className="relative flex w-full overflow-hidden">
<div className="animate-scroll whitespace-nowrap flex gap-12 items-center min-w-full">

<span className="text-xl font-semibold text-neutral-300 font-geist">Vanguard Ins.</span>
<span className="text-xl font-semibold text-neutral-300 font-geist">AutoShield</span>
<span className="text-xl font-semibold text-neutral-300 font-geist">GlobalCover</span>
<span className="text-xl font-semibold text-neutral-300 font-geist">PrimeFleet</span>
<span className="text-xl font-semibold text-neutral-300 font-geist">SafeDrive</span>
<span className="text-xl font-semibold text-neutral-300 font-geist">UrbanM</span>

<span className="text-xl font-semibold text-neutral-300 font-geist">Vanguard Ins.</span>
<span className="text-xl font-semibold text-neutral-300 font-geist">AutoShield</span>
<span className="text-xl font-semibold text-neutral-300 font-geist">GlobalCover</span>
<span className="text-xl font-semibold text-neutral-300 font-geist">PrimeFleet</span>
<span className="text-xl font-semibold text-neutral-300 font-geist">SafeDrive</span>
<span className="text-xl font-semibold text-neutral-300 font-geist">UrbanM</span>
</div>
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50/50 to-transparent"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50/50 to-transparent"></div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-xl mx-auto px-6 text-center">
<div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">¿Listo para modernizar sus siniestros?</h2>
<p className="text-neutral-500 mb-8 font-light">
                    Agende una demostración personalizada y descubra cómo reducir sus costos operativos en un 35%.
                </p>
<form className="max-w-sm mx-auto space-y-3 text-left">
<div>
<label className="sr-only">Email corporativo</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="w-full h-12 bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-neutral-400" placeholder="nombre@empresa.com" type="email"/>
</div>
</div>
<button className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2" type="button">
<span>Solicitar Acceso</span>
</button>
<p className="text-center text-[11px] text-neutral-400">Sin compromiso. Datos protegidos.</p>
</form>
</div>
</section>
</main>

<footer className="bg-neutral-50 border-t border-neutral-200 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-300 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-warning-linear" width="14"></iconify-icon>
</div>
<span className="font-medium text-neutral-900">ClaimFlow AI</span>
</div>
<div className="text-sm text-neutral-400">
                © 2025 ClaimFlow AI. Todos los derechos reservados.
            </div>
</div>
</footer>


    </>
  );
}
