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



        // Simple script to initialize icons if needed, or handle basic interactions
        // The slider logic is inline within the HTML tag for simplicity
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">T</div>
<span className="text-white font-medium tracking-tighter text-sm">Thumbalyzer</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors" href="#problem">Problem</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium hover:text-white transition-colors" href="#">Sign in</a>
<a className="bg-white text-black hover:bg-slate-200 transition-colors px-4 py-2 rounded-full text-xs font-semibold tracking-tight" href="#">Get started</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span className="text-xs font-medium text-slate-300 tracking-tight">V 2.0 Now with Batch Processing</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Stop losing clicks to <br className="hidden md:block"/>
<span className="text-white/40">blurry thumbnails.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The only AI tool designed specifically to upscale, sharpen, and optimize thumbnails for YouTube's compression algorithm.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto bg-white text-black hover:bg-slate-200 transition-all px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                    Upscale thumbnail free
                </button>
<button className="w-full sm:w-auto text-slate-300 hover:text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-tight border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group">
                    View demo
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-900/20 group">

<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp'}}></div>

<div className="absolute top-4 right-4 bg-black/60 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] font-medium text-green-400 tracking-wide uppercase">
                    Thumbalyzer 4K
                </div>

<div className="absolute inset-0 w-[50%] overflow-hidden border-r border-white/50 bg-black" id="before-container">
<div className="absolute inset-0 w-[100%] h-full bg-cover bg-center filter blur-[4px] brightness-75 contrast-125 scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp', width: '200%', transformOrigin: 'left'}}></div>

<div className="absolute top-4 left-4 bg-black/60 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] font-medium text-red-400 tracking-wide uppercase">
                        Original Upload
                    </div>
</div>

<input className="absolute inset-0 w-full h-full opacity-0 hover:cursor-ew-resize z-30" max="100" min="0" oninput="document.getElementById('before-container').style.width = this.value + '%'; document.querySelector('.slider-handle').style.left = this.value + '%'" type="range" value="50"/>

<div className="slider-handle absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none" style={{left: '50%'}}>
<div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-black/50 backdrop-blur border border-white rounded-full flex items-center justify-center shadow-lg">
<iconify-icon className="text-white text-lg" icon="solar:code-scan-linear"></iconify-icon>
</div>
</div>
</div>
<p className="mt-8 text-xs text-slate-500 tracking-wide uppercase">Trusted by 10,000+ creators and agencies</p>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#080808]" id="problem">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6">
                        YouTube kills your quality.<br/>
<span className="text-slate-500">We fix it instantly.</span>
</h2>
<p className="text-slate-400 mb-8 font-light leading-relaxed">
                        You spend hours designing the perfect thumbnail, but the moment you upload, YouTube's compression algorithm crushes the details. Blurry text and artifacts reduce your Click-Through Rate (CTR) significantly.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded-full bg-red-500/10 text-red-400">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white">Aggressive Compression</h3>
<p className="text-xs text-slate-500 mt-1">Details get lost in translation during upload.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded-full bg-red-500/10 text-red-400">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white">Wrong Aspect Ratios</h3>
<p className="text-xs text-slate-500 mt-1">Black bars appear on different devices.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded-full bg-red-500/10 text-red-400">
<iconify-icon icon="solar:graph-down-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white">Lower CTR</h3>
<p className="text-xs text-slate-500 mt-1">Unprofessional looks drive viewers away.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-50"></div>
<div className="glass-panel rounded-2xl p-8 relative">
<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<span className="text-xs font-mono text-slate-500">analysis_report.json</span>
<span className="text-xs font-mono text-red-400">Status: Critical</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-400">Sharpness Score</span>
<span className="text-red-400 font-mono">42/100</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: '42%'}}></div>
</div>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-slate-400">Compression Artifacts</span>
<span className="text-red-400 font-mono">Detected</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-slate-400">Readable Text</span>
<span className="text-orange-400 font-mono">Low</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-orange-500 h-1.5 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative overflow-hidden" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">Magic in three steps</h2>
<p className="text-slate-400">From blurry to brilliant in seconds.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent border-t border-dashed border-white/20 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 group-hover:border-purple-500/50 transition-colors shadow-lg shadow-black">
<iconify-icon className="text-3xl text-slate-300 group-hover:text-purple-400 transition-colors" icon="solar:upload-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">1. Upload</h3>
<p className="text-sm text-slate-400 max-w-[200px]">Drag and drop your thumbnail design. Any format, any size.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 group-hover:border-purple-500/50 transition-colors shadow-lg shadow-black">
<iconify-icon className="text-3xl text-slate-300 group-hover:text-purple-400 transition-colors animate-pulse" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">2. AI Upscale</h3>
<p className="text-sm text-slate-400 max-w-[200px]">Our engine upscales resolution and corrects artifacts.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 group-hover:border-purple-500/50 transition-colors shadow-lg shadow-black">
<iconify-icon className="text-3xl text-slate-300 group-hover:text-purple-400 transition-colors" icon="solar:file-download-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">3. Download</h3>
<p className="text-sm text-slate-400 max-w-[200px]">Get a perfectly sized, compression-proof PNG or JPG.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#080808]" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">Engineered for CTR</h2>
<p className="text-slate-400 max-w-xl">Every pixel counts when you're fighting for attention.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-xl text-white" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Super-Resolution</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-md">
                            We don't just stretch pixels. Thumbalyzer uses deep learning to hallucinate missing details, sharpen text edges, and remove JPEG noise, ensuring your thumbnail looks 4K even on 1080p screens.
                        </p>
