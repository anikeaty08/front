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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none -z-10 opacity-50"></div>
<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<span className="iconify text-emerald-500" data-icon="lucide:cpu" data-width="20"></span>
                LumatoTech
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#infrastructure">Infrastructure</a>
<a className="hover:text-white transition-colors duration-200" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#impact">Impact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Join Network
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-emerald-400 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Pan-African Neural Network Live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                Democratizing AI <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 to-neutral-600">across the continent.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Bridging the digital divide with advanced localized models and accessible compute infrastructure. Empowering the next generation of African innovators.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                    Deploy Model
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white border border-neutral-800 rounded-full font-medium hover:bg-neutral-800 transition-all">
                    View Research
                </button>
</div>
</div>

<div className="mt-20 relative max-w-6xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
<div className="rounded-xl border border-white/10 bg-neutral-900/30 backdrop-blur-sm overflow-hidden shadow-2xl shadow-emerald-900/10">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 flex gap-4 text-xs font-mono text-neutral-500">
<span className="text-white">dashboard</span>
<span>nodes</span>
<span>datasets</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 min-h-[400px]">

<div className="p-6 space-y-6 bg-black/20">
<div className="space-y-1">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">Active Regions</p>
<div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 cursor-pointer">
<span className="text-sm text-white">Lagos (LOS-1)</span>
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer transition-colors">
<span className="text-sm text-neutral-400">Nairobi (NBO-4)</span>
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer transition-colors">
<span className="text-sm text-neutral-400">Cape Town (CPT-2)</span>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
</div>
</div>

<div className="space-y-3 pt-4 border-t border-white/5">
<div className="flex justify-between text-xs text-neutral-400">
<span>GPU Utilization</span>
<span>92%</span>
</div>
<div className="relative w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-emerald-500 w-[92%]"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs text-neutral-400">
<span>Training Accuracy</span>
<span>0.984</span>
</div>
<div className="relative w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-blue-500 w-[75%]"></div>
</div>
</div>
</div>

<div className="col-span-2 p-6 flex flex-col justify-between relative overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-400">Inference Requests (Millions)</h3>
<p className="text-2xl font-medium text-white mt-1">4.2M <span className="text-sm text-emerald-500 font-normal">+12%</span></p>
</div>
<div className="flex gap-2">
<button className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-neutral-300 transition-colors">
<span className="iconify" data-icon="lucide:activity" data-width="16"></span>
</button>
<button className="p-1.5 rounded hover:bg-white/10 text-neutral-500 transition-colors">
<span className="iconify" data-icon="lucide:share-2" data-width="16"></span>
</button>
</div>
</div>

<div className="relative h-48 mt-8 flex items-end justify-between gap-2 z-10">

<div className="w-full bg-emerald-900/30 h-[30%] rounded-t-sm border-t border-emerald-500/20"></div>
<div className="w-full bg-emerald-900/30 h-[45%] rounded-t-sm border-t border-emerald-500/20"></div>
<div className="w-full bg-emerald-900/30 h-[35%] rounded-t-sm border-t border-emerald-500/20"></div>
<div className="w-full bg-emerald-900/30 h-[60%] rounded-t-sm border-t border-emerald-500/20"></div>
<div className="w-full bg-emerald-900/30 h-[50%] rounded-t-sm border-t border-emerald-500/20"></div>
<div className="w-full bg-emerald-900/30 h-[75%] rounded-t-sm border-t border-emerald-500/20"></div>

<div className="w-full bg-white h-[85%] rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.3)] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-100 transition-opacity whitespace-nowrap">Live</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 mb-8 uppercase tracking-widest">Collaborating with Tech &amp; Education Leaders</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">

<span className="text-lg font-bold tracking-tight text-white">TECHAFRICA</span>
<span className="text-lg font-medium tracking-wide text-white font-mono">AFRILABS</span>
<span className="text-lg font-semibold tracking-tighter text-white">DATA SCIENCE NIGERIA</span>
<span className="text-lg font-bold italic tracking-tight text-white">TUNZA</span>
<span className="text-lg font-semibold tracking-tight text-white">ZINDI</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="infrastructure">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">AI engineered for local context.</h2>
<p className="text-neutral-400 text-lg">We build the foundational layers that allow AI to flourish in Africa—from edge compute nodes to dialect-specific large language models.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-white" data-icon="lucide:languages" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Localized LLMs</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Models trained on Swahili, Yoruba, Hausa, and Zulu to ensure technology speaks the language of the people, not just global standards.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-white" data-icon="lucide:server" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Edge Infrastructure</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Low-latency compute nodes distributed across major African tech hubs, reducing reliance on overseas servers.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-white" data-icon="lucide:graduation-cap" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Talent Pipeline</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Integrated learning platforms and sandboxes for developers to upskill in machine learning and data science.
                        </p>
