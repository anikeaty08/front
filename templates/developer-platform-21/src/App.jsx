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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/848eb9ea-a1cf-4e96-b49e-08a6b47678a3/3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-0 w-[40rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
</div>

<header className="relative z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
<div className="flex lg:px-8 h-14 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-10">

<a className="text-base font-medium tracking-tighter text-white" href="#">AURA</a>

<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm font-normal text-neutral-400 transition-colors hover:text-white" href="#">Platform</a>
<a className="text-sm font-normal text-neutral-400 transition-colors hover:text-white" href="#">Solutions</a>
<a className="text-sm font-normal text-neutral-400 transition-colors hover:text-white" href="#">Customers</a>
<a className="text-sm font-normal text-neutral-400 transition-colors hover:text-white" href="#">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-normal text-neutral-400 transition-colors hover:text-white sm:block" href="#">Log in</a>
<a className="inline-flex h-8 items-center justify-center rounded-md bg-white px-3 text-xs font-medium text-black transition-colors hover:bg-neutral-200" href="#">Sign up</a>
<button className="flex items-center justify-center text-neutral-400 hover:text-white md:hidden">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="relative z-10 flex-1 flex flex-col items-center justify-start pt-24 pb-16 md:pt-32 lg:pt-40">
<div className="lg:px-8 flex flex-col text-center w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">

<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-sm transition-colors hover:bg-white/[0.08]" href="#">
<span className="flex h-1.5 w-1.5 items-center justify-center rounded-full bg-indigo-500">
<span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-indigo-400 opacity-75"></span>
</span>
                Aura Engine 2.0 is now in beta
                <iconify-icon className="text-neutral-500" height="14" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>

<h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 sm:text-6xl md:text-7xl lg:text-8xl">
                Ship pristine code,<br className="hidden sm:block"/> fraction of the time.
            </h1>

<p className="leading-relaxed sm:text-lg text-base font-normal text-stone-50 max-w-2xl mt-6">
                The all-in-one development environment that seamlessly integrates your workflow. Focus on building logic while we handle the infrastructure, deployment, and scale.
            </p>

<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
<a className="inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-black shadow-sm transition-colors hover:bg-neutral-200 sm:w-auto" href="#">
                    Start Building Free
                </a>
<a className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto" href="#">
<iconify-icon className="text-neutral-400" height="18" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Watch Demo
                </a>
</div>
</div>

</main>

    </>
  );
}