</div>

<div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-2 opacity-50">
<div className="w-12 h-16 border border-white/10 rounded bg-white/5"></div>
<div className="w-12 h-16 border border-white/10 rounded bg-white/5"></div>
<div className="w-12 h-16 border border-white/10 rounded bg-white/10 backdrop-blur-md"></div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-xl text-white" icon="solar:iphone-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Device Safe</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Scaled perfectly for TV, Desktop, and Mobile. No more weird cropping.
                    </p>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-xl text-white" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Instant Processing</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        &lt; 2 second turnaround per image. Optimized for workflow speed.
                    </p>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -ml-16 -mb-16"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
<div>
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-xl text-white" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">No Design Skills Needed</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                                You focus on the creative. We handle the technical specs, dpi, and compression ratios automatically.
                            </p>
</div>
<div className="flex items-center gap-4">

<div className="bg-black/40 border border-white/10 rounded-xl p-4 flex items-center gap-3">
<div className="text-xs text-white font-mono">Auto-Enhance</div>
<div className="w-10 h-5 bg-purple-600 rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<h2 className="text-center text-xl text-slate-500 mb-12 font-medium">Loved by creators who care about quality</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-xs font-bold text-white">JD</div>
<div>
<div className="text-sm font-medium text-white">Jason D.</div>
<div className="text-xs text-slate-500">Tech Reviewer (500k subs)</div>
</div>
</div>
<p className="text-sm text-slate-300 leading-relaxed">"I used to spend 20 mins tweaking export settings in Photoshop. Thumbalyzer does it better in 2 seconds. My CTR is up 15%."</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-blue-600 flex items-center justify-center text-xs font-bold text-white">SK</div>
<div>
<div className="text-sm font-medium text-white">Sarah K.</div>
<div className="text-xs text-slate-500">Lifestyle Vlogger</div>
</div>
</div>
<p className="text-sm text-slate-300 leading-relaxed">"The difference in text clarity on mobile is insane. If you have text in your thumbnails, this is a non-negotiable tool."</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-700 to-purple-600 flex items-center justify-center text-xs font-bold text-white">MA</div>
<div>
<div className="text-sm font-medium text-white">Media Agency</div>
<div className="text-xs text-slate-500">Managing 20+ Channels</div>
</div>
</div>
<p className="text-sm text-slate-300 leading-relaxed">"We run thumbnails for all our clients through Thumbalyzer now. It's just part of the workflow. The consistency is perfect."</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#050505]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-4 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Ready for sharper thumbnails?</h2>
<p className="text-lg text-slate-400 mb-10 font-light">Join thousands of creators increasing their CTR today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black hover:bg-slate-200 transition-all px-8 py-4 rounded-full text-sm font-bold tracking-tight shadow-lg shadow-purple-900/20">
                    Get started for free
                </button>
<button className="w-full sm:w-auto text-slate-300 hover:text-white px-8 py-4 rounded-full text-sm font-medium tracking-tight border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all">
                    Contact sales
                </button>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
<span>No credit card required</span>
<span className="mx-2">•</span>
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
<span>5 free daily credits</span>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#050505] text-xs">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-white text-[9px] font-bold">T</div>
<span className="text-white font-medium tracking-tight">Thumbalyzer</span>
</div>
<div className="flex gap-6 text-slate-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
<div className="text-slate-600">
                Thumbalyzer — where sharp thumbnails meet higher clicks.
            </div>
</div>
</footer>


    </>
  );
}
