import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="flex items-center justify-between border-b border-zinc-800/60 bg-[#0a0a0a] px-4 md:px-6 py-3 shrink-0">
<div className="flex items-center gap-4">
<div className="h-8 w-8 bg-zinc-100 text-zinc-950 flex items-center justify-center rounded-md shadow-sm">
<span className="tracking-tighter font-semibold text-base">AI</span>
</div>
<h1 className="text-xl font-medium tracking-tight text-zinc-100 hidden sm:block">Refactor Mágico</h1>
<div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 ml-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                IA Analizando
            </div>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<button className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors flex items-center justify-center rounded-md hover:bg-zinc-900">
<iconify-icon className="text-lg" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-sm font-medium bg-zinc-100 text-zinc-900 px-4 py-1.5 rounded-md hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">Aprobar y Guardar</span>
</button>
</div>
</header>

<div className="flex flex-1 overflow-hidden flex-col md:flex-row">

<aside className="w-full md:w-72 border-b md:border-b-0 md:border-r border-zinc-800/60 bg-[#0a0a0a] flex flex-col overflow-y-auto shrink-0 hidden md:flex">
<div className="p-5 space-y-8">

<div>
<h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
                        Objetivo de Migración
                    </h2>
<div className="space-y-4">
<div>
<label className="text-[11px] font-medium text-zinc-500 mb-1.5 block">API Actual Detectada</label>
<div className="w-full bg-[#050505] border border-zinc-800/60 text-zinc-400 text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-not-allowed">
<iconify-icon icon="solar:code-file-linear" strokeWidth="1.5"></iconify-icon>
                                Google Gemini
                            </div>
</div>
<div>
<label className="text-[11px] font-medium text-zinc-500 mb-1.5 block">Migrar hacia</label>
<div className="relative group">
<select className="w-full appearance-none bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm rounded-md px-3 py-2 outline-none focus:border-zinc-500 transition-all cursor-pointer">
<option>Groq API</option>
<option>OpenAI API</option>
<option>Anthropic Claude</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-zinc-400 pointer-events-none group-hover:text-zinc-200 transition-colors" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>

<div>
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                        Instrucciones para IA
                    </label>
<textarea className="w-full bg-[#050505] border border-zinc-800 text-zinc-300 text-xs rounded-md px-3 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none h-32 leading-relaxed" placeholder="Escribe tus instrucciones aquí...">Quiero cambiar de gemini a groq pero que sigan con todas las funciones intactas. No tengo idea de dónde están los cambios, hazlo tú y mantén todo funcionando.</textarea>
<button className="mt-3 w-full bg-zinc-800 text-zinc-200 hover:bg-zinc-700 transition-colors text-xs py-2 rounded-md flex items-center justify-center gap-2 font-medium">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Generar Solución
                    </button>
</div>

