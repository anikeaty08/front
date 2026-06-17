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



        lucide.createIcons();
    
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad805ca9-a59e-4356-9b6c-2d75c7369afb_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<nav className="flex sticky w-full max-w-[1400px] z-50 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 top-0 backdrop-blur-md items-center justify-between bg-white/80">

<a className="flex items-center gap-2 text-2xl font-normal tracking-tight" href="#">
            
            SoulShell<sup className="text-orange-500 text-base font-medium">+</sup>
</a>

<div className="hidden md:flex items-center gap-12">
<a className="text-lg text-gray-500 transition-colors font-light hover:text-black" href="#">Platform</a>
<a className="text-lg text-gray-500 transition-colors font-light hover:text-black" href="#">Neural Network</a>
<a className="text-lg text-gray-500 transition-colors font-light hover:text-black" href="#">Use Cases</a>
<a className="text-lg text-gray-500 transition-colors font-light hover:text-black" href="#">Pricing</a>
</div>

<div className="flex items-center gap-8">
<a className="text-lg text-gray-500 transition-colors hidden sm:block font-light hover:text-black" href="#">Log in</a>
<a className="px-8 py-3 rounded-full text-lg font-normal hover:bg-orange-500 transition-colors shadow-sm bg-black text-white" href="#">
                Get Started
            </a>
</div>
</nav>
<main className="w-full flex flex-col">

<section className="flex flex-col min-h-[85vh] w-full max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 justify-center">
<div className="flex flex-col max-w-5xl gap-x-8 gap-y-8">

<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border w-fit border-gray-200 bg-gray-50/50">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
</span>
<span className="text-sm font-normal tracking-wide uppercase text-gray-600">System v2.4 Online</span>
</div>

<div className="flex flex-col gap-4">
<h1 className="sm:text-7xl lg:text-8xl leading-[1.05] text-6xl font-normal text-gray-300 tracking-tighter">
                        Next-generation Ai
                    </h1>
<h1 className="sm:text-7xl lg:text-8xl leading-[1.05] text-6xl font-normal text-gray-200 tracking-tighter">
                        cognitive workspace
                    </h1>
<div className="mt-8 flex flex-col items-start w-fit group cursor-default">
<h2 className="leading-none sm:text-5xl lg:text-6xl text-4xl font-normal text-zinc-300 tracking-tighter pr-4">
                            for nonlinear minds
                        </h2>

<div className="w-full h-1.5 sm:h-2 bg-orange-500 mt-5 transform origin-left transition-transform duration-500 ease-out group-hover:scale-x-105"></div>
</div>
</div>
<p className="sm:text-2xl leading-relaxed text-xl font-light text-gray-400 max-w-2xl mt-8">
                    Break free from rigid structures. Synthesize complex thoughts, discover hidden patterns, and amplify your creative intelligence in a fluid environment.
                </p>
<div className="flex items-center gap-6 mt-8">
<a className="px-10 py-4 rounded-full text-lg font-normal hover:bg-orange-500 transition-all flex items-center gap-3 shadow-lg hover:shadow-orange-500/20 bg-black text-white" href="#">
                        Enter Workspace
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="hover:text-orange-500 transition-colors flex items-center gap-2 text-lg font-normal text-zinc-400" href="#">
                        View Demo <i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="w-full border-y border-gray-100 bg-gray-50/30">
<div className="max-w-[1400px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
<p className="uppercase lg:text-left whitespace-nowrap text-base font-normal text-gray-300 tracking-widest text-center">
                    Empowering visionaries at
                </p>
<div className="flex flex-wrap justify-center lg:justify-end items-center gap-12 sm:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="flex items-center gap-2 text-2xl font-normal text-gray-200 tracking-tight">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i> Paradigm
                    </span>
<span className="text-2xl italic text-gray-100 tracking-tight font-serif">Synthetix</span>
<span className="text-2xl font-normal tracking-tight flex items-center gap-2 text-black">
<i className="w-6 h-6" data-lucide="hexagon" strokeWidth="1.5"></i> Core
                    </span>
<span className="text-2xl font-normal tracking-tight flex items-center gap-2 text-black">
<i className="w-6 h-6" data-lucide="circle-dashed" strokeWidth="1.5"></i> Nexus
                    </span>
</div>
</div>
</section>

