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



        const buttons = document.querySelectorAll('.grid-cols-3 button');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset all
                buttons.forEach(b => {
                    b.className = 'border border-slate-700 bg-slate-800/30 rounded-lg py-3 text-sm font-medium text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all';
                });
                // Set active
                btn.className = 'selected-option border border-teal-500/50 rounded-lg py-3 text-sm font-medium text-teal-100 transition-all hover:bg-teal-500/10';
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
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
<div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#0B1121]/50 to-[#0B1121] pointer-events-none z-0"></div>
<main className="relative z-10 w-full max-w-lg mx-auto px-6 py-16 flex flex-col gap-8">

<header className="text-center space-y-6 mb-8">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900/50 border border-white/10 shadow-[0_0_30px_-5px_rgba(20,184,166,0.15)] relative group">
<div className="absolute inset-0 bg-teal-500/10 rounded-2xl blur-xl group-hover:bg-teal-500/20 transition-all duration-500"></div>
<span className="iconify text-teal-400" data-icon="lucide:shield" data-strokeWidth="1.5" data-width="32"></span>
</div>
<div className="space-y-3">
<h1 className="text-4xl md:text-5xl font-mono font-medium tracking-tight metallic-text-gradient">
                    Ephemeral<br/>Private Chat
                </h1>
<p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-sm mx-auto">
                    Self-destructing 1-on-1 conversations. No accounts, no history, no trace.
                </p>
</div>
</header>

<div className="grid gap-3">

<div className="metallic-card rounded-lg p-5 flex items-center gap-5 group hover:border-slate-600/50 transition-colors duration-300">
<div className="w-10 h-10 rounded-md bg-slate-800/50 flex items-center justify-center text-teal-500/80 border border-white/5 group-hover:text-teal-400 transition-colors">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</div>
<div className="text-left">
<h3 className="text-slate-200 font-mono text-sm font-medium">Auto-Deletion</h3>
<p className="text-slate-400 text-xs mt-1 leading-relaxed">
                        Messages vanish permanently once the timer expires.
                    </p>
</div>
</div>

<div className="metallic-card rounded-lg p-5 flex items-center gap-5 group hover:border-slate-600/50 transition-colors duration-300">
<div className="w-10 h-10 rounded-md bg-slate-800/50 flex items-center justify-center text-teal-500/80 border border-white/5 group-hover:text-teal-400 transition-colors">
<span className="iconify" data-icon="lucide:lock" data-width="20"></span>
</div>
<div className="text-left">
<h3 className="text-slate-200 font-mono text-sm font-medium">End-to-End Encrypted</h3>
<p className="text-slate-400 text-xs mt-1 leading-relaxed">
                        Keys are generated locally. We can't read your chats.
                    </p>
</div>
</div>

<div className="metallic-card rounded-lg p-5 flex items-center gap-5 group hover:border-slate-600/50 transition-colors duration-300">
<div className="w-10 h-10 rounded-md bg-slate-800/50 flex items-center justify-center text-teal-500/80 border border-white/5 group-hover:text-teal-400 transition-colors">
<span className="iconify" data-icon="lucide:ghost" data-width="20"></span>
</div>
<div className="text-left">
<h3 className="text-slate-200 font-mono text-sm font-medium">Zero Footprint</h3>
<p className="text-slate-400 text-xs mt-1 leading-relaxed">
                        No logs, no metadata, no IP tracking. Just pure privacy.
                    </p>
</div>
</div>
</div>

<div className="metallic-card rounded-xl p-6 mt-4 border-t border-white/10">
<form className="space-y-6" onsubmit="event.preventDefault();">

<div className="space-y-3">
<label className="text-xs font-mono text-slate-400 uppercase tracking-wider ml-1">Session Duration</label>
<div className="grid grid-cols-3 gap-3">
<button className="selected-option border border-teal-500/50 rounded-lg py-3 text-sm font-medium text-teal-100 transition-all hover:bg-teal-500/10" type="button">
                            1 Hour
                        </button>
<button className="border border-slate-700 bg-slate-800/30 rounded-lg py-3 text-sm font-medium text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all" type="button">
                            24 Hours
                        </button>
<button className="border border-slate-700 bg-slate-800/30 rounded-lg py-3 text-sm font-medium text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all" type="button">
                            7 Days
                        </button>
</div>
</div>

<button className="w-full relative group overflow-hidden rounded-lg bg-teal-600 p-[1px] transition-all hover:bg-teal-500 hover:shadow-[0_0_20px_-5px_rgba(20,184,166,0.5)]">
<div className="relative rounded-lg bg-[#0f172a] px-4 py-4 transition-all group-hover:bg-opacity-0">
<div className="flex items-center justify-center gap-2">
<span className="font-mono font-bold text-teal-100 group-hover:text-white">GENERATE SECURE LINK</span>
<span className="iconify text-teal-400 group-hover:text-white transition-colors" data-icon="lucide:arrow-right" data-width="18"></span>
</div>
</div>
</button>
<p className="text-center text-[10px] text-slate-500 font-light">
                    By generating a link, you agree to the <a className="underline hover:text-teal-400 decoration-slate-600" href="#">Terms of Anonymity</a>.
                </p>
</form>
</div>
</main>

<footer className="absolute bottom-6 w-full text-center pointer-events-none">
<div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-600">
<span className="flex items-center gap-1 pointer-events-auto cursor-pointer hover:text-teal-500 transition-colors">
<span className="iconify" data-icon="lucide:github" data-width="12"></span> Source
            </span>
<span className="w-1 h-1 bg-slate-800 rounded-full"></span>
<span className="flex items-center gap-1 pointer-events-auto cursor-pointer hover:text-teal-500 transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="12"></span> Audit
            </span>
</div>
</footer>



    </>
  );
}
