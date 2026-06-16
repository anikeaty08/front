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
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      
<div className="flex h-screen w-full">

<aside className="hidden md:flex w-80 flex-col border-r border-white/5 bg-zinc-950/50 relative z-20">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2 text-zinc-100">
<div className="w-6 h-6 bg-zinc-100 rounded-sm flex items-center justify-center">
<span className="text-zinc-950 text-xs font-semibold tracking-tighter">AC</span>
</div>
<span className="text-sm font-medium tracking-tight">ACADEMIC</span>
</div>
</div>

<div className="p-6 border-b border-white/5">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-zinc-400">Progresso do Curso</span>
<span className="text-xs text-zinc-100">42%</span>
</div>
<div className="w-full bg-zinc-800/50 h-1 rounded-full overflow-hidden">
<div className="bg-zinc-100 h-full w-[42%] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto py-4">

<div className="mb-6">
<h3 className="px-6 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">Módulo 01: Fundamentos</h3>
<ul className="space-y-0.5">
<li>
<button className="w-full flex items-center gap-3 px-6 py-2 text-left hover:bg-white/5 group transition-colors">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="lucide:check-circle-2" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm text-zinc-500 line-through group-hover:text-zinc-400 transition-colors">Introdução à Interface</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 px-6 py-2 text-left hover:bg-white/5 group transition-colors">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="lucide:check-circle-2" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm text-zinc-500 line-through group-hover:text-zinc-400 transition-colors">Configuração do Ambiente</span>
</button>
</li>
</ul>
</div>

<div className="mb-6">
<h3 className="px-6 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">Módulo 02: Design Systems</h3>
<ul className="space-y-0.5">

<li className="relative">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
<button className="w-full flex items-center gap-3 px-6 py-2.5 text-left bg-white/5 text-zinc-100">
<iconify-icon className="text-zinc-100" icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium">Arquitetura de Cores</span>
<span className="ml-auto text-xs text-zinc-500 font-mono">14:20</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 px-6 py-2 text-left hover:bg-white/5 group transition-colors text-zinc-400">
<iconify-icon className="text-zinc-600 group-hover:text-zinc-500 transition-colors" icon="lucide:circle" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm group-hover:text-zinc-200 transition-colors">Tipografia e Escala</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 px-6 py-2 text-left hover:bg-white/5 group transition-colors text-zinc-400">
<iconify-icon className="text-zinc-700" icon="lucide:lock" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">Componentização (Em breve)</span>
</button>
</li>
</ul>
</div>
</div>

<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10 shadow-inner"></div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium text-zinc-200">Aluno Convidado</span>
<span className="text-xs text-zinc-500">Plano Pro</span>
</div>
<iconify-icon className="ml-auto text-zinc-500" icon="lucide:more-vertical" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="md:hidden h-14 border-b border-white/5 flex items-center justify-between px-4 bg-zinc-950">
<div className="flex items-center gap-2 text-zinc-100">
<div className="w-5 h-5 bg-zinc-100 rounded-sm flex items-center justify-center">
<span className="text-zinc-950 text-[10px] font-semibold tracking-tighter">AC</span>
</div>
</div>
<button className="text-zinc-400">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</header>

<header className="hidden md:flex h-16 border-b border-white/5 items-center justify-between px-8 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 transition-colors cursor-pointer">Meus Cursos</span>
<iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="14"></iconify-icon>
<span className="hover:text-zinc-300 transition-colors cursor-pointer">UI Design Systems</span>
<iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-zinc-200">Módulo 02</span>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-100 border border-white/10 rounded-full px-3 py-1.5 transition-all hover:bg-white/5">
<iconify-icon icon="lucide:help-circle" strokeWidth="1.5" width="14"></iconify-icon>
                        Suporte
                    </button>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="max-w-5xl mx-auto w-full p-4 md:p-8 pb-20">

<div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black group mb-8">

<div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-zinc-900 to-zinc-950"></div>

<button className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 pl-1">
<iconify-icon className="drop-shadow-lg" icon="lucide:play" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex items-end px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-full flex flex-col gap-2">

<div className="w-full h-1 bg-white/20 rounded-full cursor-pointer group/progress relative">
<div className="h-full w-[25%] bg-white rounded-full relative">
<div className="absolute right-0 -top-1 w-3 h-3 bg-white rounded-full scale-0 group-hover/progress:scale-100 transition-transform"></div>
</div>
</div>
<div className="flex justify-between items-center text-white/90">
<div className="flex items-center gap-4">
<button><iconify-icon icon="lucide:play" strokeWidth="1.5" width="18"></iconify-icon></button>
<span className="text-xs font-medium">04:21 / 14:20</span>
</div>
<div className="flex items-center gap-4">
<button><iconify-icon icon="lucide:settings" strokeWidth="1.5" width="18"></iconify-icon></button>
<button><iconify-icon icon="lucide:maximize" strokeWidth="1.5" width="18"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 border-b border-white/5 pb-8">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">Aula 03</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="text-xs text-zinc-500">Atualizado há 2 dias</span>
</div>
<h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">Arquitetura de Cores em Interfaces</h1>
<p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
                                Aprenda a definir paletas de cores semânticas, variáveis de design tokens e como garantir acessibilidade e contraste adequados em aplicações modernas.
                            </p>
