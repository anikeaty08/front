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
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
nexus: {
bg: '#0A0A0A',
cyan: '#00F0FF',
magenta: '#FF00AA',
violet: '#8B00FF',
surface: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.08)'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
space: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'blob': 'blob 7s infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute top-0 left-1/4 w-96 h-96 bg-nexus-cyan/5 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nexus-violet/5 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>

<header className="flex items-center justify-between px-5 py-3 border-b border-nexus-border glass-panel z-50 shrink-0">

<div className="flex items-center gap-6">
<div className="font-space tracking-tighter text-xl font-medium text-white flex items-center gap-2 cursor-pointer group">
                NEXUS
                <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-cyan opacity-75 group-hover:bg-nexus-magenta transition-colors duration-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-cyan shadow-[0_0_8px_#00F0FF] group-hover:bg-nexus-magenta group-hover:shadow-[0_0_8px_#FF00AA] transition-colors duration-500"></span>
</span>
</div>

<div className="hidden md:flex items-center gap-2 bg-black/40 border border-nexus-border rounded-lg px-3 py-1.5 cursor-pointer hover:bg-white/5 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="solar:cpu-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-200">Grok-5</span>
<span className="text-[10px] font-space tracking-tight bg-nexus-cyan/10 text-nexus-cyan border border-nexus-cyan/20 px-1.5 py-0.5 rounded ml-1">SIN LÍMITES</span>
<iconify-icon className="text-gray-500 text-xs ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="hidden lg:flex items-center gap-2 text-xs text-gray-500 font-space tracking-tight">
<span>Contexto: 45K / ∞</span>
<div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-nexus-violet w-[15%] shadow-[0_0_5px_#8B00FF]"></div>
</div>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors border border-transparent hover:border-nexus-border bg-transparent hover:bg-white/5 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-sm" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                Colaborar
            </button>
<button className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors px-3 py-1.5 rounded-lg text-sm font-medium shadow-[0_0_15px_rgba(255,255,255,0.1)] group">
<iconify-icon className="text-base group-hover:rotate-90 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
<span className="hidden sm:inline">Nuevo Chat</span>
<span className="hidden md:inline text-xs text-gray-500 ml-1 font-space">⌘N</span>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-nexus-violet to-nexus-cyan p-[1px] cursor-pointer">
<div className="h-full w-full bg-nexus-bg rounded-full flex items-center justify-center">
<img alt="User" className="h-full w-full rounded-full opacity-90 hover:opacity-100 transition-opacity" src="https://api.dicebear.com/7.x/notionists/svg?seed=NexusUser"/>
</div>
</div>
</div>
</header>

<div className="flex flex-1 overflow-hidden relative">

<aside className="w-64 border-r border-nexus-border glass-panel h-full hidden md:flex flex-col select-none z-40 relative">
<div className="flex-1 overflow-y-auto p-3 space-y-6">

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors group" href="#">
<iconify-icon className="text-lg group-hover:text-nexus-cyan transition-colors" icon="solar:widget-5-linear"></iconify-icon>
                        Dashboard
                    </a>
<a className="flex items-center justify-between px-3 py-2 text-sm text-white bg-white/5 rounded-lg transition-colors shadow-[inset_2px_0_0_#00F0FF]" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-nexus-cyan" icon="solar:chat-round-line-linear"></iconify-icon>
                            Mis Chats
                        </div>
<span className="text-xs text-gray-500 font-space">24</span>
</a>
</nav>

<div>
<div className="px-3 text-xs font-space tracking-tight text-gray-500 mb-2 flex items-center justify-between group cursor-pointer">
                        ESPACIOS
                        <iconify-icon className="group-hover:text-gray-300 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="space-y-1 pl-2 border-l border-white/5 ml-4">
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<iconify-icon className="text-base text-gray-500" icon="solar:folder-with-files-linear"></iconify-icon>
                            Proyectos
                        </a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<iconify-icon className="text-base text-green-500/70" icon="solar:code-square-linear"></iconify-icon>
                            Desarrollo
                        </a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<iconify-icon className="text-base text-orange-500/70" icon="solar:palette-linear"></iconify-icon>
                            Creativo
                        </a>
</div>
</div>

<div>
<div className="px-3 text-xs font-space tracking-tight text-nexus-magenta mb-2 flex items-center gap-2">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                        IA LAB
                    </div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-nexus-magenta/10 rounded-lg transition-colors group" href="#">
<iconify-icon className="text-lg group-hover:text-nexus-magenta transition-colors" icon="solar:brain-linear"></iconify-icon>
                            Mis Fine-tunes
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:gallery-minimalistic-linear"></iconify-icon>
                            Model Gallery
                        </a>
</div>
</div>

<div className="pt-4 border-t border-nexus-border">
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:history-linear"></iconify-icon>
                            Historia Global
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:planet-linear"></iconify-icon>
                            Comunidad
                        </a>
</nav>
</div>
</div>

<div className="p-4 border-t border-nexus-border mt-auto">
<a className="flex items-center justify-between text-sm text-gray-400 hover:text-white transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg group-hover:rotate-90 transition-transform duration-500" icon="solar:settings-linear"></iconify-icon>
                        Ajustes
                    </div>
<span className="text-xs bg-white/5 px-1.5 py-0.5 rounded font-space">⌘K</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-nexus-bg relative z-10">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-gradient-to-b from-black/50 to-transparent absolute top-0 w-full z-20">
<div className="flex items-center gap-3">
<h1 className="text-lg font-space tracking-tight text-white hover:bg-white/5 px-2 py-1 rounded cursor-text transition-colors">Optimización de Motor Cuántico</h1>
<span className="flex items-center gap-1 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
<iconify-icon icon="solar:tag-linear"></iconify-icon> Investigación
                    </span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Branching">
<iconify-icon className="text-lg" icon="solar:git-branch-linear"></iconify-icon>
</button>
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Export">
<iconify-icon className="text-lg" icon="solar:export-linear"></iconify-icon>
</button>
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Share">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto pt-20 pb-40 px-4 md:px-10 lg:px-20 scroll-smooth">
<div className="max-w-4xl mx-auto space-y-8">

<div className="text-center text-xs font-space text-gray-600 my-4 tracking-tight">Hoy, 14:32 - Grok-5 (Modo Sin Límites)</div>

<div className="flex justify-end">
<div className="max-w-[85%] bg-nexus-surface border border-nexus-border text-gray-100 rounded-2xl rounded-tr-sm px-5 py-4 text-sm leading-relaxed shadow-lg">
                            Necesito que analices este dataset sobre fluctuaciones cuánticas y generes un script en Python usando Qiskit para simular la estabilización del entrelazamiento en un circuito de 5 qubits. Además, dibuja un diagrama de cómo se vería la arquitectura lógica.
                        </div>
</div>

<div className="flex gap-5 group">
<div className="w-8 h-8 rounded-full bg-black border border-nexus-cyan/30 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.1)] relative">
<iconify-icon className="text-nexus-cyan text-xl" icon="solar:cpu-bold-duotone"></iconify-icon>

<div className="absolute -inset-1 bg-nexus-cyan/20 rounded-full blur-md opacity-0"></div>
</div>
<div className="flex-1 space-y-4">

<div className="text-gray-300 text-sm leading-relaxed space-y-4">
<p>Entendido. He procesado el dataset de fluctuaciones. Para estabilizar el entrelazamiento en un circuito de 5 qubits mitigando el ruido, utilizaremos un enfoque de corrección de errores cuánticos basado en el código de superficie, adaptado para Qiskit.</p>

<div className="bg-[#050505] border border-nexus-border rounded-xl overflow-hidden shadow-md">
<div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-nexus-border text-xs font-space text-gray-400">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:programming-linear"></iconify-icon>
                                            python
                                        </div>
<div className="flex items-center gap-3">
<button className="hover:text-white flex items-center gap-1 transition-colors"><iconify-icon icon="solar:play-linear"></iconify-icon> Ejecutar en Sandbox</button>
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:copy-linear"></iconify-icon></button>
</div>
</div>
<div className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
<pre><code><span className="text-nexus-magenta">from</span> qiskit <span className="text-nexus-magenta">import</span> QuantumCircuit, QuantumRegister, ClassicalRegister
<span className="text-nexus-magenta">from</span> qiskit_aer <span className="text-nexus-magenta">import</span> AerSimulator

<span className="text-gray-500"># Inicialización del registro de 5 qubits</span>
qr = QuantumRegister(<span className="text-nexus-cyan">5</span>, <span className="text-green-400">'q'</span>)
cr = ClassicalRegister(<span className="text-nexus-cyan">5</span>, <span className="text-green-400">'c'</span>)
qc = QuantumCircuit(qr, cr)

<span className="text-gray-500"># ... (Generación del estado entrelazado) ...</span>
qc.h(qr[<span className="text-nexus-cyan">0</span>])
<span className="text-nexus-magenta">for</span> i <span className="text-nexus-magenta">in</span> <span className="text-nexus-cyan">range</span>(<span className="text-nexus-cyan">4</span>):
    qc.cx(qr[i], qr[i+<span className="text-nexus-cyan">1</span>])</code></pre>
</div>
</div>
<p>En cuanto a la arquitectura lógica, he generado el diagrama conceptual solicitado:</p>

<div className="relative rounded-xl overflow-hidden border border-nexus-border inline-block group/img cursor-zoom-in">
<img alt="Quantum Circuit Architecture" className="w-full max-w-md h-auto opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover/img:opacity-100 transition-opacity">
<button className="bg-black/80 backdrop-blur text-white p-1.5 rounded-lg border border-white/10 hover:bg-white/20"><iconify-icon icon="solar:maximize-linear"></iconify-icon></button>
<button className="bg-black/80 backdrop-blur text-white p-1.5 rounded-lg border border-white/10 hover:bg-white/20"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="flex items-center gap-2 pt-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors text-sm" title="Útil"><iconify-icon icon="solar:like-linear"></iconify-icon></button>
<button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors text-sm" title="No útil"><iconify-icon icon="solar:dislike-linear"></iconify-icon></button>
<button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors text-sm" title="Regenerar"><iconify-icon icon="solar:refresh-linear"></iconify-icon></button>
<button className="p-1.5 text-gray-400 hover:text-nexus-cyan hover:bg-nexus-cyan/10 rounded transition-colors text-sm ml-2 flex items-center gap-1" title="Guardar Prompt">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
<span className="text-xs font-space">Guardar</span>
</button>
<div className="ml-auto flex items-center gap-3 text-xs text-gray-500 font-space tracking-tight">
<span className="flex items-center gap-1"><iconify-icon icon="solar:stopwatch-linear"></iconify-icon> 2.4s</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:database-linear"></iconify-icon> 1.2k tokens</span>
</div>
</div>
</div>
</div>

<div className="flex gap-5">
<div className="w-8 h-8 rounded-full bg-black border border-nexus-cyan/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.2)] relative">
<iconify-icon className="text-nexus-cyan text-xl relative z-10" icon="solar:cpu-bold-duotone"></iconify-icon>
<div className="absolute inset-0 rounded-full border-t-2 border-nexus-cyan animate-spin"></div>
</div>
<div className="flex flex-col justify-center">
<div className="text-xs font-space tracking-tight text-nexus-cyan animate-pulse">Optimizando parámetros de razonamiento...</div>

<div className="text-[10px] text-gray-500 font-mono mt-1 opacity-70">
                                &gt; analizando_dependencias_qiskit<br/>
                                &gt; renderizando_espacio_hilbert
                            </div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-gradient-to-t from-nexus-bg via-nexus-bg/90 to-transparent pt-10 pb-6 px-4 md:px-10 z-30">
<div className="max-w-4xl mx-auto">

<div className="flex items-center gap-4 mb-2 px-2">

<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 peer-checked:after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-nexus-cyan/40 border border-white/5 peer-checked:border-nexus-cyan/50 shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]"></div>
</div>
<span className="text-xs font-space tracking-tight text-gray-500 group-hover:text-gray-300 transition-colors flex items-center gap-1">
<iconify-icon className="peer-checked:text-nexus-cyan" icon="solar:infinity-linear"></iconify-icon>
                                Razonamiento Profundo
                            </span>
</label>
</div>

<div className="bg-black/60 glass-panel border border-nexus-border rounded-2xl p-2 focus-within:border-nexus-cyan/50 focus-within:ring-1 focus-within:ring-nexus-cyan/30 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative">
<textarea className="w-full bg-transparent text-gray-100 placeholder-gray-600 resize-none outline-none min-h-[60px] max-h-[200px] text-sm p-2 font-sans overflow-y-auto" placeholder="¿Qué quieres construir hoy? Usa / para comandos..." rows="2"></textarea>

<div className="flex items-center justify-between px-2 pt-2">

<div className="flex items-center gap-1">
<button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors tooltip relative group">
<iconify-icon className="text-lg" icon="solar:microphone-2-linear"></iconify-icon>
</button>
<button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
<iconify-icon className="text-lg" icon="solar:paperclip-linear"></iconify-icon>
</button>
<button className="p-2 text-gray-400 hover:text-nexus-magenta hover:bg-nexus-magenta/10 rounded-lg transition-colors group relative">
<iconify-icon className="text-lg" icon="solar:palette-linear"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-nexus-magenta rounded-full shadow-[0_0_5px_#FF00AA] hidden group-hover:block"></span>
</button>
<button className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-400/10 rounded-lg transition-colors">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-3">
<span className="hidden md:inline text-[10px] text-gray-600 font-space tracking-tight">Ctrl + Enter</span>
<button className="bg-white text-black p-2 rounded-xl hover:bg-nexus-cyan hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300 flex items-center justify-center">
<iconify-icon className="text-xl rotate-45 transform translate-y-[-1px] translate-x-[1px]" icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="text-center mt-3 text-[10px] text-gray-600 font-space tracking-tight">
                        NEXUS IA puede cometer errores. Considera verificar la información crítica.
                    </div>
</div>
</div>
</main>

<aside className="w-80 border-l border-nexus-border glass-panel h-full hidden lg:flex flex-col z-40 relative">
<div className="p-4 border-b border-nexus-border flex items-center justify-between">
<span className="text-xs font-space tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-nexus-cyan" icon="solar:ruler-cross-pen-linear"></iconify-icon>
                    CONTEXTO ACTIVO
                </span>
<button className="text-gray-500 hover:text-white"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="space-y-2">
<div className="text-[10px] font-space tracking-tight text-gray-500 uppercase">Memoria de Sesión</div>
<div className="bg-black/40 border border-white/5 rounded-lg p-3 text-xs text-gray-400 space-y-2 leading-relaxed">
<p>• Analizando fluctuaciones cuánticas.</p>
<p>• Lenguaje preferido: Python (Qiskit).</p>
<p>• Arquitectura actual: 5 qubits, código de superficie.</p>
</div>
</div>

<div className="space-y-3">
<div className="text-[10px] font-space tracking-tight text-gray-500 uppercase flex items-center justify-between">
                        Herramientas
                        <iconify-icon className="cursor-pointer hover:text-white" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="space-y-2">

<div className="flex items-center justify-between bg-white/5 rounded-lg p-2 px-3 border border-transparent hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 text-xs text-gray-300">
<iconify-icon className="text-blue-400" icon="solar:global-linear"></iconify-icon>
                                Navegador Web
                            </div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-6 h-3 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-gray-400 peer-checked:after:bg-white after:rounded-full after:h-2.5 after:w-2.5 after:transition-all peer-checked:bg-blue-500/50"></div>
</label>
</div>

<div className="flex items-center justify-between bg-nexus-cyan/5 rounded-lg p-2 px-3 border border-nexus-cyan/20">
<div className="flex items-center gap-2 text-xs text-nexus-cyan">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon>
                                Code Interpreter
                            </div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-6 h-3 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-gray-400 peer-checked:after:bg-white after:rounded-full after:h-2.5 after:w-2.5 after:transition-all peer-checked:bg-nexus-cyan/50"></div>
</label>
</div>
</div>
</div>

<div className="space-y-4 pt-2">
<div className="text-[10px] font-space tracking-tight text-gray-500 uppercase">Parámetros IA</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-gray-400">
<span>Creatividad (Temp)</span>
<span className="text-nexus-cyan font-mono">0.85</span>
</div>
<input className="w-full" max="200" min="0" type="range" value="85"/>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-gray-400">
<span>Precisión (Top-P)</span>
<span className="font-mono">1.0</span>
</div>
<input className="w-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" max="100" min="0" type="range" value="100"/>
</div>
</div>

<div className="bg-nexus-violet/10 border border-nexus-violet/20 rounded-xl p-3 relative overflow-hidden group cursor-pointer mt-4">
<div className="absolute top-0 left-0 w-1 h-full bg-nexus-violet"></div>
<div className="flex items-center gap-2 text-xs text-nexus-violet font-medium mb-1">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                        Sugerencia de Prompt
                    </div>
<p className="text-[10px] text-gray-400 leading-relaxed">
                        Considera pedirle a la IA que incluya una gráfica de decoherencia temporal usando `matplotlib` para visualizar la mitigación del ruido.
                    </p>
<div className="mt-2 text-[10px] text-white bg-nexus-violet/20 inline-block px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Click para añadir
                    </div>
</div>
</div>
</aside>
</div>

    </>
  );
}
