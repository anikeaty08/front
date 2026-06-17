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
      

<header className="fixed top-0 w-full flex items-center justify-between px-6 py-5 z-50 mix-blend-difference">
<div className="flex items-center gap-10">
<a className="text-3xl font-semibold tracking-tight text-white flex items-center gap-1" href="#">
<iconify-icon className="text-3xl" icon="solar:infinity-linear"></iconify-icon> nexus
            </a>
<nav className="hidden md:flex items-center gap-8 text-lg text-gray-300 font-normal">
<a className="hover:text-white flex items-center gap-1.5 transition-colors" href="#">
                    Platform <iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">Explore</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="bg-lime-400 text-black px-5 py-2.5 rounded-md font-medium text-lg flex items-center gap-2 hover:bg-lime-300 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)]">
<iconify-icon className="text-2xl" icon="solar:download-square-linear"></iconify-icon> Get Nexus
            </button>
</div>
</header>

<div className="fixed top-24 right-6 z-40 hidden md:block">
<button className="bg-neutral-900/60 backdrop-blur-md text-base text-gray-300 px-4 py-2 rounded-lg hover:bg-neutral-800 hover:text-white transition-all border border-neutral-800 font-normal">
            Simplify animations
        </button>
</div>

<main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">

<div className="relative z-20 text-center flex flex-col items-center pointer-events-none mt-12 mix-blend-difference">
<h1 className="text-7xl md:text-8xl lg:text-9xl font-serif-display font-medium tracking-tight text-neutral-200 leading-[0.9]">
                Limitless creativity
            </h1>
<p className="text-4xl md:text-5xl lg:text-7xl font-serif-display font-medium tracking-tight text-neutral-400 mt-4 italic">
                (Without the limits)
            </p>
</div>

<div className="absolute inset-0 z-0 w-full h-full pointer-events-none">

<div className="absolute top-[12%] sm:top-[15%] left-[5%] sm:left-[10%] w-[24%] sm:w-[18%] lg:w-[14%] max-w-[180px] aspect-square overflow-hidden rounded-sm pointer-events-auto transform hover:scale-105 transition-transform duration-700 ease-out shadow-2xl">
<img alt="Abstract Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&amp;q=80"/>
</div>

<div className="absolute top-[22%] left-[28%] lg:left-[30%] w-[20%] sm:w-[14%] lg:w-[10%] max-w-[140px] aspect-[4/5] overflow-hidden rounded-sm hidden md:block pointer-events-auto transform hover:scale-105 transition-transform duration-700 ease-out shadow-2xl">
<img alt="Macro Nature" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&amp;q=80"/>
</div>

<div className="absolute top-[8%] sm:top-[10%] right-[5%] sm:right-[12%] w-[28%] sm:w-[22%] lg:w-[16%] max-w-[200px] aspect-square overflow-hidden rounded-sm pointer-events-auto transform hover:-translate-y-2 transition-transform duration-700 ease-out shadow-2xl">
<img alt="Colorful Portrait" className="w-full h-full object-cover scale-110" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&amp;q=80"/>
</div>

<div className="absolute bottom-[20%] sm:bottom-[15%] left-[8%] sm:left-[15%] w-[22%] sm:w-[16%] lg:w-[12%] max-w-[160px] aspect-[3/4] overflow-hidden rounded-sm hidden sm:block pointer-events-auto transform hover:-rotate-2 transition-transform duration-700 ease-out shadow-2xl z-10">
<img alt="Abstract Landscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&amp;q=80"/>
</div>

<div className="absolute bottom-[18%] sm:bottom-[12%] right-[5%] sm:right-[15%] w-[26%] sm:w-[20%] lg:w-[14%] max-w-[180px] aspect-square overflow-hidden rounded-sm pointer-events-auto transform hover:scale-105 transition-transform duration-700 ease-out shadow-2xl">
<img alt="Colorful Gradient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&amp;q=80"/>
</div>

<div className="absolute bottom-[5%] sm:bottom-[8%] left-[45%] w-[18%] sm:w-[12%] lg:w-[9%] max-w-[120px] aspect-[4/5] overflow-hidden rounded-sm hidden lg:block pointer-events-auto transform hover:translate-y-[-10px] transition-transform duration-700 ease-out shadow-2xl opacity-80 hover:opacity-100">
<img alt="Vignette Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800&amp;q=80"/>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40">
<button className="bg-neutral-900/80 backdrop-blur-md text-base text-gray-400 px-6 py-2.5 rounded-full border border-neutral-700/50 hover:text-white hover:border-neutral-500 transition-all flex items-center gap-2.5 font-normal shadow-lg">
                Continue downward <iconify-icon className="text-2xl" icon="solar:mouse-circle-linear"></iconify-icon>
</button>
</div>
</main>

<section className="relative z-30 w-full max-w-7xl mx-auto border-x border-white/20 bg-black">

<div className="flex flex-col w-full border-t border-white/20 relative">
<div className="md:px-12 bg-black border-b border-white/20 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
<div className="flex flex-col space-y-10">
<div className="flex items-center gap-4 group">
<span className="text-xs font-mono text-white/40 tracking-tighter">01</span>
<div className="w-px h-4 bg-white/10"></div>
<span className="text-xs uppercase font-normal text-lime-400 tracking-[0.2em]">Platform Features</span>
</div>
<h2 className="text-4xl md:text-6xl font-sans font-light text-white tracking-tight leading-[1.05]">
                            Engineered for
                            <br/>
