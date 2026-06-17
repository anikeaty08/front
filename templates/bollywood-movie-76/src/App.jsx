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
      

<header className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
<iconify-icon className="text-white" icon="solar:clapperboard-play-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-lg font-semibold tracking-tight">BOLLYWOOD<span className="text-zinc-500 font-normal">APP</span></span>
</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-white hover:text-cyan-400 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Movies</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Web Series</a>
</nav>

<div className="flex items-center gap-3">
<div className="hidden sm:block text-xs font-medium text-green-400 flex items-center gap-1 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Verified Safe
                </div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors" href="https://d.apkpure.com/b/APK/bollywood.moviesfree?version=latest">
<iconify-icon icon="solar:download-linear" strokeWidth="2" width="16"></iconify-icon>
                    Get App
                </a>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="pt-24 pb-20 flex-grow">

<section className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50">

<div className="absolute inset-0">
<img alt="App Background" className="w-full h-full object-cover opacity-30 scale-105 blur-sm" src="https://blogger.googleusercontent.com/img/a/AVvXsEgAROgs1CFeP05oxjy6ahHDhGMEJQO-T6I_qcfetQ7TXoQFgFu8S2gHzaFgSMyOtaPSmTIbrsWvzb0JGnuF0rO9Fzgli7NGZKwUIXxIRXPPC7T-apWStJey0NBXS1aoVtTGYC9AQXjZEZHe6er-_x02pPlJ2-TJE9MiiDIdjbdPF2YIKy42tpNMV1MDtj4=s1600"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
</div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
<div className="flex-1 space-y-6 text-center md:text-left">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold backdrop-blur-md">
<iconify-icon icon="solar:star-fall-linear" width="14"></iconify-icon>
                            #1 Movie Streaming App in India
                        </div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
                            Watch Every Movie.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Free Forever.</span>
</h1>
<p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto md:mx-0">
                            Access 5,000+ Bollywood, Hollywood (Hindi Dubbed), and South Indian blockbusters in 4K HDR. No subscription required.
                        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
<a className="btn-shine w-full sm:w-auto px-8 py-3.5 rounded-xl text-black font-bold text-sm md:text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-200" href="https://d.apkpure.com/b/APK/bollywood.moviesfree?version=latest">
<iconify-icon icon="solar:android-linear" strokeWidth="1.5" width="22"></iconify-icon>
                                Download APK (v2.5)
                            </a>
<div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:file-check-linear"></iconify-icon> 35 MB</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Virus Free</span>
</div>
</div>
</div>

<div className="w-full max-w-xs md:max-w-sm relative group">
<div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
<div className="relative bg-black/40 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">

<div className="space-y-3">
<div className="h-40 w-full bg-zinc-800 rounded-lg relative overflow-hidden">
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50" icon="solar:play-circle-linear" width="48"></iconify-icon>
<div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20 rounded-full"><div className="w-2/3 h-full bg-red-500 rounded-full"></div></div>
</div>
<div className="h-4 w-3/4 bg-zinc-800 rounded animate-pulse"></div>
<div className="h-4 w-1/2 bg-zinc-800 rounded animate-pulse"></div>
<div className="flex gap-2 pt-2">
<div className="h-8 flex-1 bg-white/10 rounded flex items-center justify-center text-white text-xs">Download</div>
<div className="h-8 flex-1 bg-cyan-500/20 text-cyan-400 rounded flex items-center justify-center text-xs">Play</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">

<div className="lg:col-span-8 space-y-8">

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="bg-white/[0.03] border border-white/5 p-4 rounded-xl flex flex-col gap-2 hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-cyan-400" icon="solar:videocamera-record-linear" width="24"></iconify-icon>
<h3 className="text-white text-sm font-medium">Ultra HD Quality</h3>
<p className="text-xs text-zinc-500">1080p &amp; 4K streams available.</p>
</div>
<div className="bg-white/[0.03] border border-white/5 p-4 rounded-xl flex flex-col gap-2 hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-green-400" icon="solar:cloud-download-linear" width="24"></iconify-icon>
<h3 className="text-white text-sm font-medium">Offline Mode</h3>
<p className="text-xs text-zinc-500">Download to phone &amp; watch later.</p>
</div>
<div className="bg-white/[0.03] border border-white/5 p-4 rounded-xl flex flex-col gap-2 hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-purple-400" icon="solar:card-linear" width="24"></iconify-icon>
<h3 className="text-white text-sm font-medium">Totally Free</h3>
<p className="text-xs text-zinc-500">No hidden fees, no credit card.</p>
</div>
</div>

<div className="prose prose-invert prose-sm max-w-none text-zinc-400">
<h2 className="text-xl font-semibold text-white mb-4">Latest Bollywood Movies Stream App (2026)</h2>
<p className="mb-4">
                        Looking for the ultimate destination to watch the latest releases? Our application provides a seamless interface to stream <span className="text-white">Pathaan 2, War 2, and Pushpa 3</span> directly on your Android device. Unlike other services, we prioritize speed and quality.
                    </p>

