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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scrolljacking Logic for the Data Display Window
        document.addEventListener('DOMContentLoaded', () => {
            const section = document.getElementById('scroll-section');
            const dataWindow = document.getElementById('data-window');

            if (section && dataWindow) {
                window.addEventListener('scroll', () => {
                    const rect = section.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;
                    
                    // Total distance the section itself can be scrolled
                    const totalScrollDistance = rect.height - viewportHeight;
                    
                    if (totalScrollDistance > 0) {
                        // Calculate how far down the user has scrolled relative to the section's start
                        const scrolledOffset = -rect.top;
                        
                        // Calculate progress from 0 to 1
                        let progress = Math.max(0, Math.min(1, scrolledOffset / totalScrollDistance));
                        
                        // Total scrollable height inside the data window
                        const innerScrollableHeight = dataWindow.scrollHeight - dataWindow.clientHeight;
                        
                        // Apply the progress as scrollTop to the inner window
                        dataWindow.scrollTop = progress * innerScrollableHeight;
                    }
                });
            }
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
      

<div className="relative w-full min-h-screen flex flex-col overflow-hidden bg-black">

<div className="absolute inset-0 z-0 pointer-events-none">
<iframe allow="autoplay; fullscreen" className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] sm:w-[150vw] sm:h-[150vh] -translate-x-1/2 -translate-y-1/2 opacity-60 grayscale-[30%] mix-blend-screen" src="https://player.vimeo.com/video/1129227761?background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0" style={{border: 'none'}}>
</iframe>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#000000]"></div>
</div>

<nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full text-neutral-300">
<div className="flex items-center gap-2">
<span className="relative inline-flex items-center">
<label className="cursor-pointer relative flex items-center justify-center rounded-lg border border-dashed border-transparent hover:border-violet-500/50 hover:bg-white/5 transition-all p-1 overflow-hidden group">
<img alt="Brand Logo" className="group-hover:blur-sm transition-all duration-300 opacity-90 w-8 h-8 object-cover rounded" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5426b62-3a93-427d-af04-c3175482dd49_320w.png"/>
<input accept="image/*" className="hidden" type="file"/>
</label>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-light text-neutral-400">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Learn</a>
<a className="hover:text-white transition-colors" href="#">Business</a>
<a className="hover:text-white transition-colors mix-blend-hard-light" href="#">Pricing</a>
</div>
<button className="bg-white hover:bg-neutral-200 text-neutral-900 text-sm font-normal px-5 py-2.5 rounded-full transition-colors [animation:breathing-glow_3s_ease-in-out_infinite]">
                Download for macOS
            </button>
</nav>

<main className="flex-1 flex flex-col -mt-20 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5216d088-f3b2-4f42-80b5-49bae1a07093_3840w.jpg?w=800&amp;q=80)] bg-cover z-40 pr-4 pl-4 relative items-center justify-center">

<div className="flex bg-gradient-to-b from-neutral-800/80 to-neutral-950/80 w-20 h-20 border-neutral-700/50 border ring-white/10 ring-1 rounded-2xl mb-8 shadow-2xl backdrop-blur-xl items-center justify-center">
<i className="text-white w-10 h-10" data-lucide="route"></i>
</div>

<h1 className="md:text-7xl lg:text-[6rem] leading-[1.05] text-6xl font-normal text-violet-600 tracking-tight text-center mb-8">
                Atlas for Web
            </h1>

<button className="group inline-flex overflow-hidden transition-all hover:scale-[1.02] hover:bg-neutral-100 focus:outline-none [animation:breathing-glow_3s_ease-in-out_infinite] text-base font-normal text-neutral-900 bg-violet-600 rounded-full mb-12 pt-4 pr-10 pb-4 pl-10 relative gap-x-3 gap-y-3 items-center justify-center">Download for macOS<i className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i></button>

<div className="text-center max-w-3xl px-4 relative">
<h2 className="md:text-3xl leading-relaxed text-2xl font-normal text-neutral-300 tracking-tight">Bring Atlas with you across the web for instant answers, smarter suggestions, and task automation—with complete privacy control.</h2>
</div>
</main>
</div>

<section className="relative z-40 bg-[#000000] w-full border-t border-neutral-900 h-[250vh]" id="scroll-section">

<div className="sticky flex overflow-hidden w-full h-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ce09e20-d74e-4412-8191-69fa951c7281_3840w.webp)] bg-cover bg-center pt-24 pb-24 top-0 items-center justify-center">
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="text-center mb-16 md:mb-24">
<h2 className="md:text-6xl lg:text-7xl leading-tight text-5xl font-normal text-white tracking-tight">
                        Unlock the web with Atlas
                    </h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative w-full group [perspective:1000px]">
<div className="relative rounded-2xl bg-[#0a0a0a] overflow-hidden shadow-2xl border border-neutral-800 transform transition-transform duration-700 lg:hover:[transform:rotateY(-2deg)_rotateX(2deg)] ring-1 ring-white/5 flex flex-col h-[520px]">

<div className="h-12 bg-[#111] border-b border-neutral-800 flex items-center px-5 justify-between shrink-0">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="flex-1 max-w-sm mx-6 bg-neutral-900 rounded-md h-7 border border-neutral-800 text-sm flex items-center justify-center text-neutral-500 font-light tracking-wide">
<i className="w-3.5 h-3.5 mr-2 text-neutral-600" data-lucide="lock"></i>
                                    Data Stream Analysis
                                </div>
<div className="w-12"></div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0a0a0a] p-4 flex flex-col gap-2 relative" id="data-window">