<section className="w-full max-w-[1400px] mx-auto px-6 py-32 flex flex-col gap-20">
<div className="flex flex-col gap-6 max-w-3xl">
<h2 className="sm:text-6xl text-5xl font-normal text-gray-300 tracking-tighter">
                    Designed for fluidity.
                </h2>
<p className="leading-relaxed text-xl font-light text-gray-300">
                    Traditional tools force you into hierarchical folders. SoulShell+ adapts to the natural, interconnected geometry of human thought.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-10 rounded-[2rem] border hover:shadow-[0_8px_30px_rgb(249,115,22,0.05)] transition-all duration-300 flex flex-col gap-8 bg-white border-gray-200 hover:border-orange-200">
<div className="w-14 h-14 rounded-full border flex items-center justify-center group-hover:bg-orange-50 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors bg-gray-50 border-gray-100 text-black">
<i className="w-6 h-6" data-lucide="network" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-2xl font-normal tracking-tight text-black">Dynamic Mapping</h3>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                            Watch as your discrete notes automatically connect into a visual knowledge graph, revealing structural relationships you didn't know existed.
                        </p>
</div>
</div>

<div className="group p-10 rounded-[2rem] border hover:shadow-[0_8px_30px_rgb(249,115,22,0.05)] transition-all duration-300 flex flex-col gap-8 bg-white border-gray-200 hover:border-orange-200">
<div className="w-14 h-14 rounded-full border flex items-center justify-center group-hover:bg-orange-50 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors bg-gray-50 border-gray-100 text-black">
<i className="w-6 h-6" data-lucide="infinity" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-2xl font-normal tracking-tight text-black">Infinite Canvas</h3>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                            A boundless workspace where text, images, and data co-exist. Zoom out for the macro view, zoom in for molecular detail.
                        </p>
</div>
</div>

<div className="group hover:shadow-[0_8px_30px_rgb(249,115,22,0.05)] transition-all duration-300 flex flex-col gap-8 hover:border-orange-200 bg-white border-gray-200 border rounded-[2rem] pt-10 pr-10 pb-10 pl-10 gap-x-8 gap-y-8">
<div className="w-14 h-14 rounded-full border flex items-center justify-center group-hover:bg-orange-50 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors bg-gray-50 border-gray-100 text-black">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-2xl font-normal tracking-tight text-black">Cognitive Synthesis</h3>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                            Highlight disparate concepts and let our neural engine generate synthesized summaries, bridging the gap between raw data and true insight.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 sm:py-40 relative overflow-hidden flex flex-col items-center justify-center text-center bg-black">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] blur-[100px] sm:blur-[150px] rounded-full pointer-events-none mix-blend-screen bg-orange-600/20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-500/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center gap-12">
<i className="w-16 h-16 text-orange-500 opacity-90" data-lucide="brain-circuit" strokeWidth="1.5"></i>
<h2 className="text-5xl sm:text-7xl font-normal tracking-tighter leading-[1.1] text-white">
                    Intelligence amplified by <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r via-orange-500 to-red-500 font-serif italic pr-2 from-orange-400">magnitude.</span>
</h2>
<p className="text-xl font-light max-w-2xl leading-relaxed text-gray-400">
                    By removing friction between thought and structure, users experience a fundamental shift in cognitive throughput. The system doesn't just store information; it actively participates in the thinking process.
                </p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 w-full mt-10 border-t pt-16 border-white/10">
<div className="flex flex-col items-center gap-3">
<span className="text-6xl font-normal tracking-tighter text-white">10x</span>
<span className="text-lg font-normal tracking-wide uppercase text-orange-400/80">Faster Retrieval</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="text-6xl font-normal tracking-tighter text-white">∞</span>
<span className="text-lg font-normal tracking-wide uppercase text-orange-400/80">Canvas Depth</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="text-6xl font-normal tracking-tighter text-white">0ms</span>
<span className="text-lg font-normal tracking-wide uppercase text-orange-400/80">Context Switching</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-white">
<div className="max-w-[1400px] mx-auto px-6 py-32 flex flex-col lg:flex-row gap-20 lg:gap-32">
<div className="lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-40 h-fit">
<h2 className="text-5xl font-normal tracking-tighter leading-tight text-black">
                        The Neural <br/>
