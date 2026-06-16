import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
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
      

<header className="h-14 border-b border-zinc-800/60 bg-zinc-950 flex items-center justify-between px-5 shrink-0 z-20">

<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<span className="text-white text-xs font-bold">A</span>
</div>
<h1 className="text-white font-semibold text-sm tracking-tight">AnimaAe</h1>
</div>

<div className="flex items-center gap-6">

<div className="hidden md:flex items-center gap-3">
<div className="flex flex-col items-end">
<span className="text-xs font-medium text-zinc-400">Saldo: <span className="text-zinc-100">150 créditos</span></span>
<div className="w-24 h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
<div className="h-full bg-indigo-500 w-2/3 rounded-full"></div>
</div>
</div>
</div>
<div className="h-4 w-px bg-zinc-800 hidden md:block"></div>

<span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-zinc-900 border border-zinc-800 text-zinc-400 uppercase">PLANO PRO</span>

<button className="group relative px-3 py-1.5 rounded-md overflow-hidden bg-white text-black text-xs font-medium transition-all hover:opacity-90">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-100 via-white to-purple-100 opacity-0 group-hover:opacity-20 transition-opacity"></div>
<span className="relative z-10 flex items-center gap-1">
                    Upgrade
                    <iconify-icon className="text-indigo-600" icon="lucide:zap" strokeWidth="2" width="12"></iconify-icon>
</span>
</button>

<div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-500 transition-colors">
                JD
            </div>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="w-14 border-r border-zinc-800/60 bg-zinc-950 flex flex-col items-center py-4 gap-1 shrink-0">

<button className="w-9 h-9 rounded-md bg-zinc-800 text-white flex items-center justify-center shadow-sm border border-zinc-700/50">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 transition-all flex items-center justify-center">
<iconify-icon icon="lucide:history" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 transition-all flex items-center justify-center">
<iconify-icon icon="lucide:credit-card" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="flex-1"></div>
<button className="w-9 h-9 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 transition-all flex items-center justify-center mb-2">
<iconify-icon icon="lucide:settings" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</aside>

<main className="flex-1 relative bg-zinc-900/50 bg-canvas-dots flex items-center justify-center overflow-hidden p-8">

<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur border border-zinc-700/50 rounded-lg px-2 py-1 flex items-center gap-1 shadow-xl z-10">
<button className="p-2 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:mouse-pointer-2" width="16"></iconify-icon>
</button>
<button className="p-2 hover:bg-zinc-800 rounded text-indigo-400 bg-zinc-800/50 transition-colors">
<iconify-icon icon="lucide:lasso-select" width="16"></iconify-icon>
</button>
<button className="p-2 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:eraser" width="16"></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-700 mx-1"></div>
<button className="p-2 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:undo-2" width="16"></iconify-icon>
</button>
<button className="p-2 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:redo-2" width="16"></iconify-icon>
</button>
</div>

<div className="relative rounded-lg overflow-hidden shadow-2xl border border-zinc-800 group max-w-4xl max-h-[80vh]">

<img alt="Woman with windblown hair" className="w-full h-full object-cover opacity-90 block" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 pointer-events-none">
<svg className="w-full h-full absolute top-0 left-0" preserveaspectratio="none" viewbox="0 0 100 100">

<path d="M 30,20 Q 50,10 70,20 T 80,50 T 60,90 T 30,85 T 20,50 Z" fill="rgba(59, 130, 246, 0.25)" stroke="rgba(59, 130, 246, 0.6)" stroke-dasharray="2 1" strokeWidth="0.5"></path>
</svg>

<div className="absolute top-[20%] left-[30%] w-3 h-3 bg-indigo-500 border-2 border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
<div className="absolute top-[50%] left-[80%] w-2.5 h-2.5 bg-indigo-500 border border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-[85%] left-[30%] w-2.5 h-2.5 bg-indigo-500 border border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"></div>

<div className="absolute top-[50%] left-[10%] w-2.5 h-2.5 bg-red-500 border border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"></div>
</div>

