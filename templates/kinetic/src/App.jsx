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



        (function() {
            const initEarth = () => {
                if (typeof d3 === 'undefined') {
                    setTimeout(initEarth, 100);
                    return;
                }
                const canvas = document.getElementById('kinetic-earth-canvas');
                if (!canvas) return;
                
                const context = canvas.getContext('2d');
                // Use higher resolution for crisp rendering
                const size = 600; 
                const dpr = window.devicePixelRatio || 1;
                canvas.width = size * dpr;
                canvas.height = size * dpr;
                context.scale(dpr, dpr);
                
                // Earth Colors
                const colors = {
                    water: '#1e3a8a', // Blue-900
                    land: '#10b981',  // Emerald-500
                    stroke: '#3f3f46' // Zinc-700
                };

                const projection = d3.geoOrthographic()
                    .scale(size / 2.1)
                    .translate([size / 2, size / 2])
                    .clipAngle(90);

                const path = d3.geoPath(projection, context);
                const rotation = [0, -15];
                let landFeatures = null;

                // Fetch simplified land data
                fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/110m/physical/ne_110m_land.json")
                    .then(res => res.json())
                    .then(data => {
                        landFeatures = data;
                        animate();
                    })
                    .catch(e => console.error(e));

                function animate() {
                    rotation[0] += 0.3;
                    projection.rotate(rotation);
                    context.clearRect(0, 0, size, size);

                    // Ocean
                    context.beginPath();
                    path({type: "Sphere"});
                    context.fillStyle = colors.water;
                    context.fill();
                    
                    // Graticule (Grid)
                    const graticule = d3.geoGraticule10();
                    context.beginPath();
                    path(graticule);
                    context.strokeStyle = "rgba(255,255,255,0.1)";
                    context.lineWidth = 1;
                    context.stroke();

                    // Land
                    if (landFeatures) {
                        context.beginPath();
                        path(landFeatures);
                        context.fillStyle = colors.land;
                        context.fill();
                        context.strokeStyle = colors.stroke;
                        context.lineWidth = 0.5;
                        context.stroke();
                    }

                    // Globe Outline
                    context.beginPath();
                    path({type: "Sphere"});
                    context.strokeStyle = "rgba(255,255,255,0.2)";
                    context.lineWidth = 2;
                    context.stroke();

                    requestAnimationFrame(animate);
                }
            };
            // Start initialization
            initEarth();
        })();
    
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
      

<div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] noise-overlay w-full h-full"></div>

<nav className="fixed top-0 left-0 w-full z-40 px-4 py-6 md:px-8 md:py-8 flex justify-between items-start mix-blend-difference">
<a className="uppercase font-bold text-2xl tracking-tighter hover:text-[#DFE104] transition-colors duration-300" href="#">
            Kinetic<span className="text-[#DFE104]">.</span>
</a>
<div className="flex flex-col items-end gap-1">
<span className="text-xs uppercase tracking-widest text-[#A1A1AA]">Est. 2024</span>
<button className="uppercase font-bold tracking-tight text-sm md:text-base group flex items-center gap-2">
                Menu
                <iconify-icon className="group-hover:text-[#DFE104] transition-colors" height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="min-h-screen flex flex-col md:pb-20 md:px-8 border-[#3F3F46] border-b-2 pt-32 pr-4 pb-12 pl-4 relative justify-end">

<div className="flex flex-col leading-[0.8]">
<h1 className="text-[clamp(4rem,16vw,18rem)] uppercase whitespace-nowrap font-bold text-[#FAFAFA] tracking-tighter flex items-center gap-4 md:gap-8">
    Beyond
    <div className="relative w-[0.6em] h-[0.6em] aspect-square rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#09090B] border border-[#3F3F46]">
<canvas className="w-full h-full scale-125" height="750" id="kinetic-earth-canvas" width="750"></canvas>
</div>


</h1>
<div className="flex flex-col md:flex-row md:items-end justify-between w-full">
<h1 className="text-[clamp(4rem,16vw,18rem)] font-bold uppercase tracking-tighter text-[#DFE104] whitespace-nowrap ml-[4vw]">
                    Static
                </h1>