<div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="globe"></i>
</div>
<div className="flex-1">
<div className="text-base font-normal text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">Initializing connection to host</div>
<div className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300 font-mono mt-1 flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0)] group-hover:shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all"></span>
                                            Protocol: HTTPS | Status: 200 OK
                                        </div>
</div>
<div className="text-sm text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors mt-1">12ms</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="file-json"></i>
</div>
<div className="flex-1">
<div className="text-base font-normal text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">Parsing schema.org metadata</div>
<div className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300 font-mono mt-1 flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-all"></span>
                                            Type: Product | Brand: Aerion
                                        </div>
</div>
<div className="text-sm text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors mt-1">4ms</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="image"></i>
</div>
<div className="flex-1">
<div className="text-base font-normal text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">Extracting media assets</div>
<div className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300 font-mono mt-1 flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-500 transition-all"></span>
                                            Images found: 14 | Hi-res: 3
                                        </div>
</div>
<div className="text-sm text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors mt-1">8ms</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="tag"></i>
</div>
<div className="flex-1">
<div className="text-base font-normal text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">Identifying pricing variants</div>
<div className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300 font-mono mt-1 flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 transition-all"></span>
                                            Base: $125.00 | Options: Size
                                        </div>
</div>
<div className="text-sm text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors mt-1">2ms</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="cpu"></i>
</div>
<div className="flex-1">
<div className="text-base font-normal text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">Running local semantic analysis</div>
<div className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300 font-mono mt-1 flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-all"></span>
                                            Tokens processed: 2,048
                                        </div>
</div>
<div className="text-sm text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors mt-1">45ms</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="database"></i>
</div>
<div className="flex-1">
<div className="text-base font-normal text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">Cross-referencing memory core</div>
<div className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300 font-mono mt-1 flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-all"></span>
                                            Matches found: 3 previous sessions
                                        </div>
</div>
<div className="text-sm text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors mt-1">18ms</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="layout"></i>
</div>
<div className="flex-1">
<div className="text-base font-normal text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">Mapping DOM structure</div>
<div className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300 font-mono mt-1 flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-all"></span>
                                            Elements: 842 | Interactivity: High
                                        </div>
</div>
<div className="text-sm text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors mt-1">7ms</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="shield-check"></i>
</div>
<div className="flex-1">
<div className="text-base font-normal text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">Verifying privacy constraints</div>
<div className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300 font-mono mt-1 flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-all"></span>
                                            Site allowed | No sensitive fields detected
                                        </div>
