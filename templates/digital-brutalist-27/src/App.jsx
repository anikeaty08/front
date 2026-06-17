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
colors: {
accent: '#F9D312',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
}
}
}
}



        // Generate 100 squares (10x10 grid)
        const gridContainer = document.getElementById('grid-overlay');
        const totalSquares = 100;

        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            // Brutalist styling: Solid yellow background, thin subtle border for grid effect
            square.className = 'bg-accent w-full h-full border border-black/10';
            
            // Interaction: Mouseover triggers opacity 0
            square.addEventListener('mouseover', function() {
                this.classList.add('fade-out');
            });

            // Touch support for mobile devices
            square.addEventListener('touchstart', function() {
                this.classList.add('fade-out');
            }, {passive: true});

            gridContainer.appendChild(square);
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-accent bg-black mix-blend-difference">
<div className="flex justify-between items-center h-14 px-4 md:px-8">
<div className="font-display tracking-widest text-sm font-medium uppercase">Hazel Chen</div>
<div className="flex gap-8 text-xs font-mono tracking-widest">
<a className="hover:text-white transition-colors uppercase" href="#work">Work</a>
<a className="hover:text-white transition-colors uppercase" href="#about">Resume</a>
<a className="hover:text-white transition-colors uppercase" href="#contact">Contact</a>
</div>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center border-b border-accent">

<div className="absolute inset-0 z-0 flex flex-col justify-between p-4 md:p-8 pt-20 pb-12 arch-grid">
<div className="flex justify-between items-start">
<span className="font-mono text-xs uppercase tracking-widest opacity-70">Portfolio 2025</span>
<span className="font-mono text-xs uppercase tracking-widest opacity-70">Vancouver, BC</span>
</div>
<div className="max-w-4xl">
<h1 className="font-display text-5xl md:text-8xl lg:text-9xl tracking-tight leading-none text-white mix-blend-overlay opacity-90 font-medium">
                    LOGIC &amp;<br/>
                    MECHANICAL<br/>
<span className="text-accent opacity-100">DESIGN.</span>
</h1>
<p className="mt-6 font-mono text-sm md:text-base max-w-md text-neutral-400 font-light leading-relaxed">
                    Bridging computational logic and product design. Creating intuitive mechanical systems that respond to human behavior through UX and interaction design.
                </p>
</div>
<div className="flex justify-between items-end w-full">
<div className="flex gap-4">
<span className="iconify text-accent" data-icon="lucide:arrow-down" data-width="24"></span>
</div>
<div className="text-right font-mono text-xs">
                    SCROLL TO EXPLORE
                </div>
</div>
</div>

<div className="absolute inset-0 z-10 w-full h-full cursor-crosshair" id="grid-overlay">

</div>
</header>

<main className="w-full border-x border-accent mx-auto max-w-[1920px]">

<div className="w-full border-b border-accent p-4 md:p-8 flex items-center gap-4 sticky top-14 bg-black z-40">
<span className="iconify" data-icon="lucide:grid-3x3" data-width="18"></span>
<h2 className="font-mono text-xs tracking-[0.2em] uppercase">Selected Projects</h2>
</div>

<div className="flex flex-col" id="work">

<article className="group relative border-b border-accent hover:bg-neutral-900 transition-colors duration-300">
<a className="block p-6 md:p-12 flex flex-col md:flex-row justify-between items-baseline gap-4" href="za-1.html">
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-2">
<span className="font-mono text-xs text-neutral-500">01</span>
<span className="h-px w-8 bg-accent"></span>
</div>
<h3 className="font-display text-3xl md:text-5xl text-white font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                            ZA-1 Roaster
                        </h3>
<div className="flex gap-2 mt-4">
<span className="px-2 py-1 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase">Industrial Design</span>
<span className="px-2 py-1 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase">Hardware</span>
</div>
</div>
<div className="md:text-right w-full md:w-1/2 flex flex-row md:flex-col justify-between h-full items-end">
<span className="iconify opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" data-icon="lucide:arrow-up-right" data-width="32"></span>
<span className="font-mono text-xs text-neutral-500 tracking-widest mt-4 md:mt-0">2025 / Present</span>
</div>
</a>
</article>

<article className="group relative border-b border-accent hover:bg-neutral-900 transition-colors duration-300">
<a className="block p-6 md:p-12 flex flex-col md:flex-row justify-between items-baseline gap-4" href="#">
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-2">
<span className="font-mono text-xs text-neutral-500">02</span>
<span className="h-px w-8 bg-accent"></span>
</div>
<h3 className="font-display text-3xl md:text-5xl text-white font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                            SGMT Desk
                        </h3>
<div className="flex gap-2 mt-4">
<span className="px-2 py-1 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase">Industrial Design</span>
<span className="px-2 py-1 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase">Rhino</span>
</div>
</div>
<div className="md:text-right w-full md:w-1/2 flex flex-row md:flex-col justify-between h-full items-end">
<span className="iconify opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" data-icon="lucide:arrow-up-right" data-width="32"></span>
<span className="font-mono text-xs text-neutral-500 tracking-widest mt-4 md:mt-0">2025 / Q2</span>
</div>
</a>
</article>

<article className="group relative border-b border-accent hover:bg-neutral-900 transition-colors duration-300">
<a className="block p-6 md:p-12 flex flex-col md:flex-row justify-between items-baseline gap-4" href="#">
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-2">
<span className="font-mono text-xs text-neutral-500">03</span>
<span className="h-px w-8 bg-accent"></span>
</div>
<h3 className="font-display text-3xl md:text-5xl text-white font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                            Evo Carshare
                        </h3>
