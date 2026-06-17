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
      

<header className="h-14 border-b border-zinc-900 flex items-center justify-between px-6 bg-black/50 backdrop-blur-md z-50">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded bg-zinc-900 border border-zinc-800 text-white">
<iconify-icon icon="lucide:qr-code" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-sm text-zinc-100">ADB LINK</span>
<div className="h-4 w-[1px] bg-zinc-800 mx-2"></div>
<span className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Wireless Debugging</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-2 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-xs text-zinc-400 font-medium pr-1">System Active</span>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</header>
<main className="flex-1 flex overflow-hidden">

<aside className="w-80 border-r border-zinc-900 bg-[#070708] flex flex-col z-20">
<div className="p-6 border-b border-zinc-900">
<h2 className="text-sm font-medium text-white mb-1">Manual Connection</h2>
<p className="text-xs text-zinc-500 leading-relaxed">Enter pairing details manually if QR scanning fails.</p>
<div className="mt-6 space-y-4">
<div className="group">
<label className="block text-xs text-zinc-500 mb-1.5 group-focus-within:text-zinc-300 transition-colors">IP Address &amp; Port</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-600" icon="lucide:network" strokeWidth="1.5" width="14"></iconify-icon>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded text-xs text-zinc-200 py-2.5 pl-9 pr-3 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600/20 transition-all placeholder:text-zinc-700" placeholder="192.168.1.x:5555" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-xs text-zinc-500 mb-1.5 group-focus-within:text-zinc-300 transition-colors">Pairing Code</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-600" icon="lucide:key" strokeWidth="1.5" width="14"></iconify-icon>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded text-xs text-zinc-200 py-2.5 pl-9 pr-3 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600/20 transition-all placeholder:text-zinc-700" placeholder="123456" type="text"/>
</div>
</div>
<button className="w-full mt-2 bg-white text-black hover:bg-zinc-200 active:bg-zinc-300 text-xs font-semibold py-2.5 rounded transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plug-2" strokeWidth="1.5" width="14"></iconify-icon>
                        Connect Device
                    </button>
</div>
</div>
<div className="p-6 flex-1 overflow-y-auto">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Settings</h3>

<label className="flex items-center justify-between cursor-pointer group mb-4">
<div className="flex flex-col">
<span className="text-xs text-zinc-300 font-medium group-hover:text-white transition-colors">Auto-launch scrcpy</span>
<span className="text-[10px] text-zinc-600">Mirror screen after connect</span>
</div>
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-zinc-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-100 peer-checked:after:bg-black"></div>
</div>
</label>

<label className="flex items-center justify-between cursor-pointer group mb-6">
<div className="flex flex-col">
<span className="text-xs text-zinc-300 font-medium group-hover:text-white transition-colors">Auto Save QR</span>
<span className="text-[10px] text-zinc-600">Archive scanned codes</span>
</div>
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-zinc-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-100 peer-checked:after:bg-black"></div>
</div>
</label>
<div className="h-[1px] bg-zinc-900 mb-6"></div>
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Quality</h3>

<div className="mb-2">
<div className="flex justify-between mb-2">
<label className="text-xs text-zinc-500">Bitrate</label>
<span className="text-xs text-zinc-300 font-mono">8 Mbps</span>
</div>
<input className="slider-thumb w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" type="range"/>
</div>
</div>

<div className="p-4 border-t border-zinc-900 bg-zinc-900/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-800 flex items-center justify-center border border-zinc-700/50">
<span className="text-xs font-bold text-zinc-300">P</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 font-medium">Python Runtime</span>
<span className="text-[10px] text-zinc-600">v3.11.0 • ADB 34.0.1</span>
</div>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col relative bg-black">

<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

<div className="flex-1 p-8 flex flex-col items-center justify-center relative">

<div className="absolute top-8 flex flex-col items-center gap-2">
<div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
<iconify-icon className="animate-spin text-zinc-400" icon="lucide:loader-2" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Searching for QR code...</span>
</div>
</div>

<div className="relative w-full max-w-2xl aspect-video bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden group">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMTgxODE4Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMyMjIiLz4KPC9zdmc+')] opacity-20"></div>

<div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-white/50 rounded-tl-sm"></div>
<div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-white/50 rounded-tr-sm"></div>
<div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-white/50 rounded-bl-sm"></div>
<div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-white/50 rounded-br-sm"></div>

<div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent scan-line shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-4">
<button className="p-2 rounded hover:bg-white/10 text-white/70 hover:text-white transition">
<iconify-icon icon="lucide:camera" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="p-2 rounded hover:bg-white/10 text-white/70 hover:text-white transition">
<iconify-icon icon="lucide:refresh-ccw" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Cam_Input_01</span>
</div>
</div>

<div className="mt-8 w-full max-w-2xl">
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-lg p-4 flex items-start gap-4">
<div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-500">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm font-medium text-white">Last Detected</h4>
<span className="text-[10px] text-zinc-500 font-mono">192.168.1.55:4444</span>
</div>
<p className="text-xs text-zinc-500 truncate mb-3">Google Pixel 6 • Android 14 • Wireless Debugging</p>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 border border-zinc-700 transition-colors">
                                    Reconnect
                                </button>
<button className="px-3 py-1.5 rounded bg-transparent hover:bg-zinc-800/50 text-xs text-zinc-400 border border-transparent hover:border-zinc-800 transition-colors">
                                    Forget
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="h-48 border-t border-zinc-900 bg-[#09090b] flex flex-col">
<div className="h-8 flex items-center px-4 bg-zinc-900/30 border-b border-zinc-900/50 justify-between">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Console Output</span>
<div className="flex gap-2">
<button className="text-zinc-600 hover:text-zinc-400"><iconify-icon icon="lucide:trash-2" width="12"></iconify-icon></button>
<button className="text-zinc-600 hover:text-zinc-400"><iconify-icon icon="lucide:minimize-2" width="12"></iconify-icon></button>
</div>
</div>
<div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-2">
<div className="flex gap-3 text-zinc-500">
<span className="text-zinc-700 select-none">10:42:01</span>
<span>Initializing AndroidQRScanner...</span>
</div>
<div className="flex gap-3 text-emerald-500/80">
<span className="text-zinc-700 select-none">10:42:02</span>
<span>✓ ADB found (version 34.0.1-9680055)</span>
</div>
<div className="flex gap-3 text-zinc-400">
<span className="text-zinc-700 select-none">10:42:03</span>
<span>Starting camera capture on device 0</span>
</div>
<div className="flex gap-3 text-zinc-300">
<span className="text-zinc-700 select-none">10:42:05</span>
<span className="text-blue-400">i</span> Waiting for QR code...
                    </div>

<div className="flex gap-3 items-center">
<span className="text-zinc-700 select-none">10:42:09</span>
<span className="w-1.5 h-3 bg-zinc-500 animate-pulse"></span>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
