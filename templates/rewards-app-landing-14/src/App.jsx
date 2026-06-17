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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide icons
      lucide.createIcons();

      let currentTheme = 2; // Default to Velvet
      let isAnimating = false;

      function switchTheme(theme) {
          if (isAnimating || currentTheme === theme) return;
          currentTheme = theme;

          const t1 = document.getElementById('theme-1');
          const t2 = document.getElementById('theme-2');
          const btn1 = document.getElementById('btn-t1');
          const btn2 = document.getElementById('btn-t2');
          const app = document.getElementById('app-container');

          // Reset outro classes if any
          app.classList.remove('is-exiting-t1', 'is-exiting-t2');

          if (theme === 1) {
              t1.classList.remove('hidden');
              t2.classList.add('hidden');

              btn1.classList.replace('bg-transparent', 'bg-pink-600');
              btn1.classList.replace('text-slate-300', 'text-white');
              btn2.classList.replace('bg-amber-600', 'bg-transparent');
              btn2.classList.replace('text-white', 'text-slate-300');

              // Re-trigger animations
              t1.style.animation = 'none';
              t1.offsetHeight; /* trigger reflow */
              t1.style.animation = null;
          } else {
              t2.classList.remove('hidden');
              t1.classList.add('hidden');

              btn2.classList.replace('bg-transparent', 'bg-amber-600');
              btn2.classList.replace('text-slate-300', 'text-white');
              btn1.classList.replace('bg-pink-600', 'bg-transparent');
              btn1.classList.replace('text-white', 'text-slate-300');

              // Re-trigger animations
              t2.style.animation = 'none';
              t2.offsetHeight;
              t2.style.animation = null;
          }
      }

      function triggerOutro() {
          if (isAnimating) return;
          isAnimating = true;

          const app = document.getElementById('app-container');
          const exitClass = currentTheme === 1 ? 'is-exiting-t1' : 'is-exiting-t2';

          app.classList.add(exitClass);

          // Reset after animation
          setTimeout(() => {
              app.classList.remove(exitClass);

              // Force DOM reflow to restart intro animations
              const activeTheme = document.getElementById(`theme-${currentTheme}`);
              const content = activeTheme.innerHTML;
              activeTheme.innerHTML = content;
              lucide.createIcons(); // Re-init icons after replacing HTML

              isAnimating = false;
          }, currentTheme === 1 ? 400 : 500); // Wait for animation duration
      }

      // Init visual state of toggle
      switchTheme(1);
    
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
      

<div className="phone-container" id="app-container">

<div className="absolute inset-0 bg-[#0B051A] font-['Nunito'] overflow-y-auto pb-10" id="theme-1">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/30 rounded-full blur-[80px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-pink-600/20 rounded-full blur-[60px] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-cyan-600/20 rounded-full blur-[60px] pointer-events-none"></div>
<div className="flash-overlay absolute inset-0 bg-white opacity-0 pointer-events-none z-50"></div>

<div className="flex justify-between items-center p-6 relative z-20">
<button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 transition hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]">
<i className="w-5 h-5" data-lucide="info" strokeWidth="1.5"></i>
</button>
<button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 transition hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="modal-content relative z-10 px-4 mt-2 flex flex-col items-center t1-anim-spring">

<div className="text-center mb-6 t1-anim-drop delay-100 flex flex-col items-center">
<div className="w-16 h-16 relative mb-2">

<svg className="svg-icon filter drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]" viewbox="0 0 100 100">
<path d="M10 20 L90 20 L50 65 Z" fill="rgba(45,212,191,0.4)" stroke="#2DD4BF" strokeWidth="3"></path>
<path d="M50 65 L50 90 M30 90 L70 90" stroke="#2DD4BF" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="60" cy="30" fill="#84CC16" r="8" stroke="#4D7C0F" strokeWidth="2"></circle>
<path d="M75 15 L50 40" stroke="#F87171" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<div className="absolute top-0 right-0 w-3 h-3 bg-pink-400 rounded-full blur-[2px] animate-pulse"></div>
</div>
<h1 className="font-['Bungee'] text-4xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-pink-300 to-purple-500 drop-shadow-[0_4px_10px_rgba(219,39,119,0.5)] leading-none uppercase">
              Disco
              <br/>
              Nights
            </h1>
