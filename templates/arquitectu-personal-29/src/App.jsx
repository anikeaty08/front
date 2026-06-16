import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
accent: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc', // Light Blue
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
}
},
animation: {
'spin-slow': 'spin 20s linear infinite',
'reverse-spin': 'reverseSpin 20s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
reverseSpin: {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(-360deg)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
},
pulseGlow: {
'0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)' },
'50%': { opacity: .8, boxShadow: '0 0 40px rgba(56, 189, 248, 0.5)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:compass-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg group-hover:opacity-70 transition-opacity">TU SE TU</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-accent-500 transition-colors" href="#filosofia">Filosofía</a>
<a className="hover:text-accent-500 transition-colors" href="#mapa-visual">El Mapa</a>
<a className="hover:text-accent-500 transition-colors" href="#dimensiones">Dimensiones</a>
</div>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-accent-500 transition-colors active:scale-95">
                Comenzar Mapa
            </button>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
<div className="absolute top-20 left-20 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
<div className="absolute bottom-20 right-20 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute inset-0 grid-bg opacity-50 mask-image-gradient"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-100 text-accent-600 text-xs font-medium mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
</span>
                Ingeniería + Psicología
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1] animate-fade-in delay-100">
                Conviértete en el arquitecto <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-slate-600">de tu propia persona.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light animate-fade-in delay-200">
                Tu vida no es introspección, es arquitectura. Toma la rienda de tu experiencia humana rediseñando tu sistema interno.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
<button className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-accent-500 hover:shadow-lg hover:shadow-accent-500/30 transition-all flex items-center justify-center gap-2">
                    Diseñar mi Mapa
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors">
                    Entender la metodología
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="filosofia">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-accent-400 to-transparent"></div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
                        No estás perdido.<br/>
                        Estás mal mapeado.
                    </h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Si no defines conscientemente quién eres, tu entorno lo hace por ti. Y el entorno no busca tu bienestar, busca tu atención.
                    </p>
<p className="text-slate-600 font-medium italic pl-4 border-l-2 border-accent-200">
                        "La gente no falla por falta de disciplina. Falla por falta de claridad."
                    </p>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-accent-100 to-white rounded-2xl transform rotate-2 transition-transform group-hover:rotate-1"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-rose-50 rounded-lg text-rose-500">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">El problema actual</h3>
<p className="text-sm text-slate-500">Nunca en la historia hubo tanta información y tan poca claridad personal. Si no te entiendes, tu vida será reactiva.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-accent-50 rounded-lg text-accent-600">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">La solución TU SE TU</h3>
<p className="text-sm text-slate-500">El mapa no es una opción, es una necesidad. Claridad → Dirección → Tracción → Bienestar.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative overflow-hidden" id="mapa-visual">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="uppercase text-xs text-accent-400 tracking-widest font-mono bg-accent-500/10 border-accent-500/30 border rounded-full pt-1 pr-3 pb-1 pl-3">NO ESTÁS PERDIDO</span>
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mt-4 mb-4">Solo te falta un Mapa de Vida</h2>
<p className="text-slate-400 max-w-lg mr-auto ml-auto">El mapa no es una opción, es una necesidad.</p>
</div>

<div className="relative w-full aspect-square md:aspect-[16/9] flex items-center justify-center max-w-4xl mx-auto">

<div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] border border-slate-800 rounded-full"></div>
<div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-dashed border-slate-800/60 rounded-full animate-spin-slow"></div>

<div className="relative z-20 flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-slate-900 border border-accent-500/50 rounded-full shadow-[0_0_50px_rgba(56,189,248,0.3)] animate-pulse-glow">
<iconify-icon className="text-accent-400 text-3xl md:text-4xl" icon="solar:user-id-linear"></iconify-icon>
<span className="text-white font-bold tracking-widest text-xs mt-2">TU</span>
</div>


<div className="planet absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer animate-float" style={{animationDelay: '0s'}}>
<div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 border border-slate-700 group-hover:border-accent-400 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-accent-400 transition-colors shadow-lg">
<iconify-icon icon="solar:bolt-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 mt-2 uppercase tracking-wide group-hover:text-white transition-colors">Energía</span>
</div>

