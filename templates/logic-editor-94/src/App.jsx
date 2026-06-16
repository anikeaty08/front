import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple logic to handle Drag and Drop interactivity
        const draggables = document.querySelectorAll('.variable-item');
        const dropZone = document.getElementById('drop-zone');
        const dropOverlay = document.getElementById('drop-overlay');
        const editor = document.getElementById('code-editor');

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', (e) => {
                // Get the data-insert attribute
                const insertText = draggable.getAttribute('data-insert');
                e.dataTransfer.setData('text/plain', insertText);
                e.dataTransfer.effectAllowed = 'copy';
                
                // Visual feedback
                draggable.classList.add('opacity-50');
            });

            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('opacity-50');
                dropOverlay.classList.add('hidden');
            });
        });

        // Editor Drop Zone Events
        dropZone.addEventListener('dragenter', (e) => {
            e.preventDefault();
            dropOverlay.classList.remove('hidden');
        });

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necessary to allow dropping
            e.dataTransfer.dropEffect = 'copy';
            dropOverlay.classList.remove('hidden');
        });

        dropZone.addEventListener('dragleave', (e) => {
            // Check if leaving the dropzone container itself
            if(e.target.id === 'code-editor' && e.relatedTarget && !dropZone.contains(e.relatedTarget)) {
                dropOverlay.classList.add('hidden');
            }
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropOverlay.classList.add('hidden');
            
            const textToInsert = e.dataTransfer.getData('text/plain');
            
            if (textToInsert) {
                const textarea = document.getElementById('code-editor');
                const startPos = textarea.selectionStart;
                const endPos = textarea.selectionEnd;
                const text = textarea.value;

                // Insert text at cursor position or mouse position if possible (simplified here to cursor)
                textarea.value = text.substring(0, startPos) + textToInsert + text.substring(endPos);
                
                // Move cursor after inserted text
                const newPos = startPos + textToInsert.length;
                textarea.setSelectionRange(newPos, newPos);
                textarea.focus();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-white w-full max-w-6xl h-[85vh] rounded-xl border border-zinc-200 shadow-xl shadow-zinc-200/50 flex flex-col overflow-hidden">

<header className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 bg-white shrink-0">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center border border-zinc-200 text-zinc-500">
<iconify-icon icon="solar:programming-linear" width="18"></iconify-icon>
</div>
<div>
<h1 className="text-sm font-medium text-zinc-900 tracking-tight">Credit Policy Logic</h1>
<p className="text-xs text-zinc-400 flex items-center gap-1">
                        Configuring Node: <span className="font-mono text-zinc-600">policy_check_v2</span>
</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-800 px-3 py-1.5 rounded-md hover:bg-zinc-50 transition-colors">Discard</button>
<button className="text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-3 py-1.5 rounded-md transition-colors shadow-sm">Save Changes</button>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="w-80 border-r border-zinc-100 flex flex-col bg-zinc-50/30">

<div className="p-4 border-b border-zinc-100">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Input Data</span>
<span className="text-[10px] bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200">Read-only</span>
</div>

<div className="relative group">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-600 transition-colors" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="w-full bg-white border border-zinc-200 rounded-md py-1.5 pl-8 pr-3 text-xs text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-300 focus:ring-1 focus:ring-zinc-200 transition-all" placeholder="Filter variables..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto p-2 space-y-1 select-none" id="schema-tree">

<details className="group/node" open="">
<summary className="flex items-center gap-2 px-2 py-1.5 hover:bg-zinc-100 rounded cursor-pointer transition-colors text-zinc-700">
<iconify-icon className="text-zinc-400 transition-transform group-open/node:rotate-90" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<iconify-icon className="text-emerald-600/80" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Validar CPF 1</span>
</summary>
<div className="pl-7 pr-1 py-1 space-y-0.5">

<div className="variable-item flex items-center justify-between group/item px-2 py-1 rounded hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 cursor-grab active:cursor-grabbing transition-all" data-insert="# Validar CPF 1.score" draggable="true">
<div className="flex items-center gap-2 min-w-0">
<span className="text-[10px] font-mono font-medium text-blue-500 bg-blue-50 px-1 rounded">#</span>
<span className="text-xs font-mono text-zinc-600 truncate">score</span>
</div>
<span className="text-[10px] text-zinc-400 font-mono group-hover/item:text-zinc-500">number</span>
</div>

<div className="variable-item flex items-center justify-between group/item px-2 py-1 rounded hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 cursor-grab active:cursor-grabbing transition-all" data-insert="# Validar CPF 1.situation" draggable="true">
<div className="flex items-center gap-2 min-w-0">
<iconify-icon className="text-emerald-500" icon="solar:text-field-linear" width="12"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 truncate">situation</span>
</div>
<span className="text-[10px] text-zinc-400 font-mono group-hover/item:text-zinc-500">string</span>
</div>

<div className="variable-item flex items-center justify-between group/item px-2 py-1 rounded hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 cursor-grab active:cursor-grabbing transition-all" data-insert="# Validar CPF 1.verified" draggable="true">
<div className="flex items-center gap-2 min-w-0">
<iconify-icon className="text-orange-500" icon="solar:check-square-linear" width="12"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 truncate">verified</span>
</div>
<span className="text-[10px] text-zinc-400 font-mono group-hover/item:text-zinc-500">boolean</span>
</div>
</div>
</details>

<details className="group/node" open="">
<summary className="flex items-center gap-2 px-2 py-1.5 hover:bg-zinc-100 rounded cursor-pointer transition-colors text-zinc-700">
<iconify-icon className="text-zinc-400 transition-transform group-open/node:rotate-90" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<iconify-icon className="text-purple-600/80" icon="solar:database-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Base Latitude</span>
</summary>
<div className="pl-7 pr-1 py-1 space-y-0.5">

<div className="variable-item flex items-center justify-between group/item px-2 py-1 rounded hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 cursor-grab active:cursor-grabbing transition-all" data-insert="# Base Latitude.region" draggable="true">
<div className="flex items-center gap-2 min-w-0">
<iconify-icon className="text-emerald-500" icon="solar:text-field-linear" width="12"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 truncate">region</span>
</div>
<span className="text-[10px] text-zinc-400 font-mono group-hover/item:text-zinc-500">string</span>
</div>

<div className="variable-item flex items-center justify-between group/item px-2 py-1 rounded hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 cursor-grab active:cursor-grabbing transition-all" data-insert="# Base Latitude.raw_data" draggable="true">
<div className="flex items-center gap-2 min-w-0">
<iconify-icon className="text-purple-500" icon="solar:code-square-linear" width="12"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 truncate">raw_data</span>
</div>
<span className="text-[10px] text-zinc-400 font-mono group-hover/item:text-zinc-500">object</span>
</div>
</div>
</details>

<details className="group/node">
<summary className="flex items-center gap-2 px-2 py-1.5 hover:bg-zinc-100 rounded cursor-pointer transition-colors text-zinc-700">
<iconify-icon className="text-zinc-400 transition-transform group-open/node:rotate-90" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<iconify-icon className="text-amber-500/80" icon="solar:bolt-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Webhook Trigger</span>
</summary>
<div className="pl-7 pr-1 py-1 space-y-0.5">

<div className="variable-item flex items-center justify-between group/item px-2 py-1 rounded hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 cursor-grab active:cursor-grabbing transition-all" data-insert="# Webhook.body" draggable="true">
<div className="flex items-center gap-2 min-w-0">
<iconify-icon className="text-purple-500" icon="solar:code-square-linear" width="12"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 truncate">body</span>
</div>
<span className="text-[10px] text-zinc-400 font-mono group-hover/item:text-zinc-500">json</span>
</div>
</div>
</details>
</div>

<div className="p-3 border-t border-zinc-100 bg-white">
<p className="text-[10px] text-zinc-400 leading-tight">
<span className="font-medium text-zinc-500">Tip:</span> Drag variables directly into the code editor to reference them.
                    </p>
</div>
</aside>

<main className="flex-1 flex flex-col bg-white relative">

<div className="h-10 border-b border-zinc-100 flex items-center justify-between px-4 bg-white/50 backdrop-blur-sm z-10">
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-500">Logic Editor</span>
<div className="h-3 w-[1px] bg-zinc-200"></div>
<div className="flex items-center gap-2 text-zinc-400">
<iconify-icon icon="solar:file-code-linear" width="14"></iconify-icon>
<span className="text-xs">function.js</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 text-[10px] text-zinc-400 border border-zinc-100 rounded px-1.5 py-0.5 bg-zinc-50">
<iconify-icon icon="solar:keyboard-linear" width="10"></iconify-icon> JavaScript
                        </span>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:maximize-square-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 relative flex overflow-hidden">

<div className="w-10 bg-zinc-50/50 border-r border-zinc-100 flex flex-col items-end pt-4 pr-3 select-none text-zinc-300 font-mono text-xs leading-6">
<span>1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>5</span>
<span>6</span>
<span>7</span>
<span>8</span>
<span>9</span>
<span>10</span>
</div>

<div className="flex-1 relative group cursor-text" id="drop-zone">
<textarea className="absolute inset-0 w-full h-full bg-transparent resize-none outline-none border-none p-4 font-mono text-xs leading-6 text-zinc-700 placeholder:text-zinc-300 z-10" id="code-editor" spellcheck="false">// Define approval logic based on upstream data
// Drag variables from the left sidebar to insert them

if ( /* Drop variable here */ &gt; 750 ) {
    return {
        approved: true,
        limit: 5000,
        factor: /* Drop variable here */
    };
} else {
    return {
        approved: false,
        reason: "Score insufficient"
    };
}</textarea>

<div className="absolute inset-0 bg-blue-50/30 border-2 border-blue-500/50 border-dashed rounded-lg m-2 z-0 hidden pointer-events-none flex items-center justify-center" id="drop-overlay">
<div className="bg-white/90 backdrop-blur px-4 py-2 rounded shadow-sm border border-blue-100 text-blue-600 text-xs font-medium flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                                Drop Variable Here
                            </div>
</div>
</div>
</div>

<div className="h-8 border-t border-zinc-100 bg-zinc-50 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-[10px] font-medium text-zinc-500">Ready</span>
</div>
</div>
<span className="text-[10px] text-zinc-400">Aurabuild Flow Engine v2.1</span>
</div>
</main>
</div>
</div>


    </>
  );
}
