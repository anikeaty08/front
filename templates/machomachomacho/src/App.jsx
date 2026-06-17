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



        document.addEventListener('DOMContentLoaded', () => {
            const resInput = document.getElementById('resourceName');
            const trigInput = document.getElementById('triggerData');
            const output = document.getElementById('resultOutput');
            const genBtn = document.getElementById('genBtn');
            const copyBtn = document.getElementById('copyBtn');

            function generateResult() {
                let resource = resInput.value.trim();
                let trigger = trigInput.value.trim();
                
                if (!resource) resource = "any";
                if (!trigger) trigger = "/* insert trigger */";

                const generatedCode = `MachoInjectResource("${resource}", [[\n${trigger}\n]])`;

                output.textContent = generatedCode;
                output.classList.remove('text-white/50');
                output.classList.add('text-white');
            }

            genBtn.addEventListener('click', generateResult);

            copyBtn.addEventListener('click', async () => {
                const textToCopy = output.textContent;
                if (textToCopy === 'Awaiting input parameters...') return;

                try {
                    await navigator.clipboard.writeText(textToCopy);
                    const originalContent = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<iconify-icon icon="solar:check-read-linear" stroke-width="1.5" class="text-base"></iconify-icon> Copied';
                    
                    setTimeout(() => {
                        copyBtn.innerHTML = originalContent;
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
            });
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
      
<div className="w-full max-w-md space-y-8">
<header className="space-y-1.5">
<h1 className="text-base font-semibold tracking-tight text-white">MI</h1>
<p className="text-sm text-white/60">Generate structural injection wrappers.</p>
</header>
<main className="space-y-5">
<div className="space-y-2">
<label className="block text-xs font-medium text-white/80" htmlFor="resourceName">Resource Name</label>
<input className="w-full bg-black border border-white rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition-colors placeholder:text-white/40" id="resourceName" placeholder="any" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-white/80" htmlFor="triggerData">Trigger</label>
<textarea className="w-full bg-black border border-white rounded-md px-3 py-2 text-sm text-white font-mono focus:outline-none focus:ring-1 focus:ring-white transition-colors placeholder:text-white/40 resize-none" id="triggerData" placeholder="TriggerEvent('...')" rows="3"></textarea>
</div>
<div className="flex items-center gap-3 pt-2">
<button className="flex-1 bg-white text-black py-2 rounded-md text-sm font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2" id="genBtn">
                    Generate
                </button>
<button className="flex-1 bg-black border border-white text-white py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2" id="copyBtn">
<iconify-icon className="text-base" icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
                    Copy
                </button>
</div>
</main>
<div className="pt-6 border-t border-white">
<pre className="text-sm text-white/50 font-mono whitespace-pre-wrap break-all transition-colors duration-300" id="resultOutput">Awaiting input parameters...</pre>
</div>
</div>


    </>
  );
}
