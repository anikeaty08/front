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



      // Optimized launch sequence to ensure visibility
      document.addEventListener('DOMContentLoaded', () => {
        const loadingBar = document.getElementById('loading-bar');
        const introLayer = document.getElementById('intro-layer');
        const statusText = document.getElementById('status-text');
        const balanceWrap = document.getElementById('balance-wrap');
        const balanceVal = document.getElementById('balance-val');

        // 1. Fast loading animation
        requestAnimationFrame(() => {
          loadingBar.style.width = '100%';
        });

        // 2. Hide intro and start reveal
        setTimeout(() => {
          introLayer.style.opacity = '0';
          introLayer.style.pointerEvents = 'none';

          // Start typing effect shortly after
          setTimeout(() => {
            typeWriter('SYSTEM VERIFIED', statusText, () => {
              // Reveal Balance after typing
              balanceWrap.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
              balanceWrap.style.opacity = '1';
              balanceWrap.style.transform = 'translateY(0)';

              // Count up balance
              animateValue(balanceVal, 0, 68.421, 1500);
            });
          }, 400);

        }, 1200); // Reduced wait time from 4s to 1.2s

        function typeWriter(text, element, callback) {
          let i = 0;
          element.classList.add('cursor-blink');
          element.innerText = '';

          function type() {
            if (i < text.length) {
              element.innerText += text.charAt(i);
              i++;
              setTimeout(type, 40);
            } else {
              setTimeout(() => {
                element.classList.remove('cursor-blink');
                if(callback) callback();
              }, 500);
            }
          }
          type();
        }

        function animateValue(obj, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);
            obj.innerHTML = (ease * (end - start) + start).toFixed(3);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
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
      

<div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ease-out" id="intro-layer">
<div className="relative">
<div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full animate-pulse"></div>
<iconify-icon className="text-white relative z-10 opacity-80" icon="lucide:fingerprint" width="64"></iconify-icon>
</div>
<div className="mt-8 w-32 h-[1px] bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-0 shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-[2000ms] ease-out" id="loading-bar"></div>
</div>
<div className="mt-4 text-[10px] tracking-[0.3em] text-zinc-500 font-mono" id="intro-text">
        INITIALIZING
      </div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid opacity-100"></div>
<div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-emerald-900/5 blur-[120px]"></div>
</div>

<header className="relative z-20 w-full px-6 py-6 flex justify-between items-center animate-enter delay-500">
<div className="flex items-center gap-4">
<div className="relative w-10 h-10 flex items-center justify-center">
<div className="absolute inset-0 bg-emerald-500/10 blur-lg rounded-full"></div>
<svg className="w-full h-full relative z-10" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

<circle cx="50" cy="50" r="48" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></circle>

<path className="origin-center animate-[spin_4s_linear_infinite]" d="M50 2 A48 48 0 0 1 98 50" stroke="#10b981" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="origin-center animate-[spin_4s_linear_infinite]" d="M50 98 A48 48 0 0 1 2 50" stroke="#10b981" strokeLinecap="round" stroke-opacity="0.3" strokeWidth="1.5"></path>

<circle className="origin-center animate-[spin_8s_linear_infinite_reverse]" cx="50" cy="50" r="32" stroke="rgba(255,255,255,0.15)" stroke-dasharray="1 6" strokeWidth="1"></circle>

<circle className="animate-pulse" cx="50" cy="50" fill="#10b981" fillOpacity="0.15" r="14"></circle>
<circle className="drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" cx="50" cy="50" fill="#10b981" r="6"></circle>
<circle cx="50" cy="50" fill="white" r="2"></circle>
</svg>
</div>
<div className="flex flex-col justify-center gap-0.5">
<span className="text-base font-semibold text-white tracking-[0.4em] leading-none drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            1 PRO
          </span>
<div className="flex items-center gap-1.5 opacity-80">
<div className="w-0.5 h-2 bg-emerald-500/50"></div>
<span className="text-[9px] font-mono text-zinc-400 tracking-[0.2em] uppercase leading-none">
              Protocol V2
            </span>
</div>
</div>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
<iconify-icon className="text-zinc-400" icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</header>

<main className="relative z-10 flex-1 flex flex-col w-full max-w-md mx-auto px-6 overflow-y-auto no-scrollbar pb-32">
<div className="absolute top-[40px] -left-6 -right-6 h-[320px] pointer-events-none z-0">
<svg className="overflow-visible" height="100%" preserveaspectratio="none" viewbox="0 0 1000 400" width="100%">
<defs>
<lineargradient id="fullGraphGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="animate-graph-line drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" d="M 0 350 C 200 350, 350 200, 550 240 S 850 80, 1000 50" fill="none" stroke="#10b981" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path className="animate-graph-area opacity-0" d="M 0 350 C 200 350, 350 200, 550 240 S 850 80, 1000 50 V 400 H 0 Z" fill="url(#fullGraphGradient)" style={{mixBlendMode: 'screen'}}></path>
</svg>
</div>

<div className="flex-none flex flex-col items-center justify-center pt-8 pb-4 relative animate-enter delay-200">
<div className="relative w-[280px] h-[280px] flex items-center justify-center">

<div className="absolute inset-0 rounded-full border border-white/[0.06]"></div>
<div className="absolute inset-[35px] rounded-full border border-white/[0.04] border-dashed"></div>

<div className="absolute inset-0 rounded-full overflow-hidden animate-[spin_8s_linear_infinite]">
<div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-transparent via-transparent to-emerald-500/10 blur-sm"></div>
</div>

<div className="absolute inset-[10px] rounded-full border border-white/[0.03] animate-[spin_12s_linear_infinite_reverse]">
<div className="absolute top-1/2 left-0 w-1 h-1 bg-white/20 rounded-full shadow-[0_0_10px_white]"></div>
</div>

<div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10 relative">
<div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
</div>

<div className="absolute top-1/2 left-8 -translate-y-1/2">
<div className="text-[9px] font-mono text-zinc-600 rotate-90 origin-center tracking-widest">
              SCANNING
            </div>
</div>
</div>

<div className="mt-[-40px] z-20 flex flex-col items-center gap-6">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
<span className="text-[10px] font-semibold tracking-[0.2em] text-emerald-500 uppercase" id="status-text"></span>
</div>

<div className="text-center opacity-0" id="balance-wrap">
<div className="text-[11px] text-zinc-500 font-medium mb-1 tracking-wide uppercase">
              Total Balance
            </div>
<h1 className="text-[3.5rem] leading-[1] font-light text-white tracking-tighter drop-shadow-2xl">
<span className="text-2xl text-zinc-500 align-top relative top-3 mr-1">
                $
              </span>
<span id="balance-val">0</span>
<span className="text-2xl text-zinc-500">k</span>
</h1>
<div className="flex items-center justify-center gap-1 mt-2">
<iconify-icon className="text-emerald-500" icon="lucide:trending-up" width="12"></iconify-icon>
<span className="text-xs text-emerald-500 font-medium">+12.5%</span>
<span className="text-xs text-zinc-600 ml-1">last 24h</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-3 w-full mt-10 animate-enter delay-500 opacity-0" style={{animationFillMode: 'forwards'}}>
<button className="flex flex-col items-center gap-2 group">
<div className="w-16 h-16 rounded-[20px] action-btn flex items-center justify-center group-hover:border-white/20 transition-colors">
<iconify-icon className="text-zinc-100" icon="lucide:arrow-up-right" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
            Send
          </span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-16 h-16 rounded-[20px] action-btn flex items-center justify-center group-hover:border-white/20 transition-colors">
<iconify-icon className="text-zinc-100" icon="lucide:arrow-down-left" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
            Receive
          </span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-16 h-16 rounded-[20px] action-btn flex items-center justify-center group-hover:border-white/20 transition-colors">
<iconify-icon className="text-zinc-100" icon="lucide:repeat" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
            Swap
          </span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-16 h-16 rounded-[20px] action-btn flex items-center justify-center group-hover:border-white/20 transition-colors">
<iconify-icon className="text-zinc-100" icon="lucide:layout-grid" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
            More
          </span>
</button>
</div>

<div className="mt-10 flex flex-col gap-4 animate-enter delay-700 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="flex justify-between items-end px-1">
<h3 className="text-[13px] font-medium text-zinc-400">Recent Activity</h3>
</div>
<div className="flex flex-col gap-2.5">

<div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors cursor-pointer group">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:border-emerald-500/30 group-hover:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm text-zinc-200 font-medium">
                  Uniswap Protocol
                </span>
<span className="text-[11px] text-zinc-500">Interaction</span>
</div>
</div>
<div className="text-right">
<div className="text-sm text-white font-medium">-0.45 ETH</div>
<div className="text-[10px] text-zinc-600 font-medium">$842.12</div>
</div>
</div>

<div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors cursor-pointer group">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-full bg-emerald-900/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-900/20 transition-colors">
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm text-zinc-200 font-medium">
                  Received USDC
                </span>
<span className="text-[11px] text-zinc-500">From 0x4a...8f</span>
</div>
</div>
<div className="text-right">
<div className="text-sm text-emerald-400 font-medium">
                +1,250.00 USDC
              </div>
<div className="text-[10px] text-zinc-600 font-medium">
                Today, 9:41 AM
              </div>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[360px]" style={{}}>
<div className="glass-panel rounded-2xl h-16 flex items-center justify-evenly px-2 shadow-2xl bg-[#09090b]/80 animate-enter delay-700 opacity-0">
<button className="w-12 h-12 flex flex-col items-center justify-center gap-1 text-white">
<iconify-icon icon="lucide:wallet" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 flex flex-col items-center justify-center gap-1 text-zinc-600 hover:text-zinc-300 transition-colors">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative -top-6 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_25px_-5px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform">
<iconify-icon icon="lucide:scan-line" strokeWidth="2" width="22"></iconify-icon>
</button>
<button className="w-12 h-12 flex flex-col items-center justify-center gap-1 text-zinc-600 hover:text-zinc-300 transition-colors">
<iconify-icon icon="lucide:history" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 flex flex-col items-center justify-center gap-1 text-zinc-600 hover:text-zinc-300 transition-colors">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</nav>


    </>
  );
}
