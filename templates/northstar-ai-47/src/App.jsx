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



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center">

<div className="absolute top-0 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>

<div className="absolute bottom-[25vh] w-[80vw] h-[40vh] bg-blue-500/20 blur-[150px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[28vh] w-[40vw] h-[15vh] bg-cyan-300/30 blur-[80px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[30vh] w-[15vw] h-[5vh] bg-white/60 blur-[40px] rounded-full mix-blend-screen"></div>

<div className="absolute bottom-0 left-0 right-0 h-[40vh] overflow-hidden">
<div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[250vw] md:w-[150vw] h-[1200px] rounded-[100%] bg-gradient-to-b from-[#020617] via-[#050B14] to-black border-t-[2px] border-cyan-400/40 shadow-[0_-20px_80px_rgba(34,211,238,0.15)] flex justify-center">

<div className="absolute top-0 w-3/4 h-[200px] bg-[radial-gradient(ellipse_at_top,_rgba(251,146,60,0.15)_0%,_transparent_70%)] opacity-60 mix-blend-screen blur-[2px]"></div>

<div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50 blur-[1px]"></div>
</div>
</div>
</div>

<main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-12 pb-32">

<div className="flex flex-col items-center mb-16 md:mb-20">

<svg className="w-28 h-28 md:w-36 md:h-36 mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]" viewbox="0 0 100 100">

<polygon fill="#ffffff" points="50,50 50,0 45,50"></polygon>
<polygon fill="#60a5fa" points="50,50 50,0 55,50"></polygon>

<polygon fill="#93c5fd" points="50,50 50,100 45,50"></polygon>
<polygon fill="#2563eb" points="50,50 50,100 55,50"></polygon>

<polygon fill="#ffffff" points="50,50 0,50 50,45"></polygon>
<polygon fill="#93c5fd" points="50,50 0,50 50,55"></polygon>

<polygon fill="#60a5fa" points="50,50 100,50 50,45"></polygon>
<polygon fill="#2563eb" points="50,50 100,50 50,55"></polygon>

<polygon fill="#bfdbfe" points="50,50 25,25 47,50"></polygon>
<polygon fill="#60a5fa" points="50,50 75,25 50,47"></polygon>
<polygon fill="#60a5fa" points="50,50 25,75 50,53"></polygon>
<polygon fill="#1d4ed8" points="50,50 75,75 53,50"></polygon>

<circle className="drop-shadow-[0_0_10px_white]" cx="50" cy="50" fill="#ffffff" r="3"></circle>
</svg>

<h1 className="text-3xl md:text-5xl font-medium tracking-tight uppercase text-white drop-shadow-lg">Northstar</h1>
<div className="flex items-center w-full max-w-[280px] md:max-w-sm mt-4 opacity-80">
<div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-400"></div>
<span className="px-4 text-xs tracking-widest font-medium text-slate-300 uppercase">AI Solutions</span>
<div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-400"></div>
</div>
</div>

<div className="flex flex-col items-center text-center max-w-3xl">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 drop-shadow-md">
                Empowering Business <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">Growth</span> with AI
            </h2>
<p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 px-4 md:px-8">
                Unlock the power of artificial intelligence to optimize, innovate, and accelerate your business.
            </p>
<button className="relative group overflow-hidden rounded-lg px-8 py-3.5 bg-gradient-to-b from-blue-500 to-blue-800 border border-blue-400/50 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-0.5">
<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
<span className="relative text-sm md:text-base font-medium text-white shadow-sm">Get a Free Consultation</span>
</button>
</div>
</main>

<div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-3 md:gap-5 text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-widest px-4">
<span>Trust</span>
<span className="w-1 h-1 rounded-full bg-slate-500"></span>
<span>Innovation</span>
<span className="w-1 h-1 rounded-full bg-slate-500"></span>
<span>Growth</span>
<span className="w-1 h-1 rounded-full bg-slate-500"></span>
<span>Intelligence</span>
</div>

<div className="absolute bottom-6 right-6 z-20 text-slate-500/60 pointer-events-none">
<i className="w-5 h-5 md:w-6 md:h-6" data-lucide="sparkle" strokeWidth="1.5"></i>
</div>


    </>
  );
}
