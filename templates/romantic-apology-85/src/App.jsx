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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center">
<div className="absolute w-[800px] h-[800px] bg-rose-200/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-[100px] mix-blend-multiply translate-x-1/3 translate-y-1/3 animate-pulse" style={{animationDuration: '12s'}}></div>
<div className="absolute w-[500px] h-[500px] bg-orange-50/40 rounded-full blur-[100px] mix-blend-multiply -translate-x-1/3 -translate-y-1/3 animate-pulse" style={{animationDuration: '10s'}}></div>
</div>

<nav className="w-full p-8 flex justify-center z-50">
<div className="text-xs font-medium tracking-tighter text-rose-900/50 uppercase">
            J &amp; S
        </div>
</nav>

<main className="flex-grow flex flex-col md:py-24 pt-12 pr-6 pb-12 pl-6 items-center justify-center">
<div className="text-center w-full max-w-2xl z-10 mr-auto ml-auto">
<div className="flex justify-center mb-8 relative">
<div className="absolute inset-0 bg-rose-200/30 rounded-full blur-xl animate-pulse" style={{animationDuration: '4s'}}></div>
<iconify-icon className="text-rose-400 relative z-10 animate-pulse" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5', animationDuration: '3s'}} width="48"></iconify-icon>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-rose-950 mb-6 drop-shadow-sm" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                I am truly sorry.
            </h1>
<p className="text-2xl md:text-3xl font-light tracking-tight text-rose-800/80 mb-12 italic" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                Please forgive me.
            </p>
<div className="w-16 h-px bg-rose-200 mx-auto mb-12"></div>
<p className="text-base md:text-lg text-stone-600 leading-relaxed font-light max-w-lg mx-auto">
                Words cannot express how deeply I regret my actions. You mean the world to me, and seeing you hurt is the last thing I ever wanted. I hope you can find it in your heart to give me another chance to make things right. I love you, always.
            </p>
</div>
</main>

<div className="max-w-3xl mx-auto text-center px-6 py-16 md:py-24 z-10">
<iconify-icon className="text-rose-300 mb-6" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-xl md:text-2xl font-light tracking-tight text-rose-900/70 italic" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
            "True love is not about never making mistakes, but about the profound willingness to mend them with all your heart."
        </p>
</div>

<section className="max-w-7xl mx-auto w-full px-6 py-12 md:py-24 z-10">
<div className="flex items-center justify-center gap-4 mb-16">
<div className="h-px w-12 bg-rose-200"></div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-rose-900" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                For You
            </h2>
<div className="h-px w-12 bg-rose-200"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

<div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-rose-100 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-900/10">
<img alt="Soft pink roses" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-pink-50 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-900/10 lg:mt-12">
<img alt="Delicate tulips" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-100 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-900/10">
<img alt="White roses" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-rose-50 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-900/10 lg:-mt-12">
<img alt="Pink tulips close up" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 filter contrast-75 saturate-150" src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-orange-50 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-900/10">
<img alt="Peach roses" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-purple-50 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-900/10 lg:mt-12">
<img alt="Light purple tulips" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 filter contrast-75 saturate-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ba25a48-25be-4bc9-84e2-83af5b1e9da6_800w.webp"/>
<div className="group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</section>

<footer className="overflow-hidden flex flex-col text-center w-full mt-auto pt-24 pr-6 pb-24 pl-6 relative items-center">
<div className="absolute inset-0 bg-gradient-to-t from-rose-100/40 to-transparent -z-10 pointer-events-none"></div>
<iconify-icon className="hover:scale-110 transition-transform duration-300 text-rose-400/80 mb-6" height="28" icon="solar:letter-opened-linear" style={{strokeWidth: '1.5', color: 'rgb(251, 113, 133)'}} width="28"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-rose-950 mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Yours Always</h3>
<p className="text-xs font-light text-stone-500 tracking-widest uppercase">With all my love</p>
</footer>

    </>
  );
}