<div className="planet absolute top-[20%] right-[5%] md:right-[18%] flex flex-col items-center group cursor-pointer animate-float" style={{animationDelay: '1s'}}>
<div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 border border-slate-700 group-hover:border-accent-400 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-accent-400 transition-colors shadow-lg">
<iconify-icon icon="solar:brain-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 mt-2 uppercase tracking-wide group-hover:text-white transition-colors">Mente</span>
</div>

<div className="planet absolute bottom-[20%] right-[5%] md:right-[18%] flex flex-col items-center group cursor-pointer animate-float" style={{animationDelay: '2s'}}>
<div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 border border-slate-700 group-hover:border-accent-400 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-accent-400 transition-colors shadow-lg">
<iconify-icon icon="solar:case-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 mt-2 uppercase tracking-wide group-hover:text-white transition-colors">Profesional</span>
</div>

<div className="planet absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer animate-float" style={{animationDelay: '3s'}}>
<div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 border border-slate-700 group-hover:border-accent-400 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-accent-400 transition-colors shadow-lg">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 mt-2 uppercase tracking-wide group-hover:text-white transition-colors">Cuerpo</span>
</div>

<div className="planet absolute bottom-[20%] left-[5%] md:left-[18%] flex flex-col items-center group cursor-pointer animate-float" style={{animationDelay: '1.5s'}}>
<div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 border border-slate-700 group-hover:border-accent-400 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-accent-400 transition-colors shadow-lg">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 mt-2 uppercase tracking-wide group-hover:text-white transition-colors">Relacional</span>
</div>

<div className="planet absolute top-[20%] left-[5%] md:left-[18%] flex flex-col items-center group cursor-pointer animate-float" style={{animationDelay: '0.5s'}}>
<div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 border border-slate-700 group-hover:border-accent-400 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-accent-400 transition-colors shadow-lg">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 mt-2 uppercase tracking-wide group-hover:text-white transition-colors">Recreativo</span>
</div>


<div className="absolute bottom-[28%] right-[2%] md:right-[10%] px-3 py-1 bg-accent-900/40 border border-accent-500/20 text-accent-200 text-xs rounded-full animate-pulse hidden md:block">
                    Emprendedor
                </div>

<div className="absolute bottom-[10%] right-[10%] md:right-[24%] px-3 py-1 bg-accent-900/40 border border-accent-500/20 text-accent-200 text-xs rounded-full animate-pulse hidden md:block" style={{animationDelay: '2s'}}>
                    Psicólogo
                </div>

<div className="absolute bottom-[30%] left-[2%] md:left-[10%] px-3 py-1 bg-indigo-900/40 border border-indigo-500/20 text-indigo-200 text-xs rounded-full animate-pulse hidden md:block">
                    Papá
                </div>

<div className="absolute bottom-[15%] left-[10%] md:left-[14%] px-3 py-1 bg-indigo-900/40 border border-indigo-500/20 text-indigo-200 text-xs rounded-full animate-pulse hidden md:block" style={{animationDelay: '1.5s'}}>
                    Hermano
                </div>

<div className="absolute top-[35%] left-[2%] md:left-[8%] px-3 py-1 bg-emerald-900/40 border border-emerald-500/20 text-emerald-200 text-xs rounded-full animate-pulse hidden md:block" style={{animationDelay: '3s'}}>
                    Amigo
                </div>

<div className="absolute bottom-[40%] left-[15%] px-3 py-1 bg-indigo-900/40 border border-indigo-500/20 text-indigo-200 text-xs rounded-full animate-pulse hidden md:block" style={{animationDelay: '0.5s'}}>
                    Hijo
                </div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{zIndex: '0'}}>
<circle cx="50%" cy="50%" fill="none" r="20%" stroke="url(#gradientLine)" strokeWidth="1"></circle>
<defs>
<lineargradient id="gradientLine" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'transparent', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: 'transparent', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'transparent', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="text-center mt-8">
<p className="text-sm text-slate-500">
<iconify-icon className="inline mr-1 relative -top-0.5" icon="solar:info-circle-linear"></iconify-icon>
                    Cada faceta (Hijo, Psicólogo, Amigo) se alimenta de una o más dimensiones.
                </p>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white" id="dimensiones">
