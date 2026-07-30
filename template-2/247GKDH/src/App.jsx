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
      
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4', 'translate-x-8');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/chips-Lpmy2Q4HrMAxwGztMvtaZdY0" width="100%"></iframe></div>

<section className="relative h-screen w-full flex items-center">

<img alt="Aerial view of a soccer field at sunset" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1546717003-caee5f93a9db?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>

<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
<h1 className="text-6xl md:text-8xl font-semibold uppercase mb-4 opacity-0 translate-y-4 transition-all duration-700 delay-100" data-animate="" style={{letterSpacing: `.15em`}}>GAIAN</h1>
<p className="md:text-2xl opacity-0 transition-all duration-700 delay-200 text-xl font-medium text-slate-50 tracking-tight translate-y-4" data-animate="">Powered by YUR®</p>
</div>
</section>

<section className="relative md:py-24 overflow-hidden bg-zinc-900 pt-16 pb-16">


<div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:px-12 mr-auto ml-auto pr-6 pl-6">

<div className="group hover:border-green-500 hover:shadow-lg transition-all duration-300 opacity-0 bg-white/5 border-white/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md translate-y-4" data-animate="">
<div className="flex mb-4 items-center justify-center">
<i className="w-6 h-6 text-green-400 stroke-[1.5]" data-lucide="handshake"></i>
<h4 className="text-lg font-medium tracking-tight text-left">About YUR®</h4>
</div>
<ul className="text-sm text-white/80 space-y-1">
<li className="text-center">Responsible for building the XR soccer demo with PORTAL insoles</li>
<li className="text-xs text-center">Launch partner for Quest 3 & Vision Pro</li>
</ul>
</div>


<div className="group hover:border-green-500 hover:shadow-lg transition-all duration-300 opacity-0 bg-white/5 border-white/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md translate-y-4" data-animate="">
<div className="flex items-center space-x-3 mb-4">
<i className="w-6 h-6 text-green-400 stroke-[1.5]" data-lucide="apple"></i>
<h4 className="text-lg font-medium tracking-tight">Apple Vision Pro Integration</h4>
</div>
<ul className="text-sm text-white/80 text-center space-y-1">
<li className="text-center">Wireless peripheral support for AVP</li>
<li className="text-center">Native motion tracking & haptics</li>
</ul>
</div>
</div>
</section>



    </>
  );
}
