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
      

<div className="fixed inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/50 to-black"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/30 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-700/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
</div>

<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">

<div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 max-w-4xl w-full shadow-2xl" style={{boxShadow: '0 0 80px rgba(220, 38, 38, 0.15), inset 0 0 80px rgba(255,255,255,0.02)'}}>

<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<div className="backdrop-blur-md bg-red-500/20 border border-red-500/30 rounded-full px-4 py-1.5 flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="text-red-400 text-xs font-medium tracking-wide">SİSTEM HATASI</span>
</div>
</div>
<div className="text-center">

<div className="relative mb-6">
<h1 className="text-8xl sm:text-9xl md:text-[12rem] font-black tracking-tighter bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent leading-none">
                        404
                    </h1>
<div className="absolute inset-0 text-8xl sm:text-9xl md:text-[12rem] font-black tracking-tighter text-red-500/20 blur-2xl leading-none flex items-center justify-center">
                        404
                    </div>
</div>

<div className="flex items-center justify-center gap-3 mb-6">
<div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/50"></div>
<span className="text-red-500 font-semibold text-lg md:text-xl tracking-wide">ERROR</span>
<div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/50"></div>
</div>

<h2 className="text-white/90 text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    Sayfa Bulunamadı
                </h2>
<p className="text-white/50 text-base md:text-lg max-w-md mx-auto mb-8 leading-relaxed">
                    Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
<a className="group relative w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-medium text-white text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105" href="#">
<span className="flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:home" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Ana Sayfaya Dön
                        </span>
</a>
<a className="group w-full sm:w-auto px-8 py-3.5 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl font-medium text-white/80 text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105" href="#">
<span className="flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Geri Git
                        </span>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/10">
<span className="iconify text-red-400 mb-2" data-icon="lucide:search" data-width="24" style={{strokeWidth: '1.5'}}></span>
<p className="text-white/70 text-xs">URL adresini kontrol edin</p>
</div>
<div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/10">
<span className="iconify text-red-400 mb-2" data-icon="lucide:refresh-cw" data-width="24" style={{strokeWidth: '1.5'}}></span>
<p className="text-white/70 text-xs">Sayfayı yenileyin</p>
</div>
<div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/10">
<span className="iconify text-red-400 mb-2" data-icon="lucide:mail" data-width="24" style={{strokeWidth: '1.5'}}></span>
<p className="text-white/70 text-xs">Destek ile iletişime geçin</p>
</div>
</div>
</div>
</div>

<div className="mt-8 flex items-center gap-6 text-white/30 text-xs">
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:shield-alert" data-width="14" style={{strokeWidth: '1.5'}}></span>
                Hata Kodu: 404
            </span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span>2025</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span className="tracking-tight font-semibold">NEXUS</span>
</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-20 left-10 w-2 h-2 bg-red-500/40 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
<div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{animationDuration: '2.5s'}}></div>
<div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-400/30 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
<div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{animationDuration: '3.5s'}}></div>
</div>

    </>
  );
}
