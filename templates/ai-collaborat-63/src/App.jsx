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
pearl: '#82d4bb',
teal: '#82c09a',
steel: '#829298',
mauve: '#94778b',
dark: {
900: '#09090b', // Zinc 950 base
800: '#18181b', // Zinc 900
700: '#27272a', // Zinc 800
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-full w-full">

<aside className="w-64 flex flex-col border-r border-white/5 bg-dark-900/50 backdrop-blur-md z-20">

<div className="h-14 flex items-center px-4 border-b border-white/5">
<div className="flex items-center gap-2 text-zinc-100 group cursor-pointer">
<div className="w-6 h-6 rounded bg-gradient-to-br from-pearl to-teal flex items-center justify-center text-dark-900 shadow-[0_0_15px_-3px_rgba(130,212,187,0.4)]">
<i className="w-3 h-3" data-lucide="box"></i>
</div>
<span className="text-sm font-semibold tracking-tight">AI COLLABORATOR</span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">

<button className="w-full flex items-center gap-2 px-3 py-1.5 mb-4 text-xs text-zinc-500 bg-zinc-900/50 border border-white/5 rounded-md hover:border-white/10 hover:text-zinc-300 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="search"></i>
<span>Search or ask...</span>
<span className="ml-auto text-[10px] bg-white/5 px-1.5 rounded border border-white/5">⌘K</span>
</button>
<div className="px-2 pb-2 text-[10px] font-medium tracking-wider text-zinc-500 uppercase">Library</div>
<a className="flex items-center gap-2.5 px-3 py-1.5 text-xs text-zinc-100 bg-white/5 rounded-md border border-white/5" href="#">
<i className="w-3.5 h-3.5 text-pearl" data-lucide="layout-grid"></i>
<span>Project Alpha</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:bg-white/5 rounded-md transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="book"></i>
<span>Research Notes</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:bg-white/5 rounded-md transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="database"></i>
<span>Knowledge Graph</span>
</a>
<div className="mt-6 px-2 pb-2 text-[10px] font-medium tracking-wider text-zinc-500 uppercase">Spatial Views</div>
<a className="flex items-center gap-2.5 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-3.5 h-3.5 group-hover:text-mauve transition-colors" data-lucide="orbit"></i>
<span>Galaxy Overview</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-3.5 h-3.5 group-hover:text-teal transition-colors" data-lucide="map"></i>
<span>Islands &amp; Clusters</span>
</a>
</div>

<div className="p-3 border-t border-white/5 bg-zinc-900/80">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-medium text-zinc-500 tracking-tight">LOCAL RUNTIME</span>
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
</div>
<div className="bg-black/40 rounded border border-white/5 p-2 space-y-2">
<div className="flex items-center justify-between text-[10px]">
<span className="text-zinc-400">Mistral-7B-Instruct</span>
<span className="text-emerald-400">Q4_K_M</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-zinc-600 h-full w-[45%]"></div>
</div>
<div className="flex justify-between text-[9px] text-zinc-600">
<span>VRAM: 4.2GB</span>
<span>CTX: 8K</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative z-10 overflow-hidden">

<header className="h-14 flex items-center justify-between px-6 border-b border-white/5 bg-dark-900/20 backdrop-blur-sm">
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer">Project Alpha</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="hover:text-zinc-300 cursor-pointer">Planning</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-zinc-200 font-medium">Q4 Execution Strategy</span>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-700 border border-zinc-900 flex items-center justify-center text-[9px] text-white">JD</div>
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pearl to-teal border border-zinc-900 flex items-center justify-center text-[9px] text-dark-900">AI</div>
</div>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors">
<i className="w-4 h-4" data-lucide="share-2"></i>
</button>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="max-w-3xl mx-auto py-12 px-8 space-y-8">

<div className="space-y-4">
<div className="h-40 w-full rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-800 border border-white/5 relative overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
<div className="w-64 h-64 border border-pearl/20 rounded-full animate-float blur-sm"></div>
<div className="absolute w-48 h-48 border border-teal/20 rounded-full animate-pulse-slow"></div>
</div>
<button className="absolute bottom-3 right-3 text-[10px] bg-black/50 backdrop-blur px-2 py-1 rounded text-zinc-400 border border-white/5 flex items-center gap-1 hover:text-white hover:border-white/20 transition-all">
<i className="w-3 h-3" data-lucide="image"></i> Change Cover
                            </button>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Q4 Execution Strategy</h1>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<span className="flex items-center gap-1.5"><i className="w-3 h-3" data-lucide="calendar"></i> Oct 24, 2023</span>
<span className="flex items-center gap-1.5"><i className="w-3 h-3" data-lucide="clock"></i> 5 min read</span>
<span className="flex items-center gap-1.5 text-pearl"><i className="w-3 h-3" data-lucide="sparkles"></i> AI Assisted</span>
</div>
</div>

<div className="text-sm leading-relaxed text-zinc-400 space-y-4">
<p>The primary objective for Q4 is to consolidate the local inference engine with the frontend visualization layer. We need to ensure zero-latency feedback loops when users interact with the 3D spatial interface.</p>
</div>

<div className="group relative rounded-xl border border-white/5 bg-zinc-900/30 p-1 hover:border-white/10 transition-colors">
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
<button className="p-1 hover:bg-white/10 rounded"><i className="w-3 h-3 text-zinc-600" data-lucide="grip-vertical"></i></button>
</div>
<div className="p-4">
<h3 className="text-xs font-medium text-zinc-500 mb-4 flex items-center gap-2 uppercase tracking-wider">
<i className="w-3 h-3" data-lucide="milestone"></i> Roadmap
                            </h3>
<div className="relative pl-2">

<div className="node-line relative pb-6 pl-6 border-l border-zinc-800">
<div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-pearl shadow-[0_0_10px_rgba(130,212,187,0.5)]"></div>
<div className="flex justify-between items-start -mt-1.5">
<div>
<h4 className="text-sm font-medium text-zinc-200">MVP Core Foundation</h4>
<p className="text-xs text-zinc-500 mt-1">Database schema and basic API structure.</p>
</div>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-pearl/10 text-pearl border border-pearl/20">Done</span>
</div>
</div>

<div className="node-line relative pb-6 pl-6 border-l border-zinc-800">
<div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-teal ring-4 ring-dark-900"></div>
<div className="flex justify-between items-start -mt-1.5">
<div>
<h4 className="text-sm font-medium text-zinc-200">Local LLM Integration</h4>
<p className="text-xs text-zinc-500 mt-1">Python service &amp; GGUF model loader implementation.</p>
</div>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-teal/10 text-teal border border-teal/20">In Progress</span>
</div>
</div>

<div className="relative pl-6 border-l border-zinc-800 border-dashed">
<div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
<div className="flex justify-between items-start -mt-1.5">
<div>
<h4 className="text-sm font-medium text-zinc-500">Spatial UI &amp; 3D Views</h4>
<p className="text-xs text-zinc-600 mt-1">Galaxy scene implementation using R3F.</p>
</div>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-500 border border-white/5">Pending</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-white/5 bg-zinc-900/30 p-1 hover:border-white/10 transition-colors">
<div className="p-4">
<h3 className="text-xs font-medium text-zinc-500 mb-3 flex items-center gap-2 uppercase tracking-wider">
<i className="w-3 h-3" data-lucide="check-square"></i> Generated Action Items
                            </h3>
<div className="space-y-2">
<label className="flex items-start gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors group/item">
<input checked="" className="custom-checkbox mt-0.5" type="checkbox"/>
<div className="flex-1">
<span className="text-sm text-zinc-500 line-through decoration-zinc-600">Setup PostgreSQL with pgvector extension</span>
</div>
</label>
<label className="flex items-start gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors group/item">
<input className="custom-checkbox mt-0.5" type="checkbox"/>
<div className="flex-1">
<span className="text-sm text-zinc-300">Implement WebSocket handler for token streaming</span>
<div className="flex gap-2 mt-1.5">
<span className="text-[10px] text-mauve bg-mauve/10 px-1.5 rounded">High Priority</span>
</div>
</div>
<div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
<div className="w-5 h-5 rounded-full bg-zinc-700 text-[9px] flex items-center justify-center text-zinc-300">JD</div>
</div>
</label>
<label className="flex items-start gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors group/item">
<input className="custom-checkbox mt-0.5" type="checkbox"/>
<div className="flex-1">
<span className="text-sm text-zinc-300">Design "Island" shader for notebook visualization</span>
</div>
</label>
</div>

<div className="flex items-center gap-3 p-2 mt-1 opacity-50 hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-zinc-500" data-lucide="plus"></i>
<input className="bg-transparent text-sm outline-none text-zinc-300 w-full placeholder:text-zinc-600" placeholder="Add a new task..." type="text"/>
</div>
</div>
</div>

<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group">
<div className="absolute inset-0 bg-gradient-to-br from-black to-zinc-900"></div>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(white 1px, transparent 0)', backgroundSize: '40px 40px', opacity: '0.1'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pearl/5 rounded-full blur-3xl"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<i className="w-8 h-8 text-zinc-600 mb-2" data-lucide="cuboid"></i>
<span className="text-xs text-zinc-500">Interactive Island Scene</span>
<button className="mt-4 px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs rounded border border-white/5 transition-colors">Load Renderer</button>
</div>
<div className="absolute top-3 left-3 px-2 py-1 bg-black/60 rounded text-[10px] text-zinc-400 font-mono border border-white/5">WEBGL CANVAS</div>
</div>
</div>
</div>
</main>

<aside className="w-80 flex flex-col border-l border-white/5 bg-zinc-900/30 backdrop-blur-md relative z-20">

<div className="h-14 flex items-center justify-between px-4 border-b border-white/5">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-pearl" data-lucide="sparkles"></i>
<span className="text-xs font-medium text-zinc-200">Collaborator</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-white/5 rounded-md text-zinc-400 hover:text-zinc-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="history"></i>
</button>
<button className="p-1.5 hover:bg-white/5 rounded-md text-zinc-400 hover:text-zinc-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="sliders"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-zinc-800 border border-white/5 flex-shrink-0 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="bot"></i>
</div>
<div className="text-xs text-zinc-500 leading-relaxed">
                        I have context on the current page "Q4 Execution Strategy". I can help you expand the roadmap or generate tasks based on the MVP requirements.
                    </div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-6 h-6 rounded bg-zinc-700 flex-shrink-0 flex items-center justify-center text-[10px] text-zinc-300">JD</div>
<div className="bg-zinc-800/50 border border-white/5 px-3 py-2 rounded-lg rounded-tr-sm text-xs text-zinc-200 leading-relaxed max-w-[85%]">
                        Create a todo list for the Local LLM Integration phase based on the GGUF requirements we discussed.
                    </div>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-br from-pearl to-teal flex-shrink-0 flex items-center justify-center shadow-[0_0_10px_rgba(130,212,187,0.2)]">
<i className="w-3 h-3 text-dark-900" data-lucide="sparkles"></i>
</div>
<div className="flex-1 space-y-3">
<div className="text-xs text-zinc-300 leading-relaxed">
                            Based on the technical specs, here is a breakdown for the integration module:
                        </div>

<div className="bg-zinc-950/50 border border-teal/20 rounded-lg p-3 relative overflow-hidden group">
<div className="absolute inset-0 bg-teal/5 pointer-events-none"></div>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-medium text-teal uppercase tracking-wider">Proposed Block</span>
<div className="flex gap-1">
<button className="p-1 hover:bg-teal/20 rounded text-teal transition-colors" title="Insert into page">
<i className="w-3.5 h-3.5" data-lucide="plus-circle"></i>
</button>
</div>
</div>
<div className="space-y-1.5 opacity-80">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<div className="w-3 h-3 border border-zinc-600 rounded"></div>
<span>Download llama.cpp python bindings</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<div className="w-3 h-3 border border-zinc-600 rounded"></div>
<span>Create ModelManager class</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<div className="w-3 h-3 border border-zinc-600 rounded"></div>
<span>Implement /v1/chat/completions endpoint</span>
</div>
</div>
</div>
<div className="text-xs text-zinc-500 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-pearl animate-pulse"></span>
<span className="italic">Thinking about edge cases...</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-zinc-900/50">

<div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar">
<button className="flex-shrink-0 px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-pearl/30 rounded-full text-[10px] text-zinc-400 hover:text-pearl transition-all flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="list-todo"></i> Make Todos
                    </button>
<button className="flex-shrink-0 px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-teal/30 rounded-full text-[10px] text-zinc-400 hover:text-teal transition-all flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="milestone"></i> Make Roadmap
                    </button>
<button className="flex-shrink-0 px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-mauve/30 rounded-full text-[10px] text-zinc-400 hover:text-mauve transition-all flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="file-text"></i> Summarize
                    </button>
</div>
<div className="relative">
<textarea className="w-full bg-zinc-950/50 border border-white/10 rounded-lg pl-3 pr-10 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-pearl/50 focus:ring-1 focus:ring-pearl/20 transition-all resize-none h-20" placeholder="Ask AI to edit, generate, or explain..."></textarea>
<button className="absolute bottom-2.5 right-2.5 p-1.5 bg-zinc-100 hover:bg-white text-dark-900 rounded-md transition-colors shadow-lg shadow-white/5">
<i className="w-3.5 h-3.5" data-lucide="arrow-up"></i>
</button>
</div>
<div className="flex justify-between items-center mt-2 px-1">
<div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
<i className="w-3 h-3" data-lucide="cpu"></i>
<span>Mistral 7B (Local)</span>
</div>
<span className="text-[9px] text-zinc-600">0.00$ / privacy-first</span>
</div>
</div>
</aside>
</div>



    </>
  );
}
