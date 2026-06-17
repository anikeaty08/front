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



    // lucide icons
    lucide.createIcons();

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Noise background
    const noiseCanvas = document.getElementById('noise');
    const ctx = noiseCanvas.getContext('2d');
    const noise = () => {
      const w = noiseCanvas.width = window.innerWidth;
      const h = noiseCanvas.height = window.innerHeight;
      for (let i = 0; i < 4000; i++) {
        ctx.fillStyle = 'rgba(255,255,255,' + Math.random() * 0.05 + ')';
        ctx.fillRect(Math.random() * w, Math.random() * h, 1, 1);
      }
    };
    noise();
    window.addEventListener('resize', noise);

    // Glitch effect for title
    (function glitch() {
      const clone1 = document.querySelectorAll('#glitch + h2')[0];
      const clone2 = document.querySelectorAll('#glitch + h2')[1];
      const animate = () => {
        const random = Math.random() * 2 + 1;
        clone1.style.transform = `translate(${Math.random()*4}px, ${Math.random()*2}px)`;
        clone2.style.transform = `translate(${Math.random()*-4}px, ${Math.random()*-2}px)`;
        clone1.style.clipPath = `inset(${Math.random()*15}% 0 ${Math.random()*15}% 0)`;
        clone2.style.clipPath = `inset(${Math.random()*15}% 0 ${Math.random()*15}% 0)`;
      };
      setInterval(animate, 120);
    })();

    // Fade in/slide observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, idx) => {
        if (e.isIntersecting) {
          setTimeout(()=> {
            e.target.classList.remove('opacity-0','translate-y-6','blur-md');
          }, idx * 120);
          observer.unobserve(e.target);
        }
      });
    }, {threshold: .2});

    document.querySelectorAll('section, article').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-6', 'blur-md', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    // Secret Easter egg
    const secretTile = document.getElementById('secretTile');
    const egg = document.getElementById('egg');
    secretTile.addEventListener('mouseenter', () => {
      egg.classList.remove('hidden');
    });
    secretTile.addEventListener('mouseleave', () => {
      egg.classList.add('hidden');
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
      

<header className="flex items-center justify-between px-6 lg:px-12 py-6 backdrop-blur-sm bg-white/5 border-b border-white/10 sticky top-0 z-30">
<h1 className="font-extrabold tracking-tight text-lg flex items-center gap-1">
<span>C</span><span>T</span>
</h1>
<nav className="hidden md:flex gap-8 text-sm">
<a className="hover:text-pink-500 transition-colors" href="#work">Work</a>
<a className="hover:text-pink-500 transition-colors" href="#about">About</a>
<a className="hover:text-pink-500 transition-colors" href="#contact">Contact</a>
</nav>
<button className="md:hidden" id="themeBtn">
<i className="stroke-[1.5] w-6 h-6" data-lucide="menu"></i>
</button>
</header>

<section className="relative flex flex-col items-center justify-center text-center pt-24 pb-32 px-6 overflow-hidden">

<div className="relative select-none">
<h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none" id="glitch">
        I BUILD <span className="text-pink-500">GLITCHY</span> REALITIES
      </h2>

<h2 aria-hidden="true" className="pointer-events-none absolute inset-0 text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-pink-600 opacity-70" style={{clipPath: 'inset(0 0 0 0)', mixBlendMode: 'difference'}}></h2>
<h2 aria-hidden="true" className="pointer-events-none absolute inset-0 text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-cyan-400 opacity-70" style={{clipPath: 'inset(0 0 0 0)', mixBlendMode: 'difference'}}></h2>
</div>
<p className="mt-8 max-w-xl text-zinc-400">
      Creative technologist crafting AR filters, experimental websites &amp; playful digital things.
    </p>
<div className="flex gap-6 mt-10">
<a className="inline-flex items-center gap-2 rounded-md bg-pink-600/80 hover:bg-pink-600 transition-colors px-5 py-3 text-sm font-semibold" href="#work">
<i className="stroke-[1.5] w-4 h-4" data-lucide="view"></i>
        See Work
      </a>
<a className="inline-flex items-center gap-2 rounded-md border border-zinc-600/60 hover:border-pink-600 hover:text-pink-500 transition-colors px-5 py-3 text-sm font-semibold" href="#contact">
<i className="stroke-[1.5] w-4 h-4" data-lucide="mail"></i>
        Contact
      </a>
</div>

<canvas className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" id="noise"></canvas>
</section>

<section className="relative pt-20 px-6 lg:px-12" id="work">
<h3 className="text-3xl font-bold tracking-tight mb-10">Selected Experiments</h3>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="group relative rounded-xl overflow-clip border border-white/5 hover:border-pink-500 transition-all">
<img alt="" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<h4 className="font-semibold text-lg tracking-tight">Neon Mask AR</h4>
<p className="text-sm text-zinc-400 mt-1">Snapchat Lens with reactive lighting.</p>
</div>

<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<i className="stroke-[1.5] w-10 h-10 text-pink-500 animate-ping" data-lucide="sparkles"></i>
</div>
</article>

<article className="group relative rounded-xl overflow-clip border border-white/5 hover:border-pink-500 transition-all">
<img alt="" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<h4 className="font-semibold text-lg tracking-tight">Canvas Glitch Toy</h4>
<p className="text-sm text-zinc-400 mt-1">Destroy &amp; rebuild photos in real-time.</p>
</div>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<i className="stroke-[1.5] w-10 h-10 text-cyan-400 animate-spin" data-lucide="wand-2"></i>
</div>
</article>

<article className="group relative rounded-xl overflow-clip border border-white/5 hover:border-pink-500 transition-all cursor-pointer" id="secretTile">
<img alt="" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4">
<h4 className="font-semibold text-lg tracking-tight">404 Wormhole</h4>
<p className="text-sm text-zinc-400 mt-1">A broken page you’ll never escape.</p>
</div>
<div className="hidden pointer-events-none absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-4" id="egg">
<p className="text-pink-500 font-bold text-xl">👾 Secret Unlocked!</p>
<a className="underline hover:text-cyan-400" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Claim your reward →</a>
</div>
</article>

<article className="group relative rounded-xl overflow-clip border border-white/5 hover:border-pink-500 transition-all">
<img alt="" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<h4 className="font-semibold text-lg tracking-tight">Web XR Garden</h4>
<p className="text-sm text-zinc-400 mt-1">Walk among voxels in your browser.</p>
</div>
</article>

<article className="group relative rounded-xl overflow-clip border border-white/5 hover:border-pink-500 transition-all">
<img alt="" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<h4 className="font-semibold text-lg tracking-tight">Face Morph Chaos</h4>
<p className="text-sm text-zinc-400 mt-1">Blend faces with machine learning.</p>
</div>
</article>

<article className="group relative rounded-xl overflow-clip border border-white/5 hover:border-pink-500 transition-all">
<img alt="" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4">
<h4 className="font-semibold text-lg tracking-tight">Audio Reactive Grid</h4>
<p className="text-sm text-zinc-400 mt-1">Shapes dance with your beats.</p>
</div>
</article>
</div>
<div className="h-px bg-white/10 my-20"></div>
</section>

<section className="px-6 lg:px-12 pb-24 max-w-3xl mx-auto" id="about">
<h3 className="text-3xl font-bold tracking-tight mb-6">About Me</h3>
<p className="text-zinc-400">
      I’m <span className="text-zinc-100">Alex</span>, a creative technologist merging code, art &amp; mischief. When not experimenting with
      shaders or AR face meshes, you’ll find me sampling vaporwave tracks &amp; petting every dog I meet.
    </p>
</section>

<footer className="border-t border-white/10 py-12 px-6 lg:px-12" id="contact">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-zinc-500">© <span id="year"></span> Alex. Don’t be normal.</p>
<div className="flex gap-6">
<a className="hover:text-pink-500 transition-colors" href="https://github.com/" target="_blank">
<i className="stroke-[1.5] w-5 h-5" data-lucide="github"></i>
</a>
<a className="hover:text-pink-500 transition-colors" href="https://twitter.com/" target="_blank">
<i className="stroke-[1.5] w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="hover:text-pink-500 transition-colors" href="mailto:hello@example.com">
<i className="stroke-[1.5] w-5 h-5" data-lucide="mail"></i>
</a>
</div>
</div>
</footer>



    </>
  );
}
