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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


            (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "15min", {origin:"https://app.cal.com"});
            Cal.ns["15min"]("inline", {
              elementOrSelector:"#my-cal-inline-15min",
              config: {"layout":"month_view","theme":"dark"},
              calLink: "floods-uuua06/15min",
            });
            Cal.ns["15min"]("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#2563eb"}},"hideEventTypeDetails":false,"layout":"month_view"});
          


      // Initialize Lucide Icons
      lucide.createIcons();
    


      // Subtle Section-Scoped Animated Noise
      (function() {
        const canvas = document.getElementById('noise-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });

        // Taller dimensions to maintain square-ish noise pattern in the taller wrapper
        canvas.width = 600;
        canvas.height = 1200;

        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;
        let lastTime = 0;

        function renderNoise(time) {
          // Slower refresh rate (approx ~6-7fps) for subtlety
          if (time - lastTime > 150) {
            for (let i = 0; i < data.length; i += 4) {
              const val = Math.random() * 255;
              data[i] = val;     // R
              data[i+1] = val;   // G
              data[i+2] = val;   // B
              data[i+3] = 6;     // Substantially reduced Alpha for a sweet spot of subtlety
            }
            ctx.putImageData(imageData, 0, 0);
            lastTime = time;
          }
          requestAnimationFrame(renderNoise);
        }

        requestAnimationFrame(renderNoise);
      })();
    


      (function() {
        const tabs = [
          { id: 'tab-geo', content: 'content-geo' },
          { id: 'tab-entertainment', content: 'content-entertainment' },
          { id: 'tab-verified', content: 'content-verified' }
        ];
        tabs.forEach(tab => {
          const tabEl = document.getElementById(tab.id);
          if(tabEl) {
            tabEl.addEventListener('click', () => {
              tabs.forEach(t => {
                const el = document.getElementById(t.id);
                const content = document.getElementById(t.content);
                if(el) {
                  el.classList.remove('border-white/10', 'opacity-100');
                  el.classList.add('border-white/5', 'opacity-60');
                  const indicator = el.querySelector('.tab-indicator');
                  if(indicator) indicator.classList.add('opacity-0');
                }
                if(content) {
                  content.classList.remove('opacity-100', 'z-10');
                  content.classList.add('opacity-0', 'pointer-events-none', 'z-0');
                }
              });
              tabEl.classList.remove('border-white/5', 'opacity-60');
              tabEl.classList.add('border-white/10', 'opacity-100');
              const activeIndicator = tabEl.querySelector('.tab-indicator');
              if(activeIndicator) activeIndicator.classList.remove('opacity-0');
              const activeContent = document.getElementById(tab.content);
              if(activeContent) {
                activeContent.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
                activeContent.classList.add('opacity-100', 'z-10');
              }
            });
          }
        });
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      })();
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>
</div>

<div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] blur-[180px] rounded-full pointer-events-none z-0 bg-blue-400/10"></div>

<nav className="absolute top-0 w-full z-40">
<div className="flex w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 hover:opacity-80 transition-opacity text-black" href="#">
<span className="text-lg font-medium tracking-tighter">floods</span>
</a>
<div className="flex items-center gap-4 text-sm">
<span className="hidden md:inline text-black">Want to see what it looks like for your game ?</span>
<a className="transition-all hover-glow-btn animate-pulse-glow hover:bg-zinc-800 font-semibold text-black rounded-full pt-2 pr-5 pb-2 pl-5 shadow-[0_0_15px_rgba(37,99,235,0.2)]" href="#pricing">
            Book a call
          </a>
</div>
</div>
</nav>
<main className="flex flex-col z-10 pt-32 pb-24 relative items-center w-full">

<div className="flex flex-col -mt-32 w-full pt-32 relative items-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/[0.07] blur-[250px] rounded-full pointer-events-none z-0"></div>

