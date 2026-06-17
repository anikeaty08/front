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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl"><style className="">
  /* 
    Sequence animation intro. Usage:

    1) Insert this code in the <head>
    
    2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both]
  */
  @keyframes animationIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(8px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }
</style>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-gradient-to-tr from-neutral-800 to-neutral-700 rounded-lg border border-white/10 flex items-center justify-center text-white text-xs font-semibold shadow-inner">
                    CC
                </div>
                CapCutPro
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="hover:text-white transition-colors duration-200" href="#guide">Installation</a>
<a className="hover:text-white transition-colors duration-200" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-all duration-200" href="#download">
<span>Download</span>
<iconify-icon icon="solar:download-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a><style className="">
  /* 
    Sequence animation intro. Usage:

    1) Insert this code in the <head>
    
    2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both]
  */
  @keyframes animationIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(8px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }
</style>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neutral-800/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Latest Version v12.1.0 Available
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                Professional video editing,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 to-neutral-600">without the limits.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Unleash your creativity with premium features unlocked. No watermarks, 4K export, and advanced AI tools directly on your device.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#download">
<iconify-icon icon="solar:download-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Download APK (264MB)
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 border border-neutral-800 text-white rounded-full font-medium text-sm hover:bg-neutral-800 transition-all flex items-center justify-center gap-2" href="#features">
                    Explore Features
                </a>
</div>

<div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-white tracking-tight">100M+</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Downloads</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-white tracking-tight">4.9/5</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Rating</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-white tracking-tight">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Working</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-white tracking-tight">Safe</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Verified</span>
</div>
</div>
</div>
</main>

<section className="py-12 bg-neutral-950 border-y border-white/5">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-neutral-900/40 rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-6">
<div className="w-20 h-20 bg-gradient-to-b from-neutral-800 to-black rounded-2xl border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="solar:scissors-square-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight">CapCut - Video Editor</h3>
<p className="text-sm text-neutral-500 mt-1">By Bytedance Pte. Ltd.</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-500 border border-green-500/20">MOD UNLOCKED</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">LATEST v12.1</span>
</div>
</div>
</div>
<div className="w-full md:w-auto bg-neutral-950 rounded-xl border border-white/5 p-4 min-w-[240px]">
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-xs text-neutral-500">Last Updated</span>
<span className="text-xs text-neutral-300">Oct 24, 2023</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-xs text-neutral-500">Size</span>
<span className="text-xs text-neutral-300">264 MB</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-xs text-neutral-500">Requires</span>
<span className="text-xs text-neutral-300">Android 5.0+</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-xs text-neutral-500">License</span>
<span className="text-xs text-neutral-300">Free</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="features">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Premium Capabilities</h2>
<p className="text-neutral-400 max-w-2xl">Access professional-grade tools usually reserved for desktop software, right in your pocket.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">No Watermark</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Export your videos clean. No branding, no logos, just your pure content ready for social media.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Premium Unlocked</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Access the full library of premium effects, filters, transitions, and animations without paying a subscription.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:monitor-camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">4K Export</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Render your masterpieces in stunning 4K resolution at 60fps for the highest quality playback.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">AI Tools</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Utilize Smart Cutout, Auto Captions, and AI-powered enhancement features effortlessly.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:forbidden-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">No Ads</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Experience a completely uninterrupted editing workflow. No popups, no banners.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">100% Safe</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Our files are scanned daily for viruses and malware to ensure a secure installation.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="guide">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Installation Guide</h2>
<div className="relative">

<div className="absolute left-8 top-8 bottom-8 w-px bg-neutral-800 hidden md:block"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row gap-8 items-start">
<div className="flex-shrink-0 w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white font-semibold z-10 text-xl">1</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Download the APK File</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">Click the download button above to save the <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-300 font-mono text-xs">CapCut_Pro_v12.1.apk</code> file to your device storage.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start">
<div className="flex-shrink-0 w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white font-semibold z-10 text-xl">2</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Enable Unknown Sources</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">Go to your device Settings &gt; Security &gt; and enable "Install from Unknown Sources". This allows you to install apps outside the Play Store.</p>
<div className="bg-neutral-900/50 p-4 rounded-lg border border-white/5 text-xs text-neutral-500">
<iconify-icon className="inline align-middle mr-1" icon="solar:info-circle-linear"></iconify-icon> Note: Steps may vary slightly depending on your Android version.
                            </div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start">
<div className="flex-shrink-0 w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white font-semibold z-10 text-xl">3</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Install &amp; Launch</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Open your file manager, tap the downloaded file, and select "Install". Once complete, open the app and enjoy premium features.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="faq">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-neutral-900/20 border border-white/5 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-neutral-200 font-medium hover:bg-white/5 transition-colors">
<span>Is CapCut Pro Mod APK safe to download?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed">
                    Yes, it is 100% safe. We test every APK file for viruses, malware, and compatibility issues before uploading. However, always ensure you download from trusted sources.
                </div>
</details>

<details className="group bg-neutral-900/20 border border-white/5 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-neutral-200 font-medium hover:bg-white/5 transition-colors">
<span>Do I need to root my device?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed">
                    No, root access is not required. You can install this APK on any standard Android device running Android 5.0 or higher just like any other application.
                </div>
</details>

<details className="group bg-neutral-900/20 border border-white/5 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-neutral-200 font-medium hover:bg-white/5 transition-colors">
<span>How do I update the app?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed">
                    To update, simply visit our website, download the latest version, and install it over the existing app. Your projects and data will usually be preserved.
                </div>
</details>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-black" id="download">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Ready to create?</h2>
<p className="text-neutral-400 mb-10">Join millions of creators making stunning content with CapCut.</p>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-sm mx-auto shadow-2xl">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-white">CapCut Pro Mod v12.1.0</span>
<span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Stable</span>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mb-4">
<iconify-icon icon="solar:download-square-linear" width="20"></iconify-icon>
                    Download Now
                </button>
<p className="text-xs text-neutral-600">
                    By downloading, you agree to our Terms of Service.
                </p>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
<div>
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-neutral-800 rounded border border-white/10 flex items-center justify-center text-white text-[10px] font-semibold">CC</div>
                    CapCutPro
                </a>
<p className="text-xs text-neutral-500 max-w-xs">
                    CapCutPro is a fan-made website providing the latest MOD APK versions for educational and testing purposes. We are not affiliated with Bytedance.
                </p>
</div>
<div className="flex gap-12 text-sm">
<div className="flex flex-col gap-3">
<h4 className="font-medium text-white">Product</h4>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Features</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Changelog</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Download</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-medium text-white">Legal</h4>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Terms of Use</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">DMCA</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center md:text-left text-xs text-neutral-600">
            © 2023 CapCutPro. All rights reserved.
        </div>
</footer>

    </>
  );
}
