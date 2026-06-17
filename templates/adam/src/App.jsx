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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      });
    
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
      
<div className="mx-auto max-w-3xl px-6 py-10">
<header className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="relative">
<div className="size-10 rounded-xl bg-neutral-900 ring-1 ring-white/10 grid place-items-center">
<i className="size-5 text-neutral-200" data-lucide="wrench"></i>
</div>
</div>
<div>
<h1 className="text-2xl tracking-tight font-semibold leading-tight">Iterative Update Request</h1>
<p className="text-sm text-neutral-400">Share your current file and the exact, minimal edits.</p>
</div>
</div>
</header>
<section className="rounded-2xl ring-1 ring-white/10 bg-neutral-900/40 backdrop-blur p-5 md:p-6">
<div className="flex items-start gap-3 pb-4 border-b border-white/10">
<div className="size-8 rounded-lg bg-neutral-900 ring-1 ring-white/10 grid place-items-center">
<i className="size-4 text-neutral-200" data-lucide="target"></i>
</div>
<div className="flex-1">
<h2 className="text-xl tracking-tight font-semibold leading-snug">What I need from you</h2>
<ul className="mt-2 text-sm text-neutral-300 space-y-1.5">
<li className="flex items-start gap-2">
<i className="size-4 mt-0.5 text-neutral-400" data-lucide="code-2"></i>
<span>Paste your current markup exactly as-is.</span>
</li>
<li className="flex items-start gap-2">
<i className="size-4 mt-0.5 text-neutral-400" data-lucide="list-checks"></i>
<span>Provide a concise list of changes. I will modify only those parts.</span>
</li>
<li className="flex items-start gap-2">
<i className="size-4 mt-0.5 text-neutral-400" data-lucide="shield-check"></i>
<span>Structure and design will be preserved; updates will be iterative and minimal.</span>
</li>
</ul>
</div>
</div>
<div className="mt-5 grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-2">
<div className="flex flex-col">
<label className="text-sm font-medium text-neutral-200 mb-2 flex items-center gap-2">
<i className="size-4 text-neutral-300" data-lucide="file-input"></i>
              Current code
            </label>
<div className="relative">
<textarea className="w-full h-56 md:h-64 resize-y rounded-xl bg-neutral-950/70 text-neutral-100 placeholder:text-neutral-500 p-4 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none" placeholder="Paste your existing markup here..." style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace', fontSize: '13px', lineHeight: '1.5'}}></textarea>
<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
</div>
<p className="mt-2 text-xs text-neutral-400">Include the full file so mapping changes stays exact.</p>
</div>
<div className="flex flex-col">
<label className="text-sm font-medium text-neutral-200 mb-2 flex items-center gap-2">
<i className="size-4 text-neutral-300" data-lucide="list"></i>
              Minimal change list
            </label>
<div className="relative">
<textarea className="w-full h-56 md:h-64 resize-y rounded-xl bg-neutral-950/70 text-neutral-100 placeholder:text-neutral-500 p-4 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none" placeholder="- Update button label to “Save”
- Replace logo image
- Increase card padding on mobile
(Only list what should change.)" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', \'Apple Color Emoji\', \'Segoe UI Emoji\'', fontSize: '14px', lineHeight: '1.55'}}></textarea>
<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
</div>
<p className="mt-2 text-xs text-neutral-400">Be specific. If something shouldn’t change, don’t include it.</p>
</div>
</div>
<div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="size-4 text-neutral-400" data-lucide="info"></i>
            I’ll return a single updated file with only the requested edits.
          </div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 bg-neutral-800 text-neutral-200 ring-1 ring-white/10 hover:bg-neutral-700 transition" type="button">
<i className="size-4" data-lucide="clipboard-paste"></i>
              Paste now
            </button>
</div>
</div>
</section>
<footer className="mt-8 flex items-center justify-between text-xs text-neutral-500">
<div className="flex items-center gap-2">
<i className="size-4" data-lucide="sparkles"></i>
          Minimal, precise updates — no unintended changes.
        </div>
<div className="text-neutral-600">Ready when you are.</div>
</footer>
</div>



    </>
  );
}
