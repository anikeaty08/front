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
pixel: ['Pixelify Sans', 'monospace'],
},
colors: {
dark: '#050505',
brand: {
500: '#22c55e', // Green
}
},
backgroundImage: {
'dither': 'radial-gradient(#000 1px, transparent 0)',
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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute inset-0 max-w-7xl mx-auto flex justify-between opacity-[0.03] px-4 md:px-8">
<div className="w-px h-full bg-white"></div>
<div className="w-px h-full bg-white hidden md:block"></div>
<div className="w-px h-full bg-white hidden lg:block"></div>
<div className="w-px h-full bg-white hidden md:block"></div>
<div className="w-px h-full bg-white"></div>
</div>

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
</div>

<nav className="relative z-50 w-full border-b border-white/5 bg-dark/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-green-500 rounded-sm"></div>
<span className="font-medium tracking-tight text-white">PixelGen</span>
</div>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Showcase</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-white bg-white/10 px-4 py-1.5 rounded-full hover:bg-white/20 transition-colors border border-white/5" href="#">Log in</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-20 pb-32">

<div className="max-w-4xl mx-auto text-center px-4 mb-20">
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                C<span className="font-pixel text-green-400 opacity-90">r</span>eate Stunni<span className="font-pixel text-white/80">n</span>g I<span className="font-pixel text-green-400 opacity-90">m</span>ages <br className="hidden md:block"/>
                wi<span className="font-pixel text-white/80">t</span>h Just a P<span className="font-pixel text-white/80">r</span>ompt
            </h1>
<p className="text-xl text-gray-400 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
                Turn your ideas into high-quality visuals in seconds, <br className="hidden sm:block"/>
                no design skills needed.
            </p>
<div className="flex justify-center">
<button className="group relative inline-flex items-center justify-center gap-2 bg-white/5 text-white px-8 py-3 rounded-full overflow-hidden border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
<div className="absolute inset-0 bg-green-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative font-medium text-lg">Generate image</span>
<iconify-icon className="relative text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full overflow-hidden py-10 perspective-container group flex justify-center mb-24">

<div className="flex items-center justify-center gap-4 md:gap-8 min-w-max px-4">

<div className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 dither-mask transform opacity-40 grayscale card-3d translate-x-12 rotate-y-[25deg] scale-90 hidden lg:block">
<img alt="AI Art 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 dither-mask transform opacity-60 grayscale card-3d translate-x-4 rotate-y-[15deg] scale-95 hidden md:block">
<img alt="AI Art 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.2)] z-20 bg-dark">

<div className="absolute inset-0 z-30 pointer-events-none border-r-2 border-green-400/80 scanline mix-blend-screen w-1/2 h-full opacity-50"></div>

<div className="absolute inset-y-0 left-1/2 w-[1px] bg-green-400 z-40 shadow-[0_0_15px_#4ade80]"></div>
<div className="grid grid-cols-2 h-full">

<div className="relative h-full overflow-hidden dither-mask grayscale brightness-150 contrast-125">
<img alt="AI Art Center" className="absolute h-full max-w-none w-[200%] object-cover left-0" src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative h-full overflow-hidden">
<img alt="AI Art Center" className="absolute h-full max-w-none w-[200%] object-cover right-0" src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 dither-mask transform opacity-60 grayscale card-3d -translate-x-4 -rotate-y-[15deg] scale-95 hidden md:block">
<img alt="AI Art 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 dither-mask transform opacity-40 grayscale card-3d -translate-x-12 -rotate-y-[25deg] scale-90 hidden lg:block">
<img alt="AI Art 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent z-20 pointer-events-none"></div>
</div>

<div className="max-w-7xl mx-auto px-6 mb-24 border-y border-white/5 bg-white/[0.01]">
<div className="flex flex-wrap justify-center md:justify-between items-center py-8 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-white" height="36" icon="simple-icons:openai" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:stabilityai" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:midjourney" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:nvidia" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:adobe" width="96"></iconify-icon>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="absolute -top-6 left-6 text-5xl font-bold text-white/5 select-none group-hover:text-green-500/10 transition-colors">01</div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-green-400 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Lightning-Fast <br/> Image Generation</h3>
<p className="text-lg text-gray-400 leading-relaxed">
                        Type what you imagine, hit enter, and watch AI bring it to life in moments. No waiting queues.
                    </p>
</div>

<div className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="absolute -top-6 left-6 text-5xl font-bold text-white/5 select-none group-hover:text-green-500/10 transition-colors">02</div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-purple-400 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:pallete-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Multiple Styles &amp; <br/> Customization</h3>
<p className="text-lg text-gray-400 leading-relaxed">
                        Pick a style and fine-tune details like color, lighting, and mood. From photorealism to anime.
                    </p>
</div>

<div className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="absolute -top-6 left-6 text-5xl font-bold text-white/5 select-none group-hover:text-green-500/10 transition-colors">03</div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-blue-400 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cloud-download-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">High-Resolution <br/> Downloads</h3>
<p className="text-lg text-gray-400 leading-relaxed">
                        Export your creations in high-quality resolution optimized for print, web, or social media usage.
                    </p>
</div>
</div>
</div>
</main>

    </>
  );
}