<div>
<h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Restricciones</h2>
<div className="space-y-4">
<div className="flex items-center justify-between group cursor-pointer">
<label className="text-xs text-zinc-300 group-hover:text-zinc-100 transition-colors cursor-pointer">Preservar nombres de funciones</label>
<div className="w-7 h-4 bg-zinc-200 rounded-full flex items-center p-0.5 transition-colors">
<div className="w-3 h-3 bg-zinc-900 rounded-full shadow-sm translate-x-3 transition-transform"></div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<label className="text-xs text-zinc-300 group-hover:text-zinc-100 transition-colors cursor-pointer">Mantener tipado original</label>
<div className="w-7 h-4 bg-zinc-200 rounded-full flex items-center p-0.5 transition-colors">
<div className="w-3 h-3 bg-zinc-900 rounded-full shadow-sm translate-x-3 transition-transform"></div>
</div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-[#050505] overflow-hidden relative">

<div className="flex items-center border-b border-zinc-800/60 bg-[#0a0a0a] shrink-0 gap-px">
<div className="flex-1 flex items-center gap-2 px-4 py-2 bg-[#050505] border-t-2 border-t-red-500/20 text-xs text-zinc-400 cursor-default justify-center">
<iconify-icon className="text-red-400" icon="solar:file-remove-linear" strokeWidth="1.5"></iconify-icon>
                    main.py (Original - Gemini)
                </div>
<div className="w-px h-full bg-zinc-800/60"></div>
<div className="flex-1 flex items-center gap-2 px-4 py-2 bg-[#050505] border-t-2 border-t-green-500/20 text-xs text-zinc-200 cursor-default justify-center">
<iconify-icon className="text-green-400" icon="solar:file-check-linear" strokeWidth="1.5"></iconify-icon>
                    main.py (Refactorizado - Groq)
                </div>
</div>

<div className="flex-1 flex overflow-auto w-full">

<div className="flex-1 min-w-[350px] p-4 font-mono text-xs leading-loose text-zinc-400 border-r border-zinc-800/60 overflow-x-auto bg-[#0a0a0a]/30">
<div className="flex gap-4">
<div className="flex flex-col text-right text-zinc-700 select-none shrink-0 w-4">
                            1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13
                        </div>
<div className="flex-1 whitespace-pre">
<span className="text-[#c678dd]">import</span> os
<span className="bg-red-500/10 px-1 rounded block"><span className="text-[#c678dd]">import</span> google.generativeai <span className="text-[#c678dd]">as</span> genai</span>
<span className="text-[#61afef]">def</span> <span className="text-[#e5c07b]">procesar_datos_usuario</span>(texto: <span className="text-[#56b6c2]">str</span>) -&gt; <span className="text-[#56b6c2]">str</span>:
    <span className="text-zinc-600 italic"># Función clave de negocio, no modificar lógica</span>
    texto_limpio = texto.strip()
    
<span className="bg-red-500/10 px-1 rounded block">    genai.configure(api_key=os.environ[<span className="text-[#98c379]">"GEMINI_KEY"</span>])</span>
<span className="bg-red-500/10 px-1 rounded block">    modelo = genai.GenerativeModel(<span className="text-[#98c379]">'gemini-pro'</span>)</span>
<span className="bg-red-500/10 px-1 rounded block">    respuesta = modelo.generate_content(texto_limpio)</span>
<span className="bg-red-500/10 px-1 rounded block"> <span className="text-[#c678dd]">return</span> respuesta.text</span>
</div>
</div>
</div>

<div className="flex-1 min-w-[350px] p-4 font-mono text-xs leading-loose text-zinc-300 overflow-x-auto">
<div className="flex gap-4">
<div className="flex flex-col text-right text-zinc-700 select-none shrink-0 w-4">
                            1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15
                        </div>
<div className="flex-1 whitespace-pre">
<span className="text-[#c678dd]">import</span> os
<span className="bg-green-500/10 px-1 rounded block"><span className="text-[#c678dd]">from</span> groq <span className="text-[#c678dd]">import</span> Groq</span>
<span className="text-[#61afef]">def</span> <span className="text-[#e5c07b]">procesar_datos_usuario</span>(texto: <span className="text-[#56b6c2]">str</span>) -&gt; <span className="text-[#56b6c2]">str</span>:
    <span className="text-zinc-500 italic"># Función clave de negocio, no modificar lógica</span>
    texto_limpio = texto.strip()
    
<span className="bg-green-500/10 px-1 rounded block">    cliente = Groq(api_key=os.environ.get(<span className="text-[#98c379]">"GROQ_API_KEY"</span>))</span>
<span className="bg-green-500/10 px-1 rounded block">    respuesta = cliente.chat.completions.create(</span>
<span className="bg-green-500/10 px-1 rounded block">        messages=[{<span className="text-[#98c379]">"role"</span>: <span className="text-[#98c379]">"user"</span>, <span className="text-[#98c379]">"content"</span>: texto_limpio}],</span>
<span className="bg-green-500/10 px-1 rounded block">        model=<span className="text-[#98c379]">"llama3-8b-8192"</span></span>
<span className="bg-green-500/10 px-1 rounded block">    )</span>
<span className="bg-green-500/10 px-1 rounded block"> <span className="text-[#c678dd]">return</span> respuesta.choices[<span className="text-[#d19a66]">0</span>].message.content</span>
</div>
</div>
</div>
</div>

<div className="h-44 border-t border-zinc-800/60 bg-[#0a0a0a] flex flex-col shrink-0">
<div className="flex items-center gap-4 px-4 py-2 border-b border-zinc-800/60 text-xs font-medium text-zinc-500">
<button className="text-zinc-200 border-b-2 border-blue-500 pb-2 -mb-[9px] flex items-center gap-1.5">
<iconify-icon icon="solar:code-scan-linear" strokeWidth="1.5"></iconify-icon>
                        Registro de IA
                    </button>
<button className="hover:text-zinc-300 transition-colors pb-2 -mb-[9px]">Dependencias</button>
<div className="ml-auto flex items-center gap-2">
<button className="hover:text-zinc-300"><iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon></button>
<button className="hover:text-zinc-300"><iconify-icon icon="solar:arrow-up-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</div>
<div className="p-4 font-mono text-[11px] leading-relaxed text-zinc-400 overflow-y-auto space-y-1">
<div className="flex gap-2"><span className="text-blue-400">[IA]</span> <span className="text-zinc-300">Analizando el árbol sintáctico (AST) de main.py...</span></div>
<div className="flex gap-2"><span className="text-blue-400">[IA]</span> <span>Detectadas dependencias de google.generativeai.</span></div>
<div className="flex gap-2"><span className="text-blue-400">[IA]</span> <span>Identificada función objetivo: <span className="text-zinc-300">procesar_datos_usuario</span> (Línea 4).</span></div>
<div className="flex gap-2"><span className="text-green-400">[OK]</span> <span>Estructura de la función y parámetros guardados.</span></div>
<div className="flex gap-2"><span className="text-blue-400">[IA]</span> <span>Generando código equivalente utilizando el SDK oficial de Groq...</span></div>
<div className="flex gap-2"><span className="text-green-400">[ÉXITO]</span> <span className="text-zinc-200">Refactorización completada. Por favor, revisa el código de la derecha y haz clic en "Aprobar y Guardar".</span></div>
<div className="flex items-center gap-2 mt-2">
<span className="text-blue-400">❯</span>
<div className="w-1.5 h-3 bg-zinc-400 animate-pulse"></div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
