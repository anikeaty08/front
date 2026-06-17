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



    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      
<div className="relative min-h-screen overflow-x-hidden">

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 [background:radial-gradient(70%_60%_at_50%_0%,rgba(99,102,241,0.12),transparent_60%)]"></div>
<div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>

<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen grid place-items-center">
<div className="w-full max-w-md rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 text-center">
<div className="mx-auto mb-4 h-12 w-12 rounded-lg border border-white/10 bg-white/5 grid place-items-center">
<i className="w-6 h-6 text-neutral-300" data-lucide="server-off"></i>
</div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Situs Dinonaktifkan</h1>
<p className="mt-2 text-neutral-300 text-sm">
          Seluruh konten telah dihapus dan situs ini tidak lagi aktif.
        </p>
<p className="mt-3 text-xs text-neutral-500">
          Jika Anda pemilik situs ini, Anda dapat mengaktifkannya kembali kapan saja.
        </p>
</div>
</main>
</div>


    </>
  );
}
