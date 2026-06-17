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
      

<aside className="w-64 bg-white border-r border-[#E8E2D9] flex flex-col justify-between shrink-0 z-20 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]">
<div>

<div className="h-14 border-b border-[#E8E2D9] flex items-center px-4 cursor-pointer hover:bg-[#FAF7F2] transition-colors">
<div className="flex items-center gap-2 flex-1">
<div className="w-6 h-6 rounded bg-[#C2714F] text-white flex items-center justify-center text-xs font-semibold tracking-tight">
                        A
                    </div>
<span className="text-sm font-medium text-[#3D2B1F]">Acme Corp</span>
</div>
<iconify-icon className="text-[#8C7B6C]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>

<nav className="p-3 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:widget-5-linear"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear"></iconify-icon>
                    Projetos
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#C2714F] bg-[#FAF7F2] transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:map-linear"></iconify-icon>
                    Canvas
                </a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] transition-all" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:checklist-linear"></iconify-icon>
                        Tarefas
                    </div>
<span className="bg-red-100 text-red-600 text-xs px-1.5 rounded-md font-semibold">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                    Documentos
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:folder-open-linear"></iconify-icon>
                    Biblioteca
                </a>
</nav>
</div>

<div className="p-4 border-t border-[#E8E2D9]">
<div className="flex items-center gap-3 cursor-pointer">
<div className="w-8 h-8 rounded-full bg-[#E8E2D9] flex items-center justify-center text-xs font-semibold text-[#3D2B1F] tracking-tight">
                    DK
                </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-[#3D2B1F]">Diego K.</span>
<span className="text-xs text-[#8C7B6C]">Estrategista</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<header className="h-14 bg-white border-b border-[#E8E2D9] flex items-center justify-between px-6 z-10">

<div className="flex items-center gap-2 text-sm text-[#8C7B6C]">
<span className="hover:text-[#3D2B1F] cursor-pointer transition-colors">Lançamento Q1 2025</span>
<iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="font-medium text-[#3D2B1F]">Funil VSL Principal</span>
<span className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">Ativo</span>
</div>
<div className="flex items-center gap-4">

<div className="relative hidden md:block">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#8C7B6C]" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-64 bg-[#FAF7F2] border border-[#E8E2D9] rounded-xl pl-8 pr-10 py-1.5 text-sm text-[#3D2B1F] placeholder-[#8C7B6C] focus:outline-none focus:ring-1 focus:ring-[#C2714F] focus:border-[#C2714F] transition-all" placeholder="Buscar no workspace..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
<kbd className="font-sans text-xs text-[#8C7B6C] bg-white border border-[#E8E2D9] rounded px-1 shadow-sm">⌘</kbd>
<kbd className="font-sans text-xs text-[#8C7B6C] bg-white border border-[#E8E2D9] rounded px-1 shadow-sm">K</kbd>
</div>
</div>

<button className="relative text-[#8C7B6C] hover:text-[#3D2B1F] transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
</button>
<div className="w-px h-5 bg-[#E8E2D9]"></div>

<button className="bg-[#C2714F] hover:bg-[#A86041] text-white text-sm font-medium px-4 py-1.5 rounded-xl flex items-center gap-2 transition-all shadow-sm">
<iconify-icon icon="solar:play-linear"></iconify-icon>
                    Lançar
                </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden relative">

<div className="w-56 bg-white/80 backdrop-blur-md border-r border-[#E8E2D9] z-10 flex flex-col overflow-y-auto">
<div className="p-4 border-b border-[#E8E2D9]">
<h3 className="text-xs font-semibold text-[#8C7B6C] uppercase tracking-wider mb-3">Tráfego</h3>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 p-2 rounded-lg border border-[#E8E2D9] bg-white cursor-grab hover:border-[#C2714F] hover:shadow-sm transition-all">
<div className="w-7 h-7 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:target-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Meta Ad</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg border border-[#E8E2D9] bg-white cursor-grab hover:border-[#C2714F] hover:shadow-sm transition-all">
<div className="w-7 h-7 rounded-md bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Google Ad</span>
</div>
</div>
</div>
<div className="p-4 border-b border-[#E8E2D9]">
<h3 className="text-xs font-semibold text-[#8C7B6C] uppercase tracking-wider mb-3">Captura &amp; Conteúdo</h3>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 p-2 rounded-lg border border-[#E8E2D9] bg-white cursor-grab hover:border-[#C2714F] hover:shadow-sm transition-all">
<div className="w-7 h-7 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center">
<iconify-icon icon="solar:browser-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Landing Page</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg border border-[#E8E2D9] bg-white cursor-grab hover:border-[#C2714F] hover:shadow-sm transition-all">
<div className="w-7 h-7 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:video-frame-play-horizontal-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">VSL</span>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-xs font-semibold text-[#8C7B6C] uppercase tracking-wider mb-3">Relacionamento</h3>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 p-2 rounded-lg border border-[#C2714F]/30 bg-[#C2714F]/5 cursor-grab transition-all">
<div className="w-7 h-7 rounded-md bg-orange-50 text-[#C2714F] flex items-center justify-center">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Email Sequência</span>
</div>
</div>
</div>
</div>

<div className="flex-1 relative canvas-bg overflow-hidden" id="canvas-container">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<defs>
<marker id="arrow" markerheight="6" markerwidth="6" orient="auto-start-reverse" refx="5" refy="5" viewbox="0 0 10 10">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#8C7B6C" opacity="0.6"></path>
</marker>
<marker id="arrow-selected" markerheight="6" markerwidth="6" orient="auto-start-reverse" refx="5" refy="5" viewbox="0 0 10 10">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#C2714F"></path>
</marker>
</defs>

<path d="M 180 160 C 240 160, 260 160, 320 160" fill="none" marker-end="url(#arrow)" stroke="#8C7B6C" stroke-opacity="0.3" strokeWidth="2"></path>

<path d="M 520 160 C 580 160, 600 240, 660 240" fill="none" marker-end="url(#arrow)" stroke="#8C7B6C" stroke-opacity="0.3" strokeWidth="2"></path>

<path d="M 520 160 C 580 160, 600 360, 660 360" fill="none" marker-end="url(#arrow-selected)" stroke="#C2714F" stroke-dasharray="4" strokeWidth="2"></path>
</svg>

<div className="absolute inset-0 z-10">

<div className="absolute top-[120px] left-[60px] bg-white rounded-xl border border-[#E8E2D9] shadow-sm p-3 w-48 hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:target-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#3D2B1F]">Meta Ad</span>
</div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500" title="Aprovado"></div>
</div>
<div className="flex gap-1.5">
<span className="flex items-center gap-1 text-[10px] font-medium text-[#8C7B6C] bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#E8E2D9]">
<iconify-icon icon="solar:eye-linear"></iconify-icon> 12k
                            </span>
</div>

<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#E8E2D9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="absolute top-[120px] left-[320px] bg-white rounded-xl border border-[#E8E2D9] shadow-sm p-3 w-52 hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
<iconify-icon icon="solar:browser-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#3D2B1F]">Opt-in Page</span>
</div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500" title="Copy Aprovada"></div>
</div>
<div className="flex gap-1.5">
<span className="flex items-center gap-1 text-[10px] font-medium text-[#8C7B6C] bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#E8E2D9]">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> 1 Doc
                            </span>
<span className="flex items-center gap-1 text-[10px] font-medium text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Pronto
                            </span>
</div>

<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#E8E2D9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#E8E2D9] border-2 border-white rounded-full"></div>
</div>

<div className="absolute top-[200px] left-[660px] bg-white rounded-xl border border-[#E8E2D9] shadow-sm p-3 w-48 hover:shadow-md transition-shadow cursor-pointer group opacity-60">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:video-frame-play-horizontal-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#3D2B1F]">VSL Principal</span>
</div>
<div className="w-2.5 h-2.5 rounded-full bg-red-500" title="Rascunho"></div>
</div>
<div className="flex gap-1.5">
<span className="flex items-center gap-1 text-[10px] font-medium text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-100">
<iconify-icon icon="solar:pen-linear"></iconify-icon> Rascunho
                            </span>
</div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#E8E2D9] border-2 border-white rounded-full"></div>
</div>

<div className="absolute top-[320px] left-[660px] bg-white rounded-xl border-2 border-[#C2714F] shadow-lg p-3 w-52 cursor-pointer z-20">

<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#3D2B1F] text-white rounded-lg flex items-center px-1 py-1 shadow-lg text-xs gap-1">
<button className="p-1.5 hover:bg-white/20 rounded flex items-center justify-center" title="Editar"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="p-1.5 hover:bg-white/20 rounded flex items-center justify-center" title="Duplicar"><iconify-icon icon="solar:copy-linear"></iconify-icon></button>
<div className="w-px h-3 bg-white/20 mx-1"></div>
<button className="p-1.5 hover:bg-red-500/50 rounded flex items-center justify-center text-red-300" title="Excluir"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#C2714F]/10 text-[#C2714F] flex items-center justify-center">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#3D2B1F]">Email Sequência</span>
</div>

<div className="w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-orange-50" title="Em Revisão"></div>
</div>
<div className="flex gap-1.5">
<span className="flex items-center gap-1 text-[10px] font-medium text-[#8C7B6C] bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#E8E2D9]">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> 1 Doc
                            </span>
<span className="flex items-center gap-1 text-[10px] font-medium text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Revisão
                            </span>
</div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#C2714F] rounded-full"></div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#C2714F] rounded-full"></div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white border border-[#E8E2D9] rounded-full shadow-sm px-2 py-1.5 flex items-center gap-1 z-20">
<button className="w-8 h-8 flex items-center justify-center text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] rounded-full transition-colors"><iconify-icon className="text-lg" icon="solar:cursor-square-linear"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] rounded-full transition-colors"><iconify-icon className="text-lg" icon="solar:hand-shake-linear"></iconify-icon></button>
<div className="w-px h-4 bg-[#E8E2D9] mx-1"></div>
<button className="w-8 h-8 flex items-center justify-center text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] rounded-full transition-colors"><iconify-icon className="text-lg" icon="solar:minus-circle-linear"></iconify-icon></button>
<span className="text-xs font-medium text-[#3D2B1F] min-w-[40px] text-center">100%</span>
<button className="w-8 h-8 flex items-center justify-center text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] rounded-full transition-colors"><iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon></button>
<div className="w-px h-4 bg-[#E8E2D9] mx-1"></div>
<button className="w-8 h-8 flex items-center justify-center text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] rounded-full transition-colors"><iconify-icon className="text-lg" icon="solar:maximize-square-linear"></iconify-icon></button>
</div>
</div>

<div className="w-[340px] bg-white border-l border-[#E8E2D9] z-20 flex flex-col shadow-[-4px_0_24px_-12px_rgba(0,0,0,0.05)]">

<div className="p-5 border-b border-[#E8E2D9]">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#C2714F]/10 text-[#C2714F] flex items-center justify-center text-xl">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h2 className="text-base font-semibold text-[#3D2B1F] tracking-tight">Email Sequência</h2>
<p className="text-xs text-[#8C7B6C]">Nó de Relacionamento</p>
</div>
</div>
<button className="text-[#8C7B6C] hover:text-[#3D2B1F]"><iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="text-[#8C7B6C]">Status visual:</span>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-orange-50 text-orange-700 border border-orange-200 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Em Revisão
                        </div>
</div>
</div>

<div className="flex border-b border-[#E8E2D9] px-2 pt-2">
<button className="px-4 py-2 text-sm font-medium text-[#8C7B6C] hover:text-[#3D2B1F] border-b-2 border-transparent">Detalhes</button>
<button className="px-4 py-2 text-sm font-medium text-[#C2714F] border-b-2 border-[#C2714F]">Docs <span className="ml-1 bg-[#C2714F]/10 text-[#C2714F] py-0.5 px-1.5 rounded text-[10px]">1</span></button>
<button className="px-4 py-2 text-sm font-medium text-[#8C7B6C] hover:text-[#3D2B1F] border-b-2 border-transparent">Tasks</button>
<button className="px-4 py-2 text-sm font-medium text-[#8C7B6C] hover:text-[#3D2B1F] border-b-2 border-transparent">Assets</button>
</div>

<div className="flex-1 overflow-y-auto p-5 bg-[#FAF7F2]/50">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-[#3D2B1F]">Documentos Vinculados</h3>
<button className="text-[#C2714F] hover:bg-[#C2714F]/10 p-1 rounded transition-colors" title="Novo Documento">
<iconify-icon className="text-lg" icon="solar:add-square-linear"></iconify-icon>
</button>
</div>

<div className="bg-white border border-[#E8E2D9] rounded-xl p-4 shadow-sm group hover:border-[#C2714F]/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#C2714F] text-lg" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm font-medium text-[#3D2B1F] line-clamp-1">Copy: Email Seq #1</span>
</div>
</div>
<div className="flex items-center justify-between mt-3 mb-4">

<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Revisão
                            </span>

<div className="flex items-center gap-1.5" title="Copywriter atribuído">
<div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-semibold border border-white">
                                    AL
                                </div>
<span className="text-[10px] text-[#8C7B6C]">Ana L.</span>
</div>
</div>

<div className="bg-[#FAF7F2] rounded-lg p-2.5 mb-4 border border-[#E8E2D9]/50">
<p className="text-xs text-[#8C7B6C] leading-relaxed">
<span className="font-medium text-[#3D2B1F]">Contexto:</span> Este email dispara 1h após a inscrição na Landing Page. Foco em introduzir a dor principal.
                            </p>
</div>

<button className="w-full bg-white border border-[#E8E2D9] hover:bg-[#FAF7F2] hover:border-[#C2714F] text-[#3D2B1F] text-xs font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm">
<iconify-icon className="text-sm" icon="solar:pen-new-square-linear"></iconify-icon>
                            Abrir Editor de Copy
                        </button>
</div>

<div className="mt-6 flex gap-3 p-3 rounded-xl bg-blue-50/50 border border-blue-100 items-start">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-[11px] text-blue-800/80 leading-relaxed">
<strong className="font-semibold text-blue-900">Auto-Handoff Ativo:</strong> Quando este nó foi adicionado, uma tarefa e um documento foram criados automaticamente para o time de Copy. A cor laranja do nó reflete o status do documento.
                        </p>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
