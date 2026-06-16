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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
livv: {
bg: '#fffffa',
paper: '#ffffff',
surface: '#f5f4f3',
dark: '#2c0405',
red: '#822b2e',
accent: '#ff4d4d'
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
'scan': 'scan 4s linear infinite',
'marquee': 'marquee 20s linear infinite',
'blink': 'blink 1s step-end infinite',
},
keyframes: {
scan: {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(360deg)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
blink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="fixed inset-0 bg-gradient-to-b from-transparent via-livv-bg/50 to-livv-bg z-0 pointer-events-none"></div>

<nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-2.5 h-2.5 bg-livv-dark rounded-full group-hover:bg-livv-red transition-colors duration-300"></div>
<span className="font-bold tracking-tighter text-livv-dark text-lg">LIVV</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-1 items-center px-3 py-1 rounded-full border border-livv-dark/10 bg-livv-paper/50 backdrop-blur-sm shadow-sm">
<div className="w-1.5 h-1.5 bg-livv-red rounded-full animate-pulse"></div>
<span className="text-xs font-mono text-livv-dark/60">SYSTEM STATUS: ONLINE</span>
</div>
<button className="text-livv-dark/60 hover:text-livv-dark transition-colors">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-32">

<section className="mb-24">
<div className="flex flex-col gap-6">
<div className="flex flex-wrap gap-4 text-xs font-mono text-livv-dark/60 uppercase tracking-wider">
<span className="px-2 py-1 border border-livv-dark/10 rounded bg-livv-paper/50">[ EST. 2026 ]</span>
<span className="px-2 py-1 border border-livv-dark/10 rounded bg-livv-paper/50">[ ARCHITECTURE_V.2.0 ]</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-livv-dark text-balance leading-[0.9]">
                    BATTLE-TESTED <br/>
<span className="text-livv-dark/40">ARCHITECTURE.</span>
</h1>
<div className="w-full h-px bg-gradient-to-r from-livv-dark/10 via-livv-dark/20 to-livv-dark/5 my-4"></div>
<p className="text-lg md:text-xl text-livv-dark/70 max-w-2xl font-light leading-relaxed">
                    Construyendo la infraestructura invisible de las marcas globales. 
                    <span className="text-livv-red font-medium">Fusión de lógica de sistemas y narrativa visual.</span>
</p>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 mb-32">

<div className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2 glass-panel rounded-xl p-0 relative overflow-hidden group">
<div className="absolute top-6 left-6 z-20">
<h3 className="text-livv-dark font-semibold tracking-tight flex items-center gap-2 bg-livv-bg/80 backdrop-blur px-2 py-1 rounded border border-livv-dark/5">
<iconify-icon className="text-livv-red" icon="lucide:globe"></iconify-icon>
                        GLOBAL DEPLOYMENT
                    </h3>
<p className="text-xs font-mono text-livv-dark/50 mt-2 ml-1">ARGENTINA HQ -&gt; WORLDWIDE</p>
</div>

<div className="w-full h-full bg-[#fcfbf9] relative">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#2c0405 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', opacity: '0.1'}}></div>
<svg className="w-full h-full absolute inset-0 pointer-events-none" preserveaspectratio="xMidYMid slice">
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#822b2e', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#822b2e', stopOpacity: '0.6'}}></stop>
<stop offset="100%" style={{stopColor: '#822b2e', stopOpacity: '0'}}></stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M150,250 Q300,200 400,280 T600,250 T800,300" fill="none" stroke="#2c0405" stroke-opacity="0.1" strokeWidth="0.5"></path>
<path className="map-path" d="M 220 420 Q 400 150 780 280" fill="none" filter="url(#glow)" stroke="url(#lineGradient)" strokeWidth="1.5"></path>
<path className="map-path" d="M 220 420 Q 500 550 850 450" fill="none" filter="url(#glow)" stroke="url(#lineGradient)" strokeWidth="1.5" style={{animationDuration: '40s'}}></path>
<path className="map-path" d="M 220 420 Q 350 300 350 180" fill="none" filter="url(#glow)" stroke="url(#lineGradient)" strokeWidth="1.5" style={{animationDuration: '25s'}}></path>
<g transform="translate(220, 420)">
<circle className="relative z-10" fill="#822b2e" r="4"></circle>
<circle className="radar-circle opacity-50" fill="none" r="12" stroke="#822b2e" strokeWidth="1"></circle>
<circle className="radar-circle opacity-30" fill="none" r="24" stroke="#822b2e" strokeWidth="0.5" style={{animationDelay: '0.5s'}}></circle>
</g>
<g transform="translate(780, 280)">
<circle fill="#2c0405" r="3"></circle>
<circle className="animate-pulse" fill="none" r="8" stroke="#2c0405" stroke-opacity="0.2"></circle>
<rect fill="#fff" height="14" rx="2" stroke="#eee" width="40" x="10" y="-10"></rect>
<text fill="#2c0405" fontFamily="JetBrains Mono" fontSize="8" x="15" y="0">EU-WEST</text>
</g>
<g transform="translate(850, 450)">
<circle fill="#2c0405" r="3"></circle>
<circle className="animate-pulse" fill="none" r="8" stroke="#2c0405" stroke-opacity="0.2" style={{animationDelay: '1s'}}></circle>
</g>
<g transform="translate(350, 180)">
<circle fill="#2c0405" r="3"></circle>
<circle className="animate-pulse" fill="none" r="8" stroke="#2c0405" stroke-opacity="0.2" style={{animationDelay: '0.3s'}}></circle>
<rect fill="#fff" height="14" rx="2" stroke="#eee" width="40" x="10" y="-10"></rect>
<text fill="#2c0405" fontFamily="JetBrains Mono" fontSize="8" x="15" y="0">US-EAST</text>
</g>
</svg>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-livv-bg to-transparent"></div>
</div>
<div className="absolute bottom-6 left-6 max-w-md z-10">
<p className="text-sm text-livv-dark leading-relaxed">
<span className="text-livv-red font-semibold">Argentine DNA. Global Standard.</span><br/>
                        Operamos desde el sur con estándares agnósticos a la ubicación. Eficiencia de costos estratégica sin sacrificar la calidad "Enterprise-grade".
                    </p>
</div>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-4 glass-panel rounded-xl p-8 flex flex-col justify-between group hover:border-livv-dark/20 transition-colors">
<div className="flex justify-between items-start">
<iconify-icon className="text-livv-dark/40 group-hover:text-livv-red transition-colors" icon="lucide:box" width="24"></iconify-icon>
<span className="text-xs font-mono text-livv-red bg-livv-red/10 px-2 py-0.5 rounded border border-livv-red/20">VERIFIED</span>
</div>
<div>
<span className="text-5xl md:text-6xl font-mono text-livv-dark tracking-tighter">750+</span>
<p className="text-sm text-livv-dark/50 mt-2 font-mono">PROJECTS SHIPPED</p>
<p className="text-xs text-livv-dark/70 mt-4 leading-relaxed">
                        0% Deuda técnica. La experiencia se mide en iteraciones exitosas.
                    </p>
</div>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-4 glass-panel rounded-xl p-8 flex flex-col justify-end group hover:border-livv-dark/20 transition-colors relative overflow-hidden">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl md:text-5xl font-mono text-livv-dark tracking-tighter">82%</span>
<iconify-icon className="text-livv-red mb-2" icon="lucide:trending-up" width="20"></iconify-icon>
</div>
<p className="text-sm text-livv-dark/60 font-medium">AVG. EFFICIENCY BOOST</p>
<div className="flex items-end gap-1 h-12 mt-6 w-full">
<div className="w-1/6 bg-livv-dark/5 h-[20%] rounded-t-sm"></div>
<div className="w-1/6 bg-livv-dark/10 h-[35%] rounded-t-sm"></div>
<div className="w-1/6 bg-livv-dark/10 h-[30%] rounded-t-sm"></div>
<div className="w-1/6 bg-livv-dark/20 h-[50%] rounded-t-sm"></div>
<div className="w-1/6 bg-livv-dark/20 h-[65%] rounded-t-sm"></div>
<div className="w-1/6 bg-livv-red h-[85%] rounded-t-sm"></div>
</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-12 glass-panel rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start border-l-4 border-l-livv-dark/10 hover:border-l-livv-red transition-all">
<div className="md:w-1/3">
<h3 className="text-xl font-medium text-livv-dark mb-2">Based on Data</h3>
<p className="text-xs font-mono text-livv-red">PROTOCOL: ITERATION_X750</p>
</div>
<div className="md:w-2/3">
<p className="text-livv-dark/80 leading-relaxed text-sm md:text-base">
                        Hemos perfeccionado nuestros "Protocolos de Construcción" en cada entrega. Lo que comenzó como un estudio de diseño local ha evolucionado en una <span className="text-livv-dark font-semibold">Central de Arquitectura Digital</span> que exporta soluciones desde Argentina hacia los mercados más exigentes del mundo.
                    </p>
</div>
</div>
</section>

<section className="mb-32">
<div className="w-full bg-livv-dark rounded-2xl overflow-hidden p-6 md:p-10 relative group hover:shadow-2xl hover:shadow-livv-red/5 transition-all duration-500">

<div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-livv-accent rounded-sm animate-pulse"></div>
<h2 className="text-white font-mono text-sm tracking-widest uppercase">SYSTEM_DNA <span className="text-white/30">//</span> ABOUT_US</h2>
</div>
<div className="flex gap-4 text-[10px] font-mono text-white/40">
<span className="border border-white/10 px-2 py-1 rounded bg-white/5">LATENCY: 0ms</span>
<span className="border border-white/10 px-2 py-1 rounded bg-white/5">UPTIME: 99.9%</span>
</div>
</div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">

<div className="col-span-12 md:col-span-4 flex flex-col gap-6 interactive-card">
<div className="aspect-square relative flex items-center justify-center rounded-full border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm group/radar overflow-hidden">

<div className="absolute inset-0 rounded-full border border-white/10 m-8 transition-all duration-500 group-hover/radar:m-6"></div>
<div className="absolute inset-0 rounded-full border border-white/5 m-16 transition-all duration-500 group-hover/radar:m-12"></div>
<div className="absolute inset-0 rounded-full border border-white/5 m-24 transition-all duration-500 group-hover/radar:m-20"></div>

<div className="absolute inset-0 rounded-full animate-scan radar-sweep opacity-30 group-hover/radar:opacity-60 transition-opacity"></div>

<div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-0 animate-ping-slow" style={{animationDelay: '0.2s'}}></div>
<div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-livv-accent rounded-full opacity-0 animate-ping-slow" style={{animationDelay: '1.5s'}}></div>

<div className="text-center z-10">
<div className="text-2xl font-bold text-white tracking-tighter">LIVV</div>
<div className="text-[10px] text-livv-accent font-mono mt-1">CORE</div>
</div>
</div>
<div className="px-2">
<h3 className="text-white font-medium text-sm border-l-2 border-livv-accent pl-3">Identidad Central</h3>
<p className="text-white/40 text-xs mt-2 leading-relaxed">
                                No somos una agencia. Somos un nodo de arquitectura digital operando desde Argentina para ecosistemas globales.
                            </p>
</div>
</div>

<div className="col-span-12 md:col-span-4 px-0 md:px-4 border-l-0 md:border-l border-r-0 md:border-r border-white/5 flex flex-col">
<div className="bg-black/20 rounded-lg p-4 font-mono text-xs border border-white/5 flex-grow flex flex-col gap-3 relative overflow-hidden group/term">

<div className="absolute top-0 left-0 w-full h-[2px] bg-livv-accent/20 animate-[scan_3s_linear_infinite] opacity-0 group-hover/term:opacity-100"></div>
<div className="flex justify-between text-white/30 border-b border-white/5 pb-2 mb-2">
<span>TERMINAL_V.2</span>
<span>BASH</span>
</div>

<div className="flex gap-2 items-center group/line cursor-default hover:bg-white/5 p-1 rounded transition-colors">
<span className="text-livv-accent">➜</span>
<span className="text-white/80">exec <span className="text-white font-bold">Design_Systems</span></span>
<span className="ml-auto text-green-400 text-[10px] opacity-0 group-hover/line:opacity-100 transition-opacity">DONE</span>
</div>
<div className="flex gap-2 items-center group/line cursor-default hover:bg-white/5 p-1 rounded transition-colors">
<span className="text-livv-accent">➜</span>
<span className="text-white/80">init <span className="text-white font-bold">Code_Integrity</span></span>
<span className="ml-auto text-green-400 text-[10px] opacity-0 group-hover/line:opacity-100 transition-opacity">RUNNING</span>
</div>
<div className="flex gap-2 items-center group/line cursor-default hover:bg-white/5 p-1 rounded transition-colors">
<span className="text-livv-accent">➜</span>
<span className="text-white/80">import <span className="text-white font-bold">Scalability</span></span>
<span className="ml-auto text-green-400 text-[10px] opacity-0 group-hover/line:opacity-100 transition-opacity">IMPORTED</span>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="flex gap-2">
<span className="text-livv-accent animate-pulse">_</span>
<span className="text-white/40 italic">Waiting for input...</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 pl-0 md:pl-4">
<div className="flex flex-col h-full justify-between">
<div className="grid grid-cols-4 gap-px bg-white/5 border border-white/5 aspect-square rounded overflow-hidden">

<div className="bg-livv-dark grid-dark-cell aspect-square"></div>
<div className="bg-livv-dark grid-dark-cell aspect-square"></div>
<div className="bg-livv-dark grid-dark-cell aspect-square flex items-center justify-center text-white/20 hover:text-white transition-colors">
<iconify-icon icon="lucide:code-2" width="16"></iconify-icon>
</div>
<div className="bg-livv-dark grid-dark-cell aspect-square"></div>
<div className="bg-livv-dark grid-dark-cell aspect-square flex items-center justify-center text-white/20 hover:text-white transition-colors">
<iconify-icon icon="lucide:cpu" width="16"></iconify-icon>
</div>
<div className="bg-livv-dark grid-dark-cell aspect-square bg-white/[0.02]"></div>
<div className="bg-livv-dark grid-dark-cell aspect-square flex items-center justify-center relative">
<div className="absolute inset-0 bg-livv-accent/20 blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-livv-accent relative z-10" icon="lucide:layers" width="20"></iconify-icon>
</div>
<div className="bg-livv-dark grid-dark-cell aspect-square"></div>
<div className="bg-livv-dark grid-dark-cell aspect-square"></div>
<div className="bg-livv-dark grid-dark-cell aspect-square flex items-center justify-center text-white/20 hover:text-white transition-colors">
<iconify-icon icon="lucide:git-branch" width="16"></iconify-icon>
</div>
<div className="bg-livv-dark grid-dark-cell aspect-square"></div>
<div className="bg-livv-dark grid-dark-cell aspect-square"></div>
<div className="bg-livv-dark grid-dark-cell aspect-square flex items-center justify-center text-white/10 font-mono text-[8px]">LIVV</div>
<div className="bg-livv-dark grid-dark-cell aspect-square"></div>
<div className="bg-livv-dark grid-dark-cell aspect-square flex items-center justify-center bg-white/5">
<span className="text-livv-accent text-xs font-bold">+</span>
</div>
<div className="bg-livv-dark grid-dark-cell aspect-square"></div>
</div>
<div className="mt-4 text-right">
<p className="text-white/60 text-xs">Modular Components</p>
<p className="text-white/30 text-[10px] font-mono">LIBRARY_SIZE: 2GB</p>
</div>
</div>
</div>
</div>

<div className="relative z-10 border-t border-white/10 pt-6 mt-2 flex flex-col md:flex-row items-end justify-between gap-8">
<div className="max-w-lg">
<p className="text-white text-lg md:text-xl font-light leading-snug">
                            "Rechazamos lo ornamental. Si no escala, no sirve. Si no convierte, es ruido."
                        </p>
<p className="text-white/40 text-sm mt-2">
                            — Manifiesto de Arquitectura, 2026
                        </p>
</div>

<div className="w-full md:w-64 overflow-hidden relative marquee-mask">
<div className="flex gap-4 whitespace-nowrap animate-marquee">
<span className="text-xs font-mono text-livv-accent">REACT</span>
<span className="text-xs font-mono text-white/30">/</span>
<span className="text-xs font-mono text-white/60">NEXT.JS</span>
<span className="text-xs font-mono text-white/30">/</span>
<span className="text-xs font-mono text-white/60">TAILWIND</span>
<span className="text-xs font-mono text-white/30">/</span>
<span className="text-xs font-mono text-white/60">NODE</span>
<span className="text-xs font-mono text-white/30">/</span>
<span className="text-xs font-mono text-white/60">AWS</span>
<span className="text-xs font-mono text-white/30">/</span>
<span className="text-xs font-mono text-white/60">FIGMA</span>
<span className="text-xs font-mono text-white/30">/</span>
<span className="text-xs font-mono text-livv-accent">REACT</span>
<span className="text-xs font-mono text-white/30">/</span>
<span className="text-xs font-mono text-white/60">NEXT.JS</span>
<span className="text-xs font-mono text-white/30">/</span>
<span className="text-xs font-mono text-white/60">TAILWIND</span>
</div>
</div>
</div>

<div className="absolute top-0 right-0 p-4 opacity-50">
<iconify-icon className="text-white/5 w-32 h-32 rotate-12 transform scale-150" icon="lucide:cpu"></iconify-icon>
</div>
</div>
</section>

<section className="mb-32 relative">
<div className="absolute -left-12 top-0 bottom-0 w-px bg-livv-dark/5 hidden lg:block"></div>
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-livv-dark/10 bg-livv-paper text-xs font-mono text-livv-red mb-8">
<div className="w-1 h-1 bg-livv-red rounded-full"></div>
                    CORE PHILOSOPHY
                </div>
<h2 className="text-3xl md:text-5xl font-medium leading-tight text-livv-dark/40 tracking-tight">
                    NO SOMOS SOLO DISEÑADORES.<br/>
                    SOMOS <span className="text-livv-dark">'BUSINESSMITHS'</span>.
                </h2>
<div className="mt-12 space-y-8 pl-0 md:pl-8 border-l-0 md:border-l border-livv-dark/10">
<p className="text-lg md:text-xl text-livv-dark/70 leading-relaxed">
                        Rechazamos la etiqueta de agencia. Somos artesanos del negocio digital. Fusionamos la <span className="text-livv-dark font-medium">Lógica de Sistemas (Tech)</span> con la <span className="text-livv-dark font-medium">Narrativa Visual (Design)</span>.
                    </p>
<p className="text-base md:text-lg text-livv-dark/70 leading-relaxed">
                        Entendemos que una web bonita que no convierte es inútil, y que un código robusto que nadie entiende es un desperdicio. Nosotros construimos Activos Digitales diseñados para <span className="text-livv-dark font-medium border-b border-livv-dark/20 pb-0.5">Escalar</span>, <span className="text-livv-dark font-medium border-b border-livv-dark/20 pb-0.5">Automatizar</span> y generar <span className="text-livv-dark font-medium border-b border-livv-dark/20 pb-0.5">Retorno</span>.
                    </p>
</div>
</div>
</section>

<section className="mb-32">
<div className="flex justify-between items-end mb-12">
<h3 className="text-2xl font-semibold tracking-tight text-livv-dark">THE ARCHITECTS</h3>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-livv-dark/10 flex items-center justify-center hover:bg-livv-dark/5 transition-colors">
<iconify-icon className="text-livv-dark/60" icon="lucide:arrow-left"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-livv-dark/10 flex items-center justify-center hover:bg-livv-dark/5 transition-colors">
<iconify-icon className="text-livv-dark/60" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 relative bg-livv-dark/5">
<img alt="Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="absolute inset-0 bg-livv-red/0 group-hover:bg-livv-red/10 transition-colors duration-300"></div>
</div>
<h4 className="text-livv-dark font-medium text-sm">Mateo Ricci</h4>
<p className="text-xs font-mono text-livv-dark/50 mt-1">LEAD ARCHITECT</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 relative bg-livv-dark/5">
<img alt="Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="absolute inset-0 bg-livv-red/0 group-hover:bg-livv-red/10 transition-colors duration-300"></div>
</div>
<h4 className="text-livv-dark font-medium text-sm">Sofia Verma</h4>
<p className="text-xs font-mono text-livv-dark/50 mt-1">SYSTEMS DESIGN</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 relative bg-livv-dark/5">
<img alt="Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="absolute inset-0 bg-livv-red/0 group-hover:bg-livv-red/10 transition-colors duration-300"></div>
</div>
<h4 className="text-livv-dark font-medium text-sm">Lucas Chen</h4>
<p className="text-xs font-mono text-livv-dark/50 mt-1">BACKEND ENG.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 relative bg-livv-dark/5">
<img alt="Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="absolute inset-0 bg-livv-red/0 group-hover:bg-livv-red/10 transition-colors duration-300"></div>
</div>
<h4 className="text-livv-dark font-medium text-sm">Elena Costa</h4>
<p className="text-xs font-mono text-livv-dark/50 mt-1">PRODUCT STRATEGY</p>
</div>
</div>
</section>

<section>
<div className="flex justify-between items-end mb-8 border-b border-livv-dark/10 pb-4">
<h3 className="text-sm font-mono text-livv-dark/50">CAPABILITIES_MATRIX</h3>
<span className="text-xs text-livv-dark/70">SCROLL &gt;</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-lg border border-livv-dark/10 bg-livv-paper hover:border-livv-dark/20 hover:shadow-lg hover:shadow-livv-dark/5 transition-all duration-500">
<div className="w-10 h-10 rounded bg-livv-surface border border-livv-dark/5 flex items-center justify-center mb-6 group-hover:text-livv-red transition-colors">
<iconify-icon icon="lucide:layout-grid" width="20"></iconify-icon>
</div>
<h4 className="text-livv-dark font-medium mb-2">Architecture</h4>
<p className="text-xs text-livv-dark/60 leading-relaxed">Estructuras escalables diseñadas para soportar crecimiento exponencial sin fracturas.</p>
</div>

<div className="group p-6 rounded-lg border border-livv-dark/10 bg-livv-paper hover:border-livv-dark/20 hover:shadow-lg hover:shadow-livv-dark/5 transition-all duration-500">
<div className="w-10 h-10 rounded bg-livv-surface border border-livv-dark/5 flex items-center justify-center mb-6 group-hover:text-livv-red transition-colors">
<iconify-icon icon="lucide:pen-tool" width="20"></iconify-icon>
</div>
<h4 className="text-livv-dark font-medium mb-2">Design Systems</h4>
<p className="text-xs text-livv-dark/60 leading-relaxed">Interfaces atómicas y consistentes que comunican autoridad y confianza técnica.</p>
</div>

<div className="group p-6 rounded-lg border border-livv-dark/10 bg-livv-paper hover:border-livv-dark/20 hover:shadow-lg hover:shadow-livv-dark/5 transition-all duration-500">
<div className="w-10 h-10 rounded bg-livv-surface border border-livv-dark/5 flex items-center justify-center mb-6 group-hover:text-livv-red transition-colors">
<iconify-icon icon="lucide:cpu" width="20"></iconify-icon>
</div>
<h4 className="text-livv-dark font-medium mb-2">Automation</h4>
<p className="text-xs text-livv-dark/60 leading-relaxed">Workflows invisibles que eliminan fricción operativa y deuda manual.</p>
</div>
</div>
</section>
</main>
<footer className="border-t border-livv-dark/10 bg-livv-bg pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex flex-col gap-2">
<span className="font-bold tracking-tighter text-livv-dark">LIVV</span>
<span className="text-xs text-livv-dark/60 font-mono">© 2026 DIGITAL ARCHITECTURE STUDIO</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-livv-dark/60 hover:text-livv-dark transition-colors" href="#">LINKEDIN</a>
<a className="text-xs text-livv-dark/60 hover:text-livv-dark transition-colors" href="#">TWITTER</a>
<a className="text-xs text-livv-dark/60 hover:text-livv-dark transition-colors" href="#">EMAIL</a>
</div>
</div>
</footer>

    </>
  );
}