</div>
<div className="flex items-center gap-3 shrink-0">

<label className="custom-checkbox cursor-pointer flex items-center gap-3 group">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-zinc-700 bg-zinc-900 group-hover:border-zinc-500 transition-colors flex items-center justify-center">
<iconify-icon className="text-zinc-950 hidden" icon="lucide:check" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">Marcar como visto</span>
</label>
<div className="h-6 w-[1px] bg-white/10 mx-2"></div>
<button className="p-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white transition-colors border border-transparent hover:border-white/5">
<iconify-icon icon="lucide:chevron-left" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white transition-colors border border-transparent hover:border-white/5">
<iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="mb-8">
<div className="flex items-center gap-8 border-b border-white/5">
<button className="pb-3 text-sm font-medium text-zinc-100 border-b border-zinc-100">Visão Geral</button>
<button className="pb-3 text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Material de Apoio</button>
<button className="pb-3 text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Comentários (24)</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

<div className="lg:col-span-2 space-y-8">
<section>
<h2 className="text-lg font-medium text-zinc-200 mb-4 tracking-tight">O que você vai aprender</h2>
<div className="space-y-3">
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-1" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<p className="text-sm text-zinc-400 leading-relaxed">Diferença entre cores primárias, secundárias e funcionais.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-1" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<p className="text-sm text-zinc-400 leading-relaxed">Como utilizar ferramentas como o Tailwind CSS para gerenciar escalas de cores.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-1" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<p className="text-sm text-zinc-400 leading-relaxed">Verificação de contraste WCAG 2.1 para temas claros e escuros.</p>
</div>
</div>
</section>
<section className="border-t border-white/5 pt-8">
<h2 className="text-lg font-medium text-zinc-200 mb-4 tracking-tight">Notas da Aula</h2>
<div className="bg-zinc-900/50 rounded-lg border border-white/5 p-6">
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                        Lembre-se que ao definir o <strong>token</strong> de uma cor, devemos pensar na função dela e não no valor hexadecimal.
                                    </p>
<div className="bg-zinc-950 rounded border border-white/10 p-4 font-mono text-xs text-zinc-300 overflow-x-auto">
<span className="text-purple-400">const</span> <span className="text-blue-400">colors</span> = {<br/>
                                          primary: {<br/>
                                            DEFAULT: <span className="text-green-400">'#09090b'</span>,<br/>
                                            foreground: <span className="text-green-400">'#fafafa'</span><br/>
                                          }<br/>
                                        }
                                    </div>
</div>
</section>
</div>

<div className="lg:col-span-1">
<div className="bg-zinc-900/30 border border-white/5 rounded-lg p-5 sticky top-24">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Downloads</h3>
<div className="space-y-3">
<a className="flex items-center gap-3 p-3 rounded bg-zinc-800/20 hover:bg-zinc-800/40 border border-white/5 hover:border-white/10 transition-all group" href="#">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">Guia de Cores.pdf</span>
<span className="text-[10px] text-zinc-500">2.4 MB</span>
</div>
<iconify-icon className="ml-auto text-zinc-600 group-hover:text-zinc-400" icon="lucide:download" strokeWidth="1.5" width="14"></iconify-icon>
</a>
<a className="flex items-center gap-3 p-3 rounded bg-zinc-800/20 hover:bg-zinc-800/40 border border-white/5 hover:border-white/10 transition-all group" href="#">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:figma" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">UI Kit Base.fig</span>
<span className="text-[10px] text-zinc-500">Exemplo prático</span>
</div>
<iconify-icon className="ml-auto text-zinc-600 group-hover:text-zinc-400" icon="lucide:external-link" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="mt-8">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Links Úteis</h3>
<ul className="space-y-2">
<li>
<a className="text-sm text-zinc-400 hover:text-zinc-100 hover:underline flex items-center gap-2" href="#">
<iconify-icon icon="lucide:link" strokeWidth="1.5" width="12"></iconify-icon>
                                                Contrast Checker
                                            </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-zinc-100 hover:underline flex items-center gap-2" href="#">
<iconify-icon icon="lucide:link" strokeWidth="1.5" width="12"></iconify-icon>
                                                Tailwind Colors Docs
                                            </a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