</div>

<div className="w-full max-w-[340px] relative t1-idle-pulse rounded-t-3xl border-t-2 border-x border-pink-500/50 bg-gradient-to-b from-purple-900/80 to-indigo-950/90 backdrop-blur-xl p-5 pt-6 text-center shadow-[0_-10px_30px_rgba(219,39,119,0.2)] overflow-hidden">
<div className="t1-disco-light"></div>
<h2 className="text-cyan-400 font-semibold text-xl tracking-tight mb-4 uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] relative z-20">
              Grand Reward
            </h2>
<div className="flex items-end justify-center gap-2 mb-2 relative z-20">

<div className="flex flex-col items-center reward-icon t1-anim-pop delay-200 w-[28%]">
<div className="w-14 h-14 mb-1 relative t1-idle-coin">
<svg className="svg-icon" viewbox="0 0 100 100">
<ellipse cx="50" cy="65" fill="#B45309" rx="35" ry="15"></ellipse>
<ellipse cx="50" cy="55" fill="#D97706" rx="35" ry="15"></ellipse>
<ellipse cx="50" cy="45" fill="#F59E0B" rx="35" ry="15"></ellipse>
<ellipse cx="50" cy="35" fill="#FBBF24" rx="35" ry="15"></ellipse>
<path d="M30 35 Q50 50 70 35" fill="none" opacity="0.5" stroke="#FFF" strokeWidth="2"></path>
</svg>
</div>
<span className="font-['Bungee'] text-base tracking-tight text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                  500K GC
                </span>
</div>
<span className="text-pink-500 font-semibold text-lg pb-5 t1-anim-pop delay-300">
                +
              </span>

<div className="flex flex-col items-center reward-icon t1-anim-pop delay-400 w-[28%]">
<div className="w-14 h-14 mb-1 relative t1-idle-float">
<svg className="svg-icon" viewbox="0 0 100 100">
<rect fill="#15803D" height="40" rx="4" transform="rotate(-10 50 50)" width="70" x="15" y="30"></rect>
<rect fill="#22C55E" height="40" rx="4" transform="rotate(-5 50 50)" width="70" x="15" y="25"></rect>
<rect fill="#4ADE80" height="40" rx="4" width="70" x="15" y="20"></rect>
<circle cx="50" cy="40" fill="#166534" opacity="0.3" r="10"></circle>
<path d="M20 25 L30 25 M80 25 L70 25 M20 55 L30 55 M80 55 L70 55" stroke="#166534" strokeWidth="2"></path>
</svg>
</div>
<span className="font-['Bungee'] text-base tracking-tight text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                  250 SC
                </span>
</div>
<span className="text-pink-500 font-semibold text-lg pb-5 t1-anim-pop delay-500">
                +
              </span>

<div className="flex flex-col items-center reward-icon t1-anim-pop delay-600 w-[32%] relative">
<span className="absolute -top-3 text-[10px] font-semibold text-amber-300 bg-amber-900/50 px-2 py-0.5 rounded-full uppercase tracking-tight whitespace-nowrap border border-amber-500/50">
                  Max Prize
                </span>
