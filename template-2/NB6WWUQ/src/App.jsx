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
                        'jakarta': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                        'manrope': ['Manrope', 'system-ui', 'sans-serif'],
                    },
                    colors: {
                        'aura-red': '#FF3B30',
                        'aura-blue': '#007AFF',
                        'aura-green': '#34C759',
                        'aura-orange': '#FF9500',
                        'aura-purple': '#AF52DE',
                        'aura-yellow': '#FFCC02',
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
      

<nav className="flex justify-between items-center px-6 md:px-12 py-8 relative z-20">
<div className="text-2xl font-jakarta font-black tracking-tighter">AURA</div>
<div className="hidden md:flex space-x-8 text-base font-manrope font-semibold uppercase tracking-wide">
<a className="hover:text-aura-red transition-colors" href="#">Work</a>
<a className="hover:text-aura-blue transition-colors" href="#">About</a>
<a className="hover:text-aura-green transition-colors" href="#">Contact</a>
</div>
<button className="md:hidden">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</nav>

<section className="px-6 md:px-12 py-16 md:py-24">
<div className="max-w-6xl">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-jakarta font-black leading-none mb-8 tracking-tighter">
<span className="block">We make</span>
<span className="block text-aura-red">brands</span>
<span className="block">famous</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed font-manrope font-medium">
                Bold creative studio specializing in brand identity, digital design, and making things people actually care about.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-black text-white px-8 py-4 text-sm font-manrope font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors">
                    Start a project
                </button>
<button className="border-2 border-black text-black px-8 py-4 text-sm font-manrope font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-all">
                    View our work
                </button>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
<div className="aspect-square bg-aura-red"></div>
<div className="aspect-square bg-aura-blue"></div>
<div className="aspect-square bg-aura-green"></div>
<div className="aspect-square bg-aura-orange"></div>
</div>
<h2 className="text-6xl md:text-7xl font-jakarta font-black mb-16 text-center tracking-tighter">Selected work</h2>
<div className="grid md:grid-cols-2 gap-8 md:gap-16">
<div className="group">
<div className="aspect-[4/3] bg-aura-red mb-6 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-8xl font-jakarta font-black tracking-tighter">01</div>
</div>
</div>
<h3 className="text-lg font-jakarta font-black mb-3 tracking-tight">Brand Identity</h3>
<p className="text-gray-600 font-manrope font-medium text-sm leading-relaxed">Creating distinctive visual systems that cut through the noise and build lasting connections.</p>
</div>
<div className="group">
<div className="aspect-[4/3] bg-aura-blue mb-6 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-8xl font-jakarta font-black tracking-tighter">02</div>
</div>
</div>
<h3 className="text-lg font-jakarta font-black mb-3 tracking-tight">Digital Design</h3>
<p className="text-gray-600 font-manrope font-medium text-sm leading-relaxed">Websites and digital experiences that perform as beautifully as they look.</p>
</div>
<div className="group">
<div className="aspect-[4/3] bg-aura-green mb-6 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-8xl font-jakarta font-black tracking-tighter">03</div>
</div>
</div>
<h3 className="text-lg font-jakarta font-black mb-3 tracking-tight">Art Direction</h3>
<p className="text-gray-600 font-manrope font-medium text-sm leading-relaxed">Creative direction that defines culture and sets the standard for entire industries.</p>
</div>
<div className="group">
<div className="aspect-[4/3] bg-aura-orange mb-6 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-8xl font-jakarta font-black tracking-tighter">04</div>
</div>
</div>
<h3 className="text-lg font-jakarta font-black mb-3 tracking-tight">Brand Strategy</h3>
<p className="text-gray-600 font-manrope font-medium text-sm leading-relaxed">Strategic thinking that turns business goals into cultural movements.</p>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16 md:py-24 bg-gray-50">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-6xl md:text-7xl font-jakarta font-black mb-8 leading-tight tracking-tighter">
<span className="block">We don't</span>
<span className="block text-aura-purple">follow</span>
<span className="block">trends</span>
</h2>
<p className="text-gray-600 mb-6 leading-relaxed text-base font-manrope font-medium">
                    We create them. Our work speaks for itself – bold, purposeful, and impossible to ignore.
                </p>
<p className="text-gray-600 leading-relaxed text-base font-manrope font-medium">
                    Every project is an opportunity to redefine what's possible and push creative boundaries.
                </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-square bg-aura-yellow"></div>
<div className="aspect-square bg-aura-purple"></div>
<div className="aspect-square bg-black"></div>
<div className="aspect-square bg-aura-red"></div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-6xl md:text-7xl font-jakarta font-black text-aura-red mb-2 tracking-tighter">150+</div>
<div className="text-sm font-manrope font-semibold uppercase tracking-wide text-gray-600">Projects</div>
</div>
<div>
<div className="text-6xl md:text-7xl font-jakarta font-black text-aura-blue mb-2 tracking-tighter">50+</div>
<div className="text-sm font-manrope font-semibold uppercase tracking-wide text-gray-600">Awards</div>
</div>
<div>
<div className="text-6xl md:text-7xl font-jakarta font-black text-aura-green mb-2 tracking-tighter">10</div>
<div className="text-sm font-manrope font-semibold uppercase tracking-wide text-gray-600">Years</div>
</div>
<div>
<div className="text-6xl md:text-7xl font-jakarta font-black text-aura-orange mb-2 tracking-tighter">100%</div>
<div className="text-sm font-manrope font-semibold uppercase tracking-wide text-gray-600">Passion</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16 md:py-24 bg-black text-white">
<div className="max-w-4xl">
<h2 className="text-6xl md:text-7xl font-jakarta font-black mb-8 leading-none tracking-tighter">
<span className="block">Let's make</span>
<span className="block text-aura-yellow">something</span>
<span className="block">amazing</span>
</h2>
<p className="text-gray-300 mb-12 text-lg font-manrope font-medium leading-relaxed">
                Ready to create work that matters? Let's talk.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-aura-red text-white px-8 py-4 text-sm font-manrope font-bold uppercase tracking-wide hover:bg-red-600 transition-colors">
                    Start a project
                </button>
<button className="border-2 border-white text-white px-8 py-4 text-sm font-manrope font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all">
                    hello@aurastudio.com
                </button>
</div>
</div>
</section>

<footer className="px-6 md:px-12 py-8 bg-black text-white border-t border-gray-800">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="text-2xl font-jakarta font-black tracking-tighter">AURA</div>
<div className="flex space-x-6 text-sm font-manrope font-semibold uppercase tracking-wide">
<a className="text-gray-400 hover:text-aura-red transition-colors" href="#">Instagram</a>
<a className="text-gray-400 hover:text-aura-blue transition-colors" href="#">Twitter</a>
<a className="text-gray-400 hover:text-aura-green transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