<div className="md:mb-8 md:mr-8 max-w-md mt-8 md:mt-0">
<p className="text-lg md:text-xl leading-tight text-[#A1A1AA] mb-8 font-medium">
                        WE BUILD DIGITAL EXPERIENCES THAT REFUSE TO STAND STILL. BRUTALIST AESTHETICS MEETS KINETIC MOTION.
                    </p>
<a className="group relative inline-flex items-center justify-center h-14 px-8 bg-[#DFE104] text-black uppercase font-bold tracking-tighter text-lg transition-transform duration-300 hover:scale-105 active:scale-95" href="#work">
<span className="relative z-10">Start Project</span>
<iconify-icon className="ml-2 relative z-10" height="24" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="absolute top-32 right-8 md:right-16 hidden lg:block">
<iconify-icon className="text-[#27272A] animate-spin-slow" height="120" icon="solar:infinity-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
</header>

<section className="border-b-2 border-[#3F3F46] py-6 md:py-10 bg-[#DFE104] text-black overflow-hidden select-none">
<div className="flex whitespace-nowrap animate-marquee w-max">

<div className="flex items-center gap-12 px-6">
<span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">Velocity</span>
<iconify-icon height="64" icon="solar:star-fall-linear" strokeWidth="1.5" width="64"></iconify-icon>
<span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">Impact</span>
<iconify-icon height="64" icon="solar:bolt-linear" strokeWidth="1.5" width="64"></iconify-icon>
<span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">Volume</span>
<iconify-icon height="64" icon="solar:asteroid-linear" strokeWidth="1.5" width="64"></iconify-icon>
<span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">Motion</span>
<iconify-icon height="64" icon="solar:atom-linear" strokeWidth="1.5" width="64"></iconify-icon>
</div>
<div className="flex items-center gap-12 px-6">
<span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">Velocity</span>
<iconify-icon height="64" icon="solar:star-fall-linear" strokeWidth="1.5" width="64"></iconify-icon>
<span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">Impact</span>
<iconify-icon height="64" icon="solar:bolt-linear" strokeWidth="1.5" width="64"></iconify-icon>
<span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">Volume</span>
<iconify-icon height="64" icon="solar:asteroid-linear" strokeWidth="1.5" width="64"></iconify-icon>
<span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">Motion</span>
<iconify-icon height="64" icon="solar:atom-linear" strokeWidth="1.5" width="64"></iconify-icon>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#3F3F46] border-b-2 border-[#3F3F46]">

<div className="bg-[#09090B] p-8 md:p-12 min-h-[40vh] flex flex-col justify-between group hover:bg-[#27272A] transition-colors duration-300">
<iconify-icon className="text-[#DFE104]" height="48" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="48"></iconify-icon>
<div>
<h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Structure</h3>
<p className="text-[#A1A1AA] text-lg leading-relaxed">
                    We strip away the unnecessary. No shadows, no gradients, no fluff. Just pure, raw grid systems that hold content with iron grip.
                </p>
</div>
</div>

<div className="bg-[#09090B] p-8 md:p-12 min-h-[40vh] flex flex-col justify-between group hover:bg-[#27272A] transition-colors duration-300">
<iconify-icon className="text-[#DFE104]" height="48" icon="solar:graph-up-linear" strokeWidth="1.5" width="48"></iconify-icon>
<div>
<h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Scale</h3>
<p className="text-[#A1A1AA] text-lg leading-relaxed">
                    Size is not just visibility, it's hierarchy. We use massive typography to scream the message before the user reads a single word.
                </p>
</div>
</div>

<div className="bg-[#09090B] p-8 md:p-12 min-h-[40vh] flex flex-col justify-between group hover:bg-[#27272A] transition-colors duration-300">
<iconify-icon className="text-[#DFE104]" height="48" icon="solar:play-circle-linear" strokeWidth="1.5" width="48"></iconify-icon>
<div>
<h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Kinetic</h3>
<p className="text-[#A1A1AA] text-lg leading-relaxed">
                    Static is dead. Every element reacts, breathes, and moves. Our interfaces feel like living organisms on the screen.
                </p>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-4 md:px-8 max-w-[95vw] mx-auto" id="work">