<div className="w-16 h-16 mb-1 relative t1-idle-wheel">
<svg className="svg-icon drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="#1E1B4B" r="45" stroke="#FBBF24" strokeWidth="4"></circle>
<path d="M50 5 L50 50 L95 50 A45 45 0 0 0 50 5" fill="#EC4899"></path>
<path d="M95 50 L50 50 L50 95 A45 45 0 0 0 95 50" fill="#8B5CF6"></path>
<path d="M50 95 L50 50 L5 50 A45 45 0 0 0 50 95" fill="#3B82F6"></path>
<path d="M5 50 L50 50 L50 5 A45 45 0 0 0 5 50" fill="#10B981"></path>
<circle cx="50" cy="50" fill="#FBBF24" r="12"></circle>
<circle cx="50" cy="50" fill="#78350F" r="6"></circle>
</svg>
</div>
<span className="font-['Bungee'] text-base tracking-tight text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                  5K SC
                </span>
</div>
</div>
</div>

<div className="w-full max-w-[340px] bg-indigo-950/90 backdrop-blur-xl rounded-b-3xl p-3 pb-4 space-y-2 border-x border-b border-indigo-800/50 shadow-xl relative z-20">

<div className="flex gap-2 t1-anim-slide delay-300 relative">

<div className="absolute right-[22%] top-[50%] w-4 border-t-2 border-dashed border-indigo-500/50"></div>

<div className="flex-1 bg-indigo-900/60 border border-pink-500/40 rounded-2xl p-3 flex flex-col justify-between relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[t1-disco-sweep_3s_infinite]"></div>
<div className="flex items-center gap-3 mb-3 relative z-10">
<div className="w-12 h-12 rounded-full border-2 border-amber-400/80 bg-gradient-to-br from-amber-600 to-red-900 flex-shrink-0 flex items-center justify-center overflow-hidden">

<svg className="w-10 h-10 opacity-90 drop-shadow-md" viewbox="0 0 100 100">
<path d="M20 40 Q50 20 80 40 L70 80 Q50 95 30 80 Z" fill="#FDE68A"></path>
<path d="M30 40 Q50 50 70 40" fill="none" stroke="#92400E" strokeWidth="4"></path>
<circle cx="40" cy="55" fill="#92400E" r="4"></circle>
<circle cx="60" cy="55" fill="#92400E" r="4"></circle>
<path d="M20 40 Q10 20 25 10" fill="none" stroke="#FDE68A" strokeLinecap="round" strokeWidth="6"></path>
<path d="M80 40 Q90 20 75 10" fill="none" stroke="#FDE68A" strokeLinecap="round" strokeWidth="6"></path>
</svg>
</div>
<p className="text-[13px] leading-tight text-indigo-100 font-semibold">
                    Play SC 50 on Buffalo King Megaways
                  </p>
</div>

<div className="w-full h-4 bg-black/40 rounded-full relative overflow-hidden border border-white/10 p-0.5">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-600 to-purple-500 w-[15%] rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]">
<div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[t1-shimmer-bar_2s_linear_infinite] bg-[length:50%_100%]"></div>
</div>
<span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white/90 tracking-tight z-10">
                    0%
                  </span>
</div>
</div>

<div className="w-[84px] bg-indigo-900/40 border border-indigo-500/30 rounded-2xl p-2 flex flex-col items-center justify-center t1-idle-float z-10">
<div className="w-10 h-10 mb-1 filter drop-shadow-[0_2px_4px_rgba(45,212,191,0.4)]">
<svg className="svg-icon" viewbox="0 0 100 100">
<path d="M15 25 L85 25 L50 65 Z" fill="#2DD4BF" opacity="0.8"></path>
<path d="M10 20 L90 20 L50 65 Z" fill="none" stroke="#5EEAD4" strokeWidth="4"></path>
<path d="M50 65 L50 90 M30 90 L70 90" stroke="#5EEAD4" strokeLinecap="round" strokeWidth="4"></path>
<circle cx="60" cy="35" fill="#A3E635" r="6"></circle>
</svg>
</div>
<span className="text-xs text-indigo-200 font-semibold whitespace-nowrap">
                  1 Martini
                </span>
</div>
</div>

<div className="flex gap-2 t1-anim-slide delay-400 relative">