<canvas className="absolute inset-0 w-full h-full pointer-events-none z-[9998]" height="1200" id="noise-canvas" style={{WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'}} width="600"></canvas>

<section className="flex flex-col z-10 text-center w-full max-w-7xl mb-32 pr-6 pl-6 relative items-center">
<div className="w-16 h-16 mb-8 relative flex items-center justify-center">
<div className="rounded-full absolute top-0 right-0 bottom-0 left-0 blur-xl"></div>
<i className="text-blue-500 relative z-10" data-lucide="droplets" height="32" strokeWidth="1.5" width="32"></i>
</div>
<h1 className="leading-[0.9] z-10 md:text-6xl lg:text-7xl text-4xl text-black tracking-tighter font-serif relative text-glow">
            A thousand games in one ad slot.
          </h1>
<h1 className="leading-[0.9] md:text-6xl lg:text-5xl z-10 text-4xl text-black tracking-tighter font-serif mt-3 mb-8 relative">and nobody owns the organic feed...</h1>
<p className="leading-relaxed md:text-xl text-lg text-black text-center max-w-5xl z-10 mb-10 relative">Your users watch 500 videos a day. Your ad is one. We make your game the other 499. Billions of organic impressions across TikTok, Reels, and Shorts. Targeted. Verified. 10-25x cheaper than paid ads.</p>


<div className="absolute w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none"></div>
<div className="w-full max-w-5xl aspect-video md:aspect-[21/9] bg-[#080808] border rounded-2xl relative overflow-hidden flex flex-col group cursor-pointer animate-pulse-glow z-10 border-black/10">
<div className="flex h-12 border-b pr-4 pl-4 items-center justify-between bg-white/40 border-black/5">
<div className="flex items-center gap-2">
<i className="text-zinc-400" data-lucide="chevrons-right" height="16" strokeWidth="1.5" width="16"></i>
<span className="text-sm text-slate-50 tracking-tight">
                  floods_network_vsl
                </span>
</div>
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="uppercase text-xs font-medium text-slate-50 tracking-wide">
                  Live Capacity: 5,123,456,789
                </span>
</div>
</div>
<div className="flex-1 relative flex items-center justify-center bg-[linear-gradient(to_bottom,transparent,#0a0a0a)]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_50%)]"></div>
<div className="text-slate-500 opacity-[0.03] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="h-20 w-20 backdrop-blur-md border rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500 relative z-10 shadow-2xl bg-black/5 border-black/10 text-black">
<i className="ml-1" data-lucide="play" height="32" strokeWidth="1.5" width="32"></i>
</div>
</div>
</div>
</section>

<section className="z-10 w-full border-black/5 border-t pt-32 pr-6 pb-32 pl-6 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px] rounded-full pointer-events-none z-0"></div>
<img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-200" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7b224ee-3701-41c6-9201-6d8a465c1ccf_3840w.png"/>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" style={{backgroundImage: 'url(\'https://ibb.co/HDCkwTT9\')'}}></div>
<div className="absolute inset-0 backdrop-blur-md bg-white/50"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white"></div>
</div>
<div className="flex flex-col z-10 max-w-7xl mr-auto ml-auto relative items-center">
<i className="mb-6 text-zinc-400" data-lucide="eye" height="40" strokeWidth="1.5" width="40"></i>
<h2 className="md:text-7xl text-5xl tracking-tighter font-serif text-center mb-6 text-black text-glow">
              Your users live in the organic feed.
            </h2>
<p className="text-shadow-sm text-lg text-black text-center max-w-2xl mb-24">
              Same ads slot, rising CPMs, creative fatigue. The organic feed -
              80% of screen time - is wide open. We built the infrastructure to
              fill it.
            </p>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full">
<div className="lg:col-span-4 flex flex-col gap-4 gap-x-4 gap-y-4" id="features-tabs">
<div className="transition-all cursor-pointer overflow-hidden tab-item hover:opacity-100 hover:border-black/20 bg-neutral-50/80 border-black/5 border rounded-xl px-8 py-8 relative backdrop-blur-sm" id="tab-entertainment">
<div className="absolute left-0 top-0 bottom-0 w-1 transition-opacity duration-300 tab-indicator bg-blue-400"></div>
<h3 className="text-lg tracking-tight mb-3 font-medium text-black">
                    Entertainment, not ads
                  </h3>
<p className="leading-relaxed text-lg text-zinc-600">
                    Your game embedded in what users already watch. Split-screen
                    content, not advertising.
                  </p>
</div><div className="transition-all cursor-pointer overflow-hidden tab-item hover:border-black/20 bg-slate-50/80 border-black/10 border rounded-xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm" id="tab-geo">
<div className="absolute left-0 top-0 bottom-0 w-1 transition-opacity duration-300 tab-indicator opacity-100 bg-blue-400"></div>
<h3 className="text-lg font-medium text-black tracking-tight mb-3">
                    Geo-targeted reach
                  </h3>
<p className="leading-relaxed text-lg text-zinc-600">
                    Country, age, gender, platform. You pick. We deliver.
                  </p>
</div>
<div className="transition-all cursor-pointer overflow-hidden tab-item hover:opacity-100 hover:border-black/20 bg-neutral-50/80 border-black/5 border rounded-xl px-8 py-8 relative backdrop-blur-sm" id="tab-verified">
<div className="absolute left-0 top-0 bottom-0 w-1 transition-opacity duration-300 tab-indicator bg-blue-400"></div>
<h3 className="text-lg tracking-tight mb-3 font-medium text-black">
                    Verified human impressions
                  </h3>
<p className="leading-relaxed text-lg text-zinc-600">
                    Bot detection on every view. You pay for real people. Full
                    geo and demo reporting.
                  </p>
</div>
</div>
<div className="lg:col-span-8 bg-[#080808]/80 backdrop-blur-md border rounded-2xl p-0 relative flex items-center justify-center min-h-[500px] overflow-hidden shadow-2xl border-black/10" id="features-content">
<div className="tab-content w-full h-full absolute inset-0 flex items-center justify-center transition-opacity duration-500" id="content-geo">
<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative w-full max-w-md h-[400px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 backdrop-blur-md border border-blue-500/30 rounded-lg p-3 z-20 flex items-center gap-3 shadow-lg bg-white/90">
<div className="w-8 h-8 rounded flex items-center justify-center text-blue-500 bg-blue-400/20">
<i data-lucide="crosshair" height="16" strokeWidth="1.5" width="16"></i>
</div>
<div>
<div className="text-sm font-medium text-black">
                          Target GEO
                        </div>
<div className="text-xs text-zinc-500">Tier 1 US/UK</div>
</div>
</div>
<div className="absolute top-10 left-1/2 w-px h-24 bg-gradient-to-b from-blue-500/50 to-zinc-200"></div>
<div className="absolute top-24 left-1/4 w-1/2 h-px bg-zinc-200"></div>
<div className="absolute top-32 left-0 w-32 backdrop-blur-md border rounded-lg p-2 z-20 shadow-lg bg-white/90 border-black/10">
<div className="h-24 rounded mb-2 flex items-center justify-center bg-zinc-100">
<i className="text-zinc-300" data-lucide="map-pin" height="20" strokeWidth="1.5" width="20"></i>
</div>
<div className="text-xs flex justify-between text-zinc-600">
<span>US East</span>
<span className="text-blue-500">45%</span>
</div>
</div>
<div className="absolute top-32 right-0 w-32 backdrop-blur-md border rounded-lg p-2 z-20 shadow-lg bg-white/90 border-black/10">
<div className="h-24 rounded mb-2 flex items-center justify-center bg-zinc-100">
<i className="text-zinc-300" data-lucide="map-pin" height="20" strokeWidth="1.5" width="20"></i>
</div>
<div className="text-xs flex justify-between text-zinc-600">
<span>UK</span>
<span className="text-blue-500">30%</span>
</div>
</div>
<div className="absolute top-52 left-1/2 -translate-x-1/2 w-40 backdrop-blur-md border rounded-lg p-2 z-20 shadow-[0_0_30px_rgba(37,99,235,0.15)] bg-white/90 border-black/10">
<div className="h-16 rounded mb-2 flex items-center justify-center flex-col bg-zinc-100">
<span className="text-lg font-medium text-black">1.2M</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                          Matched Users
                        </span>
</div>
</div>
</div>
</div>
<div className="tab-content w-full h-full absolute inset-0 flex items-center justify-center transition-opacity duration-500" id="content-entertainment">
<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative w-full max-w-md h-[400px]">
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 backdrop-blur-md border border-emerald-500/30 rounded-lg p-3 z-20 flex items-center gap-3 shadow-lg bg-white/90">
<div className="w-8 h-8 rounded flex items-center justify-center text-emerald-500 bg-emerald-400/20">
<i data-lucide="smartphone" height="16" strokeWidth="1.5" width="16"></i>
</div>
<div>
<div className="text-sm font-medium text-black">
                          Split-Screen
                        </div>
<div className="text-xs text-zinc-500">Organic Format</div>
</div>
</div>
<div className="absolute top-28 left-1/2 -translate-x-1/2 w-56 backdrop-blur-md border rounded-lg p-2 z-20 shadow-[0_0_30px_rgba(16,185,129,0.15)] bg-white/90 border-black/10">
<div className="h-48 rounded relative overflow-hidden flex flex-col bg-zinc-100">
<div className="h-1/2 border-b flex items-center justify-center relative border-black/10 bg-zinc-200">
<i className="text-black/30" data-lucide="play-circle" height="24" strokeWidth="1.5" width="24"></i>
<div className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded bg-white/50 text-zinc-700">
                            Viral Hook
                          </div>
</div>
<div className="h-1/2 flex items-center justify-center relative bg-zinc-50">
<i className="text-emerald-500/50" data-lucide="gamepad-2" height="24" strokeWidth="1.5" width="24"></i>
<div className="absolute bottom-2 left-2 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-100/50 text-emerald-600">
                            Your Game
                          </div>
</div>
</div>
<div className="text-xs flex justify-between items-center mt-3 px-2 pb-1 text-zinc-600">
<span>Retention</span>
<span className="flex items-center gap-1 text-emerald-600">
<i data-lucide="trending-up" height="12" width="12"></i>
                          68% @ 3s
                        </span>
</div>
</div>
</div>
</div>
<div className="tab-content w-full h-full absolute inset-0 flex items-center justify-center transition-opacity duration-500" id="content-verified">
<div className="bg-white opacity-[0.05] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle at center, #8b5cf6 2px, transparent 2px)', backgroundSize: '24px 24px'}}></div>
<div className="relative w-full max-w-md h-[400px]">
<div className="absolute top-16 left-1/2 -translate-x-1/2 w-72 backdrop-blur-md border border-violet-500/30 rounded-lg p-5 z-20 shadow-[0_0_40px_rgba(139,92,246,0.15)] bg-white/90">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full flex items-center justify-center text-violet-500 bg-violet-400/20">
<i data-lucide="shield-check" height="24" strokeWidth="1.5" width="24"></i>
</div>
<div>
<div className="text-sm font-medium text-black">
                            Bot Filtering Active
                          </div>
<div className="text-xs text-zinc-500">
                            100% Verified Humans
                          </div>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="flex items-center gap-2 text-zinc-600">
<i className="text-violet-500" data-lucide="check-circle-2" height="16" width="16"></i>
                            IP Reputation
                          </span>
<span className="text-black">Passed</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="flex items-center gap-2 text-zinc-600">
<i className="text-violet-500" data-lucide="check-circle-2" height="16" width="16"></i>
                            Watch Patterns
                          </span>
<span className="text-black">Organic</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="flex items-center gap-2 text-zinc-600">
<i className="text-violet-500" data-lucide="check-circle-2" height="16" width="16"></i>
                            Engagement Rate
                          </span>
<span className="text-black">4.2%</span>
</div>
</div>
<div className="mt-6 pt-4 border-t flex justify-between items-center border-black/5">
<span className="text-sm text-zinc-500">Filtered Bots</span>
<span className="text-sm font-medium text-red-600">
                          -12,450
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="z-10 w-full pt-16 pr-6 pb-32 pl-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
<div className="flex flex-col relative">
<div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-600/15 blur-[90px] rounded-full pointer-events-none -z-10"></div>
<div className="h-64 bg-[#080808] relative mb-8 flex items-center justify-center overflow-hidden group animate-pulse-glow">
<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black/20"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black/20"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black/20"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black/20"></div>
<div className="absolute inset-0 group-hover:bg-blue-600/5 transition-colors duration-500 bg-blue-400/0"></div>
<div className="w-16 h-16 rounded-full border flex items-center justify-center border-black/10">
<span className="font-serif text-3xl text-zinc-500 text-glow">
                  1
                </span>
</div>
</div>
<h3 className="font-serif text-3xl md:text-4xl tracking-tighter mb-3 leading-none text-black">
              Brief
            </h3>
<p className="text-lg leading-relaxed text-zinc-600">
              Tell us the geo, platform split, demographics, and creative
              direction. No SDK. No integration. No attribution stack changes.
            </p>
</div>
<div className="flex flex-col">
<div className="h-64 bg-[#080808] relative mb-8 flex items-center justify-center overflow-hidden group animate-pulse-glow">
<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black/20"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black/20"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black/20"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black/20"></div>
<div className="absolute inset-0 group-hover:bg-blue-600/5 transition-colors duration-500 bg-blue-400/0"></div>
<div className="flex gap-2">
<div className="w-12 h-20 border rounded -rotate-12 translate-y-2 opacity-60 border-black/10 bg-white"></div>
<div className="w-14 h-24 border border-blue-500/50 rounded z-10 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2)] bg-white">
<span className="font-serif text-3xl text-blue-500 text-glow">
                    2
                  </span>
</div>
<div className="w-12 h-20 border rounded rotate-12 translate-y-2 opacity-60 border-black/10 bg-white"></div>
</div>
</div>
<h3 className="font-serif text-3xl md:text-4xl tracking-tighter mb-3 leading-none text-black">
              Flood
            </h3>
<p className="text-lg leading-relaxed text-zinc-600">
              Our network of thousands of accounts publishes
              entertainment-native short-form content featuring your game across
              TikTok, Reels, and Shorts at scale.
            </p>
</div>
<div className="flex flex-col">
<div className="h-64 bg-[#080808] relative mb-8 flex items-center justify-center overflow-hidden group animate-pulse-glow">
<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black/20"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black/20"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black/20"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black/20"></div>
<div className="absolute inset-0 group-hover:bg-blue-600/5 transition-colors duration-500 bg-blue-400/0"></div>
<div className="w-full px-12 flex items-end justify-between h-24">
<div className="w-8 rounded-t h-1/3 bg-zinc-200"></div>
<div className="w-8 rounded-t h-1/2 bg-zinc-300"></div>
<div className="w-8 rounded-t h-2/3 bg-zinc-400"></div>
<div className="w-8 rounded-t h-full relative flex justify-center bg-blue-400/80">
<span className="absolute -top-10 font-serif text-3xl text-blue-500 text-glow">
                    3
                  </span>
</div>
</div>
</div>
<h3 className="font-serif text-3xl md:text-4xl tracking-tighter mb-3 leading-none text-black">
              Measure
            </h3>
<p className="text-lg leading-relaxed text-zinc-600">
              Track the impact on your dashboards. Higher CTR on paid ads, lower
              CPI, better blended CAC. Full impression reporting from us.
            </p>
</div>
<div className="flex flex-col">
<div className="h-64 bg-[#080808] relative mb-8 flex items-center justify-center overflow-hidden group animate-pulse-glow">
<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black/20"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black/20"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black/20"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black/20"></div>
<i className="text-zinc-300" data-lucide="layers" height="48" strokeWidth="1.5" width="48"></i>
</div>
<h3 className="font-serif text-3xl md:text-4xl tracking-tighter mb-3 leading-none text-black">
              Make every ad dollar work harder.
            </h3>
<p className="text-lg leading-relaxed text-zinc-600">
              Organic feed presence creates familiarity. When users have seen
              your game 15 times organically, paid ads convert at structurally
              higher rates.
            </p>
</div>
<div className="flex flex-col">
<div className="h-64 bg-[#080808] relative mb-8 flex items-center justify-center overflow-hidden group animate-pulse-glow">
<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black/20"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black/20"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black/20"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black/20"></div>
<div className="relative flex items-center justify-center">
<i className="text-zinc-200" data-lucide="smartphone" height="64" strokeWidth="1" width="64"></i>
<span className="absolute font-serif text-2xl tracking-tighter text-glow text-black">
                  80%
                </span>
</div>
</div>
<h3 className="font-serif text-3xl md:text-4xl tracking-tighter mb-3 leading-none text-black">
              80% of screen time. 0% of budget.
            </h3>
<p className="text-lg leading-relaxed text-zinc-600">
              Your users spend most of their time scrolling feeds. Your game is
              invisible there. Every competitor fights for the same paid slots.
            </p>
</div>
<div className="flex flex-col">
<div className="h-64 bg-[#080808] relative mb-8 flex items-center justify-center overflow-hidden group animate-pulse-glow">
<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black/20"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black/20"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black/20"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black/20"></div>
<i className="group-hover:text-blue-600/80 transition-colors duration-500 text-blue-100/50" data-lucide="shield-check" height="48" strokeWidth="1.5" width="48"></i>
</div>
<h3 className="font-serif text-3xl md:text-4xl tracking-tighter mb-3 leading-none text-black">
              The insurance policy you don't have.
            </h3>
<p className="text-lg leading-relaxed text-zinc-600">
              Growth depends on algorithms and attribution. For a fraction of
              your budget, organic infrastructure protects you when the paid
              ecosystem shifts.
            </p>
</div>
</div>
</section>

<section className="flex flex-col w-full z-10 pt-24 pr-6 pb-32 pl-6 relative items-center" id="pricing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[220px] rounded-full pointer-events-none z-0"></div>
<h2 className="md:text-8xl text-6xl tracking-tighter font-serif text-center mb-4 text-black text-glow">
          Book a call.
        </h2>
<p className="text-lg text-zinc-600 text-center max-w-lg mb-16">
          See what billions of organic impressions look like for your game.
        </p>

<div className="w-full max-w-4xl bg-[#0a0a0a] border rounded-2xl overflow-hidden shadow-2xl relative h-[700px] animate-pulse-glow border-black/10">
<div className="cal-inline-container" id="my-cal-inline-15min" style={{width: '100%', height: '100%', overflow: 'scroll'}}>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>
              .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
            </style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style></div>

</div>
</section>

<section className="z-10 font-normal w-full max-w-6xl pb-24 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 blur-[180px] rounded-full pointer-events-none -z-10"></div>
<div className="w-full bg-[#050505] border rounded-3xl p-16 md:p-24 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl animate-pulse-glow border-black/10">

<div className="absolute inset-0 opacity-20 pointer-events-none flex flex-wrap gap-2 transform scale-110 -rotate-3">
<div className="w-1/4 h-32 border bg-white border-black/5"></div>
<div className="w-1/3 h-32 border flex items-center justify-center bg-zinc-100 border-black/5">
<i className="text-zinc-300" data-lucide="play"></i>
</div>
<div className="w-1/5 h-32 border bg-white border-black/5"></div>
<div className="w-1/4 h-32 border bg-white border-black/5"></div>
<div className="w-1/3 h-32 border bg-white border-black/5"></div>
<div className="w-1/5 h-32 border bg-white border-black/5"></div>
<div className="w-1/4 h-32 border flex items-center justify-center bg-zinc-100 border-black/5">
<i className="text-zinc-300" data-lucide="smartphone"></i>
</div>
<div className="w-1/4 h-32 border bg-white border-black/5"></div>
</div>

<div className="absolute top-0 right-0 bottom-0 left-0 z-0">
<video autoplay="" className="opacity-50 mix-blend-screen w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" onclick="window.location.href='https://framerusercontent.com/assets/afnqwWvL5OxWvQG26s6thrjEdy8.mp4'" playsinline="" role="button">
<source className="" onclick="window.location.href='https://framerusercontent.com/assets/afnqwWvL5OxWvQG26s6thrjEdy8.mp4'" role="button" src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-background-22874-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50"></div>
<div className="opacity-80 absolute top-0 right-0 bottom-0 left-0">
<video autoplay="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="">
<source src="https://framerusercontent.com/assets/afnqwWvL5OxWvQG26s6thrjEdy8.mp4" type="video/mp4"/>
</video>
</div>
</div>
<div className="z-10 flex flex-col relative items-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/20 blur-[140px] rounded-full pointer-events-none -z-10"></div>
<h2 className="md:text-8xl text-5xl text-slate-50 tracking-tighter font-serif mb-6 text-glow">
              Own the organic feed. Not just the ads.
            </h2>
<p className="text-lg font-bold text-slate-50 max-w-2xl mb-10">
              What impact would 5 billion organic impressions a month do to your
              UA ?
            </p>
<a className="inline-block transition-colors hover-glow-btn hover:bg-zinc-800 text-sm font-semibold text-slate-950 bg-slate-50 rounded-full pt-3 pr-8 pb-3 pl-8" href="/mailto:contact@floods.fr">
              Contact us
            </a>
</div>
</div>
</section>
</main>

<footer className="w-full border-t pt-24 pb-12 relative z-10 border-black/5 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">

<div className="max-w-md">
<a className="flex items-center gap-2 mb-8 text-black" href="#">
<i className="text-black" data-lucide="chevrons-right" height="20" strokeWidth="1.5" width="20"></i>
<span className="text-lg tracking-tighter font-medium">floods</span>
</a>
<h2 className="font-serif text-4xl md:text-5xl tracking-tighter mb-6 leading-none text-black">
              Massive Organic
              <br/>
              Distribution.
            </h2>
<div className="flex flex-col gap-2 text-xs tracking-widest text-zinc-500 uppercase font-medium">
<div className="flex items-center gap-2">
<div className="w-1 h-1 bg-zinc-300"></div>
                BOT DETECTION
              </div>
<div className="flex items-center gap-2">
<div className="w-1 h-1 bg-zinc-300"></div>
                VERIFIED IMPRESSIONS
              </div>
<div className="flex items-center gap-2">
<div className="w-1 h-1 bg-zinc-300"></div>
                GEO TARGETING
              </div>
</div>
</div>

<div className="flex flex-col gap-8 md:text-right">
<div className="">
<div className="text-sm font-medium mb-2 text-black">Contact</div>
<a className="transition-colors text-lg hover:text-black text-zinc-600" href="/mailto:contact@floods.fr">
                contact@floods.fr
              </a>
</div>
<div className="">
<div className="text-sm font-medium mb-2 text-black">Locations</div>
<p className="text-lg text-zinc-600">New York / Paris</p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t text-xs border-black/5 text-zinc-400">
<p className="">© 2026 Floods LLC. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="transition-colors hover:text-zinc-600" href="#">Terms</a>
<a className="transition-colors hover:text-zinc-600" href="#">
              Privacy
            </a>
</div>
</div>
</div>
</footer>




    </>
  );
}
