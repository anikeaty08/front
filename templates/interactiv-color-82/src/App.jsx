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



        // Initialize Icons
        lucide.createIcons();

        // Color Definitions (HSL)
        // 1. Deep Indigo (Start)
        // 2. Violet
        // 3. Fuchsia/Pink
        // 4. Rose/Red
        // 5. Amber/Orange (End)
        const colors = [
            { h: 222, s: 47, l: 11 },   // Dark Slate/Blue (Tailwind Slate-900 approx base)
            { h: 243, s: 75, l: 59 },   // Indigo
            { h: 270, s: 60, l: 50 },   // Purple
            { h: 330, s: 80, l: 60 },   // Pink
            { h: 25,  s: 90, l: 65 }    // Orange
        ];

        const track = document.getElementById('scroll-track');
        const bgElement = document.getElementById('dynamic-bg');
        const cardTitle = document.getElementById('card-title');
        const progressBar = document.getElementById('progress-bar');
        const percentLabel = document.getElementById('percent-label');

        const stateNames = ["Midnight", "Indigo", "Amethyst", "Magenta", "Sunrise"];

        function lerp(start, end, t) {
            return start + (end - start) * t;
        }

        function updateColor() {
            // Get viewport and element metrics
            const scrollTop = window.scrollY;
            const trackTop = track.offsetTop;
            const trackHeight = track.offsetHeight;
            const windowHeight = window.innerHeight;

            // Calculate progress through the sticky section
            // We start calculating when the top of the track hits the top of viewport
            // We end when the bottom of the track hits the bottom of the viewport
            const scrollDist = trackHeight - windowHeight;
            let progress = (scrollTop - trackTop) / scrollDist;

            // Clamp progress between 0 and 1
            progress = Math.max(0, Math.min(1, progress));

            // Determine which segment of the color array we are in
            // We have 5 colors, so 4 segments (0-1, 1-2, 2-3, 3-4)
            const segmentCount = colors.length - 1;
            const segmentLength = 1 / segmentCount;
            
            // Find current index
            let index = Math.floor(progress / segmentLength);
            
            // Clamp index to ensure we don't go out of bounds at exactly 1.0 progress
            if (index >= segmentCount) index = segmentCount - 1;

            // Calculate local progress within the specific segment (0.0 to 1.0)
            const subProgress = (progress - (index * segmentLength)) / segmentLength;

            const c1 = colors[index];
            const c2 = colors[index + 1];

            // Interpolate HSL values
            const h = lerp(c1.h, c2.h, subProgress);
            const s = lerp(c1.s, c2.s, subProgress);
            const l = lerp(c1.l, c2.l, subProgress);

            // Apply style
            bgElement.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
            
            // Update UI elements
            progressBar.style.width = `${progress * 100}%`;
            percentLabel.innerText = `${Math.round(progress * 100)}%`;

            // Change Text based on dominant stage
            // We want the text to snap when we are roughly halfway through a segment relative to the whole
            const textIndex = Math.round(progress * segmentCount);
            if(textIndex < stateNames.length) {
               cardTitle.innerText = `State: ${stateNames[textIndex]}`;
            }
        }

        // Use requestAnimationFrame for smooth performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateColor();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Initial call
        updateColor();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-white/50 backdrop-blur-md">
<div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-white">
<i className="h-4 w-4" data-lucide="aperture"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">CHROMA</span>
</div>
<div className="hidden items-center gap-6 md:flex">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Origins</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Process</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Systems</a>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Sign in</a>
<button className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white transition-transform hover:scale-105 hover:bg-slate-800">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative flex flex-col items-center justify-center pt-32 pb-24 text-center sm:pt-48 sm:pb-32">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 pr-4 transition-colors hover:border-slate-300 hover:bg-white cursor-pointer group">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">N</span>
<span className="text-xs font-medium text-slate-600 group-hover:text-slate-900">Introducing Flux Engine 2.0</span>
<i className="h-3 w-3 text-slate-400 group-hover:text-slate-600 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
<h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl">
            Interpolation driven<br/>
<span className="text-slate-400">user experiences.</span>
</h1>
<p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
            Seamlessly transition between states with high-performance rendering. 
            Scroll down to experience the reactive gradient engine.
        </p>
</section>


<section className="relative h-[400vh] w-full" id="scroll-track">

<div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden" id="sticky-viewport">

<div className="absolute inset-0 z-0 bg-slate-900 transition-colors duration-75 ease-linear" id="dynamic-bg"></div>

<div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">

<div className="glass-panel relative mb-12 w-full max-w-md overflow-hidden rounded-2xl p-1 shadow-2xl ring-1 ring-white/20 transition-all duration-500 hover:scale-[1.01] sm:max-w-xl">

<div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
<div className="flex gap-1.5">
<div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
<div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
</div>
<div className="ml-2 h-1.5 w-24 rounded-full bg-white/10"></div>
</div>

<div className="flex flex-col items-center p-8 sm:p-12">
<div className="mb-6 rounded-full bg-white/10 p-4 ring-1 ring-white/20">
<i className="h-8 w-8 text-white/90" data-lucide="layers"></i>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl" id="card-title">State 1: Deep Indigo</h2>
<p className="mt-3 text-sm font-medium text-white/60">
                            The background color is calculated mathematically based on your scroll percentage relative to this section.
                        </p>

<div className="mt-8 w-full max-w-[200px]">
<div className="flex justify-between pb-2 text-[10px] font-medium uppercase tracking-wider text-white/40">
<span>Input</span>
<span id="percent-label">0%</span>
</div>
<div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
<div className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-75 ease-out" id="progress-bar"></div>
</div>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Scroll to Interpolate</span>
<i className="h-4 w-4 animate-bounce text-white/40" data-lucide="chevron-down"></i>
</div>
</div>

<div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl filter"></div>
</div>
</section>

<section className="bg-white px-6 py-24 sm:py-32">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Precise Control</h2>
<p className="mt-4 text-sm leading-relaxed text-slate-500">
                The interpolation logic maps the scroll offset to HSL color space coordinates, ensuring a silky smooth 60fps transition without heavy rendering costs.
            </p>
<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
<div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-left transition-colors hover:border-slate-300 hover:bg-white">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-900/5">
<i className="h-5 w-5 text-amber-500" data-lucide="zap"></i>
</div>
<h3 className="text-sm font-semibold text-slate-900">Instant Reaction</h3>
<p className="mt-2 text-xs leading-relaxed text-slate-500">Updates happen on the animation frame for maximum fluidity.</p>
</div>
<div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-left transition-colors hover:border-slate-300 hover:bg-white">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-900/5">
<i className="h-5 w-5 text-indigo-500" data-lucide="palette"></i>
</div>
<h3 className="text-sm font-semibold text-slate-900">HSL Space</h3>
<p className="mt-2 text-xs leading-relaxed text-slate-500">Calculating in cylindrical-coordinate representations of colors.</p>
</div>
</div>
</div>
</section>
<footer className="border-t border-slate-100 bg-white py-12">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
<div className="flex items-center gap-2">
<div className="flex h-5 w-5 items-center justify-center rounded bg-slate-900 text-white">
<i className="h-3 w-3" data-lucide="aperture"></i>
</div>
<span className="text-xs font-semibold text-slate-900">CHROMA INC.</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Privacy</a>
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Terms</a>
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Twitter</a>
</div>
<p className="text-[10px] text-slate-400">© 2024 Design Systems.</p>
</div>
</footer>


    </>
  );
}
