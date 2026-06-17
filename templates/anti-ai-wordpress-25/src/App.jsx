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
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/50 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-950/20 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-indigo-950/80 backdrop-blur-md">
<div className="flex h-14 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-indigo-100 font-medium tracking-tight text-sm flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-indigo-100 text-indigo-950 rounded flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                MANUAL
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#features">Manifesto</a>
<a className="hover:text-white transition-colors" href="#protection">Bot Protection</a>
<a className="hover:text-white transition-colors" href="#community">Community</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:border-indigo-600 transition-all text-xs font-medium text-white bg-indigo-900 border-indigo-800 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#">
                    Get Theme
                </a>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-20 relative">

<section className="animate-fade-up text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-900/30 bg-blue-950/10 text-blue-200/80 text-xs font-medium mb-8">
<iconify-icon icon="solar:shield-warning-linear" width="14"></iconify-icon>
<span className="">Protect your art from LLMs</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tighter mb-6">
                Reclaim the web <br/>
<span className="text-indigo-500">for humans.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-indigo-400 max-w-xl mr-auto mb-10 ml-auto">
                A WordPress theme designed to showcase authentic creativity while actively blocking AI scrapers. No generated content. No algorithms. Just you.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-indigo-100 text-indigo-950 text-sm font-medium hover:bg-white hover:scale-105 transition-all flex items-center gap-2">
<iconify-icon icon="solar:download-minimalistic-linear" width="18"></iconify-icon>
                    Download Manual v1.0
                </button>
<button className="h-10 px-6 rounded-full border border-indigo-800 text-indigo-300 text-sm font-medium hover:bg-indigo-900 hover:text-white transition-all flex items-center gap-2">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
                    Live Preview
                </button>
</div>

<div className="mt-20 relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-indigo-700 to-transparent opacity-20 blur-lg rounded-xl group-hover:opacity-30 transition duration-500"></div>
<div className="relative bg-indigo-900 border border-indigo-800 rounded-xl overflow-hidden shadow-2xl">
<div className="flex items-center gap-1.5 px-4 py-3 border-b border-indigo-800 bg-indigo-900/50">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700"></div>
<div className="ml-auto flex items-center gap-2 text-[10px] text-indigo-500 font-mono">
<iconify-icon icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
                            SCRAPER_BLOCK: ACTIVE
                        </div>
</div>
<div className="p-8 md:p-12 bg-indigo-950 text-left">
<div className="max-w-2xl mx-auto">
<span className="text-xs font-mono text-blue-400 mb-4 block">100% HUMAN VERIFIED</span>
<h3 className="text-3xl md:text-4xl text-indigo-100 font-serif tracking-tight mb-6">The Imperfect Art of Living</h3>
<div className="space-y-4 text-indigo-400 text-sm leading-7">
<p className="">This text was written by a person. It contains nuances, errors, and soul that a statistical model cannot replicate. The rhythm of these sentences is dictated by a heartbeat, not a token probability.</p>
<div className="h-px w-full bg-indigo-900 my-6"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center text-indigo-300">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="text-xs">
<p className="text-indigo-200">Alex V.</p>
<p className="text-indigo-600">Posted 2 hours ago • 4 min read</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-32" id="features">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Designed for the resistance</h2>
<p className="text-sm text-indigo-500">Tools to keep the internet human.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 p-8 rounded-xl border border-indigo-800 bg-indigo-900/30 hover:bg-indigo-900/50 hover:border-indigo-700 transition-all group">
<div className="w-10 h-10 rounded-lg bg-indigo-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-indigo-100 mb-2">Anti-Scraping Headers</h3>
<p className="text-sm text-indigo-400 leading-relaxed max-w-md">
                        Built-in <code className="bg-indigo-800 px-1 py-0.5 rounded text-indigo-300 text-xs">X-Robots-Tag: noai</code> and <code className="bg-indigo-800 px-1 py-0.5 rounded text-indigo-300 text-xs">noimageai</code> headers. We automatically inject obfuscation scripts to confuse data miners while keeping content readable for humans.
                    </p>
