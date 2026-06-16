import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Intersection Observer for Reveal Animations
      (function () {
        const targets = document.querySelectorAll('.reveal');
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              io.unobserve(e.target);
            }
          });
        }, { threshold: 0.1 });

        targets.forEach((el) => io.observe(el));
      })();

      // Magnetic Links
      document.querySelectorAll('.magnetic-link').forEach(link => {
        link.addEventListener('mousemove', e => {
          const rect = link.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          link.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        link.addEventListener('mouseleave', () => {
          link.style.transform = 'translate(0px, 0px)';
        });
      });

      // Command Palette Logic
      const cmdPalette = document.getElementById('cmd-palette');
      const cmdInput = document.getElementById('cmd-input');
      const cmdBackdrop = document.getElementById('cmd-backdrop');
      const cmdResultsContainer = document.getElementById('cmd-results');

      const actions = [
        { id: 'buy', title: 'Buy Evaluation', icon: 'card-linear' },
        { id: 'join', title: 'Join Competition', icon: 'cup-star-linear' },
        { id: 'rules', title: 'Trading Rules & Objectives', icon: 'ruler-linear' },
        { id: 'platforms', title: 'Supported Platforms', icon: 'monitor-smartphone-linear' },
        { id: 'dashboard', title: 'Open Dashboard', icon: 'widget-linear' },
        { id: 'support', title: 'Contact Support', icon: 'help-linear' }
      ];

      let selectedIndex = 0;
      let filteredActions = [...actions];

      window.openCmdPalette = function() {
        if(cmdPalette) {
          cmdPalette.classList.remove('hidden');
          setTimeout(() => cmdInput && cmdInput.focus(), 10);
          if(cmdInput) cmdInput.value = '';
          renderResults('');
        }
      };

      function closeCmdPalette() {
        if(cmdPalette) cmdPalette.classList.add('hidden');
      }

      document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          openCmdPalette();
        }
        if (e.key === 'Escape') closeCmdPalette();

        if (cmdPalette && !cmdPalette.classList.contains('hidden')) {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % filteredActions.length;
            updateSelection();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + filteredActions.length) % filteredActions.length;
            updateSelection();
          }
        }
      });

      if(cmdBackdrop) cmdBackdrop.addEventListener('click', closeCmdPalette);

      if(cmdInput) {
        cmdInput.addEventListener('input', (e) => {
          renderResults(e.target.value);
        });
      }

      function renderResults(query) {
        if(!cmdResultsContainer) return;
        const q = query.toLowerCase();
        filteredActions = actions.filter(a => a.title.toLowerCase().includes(q));
        selectedIndex = 0;
        cmdResultsContainer.innerHTML = '';

        if (filteredActions.length === 0) {
          cmdResultsContainer.innerHTML = '<div class="px-4 py-6 text-center text-[#8f9ab5] text-xs">No actions found.</div>';
          return;
        }

        filteredActions.forEach((item, index) => {
          const el = document.createElement('div');
          el.className = `px-3 py-2.5 text-sm rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${index === selectedIndex ? 'bg-emerald-500/10 text-emerald-300' : 'text-[#8f9ab5] hover:bg-white/5 hover:text-white'}`;
          el.innerHTML = `<iconify-icon icon="solar:${item.icon}" class="text-lg"></iconify-icon> ${item.title}`;
          el.addEventListener('mouseenter', () => {
            selectedIndex = index;
            updateSelection();
          });
          cmdResultsContainer.appendChild(el);
        });
      }

      function updateSelection() {
        if(!cmdResultsContainer) return;
        const items = cmdResultsContainer.children;
        Array.from(items).forEach((item, index) => {
          if (index === selectedIndex) {
            item.className = 'px-3 py-2.5 text-sm rounded-lg flex items-center gap-3 cursor-pointer transition-colors bg-emerald-500/10 text-emerald-300';
          } else {
            item.className = 'px-3 py-2.5 text-sm rounded-lg flex items-center gap-3 cursor-pointer transition-colors text-[#8f9ab5] hover:bg-white/5 hover:text-white';
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="pointer-events-none fixed inset-0 noise-overlay z-0" style={{opacity: '0.03'}}></div>

<div className="bg-gradient-to-r from-[#000402] via-emerald-900/40 to-[#000402] text-center py-2.5 px-4 text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-[0.2em] border-b border-white/5 backdrop-blur-xl relative z-[60] whitespace-nowrap overflow-x-auto hide-scrollbar sm:whitespace-normal">
      GET FUNDED UP TO $200K | KEEP 100% OF PROFITS! | INSTANT FUNDING AVAILABLE
      | NO TIME LIMITS
    </div>

<header className="sticky top-0 z-50 backdrop-blur-3xl bg-[#000402]/75 border-b border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.55),0_1px_0_rgba(16,185,129,0.12)] site-nav-elevated relative">
<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/35 to-transparent pointer-events-none"></div>
<div className="max-w-[85rem] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<img alt="FundedX" className="h-8 md:h-10 w-auto object-contain cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92cb01b4-4f99-4807-b176-35ad848b0721_320w.png"/>
</div>
<nav className="hidden lg:flex items-center gap-8 text-sm text-[#8f9ab5]">
<a className="hover:text-white transition-colors magnetic-link inline-block" href="#">
            Home
          </a>
<a className="hover:text-white transition-colors magnetic-link inline-block" href="#">
            Challenges
          </a>
<a className="flex items-center gap-1 hover:text-white transition-colors magnetic-link inline-block" href="#">
            How It Works
            <iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="hover:text-white transition-colors magnetic-link inline-block" href="#">
            Pricing
          </a>
<a className="hover:text-white transition-colors magnetic-link inline-block" href="#success-stories">
            Success Stories
          </a>
</nav>
<div className="hidden md:flex items-center gap-5">
<button className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-sm text-[#8f9ab5] hover:text-white hover:bg-white/10 transition-colors group" onclick="openCmdPalette()">
<iconify-icon className="text-lg group-hover:text-emerald-400 transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:inline">Search</span>
<kbd className="font-sans font-medium text-xs bg-white/5 border border-white/10 px-1.5 rounded text-white/50 group-hover:text-white/80 transition-colors">
              ⌘K
            </kbd>
</button>
<a className="text-sm font-medium text-[#8f9ab5] hover:text-white transition-colors" href="#">
            Start Challenge
          </a>
<a className="btn-secondary border border-white/5 border-t-white/10 text-white px-5 py-2 rounded-full text-sm font-medium" href="#">
            Dashboard Login
          </a>
<button className="flex items-center gap-1.5 text-sm text-[#8f9ab5] hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
            English
          </button>
</div>
<div className="flex md:hidden items-center">
<button className="text-white p-2 hover:text-emerald-400 transition-colors" onclick="document.getElementById('mobile-menu').classList.remove('hidden')">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<div className="fixed inset-0 z-[100] hidden flex-col bg-[#000402]/95 backdrop-blur-3xl transition-opacity" id="mobile-menu">
<div className="flex items-center justify-between p-4 md:px-6 h-16 md:h-20 border-b border-white/10">
<img alt="FundedX" className="h-8 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92cb01b4-4f99-4807-b176-35ad848b0721_320w.png"/>
<button className="text-white p-2 hover:text-emerald-400 transition-colors" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-6 p-6 overflow-y-auto">
<nav className="flex flex-col gap-4 text-lg font-medium text-white/90">
<a className="hover:text-emerald-400 transition-colors py-2" href="#" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            Home
          </a>
<a className="hover:text-emerald-400 transition-colors py-2" href="#" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            Challenges
          </a>
<a className="hover:text-emerald-400 transition-colors py-2" href="#" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            How It Works
          </a>
<a className="hover:text-emerald-400 transition-colors py-2" href="#" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            Pricing
          </a>
<a className="hover:text-emerald-400 transition-colors py-2" href="#success-stories" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            Success Stories
          </a>
</nav>
<div className="h-px w-full bg-white/10"></div>
<div className="flex flex-col gap-3">
<a className="btn-primary text-center text-white px-5 py-3 rounded-xl text-base font-bold w-full" href="#">
            Start Challenge
          </a>
<a className="btn-secondary text-center border border-white/10 text-white px-5 py-3 rounded-xl text-base font-medium w-full" href="#">
            Dashboard Login
          </a>
<button className="flex items-center justify-center gap-2 bg-white/5 border border-white/5 px-5 py-3 rounded-xl text-base text-[#8f9ab5] hover:text-white hover:bg-white/10 transition-colors w-full mt-2" onclick="openCmdPalette(); document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
            Search
          </button>
</div>
</div>
</div>
<main className="relative z-10">

<section className="relative pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden flex flex-col items-center text-center shimmer reveal">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.35),transparent_60%)] pointer-events-none z-0 mix-blend-screen"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] pointer-events-none mix-blend-overlay"></div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-8 relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md premium-badge">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
          Next-Gen Prop Firm
        </div>
<div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] bg-[#00FF88] opacity-15 blur-[120px] pointer-events-none z-0 rounded-[100%]"></div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.05] mb-6 md:mb-8 relative z-10 max-w-5xl font-bold">
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-emerald-200/50 drop-shadow-sm">
            Turn Capital Into Profits.
            <br/>
            Start Prop Firm Trading.
          </span>
</h1>
<p className="text-lg md:text-xl text-[#8f9ab5] max-w-2xl mb-8 relative z-10 font-normal leading-relaxed">
          Join thousands of funded traders accessing leveraged capital up to $10
          million. Trade with confidence. Keep up to 100% of profits.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
<a className="btn-primary text-white px-8 py-3.5 rounded-full text-sm font-medium w-full sm:w-auto btn-glow-emerald" href="#">
            Get Funded Today
          </a>
<a className="btn-secondary border border-white/5 border-t-white/10 text-white px-8 py-3.5 rounded-full text-sm font-medium w-full sm:w-auto" href="#">
            How It Works
          </a>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 mt-12 relative z-10 bg-gradient-to-r from-[#000a07]/80 via-[#00120a]/90 to-[#000a07]/80 backdrop-blur-2xl border border-white/10 border-t-emerald-500/40 px-6 sm:px-10 py-5 sm:py-6 rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_40px_rgba(16,185,129,0.15)] overflow-hidden w-full sm:w-auto">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none"></div>
<div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex flex-col items-center sm:items-start gap-1.5 relative z-10 text-center sm:text-left">
<span className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">
              Global Reach
            </span>
<span className="text-2xl sm:text-3xl text-white font-bold tracking-tight leading-none">
              150+ Countries
            </span>
</div>
<div className="w-full sm:w-px h-px sm:h-12 bg-white/10 relative z-10"></div>
<div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
<div className="flex -space-x-3">
<img alt="Trader" className="w-10 h-10 rounded-full border-2 border-[#00120a] shadow-[0_0_15px_rgba(16,185,129,0.4)]" src="https://i.pravatar.cc/100?img=33"/>
<img alt="Trader" className="w-10 h-10 rounded-full border-2 border-[#00120a] shadow-[0_0_15px_rgba(16,185,129,0.4)]" src="https://i.pravatar.cc/100?img=47"/>
<img alt="Trader" className="w-10 h-10 rounded-full border-2 border-[#00120a] shadow-[0_0_15px_rgba(16,185,129,0.4)]" src="https://i.pravatar.cc/100?img=12"/>
<div className="w-10 h-10 rounded-full border-2 border-[#00120a] bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-[10px] text-emerald-50 font-bold shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10 relative">
                +15k
              </div>
</div>
<div className="flex flex-col items-center sm:items-start gap-1">
<div className="flex text-emerald-400 text-sm drop-shadow-[0_0_5px_rgba(16,185,129,0.6)]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-[#8f9ab5] font-medium">
                Trusted worldwide
              </span>
</div>
</div>
</div>
<div className="w-full max-w-5xl mx-auto mt-20 relative z-10 reveal" style={{perspective: '1200px'}}>
<div className="relative rounded-t-[2.5rem] border-t border-x border-white/10 bg-gradient-to-b from-white/5 to-transparent p-3 sm:p-5 backdrop-blur-xl shadow-[0_-20px_50px_-20px_rgba(16,185,129,0.2)]" style={{transform: 'rotateX(15deg) translateY(2rem) scale(0.95)', transformOrigin: 'bottom'}}>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
<div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#000402]/80 relative flex flex-col h-[250px] sm:h-[350px] md:h-[450px] shadow-2xl">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none"></div>
<div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/5 bg-white/5 relative z-10">
<div className="flex items-center gap-2 sm:gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10"></div>
</div>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<div className="hidden sm:block w-24 h-5 rounded-full bg-white/5"></div>
<div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
</div>
</div>
<div className="flex-1 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative z-10 overflow-hidden">
<div className="sm:col-span-2 flex flex-col gap-4 sm:gap-6 h-full">
<div className="h-16 sm:h-24 shrink-0 rounded-2xl bg-white/5 border border-white/5 flex items-center px-4 sm:px-6 gap-4 sm:gap-6 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-[3px] sm:border-[4px] border-emerald-500/20 border-t-emerald-400 border-l-emerald-400 rotate-45"></div>
<div className="space-y-2 flex-1">
<div className="w-24 sm:w-32 h-3 sm:h-4 rounded bg-white/20"></div>
<div className="w-16 sm:w-20 h-2 sm:h-3 rounded bg-white/10"></div>
</div>
<div className="hidden sm:block w-20 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20"></div>
</div>
<div className="flex-1 rounded-2xl bg-white/5 border border-white/5 p-4 sm:p-6 relative overflow-hidden group hover:border-emerald-500/30 transition-colors flex flex-col">
<div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-center mb-4 relative z-10">
<div className="w-24 h-4 rounded bg-white/20"></div>
<div className="flex gap-2">
<div className="w-8 h-4 rounded bg-white/10"></div>
<div className="w-8 h-4 rounded bg-white/10"></div>
</div>
</div>
<div className="flex-1 relative mt-2">
<svg className="absolute inset-0 w-full h-full text-emerald-400" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,40 L0,25 C10,20 15,30 25,20 C35,10 40,25 50,15 C60,5 70,10 80,15 C90,20 95,5 100,0 L100,40 Z" fill="currentColor" opacity="0.15"></path>
<path className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" d="M0,25 C10,20 15,30 25,20 C35,10 40,25 50,15 C60,5 70,10 80,15 C90,20 95,5 100,0" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<circle className="animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]" cx="100" cy="0" fill="currentColor" r="1.5"></circle>
</svg>
</div>
</div>
</div>
<div className="hidden sm:flex col-span-1 flex-col gap-6 h-full">
<div className="h-32 shrink-0 rounded-2xl bg-white/5 border border-white/5 p-5 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="w-24 h-3 rounded bg-white/20 relative z-10"></div>
<div className="flex justify-between items-end relative z-10">
<div className="space-y-2">
<div className="w-16 h-6 rounded bg-emerald-400/80"></div>
<div className="w-12 h-3 rounded bg-emerald-400/40"></div>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-emerald-400"></div>
</div>
</div>
</div>
<div className="flex-1 rounded-2xl bg-white/5 border border-white/5 p-5 space-y-4 group hover:border-emerald-500/30 transition-colors overflow-hidden">
<div className="w-32 h-3 rounded bg-white/20 mb-6"></div>
<div className="w-full h-10 rounded-lg bg-white/5 flex items-center px-3 gap-3">
<div className="w-6 h-6 rounded bg-white/10"></div>
<div className="w-20 h-2 rounded bg-white/10"></div>
</div>
<div className="w-full h-10 rounded-lg bg-white/5 flex items-center px-3 gap-3">
<div className="w-6 h-6 rounded bg-emerald-500/20"></div>
<div className="w-16 h-2 rounded bg-emerald-500/40"></div>
</div>
<div className="w-full h-10 rounded-lg bg-white/5 flex items-center px-3 gap-3">
<div className="w-6 h-6 rounded bg-white/10"></div>
<div className="w-24 h-2 rounded bg-white/10"></div>
</div>
<div className="w-full h-10 rounded-lg bg-white/5 flex items-center px-3 gap-3">
<div className="w-6 h-6 rounded bg-white/10"></div>
<div className="w-16 h-2 rounded bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="hidden lg:flex absolute top-32 left-8 xl:left-16 animate-float bg-gradient-to-b from-[#00120a]/90 to-[#000402]/90 backdrop-blur-xl border border-white/10 border-t-emerald-500/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.15)] rounded-[1.5rem] p-4 items-center gap-4 z-20 overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-105 transition-all duration-500 cursor-default">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/20 blur-2xl rounded-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-[#000402] flex items-center justify-center border border-emerald-500/30 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-2xl text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div className="text-left relative z-10 pr-2">
<div className="text-[10px] text-emerald-400/90 font-bold tracking-widest uppercase mb-1">
              Total Payouts
            </div>
<div className="text-xl font-bold text-white tracking-tight leading-none">
              $2.5M+
            </div>
</div>
</div>
<div className="hidden lg:flex absolute bottom-40 right-8 xl:right-16 animate-float bg-gradient-to-b from-[#00120a]/90 to-[#000402]/90 backdrop-blur-xl border border-white/10 border-t-emerald-500/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.15)] rounded-[1.5rem] p-4 items-center gap-4 z-20 overflow-hidden" style={{animationDelay: '-2s'}}>
<div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/20 blur-2xl rounded-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-[#000402] flex items-center justify-center border border-emerald-500/30 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-2xl text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="text-left relative z-10 pr-2">
<div className="text-[10px] text-emerald-400/90 font-bold tracking-widest uppercase mb-1">
              Active Traders
            </div>
<div className="text-xl font-bold text-white tracking-tight leading-none">
              15,000+
            </div>
</div>
</div>
<div className="hidden lg:flex absolute top-44 right-10 xl:right-24 animate-float bg-gradient-to-b from-[#00120a]/90 to-[#000402]/90 backdrop-blur-xl border border-white/10 border-t-emerald-500/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.15)] rounded-[1.5rem] p-4 items-center gap-4 z-20 overflow-hidden" style={{animationDelay: '-4s'}}>
<div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/20 blur-2xl rounded-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-[#000402] flex items-center justify-center border border-emerald-500/30 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-2xl text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="text-left relative z-10 pr-2">
<div className="text-[10px] text-emerald-400/90 font-bold tracking-widest uppercase mb-1">
              Success Rate
            </div>
<div className="text-xl font-bold text-white tracking-tight leading-none">
              87%
            </div>
</div>
</div>
<div className="hidden md:flex absolute bottom-44 left-10 xl:left-24 animate-float bg-gradient-to-b from-[#00120a]/90 to-[#000402]/90 backdrop-blur-xl border border-white/10 border-t-emerald-500/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.15)] rounded-[1.5rem] p-5 items-center gap-4 z-20 overflow-hidden" style={{animationDelay: '-6s'}}>
<div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/20 blur-2xl rounded-full pointer-events-none"></div>
<div className="flex flex-col gap-3 relative z-10">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="Trader" className="w-8 h-8 rounded-full border-2 border-[#00120a] shadow-[0_0_10px_rgba(16,185,129,0.3)]" src="https://i.pravatar.cc/100?img=33"/>
<img alt="Trader" className="w-8 h-8 rounded-full border-2 border-[#00120a] shadow-[0_0_10px_rgba(16,185,129,0.3)]" src="https://i.pravatar.cc/100?img=47"/>
<img alt="Trader" className="w-8 h-8 rounded-full border-2 border-[#00120a] shadow-[0_0_10px_rgba(16,185,129,0.3)]" src="https://i.pravatar.cc/100?img=12"/>
</div>
<div className="flex text-emerald-400 text-sm drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="text-left">
<div className="text-lg font-bold text-white tracking-tight leading-none mb-1">
                4.9/5 Rating
              </div>
<div className="text-[11px] text-[#8f9ab5] font-medium">
                2,400+ Verified Reviews
              </div>
</div>
</div>
</div>
</section>

<section className="max-w-[85rem] mx-auto px-6 -mt-10 mb-12 reveal relative z-20">
<div className="glass rounded-3xl p-4 md:p-5 backdrop-blur-2xl border border-white/10 overflow-hidden relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 opacity-80 mix-blend-screen"></div>
<div className="relative flex items-center gap-3 md:gap-6">
<div className="flex items-center gap-3 shrink-0">
<span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-200 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                Live
              </span>
<span className="text-xs text-[#8f9ab5] hidden md:inline uppercase tracking-widest">
                Market Conditions
              </span>
</div>
<div className="flex-1 overflow-hidden">
<div className="flex gap-6 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
<span className="text-sm text-white/80">
                  FUNDEDX Funded 24 Aug - $2,868 REWARD DUNCAN V
                </span>
<span className="text-sm text-white/20">•</span>
<span className="text-sm text-white/80">
                  FUNDEDX Funded 22 Mar - $4,185 REWARD LEOBERT S
                </span>
<span className="text-sm text-white/20">•</span>
<span className="text-sm text-white/80">
                  FUNDEDX Funded 2 Sept - $4,081 REWARD ROBIN B
                </span>
<span className="text-sm text-white/20">•</span>
<span className="text-sm text-white/80">
                  FUNDEDX Funded 8 Apr - $50,210 REWARD MARCO H
                </span>
<span className="text-sm text-white/20">•</span>
<span className="text-sm text-white/80">
                  FUNDEDX Funded 13 Aug - $10,779 REWARD ANSHV S
                </span>
<span className="text-sm text-white/20">•</span>
<span className="text-sm text-white/80">
                  FUNDEDX Funded 18 Sept - $15,890 REWARD JAMES L
                </span>
<span className="text-sm text-white/20">•</span>
<span className="text-sm text-white/80">
                  FUNDEDX Funded 24 Aug - $2,868 REWARD DUNCAN V
                </span>
<span className="text-sm text-white/20">•</span>
<span className="text-sm text-white/80">
                  FUNDEDX Funded 22 Mar - $4,185 REWARD LEOBERT S
                </span>
<span className="text-sm text-white/20">•</span>
<span className="text-sm text-white/80">
                  FUNDEDX Funded 2 Sept - $4,081 REWARD ROBIN B
                </span>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-4xl mx-auto px-6 mb-32 mt-12 text-center reveal relative" data-element-id="pricing">
<h2 className="text-4xl md:text-6xl tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-emerald-200/50 font-bold">
          Get Funded Now
        </h2>
<p className="text-base text-[#8f9ab5] mb-10 max-w-xl mx-auto">
          Join funded traders worldwide - choose your prop firm trading path to
          access leveraged capital and earn consistent profits
        </p>

<div className="flex sm:inline-flex flex-nowrap sm:flex-wrap overflow-x-auto hide-scrollbar justify-start sm:justify-center gap-1.5 sm:gap-1 bg-white/5 p-1.5 rounded-2xl sm:rounded-full mb-8 md:mb-10 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.35)] backdrop-blur-xl w-full sm:w-auto max-w-full [&amp;&gt;*]:shrink-0">
<button className="px-5 py-2 rounded-full text-xs font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-colors">
            Turbo Challenge
          </button>
<button className="px-5 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30 shadow-sm">
            1 Phase
          </button>
<button className="px-5 py-2 rounded-full text-xs font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-colors">
            2 Phase
          </button>
<button className="px-5 py-2 rounded-full text-xs font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-colors">
            Instant
          </button>
<div className="w-px h-4 bg-white/10 self-center mx-1"></div>
<button className="px-4 py-2 rounded-full text-xs font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-colors">
            $5K
          </button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-colors">
            $10K
          </button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-colors">
            $25K
          </button>
<button className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30 shadow-sm">
            $50K
          </button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-colors">
            $100K
          </button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-colors">
            $200K
          </button>
</div>

<div className="premium-glass-card rounded-[2.75rem] overflow-hidden text-left relative shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.55),0_0_2rem_rgba(16,185,129,0.10)]">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-100 z-10"></div>
<div className="p-5 md:p-8">
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
<span className="text-sm font-medium text-emerald-100 block">
                  Turbo Features
                </span>
<span className="text-xs text-emerald-300/70 mt-1 block">
                  100% profit split
                </span>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
<span className="text-sm font-medium text-white/90 block">
                  Standard Features
                </span>
<span className="text-xs text-[#8f9ab5] mt-1 block">
                  EAs Allowed
                </span>
</div>
</div>
<div className="flex items-center justify-center gap-4 flex-wrap text-xs text-[#8f9ab5]">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                Weekly 80%
              </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                Bi-weekly 80%
              </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                On Demand 90%
              </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                Monthly 100%
              </span>
</div>
</div>
<div className="p-5 md:p-8 bg-[#000a07]/50 border-t border-white/5 relative z-10 overflow-x-auto hide-scrollbar">
<div className="grid grid-cols-4 gap-4 mb-4 text-[10px] md:text-xs font-medium text-[#8f9ab5] uppercase tracking-widest text-center border-b border-white/5 pb-4 min-w-[400px] sm:min-w-0">
<div className="text-left">Objective</div>
<div>Turbo</div>
<div>1 Phase</div>
<div>2 Phase</div>
</div>
<div className="space-y-1 min-w-[400px] sm:min-w-0">
<div className="grid grid-cols-4 gap-4 items-center py-3 border-b border-white/5 hover:bg-white/5 transition-colors px-2 -mx-2 rounded-lg">
<div className="text-sm text-white/80 flex items-center gap-2">
                  Profit Target
                  <iconify-icon className="text-[#8f9ab5]" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="text-center text-sm font-medium flex items-center justify-center gap-1">
                  5%
                </div>
<div className="text-center text-sm font-medium">10%</div>
<div className="text-center text-sm text-[#8f9ab5]">8% / 5%</div>
</div>
<div className="grid grid-cols-4 gap-4 items-center py-3 border-b border-white/5 hover:bg-white/5 transition-colors px-2 -mx-2 rounded-lg">
<div className="text-sm text-white/80 flex items-center gap-2">
                  Max Loss
                  <iconify-icon className="text-[#8f9ab5]" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="text-center text-sm font-medium">4%</div>
<div className="text-center text-sm font-medium">7%</div>
<div className="text-center text-sm font-medium">10%</div>
</div>
<div className="grid grid-cols-4 gap-4 items-center py-3 border-b border-white/5 hover:bg-white/5 transition-colors px-2 -mx-2 rounded-lg">
<div className="text-sm text-white/80 flex items-center gap-2">
                  Daily Loss
                  <iconify-icon className="text-[#8f9ab5]" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="text-center text-sm font-medium">3%</div>
<div className="text-center text-sm font-medium">4%</div>
<div className="text-center text-sm font-medium">5%</div>
</div>
<div className="grid grid-cols-4 gap-4 items-center py-3 hover:bg-white/5 transition-colors px-2 -mx-2 rounded-lg">
<div className="text-sm text-white/80 flex items-center gap-2">
                  Min Days
                  <iconify-icon className="text-[#8f9ab5]" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="text-center text-sm font-medium">None</div>
<div className="text-center text-sm font-medium">5 Days</div>
<div className="text-center text-sm text-[#8f9ab5]">3 Days</div>
</div>
</div>
</div>
<div className="p-5 md:p-8 bg-[#000503]/80 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<span className="text-sm text-[#8f9ab5]">
                Size:
                <span className="text-2xl font-medium text-white block">50k</span>
</span>
<div className="w-px h-8 bg-white/10"></div>
<span className="text-sm text-[#8f9ab5]">
                Price:
                <span className="text-2xl font-medium text-white block">$289</span>
</span>
</div>
<button className="btn-glow-emerald text-[#00120a] px-8 py-3.5 rounded-full text-sm font-semibold w-full md:w-auto shadow-[0_0_20px_rgba(16,185,129,0.40)] hover:scale-[1.02] transition-transform">
              Buy Challenge
            </button>
</div>
</div>
</section>


<section className="max-w-[85rem] mx-auto px-6 mb-24 reveal">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
<div className="glass rounded-2xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-emerald-300" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white/90">
                Personalized Dashboard
              </div>
<div className="text-xs text-[#8f9ab5] mt-0.5">
                Track your progress
              </div>
</div>
</div>
<div className="glass rounded-2xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-emerald-300" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white/90">
                Exclusive Network
              </div>
<div className="text-xs text-[#8f9ab5] mt-0.5">
                Expert trading support
              </div>
</div>
</div>
<div className="glass rounded-2xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-emerald-300" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white/90">
                Proven Results
              </div>
<div className="text-xs text-[#8f9ab5] mt-0.5">Real payouts</div>
</div>
</div>
<div className="glass rounded-2xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-emerald-300" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white/90">
                150+ Countries
              </div>
<div className="text-xs text-[#8f9ab5] mt-0.5">Global access</div>
</div>
</div>
</div>
</section>

<section className="max-w-[85rem] mx-auto px-6 mb-32 reveal" data-element-id="how-it-works">
<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-emerald-200/50 font-bold">
              How Prop Firm Trading Works at FundedX
            </h2>
<p className="text-base text-[#8f9ab5]">
              Four simple steps to become a funded trader and access leveraged
              capital
            </p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-emerald-200 hover:text-white transition-colors px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10" href="#">
            Explore rules
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden group">
<div className="absolute -right-4 -bottom-6 text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-500/20 to-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.1)] pointer-events-none leading-none select-none z-0">
              1
            </div>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-white/80">
<iconify-icon className="text-2xl" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white/90">
              1. Choose Your Challenge
            </h3>
<p className="text-sm text-[#8f9ab5] leading-relaxed">
              Select from Turbo, 1 Phase, 2 Phase, or Instant funding based on
              your trading style and goals.
            </p>
</div>
<div className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden group">
<div className="absolute -right-4 -bottom-6 text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-500/20 to-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.1)] pointer-events-none leading-none select-none z-0">
              2
            </div>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-white/80">
<iconify-icon className="text-2xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white/90">
              2. Pass the Evaluation
            </h3>
<p className="text-sm text-[#8f9ab5] leading-relaxed">
              Demonstrate your trading skills by meeting the profit targets
              while staying within risk parameters.
            </p>
</div>
<div className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden group">
<div className="absolute -right-4 -bottom-6 text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-500/20 to-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.1)] pointer-events-none leading-none select-none z-0">
              3
            </div>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-white/80">
<iconify-icon className="text-2xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white/90">
              3. Get Funded &amp; Earn
            </h3>
<p className="text-sm text-[#8f9ab5] leading-relaxed">
              Receive your funded account within 24 hours. Keep up to 100% of
              all profits and withdraw bi-weekly.
            </p>
</div>
</div>
</section>

<section className="max-w-[85rem] mx-auto px-6 mb-32 reveal">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
<div className="glass rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden">
<div className="absolute -top-32 -right-32 w-[20rem] h-[20rem] bg-emerald-500/10 blur-[5rem] rounded-full"></div>
<h2 className="text-4xl md:text-5xl tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-emerald-200/50 font-bold">
              The FundedX Difference in Leveraged Capital Trading
            </h2>
<p className="text-base text-[#8f9ab5] mb-10 max-w-md">
              Innovative Features, Exceptional Results
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-[1.5rem] p-5 card-inner">
<div className="flex items-center gap-2 text-xs text-emerald-200 font-medium">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                  Instant Access
                </div>
<div className="text-xs text-[#8f9ab5] mt-2">
                  Immediate access to your account
                </div>
</div>
<div className="rounded-[1.5rem] p-5 card-inner">
<div className="flex items-center gap-2 text-xs text-emerald-200 font-medium">
<iconify-icon className="text-lg" icon="solar:shield-linear" strokeWidth="1.5"></iconify-icon>
                  24/7 Support
                </div>
<div className="text-xs text-[#8f9ab5] mt-2">
                  Always ready to assist
                </div>
</div>
<div className="rounded-[1.5rem] p-5 card-inner">
<div className="flex items-center gap-2 text-xs text-emerald-200 font-medium">
<iconify-icon className="text-lg" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
                  Trading Environment
                </div>
<div className="text-xs text-[#8f9ab5] mt-2">
                  Forex, Indices, Commodities, Crypto, Stocks, Bonds
                </div>
</div>
<div className="rounded-[1.5rem] p-5 card-inner">
<div className="flex items-center gap-2 text-xs text-emerald-200 font-medium">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                  Superior Leverage
                </div>
<div className="text-xs text-[#8f9ab5] mt-2">
                  Maximize potential (1:50)
                </div>
</div>
</div>
</div>
<div className="glass rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden">
<div className="absolute -bottom-32 -left-32 w-[20rem] h-[20rem] bg-emerald-500/10 blur-[5rem] rounded-full"></div>
<div className="flex items-start justify-between gap-4 mb-8">
<div>
<div className="text-xs text-[#8f9ab5] uppercase tracking-widest mb-1">
                  Risk dashboard
                </div>
<div className="text-2xl font-medium tracking-tight text-white/90">
                  Stay inside limits
                </div>
</div>
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-200 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Live
              </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
<div className="rounded-[1.25rem] md:rounded-[1.5rem] p-5 md:p-6 card-inner">
<div className="text-xs text-[#8f9ab5]">Daily loss</div>
<div className="text-3xl font-medium tracking-tight mt-1 text-white/90">
                  2.1%
                </div>
<div className="mt-4 h-1.5 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[42%] bg-gradient-to-r from-emerald-500 to-emerald-300"></div>
</div>
<div className="text-xs text-[#8f9ab5] mt-3">42% of limit</div>
</div>
<div className="rounded-[1.25rem] md:rounded-[1.5rem] p-5 md:p-6 card-inner">
<div className="text-xs text-[#8f9ab5]">Max loss</div>
<div className="text-3xl font-medium tracking-tight mt-1 text-white/90">
                  4.7%
                </div>
<div className="mt-4 h-1.5 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[47%] bg-gradient-to-r from-emerald-500 to-emerald-300"></div>
</div>
<div className="text-xs text-[#8f9ab5] mt-3">47% of limit</div>
</div>
</div>
<div className="rounded-[1.25rem] md:rounded-[1.5rem] p-5 md:p-6 card-inner">
<div className="flex items-center justify-between gap-4 mb-4">
<div className="flex items-center gap-2 text-xs text-emerald-200 font-medium">
<iconify-icon className="text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                  Guardrails
                </div>
<span className="text-xs text-[#8f9ab5]">Transparent rules</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl p-4 bg-white/5 border border-white/5">
<div className="text-xs font-medium text-white/80">Min days</div>
<div className="text-xs text-[#8f9ab5] mt-1">3 days</div>
</div>
<div className="rounded-xl p-4 bg-white/5 border border-white/5">
<div className="text-xs font-medium text-white/80">
                    Objectives
                  </div>
<div className="text-xs text-[#8f9ab5] mt-1">Clear targets</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[85rem] mx-auto px-6 mb-32 reveal" data-element-id="platform-compare">
<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-emerald-200/50 font-bold">
              Supported Platforms
            </h2>
<p className="text-base text-[#8f9ab5]">
              Trade seamlessly across the most powerful and reliable platforms
              in the industry. All accounts are swap-free.
            </p>
</div>
<div className="flex items-center gap-2 text-xs text-[#8f9ab5] bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
<iconify-icon className="text-base" icon="solar:monitor-smartphone-linear" strokeWidth="1.5"></iconify-icon>
            Web • Desktop • Mobile
          </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden group">
<iconify-icon className="absolute -right-6 -bottom-6 text-[10rem] text-emerald-500/[0.05] drop-shadow-[0_0_30px_rgba(16,185,129,0.2)] pointer-events-none rotate-[-15deg] z-0 transition-transform duration-700 group-hover:rotate-[-5deg] group-hover:scale-110" icon="solar:chart-square-bold-duotone"></iconify-icon>
<div className="flex items-center justify-between mb-4">
<div className="text-xl font-medium tracking-tight text-white/90">
                TradeLocker
              </div>
<span className="text-xs text-emerald-200 font-medium px-2.5 py-1 rounded bg-white/5 border border-white/10">
                Charts-first
              </span>
</div>
<p className="text-sm text-[#8f9ab5] mb-6 min-h-[3rem]">
              Built for modern traders with advanced charting, featuring the
              tightest spreads on .pro account type.
            </p>
<ul className="space-y-3 text-sm text-white/80">
<li className="flex items-center gap-2.5">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Tightest Spreads
              </li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Advanced Charting
              </li>
</ul>
</div>
<div className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden group">
<iconify-icon className="absolute -right-6 -bottom-6 text-[10rem] text-emerald-500/[0.05] drop-shadow-[0_0_30px_rgba(16,185,129,0.2)] pointer-events-none rotate-[-15deg] z-0 transition-transform duration-700 group-hover:rotate-[-5deg] group-hover:scale-110" icon="solar:graph-bold-duotone"></iconify-icon>
<div className="flex items-center justify-between mb-4">
<div className="text-xl font-medium tracking-tight text-white/90">
                Platform 5
              </div>
<span className="text-xs text-emerald-200 font-medium px-2.5 py-1 rounded bg-white/5 border border-white/10">
                Classic
              </span>
</div>
<p className="text-sm text-[#8f9ab5] mb-6 min-h-[3rem]">
              The industry standard for algorithmic and manual trading with raw
              spreads available.
            </p>
<ul className="space-y-3 text-sm text-white/80">
<li className="flex items-center gap-2.5">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Raw Spreads
              </li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Supports $400K &amp; $800K
              </li>
</ul>
</div>
<div className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden group">
<iconify-icon className="absolute -right-6 -bottom-6 text-[10rem] text-emerald-500/[0.05] drop-shadow-[0_0_30px_rgba(16,185,129,0.2)] pointer-events-none rotate-[-15deg] z-0 transition-transform duration-700 group-hover:rotate-[-5deg] group-hover:scale-110" icon="solar:radar-bold-duotone"></iconify-icon>
<div className="flex items-center justify-between mb-4">
<div className="text-xl font-medium tracking-tight text-white/90">
                cTrader
              </div>
<span className="text-xs text-emerald-200 font-medium px-2.5 py-1 rounded bg-white/5 border border-white/10">
                Modern
              </span>
</div>
<p className="text-sm text-[#8f9ab5] mb-6 min-h-[3rem]">
              Premium trading platform with advanced order types and Level II
              pricing.
            </p>
<ul className="space-y-3 text-sm text-white/80">
<li className="flex items-center gap-2.5">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Level II Pricing
              </li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Supports $400K &amp; $800K
              </li>
</ul>
</div>
</div>
</section>

<section className="max-w-[85rem] mx-auto px-6 mb-32 reveal" data-element-id="risk-callout">
<div className="rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 bg-gradient-to-r from-[#00120a] via-[#000806]/90 to-[#00120a] border border-white/10 border-t-emerald-500/20 backdrop-blur-3xl overflow-hidden relative shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)]">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-100 z-10"></div>
<div className="absolute inset-0 opacity-50 bg-[radial-gradient(40rem_20rem_at_20%_20%,rgba(16,185,129,0.1),transparent_60%)]"></div>
<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
<div className="lg:col-span-2">
<div className="inline-flex items-center gap-2 text-xs text-emerald-200 font-medium px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
<iconify-icon className="text-base" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
                Affiliate Program
              </div>
<h2 className="text-4xl md:text-5xl tracking-tighter text-white/90 font-bold">
                Partner With FundedX
              </h2>
<p className="text-base text-[#8f9ab5] mt-4 max-w-lg">
                Join our affiliate program and earn while helping traders
                achieve their funding goals. Earn competitive commissions on
                every successful referral.
              </p>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
<div className="rounded-2xl p-4 card-inner">
<div className="text-xs text-[#8f9ab5]">Commission</div>
<div className="text-2xl font-medium tracking-tight mt-1 text-white/90">
                    High%
                  </div>
</div>
<div className="rounded-2xl p-4 card-inner">
<div className="text-xs text-[#8f9ab5]">Marketing</div>
<div className="text-2xl font-medium tracking-tight mt-1 text-white/90">
                    Support
                  </div>
</div>
<div className="rounded-2xl p-4 card-inner sm:col-span-1 col-span-2">
<div className="text-xs text-[#8f9ab5]">Performance</div>
<div className="text-2xl font-medium tracking-tight mt-1 text-white/90">
                    Tracking
                  </div>
</div>
</div>
</div>
<div className="rounded-[1.25rem] md:rounded-[2rem] p-5 md:p-6 card-inner border-emerald-500/10">
<div className="flex items-center gap-2 text-xs text-emerald-200 font-medium mb-5">
<iconify-icon className="text-base" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
                Direct Payouts
              </div>
<div className="space-y-3">
<div className="rounded-xl p-4 bg-white/5 border border-white/5">
<div className="text-xs font-medium text-white/90">
                    Digital Wallet
                  </div>
<div className="text-xs text-[#8f9ab5] mt-1">
                    Get paid directly
                  </div>
</div>
<div className="rounded-xl p-4 bg-white/5 border border-white/5">
<div className="text-xs font-medium text-white/90">
                    Reward cycle
                  </div>
<div className="text-xs text-emerald-400 mt-1">
                    Eligible next week
                  </div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
</div>
</section>


<section className="max-w-[85rem] mx-auto px-6 mb-32 reveal">
<div className="bg-gradient-to-r from-[#03160f] via-[#000b08]/90 to-[#03160f] border border-white/12 border-t-emerald-500/25 rounded-[1.5rem] md:rounded-[2.75rem] p-8 md:p-14 backdrop-blur-3xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 shadow-[0_3rem_7rem_-2rem_rgba(0,0,0,0.85)] text-center lg:text-left relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-100 z-10"></div>
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.2),transparent_70%)]"></div>
<div className="max-w-xl relative z-10">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-4 text-white/90 font-bold">
              Ready to run it like a pro?
            </h2>
<p className="text-base text-[#8f9ab5]">
              Pick a challenge, follow the objectives, and trade with structure.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto relative z-10">
<a className="btn-primary text-white px-8 py-3.5 rounded-full text-sm font-medium w-full sm:w-auto" href="#">
              Buy Evaluation
            </a>
<a className="btn-secondary border border-white/10 text-white px-8 py-3.5 rounded-full text-sm font-medium w-full sm:w-auto" href="#">
              View Rules
            </a>
</div>
<div className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
<div className="w-full h-full relative animate-float">
<div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
<svg className="w-full h-full text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)] opacity-80" style={{transform: 'rotate(15deg)'}} viewbox="0 0 200 200">
<rect fill="none" height="100" rx="20" stroke="currentColor" strokeWidth="2" width="100" x="50" y="50"></rect>
<rect fill="none" height="100" opacity="0.5" rx="20" stroke="currentColor" strokeWidth="1" width="100" x="70" y="30"></rect>
<rect fill="none" height="100" opacity="0.5" rx="20" stroke="currentColor" strokeWidth="1" width="100" x="30" y="70"></rect>
</svg>
</div>
</div>
</div>
</section>

<section className="max-w-[85rem] mx-auto px-6 mb-24 reveal" data-element-id="community">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass premium-glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col h-full hover:-translate-y-2 group transition-all duration-500 shadow-lg hover:shadow-[0_1rem_3rem_-1rem_rgba(16,185,129,0.3)]">
<iconify-icon className="text-3xl text-emerald-400 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]" icon="solar:chat-round-dots-bold-duotone" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white/90">
              Discord Community
            </h3>
<p className="text-sm text-[#8f9ab5] mb-8 flex-grow">
              Join our Discord server to get the latest updates, news and
              connect with traders.
            </p>
<a className="inline-flex items-center justify-center w-full bg-gradient-to-b from-white to-white/80 text-[#00120a] px-6 py-3 rounded-full text-sm font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all" href="#">
              Open Discord
            </a>
</div>
<div className="glass premium-glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col h-full hover:-translate-y-2 group transition-all duration-500 shadow-lg hover:shadow-[0_1rem_3rem_-1rem_rgba(16,185,129,0.3)]">
<iconify-icon className="text-3xl text-emerald-400 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]" icon="solar:help-bold-duotone" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white/90">
              24/7 Support
            </h3>
<p className="text-sm text-[#8f9ab5] mb-8 flex-grow">
              We provide customer support around the clock in multiple
              languages.
            </p>
<a className="inline-flex items-center justify-center w-full btn-secondary border border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium hover:border-white/20 transition-all hover:bg-white/5" href="#">
              Talk to support
            </a>
</div>
<div className="glass premium-glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col h-full hover:-translate-y-2 group transition-all duration-500 shadow-lg hover:shadow-[0_1rem_3rem_-1rem_rgba(16,185,129,0.3)]">
<iconify-icon className="text-3xl text-emerald-400 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]" icon="solar:letter-bold-duotone" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white/90">
              Newsletter
            </h3>
<p className="text-sm text-[#8f9ab5] mb-6">
              Stay updated with our latest features and rules.
            </p>
<div className="mt-auto">
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#8f9ab5] mb-3 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all shadow-inner" placeholder="Email address" type="email"/>
<button className="w-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-emerald-500/20 hover:text-emerald-200 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                Subscribe
              </button>
</div>
</div>
</div>
</section>

<section className="max-w-[85rem] mx-auto px-6 mb-32 reveal" data-element-id="success-stories" id="success-stories">
<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-emerald-200/50 font-bold">
              Success Stories
            </h2>
<p className="text-base text-[#8f9ab5]">
              Traders who proved their edge and secured firm capital.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-emerald-400/50 flex items-center justify-center text-[#00120a] font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                DM
              </div>
<div>
<div className="text-sm font-medium text-white/90">
                  Danielle Millar
                </div>
<div className="text-xs text-[#8f9ab5]">Sydney, Australia</div>
<div className="text-xs text-emerald-400 font-semibold mt-0.5">
                  $7,080.86 Payout
                </div>
</div>
</div>
<p className="text-sm text-[#8f9ab5] leading-relaxed flex-1">
              "My name is Danielle Millar and I'm from Sydney, Australia. I've
              been in the trading space for just over a year and a half now and
              it took me almost a full year to pass my challenge. Throughout
              that entire journey FundedX has played a huge role. I've never had
              any issues with the platform and the live support team has always
              been super helpful whenever I've needed anything!"
            </p>
</div>
<div className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-emerald-400/50 flex items-center justify-center text-[#00120a] font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                DD
              </div>
<div>
<div className="text-sm font-medium text-white/90">Dev Dahiya</div>
<div className="text-xs text-[#8f9ab5]">Thailand</div>
<div className="text-xs text-emerald-400 font-semibold mt-0.5">
                  $6,042.94 Payout
                </div>
</div>
</div>
<p className="text-sm text-[#8f9ab5] leading-relaxed flex-1">
              "FundedX was completely different from other firms - perfect
              leverage, transparent rules, and flexible conditions that suited
              every trading style. For the first time, I felt welcomed into the
              trading space instead of restricted by it. FundedX didn't make me
              adapt to their rules: they built a platform that worked with my
              strategy."
            </p>
</div>
<div className="glass rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-emerald-400/50 flex items-center justify-center text-[#00120a] font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                JT
              </div>
<div>
<div className="text-sm font-medium text-white/90">
                  James Thompson
                </div>
<div className="text-xs text-[#8f9ab5]">London, UK</div>
<div className="text-xs text-emerald-400 font-semibold mt-0.5">
                  $156,000 Payout
                </div>
</div>
</div>
<p className="text-sm text-[#8f9ab5] leading-relaxed flex-1">
              "The Turbo challenge is perfect for experienced traders. Fast,
              clean, and the 100% profit split is exactly what I needed. Hit my
              first payout within 3 weeks of passing the evaluation."
            </p>
</div>
</div>
</section>

<section className="max-w-[85rem] mx-auto px-6 mb-32 reveal" data-element-id="about-us">
<div className="glass rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-14 relative overflow-hidden">
<div className="absolute -top-32 -right-32 w-[20rem] h-[20rem] bg-emerald-500/10 blur-[5rem] rounded-full pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div>
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-emerald-200/50 font-bold">
                About FundedX
              </h2>
<p className="text-base text-[#8f9ab5] mb-6 leading-relaxed">
                We built FundedX because we were tired of trading with firms
                that stacked the odds against us. Our mission is to provide an
                ecosystem where profitable traders can actually scale their
                capital with zero friction.
              </p>
<p className="text-base text-[#8f9ab5] leading-relaxed">
                Headquartered in the UK, we've partnered with industry-leading
                liquidity providers and platforms to ensure our traders get
                institutional-grade execution on every trade.
              </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="card-inner rounded-[1.5rem] p-6 text-center border border-white/5">
<div className="text-3xl font-medium text-white/90 mb-1">150+</div>
<div className="text-xs text-[#8f9ab5]">Countries Served</div>
</div>
<div className="card-inner rounded-[1.5rem] p-6 text-center border border-white/5">
<div className="text-3xl font-medium text-white/90 mb-1">$50M+</div>
<div className="text-xs text-[#8f9ab5]">Payouts Processed</div>
</div>
<div className="card-inner rounded-[1.5rem] p-6 text-center border border-white/5">
<div className="text-3xl font-medium text-white/90 mb-1">24/7</div>
<div className="text-xs text-[#8f9ab5]">Global Support</div>
</div>
<div className="card-inner rounded-[1.5rem] p-6 text-center border border-white/5">
<div className="text-3xl font-medium text-white/90 mb-1">
                  Top Tier
                </div>
<div className="text-xs text-[#8f9ab5]">Liquidity</div>
</div>
</div>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.07] z-0 flex items-center justify-center">
<svg className="w-full h-full text-emerald-500 animate-[spin_120s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="currentColor" stroke-dasharray="2 4" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" fill="none" r="35" stroke="currentColor" strokeWidth="0.2"></circle>
<path d="M50,2 A48,48 0 0,1 50,98 A48,48 0 0,1 50,2" fill="none" stroke="currentColor" strokeWidth="0.2" transform="scale(0.5, 1) translate(50, 0)"></path>
<path d="M50,2 A48,48 0 0,1 50,98 A48,48 0 0,1 50,2" fill="none" stroke="currentColor" strokeWidth="0.2" transform="scale(0.8, 1) translate(12.5, 0)"></path>
<path d="M2,50 A48,48 0 0,1 98,50 A48,48 0 0,1 2,50" fill="none" stroke="currentColor" strokeWidth="0.2" transform="scale(1, 0.5) translate(0, 50)"></path>
<path d="M2,50 A48,48 0 0,1 98,50 A48,48 0 0,1 2,50" fill="none" stroke="currentColor" strokeWidth="0.2" transform="scale(1, 0.8) translate(0, 12.5)"></path>
</svg>
</div>
</div>
</section>

<section className="max-w-[85rem] mx-auto px-6 mb-32 reveal" data-element-id="faq">
<div className="text-center mb-16 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[10rem] bg-emerald-500/10 blur-[80px] pointer-events-none rounded-full"></div>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)] relative z-10 premium-badge">
<iconify-icon className="text-base" icon="solar:question-circle-bold-duotone"></iconify-icon>
            Support &amp; Info
          </span>
<h2 className="text-4xl md:text-6xl tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-emerald-200/50 font-bold relative z-10">
            Your Questions, Answered
          </h2>
<p className="text-lg text-[#8f9ab5] max-w-2xl mx-auto relative z-10">
            Everything you need to know about trading with FundedX and scaling
            your capital to the next level.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
<div className="glass premium-glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-[0_1rem_3rem_-1rem_rgba(16,185,129,0.2)]">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[3rem] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20">
<iconify-icon className="text-3xl" icon="solar:user-rounded-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-medium text-white/90 mb-4 tracking-tight group-hover:text-emerald-300 transition-colors">
                Do I need trading experience?
              </h3>
<p className="text-base text-[#8f9ab5] leading-relaxed">
                No. Our program is designed to take both complete beginners and
                struggling intermediate traders to a professional level. We
                start with the fundamentals and build from there.
              </p>
</div>
</div>
<div className="glass premium-glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-[0_1rem_3rem_-1rem_rgba(16,185,129,0.2)]">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[3rem] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20">
<iconify-icon className="text-3xl" icon="solar:shield-check-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-medium text-white/90 mb-4 tracking-tight group-hover:text-emerald-300 transition-colors">
                What are the Instant Funding trading rules?
              </h3>
<p className="text-base text-[#8f9ab5] leading-relaxed">
                Instant Funding accounts have specific restrictions: 15%
                consistency rule, 5% max loss, 3% daily loss, 7 minimum trading
                days, 95% profit split bi-weekly. News trading is allowed
                without restrictions. NO tick scalping, NO weekend holding, NO
                copy trading.
              </p>
</div>
</div>
<div className="glass premium-glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-[0_1rem_3rem_-1rem_rgba(16,185,129,0.2)]">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[3rem] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20">
<iconify-icon className="text-3xl" icon="solar:bolt-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-medium text-white/90 mb-4 tracking-tight group-hover:text-emerald-300 transition-colors">
                What is the Turbo challenge?
              </h3>
<p className="text-base text-[#8f9ab5] leading-relaxed">
                Turbo is our fastest challenge: 5% profit target, 4% max loss,
                3% daily loss, 7-day time limit, and 100% profit split. Copy
                trading is allowed on Turbo accounts. Available in $10K, $25K,
                $50K, and $100K sizes.
              </p>
</div>
</div>
<div className="glass premium-glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-[0_1rem_3rem_-1rem_rgba(16,185,129,0.2)]">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[3rem] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20">
<iconify-icon className="text-3xl" icon="solar:wad-of-money-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-medium text-white/90 mb-4 tracking-tight group-hover:text-emerald-300 transition-colors">
                Is there a refund policy?
              </h3>
<p className="text-base text-[#8f9ab5] leading-relaxed">
                Due to the digital nature of the program and the immediate value
                provided, we do not offer refunds. We are committed to your
                success and will provide the support you need to achieve your
                goals. We only want to work with serious, committed individuals.
              </p>
</div>
</div>
</div>
</section>

<footer className="max-w-[85rem] mx-auto px-4 md:px-6 border-t border-white/5 pt-12 md:pt-16 footer-cove">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-1">
<h4 className="text-sm font-medium text-white/90 mb-4 tracking-tight">
              Company
            </h4>
<ul className="space-y-2.5 text-sm">
<li>
<a className="text-[#8f9ab5] hover:text-emerald-400 transition-colors" href="#">
                  Contact Us
                </a>
</li>
<li>
<a className="text-[#8f9ab5] hover:text-emerald-400 transition-colors" href="#">
                  Objectives
                </a>
</li>
<li>
<a className="text-[#8f9ab5] hover:text-emerald-400 transition-colors" href="#">
                  Affiliates
                </a>
</li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-sm font-medium text-white/90 mb-4 tracking-tight">
              Community
            </h4>
<ul className="space-y-2.5 text-sm">
<li>
<a className="text-[#8f9ab5] hover:text-emerald-400 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-[#8f9ab5] hover:text-emerald-400 transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="text-[#8f9ab5] hover:text-emerald-400 transition-colors" href="#">
                  Brand kit
                </a>
</li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-sm font-medium text-white/90 mb-4 tracking-tight">
              Legal
            </h4>
<ul className="space-y-2.5 text-sm">
<li>
<a className="text-[#8f9ab5] hover:text-emerald-400 transition-colors" href="#">
                  Terms
                </a>
</li>
<li>
<a className="text-[#8f9ab5] hover:text-emerald-400 transition-colors" href="#">
                  Privacy
                </a>
</li>
</ul>
</div>
<div className="col-span-2 lg:col-span-2 space-y-5 text-right flex flex-col items-end">
<div className="grid grid-cols-2 gap-x-6 gap-y-6 text-right justify-end w-full">
<div className="flex flex-col items-end">
<p className="text-sm font-medium text-white/80">
                  Industry Leading
                </p>
<p className="text-xs text-[#8f9ab5] mt-0.5">Payouts</p>
</div>
<div className="flex flex-col items-end">
<p className="text-sm font-medium text-white/80">8,000+</p>
<p className="text-xs text-[#8f9ab5] mt-0.5">Discord Members</p>
</div>
<div className="flex flex-col items-end">
<p className="text-sm font-medium text-white/80">$100M+</p>
<p className="text-xs text-[#8f9ab5] mt-0.5">Funded Capital</p>
</div>
<div className="flex flex-col items-end">
<p className="text-sm font-medium text-white/80">Trusted</p>
<p className="text-xs text-[#8f9ab5] mt-0.5">
                  By Traders Worldwide
                </p>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
<img alt="FundedX" className="h-6 md:h-8 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92cb01b4-4f99-4807-b176-35ad848b0721_320w.png"/>
</div>
<div className="flex items-center gap-4 text-[#8f9ab5]">
<a className="hover:text-emerald-400 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
</a>
<a className="hover:text-emerald-400 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</a>
<a className="hover:text-emerald-400 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="hover:text-emerald-400 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:briefcase-linear"></iconify-icon>
</a>
<a className="hover:text-emerald-400 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:videocamera-linear"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 pb-12 text-xs text-[#8f9ab5] leading-relaxed max-w-5xl">
<p className="font-medium text-white/60 mb-2">
            IMPORTANT INFORMATION &amp; DISCLAIMER
          </p>
<p className="mb-3">
<span className="font-semibold text-white/80">Risk Warning:</span>
            Financial markets involve substantial risk and are not suitable for
            all individuals. CFDs are complex instruments due to leverage and
            their speculative nature. You may lose all your invested capital.
            Past performance is not indicative of future results.
          </p>
<p className="mb-3">
<span className="font-semibold text-white/80">Disclaimer:</span>
            The information on this website is for informational purposes only
            and should not be construed as investment advice. Trading in
            financial markets involves significant risk. You should only trade
            with money you can afford to lose.
          </p>
<p className="mb-3">
<span className="font-semibold text-white/80">
              Company Registration:
            </span>
            Xenon Group Inc. (trading as FundedX) is registered in Saint Lucia
            (Formation Number: 2025-00301). Registered address: Ground Floor,
            The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint
            Lucia.
          </p>
<p className="mb-3">
<span className="font-semibold text-white/80">
              Jurisdiction Notice:
            </span>
            FundedX does not offer services in certain jurisdictions, including
            but not limited to the United States of America (USA), United Arab
            Emirates (UAE), and OFAC sanctioned countries. Users are responsible
            for ensuring compliance with local laws and regulations.
          </p>
<p>
<span className="font-semibold text-white/80">About:</span>
            The website fundedx.com is owned and operated by Xenon Group Inc.,
            registered at Ground Floor, The Sotheby Building, Rodney Village,
            Rodney Bay, Gros-Islet, Saint Lucia, under company number
            2025-00301.
          </p>
</div>
<div className="flex justify-between items-center py-6 border-t border-white/5 text-xs text-[#8f9ab5]">
<div>© 2026 Xenon Group Inc.. All Rights Reserved.</div>
<div className="flex gap-4 opacity-40">
<span>VISA</span>
<span>Mastercard</span>
<span>Crypto</span>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-[100] hidden flex items-start justify-center pt-[15vh] px-4" id="cmd-palette">
<div className="absolute inset-0 bg-[#000806]/40 backdrop-blur-md transition-opacity" id="cmd-backdrop"></div>
<div className="glass relative w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col bg-[#000806]/90 border border-white/10" id="cmd-dialog">
<div className="flex items-center px-4 py-3 border-b border-white/5">
<iconify-icon className="text-emerald-400 text-lg mr-3" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input autocomplete="off" className="w-full bg-transparent border-none text-white text-sm focus:outline-none focus:ring-0 placeholder:text-[#8f9ab5] caret-emerald-400" id="cmd-input" placeholder="Search for actions, rules..." type="text"/>
<div className="text-xs font-medium text-[#8f9ab5] bg-white/5 px-1.5 py-0.5 rounded border border-white/10 ml-3">
            ESC
          </div>
</div>
<div className="max-h-[50vh] overflow-y-auto p-2 hide-scrollbar" id="cmd-results"></div>
</div>
</div>


    </>
  );
}