<span className="font-serif italic text-gray-400">Workflow</span>
</h2>
<p className="text-xl text-gray-500 font-light leading-relaxed">
                        A seamless progression from raw input to crystallized understanding.
                    </p>
</div>
<div className="lg:w-2/3 flex flex-col gap-16">

<div className="flex flex-col sm:flex-row gap-8 items-start group">
<div className="w-16 h-16 rounded-full border flex items-center justify-center shrink-0 group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors bg-gray-50 border-gray-100">
<span className="text-2xl font-serif group-hover:text-orange-500 transition-colors text-gray-300">01</span>
</div>
<div className="flex flex-col gap-4 mt-2">
<h3 className="text-3xl font-normal tracking-tight text-black">Capture Frictionlessly</h3>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                                Dump text, links, audio, or images anywhere on the canvas. No folders to choose, no tags required. The system ingests and indexes instantly.
                            </p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-start group">
<div className="w-16 h-16 rounded-full border flex items-center justify-center shrink-0 group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors bg-gray-50 border-gray-100">
<span className="text-2xl font-serif group-hover:text-orange-500 transition-colors text-gray-300">02</span>
</div>
<div className="flex flex-col gap-4 mt-2">
<h3 className="text-3xl font-normal tracking-tight text-black">Spatial Arrangement</h3>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                                Move objects organically. Group related thoughts by proximity. Let your visual cortex handle the organization implicitly.
                            </p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-start group">
<div className="w-16 h-16 rounded-full border flex items-center justify-center shrink-0 group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors bg-gray-50 border-gray-100">
<span className="text-2xl font-serif group-hover:text-orange-500 transition-colors text-gray-300">03</span>
</div>
<div className="flex flex-col gap-4 mt-2">
<h3 className="text-3xl font-normal tracking-tight text-black">Algorithmic Surfacing</h3>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                                As you work, SoulShell+ actively suggests connections to past notes, unearthing forgotten context and sparking serendipitous ideas.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-t bg-gray-50 border-gray-100">
<div className="flex flex-col text-center max-w-[1400px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 gap-x-10 gap-y-10 items-center justify-center">
<i className="w-12 h-12 mb-4 text-black" data-lucide="fingerprint" strokeWidth="1.5"></i>
<h2 className="sm:text-6xl lg:text-7xl leading-[1.05] text-5xl font-normal text-black tracking-tighter max-w-4xl">
                    Unlock your <span className="font-serif italic text-gray-400">nonlinear</span> potential.
                </h2>
<p className="text-xl text-gray-500 font-light max-w-2xl">
                    Join the vanguard of thinkers, researchers, and creators building their second brain on a limitless canvas.
                </p>
<div className="mt-8 flex flex-col sm:flex-row items-center gap-6 w-full max-w-md">
<input className="w-full px-6 py-4 rounded-full border text-lg font-light focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-gray-400 shadow-sm bg-white border-gray-200 text-black" placeholder="Enter your email" type="email"/>
<button className="w-full sm:w-auto shrink-0 px-8 py-4 rounded-full text-lg font-normal hover:bg-orange-500 transition-colors shadow-md bg-black text-white">
                        Request Access
                    </button>
</div>
<p className="text-sm font-normal mt-2 text-gray-400">Early access spots are strictly limited.</p>
</div>
</section>
</main>

<footer className="w-full border-t mt-auto bg-white border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-center gap-8">
<a className="flex items-center gap-2 text-2xl font-normal tracking-tight text-black" href="#">
<i className="w-6 h-6" data-lucide="fingerprint" strokeWidth="1.5"></i>
                SoulShell<sup className="text-orange-500 text-sm font-medium">+</sup>
</a>
<div className="flex items-center gap-8 text-lg text-gray-500 font-light">
<a className="hover:underline decoration-orange-500 underline-offset-4 transition-all hover:text-black" href="#">Twitter</a>
<a className="hover:underline decoration-orange-500 underline-offset-4 transition-all hover:text-black" href="#">Discord</a>
<a className="hover:underline decoration-orange-500 underline-offset-4 transition-all hover:text-black" href="#">Manifesto</a>
</div>
<div className="text-lg font-light text-gray-400">
                © 2024 SoulShell Inc.
            </div>
</div>
</footer>


    </>
  );
}
