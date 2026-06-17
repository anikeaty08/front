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
      

<header className="w-full max-w-2xl flex justify-between items-center mb-12">
<div className="font-medium tracking-tighter text-lg flex items-center gap-2.5 text-white">
<div className="w-7 h-7 bg-white rounded-md flex items-center justify-center text-zinc-950 text-xs tracking-normal font-medium">
                AG
            </div>
            AGENT
        </div>
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-zinc-400" icon="solar:user-linear"></iconify-icon>
</div>
</header>

<main className="w-full max-w-2xl flex flex-col gap-8">

<div>
<h1 className="text-2xl font-medium tracking-tight mb-1.5 text-white">Settings</h1>
<p className="text-sm text-zinc-400">Manage your agent's operational status and knowledge sources.</p>
</div>

<section className="bg-zinc-900/80 border border-zinc-800/80 rounded-xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all">
<div className="flex flex-col gap-1">
<h2 className="text-base font-medium flex items-center gap-2 text-zinc-100">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:power-button-linear"></iconify-icon>
                    Agent Status
                </h2>
<p className="text-sm text-zinc-400 max-w-sm">
                    Toggle to enable or disable the AI agent. When disabled, it will not respond to user inquiries.
                </p>
</div>
<div className="flex items-center gap-4 self-start sm:self-auto bg-zinc-950/50 py-2 px-3 rounded-lg border border-zinc-800/80">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-sm font-medium text-emerald-400 pr-1">Active</span>
</div>

<button aria-checked="true" className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-emerald-500 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-900" role="switch" type="button">
<span className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
</section>

<section className="bg-zinc-900/80 border border-zinc-800/80 rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="p-5 sm:p-6 border-b border-zinc-800/80 flex flex-col gap-1 bg-zinc-900/80 z-10">
<h2 className="text-base font-medium flex items-center gap-2 text-zinc-100">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:database-linear"></iconify-icon>
                    Knowledge Base
                </h2>
<p className="text-sm text-zinc-400">
                    Upload documents to expand your agent's context and improve response accuracy.
                </p>
</div>
<div className="p-5 sm:p-6 bg-[#0E0E11]/50 flex-grow flex flex-col gap-4">

<div className="relative group flex justify-center rounded-lg border border-dashed border-zinc-700 px-6 py-12 hover:border-zinc-500 hover:bg-zinc-800/30 transition-all duration-200 cursor-pointer">
<div className="text-center">
<div className="mx-auto h-12 w-12 text-zinc-500 group-hover:text-zinc-300 group-hover:scale-105 transition-all duration-200 flex items-center justify-center bg-zinc-900 rounded-full border border-zinc-700/80 shadow-sm mb-4">
<iconify-icon className="text-xl" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<div className="mt-4 flex text-sm leading-6 text-zinc-400 justify-center items-center gap-1">
<label className="relative cursor-pointer rounded-md bg-transparent font-medium text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-zinc-400 focus-within:ring-offset-2 focus-within:ring-offset-zinc-900 hover:text-zinc-200" htmlFor="file-upload">
<span>Click to upload</span>
<input className="sr-only" id="file-upload" name="file-upload" type="file"/>
</label>
<p className="text-zinc-500">or drag and drop</p>
</div>
<p className="text-xs leading-5 text-zinc-600 mt-1">Supports PDF, DOCX, TXT up to 10MB</p>
</div>
</div>

<div className="flex items-center justify-between p-3 border border-zinc-800 rounded-lg bg-zinc-900/80 shadow-sm transition-all hover:border-zinc-700">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-md bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<p className="text-sm font-medium text-zinc-200 leading-tight">product_manual_v2.pdf</p>
<p className="text-xs text-zinc-500 mt-0.5">3.2 MB • Uploaded 2 mins ago</p>
</div>
</div>
<button aria-label="Remove file" className="text-zinc-500 hover:text-red-400 hover:bg-red-500/10 p-2 rounded-md transition-colors flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

    </>
  );
}
