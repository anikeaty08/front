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



    // Element refs
    const roleEl = document.getElementById('role');
    const promptEl = document.getElementById('prompt-main');
    const varsList = document.getElementById('vars-list');
    const addVarBtn = document.getElementById('addVarBtn');
    const previewEl = document.getElementById('preview');
    const copyBtn = document.getElementById('copyBtn');
    const saveBtn = document.getElementById('saveBtn');
    // State
    let variables = [];
    function renderVars() {
      varsList.innerHTML = '';
      for (let i = 0; i < variables.length; i++) {
        const v = variables[i];
        const row = document.createElement('div');
        row.className = 'flex gap-2 items-center';
        row.innerHTML = `
          <input type="text" value="${v.name}" data-idx="${i}" data-type="name" placeholder="Name" class="bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs flex-1 focus:ring-1 focus:ring-amber-400 outline-none" />
          <input type="text" value="${v.value}" data-idx="${i}" data-type="value" placeholder="Value" class="bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs flex-1 focus:ring-1 focus:ring-amber-400 outline-none" />
          <button data-idx="${i}" class="text-xs text-zinc-400 hover:text-red-400 px-1">&times;</button>
        `;
        row.querySelectorAll('input').forEach(input => {
          input.oninput = (e) => {
            const idx = parseInt(e.target.dataset.idx);
            variables[idx][e.target.dataset.type] = e.target.value;
            renderPreview();
          };
        });
        row.querySelector('button').onclick = (e) => {
          variables.splice(i, 1);
          renderVars();
          renderPreview();
        };
        varsList.appendChild(row);
      }
    }
    addVarBtn.onclick = () => {
      variables.push({ name: '', value: '' });
      renderVars();
    };
    function renderPreview() {
      let prompt = promptEl.value;
      variables.forEach(v => {
        if (v.name) {
          const re = new RegExp(`\{${v.name}\}`, 'g');
          prompt = prompt.replace(re, v.value || `{${v.name}}`);
        }
      });
      const roleText = roleEl.value ? `[${roleEl.value}]\n
` : '';
      previewEl.textContent = roleText + prompt;
    }
    [promptEl, roleEl].forEach(el => el.oninput = renderPreview);
    // Initial
    renderVars();
    renderPreview();
    // Copy btn
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(previewEl.textContent);
      copyBtn.textContent = "Copied!";
      setTimeout(() => copyBtn.textContent = "Copy", 1200);
    };
    // Save btn (localStorage)
    function savePrompt() {
      const promptData = {
        role: roleEl.value,
        prompt: promptEl.value,
        variables: variables
      };
      localStorage.setItem('prompt-builder-draft', JSON.stringify(promptData));
      saveBtn.textContent = "Saved!";
      setTimeout(() => saveBtn.textContent = "Save", 1200);
    }
    saveBtn.onclick = savePrompt;
    // Load draft on start
    const draft = localStorage.getItem('prompt-builder-draft');
    if (draft) {
      try {
        const data = JSON.parse(draft);
        roleEl.value = data.role || "";
        promptEl.value = data.prompt || "";
        variables = Array.isArray(data.variables) ? data.variables : [];
        renderVars();
        renderPreview();
      } catch {}
    }
  
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
      
<div className="w-[26rem] bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg overflow-hidden">

<div className="p-4 border-b border-zinc-800 flex justify-between items-center">
<h3 className="text-sm font-medium">Prompt Builder</h3>
<button className="text-zinc-400 hover:text-zinc-200">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="p-4">

<div className="mb-3">
<label className="block text-xs text-zinc-400 mb-1" htmlFor="role">Role/Instruction</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 outline-none" id="role" placeholder="e.g., You are a helpful assistant" type="text"/>
</div>

<div className="mb-3">
<label className="block text-xs text-zinc-400 mb-1" htmlFor="prompt-main">
          Main Prompt <span className="text-zinc-500">(use <code className="bg-zinc-700 px-1 rounded text-amber-300">{variable}</code> to insert variables)</span>
</label>
<textarea className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 outline-none" id="prompt-main" placeholder="Write your prompt here..." rows="4"></textarea>
</div>

<div className="mb-4">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-zinc-400">Variables</span>
<button className="text-xs text-indigo-400 hover:text-indigo-300" id="addVarBtn" type="button">+ Add</button>
</div>
<div className="space-y-2" id="vars-list"></div>
</div>

<div className="mb-4">
<div className="flex items-center mb-1">
<span className="text-xs text-zinc-400">Preview</span>
</div>
<div className="w-full min-h-[70px] bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-xs text-zinc-100 font-mono whitespace-pre-line overflow-x-auto" id="preview"></div>
</div>

<div className="flex gap-2">
<button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded text-xs font-medium transition-colors" id="copyBtn">Copy</button>
<button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 py-2 rounded text-xs font-medium transition-colors" id="saveBtn">Save</button>
</div>
</div>

<div className="p-3 border-t border-zinc-800 text-[10px] text-zinc-500 flex items-center">
<svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 17v-2a4 4 0 014-4h3m2 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h7l5 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
      Prompts are private and auto-saved locally.
    </div>
</div>


    </>
  );
}