</div>
<div className="text-sm text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors mt-1">1ms</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-start max-w-lg mx-auto lg:mx-0">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-normal mb-8">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
                            Data Display Mode
                        </div>
<h3 className="text-4xl md:text-5xl font-normal text-white mb-6 tracking-tight leading-[1.1]">
                            Deep insight, right where you are.
                        </h3>
<p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
                            Watch Atlas automatically extract, organize, and analyze the underlying data of any webpage as you scroll through it.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="z-40 md:py-32 bg-[#000000] w-full border-t border-neutral-900 pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight">
                    Picks up where you left off
                </h2>
</div>
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
<div className="lg:col-span-4 order-2 lg:order-1 flex flex-col items-start">
<div className="w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-8 text-neutral-400">
<i className="w-6 h-6 text-white" data-lucide="history"></i>
</div>
<p className="text-2xl md:text-3xl font-light text-neutral-300 leading-snug tracking-tight">
                        You can choose what Atlas remembers, so it can bring you relevant details when you need them.
                    </p>
</div>
<div className="lg:col-span-8 order-1 lg:order-2 w-full">
<div className="rounded-2xl bg-[#0a0a0a] overflow-hidden shadow-2xl border border-neutral-800 ring-1 ring-white/5 relative group">
<div className="h-12 bg-[#111] flex items-center px-5 justify-between border-b border-neutral-800">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="text-sm font-normal text-neutral-500 tracking-wide">atlas.com</div>
<div className="w-12"></div>
</div>
<div className="p-6 md:p-12 min-h-[480px] flex flex-col">
<div className="flex items-center gap-2 mb-12">
<span className="text-base font-normal text-neutral-300">Atlas Next</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</div>
<div className="w-full max-w-2xl mx-auto flex flex-col gap-10">
<div className="self-end bg-neutral-800 border border-neutral-700/50 text-neutral-200 px-6 py-4 rounded-3xl rounded-tr-sm max-w-[85%] text-base font-light leading-relaxed">
                                    Open the halloween decorations I was looking at last week in some new tabs
                                </div>
<div className="flex gap-5">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-neutral-900" data-lucide="sparkles"></i>
</div>
<div className="text-neutral-400 text-base font-light leading-relaxed space-y-6 w-full mt-1">
<div>
<p className="text-sm text-neutral-500 uppercase tracking-widest font-normal mb-3 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="history"></i> Memory Active
                                            </p>