</div>

<div className="p-8 rounded-xl border border-indigo-800 bg-indigo-900/30 hover:bg-indigo-900/50 hover:border-indigo-700 transition-all group">
<div className="w-10 h-10 rounded-lg bg-indigo-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:text-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-indigo-100 mb-2">Typography First</h3>
<p className="text-sm text-indigo-400 leading-relaxed">
                        Typesetting that respects the reader. Optimized for long-form reading without the distraction of algorithmic recommendations.
                    </p>
</div>

<div className="p-8 rounded-xl border border-indigo-800 bg-indigo-900/30 hover:bg-indigo-900/50 hover:border-indigo-700 transition-all group">
<div className="w-10 h-10 rounded-lg bg-indigo-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-indigo-100 mb-2">Human Verified Badge</h3>
<p className="text-sm text-indigo-400 leading-relaxed">
                        Includes a cryptographic signing plugin to verify that content was manually typed, not generated via API.
                    </p>
</div>

<div className="md:col-span-2 p-8 rounded-xl border border-indigo-800 bg-indigo-900/30 hover:bg-indigo-900/50 hover:border-indigo-700 transition-all group flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h3 className="text-lg font-medium text-indigo-100 mb-2">Noise Filter</h3>
<p className="text-sm text-indigo-400 leading-relaxed mb-6">
                            Optional "Analog Mode" that adds subtle grain and imperfections to images, making them harder for style-transfer bots to process effectively.
                        </p>

<div className="flex items-center gap-4">
<span className="text-xs font-medium text-indigo-500">DIGITAL</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-indigo-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-indigo-400 after:border-indigo-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-900/50 peer-checked:after:bg-blue-100"></div>
</label>
<span className="text-xs font-medium text-indigo-200">ANALOG</span>
</div>
</div>
<div className="w-full md:w-48 h-32 bg-indigo-950 rounded border border-indigo-800 relative overflow-hidden">

<div className="absolute inset-0 bg-noise opacity-40"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-indigo-700" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-indigo-900/20">
<div className="max-w-4xl mx-auto px-6 py-24 text-center">
<iconify-icon className="text-blue-200/80 mb-6" icon="solar:heart-angle-linear" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Join the Verified Web</h2>
<p className="text-indigo-400 mb-10 text-sm md:text-base leading-relaxed">
                    MANUAL isn't just a theme; it's a statement. By using this theme, you join a network of creators dedicated to preserving human agency online.
                </p>
<div className="bg-indigo-950 border border-indigo-800 p-6 rounded-2xl max-w-sm mx-auto shadow-2xl">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-white">Manual License</span>
<span className="text-sm font-medium text-white">$59</span>
</div>
<ul className="space-y-3 mb-8 text-left">
<li className="flex items-center gap-3 text-xs text-indigo-400">
<iconify-icon className="text-indigo-100" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited Lifetime Updates
                        </li>
<li className="flex items-center gap-3 text-xs text-indigo-400">
<iconify-icon className="text-indigo-100" icon="solar:check-circle-linear"></iconify-icon>
                            Anti-Scraper Plugin Included
                        </li>
<li className="flex items-center gap-3 text-xs text-indigo-400">
<iconify-icon className="text-indigo-100" icon="solar:check-circle-linear"></iconify-icon>
                            Access to "Human Only" Discord
                        </li>
</ul>
<button className="w-full h-10 bg-white text-indigo-950 rounded-lg text-sm font-medium hover:bg-indigo-200 transition-colors">
                        Purchase License
                    </button>
<p className="text-[10px] text-indigo-600 mt-4 text-center">One-time payment. Open source compatible.</p>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-indigo-950 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-indigo-500 text-xs">
<span className="font-medium text-indigo-300">MANUAL</span>
<span>© 2024</span>
<span className="w-1 h-1 rounded-full bg-indigo-800 mx-1"></span>
<span>Crafted in Prague.</span>
</div>
<div className="flex gap-6">
<a className="text-indigo-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-indigo-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
