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



        // Logic to handle Glass Metamorphosis
        const glass = document.getElementById('glass');
        const liquid = document.getElementById('liquid');
        const stem = document.getElementById('stem');
        const ice = document.getElementById('ice');
        const bgGlow = document.getElementById('bg-glow');
        const nameLabel = document.getElementById('drink-name');
        const tempLabel = document.getElementById('drink-temp');

        // Reset active state styles for buttons
        function resetButtons() {
            document.querySelectorAll('button[onclick^="changeGlass"]').forEach(btn => {
                btn.className = "snap-center shrink-0 px-5 py-3 rounded-2xl bg-zinc-800/50 border border-white/10 text-zinc-400 text-sm font-medium transition-all active:scale-95 hover:bg-white/10 hover:text-white";
            });
        }

        function changeGlass(type) {
            resetButtons();
            
            // Find clicked button and style it active
            const clickedBtn = document.querySelector(`button[onclick="changeGlass('${type}')"]`);
            if(clickedBtn) {
                clickedBtn.className = "snap-center shrink-0 px-5 py-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/50 text-white text-sm font-medium transition-all active:scale-95 shadow-[0_0_15px_rgba(99,102,241,0.3)]";
            }

            if (type === 'gin') {
                // Shape: Coupe / Martini (Wide, curved bottom, stem)
                glass.style.width = '11rem';
                glass.style.height = '9rem';
                glass.style.borderRadius = '0';
                glass.style.borderBottomLeftRadius = '4rem';
                glass.style.borderBottomRightRadius = '4rem';
                
                liquid.className = "absolute bottom-0 w-full h-[75%] bg-gradient-to-t from-indigo-600/90 to-purple-400/70 transition-all duration-700";
                bgGlow.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] transition-colors duration-700";
                
                stem.style.opacity = '1';
                stem.style.height = 'auto';
                ice.style.opacity = '0'; // No ice usually
                
                nameLabel.innerText = "韦斯帕马提尼";
                tempLabel.innerText = "-4°C 最佳饮用";
            } 
            else if (type === 'whiskey') {
                // Shape: Rocks / Old Fashioned (Short, wide, no stem)
                glass.style.width = '10rem';
                glass.style.height = '9rem';
                glass.style.borderRadius = '0';
                glass.style.borderBottomLeftRadius = '1.5rem';
                glass.style.borderBottomRightRadius = '1.5rem';

                liquid.className = "absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-amber-700/90 to-orange-500/60 transition-all duration-700";
                bgGlow.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] transition-colors duration-700";

                stem.style.opacity = '0'; // Hide stem
                setTimeout(() => { stem.style.height = '0'; }, 500);
                ice.style.opacity = '1'; // Show ice
                
                nameLabel.innerText = "烟熏古典鸡尾酒";
                tempLabel.innerText = "加冰 · 口感醇厚";
            } 
            else if (type === 'vodka') {
                // Shape: Highball (Tall, thin, no stem)
                glass.style.width = '6rem';
                glass.style.height = '14rem';
                glass.style.borderRadius = '0';
                glass.style.borderBottomLeftRadius = '1rem';
                glass.style.borderBottomRightRadius = '1rem';

                liquid.className = "absolute bottom-0 w-full h-[85%] bg-gradient-to-t from-cyan-500/80 to-blue-300/40 transition-all duration-700";
                bgGlow.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] transition-colors duration-700";

                stem.style.opacity = '0';
                setTimeout(() => { stem.style.height = '0'; }, 500);
                ice.style.opacity = '1';
                
                nameLabel.innerText = "电光嗨棒";
                tempLabel.innerText = "2°C 冰镇爽口";
            }
            else if (type === 'tequila') {
                 // Shape: Margaritaish (Wide top, narrow bottom) - simulating with clip/borders
                 // Simplifying to a shorter V shape
                glass.style.width = '12rem';
                glass.style.height = '7rem';
                glass.style.borderRadius = '0';
                glass.style.borderBottomLeftRadius = '6rem';
                glass.style.borderBottomRightRadius = '6rem';

                liquid.className = "absolute bottom-0 w-full h-[70%] bg-gradient-to-t from-emerald-600/80 to-lime-400/60 transition-all duration-700";
                bgGlow.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime-500/10 rounded-full blur-[80px] transition-colors duration-700";

                stem.style.opacity = '1';
                stem.style.height = 'auto';
                ice.style.opacity = '0';

                nameLabel.innerText = "香辣帕洛玛";
                tempLabel.innerText = "盐边 · 风味独特";
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
      

<header className="fixed top-0 inset-x-0 z-50 glass-panel border-b border-white/5 px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
<iconify-icon className="text-white" icon="lucide:wine" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white uppercase ml-1">Mood Spirits</span>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="lucide:menu" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</header>

<main className="flex-1 pt-24 pb-24 px-4 space-y-4 max-w-md mx-auto w-full">

<section className="glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[360px] transition-all duration-500">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] transition-colors duration-700" id="bg-glow"></div>