<p>Opened five Etsy pages you viewed for Halloween decor:</p>
</div>
<div className="grid gap-3">
<div className="flex items-center gap-4 p-3 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition-colors cursor-pointer group/item">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center">
<i className="w-5 h-5 text-neutral-300" data-lucide="ghost"></i>
</div>
<span className="text-neutral-300 text-sm font-normal">Garden Skull - concrete decor</span>
<i className="w-4 h-4 text-neutral-500 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition-colors cursor-pointer group/item">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center">
<i className="w-5 h-5 text-neutral-300" data-lucide="box"></i>
</div>
<span className="text-neutral-300 text-sm font-normal">Flying Witch Metal Wall Art</span>
<i className="w-4 h-4 text-neutral-500 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>
<div className="mt-auto pt-12">
<div className="bg-[#111] rounded-full h-14 flex items-center px-2 pl-6 justify-between border border-neutral-800">
<span className="text-neutral-600 text-base font-light">Ask anything...</span>
<div className="flex items-center gap-3">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-500 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="mic"></i>
</button>
<button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900 hover:bg-neutral-200 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-40 md:py-32 bg-[#000000] w-full border-neutral-900 border-t pt-24 pb-24 relative">
<div className="max-w-4xl mx-auto px-6 mb-40 text-center">
<div className="relative h-64 mb-16 flex flex-col items-center justify-center select-none [perspective:1000px]">
<div className="absolute top-0 bg-neutral-900 border border-neutral-800 text-neutral-300 px-5 py-2.5 rounded-full flex items-center gap-3 text-sm font-normal z-10">
<i className="w-4 h-4" data-lucide="lock"></i>
                    Connection is secure
                    <i className="w-4 h-4 ml-2 text-white" data-lucide="check-circle"></i>
</div>
<div className="relative z-20 mt-20 flex items-start gap-4">
<div className="bg-[#111] border border-neutral-800 text-neutral-300 w-64 rounded-xl p-2 flex items-center justify-between shadow-2xl">
<div className="flex items-center gap-3 px-2 py-2">
<div className="w-6 h-6 rounded-md bg-white text-neutral-900 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="route"></i>
</div>
<span className="text-sm font-normal tracking-wide">Atlas</span>
</div>
<i className="w-4 h-4 text-neutral-500 mr-2" data-lucide="arrow-right"></i>
</div>
<div className="w-72 bg-[#111] border border-neutral-800 rounded-2xl p-2.5 shadow-2xl">
<div className="text-xs font-normal text-neutral-500 px-4 py-3 uppercase tracking-widest">Allowed</div>
<div className="bg-neutral-900 rounded-xl px-4 py-3.5 flex items-center justify-between border border-neutral-800">
<span className="text-sm text-neutral-300 font-normal">Not allowed</span>
<div className="w-5 h-5 rounded-full bg-white text-neutral-900 flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i>
</div>
</div>
<div className="px-4 py-4 text-sm text-neutral-500 leading-relaxed font-light">
                            When disabled, Atlas can't see the contents of this website
                        </div>
</div>
</div>
</div>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight mb-8">
                You're in control
            </h2>
<p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                Decide which sites Atlas can see, clear your history, use incognito, and manage memories anytime.
            </p>
<button className="transition-colors hover:bg-neutral-200 [animation:breathing-glow_3s_ease-in-out_infinite] text-base font-normal text-neutral-900 bg-white rounded-full pt-4 pr-10 pb-4 pl-10">
                Manage Privacy
            </button>
</div>

<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-normal text-white text-center mb-20 tracking-tight">More features</h2>
<div className="grid md:grid-cols-3 gap-8 lg:gap-10">

<div className="flex flex-col group">
<div className="bg-[#0a0a0a] border border-neutral-800 rounded-3xl aspect-[16/10] mb-8 flex items-center justify-center relative overflow-hidden transition-colors duration-500 group-hover:border-neutral-700">
<div className="w-full px-10 flex items-end justify-between border-b border-neutral-800 pb-5 max-w-[320px]">
<div className="flex flex-col items-center gap-4 relative px-2">
<i className="w-6 h-6 text-white" data-lucide="home"></i>
<div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white"></div>
</div>
<i className="w-6 h-6 text-neutral-600" data-lucide="globe"></i>
<i className="w-6 h-6 text-neutral-600" data-lucide="image"></i>
<i className="w-6 h-6 text-neutral-600" data-lucide="video"></i>
<i className="w-6 h-6 text-neutral-600" data-lucide="file-text"></i>
</div>
</div>
<div className="px-2">
<h3 className="text-lg font-normal text-white mb-3 tracking-tight">Smarter searches</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                            Get information the way you want to. Search text, images, videos, or news articles.
                        </p>
</div>
</div>

<div className="flex flex-col group">
<div className="bg-[#0a0a0a] border border-neutral-800 rounded-3xl aspect-[16/10] mb-8 flex flex-col items-center justify-center p-8 relative overflow-hidden transition-colors duration-500 group-hover:border-neutral-700">
<div className="w-full max-w-[220px] space-y-4">
<div className="flex items-center gap-4 text-white border-b border-neutral-800 pb-4 mb-4">
<i className="w-5 h-5 text-neutral-500" data-lucide="plus-circle"></i>
<span className="text-sm font-normal">Smoky mountains</span>
</div>
<div className="space-y-5 pl-8 opacity-60">
<div className="flex items-center gap-4 text-neutral-400">
<i className="w-4 h-4" data-lucide="search"></i>
<span className="text-sm font-normal">Smoky mountains</span>
</div>
<div className="flex items-center gap-4 text-neutral-400">
<i className="w-4 h-4" data-lucide="image"></i>
<span className="text-sm font-normal">photos</span>
</div>
<div className="flex items-center gap-4 text-neutral-400">
<i className="w-4 h-4" data-lucide="bed"></i>
<span className="text-sm font-normal">hotels</span>
</div>
</div>
</div>
</div>
<div className="px-2">
<h3 className="text-lg font-normal text-white mb-3 tracking-tight">Easy to use</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                            Use tabs, autocomplete, a search bar, and bookmarks to easily navigate.
                        </p>
</div>
</div>

<div className="flex flex-col group">
<div className="bg-[#0a0a0a] border border-neutral-800 rounded-3xl aspect-[16/10] mb-8 flex items-center justify-center relative overflow-hidden transition-colors duration-500 group-hover:border-neutral-700">
<div className="flex gap-4 group-hover:scale-105 transition-transform duration-500 ease-out bg-neutral-900 h-12 border-neutral-700 border rounded-full pt-[5px] pr-5 pb-[5px] pl-5 gap-x-4 gap-y-4 items-center">
<div className="w-2.5 h-2.5 bg-neutral-600 rounded-full"></div>
<div className="w-2.5 h-2.5 bg-neutral-600 rounded-full"></div>
<div className="w-5 h-5 bg-white rounded-full shadow-lg ring-1 ring-black/10 transform scale-110"></div>
<div className="w-2.5 h-2.5 bg-neutral-600 rounded-full"></div>
<div className="w-2.5 h-2.5 bg-neutral-600 rounded-full"></div>
</div>
</div>
<div className="px-2">
<h3 className="text-lg font-normal text-white mb-3 tracking-tight">Make it custom</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                            It's easy to set your browsing preferences and colors exactly how you like them.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#000000] w-full relative border-t border-neutral-900">
<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-transparent to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="md:py-48 flex flex-col text-center w-full max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative items-center justify-center">
<div className="w-24 h-24 rounded-[2rem] bg-white mb-10 flex items-center justify-center ring-1 ring-white/10 shadow-2xl">
<i className="text-neutral-900 w-10 h-10" data-lucide="route"></i>
</div>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight mb-10">
                Download Atlas
            </h2>
<button className="transition-colors hover:bg-neutral-200 text-base font-normal text-neutral-900 bg-white rounded-full mb-8 pt-4 pr-10 pb-4 pl-10 [animation:breathing-glow_3s_ease-in-out_infinite]">
                Download for macOS
            </button>
<p className="text-sm font-light text-neutral-500 max-w-md mx-auto leading-relaxed">
                * The Atlas macOS app is only available for macOS 14+ with Apple Silicon (M1 or better).
            </p>
</div>
</section>
<footer className="md:pt-28 text-sm text-white bg-[#000000] w-full border-t border-neutral-900 pt-20">
<div className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
<div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12">
<div className="shrink-0">
<span className="text-xl font-normal tracking-tight text-white">ATLAS</span>
</div>
<div className="flex flex-wrap gap-16 sm:gap-24 lg:gap-32 w-full md:w-auto">
<div className="flex flex-col gap-5 min-w-[140px]">
<h3 className="text-sm font-normal text-neutral-500 mb-2">Company</h3>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#">Research</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#">Safety</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#">API</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#">News</a>
</div>
<div className="flex flex-col gap-5 min-w-[140px]">
<h3 className="text-sm font-normal text-neutral-500 mb-2">Legal</h3>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#">Terms of Use</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#">Usage Policy</a>
</div>
</div>
</div>
</div>
<div className="w-full border-t border-neutral-900 bg-[#000000] relative z-10">
<div className="max-w-7xl mx-auto px-6 py-8 md:py-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
<div className="text-sm order-2 md:order-1 font-light text-neutral-600">
                    © 2026 Atlas Inc.
                </div>
<div className="flex items-center gap-6 order-1 md:order-2">
<div className="flex items-center gap-3 text-neutral-400">
<i className="w-4 h-4" data-lucide="globe"></i>
<span className="text-sm font-light">English</span>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
