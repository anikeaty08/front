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
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Add some interactive hover effects
        document.querySelectorAll('.hover-glow').forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
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
      
<div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">

<div className="text-center mb-8 opacity-0 animate-fade-in">
<div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
<span className="text-slate-900 text-2xl font-bold oswald">FN</span>
</div>
</div>

<div className="text-center mb-12 opacity-0 animate-slide-up delay-100">
<h1 className="oswald text-6xl lg:text-8xl font-bold text-yellow-400 tracking-tight text-shadow">
                GAME DAY
            </h1>
<div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4 rounded-full"></div>
</div>

<div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 opacity-0 animate-scale-in delay-200">
<div className="glass-effect rounded-xl p-6 text-center hover-glow transition-all duration-300 hover:scale-105">
<div className="oswald text-xl font-semibold text-white mb-2 tracking-wide">FINAL SCORE</div>
<div className="oswald text-4xl font-bold text-yellow-400 tracking-wider">--</div>
</div>
<div className="glass-effect rounded-xl p-6 text-center hover-glow transition-all duration-300 hover:scale-105">
<div className="oswald text-xl font-semibold text-white mb-2 tracking-wide">TEAM 2</div>
<div className="oswald text-4xl font-bold text-yellow-400 tracking-wider">--</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-start">

<div className="opacity-0 animate-slide-up delay-300">
<div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border-2 border-slate-600 flex items-center justify-center text-slate-400 text-2xl oswald font-medium text-center shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 group">
<div className="group-hover:scale-105 transition-transform duration-300">
<div className="w-16 h-16 mx-auto mb-4 opacity-50">
<i className="w-full h-full" data-lucide="user"></i>
</div>
                        Drop<br />Player Image<br />Here
                    </div>
</div>
</div>

<div className="space-y-8">

<div className="opacity-0 animate-slide-up delay-400">
<h2 className="oswald text-4xl lg:text-5xl font-bold text-yellow-400 tracking-tight mb-4 text-shadow">
                        PLAYER NAME
                    </h2>
</div>

<div className="opacity-0 animate-slide-up delay-500">
<div className="flex items-center gap-3 mb-4">
<div className="w-6 h-6 text-yellow-400">
<i className="w-full h-full fill-current" data-lucide="star"></i>
</div>
<h3 className="oswald text-2xl font-semibold text-white tracking-wide">HIGHLIGHTS</h3>
</div>
<div className="h-px bg-gradient-to-r from-white via-white/50 to-transparent"></div>
</div>

<div className="opacity-0 animate-slide-up delay-600">
<div className="flex items-start gap-4 mb-4">
<div className="text-yellow-400 text-4xl oswald font-bold leading-none">"</div>
<div className="oswald text-2xl font-semibold text-yellow-400 leading-tight">
                            QUOTE / STAT
                        </div>
</div>
<p className="text-slate-300 text-lg leading-relaxed ml-12">
                        Write a quote or statistical summary here.
                    </p>
</div>

<div className="opacity-0 animate-slide-up delay-700">
<div className="border-t-4 border-yellow-400 pt-6 mt-12">
<div className="flex items-start gap-4">
<div className="text-yellow-400 text-6xl oswald font-bold leading-none">"</div>
<div className="oswald text-3xl lg:text-4xl font-bold text-yellow-400 tracking-tight leading-tight">
                                FEATURED QUOTE
                            </div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 opacity-0 animate-fade-in delay-700">
<div className="glass-effect rounded-lg p-4 text-center hover-glow transition-all duration-300">
<div className="text-2xl font-bold text-yellow-400 oswald">--</div>
<div className="text-sm text-slate-400 oswald">POINTS</div>
</div>
<div className="glass-effect rounded-lg p-4 text-center hover-glow transition-all duration-300">
<div className="text-2xl font-bold text-yellow-400 oswald">--</div>
<div className="text-sm text-slate-400 oswald">ASSISTS</div>
</div>
<div className="glass-effect rounded-lg p-4 text-center hover-glow transition-all duration-300">
<div className="text-2xl font-bold text-yellow-400 oswald">--</div>
<div className="text-sm text-slate-400 oswald">REBOUNDS</div>
</div>
<div className="glass-effect rounded-lg p-4 text-center hover-glow transition-all duration-300">
<div className="text-2xl font-bold text-yellow-400 oswald">--</div>
<div className="text-sm text-slate-400 oswald">STEALS</div>
</div>
</div>
</div>


    </>
  );
}
