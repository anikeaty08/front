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
      
<section className="py-24 relative overflow-hidden bg-white" id="about">

<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute -top-12 -left-12 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute -bottom-12 -right-12 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 bg-zinc-50">
<img alt="Cooking experience" className="relative w-full h-full object-cover transform transition duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="flex items-center gap-2 mb-6">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-50 text-rose-500">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
<span className="text-rose-500 font-semibold tracking-widest uppercase text-xs">Our Passion</span>
</div>
<h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight tracking-tight">
                        Empowering the Home Cook, <br className="hidden lg:block"/> One Recipe at a Time.
                    </h2>
<p className="text-lg text-zinc-500 mb-10 leading-relaxed font-normal">
                        Foodie Recipes was born out of a simple idea: that cooking should be accessible, enjoyable, and rewarding for everyone. Whether you're a kitchen novice or a seasoned pro, we're here to provide the inspiration and guidance you need.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">

<div className="group">
<h4 className="font-semibold text-zinc-900 mb-2 flex items-center gap-3 text-base">
<div className="text-rose-500 flex items-center justify-center transition-transform group-hover:scale-110">
<iconify-icon height="22" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
                                Easy Access
                            </h4>
<p className="text-sm text-zinc-500 leading-normal pl-9">Step-by-step guides designed for busy people.</p>
</div>

<div className="group">
<h4 className="font-semibold text-zinc-900 mb-2 flex items-center gap-3 text-base">
<div className="text-rose-500 flex items-center justify-center transition-transform group-hover:scale-110">
<iconify-icon height="22" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
                                AI Powered
                            </h4>
<p className="text-sm text-zinc-500 leading-normal pl-9">Get smart suggestions instantly tailored to you.</p>
</div>

<div className="group">
<h4 className="font-semibold text-zinc-900 mb-2 flex items-center gap-3 text-base">
<div className="text-rose-500 flex items-center justify-center transition-transform group-hover:scale-110">
<iconify-icon height="22" icon="solar:globe-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
                                Diverse Flavors
                            </h4>
<p className="text-sm text-zinc-500 leading-normal pl-9">From Italian pasta to Mexican tacos &amp; beyond.</p>
</div>

<div className="group">
<h4 className="font-semibold text-zinc-900 mb-2 flex items-center gap-3 text-base">
<div className="text-rose-500 flex items-center justify-center transition-transform group-hover:scale-110">
<iconify-icon height="22" icon="solar:leaf-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
                                Healthy Focus
                            </h4>
<p className="text-sm text-zinc-500 leading-normal pl-9">Nutrition-forward meal planning for wellness.</p>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