<div className="absolute right-[11%] -top-3 h-4 border-l-2 border-solid border-indigo-700"></div>
<div className="absolute right-[22%] top-[50%] w-4 border-t-2 border-solid border-indigo-800"></div>
<div className="flex-1 bg-indigo-950/60 border border-indigo-800/50 rounded-2xl p-3 flex items-center justify-center min-h-[88px] relative z-10">
<div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border border-white/5">
<i className="w-5 h-5 text-indigo-500/50" data-lucide="lock" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-[84px] bg-indigo-950/40 border border-indigo-800/30 rounded-2xl p-2 flex flex-col items-center justify-center opacity-60 z-10 filter grayscale-[30%]">
<div className="w-10 h-10 mb-1">
<svg className="svg-icon" viewbox="0 0 100 100">
<path d="M15 25 L85 25 L50 65 Z" fill="#2DD4BF" opacity="0.8"></path>
<path d="M10 20 L90 20 L50 65 Z" fill="none" stroke="#5EEAD4" strokeWidth="4"></path>
<path d="M50 65 L50 90 M30 90 L70 90" stroke="#5EEAD4" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</div>
<span className="text-xs text-indigo-300 font-semibold whitespace-nowrap">
                  1 Martini
                </span>
</div>
</div>

<div className="flex gap-2 t1-anim-slide delay-500 relative">

<div className="absolute right-[11%] -top-3 h-4 border-l-2 border-solid border-indigo-700"></div>
<div className="absolute right-[22%] top-[50%] w-4 border-t-2 border-solid border-indigo-800"></div>
<div className="flex-1 bg-indigo-950/60 border border-indigo-800/50 rounded-2xl p-3 flex items-center justify-center min-h-[88px] relative z-10">
<div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center border border-white/5">
<i className="w-5 h-5 text-indigo-500/50" data-lucide="lock" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-[84px] bg-indigo-950/40 border border-indigo-800/30 rounded-2xl p-2 flex flex-col items-center justify-center opacity-60 z-10 filter grayscale-[30%]">
<div className="w-10 h-10 mb-1">
<svg className="svg-icon" viewbox="0 0 100 100">
<path d="M15 25 L85 25 L50 65 Z" fill="#2DD4BF" opacity="0.8"></path>
<path d="M10 20 L90 20 L50 65 Z" fill="none" stroke="#5EEAD4" strokeWidth="4"></path>
<path d="M50 65 L50 90 M30 90 L70 90" stroke="#5EEAD4" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</div>
<span className="text-xs text-indigo-300 font-semibold whitespace-nowrap">
                  1 Martini
                </span>
</div>
</div>
</div>

