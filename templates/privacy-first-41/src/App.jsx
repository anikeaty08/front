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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
                    S
                </div>
<span className="font-semibold tracking-tight text-lg">Shift</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#formats">Formats</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-slate-900 transition-colors" href="#privacy">Privacy</a>
</div>
<a className="text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-full transition-colors" href="#convert">
                Start converting
            </a>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Privacy-first processing</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                File conversion,<br/>
<span className="text-slate-400">simplified and secure.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
                Transform images, documents, and audio instantly. Files are processed locally in your browser or deleted immediately after conversion.
            </p>

<div className="max-w-2xl mx-auto bg-white rounded-2xl border-2 border-dashed border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 group cursor-pointer p-12 relative overflow-hidden" id="convert">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col items-center justify-center gap-4">
<div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-900" icon="lucide:upload-cloud" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<p className="text-lg font-medium text-slate-900">Drop your file here</p>
<p className="text-sm text-slate-500 mt-1">or click to browse</p>
</div>
<p className="text-xs text-slate-400 mt-4 flex items-center gap-1">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="14"></iconify-icon>
                        No storage. No tracking. Auto-deleted.
                    </p>
</div>
</div>
<div className="mt-8 flex items-center justify-center gap-6">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    See how it works
                </button>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-100 bg-slate-50/50" id="formats">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Supported formats</h2>
<p className="text-slate-500 text-sm">Optimized for speed and quality.</p>
</div>
<a className="text-sm font-medium text-slate-900 border-b border-slate-200 pb-0.5 hover:border-slate-900 transition-colors self-start md:self-auto" href="#">View full documentation</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-sm transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:image" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-1">Images</h3>
<p className="text-sm text-slate-500 mb-4">Lossless compression available.</p>
<div className="flex gap-2 flex-wrap">
<span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">PNG</span>
<span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">JPG</span>
<span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">WEBP</span>
<span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">HEIC</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-sm transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-1">Documents</h3>
<p className="text-sm text-slate-500 mb-4">Preserves formatting.</p>
<div className="flex gap-2 flex-wrap">
<span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">TXT</span>
<span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">MD</span>
<span className="text-xs text-slate-400 px-1 py-1 flex items-center">
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</span>
<span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">PDF</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-sm transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:music" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-1">Audio</h3>
<p className="text-sm text-slate-500 mb-4">High bitrate retention.</p>
<div className="flex gap-2 flex-wrap">
<span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">MP3</span>
<span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">WAV</span>
<span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">OGG</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Seamless workflow</h2>
<p className="text-slate-500 mt-4 max-w-xl mx-auto">No complex settings. Just pure utility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10"></div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-[0_0_0_8px_rgba(248,250,252,1)]">
<span className="font-mono text-xl font-medium text-slate-400">01</span>
</div>
<h3 className="text-lg font-medium text-slate-900">Upload File</h3>
<p className="text-sm text-slate-500 mt-2 max-w-xs">Drag and drop your file. We support files up to 1GB.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-[0_0_0_8px_rgba(248,250,252,1)]">
<span className="font-mono text-xl font-medium text-slate-400">02</span>
</div>
<h3 className="text-lg font-medium text-slate-900">Select Format</h3>
<p className="text-sm text-slate-500 mt-2 max-w-xs">Choose your target extension from the intelligent dropdown.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-[0_0_0_8px_rgba(248,250,252,1)]">
<span className="font-mono text-xl font-medium text-slate-400">03</span>
</div>
<h3 className="text-lg font-medium text-slate-900">Download</h3>
<p className="text-sm text-slate-500 mt-2 max-w-xs">Get your file instantly. The source is deleted immediately.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white px-6" id="privacy">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700">
<iconify-icon className="text-slate-300" icon="lucide:lock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Your data stays yours.</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
                    We built Shift because we were tired of online converters that require emails or store files. 
                    Shift operates on a zero-retention policy.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-slate-300">Client-side processing whenever possible (WebAssembly).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-slate-300">Server uploads are ephemeral and auto-wiped.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-slate-300">No account creation, no cookies, no tracking pixels.</span>