<div className="max-w-6xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">La Estructura</h2>
<p className="text-slate-500 max-w-xl mx-auto">Un sistema integrado para pasar de la reactividad a la congruencia.</p>
</div>
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-1 bg-white border border-slate-200 rounded-2xl p-8 hover:border-accent-300 transition-colors shadow-sm group">
<div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center text-accent-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Fundamentos</h3>
<ul className="space-y-3 mt-4">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon>
                            Valores
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon>
                            Virtudes
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon>
                            Principios
                        </li>
</ul>
</div>

<div className="md:col-span-2 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex items-start justify-between">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-6 backdrop-blur-sm">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-accent-300 border border-accent-500/30 px-2 py-1 rounded">CORE SYSTEM</span>
</div>
<div>
<h3 className="text-2xl font-semibold mb-3">Historia de Vibración</h3>
<p className="text-slate-300 leading-relaxed max-w-lg">
                                La definición precisa de quién eres que sintetiza tus valores, virtudes y principios. No es un slogan, es tu sistema operativo.
                            </p>
</div>
</div>
</div>

<div className="md:col-span-3 bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-2xl p-8 md:p-12 relative">
<div className="absolute top-8 right-8 text-slate-200 hidden md:block">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="0.5" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Desglose Operativo</h3>
<p className="text-slate-500">Si no sabes en qué dimensiones invertir energía, la vida decide por ti.</p>
</div>
<div className="text-sm font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-100">
                                Priorizar ≠ Renunciar
                            </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-3 text-slate-900 font-medium">
<iconify-icon className="text-slate-400" icon="solar:smile-circle-linear"></iconify-icon>
                                    Alegrías
                                </div>
<p className="text-xs text-slate-400">Lo que nutre tu espíritu</p>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-3 text-slate-900 font-medium">
<iconify-icon className="text-slate-400" icon="solar:star-linear"></iconify-icon>
                                    Aspiraciones
                                </div>
<p className="text-xs text-slate-400">Hacia donde te expandes</p>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-3 text-slate-900 font-medium">
<iconify-icon className="text-slate-400" icon="solar:route-linear"></iconify-icon>
                                    Estrategias
                                </div>
<p className="text-xs text-slate-400">El cómo lo logras</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-2">El Proceso</p>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Claridad &gt; Coherencia &gt; Impacto</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="bg-white p-6 text-center group">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 text-slate-900 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:border-accent-400 group-hover:text-accent-500 transition-colors z-10 relative">
<iconify-icon icon="solar:lightbulb-minimalistic-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Claridad</h4>
<p className="text-xs text-slate-500">Defines tu mapa y tu historia.</p>
</div>

<div className="bg-white p-6 text-center group">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 text-slate-900 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:border-accent-400 group-hover:text-accent-500 transition-colors z-10 relative">
<iconify-icon icon="solar:compass-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Dirección</h4>
<p className="text-xs text-slate-500">Sabes dónde invertir energía.</p>
</div>

<div className="bg-white p-6 text-center group">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 text-slate-900 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:border-accent-400 group-hover:text-accent-500 transition-colors z-10 relative">
<iconify-icon icon="solar:wheel-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Tracción</h4>
<p className="text-xs text-slate-500">Movimiento real y constante.</p>
</div>

<div className="bg-white p-6 text-center group">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 text-slate-900 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:border-accent-400 group-hover:text-accent-500 transition-colors z-10 relative">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Bienestar</h4>
<p className="text-xs text-slate-500">La contribución emerge del balance.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-lg text-slate-600 font-light italic">
                    "Ninguna relación prospera sin tiempo, atención y presencia. <br className="hidden md:block"/>¿Por qué crees que contigo sería distinto?"
                </p>
</div>
</div>
</section>

<footer className="bg-slate-950 py-24 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8">
                Un acto radical.
            </h2>
<p className="text-slate-400 text-lg mb-10 leading-relaxed">
                PIONEERS no promete felicidad constante. Promete claridad suficiente para vivir con congruencia. Y eso, en este momento histórico, es la mayor revolución.
            </p>
<div className="inline-flex flex-col items-center gap-6">
<button className="bg-white text-slate-950 font-medium px-8 py-4 rounded-lg hover:bg-slate-200 transition-colors w-full md:w-auto flex items-center justify-center gap-2">
                    Comenzar mi Arquitectura Personal
                    <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
<p className="text-xs text-slate-600">
                    © 2024 TU SE TU. Todos los derechos reservados.
                </p>
</div>
</div>
</footer>

    </>
  );
}