<div className="mt-6 flex flex-col items-center gap-3 w-full t1-anim-drop delay-600">
<button className="group relative w-[180px] h-[52px] rounded-full bg-gradient-to-r from-pink-500 to-rose-500 font-semibold text-lg text-white shadow-[0_8px_20px_rgba(225,29,72,0.4)] transition-all duration-200 hover:scale-[1.04] hover:brightness-110 active:scale-95 active:shadow-inner flex items-center justify-center border border-pink-400/50" onclick="triggerOutro()">
<span className="relative z-10 tracking-tight">LET'S GO!</span>
<div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
</button>
<div className="px-5 py-1.5 rounded-full bg-[#CCFF00] text-black font-mono font-semibold text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
              22:36:04
            </div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[#1A0C0E] t2-fabric-bg font-['Lato'] block overflow-y-auto pb-10 hidden" id="theme-2">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-red-900/30 rounded-full blur-[100px] pointer-events-none animate-[t2-bg-parallax_8s_ease-in-out_infinite]"></div>

<div className="flex justify-between items-center p-6 relative z-20">
<button className="w-8 h-8 rounded-full border border-[#D4AF37]/30 bg-black/20 flex items-center justify-center text-[#D4AF37]/80 hover:bg-[#D4AF37]/10 transition hover:border-[#D4AF37]">
<i className="w-5 h-5" data-lucide="info" strokeWidth="1.5"></i>
</button>
<button className="w-8 h-8 rounded-full border border-[#D4AF37]/30 bg-black/20 flex items-center justify-center text-[#D4AF37]/80 hover:bg-[#D4AF37]/10 transition hover:border-[#D4AF37]">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="modal-content relative z-10 px-4 mt-2 flex flex-col items-center t2-anim-curtain">

<div className="text-center mb-6 t2-anim-stamp flex flex-col items-center">
<div className="w-16 h-16 relative mb-2 t2-idle-breathe">

<svg className="svg-icon" viewbox="0 0 100 100">
<path d="M15 25 L85 25 L50 60 Z" fill="rgba(212,175,55,0.15)"></path>
<path d="M10 20 L90 20 L50 60 Z" fill="none" stroke="#D4AF37" strokeWidth="2"></path>
<path d="M50 60 L50 90 M30 90 L70 90" stroke="#D4AF37" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="60" cy="35" fill="#C53030" r="5"></circle>

<path d="M50 20 L65 40" stroke="#D4AF37" strokeLinecap="round" strokeWidth="1"></path>
</svg>
</div>
<h1 className="font-['Playfair_Display'] text-[32px] font-semibold tracking-tight text-[#D4AF37] leading-none uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Disco
              <br/>
              Nights
            </h1>
</div>

<div className="w-full max-w-[340px] relative t2-gold-border rounded-t-lg p-[2px] t2-anim-drift delay-100 shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
<div className="bg-gradient-to-b from-[#3A1017] to-[#1A0C0E] rounded-t-lg p-5 pt-6 text-center relative overflow-hidden h-full border border-black/50">

<div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#D4AF37]/50"></div>
<div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#D4AF37]/50"></div>
<h2 className="font-['Playfair_Display'] text-[#D4AF37] font-semibold text-xl tracking-tight mb-5 uppercase relative z-20">
                Grand Reward
              </h2>
<div className="flex items-end justify-center gap-2 mb-2 relative z-20">

<div className="flex flex-col items-center reward-icon t2-anim-drift delay-200 w-[28%]">
<div className="w-12 h-12 mb-2 relative t2-idle-breathe">
<svg className="svg-icon drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" viewbox="0 0 100 100">
<ellipse cx="50" cy="65" fill="#8B6914" rx="35" ry="12"></ellipse>
<ellipse cx="50" cy="55" fill="#B8860B" rx="35" ry="12"></ellipse>
<ellipse cx="50" cy="45" fill="#DAA520" rx="35" ry="12"></ellipse>
<ellipse cx="50" cy="35" fill="#FFD700" rx="35" ry="12"></ellipse>
<path d="M30 35 Q50 48 70 35" fill="none" opacity="0.4" stroke="#FFF" strokeWidth="1.5"></path>
</svg>
</div>
<span className="font-semibold text-sm tracking-tight text-[#FBF5B7]">
                    500K GC
                  </span>
</div>
<span className="text-[#D4AF37]/50 font-semibold text-sm pb-5 t2-anim-drift delay-300">
                  +
                </span>

<div className="flex flex-col items-center reward-icon t2-anim-drift delay-400 w-[28%]">
<div className="w-14 h-14 mb-1 relative t2-idle-breathe">
<svg className="svg-icon drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" viewbox="0 0 100 100">
<rect fill="#2E4029" height="40" rx="2" stroke="#4A5D23" strokeWidth="2" transform="rotate(-5 50 50)" width="70" x="15" y="30"></rect>
<rect fill="#4A5D23" height="40" rx="2" stroke="#8F9779" strokeWidth="2" width="70" x="15" y="25"></rect>
<circle cx="50" cy="45" fill="#8F9779" opacity="0.4" r="12"></circle>
<circle cx="50" cy="45" fill="none" r="8" stroke="#2E4029" strokeWidth="1"></circle>
<path d="M25 35 L35 35 M75 35 L65 35 M25 55 L35 55 M75 55 L65 55" stroke="#2E4029" strokeWidth="1.5"></path>
</svg>
</div>
<span className="font-semibold text-sm tracking-tight text-[#FBF5B7]">
                    250 SC
                  </span>
</div>
<span className="text-[#D4AF37]/50 font-semibold text-sm pb-5 t2-anim-drift delay-500">
                  +
                </span>

<div className="flex flex-col items-center reward-icon t2-anim-drift delay-600 w-[32%] relative">
<span className="absolute -top-3 text-[9px] font-['Playfair_Display'] font-semibold text-[#1A0C0E] bg-[#D4AF37] px-2 py-0.5 rounded-sm uppercase tracking-tight whitespace-nowrap shadow-md">
                    Max Prize
                  </span>
<div className="w-14 h-14 mb-1 relative t2-idle-breathe">
<svg className="svg-icon drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="#2C161A" r="42" stroke="#D4AF37" strokeWidth="3"></circle>
<path d="M50 8 L50 50 L88 30 Z" fill="#6B2737"></path>
<path d="M88 30 L50 50 L88 70 Z" fill="#8C3B4C"></path>
<path d="M88 70 L50 50 L50 92 Z" fill="#4A1C26"></path>
<path d="M50 92 L50 50 L12 70 Z" fill="#6B2737"></path>
<path d="M12 70 L50 50 L12 30 Z" fill="#8C3B4C"></path>
<path d="M12 30 L50 50 L50 8 Z" fill="#4A1C26"></path>
<circle cx="50" cy="50" fill="#D4AF37" r="10"></circle>
<circle cx="50" cy="50" fill="#1A0C0E" r="4"></circle>
</svg>
</div>
<span className="font-semibold text-sm tracking-tight text-[#FBF5B7]">
                    5K SC
                  </span>
</div>
</div>
</div>
</div>

<div className="w-full max-w-[340px] bg-[#11080A] rounded-b-lg p-4 space-y-3 border-x border-b border-[#D4AF37]/30 shadow-2xl relative z-20">

<div className="flex gap-3 t2-anim-wipe delay-300 relative">

<div className="flex-1 bg-gradient-to-br from-[#2D161A] to-[#1A0C0E] shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] border border-[#D4AF37]/40 rounded-md p-3 flex flex-col justify-between">
<div className="flex items-center gap-3 mb-3">
<div className="w-12 h-12 rounded-sm border border-[#D4AF37]/60 bg-[#1A0C0E] flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">

<svg className="w-9 h-9 opacity-80" viewbox="0 0 100 100">
<path d="M20 50 Q50 30 80 50 L70 80 Q50 90 30 80 Z" fill="#D4AF37"></path>
<path d="M30 50 Q50 60 70 50" fill="none" stroke="#1A0C0E" strokeWidth="3"></path>
<path d="M20 50 Q10 30 25 20" fill="none" stroke="#D4AF37" strokeLinecap="round" strokeWidth="4"></path>
<path d="M80 50 Q90 30 75 20" fill="none" stroke="#D4AF37" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</div>
<p className="text-[14px] leading-snug text-[#E8DCC4] font-semibold font-['Playfair_Display']">
                    Play SC 50 on Buffalo King Megaways
                  </p>
</div>

<div className="w-full h-3 bg-[#0A0506] rounded-full relative overflow-hidden shadow-inner border border-white/5">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8C3B4C] to-[#D4AF37] w-[15%] rounded-full relative">
<div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-sm rounded-full"></div>
</div>
<span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-[#FBF5B7] tracking-wider z-10">
                    0%
                  </span>
</div>
</div>

<div className="w-[84px] bg-[#1A0C0E] border border-[#D4AF37]/20 rounded-md p-2 flex flex-col items-center justify-center shadow-inner relative">

<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-px bg-[#D4AF37]/30"></div>
<div className="w-10 h-10 mb-1 opacity-90 t2-idle-breathe">
<svg className="svg-icon" viewbox="0 0 100 100">
<path d="M15 25 L85 25 L50 60 Z" fill="rgba(212,175,55,0.15)"></path>
<path d="M10 20 L90 20 L50 60 Z" fill="none" stroke="#D4AF37" strokeWidth="2"></path>
<path d="M50 60 L50 90 M30 90 L70 90" stroke="#D4AF37" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs text-[#D4AF37] font-semibold whitespace-nowrap font-['Playfair_Display']">
                  1 Martini
                </span>
</div>
</div>

<div className="flex gap-3 t2-anim-wipe delay-400 relative">
<div className="flex-1 bg-[#150A0B] shadow-[inset_0_4px_10px_rgba(0,0,0,0.9)] border-b border-white/5 rounded-md p-3 flex items-center justify-center min-h-[92px]">
<div className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center bg-black/40">
<i className="w-4 h-4 text-[#D4AF37]/40" data-lucide="lock" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-[84px] bg-[#150A0B] border border-white/5 rounded-md p-2 flex flex-col items-center justify-center opacity-50 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] relative">
<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-px bg-[#D4AF37]/10"></div>
<div className="w-10 h-10 mb-1 filter grayscale">
<svg className="svg-icon" viewbox="0 0 100 100">
<path d="M10 20 L90 20 L50 60 Z" fill="none" stroke="#D4AF37" strokeWidth="2"></path>
<path d="M50 60 L50 90 M30 90 L70 90" stroke="#D4AF37" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs text-[#D4AF37] font-semibold whitespace-nowrap font-['Playfair_Display']">
                  1 Martini
                </span>
</div>
</div>

<div className="flex gap-3 t2-anim-wipe delay-500 relative">
<div className="flex-1 bg-[#150A0B] shadow-[inset_0_4px_10px_rgba(0,0,0,0.9)] border-b border-white/5 rounded-md p-3 flex items-center justify-center min-h-[92px]">
<div className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center bg-black/40">
<i className="w-4 h-4 text-[#D4AF37]/40" data-lucide="lock" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-[84px] bg-[#150A0B] border border-white/5 rounded-md p-2 flex flex-col items-center justify-center opacity-50 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] relative">
<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-px bg-[#D4AF37]/10"></div>
<div className="w-10 h-10 mb-1 filter grayscale">
<svg className="svg-icon" viewbox="0 0 100 100">
<path d="M10 20 L90 20 L50 60 Z" fill="none" stroke="#D4AF37" strokeWidth="2"></path>
<path d="M50 60 L50 90 M30 90 L70 90" stroke="#D4AF37" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs text-[#D4AF37] font-semibold whitespace-nowrap font-['Playfair_Display']">
                  1 Martini
                </span>
</div>
</div>
</div>

<div className="mt-6 flex flex-col items-center gap-4 w-full t2-anim-stamp delay-600">
<button className="group relative w-[200px] h-[52px] rounded-sm bg-gradient-to-b from-[#E5C158] via-[#FBF5B7] to-[#B38728] font-['Playfair_Display'] font-semibold text-lg text-[#1A0C0E] shadow-[0_5px_15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.8)] transition-all duration-300 hover:brightness-110 active:scale-95 active:shadow-inner flex items-center justify-center overflow-hidden border border-[#523A0E]" onclick="triggerOutro()">
<span className="relative z-10 tracking-wide uppercase">
                Let's Go!
              </span>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[t2-gold-shimmer_1.5s_ease-in-out]"></div>
</button>
<div className="px-5 py-2 rounded-sm bg-[#150A0B] border border-[#D4AF37]/40 text-[#D4AF37] font-mono font-semibold text-sm shadow-inner relative overflow-hidden">

<div className="absolute top-1/2 left-0 right-0 h-px bg-black/50"></div>
              22:36:04
            </div>
</div>
</div>
</div>
</div>


    </>
  );
}
