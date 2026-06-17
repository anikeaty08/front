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
                        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                        'shimmer': 'shimmer 1.5s infinite',
                    },
                    keyframes: {
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        shimmer: {
                            '100%': { transform: 'translateX(100%)' },
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.02] blur-[100px] rounded-full"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-blue-500/[0.02] blur-[120px] rounded-full"></div>
</div>

<header className="fixed top-0 w-full z-40 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 bg-white rounded flex items-center justify-center rotate-45">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-tight text-white/90">NEXUS</span>
</div>
<nav className="hidden sm:flex items-center gap-6">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#">Manifest</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#">Funkcje</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#">Cennik</a>
</nav>
</div>
</header>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-32">

<div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-6">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium uppercase tracking-widest text-white/60">Dostępna lista oczekująca</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 pb-4">
                Przyszłość twojej <br/> produktywności.
            </h1>
<p className="text-lg md:text-xl text-white/40 font-normal leading-relaxed max-w-xl mx-auto tracking-tight">
                Zorganizuj swój zespół w zupełnie nowy sposób. Minimalistyczny interfejs, maksymalna wydajność. Dołącz do elitarnego grona pierwszych użytkowników.
            </p>
<div className="pt-10 flex flex-col items-center gap-4">

<button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#050505]" data-tally-auto-close="0" data-tally-emoji-text="👋" data-tally-layout="modal" data-tally-open="mZpg9e" data-tally-overlay="1" data-tally-width="500">
<span className="relative z-10 flex items-center gap-2">
                        Dołącz teraz
                        <iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
</button>
<div className="flex items-center gap-2 text-xs text-white/30">
<iconify-icon icon="lucide:users" width="12"></iconify-icon>
<span>Już ponad 2,000 zapisanych osób</span>
</div>
</div>
</div>
</main>

<footer className="relative z-10 border-t border-white/[0.06] py-8 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] uppercase tracking-widest text-white/30">© 2024 Nexus Inc.</p>
<div className="flex gap-6">
<a className="text-white/30 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-white/30 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-white/30 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