<div className="my-8 p-6 bg-gradient-to-r from-zinc-900 to-black border-y border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl">
<div>
<div className="text-white font-medium text-lg">Ready to start watching?</div>
<div className="text-zinc-500 text-sm">Install the APK in less than 30 seconds.</div>
</div>
<a className="shrink-0 px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5" href="https://d.apkpure.com/b/APK/bollywood.moviesfree?version=latest">
                            Download Now
                        </a>
</div>
<h3 className="text-lg font-semibold text-white mb-3">How to Install?</h3>
<ul className="space-y-3 list-none pl-0">
<li className="flex gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white text-xs flex items-center justify-center border border-white/10">1</span>
<span>Click the download button above to get the <strong>bollywood.moviesfree</strong> APK file.</span>
</li>
<li className="flex gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white text-xs flex items-center justify-center border border-white/10">2</span>
<span>Open your file manager and tap the downloaded file.</span>
</li>
<li className="flex gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white text-xs flex items-center justify-center border border-white/10">3</span>
<span>Allow "Unknown Sources" if prompted by Android security.</span>
</li>
<li className="flex gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white text-xs flex items-center justify-center border border-white/10">4</span>
<span>Open the app and enjoy unlimited entertainment!</span>
</li>
</ul>
</div>

<div className="pt-8 border-t border-white/5">
<h3 className="text-lg font-medium text-white mb-6">Recent Updates</h3>
<div className="space-y-4">
<a className="block group bg-zinc-900/50 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all" href="#">
<div className="flex gap-4">
<div className="w-24 h-16 bg-zinc-800 rounded-lg flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:gallery-linear"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-200 text-sm font-medium group-hover:text-cyan-400 transition-colors">New Server Added for South Indian Dubbed Movies</h4>
<p className="text-xs text-zinc-500 mt-1">Improved buffering speed for users in rural areas.</p>
</div>
</div>
</a>
<a className="block group bg-zinc-900/50 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all" href="#">
<div className="flex gap-4">
<div className="w-24 h-16 bg-zinc-800 rounded-lg flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:bug-linear"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-200 text-sm font-medium group-hover:text-cyan-400 transition-colors">Version 2.5 Changelog</h4>
<p className="text-xs text-zinc-500 mt-1">Fixed player crash on Android 14. Added subtitles support.</p>
</div>
</div>
</a>
</div>
</div>
</div>

<aside className="lg:col-span-4 space-y-6">

<div className="sticky top-24">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-6 shadow-2xl shadow-black/50">
<div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-[50px]"></div>
<div className="relative z-10 text-center">
<img alt="Icon" className="w-16 h-16 mx-auto mb-4 drop-shadow-lg filter grayscale opacity-80" src="https://cdn-icons-png.flaticon.com/512/888/888857.png"/>
<h3 className="text-xl font-semibold text-white mb-1">Bollywood HD</h3>
<div className="flex items-center justify-center gap-2 mb-6">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">Free</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">v2.5.0</span>
</div>
<a className="block w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-3" href="https://d.apkpure.com/b/APK/bollywood.moviesfree?version=latest">
                                Download APK
                            </a>
<div className="text-[10px] text-zinc-500 flex justify-center gap-4">
<span className="hover:text-zinc-300 cursor-help border-b border-dotted border-zinc-600">Installation Help</span>
<span className="hover:text-zinc-300 cursor-help border-b border-dotted border-zinc-600">Report Issue</span>
</div>
</div>

<div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-4 text-center">
<div>
<div className="text-white font-semibold text-sm">5M+</div>
<div className="text-zinc-600 text-[10px] uppercase tracking-wide">Downloads</div>
</div>
<div>
<div className="text-white font-semibold text-sm">4.8</div>
<div className="text-zinc-600 text-[10px] uppercase tracking-wide">Rating</div>
</div>
</div>
</div>

<div className="mt-6 bg-white/[0.02] border border-white/5 rounded-xl p-5">
<h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Popular Categories</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-xs text-zinc-300">Action</span>
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-xs text-zinc-300">Romance</span>
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-xs text-zinc-300">Thriller</span>
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-xs text-zinc-300">Comedy</span>
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-xs text-zinc-300">Horror</span>
</div>
</div>
</div>
</aside>
</div>
</main>

<footer className="border-t border-white/5 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-600 text-center md:text-left">
<span className="block mb-1 text-zinc-500">© 2026 Bollywood Movies App. All rights reserved.</span>
                Disclaimer: We do not host any content. This app acts as a search engine for publicly available content.
            </div>
<div className="flex gap-4">
<a className="text-xs text-zinc-500 hover:text-white" href="#">Privacy</a>
<a className="text-xs text-zinc-500 hover:text-white" href="#">DMCA</a>
<a className="text-xs text-zinc-500 hover:text-white" href="#">Contact</a>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
<a className="flex items-center justify-between px-5 py-3.5 bg-white text-black rounded-xl shadow-2xl shadow-black/80 ring-1 ring-white/20" href="https://d.apkpure.com/b/APK/bollywood.moviesfree?version=latest">
<div className="flex flex-col">
<span className="text-sm font-bold">Download App</span>
<span className="text-[10px] text-zinc-500">Fast &amp; Secure • 35MB</span>
</div>
<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
<iconify-icon icon="solar:download-linear" width="16"></iconify-icon>
</div>
</a>
</div>

    </>
  );
}