</div>
</div>

<div className="md:col-span-2 group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<span className="iconify w-32 h-32 text-emerald-500 rotate-12" data-icon="lucide:network"></span>
</div>
<div className="relative z-10 max-w-md">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-white" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Optimized for Constraint</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                            Our "Lite-Compute" architecture enables powerful AI inference on devices with limited connectivity and power, making advanced tech accessible in rural areas.
                        </p>
<a className="text-white text-sm font-medium border-b border-white/20 hover:border-white transition-colors pb-0.5 inline-flex items-center gap-1" href="#">
                            Explore our architecture
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>

<div className="md:col-span-1 group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 overflow-hidden flex flex-col justify-center items-center text-center">
<div className="relative z-10">
<div className="text-5xl font-medium text-white tracking-tighter mb-2 tabular-nums">50+</div>
<div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">African Dialects Supported</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Built for developers, designed for scale.</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="12"></span>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm">Unified API Access</h4>
<p className="text-neutral-400 text-sm mt-1">Single endpoint for translation, sentiment analysis, and generation across African languages.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="12"></span>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm">Data Sovereignty</h4>
<p className="text-neutral-400 text-sm mt-1">All training data and processing remains on the continent, respecting local data laws.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="12"></span>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm">Open Source Core</h4>
<p className="text-neutral-400 text-sm mt-1">Contributing back to the community to foster innovation and transparency.</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative">

<div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-1 shadow-2xl">
<div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5 rounded-t-lg gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
<span className="ml-2 text-xs text-neutral-500 font-mono">inference.js</span>
</div>
<div className="p-6 overflow-x-auto">
<pre className="text-xs md:text-sm font-mono leading-relaxed text-neutral-300">
<span className="text-purple-400">import</span> { LumatoAI } <span className="text-purple-400">from</span> <span className="text-green-400">'@lumatotech/sdk'</span>;

<span className="text-neutral-500">// Initialize with regional preference</span>
<span className="text-blue-400">const</span> client = <span className="text-blue-400">new</span> LumatoAI({
  apiKey: <span className="text-green-400">process.env.API_KEY</span>,
  region: <span className="text-green-400">'west-africa-1'</span> 
});

<span className="text-neutral-500">// Translate English to Swahili</span>
<span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> client.translate({
  text: <span className="text-green-400">"Artificial intelligence for everyone."</span>,
  target_lang: <span className="text-green-400">'sw'</span>,
  model: <span className="text-green-400">'lumato-sw-v2'</span>
});

console.<span className="text-yellow-300">log</span>(response.output);
<span className="text-neutral-500">// Output: "Akili bandia kwa kila mtu."</span></pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-emerald-900/10"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8">Ready to innovate?</h2>
<p className="text-xl text-neutral-400 mb-10 font-light">Join the developers, startups, and enterprises leveraging LumatoTech to transform Africa.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">
                    Get API Keys
                </button>
<button className="px-8 py-3 bg-transparent border border-neutral-700 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors">
                    Contact Enterprise
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 mb-6" href="#">
<span className="iconify text-neutral-400" data-icon="lucide:cpu" data-width="20"></span>
                        LumatoTech
                    </a>
<p className="text-sm text-neutral-500 max-w-xs">
                        Spreading AI and technology across Africa. Building the infrastructure for a smarter tomorrow.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Models</a></li>
<li><a className="hover:text-white transition-colors" href="#">Infrastructure</a></li>
<li><a className="hover:text-white transition-colors" href="#">Docs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Mission</a></li>
<li><a className="hover:text-white transition-colors" href="#">Impact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Community</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Discord</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hackathons</a></li>
<li><a className="hover:text-white transition-colors" href="#">Grants</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-neutral-600">© 2024 LumatoTech Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