<span className="text-white/50">limitless scale</span>
</h2>
</div>
<div className="flex flex-col items-start lg:pt-24">
<p className="text-lg text-gray-400 font-sans font-light leading-relaxed mb-12 max-w-md">
                            Nexus is designed from the ground up to ensure your creative workflows remain unhindered, hardware-accelerated, and universally accessible across teams.
                        </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 w-full border-b border-white/20 gap-0">

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col gap-5 hover:bg-white/[0.02] transition-colors relative group">
<div className="w-11 h-11 rounded-lg border border-white/20 bg-white/[0.03] flex items-center justify-center text-white group-hover:bg-white/[0.08] transition-colors shadow-inner shadow-white/5">
<iconify-icon height="22" icon="solar:map-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white font-sans tracking-tight mb-2">Infinite Canvas</h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                            Your workspace grows with your ideas. Never hit a border or run out of space for your creative assets and endless artboards.
                        </p>
</div>
</div>

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col gap-5 hover:bg-white/[0.02] transition-colors relative group">
<div className="w-11 h-11 rounded-lg border border-white/20 bg-white/[0.03] flex items-center justify-center text-white group-hover:bg-white/[0.08] transition-colors shadow-inner shadow-white/5">
<iconify-icon height="22" icon="solar:cpu-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white font-sans tracking-tight mb-2">Hardware Accelerated</h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                            Utilize the full power of your GPU natively. Render complex scenes and vector animations in real-time without stutter.
                        </p>
</div>
</div>

<div className="p-8 md:p-12 flex flex-col gap-5 hover:bg-white/[0.02] transition-colors relative group">
<div className="w-11 h-11 rounded-lg border border-white/20 bg-white/[0.03] flex items-center justify-center text-white group-hover:bg-white/[0.08] transition-colors shadow-inner shadow-white/5">
<iconify-icon height="22" icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white font-sans tracking-tight mb-2">Real-time Sync</h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                            Collaborate effortlessly with global teams. See your peers' changes instantly with conflict-free, precise version control.
                        </p>
</div>
</div>
</div>
</div>

<div className="flex flex-col w-full relative">
<div className="md:px-12 bg-black pt-24 pr-6 pb-24 pl-6 relative border-b border-white/20">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
<div className="flex flex-col space-y-10">
<div className="flex items-center gap-4 group">
<span className="text-xs text-white/40 tracking-tighter font-mono">02</span>
<div className="w-px h-4 bg-white/10"></div>
<span className="text-xs uppercase font-normal text-lime-400 tracking-[0.2em]">Creative Process</span>
</div>
<h2 className="text-4xl md:text-6xl font-sans font-light text-white tracking-tight leading-[1.05]">
                            Seamless
                            <br/>
<span className="text-white/50">workflows</span>
</h2>
</div>
<div className="flex flex-col items-start lg:pt-24">
<p className="text-lg text-gray-400 font-sans font-light leading-relaxed mb-12 max-w-md">
                            We believe tooling should disappear. Explore how our engine automates file management while keeping your focus entirely on the art.
                        </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/20 gap-0">

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col items-center text-center gap-6 group hover:bg-white/[0.02] transition-colors relative">
<div className="text-xs font-normal text-gray-400 uppercase tracking-widest font-sans border border-white/20 px-3 py-1 rounded-full bg-white/[0.03]">
                        Step 01
                    </div>
<div className="w-12 h-12 rounded-full border border-white/20 bg-black flex items-center justify-center text-white relative z-10">
<iconify-icon height="24" icon="solar:pen-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white font-sans tracking-tight mb-2">Design</h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                            Construct your scene with native vector tools. Apply dynamic constraints effortlessly.
                        </p>
</div>
</div>

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col items-center text-center gap-6 group hover:bg-white/[0.02] transition-colors relative">
<div className="text-xs font-normal text-gray-400 uppercase tracking-widest font-sans border border-white/20 px-3 py-1 rounded-full bg-white/[0.03]">
                        Step 02
                    </div>
<div className="w-12 h-12 rounded-full border border-white/20 bg-black flex items-center justify-center text-white relative z-10">
<iconify-icon height="24" icon="solar:play-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white font-sans tracking-tight mb-2">Animate</h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                            Keyframe automatically or use expressions. Watch your creations breathe with physics engines.
                        </p>
</div>
</div>

<div className="p-8 md:p-12 flex flex-col items-center text-center gap-6 group hover:bg-white/[0.02] transition-colors relative">
<div className="text-xs font-normal text-gray-400 uppercase tracking-widest font-sans border border-white/20 px-3 py-1 rounded-full bg-white/[0.03]">
                        Step 03
                    </div>
<div className="w-12 h-12 rounded-full border border-white/20 bg-black flex items-center justify-center text-white relative z-10">
<iconify-icon height="24" icon="solar:export-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white font-sans tracking-tight mb-2">Deploy</h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                            Export directly to code, Lottie, or video. Implement into your final product in seconds.
                        </p>
</div>
</div>
</div>
</div>
</section>

<div className="fixed bottom-8 right-8 z-40">
<button className="bg-neutral-900 text-gray-400 p-4 rounded-full hover:bg-neutral-800 hover:text-white transition-all border border-neutral-800 shadow-xl group">
<iconify-icon className="text-3xl group-hover:rotate-12 transition-transform duration-300" icon="solar:palette-round-linear"></iconify-icon>
</button>
</div>

    </>
  );
}