<div className="flex flex-col gap-4 mb-20">
<span className="text-[#DFE104] font-bold uppercase tracking-widest text-sm">Selected Work</span>
<h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
                Recent<br/>Output
            </h2>
</div>
<div className="flex flex-col gap-32 pb-32">

<article className="sticky top-24 md:top-32 group">
<div className="relative bg-[#09090B] border-2 border-[#3F3F46] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center transition-all duration-300 group-hover:bg-[#DFE104] group-hover:border-[#DFE104]">

<span className="absolute top-0 right-4 text-[8rem] md:text-[12rem] font-bold text-[#27272A] leading-none -z-0 select-none group-hover:text-black/10 transition-colors">01</span>
<div className="relative z-10 w-full md:w-2/3">
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 border border-[#3F3F46] text-xs uppercase tracking-wide text-[#A1A1AA] group-hover:border-black/20 group-hover:text-black">Fintech</span>
<span className="px-3 py-1 border border-[#3F3F46] text-xs uppercase tracking-wide text-[#A1A1AA] group-hover:border-black/20 group-hover:text-black">Web3</span>
</div>
<h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4 group-hover:text-black transition-colors">Nova Protocol</h3>
<p className="text-xl text-[#A1A1AA] max-w-xl group-hover:text-black/80 transition-colors">
                            A decentralized exchange interface defined by raw data visualization and zero-latency interaction models.
                        </p>
</div>
<div className="relative z-10 md:ml-auto">
<button className="h-14 w-14 md:h-20 md:w-20 rounded-none border-2 border-[#FAFAFA] flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all duration-300">
<iconify-icon className="text-[#FAFAFA] group-hover:text-[#DFE104]" height="32" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="sticky top-28 md:top-40 group">
<div className="relative bg-[#09090B] border-2 border-[#3F3F46] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center transition-all duration-300 group-hover:bg-[#DFE104] group-hover:border-[#DFE104]">
<span className="absolute top-0 right-4 text-[8rem] md:text-[12rem] font-bold text-[#27272A] leading-none -z-0 select-none group-hover:text-black/10 transition-colors">02</span>
<div className="relative z-10 w-full md:w-2/3">
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 border border-[#3F3F46] text-xs uppercase tracking-wide text-[#A1A1AA] group-hover:border-black/20 group-hover:text-black">Ecommerce</span>
<span className="px-3 py-1 border border-[#3F3F46] text-xs uppercase tracking-wide text-[#A1A1AA] group-hover:border-black/20 group-hover:text-black">Fashion</span>
</div>
<h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4 group-hover:text-black transition-colors">Void Apparel</h3>
<p className="text-xl text-[#A1A1AA] max-w-xl group-hover:text-black/80 transition-colors">
                            High-contrast brutalist storefront for a luxury streetwear brand. Speed, scale, and attitude.
                        </p>
</div>
<div className="relative z-10 md:ml-auto">
<button className="h-14 w-14 md:h-20 md:w-20 rounded-none border-2 border-[#FAFAFA] flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all duration-300">
<iconify-icon className="text-[#FAFAFA] group-hover:text-[#DFE104]" height="32" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="sticky top-32 md:top-48 group">
<div className="relative bg-[#09090B] border-2 border-[#3F3F46] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center transition-all duration-300 group-hover:bg-[#DFE104] group-hover:border-[#DFE104]">
<span className="absolute top-0 right-4 text-[8rem] md:text-[12rem] font-bold text-[#27272A] leading-none -z-0 select-none group-hover:text-black/10 transition-colors">03</span>
<div className="relative z-10 w-full md:w-2/3">
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 border border-[#3F3F46] text-xs uppercase tracking-wide text-[#A1A1AA] group-hover:border-black/20 group-hover:text-black">Agency</span>
<span className="px-3 py-1 border border-[#3F3F46] text-xs uppercase tracking-wide text-[#A1A1AA] group-hover:border-black/20 group-hover:text-black">Portfolio</span>
</div>
<h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4 group-hover:text-black transition-colors">Oblique Studio</h3>
<p className="text-xl text-[#A1A1AA] max-w-xl group-hover:text-black/80 transition-colors">
                            A portfolio site that breaks every grid rule. Asymmetric layouts and scroll-jacked interactions.
                        </p>
</div>
<div className="relative z-10 md:ml-auto">
<button className="h-14 w-14 md:h-20 md:w-20 rounded-none border-2 border-[#FAFAFA] flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all duration-300">
<iconify-icon className="text-[#FAFAFA] group-hover:text-[#DFE104]" height="32" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>
</div>
</article>
</div>
</section>

<section className="border-y-2 border-[#3F3F46] bg-[#09090B]">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#3F3F46]">

<div className="p-8 md:p-12 flex flex-col items-center justify-center text-center group hover:bg-[#27272A] transition-colors duration-300">
<span className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-bold text-[#FAFAFA] leading-none tracking-tighter group-hover:text-[#DFE104] transition-colors">85<span className="text-4xl align-top">+</span></span>
<span className="mt-4 text-sm uppercase tracking-widest text-[#A1A1AA]">Awards Won</span>
</div>

<div className="p-8 md:p-12 flex flex-col items-center justify-center text-center group hover:bg-[#27272A] transition-colors duration-300">
<span className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-bold text-[#FAFAFA] leading-none tracking-tighter group-hover:text-[#DFE104] transition-colors">40<span className="text-4xl align-top">K</span></span>
<span className="mt-4 text-sm uppercase tracking-widest text-[#A1A1AA]">Lines of Code</span>
</div>

<div className="p-8 md:p-12 flex flex-col items-center justify-center text-center group hover:bg-[#27272A] transition-colors duration-300">
<span className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-bold text-[#FAFAFA] leading-none tracking-tighter group-hover:text-[#DFE104] transition-colors">99<span className="text-4xl align-top">%</span></span>
<span className="mt-4 text-sm uppercase tracking-widest text-[#A1A1AA]">Uptime Guaranteed</span>
</div>

<div className="p-8 md:p-12 flex flex-col items-center justify-center text-center group hover:bg-[#27272A] transition-colors duration-300">
<span className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-bold text-[#FAFAFA] leading-none tracking-tighter group-hover:text-[#DFE104] transition-colors">24<span className="text-4xl align-top">/7</span></span>
<span className="mt-4 text-sm uppercase tracking-widest text-[#A1A1AA]">Global Support</span>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-4 md:px-8">
<div className="max-w-6xl mx-auto">
<h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-16 md:mb-24">Capabilities</h2>
<div className="flex flex-col border-t-2 border-[#3F3F46]">

<div className="group border-b-2 border-[#3F3F46] py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-[#DFE104] transition-colors duration-200 -mx-4 md:-mx-8 px-4 md:px-8">
<div className="flex items-baseline gap-8">
<span className="text-lg font-mono text-[#3F3F46] group-hover:text-black">01</span>
<h3 className="text-3xl md:text-6xl font-bold uppercase tracking-tight group-hover:text-black transition-colors">Brand Identity</h3>
</div>
<div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-black" height="48" icon="solar:arrow-right-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>

<div className="group border-b-2 border-[#3F3F46] py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-[#DFE104] transition-colors duration-200 -mx-4 md:-mx-8 px-4 md:px-8">
<div className="flex items-baseline gap-8">
<span className="text-lg font-mono text-[#3F3F46] group-hover:text-black">02</span>
<h3 className="text-3xl md:text-6xl font-bold uppercase tracking-tight group-hover:text-black transition-colors">Web Development</h3>
</div>
<div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-black" height="48" icon="solar:arrow-right-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>

<div className="group border-b-2 border-[#3F3F46] py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-[#DFE104] transition-colors duration-200 -mx-4 md:-mx-8 px-4 md:px-8">
<div className="flex items-baseline gap-8">
<span className="text-lg font-mono text-[#3F3F46] group-hover:text-black">03</span>
<h3 className="text-3xl md:text-6xl font-bold uppercase tracking-tight group-hover:text-black transition-colors">Motion Design</h3>
</div>
<div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-black" height="48" icon="solar:arrow-right-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>

<div className="group border-b-2 border-[#3F3F46] py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-[#DFE104] transition-colors duration-200 -mx-4 md:-mx-8 px-4 md:px-8">
<div className="flex items-baseline gap-8">
<span className="text-lg font-mono text-[#3F3F46] group-hover:text-black">04</span>
<h3 className="text-3xl md:text-6xl font-bold uppercase tracking-tight group-hover:text-black transition-colors">Digital Product</h3>
</div>
<div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-black" height="48" icon="solar:arrow-right-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 border-t-2 border-[#3F3F46] bg-[#09090B] overflow-hidden">
<div className="flex whitespace-nowrap animate-marquee-slow w-max hover:[animation-play-state:paused]">

<div className="w-[80vw] md:w-[40vw] lg:w-[30vw] border-2 border-[#3F3F46] p-8 mx-4 bg-[#09090B] whitespace-normal flex flex-col justify-between h-80 hover:border-[#DFE104] transition-colors">
<iconify-icon className="text-[#DFE104] mb-4" height="48" icon="solar:quote-up-linear" strokeWidth="1.5" width="48"></iconify-icon>
<p className="text-xl md:text-2xl font-medium leading-tight text-[#FAFAFA]">
                    "They didn't just build a website. They built a digital weapon. Our conversion rate doubled overnight."
                </p>
<div className="mt-6 flex items-center gap-4">
<div className="w-12 h-12 bg-[#27272A] rounded-none"></div>
<div>
<p className="text-sm font-bold uppercase">Sarah Jenkins</p>
<p className="text-xs text-[#A1A1AA] uppercase">CEO, Nova</p>
</div>
</div>
</div>

<div className="w-[80vw] md:w-[40vw] lg:w-[30vw] border-2 border-[#3F3F46] p-8 mx-4 bg-[#09090B] whitespace-normal flex flex-col justify-between h-80 hover:border-[#DFE104] transition-colors">
<iconify-icon className="text-[#DFE104] mb-4" height="48" icon="solar:quote-up-linear" strokeWidth="1.5" width="48"></iconify-icon>
<p className="text-xl md:text-2xl font-medium leading-tight text-[#FAFAFA]">
                    "Brutal, fast, and uncompromising. KINETIC understands the assignment perfectly."
                </p>
<div className="mt-6 flex items-center gap-4">
<div className="w-12 h-12 bg-[#27272A] rounded-none"></div>
<div>
<p className="text-sm font-bold uppercase">Marcus Chen</p>
<p className="text-xs text-[#A1A1AA] uppercase">Dir. Marketing, Void</p>
</div>
</div>
</div>

<div className="w-[80vw] md:w-[40vw] lg:w-[30vw] border-2 border-[#3F3F46] p-8 mx-4 bg-[#09090B] whitespace-normal flex flex-col justify-between h-80 hover:border-[#DFE104] transition-colors">
<iconify-icon className="text-[#DFE104] mb-4" height="48" icon="solar:quote-up-linear" strokeWidth="1.5" width="48"></iconify-icon>
<p className="text-xl md:text-2xl font-medium leading-tight text-[#FAFAFA]">
                    "The motion design is world-class. It feels like 2050. Absolute game changers."
                </p>
<div className="mt-6 flex items-center gap-4">
<div className="w-12 h-12 bg-[#27272A] rounded-none"></div>
<div>
<p className="text-sm font-bold uppercase">Alex Thorne</p>
<p className="text-xs text-[#A1A1AA] uppercase">Founder, Oblique</p>
</div>
</div>
</div>

<div className="w-[80vw] md:w-[40vw] lg:w-[30vw] border-2 border-[#3F3F46] p-8 mx-4 bg-[#09090B] whitespace-normal flex flex-col justify-between h-80 hover:border-[#DFE104] transition-colors">
<iconify-icon className="text-[#DFE104] mb-4" height="48" icon="solar:quote-up-linear" strokeWidth="1.5" width="48"></iconify-icon>
<p className="text-xl md:text-2xl font-medium leading-tight text-[#FAFAFA]">
                    "They didn't just build a website. They built a digital weapon. Our conversion rate doubled overnight."
                </p>
<div className="mt-6 flex items-center gap-4">
<div className="w-12 h-12 bg-[#27272A] rounded-none"></div>
<div>
<p className="text-sm font-bold uppercase">Sarah Jenkins</p>
<p className="text-xs text-[#A1A1AA] uppercase">CEO, Nova</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-4 md:px-8 max-w-[95vw] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
<div>
<h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
                    Let's<br/>Build<br/><span className="text-[#DFE104]">Loud.</span>
</h2>
<p className="text-xl md:text-2xl text-[#A1A1AA] max-w-lg mb-12">
                    Ready to break the silence? We are accepting new projects for Q4 2024.
                </p>
<div className="flex flex-col gap-4 text-[#A1A1AA] uppercase tracking-wide text-sm">
<div className="flex items-center gap-4">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
<a className="hover:text-[#FAFAFA] transition-colors" href="mailto:hello@kinetic.studio">hello@kinetic.studio</a>
</div>
<div className="flex items-center gap-4">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<span>Berlin / Tokyo / NYC</span>
</div>
</div>
</div>
<form className="flex flex-col gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-[#A1A1AA] mb-2">Name</label>
<input className="w-full h-24 bg-transparent border-b-2 border-[#3F3F46] text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#FAFAFA] placeholder:text-[#27272A] focus:border-[#DFE104] focus:outline-none transition-colors duration-200" placeholder="ENTER YOUR NAME" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-[#A1A1AA] mb-2">Email</label>
<input className="w-full h-24 bg-transparent border-b-2 border-[#3F3F46] text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#FAFAFA] placeholder:text-[#27272A] focus:border-[#DFE104] focus:outline-none transition-colors duration-200" placeholder="ENTER YOUR EMAIL" type="email"/>
</div>

<div className="py-8 flex items-start gap-4">
<label className="relative flex items-center justify-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-8 h-8 border-2 border-[#3F3F46] bg-transparent peer-checked:bg-[#DFE104] peer-checked:border-[#DFE104] transition-all duration-200"></div>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none" height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
</label>
<span className="text-[#A1A1AA] text-sm md:text-base pt-1">I agree to the processing of my data and accept the brutalist aesthetic policy.</span>
</div>
<button className="mt-8 h-20 w-full bg-[#DFE104] text-black text-2xl font-bold uppercase tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 flex items-center justify-center gap-4" type="button">
                    Send Inquiry
                    <iconify-icon height="32" icon="solar:plain-3-linear" strokeWidth="2" width="32"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-[#DFE104] text-black pt-20 pb-12 px-4 md:px-8 border-t-2 border-[#3F3F46]">
<div className="max-w-[95vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div className="flex flex-col justify-between h-full">
<a className="text-4xl font-bold uppercase tracking-tighter" href="#">Kinetic.</a>
<p className="mt-4 text-sm font-medium uppercase opacity-60 max-w-xs">
                    Digital design studio crafting experiences for the boldest brands on earth.
                </p>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Sitemap</h4>
<a className="text-xl font-bold uppercase tracking-tight hover:translate-x-2 transition-transform duration-200" href="#">Work</a>
<a className="text-xl font-bold uppercase tracking-tight hover:translate-x-2 transition-transform duration-200" href="#">Services</a>
<a className="text-xl font-bold uppercase tracking-tight hover:translate-x-2 transition-transform duration-200" href="#">Agency</a>
<a className="text-xl font-bold uppercase tracking-tight hover:translate-x-2 transition-transform duration-200" href="#">Contact</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Socials</h4>
<a className="text-xl font-bold uppercase tracking-tight hover:translate-x-2 transition-transform duration-200" href="#">Instagram</a>
<a className="text-xl font-bold uppercase tracking-tight hover:translate-x-2 transition-transform duration-200" href="#">Twitter / X</a>
<a className="text-xl font-bold uppercase tracking-tight hover:translate-x-2 transition-transform duration-200" href="#">LinkedIn</a>
<a className="text-xl font-bold uppercase tracking-tight hover:translate-x-2 transition-transform duration-200" href="#">Behance</a>
</div>

<div className="flex flex-col gap-4 justify-end">
<div className="text-sm font-bold uppercase opacity-60">
                    © 2024 Kinetic Studio<br/>All Rights Reserved.
                </div>
</div>
</div>

<div className="w-full overflow-hidden">
<h1 className="text-[clamp(4rem,18vw,24rem)] leading-[0.7] font-bold uppercase tracking-tighter text-center opacity-10 select-none pointer-events-none">
                Kinetic
            </h1>
</div>
</footer>

    </>
  );
}
