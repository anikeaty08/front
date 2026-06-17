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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#202022',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/60 glass-panel">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold tracking-tighter text-sm">CC</span>
</div>
<span className="font-semibold tracking-tight text-sm text-zinc-800">ProBuilds</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#features">Features</a>
<a className="hover:text-zinc-900 transition-colors" href="#details">Specifications</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm hover:shadow-md" href="#download">
<span>Get Started</span>
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '14px'}}></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20">

<section className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<iconify-icon className="text-zinc-900" icon="solar:verified-check-linear"></iconify-icon>
<span>Version 12.3.0 Available Now</span>
</div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Professional video editing <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-900">in your pocket.</span>
</h1>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Unlock the full potential of your creativity with advanced AI tools, premium filters, and watermark-free exporting. The ultimate mobile production suite.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 hover:shadow-xl hover:-translate-y-0.5" href="#download">
<iconify-icon icon="solar:download-linear" style={{fontSize: '18px'}}></iconify-icon>
<span>Download Latest Version</span>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-700 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-zinc-50 transition-all" href="#features">
<span>View Features</span>
</a>
</div>

<div className="relative w-full max-w-4xl mx-auto aspect-[16/9] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-800 group">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950"></div>

<div className="absolute top-0 left-0 w-full h-12 border-b border-zinc-700/50 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="text-zinc-500 text-xs font-mono">timeline_project_01.cpt</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-32 border-t border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm p-4 grid grid-cols-12 gap-2">
<div className="col-span-2 bg-zinc-800/50 rounded-lg h-full animate-pulse"></div>
<div className="col-span-8 bg-zinc-800/30 rounded-lg h-full relative overflow-hidden">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-500/50"></div>
<div className="absolute top-1/4 left-10 w-24 h-8 bg-purple-500/20 rounded border border-purple-500/30"></div>
<div className="absolute top-1/2 left-40 w-32 h-8 bg-blue-500/20 rounded border border-blue-500/30"></div>
</div>
<div className="col-span-2 bg-zinc-800/50 rounded-lg h-full"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform">
<iconify-icon className="text-white text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mt-24" id="details">
<h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-6">Technical Specifications</h3>
<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="grid grid-cols-2 border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
<div className="p-4 text-sm text-zinc-500 font-medium">App Name</div>
<div className="p-4 text-sm text-zinc-900 font-semibold text-right">CapCut Pro</div>
</div>
<div className="grid grid-cols-2 border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
<div className="p-4 text-sm text-zinc-500 font-medium">Version</div>
<div className="p-4 text-sm text-zinc-900 font-semibold text-right">v12.3.0</div>
</div>
<div className="grid grid-cols-2 border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
<div className="p-4 text-sm text-zinc-500 font-medium">Size</div>
<div className="p-4 text-sm text-zinc-900 font-semibold text-right">245 MB</div>
</div>
<div className="grid grid-cols-2 border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
<div className="p-4 text-sm text-zinc-500 font-medium">License</div>
<div className="p-4 text-sm text-zinc-900 font-semibold text-right">Free (Modified)</div>
</div>
<div className="grid grid-cols-2 border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
<div className="p-4 text-sm text-zinc-500 font-medium">Last Updated</div>
<div className="p-4 text-sm text-zinc-900 font-semibold text-right">October 24, 2023</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mt-32" id="features">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Everything you need to create.</h2>
<p className="text-zinc-500 max-w-xl">Professional grade tools accessible on your mobile device. Edit like a pro without the learning curve.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:waterdrops-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">No Watermark</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Export your videos cleanly. Brand your content with your own identity, not the editor's logo.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">AI Enhancements</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Auto-captions, background removal, and smart cuts powered by advanced machine learning models.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:4k-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">4K Ultra HD</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Support for 4K 60fps export. Keep the crisp details of your original footage intact.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Premium Assets</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Access the full library of effects, transitions, stickers, and fonts without paying extra subscriptions.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:soundwave-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Audio Mastery</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Noise reduction, audio extraction, and beat sync tools to make your sound as good as your visuals.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Ad-Free Experience</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Focus on your workflow. No interrupting pop-ups or banner ads while you edit.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mt-32" id="download">
<div className="bg-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center">

<div className="absolute top-0 left-0 w-full h-full opacity-30">
<div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] rounded-full bg-blue-600 blur-[100px]"></div>
<div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] rounded-full bg-purple-600 blur-[100px]"></div>
</div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Ready to upgrade your workflow?</h2>
<p className="text-zinc-400 mb-8 max-w-lg mx-auto">Get the full version now. Safe, secure, and fast download.</p>
<div className="flex flex-col items-center gap-6">
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-900 rounded-full font-medium text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto min-w-[200px]" href="#">
<span className="relative z-10 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:download-square-linear"></iconify-icon>
                                    Server 1 (Fast)
                                </span>
</a>
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-zinc-800 border border-zinc-700 text-white rounded-full font-medium text-sm overflow-hidden transition-all hover:bg-zinc-700 active:scale-95 w-full sm:w-auto min-w-[200px]" href="#">
<span className="relative z-10 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon>
                                    Server 2 (Mirror)
                                </span>
</a>
</div>
<span className="text-xs text-zinc-500">File size: 245MB • Requires Android 5.0+</span>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mt-32" id="faq">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 open:shadow-sm open:ring-1 open:ring-zinc-200">
<summary className="flex items-center justify-between p-5 font-medium text-zinc-800 select-none">
<span>Is it safe to install this version?</span>
<iconify-icon className="text-zinc-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 pt-4">
                        Yes, the file is scanned daily for malware. However, as with any third-party application, we recommend downloading only from trusted sources and ensuring your device security settings are up to date.
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 open:shadow-sm open:ring-1 open:ring-zinc-200">
<summary className="flex items-center justify-between p-5 font-medium text-zinc-800 select-none">
<span>How do I install the APK?</span>
<iconify-icon className="text-zinc-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 pt-4">
                        1. Download the file.<br/>
                        2. Go to Settings &gt; Security &gt; Enable "Unknown Sources".<br/>
                        3. Open the downloaded file and tap "Install".
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 open:shadow-sm open:ring-1 open:ring-zinc-200">
<summary className="flex items-center justify-between p-5 font-medium text-zinc-800 select-none">
<span>Will I lose my projects if I update?</span>
<iconify-icon className="text-zinc-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 pt-4">
                        Generally, updating the app over an existing installation preserves your data. However, we strongly recommend backing up your important projects to the cloud or local storage before performing a major update.
                    </div>
</details>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<span className="font-bold text-xs">C</span>
</div>
<span className="font-semibold tracking-tight text-zinc-900">ProBuilds</span>
</a>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Providing the best tools for mobile content creators since 2021. Secure, fast, and always up to date.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Download</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Old Versions</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Tutorials</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">DMCA</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">© 2023 ProBuilds. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
