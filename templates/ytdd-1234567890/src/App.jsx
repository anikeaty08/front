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



      // Letter-by-letter Animation Script
      document.addEventListener('DOMContentLoaded', () => {
          const heading = document.querySelector('.animated-text');
          if (heading) {
              const text = heading.innerText;
              heading.innerText = '';

              // Split text into letters including spaces
              [...text].forEach((char, index) => {
                  const span = document.createElement('span');
                  span.textContent = char;
                  span.className = 'char-reveal';
                  // Animation: 0.4s duration, linear easing
                  // Staggering delay based on index
                  span.style.animationDelay = `${index * 0.05}s`;

                  // Preserve space width
                  if (char === ' ') {
                      span.style.width = '0.3em';
                  }

                  heading.appendChild(span);
              });
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
      

<div className="w-full max-w-[1400px] bg-zinc-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh] md:h-[85vh] relative backdrop-blur-sm">

<div className="h-12 bg-zinc-900/80 border-b border-slate-800 flex items-center px-4 space-x-4 z-20 backdrop-blur-md">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="bg-zinc-800/50 py-1 px-4 rounded-md flex items-center space-x-2 text-xs text-zinc-500 w-full max-w-sm border border-white/5">
<span className="iconify text-zinc-500" data-icon="lucide:lock" data-strokeWidth="1.5"></span>
<span>town-security.faction.os</span>
</div>
</div>
<div className="w-16"></div>

</div>

<div className="flex flex-col lg:flex-row h-full overflow-hidden relative">

<main className="flex-1 relative overflow-y-auto p-8 lg:p-12 flex flex-col justify-center">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10 max-w-4xl">
<div className="inline-flex items-center space-x-2 bg-zinc-800/30 border border-slate-700/50 rounded-full px-3 py-1 mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span className="text-xs font-medium tracking-wide text-purple-300 uppercase">
                System Operational
              </span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-[80px] font-bold leading-none tracking-tight text-white mb-6 animated-text">
              TOWN SECURITY
            </h1>
<h2 className="text-2xl md:text-3xl font-medium text-zinc-400 mb-8 max-w-2xl leading-snug">
              Restoring order to the chaos. We are the shield that guards the
              streets.
            </h2>
<p className="text-lg md:text-xl text-zinc-500 max-w-xl mb-10 font-medium leading-relaxed">
              Join the elite faction dedicated to protecting high-value assets
              and maintaining peace within the Town ecosystem.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group relative px-8 py-4 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
<span className="relative z-10">Enlist Now</span>
<span className="iconify group-hover:translate-x-1 transition-transform relative z-10" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
<div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>
</button>
</div>

</div>
</main>

<aside className="w-full lg:w-[320px] bg-zinc-900/60 border-t lg:border-t-0 lg:border-l border-slate-800 backdrop-blur-xl p-6 flex flex-col gap-6 z-20">

<div className="bg-zinc-800/40 rounded-2xl border border-slate-700/50 p-5 shadow-lg">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-inner">
<span className="iconify w-6 h-6" data-icon="lucide:shield-check" data-strokeWidth="1.5"></span>
</div>
<div>
<div className="text-white font-bold text-lg font-['DynaPuff'] tracking-tight">
                  Officer Portal
                </div>
<div className="text-xs text-zinc-500">Restricted Access</div>
</div>
</div>
<div className="space-y-3">
<div className="relative group">
<span className="absolute left-3 top-3 text-zinc-500 group-focus-within:text-purple-400 transition-colors">
<span className="iconify" data-icon="lucide:user" data-strokeWidth="1.5"></span>
</span>
<input className="w-full bg-zinc-900/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all font-medium" placeholder="Username" type="text" value="Town Security Officer"/>
</div>
<div className="relative group">
<span className="absolute left-3 top-3 text-zinc-500 group-focus-within:text-purple-400 transition-colors">
<span className="iconify" data-icon="lucide:lock" data-strokeWidth="1.5"></span>
</span>
<input className="w-full bg-zinc-900/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all font-medium" placeholder="Password" type="password" value="Town's Security 101"/>
</div>
<button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-sm font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2">
<span>Login</span>
<span className="iconify w-4 h-4" data-icon="lucide:log-in" data-strokeWidth="1.5"></span>
</button>
</div>
</div>


<div className="text-xs text-zinc-600 text-center font-medium">
            © 2023 Town Security Faction
          </div>
</aside>
</div>
</div>


    </>
  );
}
