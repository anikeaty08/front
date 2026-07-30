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
      
    const tagsWrapper = document.getElementById('tagsWrapper');
    const tagInput    = document.getElementById('tagInput');
    const addTagBtn   = document.getElementById('addTagBtn');

    // Initial sample tags
    const tags = ['design', 'ui/ux', 'code', 'open-source'];

    // Render tags
    function renderTags() {
      tagsWrapper.innerHTML = '';
      tags.forEach((tag, index) => {
        const tagEl = document.createElement('span');
        tagEl.className =
          'inline-flex items-center gap-1.5 bg-slate-800 text-slate-200 text-sm font-medium px-3 py-1.5 rounded-full ' +
          'hover:ring-1 hover:ring-slate-500 transition-shadow duration-150';
        tagEl.innerHTML = `
          ${tag}
          <button data-index="${index}" class="hover:text-red-400 focus:outline-none">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        `;
        tagsWrapper.appendChild(tagEl);
      });
      lucide.replace({ strokeWidth: 1.5 });
      addDeleteListeners();
    }

    // Add delete handlers
    function addDeleteListeners() {
      tagsWrapper.querySelectorAll('button[data-index]').forEach(btn => {
        btn.onclick = e => {
          const i = e.currentTarget.getAttribute('data-index');
          tags.splice(i, 1);
          renderTags();
        }
      });
    }

    // Add new tag
    function addTag(val) {
      const trimmed = val.trim();
      if (trimmed && !tags.includes(trimmed)) {
        tags.push(trimmed);
        renderTags();
      }
      tagInput.value = '';
    }

    addTagBtn.onclick = () => addTag(tagInput.value);
    tagInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') addTag(tagInput.value);
    });

    // Initial render
    renderTags();
  
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
      
<div className="w-full max-w-xl px-6 py-10">

<h1 className="text-3xl font-semibold tracking-tight mb-6">Manage Tags</h1>

<div className="border border-slate-700 rounded-lg flex items-center px-4 py-2">
<input className="flex-1 bg-transparent outline-none placeholder-slate-500 text-slate-200" id="tagInput" placeholder="Add tag…" type="text" />
<button aria-label="Add tag" className="text-slate-400 hover:text-slate-200 transition-colors duration-150" id="addTagBtn">
<i className="w-5 h-5" data-lucide="plus-circle"></i>
</button>
</div>

<div className="my-6 h-px bg-slate-800"></div>

<div className="flex flex-wrap gap-3" id="tagsWrapper"></div>
</div>


    </>
  );
}
