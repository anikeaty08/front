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



        const modal = document.getElementById('readMoreModal');
        const backdrop = document.getElementById('modalBackdrop');
        const panel = document.getElementById('modalPanel');

        function toggleModal(show) {
            if (show) {
                modal.classList.remove('hidden');
                setTimeout(() => {
                    backdrop.classList.remove('opacity-0');
                    panel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
                    panel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
                }, 10);
            } else {
                backdrop.classList.add('opacity-0');
                panel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
                panel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
                
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
        }
        
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && !modal.classList.contains('hidden')) {
                toggleModal(false);
            }
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
      

<div className="relative w-full max-w-sm group">

<div className="absolute -inset-0.5 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-2xl opacity-20 blur group-hover:opacity-40 transition duration-500"></div>
<div className="relative bg-neutral-900 border border-neutral-800/80 rounded-xl p-6 shadow-xl shadow-black/20 flex items-center">

<div className="text-sm leading-relaxed text-neutral-400">
<span>Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor...</span>
<button className="inline text-neutral-200 hover:text-white font-medium transition-colors cursor-pointer hover:underline decoration-neutral-600 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-neutral-700 rounded-sm ml-1" onclick="toggleModal(true)">
                    Baca selengkapnya
                </button>
</div>
</div>
</div>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="readMoreModal" role="dialog">

<div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity opacity-0" id="modalBackdrop" onclick="toggleModal(false)"></div>

<div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" id="modalPanel">

<div className="absolute right-4 top-4 z-10">
<button className="rounded-md bg-neutral-900 text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-600 transition-colors" onclick="toggleModal(false)" type="button">
<span className="sr-only">Close</span>
<span className="iconify" data-height="20" data-icon="lucide:x" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="p-6 sm:p-8">

<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-neutral-800/50 border border-neutral-700 flex items-center justify-center">
<span className="iconify text-neutral-300" data-height="18" data-icon="lucide:align-left" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-lg font-medium leading-6 text-white tracking-tight" id="modal-title">Konten Lengkap</h3>
</div>
</div>
<div className="mt-4">
<p className="text-sm text-neutral-300 leading-relaxed space-y-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            <br/><br/>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
</div>
<div className="mt-8 flex justify-end gap-3">
<button className="inline-flex justify-center rounded-lg border border-neutral-700 bg-transparent px-4 py-2 text-xs font-medium text-neutral-300 shadow-sm hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all" onclick="toggleModal(false)" type="button">
                            Tutup
                        </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
