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



    document.addEventListener('DOMContentLoaded', () => {
      const entries = document.querySelectorAll('.animate-entry');
      entries.forEach((el, i) => {
        setTimeout(() => {
          el.classList.remove('opacity-0', 'blur-sm', 'translate-y-10');
        }, i * 120);
      });
      lucide.createIcons({strokeWidth:1.5});
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
      

<header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<h1 className="text-lg font-semibold tracking-tight">IVY R.</h1>
<nav className="flex gap-8 text-sm">
<a className="hover:text-neutral-400 transition" href="#work">Work</a>
<a className="hover:text-neutral-400 transition" href="#about">About</a>
<a className="hover:text-neutral-400 transition" href="#contact">Contact</a>
</nav>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 pt-24 pb-32">
<div className="animate-entry opacity-0 blur-sm translate-y-10 transition-all duration-700">
<h2 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.9]">
        Abstract<br className="hidden sm:block" /> 3D Motion
      </h2>
<p className="mt-6 max-w-lg text-neutral-400 leading-relaxed">
        I craft hypnotic, abstract animations that loop forever—because good art never stops moving.
      </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32" id="work">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-xl overflow-hidden border border-neutral-800 animate-entry opacity-0 blur-sm translate-y-10 transition-all duration-700 delay-[200ms]">
<video autoPlay className="w-full h-full object-cover" loop muted playsInline src="https://storage.coverr.co/videos/coverr-abstract-bokeh-9892/1080p.mp4"></video>
<div className="absolute inset-0 bg-neutral-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
<span className="text-base font-medium">Bokeh Loop</span>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-neutral-800 animate-entry opacity-0 blur-sm translate-y-10 transition-all duration-700 delay-[300ms]">
<video autoPlay className="w-full h-full object-cover" loop muted playsInline src="https://storage.coverr.co/videos/coverr-dancing-lights-1615/1080p.mp4"></video>
<div className="absolute inset-0 bg-neutral-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
<span className="text-base font-medium">Neon Threads</span>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-neutral-800 animate-entry opacity-0 blur-sm translate-y-10 transition-all duration-700 delay-[400ms]">
<video autoPlay className="w-full h-full object-cover" loop muted playsInline src="https://storage.coverr.co/videos/coverr-liquid-metal-1472/1080p.mp4"></video>
<div className="absolute inset-0 bg-neutral-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
<span className="text-base font-medium">Liquid Alloy</span>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-neutral-800 animate-entry opacity-0 blur-sm translate-y-10 transition-all duration-700 delay-[500ms]">
<video autoPlay className="w-full h-full object-cover" loop muted playsInline src="https://storage.coverr.co/videos/coverr-glowing-grid-4751/1080p.mp4"></video>
<div className="absolute inset-0 bg-neutral-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
<span className="text-base font-medium">Photon Mesh</span>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-neutral-800 animate-entry opacity-0 blur-sm translate-y-10 transition-all duration-700 delay-[600ms]">
<video autoPlay className="w-full h-full object-cover" loop muted playsInline src="https://storage.coverr.co/videos/coverr-rotating-nebula-1612/1080p.mp4"></video>
<div className="absolute inset-0 bg-neutral-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
<span className="text-base font-medium">Nebula Spin</span>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-neutral-800 animate-entry opacity-0 blur-sm translate-y-10 transition-all duration-700 delay-[700ms]">
<video autoPlay className="w-full h-full object-cover" loop muted playsInline src="https://storage.coverr.co/videos/coverr-floating-particles-4131/1080p.mp4"></video>
<div className="absolute inset-0 bg-neutral-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
<span className="text-base font-medium">Particle Drift</span>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-800 py-24" id="about">
<div className="max-w-3xl mx-auto px-6 space-y-6 animate-entry opacity-0 blur-sm translate-y-10 transition-all duration-700 delay-[300ms]">
<h3 className="text-3xl font-semibold tracking-tight">About</h3>
<p className="text-neutral-400 leading-relaxed">
        I’m Ivy R., a motion artist obsessed with shape, color, and the dance between them. Using a mix of Houdini, Cinema 4D, and real-time game engines, I turn mathematical noise into living, breathing loops.
      </p>
<p className="text-neutral-400 leading-relaxed">
        My work has pulsed behind festival stages, splash screens, and experiential art shows worldwide. Let’s push pixels together and see what happens.
      </p>
</div>
</section>

<section className="border-t border-neutral-800 py-24" id="contact">
<div className="max-w-3xl mx-auto px-6 space-y-8 animate-entry opacity-0 blur-sm translate-y-10 transition-all duration-700 delay-[400ms]">
<h3 className="text-3xl font-semibold tracking-tight">Get in touch</h3>
<div className="flex flex-col gap-6">
<a className="flex items-center gap-4 group" href="mailto:hello@ivyr.xyz">
<i className="w-5 h-5 stroke-[1.5] group-hover:stroke-neutral-400 transition" data-lucide="mail"></i>
<span className="group-hover:text-neutral-400 transition">hello@ivyr.xyz</span>
</a>
<a className="flex items-center gap-4 group" href="https://twitter.com" target="_blank">
<i className="w-5 h-5 stroke-[1.5] group-hover:stroke-neutral-400 transition" data-lucide="twitter"></i>
<span className="group-hover:text-neutral-400 transition">@ivy_motion</span>
</a>
<a className="flex items-center gap-4 group" href="https://instagram.com" target="_blank">
<i className="w-5 h-5 stroke-[1.5] group-hover:stroke-neutral-400 transition" data-lucide="instagram"></i>
<span className="group-hover:text-neutral-400 transition">@ivy.motion</span>
</a>
</div>
</div>
</section>

<footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-600">
    © 2024 Ivy R. All rights reserved.
  </footer>




    </>
  );
}