</li>
</ul>
</div>
<div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700">
<span className="text-sm font-medium text-slate-300">Privacy Comparison</span>
<span className="text-xs text-slate-500">Updated today</span>
</div>
<div className="space-y-6">
<div className="flex justify-between items-center">
<span className="text-slate-300">File Retention</span>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500 line-through">24 hours</span>
<span className="text-sm text-emerald-400 font-medium">0 seconds</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-slate-300">Email Required</span>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500 line-through">Often</span>
<span className="text-sm text-emerald-400 font-medium">Never</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-slate-300">Processing</span>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500 line-through">Server-only</span>
<span className="text-sm text-emerald-400 font-medium">Local First</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-16">Why we are different</h2>
<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
<div className="grid grid-cols-2 text-sm font-medium border-b border-slate-100">
<div className="p-6 text-slate-900 bg-slate-50/50">Typical Converters</div>
<div className="p-6 text-slate-900 bg-white border-l border-slate-100">Shift</div>
</div>

<div className="grid grid-cols-2 border-b border-slate-100">
<div className="p-6 text-slate-500 flex items-center gap-3">
<iconify-icon className="text-red-400" icon="lucide:x" width="16"></iconify-icon>
                        Ad-heavy interfaces
                    </div>
<div className="p-6 text-slate-700 border-l border-slate-100 flex items-center gap-3">
<iconify-icon className="text-slate-900" icon="lucide:check" width="16"></iconify-icon>
                        Clean, ad-free UI
                    </div>
</div>

<div className="grid grid-cols-2 border-b border-slate-100">
<div className="p-6 text-slate-500 flex items-center gap-3">
<iconify-icon className="text-red-400" icon="lucide:x" width="16"></iconify-icon>
                        Fake loading bars
                    </div>
<div className="p-6 text-slate-700 border-l border-slate-100 flex items-center gap-3">
<iconify-icon className="text-slate-900" icon="lucide:check" width="16"></iconify-icon>
                        Real-time status
                    </div>
</div>

<div className="grid grid-cols-2">
<div className="p-6 text-slate-500 flex items-center gap-3">
<iconify-icon className="text-red-400" icon="lucide:x" width="16"></iconify-icon>
                        Hidden limits
                    </div>
<div className="p-6 text-slate-700 border-l border-slate-100 flex items-center gap-3">
<iconify-icon className="text-slate-900" icon="lucide:check" width="16"></iconify-icon>
                        Transparent limits (1GB)
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-slate-100">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-12">Built for everyone</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div>
<div className="mb-4">
<iconify-icon className="text-slate-900" icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Designers</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Convert high-res assets to web-ready formats like WEBP without losing quality. Batch process logical layers quickly.
                    </p>
</div>

<div>
<div className="mb-4">
<iconify-icon className="text-slate-900" icon="lucide:code-2" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Developers</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Transform config files, json to yaml, or optimize static assets before deployment. No CLI tools needed.
                    </p>
</div>

<div>
<div className="mb-4">
<iconify-icon className="text-slate-900" icon="lucide:graduation-cap" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Students</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Merge notes into PDFs or convert lecture recordings to universal MP3 formats compatible with any device.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Ready to convert?</h2>
<p className="text-slate-500 text-lg mb-10">
                No sign up required. Just drop your file and go.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:upload" width="18"></iconify-icon>
                    Convert a file now
                </button>
</div>
<p className="text-xs text-slate-400 mt-6">
                Max file size 1GB • Terms apply
            </p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center text-xs font-bold">S</div>
<span className="font-semibold tracking-tight text-slate-900">Shift</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Built for speed and privacy. The modern way to handle file formats on the web.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Formats</a></li>
<li><a className="hover:text-slate-900" href="#">API</a></li>
<li><a className="hover:text-slate-900" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900" href="#">Cookie Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Connect</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="lucide:github" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Shift Converter. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-slate-500 font-medium">Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
