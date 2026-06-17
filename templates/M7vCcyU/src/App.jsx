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



    tailwind.config = {
      theme: {
        extend: {
          animation: {
            mesh1: "moveMesh1 28s ease-in-out infinite",
            mesh2: "moveMesh2 32s linear infinite",
            mesh3: "moveMesh3 26s ease-in-out infinite"
          },
          keyframes: {
            moveMesh1: {
              "0%":   { transform: "translate(0, 0) scale(1)" },
              "50%":  { transform: "translate(50px, 20px) scale(1.1)" },
              "100%": { transform: "translate(0, 0) scale(1)" }
            },
            moveMesh2: {
              "0%":   { transform: "translate(0, 0) scale(1)" },
              "50%":  { transform: "translate(-40px, 30px) scale(1.15)" },
              "100%": { transform: "translate(0, 0) scale(1)" }
            },
            moveMesh3: {
              "0%":   { transform: "translate(0, 0) scale(1)" },
              "50%":  { transform: "translate(20px, -40px) scale(1.08)" },
              "100%": { transform: "translate(0, 0) scale(1)" }
            }
          }
        }
      }
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
      
<div className="relative w-[300px] h-[180px] rounded-[var(--card-radius)] shadow-2xl overflow-hidden">

<div className="absolute inset-0">
<div className="absolute w-[220px] h-[180px] -left-10 -top-6 rounded-full opacity-70 z-0 animate-mesh1" style={{background: 'radial-gradient(circle at 60% 40%,rgba(var(--c1),0.6) 0%,rgba(var(--c1),0) 75%)', mixBlendMode: 'hard-light'}}>
</div>
<div className="absolute w-[265px] h-[140px] left-12 top-6 rounded-full opacity-70 z-0 animate-mesh2" style={{background: 'radial-gradient(circle at 40% 70%,rgba(var(--c2),0.5) 0%,rgba(var(--c2),0) 95%)', mixBlendMode: 'hard-light'}}>
</div>
<div className="absolute w-[196px] h-[196px] left-10 -bottom-10 rounded-full opacity-70 z-0 animate-mesh3" style={{background: 'radial-gradient(circle at 80% 80%,rgba(var(--c3),0.8) 0%,rgba(var(--c3),0) 100%)', mixBlendMode: 'hard-light'}}>
</div>
<div className="absolute w-[150px] h-[120px] left-32 top-0 rounded-full opacity-50" style={{background: 'radial-gradient(circle at 40% 60%,rgba(var(--c4),0.5) 0%,rgba(var(--c4),0) 80%)', mixBlendMode: 'hard-light'}}>
</div>
<div className="absolute w-[180px] h-[70px] left-14 bottom-0 rounded-full opacity-60" style={{background: 'radial-gradient(circle at 60% 40%,rgba(var(--c5),0.45) 0%,rgba(var(--c5),0) 85%)', mixBlendMode: 'hard-light'}}>
</div>
</div>

<div className="absolute inset-0 rounded-[var(--card-radius)] bg-white/10 backdrop-blur-[2px] z-10"></div>

<div className="absolute inset-0 px-6 pt-5 pb-4 flex flex-col justify-between z-20 text-white h-full">
<div className="flex flex-row justify-between items-start">

<div className="w-9 h-6 rounded bg-[#cececf] bg-gradient-to-tr from-[#d6d6db] to-[#b7b2a5] flex items-center justify-center shadow-md border border-white/20">
<svg fill="none" height="18" viewbox="0 0 36 24" width="32">
<rect fill="#aeaba7" height="18" rx="3" width="32" x="2" y="3"></rect>
<rect fill="#dedadc" height="10" rx="1.5" width="14" x="11" y="7"></rect>
<rect fill="#beb7b1" height="8" rx="1" width="4" x="16" y="8"></rect>
</svg>
</div>

<div className="w-12 flex justify-end">
<div className="flex items-center gap-1">
<span className="text-lg font-extrabold tracking-wide">VISA</span>
</div>
</div>
</div>

<div className="text-xl sm:text-2xl font-semibold tracking-widest text-white text-center select-none drop-shadow font-mono mt-2 mb-2">
        4920 1234 5678 9012
      </div>

<div className="flex flex-row text-xs justify-between pt-1">
<div className="flex flex-col">
<span className="opacity-80 tracking-widest">CARD HOLDER</span>
<span className="font-medium text-sm tracking-wide uppercase">ALEX VARGAS</span>
</div>
<div className="flex flex-col items-end">
<span className="opacity-80 tracking-widest">EXPIRES</span>
<span className="font-medium text-sm tracking-wide">09/28</span>
</div>
</div>
</div>
</div>

    </>
  );
}
