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
emerald: {
450: '#10b981',
950: '#022c22',
},
neutral: {
850: '#1f1f1f',
950: '#0a0a0a',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'blob': 'blob 10s infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'fade-in': 'fadeIn 1s ease-out forwards',
'scanline': 'scanline 8s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' }
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' }
},
scanline: {
'0%': { top: '-100%' },
'100%': { top: '100%' }
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const textElements = document.querySelectorAll('.scrolly-text');

            // 1. Preparar el texto: dividir en palabras y envolver en spans
            textElements.forEach(elem => {
                const words = elem.innerHTML.trim().split(/\s+/); // Split por espacios
                elem.innerHTML = ''; // Limpiar
                
                words.forEach(word => {
                    const span = document.createElement('span');
                    span.innerHTML = word + '&nbsp;'; // Agregar espacio html
                    span.className = 'scrolly-word';
                    elem.appendChild(span);
                });
            });

            // 2. Función de actualización de scroll
            const updateScroll = () => {
                const spans = document.querySelectorAll('.scrolly-word');
                const triggerBottom = window.innerHeight * 0.8; // Se activa al 80% de la pantalla hacia abajo
                const triggerTop = window.innerHeight * 0.2;    // Opcional: para que no se active muy arriba

                spans.forEach(span => {
                    const box = span.getBoundingClientRect();
                    
                    // Lógica simple: Si la palabra está en la zona "activa" de la pantalla
                    if (box.top < triggerBottom) {
                        span.classList.add('active');
                    } else {
                        span.classList.remove('active');
                    }
                });
            };

            // 3. Listeners optimizados
            window.addEventListener('scroll', updateScroll);
            window.addEventListener('resize', updateScroll);
            updateScroll(); // Ejecutar al inicio
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[20%] w-[800px] h-[600px] bg-neutral-800/20 rounded-full blur-[120px] mix-blend-screen opacity-20 animate-blob"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] mix-blend-screen opacity-20 animate-pulse-slow"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 opacity-60"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-sm font-semibold tracking-tight text-white uppercase">Alpha<span className="text-neutral-500">Protocol</span></span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-500">
<a className="hover:text-white transition-colors" href="#story">La Historia</a>
<a className="hover:text-white transition-colors" href="#methodology">Metodología</a>
<a className="hover:text-white transition-colors" href="#features">Stack</a>
</div>
<a className="text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/5 text-white px-4 py-1.5 rounded transition-all" href="#cta">
                Prueba 1 Mes Gratis
            </a>
</div>
</nav>

<section className="relative z-10 pt-32 pb-24">
<div className="max-w-4xl mx-auto px-6 text-center">

<div className="opacity-0 animate-fade-in-up inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
<span className="text-[10px] font-mono text-emerald-400">$20,000</span>
<iconify-icon className="text-neutral-500 text-[10px]" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-[10px] font-mono text-white font-semibold">$2,000,000+</span>
<span className="w-px h-3 bg-white/10 mx-1"></span>
<span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Verificado</span>
</div>
<h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Top 20 Mundial.<br/>
<span className="text-neutral-500">14 Años de Historia.</span>
</h1>
<div className="opacity-0 animate-fade-in-up delay-200 flex flex-col items-center justify-center gap-4 mb-10">
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
                    Nombrado uno de los <span className="text-white font-medium">Top 20 Traders del Mundo</span> por <span className="text-white">Binance</span> y <span className="text-white">TradingView</span>. 
                    He convertido $20k en más de $2M utilizando rigor matemático, no suerte. Esta es la automatización de esa década de experiencia.
                </p>

<div className="flex flex-wrap justify-center gap-3 mt-2">
<div className="flex items-center gap-2 px-3 py-1 rounded border border-yellow-500/20 bg-yellow-500/5">
<iconify-icon className="text-yellow-500 text-xs" icon="solar:cup-star-linear"></iconify-icon>
<span className="text-[10px] font-medium text-yellow-500/90 uppercase tracking-wide">Binance Top Trader</span>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded border border-blue-500/20 bg-blue-500/5">
<iconify-icon className="text-blue-500 text-xs" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-[10px] font-medium text-blue-500/90 uppercase tracking-wide">TradingView Elite</span>
</div>
</div>
</div>
<div className="opacity-0 animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-10 px-6 flex items-center justify-center rounded bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors w-full sm:w-auto" href="#cta">
                    Probar 1 Mes Gratis
                </a>
<div className="flex items-center gap-3 text-xs text-neutral-500">
<span className="flex items-center gap-1"><iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon> Topstep Ready</span>
<span className="w-px h-3 bg-white/10"></span>
<span className="flex items-center gap-1"><iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon> Apex Approved</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#050505] relative overflow-hidden" id="story">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

<div className="relative z-10 pt-4">
<h2 className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-6">El Contexto</h2>
<div className="space-y-6 text-xl md:text-2xl leading-relaxed font-light scrolly-container">
<p className="scrolly-text">
                        Llevo 14 años en esto. He visto ciclos alcistas, crash repentinos y la evolución del HFT. Durante la primera década, mi vida fue un ciclo constante de euforia y desesperación.
                    </p>
<p className="scrolly-text">
                        Pasaba 12 horas frente a las pantallas. "Horas basura", le llaman. Operaba por aburrimiento, por venganza o por miedo a perderme el movimiento. El resultado siempre era el mismo: semanas de ganancias consistentes borradas en una sola tarde de falta de disciplina.
                    </p>
<p className="scrolly-text">
                        Perdí cuentas fondeadas no por falta de conocimiento técnico, sino por fatiga emocional. Sabía leer el mercado, pero no sabía controlarme a mí mismo.
                    </p>
<p className="scrolly-text text-white/90 italic border-l-2 border-emerald-500 pl-4 py-2 my-8">
                        "La consistencia no se trata de predecir el futuro, se trata de ejecutar el presente sin emociones."
                    </p>
<p className="scrolly-text">
                        Decidí dejar de buscar la "estrategia mágica" y empecé a codificar mi experiencia. No quería una IA que adivinara; quería un supervisor que ejecutara mis reglas con la frialdad de una máquina.
                    </p>
</div>
</div>

<div className="relative md:sticky md:top-32">

<div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full"></div>

<div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="h-8 bg-[#111] border-b border-white/5 flex items-center px-4 justify-between">
<div className="text-[10px] text-neutral-500 font-mono">SYS_MONITOR // PRODUCCIÓN</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>
<div className="p-4 font-mono text-[10px] h-[360px] overflow-y-auto text-neutral-400 space-y-2 relative">

<div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="absolute w-full h-1 bg-white/5 animate-scanline top-0 left-0 pointer-events-none"></div>
<div className="text-neutral-600">Iniciando Lógica Core v4.2...</div>
<div className="flex gap-2">
<span className="text-blue-400">[BLOOMBERG]</span>
<span>Conectando API Terminal... <span className="text-emerald-500">OK</span> (Latencia: 12ms)</span>
</div>
<div className="flex gap-2">
<span className="text-purple-400">[INSTITUCIONAL]</span>
<span>Escaneando Tasas Swap post-apertura NYC...</span>
</div>
<div className="flex gap-2">
<span className="text-yellow-600">[FILTRO]</span>
<span>Noticia detectada: "Reporte IPC".</span>
</div>
<div className="flex gap-2">
<span className="text-red-400">[RIESGO]</span>
<span>Volatilidad &gt; Umbral. Trading PAUSADO.</span>
</div>
<div className="text-neutral-600 my-2">--- 15 minutos después ---</div>
<div className="flex gap-2">
<span className="text-emerald-500">[XGBOOST]</span>
<span>Modelo Precio Oro confianza: 89.4% LONG.</span>
</div>
<div className="flex gap-2">
<span className="text-purple-400">[FLUJO]</span>
<span>Bloque Dark Pool detectado @ 2034.50.</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-300">[EJECUCIÓN]</span>
<span>Entrada Activada. Stop Loss en 1.5 ATR.</span>
</div>
<div className="mt-2 p-2 bg-emerald-900/10 border border-emerald-500/20 rounded text-emerald-400">
                            &gt; Impacto Drawdown: 0.15%<br/>
                            &gt; Verificación Reglas Apex: PASS<br/>
                            &gt; Estado Emocional: NULL
                        </div>
<div className="typewriter-cursor text-emerald-500">_</div>
</div>
</div>

<p className="text-center text-[10px] uppercase tracking-widest text-neutral-600 mt-4">
                    Visualización de Lógica en Vivo
                </p>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="features">
<div className="mb-16">
<h3 className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-2">Superioridad Técnica</h3>
<h2 className="text-3xl font-medium text-white tracking-tight max-w-2xl">
                Esto no es "Trading con ChatGPT".<br/>
                Es ingeniería financiera accesible.
            </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-emerald-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-emerald-500 group-hover:text-black transition-colors">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Datos Premium</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                    La mayoría de bots usan datos gratuitos con retraso. Mi sistema se alimenta de Bloomberg Terminal y APIs premium para capturar el sentimiento institucional antes de que se refleje en el precio.
                </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-purple-500 group-hover:text-black transition-colors">
<iconify-icon icon="solar:cpu-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">XGBoost &amp; K-F Optimal</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Utilizamos modelos XGBoost entrenados específicamente para el Oro y la apertura de NYC, filtrados por optimización de Kalman (K-F) para reducir el ruido del mercado y evitar falsas rupturas.
                </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-blue-500 group-hover:text-black transition-colors">
<iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Enfoque Anti-Drawdown</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Diseñado obsesivamente para cuentas fondeadas (Apex, Topstep). El bot entiende que proteger el drawdown es más importante que el profit, filtrando operaciones durante volatilidad extrema.
                </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-yellow-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-yellow-500 group-hover:text-black transition-colors">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Sincronización NYC &amp; HFT</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                    El mercado no es aleatorio a las 9:30 AM. El sistema analiza el Swap Institucional y las órdenes HFT para alinearse con los "Big Players", nunca contra ellos.
                </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-red-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-red-500 group-hover:text-black transition-colors">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Índice de Flujo de Dinero</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                    El precio miente, el volumen no. Analizamos el flujo de dinero real entrando y saliendo de los activos para predecir movimientos antes de que ocurran en el gráfico.
                </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-white/30 transition-all duration-300">
<div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:history-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Historia Completa</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                    No backtesting de 3 meses. El modelo ha digerido el historial completo del mercado disponible para entender contextos macroeconómicos raros, no solo tendencias recientes.
                </p>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-[#030303]">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white text-center mb-12">Diferenciación Real</h2>
<div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-lg overflow-hidden border border-white/5">

<div className="bg-[#0a0a0a] p-8">
<h3 className="text-red-400 font-medium text-sm mb-6 flex items-center gap-2">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> Bots de "IA Mágica"
                    </h3>
<ul className="space-y-4 text-sm text-neutral-500">
<li className="flex items-start gap-3">
<span className="text-red-900 mt-0.5">✕</span> Prometen riquezas rápidas sin riesgo.
                        </li>
<li className="flex items-start gap-3">
<span className="text-red-900 mt-0.5">✕</span> Usan indicadores básicos (RSI/MACD) disfrazados de IA.
                        </li>
<li className="flex items-start gap-3">
<span className="text-red-900 mt-0.5">✕</span> Ignoran noticias fundamentales importantes.
                        </li>
<li className="flex items-start gap-3">
<span className="text-red-900 mt-0.5">✕</span> Martingala o Grid que queman cuentas en un día.
                        </li>
</ul>
</div>

<div className="bg-[#0c0c0c] p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="100"></iconify-icon>
</div>
<h3 className="text-emerald-400 font-medium text-sm mb-6 flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Alpha Protocol
                    </h3>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-start gap-3">
<span className="text-emerald-500 mt-0.5">✓</span> Enfoque en supervivencia y drawdown bajo.
                        </li>
<li className="flex items-start gap-3">
<span className="text-emerald-500 mt-0.5">✓</span> 14 años de experiencia humana codificada.
                        </li>
<li className="flex items-start gap-3">
<span className="text-emerald-500 mt-0.5">✓</span> Filtrado de noticias en tiempo real.
                        </li>
<li className="flex items-start gap-3">
<span className="text-emerald-500 mt-0.5">✓</span> Gestión de riesgo adaptativa (Stop Loss dinámico).
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<h2 className="text-2xl font-medium text-white mb-2">¿Es este sistema para ti?</h2>
<p className="text-neutral-500 text-sm">Buscamos el 1% de traders serios. Sé honesto contigo mismo.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<h3 className="text-white text-sm font-semibold border-b border-white/10 pb-2">NO es para ti si:</h3>
<ul className="space-y-3 text-neutral-500 text-sm">
<li className="flex gap-3"><span className="text-neutral-700">01</span> Buscas hacerte rico en 30 días.</li>
<li className="flex gap-3"><span className="text-neutral-700">02</span> No entiendes qué es el drawdown o el apalancamiento.</li>
<li className="flex gap-3"><span className="text-neutral-700">03</span> Crees que existe un sistema con 100% de tasa de acierto.</li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-white text-sm font-semibold border-b border-white/10 pb-2">SÍ es para ti si:</h3>
<ul className="space-y-3 text-neutral-300 text-sm">
<li className="flex gap-3"><span className="text-emerald-500">01</span> Tienes o buscas cuentas fondeadas (Apex/Topstep).</li>
<li className="flex gap-3"><span className="text-emerald-500">02</span> Valoras la consistencia a largo plazo sobre la euforia.</li>
<li className="flex gap-3"><span className="text-emerald-500">03</span> Entiendes que el trading es un negocio de gestión de riesgo.</li>
</ul>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-emerald-950/20 border-t border-emerald-500/10" id="cta">
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
<iconify-icon className="text-emerald-500 mb-6 text-4xl" icon="solar:calendar-add-linear"></iconify-icon>
<h2 className="text-3xl font-medium text-white mb-6 tracking-tight">
                30 Días de Prueba. Sin Compromiso.
            </h2>

<div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-5 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 max-w-lg mx-auto">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-center sm:text-left">Este mes la cuenta corre por nosotros. Si te gusta, pagarás <span className="text-white font-semibold">$29/mes</span>.</span>
</div>
<form className="max-w-sm mx-auto flex flex-col gap-3">
<input className="w-full bg-[#050505] border border-white/10 rounded h-10 px-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600" placeholder="tu@email.com" type="email"/>
<button className="w-full h-10 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all hover:shadow-[0_0_15px_-5px_#10b981] active:scale-95" type="submit">
                    Comenzar Mi Mes Gratis
                </button>
</form>
<p className="mt-6 text-[10px] text-neutral-600">
                Acceso inmediato. Sin tarjeta de crédito requerida para empezar.
            </p>
</div>
</section>

<footer className="py-8 bg-[#030303] border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600">
<div className="flex items-center gap-2">
<span>© 2024 Alpha Protocol Systems.</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span>14 Años de Experiencia.</span>
</div>
<div className="mt-4 md:mt-0 flex gap-4">
<a className="hover:text-neutral-400" href="#">Aviso Legal</a>
<a className="hover:text-neutral-400" href="#">Privacidad</a>
<a className="hover:text-neutral-400" href="#">Términos</a>
</div>
</div>
</footer>



    </>
  );
}
