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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        const input = document.getElementById('passwordInput');
        const errorMsg = document.getElementById('errorMessage');
        const validPasswords = ['lolol', 'lmao'];

        function checkPassword() {
            const val = input.value.trim().toLowerCase();
            
            if (validPasswords.includes(val)) {
                // Success State visual feedback
                input.classList.remove('border-zinc-800', 'border-red-900', 'text-zinc-200');
                input.classList.add('border-green-500/50', 'text-green-400');
                errorMsg.style.opacity = '0';
                
                // Redirect
                setTimeout(() => {
                    window.location.href = 'lololololololol.pdf';
                }, 300);
            } else {
                // Error State
                input.parentElement.classList.add('shake-element');
                input.classList.remove('border-zinc-800');
                input.classList.add('border-red-900/80', 'bg-red-950/10');
                errorMsg.style.opacity = '1';
                
                // Reset animation and style after delay
                setTimeout(() => {
                    input.parentElement.classList.remove('shake-element');
                    input.classList.remove('border-red-900/80', 'bg-red-950/10');
                    input.classList.add('border-zinc-800');
                    errorMsg.style.opacity = '0';
                }, 1500);
            }
        }

        // Allow 'Enter' key to trigger submission
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                checkPassword();
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
      

<div className="aura-background-component top-0 w-full z-0 absolute h-full pointer-events-none opacity-60">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>

<main className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 sm:px-0">

<div className="relative flex flex-col items-center w-full max-w-[320px] p-6 gap-5 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl ring-1 ring-white/5 transition-all duration-500">

<div className="flex flex-col items-center">
<h1 className="bg-clip-text text-base font-semibold text-transparent tracking-tight bg-gradient-to-b from-white to-zinc-500">LOLGORITHM</h1>
</div>

<div className="w-full flex flex-col gap-3">
<div className="relative group w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="text-zinc-500 transition-colors group-focus-within:text-zinc-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="15.5" r="5.5"></circle>
<path d="m21 2-9.6 9.6"></path>
<path d="m15.5 7.5 3 3L22 7l-3-3"></path>
</svg>
</div>
<input autocomplete="off" className="block w-full rounded-lg bg-zinc-900/50 border border-zinc-800 pl-9 pr-3 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600/50 transition-all duration-300 hover:bg-zinc-900/80 hover:border-zinc-700" id="passwordInput" placeholder="Enter password" type="password"/>
</div>

<div className="w-full flex justify-center">
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-full p-[1px] relative items-center justify-center w-full" onclick="checkPassword()">

<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

<span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>

<span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-[10px] font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full py-2 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
<span className="relative z-10">Access PDF</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>

<p className="text-[10px] text-zinc-600 text-center font-medium tracking-wide">CONFIDENTIAL</p>

<div className="absolute top-full left-0 w-full flex justify-center mt-4 pointer-events-none">
<span className="text-xs text-red-400 font-medium tracking-wide opacity-0 transition-opacity duration-300 bg-zinc-950/90 px-3 py-1.5 rounded-full border border-red-500/20 shadow-lg backdrop-blur-md" id="errorMessage">
            Incorrect password
        </span>
</div>
</div>
</main>



    </>
  );
}
