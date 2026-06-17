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



        const tabs = document.querySelectorAll('#tabs button');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Reset all
                tabs.forEach(t => {
                    t.className = "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white text-xs font-medium transition-all cursor-pointer";
                });
                
                // Set Active
                tab.className = "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/10 text-white text-xs font-medium transition-all shadow-sm cursor-default";
            });
        });

        // Simple input focus effect simulation
        const input = document.querySelector('input');
        input.addEventListener('focus', () => {
           input.parentElement.parentElement.classList.add('ring-1', 'ring-white/10'); 
        });
        input.addEventListener('blur', () => {
           input.parentElement.parentElement.classList.remove('ring-1', 'ring-white/10'); 
        });
    
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
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white font-medium tracking-tighter">
                    SL
                </div>
<span className="text-sm font-medium text-white tracking-tight">StreamLine</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Supported Sites</a>
<a className="hover:text-white transition-colors" href="#">API</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">
                Get Started
            </a>
</div>
</nav>

<main className="flex-grow z-10 pt-32 pb-20 px-6">
<div className="max-w-3xl mx-auto text-center space-y-6">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-400 uppercase tracking-widest font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                v2.0 Now Available
            </div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gradient leading-[1.1]">
                Universal media <br className="hidden md:block"/>
                downloader.
            </h1>
<p className="text-base md:text-lg text-zinc-500 font-light max-w-lg mx-auto leading-relaxed">
                Seamlessly extract and download high-quality video and audio from YouTube, Pinterest, and Instagram with a single link.
            </p>

<div className="mt-12 relative group">

<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur group-hover:opacity-30 transition duration-500"></div>
<div className="relative glass-panel rounded-2xl p-2 md:p-3">

<div className="flex items-center gap-1 mb-3 px-1" id="tabs">
<button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/10 text-white text-xs font-medium transition-all" data-target="youtube">
<iconify-icon icon="solar:play-stream-linear" width="16"></iconify-icon>
                            YouTube
                        </button>
<button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white text-xs font-medium transition-all" data-target="pinterest">
<iconify-icon icon="solar:pin-linear" width="16"></iconify-icon>
                            Pinterest
                        </button>
<button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white text-xs font-medium transition-all" data-target="instagram">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
                            Instagram
                        </button>
</div>

<div className="relative flex items-center">
<div className="absolute left-4 text-zinc-500 flex items-center">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<input className="w-full h-14 bg-zinc-900/50 border border-white/5 rounded-xl pl-12 pr-36 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all shadow-inner" placeholder="Paste your link here..." type="text"/>
<div className="absolute right-1.5 h-11">
<button className="h-full px-6 bg-white text-black rounded-lg text-xs font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
<span>Download</span>
<iconify-icon icon="solar:download-minimalistic-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-4 px-2">
<div className="flex items-center gap-3">
<label className="flex items-center gap-2 cursor-pointer group/chk">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center transition-colors group-hover/chk:border-zinc-500">
<iconify-icon className="text-white opacity-0 group-has-[:checked]/chk:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<input checked="" className="hidden" type="checkbox"/>
<span className="text-xs text-zinc-500 group-hover/chk:text-zinc-400 transition-colors">High Quality</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group/chk">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center transition-colors group-hover/chk:border-zinc-500">
<iconify-icon className="text-white opacity-0 group-has-[:checked]/chk:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<input className="hidden" type="checkbox"/>
<span className="text-xs text-zinc-500 group-hover/chk:text-zinc-400 transition-colors">Convert to MP3</span>
</label>
</div>
<div className="text-xs text-zinc-600 flex items-center gap-1">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
                        Secure &amp; Private
                    </div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto mt-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">4K Resolution Support</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Download videos in the highest available quality, up to 4K and 8K, preserving every detail of the original content.</p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:gallery-wide-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Bulk Extraction</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Paste a playlist or profile link to queue multiple downloads instantly. Efficient processing for heavy users.</p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Mobile Optimized</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Designed responsively to work flawlessly on your phone's browser without needing to install an app.</p>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto mt-32 border-t border-white/5 pt-20">
<h2 className="text-2xl font-semibold text-center text-white mb-16 tracking-tight">How it works</h2>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block -translate-y-1/2"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 relative">
<div className="flex flex-col items-center text-center space-y-4 bg-zinc-950 md:bg-transparent p-4 md:p-0 z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-medium shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]">
                            1
                        </div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Copy URL</h4>
<p className="text-xs text-zinc-500">Get the link from the app.</p>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-4 bg-zinc-950 md:bg-transparent p-4 md:p-0 z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-medium shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]">
                            2
                        </div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Paste &amp; Process</h4>
<p className="text-xs text-zinc-500">Our engine parses the video.</p>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-4 bg-zinc-950 md:bg-transparent p-4 md:p-0 z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-medium shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]">
                            3
                        </div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Save File</h4>
<p className="text-xs text-zinc-500">Download to your device.</p>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8 z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white text-[10px] font-medium tracking-tighter">
                    SL
                </div>
<p className="text-xs text-zinc-600">© 2023 StreamLine. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-xs text-zinc-600 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-zinc-600 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-zinc-600 hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>



    </>
  );
}