<div className="flex gap-2 mt-4">
<span className="px-2 py-1 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase">UI/UX Design</span>
<span className="px-2 py-1 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase">Figma</span>
</div>
</div>
<div className="md:text-right w-full md:w-1/2 flex flex-row md:flex-col justify-between h-full items-end">
<span className="iconify opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" data-icon="lucide:arrow-up-right" data-width="32"></span>
<span className="font-mono text-xs text-neutral-500 tracking-widest mt-4 md:mt-0">2024 / Q4</span>
</div>
</a>
</article>

<article className="group relative border-b border-accent hover:bg-neutral-900 transition-colors duration-300">
<a className="block p-6 md:p-12 flex flex-col md:flex-row justify-between items-baseline gap-4" href="#">
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-2">
<span className="font-mono text-xs text-neutral-500">04</span>
<span className="h-px w-8 bg-accent"></span>
</div>
<h3 className="font-display text-3xl md:text-5xl text-white font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                            Neevo Smart Brace
                        </h3>
<div className="flex gap-2 mt-4">
<span className="px-2 py-1 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase">Product Design</span>
<span className="px-2 py-1 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase">Biomechanics</span>
</div>
</div>
<div className="md:text-right w-full md:w-1/2 flex flex-row md:flex-col justify-between h-full items-end">
<span className="iconify opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" data-icon="lucide:arrow-up-right" data-width="32"></span>
<span className="font-mono text-xs text-neutral-500 tracking-widest mt-4 md:mt-0">2024 / Q4</span>
</div>
</a>
</article>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 w-full">

<div className="border-b md:border-b-0 border-r border-accent p-6 md:p-12" id="about">
<h4 className="font-mono text-xs tracking-widest text-white mb-8 uppercase flex items-center gap-2">
<span className="iconify" data-icon="lucide:user" data-width="14"></span>
                    Profile
                </h4>
<p className="font-sans text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-8">
                    User Experience &amp; Interaction Design. I am passionate about roles that bridge computational logic and product design to create intuitive mechanical systems that respond to human behavior.
                </p>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-neutral-800 pb-2">
<span className="text-xs font-mono text-neutral-500">LOCATION</span>
<span className="text-sm text-white">Vancouver, BC</span>
</div>
<div className="flex justify-between items-center border-b border-neutral-800 pb-2">
<span className="text-xs font-mono text-neutral-500">EDUCATION</span>
<span className="text-sm text-white">BS Computer Science, UBC</span>
</div>
<div className="flex justify-between items-center border-b border-neutral-800 pb-2">
<span className="text-xs font-mono text-neutral-500">EXPERIENCE</span>
<span className="text-sm text-white">4+ Years</span>
</div>
</div>
</div>

<div className="p-6 md:p-12 flex flex-col justify-between" id="contact">
<div>
<h4 className="font-mono text-xs tracking-widest text-white mb-8 uppercase flex items-center gap-2">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span>
                        Tech Stack
                    </h4>
<div className="flex flex-wrap gap-2 mb-12">
<span className="border border-accent px-3 py-2 text-xs font-mono hover:bg-accent hover:text-black cursor-default transition-colors">RHINO</span>
<span className="border border-accent px-3 py-2 text-xs font-mono hover:bg-accent hover:text-black cursor-default transition-colors">KEYSHOT</span>
<span className="border border-accent px-3 py-2 text-xs font-mono hover:bg-accent hover:text-black cursor-default transition-colors">FIGMA</span>
<span className="border border-accent px-3 py-2 text-xs font-mono hover:bg-accent hover:text-black cursor-default transition-colors">REACT.JS</span>
<span className="border border-accent px-3 py-2 text-xs font-mono hover:bg-accent hover:text-black cursor-default transition-colors">OPENGL</span>
<span className="border border-accent px-3 py-2 text-xs font-mono hover:bg-accent hover:text-black cursor-default transition-colors">C++</span>
<span className="border border-accent px-3 py-2 text-xs font-mono hover:bg-accent hover:text-black cursor-default transition-colors">PYTHON</span>
<span className="border border-accent px-3 py-2 text-xs font-mono hover:bg-accent hover:text-black cursor-default transition-colors">TOUCH DESIGNER</span>
</div>
</div>
<div>
<h4 className="font-mono text-xs tracking-widest text-white mb-4 uppercase">Connect</h4>
<div className="flex flex-col gap-4">
<a className="flex items-center justify-between group" href="mailto:nuochenhazel@gmail.com">
<span className="text-xl md:text-2xl font-display font-light text-neutral-400 group-hover:text-accent transition-colors">nuochenhazel@gmail.com</span>
<span className="iconify -rotate-45 text-neutral-600 group-hover:text-accent transition-colors" data-icon="lucide:arrow-right" data-width="24"></span>
</a>
<div className="flex gap-4 mt-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:dribbble" data-width="20"></span>
</a>
</div>
</div>
</div>
</div>
</div>
<footer className="border-t border-accent p-4 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="font-mono text-xs text-neutral-600">© 2025 HAZEL CHEN. ALL RIGHTS RESERVED.</span>
<span className="font-mono text-xs text-neutral-600">DESIGNED WITH PURE HTML/TAILWIND</span>
</footer>
</main>


    </>
  );
}