<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-2 border-indigo-500/0 group-hover:border-indigo-500/30"></div>
</div>

<button className="absolute bottom-8 right-8 bg-indigo-600 hover:bg-indigo-500 text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-indigo-900/40 flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 z-20 group">
<iconify-icon className="animate-pulse" icon="lucide:sparkles" width="18"></iconify-icon>
<span className="font-medium text-sm tracking-wide">Processar Recorte IA</span>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-zinc-900"></div>
</button>

<div className="absolute bottom-8 left-8 flex items-center gap-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-md p-1.5 text-zinc-400">
<button className="hover:text-white"><iconify-icon icon="lucide:minus" width="14"></iconify-icon></button>
<span className="text-xs font-mono w-10 text-center text-zinc-300">64%</span>
<button className="hover:text-white"><iconify-icon icon="lucide:plus" width="14"></iconify-icon></button>
</div>
</main>

<aside className="w-72 border-l border-zinc-800/60 bg-zinc-950 flex flex-col shrink-0">

<div className="h-14 border-b border-zinc-800/60 flex items-center px-5 shrink-0">
<h2 className="text-sm font-semibold text-zinc-100 tracking-tight flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:sliders-horizontal"></iconify-icon>
                    Parâmetros
                </h2>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-8">

<div className="space-y-3">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Modo de Seleção</label>
<div className="grid grid-cols-2 p-1 bg-zinc-900 rounded-lg border border-zinc-800">
<button className="text-xs py-1.5 rounded-md font-medium text-zinc-400 hover:text-white transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:hexagon" width="14"></iconify-icon>
                            Poligonal
                        </button>
<button className="text-xs py-1.5 rounded-md bg-zinc-800 shadow-sm border border-zinc-700/50 text-white font-medium flex items-center justify-center gap-2">
<iconify-icon icon="lucide:brush" width="14"></iconify-icon>
                            Irregular
                        </button>
</div>
</div>

<div className="space-y-6">

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-300">Suavidade (Smoothing)</label>
<span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">45%</span>
</div>
<div className="h-4 flex items-center">
<input className="appearance-none focus:outline-none focus:ring-0" max="100" min="0" type="range" value="45"/>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 font-mono">
<span>Sharp</span>
<span>Soft</span>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-300">Raio de Seleção</label>
<span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">12px</span>
</div>
<div className="h-4 flex items-center">
<input className="appearance-none focus:outline-none focus:ring-0" max="50" min="1" type="range" value="12"/>
</div>
</div>
</div>
<div className="h-px bg-zinc-800 w-full"></div>

<div className="space-y-4">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Saída</label>

<label className="flex items-center gap-3 cursor-pointer group checkbox-wrapper">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-600 group-hover:border-zinc-500 bg-zinc-900 flex items-center justify-center transition-all">
<iconify-icon className="text-white hidden stroke-[3]" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Remover Fundo (Alpha)</span>
</label>

<label className="flex items-center gap-3 cursor-pointer group checkbox-wrapper">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-600 group-hover:border-zinc-500 bg-zinc-900 flex items-center justify-center transition-all">
<iconify-icon className="text-white hidden stroke-[3]" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Melhorar Bordas (AI)</span>
</label>
</div>

<div className="bg-indigo-900/10 border border-indigo-500/20 rounded-lg p-3 mt-4">
<div className="flex gap-2 items-start">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="lucide:info" width="14"></iconify-icon>
<p className="text-[11px] text-indigo-200/80 leading-relaxed">
                            O modelo SAM-2 processa quadros adjacentes automaticamente se o vídeo for carregado.
                        </p>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800/60 bg-zinc-900/20">
<button className="w-full py-2 rounded-md border border-zinc-700 hover:bg-zinc-800 text-xs font-medium text-zinc-300 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:save" width="14"></iconify-icon>
                    Salvar Preset
                </button>
</div>
</aside>
</div>

    </>
  );
}