<div className="relative z-10 flex flex-col items-center">

<div className="relative border-x border-b border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm liquid-simulate transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden" id="glass" style={{width: '11rem', height: '9rem', borderBottomLeftRadius: '4rem', borderBottomRightRadius: '4rem'}}>

<div className="absolute bottom-0 w-full h-[75%] bg-gradient-to-t from-indigo-600/90 to-purple-400/70 transition-all duration-700" id="liquid">

<div className="absolute bottom-4 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
<div className="absolute bottom-8 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-75"></div>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white/10 border border-white/20 rounded-lg backdrop-blur-md rotate-12 transition-opacity duration-500 opacity-0" id="ice"></div>

<div className="absolute top-[25%] left-0 w-full h-[1px] bg-white/20 opacity-50"></div>
</div>

<div className="flex flex-col items-center transition-all duration-500 opacity-100" id="stem">
<div className="w-1.5 h-12 bg-white/20"></div>
<div className="w-12 h-1 bg-white/20 rounded-full shadow-[0_-2px_10px_rgba(255,255,255,0.2)]"></div>
</div>
</div>

<div className="mt-8 text-center z-10">
<h2 className="text-3xl text-white font-light tracking-tighter transition-all duration-300" id="drink-name">韦斯帕马提尼</h2>
<div className="flex items-center justify-center gap-2 mt-2 text-xs text-zinc-400 uppercase tracking-widest">
<iconify-icon icon="lucide:thermometer" width="12"></iconify-icon>
<span id="drink-temp">-4°C 最佳饮用</span>
</div>
</div>
</section>

<section className="glass-panel rounded-3xl p-5">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xs text-zinc-400 font-medium uppercase tracking-widest">基酒选择</h3>
<iconify-icon className="text-zinc-500" icon="lucide:archive" width="16"></iconify-icon>
</div>

<div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 snap-x-mandatory">
<button className="snap-center shrink-0 px-5 py-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/50 text-white text-sm font-medium transition-all active:scale-95 hover:bg-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" onclick="changeGlass('gin')">
                    金酒
                </button>
<button className="snap-center shrink-0 px-5 py-3 rounded-2xl bg-zinc-800/50 border border-white/10 text-zinc-400 text-sm font-medium transition-all active:scale-95 hover:bg-white/10 hover:text-white" onclick="changeGlass('whiskey')">
                    威士忌
                </button>
<button className="snap-center shrink-0 px-5 py-3 rounded-2xl bg-zinc-800/50 border border-white/10 text-zinc-400 text-sm font-medium transition-all active:scale-95 hover:bg-white/10 hover:text-white" onclick="changeGlass('vodka')">
                    伏特加
                </button>
<button className="snap-center shrink-0 px-5 py-3 rounded-2xl bg-zinc-800/50 border border-white/10 text-zinc-400 text-sm font-medium transition-all active:scale-95 hover:bg-white/10 hover:text-white" onclick="changeGlass('tequila')">
                    龙舌兰
                </button>
</div>
</section>

<section className="glass-panel rounded-3xl p-5">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="text-xs text-zinc-400 font-medium uppercase tracking-widest mb-1">心情指数</h3>
<div className="text-lg text-white font-light">此刻感觉如何？</div>
</div>
<div className="text-2xl">✨</div>
</div>
<input className="mb-4 touch-none" max="100" min="0" type="range" value="60"/>
<div className="flex justify-between text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
<span>惬意放松</span>
<span>热烈狂欢</span>
</div>
</section>

<div className="grid grid-cols-2 gap-4">
<div className="glass-panel rounded-2xl p-4 flex flex-col justify-between h-28">
<iconify-icon className="text-blue-400" icon="lucide:cloud-rain" width="20"></iconify-icon>
<div>
<div className="text-2xl text-white font-light">19°C</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">上海</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-4 flex flex-col justify-between h-28">
<iconify-icon className="text-pink-400" icon="lucide:music" width="20"></iconify-icon>
<div>
<div className="text-sm text-white font-light leading-tight">爵士电台<br/>频道</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">播放中</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 inset-x-4 z-50 max-w-md mx-auto">
<button className="w-full py-4 rounded-2xl bg-white text-black font-medium text-sm tracking-wide shadow-xl shadow-white/10 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
<iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
            生成特调配方
        </button>
</div>

<div className="fixed inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>


    </>
  );
}
